import React, { useEffect, useState } from 'react';
import { FlatList, TextInput, View, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

import PageTitle from '../components/PageTitle';
import axios from "axios";
import RecipeCard from '../components/RecipeCard';

import * as eva from '@eva-design/eva';
import { Layout, Text, CheckBox, Input, Icon, Spinner } from '@ui-kitten/components';

// import { Container } from './styles';

const APIKEY = '7bfd691826fd4d31834f7728f67c9b3e';

const SearchPage = () => {
    // const navigation = useNavigation();
    const [ingredients, setIngredients] = useState("");
    const [results, setResult] = useState([]);
    const [loading, setLoading] = useState(true);

    const app_name = 'cop4331din';

    function buildPath(route) {
        if (process.env.NODE_ENV === 'production') {
            return 'https://' + app_name + '.herokuapp.com/' + route;
        }
        else {
            return 'http://10.0.2.2:5000/' + route;
        }
    };

    const search = async () => {
        setLoading(!loading)

        // Call searchrecipe api
        var js = JSON.stringify({ Ingredients: ingredients, Limit: "10" });

        try {
            const response = await fetch(buildPath('api/searchrecipe'),
            {
                method: 'POST',
                body: js,
                headers:
                {
                    'Content-Type': 'application/json'
                }
            });

            var res = JSON.parse(await response.text());

            if (!res.found) {
                alert(res.error);
            }
            else {
                setResult(res.obj)
                setLoading(!loading)
            }
        }
        catch (e) {
            alert(e.toString());
        }
    };

    const renderResults = ({ item }) => {
        return (
            <RecipeCard item={item} custom={false} />
        )
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView behavior={"height"} style={{ flex: 1 }}>
                <Layout style={{ flex: 1 }}>
                    <View style={styles.body}>
                        <View style={{ flexDirection: "column", alignItems: "center", paddingTop:10 }}>
                            <Input
                                placeholder={"Search for Ingredients/Recipes here"}
                                value={ingredients}
                                onChangeText={setIngredients}
                                onSubmitEditing={() => ingredients !== "" ? search() : null}
                                returnKeyType='done'
                                caption={"Seperate each ingrediant with a comma \nPress enter when done"}
                                style={{ width: "80%", marginVertical: 10 }}
                            />
                        </View>
                        {
                            loading ?
                                <View style={{alignItems: "center", alignSelf: "center", width: "80%", marginTop: 50}}>
                                    <Text style={{ textAlign: "center", justifyContent: "center", marginBottom: 25}}>
                                        Search for ingredients/recipes first then the results will be displayed here.
                                    </Text>

                                    <Spinner size='giant' status='danger' />
                                </View>
                                :
                                <FlatList
                                    data={results}
                                    keyExtractor={(item, index) => index.toString()}
                                    numColumns={1}
                                    renderItem={renderResults}
                                    ListFooterComponent={<View style={{ height: 160 }} />}
                                />
                        }
                    </View>
                </Layout>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        width: '100%',
        height: '100%',
        flex: 1,
    },
    body: {
        flex: 11,
        alignItems: 'center',
        width: '100%',
    },
    button: {
        marginTop: 20,
        width: '85%',
    },
});

export default SearchPage;