// Module ID: 13702
// Function ID: 103669
// Name: FamilyCenterAvatarPair
// Dependencies: []
// Exports: default

// Module 13702 (FamilyCenterAvatarPair)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_3 = importDefault(dependencyMap[2]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[5]).radii.round };
obj.avatars = obj;
obj.icon = { "Bool(false)": 1, "Bool(false)": 8, "Bool(false)": 16 };
let closure_6 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/parent_tools/native/FamilyCenterAvatarPair.tsx");

export default function FamilyCenterAvatarPair(otherUser) {
  let iconSrc;
  let iconStyles;
  otherUser = otherUser.otherUser;
  ({ iconSrc, iconStyles } = otherUser);
  const tmp = callback3();
  let obj = arg1(dependencyMap[6]);
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let tmp3 = null;
  if (undefined !== stateFromStores) {
    tmp3 = null;
    if (undefined !== otherUser) {
      obj = { style: tmp.avatars };
      obj = { size: arg1(dependencyMap[7]).AvatarSizes.LARGE_48, user: stateFromStores, guildId: undefined, avatarDecoration: stateFromStores.avatarDecoration };
      const items1 = [callback(arg1(dependencyMap[7]).Avatar, obj), , ];
      const obj1 = {};
      const items2 = [tmp.icon, iconStyles];
      obj1.style = items2;
      obj1.size = arg1(dependencyMap[7]).Icon.Sizes.EXTRA_SMALL;
      obj1.source = iconSrc;
      items1[1] = callback(arg1(dependencyMap[7]).Icon, obj1);
      const obj2 = { size: arg1(dependencyMap[7]).AvatarSizes.LARGE_48, user: otherUser, guildId: undefined, avatarDecoration: otherUser.avatarDecoration };
      items1[2] = callback(arg1(dependencyMap[7]).Avatar, obj2);
      obj.children = items1;
      tmp3 = callback2(View, obj);
    }
  }
  return tmp3;
};
