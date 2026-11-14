// Module ID: 20079
// Function ID: 20080
// Name: useControlsTranslation
// Dependencies: [19, 11985, 11988, 11984, 1655, 5939, 2]
// Exports: default

// Module 20079 (useControlsTranslation)
import _mod1655 from "module_1655" /* 1655 */;
import spring_spring from "spring/spring" /* 5939 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11984 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11985 */;
import VoicePanelCardConstants from "VoicePanelCardConstants" /* 11988 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const MODE_CHANGE_PHYSICS = VoicePanelConstants.MODE_CHANGE_PHYSICS;
const CALL_TILE_GUTTER = VoicePanelCardConstants.CALL_TILE_GUTTER;
let closure_6 = { code: "(function useControlsTranslationTsx1(){let[withSpring,wrapperSpecs,MODE_CHANGE_PHYSICS,useReducedMotion,CALL_TILE_GUTTER,viewHeight]=this.__closure;return{transform:[{translateX:withSpring(wrapperSpecs.get().x,MODE_CHANGE_PHYSICS)},{translateY:withSpring(!useReducedMotion.get()&&wrapperSpecs.get().hidden?wrapperSpecs.get().height+CALL_TILE_GUTTER+viewHeight.get():wrapperSpecs.get().y,MODE_CHANGE_PHYSICS)}]};})" };
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useControlsTranslation.tsx");

export default function useControlsTranslation(arg0, arg1, arg2) {
  let tmp2;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  const useReducedMotion = react.useContext(VoicePanelStateContextDefault).useReducedMotion;
  let tmp = _mod1655;
  let items = [closure_6, , , , , , ];
  const useAnimatedStyle = tmp.useAnimatedStyle;
  items[1] = spring_spring.withSpring;
  items[2] = arg1;
  items[3] = MODE_CHANGE_PHYSICS;
  items[4] = useReducedMotion;
  items[5] = CALL_TILE_GUTTER;
  items[6] = arg2;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8] = items;
  function useControlsTranslationTsx1() {
    const items = [{ translateX: _undefined(_undefined2.get().x, c2) }, ];
    ({ translateX: _undefined(_undefined2.get().x, c2) });
    const tmp = _undefined;
    const tmp2 = c2;
    if (!_undefined3.get()) {
      let y;
      if (_undefined2.get().hidden) {
        const sum = obj2.get().height + c4;
        y = sum + _undefined4.get();
      }
      const obj3 = { transform: items };
      items[1] = { translateY: tmp(y, tmp2) };
      const obj4 = { translateY: tmp(y, tmp2) };
      return obj3;
    }
    y = obj2.get().y;
  }
  const items1 = [tmp3, tmp4, tmp5, tmp6, tmp7, tmp8];
  useControlsTranslationTsx1.__closure = items1;
  useControlsTranslationTsx1.__workletHash = 16744357992443;
  useControlsTranslationTsx1.__initData = tmp2;
  return useAnimatedStyle(useControlsTranslationTsx1);
};
