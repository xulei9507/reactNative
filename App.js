/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View,Image,ImageBackground,ListView,FlatList} from 'react-native';
import MovieList from './app/Components/MovieList'

var REQUEST_URL =
  "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";

  export default class MovieTalk extends Component{
    constructor(props){
      super(props);
    }
    render(){
      return(
        <View style={[styles.item,styles.itemThree]}>
          <MovieList />

           <Text style={styles.itemText}>3</Text>
         </View>
      )
    }
  }  

// type Props = {};
// export default class MovieTalk extends Component {
//   constructor(props){
//     super(props);
//     // let movies=[{title:'111'},{title:'222'},{title:'333'}];
//     // let movies=[];
//     // 确定显示的数据是否变化
//     // let dataSource=new ListView.DataSource({
//     //   rowHasChanged:(row1,row2)=>row1!==row2
//     // })
//     this.state={
//       // movies:dataSource.cloneWithRows(movies),
//       movies:[],
//       loaded:false
//     }
//     this.fetchData();
//   }
//   fetchData(){

//     fetch(REQUEST_URL)
//       .then(response => response.json())
//       .then(responseData => {
//         console.log('responseData',responseData)
//         // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
//         this.setState({
//           movies: this.state.movies.concat(responseData.movies),
//           loaded: true
//         });
//     console.log(this.state.movies[0].posters.thumbnail)

//       });

//   }
//   renderMovieList(item){
//     console.log(item.item)
//     return(
//       // <Text style={styles.itemText}>{item.title}</Text>
//       <View style={styles.container}>
//          {/* <Text style={styles.itemText}>1</Text> */}

//         <Image
//           source={{ uri: item.item.posters.thumbnail }}
//           style={styles.thumbnail}
//         />
//         <View style={styles.rightContainer}>
//           <Text style={styles.title}>{item.item.title}</Text>
//           <Text style={styles.year}>{item.item.year}</Text>
//         </View>
//       </View>
//     )
//   }
//   render() {
//     // 加载中
//     // if(!this.state.loaded){
//     //   return(
//     //     <View style={styles.container}>
//     //       <View style={styles.loading}>
//     //         <Text>加载中</Text>
//     //       </View>
//     //     </View>
//     //   )
//     // }
//     return (
//       // 创建与应用样式
//       // 行内样式
//       // <View style={{
//       //   backgroundColor:'#eae7ff',
//       //   flex:1
//       // }}>
//       // 视图组件
//       <View style={styles.container}>
//         {/* 背景图像 */}
//         <ImageBackground
//          style={styles.backgroundImage}
//          source={{uri:'http://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}}>
//            <View style={styles.overlay}>
//             <Text style={styles.overlayHeader}>1adsfsd</Text>
//             <Text style={styles.overlaySubHeader}>1adsfsd</Text>
//            </View>
//          </ImageBackground>

//         {/* 自定义显示文本的组件 */}
//         <HeaderText>Welcome</HeaderText>
//         {/* 布局 */}
//         <Text style={[styles.itemText,{fontStyle:'italic'}]}>
//           <Text style={{fontWeight:'600'}}>Welcome</Text> to
//         </Text>

//         <View style={[styles.item,styles.itemOne]}>
//         {/* 文本组件 */}
//           <Text style={styles.itemText}>1</Text>
//         </View>
//         <View style={[styles.item,styles.itemTwo]}>
//           <Text style={styles.itemText}>2</Text>
//         </View>
//         <View style={[styles.item,styles.itemThree]}>
//           <Text style={styles.itemText}>3</Text>
//         </View>

//         {/* 图像组件 */}
//         <Image
//          style={styles.image}
//          source={{uri:'http://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}} />

//         {/* 列表视图 */}
//         {/* <ListView dataSource={this.state.movies} renderRow={movie=><Text style={styles.itemText}>{movie.title}</Text>}/> */}
//         {/* 重新整理列表的显示 */}
//         {/* <ListView dataSource={this.state.movies} renderRow={this.renderMovieList}/> */}
//         <FlatList
//         data={this.state.movies}
//         renderItem={this.renderMovieList}
//         style={styles.list}
//         keyExtractor={item => item.id}
//       />
//         {/* <FlatList data={[{title:'111'},{title:'222'},{title:'333'}]} renderItem={({item})=><Text style={styles.itemText}>{item.title}</Text>}/> */}
         
//       </View>
//     );
//   }
// }

// 自定义显示文本的组件
class HeaderText extends Component{
  render() {
    return(
      <Text style={styles.itemText}>
        {this.props.children}
      </Text>
    )
  }
}

let styles = StyleSheet.create({
  thumbnail: {
    width: 53,
    height: 81
  },
  overlay:{
    backgroundColor:'rgba(0,0,0,0.3)',
    alignItems:'center'
  },
  overlayHeader:{
    fontSize:33,
    fontFamily:'Helvetica Neue',
    fontWeight:'200',
    color:'#eae7ff',
    padding:10,
  },
  overlaySubHeader:{
    fontSize:16,
    fontFamily:'Helvetica Neue',
    fontWeight:'200',
    color:'#eae7ff',
    padding:10,
    paddingTop:0,
  },
  backgroundImage:{
    flex:1,
    resizeMode:'cover',

  },
  image:{
    width:99,
    height:138,
    margin:6
  },
  item:{
    backgroundColor:'#fff',
    borderWidth:1,
    borderColor:'#6435c9',
    margin:6,
    flex:1,
    borderColor:'rgba(100,53,201,0.1)',
    paddingBottom:6,
    marginBottom:6,
  },
  itemOne:{
    // alignSelf:'flex-start',
  },
  itemTwo:{
    // alignSelf:'flex-center',
    // alignSelf:'flex-end',
  },
  itemThree:{
    flex:2
  },
  itemText:{
    fontSize:33,
    fontFamily:'Helvetica Neue',
    fontWeight:'200',
    color:'#6435c9',
    padding:30,
  },
  // title:{
  //   fontSize:26,
  //   color:'#6435c9',
  //   textAlign:'center',
  //   fontStyle:'italic',
  //   letterSpacing:2,
  //   lineHeight:33,
  //   fontFamily:'Helvetica Neue',
  //   fontWeight:'300',
  //   textDecorationLine:'underline',
  //   textDecorationStyle:'dashed'
  // },
  container: {
    // flexDirection:'row',
    flex: 1,
    backgroundColor: '#F5FCFF',
    // marginTop:30,
    // margin:30,
    // borderWidth:1,
    // borderColor:'#6435c9',
    // borderRadius:16,
    // shadowColor:'#6435c9',
    // shadowOpacity:0.6,
    // shadowRadius:2,
    // shadowOffset:{
    //   height:1,
    //   width:0
    // },
    paddingTop:23,
    // 居中
    // justifyContent:'center'
    // alignItems:'flex-start',
  },
  
});
