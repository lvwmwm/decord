// Module ID: 7953
// Function ID: 63430
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 7953 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
class PremiumUpsellItem {
  constructor(arg0) {
    upsellItem = global.upsellItem;
    ({ alertWidth, imageStyle, style } = global);
    obj = arg1(dependencyMap[14]);
    legacyClassComponentStyles = obj.useLegacyClassComponentStyles(jsxs);
    obj = { style: items };
    items = [, , ];
    items[0] = legacyClassComponentStyles.premiumUpsellContainer;
    items[1] = { width: alertWidth };
    items[2] = style;
    obj1 = { style: items1, source: upsellItem.image, resizeMode: "contain" };
    items1 = [, ];
    items1[0] = legacyClassComponentStyles.upsellImage;
    items1[1] = imageStyle;
    ({ title, description } = upsellItem);
    items2 = [, , ];
    items2[0] = jsx(Image, obj1);
    obj2 = { style: legacyClassComponentStyles.premiumUpsellTitle, children: title };
    items2[1] = jsx(arg1(dependencyMap[16]).Text, obj2);
    obj3 = { style: legacyClassComponentStyles.premiumUpsellDescription, variant: "text-md/medium", children: description };
    items2[2] = jsx(arg1(dependencyMap[16]).Text, obj3);
    obj.children = items2;
    return jsxs(View, obj);
  }
}
function GlobalEmojiUpsell(arg0) {
  let alertWidth;
  let useTier0Description;
  ({ alertWidth, useTier0Description } = arg0);
  let obj = arg1(dependencyMap[18]);
  const premiumTrialOffer = obj.usePremiumTrialOffer();
  let sku_id;
  if (null != premiumTrialOffer) {
    const subscription_trial = premiumTrialOffer.subscription_trial;
    if (null != subscription_trial) {
      sku_id = subscription_trial.sku_id;
    }
  }
  const intl = arg1(dependencyMap[19]).intl;
  const formatResult = intl.format(arg1(dependencyMap[19]).t.KEn+LY, {});
  if (null != sku_id) {
    if (closure_17.TIER_0 === sku_id) {
      const intl3 = arg1(dependencyMap[19]).intl;
      obj = { planName: arg1(dependencyMap[20]).getPremiumTypeDisplayName(closure_18.TIER_0) };
      let formatResult1 = intl3.format(arg1(dependencyMap[19]).t.1P7x8p, obj);
      const obj5 = arg1(dependencyMap[20]);
    } else {
      formatResult1 = formatResult;
      if (closure_17.TIER_2 === sku_id) {
        const intl5 = arg1(dependencyMap[19]).intl;
        obj = { planName: arg1(dependencyMap[20]).getPremiumTypeDisplayName(closure_18.TIER_2) };
        formatResult1 = intl5.format(arg1(dependencyMap[19]).t.1P7x8p, obj);
        const obj9 = arg1(dependencyMap[20]);
      }
    }
  } else {
    formatResult1 = formatResult;
    if (useTier0Description) {
      const intl2 = arg1(dependencyMap[19]).intl;
      const obj1 = {};
      let obj2 = arg1(dependencyMap[20]);
      obj1.planName = obj2.getPremiumTypeDisplayName(closure_18.TIER_0);
      formatResult1 = intl2.format(arg1(dependencyMap[19]).t.kWBwlJ, obj1);
    }
  }
  obj2 = { alertWidth };
  const obj3 = { image: importDefault(dependencyMap[21]) };
  const intl4 = arg1(dependencyMap[19]).intl;
  obj3.title = intl4.string(arg1(dependencyMap[19]).t.UNtcBV);
  obj3.description = formatResult1;
  obj2.upsellItem = obj3;
  return callback4(PremiumUpsellItem, obj2);
}
function AnimatedEmojiUpsell(alertWidth) {
  let obj = { alertWidth: alertWidth.alertWidth };
  obj = { image: importDefault(dependencyMap[22]) };
  const intl = arg1(dependencyMap[19]).intl;
  obj.title = intl.string(arg1(dependencyMap[19]).t.F6rmyq);
  const intl2 = arg1(dependencyMap[19]).intl;
  const format = intl2.format;
  const t = arg1(dependencyMap[19]).t;
  if (alertWidth.useTier0Description) {
    obj = { planName: arg1(dependencyMap[20]).getPremiumTypeDisplayName(closure_18.TIER_0) };
    let formatResult = format(t.1a36ee, obj);
    const tmp3Result = arg1(dependencyMap[20]);
  } else {
    formatResult = format(t.JxTzzb, {});
  }
  obj.description = formatResult;
  obj.upsellItem = obj;
  return closure_19(PremiumUpsellItem, obj);
}
function PremiumGuildIdentityUpsell(alertWidth) {
  let obj = arg1(dependencyMap[14]);
  const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(closure_22);
  obj = { alertWidth: alertWidth.alertWidth, imageStyle: legacyClassComponentStyles.largerUpsellImage };
  obj = {};
  const tmp2 = importDefault(dependencyMap[23])();
  const tmp3 = closure_19;
  const tmp4 = PremiumUpsellItem;
  if (obj4.isThemeDark(tmp2)) {
    let tmp5Result = tmp5(tmp6[25]);
  } else {
    tmp5Result = tmp5(tmp6[26]);
  }
  obj.image = tmp5Result;
  const intl = arg1(dependencyMap[19]).intl;
  obj.title = intl.string(arg1(dependencyMap[19]).t.OVN9la);
  const intl2 = arg1(dependencyMap[19]).intl;
  obj.description = intl2.string(arg1(dependencyMap[19]).t.j0dyAG);
  obj.upsellItem = obj;
  return tmp3(tmp4, obj);
}
function CustomProfilesUpsell(alertWidth) {
  let obj = arg1(dependencyMap[14]);
  obj = { alertWidth: alertWidth.alertWidth, imageStyle: obj.useLegacyClassComponentStyles(closure_22).customProfileUpsellImage };
  obj = { image: importDefault(dependencyMap[27]) };
  const intl = arg1(dependencyMap[19]).intl;
  obj.title = intl.string(arg1(dependencyMap[19]).t.rTY76D);
  const intl2 = arg1(dependencyMap[19]).intl;
  obj.description = intl2.string(arg1(dependencyMap[19]).t.2LCxoj);
  obj.upsellItem = obj;
  return callback4(PremiumUpsellItem, obj);
}
function CustomAppIconsUpsell(alertWidth) {
  const imageSource = alertWidth.imageSource;
  let obj = arg1(dependencyMap[14]);
  const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(closure_22);
  let iconSource = getIcons().filter((isPremium) => isPremium.isPremium)[0].iconSource;
  const arr = getIcons();
  const tmp2 = importDefault(dependencyMap[23])();
  obj = { alertWidth: alertWidth.alertWidth };
  const items = [legacyClassComponentStyles.customAppIconsUpsellImage, ];
  let prop;
  if (obj2.isThemeLight(tmp2)) {
    prop = legacyClassComponentStyles.customAppIconUpsellLightImage;
  }
  items[1] = prop;
  obj.imageStyle = items;
  obj = {};
  if (null != imageSource) {
    iconSource = imageSource;
  }
  obj.image = iconSource;
  const intl = arg1(dependencyMap[19]).intl;
  obj.title = intl.string(arg1(dependencyMap[19]).t.1B1Cyn);
  const intl2 = arg1(dependencyMap[19]).intl;
  obj.description = intl2.string(arg1(dependencyMap[19]).t.VL5TYT);
  obj.upsellItem = obj;
  return closure_19(PremiumUpsellItem, obj);
}
function GlobalStickerUpsell(alertWidth) {
  let obj = { alertWidth: alertWidth.alertWidth };
  obj = { image: importDefault(dependencyMap[28]) };
  const intl = arg1(dependencyMap[19]).intl;
  obj.title = intl.string(arg1(dependencyMap[19]).t.jn2mBl);
  const intl2 = arg1(dependencyMap[19]).intl;
  const format = intl2.format;
  const t = arg1(dependencyMap[19]).t;
  if (alertWidth.useTier0Description) {
    obj = { planName: arg1(dependencyMap[20]).getPremiumTypeDisplayName(closure_18.TIER_0) };
    let formatResult = format(t.8C+FZk, obj);
    const tmp3Result = arg1(dependencyMap[20]);
  } else {
    formatResult = format(t.0qJYHK, {});
  }
  obj.description = formatResult;
  obj.upsellItem = obj;
  return closure_19(PremiumUpsellItem, obj);
}
function LongerMessageUpsell(alertWidth) {
  let obj = arg1(dependencyMap[14]);
  const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(closure_22);
  obj = { alertWidth: alertWidth.alertWidth, imageStyle: legacyClassComponentStyles.largerUpsellImage };
  obj = {};
  const tmp2 = importDefault(dependencyMap[23])();
  const tmp3 = importDefault(dependencyMap[29])();
  const tmp4 = closure_19;
  const tmp5 = PremiumUpsellItem;
  if (obj4.isThemeDark(tmp2)) {
    let tmp6Result = tmp6(tmp7[30]);
  } else {
    tmp6Result = tmp6(tmp7[31]);
  }
  obj.image = tmp6Result;
  const intl = arg1(dependencyMap[19]).intl;
  obj.title = intl.string(arg1(dependencyMap[19]).t.8cjmTj);
  const intl2 = arg1(dependencyMap[19]).intl;
  obj.description = intl2.formatToPlainString(arg1(dependencyMap[19]).t.moN9wh, { maxLength: tmp3 });
  obj.upsellItem = obj;
  return tmp4(tmp5, obj);
}
function GuildCapUpsell(alertWidth) {
  let obj = arg1(dependencyMap[14]);
  const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(closure_22);
  obj = { alertWidth: alertWidth.alertWidth, imageStyle: legacyClassComponentStyles.largerUpsellImage };
  obj = {};
  const tmp2 = importDefault(dependencyMap[23])();
  const tmp3 = closure_19;
  const tmp4 = PremiumUpsellItem;
  if (obj4.isThemeDark(tmp2)) {
    let tmp5Result = tmp5(tmp6[32]);
  } else {
    tmp5Result = tmp5(tmp6[33]);
  }
  obj.image = tmp5Result;
  const intl = arg1(dependencyMap[19]).intl;
  obj.title = intl.string(arg1(dependencyMap[19]).t.CoNXB+);
  const intl2 = arg1(dependencyMap[19]).intl;
  obj.description = intl2.format(arg1(dependencyMap[19]).t.mkXb2F, {});
  obj.upsellItem = obj;
  return tmp3(tmp4, obj);
}
function UploadUpsell(arg0) {
  let alertWidth;
  let item;
  ({ item, alertWidth } = arg0);
  let obj = arg1(dependencyMap[34]);
  const items = [closure_12];
  const stateFromStores = obj.useStateFromStores(items, () => dataSavingMode.dataSavingMode);
  obj = {};
  const items1 = [callback4(tmp7, { isInitial: true, upsellItem: item, alertWidth }, constants.UPLOAD), ];
  let tmp4 = null;
  if (callback(importAllResult.useState(!stateFromStores), 1)[0]) {
    obj = { 0: null, 0: null };
    const intl = arg1(dependencyMap[19]).intl;
    obj.label = intl.string(arg1(dependencyMap[19]).t.ix8XIj);
    const intl2 = arg1(dependencyMap[19]).intl;
    obj.subLabel = intl2.string(arg1(dependencyMap[19]).t.wC0+Ph);
    obj.value = stateFromStores;
    obj.onValueChange = function onValueChange(dataSavingMode) {
      let obj = callback(closure_2[36]);
      obj = { dataSavingMode };
      const result = obj.updatedUnsyncedSettings(obj);
    };
    tmp4 = callback4(arg1(dependencyMap[35]).TableSwitchRow, obj);
    const tmp7 = dependencyMap;
  }
  items1[1] = tmp4;
  obj.children = items1;
  return closure_20(closure_21, obj);
}
class PremiumUpsellAlert {
  constructor(arg0) {
    initialUpsellKey = global.initialUpsellKey;
    arg1 = initialUpsellKey;
    analyticsLocation = global.analyticsLocation;
    importDefault = analyticsLocation;
    dependencyMap = global.imageSource;
    f63449 = undefined;
    closure_8 = undefined;
    getUploadAlertDescription = function getUploadAlertDescription() {
      if (useTier0UpsellContent) {
        const intl2 = tmp(tmp2[19]).intl;
        let obj = {};
        let tmpResult = tmp(tmp2[20]);
        obj.premiumPlan = tmpResult.getPremiumTypeDisplayName(closure_18.TIER_0);
        tmpResult = tmp(tmp2[20]);
        obj.premiumMaxSize = tmpResult.getMaxFileSizeForPremiumType(closure_18.TIER_0);
        return intl2.formatToPlainString(tmp(tmp2[19]).t.Z7Xb7H, obj);
      } else {
        const userMaxFileSize = tmp(tmp2[43]).getUserMaxFileSize(closure_5);
        const result = userMaxFileSize / tmp(tmp2[44]).BYTE_IN_KB;
        const intl = tmp(tmp2[19]).intl;
        obj = {};
        const tmpResult1 = tmp(tmp2[43]);
        const obj1 = { useKibibytes: true };
        obj.maxUploadStandard = tmp(tmp2[44]).formatSize(result, obj1);
        const tmpResult2 = tmp(tmp2[44]);
        obj.maxUploadPremium = tmp(tmp2[20]).getMaxFileSizeForPremiumType(closure_18.TIER_2);
        return intl.format(tmp(tmp2[19]).t.DUT5IC, obj);
      }
    };
    ({ analyticsLocations, analyticsProperties, onClose } = global);
    obj = arg1(dependencyMap[14]);
    closure_3 = obj.useLegacyClassComponentStyles(jsxs);
    size = importDefault(dependencyMap[38])();
    closure_4 = Math.min(0.9 * Math.min(size.width, size.height), closure_24) - closure_25;
    obj2 = arg1(dependencyMap[34]);
    items = [];
    items[0] = closure_13;
    f63449 = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
    generateUpsellItems = function generateUpsellItems(initialUpsellKey) {
      const upsellItems = initialUpsellKey(imageSource[37]).getUpsellItems();
      return upsellItems.sort((key) => {
        let num = 1;
        if (key.key === key) {
          num = -1;
        }
        return num;
      });
    }(initialUpsellKey);
    tmp = importDefault(dependencyMap[39]);
    analyticsLocations2 = tmp(analyticsLocations, importDefault(dependencyMap[40]).PREMIUM_UPSELL_ALERT).analyticsLocations;
    closure_7 = analyticsLocations2;
    tmp2 = importDefault(dependencyMap[41])(() => {
      let obj = analyticsLocation(imageSource[42]);
      obj = { type: "Nitro Upsell", location: analyticsLocation };
      obj.track(constants.OPEN_MODAL, obj);
    });
    obj3 = arg1(dependencyMap[37]);
    premiumUpsellConfig = obj3.usePremiumUpsellConfig(initialUpsellKey, analyticsLocations2, analyticsLocation);
    useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
    closure_8 = useTier0UpsellContent;
    obj = { analyticsLocation, analyticsProperties, useTier0UpsellContent };
    defineProperty = obj;
    ({ getNitroText, onViewAllPerks } = premiumUpsellConfig);
    View = defineProperty.useRef(obj);
    effect = defineProperty.useEffect(() => {
      closure_10.current = obj;
    });
    items1 = [];
    items1[0] = analyticsLocations2;
    effect1 = defineProperty.useEffect(() => {
      let analyticsLocation;
      let analyticsProperties;
      let useTier0UpsellContent;
      ({ analyticsLocation, analyticsProperties, useTier0UpsellContent } = ref.current);
      let obj = analyticsLocation(imageSource[42]);
      obj = {};
      const merged = Object.assign(analyticsProperties);
      obj["location"] = analyticsLocation;
      obj["location_stack"] = analyticsLocations2;
      obj["sku_id"] = useTier0UpsellContent ? closure_17.TIER_0 : closure_17.TIER_2;
      obj.track(constants.PREMIUM_UPSELL_VIEWED, obj);
    }, items1);
    obj1 = {};
    tmp6 = importDefault(dependencyMap[45]);
    obj1.confirmColor = arg1(dependencyMap[46]).ButtonColors.GREEN;
    obj1.confirmText = getNitroText;
    obj1.renderConfirmIcon = function renderConfirmIcon() {
      const obj = { source: analyticsLocation(imageSource[48]), style: closure_3.nitroWheel, resizeMode: "contain" };
      const tmp = analyticsLocation(imageSource[47]);
      if (constants2.GLOBAL_EMOJI !== initialUpsellKey) {
        if (constants2.ANIMATED_EMOJI !== tmp3) {
          if (constants2.CUSTOM_PROFILES !== tmp3) {
            if (constants2.PREMIUM_GUILD_PROFILE !== tmp3) {
              if (constants2.APP_ICONS !== tmp3) {
                return null;
              }
            }
          }
        }
      }
      return callback(analyticsLocation(imageSource[47]), obj);
    };
    intl = arg1(dependencyMap[19]).intl;
    obj1.cancelText = intl.string(arg1(dependencyMap[19]).t.cpT0Cq);
    obj1.onClose = onClose;
    obj1.onConfirm = onViewAllPerks;
    obj1.children = () => {
      let obj = { style: closure_3.carousel, width: closure_4, pageIndicatorStyle: closure_3.pageIndicatorStyle };
      analyticsLocation(imageSource[49]);
      obj.children = closure_6.map((key) => callback(closure_23, { isInitial: closure_0 === key.key, upsellItem: key, alertWidth: closure_4 }, key.key));
      if (constants2.GLOBAL_EMOJI === initialUpsellKey) {
        obj = { alertWidth: closure_4, useTier0Description: useTier0UpsellContent };
        return callback(closure_28, obj);
      } else if (constants2.ANIMATED_EMOJI === tmp3) {
        obj = { alertWidth: closure_4, useTier0Description: useTier0UpsellContent };
        return callback(closure_29, obj);
      } else if (constants2.GLOBAL_STICKER === tmp3) {
        const obj1 = { alertWidth: closure_4, useTier0Description: useTier0UpsellContent };
        return callback(closure_33, obj1);
      } else if (constants2.CUSTOM_PROFILES === tmp3) {
        const obj2 = { alertWidth: closure_4 };
        return callback(closure_31, obj2);
      } else if (constants2.APP_ICONS === tmp3) {
        const obj3 = { alertWidth: closure_4, imageSource };
        return callback(closure_32, obj3);
      } else if (constants2.PREMIUM_GUILD_PROFILE === tmp3) {
        const obj4 = { alertWidth: closure_4 };
        return callback(closure_30, obj4);
      } else if (constants2.LONGER_MESSAGE === tmp3) {
        const obj5 = { alertWidth: closure_4 };
        return callback(closure_34, obj5);
      } else if (constants2.GUILD_CAP === tmp3) {
        const obj6 = { alertWidth: closure_4 };
        return callback(closure_35, obj6);
      } else if (constants2.UPLOAD === tmp3) {
        const obj7 = {};
        const obj8 = { key: constants2.UPLOAD, image: analyticsLocation(imageSource[50]) };
        const intl = initialUpsellKey(imageSource[19]).intl;
        obj8.activeTitle = intl.string(initialUpsellKey(imageSource[19]).t.1EOZqw);
        const intl2 = initialUpsellKey(imageSource[19]).intl;
        obj8.passiveTitle = intl2.string(initialUpsellKey(imageSource[19]).t.tB51W4);
        obj8.description = getUploadAlertDescription();
        obj7.item = obj8;
        obj7.alertWidth = closure_4;
        return callback(closure_36, obj7);
      } else {
        return tmp2;
      }
    }();
    return jsx(tmp6, obj1);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const importAllResult = importAll(dependencyMap[6]);
({ View: closure_10, Image: closure_11 } = arg1(dependencyMap[7]));
let closure_12 = importDefault(dependencyMap[8]);
let closure_13 = importDefault(dependencyMap[9]);
const tmp3 = arg1(dependencyMap[7]);
({ AnalyticEvents: closure_14, UpsellTypes: closure_15 } = arg1(dependencyMap[10]));
const getIcons = arg1(dependencyMap[11]).getIcons;
const tmp4 = arg1(dependencyMap[10]);
({ PremiumSubscriptionSKUs: closure_17, PremiumTypes: closure_18 } = arg1(dependencyMap[12]));
const tmp5 = arg1(dependencyMap[12]);
({ jsx: closure_19, jsxs: closure_20, Fragment: closure_21 } = arg1(dependencyMap[13]));
let obj = arg1(dependencyMap[14]);
obj = { carousel: { alignItems: "center" }, upsellContainer: { alignItems: "center" }, premiumUpsellContainer: { channelId: "absolute", position: 0 }, nitroWheel: { display: true, flexDirection: true, alignItems: true }, upsellImage: { <string:1632221346>: null, <string:2722977214>: "5e2f785032385a803c0dd3d91ffe95da" }, upsellTitle: { "Null": null, "Null": null } };
obj = { marginVertical: importDefault(dependencyMap[15]).space.PX_8, textAlign: "center" };
obj.premiumUpsellTitle = obj;
obj.upsellDescription = { textAlign: "center" };
obj.premiumUpsellDescription = { textAlign: "center" };
obj.pageIndicatorStyle = { marginTop: 16 };
obj.largerUpsellImage = {};
obj.customProfileUpsellImage = {};
obj.loadingIndicator = { height: 170 };
const tmp6 = arg1(dependencyMap[13]);
obj.customAppIconUpsellLightImage = { borderColor: importDefault(dependencyMap[15]).colors.BACKGROUND_BASE_LOWEST, borderWidth: 2 };
const obj1 = { borderColor: importDefault(dependencyMap[15]).colors.BACKGROUND_BASE_LOWEST, borderWidth: 2 };
obj.customAppIconsUpsellImage = { borderRadius: importDefault(dependencyMap[15]).radii.lg };
let closure_22 = obj.createLegacyClassComponentStyles(obj);
const tmp7 = (PureComponent) => {
  class UpsellItem {
    constructor() {
      self = this;
      tmp = closure_4(this, UpsellItem);
      obj = closure_7(UpsellItem);
      tmp2 = closure_6;
      if (closure_26()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_7;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_7(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = UpsellItem;
  callback3(UpsellItem, PureComponent);
  const items = [
    {
      key: "render",
      value() {
        let activeTitle;
        let description;
        const tmp = callback4(this.context);
        const props = this.props;
        const upsellItem = props.upsellItem;
        let passiveTitle = upsellItem.passiveTitle;
        let obj = { style: items };
        const items = [tmp.upsellContainer, { width: props.alertWidth }];
        obj = { style: tmp.upsellImage, source: upsellItem.image, resizeMode: "contain" };
        ({ activeTitle, description } = upsellItem);
        const items1 = [callback3(closure_11, obj), , ];
        obj = { "Null": -246006407672989600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": 0.0000000000000000000000000000000000000000000000000000000000000000000741841232901058, "Null": 0.158, style: tmp.upsellTitle };
        if (props.isInitial) {
          passiveTitle = activeTitle;
        }
        obj.children = passiveTitle;
        items1[1] = callback3(UpsellItem(closure_2[16]).Text, obj);
        items1[2] = callback3(UpsellItem(closure_2[16]).Text, { style: tmp.upsellDescription, variant: "text-sm/medium", children: description });
        obj.children = items1;
        return closure_20(closure_10, obj);
      }
    }
  ];
  return callback2(UpsellItem, items);
}(importAllResult.PureComponent);
tmp7.contextType = arg1(dependencyMap[17]).ThemeContext;
tmp7.defaultProps = { isInitial: false };
let closure_24 = 500;
let closure_25 = 32;
const obj2 = { borderRadius: importDefault(dependencyMap[15]).radii.lg };
const result = arg1(dependencyMap[51]).fileFinishedImporting("components_native/premium/PremiumUpsellAlert.tsx");

export default PremiumUpsellAlert;
export { PremiumUpsellItem };
export { PremiumUpsellAlert };
