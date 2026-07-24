// Module ID: 15734
// Function ID: 121283
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 31, 4143, 1194, 4177, 4202, 4148, 566, 2]
// Exports: default

// Module 15734 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { ParticipantTypes } from "ParticipantTypes";

const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function useSelectedParticipant(channelId) {
  let result;
  let tmp3;
  channelId = channelId.channelId;
  const focusedParticipantStreamId = channelId.focusedParticipantStreamId;
  const items = [closure_5];
  const stateFromStores = channelId(focusedParticipantStreamId[7]).useStateFromStores(items, () => outer1_5.getId());
  let obj = channelId(focusedParticipantStreamId[7]);
  [tmp3, result] = stateFromStores(React.useState(0), 2);
  let tmp2 = stateFromStores(React.useState(0), 2);
  const items1 = [stateFromStoresObject];
  const items2 = [channelId, focusedParticipantStreamId, stateFromStores, tmp3];
  stateFromStoresObject = channelId(focusedParticipantStreamId[7]).useStateFromStoresObject(items1, () => {
    let tmp16;
    let tmp17;
    let tmp18;
    if (null != channelId) {
      if (null == focusedParticipantStreamId) {
        const _Date = Date;
        const timestamp = Date.now();
        const participants = stateFromStoresObject.getParticipants(channelId);
        let flag = false;
        if (3 >= participants.length) {
          const tmp2 = outer1_9(participants);
          const iter = tmp2();
          let iter2 = iter;
          flag = true;
          if (!iter.done) {
            while (true) {
              let value = iter2.value;
              let tmp3 = outer1_8;
              if (value.type === outer1_8.ACTIVITY) {
                let iter3 = tmp2();
                iter2 = iter3;
                flag = true;
                if (iter3.done) {
                  break;
                }
              } else {
                let user = value.user;
                let id;
                if (null != user) {
                  id = user.id;
                }
                let tmp5 = user;
                flag = false;
                if (id !== tmp49) {
                  break;
                }
              }
              break;
            }
          }
        }
        const tmp7 = outer1_9(participants);
        const iter4 = tmp7();
        let iter5 = iter4;
        let tmp15;
        if (!iter4.done) {
          while (true) {
            value = iter5.value;
            let tmp19 = tmp14;
            if (!flag) {
              let tmp20 = outer1_8;
              tmp19 = tmp14;
              if (value.type === outer1_8.USER) {
                let user2 = value.user;
                let id1;
                if (null != user2) {
                  id1 = user2.id;
                }
                let tmp22 = stateFromStores;
                tmp19 = user2;
                let tmp23 = tmp8;
                let tmp24 = tmp9;
                let tmp25 = tmp10;
                let tmp26 = tmp11;
                let tmp27 = tmp12;
                let tmp28 = tmp13;
                tmp14 = user2;
              }
              let iter6 = tmp7();
              tmp8 = tmp23;
              tmp9 = tmp24;
              tmp10 = tmp25;
              tmp11 = tmp26;
              tmp12 = tmp27;
              tmp13 = tmp28;
              iter5 = iter6;
              tmp15 = tmp25;
              tmp16 = tmp26;
              tmp17 = tmp27;
              tmp18 = tmp28;
              if (iter6.done) {
                break;
              }
            }
            let type = value.type;
            let tmp29 = outer1_8;
            if (outer1_8.USER === type) {
              let tmp32 = (value.speaking || timestamp - value.lastSpoke < 1000) && null == tmp10;
              if (tmp32) {
                tmp10 = value;
              }
              let voiceState = value.voiceState;
              let selfVideo;
              if (null != voiceState) {
                selfVideo = voiceState.selfVideo;
              }
              let tmp34 = null != selfVideo && selfVideo;
              if (tmp34) {
                let tmp35 = null == tmp11 || tmp11.lastSpoke < value.lastSpoke;
                tmp34 = tmp35;
              }
              if (tmp34) {
                tmp11 = value;
              }
              let tmp36 = null == tmp13 || tmp13.lastSpoke < value.lastSpoke;
              tmp23 = selfVideo;
              tmp24 = voiceState;
              tmp25 = tmp10;
              tmp26 = tmp11;
              tmp27 = tmp12;
              tmp28 = tmp13;
              tmp14 = tmp19;
              if (tmp36) {
                tmp23 = selfVideo;
                tmp24 = voiceState;
                tmp25 = tmp10;
                tmp26 = tmp11;
                tmp27 = tmp12;
                tmp28 = value;
                tmp14 = tmp19;
              }
            } else {
              let tmp30 = outer1_8;
              tmp23 = tmp8;
              tmp24 = tmp9;
              tmp25 = tmp10;
              tmp26 = tmp11;
              tmp27 = tmp12;
              tmp28 = tmp13;
              tmp14 = tmp19;
              if (outer1_8.STREAM === type) {
                let tmp31 = null == tmp12 && null != value.streamId;
                tmp23 = tmp8;
                tmp24 = tmp9;
                tmp25 = tmp10;
                tmp26 = tmp11;
                tmp27 = tmp12;
                tmp28 = tmp13;
                tmp14 = tmp19;
                if (tmp31) {
                  tmp23 = tmp8;
                  tmp24 = tmp9;
                  tmp25 = tmp10;
                  tmp26 = tmp11;
                  tmp27 = value;
                  tmp28 = tmp13;
                  tmp14 = tmp19;
                }
              }
            }
          }
        }
        const obj = { selectedParticipantSpeaking: null != tmp15 };
        let id2;
        if (null != tmp15) {
          const user3 = tmp15.user;
          if (null != user3) {
            id2 = user3.id;
          }
        }
        if (null == id2) {
          let id3;
          if (null != tmp16) {
            const user4 = tmp16.user;
            if (null != user4) {
              id3 = user4.id;
            }
          }
          id2 = id3;
        }
        if (null == id2) {
          let id4;
          if (null != tmp18) {
            const user5 = tmp18.user;
            if (null != user5) {
              id4 = user5.id;
            }
          }
          id2 = id4;
        }
        obj.selectedParticipantUserId = id2;
        if (null != tmp15) {
          let streamId = tmp15.streamId;
          let tmp43;
          if (null != streamId) {
            tmp43 = streamId;
          }
          let tmp42 = tmp43;
        } else {
          streamId = undefined;
          if (null != tmp17) {
            streamId = tmp17.streamId;
          }
          if (null == streamId) {
            let streamId1;
            if (null != tmp16) {
              streamId1 = tmp16.streamId;
            }
            streamId = streamId1;
          }
          if (null != streamId) {
            tmp42 = streamId;
          }
        }
        obj.selectedStreamId = tmp42;
        return obj;
      }
    }
    return { selectedParticipantSpeaking: false, selectedParticipantUserId: undefined, selectedStreamId: undefined };
  }, items2);
  const items3 = [stateFromStoresObject.selectedParticipantSpeaking];
  const effect = React.useEffect(() => {
    if (stateFromStoresObject.selectedParticipantSpeaking) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        outer1_3((arg0) => arg0 + 1);
      }, 3000);
      return () => {
        clearTimeout(closure_0);
      };
    }
  }, items3);
  return stateFromStoresObject;
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/external_pip/useExternalPipParticipant.android.tsx");

