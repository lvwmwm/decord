// Module ID: 16169
// Function ID: 16170
// Name: ThemedHeaderBackgroundGradient
// Dependencies: [19, 17, 21, 4836, 576, 1613, 4531, 1092, 5293, 2]

// Module 16169 (ThemedHeaderBackgroundGradient)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1092 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import useToken from "useToken" /* 4531 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ StyleSheet: c3, View: closure_4 } = react_native);
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ container: { position: "absolute", left: 0, right: 0, top: 0 } });
const memoResult = react.memo(function ThemedHeaderBackgroundGradient(baseColor) {
  let BACKGROUND_BASE_LOWEST = baseColor.baseColor;
  if (BACKGROUND_BASE_LOWEST === undefined) {
    BACKGROUND_BASE_LOWEST = nativeDefault.colors.BACKGROUND_BASE_LOWEST;
  }
  let num = baseColor.minHeight;
  if (num === undefined) {
    num = 16;
  }
  const tmp3 = closure_6();
  const tmp6 = useSafeAreaInsetsDefault();
  const obj = useToken;
  const token = obj.useToken(BACKGROUND_BASE_LOWEST);
  const obj2 = utils_ColorUtils;
  let str = obj2.hex2rgb(token, 0);
  if (str == null) {
    str = "transparent";
  }
  const items = [tmp3.container, { height: Math.max(tmp6.top, num) }];
  const items1 = [token, str];
  ({ height: Math.max(tmp6.top, num) });
  return <React3 style={items} pointerEvents="none">{null}</React3>;
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/ThemedHeaderBackgroundGradient.tsx");

export default memoResult;
