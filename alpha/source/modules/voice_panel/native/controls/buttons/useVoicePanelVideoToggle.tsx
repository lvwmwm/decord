// Module ID: 19802
// Function ID: 19803
// Name: useVoicePanelVideoToggle
// Dependencies: [19, 12629, 5092, 5114, 2130, 5175, 6012, 21, 504, 6764, 15523, 6207, 15526, 1113, 19803, 10516, 12649, 2]
// Exports: default

// Module 19802 (useVoicePanelVideoToggle)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import Constants from "Constants" /* 6012 */;
import useAlertStore from "useAlertStore" /* 6207 */;
import StreamPermissionUtils from "StreamPermissionUtils" /* 6764 */;
import CallsUtils from "CallsUtils" /* 10516 */;
import openIgnoreThermalStateAlert from "openIgnoreThermalStateAlert" /* 12649 */;
import VoicePanelVideoGuardErrorAlert from "VoicePanelVideoGuardErrorAlert" /* 15526 */;
import VoicePanelNoVideoPermissionsAlert from "VoicePanelNoVideoPermissionsAlert" /* 19803 */;
import react from "react" /* 19 */;
import ChannelCallLifecycleStore from "ChannelCallLifecycleStore" /* 12629 */;
import ChannelStore from "ChannelStore" /* 5092 */;
import GuildStore from "GuildStore" /* 5114 */;
import MediaEngineStore from "MediaEngineStore" /* 2130 */;
import PermissionStore from "PermissionStore" /* 5175 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const VoicePanelVideoGuardErrorAlertDefault = VoicePanelVideoGuardErrorAlert;
const VoicePanelNoVideoPermissionsAlertDefault = VoicePanelNoVideoPermissionsAlert;
let _require;

const Features = Constants.Features;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/useVoicePanelVideoToggle.tsx");

export default function useVoicePanelVideoToggle(arg0, location) {
  let closure_0;
  let stateFromStores1;
  _require = arg0;
  let obj = require("get initialized");
  const items = [GuildStore, PermissionStore, ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(closure_0);
    let tmp = null != channel;
    if (tmp) {
      let isPrivateResult = channel.isPrivate();
      if (!isPrivateResult) {
        const obj2 = StreamPermissionUtils;
        isPrivateResult = obj2.canStreamInChannel(channel, GuildStore, PermissionStore, false);
      }
      tmp = isPrivateResult;
    }
    return tmp;
  });
  let obj2 = require("get initialized");
  const items1 = [MediaEngineStore];
  stateFromStores1 = obj2.useStateFromStores(items1, () => MediaEngineStore.isVideoEnabled());
  let obj3 = require("get initialized");
  const items2 = [MediaEngineStore];
  const stateFromStores2 = obj3.useStateFromStores(items2, () => MediaEngineStore.supports(constants.VIDEO));
  const VideoGuardExperiment = require("VideoGuardExperiment").VideoGuardExperiment;
  const obj4 = { location };
  const tmp4 = !VideoGuardExperiment.useConfig(obj4).videoEnabled;
  let closure_4 = tmp4;
  const items3 = [arg0, stateFromStores1, stateFromStores, stateFromStores2, tmp4];
  const obj5 = {
    isVideoEnabled: stateFromStores1,
    videoSupported: stateFromStores2,
    videoBlocked: tmp4,
    onPress: stateFromStores2.useCallback(() => {
      const tmp = closure_4;
      if (tmp) {
        const openAlert2 = useAlertStore.openAlert;
        useAlertStore;
        const VOICE_PANEL_VIDEO_GUARD_ERROR_KEY = VoicePanelVideoGuardErrorAlert.VOICE_PANEL_VIDEO_GUARD_ERROR_KEY;
        VoicePanelVideoGuardErrorAlertDefault;
        const intl = intl2.intl;
        openAlert2(VOICE_PANEL_VIDEO_GUARD_ERROR_KEY, <tmp23 title={intl.string(intl2.t["8jSzSe"])} />);
      } else {
        const tmp2 = stateFromStores2;
        if (tmp2) {
          const tmp3 = stateFromStores;
          if (tmp3) {
            const channel = ChannelStore.getChannel(closure_0);
            if (null != channel) {
              const tmp25 = stateFromStores1;
              if (!tmp25) {
                if (ChannelCallLifecycleStore.isReactingToThermalState()) {
                  let obj = openIgnoreThermalStateAlert;
                  const result = obj.openIgnoreThermalStateAlert(() => {
                    if (null != channel) {
                      const obj = closure_2_0(stateFromStores1[15]);
                      obj.handleToggleVideo(tmp);
                    }
                  });
                }
              }
              if (null != channel) {
                const obj3 = CallsUtils;
                obj3.handleToggleVideo(channel);
              }
            }
          } else {
            const openAlert = useAlertStore.openAlert;
            useAlertStore;
            openAlert(VoicePanelNoVideoPermissionsAlert.VOICE_PANEL_NO_VIDEO_PERMS_KEY, jsx(VoicePanelNoVideoPermissionsAlertDefault, {}));
          }
        }
      }
    }, items3)
  };
  return obj5;
};
