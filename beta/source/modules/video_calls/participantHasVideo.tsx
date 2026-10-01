// Module ID: 8899
// Function ID: 8900
// Name: participantHasVideo
// Dependencies: [502, 1993, 4857, 4861, 504, 2]
// Exports: default, useCanRenderParticipantVideo

// Module 8899 (participantHasVideo)
import Constants from "Constants" /* 4861 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1993 */;
import CallConstants from "CallConstants" /* 4857 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
let metroRequire;
function canRenderParticipantVideo(participant, MediaEngineStore) {
  let obj = MediaEngineStore;
  if (MediaEngineStore === undefined) {
    obj = MediaEngineStore;
  }
  let tmp = null != participant;
  if (tmp) {
    let tmp3 = participant.type !== constants.ACTIVITY;
    if (tmp3) {
      let supportsResult = MediaEngineStore.supports(Features.VIDEO);
      if (supportsResult) {
        let flag;
        if (hasOwnProperty(participant)) {
          flag = null != participant.streamId;
        } else {
          const voiceState = participant.voiceState;
          flag = undefined;
          if (voiceState != null) {
            flag = voiceState.selfVideo;
          }
          if (flag == null) {
            flag = false;
          }
        }
        supportsResult = flag;
      }
      tmp3 = supportsResult;
    }
    let tmp8 = tmp3;
    if (tmp8) {
      const tmp10 = hasOwnProperty(participant);
      let tmp11 = !tmp10;
      if (tmp10) {
        tmp11 = participant.user.id !== AuthenticationStore.getId();
      }
      if (tmp11) {
        const tmp14 = metroRequire(participant);
        let tmp15 = !tmp14;
        if (tmp14) {
          tmp15 = !obj.isLocalVideoDisabled(participant.id);
        }
        tmp11 = tmp15;
      }
      tmp8 = tmp11;
    }
    tmp = tmp8;
  }
  return tmp;
}
({ ParticipantTypes: closure_4, isStreamParticipant: hasOwnProperty, isUserParticipant: metroRequire } = CallConstants);
const Features = Constants.Features;
const result = size.fileFinishedImporting("modules/video_calls/participantHasVideo.tsx");

export default function participantHasVideo(type) {
  let tmp = type.type !== constants.ACTIVITY;
  if (tmp) {
    let supportsResult = MediaEngineStore.supports(Features.VIDEO);
    if (supportsResult) {
      let flag;
      if (hasOwnProperty(type)) {
        flag = null != type.streamId;
      } else {
        const voiceState = type.voiceState;
        flag = undefined;
        if (voiceState != null) {
          flag = voiceState.selfVideo;
        }
        if (flag == null) {
          flag = false;
        }
      }
      supportsResult = flag;
    }
    tmp = supportsResult;
  }
  return tmp;
};
export { canRenderParticipantVideo };
export const useCanRenderParticipantVideo = function useCanRenderParticipantVideo(stateFromStores) {
  _require = stateFromStores;
  const items = [MediaEngineStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => canRenderParticipantVideo(stateFromStores, MediaEngineStore));
};
