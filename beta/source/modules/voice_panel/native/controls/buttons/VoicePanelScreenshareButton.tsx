// Module ID: 17024
// Function ID: 17025
// Name: VoicePanelScreenshareButton
// Dependencies: [19, 2045, 1074, 21, 1610, 12028, 17025, 4836, 576, 11754, 17008, 504, 38, 9408, 12837, 5205, 12839, 1115, 1241, 17027, 17009, 5901, 2]
// Exports: default

// Module 17024 (VoicePanelScreenshareButton)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import useAlertStore from "useAlertStore" /* 5205 */;
import ScreenArrowIcon from "ScreenArrowIcon" /* 12028 */;
import VoicePanelVideoGuardErrorAlert from "VoicePanelVideoGuardErrorAlert" /* 12839 */;
import MobilePhoneShareIcon2 from "MobilePhoneShareIcon" /* 17025 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import Fragment from "Fragment" /* 21 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1610 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const VoicePanelVideoGuardErrorAlertDefault = VoicePanelVideoGuardErrorAlert;

let metroImportDefault;
let metroRequire;
let size;
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
size = size_mod;
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelScreenshareButton.tsx");

export default function ScreenshareButton(arg0) {
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
  const channelId = onPress.useContext(isActive(isFeatureEnabled[9])).channelId;
  const tmp3 = closure_9();
  let obj = channelId(isFeatureEnabled[10]);
  const voicePanelButtonStyles = obj.useVoicePanelButtonStyles(wrapperSpecs);
  let obj2 = channelId(isFeatureEnabled[11]);
  const items = [closure_4];
  const stateFromStores = obj2.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  isActive(isFeatureEnabled[12])(null != stateFromStores, "null channel in VoicePanelScreenshareButton");
  const tmp8 = isActive(isFeatureEnabled[13])(stateFromStores);
  isActive = tmp8.isActive;
  isFeatureEnabled = tmp8.isFeatureEnabled;
  onPress = tmp8.onPress;
  const VideoGuardExperiment = channelId(isFeatureEnabled[14]).VideoGuardExperiment;
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
    MobilePhoneDenyIcon = tmp4(tmp2[19]).MobilePhoneDenyIcon;
  }
  const tmp12 = closure_7;
  const element = { onPress: callback, disabled: tmp11, props, accessibilityLabel: stringResult, style: iconBgSelected, children: items3 };
  const tmpResult = tmp(tmp2[20]);
  let intl = tmp4(tmp2[17]).intl;
  const string = intl.string;
  const t = tmp4(tmp2[17]).t;
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
  items3 = [closure_6(tmp(tmp2[21]), obj3), ];
  const obj4 = { style: tmp3.iconContainer, children: closure_6(MobilePhoneDenyIcon, { color }) };
  const tmpResult2 = tmp(tmp2[21]);
  items3[1] = closure_6(tmpResult2, obj4);
  return tmp12(tmpResult, element);
};
