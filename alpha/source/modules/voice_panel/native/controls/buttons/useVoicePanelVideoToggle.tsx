// Module ID: 18201
// Function ID: 18202
// Name: useVoicePanelVideoToggle
// Dependencies: [19, 10022, 4892, 4914, 2132, 4975, 5855, 21, 504, 6823, 14083, 6048, 14086, 1112, 18202, 8636, 10044, 2]
// Exports: default

// Module 18201 (useVoicePanelVideoToggle)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1112 */;
import Constants from "Constants" /* 5855 */;
import useAlertStore from "useAlertStore" /* 6048 */;
import StreamPermissionUtils from "StreamPermissionUtils" /* 6823 */;
import CallsUtils from "CallsUtils" /* 8636 */;
import openIgnoreThermalStateAlert from "openIgnoreThermalStateAlert" /* 10044 */;
import VoicePanelVideoGuardErrorAlert from "VoicePanelVideoGuardErrorAlert" /* 14086 */;
import VoicePanelNoVideoPermissionsAlert from "VoicePanelNoVideoPermissionsAlert" /* 18202 */;
import react from "react" /* 19 */;
import ChannelCallLifecycleStore from "ChannelCallLifecycleStore" /* 10022 */;
import ChannelStore from "ChannelStore" /* 4892 */;
import GuildStore from "GuildStore" /* 4914 */;
import MediaEngineStore from "MediaEngineStore" /* 2132 */;
import PermissionStore from "PermissionStore" /* 4975 */;
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
