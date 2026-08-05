// Module ID: 8230
// Function ID: 8231
// Name: TermsField
// Dependencies: [19, 17, 21, 4255, 5260, 8231, 1236, 2]
// Exports: default

// Module 8230 (TermsField)
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ container: { marginVertical: 12, flexDirection: "column" } });
const result = require("jsxProd").fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/TermsField.tsx");

export default function TermsField(field) {
  let onChange;
  let rulesChannelId;
  field = field.field;
  ({ onChange, rulesChannelId } = field);
  let flag = field.response;
  let obj = { style: callback2().container, children: null };
  const items = [callback(importDefault(5260), { rules: field.values, rulesChannelId }), ];
  if (flag == null) {
    flag = false;
  }
  obj = { start: true, end: true, checked: flag, label: null, onPress: null };
  const intl = tmp5(1236).intl;
  obj[3] = intl.string(require(1236) /* getSystemLocale */.t["2EXfGJ"]);
  obj[4] = onChange;
  items[1] = callback(require(8231) /* TableCheckboxRow */.TableCheckboxRow, obj);
  obj[1] = items;
  return closure_5(View, obj);
};
