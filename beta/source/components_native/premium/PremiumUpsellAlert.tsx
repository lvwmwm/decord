// Module ID: 9978
// Function ID: 9979
// Name: PremiumUpsellAlert
// Dependencies: [32, 19, 17, 1194, 1383, 1072, 9979, 1385, 21, 5014, 575, 5080, 5717, 5624, 7627, 1113, 2047, 9786, 9787, 5253, 5021, 10007, 10008, 10009, 10010, 9775, 10011, 10012, 10013, 10014, 504, 7369, 5932, 9785, 1491, 7326, 7351, 5593, 1252, 5074, 6451, 6030, 1187, 10015, 10016, 9789, 2]

// Module 9978 (PremiumUpsellAlert)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import intl6 from "intl" /* 1113 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PremiumUtils from "PremiumUtils" /* 2047 */;
import shared from "shared" /* 5021 */;
import native from "native" /* 5080 */;
import useThemeDefault from "useTheme" /* 5253 */;
import Text_Text from "Text/Text" /* 5624 */;
import FastImageDefault from "FastImage" /* 5717 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 5932 */;
import usePremiumTrialOffer from "usePremiumTrialOffer" /* 7627 */;
import useMessageMaxLengthDefault from "useMessageMaxLength" /* 9775 */;
import AssetRegistryDefault from "AssetRegistry" /* 9786 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9787 */;
import AppIconConstants from "AppIconConstants" /* 9979 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 10009 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 10010 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 10015 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1194 */;
import UserStore from "UserStore" /* 1383 */;
import Constants from "Constants" /* 1072 */;
import PremiumConstants from "PremiumConstants" /* 1385 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let c9;
let closure_12;
let closure_14;
let closure_15;
let map1;
let metroImportAll;
let obj2;
let obj3;
let size;
let unpackModuleId;
class PremiumUpsellItem {
  constructor(upsellItem) {
    let alertWidth;
    let description;
    let image;
    let imageStyle;
    let items;
    let items1;
    let items2;
    let style;
    let title;
    upsellItem = upsellItem.upsellItem;
    ({ alertWidth, imageStyle, style } = upsellItem);
    const obj = createStyles;
    const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(closure_16);
    const obj2 = { style: items, children: items2 };
    items = [legacyClassComponentStyles.premiumUpsellContainer, { width: alertWidth }, style];
    ({ image, title, description } = upsellItem);
    const obj3 = { style: items1, source: image, resizeMode: "contain" };
    items1 = [legacyClassComponentStyles.upsellImage, imageStyle];
    items2 = [map1(FastImageDefault, obj3), , ];
    const obj4 = { style: legacyClassComponentStyles.premiumUpsellTitle, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: title };
    items2[1] = map1(Text_Text.Text, obj4);
    const obj5 = { style: legacyClassComponentStyles.premiumUpsellDescription, variant: "text-md/medium", children: description };
    items2[2] = map1(Text_Text.Text, obj5);
    return authStore3(View, obj2);
  }
}
function GlobalEmojiUpsell(arg0) {
  let alertWidth;
  let format2Result;
  let intl4;
  let obj6;
  let tmpResult;
  let tmpResult3;
  let tmpResult4;
  let useTier0Description;
  ({ alertWidth, useTier0Description } = arg0);
  const obj = usePremiumTrialOffer;
  const premiumTrialOffer = obj.usePremiumTrialOffer();
  let skuId;
  if (premiumTrialOffer != null) {
    const subscriptionTrial = premiumTrialOffer.subscriptionTrial;
    if (subscriptionTrial != null) {
      skuId = subscriptionTrial.skuId;
    }
  }
  const intl = tmp(1113).intl;
  const formatResult = intl.format(intl6.t["KEn+LY"], {});
  if (null != skuId) {
    if (unpackModuleId.TIER_0 === skuId) {
      const intl3 = tmp(1113).intl;
      const format2 = intl3.format;
      const obj2 = { planName: tmpResult.getPremiumTypeDisplayName(authStore2.TIER_0) };
      const v1P7x8p = tmp(1113).t["1P7x8p"];
      tmpResult = PremiumUtils;
      format2Result = format2(v1P7x8p, obj2);
    } else {
      format2Result = formatResult;
      if (tmp8.TIER_2 === skuId) {
        const intl5 = tmp(1113).intl;
        const format3 = intl5.format;
        const obj3 = { planName: tmpResult3.getPremiumTypeDisplayName(authStore2.TIER_2) };
        const v1P7x8p1 = tmp(1113).t["1P7x8p"];
        tmpResult3 = PremiumUtils;
        format2Result = format3(v1P7x8p1, obj3);
      }
    }
  } else {
    format2Result = formatResult;
    if (useTier0Description) {
      const intl2 = tmp(1113).intl;
      const format = intl2.format;
      const obj4 = { planName: tmpResult4.getPremiumTypeDisplayName(authStore2.TIER_0) };
      const kWBwlJ = tmp(1113).t.kWBwlJ;
      tmpResult4 = PremiumUtils;
      format2Result = format(kWBwlJ, obj4);
    }
  }
  const obj5 = { alertWidth, upsellItem: obj6 };
  obj6 = { image: AssetRegistryDefault, title: intl4.string(intl6.t.UNtcBV), description: format2Result };
  intl4 = tmp(1113).intl;
  return map1(PremiumUpsellItem, obj5);
}
function AnimatedEmojiUpsell(alertWidth) {
  let formatResult;
  let intl;
  let obj2;
  let tmp4Result;
  const obj = { alertWidth: alertWidth.alertWidth, upsellItem: obj2 };
  const useTier0Description = alertWidth.useTier0Description;
  obj2 = { image: AssetRegistryDefault2, title: intl.string(intl6.t.F6rmyq), description: formatResult };
  intl = intl6.intl;
  const intl2 = intl6.intl;
  const format = intl2.format;
  const t = intl6.t;
  const tmp = map1;
  const tmp2 = PremiumUpsellItem;
  if (useTier0Description) {
    const v1a36ee = t["1a36ee"];
    const obj3 = { planName: tmp4Result.getPremiumTypeDisplayName(authStore2.TIER_0) };
    tmp4Result = PremiumUtils;
    formatResult = format(v1a36ee, obj3);
  } else {
    formatResult = format(t.JxTzzb, {});
  }
  return tmp(tmp2, obj);
}
function PremiumGuildIdentityUpsell(alertWidth) {
  let intl;
  let intl2;
  let obj4;
  let tmp4Result;
  alertWidth = alertWidth.alertWidth;
  const obj = createStyles;
  const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(closure_16);
  const obj2 = { alertWidth, imageStyle: legacyClassComponentStyles.largerUpsellImage, upsellItem: obj4 };
  const tmp5 = useThemeDefault();
  const obj3 = shared;
  const tmp6 = map1;
  const tmp7 = PremiumUpsellItem;
  if (obj3.isThemeDark(tmp5)) {
    tmp4Result = tmp4(10007);
  } else {
    tmp4Result = tmp4(10008);
  }
  obj4 = { image: tmp4Result, title: intl.string(intl6.t.OVN9la), description: intl2.string(intl6.t.j0dyAG) };
  intl = tmp(1113).intl;
  intl2 = tmp(1113).intl;
  return tmp6(tmp7, obj2);
}
function CustomProfilesUpsell(alertWidth) {
  let intl;
  let intl2;
  let obj3;
  alertWidth = alertWidth.alertWidth;
  const obj = createStyles;
  const obj2 = { alertWidth, imageStyle: obj.useLegacyClassComponentStyles(closure_16).customProfileUpsellImage, upsellItem: obj3 };
  obj3 = { image: AssetRegistryDefault3, title: intl.string(intl6.t.rTY76D), description: intl2.string(intl6.t["2LCxoj"]) };
  intl = intl6.intl;
  intl2 = intl6.intl;
  return map1(PremiumUpsellItem, obj2);
}
function CustomAppIconsUpsell(imageSource) {
  let intl;
  let intl2;
  let items;
  let obj4;
  imageSource = imageSource.imageSource;
  const alertWidth = imageSource.alertWidth;
  const obj = createStyles;
  const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(closure_16);
  const arr = getIcons();
  const iconSource = arr.filter((isPremium) => isPremium.isPremium)[0].iconSource;
  const obj3 = { alertWidth, imageStyle: items, upsellItem: obj4 };
  items = [legacyClassComponentStyles.customAppIconsUpsellImage, ];
  let prop;
  const tmp4 = useThemeDefault();
  const obj2 = shared;
  const tmp5 = map1;
  const tmp6 = PremiumUpsellItem;
  if (obj2.isThemeLight(tmp4)) {
    prop = legacyClassComponentStyles.customAppIconUpsellLightImage;
  }
  items[1] = prop;
  if (imageSource == null) {
    imageSource = iconSource;
  }
  obj4 = { image: imageSource, title: intl.string(intl6.t["1B1Cyn"]), description: intl2.string(intl6.t.VL5TYT) };
  intl = tmp(1113).intl;
  intl2 = tmp(1113).intl;
  return tmp5(tmp6, obj3);
}
function GlobalStickerUpsell(alertWidth) {
  let formatResult;
  let intl;
  let obj2;
  let tmp4Result;
  const obj = { alertWidth: alertWidth.alertWidth, upsellItem: obj2 };
  const useTier0Description = alertWidth.useTier0Description;
  obj2 = { image: AssetRegistryDefault4, title: intl.string(intl6.t.jn2mBl), description: formatResult };
  intl = intl6.intl;
  const intl2 = intl6.intl;
  const format = intl2.format;
  const t = intl6.t;
  const tmp = map1;
  const tmp2 = PremiumUpsellItem;
  if (useTier0Description) {
    const prop = t["8C+FZk"];
    const obj3 = { planName: tmp4Result.getPremiumTypeDisplayName(authStore2.TIER_0) };
    tmp4Result = PremiumUtils;
    formatResult = format(prop, obj3);
  } else {
    formatResult = format(t["0qJYHK"], {});
  }
  return tmp(tmp2, obj);
}
function LongerMessageUpsell(alertWidth) {
  let intl;
  let intl2;
  let obj4;
  let tmp4Result;
  alertWidth = alertWidth.alertWidth;
  const obj = createStyles;
  const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(closure_16);
  const obj2 = { alertWidth, imageStyle: legacyClassComponentStyles.largerUpsellImage, upsellItem: obj4 };
  const tmp5 = useThemeDefault();
  const tmp6 = useMessageMaxLengthDefault();
  const obj3 = shared;
  const tmp7 = map1;
  const tmp8 = PremiumUpsellItem;
  if (obj3.isThemeDark(tmp5)) {
    tmp4Result = tmp4(10011);
  } else {
    tmp4Result = tmp4(10012);
  }
  obj4 = { image: tmp4Result, title: intl.string(intl6.t["8cjmTj"]), description: intl2.formatToPlainString(intl6.t.moN9wh, { maxLength: tmp6 }) };
  intl = tmp(1113).intl;
  intl2 = tmp(1113).intl;
  return tmp7(tmp8, obj2);
}
function GuildCapUpsell(alertWidth) {
  let intl;
  let intl2;
  let obj4;
  let tmp4Result;
  alertWidth = alertWidth.alertWidth;
  const obj = createStyles;
  const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(closure_16);
  const obj2 = { alertWidth, imageStyle: legacyClassComponentStyles.largerUpsellImage, upsellItem: obj4 };
  const tmp5 = useThemeDefault();
  const obj3 = shared;
  const tmp6 = map1;
  const tmp7 = PremiumUpsellItem;
  if (obj3.isThemeDark(tmp5)) {
    tmp4Result = tmp4(10013);
  } else {
    tmp4Result = tmp4(10014);
  }
  obj4 = { image: tmp4Result, title: intl.string(intl6.t["CoNXB+"]), description: intl2.format(intl6.t.mkXb2F, {}) };
  intl = tmp(1113).intl;
  intl2 = tmp(1113).intl;
  return tmp6(tmp7, obj2);
}
function UploadUpsell(arg0) {
  let alertWidth;
  let dataSavingMode;
  let intl;
  let intl2;
  let item;
  ({ item, alertWidth } = arg0);
  let obj = get_initialized;
  const items = [UnsyncedUserSettingsStore];
  const stateFromStores = obj.useStateFromStores(items, () => dataSavingMode.dataSavingMode);
  const first = _slicedToArray(react.useState(!stateFromStores), 1)[0];
  const children = [map1(UpsellItem, { isInitial: true, upsellItem: item, alertWidth }, constants2.UPLOAD), ];
  let tmp7Result = null;
  const tmp5 = authStore3;
  const tmp6 = closure_15;
  const tmp7 = map1;
  if (first) {
    let obj2 = {
      start: true,
      end: true,
      label: intl.string(intl6.t.ix8XIj),
      subLabel: intl2.string(intl6.t["wC0+Ph"]),
      value: stateFromStores,
      onValueChange: function toggleExtraCompression(dataSavingMode) {
          const obj = UserSettingsActionCreatorsDefault;
          const obj2 = { dataSavingMode };
          const result = obj.updatedUnsyncedSettings(obj2);
        }
    };
    const TableSwitchRow = tmp(7369).TableSwitchRow;
    intl = tmp(1113).intl;
    intl2 = tmp(1113).intl;
    tmp7Result = tmp7(TableSwitchRow, obj2);
  }
  children[1] = tmp7Result;
  return tmp5(tmp6, { children });
}
class PremiumUpsellAlert {
  constructor(initialUpsellKey) {
    let alertWidth;
    let analyticsLocations;
    let analyticsProperties;
    let currentUser;
    let formatToPlainStringResult;
    let getNitroText;
    let imageSource;
    let intl;
    let intl4;
    let intl5;
    let onClose;
    let onViewAllPerks;
    let tmp12Result;
    let tmpResult;
    let tmpResult5;
    let tmpResult7;
    let tmpResult8;
    initialUpsellKey = initialUpsellKey.initialUpsellKey;
    const analyticsLocation = initialUpsellKey.analyticsLocation;
    let legacyClassComponentStyles;
    let tmp = initialUpsellKey;
    let tmp2 = legacyClassComponentStyles;
    ({ analyticsLocations, analyticsProperties, onClose, imageSource } = initialUpsellKey);
    let obj = initialUpsellKey(legacyClassComponentStyles[9]);
    legacyClassComponentStyles = obj.useLegacyClassComponentStyles(closure_16);
    size = analyticsLocation(legacyClassComponentStyles[34])();
    const diff = Math.min(0.9 * Math.min(size.width, size.height), c28) - c29;
    let c3 = diff;
    let obj2 = initialUpsellKey(legacyClassComponentStyles[30]);
    const items = [UserStore];
    const stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
    const obj3 = initialUpsellKey(legacyClassComponentStyles[33]);
    const upsellItems = obj3.getUpsellItems();
    const sorted = upsellItems.sort((key) => {
      let num = 1;
      if (key.key === initialUpsellKey) {
        num = -1;
      }
      return num;
    });
    const tmp7 = analyticsLocation(legacyClassComponentStyles[35]);
    const analyticsLocations2 = tmp7(analyticsLocations, analyticsLocation(legacyClassComponentStyles[36]).PREMIUM_UPSELL_ALERT).analyticsLocations;
    analyticsLocation(legacyClassComponentStyles[37])(() => {
      const obj = AnalyticsUtilsDefault;
      const obj2 = { type: "Nitro Upsell", location: analyticsLocation };
      obj.track(metroImportAll.OPEN_MODAL, obj2);
    });
    const obj5 = initialUpsellKey(legacyClassComponentStyles[33]);
    const premiumUpsellConfig = obj5.usePremiumUpsellConfig(initialUpsellKey, analyticsLocations2, analyticsLocation);
    const useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
    const obj4 = { analyticsLocation, analyticsProperties, useTier0UpsellContent };
    ({ getNitroText, onViewAllPerks } = premiumUpsellConfig);
    const ref = analyticsLocations2.useRef(obj4);
    const effect = analyticsLocations2.useEffect(() => {
      ref.current = obj4;
    });
    const items1 = [analyticsLocations2];
    const effect1 = analyticsLocations2.useEffect(() => {
      let analyticsProperties;
      let useTier0UpsellContent;
      ({ analyticsLocation, analyticsProperties, useTier0UpsellContent } = ref.current);
      const obj = { location: analyticsLocation, location_stack: analyticsLocations2, sku_id: useTier0UpsellContent ? unpackModuleId.TIER_0 : unpackModuleId.TIER_2 };
      const track = AnalyticsUtilsDefault.track;
      const PREMIUM_UPSELL_VIEWED = metroImportAll.PREMIUM_UPSELL_VIEWED;
      AnalyticsUtilsDefault;
      const merged = Object.assign(analyticsProperties);
      track(PREMIUM_UPSELL_VIEWED, obj);
    }, items1);
    const obj6 = {
      confirmColor: initialUpsellKey(legacyClassComponentStyles[42]).ButtonColors.GREEN,
      confirmText: getNitroText,
      renderConfirmIcon() {
        const obj = { source: AssetRegistryDefault5, style: legacyClassComponentStyles.nitroWheel, resizeMode: "contain" };
        const tmp = FastImageDefault;
        const tmp2 = map1(tmp, obj);
        if (constants.GLOBAL_EMOJI !== initialUpsellKey) {
          if (constants.ANIMATED_EMOJI !== initialUpsellKey) {
            if (constants.CUSTOM_PROFILES !== initialUpsellKey) {
              if (constants.PREMIUM_GUILD_PROFILE !== initialUpsellKey) {
                if (constants.APP_ICONS !== initialUpsellKey) {
                  return null;
                }
              }
            }
          }
        }
        return tmp2;
      },
      cancelText: intl.string(initialUpsellKey(legacyClassComponentStyles[15]).t.cpT0Cq),
      onClose,
      onConfirm: onViewAllPerks,
      children: tmp12Result
    };
    const tmp13 = analyticsLocation(legacyClassComponentStyles[41]);
    intl = initialUpsellKey(legacyClassComponentStyles[15]).intl;
    const obj7 = {
      style: legacyClassComponentStyles.carousel,
      width: diff,
      pageIndicatorStyle: legacyClassComponentStyles.pageIndicatorStyle,
      children: sorted.map((key) => {
        const obj = { isInitial: initialUpsellKey === key.key, upsellItem: key, alertWidth };
        return map1(UpsellItem, obj, key.key);
      })
    };
    const tmp14 = analyticsLocation(legacyClassComponentStyles[44]);
    tmp12Result = closure_13(tmp14, obj7);
    const tmp4 = analyticsLocation;
    if (constants2.GLOBAL_EMOJI === initialUpsellKey) {
      const obj8 = { alertWidth: diff, useTier0Description: useTier0UpsellContent };
      tmp12Result = tmp12(GlobalEmojiUpsell, obj8);
    } else if (constants2.ANIMATED_EMOJI === initialUpsellKey) {
      const obj9 = { alertWidth: diff, useTier0Description: useTier0UpsellContent };
      tmp12Result = tmp12(AnimatedEmojiUpsell, obj9);
    } else if (constants2.GLOBAL_STICKER === initialUpsellKey) {
      const obj10 = { alertWidth: diff, useTier0Description: useTier0UpsellContent };
      tmp12Result = tmp12(GlobalStickerUpsell, obj10);
    } else if (constants2.CUSTOM_PROFILES === initialUpsellKey) {
      const obj11 = { alertWidth: diff };
      tmp12Result = tmp12(CustomProfilesUpsell, obj11);
    } else if (constants2.APP_ICONS === initialUpsellKey) {
      const obj12 = { alertWidth: diff, imageSource };
      tmp12Result = tmp12(CustomAppIconsUpsell, obj12);
    } else if (constants2.PREMIUM_GUILD_PROFILE === initialUpsellKey) {
      const obj13 = { alertWidth: diff };
      tmp12Result = tmp12(PremiumGuildIdentityUpsell, obj13);
    } else if (constants2.LONGER_MESSAGE === initialUpsellKey) {
      const obj14 = { alertWidth: diff };
      tmp12Result = tmp12(LongerMessageUpsell, obj14);
    } else if (constants2.GUILD_CAP === initialUpsellKey) {
      const obj15 = { alertWidth: diff };
      tmp12Result = tmp12(GuildCapUpsell, obj15);
    } else if (constants2.UPLOAD === initialUpsellKey) {
      const obj16 = { key: constants2.UPLOAD, image: tmp4(tmp2[45]), activeTitle: intl4.string(tmp(tmp2[15]).t["1EOZqw"]), passiveTitle: intl5.string(tmp(tmp2[15]).t.tB51W4), description: formatToPlainStringResult };
      intl4 = tmp(tmp2[15]).intl;
      intl5 = tmp(tmp2[15]).intl;
      const tmp30 = UploadUpsell;
      if (useTier0UpsellContent) {
        const intl3 = tmp(tmp2[15]).intl;
        const formatToPlainString = intl3.formatToPlainString;
        const obj17 = { premiumPlan: tmpResult.getPremiumTypeDisplayName(closure_12.TIER_0), premiumMaxSize: tmpResult5.getMaxFileSizeForPremiumType(closure_12.TIER_0) };
        const Z7Xb7H = tmp(tmp2[15]).t.Z7Xb7H;
        tmpResult = tmp(tmp2[16]);
        tmpResult5 = tmp(tmp2[16]);
        formatToPlainStringResult = formatToPlainString(Z7Xb7H, obj17);
      } else {
        const tmpResult6 = tmp(tmp2[39]);
        const userMaxFileSize = tmpResult6.getUserMaxFileSize(stateFromStores);
        const result = userMaxFileSize / tmp(tmp2[40]).BYTE_IN_KB;
        const intl2 = tmp(tmp2[15]).intl;
        const format = intl2.format;
        const obj18 = { maxUploadStandard: tmpResult7.formatSize(result, { useKibibytes: true }), maxUploadPremium: tmpResult8.getMaxFileSizeForPremiumType(closure_12.TIER_2) };
        const DUT5IC = tmp(tmp2[15]).t.DUT5IC;
        tmpResult7 = tmp(tmp2[40]);
        tmpResult8 = tmp(tmp2[16]);
        formatToPlainStringResult = format(DUT5IC, obj18);
      }
      const obj19 = { item: obj16, alertWidth: diff };
      tmp12Result = tmp12(tmp30, obj19);
    }
    return closure_13(tmp13, obj6);
  }
}
const View = react_native.View;
({ AnalyticEvents: metroImportAll, UpsellTypes: c9 } = Constants);
const getIcons = AppIconConstants.getIcons;
({ PremiumSubscriptionSKUs: unpackModuleId, PremiumTypes: closure_12 } = PremiumConstants);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = Fragment);
let obj = { carousel: { alignItems: "center" }, upsellContainer: { alignItems: "center" }, premiumUpsellContainer: { alignItems: "center", paddingHorizontal: 8 }, nitroWheel: { width: 32, height: 32, marginVertical: -8 }, upsellImage: { height: 80, width: 120 }, upsellTitle: { marginBottom: 8, textAlign: "center" }, premiumUpsellTitle: obj2, upsellDescription: { textAlign: "center" }, premiumUpsellDescription: { textAlign: "center" }, pageIndicatorStyle: { marginTop: 16 }, largerUpsellImage: { height: 154, width: 226 }, customProfileUpsellImage: { width: 240, height: 194 }, loadingIndicator: { height: 170 }, customAppIconUpsellLightImage: obj3, customAppIconsUpsellImage: size };
obj2 = { marginVertical: nativeDefault.space.PX_8, textAlign: "center" };
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
obj3 = { borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 2 };
size = { height: 80, width: 80, borderRadius: nativeDefault.radii.lg };
const authStore4 = createLegacyClassComponentStyles(obj);
const PureComponent = react.PureComponent;
class UpsellItem extends PureComponent {
  render() {
    let activeTitle;
    let description;
    let image;
    let items;
    let items1;
    const tmp = closure_16(this.context);
    const props = this.props;
    const upsellItem = props.upsellItem;
    let passiveTitle = upsellItem.passiveTitle;
    const obj = { style: items, children: items1 };
    items = [tmp.upsellContainer, { width: props.alertWidth }];
    const isInitial = props.isInitial;
    ({ image, activeTitle, description } = upsellItem);
    items1 = [, , ];
    const obj2 = { style: tmp.upsellImage, source: image, resizeMode: "contain" };
    items1[0] = map1(FastImageDefault, obj2);
    const obj3 = { style: tmp.upsellTitle, variant: "text-md/medium", color: "mobile-text-heading-primary", children: passiveTitle };
    const Text = Text_Text.Text;
    const tmp2 = authStore3;
    const tmp3 = View;
    if (isInitial) {
      passiveTitle = activeTitle;
    }
    items1[1] = map1(Text, obj3);
    const obj4 = { style: tmp.upsellDescription, variant: "text-sm/medium", children: description };
    items1[2] = map1(Text_Text.Text, obj4);
    return tmp2(tmp3, obj);
  }
}
const prototype = UpsellItem.prototype;
UpsellItem.contextType = native.ThemeContext;
UpsellItem.defaultProps = { isInitial: false };
let c28 = 500;
let c29 = 32;
size = size_mod;
let result = size.fileFinishedImporting("components_native/premium/PremiumUpsellAlert.tsx");

export default PremiumUpsellAlert;
export { PremiumUpsellItem };
export { PremiumUpsellAlert };
