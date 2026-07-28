// Module ID: 13902
// Function ID: 106350
// Name: FamilyCenterUsernameHeader
// Dependencies: [31, 27, 33, 4165, 4004, 4161, 2]
// Exports: default

// Module 13902 (FamilyCenterUsernameHeader)
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
  let obj = importDefault(4004);
  const name = obj.useName(user);
  let obj1 = importDefault(4004);
  obj = { style: callback3().container };
  const combined = " (@" + obj1.getUserTag(user, { decoration: "never" }) + ")";
  obj = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1 };
  const items = [name, ];
  obj1 = { variant: "text-md/medium", color: "text-muted", lineClamp: 1, children: combined };
  items[1] = callback(require(4161) /* Text */.Text, obj1);
  obj.children = items;
  obj.children = callback2(require(4161) /* Text */.Text, obj);
  return callback(View, obj);
};
