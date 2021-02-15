import React, { Component } from 'react'

class SearchForm extends Component {

    render() {
        const { city, country, err } = this.props;
        return (
            <div>
                <form>
                    <div>
                        <h1 className="search-location">Search Location</h1>
                    </div>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="City"
                            name="city"
                            value={city}
                            onChange={(e) => {
                                this.props.setCity(e.target.value.toLowerCase()
                                )
                            }}
                        />
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Country/(Country Code)"
                            name="country"
                            value={country}
                            onChange={(e) => {
                                this.props.setCountry(e.target.value.toLowerCase()
                                )
                            }}
                        />
                        <button onClick={(e) => {
                            e.preventDefault();
                            this.props.submit()
                        }}
                            className="btn btn-danger">Search
                        </button>
                    </div>
                    <div>
                        {
                        err &&
                        <label className=""
                            style={{
                                fontFamily: "sans-serif",
                                color: "red",
                                fontWeight: 'bold',
                                marginLeft: "5px"
                            }}>{err}</label>
                        }
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchForm;