import React, {Component} from 'react';
/*jquery 사용할 때 $기호를 붙여 사용해야한다는 것을 의미*/
import $ from 'jquery'

class R016_Jquery extends Component{

	/*jquery 문법 $('#inputId')로, id 값이 inputID인 input 태그에 접근
	태그의 value값을 input_val에 저장한다.*/
	input_alert = (e) => {
		var input_val = $('#inputId').val();
		alert(input_val);
	}
		

	render(){
		return ( 
			<div>
				<h2>[THIS IS Jquery]</h2>
				<input id="inputId" name="inputName"/>
				{/*버튼을 클릭하면 input_alert 함수호출*/}
				<button id="buttonId" onClick={e => this.input_alert(e)}>Jquery Button</button> 
			</div>
			)
	}
}

export default R016_Jquery;