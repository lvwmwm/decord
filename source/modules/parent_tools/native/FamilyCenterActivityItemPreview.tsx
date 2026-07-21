// Module ID: 13683
// Function ID: 103567
// Name: AvatarDecorationPreviewImage
// Dependencies: []
// Exports: default

// Module 13683 (AvatarDecorationPreviewImage)
function AvatarDecorationPreviewImage(arg0) {
  let product;
  let styles;
  ({ product, styles } = arg0);
  let obj = arg1(dependencyMap[5]);
  const avatarDecorationPreviewUrl = obj.getAvatarDecorationPreviewUrl(product);
  let tmp2 = null;
  if (null != avatarDecorationPreviewUrl) {
    obj = {};
    obj = { uri: avatarDecorationPreviewUrl };
    obj.source = obj;
    obj.style = styles.avatarDecorationPreview;
    obj.fadeDuration = 0;
    tmp2 = <closure_4 {...obj} />;
  }
  return tmp2;
}
function NameplatePreviewImage(styles) {
  styles = styles.styles;
  let obj = arg1(dependencyMap[7]);
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
    obj.children = <closure_4 {...obj} />;
    tmp = <closure_3 {...obj} />;
  }
  return tmp;
}
function ProfileEffectPreviewImage(arg0) {
  let product;
  let styles;
  ({ product, styles } = arg0);
  let obj = arg1(dependencyMap[5]);
  const profileEffectPreviewUrl = obj.getProfileEffectPreviewUrl(product);
  let tmp2 = null;
  if (null != profileEffectPreviewUrl) {
    obj = {};
    obj = { uri: profileEffectPreviewUrl };
    obj.source = obj;
    obj.style = styles.avatarDecorationPreview;
    obj.fadeDuration = 0;
    tmp2 = <closure_4 {...obj} />;
  }
  return tmp2;
}
function ProfileFramePreviewImage(arg0) {
  let product;
  let styles;
  ({ product, styles } = arg0);
  const tmp = importDefault(dependencyMap[8])(product.skuId, "FamilyCenterActivityItemPreview");
  let tmp2 = null;
  if (null != tmp) {
    let obj = { style: styles.profileFrameContainer };
    obj = { profileFrame: tmp, previewWidth: arg1(dependencyMap[5]).PREVIEW_SIZE * closure_5, previewHeight: arg1(dependencyMap[5]).PREVIEW_SIZE, profileBackgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW };
    obj.children = jsx(importDefault(dependencyMap[9]), obj);
    tmp2 = <closure_3 {...obj} />;
    const tmp8 = importDefault(dependencyMap[9]);
  }
  return tmp2;
}
function SubscriptionPreview(arg0) {
  let styles;
  let subscriptionPlanId;
  ({ subscriptionPlanId, styles } = arg0);
  if (null == subscriptionPlanId) {
    let obj = { style: styles.purchasePlaceholder };
    obj = { size: "custom", style: { bhk: false, bic: "internal" } };
    obj.children = jsx(arg1(dependencyMap[10]).ShopIcon, obj);
    return <closure_3 {...obj} />;
  } else {
    const obj1 = { style: styles.purchasePlaceholder };
    if (obj4.isGuildBoostSubscription(subscriptionPlanId)) {
      let NitroWheelIcon = tmp11(tmp12[11]).BoostGemIcon;
    } else {
      NitroWheelIcon = tmp11(tmp12[12]).NitroWheelIcon;
    }
    obj = { size: "custom", style: { bhk: false, bic: "internal" } };
    obj1.children = <NitroWheelIcon {...obj} />;
    return <closure_3 {...obj1} />;
  }
}
function CollectiblePreview(arg0) {
  let product;
  let styles;
  ({ product, styles } = arg0);
  if (null == product) {
    let obj = { style: styles.purchasePlaceholder };
    obj = { size: "custom", style: { bhk: false, bic: "internal" } };
    obj.children = jsx(arg1(dependencyMap[10]).ShopIcon, obj);
    return <closure_3 {...obj} />;
  } else {
    const type = product.type;
    if (arg1(dependencyMap[13]).CollectiblesItemType.AVATAR_DECORATION === type) {
      const obj1 = { product, styles };
      return <AvatarDecorationPreviewImage {...obj1} />;
    } else if (arg1(dependencyMap[13]).CollectiblesItemType.NAMEPLATE === type) {
      let obj4 = arg1(dependencyMap[14]);
      const nameplateDataFromProductRecord = obj4.getNameplateDataFromProductRecord(product);
      let tmp13 = null;
      if (null != nameplateDataFromProductRecord) {
        const obj2 = { nameplateData: nameplateDataFromProductRecord, styles };
        tmp13 = <NameplatePreviewImage {...obj2} />;
      }
      return tmp13;
    } else if (arg1(dependencyMap[13]).CollectiblesItemType.PROFILE_EFFECT === type) {
      const obj3 = { product, styles };
      return <ProfileEffectPreviewImage {...obj3} />;
    } else if (arg1(dependencyMap[13]).CollectiblesItemType.PROFILE_FRAME === type) {
      obj4 = { product, styles };
      return <ProfileFramePreviewImage {...obj4} />;
    } else {
      obj = { style: styles.purchasePlaceholder };
      const obj5 = { size: "custom", style: { bhk: false, bic: "internal" } };
      obj.children = jsx(arg1(dependencyMap[10]).ShopIcon, obj5);
      return <closure_3 {...obj} />;
    }
  }
}
importAll(dependencyMap[0]);
({ View: closure_3, Image: closure_4 } = arg1(dependencyMap[1]));
let closure_5 = arg1(dependencyMap[2]).PROFILE_FRAME_ASPECT_RATIO;
const jsx = arg1(dependencyMap[3]).jsx;
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { width: arg1(dependencyMap[5]).PREVIEW_SIZE, height: arg1(dependencyMap[5]).PREVIEW_SIZE, borderRadius: importDefault(dependencyMap[6]).radii.xs, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH, display: "flex", alignItems: "center", justifyContent: "center", marginRight: 12 };
obj.purchasePlaceholder = obj;
const tmp3 = arg1(dependencyMap[1]);
obj.avatarDecorationPreview = { width: arg1(dependencyMap[5]).PREVIEW_SIZE, height: arg1(dependencyMap[5]).PREVIEW_SIZE, marginRight: 12 };
const obj1 = { width: arg1(dependencyMap[5]).PREVIEW_SIZE, height: arg1(dependencyMap[5]).PREVIEW_SIZE, marginRight: 12 };
obj.nameplateContainer = { width: arg1(dependencyMap[5]).PREVIEW_SIZE, height: arg1(dependencyMap[5]).PREVIEW_SIZE, borderRadius: importDefault(dependencyMap[6]).radii.xs };
const obj3 = { width: arg1(dependencyMap[5]).PREVIEW_SIZE * arg1(dependencyMap[5]).NAMEPLATE_ASPECT_RATIO, height: arg1(dependencyMap[5]).PREVIEW_SIZE };
obj.nameplatePreview = obj3;
const obj2 = { width: arg1(dependencyMap[5]).PREVIEW_SIZE, height: arg1(dependencyMap[5]).PREVIEW_SIZE, borderRadius: importDefault(dependencyMap[6]).radii.xs };
obj.profileFrameContainer = { width: arg1(dependencyMap[5]).PREVIEW_SIZE, height: arg1(dependencyMap[5]).PREVIEW_SIZE };
let closure_7 = obj.createStyles(obj);
const obj4 = { width: arg1(dependencyMap[5]).PREVIEW_SIZE, height: arg1(dependencyMap[5]).PREVIEW_SIZE };
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityItemPreview.tsx");

export default function FamilyCenterActivityItemPreview(arg0) {
  let displayName;
  let isSubscription;
  let product;
  let subscriptionPlanId;
  ({ displayName, product, isSubscription, subscriptionPlanId } = arg0);
  const tmp = callback();
  let obj = { accessible: true, accessibilityLabel: displayName };
  if (isSubscription) {
    obj = { subscriptionPlanId, styles: tmp };
    let tmp4Result = tmp4(SubscriptionPreview, obj);
  } else {
    obj = { product, styles: tmp };
    tmp4Result = tmp4(CollectiblePreview, obj);
  }
  obj.children = tmp4Result;
  return <closure_3 {...obj} />;
};
