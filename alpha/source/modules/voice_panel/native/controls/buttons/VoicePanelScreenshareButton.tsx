// Module ID: 18630
// Function ID: 18631
// Name: VoicePanelScreenshareButton
// Dependencies: [19, 4823, 1087, 21, 1630, 13453, 18631, 4971, 558, 576, 10899, 18614, 504, 38, 11593, 14009, 5910, 14012, 1128, 1267, 18633, 6886, 18615, 2]

// Module 18630 (VoicePanelScreenshareButton)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import useAlertStore from "useAlertStore" /* 5910 */;
import ScreenArrowIcon from "ScreenArrowIcon" /* 13453 */;
import VoicePanelVideoGuardErrorAlert from "VoicePanelVideoGuardErrorAlert" /* 14012 */;
import MobilePhoneShareIcon2 from "MobilePhoneShareIcon" /* 18631 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4823 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1630 */;
import createStyles from "createStyles" /* 4971 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function ScreenshareButton(props) {
  let channelId;
  let first;
  let isActive;
  let isFeatureEnabled;
  let onPress;
  let tmp13;
  let tmp9;
  let tmp = channelId;
  let tmp2 = isFeatureEnabled;
  let obj = channelId(isFeatureEnabled[9]);
  const cResult = obj.c(24);
  props = props.props;
  const wrapperSpecs = props.wrapperSpecs;
  channelId = onPress.useContext(isActive(isFeatureEnabled[10])).channelId;
  const tmp5 = closure_8();
  const obj2 = channelId(isFeatureEnabled[11]);
  const voicePanelButtonStyles = obj2.useVoicePanelButtonStyles(wrapperSpecs);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [closure_4];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function _() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[2];
  }
  const tmpResult = tmp(tmp2[12]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp9);
  isActive(tmp2[13])(null != stateFromStores, "null channel in VoicePanelScreenshareButton");
  const tmp12 = tmp4(tmp2[14])(stateFromStores);
  isActive = tmp12.isActive;
  isFeatureEnabled = tmp12.isFeatureEnabled;
  onPress = tmp12.onPress;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let obj3 = { location: "VoicePanelScreenshareButton" };
    cResult[3] = obj3;
    tmp13 = obj3;
  } else {
    tmp13 = cResult[3];
  }
  const VideoGuardExperiment = tmp(tmp2[15]).VideoGuardExperiment;
  const videoEnabled = VideoGuardExperiment.useConfig(tmp13).videoEnabled;
  closure_4 = tmp14;
  if (cResult[4] === isActive) {
    if (cResult[5] === isFeatureEnabled) {
      if (cResult[6] === onPress) {
        let tmp15;
        let color;
        let MobilePhoneDenyIcon;
        let tmp17;
        let iconBgSelected;
        if (cResult[7] === !videoEnabled) {
          tmp15 = cResult[8];
        }
        let tmp16 = !tmp14;
        if (videoEnabled) {
          tmp16 = !isFeatureEnabled;
        }
        if (tmp16) {
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
          MobilePhoneDenyIcon = tmp(tmp2[20]).MobilePhoneDenyIcon;
        }
        if (cResult[9] !== isActive) {
          let stringResult;
          let intl = tmp(tmp2[18]).intl;
          const string = intl.string;
          const t = tmp(tmp2[18]).t;
          if (isActive) {
            stringResult = string(t.CpkXwZ);
          } else {
            stringResult = string(t.fjBNo1);
          }
          cResult[9] = isActive;
          cResult[10] = stringResult;
          tmp17 = stringResult;
        } else {
          tmp17 = cResult[10];
        }
        if (isActive) {
          iconBgSelected = voicePanelButtonStyles.iconBgSelected;
        }
        if (cResult[11] === MobilePhoneDenyIcon) {
          let tmp19;
          if (cResult[12] === color) {
            tmp19 = cResult[13];
          }
          if (cResult[14] === tmp5.iconContainer) {
            let tmp22;
            if (cResult[15] === tmp19) {
              tmp22 = cResult[16];
            }
            if (cResult[17] === tmp16) {
              if (cResult[18] === tmp15) {
                if (cResult[19] === props) {
                  if (cResult[20] === tmp17) {
                    if (cResult[21] === iconBgSelected) {
                      let tmp25;
                      if (cResult[22] === tmp22) {
                        tmp25 = cResult[23];
                      }
                      return tmp25;
                    }
                  }
                }
              }
            }
            const tmp27 = jsx(isActive(tmp2[22]), { onPress: tmp15, disabled: tmp16, props, accessibilityLabel: tmp17, style: iconBgSelected, children: tmp22 });
            cResult[17] = tmp16;
            cResult[18] = tmp15;
            cResult[19] = props;
            cResult[20] = tmp17;
            cResult[21] = iconBgSelected;
            cResult[22] = tmp22;
            cResult[23] = tmp27;
            tmp25 = tmp27;
          }
          const tmp24 = jsx(isActive(tmp2[21]), { style: tmp5.iconContainer, children: tmp19 });
          cResult[14] = tmp5.iconContainer;
          cResult[15] = tmp19;
          cResult[16] = tmp24;
          tmp22 = tmp24;
        }
        const tmp21 = <MobilePhoneDenyIcon color={color} />;
        cResult[11] = MobilePhoneDenyIcon;
        cResult[12] = color;
        cResult[13] = tmp21;
        tmp19 = tmp21;
      }
    }
  }
  class I {
    constructor() {
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
    }
  }
  cResult[4] = isActive;
  cResult[5] = isFeatureEnabled;
  cResult[6] = onPress;
  cResult[7] = !videoEnabled;
  cResult[8] = I;
  tmp15 = I;
}) : (function ScreenshareButton(arg0) {
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
  const channelId = onPress.useContext(isActive(isFeatureEnabled[10])).channelId;
  const tmp3 = closure_8();
  let obj = channelId(isFeatureEnabled[11]);
  const voicePanelButtonStyles = obj.useVoicePanelButtonStyles(wrapperSpecs);
  const items = [closure_4];
  const obj2 = channelId(isFeatureEnabled[12]);
  const stateFromStores = obj2.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  isActive(isFeatureEnabled[13])(null != stateFromStores, "null channel in VoicePanelScreenshareButton");
  const tmp8 = isActive(isFeatureEnabled[14])(stateFromStores);
  isActive = tmp8.isActive;
  isFeatureEnabled = tmp8.isFeatureEnabled;
  onPress = tmp8.onPress;
  const VideoGuardExperiment = channelId(isFeatureEnabled[15]).VideoGuardExperiment;
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
    MobilePhoneDenyIcon = tmp4(tmp2[20]).MobilePhoneDenyIcon;
  }
  const tmp12 = jsx;
  const element = { onPress: callback, disabled: tmp11, props, accessibilityLabel: stringResult, style: iconBgSelected, children: tmp12(tmpResult2, obj3) };
  const tmpResult = tmp(tmp2[22]);
  let intl = tmp4(tmp2[18]).intl;
  const string = intl.string;
  const t = tmp4(tmp2[18]).t;
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
  tmpResult2 = tmp(tmp2[21]);
  return tmp12(tmpResult, element);
});
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelScreenshareButton.tsx");

export default tmp2;
