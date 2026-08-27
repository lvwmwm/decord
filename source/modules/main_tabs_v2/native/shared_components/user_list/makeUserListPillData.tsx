// Module ID: 10555
// Function ID: 10556
// Name: makeUserListPillData
// Dependencies: [19, 21, 4289, 1297, 2]
// Exports: default

// Module 10555 (makeUserListPillData)
import noopAll from "noop" /* 19 */;
import Button from "Button" /* 1297 */;
import nameFromUserDefault from "nameFromUser" /* 4289 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/makeUserListPillData.tsx");

export default function makeUserListPillData(id) {
  let obj = { id: id.id, text: nameFromUserDefault.getName(id), icon: null };
  obj = { user: id, guildId: "Array", size: -1 };
  obj[2] = Button.AvatarSizes.XXSMALL;
  obj[2] = jsx(Button.Avatar, { user: id, guildId: "Array", size: -1 });
  return obj;
};
