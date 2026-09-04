// Module ID: 10794
// Function ID: 10795
// Name: makeUserListPillData
// Dependencies: [19, 21, 4325, 1296, 2]
// Exports: default

// Module 10794 (makeUserListPillData)
import noopAll from "noop" /* 19 */;
import Button from "Button" /* 1296 */;
import nameFromUserDefault from "nameFromUser" /* 4325 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/makeUserListPillData.tsx");

export default function makeUserListPillData(id) {
  let obj = { id: id.id, text: nameFromUserDefault.getName(id), icon: null };
  obj = { user: id, guildId: "Array", size: "Array" };
  obj[2] = Button.AvatarSizes.XXSMALL;
  obj[2] = jsx(Button.Avatar, { user: id, guildId: "Array", size: "Array" });
  return obj;
};
