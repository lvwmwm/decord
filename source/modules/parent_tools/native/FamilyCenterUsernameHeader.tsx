// Module ID: 13672
// Function ID: 103510
// Name: FamilyCenterUsernameHeader
// Dependencies: [0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 13672 (FamilyCenterUsernameHeader)
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
  obj = {};
  const items = [name, ];
  obj1 = { -9223372036854775808: null, 0: null, 0: null, children: combined };
  items[1] = callback(arg1(dependencyMap[5]).Text, obj1);
  obj.children = items;
  obj.children = callback2(arg1(dependencyMap[5]).Text, obj);
  return callback(View, obj);
};
