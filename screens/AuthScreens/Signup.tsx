import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity,Image,TextInput } from 'react-native';
import { updateEmail, updatePassword, updateUsername, signup } from '../../actions/user';
import { screenWidth, screenHeight } from './Login';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Signup extends React.Component {

    state = {
      repeat:'',
    }
  onLoginPress = () =>{
    if(this.props.user.password == this.state.repeat && this.props.user.username !== '' && this.props.user.email !== '') {
      this.props.signup()
    }else{
      alert('Asegure los datos ingresados')
    }
  }
  render(){
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/background/login.jpg')} style={{position:'absolute',zIndex:-1,width:screenWidth,height:screenHeight}} />
          <View style={{top:80}}>
          <Text style={{fontFamily:'logo-font',fontSize:30,margin:10,marginBottom:10,fontWeight:'bolder',alignSelf:'center'}}>INSTA-CHAFA</Text>
          <TextInput 
            style={{height:50,width:screenWidth*0.92,paddingLeft:8,borderColor:'black',borderWidth:3, backgroundColor:'grey',margin:5,fontFamily:'Arial',fontWeight:'bold'}}
            placeholderTextColor={'white'}
            placeholder={'Crea un username'}
            textContentType='username'
            textContentType='username'
            value={this.props.user.username}
            onChangeText={input=>this.props.updateUsername(input)}
          />
          <TextInput 
            style={{height:50,width:screenWidth*0.92,paddingLeft:8,borderColor:'black',borderWidth:3, backgroundColor:'grey',margin:5,fontFamily:'Arial',fontWeight:'bold'}}
            placeholderTextColor={'white'}
            placeholder={'Ingresa email'}
            textContentType='emailAddress'
            value={this.props.user.email}
            onChangeText={input=>this.props.updateEmail(input)}
          />
          <TextInput 
            style={{height:50,width:screenWidth*0.92,paddingLeft:8,borderColor:'black',borderWidth:3, backgroundColor:'grey',margin:5,fontFamily:'Arial',fontWeight:'normal'}}
            placeholderTextColor={'white'}
            secureTextEntry={true}
            textContentType='password'
            placeholder={'Ingresa password'}
            onChangeText={input=>this.props.updatePassword(input)}
            value={this.props.user.password}
          />
          <TextInput 
            style={{height:50,width:screenWidth*0.92,paddingLeft:8,borderColor:'black',borderWidth:3, backgroundColor:'grey',margin:5,fontFamily:'Arial',fontWeight:'normal'}}
            placeholderTextColor={'white'}
            secureTextEntry={true}
            placeholder={'Ingresa nuevamente tu password'}
            textContentType='password'
            onChangeText={input=>this.setState({repeat: input})}
            value={this.state.repeat}
          />
          <TouchableOpacity
              style={{margin:10,width:screenWidth*0.3,alignSelf:'center',alignItems:'center', borderRadius:8,padding:10, backgroundColor:'purple'}}
              onPress={() => this.onLoginPress()}>
              <Text>Registrate.!</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={{alignItems:'center',flexDirection:'row',alignSelf:'center'}}
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text>Ya tienes una cuenta.?</Text>&nbsp;
              <Text style={{fontWeight:'bold'}}>Inicia sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
  },
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ updateEmail, updatePassword,updateUsername,signup },dispatch)
}

const mapStateToProps = (state) => {
    return{
      user: state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)