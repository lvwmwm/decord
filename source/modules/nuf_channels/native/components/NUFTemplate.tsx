// Module ID: 12758
// Function ID: 99299
// Name: NUFActionSheetTemplate
// Dependencies: [31, 27, 33, 4130, 689, 4126, 4543, 2]
// Exports: default

// Module 12758 (NUFActionSheetTemplate)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_2;
let closure_3;
let closure_4;
let closure_5;
const require = arg1;
({ View: closure_2, Image: closure_3 } = get_ActivityIndicator);
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { padding: 16, alignItems: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.title = { textAlign: "center", marginBottom: 8 };
_createForOfIteratorHelperLoose.description = { textAlign: "center", lineHeight: 18, marginBottom: 24 };
_createForOfIteratorHelperLoose.image = { marginBottom: 24 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/nuf_channels/native/components/NUFTemplate.tsx");

export default function NUFActionSheetTemplate(arg0) {
  let CTALabel;
  let description;
  let imageSrc;
  let onCTAPress;
  let title;
  ({ title, description, imageSrc, onCTAPress, CTALabel } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.container };
  obj = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: title };
  const items = [callback(require(4126) /* Text */.Text, obj), , , ];
  obj = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: description };
  items[1] = callback(require(4126) /* Text */.Text, obj);
  items[2] = callback(closure_3, { source: imageSrc, style: tmp.image });
  items[3] = callback(require(4543) /* Button */.Button, { text: CTALabel, size: "md", onPress: onCTAPress, grow: true });
  obj.children = items;
  return callback2(closure_2, obj);
};
