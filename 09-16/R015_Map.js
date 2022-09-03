import React, {Component} from 'react';

class R015_Map extends Component{

	componentDidMount(){
		/*기존 배열에서 map()함수를 사용해 순서대로 하나씩 요소에 접근해 가져옴
		이때마다 콜백함수 실행, 가져온 값을 그대로 반환(x => x), 순서대로 쌓는다
		한번에 새로운 배열(Map_newArr)에 저장*/
		var Map_Arr = [3, 2, 8, 8];
		var Map_newArr = Map_Arr.map(x => x);
		console.log("1. Map_newArr : ["+Map_newArr+"]");

		let Map_mulitiArr = Map_Arr.map(x => x*2);
		console.log("2. Map_mulitiArr : ["+Map_mulitiArr+"]");

		/*배열안에 객체 생성*/
		var ObjArray = [{key: 'react', value:'200'}, 
						{key: '리액트', value: 'TwoHundred'}];
		/*배열안에 객체를 순서대로 가져와 콜백함수 실행
		변수 obj에 저장, index는 기존배열의 인덱스와 동일*/
		let Map_objArr = ObjArray.map((obj,index) => {
			/*순서대로 출력*/
			console.log((index+3)+". obj : "+JSON.stringify(obj))
			var Obj = {};
			Obj[obj.key] = obj.value;
			return Obj;
		});
		console.log("5. Map_objArr : ["+JSON.stringify(Map_objArr)+"]");
	}

	render(){
		return ( 
			<h2>[THIS IS MAP]</h2>
			)
	}
}

export default R015_Map;