// Module ID: 14439
// Function ID: 14440
// Name: FamilyCenterActivityItemPreview
// Dependencies: [19, 17, 7667, 21, 4836, 14438, 576, 8282, 7646, 8285, 11620, 8678, 8122, 1974, 1971, 2]
// Exports: default

// Module 14439 (FamilyCenterActivityItemPreview)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import utils from "utils" /* 1971 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1974 */;
import useMaybeFetchProfileFrameDefault from "useMaybeFetchProfileFrame" /* 7646 */;
import ProfileFrameConstants from "ProfileFrameConstants" /* 7667 */;
import NameplateUtils from "NameplateUtils" /* 8282 */;
import ProfileFrameSamplePreviewDefault from "ProfileFrameSamplePreview" /* 8285 */;
import FamilyCenterActivityPurchaseRowUtils from "FamilyCenterActivityPurchaseRowUtils" /* 14438 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
let size;
let size1;
let size2;
let size3;
let size4;
function AvatarDecorationPreviewImage(arg0) {
  let product;
  let styles;
  ({ product, styles } = arg0);
  const obj = FamilyCenterActivityPurchaseRowUtils;
  const avatarDecorationPreviewUrl = obj.getAvatarDecorationPreviewUrl(product);
  let tmp2 = null;
  if (null != avatarDecorationPreviewUrl) {
    tmp2 = <React3 source={{ uri: avatarDecorationPreviewUrl }} style={styles.avatarDecorationPreview} fadeDuration={0} />;
    const obj3 = { uri: avatarDecorationPreviewUrl };
  }
  return tmp2;
}
function NameplatePreviewImage(styles) {
  styles = styles.styles;
  const nameplateData = styles.nameplateData;
  const obj = NameplateUtils;
  const staticImageUrl = obj.getNameplateAssets(nameplateData).staticImageUrl;
  let tmp = null;
  if (null != staticImageUrl) {
    tmp = <_false style={styles.nameplateContainer}>{null}</_false>;
    const obj4 = { uri: staticImageUrl };
  }
  return tmp;
}
function ProfileEffectPreviewImage(arg0) {
  let product;
  let styles;
  ({ product, styles } = arg0);
  const obj = FamilyCenterActivityPurchaseRowUtils;
  const profileEffectPreviewUrl = obj.getProfileEffectPreviewUrl(product);
  let tmp2 = null;
  if (null != profileEffectPreviewUrl) {
    tmp2 = <React3 source={{ uri: profileEffectPreviewUrl }} style={styles.avatarDecorationPreview} fadeDuration={0} />;
    const obj3 = { uri: profileEffectPreviewUrl };
  }
  return tmp2;
}
function ProfileFramePreviewImage(arg0) {
  let product;
  let styles;
  ({ product, styles } = arg0);
  const tmp3 = useMaybeFetchProfileFrameDefault(product.skuId);
  let tmp4 = null;
  if (null != tmp3) {
    ({ profileFrame: tmp3, previewWidth: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE * closure_5, previewHeight: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE, profileBackgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW });
    ProfileFrameSamplePreviewDefault;
    tmp4 = <_false style={styles.profileFrameContainer}>{null}</_false>;
  }
  return tmp4;
}
function SubscriptionPreview(arg0) {
  let styles;
  let subscriptionPlanId;
  ({ subscriptionPlanId, styles } = arg0);
  if (null == subscriptionPlanId) {
    return <_false style={styles.purchasePlaceholder}>{null}</_false>;
  } else {
    const obj4 = FamilyCenterActivityPurchaseRowUtils;
    if (obj4.isGuildBoostSubscription(subscriptionPlanId)) {
      let NitroWheelIcon = tmp5(8678).BoostGemIcon;
    } else {
      NitroWheelIcon = tmp5(8122).NitroWheelIcon;
    }
    return <tmp8 style={styles.purchasePlaceholder}>{null}</tmp8>;
  }
}
function CollectiblePreview(arg0) {
  let product;
  let styles;
  ({ product, styles } = arg0);
  if (null == product) {
    return <_false style={styles.purchasePlaceholder}>{null}</_false>;
  } else {
    const type = product.type;
    if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
      return <AvatarDecorationPreviewImage product={product} styles={styles} />;
    } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
      const tmp17Result = utils;
      const nameplateDataFromProductRecord = tmp17Result.getNameplateDataFromProductRecord(product);
      let tmp8 = null;
      if (null != nameplateDataFromProductRecord) {
        tmp8 = <NameplatePreviewImage nameplateData={nameplateDataFromProductRecord} styles={styles} />;
      }
      return tmp8;
    } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
      return <ProfileEffectPreviewImage product={product} styles={styles} />;
    } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === type) {
      return <ProfileFramePreviewImage product={product} styles={styles} />;
    } else {
      return <_false style={styles.purchasePlaceholder}>{null}</_false>;
    }
  }
}
({ View: c3, Image: closure_4 } = react_native);
let closure_5 = ProfileFrameConstants.PROFILE_FRAME_ASPECT_RATIO;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { purchasePlaceholder: size, avatarDecorationPreview: size1, nameplateContainer: size2, nameplatePreview: size3, profileFrameContainer: size4 };
size = { width: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE, height: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, display: "flex", alignItems: "center", justifyContent: "center", marginRight: 12 };
createStyles = createStyles.createStyles;
size1 = { width: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE, height: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE, marginRight: 12 };
size2 = { width: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE, height: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE, marginRight: 12, borderRadius: nativeDefault.radii.xs, overflow: "hidden", position: "relative" };
size3 = { position: "absolute", right: 0, width: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE * FamilyCenterActivityPurchaseRowUtils.NAMEPLATE_ASPECT_RATIO, height: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE };
size4 = { width: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE, height: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE, marginRight: 12, alignItems: "center", justifyContent: "center" };
let closure_7 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityItemPreview.tsx");

export default function FamilyCenterActivityItemPreview(arg0) {
  let displayName;
  let isSubscription;
  let product;
  let subscriptionPlanId;
  let tmp2Result;
  ({ displayName, product, isSubscription, subscriptionPlanId } = arg0);
  const tmp = closure_7();
  if (isSubscription) {
    const obj2 = { subscriptionPlanId, styles: tmp };
    tmp2Result = tmp2(SubscriptionPreview, obj2);
  } else {
    const obj3 = { product, styles: tmp };
    tmp2Result = tmp2(CollectiblePreview, obj3);
  }
  return <tmp3 accessible accessibilityLabel={displayName}>{tmp2Result}</tmp3>;
};
