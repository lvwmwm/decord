// Module ID: 8793
// Function ID: 69416
// Name: makeUserListPillData
// Dependencies: [31, 33, 4004, 1273, 2]
// Exports: default

// Module 8793 (makeUserListPillData)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("conceal").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/makeUserListPillData.tsx");

export default function makeUserListPillData(id) {
  let obj = { id: id.id, text: importDefault(4004).getName(id) };
  obj = { user: id, guildId: undefined, size: require(1273) /* Button */.AvatarSizes.XXSMALL };
  obj.icon = jsx(require(1273) /* Button */.Avatar, { user: id, guildId: undefined, size: require(1273) /* Button */.AvatarSizes.XXSMALL });
  return obj;
};
