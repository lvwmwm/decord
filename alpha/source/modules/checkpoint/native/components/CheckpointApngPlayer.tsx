// Module ID: 13592
// Function ID: 13593
// Name: CheckpointApngPlayer
// Dependencies: [17, 5010, 21, 5009, 504, 5712, 1377, 9482, 2]
// Exports: default

// Module 13592 (CheckpointApngPlayer)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1377 */;
import FastImageDefault from "FastImage" /* 5712 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ container: { alignItems: "center", justifyContent: "center" } });
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointApngPlayer.tsx");

export default function CheckpointApngPlayer(staticUri) {
  let animatedUri;
  let obj6;
  let style;
  let tmp8;
  let useReducedMotion;
  ({ animatedUri, style } = staticUri);
  staticUri = staticUri.staticUri;
  const items = [AccessibilityStore];
  const obj2 = { style: closure_6().container, children: null };
  const obj = get_initialized;
  if (obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion)) {
    const obj4 = { uri: staticUri };
    obj2.children = jsx(FastImageDefault, { source: obj4, style, resizeMode: "cover" });
    tmp8 = obj2;
  } else {
    let tmp4Result;
    const tmp2Result = utils_PlatformUtils;
    if (tmp2Result.isIOS()) {
      const obj5 = { source: obj6, style, resizeMode: "cover" };
      obj6 = { uri: animatedUri };
      tmp4Result = tmp4(FastImageDefault, obj5);
    } else {
      const obj7 = { url: animatedUri, autoplay: true, style };
      tmp4Result = tmp4(tmp2(9482).APNGPlayer, obj7);
    }
    obj2.children = tmp4Result;
    tmp8 = obj2;
  }
  return <tmp5 {...tmp8} />;
};