export default function useExternalPipParticipant() {
  let focusedParticipantType;
  let focusedParticipantUserId;
  let selectedParticipantSpeaking;
  let selectedParticipantUserId;
  let selectedStreamId;
  let obj = require(566) /* initialize */;
  let items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_7.getChannelId());
  let tmp2;
  if (null != stateFromStores) {
    tmp2 = stateFromStores;
  }
  obj = { channelId: tmp2 };
  const tmp3 = (function useFocusedParticipant(channelId) {
    channelId = channelId.channelId;
    let closure_1 = outer1_3.useRef(undefined);
    let _slicedToArray = outer1_3.useRef(undefined);
    const items = [outer1_4];
    return outer1_0(outer1_1[7]).useStateFromStoresObject(items, () => {
      let selectedParticipantId = null;
      if (null != channelId) {
        selectedParticipantId = outer2_4.getSelectedParticipantId(channelId);
      }
      let tmp4 = null;
      if (null != selectedParticipantId) {
        tmp4 = null;
        if (null != channelId) {
          const participant = outer2_4.getParticipant(channelId, selectedParticipantId);
          tmp4 = null;
          if (null != participant) {
            tmp4 = participant;
          }
        }
      }
      if (undefined === ref.current) {
        let id;
        if (null != tmp4) {
          id = tmp4.id;
        }
        ref.current = id;
        let type;
        if (null != tmp4) {
          type = tmp4.type;
        }
        ref2.current = type;
        const tmp11 = ref2;
        const tmp9 = ref;
      }
      let id1;
      if (null != tmp4) {
        id1 = tmp4.id;
      }
      if (ref.current !== id1) {
        let obj = { focusedParticipantStreamId: undefined, focusedParticipantUserId: undefined, focusedParticipantType: ref2.current };
      } else {
        obj = {};
        let type1;
        if (null != tmp4) {
          type1 = tmp4.type;
        }
        let tmp16;
        if (type1 !== outer2_8.ACTIVITY) {
          let streamId;
          if (null != tmp4) {
            streamId = tmp4.streamId;
          }
          if (null != streamId) {
            tmp16 = streamId;
          }
        }
        obj.focusedParticipantStreamId = tmp16;
        let type2;
        if (null != tmp4) {
          type2 = tmp4.type;
        }
        let tmp20;
        if (type2 !== outer2_8.ACTIVITY) {
          let id2;
          if (null != tmp4) {
            const user = tmp4.user;
            if (null != user) {
              id2 = user.id;
            }
          }
          if (null != id2) {
            tmp20 = id2;
          }
        }
        obj.focusedParticipantUserId = tmp20;
        let type3;
        if (null != tmp4) {
          type3 = tmp4.type;
        }
        let tmp23;
        if (null != type3) {
          tmp23 = type3;
        }
        obj.focusedParticipantType = tmp23;
      }
      return obj;
    });
  })(obj);
  const focusedParticipantStreamId = tmp3.focusedParticipantStreamId;
  obj = { channelId: tmp2, focusedParticipantStreamId };
  ({ focusedParticipantUserId, focusedParticipantType } = tmp3);
  ({ selectedStreamId, selectedParticipantUserId, selectedParticipantSpeaking } = useSelectedParticipant(obj));
  if (null != focusedParticipantStreamId) {
    selectedStreamId = focusedParticipantStreamId;
  }
  let tmp5;
  if (null != selectedStreamId) {
    tmp5 = selectedStreamId;
  }
  if (null != focusedParticipantStreamId) {
    selectedParticipantUserId = focusedParticipantUserId;
  }
  const obj1 = { selectedParticipantStreamId: tmp5 };
  (function useSetHasActiveVideoOutputSink(selectedParticipantStreamId) {
    selectedParticipantStreamId = selectedParticipantStreamId.selectedParticipantStreamId;
    const items = [selectedParticipantStreamId];
    const effect = outer1_3.useEffect(() => {
      if (null != closure_0) {
        const useExternalPipParticipant = "useExternalPipParticipant";
        let mediaEngine = outer2_6.getMediaEngine();
        mediaEngine.eachConnection((setHasActiveVideoOutputSink) => setHasActiveVideoOutputSink.setHasActiveVideoOutputSink(closure_0, true, useExternalPipParticipant));
        return () => {
          const mediaEngine = outer3_6.getMediaEngine();
          mediaEngine.eachConnection((setHasActiveVideoOutputSink) => setHasActiveVideoOutputSink.setHasActiveVideoOutputSink(outer1_0, false, outer1_1));
        };
      }
    }, items);
  })(obj1);
  const obj2 = { channelId: tmp2, selectedParticipantStreamId: tmp5, selectedParticipantUserId, selectedParticipantSpeaking, focusedParticipantType };
  return obj2;
};
