// Module ID: 14468
// Function ID: 14469
// Name: useConjureAppChannelSoundButton
// Dependencies: [19, 6833, 6834, 558, 576, 7405, 5664, 11869, 504, 14469, 11718, 8631, 1125, 3864, 5701, 10880, 2]

// Module 14468 (useConjureAppChannelSoundButton)
import intl2 from "intl" /* 1125 */;
import _modDef3864 from "module_3864" /* 3864 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5664 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5701 */;
import FramesConstants from "FramesConstants" /* 6834 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10880 */;
import VoiceXIcon from "VoiceXIcon" /* 11718 */;
import react from "react" /* 19 */;
import FramesStore from "FramesStore" /* 6833 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

const isLaunched = FramesConstants.isLaunched;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureAppChannelSoundButton(channelId, arg1) {
  let deviceMuted;
  let id;
  let stateFromStores;
  let userMuted;
  let obj = require("react");
  const cResult = obj.c(13);
  let tmp5 = null;
  const useIsConjureChannelCandidate = require("ConjureUtils").useIsConjureChannelCandidate;
  const tmp4 = require("ConjureUtils");
  if (arg1) {
    tmp5 = channelId;
  }
  const isConjureChannelCandidate = useIsConjureChannelCandidate(tmp5, "useConjureAppChannelSoundButton");
  if (cResult[0] === channelId.guild_id) {
    let tmp7;
    let tmp15;
    let tmp14;
    if (cResult[1] === channelId.id) {
      tmp7 = cResult[2];
    }
    let tmp10 = null;
    const tmp8 = stateFromStores;
    const tmp9 = stateFromStores(userMuted[7]);
    if (isConjureChannelCandidate) {
      let application_id = channelId.application_id;
      if (application_id == null) {
        application_id = null;
      }
      tmp10 = application_id;
    }
    const tmp9Result = tmp9(tmp10, tmp7);
    _require = tmp9Result;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [FramesStore];
      class C {
        constructor() {
          return deviceMuted.isDeviceMuted();
        }
      }
      cResult[3] = items;
      cResult[4] = C;
      tmp15 = C;
      tmp14 = items;
    } else {
      tmp14 = cResult[3];
      tmp15 = cResult[4];
    }
    const tmpResult = tmp(tmp2[8]);
    stateFromStores = tmpResult.useStateFromStores(tmp14, tmp15);
    if (isConjureChannelCandidate) {
      if (isLaunched(tmp9Result)) {
        let tmpResult2 = tmp(tmp2[9]);
        if (tmpResult2.showsFrameSoundToggle(tmp9Result)) {
          let tmp21;
          userMuted = tmp9Result.data.userMuted;
          class C {
            constructor() {
              return deviceMuted.isDeviceMuted();
            }
          }
          if (cResult[5] !== (userMuted || stateFromStores)) {
            const string = tmp(tmp2[12]).intl.string;
            tmp8(userMuted[13]);
            class C {
              constructor() {
                return deviceMuted.isDeviceMuted();
              }
            }
            cResult[5] = userMuted || stateFromStores;
            cResult[6] = tmp23;
            tmp21 = tmp23;
          } else {
            tmp21 = cResult[6];
          }
          if (cResult[7] === tmp9Result.id) {
            if (cResult[8] === stateFromStores) {
              if (cResult[9] === tmp20) {
                if (cResult[10] === tmp21) {
                  let tmp24;
                  if (cResult[11] === userMuted) {
                    tmp24 = cResult[12];
                  }
                  return tmp24;
                }
              }
            }
          }
          const obj2 = {
            IconComponent: tmp20,
            accessibilityLabel: tmp21,
            onPress() {
                      let intl;
                      if (stateFromStores) {
                        const obj = { text: intl.string(_modDef3864.W8Q9fy), icon: VoiceXIcon.VoiceXIcon };
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
          cResult[7] = tmp9Result.id;
          cResult[8] = stateFromStores;
          cResult[9] = tmp20;
          cResult[10] = tmp21;
          cResult[11] = userMuted;
          cResult[12] = obj2;
          tmp24 = obj2;
        }
      }
    }
    return null;
  }
  const obj3 = { type: require("EmbeddedSurfaceType").EmbeddedSurfaceType.APP_CHANNEL, channelId: channelId.id, guildId: channelId.guild_id };
  cResult[0] = channelId.guild_id;
  cResult[1] = channelId.id;
  cResult[2] = obj3;
  tmp7 = obj3;
}) : (function useConjureAppChannelSoundButton(application_id, arg1) {
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
  const tmpResult = tmp(tmp2[8]);
  const items1 = [FramesStore];
  stateFromStores = tmpResult.useStateFromStores(items1, () => deviceMuted.isDeviceMuted());
  if (isConjureChannelCandidate) {
    if (isLaunched(tmp8Result)) {
      let tmpResult2 = tmp(tmp2[9]);
      if (tmpResult2.showsFrameSoundToggle(tmp8Result)) {
        let VoiceNormalIcon;
        userMuted = tmp8Result.data.userMuted || stateFromStores;
        if (userMuted) {
          VoiceNormalIcon = tmp(tmp2[10]).VoiceXIcon;
        } else {
          VoiceNormalIcon = tmp(tmp2[11]).VoiceNormalIcon;
        }
        let obj = {
          IconComponent: VoiceNormalIcon,
          accessibilityLabel: string(userMuted ? tmp7Result.bd0Ufh : tmp7Result.dxBzpe),
          onPress() {
                  let intl;
                  if (stateFromStores) {
                    const obj = { text: intl.string(_modDef3864.W8Q9fy), icon: VoiceXIcon.VoiceXIcon };
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
        let intl = tmp(tmp2[12]).intl;
        string = intl.string;
        tmp7Result = tmp7(stateFromStores[13]);
        return obj;
      }
    }
  }
  return null;
});
const result = size.fileFinishedImporting("modules/conjure/app_channel/native/useConjureAppChannelSoundButton.tsx");

export default tmp2;
