(window.webpackJsonpburgerbuilder=window.webpackJsonpburgerbuilder||[]).push([[4],{105:function(e,t,n){e.exports={Auth:"auth_Auth__2q7Qd"}},106:function(e,t,n){"use strict";n.r(t);var a=n(12),r=n(3),i=n(4),u=n(6),o=n(5),l=n(7),c=n(0),s=n.n(c),p=n(15),d=n(20),h=n(96),m=n(33),g=n(41),f=n(105),v=n.n(f),b=n(16),O=n(98);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(n,!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=function(e){function t(){var e,n;Object(r.a)(this,t);for(var i=arguments.length,l=new Array(i),c=0;c<i;c++)l[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(l)))).state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:" E-Mail Address"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touch:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:" Password"},value:"",validation:{required:!0,minLength:6},valid:!1,touch:!1}},isSignup:!0},n.formSubmitHandler=function(e,t){var r=j({},n.state.controls,Object(a.a)({},t,j({},n.state.controls[t],{value:e.target.value,valid:Object(O.a)(e.target.value,n.state.controls[t].validation),touch:!0})));n.setState({controls:r})},n.submitHandler=function(e){e.preventDefault(),n.props.onAuth(n.state.controls.email.value,n.state.controls.password.value,n.state.isSignup)},n.switchButtonHandler=function(){n.setState((function(e){return{isSignup:!e.isSignup}}))},n}return Object(l.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.buildingBurger||"/"===this.props.redirectAuth||this.props.onSetAuthredirectPath()}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.controls)t.push({id:n,config:this.state.controls[n]});var a=t.map((function(t){return s.a.createElement(h.a,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,isValid:!t.config.valid,shouldValidate:t.config.validation.required,touched:t.config.touch,changed:function(n){return e.formSubmitHandler(n,t.id)}})}));this.props.loading&&(a=s.a.createElement(g.a,null));var r=null;return this.props.isAuthenticated&&(r=s.a.createElement(d.a,{to:this.props.redirectAuth})),s.a.createElement("div",{className:v.a.Auth},r,this.props.error?s.a.createElement("p",null,this.props.error.data.error.message):null,s.a.createElement("form",{onSubmit:this.submitHandler},a,s.a.createElement(m.a,{btnType:"Success"},"SUBMIT")),s.a.createElement(m.a,{btnType:"Danger",clicked:this.switchButtonHandler},"SWITCH TO  ",this.state.isSignup?"SIGNIN":"SIGNUP"))}}]),t}(c.Component);t.default=Object(p.b)((function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!==e.auth.token,buildingBurger:e.burgerBuilder.building,redirectAuth:e.auth.authRedirect}}),(function(e){return{onAuth:function(t,n,a){return e(b.b(t,n,a))},onSetAuthredirectPath:function(){return e(b.i("/"))}}}))(E)},96:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(97),u=n.n(i);t.a=function(e){var t=null,n=[u.a.InputElement];switch(e.isValid&&e.shouldValidate&&e.touched&&n.push(u.a.Invalid),e.elementType){case"input":t=r.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{onChange:e.changed,value:e.value}));break;case"textarea":t=r.a.createElement("textarea",Object.assign({className:n.join(" ")},e.elementConfig,{onChange:e.changed,value:e.value}));break;case"select":t=r.a.createElement("select",{className:n.join(" "),onChange:e.changed,value:e.value},e.elementConfig.options.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayValue)})));break;default:t=r.a.createElement("input",Object.assign({className:n.join(" "),onChange:e.changed},e.elementConfig,{value:e.value}))}return r.a.createElement("div",{className:u.a.Input},r.a.createElement("label",{className:u.a.Label},e.label),t)}},97:function(e,t,n){e.exports={Input:"Input_Input__1-gGs",Label:"Input_Label__2FIp2",InputElement:"Input_InputElement__1SMXk",Invalid:"Input_Invalid__2vpVx"}},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(e,t){var n=!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())&&n}if(t.isNumeric){n=/^-?(\d+\.?\d*)$|(\d*\.?\d+)$/.test(e)&&n}if(t.isString){n=e.match(/[a-d]/gi)&&n}if(t.iscombine){n=e.match(/[a-d]/gi)&&n}return n}}}]);
//# sourceMappingURL=4.bfa85669.chunk.js.map