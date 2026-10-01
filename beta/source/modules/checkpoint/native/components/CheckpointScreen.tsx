// Module ID: 15260
// Function ID: 15261
// Name: CheckpointScreen
// Dependencies: [19, 17, 5061, 21, 576, 4836, 6402, 2]
// Exports: default

// Module 15260 (CheckpointScreen)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import CheckpointConstants from "CheckpointConstants" /* 5061 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ ScrollView: c3, View: closure_4 } = react_native);
const CHECKPOINT_NAV_HEIGHT = CheckpointConstants.CHECKPOINT_NAV_HEIGHT;
const jsx = Fragment.jsx;
const PX_24 = nativeDefault.space.PX_24;
let closure_8 = createStyles.createStyles({ container: { height: "100%", width: "100%" }, scroll: { width: "100%" }, scrollContent: { flexGrow: 1 } });
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointScreen.tsx");

export default function CheckpointScreen(children) {
  let insets;
  children = children.children;
  const tmp = closure_8();
  insets = insets(6402)().insets;
  const items = [, , , ];
  ({ bottom: arr[0], left: arr[1], right: arr[2], top: arr[3] } = insets);
  const items1 = [
    tmp.scrollContent,
    react.useMemo(() => {
      const obj = { paddingLeft: insets.left + PX_24, paddingRight: insets.right + PX_24, paddingBottom: insets.bottom + nativeDefault.space.PX_24, paddingTop: insets.top + CHECKPOINT_NAV_HEIGHT };
      return obj;
    }, items)
  ];
  return <closure_4 style={tmp.container}>{null}</closure_4>;
};
