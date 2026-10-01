// Module ID: 14762
// Function ID: 14763
// Name: FormSeparator
// Dependencies: [19, 17, 21, 4836, 576, 2]
// Exports: default

// Module 14762 (FormSeparator)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let size;
const View = react_native.View;
const jsx = Fragment.jsx;
const obj = { container: { alignSelf: "stretch" }, margins: { marginTop: 16 }, separator: size };
size = { width: "100%", height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_2 = createStyles.createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormSeparator.tsx");

export default function FormSeparator(arg0) {
  let style;
  let withoutMargins;
  ({ style, withoutMargins } = arg0);
  const tmp = closure_2();
  const items = [tmp.container, , ];
  let margins;
  if (!withoutMargins) {
    margins = tmp.margins;
  }
  items[1] = margins;
  items[2] = style;
  return <View style={items}>{null}</View>;
};
