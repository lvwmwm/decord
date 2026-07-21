// Module ID: 15559
// Function ID: 118706
// Name: _createForOfIteratorHelperLoose
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 15559 (_createForOfIteratorHelperLoose)
import __exportStarResult1 from "__exportStarResult1";
import closure_3 from "__exportStarResult1";
import closure_4 from "__exportStarResult1";
import closure_5 from "__exportStarResult1";
import closure_6 from "__exportStarResult1";
import closure_7 from "__exportStarResult1";
import { ParticipantTypes } from "__exportStarResult1";

function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  let tmp3;
  channelId = channelId.channelId;
  const arg1 = channelId;
  const focusedParticipantStreamId = channelId.focusedParticipantStreamId;
  const dependencyMap = focusedParticipantStreamId;
  const items = [closure_5];
  const stateFromStores = arg1(dependencyMap[7]).useStateFromStores(items, () => id.getId());
  const callback = stateFromStores;
  const obj = arg1(dependencyMap[7]);
  [tmp3, closure_3] = callback(React.useState(0), 2);
  const tmp2 = callback(React.useState(0), 2);
  const items1 = [closure_4];
  const items2 = [channelId, focusedParticipantStreamId, stateFromStores, tmp3];
  const stateFromStoresObject = arg1(dependencyMap[7]).useStateFromStoresObject(items1, () => {
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
          const tmp2 = callback(participants);
          const iter = tmp2();
          let iter2 = iter;
          flag = true;
          if (!iter.done) {
            while (true) {
              let value = iter2.value;
              let tmp3 = constants;
              if (value.type === constants.ACTIVITY) {
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
        const tmp7 = callback(participants);
        const iter4 = tmp7();
        let iter5 = iter4;
        let tmp15;
        if (!iter4.done) {
          while (true) {
            value = iter5.value;
            let tmp19 = tmp14;
            if (!flag) {
              let tmp20 = constants;
              tmp19 = tmp14;
              if (value.type === constants.USER) {
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
                let tmp14 = user2;
              }
              let iter6 = tmp7();
              let tmp8 = tmp23;
              let tmp9 = tmp24;
              let tmp10 = tmp25;
              let tmp11 = tmp26;
              let tmp12 = tmp27;
              let tmp13 = tmp28;
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
            let tmp29 = constants;
            if (constants.USER === type) {
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
              let tmp30 = constants;
              tmp23 = tmp8;
              tmp24 = tmp9;
              tmp25 = tmp10;
              tmp26 = tmp11;
              tmp27 = tmp12;
              tmp28 = tmp13;
              tmp14 = tmp19;
              if (constants.STREAM === type) {
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
  closure_4 = stateFromStoresObject;
  const items3 = [stateFromStoresObject.selectedParticipantSpeaking];
  const effect = React.useEffect(() => {
    if (stateFromStoresObject.selectedParticipantSpeaking) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        callback((arg0) => arg0 + 1);
      }, 3000);
      return () => {
        clearTimeout(closure_0);
      };
    }
  }, items3);
  return stateFromStoresObject;
}
const result = require("__exportStarResult1").fileFinishedImporting("modules/external_pip/useExternalPipParticipant.android.tsx");

export default function useExternalPipParticipant() {
  let focusedParticipantType;
  let focusedParticipantUserId;
  let selectedParticipantSpeaking;
  let selectedParticipantUserId;
  let selectedStreamId;
  let obj = arg1(dependencyMap[7]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => channelId.getChannelId());
  let tmp2;
  if (null != stateFromStores) {
    tmp2 = stateFromStores;
  }
  obj = { channelId: tmp2 };
  const tmp3 = function useFocusedParticipant(channelId) {
    channelId = channelId.channelId;
    let closure_1 = React.useRef(undefined);
    let __exportStarResult1 = React.useRef(undefined);
    const items = [closure_4];
    return channelId(closure_1[7]).useStateFromStoresObject(items, () => {
      let selectedParticipantId = null;
      if (null != channelId) {
        selectedParticipantId = store.getSelectedParticipantId(channelId);
      }
      let tmp4 = null;
      if (null != selectedParticipantId) {
        tmp4 = null;
        if (null != channelId) {
          const participant = store.getParticipant(channelId, selectedParticipantId);
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
        if (type1 !== constants.ACTIVITY) {
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
        if (type2 !== constants.ACTIVITY) {
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
  }(obj);
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
  function useSetHasActiveVideoOutputSink(selectedParticipantStreamId) {
    selectedParticipantStreamId = selectedParticipantStreamId.selectedParticipantStreamId;
    const items = [selectedParticipantStreamId];
    const effect = React.useEffect(() => {
      if (null != closure_0) {
        let closure_1 = "useExternalPipParticipant";
        const mediaEngine = mediaEngine.getMediaEngine();
        mediaEngine.eachConnection((setHasActiveVideoOutputSink) => setHasActiveVideoOutputSink.setHasActiveVideoOutputSink(closure_0, true, closure_1));
        return () => {
          const mediaEngine = mediaEngine.getMediaEngine();
          mediaEngine.eachConnection((setHasActiveVideoOutputSink) => setHasActiveVideoOutputSink.setHasActiveVideoOutputSink(closure_0, false, closure_1));
        };
      }
    }, items);
  }(obj1);
  const obj2 = { channelId: tmp2, selectedParticipantStreamId: tmp5, selectedParticipantUserId, selectedParticipantSpeaking, focusedParticipantType };
  return obj2;
};
