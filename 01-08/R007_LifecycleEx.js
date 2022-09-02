import React, {Component} from 'react';



class R007_LifecycleEx extends Component{
	static getDerivedStateFromProps(props, state){
		console.log('2. getDerivedStateFromProps Call : ' +props.prop_value);
		return{tmp_state:props.prop_value};
	}	


	constructor(props){
		super(props);/*가장 위에 호출해야함*/
		this.state = {};
		console.log('1. constructor Call');
	}

	componentDidMount(){
		/*
		가장 마지막에 실행
		render 함수가 html 코드를 그려준 후 실행됨 
		이벤트 처리, 초기화 등에 가장 많이 사용됨 
		*/
		console.log('4. componentDidMount Call');
		console.log('5.tmp_state : '+this.state.tmp_state);
	}

	render(){
		console.log('3. render Call');
		return ( 
			<h2>[THIS IS COMPONENTDIDMOUNT FUCNTION]</h2>
			)
	}
}

export default R007_LifecycleEx;
