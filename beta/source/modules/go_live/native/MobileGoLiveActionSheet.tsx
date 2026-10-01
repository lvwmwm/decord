// Module ID: 9409
// Function ID: 9410
// Name: MobileGoLiveActionSheet
// Dependencies: [32, 19, 4882, 4858, 2045, 2067, 2099, 1372, 4883, 1074, 4861, 21, 4836, 576, 1365, 4800, 9409, 1981, 1249, 504, 9410, 9414, 6583, 6603, 4566, 4978, 9104, 6379, 1115, 2323, 9415, 9417, 5901, 4832, 4530, 9419, 6571, 6045, 6544, 5999, 5997, 8614, 1094, 6000, 9420, 7273, 9425, 6621, 5281, 9408, 2]
// Exports: showMobileGoLiveActionSheet

// Module 9409 (MobileGoLiveActionSheet)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import ConstantsIOS from "ConstantsIOS" /* 1094 */;
import intl8 from "intl" /* 1115 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1249 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import _modDef2323 from "module_2323" /* 2323 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Constants2 from "Constants" /* 4861 */;
import StreamSettingsConstants from "StreamSettingsConstants" /* 4883 */;
import StreamActionCreators from "StreamActionCreators" /* 4978 */;
import NativeViewDefault from "NativeView" /* 5901 */;
import TableRadioRow2 from "TableRadioRow" /* 6000 */;
import MobilePhoneIcon from "MobilePhoneIcon" /* 6379 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 8614 */;
import getStreamSettingsForPreset from "getStreamSettingsForPreset" /* 9410 */;
import SpeedometerIcon from "SpeedometerIcon" /* 9415 */;
import ImageSparkleIcon from "ImageSparkleIcon" /* 9417 */;
import AssetRegistryDefault from "AssetRegistry" /* 9419 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ApplicationStreamingSettingsStore from "ApplicationStreamingSettingsStore" /* 4882 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4858 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import PlatformUtils_mod from "utils/PlatformUtils" /* 1365 */;
import size from "module_2" /* 2 */;

const getStreamSettingsForPresetDefault = getStreamSettingsForPreset;
let BottomSheet, closure_8;

