import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList  } from 'react-native';
import { List, ListItem } from "react-native-elements"; 
import FetchCoinData from './../Actions/FetchCoinData';


class CryptoContainer extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          loading: false,
          data: [],
          page: 1,
          seed: 1,
          error: null,
          refreshing: false,
        };
      }
    componentDidMount() {
        console.log(this.props.FetchCoinData())
        ;
    }

    render() {
        return (
            <View>
           <Text>knlknkn</Text>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer)