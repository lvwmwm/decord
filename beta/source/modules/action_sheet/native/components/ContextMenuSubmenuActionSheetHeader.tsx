// Module ID: 11228
// Function ID: 11229
// Name: ContextMenuSubmenuActionSheetHeader
// Dependencies: [19, 17, 21, 4836, 8996, 1115, 2]
// Exports: default

// Module 11228 (ContextMenuSubmenuActionSheetHeader)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1115 */;
import ActionSheetHeaderPressableText2 from "ActionSheetHeaderPressableText" /* 8996 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ headerContainer: { paddingVertical: 12, paddingHorizontal: 16, alignItems: "flex-start" } });
const result = size.fileFinishedImporting("modules/action_sheet/native/components/ContextMenuSubmenuActionSheetHeader.tsx");

export default function ContextMenuSubmenuActionSheetHeader(onBack) {
  let intl;
  let fn = onBack.onBack;
  ({ label: intl.string(intl2.t["13/7kX"]), onPress: fn });
  const ActionSheetHeaderPressableText = ActionSheetHeaderPressableText2.ActionSheetHeaderPressableText;
  intl = intl2.intl;
  if (fn == null) {
    fn = () => {

    };
  }
  return <tmp2 style={closure_4().headerContainer}>{null}</tmp2>;
};
