// Module ID: 13313
// Function ID: 13314
// Name: NUFTemplateV2
// Dependencies: [19, 17, 21, 4836, 4832, 5281, 2]
// Exports: default

// Module 13313 (NUFTemplateV2)
import react_native from "react-native" /* 17 */;
import Text_Text from "Text/Text" /* 4832 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = createStyles.createStyles({ container: { padding: 16, alignItems: "center" }, title: { textAlign: "center", marginBottom: 8 }, description: { textAlign: "center", marginBottom: 46, paddingLeft: 18, paddingRight: 18 }, illustration: { alignSelf: "stretch", alignItems: "center", marginBottom: 32 } });
const result = size.fileFinishedImporting("modules/nuf_channels/native/components/NUFTemplateV2.tsx");

export default function NUFActionSheetTemplate(arg0) {
  let CTALabel;
  let description;
  let illustration;
  let items;
  let onCTAPress;
  let title;
  ({ title, illustration, description, onCTAPress, CTALabel } = arg0);
  const tmp = closure_5();
  const obj = { style: tmp.container, children: items };
  items = [, , , ];
  const obj2 = { style: tmp.illustration, children: illustration };
  items[0] = _false(View, obj2);
  const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/bold", children: title };
  items[1] = _false(Text_Text.Text, obj3);
  const obj4 = { style: tmp.description, variant: "text-md/medium", children: description };
  items[2] = _false(Text_Text.Text, obj4);
  items[3] = _false(components_Button_Button.Button, { text: CTALabel, onPress: onCTAPress, grow: true });
  return React3(View, obj);
};
