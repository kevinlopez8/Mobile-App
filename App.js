import { Button, Text, TextInput , View, StyleSheet } from 'react-native';
import { useState } from 'react';


export default function App() {
  
  const [textItem, setTextItem] = useState('')
  const [itemList, setItemList] = useState([])
  
  const onHandleChangeItem = (t) =>{
    setTextItem(t)
  }

  const addItem = ()=>{
    setItemList((currentList)=>[
      ...currentList,
      {id: Math.random().toString(), value: textItem},
    ]);
    setTextItem('');
  };

  const renderItem = ({ item }) =>(
    <View style={styles.items} >
      <Text>{item.value}</Text>
      <Button title='presiona' />
    </View>
  );



  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
        <Button title='Agregar' />
      </View>
      <View>
        <Text style={styles.text}>Item #1</Text>
        <Text style={styles.text}>Item #2</Text>
        <Text style={styles.text}>Item #3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 30,
  },
  input:{
    borderBottomWidth: 1,
    width: 230,
    marginRight: 15, 
  },
  inputContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    paddingBottom:120,
  },
  text:{
    fontSize: 30,
    color: 'purple',
    borderWidth:1,
    padding: 5,
    marginVertical: 15,
  }
});



{/*<View style={styles.inputContainer}>
<TextInput style={styles.input} />
<Button title='Agregar' />
</View>
<View>
<Text style={styles.text}>Item #1</Text>
<Text style={styles.text}>Item #2</Text>
<Text style={styles.text}>Item #3</Text>
</View>*/}