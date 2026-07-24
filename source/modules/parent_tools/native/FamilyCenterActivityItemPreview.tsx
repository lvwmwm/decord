// Module ID: 13857
// Function ID: 106102
// Name: AvatarDecorationPreviewImage
// Dependencies: [31, 27, 8301, 33, 4130, 13856, 689, 8274, 8285, 8738, 11290, 7477, 7486, 1876, 1873, 2]
// Exports: default

// Module 13857 (AvatarDecorationPreviewImage)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { PROFILE_FRAME_ASPECT_RATIO as closure_5 } from "PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
const require = arg1;
function AvatarDecorationPreviewImage(arg0) {
  let product;
  let styles;
  ({ product, styles } = arg0);
  let obj = require(13856) /* getCollectibleTypeName */;
  const avatarDecorationPreviewUrl = obj.getAvatarDecorationPreviewUrl(product);
  let tmp2 = null;
  if (null != avatarDecorationPreviewUrl) {
    obj = {};
    obj = { uri: avatarDecorationPreviewUrl };
    obj.source = obj;
    obj.style = styles.avatarDecorationPreview;
    obj.fadeDuration = 0;
    tmp2 = <closure_4 uri={avatarDecorationPreviewUrl} />;
  }
  return tmp2;
}
function NameplatePreviewImage(styles) {
  styles = styles.styles;
  let obj = require(8274) /* getNameplateAssets */;
  const staticImageUrl = obj.getNameplateAssets(styles.nameplateData).staticImageUrl;
  let tmp = null;
  if (null != staticImageUrl) {
    obj = { style: styles.nameplateContainer };
    obj = {};
    const obj1 = { uri: staticImageUrl };
    obj.source = obj1;
    obj.style = styles.nameplatePreview;
    obj.resizeMode = "cover";
    obj.fadeDuration = 0;
    obj.children = <closure_4 />;
    tmp = <closure_3 />;
  }
  return tmp;
}
function ProfileEffectPreviewImage(arg0) {
  let product;
  let styles;
  ({ product, styles } = arg0);
  let obj = require(13856) /* getCollectibleTypeName */;
  const profileEffectPreviewUrl = obj.getProfileEffectPreviewUrl(product);
  let tmp2 = null;
  if (null != profileEffectPreviewUrl) {
    obj = {};
    obj = { uri: profileEffectPreviewUrl };
    obj.source = obj;
    obj.style = styles.avatarDecorationPreview;
    obj.fadeDuration = 0;
    tmp2 = <closure_4 uri={profileEffectPreviewUrl} />;
  }
  return tmp2;
}
function ProfileFramePreviewImage(arg0) {
  let product;
  let styles;
  ({ product, styles } = arg0);
  const tmp = importDefault(8285)(product.skuId, "FamilyCenterActivityItemPreview");
  let tmp2 = null;
  if (null != tmp) {
    let obj = { style: styles.profileFrameContainer };
    obj = { profileFrame: tmp, previewWidth: require(13856) /* getCollectibleTypeName */.PREVIEW_SIZE * closure_5, previewHeight: require(13856) /* getCollectibleTypeName */.PREVIEW_SIZE, profileBackgroundColor: importDefault(689).colors.BACKGROUND_BASE_LOW };
    obj.children = jsx(importDefault(8738), { profileFrame: tmp, previewWidth: require(13856) /* getCollectibleTypeName */.PREVIEW_SIZE * closure_5, previewHeight: require(13856) /* getCollectibleTypeName */.PREVIEW_SIZE, profileBackgroundColor: importDefault(689).colors.BACKGROUND_BASE_LOW });
    tmp2 = <closure_3 profileFrame={tmp} previewWidth={require(13856) /* getCollectibleTypeName */.PREVIEW_SIZE * closure_5} previewHeight={require(13856) /* getCollectibleTypeName */.PREVIEW_SIZE} profileBackgroundColor={importDefault(689).colors.BACKGROUND_BASE_LOW} />;
    const tmp8 = importDefault(8738);
  }
  return tmp2;
}
function SubscriptionPreview(arg0) {
  let styles;
  let subscriptionPlanId;
  ({ subscriptionPlanId, styles } = arg0);
  if (null == subscriptionPlanId) {
    let obj = { style: styles.purchasePlaceholder };
    obj = { size: "custom", style: { width: 20, height: 20 } };
    obj.children = jsx(require(11290) /* ShopIcon */.ShopIcon, { size: "custom", style: { width: 20, height: 20 } });
    return <closure_3 size="custom" style={{ width: 20, height: 20 }} />;
  } else {
    const obj1 = { style: styles.purchasePlaceholder };
    if (obj4.isGuildBoostSubscription(subscriptionPlanId)) {
      let NitroWheelIcon = tmp11(7477).BoostGemIcon;
    } else {
      NitroWheelIcon = tmp11(7486).NitroWheelIcon;
    }
    obj = { size: "custom", style: { width: 20, height: 20 } };
    obj1.children = <NitroWheelIcon size="custom" style={{ width: 20, height: 20 }} />;
    return <closure_3 style={styles.purchasePlaceholder} />;
  }
}
function CollectiblePreview(arg0) {
  let product;
  let styles;
  ({ product, styles } = arg0);
  if (null == product) {
    let obj = { style: styles.purchasePlaceholder };
    obj = { size: "custom", style: { width: 20, height: 20 } };
    obj.children = jsx(require(11290) /* ShopIcon */.ShopIcon, { size: "custom", style: { width: 20, height: 20 } });
    return <closure_3 size="custom" style={{ width: 20, height: 20 }} />;
  } else {
    const type = product.type;
    if (require(1876) /* CollectiblesItemType */.CollectiblesItemType.AVATAR_DECORATION === type) {
      const obj1 = { product, styles };
      return <AvatarDecorationPreviewImage product={product} styles={styles} />;
    } else if (require(1876) /* CollectiblesItemType */.CollectiblesItemType.NAMEPLATE === type) {
      let obj4 = require(1873) /* getNameplateData */;
      const nameplateDataFromProductRecord = obj4.getNameplateDataFromProductRecord(product);
      let tmp13 = null;
      if (null != nameplateDataFromProductRecord) {
        const obj2 = { nameplateData: nameplateDataFromProductRecord, styles };
        tmp13 = <NameplatePreviewImage nameplateData={nameplateDataFromProductRecord} styles={styles} />;
      }
      return tmp13;
    } else if (require(1876) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_EFFECT === type) {
      const obj3 = { product, styles };
      return <ProfileEffectPreviewImage product={product} styles={styles} />;
    } else if (require(1876) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME === type) {
      obj4 = { product, styles };
      return <ProfileFramePreviewImage product={product} styles={styles} />;
    } else {
      obj = { style: styles.purchasePlaceholder };
      const obj5 = { size: "custom", style: { width: 20, height: 20 } };
      obj.children = jsx(require(11290) /* ShopIcon */.ShopIcon, { size: "custom", style: { width: 20, height: 20 } });
      return <closure_3 style={styles.purchasePlaceholder} />;
    }
  }
}
({ View: closure_3, Image: closure_4 } = get_ActivityIndicator);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { width: require("getCollectibleTypeName").PREVIEW_SIZE, height: require("getCollectibleTypeName").PREVIEW_SIZE, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, display: "flex", alignItems: "center", justifyContent: "center", marginRight: 12 };
_createForOfIteratorHelperLoose.purchasePlaceholder = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.avatarDecorationPreview = { width: require("getCollectibleTypeName").PREVIEW_SIZE, height: require("getCollectibleTypeName").PREVIEW_SIZE, marginRight: 12 };
let obj2 = { width: require("getCollectibleTypeName").PREVIEW_SIZE, height: require("getCollectibleTypeName").PREVIEW_SIZE, marginRight: 12, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, overflow: "hidden", position: "relative" };
_createForOfIteratorHelperLoose.nameplateContainer = obj2;
let obj3 = { position: "absolute", right: 0, width: require("getCollectibleTypeName").PREVIEW_SIZE * require("getCollectibleTypeName").NAMEPLATE_ASPECT_RATIO, height: require("getCollectibleTypeName").PREVIEW_SIZE };
_createForOfIteratorHelperLoose.nameplatePreview = obj3;
let obj4 = { width: require("getCollectibleTypeName").PREVIEW_SIZE, height: require("getCollectibleTypeName").PREVIEW_SIZE, marginRight: 12, alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose.profileFrameContainer = obj4;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { width: require("getCollectibleTypeName").PREVIEW_SIZE, height: require("getCollectibleTypeName").PREVIEW_SIZE, marginRight: 12 };
const result = require("PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO").fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityItemPreview.tsx");

export default function FamilyCenterActivityItemPreview(arg0) {
  let displayName;
  let isSubscription;
  let product;
  let subscriptionPlanId;
  ({ displayName, product, isSubscription, subscriptionPlanId } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { accessible: true, accessibilityLabel: displayName };
  if (isSubscription) {
    obj = { subscriptionPlanId, styles: tmp };
    let tmp4Result = tmp4(SubscriptionPreview, obj);
  } else {
    obj = { product, styles: tmp };
    tmp4Result = tmp4(CollectiblePreview, obj);
  }
  obj.children = tmp4Result;
  return <closure_3 accessible accessibilityLabel={displayName} />;
};
