// Module ID: 12420
// Function ID: 12421
// Name: CheckpointApngPlayer
// Dependencies: [17, 4793, 12400, 21, 4792, 504, 5479, 2]
// Exports: default

// Module 12420 (CheckpointApngPlayer)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import AccessibilityStore from "AccessibilityStore" /* 4793 */;
import CheckpointStore from "CheckpointStore" /* 12400 */;
import createStyles from "createStyles" /* 4792 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ container: { alignItems: "center", justifyContent: "center" } });
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointApngPlayer.tsx");

export default function CheckpointApngPlayer(style) {
  let animatedUri;
  let compactAssets;
  let staticUri;
  let useReducedMotion;
  style = style.style;
  ({ animatedUri, staticUri } = style);
  const tmp = closure_7();
  const items = [AccessibilityStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const items1 = [CheckpointStore];
  const obj2 = get_initialized;
  if (!stateFromStores) {
    let obj3;
    if (!obj2.useStateFromStores(items1, () => compactAssets.compactAssets)) {
      obj3 = { style: tmp.container, children: null };
      const obj5 = { uri: animatedUri };
    }
    return <tmp5 {...obj3} />;
  }
  obj3 = { style: tmp.container, children: null };
  const obj6 = { style: tmp.container, children: null };
};
