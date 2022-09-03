import React, {Component} from 'react';

class R011_SpreadOperator extends Component{

	constructor(props){
		super(props);
		this.state = {};
	}

	componentDidMount(){
		//javascript Array
		var varArray1 = ['num1', 'num2'];
		var varArray2 = ['num3', 'num4'];
		/*배열 합치기 : 인덱스 접근 or concat 함수 이용*/
		var sumVarArr = [varArray1[0], varArray1[1], varArray2[0], varArray2[1]];
		//var sumVarArr = [].concat(varArray1, varArray2);
		console.log('1. sumVarArr : '+sumVarArr);
		//Es6 Array
		/*Es6에서는 전개연산자'...'을 배열명 앞에 붙여 여러 개의 배열을 합칠 수 있다*/
		let sumLetArr = [...varArray1, ...varArray2];
		console.log('2. sumLetArr : '+sumLetArr);
		/*변수 sum1에 sumLetArr[0], sum2에 sumLetArr[1] 대입
		나머지 배열 값은 마지막 전개 연산자 처리된 ...remain 변수에*/
		const [sum1, sum2, ...remain] = sumLetArr;
		console.log('3. sum1 : '+sum1+', sum2 : '+sum2+', remain : '+remain);

		var varObj1 = {key1 : 'val1', key2 : 'val2'};
		var varObj2 = {key2 : 'new2', key3 : 'val3'};
		//javaScript Object
		/*rorcp 2개를 합치려면 assign() 함수 사용 
		첫번째 인자 {}는 함수의 return 값, 뒤 인자에 콤마로 객체를 연결*/
		var sumVarObj = Object.assign({}, varObj1, varObj2);
		console.log('4. sumVarObj : '+JSON.stringify(sumVarObj));
		//Es6 Object
		//...을 객체명 앞에 붙여 여러 개의 객체를 합칠 수 있다. 
		var sumLetObj = {...varObj1, ...varObj2};
		console.log('5. sumLetObj : '+JSON.stringify(sumLetObj));
		// 개별 변수를 넣고 나머지는 전개연산처리된 others 변수 
		var {key1, key3, ...others} = sumLetObj;
		console.log('6. key1 : '+key1+', key3 : '+key3+', others : '+JSON.stringify(others));



	}

	render(){
		return ( 
			<h2>[THIS IS SpreadOperator]</h2>
			)
	}
}

export default R011_SpreadOperator;