import React, {Component} from 'react';



class R006_LifecycleEx extends Component{
	static getDerivedStateFromProps(props, state){
		/*
		constructor() 함수 다음으로 실행
		
		*/
		console.log('2. getDerivedStateFromProps Call : ' +props.prop_value);
		return{};
	}	


	constructor(props){
		super(props);/*가장 위에 호출해야함*/
		this.state = {};
		console.log('1. constructor Call');
	}

	render(){
		console.log('3. render Call');
		return ( 
			<h2>[THIS IS CONSTRUCTOR FUCNTION]</h2>
			)
	}
}

export default R006_LifecycleEx;