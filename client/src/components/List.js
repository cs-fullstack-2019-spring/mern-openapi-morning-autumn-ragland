import React, { Component } from 'react';


//THIS COMPONENT IS NO LONGER USED

class List extends Component {

    constructor(props) {
        super(props);
        this.state={
            data:[],
        };
    }

    componentDidMount() {
        console.log(this.props.match.params.id);
        fetch('https://restcountries.eu/rest/v2/region/' +this.props.match.params.id)
            .then(data => data.json())
            .then(dataJSON => this.setState({data:dataJSON}))
    }

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
                <h1>{this.props.match.params.id.toUpperCase()}</h1>
                <div className={'mapGrid'}>
                    {mapData}
                </div>

            </div>
        );
    }
}

export default List;
