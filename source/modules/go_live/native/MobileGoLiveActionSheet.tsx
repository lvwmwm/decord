// Module ID: 10719
// Function ID: 83497
// Name: ApplicationStreamPresets
// Dependencies: [57, 31, 4220, 4149, 1348, 1838, 1906, 1849, 4185, 653, 4191, 33, 4130, 689, 478, 4098, 10719, 1934, 480, 566, 10720, 10725, 5462, 5482, 3991, 4309, 8882, 9248, 1212, 2068, 10726, 10728, 5515, 4126, 3833, 9418, 5187, 5189, 5121, 5501, 7654, 8028, 668, 7653, 9416, 8038, 8605, 5502, 4543, 10718, 2]
// Exports: showMobileGoLiveActionSheet

// Module 10719 (ApplicationStreamPresets)
import _slicedToArray from "_slicedToArray";
import importAllResult from "ImageSparkleIcon";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_createForOfIteratorHelperLoose";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import { ApplicationStreamPresets } from "makeButton";
import { ApplicationStreamStates } from "ME";
import { MediaEngineContextTypes } from "DesktopSources";
import jsxProd from "Text";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import isWindows from "isWindows";

let closure_14;
let closure_15;
const require = arg1;
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let obj = {};
obj = { gap: require("_createForOfIteratorHelperLoose").space.PX_24 };
obj.wrapper = obj;
obj.header = { textAlign: "center" };
_createForOfIteratorHelperLoose = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.section = _createForOfIteratorHelperLoose;
let obj2 = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
obj.highQualityLabel = obj2;
let closure_16 = _createForOfIteratorHelperLoose.createStyles(obj);
let items = [{ preset: ApplicationStreamPresets.PRESET_MOBILE_DEFAULT, enabled: true }, , ];
let obj4 = { preset: ApplicationStreamPresets.PRESET_MOBILE_PERFORMANCE };
obj4.enabled = !isWindows.isIOS();
items[1] = obj4;
items[2] = { preset: ApplicationStreamPresets.PRESET_MOBILE_HIGH_QUALITY, enabled: true };
const found = items.filter((enabled) => enabled.enabled);
let closure_17 = found.map((preset) => preset.preset);
const memoResult = importAllResult.memo(function MobileGoLiveActionSheet() {
  let preset;
  let soundshareEnabled;
  function getTableRadioRowConfig(value) {
    let obj = user(callback[20]);
    const maxSettingsForPreset = obj.getMaxSettingsForPreset(lib.PRESET_MOBILE_DEFAULT);
    let obj1 = user(callback[20]);
    const maxSettingsForPreset1 = obj1.getMaxSettingsForPreset(lib.PRESET_MOBILE_PERFORMANCE);
    let obj2 = user(callback[20]);
    const maxSettingsForPreset2 = obj2.getMaxSettingsForPreset(lib.PRESET_MOBILE_HIGH_QUALITY);
    obj = { value };
    obj = {};
    obj1 = { icon: outer1_14(user(callback[27]).MobilePhoneIcon, {}) };
    const intl = user(callback[28]).intl;
    obj1.label = intl.string(guildPremiumTier(callback[29])["2qmQ8N"]);
    let str = "";
    let str2 = "";
    if (null != maxSettingsForPreset) {
      const intl2 = user(callback[28]).intl;
      str2 = intl2.formatToPlainString(guildPremiumTier(callback[29]).ibH7vy, maxSettingsForPreset);
    }
    obj1.subLabel = str2;
    obj[lib.PRESET_MOBILE_DEFAULT] = obj1;
    obj2 = { icon: outer1_14(user(callback[30]).SpeedometerIcon, {}) };
    const intl3 = user(callback[28]).intl;
    obj2.label = intl3.string(guildPremiumTier(callback[29])["5eO4/m"]);
    let formatToPlainStringResult = str;
    if (null != maxSettingsForPreset1) {
      const intl4 = user(callback[28]).intl;
      formatToPlainStringResult = intl4.formatToPlainString(guildPremiumTier(callback[29]).fN0UQY, maxSettingsForPreset1);
    }
    obj2.subLabel = formatToPlainStringResult;
    obj[lib.PRESET_MOBILE_PERFORMANCE] = obj2;
    const obj3 = { icon: outer1_14(user(callback[31]).ImageSparkleIcon, {}) };
    const obj4 = { style: tmp7.highQualityLabel };
    const obj5 = { variant: "text-md/semibold", color: "text-strong" };
    const intl5 = user(callback[28]).intl;
    obj5.children = intl5.string(guildPremiumTier(callback[29]).nMcXo1);
    const items = [outer1_14(user(callback[33]).Text, obj5), ];
    const obj6 = { source: guildPremiumTier(callback[35]), size: "xs" };
    items[1] = outer1_14(user(callback[34]).BaseIconImage, obj6);
    obj4.children = items;
    obj3.label = outer1_15(guildPremiumTier(callback[32]), obj4);
    if (null != maxSettingsForPreset2) {
      const intl6 = user(callback[28]).intl;
      str = intl6.formatToPlainString(guildPremiumTier(callback[29]).q4gYBi, maxSettingsForPreset2);
    }
    obj3.subLabel = str;
    obj[lib.PRESET_MOBILE_HIGH_QUALITY] = obj3;
    const merged = Object.assign(obj[value]);
    return obj;
  }
  let obj = user(callback[19]);
  let items = [analyticsLocations];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => analyticsLocations.getState());
  ({ preset, soundshareEnabled } = stateFromStoresObject);
  let obj1 = user(callback[19]);
  const items1 = [closure_10, first1, first, closure_8];
  const stateFromStoresObject1 = obj1.useStateFromStoresObject(items1, () => {
    currentUser = currentUser.getCurrentUser();
    const channel = first.getChannel(first1.getVoiceChannelId());
    const obj = { user: currentUser };
    let guildId;
    if (null != channel) {
      guildId = channel.getGuildId();
    }
    guild = guild.getGuild(guildId);
    let premiumTier;
    if (null != guild) {
      premiumTier = guild.premiumTier;
    }
    obj.guildPremiumTier = premiumTier;
    return obj;
  });
  user = stateFromStoresObject1.user;
  const guildPremiumTier = stateFromStoresObject1.guildPremiumTier;
  const items2 = [user, guildPremiumTier];
  callback = activeSourceId.useCallback((arg0) => user(callback[20]).canStreamWithPreset(arg0, user, guildPremiumTier), items2);
  let obj2 = user(callback[19]);
  const items3 = [closure_6];
  const stateFromStoresObject2 = obj2.useStateFromStoresObject(items3, () => {
    const currentUserActiveStream = tmp7.getCurrentUserActiveStream();
    const obj = {};
    let tmp2 = null != currentUserActiveStream;
    if (tmp2) {
      tmp2 = currentUserActiveStream.state === getTableRadioRowConfig.ACTIVE;
    }
    obj.isStreaming = tmp2;
    const streamerActiveStreamMetadata = tmp7.getStreamerActiveStreamMetadata();
    let sourceId;
    if (null != streamerActiveStreamMetadata) {
      sourceId = streamerActiveStreamMetadata.sourceId;
    }
    let tmp6 = null;
    if (null != sourceId) {
      tmp6 = sourceId;
    }
    obj.activeSourceId = tmp6;
    return obj;
  });
  const isStreaming = stateFromStoresObject2.isStreaming;
  activeSourceId = stateFromStoresObject2.activeSourceId;
  let obj3 = guildPremiumTier(callback[21]);
  const goLiveUpsellVariant = obj3.useConfig({ location: "MobileGoLiveActionSheet" }).goLiveUpsellVariant;
  analyticsLocations = guildPremiumTier(callback[22])(guildPremiumTier(callback[23]).MOBILE_GO_LIVE_ACTION_SHEET).analyticsLocations;
  const tmp7 = callback2();
  closure_6 = tmp7;
  let tmp8 = preset === ApplicationStreamPresets.PRESET_MOBILE_DEFAULT;
  if (!tmp8) {
    tmp8 = preset === ApplicationStreamPresets.PRESET_MOBILE_PERFORMANCE;
  }
  if (!tmp8) {
    tmp8 = preset === ApplicationStreamPresets.PRESET_MOBILE_HIGH_QUALITY;
  }
  if (tmp8) {
    const tmp13 = isStreaming(activeSourceId.useState(preset), 2);
    first = tmp13[0];
    closure_8 = tmp13[1];
    const tmp16 = isStreaming(activeSourceId.useState(soundshareEnabled), 2);
    first1 = tmp16[0];
    closure_10 = tmp16[1];
    let obj4 = user(callback[24]);
    const sharedValue = obj4.useSharedValue(!callback(ApplicationStreamPresets.PRESET_MOBILE_HIGH_QUALITY));
    const items4 = [user, guildPremiumTier, activeSourceId, isStreaming];
    ApplicationStreamPresets = activeSourceId.useCallback((preset, soundshareEnabled) => {
      let items = guildPremiumTier(callback[20])(preset, user, guildPremiumTier);
      if (null == items) {
        items = [];
      }
      const tmp = isStreaming(items, 2);
      const first = tmp[0];
      if (null != first) {
        if (null != tmp3) {
          let obj = { preset, resolution: first, frameRate: tmp3, soundshareEnabled };
          user(callback[25]).updateStreamSettings(obj);
          if (isStreaming) {
            obj = {};
            obj = { preset, resolution: first, frameRate: tmp3 };
            obj.qualityOptions = obj;
            obj.context = outer1_13.STREAM;
            if (null != activeSourceId) {
              const obj1 = { sourceId: activeSourceId, sound: soundshareEnabled };
              obj.desktopSettings = obj1;
            }
            guildPremiumTier(callback[26]).setGoLiveSource(obj);
            const obj4 = guildPremiumTier(callback[26]);
          }
          const obj5 = user(callback[25]);
        }
      }
    }, items4);
    obj = { value: analyticsLocations };
    obj = { startExpanded: true };
    obj1 = {};
    obj2 = { bottom: true, style: tmp7.wrapper };
    obj3 = { style: tmp7.header, variant: "redesign/heading-18/bold", color: "text-strong", accessibilityRole: "header" };
    let intl = user(callback[28]).intl;
    obj3.children = intl.string(guildPremiumTier(callback[29]).CrNjqp);
    const items5 = [callback(user(callback[33]).Text, obj3), , , , , ];
    obj4 = { style: tmp7.section };
    let obj5 = {};
    let intl2 = user(callback[28]).intl;
    obj5.title = intl2.string(guildPremiumTier(callback[29])["/XSr8v"]);
    obj5.hasIcons = false;
    let obj6 = {
      value: first,
      onChange(arg0) {
          if (callback(arg0)) {
            guild(arg0);
            lib(arg0, first1);
            if (isStreaming) {
              guildPremiumTier(callback[15]).hideActionSheet("MobileGoLiveActionSheet");
              const obj3 = guildPremiumTier(callback[15]);
            }
          } else {
            let obj = guildPremiumTier(callback[41]);
            obj = { initialUpsellKey: user(callback[42]).UpsellTypes.STREAM_HIGH_QUALITY, analyticsLocations };
            const result = obj.handleShowUpsellAlert(obj);
          }
        },
      hasIcons: true,
      children: closure_17.map((value) => {
          const merged = Object.assign(getTableRadioRowConfig(value));
          return outer1_14(user(callback[43]).TableRadioRow, {}, value);
        })
    };
    obj5.children = callback(user(callback[40]).TableRadioGroup, obj6);
    obj4.children = callback(user(callback[39]).TableRowGroup, obj5);
    items5[1] = callback(guildPremiumTier(callback[32]), obj4);
    let tmp26 = "one-step" === goLiveUpsellVariant && sharedValue.get();
    if (tmp26) {
      const obj7 = { style: tmp7.section };
      const obj8 = {};
      const tmp30 = guildPremiumTier(callback[32]);
      obj8.featureName = user(callback[45]).EntitlementFeatureNames.STREAM_HIGH_QUALITY;
      obj8.shouldShow = sharedValue;
      obj7.children = callback(guildPremiumTier(callback[44]), obj8);
      tmp26 = callback(tmp30, obj7);
      const tmp31 = guildPremiumTier(callback[44]);
    }
    items5[2] = tmp26;
    let tmp33 = "two-step" === goLiveUpsellVariant && sharedValue.get();
    if (tmp33) {
      const obj9 = { style: tmp7.section };
      const obj10 = {};
      const tmp37 = guildPremiumTier(callback[32]);
      let intl3 = user(callback[28]).intl;
      obj10.text = intl3.string(guildPremiumTier(callback[29]).u72Prd);
      obj10.onPress = function onPress() {
        let obj = guildPremiumTier(callback[41]);
        obj = { initialUpsellKey: user(callback[42]).UpsellTypes.STREAM_HIGH_QUALITY, analyticsLocations };
        const result = obj.handleShowUpsellAlert(obj);
      };
      obj9.children = callback(guildPremiumTier(callback[46]), obj10);
      tmp33 = callback(tmp37, obj9);
      const tmp38 = guildPremiumTier(callback[46]);
    }
    items5[3] = tmp33;
    const obj11 = { style: tmp7.section };
    const tmp22 = closure_15;
    const tmp24 = guildPremiumTier(callback[32]);
    const obj12 = {};
    let intl4 = user(callback[28]).intl;
    obj12.title = intl4.string(guildPremiumTier(callback[29])["j+eAMQ"]);
    obj12.hasIcons = false;
    const obj13 = {};
    let intl5 = user(callback[28]).intl;
    obj13.label = intl5.string(guildPremiumTier(callback[29]).uwMBDo);
    obj13.value = first1;
    obj13.onValueChange = function onValueChange(arg0) {
      currentUser(arg0);
      lib(first, arg0);
    };
    obj12.children = callback(user(callback[47]).TableSwitchRow, obj13);
    obj11.children = callback(user(callback[39]).TableRowGroup, obj12);
    items5[4] = callback(guildPremiumTier(callback[32]), obj11);
    const obj14 = { style: tmp7.section };
    const tmp43 = guildPremiumTier(callback[32]);
    if (isStreaming) {
      const obj15 = { size: "lg", variant: "destructive" };
      const intl7 = user(callback[28]).intl;
      obj15.text = intl7.string(guildPremiumTier(callback[29]).OsS9Ll);
      obj15.onPress = function onPress() {
        user(callback[49]).stopScreenshare();
        const obj = user(callback[49]);
        guildPremiumTier(callback[15]).hideActionSheet("MobileGoLiveActionSheet");
      };
      let obj16 = obj15;
    } else {
      obj16 = { size: "lg", variant: "primary" };
      let intl6 = user(callback[28]).intl;
      obj16.text = intl6.string(guildPremiumTier(callback[29])["3wwZ/Q"]);
      obj16.onPress = function onPress() {
        guildPremiumTier(callback[15]).hideActionSheet("MobileGoLiveActionSheet");
        const obj = guildPremiumTier(callback[15]);
        user(callback[49]).startStream();
      };
    }
    obj14.children = callback(user(callback[48]).Button, obj16);
    items5[5] = callback(guildPremiumTier(callback[32]), obj14);
    obj2.children = items5;
    obj1.children = tmp22(user(callback[38]).SafeAreaPaddingView, obj2);
    obj.children = callback(user(callback[37]).BottomSheetScrollView, obj1);
    obj.children = callback(user(callback[36]).BottomSheet, obj);
    return callback(user(callback[22]).AnalyticsLocationProvider, obj);
  }
  preset = ApplicationStreamPresets.PRESET_MOBILE_DEFAULT;
});
let obj3 = { preset: ApplicationStreamPresets.PRESET_MOBILE_DEFAULT, enabled: true };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/go_live/native/MobileGoLiveActionSheet.tsx");

export default memoResult;
export const showMobileGoLiveActionSheet = function showMobileGoLiveActionSheet(analyticsLocations) {
  let obj = importDefault(4098);
  obj = { impressionName: require(480) /* isThrottled */.ImpressionNames.MOBILE_GO_LIVE_ACTION_SHEET };
  obj = { location_stack: analyticsLocations };
  obj.impressionProperties = obj;
  obj.openLazy(require(1934) /* maybeLoadBundle */(10719, dependencyMap.paths), "MobileGoLiveActionSheet", obj);
};
