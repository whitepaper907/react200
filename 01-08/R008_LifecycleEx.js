import React, {Component} from 'react';



class R008_LifecycleEx extends Component{
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
		/* 생성 단계의 생명 주기함수 중 마지막*/
		console.log('4. componentDidMount Call');
		console.log('5.tmp_state : '+this.state.tmp_state);
	    this.setState({tmp_state2 : true}); 
	    /*tmp_state2라는 state 변수에 boolean 유형 데이터 세팅*/
	}

	shouldComponentUpdate(props, state){
		/*
		변경 단계의 생명 주기 함수
		boolean 유형의 데이터를 반환, true 반환 시 render 함수 재호출 
		*/
		console.log('6. shouldComponentUpdate Call / tmp_state2 = '+state.tmp_state2);
		return state.tmp_state2
	}

	render(){
		console.log('3. render Call');
		return ( 
			<h2>[THIS IS shouldComponentUpdate FUCNTION]</h2>
			)
	}
}

export default R008_LifecycleEx;
