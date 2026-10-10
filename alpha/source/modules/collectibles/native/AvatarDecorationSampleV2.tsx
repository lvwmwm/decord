// Module ID: 9013
// Function ID: 9014
// Name: AvatarDecorationSampleV2
// Dependencies: [19, 17, 21, 5092, 587, 558, 576, 38, 1993, 9014, 6156, 9015, 2]

// Module 9013 (AvatarDecorationSampleV2)
import react_native from "react-native" /* 17 */;
import _modDef38 from "module_38" /* 38 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1993 */;
import FastImageDefault from "FastImage" /* 6156 */;
import CutoutableAvatarDecorationDefault from "CutoutableAvatarDecoration" /* 9015 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function AvatarDecorationSampleV2(threeTierBundle) {
  let animate;
  let avatarSource;
  let item;
  let items;
  const obj = react2;
  const cResult = obj.c(17);
  ({ item, size, avatarSource, animate } = threeTierBundle);
  threeTierBundle = threeTierBundle.threeTierBundle;
  const tmp3 = closure_8(size);
  const tmp5 = _modDef38;
  tmp5(item.type === CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION, "Item must be Avatar Decoration");
  const solidAvatar = (null != avatarSource || true === threeTierBundle) && tmp3.solidAvatar;
  if (cResult[0] === tmp3.avatar) {
    let tmp7;
    if (cResult[1] === solidAvatar) {
      tmp7 = cResult[2];
    }
    if (null == avatarSource) {
      avatarSource = tmp4(9014);
    }
    if (cResult[3] === tmp7) {
      let tmp8;
      if (cResult[4] === avatarSource) {
        tmp8 = cResult[5];
      }
      if (cResult[6] === animate) {
        if (cResult[7] === item) {
          let tmp11;
          if (cResult[8] === size) {
            tmp11 = cResult[9];
          }
          if (cResult[10] === item.label) {
            if (cResult[11] === tmp3.avatarDecoration) {
              let tmp14;
              if (cResult[12] === tmp11) {
                tmp14 = cResult[13];
              }
              if (cResult[14] === tmp8) {
                let tmp18;
                if (cResult[15] === tmp14) {
                  tmp18 = cResult[16];
                }
                return tmp18;
              }
              const obj2 = { children: items };
              items = [tmp8, tmp14];
              const tmp21 = metroRequire(hasOwnProperty, obj2);
              cResult[14] = tmp8;
              cResult[15] = tmp14;
              cResult[16] = tmp21;
              tmp18 = tmp21;
            }
          }
          const obj3 = { style: tmp3.avatarDecoration, accessibilityLabel: item.label, children: tmp11 };
          const tmp17 = React3(View, obj3);
          cResult[10] = item.label;
          cResult[11] = tmp3.avatarDecoration;
          cResult[12] = tmp11;
          cResult[13] = tmp17;
          tmp14 = tmp17;
        }
      }
      const obj4 = { avatarDecoration: item, size, animate };
      const tmp13 = React3(CutoutableAvatarDecorationDefault, obj4);
      cResult[6] = animate;
      cResult[7] = item;
      cResult[8] = size;
      cResult[9] = tmp13;
      tmp11 = tmp13;
    }
    const obj5 = { style: tmp7, resizeMode: "contain", source: avatarSource, accessible: false };
    const tmp10 = React3(FastImageDefault, obj5);
    cResult[3] = tmp7;
    cResult[4] = avatarSource;
    cResult[5] = tmp10;
    tmp8 = tmp10;
  }
  const items1 = [tmp3.avatar, solidAvatar];
  cResult[0] = tmp3.avatar;
  cResult[1] = solidAvatar;
  cResult[2] = items1;
  tmp7 = items1;
}) : (function AvatarDecorationSampleV2(arg0) {
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
    avatarSource = tmp2(9014);
  }
  const obj2 = { children: items1 };
  items1 = [React3(tmp9, obj), ];
  const obj3 = { style: tmp.avatarDecoration, accessibilityLabel: item.label, children: React3(CutoutableAvatarDecorationDefault, { avatarDecoration: item, size, animate }) };
  items1[1] = React3(View, obj3);
  return tmp6(tmp7, obj2);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/native/AvatarDecorationSampleV2.tsx");

export default tmp4;
export const avatarPlaceholderSizeRatio = 0.8333333333333334;
