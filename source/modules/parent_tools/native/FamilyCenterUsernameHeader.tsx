// Module ID: 13681
// Function ID: 103565
// Name: FamilyCenterUsernameHeader
// Dependencies: [0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 13681 (FamilyCenterUsernameHeader)
import "__exportStarResult1";
import { View } from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

({ jsx: closure_4, jsxs: closure_5 } = __exportStarResult1);
let closure_6 = __exportStarResult1.createStyles({ container: { justifyContent: "center" } });
const result = __exportStarResult1.fileFinishedImporting("modules/parent_tools/native/FamilyCenterUsernameHeader.tsx");

export default function FamilyCenterUsernameHeader(user) {
  user = user.user;
  let obj = importDefault(dependencyMap[4]);
  const name = obj.useName(user);
  let obj1 = importDefault(dependencyMap[4]);
  obj = { style: callback3().container };
  const combined = " (@" + obj1.getUserTag(user, { decoration: "never" }) + ")";
  obj = { 803799044: "<string:20995968>", 1269170180: "ars", 711589892: "<string:310460928>" };
  const items = [name, ];
  obj1 = { 803799044: 1091633152, 1269170180: 151879, 711589892: 62578, children: combined };
  items[1] = callback(arg1(dependencyMap[5]).Text, obj1);
  obj.children = items;
  obj.children = callback2(arg1(dependencyMap[5]).Text, obj);
  return callback(View, obj);
};
