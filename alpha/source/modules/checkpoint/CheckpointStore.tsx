// Module ID: 12893
// Function ID: 12894
// Name: CheckpointStore
// Dependencies: [504, 584, 2]

// Module 12893 (CheckpointStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let obj = { INIT: 0, [0]: "INIT", FETCHING: 1, [1]: "FETCHING", SUCCESS: 2, [2]: "SUCCESS", ERROR: 3, [3]: "ERROR" };
const obj2 = { isMuted: false };
let closure_2 = {};
const obj3 = {};
let merged = Object.assign(obj2);
obj = obj3;
let c4 = null;
let c5 = null;
let c6 = null;
let INIT = obj.INIT;
let c8 = null;
const PersistedStore = get_initializedDefault.PersistedStore;
class CheckpointStore extends PersistedStore {
  getState() {
    return obj;
  }
  initialize(arg0) {
    if (null != arg0) {
      obj = {};
      const merged = Object.assign(obj);
      const merged1 = Object.assign(arg0);
    }
  }
}
const prototype = CheckpointStore.prototype;
Object.defineProperty(prototype, "isMuted", {
  get: function isMuted() {
    return obj.isMuted;
  },
  set: undefined
});
Object.defineProperty(prototype, "stats", {
  get: function stats() {
    return c4;
  },
  set: undefined
});
Object.defineProperty(prototype, "globalStats", {
  get: function globalStats() {
    return c5;
  },
  set: undefined
});
Object.defineProperty(prototype, "character", {
  get: function character() {
    return c6;
  },
  set: undefined
});
Object.defineProperty(prototype, "fetchState", {
  get: function fetchState() {
    return INIT;
  },
  set: undefined
});
Object.defineProperty(prototype, "selectedCharacterTraits", {
  get: function selectedCharacterTraits() {
    let tmp = c8;
    if (c8 == null) {
      tmp = c6;
    }
    if (tmp == null) {
      tmp = closure_2;
    }
    return tmp;
  },
  set: undefined
});
CheckpointStore.displayName = "Checkpoint2026Store";
CheckpointStore.persistKey = "Checkpoint2026Store";
const obj4 = {
  CHECKPOINT_TOGGLE_MUTE: function handleToggleMute() {
    obj.isMuted = !obj.isMuted;
  },
  CHECKPOINT_FETCH_START: function handleFetchStart() {
    INIT = obj.FETCHING;
  },
  CHECKPOINT_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    ({ stats: c4, globalStats: c5, character: c6 } = arg0);
    INIT = obj.SUCCESS;
  },
  CHECKPOINT_FETCH_FAILED: function handleFetchFailed() {
    INIT = obj.ERROR;
  },
  CHECKPOINT_COMPLETE_SUCCESS: function handleCompleteSuccess(character) {
    character = character.character;
    c8 = null;
  },
  CHECKPOINT_RESET_SUCCESS: function handleResetSuccess() {
    c6 = null;
    c8 = null;
  },
  CHECKPOINT_SELECT_CHARACTER_TRAIT: function handleSelectCharacterTrait(trait) {
    let tmp = c8;
    if (c8 == null) {
      tmp = c6;
    }
    if (tmp == null) {
      tmp = closure_2;
    }
    obj = {};
    const merged = Object.assign(tmp);
    obj[trait.trait] = trait.optionId;
    c8 = obj;
  },
  CHECKPOINT_RESET_EDITED_CHARACTER: function handleResetEditedCharacter() {
    c8 = null;
  },
  LOGOUT: function handleLogout() {
    obj = {};
    const merged = Object.assign(obj2);
    c4 = null;
    c5 = null;
    c6 = null;
    INIT = obj.INIT;
    c8 = null;
  }
};
const checkpointStore = new CheckpointStore(DispatcherDefault, obj4);
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointStore.tsx");

export default checkpointStore;
export const CheckpointFetchStates = obj;
