// Module ID: 4986
// Function ID: 42740
// Name: pnpm_getKeyboardAnimationConfigsTs1
// Dependencies: []

// Module 4986 (pnpm_getKeyboardAnimationConfigsTs1)
/* worklet (recovered source) */ function pnpm_getKeyboardAnimationConfigsTs1(easing,duration){const{Easing}=this.__closure;switch(easing){case'easeIn':return{easing:Easing.in(Easing.ease),duration:duration};case'easeOut':return{easing:Easing.out(Easing.ease),duration:duration};case'easeInEaseOut':return{easing:Easing.inOut(Easing.ease),duration:duration};case'linear':return{easing:Easing.linear,duration:duration};case'keyboard':return{damping:500,stiffness:1000,mass:3,overshootClamping:true,restDisplacementThreshold:10,restSpeedThreshold:10};}}
pnpm_getKeyboardAnimationConfigsTs1.__closure = { Easing: arg1(arg6[0]).Easing };
pnpm_getKeyboardAnimationConfigsTs1.__workletHash = 10639588577824;
pnpm_getKeyboardAnimationConfigsTs1.__initData = { code: "function pnpm_getKeyboardAnimationConfigsTs1(easing,duration){const{Easing}=this.__closure;switch(easing){case'easeIn':return{easing:Easing.in(Easing.ease),duration:duration};case'easeOut':return{easing:Easing.out(Easing.ease),duration:duration};case'easeInEaseOut':return{easing:Easing.inOut(Easing.ease),duration:duration};case'linear':return{easing:Easing.linear,duration:duration};case'keyboard':return{damping:500,stiffness:1000,mass:3,overshootClamping:true,restDisplacementThreshold:10,restSpeedThreshold:10};}}" };
arg5.getKeyboardAnimationConfigs = pnpm_getKeyboardAnimationConfigsTs1;
