// Module ID: 12894
// Function ID: 12895
// Name: CheckpointActionCreators
// Dependencies: [5, 4821, 12893, 1087, 584, 1297, 12895, 12896, 7396, 1267, 7740, 7551, 2]
// Exports: completeCheckpoint, fetchCheckpointData, resetCheckpoint, resetEditedCharacter, selectCharacterTrait, sendSidekickMessage, toggleMute

// Module 12894 (CheckpointActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import HTTPUtils from "HTTPUtils" /* 1297 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7396 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ChannelStore from "ChannelStore" /* 4821 */;
import CheckpointStore from "CheckpointStore" /* 12893 */;
import Constants from "Constants" /* 1087 */;
import size from "module_2" /* 2 */;

let c1, id;

let metroImportDefault;
let metroRequire;
let obj = function _fetchCheckpointData() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj3;
    let obj5;
    let obj6;
    let closure_0 = arg0;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        let body;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            body = undefined;
            CheckpointStore.initializeIfNeeded();
            const obj12 = DispatcherDefault;
            obj12.dispatch({ type: "CHECKPOINT_FETCH_START" });
            c3 = 1;
            const HTTP = HTTPUtils.HTTP;
            const obj7 = { url: constants.CHECKPOINT, rejectWithError: true };
            c4 = 2;
            c5 = 1;
            const obj9 = { value: HTTP.get(obj7), done: false };
            return obj9;
          }
        } else if (1 === c4) {
          c3 = 0;
          const obj8 = closure_130_1(closure_130_2[4]);
          obj8.dispatch({ type: "CHECKPOINT_FETCH_FAILED" });
          c5 = 3;
          return { value: false, done: true };
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          body = value.body;
          if (null != closure_0) {
            const obj11 = { type: "CHECKPOINT_FETCH_SUCCESS", stats: obj5.getMockCheckpointStats(closure_0), globalStats: obj6.globalStatsFromServer(body.global_stats), character: null };
            const dispatch = closure_130_1(closure_130_2[4]).dispatch;
            const tmp22 = closure_130_1(closure_130_2[4]);
            obj5 = closure_130_0(closure_130_2[6]);
            obj6 = closure_130_0(closure_130_2[7]);
            dispatch(obj11);
          } else {
            let statsFromServerResult = null;
            const dispatch2 = closure_130_1(closure_130_2[4]).dispatch;
            const tmp46 = closure_130_1(closure_130_2[4]);
            if (null != body.stats) {
              obj = closure_130_0(closure_130_2[7]);
              statsFromServerResult = obj.statsFromServer(body.stats);
            }
            const obj13 = { type: "CHECKPOINT_FETCH_SUCCESS", stats: statsFromServerResult, globalStats: obj3.globalStatsFromServer(body.global_stats), character: body.character };
            obj3 = closure_130_0(closure_130_2[7]);
            dispatch2(obj13);
          }
          c3 = 0;
          c5 = 3;
          return { value: true, done: true };
        }
      } catch (tmp34) {
        if (0 === c3) {
          c5 = 3;
          throw tmp34;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _completeCheckpoint() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            const obj8 = DispatcherDefault;
            obj8.dispatch({ type: "CHECKPOINT_COMPLETE_START" });
            c3 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: constants.CHECKPOINT_COMPLETE, body: character, rejectWithError: true };
            c4 = 2;
            c5 = 1;
            const obj5 = { value: HTTP.post(request), done: false };
            return obj5;
          }
        } else if (1 === c4) {
          c3 = 0;
          const obj4 = closure_130_1(closure_130_2[4]);
          obj4.dispatch({ type: "CHECKPOINT_COMPLETE_FAILED" });
          c5 = 3;
          return { value: false, done: true };
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          const obj7 = { type: "CHECKPOINT_COMPLETE_SUCCESS", character };
          obj = closure_130_1(closure_130_2[4]);
          obj.dispatch(obj7);
          c3 = 0;
          c5 = 3;
          return { value: true, done: true };
        }
      } catch (tmp15) {
        if (0 === c3) {
          c5 = 3;
          throw tmp15;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _resetCheckpoint() {
  obj = _asyncToGenerator(async (arg0, value) => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c2;
      try {
        c3 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_0 = tmp;
            const obj7 = DispatcherDefault;
            obj7.dispatch({ type: "CHECKPOINT_RESET_START" });
            c2 = 1;
            const HTTP = HTTPUtils.HTTP;
            const obj5 = { url: constants.CHECKPOINT_RESET, rejectWithError: true };
            c1 = 2;
            c3 = 1;
            const obj6 = { value: HTTP.del(obj5), done: false };
            return obj6;
          }
        } else if (1 === tmp4) {
          c2 = 0;
          const obj3 = closure_128_1(closure_128_2[4]);
          obj3.dispatch({ type: "CHECKPOINT_RESET_FAILED" });
          c3 = 3;
          return { value: false, done: true };
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 0;
          c3 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          obj = closure_128_1(closure_128_2[4]);
          obj.dispatch({ type: "CHECKPOINT_RESET_SUCCESS" });
          c2 = 0;
          c3 = 3;
          return { value: true, done: true };
        }
      } catch (tmp13) {
        if (0 === c2) {
          c3 = 3;
          throw tmp13;
        } else {
          c1 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _sendSidekickMessage() {
  obj = _asyncToGenerator(async (arg0, other_user_id) => {
    let closure_0 = arg0;
    let c4 = 0;
    let c5 = 0;
    return (async function(arg0, value) {
      let obj3;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let closure_4;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_2 = undefined;
              id = undefined;
              closure_4 = undefined;
              c4 = 1;
              c5 = 1;
              const obj5 = { value: obj3.getOrEnsurePrivateChannel(other_user_id), done: false };
              obj3 = ChannelActionCreatorsDefault;
              return obj5;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            closure_2 = value;
            id = closure_131_4.getChannel(closure_2);
            if (null == id) {
              const _Error = Error;
              const self = this;
              const self2 = this;
              const error = new Error("Failed to open private channel");
              throw error;
            } else {
              const obj8 = { other_user_id };
              const obj7 = closure_131_1(closure_131_2[9]);
              obj7.track(closure_131_6.CHECKPOINT_SIDEKICK_MESSAGE_SENT, obj8);
              const obj9 = closure_131_1(closure_131_2[10]);
              closure_4 = obj9.parse(id, closure_0);
              c5 = 3;
              const obj10 = closure_131_1(closure_131_2[11]);
              obj = { value: obj10.sendMessage(id.id, closure_4, false, { location: "checkpoint-sidekick" }), done: true };
              return obj;
            }
          }
        } catch (tmp12) {
          c5 = 3;
          throw tmp12;
        }
      }
    })();
  });
  return obj(...arguments);
};
({ AnalyticEvents: metroRequire, Endpoints: metroImportDefault } = Constants);
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointActionCreators.tsx");

export const toggleMute = function toggleMute() {
  obj = DispatcherDefault;
  return obj.dispatch({ type: "CHECKPOINT_TOGGLE_MUTE" });
};
export const selectCharacterTrait = function selectCharacterTrait(trait, optionId) {
  obj = DispatcherDefault;
  const obj2 = { type: "CHECKPOINT_SELECT_CHARACTER_TRAIT", trait, optionId };
  return obj.dispatch(obj2);
};
export const resetEditedCharacter = function resetEditedCharacter() {
  obj = DispatcherDefault;
  return obj.dispatch({ type: "CHECKPOINT_RESET_EDITED_CHARACTER" });
};
export const fetchCheckpointData = function fetchCheckpointData() {
  return obj(...arguments);
};
export const completeCheckpoint = function completeCheckpoint() {
  return obj(...arguments);
};
export const resetCheckpoint = function resetCheckpoint() {
  return obj(...arguments);
};
export const sendSidekickMessage = function sendSidekickMessage() {
  return obj(...arguments);
};
