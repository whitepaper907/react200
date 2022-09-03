import React, {Component} from 'react';

class ClassPrototype extends Component{

	constructor(props){
		super(props);
		this.state = {};
	}

	componentDidMount(){
		//ES5 prototype
		var ExamCountFunc = (function (){
			function ExamCount(num){
				this.number = num;
			}
			/*함수명.prototype.함수명 으로 선언하면
			객체 외부에서 함수를 실행해 객체 내부에 선언된 함수로 사용 가능*/
			ExamCount.prototype.showNum = function(){
				console.log('1. react_'+this.number);
			};
			return ExamCount;
		}());
		/*ExamCountFunc 함수(객체)를 실행 후 결과값을 cnt에 저장*/
		var cnt = new ExamCountFunc('200');
		/*객체 안에 선언된 showNum() 함수를 실행*/
		cnt.showNum();

		//ES6 class
		class ExamCountClass{
			/*생성자 함수 실행*/
			constructor(num2){
				/*객체 변수에 저장*/
				this.number2 = num2;
			}
			showNum(){
				console.log(`2. react_${this.number2}`);
			}
		}
		/*ExamCountClass 객체를 생성한 후 결과값을 cnt2에 저장
		객체는 class로 선언*/
		var cnt2 = new ExamCountClass('2hundred');
		/*객체 안에 선언된 showNum() 함수를 실행*/
		cnt2.showNum();


	}

	render(){
		return ( 
			<h2>[THIS IS SpreadOperator]</h2>
			)
	}
}

export default ClassPrototype;