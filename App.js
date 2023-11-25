import { Text, SafeAreaView, StyleSheet,View,ScrollView,Image,TouchableOpacity } from 'react-native';
import{FlatList} from 'react-native';


const ArrayDados =[
   {Img: require('./assets/gato2.jpg'),Nome:'Bolinha', Tipo:'Branco',Idade:'4'},
   {Img:require('./assets/gato3.jpg'),Nome:'Miojitop',Tipo:'Preto',Idade:'4'},
   {Img:require('./assets/gato1.jpg'),Nome:'Fiuk',Tipo:'Branco/laranja',Idade:'3'},
   {Img:require('./assets/gato4.jpg'),Nome:'Alatin',Tipo:'Cinza',Idade:'1'},
   {Img:require('./assets/gato5.jpg'),Nome:'Robertinho',Tipo:'Branco',Idade:'2',},
  ];


 
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <FlatList
    data={ArrayDados} 
    renderItem = {({item})=> 
    <SafeAreaView>
    <ScrollView>
<View style={styles.label}></View>
    <View style={styles.caixa}>
     <Image style={styles.img} source={item.Img}/>
  
     <Text style={styles.nome}>{item.Nome}</Text>
        <View style={styles.row}>
    <Text style={styles.textoStatus}>Tipo:{item.Tipo}</Text>
    <Text style={styles.textoStatus}>Idade:{item.Idade}</Text>
    </View>
    <TouchableOpacity>
       
    </TouchableOpacity>

    </View>


    </ScrollView>
    </SafeAreaView>
    }
    />
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'#DAC0A3',
  },
  textoStatus:{
    fontSize:20,
    marginRight:10,
  color:'#0F2C59',
  fontWeight:'bold',
  },
  nome:{
 fontSize:35,
 fontWeight:'bold',
    marginTop:10,
  color:'#0F2C59',
  },
  caixa:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#0F2C59',
    borderWidth:8,
    width:300,
    height:400,
    margin:20,
    borderRadius:10,
    padding:18,
    backgroundColor:'#F8F0E5'
  },
  img:{
     borderColor:'#0F2C59',
    borderWidth:2,
    width:250,
    height:250,
  },
  row:{
    flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  }

});
