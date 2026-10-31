// Module ID: 17271
// Function ID: 17272
// Name: SettingsAppearanceMessagesHeaderItem
// Dependencies: [19, 17, 21, 5014, 575, 5624, 1113, 2]
// Exports: default

// Module 17271 (SettingsAppearanceMessagesHeaderItem)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5624 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
const obj = { messagesHeaderContainer: obj2 };
obj2 = { flexDirection: "row", gap: nativeDefault.space.PX_12, alignItems: "center", marginHorizontal: nativeDefault.space.PX_24 };
let closure_4 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceMessagesHeaderItem.tsx");

export default function MessagesHeaderItem(animatedStyles) {
  let intl;
  animatedStyles = animatedStyles.animatedStyles;
  ({ animated: true, style: animatedStyles.textNormal, variant: "text-lg/bold", children: intl.string(intl2.t.OIgYlQ) });
  const Text = Text_Text.Text;
  intl = intl2.intl;
  return <View style={closure_4().messagesHeaderContainer}>{null}</View>;
};
