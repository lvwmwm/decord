// Module ID: 10679
// Function ID: 83231
// Name: ApplicationStreamPresets
// Dependencies: []
// Exports: showMobileGoLiveActionSheet

// Module 10679 (ApplicationStreamPresets)
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
const ApplicationStreamPresets = arg1(dependencyMap[9]).ApplicationStreamPresets;
const ApplicationStreamStates = arg1(dependencyMap[10]).ApplicationStreamStates;
const MediaEngineContextTypes = arg1(dependencyMap[11]).MediaEngineContextTypes;
({ jsx: closure_15, jsxs: closure_16 } = arg1(dependencyMap[12]));
let obj1 = arg1(dependencyMap[13]);
let obj = {};
obj = { gap: importDefault(dependencyMap[14]).space.PX_24 };
obj.wrapper = obj;
obj.header = { textAlign: "center" };
obj1 = { marginHorizontal: importDefault(dependencyMap[14]).space.PX_16 };
obj.section = obj1;
const tmp2 = arg1(dependencyMap[12]);
obj.highQualityLabel = { gap: importDefault(dependencyMap[14]).space.PX_4 };
obj.nitroWheelIcon = { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null };
let closure_17 = obj1.createStyles(obj);
const items = [{ preset: ApplicationStreamPresets.PRESET_MOBILE_DEFAULT, enabled: true }, , ];
const obj4 = { preset: ApplicationStreamPresets.PRESET_MOBILE_PERFORMANCE };
const obj2 = { gap: importDefault(dependencyMap[14]).space.PX_4 };
const obj3 = { preset: ApplicationStreamPresets.PRESET_MOBILE_DEFAULT, enabled: true };
obj4.enabled = !arg1(dependencyMap[15]).isIOS();
items[1] = obj4;
items[2] = { preset: ApplicationStreamPresets.PRESET_MOBILE_HIGH_QUALITY, enabled: true };
const found = items.filter((enabled) => enabled.enabled);
let closure_18 = found.map((preset) => preset.preset);
const obj9 = arg1(dependencyMap[15]);
const memoResult = importAllResult.memo(function MobileGoLiveActionSheet() {
  let preset;
  let soundshareEnabled;
  function getTableRadioRowConfig(value) {
    let obj = user(callback[21]);
    const maxSettingsForPreset = obj.getMaxSettingsForPreset(getTableRadioRowConfig.PRESET_MOBILE_DEFAULT);
    let obj1 = user(callback[21]);
    const maxSettingsForPreset1 = obj1.getMaxSettingsForPreset(getTableRadioRowConfig.PRESET_MOBILE_PERFORMANCE);
    let obj2 = user(callback[21]);
    const maxSettingsForPreset2 = obj2.getMaxSettingsForPreset(getTableRadioRowConfig.PRESET_MOBILE_HIGH_QUALITY);
    obj = { value };
    obj = {};
    obj1 = { icon: callback(user(callback[28]).MobilePhoneIcon, {}) };
    const intl = user(callback[29]).intl;
    obj1.label = intl.string(guildPremiumTier(callback[30]).2qmQ8N);
    let str = "";
    let str2 = "";
    if (null != maxSettingsForPreset) {
      const intl2 = user(callback[29]).intl;
      str2 = intl2.formatToPlainString(guildPremiumTier(callback[30]).ibH7vy, maxSettingsForPreset);
    }
    obj1.subLabel = str2;
    obj[getTableRadioRowConfig.PRESET_MOBILE_DEFAULT] = obj1;
    obj2 = { icon: callback(user(callback[31]).SpeedometerIcon, {}) };
    const intl3 = user(callback[29]).intl;
    obj2.label = intl3.string(guildPremiumTier(callback[30]).5eO4/m);
    let formatToPlainStringResult = str;
    if (null != maxSettingsForPreset1) {
      const intl4 = user(callback[29]).intl;
      formatToPlainStringResult = intl4.formatToPlainString(guildPremiumTier(callback[30]).fN0UQY, maxSettingsForPreset1);
      const tmp8 = user;
    }
    obj2.subLabel = formatToPlainStringResult;
    obj[getTableRadioRowConfig.PRESET_MOBILE_PERFORMANCE] = obj2;
    const obj3 = { icon: callback(user(callback[32]).ImageSparkleIcon, {}) };
    const obj4 = { style: tmp8.highQualityLabel };
    const obj5 = {};
    const intl5 = user(callback[29]).intl;
    obj5.children = intl5.string(guildPremiumTier(callback[30]).nMcXo1);
    const items = [callback(user(callback[34]).Text, obj5), ];
    const obj6 = { source: guildPremiumTier(callback[36]), size: "xs" };
    items[1] = callback(user(callback[35]).BaseIconImage, obj6);
    obj4.children = items;
    obj3.label = callback2(guildPremiumTier(callback[33]), obj4);
    if (null != maxSettingsForPreset2) {
      const intl6 = user(callback[29]).intl;
      str = intl6.formatToPlainString(guildPremiumTier(callback[30]).q4gYBi, maxSettingsForPreset2);
    }
    obj3.subLabel = str;
    obj[getTableRadioRowConfig.PRESET_MOBILE_HIGH_QUALITY] = obj3;
    const merged = Object.assign(obj[value]);
    return obj;
  }
  let obj = arg1(dependencyMap[20]);
  const items = [closure_6];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => tmp8.getState());
  ({ preset, soundshareEnabled } = stateFromStoresObject);
  let obj1 = arg1(dependencyMap[20]);
  const items1 = [closure_11, closure_10, closure_8, closure_9];
  const stateFromStoresObject1 = obj1.useStateFromStoresObject(items1, () => {
    const currentUser = currentUser.getCurrentUser();
    const channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
    const obj = { user: currentUser };
    let guildId;
    if (null != channel) {
      guildId = channel.getGuildId();
    }
    const guild = first1.getGuild(guildId);
    let premiumTier;
    if (null != guild) {
      premiumTier = guild.premiumTier;
    }
    obj.guildPremiumTier = premiumTier;
    return obj;
  });
  const user = stateFromStoresObject1.user;
  const arg1 = user;
  const guildPremiumTier = stateFromStoresObject1.guildPremiumTier;
  const importDefault = guildPremiumTier;
  const items2 = [user, guildPremiumTier];
  let callback = importAllResult.useCallback((arg0) => user(callback[21]).canStreamWithPreset(arg0, user, guildPremiumTier), items2);
  const dependencyMap = callback;
  let obj2 = arg1(dependencyMap[20]);
  const items3 = [closure_7];
  const stateFromStoresObject2 = obj2.useStateFromStoresObject(items3, () => {
    const currentUserActiveStream = first.getCurrentUserActiveStream();
    const obj = {};
    let tmp2 = null != currentUserActiveStream;
    if (tmp2) {
      tmp2 = currentUserActiveStream.state === constants.ACTIVE;
    }
    obj.isStreaming = tmp2;
    const streamerActiveStreamMetadata = first.getStreamerActiveStreamMetadata();
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
  callback = isStreaming;
  const activeSourceId = stateFromStoresObject2.activeSourceId;
  let obj3 = arg1(dependencyMap[20]);
  const items4 = [closure_5];
  const stateFromStores = obj3.useStateFromStores(items4, () => analyticsLocations.useReducedMotion);
  let obj4 = importDefault(dependencyMap[22]);
  const goLiveUpsellVariant = obj4.useConfig({ location: "MobileGoLiveActionSheet" }).goLiveUpsellVariant;
  const analyticsLocations = importDefault(dependencyMap[23])(importDefault(dependencyMap[24]).MOBILE_GO_LIVE_ACTION_SHEET).analyticsLocations;
  closure_5 = analyticsLocations;
  const tmp8 = callback3();
  closure_6 = tmp8;
  let tmp9 = preset === getTableRadioRowConfig.PRESET_MOBILE_DEFAULT;
  if (!tmp9) {
    tmp9 = preset === getTableRadioRowConfig.PRESET_MOBILE_PERFORMANCE;
  }
  if (!tmp9) {
    tmp9 = preset === getTableRadioRowConfig.PRESET_MOBILE_HIGH_QUALITY;
  }
  if (tmp9) {
    const tmp14 = callback(importAllResult.useState(preset), 2);
    const first = tmp14[0];
    closure_7 = first;
    closure_8 = tmp14[1];
    const tmp17 = callback(importAllResult.useState(soundshareEnabled), 2);
    const first1 = tmp17[0];
    closure_9 = first1;
    closure_10 = tmp17[1];
    let obj5 = arg1(dependencyMap[25]);
    const sharedValue = obj5.useSharedValue(!callback(getTableRadioRowConfig.PRESET_MOBILE_HIGH_QUALITY));
    const items5 = [user, guildPremiumTier, activeSourceId, isStreaming];
    closure_11 = importAllResult.useCallback((preset, soundshareEnabled) => {
      let items = guildPremiumTier(callback[21])(preset, user, guildPremiumTier);
      if (null == items) {
        items = [];
      }
      const tmp = isStreaming(items, 2);
      const first = tmp[0];
      if (null != first) {
        if (null != tmp3) {
          let obj = { preset, resolution: first, frameRate: tmp3, soundshareEnabled };
          user(callback[26]).updateStreamSettings(obj);
          if (isStreaming) {
            obj = {};
            obj = { preset, resolution: first, frameRate: tmp3 };
            obj.qualityOptions = obj;
            obj.context = constants2.STREAM;
            if (null != activeSourceId) {
              const obj1 = { sourceId: activeSourceId, sound: soundshareEnabled };
              obj.desktopSettings = obj1;
            }
            guildPremiumTier(callback[27]).setGoLiveSource(obj);
            const obj4 = guildPremiumTier(callback[27]);
          }
          const obj5 = user(callback[26]);
        }
      }
    }, items5);
    obj = { value: analyticsLocations };
    obj = { startExpanded: true };
    obj1 = {};
    obj2 = { bottom: true, style: tmp8.wrapper };
    obj3 = { style: tmp8.header };
    const intl = arg1(dependencyMap[29]).intl;
    obj3.children = intl.string(importDefault(dependencyMap[30]).CrNjqp);
    const items6 = [callback2(arg1(dependencyMap[34]).Text, obj3), , , , , ];
    obj4 = { style: tmp8.section };
    obj5 = {};
    const intl2 = arg1(dependencyMap[29]).intl;
    obj5.title = intl2.string(importDefault(dependencyMap[30])./XSr8v);
    obj5.hasIcons = false;
    const obj6 = {
      value: first,
      onChange(arg0) {
          if (callback(arg0)) {
            channel(arg0);
            currentUser(arg0, first1);
            if (isStreaming) {
              guildPremiumTier(callback[16]).hideActionSheet("MobileGoLiveActionSheet");
              const obj3 = guildPremiumTier(callback[16]);
            }
          } else {
            let obj = guildPremiumTier(callback[42]);
            obj = { initialUpsellKey: user(callback[43]).UpsellTypes.STREAM_HIGH_QUALITY, analyticsLocations };
            const result = obj.handleShowUpsellAlert(obj);
          }
        },
      hasIcons: true,
      children: closure_18.map((value) => {
          const merged = Object.assign(getTableRadioRowConfig(value));
          return callback(user(callback[44]).TableRadioRow, {}, value);
        })
    };
    obj5.children = callback2(arg1(dependencyMap[41]).TableRadioGroup, obj6);
    obj4.children = callback2(arg1(dependencyMap[40]).TableRowGroup, obj5);
    items6[1] = callback2(importDefault(dependencyMap[33]), obj4);
    let tmp27 = "one-step" === goLiveUpsellVariant && sharedValue.get();
    if (tmp27) {
      const obj7 = { style: tmp8.section };
      const obj8 = {};
      const tmp31 = importDefault(dependencyMap[33]);
      obj8.featureName = arg1(dependencyMap[46]).EntitlementFeatureNames.STREAM_HIGH_QUALITY;
      obj8.shouldShow = sharedValue;
      obj7.children = callback2(importDefault(dependencyMap[45]), obj8);
      tmp27 = callback2(tmp31, obj7);
      const tmp32 = importDefault(dependencyMap[45]);
    }
    items6[2] = tmp27;
    let tmp34 = "two-step" === goLiveUpsellVariant && sharedValue.get();
    if (tmp34) {
      const obj9 = { style: tmp8.section };
      const obj10 = { "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000232656173919898, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002540898980601415, "Null": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012741663005024175, "Null": -68.05714548874676, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000014992948780250344, "Null": 0.000000000000000000000000000000000000005881211672176443 };
      const intl3 = arg1(dependencyMap[29]).intl;
      obj10.text = intl3.string(importDefault(dependencyMap[30]).u72Prd);
      obj10.onPress = function onPress() {
        let obj = guildPremiumTier(callback[42]);
        obj = { initialUpsellKey: user(callback[43]).UpsellTypes.STREAM_HIGH_QUALITY, analyticsLocations };
        const result = obj.handleShowUpsellAlert(obj);
      };
      const obj11 = { style: tmp8.nitroWheelIcon, color: importDefault(dependencyMap[14]).colors.WHITE, size: "custom" };
      obj10.icon = callback2(arg1(dependencyMap[48]).NitroWheelIcon, obj11);
      obj10.shiny = !stateFromStores;
      obj9.children = callback2(arg1(dependencyMap[47]).Button, obj10);
      tmp34 = callback2(importDefault(dependencyMap[33]), obj9);
      const tmp38 = importDefault(dependencyMap[33]);
    }
    items6[3] = tmp34;
    const obj12 = { style: tmp8.section };
    const tmp23 = closure_16;
    const tmp25 = importDefault(dependencyMap[33]);
    const obj13 = {};
    const intl4 = arg1(dependencyMap[29]).intl;
    obj13.title = intl4.string(importDefault(dependencyMap[30]).j+eAMQ);
    obj13.hasIcons = false;
    const obj14 = {};
    const intl5 = arg1(dependencyMap[29]).intl;
    obj14.label = intl5.string(importDefault(dependencyMap[30]).uwMBDo);
    obj14.value = first1;
    obj14.onValueChange = function onValueChange(arg0) {
      voiceChannelId(arg0);
      currentUser(first, arg0);
    };
    obj13.children = callback2(arg1(dependencyMap[49]).TableSwitchRow, obj14);
    obj12.children = callback2(arg1(dependencyMap[40]).TableRowGroup, obj13);
    items6[4] = callback2(importDefault(dependencyMap[33]), obj12);
    const obj15 = { style: tmp8.section };
    const tmp43 = importDefault(dependencyMap[33]);
    if (isStreaming) {
      const obj16 = {};
      const intl7 = arg1(dependencyMap[29]).intl;
      obj16.text = intl7.string(importDefault(dependencyMap[30]).OsS9Ll);
      obj16.onPress = function onPress() {
        user(callback[50]).stopScreenshare();
        const obj = user(callback[50]);
        guildPremiumTier(callback[16]).hideActionSheet("MobileGoLiveActionSheet");
      };
      let obj17 = obj16;
    } else {
      obj17 = {};
      const intl6 = arg1(dependencyMap[29]).intl;
      obj17.text = intl6.string(importDefault(dependencyMap[30]).3wwZ/Q);
      obj17.onPress = function onPress() {
        guildPremiumTier(callback[16]).hideActionSheet("MobileGoLiveActionSheet");
        const obj = guildPremiumTier(callback[16]);
        user(callback[50]).startStream();
      };
    }
    obj15.children = callback2(arg1(dependencyMap[47]).Button, obj17);
    items6[5] = callback2(importDefault(dependencyMap[33]), obj15);
    obj2.children = items6;
    obj1.children = tmp23(arg1(dependencyMap[39]).SafeAreaPaddingView, obj2);
    obj.children = callback2(arg1(dependencyMap[38]).BottomSheetScrollView, obj1);
    obj.children = callback2(arg1(dependencyMap[37]).BottomSheet, obj);
    return callback2(arg1(dependencyMap[23]).AnalyticsLocationProvider, obj);
  }
  preset = getTableRadioRowConfig.PRESET_MOBILE_DEFAULT;
});
const result = arg1(dependencyMap[51]).fileFinishedImporting("modules/go_live/native/MobileGoLiveActionSheet.tsx");

export default memoResult;
export const showMobileGoLiveActionSheet = function showMobileGoLiveActionSheet(analyticsLocations) {
  let obj = importDefault(dependencyMap[16]);
  obj = { impressionName: arg1(dependencyMap[19]).ImpressionNames.MOBILE_GO_LIVE_ACTION_SHEET };
  obj = { location_stack: analyticsLocations };
  obj.impressionProperties = obj;
  obj.openLazy(arg1(dependencyMap[18])(dependencyMap[17], dependencyMap.paths), "MobileGoLiveActionSheet", obj);
};
