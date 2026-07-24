// Module ID: 9304
// Function ID: 72607
// Name: ParagraphField
// Dependencies: [31, 27, 4621, 482, 33, 4130, 5052, 689, 4126, 7645, 1212, 2]
// Exports: default

// Module 9304 (ParagraphField)
import "result";
import { View } from "get ActivityIndicator";
import { MAX_PARAGRAPH_RESPONSE_LENGTH as closure_3 } from "items";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "createTextStyle";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { marginVertical: 12, flexDirection: "column" } };
_createForOfIteratorHelperLoose = {};
const merged = Object.assign(require("createTextStyle")(require("sum").Fonts.DISPLAY_SEMIBOLD, require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY, 16, { uppercase: false }));
_createForOfIteratorHelperLoose["paddingBottom"] = 16;
_createForOfIteratorHelperLoose.formHeader = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj1 = { uppercase: false };
const result = require("items").fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/ParagraphField.tsx");

export default function ParagraphField(field) {
  field = field.field;
  const tmp = _createForOfIteratorHelperLoose();
  const response = field.response;
  let obj = { style: tmp.container };
  obj = { style: tmp.formHeader, variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: field.label };
  const items = [callback(require(4126) /* Text */.Text, obj), ];
  obj = { maxLength: closure_3 };
  let str = "";
  if (null != response) {
    str = response;
  }
  obj.value = str;
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.placeholder = intl.string(require(1212) /* getSystemLocale */.t["Sqn+Wh"]);
  obj.onChange = field.onChange;
  items[1] = callback(require(7645) /* TextArea */.TextArea, obj);
  obj.children = items;
  return closure_5(View, obj);
};
