// Module ID: 9679
// Function ID: 75336
// Dependencies: []

// Module 9679
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
({ PremiumTypes: closure_7, SubscriptionIntervalTypes: closure_8 } = arg1(dependencyMap[4]));
const Fonts = arg1(dependencyMap[5]).Fonts;
const tmp2 = arg1(dependencyMap[4]);
({ jsx: closure_10, Fragment: closure_11, jsxs: closure_12 } = arg1(dependencyMap[6]));
let obj = {};
obj = { paddingVertical: importDefault(dependencyMap[7]).space.PX_8 };
obj.default = obj;
const tmp3 = arg1(dependencyMap[6]);
obj.compact = { paddingVertical: importDefault(dependencyMap[7]).space.PX_4 };
obj.smallCompact = { paddingVertical: 2 };
const obj2 = {};
const obj1 = { paddingVertical: importDefault(dependencyMap[7]).space.PX_4 };
obj2.default = { marginTop: importDefault(dependencyMap[7]).space.PX_24 };
const obj3 = { marginTop: importDefault(dependencyMap[7]).space.PX_24 };
obj2.compact = { marginTop: importDefault(dependencyMap[7]).space.PX_12 };
const obj4 = { marginTop: importDefault(dependencyMap[7]).space.PX_12 };
obj2.smallCompact = { marginTop: importDefault(dependencyMap[7]).space.PX_8 };
const obj6 = {};
const obj5 = { marginTop: importDefault(dependencyMap[7]).space.PX_8 };
obj6.default = { marginTop: importDefault(dependencyMap[7]).space.PX_8 };
const obj7 = { marginTop: importDefault(dependencyMap[7]).space.PX_8 };
obj6.compact = { marginTop: importDefault(dependencyMap[7]).space.PX_12 };
const obj8 = { marginTop: importDefault(dependencyMap[7]).space.PX_12 };
obj6.smallCompact = { marginTop: importDefault(dependencyMap[7]).space.PX_8 };
const obj10 = {};
const obj9 = { marginTop: importDefault(dependencyMap[7]).space.PX_8 };
obj10.default = { marginTop: importDefault(dependencyMap[7]).space.PX_24 };
const obj11 = { marginTop: importDefault(dependencyMap[7]).space.PX_24 };
obj10.compact = { marginTop: importDefault(dependencyMap[7]).space.PX_12 };
const obj12 = { marginTop: importDefault(dependencyMap[7]).space.PX_12 };
obj10.smallCompact = { marginTop: importDefault(dependencyMap[7]).space.PX_8 };
const obj13 = { marginTop: importDefault(dependencyMap[7]).space.PX_8 };
let closure_17 = arg1(dependencyMap[8]).createStyles(() => {
  let obj = {};
  obj = { overflow: "hidden", borderRadius: importDefault(dependencyMap[7]).radii.sm };
  obj.promotional = obj;
  obj = { justifyContent: "flex-start", borderRadius: importDefault(dependencyMap[7]).radii.sm, backgroundColor: importDefault(dependencyMap[7]).colors.BG_SURFACE_RAISED };
  const merged = Object.assign(importDefault(dependencyMap[7]).shadows.SHADOW_LOW);
  obj.card = obj;
  obj.logo = { marginTop: importDefault(dependencyMap[7]).space.PX_40, marginStart: importDefault(dependencyMap[7]).space.PX_24 };
  const obj1 = { marginTop: importDefault(dependencyMap[7]).space.PX_40, marginStart: importDefault(dependencyMap[7]).space.PX_24 };
  obj.promotionalLogo = { marginTop: importDefault(dependencyMap[7]).space.PX_24 };
  const obj2 = { marginTop: importDefault(dependencyMap[7]).space.PX_24 };
  obj.promotionalLogoSingleLine = { marginTop: importDefault(dependencyMap[7]).space.PX_32 };
  obj.promotionalLogoSmallCompact = { marginTop: 18 };
  const obj3 = { marginTop: importDefault(dependencyMap[7]).space.PX_32 };
  obj.pricing = { maxWidth: 140, marginStart: importDefault(dependencyMap[7]).space.PX_24 };
  const obj4 = { maxWidth: 140, marginStart: importDefault(dependencyMap[7]).space.PX_24 };
  obj.featureTitle = { marginStart: importDefault(dependencyMap[7]).space.PX_24 };
  const obj5 = { marginStart: importDefault(dependencyMap[7]).space.PX_24 };
  obj.features = { marginTop: importDefault(dependencyMap[7]).space.PX_8, marginHorizontal: importDefault(dependencyMap[7]).space.PX_24 };
  const obj6 = { marginTop: importDefault(dependencyMap[7]).space.PX_8, marginHorizontal: importDefault(dependencyMap[7]).space.PX_24 };
  obj.button = { marginHorizontal: importDefault(dependencyMap[7]).space.PX_24, marginBottom: importDefault(dependencyMap[7]).space.PX_24 };
  const obj7 = { marginHorizontal: importDefault(dependencyMap[7]).space.PX_24, marginBottom: importDefault(dependencyMap[7]).space.PX_24 };
  obj.promotionalButton = { marginTop: importDefault(dependencyMap[7]).space.PX_12 };
  obj.featureIcon = { bhk: "<string:1027735553>", bic: "<string:4143972873>" };
  const obj9 = {};
  const obj8 = { marginTop: importDefault(dependencyMap[7]).space.PX_12 };
  const merged1 = Object.assign(importDefault(dependencyMap[9])(Fonts.PRIMARY_NORMAL, importDefault(dependencyMap[7]).colors.WHITE, 16));
  obj9["marginStart"] = -8;
  obj.featureText = obj9;
  obj.wumpusNoPrice = { zIndex: true, display: true };
  obj.promotionalCardImage = { o: "center", concat: null, o: 4, borderRadius: 4, position: "rgba(0, 0, 0, 0.75)" };
  obj.promotionalBackground = {};
  return obj;
});
const obj17 = arg1(dependencyMap[8]);
const memoResult = importAllResult.memo(function PremiumGiftFeaturesCard(variant) {
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
  let obj = { 122763873: true, -959683896: true, 1365199185: true, 996213764: true, 1640500561: true, -1459858518: true };
  Object.setPrototypeOf(null);
  const merged = Object.assign(variant, obj);
  let callback;
  let obj1 = callback(dependencyMap[10]);
  const items = [closure_6];
  const stateFromStores = obj1.useStateFromStores(items, () => {
    const marketingComponentByType = marketingComponentByType.getMarketingComponentByType(_undefined(closure_2[11]).MarketingComponentType.GIFT_PLAN_SELECTION_CARD_BANNER);
    let prop = null;
    if (null != marketingComponentByType) {
      prop = null;
      if ("giftPlanSelectionCardBanner" === marketingComponentByType.properties.properties.oneofKind) {
        prop = marketingComponentByType.properties.properties.giftPlanSelectionCardBanner;
      }
    }
    return prop;
  });
  let obj2 = callback(dependencyMap[12]);
  let cardAsset;
  if (null != stateFromStores) {
    cardAsset = stateFromStores.cardAsset;
  }
  const themeAndReducedMotionAwareAssetUrl = obj2.useThemeAndReducedMotionAwareAssetUrl(cardAsset);
  let obj3 = callback(dependencyMap[12]);
  let backgroundAsset;
  if (null != stateFromStores) {
    backgroundAsset = stateFromStores.backgroundAsset;
  }
  const themeAndReducedMotionAwareAssetUrl1 = obj3.useThemeAndReducedMotionAwareAssetUrl(backgroundAsset);
  let tmp8 = null != claimableRewards;
  if (tmp8) {
    tmp8 = 1 === claimableRewards.length;
  }
  const tmp9 = callback5(tmp8);
  let stringResult1 = importDefault(dependencyMap[14])(premiumType, constants.MONTH);
  const tmp10 = importDefault(dependencyMap[13])(premiumType);
  let obj4 = importDefault(dependencyMap[15]);
  const config = obj4.useConfig({ location: "PremiumGiftFeaturesCard" });
  const showGiftPrice = config.showGiftPrice;
  let promotionalButton = importDefault(dependencyMap[16])(premiumType) && null != claimableRewards && claimableRewards.length > 0;
  let tmp14 = promotionalButton;
  if (promotionalButton) {
    tmp14 = null != themeAndReducedMotionAwareAssetUrl;
  }
  const tmp12 = importDefault(dependencyMap[14])(premiumType, constants.YEAR);
  [tmp16, closure_0] = callback2(importAllResult.useState(0), 2);
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
    tmp20 = callback3(importDefault(dependencyMap[17]), obj);
  }
  const items2 = [tmp20, ];
  obj2 = { premiumType };
  let num3 = 1;
  const tmp15 = callback2(importAllResult.useState(0), 2);
  const tmp18 = callback4;
  const tmp19 = View;
  const tmp24 = callback4;
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
      tmp34 = callback3(importDefault(dependencyMap[19]), obj4);
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
      tmp38 = callback3(importDefault(dependencyMap[17]), obj5);
    }
    items4[1] = tmp38;
    obj3.children = items4;
    let tmp27Result = callback4(closure_11, obj3);
    const tmp32 = callback4;
    const tmp33 = closure_11;
  } else {
    const obj8 = { premiumType };
    let wumpusNoPrice = !showGiftPrice;
    if (wumpusNoPrice) {
      wumpusNoPrice = tmp9.wumpusNoPrice;
    }
    obj8.style = wumpusNoPrice;
    tmp27Result = callback3(importDefault(dependencyMap[20]), obj8);
    const tmp27 = callback3;
    const tmp30 = importDefault(dependencyMap[20]);
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
    items6[1] = callback3(tmp43, obj9);
    if (!showGiftPrice) {
      items6[2] = showGiftPrice;
      const obj10 = {};
      const items8 = [tmp9.featureTitle, obj2[str]];
      obj10.style = items8;
      const intl3 = callback(dependencyMap[23]).intl;
      obj10.children = intl3.string(callback(dependencyMap[23]).t.JgsVht);
      items6[3] = callback3(callback(dependencyMap[22]).Text, obj10);
      const obj11 = { style: tmp9.features, features: tmp10 };
      ({ featureIcon: obj21.iconStyle, featureText: obj21.labelStyle } = tmp9);
      obj11.rowStyle = obj[str];
      items6[4] = callback3(importDefault(dependencyMap[24]), obj11);
      const obj12 = {};
      const obj13 = { flexGrow: 1 };
      obj12.style = obj13;
      items6[5] = callback3(View, obj12);
      const obj14 = {};
      const items9 = [tmp9.button, obj10[str], ];
      if (promotionalButton) {
        promotionalButton = tmp9.promotionalButton;
      }
      items9[2] = promotionalButton;
      obj14.style = items9;
      const obj15 = { variant: "primary-overlay" };
      if (premiumType === TIER_0.TIER_0) {
        const intl5 = callback(dependencyMap[23]).intl;
        let stringResult = intl5.string(callback(dependencyMap[23]).t.rk4Uu8);
      } else {
        const intl4 = callback(dependencyMap[23]).intl;
        stringResult = intl4.string(callback(dependencyMap[23]).t.Ve9Ge6);
      }
      obj15.text = stringResult;
      obj15.onPress = variant.onPress;
      obj14.children = callback3(callback(dependencyMap[25]).Button, obj15);
      items6[6] = callback3(View, obj14);
      obj2["children"] = items6;
      items2[1] = tmp24(tmp25, obj2);
      obj.children = items2;
      return tmp18(tmp19, obj);
    } else if (config.useNewCopy) {
      const obj16 = {};
      const items10 = [tmp9.pricing, obj6[str]];
      obj16.style = items10;
      const items11 = [stringResult1, " ", ];
      const intl2 = callback(dependencyMap[23]).intl;
      stringResult1 = intl2.string(callback(dependencyMap[23]).t.lVQycU);
      items11[2] = stringResult1;
      obj16.children = items11;
      let tmp49 = callback4(callback(dependencyMap[22]).Text, obj16);
    } else {
      const obj17 = {};
      const items12 = [tmp9.pricing, obj6[str]];
      obj17.style = items12;
      const intl = callback(dependencyMap[23]).intl;
      const obj18 = { monthlyPrice: stringResult1, yearlyPrice: tmp12 };
      obj17.children = intl.format(callback(dependencyMap[23]).t.Ob6fwp, obj18);
      tmp49 = callback3(callback(dependencyMap[22]).Text, obj17);
    }
  }
});
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/premium/native/gifting/PremiumGiftFeaturesCard.tsx");

export default memoResult;
