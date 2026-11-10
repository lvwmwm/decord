// Module ID: 19612
// Function ID: 19613
// Name: useVoicePanelScreenshareToggle
// Dependencies: [19, 1072, 21, 12095, 14830, 6094, 14833, 1113, 1252, 2]
// Exports: default

// Module 19612 (useVoicePanelScreenshareToggle)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import useAlertStore from "useAlertStore" /* 6094 */;
import VoicePanelVideoGuardErrorAlert from "VoicePanelVideoGuardErrorAlert" /* 14833 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const VoicePanelVideoGuardErrorAlertDefault = VoicePanelVideoGuardErrorAlert;
let _require;

const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/useVoicePanelScreenshareToggle.tsx");

export default function useVoicePanelScreenshareToggle(arg0, location, source) {
  let isActive;
  let isFeatureEnabled;
  _require = source;
  let tmp = isActive(isFeatureEnabled[3])(arg0);
  isActive = tmp.isActive;
  isFeatureEnabled = tmp.isFeatureEnabled;
  const onPress = tmp.onPress;
  const text = tmp.text;
  const VideoGuardExperiment = require("VideoGuardExperiment").VideoGuardExperiment;
  let obj = { location };
  let tmp2 = !VideoGuardExperiment.useConfig(obj).videoEnabled;
  let closure_4 = tmp2;
  const items = [isActive, isFeatureEnabled, onPress, source, tmp2];
  const obj2 = {
    isActive,
    isFeatureEnabled,
    videoBlocked: tmp2,
    text,
    onPress: onPress.useCallback(() => {
      const tmp = closure_4;
      if (tmp) {
        const openAlert = useAlertStore.openAlert;
        useAlertStore;
        const VOICE_PANEL_VIDEO_GUARD_ERROR_KEY = VoicePanelVideoGuardErrorAlert.VOICE_PANEL_VIDEO_GUARD_ERROR_KEY;
        VoicePanelVideoGuardErrorAlertDefault;
        const intl = intl2.intl;
        openAlert(VOICE_PANEL_VIDEO_GUARD_ERROR_KEY, <tmp18 title={intl.string(intl2.t.GFr0GR)} />);
      } else {
        const tmp2 = isFeatureEnabled;
        if (tmp2) {
          const obj3 = { source, was_active: isActive };
          const obj = AnalyticsUtilsDefault;
          obj.track(AnalyticEvents.VOICE_PANEL_SCREENSHARE_BUTTON_TAPPED, obj3);
          onPress();
        }
      }
    }, items)
  };
  return obj2;
};
