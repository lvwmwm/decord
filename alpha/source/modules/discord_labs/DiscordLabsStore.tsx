// Module ID: 14966
// Function ID: 14967
// Name: DiscordLabsStore
// Dependencies: [1386, 559, 14967, 504, 572, 2]

// Module 14966 (DiscordLabsStore)
import get_initializedDefault from "get initialized" /* 504 */;
import BackoffDefault from "Backoff" /* 559 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import DiscordLabsDefinitions from "DiscordLabsDefinitions" /* 14967 */;
import UserStore from "UserStore" /* 1386 */;
import size from "module_2" /* 2 */;

let closure_10, closure_11;

function withoutLab(arg0, arg1) {
  let closure_0 = arg1;
  const entries = Object.entries(arg0);
  return fromEntries(entries.filter((item) => {
    let tmp;
    [tmp] = item;
    return tmp !== labId;
  }));
}
const FetchState = { NOT_FETCHED: 0, [0]: "NOT_FETCHED", FETCHING: 1, [1]: "FETCHING", FETCHED: 2, [2]: "FETCHED", ERROR: 3, [3]: "ERROR" };
let closure_4 = [];
let closure_6 = [];
let NOT_FETCHED = FetchState.NOT_FETCHED;
let c8 = null;
let c9 = null;
const authStore = {};
const unpackModuleId = {};
let tmp2 = new BackoffDefault(5000, 300000);
let closure_12 = tmp2;
let c13 = 0;
const Store = get_initializedDefault.Store;
class DiscordLabsStore extends Store {
  initialize() {
    this.waitFor(UserStore);
  }
  getLabIds() {
    return closure_4;
  }
  getFetchState() {
    return NOT_FETCHED;
  }
  getAvailableLabIds() {
    return closure_6;
  }
  getAvailableFetchState() {
    return NOT_FETCHED;
  }
  shouldFetchAvailableLabIds() {
    let tmp2 = NOT_FETCHED === obj.NOT_FETCHED;
    if (!tmp2) {
      let tmp4 = NOT_FETCHED === tmp.ERROR;
      if (tmp4) {
        const _Date = Date;
        tmp4 = Date.now() >= c13;
      }
      tmp2 = tmp4;
    }
    return tmp2;
  }
  isLabEnabled(arg0) {
    let tmp = closure_11[arg0];
    if (tmp == null) {
      const currentUser = UserStore.getCurrentUser();
      let enabled;
      if (currentUser != null) {
        const labs = currentUser.labs;
        if (labs != null) {
          if (labs[arg0] != null) {
            enabled = tmp5.enabled;
          }
        }
      }
      tmp = true === enabled;
    }
    return tmp;
  }
  isLabUpdating(arg0) {
    return null != closure_10[arg0];
  }
}
const prototype = DiscordLabsStore.prototype;
let obj2 = {
  DISCORD_LABS_FETCH_START: function handleFetchStart(requestId) {
    requestId = requestId.requestId;
    NOT_FETCHED = obj.FETCHING;
  },
  DISCORD_LABS_FETCH_SUCCESS: function handleFetchSuccess(labIds) {
    labIds = labIds.labIds;
    if (labIds.requestId !== c8) {
      return false;
    } else {
      closure_4 = labIds.filter(DiscordLabsDefinitions.isDefinedLab);
      NOT_FETCHED = obj.FETCHED;
    }
  },
  DISCORD_LABS_FETCH_FAILURE: function handleFetchFailure(requestId) {
    if (requestId.requestId !== c8) {
      return false;
    } else {
      NOT_FETCHED = obj.ERROR;
    }
  },
  DISCORD_LABS_AVAILABLE_FETCH_START: function handleAvailableFetchStart(requestId) {
    requestId = requestId.requestId;
    NOT_FETCHED = obj.FETCHING;
  },
  DISCORD_LABS_AVAILABLE_FETCH_SUCCESS: function handleAvailableFetchSuccess(labIds) {
    labIds = labIds.labIds;
    if (labIds.requestId !== c9) {
      return false;
    } else {
      closure_6 = labIds.filter(DiscordLabsDefinitions.isDefinedLab);
      NOT_FETCHED = obj.FETCHED;
      closure_12.succeed();
    }
  },
  DISCORD_LABS_AVAILABLE_FETCH_FAILURE: function handleAvailableFetchFailure(requestId) {
    if (requestId.requestId !== c9) {
      return false;
    } else {
      NOT_FETCHED = obj.ERROR;
      const _Date = Date;
      const timestamp = Date.now();
      c13 = timestamp + closure_12.fail();
    }
  },
  DISCORD_LABS_SET_ENABLED_START: function handleSetEnabledStart(labId) {
    let enabled;
    let requestId;
    labId = labId.labId;
    const obj = {};
    ({ requestId, enabled } = labId);
    const merged = Object.assign(closure_11);
    obj[labId] = enabled;
    closure_11 = obj;
    const obj2 = {};
    const merged1 = Object.assign(closure_10);
    obj2[labId] = requestId;
    closure_10 = obj2;
  },
  DISCORD_LABS_SET_ENABLED_SUCCESS: function handleSetEnabledSuccess(labId) {
    labId = labId.labId;
    if (closure_10[labId] !== labId.requestId) {
      return false;
    } else {
      const _Object = Object;
      const _Object2 = Object;
      const entries = Object.entries(closure_10);
      closure_10 = fromEntries(entries.filter((item) => {
        let tmp;
        [tmp] = item;
        return tmp !== labId;
      }));
      const f107300 = (arg0) => {
        currentUser = currentUser.getCurrentUser();
        let enabled;
        if (currentUser != null) {
          const labs = currentUser.labs;
          if (labs != null) {
            if (labs[arg0] != null) {
              enabled = tmp3.enabled;
            }
          }
        }
        return true === enabled === closure_11[arg0];
      };
      const _Object3 = Object;
      const keys = Object.keys(closure_11);
      const found = keys.filter((item) => {
        let tmp2 = null == closure_10[item];
        if (tmp2) {
          tmp2 = f107301(item);
        }
        return tmp2;
      });
      if (0 !== found.length) {
        closure_11 = found.reduce(withoutLab, closure_11);
      }
    }
  },
  DISCORD_LABS_SET_ENABLED_FAILURE: function handleSetEnabledFailure(labId) {
    labId = labId.labId;
    if (closure_10[labId] !== labId.requestId) {
      return false;
    } else {
      const tmp = closure_10;
      const _Object = Object;
      const _Object2 = Object;
      const entries = Object.entries(closure_10);
      closure_10 = fromEntries(entries.filter((item) => {
        let tmp;
        [tmp] = item;
        return tmp !== labId;
      }));
      const _Object3 = Object;
      const _Object4 = Object;
      const fromEntries2 = Object.fromEntries;
      const entries1 = Object.entries(closure_11);
      closure_11 = fromEntries2(entries1.filter((item) => {
        let tmp;
        [tmp] = item;
        return tmp !== labId;
      }));
    }
  },
  CURRENT_USER_UPDATE: function handleCurrentUserUpdate() {
    const f107300 = (arg0) => {
      currentUser = currentUser.getCurrentUser();
      let enabled;
      if (currentUser != null) {
        const labs = currentUser.labs;
        if (labs != null) {
          if (labs[arg0] != null) {
            enabled = tmp3.enabled;
          }
        }
      }
      return true === enabled === closure_11[arg0];
    };
    const keys = Object.keys(closure_11);
    const found = keys.filter((item) => {
      let tmp2 = null == closure_10[item];
      if (tmp2) {
        tmp2 = f107301(item);
      }
      return tmp2;
    });
    let flag = 0 !== found.length;
    if (flag) {
      closure_11 = found.reduce(withoutLab, closure_11);
      flag = true;
    }
    return flag;
  },
  CONNECTION_OPEN: function handleConnectionOpen() {
    const f107301 = () => true;
    const keys = Object.keys(closure_11);
    const found = keys.filter((item) => {
      let tmp2 = null == closure_10[item];
      if (tmp2) {
        tmp2 = f107301(item);
      }
      return tmp2;
    });
    let flag = 0 !== found.length;
    if (flag) {
      let tmp2 = closure_11;
      closure_11 = found.reduce(withoutLab, closure_11);
      flag = true;
    }
    return flag;
  },
  LOGOUT: function handleLogout() {
    closure_4 = [];
    closure_6 = [];
    NOT_FETCHED = obj.NOT_FETCHED;
    c8 = null;
    c9 = null;
    closure_10 = {};
    closure_11 = {};
    closure_12.succeed();
    c13 = 0;
  }
};
const discordLabsStore = new DiscordLabsStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/discord_labs/DiscordLabsStore.tsx");

export default discordLabsStore;
export { FetchState };
