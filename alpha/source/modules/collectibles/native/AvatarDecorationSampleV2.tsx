// Module ID: 9506
// Function ID: 9507
// Name: AvatarDecorationSampleV2
// Dependencies: [19, 17, 21, 5014, 575, 38, 1987, 5717, 9507, 9508, 2]
// Exports: default

// Module 9506 (AvatarDecorationSampleV2)
import react_native from "react-native" /* 17 */;
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 575 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1987 */;
import FastImageDefault from "FastImage" /* 5717 */;
import CutoutableAvatarDecorationDefault from "CutoutableAvatarDecoration" /* 9508 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
let c7 = 0.8333333333333334;
let closure_8 = createStyles.createStyles((arg0) => {
  const obj = { avatar: size, solidAvatar: { opacity: 1 }, avatarDecoration: { position: "absolute" } };
  size = { position: "absolute", height: arg0 * c7, width: arg0 * c7, borderRadius: arg0 * c7 / 2, opacity: 0.8, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
  return obj;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/native/AvatarDecorationSampleV2.tsx");

export default function AvatarDecorationSampleV2(arg0) {
  let animate;
  let avatarSource;
  let item;
  let items1;
  let threeTierBundle;
  ({ item, size, avatarSource } = arg0);
  ({ animate, threeTierBundle } = arg0);
  const tmp = closure_8(size);
  const tmp4 = _modDef38;
  tmp4(item.type === CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION, "Item must be Avatar Decoration");
  const items = [tmp.avatar, ];
  let solidAvatar = null != avatarSource;
  const tmp6 = metroRequire;
  const tmp7 = hasOwnProperty;
  const tmp9 = FastImageDefault;
  if (!solidAvatar) {
    solidAvatar = true === threeTierBundle;
  }
  if (solidAvatar) {
    solidAvatar = tmp.solidAvatar;
  }
  const obj = { style: items, resizeMode: "contain", source: avatarSource, accessible: false };
  items[1] = solidAvatar;
  if (null == avatarSource) {
    avatarSource = tmp2(9507);
  }
  const obj2 = { children: items1 };
  items1 = [React3(tmp9, obj), ];
  const obj3 = { style: tmp.avatarDecoration, accessibilityLabel: item.label, children: React3(CutoutableAvatarDecorationDefault, { avatarDecoration: item, size, animate }) };
  items1[1] = React3(View, obj3);
  return tmp6(tmp7, obj2);
};
export const avatarPlaceholderSizeRatio = 0.8333333333333334;
