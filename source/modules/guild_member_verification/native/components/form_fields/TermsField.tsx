// Module ID: 9214
// Function ID: 72106
// Name: TermsField
// Dependencies: [31, 27, 33, 4130, 5124, 9132, 1212, 2]
// Exports: default

// Module 9214 (TermsField)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ container: { marginVertical: 12, flexDirection: "column" } });
const result = require("jsxProd").fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/TermsField.tsx");

export default function TermsField(field) {
  let onChange;
  let rulesChannelId;
  field = field.field;
  ({ onChange, rulesChannelId } = field);
  const response = field.response;
  let tmp2 = null != response;
  if (tmp2) {
    tmp2 = response;
  }
  let obj = { style: callback3().container };
  const items = [callback(importDefault(5124), { rules: field.values, rulesChannelId }), ];
  obj = { start: true, end: true, checked: tmp2 };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.label = intl.string(require(1212) /* getSystemLocale */.t["2EXfGJ"]);
  obj.onPress = onChange;
  items[1] = callback(require(9132) /* TableCheckboxRow */.TableCheckboxRow, obj);
  obj.children = items;
  return callback2(View, obj);
};
