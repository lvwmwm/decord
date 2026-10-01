// Module ID: 15274
// Function ID: 15275
// Name: CheckpointApngPlayer
// Dependencies: [17, 4825, 21, 4836, 504, 1365, 5899, 8271, 2]
// Exports: default

// Module 15274 (CheckpointApngPlayer)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1365 */;
import FastImageDefault from "FastImage" /* 5899 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let tmp2;
const APNGPlayer = tmp2(8271);
const View = react_native.View;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ container: { alignItems: "center", justifyContent: "center" } });
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointApngPlayer.tsx");

export default function CheckpointApngPlayer(arg0) {
  let obj5;
  let style;
  let tmp5Result;
  let uri;
  let useReducedMotion;
  ({ uri, style } = arg0);
  const items = [AccessibilityStore];
  const tmp = closure_6();
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj3 = utils_PlatformUtils;
  if (obj3.isIOS()) {
    const obj4 = { source: obj5, style, resizeMode: "cover", enableAnimation: !stateFromStores };
    obj5 = { uri };
    tmp5Result = tmp5(FastImageDefault, obj4);
  } else {
    const obj6 = { url: uri, autoplay: !stateFromStores, style };
    tmp5Result = tmp5(APNGPlayer.APNGPlayer, obj6);
  }
  return <tmp6 style={tmp.container}>{tmp5Result}</tmp6>;
};
