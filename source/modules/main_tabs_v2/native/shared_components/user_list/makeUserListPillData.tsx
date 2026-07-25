// Module ID: 8749
// Function ID: 69264
// Name: makeUserListPillData
// Dependencies: [31, 33, 3970, 1273, 2]
// Exports: default

// Module 8749 (makeUserListPillData)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("conceal").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/makeUserListPillData.tsx");

export default function makeUserListPillData(id) {
  let obj = { id: id.id, text: importDefault(3970).getName(id) };
  obj = { user: id, guildId: undefined, size: require(1273) /* Button */.AvatarSizes.XXSMALL };
  obj.icon = jsx(require(1273) /* Button */.Avatar, { user: id, guildId: undefined, size: require(1273) /* Button */.AvatarSizes.XXSMALL });
  return obj;
};
