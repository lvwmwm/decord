// Module ID: 8788
// Function ID: 69397
// Name: ProfilePreviewWrapper
// Dependencies: [31, 27, 655, 33, 4130, 689, 4554, 8708, 8278, 8789, 8790, 8791, 1876, 656, 8793, 8796, 2]
// Exports: IndividualProductPreview

// Module 8788 (ProfilePreviewWrapper)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import items from "items";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function ProfilePreviewWrapper(children) {
  let importDefault;
  let require;
  ({ handlePreviewPress: require, onTrackPress: importDefault } = children);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = {
    onPress() {
      if (null != callback2) {
        callback2(outer1_6.FULL_PROFILE_PREVIEW);
      }
      if (null != callback) {
        callback();
      }
    },
    style: tmp.collectiblePreview
  };
  obj = { style: tmp.profilePreviewContainer };
  const items = [children.children, ];
  obj = { style: tmp.profilePreviewGradient, start: { x: 0, y: 0.6 }, end: { x: 0, y: 1 } };
  const items1 = ["" + tmp.profilePreviewGradient.color + "00", tmp.profilePreviewGradient.color];
  obj.colors = items1;
  items[1] = callback(importDefault(4554), obj);
  obj.children = items;
  obj.children = callback2(closure_4, obj);
  return callback(closure_3, obj);
}
class ProfileEffectPreview {
  constructor(arg0) {
    ({ profileEffect, profileEffectRestartKey, width, handlePreviewPress, onTrackPress } = global);
    tmp = c9();
    obj = require("useCurrentUser");
    obj = { handlePreviewPress, onTrackPress };
    currentUser = obj.useCurrentUser();
    obj1 = { user: currentUser, profileEffect, profileEffectRestartKey, maxWidth: width, style: tmp.profilePreview };
    obj.children = jsx(require("ProfileEffectUserPreview"), obj1);
    return jsx(ProfilePreviewWrapper, obj);
  }
}
function ProfileFramePreview(arg0) {
  let handlePreviewPress;
  let onTrackPress;
  let profileFrame;
  let width;
  ({ profileFrame, width, handlePreviewPress, onTrackPress } = arg0);
  let obj = require(8708) /* useCurrentUser */;
  obj = { handlePreviewPress, onTrackPress };
  const currentUser = obj.useCurrentUser();
  obj = { profileFrame, user: currentUser, maxWidth: width, style: _createForOfIteratorHelperLoose().profilePreview };
  obj.children = callback(importDefault(8789), obj);
  return callback(ProfilePreviewWrapper, obj);
}
class AvatarDecorationPreview {
  constructor(arg0) {
    ({ handlePreviewPress, onTrackPress } = global);
    obj = {
      onPress() {
            if (null != callback2) {
              callback2(outer1_6.FULL_PROFILE_PREVIEW);
            }
            if (null != callback) {
              callback();
            }
          },
      style: c9().collectiblePreview,
      children: jsx(require("AvatarDecorationProductPreview"), { product: global.product })
    };
    return jsx(Pressable, obj);
  }
}
class NameplatePreview {
  constructor(arg0) {
    obj = { style: c9().collectiblePreview, children: jsx(require("NameplateUser"), { product: global.product }) };
    return jsx(View, obj);
  }
}
({ Pressable: closure_3, View: closure_4 } = get_ActivityIndicator);
({ EXTERNAL_PRODUCT_SKU_IDS: closure_5, ShopCtaEnum: closure_6 } = items);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_12, position: "relative", height: 280 };
_createForOfIteratorHelperLoose.collectiblePreview = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.profilePreviewContainer = { position: "relative", flex: 1, alignItems: "center", overflow: "hidden" };
_createForOfIteratorHelperLoose.profilePreview = { width: "66%" };
let obj1 = {};
const merged = Object.assign(get_ActivityIndicator.StyleSheet.absoluteFillObject);
obj1["bottom"] = -1;
obj1["pointerEvents"] = "none";
obj1["color"] = require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND;
_createForOfIteratorHelperLoose.profilePreviewGradient = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("items").fileFinishedImporting("modules/collectibles/native/IndividualProductPreview.tsx");

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
  if (require(1876) /* CollectiblesItemType */.CollectiblesItemType.NAMEPLATE === type) {
    let obj = { product };
    return callback(NameplatePreview, obj);
  } else if (require(1876) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_EFFECT === type) {
    obj = { profileEffect: product.items[0], width, handlePreviewPress, onTrackPress };
    return callback(ProfileEffectPreview, obj);
  } else if (require(1876) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME === type) {
    const obj1 = { profileFrame: product.items[0], width, handlePreviewPress, onTrackPress };
    return callback(ProfileFramePreview, obj1);
  } else if (require(1876) /* CollectiblesItemType */.CollectiblesItemType.AVATAR_DECORATION === type) {
    obj = { product, handlePreviewPress, onTrackPress };
    return callback(AvatarDecorationPreview, obj);
  } else if (require(1876) /* CollectiblesItemType */.CollectiblesItemType.EXTERNAL_SKU === type) {
    const ALL = require(656) /* set */.FractionalPremiumSKUsSets.ALL;
    if (ALL.has(product.skuId)) {
      let tmp5 = callback(require(8793) /* FractionalNitroPreview */.FractionalNitroPreview, {});
    } else {
      tmp5 = null;
      if (product.skuId === constants.ORB_PROFILE_BADGE) {
        tmp5 = callback(require(8796) /* OrbBadgePreview */.OrbBadgePreview, {});
      }
    }
    return tmp5;
  } else {
    return null;
  }
};
