// Module ID: 8810
// Function ID: 69494
// Name: makeUserListPillData
// Dependencies: []
// Exports: default

// Module 8810 (makeUserListPillData)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/makeUserListPillData.tsx");

export default function makeUserListPillData(id) {
  let obj = { id: id.id, text: importDefault(dependencyMap[2]).getName(id) };
  obj = { user: id, guildId: undefined, size: arg1(dependencyMap[3]).AvatarSizes.XXSMALL };
  obj.icon = jsx(arg1(dependencyMap[3]).Avatar, obj);
  return obj;
};
