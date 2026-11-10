// Module ID: 13902
// Function ID: 13903
// Name: CheckpointApngPlayer
// Dependencies: [17, 5143, 13681, 21, 5142, 504, 5844, 1357, 9594, 2]
// Exports: default

// Module 13902 (CheckpointApngPlayer)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1357 */;
import FastImageDefault from "FastImage" /* 5844 */;
import AccessibilityStore from "AccessibilityStore" /* 5143 */;
import CheckpointStore from "CheckpointStore" /* 13681 */;
import createStyles from "createStyles" /* 5142 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ container: { alignItems: "center", justifyContent: "center" } });
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointApngPlayer.tsx");

export default function CheckpointApngPlayer(staticUri) {
  let animatedUri;
  let compactAssets;
  let obj5;
  let style;
  let tmp5Result;
  let useReducedMotion;
  ({ animatedUri, style } = staticUri);
  staticUri = staticUri.staticUri;
  const tmp = closure_7();
  const items = [AccessibilityStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const items1 = [CheckpointStore];
  const obj2 = get_initialized;
  if (!stateFromStores) {
    let obj3;
    if (!obj2.useStateFromStores(items1, () => compactAssets.compactAssets)) {
      obj3 = { style: tmp.container, children: tmp5Result };
      const tmp2Result = utils_PlatformUtils;
      if (tmp2Result.isIOS()) {
        const obj4 = { source: obj5, style, resizeMode: "cover" };
        obj5 = { uri: animatedUri };
        tmp5Result = tmp5(FastImageDefault, obj4);
      } else {
        const obj6 = { url: animatedUri, autoplay: true, style };
        tmp5Result = tmp5(tmp2(9594).APNGPlayer, obj6);
      }
    }
    return <tmp6 {...obj3} />;
  }
  obj3 = { style: tmp.container, children: null };
  const obj7 = { style: tmp.container, children: null };
};
