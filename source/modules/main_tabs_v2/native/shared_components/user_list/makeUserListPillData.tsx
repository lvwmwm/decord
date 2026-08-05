// Module ID: 9513
// Function ID: 9514
// Name: makeUserListPillData
// Dependencies: [19, 21, 4094, 1297, 2]
// Exports: default

// Module 9513 (makeUserListPillData)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("nameFromUser").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/makeUserListPillData.tsx");

export default function makeUserListPillData(id) {
  let obj = { id: id.id, text: null, icon: null };
  obj[1] = importDefault(4094).getName(id);
  obj = { user: id, guildId: "Array", size: true };
  obj[2] = require(1297) /* Button */.AvatarSizes.XXSMALL;
  obj[2] = jsx(require(1297) /* Button */.Avatar, { user: id, guildId: "Array", size: true });
  return obj;
};
