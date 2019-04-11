import React, { Component } from 'react';

class Oceania extends Component {

    constructor(props) {
        super(props);
        this.state={
            data:[],
        };
    }

    //on load render data for the right region
    componentDidMount() {
        console.log(this.props.match.params.id);
        fetch('https://restcountries.eu/rest/v2/region/oceania')
            .then(data => data.json())
            .then(dataJSON => this.setState({data:dataJSON}))
    }

    //structure and render data
    render() {

        var langauges;

        let mapData = this.state.data.map((eachCountry,i) => {

            let total = 0;
            for (langauges in eachCountry.languages){
                total ++
            }

            return(

                <div key={i}>
                    <img src={eachCountry.flag} alt='flag'/>
                    <h2>Name: {eachCountry.name} ({eachCountry.alpha2Code})</h2>
                    <p>Capital: {eachCountry.capital}</p>
                    <p>Primary Language:{eachCountry.languages[0].nativeName} </p>
                    <p>Languages Spoken:{total} </p>
                </div>
            )
        });

        return (
            <div className="App">
                <h1>Oceania</h1>
                <div className={'mapGrid'}>
                    {mapData}
                </div>

            </div>
        );
    }
}

export default Oceania;