// Module ID: 13322
// Function ID: 13323
// Name: NUFTemplate
// Dependencies: [19, 17, 21, 4836, 576, 4832, 5281, 2]
// Exports: default

// Module 13322 (NUFTemplate)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4832 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let closure_4;
let hasOwnProperty;
let obj2;
({ View: c2, Image: c3 } = react_native);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: obj2, title: { textAlign: "center", marginBottom: 8 }, description: { textAlign: "center", lineHeight: 18, marginBottom: 24 }, image: { marginBottom: 24 } };
obj2 = { padding: 16, alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/nuf_channels/native/components/NUFTemplate.tsx");

export default function NUFActionSheetTemplate(arg0) {
  let CTALabel;
  let description;
  let imageSrc;
  let items;
  let onCTAPress;
  let title;
  ({ title, description, imageSrc, onCTAPress, CTALabel } = arg0);
  const tmp = closure_6();
  const obj = { style: tmp.container, children: items };
  items = [, , , ];
  const obj2 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: title };
  items[0] = React3(Text_Text.Text, obj2);
  const obj3 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: description };
  items[1] = React3(Text_Text.Text, obj3);
  const obj4 = { source: imageSrc, style: tmp.image };
  items[2] = React3(_false, obj4);
  items[3] = React3(components_Button_Button.Button, { text: CTALabel, size: "md", onPress: onCTAPress, grow: true });
  return hasOwnProperty(React2, obj);
};
