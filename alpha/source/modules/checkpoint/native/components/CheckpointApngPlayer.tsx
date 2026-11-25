// Module ID: 12592
// Function ID: 12593
// Name: CheckpointApngPlayer
// Dependencies: [17, 5013, 12571, 21, 5012, 504, 5699, 2]
// Exports: default

// Module 12592 (CheckpointApngPlayer)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import AccessibilityStore from "AccessibilityStore" /* 5013 */;
import CheckpointStore from "CheckpointStore" /* 12571 */;
import createStyles from "createStyles" /* 5012 */;
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
