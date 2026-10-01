// Module ID: 17004
// Function ID: 17005
// Name: useControlsTranslation
// Dependencies: [19, 11755, 11758, 11754, 4566, 5280, 2]
// Exports: default

// Module 17004 (useControlsTranslation)
import spring from "spring" /* 5280 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11755 */;
import VoicePanelCardConstants from "VoicePanelCardConstants" /* 11758 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, items, obj1, obj3, obj6, sum, tmp, tmp2, tmp3, tmp5, y;

const MODE_CHANGE_PHYSICS = VoicePanelConstants.MODE_CHANGE_PHYSICS;
const CALL_TILE_GUTTER = VoicePanelCardConstants.CALL_TILE_GUTTER;
const __initData = { code: "function useControlsTranslationTsx1(){const{withSpring,wrapperSpecs,MODE_CHANGE_PHYSICS,useReducedMotion,CALL_TILE_GUTTER,viewHeight}=this.__closure;return{transform:[{translateX:withSpring(wrapperSpecs.get().x,MODE_CHANGE_PHYSICS)},{translateY:withSpring(!useReducedMotion.get()&&wrapperSpecs.get().hidden?wrapperSpecs.get().height+CALL_TILE_GUTTER+viewHeight.get():wrapperSpecs.get().y,MODE_CHANGE_PHYSICS)}]};}" };
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useControlsTranslation.tsx");

export default function useControlsTranslation(arg0, wrapperSpecs, viewHeight) {
  let useReducedMotion;
  _require = wrapperSpecs;
  importDefault = viewHeight;
  useReducedMotion = react.useContext(require("VoicePanelStateContext")).useReducedMotion;
  let obj = require("ReanimatedRexport");
  class S {
    constructor() {
      obj = { translateX: null };
      obj2 = closure_0(closure_2[5]);
      obj3 = closure_0;
      tmp = MODE_CHANGE_PHYSICS;
      obj.translateX = obj2.withSpring(closure_0.get().x, MODE_CHANGE_PHYSICS);
      items = [, ];
      items[0] = obj;
      tmp2 = closure_0(closure_2[5]);
      withSpring = tmp2.withSpring;
      if (!useReducedMotion.get()) {
        if (obj3.get().hidden) {
          tmp3 = CALL_TILE_GUTTER;
          tmp5 = closure_1;
          sum = obj3.get().height + CALL_TILE_GUTTER;
          y = sum + closure_1.get();
        }
        obj1 = { transform: null };
        obj6 = { translateY: null };
        obj6.translateY = withSpring(y, tmp);
        items[1] = obj6;
        obj1.transform = items;
        return obj1;
      }
      y = obj3.get().y;
      return;
    }
  }
  let obj2 = { withSpring: require("spring").withSpring, wrapperSpecs, MODE_CHANGE_PHYSICS, useReducedMotion, CALL_TILE_GUTTER, viewHeight };
  S.__closure = obj2;
  S.__workletHash = 11281989557090;
  S.__initData = __initData;
  return obj.useAnimatedStyle(S);
};
