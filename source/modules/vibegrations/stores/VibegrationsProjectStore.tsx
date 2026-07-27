// Module ID: 5653
// Function ID: 48308
// Name: _createForOfIteratorHelperLoose
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 5653 (_createForOfIteratorHelperLoose)
import dispatcher from "dispatcher";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _createForOfIteratorHelperLoose(iterable) {
  let dispatcher = iterable;
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
      dispatcher = tmp;
    }
    let c1 = 0;
    return () => {
      if (set >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        set = tmp3 + 1;
        obj.value = length[+set];
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
function _isNativeReflectConstruct() {
  let dispatcher = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return dispatcher;
  }
  const result = _isNativeReflectConstruct();
}
function handleProjectUpsert(project) {
  project = project.project;
  const result = map.set(project.id, project);
}
const map = new Map();
let c6 = null;
let closure_7 = [];
const map1 = new Map();
let tmp4 = ((Store) => {
  class VibegrationsProjectStore {
    constructor() {
      self = this;
      tmp = VibegrationsProjectStore(this, VibegrationsProjectStore);
      obj = outer1_3(VibegrationsProjectStore);
      tmp2 = outer1_2;
      if (outer1_11()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(VibegrationsProjectStore, Store);
  let obj = {
    key: "getAllProjects",
    value() {
      return Array.from(outer1_5.values());
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getProject",
    value(arg0) {
      const value = outer1_5.get(arg0);
      let tmp2 = null;
      if (null != value) {
        tmp2 = value;
      }
      return tmp2;
    }
  };
  items[1] = obj;
  obj = {
    key: "getLogs",
    value(arg0) {
      let value = outer1_8.get(arg0);
      if (null == value) {
        value = outer1_7;
      }
      return value;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getProjectsFetchState",
    value() {
      return outer1_6;
    }
  };
  return callback(VibegrationsProjectStore, items);
})(require("initialize").Store);
tmp4 = new tmp4(require("dispatcher"), {
  LOGOUT: function handleLogout() {
    if (0 === map.size) {
      if (0 === map1.size) {
        if (null == c6) {
          return false;
        }
      }
    }
    map.clear();
    map1.clear();
    c6 = null;
  },
  VIBEGRATIONS_PROJECTS_FETCH_START: function handleProjectsFetchStart() {
    let closure_6 = { type: "loading" };
  },
  VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function handleProjectsFetchSuccess(projects) {
    let done;
    map.clear();
    const tmp2 = _createForOfIteratorHelperLoose(projects.projects);
    let iter = tmp2();
    if (!iter.done) {
      do {
        let value = iter.value;
        let tmp3 = map;
        let result = map.set(value.id, value);
        let iter2 = tmp2();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
    const obj = { type: "success", fetchedAt: Date.now() };
  },
  VIBEGRATIONS_PROJECTS_FETCH_FAIL: function handleProjectsFetchFail() {
    const obj = { type: "error", fetchedAt: Date.now() };
  },
  VIBEGRATIONS_PROJECT_CREATE_SUCCESS: handleProjectUpsert,
  VIBEGRATIONS_PROJECT_UPDATE_SUCCESS: handleProjectUpsert,
  VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function handleProjectDeleteSuccess(projectId) {
    projectId = projectId.projectId;
    map.delete(projectId);
    map1.delete(projectId);
  },
  VIBEGRATIONS_LOG_APPEND: function handleLogAppend(arg0) {
    let log;
    let projectId;
    ({ projectId, log } = arg0);
    const value = map1.get(projectId);
    if (null == value) {
      const items = [log];
      let combined = items;
    } else {
      combined = value.concat(log);
    }
    let substr = combined;
    if (combined.length > 500) {
      substr = combined.slice(-500);
    }
    const result = map1.set(projectId, substr);
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/vibegrations/stores/VibegrationsProjectStore.tsx");

export default tmp4;
