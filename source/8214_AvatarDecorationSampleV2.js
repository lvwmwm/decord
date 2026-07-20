// Module ID: 8214
// Function ID: 64931
// Name: AvatarDecorationSampleV2
// Dependencies: []
// Exports: default

// Module 8214 (AvatarDecorationSampleV2)
importAll(dependencyMap[0]);
({ Image: closure_3, View: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = arg1(dependencyMap[2]));
const tmp4 = arg1(dependencyMap[2]);
let closure_8 = arg1(dependencyMap[3]).createStyles((arg0) => {
  let obj = {};
  obj = { position: "absolute", height: arg0 * 0.8333333333333334, width: arg0 * 0.8333333333333334, borderRadius: arg0 * 0.8333333333333334 / 2, opacity: 0.8, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWER };
  obj.avatar = obj;
  obj.solidAvatar = { opacity: 1 };
  obj.avatarDecoration = { position: "absolute" };
  return obj;
});
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/collectibles/native/AvatarDecorationSampleV2.tsx");

export default function AvatarDecorationSampleV2(arg0) {
  let animate;
  let avatarSource;
  let item;
  let size;
  let threeTierBundle;
  ({ item, size, avatarSource } = arg0);
  ({ animate, threeTierBundle } = arg0);
  const tmp = callback2(size);
  importDefault(dependencyMap[5])(item.type === arg1(dependencyMap[6]).CollectiblesItemType.AVATAR_DECORATION, "Item must be Avatar Decoration");
  let obj = {};
  obj = {};
  const items = [tmp.avatar, ];
  let solidAvatar = null != avatarSource;
  if (!solidAvatar) {
    solidAvatar = true === threeTierBundle;
  }
  if (solidAvatar) {
    solidAvatar = tmp.solidAvatar;
  }
  items[1] = solidAvatar;
  obj.style = items;
  obj.resizeMode = "contain";
  if (null == avatarSource) {
    avatarSource = importDefault(dependencyMap[7]);
  }
  obj.source = avatarSource;
  obj.accessible = false;
  const items1 = [callback(closure_3, obj), ];
  obj = { style: tmp.avatarDecoration, accessibilityLabel: item.label, children: callback(importDefault(dependencyMap[8]), { avatarDecoration: item, size, animate }) };
  items1[1] = callback(closure_4, obj);
  obj.children = items1;
  return closure_7(closure_6, obj);
};
export const avatarPlaceholderSizeRatio = 0.8333333333333334;
