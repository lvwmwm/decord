// Module ID: 7960
// Function ID: 63490
// Name: _isNativeReflectConstruct
// Dependencies: [57, 6, 7, 15, 17, 18, 31, 27, 1280, 1849, 653, 7961, 1851, 33, 4130, 689, 4126, 3842, 6686, 1212, 3776, 7942, 7943, 4066, 3976, 7988, 7989, 7990, 7991, 7934, 7992, 7993, 7994, 7995, 566, 5504, 7955, 7941, 1450, 5464, 5484, 4559, 675, 7996, 4025, 4561, 1273, 5085, 7997, 7998, 7945, 2]

// Module 7960 (_isNativeReflectConstruct)
import _slicedToArray from "_slicedToArray";
import result from "result";
import getActivityIndicator from "get ActivityIndicator";
import closure_6 from "_createForOfIteratorHelperLoose";
import ManaContext from "ManaContext";
import useGetTrialOffer from "useGetTrialOffer";
import importAllResult from "registerAsset";
import get_ActivityIndicator from "registerAsset";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import ME from "ME";
import { getIcons } from "getDefaultIcon";
import GuildFeatures from "GuildFeatures";
import jsxProd from "registerAsset";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_14;
let closure_15;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
const require = arg1;
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
    obj = require("_createForOfIteratorHelperLoose");
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
    obj2 = { style: null, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header" };
    obj2.style = legacyClassComponentStyles.premiumUpsellTitle;
    obj2.children = title;
    items2[1] = jsx(require("Text").Text, obj2);
    obj3 = { style: legacyClassComponentStyles.premiumUpsellDescription, variant: "text-md/medium", children: description };
    items2[2] = jsx(require("Text").Text, obj3);
    obj.children = items2;
    return jsxs(View, obj);
  }
}
function GlobalEmojiUpsell(arg0) {
  let alertWidth;
  let useTier0Description;
  ({ alertWidth, useTier0Description } = arg0);
  let obj = require(6686) /* useGetTrialOffer */;
  const premiumTrialOffer = obj.usePremiumTrialOffer();
  let sku_id;
  if (null != premiumTrialOffer) {
    const subscription_trial = premiumTrialOffer.subscription_trial;
    if (null != subscription_trial) {
      sku_id = subscription_trial.sku_id;
    }
  }
  const intl = require(1212) /* getSystemLocale */.intl;
  const formatResult = intl.format(require(1212) /* getSystemLocale */.t["KEn+LY"], {});
  if (null != sku_id) {
    if (closure_17.TIER_0 === sku_id) {
      const intl3 = require(1212) /* getSystemLocale */.intl;
      obj = { planName: require(3776) /* _createForOfIteratorHelperLoose */.getPremiumTypeDisplayName(closure_18.TIER_0) };
      let formatResult1 = intl3.format(require(1212) /* getSystemLocale */.t["1P7x8p"], obj);
      const obj5 = require(3776) /* _createForOfIteratorHelperLoose */;
    } else {
      formatResult1 = formatResult;
      if (closure_17.TIER_2 === sku_id) {
        const intl5 = require(1212) /* getSystemLocale */.intl;
        obj = { planName: require(3776) /* _createForOfIteratorHelperLoose */.getPremiumTypeDisplayName(closure_18.TIER_2) };
        formatResult1 = intl5.format(require(1212) /* getSystemLocale */.t["1P7x8p"], obj);
        const obj9 = require(3776) /* _createForOfIteratorHelperLoose */;
      }
    }
  } else {
    formatResult1 = formatResult;
    if (useTier0Description) {
      const intl2 = require(1212) /* getSystemLocale */.intl;
      const obj1 = {};
      let obj2 = require(3776) /* _createForOfIteratorHelperLoose */;
      obj1.planName = obj2.getPremiumTypeDisplayName(closure_18.TIER_0);
      formatResult1 = intl2.format(require(1212) /* getSystemLocale */.t.kWBwlJ, obj1);
    }
  }
  obj2 = { alertWidth };
  const obj3 = { image: importDefault(7942) };
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj3.title = intl4.string(require(1212) /* getSystemLocale */.t.UNtcBV);
  obj3.description = formatResult1;
  obj2.upsellItem = obj3;
  return callback4(PremiumUpsellItem, obj2);
}
function AnimatedEmojiUpsell(alertWidth) {
  let obj = { alertWidth: alertWidth.alertWidth };
  obj = { image: importDefault(7943) };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.F6rmyq);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  const format = intl2.format;
  const t = require(1212) /* getSystemLocale */.t;
  if (alertWidth.useTier0Description) {
    obj = { planName: require(3776) /* _createForOfIteratorHelperLoose */.getPremiumTypeDisplayName(closure_18.TIER_0) };
    let formatResult = format(t["1a36ee"], obj);
    const tmp3Result = require(3776) /* _createForOfIteratorHelperLoose */;
  } else {
    formatResult = format(t.JxTzzb, {});
  }
  obj.description = formatResult;
  obj.upsellItem = obj;
  return closure_19(PremiumUpsellItem, obj);
}
function PremiumGuildIdentityUpsell(alertWidth) {
  let obj = require(4130) /* _createForOfIteratorHelperLoose */;
  const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(_createForOfIteratorHelperLoose);
  obj = { alertWidth: alertWidth.alertWidth, imageStyle: legacyClassComponentStyles.largerUpsellImage };
  obj = {};
  const tmp2 = importDefault(4066)();
  const tmp3 = closure_19;
  const tmp4 = PremiumUpsellItem;
  if (obj4.isThemeDark(tmp2)) {
    let tmp5Result = tmp5(7988);
  } else {
    tmp5Result = tmp5(7989);
  }
  obj.image = tmp5Result;
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.OVN9la);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.description = intl2.string(require(1212) /* getSystemLocale */.t.j0dyAG);
  obj.upsellItem = obj;
  return tmp3(tmp4, obj);
}
function CustomProfilesUpsell(alertWidth) {
  let obj = require(4130) /* _createForOfIteratorHelperLoose */;
  obj = { alertWidth: alertWidth.alertWidth, imageStyle: obj.useLegacyClassComponentStyles(_createForOfIteratorHelperLoose).customProfileUpsellImage };
  obj = { image: importDefault(7990) };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.rTY76D);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.description = intl2.string(require(1212) /* getSystemLocale */.t["2LCxoj"]);
  obj.upsellItem = obj;
  return callback4(PremiumUpsellItem, obj);
}
function CustomAppIconsUpsell(alertWidth) {
  const imageSource = alertWidth.imageSource;
  let obj = require(4130) /* _createForOfIteratorHelperLoose */;
  const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(_createForOfIteratorHelperLoose);
  let iconSource = getIcons().filter((isPremium) => isPremium.isPremium)[0].iconSource;
  const arr = getIcons();
  const tmp2 = importDefault(4066)();
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
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t["1B1Cyn"]);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.description = intl2.string(require(1212) /* getSystemLocale */.t.VL5TYT);
  obj.upsellItem = obj;
  return closure_19(PremiumUpsellItem, obj);
}
function GlobalStickerUpsell(alertWidth) {
  let obj = { alertWidth: alertWidth.alertWidth };
  obj = { image: importDefault(7991) };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.jn2mBl);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  const format = intl2.format;
  const t = require(1212) /* getSystemLocale */.t;
  if (alertWidth.useTier0Description) {
    obj = { planName: require(3776) /* _createForOfIteratorHelperLoose */.getPremiumTypeDisplayName(closure_18.TIER_0) };
    let formatResult = format(t["8C+FZk"], obj);
    const tmp3Result = require(3776) /* _createForOfIteratorHelperLoose */;
  } else {
    formatResult = format(t["0qJYHK"], {});
  }
  obj.description = formatResult;
  obj.upsellItem = obj;
  return closure_19(PremiumUpsellItem, obj);
}
function LongerMessageUpsell(alertWidth) {
  let obj = require(4130) /* _createForOfIteratorHelperLoose */;
  const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(_createForOfIteratorHelperLoose);
  obj = { alertWidth: alertWidth.alertWidth, imageStyle: legacyClassComponentStyles.largerUpsellImage };
  obj = {};
  const tmp2 = importDefault(4066)();
  const tmp3 = importDefault(7934)();
  const tmp4 = closure_19;
  const tmp5 = PremiumUpsellItem;
  if (obj4.isThemeDark(tmp2)) {
    let tmp6Result = tmp6(7992);
  } else {
    tmp6Result = tmp6(7993);
  }
  obj.image = tmp6Result;
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t["8cjmTj"]);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.description = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.moN9wh, { maxLength: tmp3 });
  obj.upsellItem = obj;
  return tmp4(tmp5, obj);
}
function GuildCapUpsell(alertWidth) {
  let obj = require(4130) /* _createForOfIteratorHelperLoose */;
  const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(_createForOfIteratorHelperLoose);
  obj = { alertWidth: alertWidth.alertWidth, imageStyle: legacyClassComponentStyles.largerUpsellImage };
  obj = {};
  const tmp2 = importDefault(4066)();
  const tmp3 = closure_19;
  const tmp4 = PremiumUpsellItem;
  if (obj4.isThemeDark(tmp2)) {
    let tmp5Result = tmp5(7994);
  } else {
    tmp5Result = tmp5(7995);
  }
  obj.image = tmp5Result;
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t["CoNXB+"]);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.description = intl2.format(require(1212) /* getSystemLocale */.t.mkXb2F, {});
  obj.upsellItem = obj;
  return tmp3(tmp4, obj);
}
function UploadUpsell(arg0) {
  let alertWidth;
  let item;
  ({ item, alertWidth } = arg0);
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_12.dataSavingMode);
  obj = {};
  const items1 = [callback4(closure_23, { isInitial: true, upsellItem: item, alertWidth }, constants.UPLOAD), ];
  let tmp4 = null;
  if (callback(importAllResult.useState(!stateFromStores), 1)[0]) {
    obj = { start: true, end: true };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.label = intl.string(require(1212) /* getSystemLocale */.t.ix8XIj);
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj.subLabel = intl2.string(require(1212) /* getSystemLocale */.t["wC0+Ph"]);
    obj.value = stateFromStores;
    obj.onValueChange = function onValueChange(dataSavingMode) {
      let obj = outer1_1(outer1_2[36]);
      obj = { dataSavingMode };
      const result = obj.updatedUnsyncedSettings(obj);
    };
    tmp4 = callback4(require(5504) /* TableSwitchRow */.TableSwitchRow, obj);
  }
  items1[1] = tmp4;
  obj.children = items1;
  return closure_20(closure_21, obj);
}
class PremiumUpsellAlert {
  constructor(arg0) {
    initialUpsellKey = global.initialUpsellKey;
    analyticsLocation = global.analyticsLocation;
    imageSource = global.imageSource;
    f63509 = undefined;
    useTier0UpsellContent = undefined;
    getUploadAlertDescription = function getUploadAlertDescription() {
      if (useTier0UpsellContent) {
        const intl2 = tmp(tmp2[19]).intl;
        let obj = {};
        let tmpResult = tmp(tmp2[20]);
        obj.premiumPlan = tmpResult.getPremiumTypeDisplayName(outer1_18.TIER_0);
        tmpResult = tmp(tmp2[20]);
        obj.premiumMaxSize = tmpResult.getMaxFileSizeForPremiumType(outer1_18.TIER_0);
        return intl2.formatToPlainString(tmp(tmp2[19]).t.Z7Xb7H, obj);
      } else {
        const userMaxFileSize = tmp(tmp2[43]).getUserMaxFileSize(getActivityIndicator);
        const result = userMaxFileSize / tmp(tmp2[44]).BYTE_IN_KB;
        const intl = tmp(tmp2[19]).intl;
        obj = {};
        const tmpResult1 = tmp(tmp2[43]);
        const obj1 = { useKibibytes: true };
        obj.maxUploadStandard = tmp(tmp2[44]).formatSize(result, obj1);
        const tmpResult2 = tmp(tmp2[44]);
        obj.maxUploadPremium = tmp(tmp2[20]).getMaxFileSizeForPremiumType(outer1_18.TIER_2);
        return intl.format(tmp(tmp2[19]).t.DUT5IC, obj);
      }
    };
    ({ analyticsLocations, analyticsProperties, onClose } = global);
    obj = require("_createForOfIteratorHelperLoose");
    c3 = obj.useLegacyClassComponentStyles(jsxs);
    size = require("useWindowDimensions")();
    c4 = Math.min(0.9 * Math.min(size.width, size.height), c24) - c25;
    obj2 = require("initialize");
    items = [];
    items[0] = c13;
    f63509 = obj2.useStateFromStores(items, () => outer1_13.getCurrentUser());
    generateUpsellItems = (function generateUpsellItems(initialUpsellKey) {
      let closure_0 = initialUpsellKey;
      const upsellItems = initialUpsellKey(imageSource[37]).getUpsellItems();
      return upsellItems.sort((key) => {
        let num = 1;
        if (key.key === closure_0) {
          num = -1;
        }
        return num;
      });
    })(initialUpsellKey);
    tmp = require("mergeLocations");
    analyticsLocations2 = tmp(analyticsLocations, require("QUICK_SWITCHER").PREMIUM_UPSELL_ALERT).analyticsLocations;
    analyticsLocations = analyticsLocations2;
    tmp2 = require("useMountLayoutEffect")(() => {
      let obj = analyticsLocation(imageSource[42]);
      obj = { type: "Nitro Upsell", location: analyticsLocation };
      obj.track(outer1_14.OPEN_MODAL, obj);
    });
    obj3 = require("usePremiumUpsellConfig");
    premiumUpsellConfig = obj3.usePremiumUpsellConfig(initialUpsellKey, analyticsLocations2, analyticsLocation);
    useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
    obj = { analyticsLocation, analyticsProperties, useTier0UpsellContent };
    useStateFromStores = obj;
    ({ getNitroText, onViewAllPerks } = premiumUpsellConfig);
    useRef = useStateFromStores.useRef(obj);
    effect = useStateFromStores.useEffect(() => {
      closure_10.current = obj;
    });
    items1 = [];
    items1[0] = analyticsLocations2;
    effect1 = useStateFromStores.useEffect(() => {
      let analyticsLocation;
      let analyticsProperties;
      let useTier0UpsellContent;
      ({ analyticsLocation, analyticsProperties, useTier0UpsellContent } = ref.current);
      let obj = analyticsLocation(imageSource[42]);
      obj = {};
      const merged = Object.assign(analyticsProperties);
      obj["location"] = analyticsLocation;
      obj["location_stack"] = analyticsLocations2;
      obj["sku_id"] = useTier0UpsellContent ? outer1_17.TIER_0 : outer1_17.TIER_2;
      obj.track(outer1_14.PREMIUM_UPSELL_VIEWED, obj);
    }, items1);
    obj1 = {};
    tmp6 = require("_isNativeReflectConstruct");
    obj1.confirmColor = require("Button").ButtonColors.GREEN;
    obj1.confirmText = getNitroText;
    obj1.renderConfirmIcon = function renderConfirmIcon() {
      const obj = { source: analyticsLocation(imageSource[48]), style: _slicedToArray.nitroWheel, resizeMode: "contain" };
      const tmp = analyticsLocation(imageSource[47]);
      if (outer1_15.GLOBAL_EMOJI !== initialUpsellKey) {
        if (outer1_15.ANIMATED_EMOJI !== tmp3) {
          if (outer1_15.CUSTOM_PROFILES !== tmp3) {
            if (outer1_15.PREMIUM_GUILD_PROFILE !== tmp3) {
              if (outer1_15.APP_ICONS !== tmp3) {
                return null;
              }
            }
          }
        }
      }
      return outer1_19(analyticsLocation(imageSource[47]), obj);
    };
    intl = require("getSystemLocale").intl;
    obj1.cancelText = intl.string(require("getSystemLocale").t.cpT0Cq);
    obj1.onClose = onClose;
    obj1.onConfirm = onViewAllPerks;
    obj1.children = (() => {
      let obj = { style: _slicedToArray.carousel, width: result, pageIndicatorStyle: _slicedToArray.pageIndicatorStyle };
      analyticsLocation(imageSource[49]);
      obj.children = closure_6.map((key) => outer2_19(outer2_23, { isInitial: outer1_0 === key.key, upsellItem: key, alertWidth: outer1_4 }, key.key));
      if (outer1_15.GLOBAL_EMOJI === initialUpsellKey) {
        obj = { alertWidth: result, useTier0Description: useTier0UpsellContent };
        return outer1_19(outer1_28, obj);
      } else if (outer1_15.ANIMATED_EMOJI === tmp3) {
        obj = { alertWidth: result, useTier0Description: useTier0UpsellContent };
        return outer1_19(outer1_29, obj);
      } else if (outer1_15.GLOBAL_STICKER === tmp3) {
        const obj1 = { alertWidth: result, useTier0Description: useTier0UpsellContent };
        return outer1_19(outer1_33, obj1);
      } else if (outer1_15.CUSTOM_PROFILES === tmp3) {
        const obj2 = { alertWidth: result };
        return outer1_19(outer1_31, obj2);
      } else if (outer1_15.APP_ICONS === tmp3) {
        const obj3 = { alertWidth: result, imageSource };
        return outer1_19(outer1_32, obj3);
      } else if (outer1_15.PREMIUM_GUILD_PROFILE === tmp3) {
        const obj4 = { alertWidth: result };
        return outer1_19(outer1_30, obj4);
      } else if (outer1_15.LONGER_MESSAGE === tmp3) {
        const obj5 = { alertWidth: result };
        return outer1_19(outer1_34, obj5);
      } else if (outer1_15.GUILD_CAP === tmp3) {
        const obj6 = { alertWidth: result };
        return outer1_19(outer1_35, obj6);
      } else if (outer1_15.UPLOAD === tmp3) {
        const obj7 = {};
        const obj8 = { key: outer1_15.UPLOAD, image: analyticsLocation(imageSource[50]) };
        const intl = initialUpsellKey(imageSource[19]).intl;
        obj8.activeTitle = intl.string(initialUpsellKey(imageSource[19]).t["1EOZqw"]);
        const intl2 = initialUpsellKey(imageSource[19]).intl;
        obj8.passiveTitle = intl2.string(initialUpsellKey(imageSource[19]).t.tB51W4);
        obj8.description = getUploadAlertDescription();
        obj7.item = obj8;
        obj7.alertWidth = result;
        return outer1_19(outer1_36, obj7);
      } else {
        return tmp2;
      }
    })();
    return jsx(tmp6, obj1);
  }
}
({ View: closure_10, Image: closure_11 } = get_ActivityIndicator);
({ AnalyticEvents: closure_14, UpsellTypes: closure_15 } = ME);
({ PremiumSubscriptionSKUs: closure_17, PremiumTypes: closure_18 } = GuildFeatures);
({ jsx: closure_19, jsxs: closure_20, Fragment: closure_21 } = jsxProd);
_createForOfIteratorHelperLoose = { carousel: { alignItems: "center" }, upsellContainer: { alignItems: "center" }, premiumUpsellContainer: { alignItems: "center", paddingHorizontal: 8 }, nitroWheel: { width: 32, height: 32, marginVertical: -8 }, upsellImage: { height: 80, width: 120 }, upsellTitle: { marginBottom: 8, textAlign: "center" } };
_createForOfIteratorHelperLoose = { marginVertical: require("_createForOfIteratorHelperLoose").space.PX_8, textAlign: "center" };
_createForOfIteratorHelperLoose.premiumUpsellTitle = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.upsellDescription = { textAlign: "center" };
_createForOfIteratorHelperLoose.premiumUpsellDescription = { textAlign: "center" };
_createForOfIteratorHelperLoose.pageIndicatorStyle = { marginTop: 16 };
_createForOfIteratorHelperLoose.largerUpsellImage = { height: 154, width: 226 };
_createForOfIteratorHelperLoose.customProfileUpsellImage = { width: 240, height: 194 };
_createForOfIteratorHelperLoose.loadingIndicator = { height: 170 };
_createForOfIteratorHelperLoose.customAppIconUpsellLightImage = { borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, borderWidth: 2 };
let obj2 = { height: 80, width: 80, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
_createForOfIteratorHelperLoose.customAppIconsUpsellImage = obj2;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createLegacyClassComponentStyles(_createForOfIteratorHelperLoose);
const tmp7 = ((PureComponent) => {
  class UpsellItem {
    constructor() {
      self = this;
      tmp = outer1_4(this, UpsellItem);
      obj = outer1_7(UpsellItem);
      tmp2 = outer1_6;
      if (outer1_26()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_7;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_7(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback3(UpsellItem, PureComponent);
  let items = [
    {
      key: "render",
      value() {
        let activeTitle;
        let description;
        const tmp = outer1_22(this.context);
        const props = this.props;
        const upsellItem = props.upsellItem;
        let passiveTitle = upsellItem.passiveTitle;
        let obj = { style: items };
        items = [tmp.upsellContainer, { width: props.alertWidth }];
        obj = { style: tmp.upsellImage, source: upsellItem.image, resizeMode: "contain" };
        ({ activeTitle, description } = upsellItem);
        const items1 = [outer1_19(outer1_11, obj), , ];
        obj = { style: tmp.upsellTitle, variant: "text-md/medium", color: "mobile-text-heading-primary" };
        if (props.isInitial) {
          passiveTitle = activeTitle;
        }
        obj.children = passiveTitle;
        items1[1] = outer1_19(UpsellItem(outer1_2[16]).Text, obj);
        items1[2] = outer1_19(UpsellItem(outer1_2[16]).Text, { style: tmp.upsellDescription, variant: "text-sm/medium", children: description });
        obj.children = items1;
        return outer1_20(outer1_10, obj);
      }
    }
  ];
  return callback2(UpsellItem, items);
})(importAllResult.PureComponent);
let closure_23 = tmp7;
tmp7.contextType = require("ManaContext").ThemeContext;
tmp7.defaultProps = { isInitial: false };
let c24 = 500;
let c25 = 32;
let obj1 = { borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, borderWidth: 2 };
let result = require("_defineProperties").fileFinishedImporting("components_native/premium/PremiumUpsellAlert.tsx");

export default PremiumUpsellAlert;
export { PremiumUpsellItem };
export { PremiumUpsellAlert };
