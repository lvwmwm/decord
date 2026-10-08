// Module ID: 10205
// Function ID: 10206
// Name: makeUserListPillData
// Dependencies: [19, 21, 4922, 1200, 2]
// Exports: default

// Module 10205 (makeUserListPillData)
import Fragment from "Fragment" /* 21 */;
import native from "native" /* 1200 */;
import UserUtilsDefault from "UserUtils" /* 4922 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/makeUserListPillData.tsx");

export default function makeUserListPillData(id) {
  let obj2;
  const obj = { id: id.id, text: obj2.getName(id), icon: null };
  obj2 = UserUtilsDefault;
  ({ user: id, guildId: "Array", size: native.AvatarSizes.XXSMALL });
  const Avatar = native.Avatar;
  return obj;
};
