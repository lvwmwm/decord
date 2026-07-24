// Module ID: 9721
// Function ID: 75613
// Dependencies: [57, 31, 27, 7129, 1851, 482, 33, 689, 4130, 5052, 566, 7429, 9722, 8061, 9723, 8849, 9724, 5085, 7959, 9725, 8177, 8175, 4126, 1212, 8182, 4543, 2]

// Module 9721
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import GuildFeatures from "GuildFeatures";
import { Fonts } from "sum";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_7;
let closure_8;
const require = arg1;
({ PremiumTypes: closure_7, SubscriptionIntervalTypes: closure_8 } = GuildFeatures);
({ jsx: closure_10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
let obj = {};
obj = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.default = obj;
obj.compact = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_4 };
obj.smallCompact = { paddingVertical: 2 };
let obj2 = {};
let obj1 = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_4 };
obj2.default = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
let obj3 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
obj2.compact = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_12 };
let obj4 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_12 };
obj2.smallCompact = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj6 = {};
let obj5 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj6.default = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj7 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj6.compact = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_12 };
let obj8 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_12 };
obj6.smallCompact = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj10 = {};
let obj9 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj10.default = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
let obj11 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
obj10.compact = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_12 };
let obj12 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_12 };
obj10.smallCompact = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
let closure_17 = _createForOfIteratorHelperLoose.createStyles(() => {
  let obj = {};
  obj = { overflow: "hidden", borderRadius: importDefault(689).radii.sm };
  obj.promotional = obj;
  obj = { justifyContent: "flex-start", borderRadius: importDefault(689).radii.sm, backgroundColor: importDefault(689).colors.BG_SURFACE_RAISED };
  const merged = Object.assign(importDefault(689).shadows.SHADOW_LOW);
  obj.card = obj;
  obj.logo = { marginTop: importDefault(689).space.PX_40, marginStart: importDefault(689).space.PX_24 };
  const obj1 = { marginTop: importDefault(689).space.PX_40, marginStart: importDefault(689).space.PX_24 };
  obj.promotionalLogo = { marginTop: importDefault(689).space.PX_24 };
  const obj2 = { marginTop: importDefault(689).space.PX_24 };
  obj.promotionalLogoSingleLine = { marginTop: importDefault(689).space.PX_32 };
  obj.promotionalLogoSmallCompact = { marginTop: 18 };
  const obj3 = { marginTop: importDefault(689).space.PX_32 };
  obj.pricing = { maxWidth: 140, marginStart: importDefault(689).space.PX_24 };
  const obj4 = { maxWidth: 140, marginStart: importDefault(689).space.PX_24 };
  obj.featureTitle = { marginStart: importDefault(689).space.PX_24 };
  const obj5 = { marginStart: importDefault(689).space.PX_24 };
  obj.features = { marginTop: importDefault(689).space.PX_8, marginHorizontal: importDefault(689).space.PX_24 };
  const obj6 = { marginTop: importDefault(689).space.PX_8, marginHorizontal: importDefault(689).space.PX_24 };
  obj.button = { marginHorizontal: importDefault(689).space.PX_24, marginBottom: importDefault(689).space.PX_24 };
  const obj7 = { marginHorizontal: importDefault(689).space.PX_24, marginBottom: importDefault(689).space.PX_24 };
  obj.promotionalButton = { marginTop: importDefault(689).space.PX_12 };
  obj.featureIcon = { width: 24, height: 24 };
  const obj9 = {};
  const obj8 = { marginTop: importDefault(689).space.PX_12 };
  const merged1 = Object.assign(importDefault(5052)(Fonts.PRIMARY_NORMAL, importDefault(689).colors.WHITE, 16));
  obj9["marginStart"] = -8;
  obj.featureText = obj9;
  obj.wumpusNoPrice = { height: 75, right: 8 };
  obj.promotionalCardImage = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 };
  obj.promotionalBackground = { position: "absolute", height: 300, width: 150, right: 0 };
  return obj;
});
let obj13 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
const memoResult = importAllResult.memo(function PremiumGiftFeaturesCard(variant) {
  let c0;
  let claimableRewards;
  let isSelected;
  let premiumType;
  let style;
  let tmp16;
  ({ premiumType, style, claimableRewards, isSelected } = variant);
  if (isSelected === undefined) {
    isSelected = true;
  }
  let str = variant.variant;
  if (str === undefined) {
    str = "default";
  }
  let obj = { premiumType: 0, onPress: 0, style: 0, claimableRewards: 0, isSelected: 0, variant: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(variant, obj);
  let _require;
  let obj1 = _require(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj1.useStateFromStores(items, () => {
    const marketingComponentByType = outer1_6.getMarketingComponentByType(_undefined(outer1_2[11]).MarketingComponentType.GIFT_PLAN_SELECTION_CARD_BANNER);
    let prop = null;
    if (null != marketingComponentByType) {
      prop = null;
      if ("giftPlanSelectionCardBanner" === marketingComponentByType.properties.properties.oneofKind) {
        prop = marketingComponentByType.properties.properties.giftPlanSelectionCardBanner;
      }
    }
    return prop;
  });
  let obj2 = _require(9722);
  let cardAsset;
  if (null != stateFromStores) {
    cardAsset = stateFromStores.cardAsset;
  }
  const themeAndReducedMotionAwareAssetUrl = obj2.useThemeAndReducedMotionAwareAssetUrl(cardAsset);
  let obj3 = _require(9722);
  let backgroundAsset;
  if (null != stateFromStores) {
    backgroundAsset = stateFromStores.backgroundAsset;
  }
  const themeAndReducedMotionAwareAssetUrl1 = obj3.useThemeAndReducedMotionAwareAssetUrl(backgroundAsset);
  let tmp8 = null != claimableRewards;
  if (tmp8) {
    tmp8 = 1 === claimableRewards.length;
  }
  const tmp9 = callback4(tmp8);
  let stringResult1 = importDefault(9723)(premiumType, constants.MONTH);
  const tmp10 = importDefault(8061)(premiumType);
  let obj4 = importDefault(8849);
  const config = obj4.useConfig({ location: "PremiumGiftFeaturesCard" });
  const showGiftPrice = config.showGiftPrice;
  let promotionalButton = importDefault(9724)(premiumType) && null != claimableRewards && claimableRewards.length > 0;
  let tmp14 = promotionalButton;
  if (promotionalButton) {
    tmp14 = null != themeAndReducedMotionAwareAssetUrl;
  }
  const tmp12 = importDefault(9723)(premiumType, constants.YEAR);
  [tmp16, c0] = callback(importAllResult.useState(0), 2);
  obj = {};
  const items1 = [tmp9.card, style, ];
  let promotional = promotionalButton;
  callback = importAllResult.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.height);
  }, []);
  if (promotionalButton) {
    promotional = tmp9.promotional;
  }
  items1[2] = promotional;
  obj.style = items1;
  let tmp20 = tmp14;
  if (tmp14) {
    obj = { style: tmp9.promotionalCardImage, resizeMode: "cover" };
    obj1 = { uri: themeAndReducedMotionAwareAssetUrl };
    obj.source = obj1;
    tmp20 = callback2(importDefault(5085), obj);
  }
  const items2 = [tmp20, ];
  obj2 = { premiumType };
  let num3 = 1;
  const tmp15 = callback(importAllResult.useState(0), 2);
  const tmp18 = callback3;
  const tmp19 = View;
  const tmp24 = callback3;
  if (tmp14) {
    num3 = 0.82;
  }
  obj2.opacity = num3;
  const items3 = [tmp9.card, style, ];
  let promotional2 = promotionalButton;
  if (promotionalButton) {
    promotional2 = tmp9.promotional;
  }
  items3[2] = promotional2;
  obj2.style = items3;
  const merged1 = Object.assign(merged);
  if (promotionalButton) {
    obj3 = {};
    let tmp34 = null != stateFromStores;
    if (tmp34) {
      obj4 = { giftPlanSelectionCardBannerComponent: stateFromStores, claimableRewards, isSelected, onLayout: callback };
      tmp34 = callback2(importDefault(9725), obj4);
    }
    const items4 = [tmp34, ];
    let tmp38 = null != themeAndReducedMotionAwareAssetUrl1;
    if (tmp38) {
      const obj5 = {};
      const items5 = [tmp9.promotionalBackground, ];
      const obj6 = { top: tmp16 };
      items5[1] = obj6;
      obj5.style = items5;
      obj5.resizeMode = "cover";
      const obj7 = { uri: themeAndReducedMotionAwareAssetUrl1 };
      obj5.source = obj7;
      tmp38 = callback2(importDefault(5085), obj5);
    }
    items4[1] = tmp38;
    obj3.children = items4;
    let tmp27Result = callback3(closure_11, obj3);
    const tmp32 = callback3;
    const tmp33 = closure_11;
  } else {
    const obj8 = { premiumType };
    let wumpusNoPrice = !showGiftPrice;
    if (wumpusNoPrice) {
      wumpusNoPrice = tmp9.wumpusNoPrice;
    }
    obj8.style = wumpusNoPrice;
    tmp27Result = callback2(importDefault(8177), obj8);
    const tmp27 = callback2;
    const tmp30 = importDefault(8177);
  }
  const items6 = [tmp27Result, , , , , , ];
  const obj9 = {};
  const items7 = [tmp9.logo, , ];
  if (!promotionalButton) {
    items7[1] = promotionalButton;
    let promotionalLogoSmallCompact = promotionalButton;
    if (promotionalButton) {
      promotionalLogoSmallCompact = "smallCompact" === str;
    }
    if (promotionalLogoSmallCompact) {
      promotionalLogoSmallCompact = tmp9.promotionalLogoSmallCompact;
    }
    items7[2] = promotionalLogoSmallCompact;
    obj9.style = items7;
    obj9.premiumType = premiumType;
    items6[1] = callback2(tmp43, obj9);
    if (!showGiftPrice) {
      items6[2] = showGiftPrice;
      const obj10 = { style: null, variant: "heading-sm/bold", color: "text-overlay-light" };
      const items8 = [tmp9.featureTitle, obj2[str]];
      obj10.style = items8;
      const intl3 = _require(1212).intl;
      obj10.children = intl3.string(_require(1212).t.JgsVht);
      items6[3] = callback2(_require(4126).Text, obj10);
      const obj11 = { style: tmp9.features, features: tmp10 };
      ({ featureIcon: obj21.iconStyle, featureText: obj21.labelStyle } = tmp9);
      obj11.rowStyle = obj[str];
      items6[4] = callback2(importDefault(8182), obj11);
      const obj12 = {};
      const obj13 = { flexGrow: 1 };
      obj12.style = obj13;
      items6[5] = callback2(View, obj12);
      const obj14 = {};
      const items9 = [tmp9.button, obj10[str], ];
      if (promotionalButton) {
        promotionalButton = tmp9.promotionalButton;
      }
      items9[2] = promotionalButton;
      obj14.style = items9;
      const obj15 = { variant: "primary-overlay" };
      if (premiumType === TIER_0.TIER_0) {
        const intl5 = _require(1212).intl;
        let stringResult = intl5.string(_require(1212).t.rk4Uu8);
      } else {
        const intl4 = _require(1212).intl;
        stringResult = intl4.string(_require(1212).t.Ve9Ge6);
      }
      obj15.text = stringResult;
      obj15.onPress = variant.onPress;
      obj14.children = callback2(_require(4543).Button, obj15);
      items6[6] = callback2(View, obj14);
      obj2["children"] = items6;
      items2[1] = tmp24(tmp25, obj2);
      obj.children = items2;
      return tmp18(tmp19, obj);
    } else if (config.useNewCopy) {
      const obj16 = { style: null, variant: "text-sm/medium", color: "text-overlay-light" };
      const items10 = [tmp9.pricing, obj6[str]];
      obj16.style = items10;
      const items11 = [stringResult1, " ", ];
      const intl2 = _require(1212).intl;
      stringResult1 = intl2.string(_require(1212).t.lVQycU);
      items11[2] = stringResult1;
      obj16.children = items11;
      let tmp49 = callback3(_require(4126).Text, obj16);
    } else {
      const obj17 = { style: null, variant: "text-sm/medium", color: "text-overlay-light" };
      const items12 = [tmp9.pricing, obj6[str]];
      obj17.style = items12;
      const intl = _require(1212).intl;
      const obj18 = { monthlyPrice: stringResult1, yearlyPrice: tmp12 };
      obj17.children = intl.format(_require(1212).t.Ob6fwp, obj18);
      tmp49 = callback2(_require(4126).Text, obj17);
    }
  }
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/premium/native/gifting/PremiumGiftFeaturesCard.tsx");

export default memoResult;
