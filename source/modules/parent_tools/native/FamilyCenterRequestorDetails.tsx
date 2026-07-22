// Module ID: 13709
// Function ID: 103710
// Name: FamilyCenterRequestorDetails
// Dependencies: []
// Exports: default

// Module 13709 (FamilyCenterRequestorDetails)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { container: {} };
obj = { borderRadius: arg1(dependencyMap[4]).AVATAR_SIZE_MAP[arg1(undefined, dependencyMap[4]).AvatarSizes.NORMAL] / 2, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH };
obj.avatar = obj;
const tmp3 = arg1(dependencyMap[2]);
obj.detailsContainer = { paddingLeft: importDefault(dependencyMap[5]).space.PX_12, paddingRight: importDefault(dependencyMap[5]).space.PX_4, flexGrow: 1, flexShrink: 1 };
let closure_6 = obj.createStyles(obj);
const obj1 = { paddingLeft: importDefault(dependencyMap[5]).space.PX_12, paddingRight: importDefault(dependencyMap[5]).space.PX_4, flexGrow: 1, flexShrink: 1 };
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/parent_tools/native/FamilyCenterRequestorDetails.tsx");

export default function FamilyCenterRequestorDetails(otherUser) {
  otherUser = otherUser.otherUser;
  const tmp = callback3();
  let obj = arg1(dependencyMap[6]);
  obj = { style: tmp.container };
  const linkTimestampText = obj.useLinkTimestampText(otherUser.id, otherUser.status);
  obj = { avatarStyle: tmp.avatar, user: otherUser, guildId: undefined, disablePlaceholder: true, avatarDecoration: otherUser.avatarDecoration };
  const items = [callback(arg1(dependencyMap[4]).Avatar, obj), ];
  const obj1 = { style: tmp.detailsContainer };
  const items1 = [callback(importDefault(dependencyMap[7]), { user: otherUser }), ];
  const obj2 = { cachedAt: 15, edpbxy: "center", children: linkTimestampText };
  items1[1] = callback(arg1(dependencyMap[8]).Text, obj2);
  obj1.children = items1;
  items[1] = callback2(View, obj1);
  obj.children = items;
  return callback2(View, obj);
};
