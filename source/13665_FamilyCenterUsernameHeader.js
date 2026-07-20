// Module ID: 13665
// Function ID: 103487
// Name: FamilyCenterUsernameHeader
// Dependencies: [0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 13665 (FamilyCenterUsernameHeader)
import "result";
import { View } from "result";
import result from "result";
import result from "result";
import result from "result";

({ jsx: closure_4, jsxs: closure_5 } = result);
let closure_6 = result.createStyles({ container: { justifyContent: "center" } });
result = result.fileFinishedImporting("modules/parent_tools/native/FamilyCenterUsernameHeader.tsx");

export default function FamilyCenterUsernameHeader(user) {
  user = user.user;
  let obj = importDefault(dependencyMap[4]);
  const name = obj.useName(user);
  let obj1 = importDefault(dependencyMap[4]);
  obj = { style: callback3().container };
  const combined = " (@" + obj1.getUserTag(user, { decoration: "never" }) + ")";
  obj = {};
  const items = [name, ];
  obj1 = { 9223372036854775807: true, 9223372036854775807: true, 9223372036854775807: true, children: combined };
  items[1] = callback(arg1(dependencyMap[5]).Text, obj1);
  obj.children = items;
  obj.children = callback2(arg1(dependencyMap[5]).Text, obj);
  return callback(View, obj);
};
