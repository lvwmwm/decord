// Module ID: 8273
// Function ID: 8274
// Name: AvatarDecorationSampleV2
// Dependencies: [19, 17, 21, 4836, 576, 38, 1974, 8274, 8275, 2]
// Exports: default

// Module 8273 (AvatarDecorationSampleV2)
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 576 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1974 */;
import CutoutableAvatarDecorationDefault from "CutoutableAvatarDecoration" /* 8275 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ Image: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let c8 = 0.8333333333333334;
let closure_9 = createStyles.createStyles((arg0) => {
  const obj = { avatar: size, solidAvatar: { opacity: 1 }, avatarDecoration: { position: "absolute" } };
  size = { position: "absolute", height: arg0 * c8, width: arg0 * c8, borderRadius: arg0 * c8 / 2, opacity: 0.8, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
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
  const tmp = closure_9(size);
  const tmp4 = _modDef38;
  tmp4(item.type === CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION, "Item must be Avatar Decoration");
  const items = [tmp.avatar, ];
  let solidAvatar = null != avatarSource;
  const tmp6 = metroImportDefault;
  const tmp7 = metroRequire;
  const tmp9 = _false;
  if (!solidAvatar) {
    solidAvatar = true === threeTierBundle;
  }
  if (solidAvatar) {
    solidAvatar = tmp.solidAvatar;
  }
  const obj = { style: items, resizeMode: "contain", source: avatarSource, accessible: false };
  items[1] = solidAvatar;
  if (null == avatarSource) {
    avatarSource = tmp2(8274);
  }
  const obj2 = { children: items1 };
  items1 = [hasOwnProperty(tmp9, obj), ];
  const obj3 = { style: tmp.avatarDecoration, accessibilityLabel: item.label, children: hasOwnProperty(CutoutableAvatarDecorationDefault, { avatarDecoration: item, size, animate }) };
  items1[1] = hasOwnProperty(React3, obj3);
  return tmp6(tmp7, obj2);
};
export const avatarPlaceholderSizeRatio = 0.8333333333333334;
