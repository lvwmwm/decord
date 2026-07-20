// Module ID: 9678
// Function ID: 75332
// Dependencies: []

// Module 9678
const View = arg1(dependencyMap[1]).View;
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
let closure_6 = arg1(dependencyMap[3]).createStyles(() => {
  let obj = { gradient: { minHeight: 60 }, bannerImage: { -9223372036854775808: null, 0: null, 9223372036854775807: null, 9223372036854775807: null, 9223372036854775807: null, -9223372036854775808: null } };
  obj = { paddingTop: importDefault(dependencyMap[4]).space.PX_12, paddingBottom: importDefault(dependencyMap[4]).space.PX_12, paddingStart: importDefault(dependencyMap[4]).space.PX_24, paddingEnd: 120 };
  obj.content = obj;
  obj.heading = {};
  obj.subheading = {};
  obj.logoContainer = { "Null": "<string:2353153370>", "Null": "<string:268435723>", "Null": "<string:1358955077>", "Null": "<string:24223002>", "Null": "<string:1358954496>", "Null": "SHORT" };
  const items = [{ rotate: "-7deg" }, { translateY: 8 }];
  obj.logoContainerLargeTilted = { transform: items };
  obj.logo = {};
  obj.logoLargeTilted = {};
  return obj;
});
const obj2 = arg1(dependencyMap[3]);
const memoResult = importAllResult.memo(function PremiumGiftPlanSelectPromotionalBanner(giftPlanSelectionCardBannerComponent) {
  let claimableRewards;
  let isSelected;
  let onLayout;
  giftPlanSelectionCardBannerComponent = giftPlanSelectionCardBannerComponent.giftPlanSelectionCardBannerComponent;
  ({ claimableRewards, isSelected, onLayout } = giftPlanSelectionCardBannerComponent);
  const tmp = callback3();
  const gradient = giftPlanSelectionCardBannerComponent.gradient;
  let logoLargeTilted = giftPlanSelectionCardBannerComponent.assetVariant === arg1(dependencyMap[5]).GiftPlanSelectionCardBanner_AssetVariant.LARGE_TILTED;
  let obj = arg1(dependencyMap[6]);
  const themeAndReducedMotionAwareAssetUrl = obj.useThemeAndReducedMotionAwareAssetUrl(giftPlanSelectionCardBannerComponent.mobileBannerAsset);
  let obj1 = arg1(dependencyMap[6]);
  const themeAndReducedMotionAwareAssetUrl1 = obj1.useThemeAndReducedMotionAwareAssetUrl(giftPlanSelectionCardBannerComponent.avatarAsset, true);
  obj = { style: tmp.gradient, useAngle: true };
  let angle;
  if (null != gradient) {
    angle = gradient.angle;
  }
  let num = 90;
  if (null != angle) {
    num = angle;
  }
  obj.angle = num;
  obj.angleCenter = {};
  let colors;
  if (null != gradient) {
    colors = gradient.colors;
  }
  if (null == colors) {
    colors = [];
  }
  obj.colors = colors;
  obj.onLayout = onLayout;
  let tmp7 = null != themeAndReducedMotionAwareAssetUrl;
  if (tmp7) {
    obj = { style: tmp.bannerImage, resizeMode: "cover" };
    obj1 = { uri: themeAndReducedMotionAwareAssetUrl };
    obj.source = obj1;
    tmp7 = callback(importDefault(dependencyMap[8]), obj);
  }
  const items = [tmp7, , ];
  const obj2 = { style: tmp.content };
  const obj3 = { Promise: true, marginTop: true, flags: true, style: tmp.heading };
  const intl = arg1(dependencyMap[10]).intl;
  obj3.children = intl.string(arg1(dependencyMap[10]).t.OEtqpm);
  const items1 = [callback(arg1(dependencyMap[9]).Text, obj3), ];
  const obj4 = { Promise: "r", marginTop: "promptContainer", flags: "Array", style: tmp.subheading };
  const intl2 = arg1(dependencyMap[10]).intl;
  obj4.children = intl2.formatToPlainString(arg1(dependencyMap[10]).t.2h5M+X, { availableCount: claimableRewards.length });
  items1[1] = callback(arg1(dependencyMap[9]).Text, obj4);
  obj2.children = items1;
  items[1] = callback2(View, obj2);
  let tmp12Result = null != themeAndReducedMotionAwareAssetUrl1;
  if (tmp12Result) {
    const obj6 = {};
    const items2 = [tmp.logoContainer, ];
    let logoContainerLargeTilted = logoLargeTilted;
    if (logoLargeTilted) {
      logoContainerLargeTilted = tmp.logoContainerLargeTilted;
    }
    items2[1] = logoContainerLargeTilted;
    obj6.style = items2;
    const obj7 = { shouldAnimate: isSelected };
    const items3 = [tmp.logo, ];
    if (logoLargeTilted) {
      logoLargeTilted = tmp.logoLargeTilted;
    }
    items3[1] = logoLargeTilted;
    obj7.promoRotatingStyle = items3;
    obj7.rotatingAvatarImageUrl = themeAndReducedMotionAwareAssetUrl1;
    obj6.children = callback(importDefault(dependencyMap[11]), obj7);
    tmp12Result = callback(View, obj6);
    const tmp12 = callback;
    const tmp13 = View;
    const tmp14 = callback;
    const tmp17 = importDefault(dependencyMap[11]);
  }
  items[2] = tmp12Result;
  obj.children = items;
  return callback2(importDefault(dependencyMap[7]), obj);
});
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/premium/native/gifting/PremiumGiftPlanSelectPromotionalBanner.tsx");

export default memoResult;
