import React, {Component} from 'react';

class R013_ArrowFunction extends Component{

	constructor(props){
		super(props);
		this.state = {
			arrowFuc: 'React200',
			num: 3
		};
	}

	componentDidMount(){
		Function1(1);
		this.Function2(1,1);
		this.Function3(1,3);
		this.Function4();
		this.Function5(0,2,3);

		function Function1(num1){
			return console.log(num1+'. Es5 Function');
		}
	}

	/*function 문자열 대신 '=> 선언
	this는 R013_ArrowFunction 컴포넌트, this로 컴포넌트의 state 변수에 접근해 사용 가능*/
	Function2 = (num1, num2) => {
		let num3 = num1 + num2;
		console.log(num3+'. Arrow Function : '+this.state.arrowFuc);
	}

	/*콜백 함수 내부에서는 컴포넌트에 this로 접근할 수 없기에 접근할 수 있는 변수에 this를 백업
	콜백함수 내부에서 this는 window 객체이기 때문에 this로 state 변수엥 접근하면 undefined 에러 발생*/
	Function3(){
		var this_bind = this;
		setTimeout(function(){
			console.log(this_bind.state.num+'. Es5 Callback Function noBind : ');
			console.log(this.state.arrowFuc);
		},100);
	}

	/*콜백함수에 함수 밖의 this를 bind해주면, this를 컴포넌트로 사용가능 */
	Function4(){
		setTimeout(function(){
			console.log('4. Es5 Callback Function Bind : '+this.state.arrowFuc);
		}.bind(this),100)
	}

	/*화살표 함수에서는 this를 bind해주지 않아도 this를 컴포넌트로 사용가능하다 */
	Function5 = (num1, num2, num3) => {
		const num4 = num1+num2+num3;
		setTimeout(()=>{
			console.log(num4+'. Arrow Callback Function : '+this.state.arrowFuc);
		},100);
	}

	render(){
		return ( 
			<h2>[THIS IS ArrowFunction]</h2>
			)
	}
}

export default R013_ArrowFunction;