// Module ID: 14991
// Function ID: 14992
// Name: IndividualProductPreview
// Dependencies: [19, 17, 1074, 21, 5009, 575, 5582, 8741, 11355, 11471, 14992, 14993, 1988, 1075, 14994, 14997, 2]
// Exports: IndividualProductPreview

// Module 14991 (IndividualProductPreview)
import nativeDefault from "native" /* 575 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1988 */;
import LinearGradientDefault from "LinearGradient" /* 5582 */;
import useCurrentUser from "useCurrentUser" /* 8741 */;
import ProfileEffectUserPreviewDefault from "ProfileEffectUserPreview" /* 11355 */;
import ProfileFrameUserPreviewDefault from "ProfileFrameUserPreview" /* 11471 */;
import AvatarDecorationProductPreviewDefault from "AvatarDecorationProductPreview" /* 14992 */;
import NameplateProductPreviewDefault from "NameplateProductPreview" /* 14993 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let c3;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
function ProfilePreviewWrapper(children) {
  let items;
  let items1;
  let obj2;
  ({ handlePreviewPress: require, onTrackPress: importDefault } = children);
  children = children.children;
  const tmp = closure_9();
  const obj = {
    onPress() {
      if (importDefault != null) {
        tmp(metroRequire.FULL_PROFILE_PREVIEW);
      }
      if (require != null) {
        tmp4();
      }
    },
    style: tmp.collectiblePreview,
    children: closure_8(closure_4, obj2)
  };
  obj2 = { style: tmp.profilePreviewContainer, children: items };
  items = [children, ];
  const obj3 = { style: tmp.profilePreviewGradient, start: { x: 0, y: 0.6 }, end: { x: 0, y: 1 }, colors: items1 };
  const tmp2 = LinearGradientDefault;
  items1 = ["" + tmp.profilePreviewGradient.color + "00", tmp.profilePreviewGradient.color];
  items[1] = closure_7(tmp2, obj3);
  return closure_7(closure_3, obj);
}
function ProfileEffectPreview(arg0) {
  let avatarDecorationOverride;
  let handlePreviewPress;
  let obj3;
  let onTrackPress;
  let profileEffect;
  let profileFrameOverride;
  let width;
  ({ profileEffect, width, avatarDecorationOverride, profileFrameOverride, handlePreviewPress, onTrackPress } = arg0);
  const tmp = closure_9();
  const obj2 = { handlePreviewPress, onTrackPress, children: metroImportDefault(ProfileEffectUserPreviewDefault, obj3) };
  const obj = useCurrentUser;
  const currentUser = obj.useCurrentUser();
  obj3 = { user: currentUser, profileEffect, avatarDecorationOverride, profileFrameOverride, maxWidth: width, style: tmp.profilePreview };
  return metroImportDefault(ProfilePreviewWrapper, obj2);
}
function ProfileFramePreview(arg0) {
  let avatarDecorationOverride;
  let handlePreviewPress;
  let obj3;
  let onTrackPress;
  let profileEffectOverride;
  let profileFrame;
  let width;
  ({ profileFrame, width, avatarDecorationOverride, profileEffectOverride, handlePreviewPress, onTrackPress } = arg0);
  const tmp = closure_9();
  const obj2 = { handlePreviewPress, onTrackPress, children: metroImportDefault(ProfileFrameUserPreviewDefault, obj3) };
  const obj = useCurrentUser;
  const currentUser = obj.useCurrentUser();
  obj3 = { profileFrame, user: currentUser, avatarDecorationOverride, profileEffectOverride, maxWidth: width, style: tmp.profilePreview };
  return metroImportDefault(ProfilePreviewWrapper, obj2);
}
function AvatarDecorationPreview(product) {
  ({ handlePreviewPress: require, onTrackPress: importDefault } = product);
  product = product.product;
  const obj = {
    onPress() {
      if (importDefault != null) {
        tmp(metroRequire.FULL_PROFILE_PREVIEW);
      }
      if (require != null) {
        tmp4();
      }
    },
    style: closure_9().collectiblePreview,
    children: closure_7(AvatarDecorationProductPreviewDefault, { product })
  };
  return closure_7(closure_3, obj);
}
function NameplatePreview(arg0) {
  let avatarDecorationOverride;
  let product;
  ({ product, avatarDecorationOverride } = arg0);
  const obj = { style: closure_9().collectiblePreview, children: metroImportDefault(NameplateProductPreviewDefault, { product, avatarDecorationOverride }) };
  return metroImportDefault(React3, obj);
}
({ Pressable: c3, View: closure_4, StyleSheet } = react_native);
({ EXTERNAL_PRODUCT_SKU_IDS: hasOwnProperty, ShopCtaEnum: metroRequire } = CollectiblesShopConstants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { collectiblePreview: obj2, profilePreviewContainer: { position: "relative", flex: 1, alignItems: "center", overflow: "hidden" }, profilePreview: { width: "66%" }, profilePreviewGradient: obj3 };
obj2 = { marginTop: nativeDefault.space.PX_12, position: "relative", height: 280 };
createStyles = createStyles.createStyles;
obj3 = { bottom: -1, pointerEvents: "none", color: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_9 = createStyles(obj);
const result = size.fileFinishedImporting("modules/collectibles/native/IndividualProductPreview.tsx");

export function IndividualProductPreview(arg0) {
  let avatarDecorationOverride;
  let handlePreviewPress;
  let onTrackPress;
  let product;
  let profileEffectOverride;
  let profileFrameOverride;
  let width;
  ({ product, width, avatarDecorationOverride, handlePreviewPress, onTrackPress } = arg0);
  const type = product.type;
  ({ profileFrameOverride, profileEffectOverride } = arg0);
  if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
    const obj2 = { product, avatarDecorationOverride };
    return metroImportDefault(NameplatePreview, obj2);
  } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
    const obj3 = { profileEffect: product.items[0], width, avatarDecorationOverride, profileFrameOverride, handlePreviewPress, onTrackPress };
    return metroImportDefault(ProfileEffectPreview, obj3);
  } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === type) {
    const obj4 = { profileFrame: product.items[0], width, avatarDecorationOverride, profileEffectOverride, handlePreviewPress, onTrackPress };
    return metroImportDefault(ProfileFramePreview, obj4);
  } else if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
    const obj = { product, handlePreviewPress, onTrackPress };
    return metroImportDefault(AvatarDecorationPreview, obj);
  } else if (CollectiblesItemType.CollectiblesItemType.EXTERNAL_SKU === type) {
    let tmp5;
    const ALL = tmp(1075).FractionalPremiumSKUsSets.ALL;
    if (ALL.has(product.skuId)) {
      tmp5 = metroImportDefault(tmp(14994).FractionalNitroPreview, {});
    } else {
      tmp5 = null;
      if (product.skuId === hasOwnProperty.ORB_PROFILE_BADGE) {
        tmp5 = metroImportDefault(tmp(14997).OrbBadgePreview, {});
      }
    }
    return tmp5;
  } else {
    return null;
  }
}
