// Module ID: 16710
// Function ID: 16711
// Name: SettingsAppearanceMessagesHeaderItem
// Dependencies: [19, 17, 21, 4913, 575, 5504, 1112, 2]
// Exports: default

// Module 16710 (SettingsAppearanceMessagesHeaderItem)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1112 */;
import Text_Text from "Text/Text" /* 5504 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4913 */;
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
  ({ animated: true, style: animatedStyles.textNormal, variant: "body-lg/semibold", children: intl.string(intl2.t.OIgYlQ) });
  const Text = Text_Text.Text;
  intl = intl2.intl;
  return <View style={closure_4().messagesHeaderContainer}>{null}</View>;
};
