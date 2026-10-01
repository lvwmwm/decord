// Module ID: 16829
// Function ID: 16830
// Name: useExternalPipParticipant
// Dependencies: [32, 19, 4852, 502, 1993, 4859, 4857, 504, 2]
// Exports: default

// Module 16829 (useExternalPipParticipant)
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4852 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1993 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4859 */;
import CallConstants from "CallConstants" /* 4857 */;
import size from "module_2" /* 2 */;

let id, mediaEngine;

let c9;
let metroImportAll;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ isStreamParticipant: metroImportAll, ParticipantTypes: c9 } = CallConstants);
const result = size.fileFinishedImporting("modules/external_pip/useExternalPipParticipant.android.tsx");

export default function useExternalPipParticipant() {
  let c3;
  let channelId;
  let focusedParticipantType;
  let focusedParticipantUserId;
  let ref;
  let ref2;
  let stateFromStores1;
  let tmp7;
  const tmp = channelId;
  const tmp2 = stateFromStores1;
  let obj = channelId(stateFromStores1[7]);
  const items = [RTCConnectionStore];
  channelId = obj.useStateFromStores(items, () => channelId.getChannelId());
  const items1 = [AuthenticationStore];
  const tmpResult = tmp(tmp2[7]);
  stateFromStores1 = tmpResult.useStateFromStores(items1, () => id.getId());
  react = undefined;
  _slicedToArray = react.useRef(undefined);
  const obj3 = react;
  react = react.useRef(undefined);
  const items2 = [ChannelRTCStore];
  const tmpResult3 = tmp(tmp2[7]);
  const stateFromStoresObject = tmpResult3.useStateFromStoresObject(items2, () => {
    let obj;
    let tmp17;
    let tmp6;
    let type3;
    let selectedParticipant = null;
    if (null != channelId) {
      selectedParticipant = ChannelRTCStore.getSelectedParticipant(tmp);
    }
    if (!metroImportAll(selectedParticipant)) {
      tmp6 = selectedParticipant;
    } else {
      const user = selectedParticipant.user;
      id = undefined;
      if (user != null) {
        id = user.id;
      }
      tmp6 = null;
    }
    if (undefined === ref.current) {
      let id1;
      if (tmp6 != null) {
        id1 = tmp6.id;
      }
      ref.current = id1;
      let type;
      const tmp9 = ref2;
      if (tmp6 != null) {
        type = tmp6.type;
      }
      tmp9.current = type;
    }
    let id2;
    const current = tmp7.current;
    if (tmp6 != null) {
      id2 = tmp6.id;
    }
    if (current !== id2) {
      obj = { focusedParticipantStreamId: "Array", focusedParticipantUserId: "channel", focusedParticipantType: ref2.current };
      const obj2 = { focusedParticipantStreamId: "Array", focusedParticipantUserId: "channel", focusedParticipantType: ref2.current };
    } else {
      let type1;
      if (tmp6 != null) {
        type1 = tmp6.type;
      }
      let tmp14;
      const tmp13 = constants;
      if (type1 !== constants.ACTIVITY) {
        let streamId;
        if (tmp6 != null) {
          streamId = tmp6.streamId;
        }
        tmp14 = streamId;
      }
      obj = { focusedParticipantStreamId: tmp14, focusedParticipantUserId: tmp17, focusedParticipantType: type3 };
      let type2;
      if (tmp6 != null) {
        type2 = tmp6.type;
      }
      tmp17 = undefined;
      if (type2 !== tmp13.ACTIVITY) {
        let id3;
        if (tmp6 != null) {
          const user2 = tmp6.user;
          if (user2 != null) {
            id3 = user2.id;
          }
        }
        tmp17 = id3;
      }
      type3 = undefined;
      if (tmp6 != null) {
        type3 = tmp6.type;
      }
    }
    return obj;
  });
  const focusedParticipantStreamId = stateFromStoresObject.focusedParticipantStreamId;
  c3 = undefined;
  ({ focusedParticipantUserId, focusedParticipantType } = stateFromStoresObject);
  let tmp6 = _slicedToArray(react.useState(0), 2);
  [tmp7, c3] = tmp6;
  const items3 = [ChannelRTCStore];
  const items4 = [channelId, focusedParticipantStreamId, stateFromStores1, tmp7];
  const tmpResult4 = tmp(tmp2[7]);
  const stateFromStoresObject1 = tmpResult4.useStateFromStoresObject(items3, () => {
    let id1;
    let streamId1;
    let tmp20;
    let tmp30;
    let tmp35;
    function hasOnlySelfParticipant(participants, stateFromStores1) {
      if (3 < participants.length) {
        return false;
      } else {
        const iter = participants[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          if (nextResult.type !== constants.ACTIVITY) {
            let user = tmp6.user;
            id = undefined;
            if (user != null) {
              id = user.id;
            }
            if (id !== stateFromStores1) {
              iter.return();
              let flag = false;
              return false;
            }
          }
          continue;
        }
        return true;
      }
    }
    if (null != channelId) {
      if (null == focusedParticipantStreamId) {
        const _Date = Date;
        let tmp24;
        const timestamp = Date.now();
        participants = participants.getParticipants(tmp);
        const tmp53 = hasOnlySelfParticipant(participants, stateFromStores1);
        let iter = participants[Symbol.iterator]();
        let nextResult = iter.next();
        while (iter !== undefined) {
          let tmp5 = nextResult;
          if (!tmp53) {
            let tmp6 = nextResult;
            let tmp7 = constants;
            if (tmp5.type === constants.USER) {
              let tmp8 = nextResult;
              let user = tmp5.user;
              id = undefined;
              if (user != null) {
                id = user.id;
              }
              let tmp10 = stateFromStores1;
            }
            continue;
          }
          let type = tmp5.type;
          if (constants.USER === type) {
            let speaking = tmp5.speaking;
            if (!speaking) {
              speaking = timestamp - tmp5.lastSpoke < 1000;
            }
            if (speaking) {
              speaking = null == tmp24;
            }
            if (speaking) {
              tmp24 = nextResult;
            }
            let voiceState = tmp5.voiceState;
            let flag;
            if (voiceState != null) {
              flag = voiceState.selfVideo;
            }
            if (flag == null) {
              flag = false;
            }
            if (flag) {
              let tmp27 = null == tmp30;
              if (!tmp27) {
                tmp27 = tmp30.lastSpoke < tmp5.lastSpoke;
              }
              flag = tmp27;
            }
            if (flag) {
              tmp30 = nextResult;
            }
            let tmp32 = null == tmp35;
            if (!tmp32) {
              tmp32 = tmp35.lastSpoke < tmp5.lastSpoke;
            }
            if (tmp32) {
              tmp35 = nextResult;
            }
          } else if (tmp12.STREAM === type) {
            let tmp14 = null != tmp20;
            if (!tmp14) {
              tmp14 = null == tmp5.streamId;
            }
            if (!tmp14) {
              let tmp17 = closure_2_8(tmp5);
              if (tmp17) {
                tmp17 = tmp5.user.id === stateFromStores1;
              }
              tmp14 = tmp17;
            }
            if (!tmp14) {
              tmp20 = nextResult;
            }
          }
        }
        const obj = { selectedParticipantSpeaking: null != tmp24, selectedParticipantUserId: id1, selectedStreamId: streamId1 };
        id1 = undefined;
        if (tmp24 != null) {
          const user2 = tmp24.user;
          if (user2 != null) {
            id1 = user2.id;
          }
        }
        if (id1 == null) {
          let id2;
          if (tmp30 != null) {
            const user3 = tmp30.user;
            if (user3 != null) {
              id2 = user3.id;
            }
          }
          id1 = id2;
        }
        if (id1 == null) {
          let id3;
          if (tmp35 != null) {
            const user4 = tmp35.user;
            if (user4 != null) {
              id3 = user4.id;
            }
          }
          id1 = id3;
        }
        if (null != tmp24) {
          const streamId = tmp24.streamId;
          streamId1 = streamId;
        } else {
          streamId1 = undefined;
          if (tmp20 != null) {
            streamId1 = tmp20.streamId;
          }
          if (streamId1 == null) {
            let streamId2;
            if (tmp30 != null) {
              streamId2 = tmp30.streamId;
            }
            streamId1 = streamId2;
          }
        }
        return obj;
      }
    }
    return { selectedParticipantSpeaking: false, selectedParticipantUserId: "Boolean", selectedStreamId: "paddingHorizontal" };
  }, items4);
  const items5 = [stateFromStoresObject1.selectedParticipantSpeaking];
  const effect = react.useEffect(() => {
    let closure_0;
    if (stateFromStoresObject1.selectedParticipantSpeaking) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        closure_1_3((arg0) => arg0 + 1);
      }, 3000);
      return () => {
        clearTimeout(closure_0);
      };
    }
  }, items5);
  let selectedParticipantUserId = stateFromStoresObject1.selectedParticipantUserId;
  let selectedParticipantStreamId = focusedParticipantStreamId;
  const selectedParticipantSpeaking = stateFromStoresObject1.selectedParticipantSpeaking;
  if (focusedParticipantStreamId == null) {
    selectedParticipantStreamId = stateFromStoresObject1.selectedStreamId;
  }
  if (null != focusedParticipantStreamId) {
    selectedParticipantUserId = focusedParticipantUserId;
  }
  const items6 = [selectedParticipantStreamId];
  const effect1 = obj3.useEffect(() => {
    let closure_0 = selectedParticipantStreamId;
    if (null != selectedParticipantStreamId) {
      const useExternalPipParticipant_str = "useExternalPipParticipant";
      mediaEngine = mediaEngine.getMediaEngine();
      mediaEngine.eachConnection((setHasActiveVideoOutputSink) => setHasActiveVideoOutputSink.setHasActiveVideoOutputSink(closure_0, true, useExternalPipParticipant_str));
      return () => {
        mediaEngine = mediaEngine.getMediaEngine();
        mediaEngine.eachConnection((setHasActiveVideoOutputSink) => setHasActiveVideoOutputSink.setHasActiveVideoOutputSink(closure_1_0, false, useExternalPipParticipant_str));
      };
    }
  }, items6);
  return { channelId, selectedParticipantStreamId, selectedParticipantUserId, selectedParticipantSpeaking, focusedParticipantType };
};
