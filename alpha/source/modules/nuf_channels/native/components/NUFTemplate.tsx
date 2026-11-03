// Module ID: 15331
// Function ID: 15332
// Name: NUFTemplate
// Dependencies: [19, 17, 21, 5141, 575, 5747, 5837, 5754, 2]
// Exports: default

// Module 15331 (NUFTemplate)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5747 */;
import components_Button_Button from "components/Button/Button" /* 5754 */;
import FastImageDefault from "FastImage" /* 5837 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
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
  const obj2 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: title };
  items[0] = React3(Text_Text.Text, obj2);
  const obj3 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: description };
  items[1] = React3(Text_Text.Text, obj3);
  const obj4 = { source: imageSrc, style: tmp.image };
  items[2] = React3(FastImageDefault, obj4);
  items[3] = React3(components_Button_Button.Button, { text: CTALabel, size: "md", onPress: onCTAPress, grow: true });
  return hasOwnProperty(View, obj);
};
