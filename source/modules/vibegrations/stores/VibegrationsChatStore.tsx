// Module ID: 15716
// Function ID: 121018
// Name: _createForOfIteratorHelperLoose
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 15716 (_createForOfIteratorHelperLoose)
import dispatcher from "dispatcher";
import closure_1 from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import set from "_possibleConstructorReturn";

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
function _isNativeReflectConstruct() {
  let dispatcher = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return dispatcher;
  }
  const result = _isNativeReflectConstruct();
}
function turnSettled(content) {
  let someResult = "" !== content.content;
  if (!someResult) {
    someResult = null != content.proposal;
  }
  if (!someResult) {
    const steps = content.steps;
    someResult = steps.some((kind) => outer1_5.has(kind.kind));
  }
  return someResult;
}
function newMessage(assistant, content, ts) {
  const obj = { id: `m${tmp}`, role: assistant, content, steps: [] };
  const sum = c13 + 1;
  c13 = sum;
  if (null != ts) {
    const _Date2 = Date;
    let parsed = Date.parse(ts);
  } else {
    const _Date = Date;
    parsed = Date.now();
  }
  obj.created_at = parsed;
  return obj;
}
function newMessageFromHistory(role) {
  const tmp = newMessage(role.role, role.content, role.ts);
  if (null != role.kind) {
    tmp.kind = role.kind;
  }
  if (null != role.proposal) {
    tmp.proposal = role.proposal;
  }
  return tmp;
}
function patchLastAssistant(projectId, arg1) {
  const value = map.get(projectId);
  if (null != value) {
    if (0 !== value.length) {
      if ("assistant" === value[value.length - 1].role) {
        const items = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(value.slice(0, -1), 0);
        items[arraySpreadResult] = arg1(tmp);
        const sum = arraySpreadResult + 1;
        const result = map.set(projectId, items);
      }
    }
  }
}
function computeThinking(projectId) {
  const value = map.get(projectId);
  if (null != value) {
    if (0 !== value.length) {
      let tmp2 = "assistant" === tmp.role;
      if (tmp2) {
        tmp2 = !turnSettled(tmp);
      }
      return tmp2;
    }
  }
  return false;
}
function recordThinkingTransition(projectId) {
  const value = map2.get(projectId);
  const tmp3 = computeThinking(projectId);
  if (tmp2 !== tmp3) {
    const result = map2.set(projectId, tmp3);
    if (tmp3) {
      obj.delete(projectId);
    } else {
      const _Date = Date;
      const result1 = obj.set(projectId, Date.now());
    }
  }
}
function purgeProject(projectId) {
  let deleteResult = map.delete(projectId);
  const deleteResult1 = map1.delete(projectId);
  const deleteResult2 = map2.delete(projectId);
  if (!deleteResult) {
    deleteResult = deleteResult1;
  }
  if (!deleteResult) {
    deleteResult = deleteResult2;
  }
  if (!deleteResult) {
    deleteResult = deleteResult3;
  }
  return deleteResult;
}
let set = new Set(["preview_ready", "built", "error", "build_error", "healthcheck_failed"]);
const map = new Map();
const map1 = new Map();
const map2 = new Map();
const map3 = new Map();
let c10 = 0;
let c11 = null;
let closure_12 = [];
let c13 = 0;
let tmp7 = ((Store) => {
  class VibegrationsChatStore {
    constructor() {
      self = this;
      tmp = VibegrationsChatStore(this, VibegrationsChatStore);
      obj = outer1_3(VibegrationsChatStore);
      tmp2 = outer1_2;
      if (outer1_16()) {
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
  callback2(VibegrationsChatStore, Store);
  let obj = {
    key: "getMessages",
    value(arg0) {
      let value = outer1_6.get(arg0);
      if (null == value) {
        value = outer1_12;
      }
      return value;
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "isThinking",
    value(arg0) {
      return outer1_21(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "getFinishedAt",
    value(arg0) {
      let tmp = null;
      if (!outer1_21(arg0)) {
        const value = outer1_7.get(arg0);
        let tmp4 = null;
        if (null != value) {
          tmp4 = value;
        }
        tmp = tmp4;
      }
      return tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getProjectUsage",
    value(arg0) {
      const value = outer1_9.get(arg0);
      let tmp2 = null;
      if (null != value) {
        tmp2 = value;
      }
      return tmp2;
    }
  };
  items[4] = {
    key: "getSidebarWidth",
    value() {
      return outer1_10;
    }
  };
  items[5] = {
    key: "getBuilderPreviewApplicationId",
    value() {
      return outer1_11;
    }
  };
  items[6] = {
    key: "isAnyThinking",
    value() {
      const self = this;
      const tmp = outer1_14(outer1_6.keys());
      let iter = tmp();
      if (!iter.done) {
        while (!self.isThinking(iter.value)) {
          let iter2 = tmp();
          iter = iter2;
        }
        return true;
      }
      return false;
    }
  };
  return callback(VibegrationsChatStore, items);
})(require("initialize").Store);
tmp7 = new tmp7(require("dispatcher"), {
  LOGOUT: function handleLogout() {
    if (0 === map.size) {
      if (0 === map1.size) {
        if (0 === map2.size) {
          if (0 === map3.size) {
            if (0 === c10) {
              if (null == c11) {
                return false;
              }
            }
          }
        }
      }
    }
    map.clear();
    map1.clear();
    map2.clear();
    map3.clear();
    c10 = 0;
    c11 = null;
  },
  VIBEGRATIONS_CHAT_HISTORY_SET: function handleChatHistorySet(arg0) {
    let entries;
    let projectId;
    ({ projectId, entries } = arg0);
    const result = map.set(projectId, entries.map(newMessageFromHistory));
    recordThinkingTransition(projectId);
  },
  VIBEGRATIONS_CHAT_MESSAGE_APPEND: function handleChatMessageAppend(projectId) {
    projectId = projectId.projectId;
    let items = map.get(projectId);
    if (null == items) {
      items = [];
    }
    items = [...items, newMessage("user", projectId.content), newMessage("assistant", "")];
    const result = map.set(projectId, items);
    recordThinkingTransition(projectId);
  },
  VIBEGRATIONS_CHAT_STEP_APPEND: function handleChatStepAppend(arg0) {
    let dispatcher;
    let projectId;
    ({ projectId, step: dispatcher } = arg0);
    patchLastAssistant(projectId, (steps) => {
      const obj = {};
      const merged = Object.assign(steps);
      const items = [...steps.steps, dispatcher];
      obj["steps"] = items;
      return obj;
    });
    recordThinkingTransition(projectId);
  },
  VIBEGRATIONS_CHAT_USAGE_SET: function handleChatUsageSet(projectId) {
    const result = map3.set(projectId.projectId, projectId.project);
  },
  VIBEGRATIONS_CHAT_SIDEBAR_WIDTH_SET: function handleChatSidebarWidthSet(width) {
    width = width.width;
    if (width === width) {
      return false;
    }
  },
  VIBEGRATIONS_BUILDER_PREVIEW_APPLICATION_SET: function handleBuilderPreviewApplicationSet(applicationId) {
    applicationId = applicationId.applicationId;
    if (applicationId === applicationId) {
      return false;
    }
  },
  VIBEGRATIONS_CHAT_TURN_PATCH: function handleChatTurnPatch(arg0) {
    let dispatcher;
    let projectId;
    ({ projectId, patch: dispatcher } = arg0);
    patchLastAssistant(projectId, (arg0) => {
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(dispatcher);
      return {};
    });
    recordThinkingTransition(projectId);
  },
  VIBEGRATIONS_CHAT_CONN_STATE: function handleChatConnState(arg0) {
    let connState;
    let projectId;
    ({ projectId, connState } = arg0);
    if ("closed" !== connState) {
      if ("failed" !== connState) {
        return false;
      }
    }
    const value = map.get(projectId);
    if (null != value) {
      if (value.some((role) => {
        let tmp = "assistant" === role.role;
        if (tmp) {
          tmp = !outer1_17(role);
        }
        return tmp;
      })) {
        const result = map.set(projectId, value.map((role) => {
          let tmp = role;
          if ("assistant" === role.role) {
            tmp = role;
            if (!outer1_17(role)) {
              const obj = {};
              const merged = Object.assign(role);
              const items = [];
              const arraySpreadResult = HermesBuiltin.arraySpread(role.steps, 0);
              items[arraySpreadResult] = { type: "step", kind: "error", message: "Connection lost" };
              const sum = arraySpreadResult + 1;
              obj["steps"] = items;
              tmp = obj;
            }
          }
          return tmp;
        }));
        recordThinkingTransition(projectId);
      }
    }
    return false;
  },
  VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function handleProjectDeleteSuccess(projectId) {
    if (!purgeProject(projectId.projectId)) {
      return false;
    }
  },
  VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function handleProjectsFetchSuccess(projects) {
    let iter3;
    projects = projects.projects;
    const items = [...map.keys(), ...map1.keys(), ...map2.keys(), ...map3.keys()];
    const set = new Set(projects.map((id) => id.id));
    const tmp2 = _createForOfIteratorHelperLoose(new Set(items));
    const iter = tmp2();
    let iter2 = iter;
    let flag = false;
    let flag2 = false;
    if (!iter.done) {
      do {
        let value = iter2.value;
        let tmp3 = !set.has(value);
        if (tmp3) {
          let tmp4 = purgeProject;
          tmp3 = purgeProject(value);
        }
        if (tmp3) {
          flag = true;
        }
        iter3 = tmp2();
        iter2 = iter3;
        flag2 = flag;
      } while (!iter3.done);
    }
    return flag2 ? undefined : false;
  }
});
let result = set.fileFinishedImporting("modules/vibegrations/stores/VibegrationsChatStore.tsx");

export default tmp7;
export { turnSettled };
