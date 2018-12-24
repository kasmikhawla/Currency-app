import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList  } from 'react-native';
import { List, ListItem } from "react-native-elements"; 
import FetchCoinData from './../Actions/FetchCoinData';

class CryptoContainer extends Component {
    componentDidMount() {
        this.props.FetchCoinData()
    }
    render() {
        // console.log("this props data", this.props.data)
        return (
                <FlatList
                    data={this.props.data}
                    renderItem={({item}) =>
                        <View>
                            <Text style={{color:'black'}}>{item.Name}</Text>
                        </View>
                    }

                />
        )
    }
}

function mapStateToProps(state) {
    console.log("state crypto", state.crypto )
    return {
        data: state.crypto.data && state.crypto.data.result.map(el =>( {...el, key: el.CurrencyID}))
    }
}

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer)