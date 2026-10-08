// Module ID: 17652
// Function ID: 17653
// Name: VoicePanelScreenshareButton
// Dependencies: [19, 2063, 1085, 21, 1627, 12283, 17653, 5090, 587, 558, 576, 11988, 17636, 504, 38, 10839, 12834, 5299, 12837, 1126, 1264, 17655, 6166, 17637, 2]

// Module 17652 (VoicePanelScreenshareButton)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import useAlertStore from "useAlertStore" /* 5299 */;
import ScreenArrowIcon from "ScreenArrowIcon" /* 12283 */;
import VoicePanelVideoGuardErrorAlert from "VoicePanelVideoGuardErrorAlert" /* 12837 */;
import MobilePhoneShareIcon2 from "MobilePhoneShareIcon" /* 17653 */;
import react from "react" /* 19 */;
import ChannelStore_mod from "ChannelStore" /* 2063 */;
import Fragment from "Fragment" /* 21 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1627 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const VoicePanelVideoGuardErrorAlertDefault = VoicePanelVideoGuardErrorAlert;

let metroImportDefault;
let metroRequire;
let size;
let ChannelStore = ChannelStore_mod;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
if (MetaQuestUtils.isMetaQuest()) {
  let MobilePhoneShareIcon = ScreenArrowIcon.ScreenArrowIcon;
} else {
  MobilePhoneShareIcon = MobilePhoneShareIcon2.MobilePhoneShareIcon;
}
let obj = { circle: size, iconContainer: { position: "absolute", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" } };
size = { width: "100%", height: "100%", borderRadius: nativeDefault.radii.round };
let closure_9 = createStyles.createStyles(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ScreenshareButton(wrapperSpecs) {
  let channelId;
  let closure_4;
  let first;
  let isActive;
  let isFeatureEnabled;
  let onPress;
  let tmp13;
  let tmp9;
  let tmp = channelId;
  let tmp2 = isFeatureEnabled;
  let obj = channelId(isFeatureEnabled[10]);
  const cResult = obj.c(30);
  wrapperSpecs = wrapperSpecs.wrapperSpecs;
  channelId = onPress.useContext(isActive(isFeatureEnabled[11])).channelId;
  closure_9();
  let obj2 = channelId(isFeatureEnabled[12]);
  const voicePanelButtonStyles = obj2.useVoicePanelButtonStyles(wrapperSpecs);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    class S {
      constructor() {
        return ChannelStore.getChannel(channelId);
      }
    }
    cResult[1] = channelId;
    cResult[2] = S;
    tmp9 = S;
  } else {
    class S {
      constructor() {
        return ChannelStore.getChannel(channelId);
      }
    }
  }
  const tmpResult = tmp(tmp2[13]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp9);
  isActive(tmp2[14])(null != stateFromStores, "null channel in VoicePanelScreenshareButton");
  const tmp12 = tmp4(tmp2[15])(stateFromStores);
  isActive = tmp12.isActive;
  isFeatureEnabled = tmp12.isFeatureEnabled;
  onPress = tmp12.onPress;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return ChannelStore.getChannel(channelId);
      }
    }
    cResult[3] = tmp14;
    tmp13 = tmp14;
  } else {
    class S {
      constructor() {
        return ChannelStore.getChannel(channelId);
      }
    }
  }
  const VideoGuardExperiment = tmp(tmp2[16]).VideoGuardExperiment;
  const tmp15 = !VideoGuardExperiment.useConfig(tmp13).videoEnabled;
  ChannelStore = tmp15;
  if (cResult[4] === isActive) {
    class S {
      constructor() {
        return ChannelStore.getChannel(channelId);
      }
    }
  }
  const fn = function f() {
    let intl;
    const tmp = closure_4;
    if (tmp) {
      const openAlert = useAlertStore.openAlert;
      useAlertStore;
      const VOICE_PANEL_VIDEO_GUARD_ERROR_KEY = VoicePanelVideoGuardErrorAlert.VOICE_PANEL_VIDEO_GUARD_ERROR_KEY;
      const obj2 = { title: intl.string(intl2.t.GFr0GR) };
      const tmp17 = VoicePanelVideoGuardErrorAlertDefault;
      intl = intl2.intl;
      openAlert(VOICE_PANEL_VIDEO_GUARD_ERROR_KEY, metroRequire(tmp17, obj2));
    } else {
      const tmp2 = isFeatureEnabled;
      if (tmp2) {
        const obj3 = { source: "connected button", was_active: isActive };
        const obj = AnalyticsUtilsDefault;
        obj.track(AnalyticEvents.VOICE_PANEL_SCREENSHARE_BUTTON_TAPPED, obj3);
        onPress();
      }
    }
  };
  cResult[4] = isActive;
  cResult[5] = isFeatureEnabled;
  cResult[6] = onPress;
  cResult[7] = tmp15;
  cResult[8] = fn;
}) : (function ScreenshareButton(arg0) {
  let MobilePhoneDenyIcon;
  let backgroundColor;
  let color;
  let iconBgSelected;
  let items2;
  let items3;
  let props;
  let stringResult;
  let wrapperSpecs;
  let isActive;
  let isFeatureEnabled;
  let onPress;
  let closure_4;
  let tmp = isActive;
  let tmp2 = isFeatureEnabled;
  ({ props, wrapperSpecs } = arg0);
  const channelId = onPress.useContext(isActive(isFeatureEnabled[11])).channelId;
  const tmp3 = closure_9();
  let obj = channelId(isFeatureEnabled[12]);
  const voicePanelButtonStyles = obj.useVoicePanelButtonStyles(wrapperSpecs);
  let obj2 = channelId(isFeatureEnabled[13]);
  const items = [closure_4];
  const stateFromStores = obj2.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  isActive(isFeatureEnabled[14])(null != stateFromStores, "null channel in VoicePanelScreenshareButton");
  const tmp8 = isActive(isFeatureEnabled[15])(stateFromStores);
  isActive = tmp8.isActive;
  isFeatureEnabled = tmp8.isFeatureEnabled;
  onPress = tmp8.onPress;
  const VideoGuardExperiment = channelId(isFeatureEnabled[16]).VideoGuardExperiment;
  const videoEnabled = VideoGuardExperiment.useConfig({ location: "VoicePanelScreenshareButton" }).videoEnabled;
  closure_4 = tmp9;
  const items1 = [isActive, isFeatureEnabled, onPress, tmp9];
  let tmp11 = !tmp9;
  const callback = onPress.useCallback(() => {
    let intl;
    const tmp = closure_4;
    if (tmp) {
      const openAlert = useAlertStore.openAlert;
      useAlertStore;
      const VOICE_PANEL_VIDEO_GUARD_ERROR_KEY = VoicePanelVideoGuardErrorAlert.VOICE_PANEL_VIDEO_GUARD_ERROR_KEY;
      const obj2 = { title: intl.string(intl2.t.GFr0GR) };
      const tmp17 = VoicePanelVideoGuardErrorAlertDefault;
      intl = intl2.intl;
      openAlert(VOICE_PANEL_VIDEO_GUARD_ERROR_KEY, metroRequire(tmp17, obj2));
    } else {
      const tmp2 = isFeatureEnabled;
      if (tmp2) {
        const obj3 = { source: "connected button", was_active: isActive };
        const obj = AnalyticsUtilsDefault;
        obj.track(AnalyticEvents.VOICE_PANEL_SCREENSHARE_BUTTON_TAPPED, obj3);
        onPress();
      }
    }
  }, items1);
  if (videoEnabled) {
    tmp11 = !isFeatureEnabled;
  }
  if (tmp11) {
    color = voicePanelButtonStyles.iconFillMuted.color;
  } else {
    color = voicePanelButtonStyles.iconFill.color;
  }
  if (isActive) {
    backgroundColor = voicePanelButtonStyles.iconBgSelected.backgroundColor;
  } else {
    backgroundColor = voicePanelButtonStyles.iconBg.backgroundColor;
  }
  if (isActive) {
    color = voicePanelButtonStyles.iconFillSelected.color;
  }
  if (videoEnabled) {
    MobilePhoneDenyIcon = MobilePhoneShareIcon;
  } else {
    MobilePhoneDenyIcon = tmp4(tmp2[21]).MobilePhoneDenyIcon;
  }
  const tmp12 = closure_7;
  const element = { onPress: callback, disabled: tmp11, props, accessibilityLabel: stringResult, style: iconBgSelected, children: items3 };
  const tmpResult = tmp(tmp2[23]);
  let intl = tmp4(tmp2[19]).intl;
  const string = intl.string;
  const t = tmp4(tmp2[19]).t;
  if (isActive) {
    stringResult = string(t.CpkXwZ);
  } else {
    stringResult = string(t.fjBNo1);
  }
  iconBgSelected = undefined;
  if (isActive) {
    iconBgSelected = voicePanelButtonStyles.iconBgSelected;
  }
  let obj3 = { style: items2 };
  items2 = [tmp3.circle, { backgroundColor }];
  items3 = [closure_6(tmp(tmp2[22]), obj3), ];
  const obj4 = { style: tmp3.iconContainer, children: closure_6(MobilePhoneDenyIcon, { color }) };
  const tmpResult2 = tmp(tmp2[22]);
  items3[1] = closure_6(tmpResult2, obj4);
  return tmp12(tmpResult, element);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelScreenshareButton.tsx");

export default tmp3;
