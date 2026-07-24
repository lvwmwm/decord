// Module ID: 12749
// Function ID: 99276
// Name: NUFActionSheetTemplate
// Dependencies: [31, 27, 33, 4130, 4126, 4543, 2]
// Exports: default

// Module 12749 (NUFActionSheetTemplate)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
const require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
let closure_5 = _createForOfIteratorHelperLoose.createStyles({ container: { padding: 16, alignItems: "center" }, title: { textAlign: "center", marginBottom: 8 }, description: { textAlign: "center", marginBottom: 46, paddingLeft: 18, paddingRight: 18 }, illustration: { alignSelf: "stretch", alignItems: "center", marginBottom: 32 } });
const result = require("jsxProd").fileFinishedImporting("modules/nuf_channels/native/components/NUFTemplateV2.tsx");

export default function NUFActionSheetTemplate(arg0) {
  let CTALabel;
  let description;
  let illustration;
  let onCTAPress;
  let title;
  ({ title, illustration, description, onCTAPress, CTALabel } = arg0);
  const tmp = callback3();
  let obj = { style: tmp.container };
  obj = { style: tmp.illustration, children: illustration };
  const items = [callback(View, obj), , , ];
  obj = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/bold", children: title };
  items[1] = callback(require(4126) /* Text */.Text, obj);
  items[2] = callback(require(4126) /* Text */.Text, { style: tmp.description, variant: "text-md/medium", children: description });
  items[3] = callback(require(4543) /* Button */.Button, { text: CTALabel, onPress: onCTAPress, grow: true });
  obj.children = items;
  return callback2(View, obj);
};
