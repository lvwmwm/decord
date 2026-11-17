// Module ID: 13365
// Function ID: 13366
// Name: CheckpointKnickKnacks
// Dependencies: [19, 17, 5311, 6375, 21, 5310, 504, 1380, 5377, 2]
// Exports: default

// Module 13365 (CheckpointKnickKnacks)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import CheckpointConstants from "CheckpointConstants" /* 6375 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5311 */;
import createStyles from "createStyles" /* 5310 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ rive: { width: 143, height: 32 } });
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointKnickKnacks.tsx");

export default function CheckpointKnickKnacks(style) {
  let useReducedMotion;
  let stateFromStores;
  style = style.style;
  const items = [AccessibilityStore];
  const obj = stateFromStores(504);
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const items1 = [stateFromStores];
  const tmp4 = closure_7();
  const memo = react.useMemo(() => ({ iconColor: CHECKPOINT_PRIMARY, reducedMotion: stateFromStores }), items1);
  let tmp6 = null;
  const obj2 = stateFromStores(1380);
  if (!obj2.isAndroid()) {
    const items2 = [tmp4.rive, style];
    tmp6 = <View style={items2}>{null}</View>;
  }
  return tmp6;
};
