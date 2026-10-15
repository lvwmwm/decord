// Module ID: 10896
// Function ID: 10897
// Name: ConjureDebugLogStore
// Dependencies: [504, 10897, 584, 2]

// Module 10896 (ConjureDebugLogStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import ConjureSequencedBuffer from "ConjureSequencedBuffer" /* 10897 */;
import size from "module_2" /* 2 */;

function logSeq(log) {
  return log.log.seq;
}
function handleLogAppend(arg0) {
  let log;
  let projectId;
  ({ projectId, log } = arg0);
  let str = map.get(projectId);
  const obj = map;
  if (null == str) {
    const self = this;
    const self2 = this;
    const conjureSequencedBuffer = new ConjureSequencedBuffer.ConjureSequencedBuffer(tmp);
    const result = obj.set(projectId, conjureSequencedBuffer);
    str = conjureSequencedBuffer;
  }
  if (null != log.seq) {
    if (-1 !== str.indexOfSeq(log.seq)) {
      return false;
    }
  }
  const obj2 = { key: sum, log };
  sum = sum + 1;
  str.insert(obj2);
  const trimmed = str.trim(500);
}
function handleHistoryLoadSettle(status) {
  let num;
  let projectId;
  let scope;
  ({ projectId, scope } = status);
  if ("failed" !== status.status) {
    const obj2 = { status: "loaded", truncated: tmp2, count: tmp };
    let value = map2.get(projectId);
    const obj4 = map2;
    if (null == value) {
      const _Map2 = Map;
      const self3 = this;
      const self4 = this;
      map = new Map();
      const result = obj4.set(projectId, map);
      value = map;
    }
    const result1 = value.set(scope, obj2);
  } else {
    const value4 = map2.get(projectId);
    let value5;
    if (value4 != null) {
      value5 = value4.get(scope);
    }
    let flag;
    if (value5 != null) {
      flag = value5.truncated;
    }
    if (flag == null) {
      flag = false;
    }
    const obj = { status: "failed", truncated: flag, count: num };
    num = undefined;
    if (value5 != null) {
      num = value5.count;
    }
    if (num == null) {
      num = 0;
    }
    let value6 = obj6.get(projectId);
    if (null == value6) {
      const _Map = Map;
      const self = this;
      const self2 = this;
      map1 = new Map();
      const result2 = obj6.set(projectId, map1);
      value6 = map1;
    }
    const result3 = value6.set(scope, obj);
  }
}
let closure_2 = [];
let map = new Map();
let sum = 0;
let map1 = new Map();
let closure_6 = { status: "idle", truncated: false, count: 0 };
const map2 = new Map();
const Store = get_initializedDefault.Store;
class ConjureDebugLogStore extends Store {
  getLogs(projectId) {
    const value = map.get(projectId);
    let snapshotResult;
    if (value != null) {
      snapshotResult = value.snapshot();
    }
    if (snapshotResult == null) {
      snapshotResult = closure_2;
    }
    return snapshotResult;
  }
  getUnreadLogErrorCount(arg0) {
    const value = map.get(arg0);
    if (null == value) {
      return 0;
    } else {
      let num = map1.get(arg0);
      if (num == null) {
        num = 0;
      }
      let num2 = 0;
      const values = value.values();
      const iter = values[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp6 = nextResult;
        let tmp7 = nextResult.key > num;
        if (tmp7) {
          tmp7 = "error" === tmp6.log.level;
        }
        if (tmp7) {
          tmp7 = true !== tmp6.log.historical;
        }
        if (tmp7) {
          num2 = num2 + 1;
        }
        continue;
      }
      return num2;
    }
  }
  getHistoryState(arg0, arg1) {
    const value = map2.get(arg0);
    let value2;
    if (value != null) {
      value2 = value.get(arg1);
    }
    if (value2 == null) {
      value2 = closure_6;
    }
    return value2;
  }
}
const prototype = ConjureDebugLogStore.prototype;
let obj = {
  LOGOUT: function handleLogout() {
    const obj = map;
    if (0 === map.size) {
      if (0 === map1.size) {
        if (0 === map2.size) {
          return false;
        }
      }
    }
    obj.clear();
    map1.clear();
    map2.clear();
  },
  CONJURE_HISTORY_LOAD_SETTLE: handleHistoryLoadSettle,
  CONJURE_DEBUG_BACKLOG: function handleDebugBacklog(arg0) {
    let backlog;
    let projectId;
    ({ projectId, backlog } = arg0);
    const logs = backlog.logs;
    for (const item10008 of logs) {
      let obj = { type: "CONJURE_LOG_APPEND", projectId, log: item10008 };
      let tmp2 = handleLogAppend(obj);
      continue;
    }
    const iter = backlog.states[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let obj3 = { type: "CONJURE_HISTORY_LOAD_SETTLE", projectId, scope: null, status: null, count: null, truncated: true === nextResult.truncated };
      ({ scope: obj2.scope, status: obj2.status, count: obj2.count } = nextResult);
      let tmp5 = handleHistoryLoadSettle(obj3);
      continue;
    }
  },
  CONJURE_LOG_APPEND: handleLogAppend,
  CONJURE_LOGS_SEEN: function handleLogsSeen(projectId) {
    projectId = projectId.projectId;
    let num = 0;
    const value = map.get(projectId);
    let values;
    if (value != null) {
      values = value.values();
    }
    if (values == null) {
      values = closure_2;
    }
    const tmp2 = values[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let _Math = Math;
      num = Math.max(num, tmp3.key);
      continue;
    }
    let num2 = map1.get(projectId);
    const obj2 = map1;
    if (num2 == null) {
      num2 = 0;
    }
    if (num2 >= num) {
      return false;
    } else {
      const result = obj2.set(projectId, num);
    }
  },
  CONJURE_PROJECT_DELETE_SUCCESS: function handleProjectDeleteSuccess(projectId) {
    projectId = projectId.projectId;
    map.delete(projectId);
    map1.delete(projectId);
    map2.delete(projectId);
  }
};
const conjureDebugLogStore = new ConjureDebugLogStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/conjure/debug/ConjureDebugLogStore.tsx");

export default conjureDebugLogStore;
