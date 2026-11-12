// Module ID: 14817
// Function ID: 14818
// Name: useConjureAppChannelSoundButton
// Dependencies: [19, 6934, 6935, 7516, 5831, 12408, 504, 14818, 12148, 8777, 1113, 4026, 5869, 11093, 2]
// Exports: default

// Module 14817 (useConjureAppChannelSoundButton)
import intl2 from "intl" /* 1113 */;
import _modDef4026 from "module_4026" /* 4026 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5831 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5869 */;
import FramesConstants from "FramesConstants" /* 6935 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 11093 */;
import VoiceXIcon from "VoiceXIcon" /* 12148 */;
import react from "react" /* 19 */;
import FramesStore from "FramesStore" /* 6934 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

const isLaunched = FramesConstants.isLaunched;
const result = size.fileFinishedImporting("modules/conjure/app_channel/native/useConjureAppChannelSoundButton.tsx");

export default function useConjureAppChannelSoundButton(application_id, arg1) {
  let deviceMuted;
  let id;
  let stateFromStores;
  let string;
  let tmp7Result;
  let userMuted;
  _require = application_id;
  let tmp4 = null;
  const useIsConjureChannelCandidate = require("ConjureUtils").useIsConjureChannelCandidate;
  const tmp3 = require("ConjureUtils");
  if (arg1) {
    tmp4 = application_id;
  }
  const isConjureChannelCandidate = useIsConjureChannelCandidate(tmp4, "useConjureAppChannelSoundButton");
  const items = [, ];
  ({ id: arr[0], guild_id: arr[1] } = application_id);
  const memo = userMuted.useMemo(() => {
    const obj = { type: EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL, channelId: application_id.id, guildId: application_id.guild_id };
    return obj;
  }, items);
  let tmp9 = null;
  const tmp7 = importDefault;
  const tmp8 = require("useFrameBySurface");
  if (isConjureChannelCandidate) {
    application_id = application_id.application_id;
    if (application_id == null) {
      application_id = null;
    }
    tmp9 = application_id;
  }
  const tmp8Result = tmp8(tmp9, memo);
  importDefault = tmp8Result;
  const tmpResult = tmp(tmp2[6]);
  const items1 = [FramesStore];
  stateFromStores = tmpResult.useStateFromStores(items1, () => deviceMuted.isDeviceMuted());
  if (isConjureChannelCandidate) {
    if (isLaunched(tmp8Result)) {
      let tmpResult2 = tmp(tmp2[7]);
      if (tmpResult2.showsFrameSoundToggle(tmp8Result)) {
        let VoiceNormalIcon;
        userMuted = tmp8Result.data.userMuted || stateFromStores;
        if (userMuted) {
          VoiceNormalIcon = tmp(tmp2[8]).VoiceXIcon;
        } else {
          VoiceNormalIcon = tmp(tmp2[9]).VoiceNormalIcon;
        }
        let obj = {
          IconComponent: VoiceNormalIcon,
          accessibilityLabel: string(userMuted ? tmp7Result.bd0Ufh : tmp7Result.dxBzpe),
          onPress() {
                  let intl;
                  if (stateFromStores) {
                    const obj = { text: intl.string(_modDef4026.W8Q9fy), icon: VoiceXIcon.VoiceXIcon };
                    const open = ToastActionCreatorsDefault.open;
                    ToastActionCreatorsDefault;
                    intl = intl2.intl;
                    open("CONJURE_APP_CHANNEL_DEVICE_SILENCED", obj);
                  } else {
                    const tmpResult2 = FramesActionCreatorsDefault;
                    tmpResult2.setFrameUserMuted(id.id, !userMuted);
                  }
                }
        };
        let intl = tmp(tmp2[10]).intl;
        string = intl.string;
        tmp7Result = tmp7(stateFromStores[11]);
        return obj;
      }
    }
  }
  return null;
};
