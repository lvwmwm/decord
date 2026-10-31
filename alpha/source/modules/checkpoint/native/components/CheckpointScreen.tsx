// Module ID: 13622
// Function ID: 13623
// Name: CheckpointScreen
// Dependencies: [19, 17, 6066, 21, 575, 5014, 1491, 5607, 2]
// Exports: default, useCheckpointScreenContentHeight

// Module 13622 (CheckpointScreen)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1491 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 5607 */;
import CheckpointConstants from "CheckpointConstants" /* 6066 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ ScrollView: c3, View: closure_4 } = react_native);
const CHECKPOINT_NAV_HEIGHT = CheckpointConstants.CHECKPOINT_NAV_HEIGHT;
const jsx = Fragment.jsx;
const PX_24 = nativeDefault.space.PX_24;
let closure_9 = createStyles.createStyles({ container: { height: "100%", width: "100%" }, scroll: { width: "100%" }, scrollContent: { flexGrow: 1 } });
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointScreen.tsx");

export default function CheckpointScreen(children) {
  let insets;
  children = children.children;
  const tmp = closure_9();
  insets = insets(5607)().insets;
  const items = [, , , ];
  ({ bottom: arr[0], left: arr[1], right: arr[2], top: arr[3] } = insets);
  const items1 = [tmp.scrollContent, react.useMemo(() => ({ paddingLeft: insets.left + PX_24, paddingRight: insets.right + PX_24, paddingBottom: insets.bottom + PX_24, paddingTop: insets.top + CHECKPOINT_NAV_HEIGHT }), items)];
  return <closure_4 style={tmp.container}>{null}</closure_4>;
};
export function useCheckpointScreenContentHeight() {
  const height = useWindowDimensionsDefault({ ignoreKeyboard: true }).height;
  const insets = useSafeAreaInsetsKeyboardAwareDefault().insets;
  return height - insets.top - CHECKPOINT_NAV_HEIGHT - insets.bottom - PX_24;
}
