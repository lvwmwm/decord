// Module ID: 9725
// Function ID: 75626
// Dependencies: [31, 27, 33, 4130, 689, 7145, 9722, 4554, 5085, 4126, 1212, 9726, 2]

// Module 9725
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let closure_6 = _createForOfIteratorHelperLoose.createStyles(() => {
  let obj = { gradient: { minHeight: 60 }, bannerImage: { position: "absolute", top: 0, left: 0, right: 0, width: "100%", aspectRatio: 5 } };
  obj = { minHeight: 60, justifyContent: "center", gap: 2, paddingTop: importDefault(689).space.PX_12, paddingBottom: importDefault(689).space.PX_12, paddingStart: importDefault(689).space.PX_24, paddingEnd: 120 };
  obj.content = obj;
  obj.heading = {};
  obj.subheading = {};
  obj.logoContainer = { position: "absolute", top: 0, bottom: 0, right: 10, justifyContent: "center", alignItems: "center" };
  const items = [{ rotate: "-7deg" }, { translateY: 8 }];
  obj.logoContainerLargeTilted = { transform: items };
  obj.logo = { width: 95, height: 95 };
  obj.logoLargeTilted = { width: 120, height: 120 };
  return obj;
});
const memoResult = require("result").memo(function PremiumGiftPlanSelectPromotionalBanner(giftPlanSelectionCardBannerComponent) {
  let claimableRewards;
  let isSelected;
  let onLayout;
  giftPlanSelectionCardBannerComponent = giftPlanSelectionCardBannerComponent.giftPlanSelectionCardBannerComponent;
  ({ claimableRewards, isSelected, onLayout } = giftPlanSelectionCardBannerComponent);
  const tmp = callback3();
  const gradient = giftPlanSelectionCardBannerComponent.gradient;
  let logoLargeTilted = giftPlanSelectionCardBannerComponent.assetVariant === require(7145) /* _isNativeReflectConstruct */.GiftPlanSelectionCardBanner_AssetVariant.LARGE_TILTED;
  let obj = require(9722) /* useThemeAndReducedMotionAwareAssetUrl */;
  const themeAndReducedMotionAwareAssetUrl = obj.useThemeAndReducedMotionAwareAssetUrl(giftPlanSelectionCardBannerComponent.mobileBannerAsset);
  let obj1 = require(9722) /* useThemeAndReducedMotionAwareAssetUrl */;
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
  obj.angleCenter = { x: 0.5, y: 0.5 };
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
    tmp7 = callback(importDefault(5085), obj);
  }
  const items = [tmp7, , ];
  const obj2 = { style: tmp.content };
  const obj3 = { style: tmp.heading, variant: "text-md/bold", color: "text-overlay-light" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj3.children = intl.string(require(1212) /* getSystemLocale */.t.OEtqpm);
  const items1 = [callback(require(4126) /* Text */.Text, obj3), ];
  const obj4 = { style: tmp.subheading, variant: "text-md/medium", color: "text-overlay-light" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj4.children = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t["2h5M+X"], { availableCount: claimableRewards.length });
  items1[1] = callback(require(4126) /* Text */.Text, obj4);
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
    obj6.children = callback(importDefault(9726), obj7);
    tmp12Result = callback(View, obj6);
    const tmp12 = callback;
    const tmp13 = View;
    const tmp14 = callback;
    const tmp17 = importDefault(9726);
  }
  items[2] = tmp12Result;
  obj.children = items;
  return callback2(importDefault(4554), obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/premium/native/gifting/PremiumGiftPlanSelectPromotionalBanner.tsx");

export default memoResult;
