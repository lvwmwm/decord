// Module ID: 19263
// Function ID: 19264
// Name: VoicePanelScreenshareButton
// Dependencies: [19, 4858, 1072, 21, 1623, 14056, 19264, 5009, 11203, 19247, 504, 38, 11881, 14516, 5955, 14519, 1114, 1253, 19266, 19248, 6954, 2]
// Exports: default

// Module 19263 (VoicePanelScreenshareButton)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import useAlertStore from "useAlertStore" /* 5955 */;
import ScreenArrowIcon from "ScreenArrowIcon" /* 14056 */;
import VoicePanelVideoGuardErrorAlert from "VoicePanelVideoGuardErrorAlert" /* 14519 */;
import MobilePhoneShareIcon2 from "MobilePhoneShareIcon" /* 19264 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1623 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const VoicePanelVideoGuardErrorAlertDefault = VoicePanelVideoGuardErrorAlert;

const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
if (MetaQuestUtils.isMetaQuest()) {
  let MobilePhoneShareIcon = ScreenArrowIcon.ScreenArrowIcon;
} else {
  MobilePhoneShareIcon = MobilePhoneShareIcon2.MobilePhoneShareIcon;
}
let closure_8 = createStyles.createStyles({ iconContainer: { position: "absolute", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" } });
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelScreenshareButton.tsx");

export default function ScreenshareButton(arg0) {
  let MobilePhoneDenyIcon;
  let color;
  let iconBgSelected;
  let obj3;
  let props;
  let stringResult;
  let tmpResult2;
  let wrapperSpecs;
  let isActive;
  let isFeatureEnabled;
  let onPress;
  let closure_4;
  let tmp = isActive;
  let tmp2 = isFeatureEnabled;
  ({ props, wrapperSpecs } = arg0);
  const channelId = onPress.useContext(isActive(isFeatureEnabled[8])).channelId;
  const tmp3 = closure_8();
  let obj = channelId(isFeatureEnabled[9]);
  const voicePanelButtonStyles = obj.useVoicePanelButtonStyles(wrapperSpecs);
  const items = [closure_4];
  const obj2 = channelId(isFeatureEnabled[10]);
  const stateFromStores = obj2.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  isActive(isFeatureEnabled[11])(null != stateFromStores, "null channel in VoicePanelScreenshareButton");
  const tmp8 = isActive(isFeatureEnabled[12])(stateFromStores);
  isActive = tmp8.isActive;
  isFeatureEnabled = tmp8.isFeatureEnabled;
  onPress = tmp8.onPress;
  const VideoGuardExperiment = channelId(isFeatureEnabled[13]).VideoGuardExperiment;
  const videoEnabled = VideoGuardExperiment.useConfig({ location: "VoicePanelScreenshareButton" }).videoEnabled;
  closure_4 = tmp9;
  const items1 = [isActive, isFeatureEnabled, onPress, tmp9];
  let tmp11 = !tmp9;
  const callback = onPress.useCallback(() => {
    const tmp = closure_4;
    if (tmp) {
      const openAlert = useAlertStore.openAlert;
      useAlertStore;
      const VOICE_PANEL_VIDEO_GUARD_ERROR_KEY = VoicePanelVideoGuardErrorAlert.VOICE_PANEL_VIDEO_GUARD_ERROR_KEY;
      VoicePanelVideoGuardErrorAlertDefault;
      const intl = intl2.intl;
      openAlert(VOICE_PANEL_VIDEO_GUARD_ERROR_KEY, <tmp17 title={intl.string(intl2.t.GFr0GR)} />);
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
    color = voicePanelButtonStyles.iconFillSelected.color;
  }
  if (videoEnabled) {
    MobilePhoneDenyIcon = MobilePhoneShareIcon;
  } else {
    MobilePhoneDenyIcon = tmp4(tmp2[18]).MobilePhoneDenyIcon;
  }
  const tmp12 = jsx;
  const element = { onPress: callback, disabled: tmp11, props, accessibilityLabel: stringResult, style: iconBgSelected, children: tmp12(tmpResult2, obj3) };
  const tmpResult = tmp(tmp2[19]);
  let intl = tmp4(tmp2[16]).intl;
  const string = intl.string;
  const t = tmp4(tmp2[16]).t;
  if (isActive) {
    stringResult = string(t.CpkXwZ);
  } else {
    stringResult = string(t.fjBNo1);
  }
  iconBgSelected = undefined;
  if (isActive) {
    iconBgSelected = voicePanelButtonStyles.iconBgSelected;
  }
  obj3 = { style: tmp3.iconContainer, children: tmp12(MobilePhoneDenyIcon, { color }) };
  tmpResult2 = tmp(tmp2[20]);
  return tmp12(tmpResult, element);
};
