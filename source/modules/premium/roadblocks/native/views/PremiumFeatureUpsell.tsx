// Module ID: 9368
// Function ID: 73084
// Name: getPremiumUpsellType
// Dependencies: []
// Exports: default

// Module 9368 (getPremiumUpsellType)
function getPremiumUpsellType(arg0) {
  if (arg1(dependencyMap[6]).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE === arg0) {
    return constants.SOUNDBOARD_EVERYWHERE_INLINE_UPSELL;
  } else if (arg1(dependencyMap[6]).EntitlementFeatureNames.EMOJIS_EVERYWHERE === arg0) {
    return constants.EMOJI_EVERYWHERE_INLINE_UPSELL;
  } else if (arg1(dependencyMap[6]).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE === arg0) {
    return constants.LARGER_FILE_UPLOAD_INLINE_UPSELL;
  } else if (arg1(dependencyMap[6]).EntitlementFeatureNames.APP_ICONS === arg0) {
    return constants.APP_ICON_INLINE_UPSELL;
  } else if (arg1(dependencyMap[6]).EntitlementFeatureNames.STREAM_HIGH_QUALITY === arg0) {
    return constants.STREAM_QUALITY_UPSELL;
  }
}
function PremiumFeatureUpsellPill(featureName) {
  featureName = featureName.featureName;
  const arg1 = featureName;
  let flag = featureName.showShadow;
  if (flag === undefined) {
    flag = true;
  }
  let importDefault;
  let dependencyMap;
  let closure_3;
  let obj = arg1(dependencyMap[11]);
  let obj1 = arg1(dependencyMap[12]);
  const premiumUpsellConfig = obj.usePremiumUpsellConfig(obj1.getUpsellType(featureName));
  const useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
  importDefault = useTier0UpsellContent;
  const tmp2 = callback2(useTier0UpsellContent);
  dependencyMap = tmp2;
  const tmp4 = useTier0UpsellContent ? closure_7.TIER_0 : closure_7.TIER_2;
  const fn = () => useTier0UpsellContent(tmp2[13])(featureName);
  let obj2 = arg1(dependencyMap[7]);
  const premiumTypeDisplayName = obj2.getPremiumTypeDisplayName(tmp4);
  if (arg1(dependencyMap[6]).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE === featureName) {
    const intl4 = arg1(dependencyMap[8]).intl;
    obj = { nitroTierName: premiumTypeDisplayName, onClick: fn };
    let formatResult = intl4.format(arg1(dependencyMap[8]).t.tw/SSq, obj);
  } else if (arg1(dependencyMap[6]).EntitlementFeatureNames.EMOJIS_EVERYWHERE === featureName) {
    const intl3 = arg1(dependencyMap[8]).intl;
    obj = { nitroTierName: premiumTypeDisplayName, onClick: fn };
    formatResult = intl3.format(arg1(dependencyMap[8]).t.gMVjeS, obj);
  } else if (arg1(dependencyMap[6]).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE === featureName) {
    const intl2 = arg1(dependencyMap[8]).intl;
    obj1 = {};
    let obj5 = arg1(dependencyMap[7]);
    obj1.maxFileSize = obj5.getMaxFileSizeForPremiumType(tmp4);
    obj1.nitroTierName = premiumTypeDisplayName;
    obj1.onClick = fn;
    formatResult = intl2.format(arg1(dependencyMap[8]).t.zzyLEK, obj1);
  } else if (arg1(dependencyMap[6]).EntitlementFeatureNames.STREAM_HIGH_QUALITY === featureName) {
    const intl = arg1(dependencyMap[8]).intl;
    obj2 = { nitroTierName: premiumTypeDisplayName, onClick: fn };
    formatResult = intl.format(arg1(dependencyMap[8]).t.lyxfbj, obj2);
  } else if (arg1(dependencyMap[6]).EntitlementFeatureNames.APP_ICONS === featureName) {
    const intl6 = arg1(dependencyMap[8]).intl;
    const obj3 = { onClick: fn };
    formatResult = intl6.format(arg1(dependencyMap[8]).t.x2dQxN, obj3);
  }
  const tmp17 = importDefault(dependencyMap[14])(useTier0UpsellContent, premiumUpsellConfig.onViewAllPerks, constants2.PREMIUM_UPSELL_FILE_UPLOAD);
  const loading = tmp17.loading;
  closure_3 = loading;
  const obj4 = {};
  const items = [tmp2.container, , ];
  if (flag) {
    flag = tmp2.containerShadow;
  }
  items[1] = flag;
  items[2] = featureName.style;
  obj4.style = items;
  obj5 = { style: tmp2.labelContainer };
  const obj6 = {};
  if (useTier0UpsellContent) {
    let tmp25 = tmp24[16];
  } else {
    tmp25 = tmp24[17];
  }
  obj6.source = importDefault(tmp25);
  obj6.style = tmp2.nitroWheel;
  obj6.disableColor = true;
  const items1 = [callback(arg1(dependencyMap[15]).Icon, obj6), ];
  const obj7 = { style: tmp2.text, variant: "text-sm/medium", children: formatResult };
  items1[1] = callback(arg1(dependencyMap[18]).TextWithIOSLinkWorkaround, obj7);
  obj5.children = items1;
  const items2 = [closure_13(closure_5, obj5), ];
  const obj8 = { disabled: loading, shrink: true, style: tmp2.button, size: arg1(dependencyMap[15]).ButtonSizes.XSMALL, onPress: tmp17.onPress };
  const intl5 = arg1(dependencyMap[8]).intl;
  const string = intl5.string;
  const t = arg1(dependencyMap[8]).t;
  if (useTier0UpsellContent) {
    let stringResult = string(t.cM8bbx);
  } else {
    stringResult = string(t.8x0jKT);
  }
  obj8.text = stringResult;
  obj8.color = arg1(dependencyMap[15]).ButtonColors.GREEN;
  obj8.renderIcon = function renderIcon() {
    const obj = {};
    const items = [tmp2.nitroWheelButton, ];
    let nitroWheelDisabled = loading;
    if (loading) {
      nitroWheelDisabled = tmp2.nitroWheelDisabled;
    }
    items[1] = nitroWheelDisabled;
    obj.style = items;
    return closure_12(featureName(tmp2[15]).NitroWheel, obj);
  };
  obj8.renderLinearGradient = function renderLinearGradient() {
    const obj = { style: tmp2.gradient };
    const tmp2 = useTier0UpsellContent(tmp2[19]);
    obj.start = featureName(tmp2[20]).HorizontalGradient.START;
    obj.end = featureName(tmp2[20]).HorizontalGradient.END;
    obj.colors = useTier0UpsellContent ? closure_11.PREMIUM_TIER_0 : closure_11.PREMIUM_TIER_2_TRI_COLOR;
    return closure_12(tmp2, obj);
  };
  items2[1] = callback(arg1(dependencyMap[15]).ShinyButton, obj8);
  obj4.children = items2;
  return closure_13(closure_5, obj4);
}
let closure_3 = importAll(dependencyMap[0]);
({ StyleSheet: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ PremiumSubscriptionSKUs: closure_6, PremiumTypes: closure_7, PremiumUpsellTypes: closure_8 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
({ AnalyticEvents: closure_9, AnalyticsPages: closure_10 } = arg1(dependencyMap[3]));
const Gradients = arg1(dependencyMap[4]).Gradients;
const tmp4 = arg1(dependencyMap[3]);
({ jsx: closure_12, jsxs: closure_13 } = arg1(dependencyMap[5]));
const tmp5 = arg1(dependencyMap[5]);
let closure_14 = arg1(dependencyMap[9]).createStyles((arg0) => {
  let obj = {};
  obj = { flexDirection: "row", backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[10]).radii.round, padding: importDefault(dependencyMap[10]).space.PX_12, justifyContent: "space-between" };
  obj.container = obj;
  obj = {};
  const merged = Object.assign(importDefault(dependencyMap[10]).shadows.SHADOW_HIGH);
  const unsafe_rawColors = importDefault(dependencyMap[10]).unsafe_rawColors;
  obj["shadowColor"] = arg0 ? unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2 : unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2;
  obj["shadowOpacity"] = 0.6;
  obj.containerShadow = obj;
  const obj1 = { aze: false, azj: false, marginEnd: importDefault(dependencyMap[10]).space.PX_4 };
  obj.nitroWheel = obj1;
  const obj2 = { VOICE_WATCHDOG_TIMEOUT: "24c4788690396bae9cc4c1af395a6a87", staticAuthSessionId: "BicycleIcon", NUMERICIDENTIFIER: "png", marginEnd: importDefault(dependencyMap[10]).space.PX_4 };
  obj.labelContainer = obj2;
  obj.text = {};
  obj.nitroWheelButton = { hoverGestureHandlerProps: 24, paddingVertical: 24, display: null };
  obj.nitroWheelDisabled = { opacity: 0.6 };
  obj.button = { alignSelf: "center", borderRadius: importDefault(dependencyMap[10]).radii.round };
  const merged1 = Object.assign(absoluteFillObject.absoluteFillObject);
  obj.gradient = {};
  return obj;
});
let closure_15 = { code: "function animationEnterExit_PremiumFeatureUpsellTsx1(visible,cleanUp){const{withSpring,springStandard}=this.__closure;return{opacity:withSpring(visible,springStandard,'respect-motion-settings',function(finished){cleanUp===null||cleanUp===void 0||cleanUp(finished);})};}" };
let closure_16 = { code: "function PremiumFeatureUpsellTsx2(finished){const{cleanUp}=this.__closure;var _cleanUp;(_cleanUp=cleanUp)===null||_cleanUp===void 0||_cleanUp(finished);}" };
let closure_17 = () => {
  function animationEnterExit(targetHeight, cleanUp) {
    const obj = {};
    const fn = function l(arg0) {
      if (null != arg1) {
        arg1(arg0);
      }
    };
    fn.__closure = { cleanUp };
    fn.__workletHash = 7812030105128;
    fn.__initData = closure_16;
    obj.opacity = cleanUp(closure_2[21]).withSpring(targetHeight, cleanUp(closure_2[22]).springStandard, "respect-motion-settings", fn);
    return obj;
  }
  animationEnterExit.__closure = { withSpring: arg1(dependencyMap[21]).withSpring, springStandard: arg1(dependencyMap[22]).springStandard };
  animationEnterExit.__workletHash = 15470414797897;
  animationEnterExit.__initData = closure_15;
  return animationEnterExit;
}();
const obj = arg1(dependencyMap[9]);
const result = arg1(dependencyMap[29]).fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumFeatureUpsell.tsx");

export default function PremiumFeatureUpsell(shouldShow) {
  let obj = Object.create(null);
  obj.shouldShow = 0;
  const merged = Object.assign(shouldShow, obj);
  const arg1 = merged;
  const ref = React.useRef(false);
  const importDefault = ref;
  const analyticsLocations = importDefault(dependencyMap[23])().analyticsLocations;
  const dependencyMap = analyticsLocations;
  obj = arg1(dependencyMap[24]);
  const _location = obj.useAnalyticsContext().location;
  const React = _location;
  const tmp4 = importDefault(dependencyMap[25])(shouldShow.shouldShow);
  const items = [ref, _location, analyticsLocations, tmp4, merged.featureName];
  const callback = React.useCallback((arg0, style) => {
    let obj = { style };
    obj = {};
    const merged = Object.assign(arg0);
    obj.children = callback(closure_19, obj);
    return callback(ref(analyticsLocations[26]).View, obj);
  }, []);
  const effect = React.useEffect(() => {
    if (tmp) {
      let obj = ref(analyticsLocations[27]);
      obj = { type: callback2(merged.featureName), location: _location, location_stack: analyticsLocations, sku_id: merged(analyticsLocations[7]).castPremiumSubscriptionAsSkuId(TIER_2.TIER_2) };
      obj.track(constants.PREMIUM_UPSELL_VIEWED, obj);
      ref.current = true;
      const obj3 = merged(analyticsLocations[7]);
      const tmp4 = constants;
    }
  }, items);
  obj = { useReducedMotion: false };
  let tmp9;
  if (tmp4) {
    tmp9 = merged;
  }
  obj.item = tmp9;
  obj.entering = closure_17;
  obj.exiting = closure_17;
  obj.renderItem = callback;
  return closure_12(importDefault(dependencyMap[28]), obj);
};