let PlatformUtils;
let closure_14;
let closure_15;
let obj2;
let obj3;
let obj4;
let tmp;
const AudioActionCreatorsDefault = tmp(9104);
let ApplicationStreamPresets = StreamSettingsConstants.ApplicationStreamPresets;
const ApplicationStreamStates = Constants.ApplicationStreamStates;
const MediaEngineContextTypes = Constants2.MediaEngineContextTypes;
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrapper: obj2, header: { textAlign: "center" }, section: obj3, highQualityLabel: obj4 };
obj2 = { gap: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { marginHorizontal: nativeDefault.space.PX_16 };
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_16 = createStyles(obj);
const MobileGoLiveActionSheet_str = "MobileGoLiveActionSheet";
let obj5 = { preset: ApplicationStreamPresets.PRESET_MOBILE_DEFAULT, enabled: true };
let items = [obj5, , ];
let obj6 = { preset: ApplicationStreamPresets.PRESET_MOBILE_PERFORMANCE, enabled: !PlatformUtils.isIOS() };
PlatformUtils = PlatformUtils_mod;
items[1] = obj6;
items[2] = { preset: ApplicationStreamPresets.PRESET_MOBILE_HIGH_QUALITY, enabled: true };
const found = items.filter((enabled) => enabled.enabled);
let closure_18 = found.map((preset) => preset.preset);
const memoResult = react.memo(function MobileGoLiveActionSheet() {
  let Button;
  let TableRadioGroup;
  let TableRowGroup;
  let TableRowGroup2;
  let TableSwitchRow;
  let activeSourceId;
  let analyticsLocations;
  let callback;
  let closure_11;
  let currentUser;
  let currentUserActiveStream;
  let first1;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let items5;
  let obj10;
  let obj11;
  let obj13;
  let obj15;
  let obj17;
  let obj18;
  let obj21;
  let obj22;
  let obj23;
  let preset;
  let soundshareEnabled;
  let tmp7Result10;
  let tmp7Result8;
  let user;
  let value;
  let tmp = user;
  const tmp2 = callback;
  let obj = user(callback[19]);
  let items = [analyticsLocations];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => analyticsLocations.getState());
  ({ preset, soundshareEnabled } = stateFromStoresObject);
  let obj2 = user(callback[19]);
  const items1 = [currentUser, first1, value, closure_8];
  const stateFromStoresObject1 = obj2.useStateFromStoresObject(items1, () => {
    user = currentUser.getCurrentUser();
    const channel = first.getChannel(first1.getVoiceChannelId());
    let guildId;
    const getGuild = closure_8.getGuild;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    const guild = getGuild(guildId);
    guildPremiumTier = undefined;
    if (guild != null) {
      guildPremiumTier = guild.premiumTier;
    }
    return { user, guildPremiumTier };
  });
  user = stateFromStoresObject1.user;
  let guildPremiumTier = stateFromStoresObject1.guildPremiumTier;
  let obj3 = activeSourceId;
  const items2 = [user, guildPremiumTier];
  callback = activeSourceId.useCallback((arg0) => {
    const obj = getStreamSettingsForPreset;
    return obj.canStreamWithPreset(arg0, user, guildPremiumTier);
  }, items2);
  let obj4 = user(callback[19]);
  const items3 = [currentUserActiveStream];
  const stateFromStoresObject2 = obj4.useStateFromStoresObject(items3, () => {
    let sourceId;
    const obj = currentUserActiveStream;
    currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
    const obj2 = { isStreaming: null != currentUserActiveStream && currentUserActiveStream.state === constants.ACTIVE, activeSourceId: sourceId };
    const streamerActiveStreamMetadata = obj.getStreamerActiveStreamMetadata();
    sourceId = undefined;
    if (streamerActiveStreamMetadata != null) {
      sourceId = streamerActiveStreamMetadata.sourceId;
    }
    if (sourceId == null) {
      sourceId = null;
    }
    return obj2;
  });
  const isStreaming = stateFromStoresObject2.isStreaming;
  activeSourceId = stateFromStoresObject2.activeSourceId;
  const tmp7 = guildPremiumTier;
  let obj5 = guildPremiumTier(callback[21]);
  const goLiveUpsellVariant = obj5.useConfig({ location: "MobileGoLiveActionSheet" }).goLiveUpsellVariant;
  const tmp8 = guildPremiumTier(callback[22]);
  analyticsLocations = tmp8(guildPremiumTier(callback[23]).MOBILE_GO_LIVE_ACTION_SHEET).analyticsLocations;
  const tmp9 = closure_16();
  currentUserActiveStream = tmp9;
  let tmp11 = preset === ApplicationStreamPresets.PRESET_MOBILE_DEFAULT;
  const useState = activeSourceId.useState;
  if (!tmp11) {
    tmp11 = preset === tmp10.PRESET_MOBILE_PERFORMANCE;
  }
  if (!tmp11) {
    tmp11 = preset === tmp10.PRESET_MOBILE_HIGH_QUALITY;
  }
  if (tmp11) {
    let tmp12 = closure_18;
    let tmp13 = isStreaming;
    const tmp14 = isStreaming(useState(preset), 2);
    value = tmp14[0];
    closure_8 = tmp14[1];
    const tmp16 = isStreaming(obj3.useState(soundshareEnabled), 2);
    first1 = tmp16[0];
    currentUser = tmp16[1];
    let tmpResult = tmp(tmp2[24]);
    const sharedValue = tmpResult.useSharedValue(!callback(tmp10.PRESET_MOBILE_HIGH_QUALITY));
    const items4 = [user, guildPremiumTier, activeSourceId, isStreaming];
    ApplicationStreamPresets = obj3.useCallback((preset, soundshareEnabled) => {
      let obj3;
      let tmp4;
      let tmp5;
      let items = getStreamSettingsForPresetDefault(preset, user, guildPremiumTier);
      if (items == null) {
        items = [];
      }
      [tmp4, tmp5] = items;
      _slicedToArray(items, 2);
      if (null != tmp4) {
        if (null != tmp5) {
          const obj2 = { preset, resolution: tmp4, frameRate: tmp5, soundshareEnabled };
          const obj5 = StreamActionCreators;
          obj5.updateStreamSettings(obj2);
          const tmp12 = isStreaming;
          if (tmp12) {
            const obj = { qualityOptions: obj3, context: MediaEngineContextTypes.STREAM };
            obj3 = { preset, resolution: tmp4, frameRate: tmp5 };
            if (null != activeSourceId) {
              const obj4 = { sourceId: tmp7, sound: soundshareEnabled };
              obj.desktopSettings = obj4;
            }
            const tmpResult = AudioActionCreatorsDefault;
            tmpResult.setGoLiveSource(obj);
          }
        }
      }
    }, items4);
    let obj6 = { value: analyticsLocations, children: closure_14(BottomSheet, obj22) };
    const AnalyticsLocationProvider = tmp(tmp2[22]).AnalyticsLocationProvider;
    BottomSheet = tmp(tmp2[36]).BottomSheet;
    const BottomSheetScrollView = tmp(tmp2[37]).BottomSheetScrollView;
    let obj7 = { bottom: true, style: tmp9.wrapper, children: items5 };
    const SafeAreaPaddingView = tmp(tmp2[38]).SafeAreaPaddingView;
    let obj8 = { style: tmp9.header, variant: "redesign/heading-18/bold", color: "text-strong", accessibilityRole: "header", children: intl.string(tmp7(tmp2[29]).CrNjqp) };
    let Text = tmp(tmp2[33]).Text;
    intl = tmp(tmp2[28]).intl;
    items5 = [closure_14(Text, obj8), , , , , ];
    let obj9 = { style: tmp9.section, children: closure_14(TableRowGroup, obj10) };
    obj10 = { title: intl2.string(tmp7(tmp2[29])["/XSr8v"]), hasIcons: false, children: closure_14(TableRadioGroup, obj11) };
    const tmp7Result = tmp7(tmp2[32]);
    TableRowGroup = tmp(tmp2[39]).TableRowGroup;
    intl2 = tmp(tmp2[28]).intl;
    obj11 = {
      value,
      onChange(arg0) {
          if (callback(arg0)) {
            closure_8(arg0);
            closure_11(arg0, first1);
            const tmp13 = isStreaming;
            if (tmp13) {
              const obj2 = ActionSheetActionCreatorsDefault;
              obj2.hideActionSheet(MobileGoLiveActionSheet_str);
            }
          } else {
            const obj = { initialUpsellKey: ConstantsIOS.UpsellTypes.STREAM_HIGH_QUALITY, analyticsLocations };
            const handleShowUpsellAlert = PremiumUpsellUtilsDefault.handleShowUpsellAlert;
            PremiumUpsellUtilsDefault;
            const result = handleShowUpsellAlert(obj);
          }
        },
      hasIcons: true,
      children: closure_18.map((value) => {
          let formatToPlainStringResult;
          let intl;
          let intl3;
          let intl5;
          let items;
          let obj9;
          let str2;
          let tmp8Result;
          const TableRadioRow = TableRadioRow2.TableRadioRow;
          const obj = getStreamSettingsForPreset;
          const maxSettingsForPreset = obj.getMaxSettingsForPreset(ApplicationStreamPresets.PRESET_MOBILE_DEFAULT);
          const obj2 = getStreamSettingsForPreset;
          const maxSettingsForPreset1 = obj2.getMaxSettingsForPreset(ApplicationStreamPresets.PRESET_MOBILE_PERFORMANCE);
          const obj3 = getStreamSettingsForPreset;
          const maxSettingsForPreset2 = obj3.getMaxSettingsForPreset(ApplicationStreamPresets.PRESET_MOBILE_HIGH_QUALITY);
          const obj4 = { value };
          const PRESET_MOBILE_DEFAULT = ApplicationStreamPresets.PRESET_MOBILE_DEFAULT;
          const obj5 = { icon: authStore2(MobilePhoneIcon.MobilePhoneIcon, {}), label: intl.string(_modDef2323["2qmQ8N"]), subLabel: str2 };
          intl = intl8.intl;
          let str = "";
          str2 = "";
          if (null != maxSettingsForPreset) {
            const intl2 = tmp2(1115).intl;
            str2 = intl2.formatToPlainString(tmp8(2323).ibH7vy, maxSettingsForPreset);
          }
          const obj6 = { [PRESET_MOBILE_DEFAULT]: obj5 };
          const PRESET_MOBILE_PERFORMANCE = tmp4.PRESET_MOBILE_PERFORMANCE;
          const obj7 = { icon: authStore2(SpeedometerIcon.SpeedometerIcon, {}), label: intl3.string(_modDef2323["5eO4/m"]), subLabel: formatToPlainStringResult };
          intl3 = tmp2(1115).intl;
          formatToPlainStringResult = str;
          if (null != maxSettingsForPreset1) {
            const intl4 = tmp2(1115).intl;
            formatToPlainStringResult = intl4.formatToPlainString(tmp8(2323).fN0UQY, maxSettingsForPreset1);
          }
          obj6[PRESET_MOBILE_PERFORMANCE] = obj7;
          const PRESET_MOBILE_HIGH_QUALITY = tmp4.PRESET_MOBILE_HIGH_QUALITY;
          const obj8 = { icon: authStore2(ImageSparkleIcon.ImageSparkleIcon, {}), label: closure_15(tmp8Result, obj9), subLabel: str };
          obj9 = { style: currentUserActiveStream.highQualityLabel, children: items };
          const obj10 = { variant: "text-md/semibold", color: "text-strong", children: intl5.string(_modDef2323.nMcXo1) };
          tmp8Result = NativeViewDefault;
          const Text = tmp2(4832).Text;
          intl5 = tmp2(1115).intl;
          items = [authStore2(Text, obj10), ];
          const obj11 = { source: AssetRegistryDefault, size: "xs" };
          const BaseIconImage = tmp2(4530).BaseIconImage;
          items[1] = authStore2(BaseIconImage, obj11);
          if (null != maxSettingsForPreset2) {
            const intl6 = tmp2(1115).intl;
            str = intl6.formatToPlainString(tmp8(2323).q4gYBi, maxSettingsForPreset2);
          }
          const obj12 = {};
          obj6[PRESET_MOBILE_HIGH_QUALITY] = obj8;
          const merged = Object.assign(obj6[value]);
          const merged1 = Object.assign(obj4);
          return authStore2(TableRadioRow, obj12, value);
        })
    };
    TableRadioGroup = tmp(tmp2[40]).TableRadioGroup;
    items5[1] = closure_14(tmp7Result, obj9);
    let str = "one-step";
    let tmp18Result = "one-step" === goLiveUpsellVariant && sharedValue.get();
    const tmp19 = closure_15;
    if (tmp18Result) {
      let obj12 = { style: tmp9.section, children: closure_14(tmp7Result8, obj13) };
      obj13 = { featureName: tmp(tmp2[45]).EntitlementFeatureNames.STREAM_HIGH_QUALITY, shouldShow: sharedValue };
      const tmp7Result7 = tmp7(tmp2[32]);
      tmp7Result8 = tmp7(tmp2[44]);
      tmp18Result = tmp18(tmp7Result7, obj12);
    }
    items5[2] = tmp18Result;
    let str2 = "two-step";
    let tmp18Result2 = "two-step" === goLiveUpsellVariant && sharedValue.get();
    if (tmp18Result2) {
      const obj14 = { style: tmp9.section, children: closure_14(tmp7Result10, obj15) };
      obj15 = {
        text: intl3.string(tmp7(tmp2[29]).u72Prd),
        onPress() {
              const obj = PremiumUpsellUtilsDefault;
              const obj2 = { initialUpsellKey: ConstantsIOS.UpsellTypes.STREAM_HIGH_QUALITY, analyticsLocations };
              const result = obj.handleShowUpsellAlert(obj2);
            }
      };
      const tmp7Result9 = tmp7(tmp2[32]);
      tmp7Result10 = tmp7(tmp2[46]);
      intl3 = tmp(tmp2[28]).intl;
      tmp18Result2 = tmp18(tmp7Result9, obj14);
    }
    items5[3] = tmp18Result2;
    const obj16 = { style: tmp9.section, children: closure_14(TableRowGroup2, obj17) };
    obj17 = { title: intl4.string(tmp7(tmp2[29])["j+eAMQ"]), hasIcons: false, children: closure_14(TableSwitchRow, obj18) };
    const tmp7Result11 = tmp7(tmp2[32]);
    TableRowGroup2 = tmp(tmp2[39]).TableRowGroup;
    intl4 = tmp(tmp2[28]).intl;
    obj18 = {
      label: intl5.string(tmp7(tmp2[29]).uwMBDo),
      value: first1,
      onValueChange(arg0) {
          currentUser(arg0);
          closure_11(first, arg0);
        }
    };
    TableSwitchRow = tmp(tmp2[47]).TableSwitchRow;
    intl5 = tmp(tmp2[28]).intl;
    items5[4] = closure_14(tmp7Result11, obj16);
    const obj19 = { style: tmp9.section, children: closure_14(Button, obj21) };
    const tmp7Result12 = tmp7(tmp2[32]);
    Button = tmp(tmp2[48]).Button;
    if (isStreaming) {
      const obj20 = {
        size: "lg",
        variant: "destructive",
        text: intl7.string(tmp7(tmp2[29]).OsS9Ll),
        onPress() {
              const obj = user(callback[49]);
              obj.stopScreenshare();
              const obj2 = guildPremiumTier(callback[15]);
              obj2.hideActionSheet(MobileGoLiveActionSheet_str);
            }
      };
      intl7 = tmp(tmp2[28]).intl;
      obj21 = obj20;
    } else {
      obj21 = {
        size: "lg",
        variant: "primary",
        text: intl6.string(tmp7(tmp2[29])["3wwZ/Q"]),
        onPress() {
              const obj = guildPremiumTier(callback[15]);
              obj.hideActionSheet(MobileGoLiveActionSheet_str);
              const obj2 = user(callback[49]);
              obj2.startStream();
            }
      };
      intl6 = tmp(tmp2[28]).intl;
    }
    obj22 = { startExpanded: true, children: closure_14(BottomSheetScrollView, obj23) };
    obj23 = { children: tmp19(SafeAreaPaddingView, obj7) };
    items5[5] = closure_14(tmp7Result12, obj19);
    return closure_14(AnalyticsLocationProvider, obj6);
  }
  preset = tmp10.PRESET_MOBILE_DEFAULT;
});
let result = size.fileFinishedImporting("modules/go_live/native/MobileGoLiveActionSheet.tsx");

export default memoResult;
export const showMobileGoLiveActionSheet = function showMobileGoLiveActionSheet(location_stack) {
  let obj2;
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  const obj = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.MOBILE_GO_LIVE_ACTION_SHEET, impressionProperties: obj2 };
  ActionSheetActionCreatorsDefault;
  obj2 = { location_stack };
  const tmp2 = asyncRequire(9409, dependencyMap.paths);
  openLazy(tmp2, MobileGoLiveActionSheet_str, obj);
};
