// Module ID: 5223
// Function ID: 45198
// Name: setGestureState
// Dependencies: [5221, 5224, 5222]

// Module 5223 (setGestureState)
import hasProperty from "hasProperty";

let closure_2 = hasProperty.tagMessage("react-native-reanimated is required in order to use synchronous state management");
let useSharedValue;
if (null != require("cancelAnimation").Reanimated) {
  useSharedValue = require("cancelAnimation").Reanimated.useSharedValue;
}
let closure_3 = undefined !== useSharedValue;
let setGestureState;
if (null != require("cancelAnimation").Reanimated) {
  setGestureState = require("cancelAnimation").Reanimated.setGestureState;
}
let closure_5 = { code: "function create_Pnpm_gestureStateManagerTs1(handlerTag){const{REANIMATED_AVAILABLE,setGestureState,State,warningMessage}=this.__closure;return{handlerTag:handlerTag,begin:function(){'worklet';if(REANIMATED_AVAILABLE){setGestureState(handlerTag,State.BEGAN);}else{console.warn(warningMessage);}},activate:function(){'worklet';if(REANIMATED_AVAILABLE){setGestureState(handlerTag,State.ACTIVE);}else{console.warn(warningMessage);}},fail:function(){'worklet';if(REANIMATED_AVAILABLE){setGestureState(handlerTag,State.FAILED);}else{console.warn(warningMessage);}},end:function(){'worklet';if(REANIMATED_AVAILABLE){setGestureState(handlerTag,State.END);}else{console.warn(warningMessage);}}};}" };
let closure_6 = { code: "function pnpm_gestureStateManagerTs2(){const{REANIMATED_AVAILABLE,setGestureState,handlerTag,State,warningMessage}=this.__closure;if(REANIMATED_AVAILABLE){setGestureState(handlerTag,State.BEGAN);}else{console.warn(warningMessage);}}" };
let closure_7 = { code: "function pnpm_gestureStateManagerTs3(){const{REANIMATED_AVAILABLE,setGestureState,handlerTag,State,warningMessage}=this.__closure;if(REANIMATED_AVAILABLE){setGestureState(handlerTag,State.ACTIVE);}else{console.warn(warningMessage);}}" };
let closure_8 = { code: "function pnpm_gestureStateManagerTs4(){const{REANIMATED_AVAILABLE,setGestureState,handlerTag,State,warningMessage}=this.__closure;if(REANIMATED_AVAILABLE){setGestureState(handlerTag,State.FAILED);}else{console.warn(warningMessage);}}" };
let closure_9 = { code: "function pnpm_gestureStateManagerTs5(){const{REANIMATED_AVAILABLE,setGestureState,handlerTag,State,warningMessage}=this.__closure;if(REANIMATED_AVAILABLE){setGestureState(handlerTag,State.END);}else{console.warn(warningMessage);}}" };

export const GestureStateManager = {
  create: (() => {
    function create(handlerTag) {
      let closure_0 = handlerTag;
      let obj = { handlerTag };
      /* worklet (recovered source) */ function pnpm_gestureStateManagerTs2(){const{REANIMATED_AVAILABLE,setGestureState,handlerTag,State,warningMessage}=this.__closure;if(REANIMATED_AVAILABLE){setGestureState(handlerTag,State.BEGAN);}else{console.warn(warningMessage);}}
      obj = { REANIMATED_AVAILABLE: outer1_3, setGestureState: outer1_4, handlerTag, State: outer1_0(outer1_1[2]).State, warningMessage: outer1_2 };
      pnpm_gestureStateManagerTs2.__closure = obj;
      pnpm_gestureStateManagerTs2.__workletHash = 4799367197403;
      pnpm_gestureStateManagerTs2.__initData = outer1_6;
      obj.begin = pnpm_gestureStateManagerTs2;
      /* worklet (recovered source) */ function pnpm_gestureStateManagerTs3(){const{REANIMATED_AVAILABLE,setGestureState,handlerTag,State,warningMessage}=this.__closure;if(REANIMATED_AVAILABLE){setGestureState(handlerTag,State.ACTIVE);}else{console.warn(warningMessage);}}
      obj = { REANIMATED_AVAILABLE: outer1_3, setGestureState: outer1_4, handlerTag, State: outer1_0(outer1_1[2]).State, warningMessage: outer1_2 };
      pnpm_gestureStateManagerTs3.__closure = obj;
      pnpm_gestureStateManagerTs3.__workletHash = 7932903515929;
      pnpm_gestureStateManagerTs3.__initData = outer1_7;
      obj.activate = pnpm_gestureStateManagerTs3;
      /* worklet (recovered source) */ function pnpm_gestureStateManagerTs4(){const{REANIMATED_AVAILABLE,setGestureState,handlerTag,State,warningMessage}=this.__closure;if(REANIMATED_AVAILABLE){setGestureState(handlerTag,State.FAILED);}else{console.warn(warningMessage);}}
      pnpm_gestureStateManagerTs4.__closure = { REANIMATED_AVAILABLE: outer1_3, setGestureState: outer1_4, handlerTag, State: outer1_0(outer1_1[2]).State, warningMessage: outer1_2 };
      pnpm_gestureStateManagerTs4.__workletHash = 6492077607729;
      pnpm_gestureStateManagerTs4.__initData = outer1_8;
      obj.fail = pnpm_gestureStateManagerTs4;
      /* worklet (recovered source) */ function pnpm_gestureStateManagerTs5(){const{REANIMATED_AVAILABLE,setGestureState,handlerTag,State,warningMessage}=this.__closure;if(REANIMATED_AVAILABLE){setGestureState(handlerTag,State.END);}else{console.warn(warningMessage);}}
      const obj1 = { REANIMATED_AVAILABLE: outer1_3, setGestureState: outer1_4, handlerTag, State: outer1_0(outer1_1[2]).State, warningMessage: outer1_2 };
      pnpm_gestureStateManagerTs5.__closure = { REANIMATED_AVAILABLE: outer1_3, setGestureState: outer1_4, handlerTag, State: outer1_0(outer1_1[2]).State, warningMessage: outer1_2 };
      pnpm_gestureStateManagerTs5.__workletHash = 2856860112444;
      pnpm_gestureStateManagerTs5.__initData = outer1_9;
      obj.end = pnpm_gestureStateManagerTs5;
      return obj;
    }
    create.__closure = { REANIMATED_AVAILABLE: closure_3, setGestureState, State: require(5222).State, warningMessage: closure_2 };
    create.__workletHash = 11660087535665;
    create.__initData = closure_5;
    return create;
  })()
};
