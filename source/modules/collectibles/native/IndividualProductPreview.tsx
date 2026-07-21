// Module ID: 8741
// Function ID: 69118
// Name: ProfilePreviewWrapper
// Dependencies: []
// Exports: IndividualProductPreview

// Module 8741 (ProfilePreviewWrapper)
function ProfilePreviewWrapper(children) {
  ({ handlePreviewPress: closure_0, onTrackPress: closure_1 } = children);
  const tmp = callback3();
  let obj = {
    onPress() {
      if (null != callback2) {
        callback2(constants.FULL_PROFILE_PREVIEW);
      }
      if (null != callback) {
        callback();
      }
    },
    style: tmp.collectiblePreview
  };
  obj = { style: tmp.profilePreviewContainer };
  const items = [children.children, ];
  obj = { style: tmp.profilePreviewGradient, start: {}, end: {} };
  const items1 = ["" + tmp.profilePreviewGradient.color + "00", tmp.profilePreviewGradient.color];
  obj.colors = items1;
  items[1] = callback(importDefault(dependencyMap[6]), obj);
  obj.children = items;
  obj.children = callback2(closure_4, obj);
  return callback(closure_3, obj);
}
class ProfileEffectPreview {
  constructor(arg0) {
    ({ profileEffect, profileEffectRestartKey, width, handlePreviewPress, onTrackPress } = global);
    tmp = closure_9();
    obj = arg1(dependencyMap[7]);
    obj = { handlePreviewPress, onTrackPress };
    currentUser = obj.useCurrentUser();
    obj1 = { user: currentUser, profileEffect, profileEffectRestartKey, maxWidth: width, style: tmp.profilePreview };
    obj.children = jsx(importDefault(dependencyMap[8]), obj1);
    return jsx(ProfilePreviewWrapper, obj);
  }
}
function ProfileFramePreview(arg0) {
  let handlePreviewPress;
  let onTrackPress;
  let profileFrame;
  let width;
  ({ profileFrame, width, handlePreviewPress, onTrackPress } = arg0);
  let obj = arg1(dependencyMap[7]);
  obj = { handlePreviewPress, onTrackPress };
  const currentUser = obj.useCurrentUser();
  obj = { profileFrame, user: currentUser, maxWidth: width, style: callback3().profilePreview };
  obj.children = callback(importDefault(dependencyMap[9]), obj);
  return callback(ProfilePreviewWrapper, obj);
}
class AvatarDecorationPreview {
  constructor(arg0) {
    ({ handlePreviewPress: closure_0, onTrackPress: closure_1 } = global);
    obj = {
      onPress() {
            if (null != callback2) {
              callback2(constants.FULL_PROFILE_PREVIEW);
            }
            if (null != callback) {
              callback();
            }
          },
      style: closure_9().collectiblePreview,
      children: jsx(importDefault(dependencyMap[10]), { product: global.product })
    };
    return jsx(Pressable, obj);
  }
}
class NameplatePreview {
  constructor(arg0) {
    obj = { style: closure_9().collectiblePreview, children: jsx(importDefault(dependencyMap[11]), { product: global.product }) };
    return jsx(View, obj);
  }
}
importAll(dependencyMap[0]);
const tmp3 = arg1(dependencyMap[1]);
({ Pressable: closure_3, View: closure_4 } = tmp3);
({ EXTERNAL_PRODUCT_SKU_IDS: closure_5, ShopCtaEnum: closure_6 } = arg1(dependencyMap[2]));
const tmp4 = arg1(dependencyMap[2]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { marginTop: importDefault(dependencyMap[5]).space.PX_12 };
obj.collectiblePreview = obj;
obj.profilePreviewContainer = {};
obj.profilePreview = { width: "66%" };
const obj1 = {};
const merged = Object.assign(tmp3.StyleSheet.absoluteFillObject);
obj1["bottom"] = -1;
obj1["pointerEvents"] = "none";
obj1["color"] = importDefault(dependencyMap[5]).colors.MOBILE_ACTIONSHEET_BACKGROUND;
obj.profilePreviewGradient = obj1;
let closure_9 = obj.createStyles(obj);
const tmp5 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/collectibles/native/IndividualProductPreview.tsx");

export { ProfileEffectPreview };
export { AvatarDecorationPreview };
export { NameplatePreview };
export const IndividualProductPreview = function IndividualProductPreview(arg0) {
  let handlePreviewPress;
  let onTrackPress;
  let product;
  let width;
  ({ product, width, handlePreviewPress, onTrackPress } = arg0);
  const type = product.type;
  if (arg1(dependencyMap[12]).CollectiblesItemType.NAMEPLATE === type) {
    let obj = { product };
    return callback(NameplatePreview, obj);
  } else if (arg1(dependencyMap[12]).CollectiblesItemType.PROFILE_EFFECT === type) {
    obj = { profileEffect: product.items[0], width, handlePreviewPress, onTrackPress };
    return callback(ProfileEffectPreview, obj);
  } else if (arg1(dependencyMap[12]).CollectiblesItemType.PROFILE_FRAME === type) {
    const obj1 = { profileFrame: product.items[0], width, handlePreviewPress, onTrackPress };
    return callback(ProfileFramePreview, obj1);
  } else if (arg1(dependencyMap[12]).CollectiblesItemType.AVATAR_DECORATION === type) {
    obj = { product, handlePreviewPress, onTrackPress };
    return callback(AvatarDecorationPreview, obj);
  } else if (arg1(dependencyMap[12]).CollectiblesItemType.EXTERNAL_SKU === type) {
    if (product.skuId === constants.FRACTIONAL_PREMIUM) {
      let tmp4 = callback(arg1(dependencyMap[13]).FractionalNitroPreview, {});
    } else {
      tmp4 = null;
      if (product.skuId === constants.ORB_PROFILE_BADGE) {
        tmp4 = callback(arg1(dependencyMap[14]).OrbBadgePreview, {});
      }
    }
    return tmp4;
  } else {
    return null;
  }
};
