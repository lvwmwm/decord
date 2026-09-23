// Module ID: 16043
// Function ID: 16044
// Name: CheckpointKnickKnacks
// Dependencies: [19, 17, 4819, 5052, 21, 4827, 504, 1364, 4533, 2]
// Exports: default

// Module 16043 (CheckpointKnickKnacks)
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4819 */;

const require = fn;
const View = fn(17).View;
const CHECKPOINT_PRIMARY = fn(5052).CHECKPOINT_PRIMARY;
const jsx = fn(21).jsx;
const createStyles = fn(4827);
let closure_7 = createStyles.createStyles({ rive: { width: 143, height: 32 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointKnickKnacks.tsx");

export default function CheckpointKnickKnacks(style) {
  let stateFromStores;
  const items = [AccessibilityStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const items1 = [stateFromStores];
  const obj = stateFromStores(504);
  const tmp = stateFromStores;
  const memo = noop.useMemo(() => ({ iconColor: CHECKPOINT_PRIMARY, reducedMotion: stateFromStores }), items1);
  const tmp4 = closure_7();
  let tmp6 = null;
  if (!obj2.isAndroid()) {
    const obj3 = { style: null, children: null };
    const items2 = [tmp4.rive, style.style];
    obj3.style = items2;
    const obj4 = { artboard: "Entry", dataBinding: memo };
    obj3.children = jsx(tmp(4533).CheckpointKnickKnacksRive, { artboard: "Entry", dataBinding: memo });
    tmp6 = <View style={null}>{null}</View>;
  }
  return tmp6;
};
