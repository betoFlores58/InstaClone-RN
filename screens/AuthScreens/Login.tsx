import { Component } from 'react';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity,TextInput,Image } from 'react-native';
import { Dimensions } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateEmail, updatePassword } from '../../actions/user';

export const screenHeight = Dimensions.get('window').height
export const screenWidth = Dimensions.get('window').width

class Login extends React.Component {

render(){
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/background/login.jpg')} style={{position:'absolute',zIndex:-1,width:screenWidth,height:screenHeight}} />
        <View style={{top:80}}>
          <Text style={{fontFamily:'logo-font',fontSize:30,margin:10,marginBottom:10,fontWeight:'bolder',alignSelf:'center'}}>INSTA-CHAFA</Text>
          <TextInput 
            style={{height:50,width:screenWidth*0.92,paddingLeft:8,borderColor:'black',borderWidth:3, backgroundColor:'grey',margin:5,fontFamily:'Arial',fontWeight:'bold'}}
            placeholderTextColor={'white'}
            placeholder={'Ingresa email'}
            value={this.props.user.email}
            onChange={input=>updateEmail(input)}
          />
          <TextInput 
            style={{height:50,width:screenWidth*0.92,paddingLeft:8,borderColor:'black',borderWidth:3, backgroundColor:'grey',margin:5,fontFamily:'Arial',fontWeight:'normal'}}
            placeholderTextColor={'white'}
            secureTextEntry={true}
            placeholder={'Ingresa password'}
            value={this.props.user.password}
            onChange={input=>updatePassword(input)}
          />
          <TouchableOpacity
              style={{margin:10,width:screenWidth*0.3,alignSelf:'center',alignItems:'center', borderRadius:8,padding:10, backgroundColor:'purple'}}
              onPress={() => this.props.onLoginpress()}>
              <Text>Inicia Sesión</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={{alignItems:'center',flexDirection:'row',alignSelf:'center'}}
              onPress={() => this.props.navigation.navigate('Signup')}>
              <Text>No tienes una cuenta.?</Text>&nbsp;
              <Text style={{fontWeight:'bold'}}>Registrate</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gold',
    alignItems: 'center',
  },
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ updateEmail, updatePassword },dispatch)
}

const mapStateToProps = (state) => {
    return{
      user: state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)