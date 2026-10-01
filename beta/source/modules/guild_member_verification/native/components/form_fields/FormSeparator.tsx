// Module ID: 5907
// Function ID: 5908
// Name: FormSeparator
// Dependencies: [19, 17, 21, 4836, 576, 2]
// Exports: default

// Module 5907 (FormSeparator)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
const obj = { separator: { borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1, marginVertical: 12 } };
({ borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1, marginVertical: 12 });
let closure_2 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/FormSeparator.tsx");

export default function FormSeparator(style) {
  const tmp = closure_2();
  const merged = Object.assign(style);
  const items = [tmp.separator, style.style];
  return <View style={items} />;
};
