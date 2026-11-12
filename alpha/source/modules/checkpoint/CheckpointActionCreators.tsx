// Module ID: 14150
// Function ID: 14151
// Name: CheckpointActionCreators
// Dependencies: [5, 5092, 14146, 1072, 572, 14144, 1282, 14147, 14151, 6684, 8069, 8719, 8593, 10176, 1380, 2]
// Exports: completeCheckpoint, fetchCheckpointData, resetCheckpoint, saveCheckpointProgress, selectCharacterTrait, sendCheckpointCard, sendSidekickMessage, setVolume, toggleMute

// Module 14150 (CheckpointActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 8069 */;
import formatResults from "formatResults" /* 10176 */;
import Tracking from "Tracking" /* 14144 */;
import CheckpointStore2 from "CheckpointStore" /* 14146 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ChannelStore from "ChannelStore" /* 5092 */;
import size from "module_2" /* 2 */;

const CheckpointStore = CheckpointStore2;
let c1, c10, c5, c6, c9;

let obj = function _fetchCheckpointData() {
  let constants2;
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj3;
    let obj5;
    let obj6;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c4;
      try {
        let body;
        let compact_assets;
        let availability;
        let character;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp4;
            body = undefined;
            compact_assets = undefined;
            availability = undefined;
            character = undefined;
            CheckpointStore.initializeIfNeeded();
            if (CheckpointStore.isFetching) {
              c6 = 3;
              const obj7 = { value: constants.FETCHING, done: true };
              return obj7;
            } else {
              const obj11 = DispatcherDefault;
              obj11.dispatch({ type: "CHECKPOINT_FETCH_START" });
              c4 = 1;
              const HTTP = HTTPUtils.HTTP;
              const obj8 = { url: constants2.CHECKPOINT, rejectWithError: true };
              c5 = 2;
              c6 = 1;
              const obj10 = { value: HTTP.get(obj8), done: false };
              return obj10;
            }
          }
        } else if (1 === c5) {
          c4 = 0;
          const obj9 = closure_131_1(closure_131_2[4]);
          obj9.dispatch({ type: "CHECKPOINT_FETCH_FAILED" });
          c6 = 3;
          const obj12 = { value: closure_131_6.ERROR, done: true };
          return obj12;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj13 = { value, done: true };
          return obj13;
        } else {
          let SUCCESS;
          body = value.body;
          compact_assets = body.compact_assets;
          availability = body.availability;
          let FULL = availability;
          if (availability == null) {
            FULL = closure_131_0(closure_131_2[7]).CheckpointAvailability.FULL;
          }
          availability = FULL;
          character = null;
          if (availability === closure_131_0(closure_131_2[7]).CheckpointAvailability.FULL) {
            character = body.character;
          }
          if (null != closure_0) {
            const obj14 = { type: "CHECKPOINT_FETCH_SUCCESS", stats: obj5.getMockCheckpointStats(closure_0), globalStats: obj6.globalStatsFromServer(body.global_stats), character: null, compactAssets: compact_assets, availability };
            const dispatch = closure_131_1(closure_131_2[4]).dispatch;
            const tmp39 = closure_131_1(closure_131_2[4]);
            obj5 = closure_131_0(closure_131_2[8]);
            obj6 = closure_131_0(closure_131_2[9]);
            dispatch(obj14);
            SUCCESS = closure_131_6.SUCCESS;
          } else {
            let statsFromServerResult = null;
            const dispatch2 = closure_131_1(closure_131_2[4]).dispatch;
            const tmp75 = closure_131_1(closure_131_2[4]);
            if (null != body.stats) {
              obj = closure_131_0(closure_131_2[9]);
              statsFromServerResult = obj.statsFromServer(body.stats);
            }
            const obj15 = { type: "CHECKPOINT_FETCH_SUCCESS", stats: statsFromServerResult, globalStats: obj3.globalStatsFromServer(body.global_stats), character, compactAssets: compact_assets, availability };
            obj3 = closure_131_0(closure_131_2[9]);
            dispatch2(obj15);
            SUCCESS = closure_131_6.SUCCESS;
          }
          c4 = 0;
          c6 = 3;
          const obj16 = { value: SUCCESS, done: true };
          return obj16;
        }
      } catch (tmp62) {
        if (0 === c4) {
          c6 = 3;
          throw tmp62;
        } else {
          c5 = 1;
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
        return { value: "HermesInternal", done: null };
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
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            const obj9 = DispatcherDefault;
            obj9.dispatch({ type: "CHECKPOINT_COMPLETE_START" });
            c3 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: constants.CHECKPOINT_COMPLETE, body: character, rejectWithError: true };
            c4 = 2;
            c5 = 1;
            const obj6 = { value: HTTP.post(request), done: false };
            return obj6;
          }
        } else if (1 === c4) {
          c3 = 0;
          const obj5 = closure_130_1(closure_130_2[4]);
          obj5.dispatch({ type: "CHECKPOINT_COMPLETE_FAILED" });
          c5 = 3;
          return { value: false, done: true };
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          const obj8 = { type: "CHECKPOINT_COMPLETE_SUCCESS", character };
          obj = closure_130_1(closure_130_2[4]);
          obj.dispatch(obj8);
          const obj3 = closure_130_0(closure_130_2[5]);
          const result = obj3.trackCheckpoint2026Completed();
          c3 = 0;
          c5 = 3;
          return { value: true, done: true };
        }
      } catch (tmp18) {
        if (0 === c3) {
          c5 = 3;
          throw tmp18;
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
        return { value: "HermesInternal", done: null };
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
  obj = _asyncToGenerator(async function(arg0, value) {
    let obj6;
    let closure_0 = arg0;
    let closure_1 = value;
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
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let closure_2;
        let id;
        let closure_4;
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
            closure_2 = undefined;
            id = undefined;
            closure_4 = undefined;
            value = undefined;
            c4 = 1;
            c5 = 1;
            const obj4 = { value: obj6.getOrEnsurePrivateChannel(closure_1), done: false };
            obj6 = ChannelActionCreatorsDefault;
            return obj4;
          }
        } else if (1 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj5 = { value, done: true };
            return obj5;
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
              const obj10 = closure_131_1(closure_131_2[11]);
              closure_4 = obj10.parse(id, closure_0);
              const obj11 = closure_131_1(closure_131_2[12]);
              c4 = 2;
              c5 = 1;
              const obj7 = { value: obj11.sendMessage(id.id, closure_4, false, { location: "checkpoint-sidekick" }), done: false };
              return obj7;
            }
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          obj = closure_131_0(closure_131_2[5]);
          const result = obj.trackCheckpoint2026SidekickMessageSent(closure_1);
          c5 = 3;
          const obj9 = { value, done: true };
          return obj9;
        }
      } catch (tmp18) {
        c5 = 3;
        throw tmp18;
      }
    }
  });
  return obj(...arguments);
};
obj = function _sendCheckpointCard() {
  obj = _asyncToGenerator(async (arg0, value, arg2) => {
    let checkpointCardType;
    let closure_1;
    let closure_4;
    let closure_0 = arg0;
    let closure_2 = arg2;
    if (c10 === 2) {
      c10 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      while (true) {
        let closure_3;
        let c4;
        c10 = 2;
        let tmp4 = c9;
        if (0 === c9) {
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_6 = tmp;
            let closure_5 = tmp4;
            closure_0 = checkpointCardType;
            checkpointCardType = closure_2;
            closure_2 = undefined;
            closure_3 = undefined;
            c4 = undefined;
            let _Promise2 = Promise;
            c9 = 1;
            c10 = 1;
            let obj4 = { value: Promise.all(closure_0.map(formatResults.getOrResolveChannelIdFromDestinationId)), done: false };
            return obj4;
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 3;
            let obj5 = { value, done: true };
            return obj5;
          } else {
            closure_2 = value.filter(closure_134_0(closure_134_2[14]).isNotNullish);
            let _Promise = Promise;
            c9 = 2;
            c10 = 1;
            let obj6 = {
              value: Promise.allSettled(closure_2.map((item) => {
                        channel = channel.getChannel(item);
                        if (null != channel) {
                          const id = channel.id;
                          const sendMessage = checkpointCardType(closure_2[12]).sendMessage;
                          const obj2 = { location: "checkpoint", checkpointCardType };
                          const tmp4 = checkpointCardType(closure_2[12]);
                          obj = checkpointCardType(closure_2[11]);
                          return sendMessage(id, obj.parse(channel, closure_1_0), false, obj2);
                        }
                      })),
              done: false
            };
            return obj6;
          }
        } else if (2 === tmp4) {
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = value;
            let channel = closure_3;
            closure_3 = closure_3[Symbol.iterator]();
            while (closure_3 !== undefined) {
              let c8 = 1;
              c4 = tmp13;
              if ("rejected" === c4.status) {
                throw c4.reason;
              } else {
                c8 = 0;
                continue;
              }
            }
            c10 = 3;
            return { value: "HermesInternal", done: null };
          }
        } else {
          c8 = 0;
          closure_3.return();
          throw Endpoints;
        }
      }
    }
  });
  return obj(...arguments);
};
const CheckpointFetchStates = CheckpointStore2.CheckpointFetchStates;
const Endpoints = Constants.Endpoints;
let result = size.fileFinishedImporting("modules/checkpoint/CheckpointActionCreators.tsx");

export function toggleMute() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "CHECKPOINT_TOGGLE_MUTE" });
  const obj2 = Tracking;
  const result = obj2.trackCheckpoint2026MuteToggled(CheckpointStore.isMuted);
}
export function setVolume(volume) {
  obj = DispatcherDefault;
  const obj2 = { type: "CHECKPOINT_SET_VOLUME", volume };
  return obj.dispatch(obj2);
}
export function selectCharacterTrait(trait, optionId) {
  obj = DispatcherDefault;
  const obj2 = { type: "CHECKPOINT_SELECT_CHARACTER_TRAIT", trait, optionId };
  return obj.dispatch(obj2);
}
export function saveCheckpointProgress(characterStage) {
  obj = DispatcherDefault;
  const obj2 = { type: "CHECKPOINT_SAVE_PROGRESS", stage: characterStage };
  return obj.dispatch(obj2);
}
export function fetchCheckpointData() {
  return obj(...arguments);
}
export function completeCheckpoint() {
  return obj(...arguments);
}
export function resetCheckpoint() {
  return obj(...arguments);
}
export function sendSidekickMessage() {
  return obj(...arguments);
}
export function sendCheckpointCard() {
  return obj(...arguments);
}
