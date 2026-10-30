// Module ID: 16752
// Function ID: 16753
// Name: FamilyCenterActivityItemPreview
// Dependencies: [19, 17, 8786, 21, 5009, 16751, 575, 5712, 9493, 8766, 9496, 12290, 9899, 9506, 1988, 1985, 2]
// Exports: default

// Module 16752 (FamilyCenterActivityItemPreview)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import utils from "utils" /* 1985 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1988 */;
import FastImageDefault from "FastImage" /* 5712 */;
import useMaybeFetchProfileFrameDefault from "useMaybeFetchProfileFrame" /* 8766 */;
import ProfileFrameConstants from "ProfileFrameConstants" /* 8786 */;
import NameplateUtils from "NameplateUtils" /* 9493 */;
import ProfileFrameSamplePreviewDefault from "ProfileFrameSamplePreview" /* 9496 */;
import FamilyCenterActivityPurchaseRowUtils from "FamilyCenterActivityPurchaseRowUtils" /* 16751 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

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
  let tmp3 = null;
  if (null != avatarDecorationPreviewUrl) {
    const obj3 = { uri: avatarDecorationPreviewUrl };
    tmp3 = jsx(FastImageDefault, { source: obj3, style: styles.avatarDecorationPreview, fadeDuration: 0 });
  }
  return tmp3;
}
function NameplatePreviewImage(styles) {
  styles = styles.styles;
  const nameplateData = styles.nameplateData;
  const obj = NameplateUtils;
  const staticImageUrl = obj.getNameplateAssets(nameplateData).staticImageUrl;
  let tmp2 = null;
  if (null != staticImageUrl) {
    tmp2 = <View style={styles.nameplateContainer}>{null}</View>;
    const obj4 = { uri: staticImageUrl };
  }
  return tmp2;
}
function ProfileEffectPreviewImage(arg0) {
  let product;
  let styles;
  ({ product, styles } = arg0);
  const obj = FamilyCenterActivityPurchaseRowUtils;
  const profileEffectPreviewUrl = obj.getProfileEffectPreviewUrl(product);
  let tmp3 = null;
  if (null != profileEffectPreviewUrl) {
    const obj3 = { uri: profileEffectPreviewUrl };
    tmp3 = jsx(FastImageDefault, { source: obj3, style: styles.avatarDecorationPreview, fadeDuration: 0 });
  }
  return tmp3;
}
function ProfileFramePreviewImage(arg0) {
  let product;
  let styles;
  ({ product, styles } = arg0);
  const tmp3 = useMaybeFetchProfileFrameDefault(product.skuId);
  let tmp4 = null;
  if (null != tmp3) {
    ({ profileFrame: tmp3, previewWidth: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE * closure_4, previewHeight: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE, profileBackgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW });
    ProfileFrameSamplePreviewDefault;
    tmp4 = <View style={styles.profileFrameContainer}>{null}</View>;
  }
  return tmp4;
}
function SubscriptionPreview(arg0) {
  let styles;
  let subscriptionPlanId;
  ({ subscriptionPlanId, styles } = arg0);
  if (null == subscriptionPlanId) {
    return <View style={styles.purchasePlaceholder}>{null}</View>;
  } else {
    const obj4 = FamilyCenterActivityPurchaseRowUtils;
    if (obj4.isGuildBoostSubscription(subscriptionPlanId)) {
      let NitroWheelIcon = tmp5(9899).BoostGemIcon;
    } else {
      NitroWheelIcon = tmp5(9506).NitroWheelIcon;
    }
    return <tmp8 style={styles.purchasePlaceholder}>{null}</tmp8>;
  }
}
function CollectiblePreview(arg0) {
  let product;
  let styles;
  ({ product, styles } = arg0);
  if (null == product) {
    return <View style={styles.purchasePlaceholder}>{null}</View>;
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
      return <View style={styles.purchasePlaceholder}>{null}</View>;
    }
  }
}
const View = react_native.View;
let closure_4 = ProfileFrameConstants.PROFILE_FRAME_ASPECT_RATIO;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { purchasePlaceholder: size, avatarDecorationPreview: size1, nameplateContainer: size2, nameplatePreview: size3, profileFrameContainer: size4 };
size = { width: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE, height: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, display: "flex", alignItems: "center", justifyContent: "center", marginRight: 12 };
createStyles = createStyles.createStyles;
size1 = { width: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE, height: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE, marginRight: 12 };
size2 = { width: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE, height: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE, marginRight: 12, borderRadius: nativeDefault.radii.xs, overflow: "hidden", position: "relative" };
size3 = { position: "absolute", right: 0, width: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE * FamilyCenterActivityPurchaseRowUtils.NAMEPLATE_ASPECT_RATIO, height: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE };
size4 = { width: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE, height: FamilyCenterActivityPurchaseRowUtils.PREVIEW_SIZE, marginRight: 12, alignItems: "center", justifyContent: "center" };
let closure_6 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityItemPreview.tsx");

export default function FamilyCenterActivityItemPreview(arg0) {
  let displayName;
  let isSubscription;
  let product;
  let subscriptionPlanId;
  let tmp2Result;
  ({ displayName, product, isSubscription, subscriptionPlanId } = arg0);
  const tmp = closure_6();
  if (isSubscription) {
    const obj2 = { subscriptionPlanId, styles: tmp };
    tmp2Result = tmp2(SubscriptionPreview, obj2);
  } else {
    const obj3 = { product, styles: tmp };
    tmp2Result = tmp2(CollectiblePreview, obj3);
  }
  return <tmp3 accessible accessibilityLabel={displayName}>{tmp2Result}</tmp3>;
};
