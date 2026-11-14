// Module ID: 14852
// Function ID: 14853
// Name: VoicePanelDockRim
// Dependencies: [19, 17, 21, 5306, 5902, 575, 5303, 1655, 14853, 5893, 2]

// Module 14852 (VoicePanelDockRim)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

const StyleSheet = react_native.StyleSheet;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ rim: { position: "absolute", left: 0, right: 0, height: 1 } });
let closure_7 = { code: "(function VoicePanelDockRimTsx1(){let[voicePanelDockRimOpacity]=this.__closure;return{opacity:voicePanelDockRimOpacity.get()};})" };
const memoResult = react.memo(function VoicePanelDockRim(style) {
  let tmp8;
  let tmp9;
  let token;
  style = style.style;
  const tmp = closure_6();
  let obj = token(5902);
  const tmp2 = token;
  token = obj.useToken(nativeDefault.colors.ICON_VOICE_SPEAKING);
  let items = [token];
  const memo = react.useMemo(() => {
    const items = [0, 0.15, 0.85, 1, 1, 0.85, 0.15, 0];
    return items.map((item) => {
      const obj = token(dependencyMap[6]);
      return obj.hexWithOpacity(closure_1_0, item);
    });
  }, items);
  const items1 = [closure_7, ];
  const useAnimatedStyle = token(1655).useAnimatedStyle;
  token(1655);
  items1[1] = token(14853).voicePanelDockRimOpacity;
  let c0;
  [tmp8, tmp9] = items1;
  class VoicePanelDockRimTsx1 {
    constructor() {
      const obj = { opacity: _undefined.get() };
      return obj;
    }
  }
  const items2 = [tmp9];
  VoicePanelDockRimTsx1.__closure = items2;
  VoicePanelDockRimTsx1.__workletHash = 16403229704209;
  VoicePanelDockRimTsx1.__initData = tmp8;
  const animatedStyle = useAnimatedStyle(VoicePanelDockRimTsx1);
  const items3 = [tmp.rim, style, animatedStyle];
  const View = tmp4(1655).View;
  const VoicePanelDockRimLevel = tmp2(14853).VoicePanelDockRimLevel;
  return <View style={items3} pointerEvents="none">{null}</View>;
});
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockRim.tsx");

export default memoResult;
