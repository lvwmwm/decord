// Module ID: 15904
// Function ID: 122878
// Name: useControlsTranslation
// Dependencies: [31, 10047, 10050, 10046, 3991, 4542, 2]
// Exports: default

// Module 15904 (useControlsTranslation)
import result from "result";
import { MODE_CHANGE_PHYSICS } from "VoicePanelModes";
import { CALL_TILE_GUTTER } from "CARD_SIZE";

const require = arg1;
let closure_6 = { code: "function useControlsTranslationTsx1(){const{withSpring,wrapperSpecs,MODE_CHANGE_PHYSICS,useReducedMotion,CALL_TILE_GUTTER,viewHeight}=this.__closure;return{transform:[{translateX:withSpring(wrapperSpecs.get().x,MODE_CHANGE_PHYSICS)},{translateY:withSpring(!useReducedMotion.get()&&wrapperSpecs.get().hidden?wrapperSpecs.get().height+CALL_TILE_GUTTER+viewHeight.get():wrapperSpecs.get().y,MODE_CHANGE_PHYSICS)}]};}" };
const result = require("CARD_SIZE").fileFinishedImporting("modules/voice_panel/native/hooks/useControlsTranslation.tsx");

export default function useControlsTranslation(arg0, wrapperSpecs, viewHeight) {
  const _require = wrapperSpecs;
  const importDefault = viewHeight;
  useReducedMotion = React.useContext(importDefault(useReducedMotion[3])).useReducedMotion;
  let obj = _require(useReducedMotion[4]);
  class S {
    constructor() {
      obj = {};
      obj = {};
      obj3 = closure_0(useReducedMotion[5]);
      obj.translateX = obj3.withSpring(closure_0.get().x, outer1_4);
      items = [, ];
      items[0] = obj;
      obj1 = {};
      obj5 = closure_0(useReducedMotion[5]);
      if (!useReducedMotion.get()) {
        tmp = closure_0;
        if (closure_0.get().hidden) {
          tmp2 = closure_0;
          tmp3 = outer1_5;
          tmp5 = closure_1;
          sum = closure_0.get().height + outer1_5;
          y = sum + closure_1.get();
        }
        tmp6 = outer1_4;
        obj1.translateY = obj5.withSpring(y, outer1_4);
        items[1] = obj1;
        obj.transform = items;
        return obj;
      }
      y = closure_0.get().y;
      return;
    }
  }
  obj = { withSpring: _require(useReducedMotion[5]).withSpring, wrapperSpecs, MODE_CHANGE_PHYSICS, useReducedMotion, CALL_TILE_GUTTER, viewHeight };
  S.__closure = obj;
  S.__workletHash = 11281989557090;
  S.__initData = closure_6;
  return obj.useAnimatedStyle(S);
};
