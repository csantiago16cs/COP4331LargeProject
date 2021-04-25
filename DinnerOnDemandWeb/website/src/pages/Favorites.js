import React, {useState, useEffect} from 'react';
import { Card, CardColumns } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner'
import NavBar from '../components/InsideNavBar';

// import { Container } from './styles';

const Favorites = () => 
{
    const [results, setResults] = useState([]);

    useEffect(() =>
    {
        getFavorites();
    }, [])

    const app_name = 'cop4331din';

    const buildPath = (route) => {
        if (process.env.NODE_ENV === 'production') {
            return 'https://' + app_name + '.herokuapp.com/' + route;
        }
        else {
            return 'http://localhost:5000/' + route;
        }
    };

    const getFavorites = async () =>
    {
        // call api/getrecipe
        // Takes in userID
        let userID = JSON.parse(localStorage.getItem('user_data')).userId;

        var js = JSON.stringify({ UserID: userID });

        try {
            const response = await fetch(buildPath('api/getrecipes'),
            {
                method: 'POST',
                body: js,
                headers:
                {
                    'Content-Type': 'application/json'
                }
            });

            var res = JSON.parse(await response.text());

            if (res.found)
                setResults(res.recipes)
            // else

        }
        catch (e) {
            console.log(e.toString());
        }
    }

    return (
        <>
            <div>
                <NavBar/>
                {
                    results.length === 0 ?
                        <Card>
                            <Card.Title>Search up some recipes and favorite them</Card.Title>
                        </Card>
                    :
                        results.map((item, index) =>
                        {
                            return (
                                <CardColumns>
                                    <Card>
                                        <p key={index}>{item.Title}</p>
                                    </Card>
                                </CardColumns>
                            )
                        })
                }
            </div>
        </>
    )
}

export default Favorites;