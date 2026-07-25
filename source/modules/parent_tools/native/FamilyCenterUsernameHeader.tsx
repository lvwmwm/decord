// Module ID: 13857
// Function ID: 106172
// Name: FamilyCenterUsernameHeader
// Dependencies: [31, 27, 33, 4131, 3970, 4127, 2]
// Exports: default

// Module 13857 (FamilyCenterUsernameHeader)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ container: { justifyContent: "center" } });
const result = require("jsxProd").fileFinishedImporting("modules/parent_tools/native/FamilyCenterUsernameHeader.tsx");

export default function FamilyCenterUsernameHeader(user) {
  user = user.user;
  let obj = importDefault(3970);
  const name = obj.useName(user);
  let obj1 = importDefault(3970);
  obj = { style: callback3().container };
  const combined = " (@" + obj1.getUserTag(user, { decoration: "never" }) + ")";
  obj = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1 };
  const items = [name, ];
  obj1 = { variant: "text-md/medium", color: "text-muted", lineClamp: 1, children: combined };
  items[1] = callback(require(4127) /* Text */.Text, obj1);
  obj.children = items;
  obj.children = callback2(require(4127) /* Text */.Text, obj);
  return callback(View, obj);
};
