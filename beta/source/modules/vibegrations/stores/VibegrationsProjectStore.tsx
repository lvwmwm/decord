// Module ID: 8492
// Function ID: 8493
// Name: VibegrationsProjectStore
// Dependencies: [32, 1378, 5372, 504, 585, 2]
// Exports: canPublishProject, canRemixProject

// Module 8492 (VibegrationsProjectStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 585 */;
import VibegrationsTypes from "VibegrationsTypes" /* 5372 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import UserStore from "UserStore" /* 1378 */;
import size from "module_2" /* 2 */;

function isProjectOwner(item10010) {
  const owner_user_id = item10010.owner_user_id;
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  return owner_user_id === id;
}
function handleProjectUpsert(project) {
  project = project.project;
  const result = map.set(project.id, project);
}
function pickNumbers(value7, arg1) {
  let tmp6;
  let tmp7;
  obj = {};
  const entries = Object.entries(arg1);
  const tmp2 = entries[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    if (tmp7 == null) {
      let tmp8;
      if (value7 != null) {
        tmp8 = value7[tmp6];
      }
      tmp7 = tmp8;
    }
    if (typeof tmp7 === "number") {
      obj[tmp6] = tmp10;
    }
    continue;
  }
  return obj;
}
let map = new Map();
let map1 = new Map();
const map2 = new Map();
let set = new Set();
let obj = null;
const set1 = new Set();
const map3 = new Map();
let closure_12 = [];
const map4 = new Map();
let sum = 0;
const map5 = new Map();
const map6 = new Map();
let closure_17 = [];
const map7 = new Map();
const map8 = new Map();
let closure_20 = { status: "idle", truncated: false, count: 0 };
const map9 = new Map();
const Store = get_initializedDefault.Store;
class VibegrationsProjectStore extends Store {
  initialize() {
    this.waitFor(UserStore);
  }
  getOwnedProjects() {
    const arr = Array.from(map.values());
    return arr.filter(isProjectOwner);
  }
  getProject(arg0) {
    let value = map.get(arg0);
    if (value == null) {
      value = null;
    }
    return value;
  }
  findProjectByApplicationId(applicationId) {
    const values = map.values();
    for (const item10009 of values) {
      obj.return();
      return item10009;
    }
    return null;
  }
  getSharedProjects(guildId) {
    const items = [];
    const values = map.values();
    for (const item10010 of values) {
      let tmp2 = item10010;
      let tmp4 = isProjectOwner(item10010);
      if (!tmp4) {
        tmp4 = tmp2.guild_id !== guildId;
      }
      if (!tmp4) {
        let arr = items.push(tmp2);
      }
      continue;
    }
    return items;
  }
  getIntegrationStatus(projectId) {
    let value = map1.get(projectId);
    if (value == null) {
      value = null;
    }
    return value;
  }
  isProjectDeleting(id) {
    return set.has(id);
  }
  getSelectedProjectId(guildId) {
    let value = map2.get(guildId);
    if (value == null) {
      value = null;
    }
    return value;
  }
  getLogs(projectId) {
    let value = map4.get(projectId);
    if (value == null) {
      value = closure_12;
    }
    return value;
  }
  getUnreadLogErrorCount(arg0) {
    const value = map4.get(arg0);
    if (null == value) {
      return 0;
    } else {
      let num = map6.get(arg0);
      if (num == null) {
        num = 0;
      }
      let num2 = 0;
      const iter = value[Symbol.iterator]();
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
  getTrace(projectId) {
    let value = map7.get(projectId);
    if (value == null) {
      value = closure_17;
    }
    return value;
  }
  getHistoryState(arg0, arg1) {
    const value = map9.get(arg0);
    let value2;
    if (value != null) {
      value2 = value.get(arg1);
    }
    if (value2 == null) {
      value2 = closure_20;
    }
    return value2;
  }
  getProjectsFetchState() {
    return obj;
  }
  hasFetchedGuildProjects(arg0) {
    return set1.has(arg0);
  }
  getGuildProjectsFetchState(guildId) {
    let str = map3.get(guildId);
    if (str == null) {
      str = "unattempted";
    }
    return str;
  }
  isVibegrationsProjectApplication(applicationId) {
    let tmp = null != applicationId;
    if (tmp) {
      const self = this;
      tmp = null != this.findProjectByApplicationId(applicationId);
    }
    return tmp;
  }
}
const prototype = VibegrationsProjectStore.prototype;
const map10 = new Map();
obj = {
  LOGOUT: function handleLogout() {
    obj = map;
    if (0 === map.size) {
      if (0 === map1.size) {
        if (0 === map2.size) {
          if (0 === set.size) {
            if (0 === map4.size) {
              if (0 === set1.size) {
                if (0 === map7.size) {
                  if (0 === map9.size) {
                    if (0 === map8.size) {
                      if (null == obj) {
                        return false;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    obj.clear();
    map1.clear();
    map2.clear();
    set.clear();
    map4.clear();
    set1.clear();
    map3.clear();
    map5.clear();
    map6.clear();
    map7.clear();
    map9.clear();
    map8.clear();
    obj = null;
    map10.clear();
  },
  VIBEGRATIONS_PROJECTS_FETCH_START: function handleProjectsFetchStart(guildId) {
    guildId = guildId.guildId;
    if (null != guildId) {
      const result = map3.set(guildId, "loading");
    }
  },
  VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function handleProjectsFetchSuccess(arg0) {
    let guildId;
    let projects;
    let tmp3;
    let tmp6;
    let tmp8;
    function pruneProjectScopedState() {
      const keys = set2.keys();
      for (const item10009 of keys) {
        let tmp2 = item10009;
        if (!set.has(item10009)) {
          let deleteResult = set2.delete(tmp2);
        }
        continue;
      }
      const tmp8 = set3[Symbol.iterator]();
      while (tmp8 !== undefined) {
        let tmp11 = _slicedToArray(tmp9, 2);
        let first = tmp11[0];
        if (!set.has(tmp11[1])) {
          let deleteResult1 = set3.delete(first);
        }
        continue;
      }
    }
    ({ projects, guildId } = arg0);
    set = new Set(projects.map((id) => id.id));
    let tmp2 = map[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let tmp4 = _slicedToArray;
      let tmp5 = _slicedToArray(tmp3, 2);
      [tmp6, tmp8] = tmp5;
      let tmp7 = tmp6;
      if (!set.has(tmp6)) {
        let tmp9 = isProjectOwner;
        let tmp10 = tmp8;
        let tmp11 = isProjectOwner(tmp8);
        if (!tmp11) {
          let tmp12 = null != guildId;
          if (tmp12) {
            let tmp13 = tmp8;
            tmp12 = tmp8.guild_id === guildId;
          }
          tmp11 = tmp12;
        }
        if (tmp11) {
          let tmp14 = map;
          let tmp15 = tmp6;
          let deleteResult = map.delete(tmp7);
        }
      }
      continue;
    }
    for (const item10044 of projects) {
      let result = map.set(item10044.id, item10044);
      continue;
    }
    if (null != guildId) {
      set1.add(guildId);
      const result1 = map3.set(guildId, "success");
    }
    pruneProjectScopedState();
    ({ type: "success", fetchedAt: Date.now() });
  },
  VIBEGRATIONS_PROJECTS_FETCH_FAIL: function handleProjectsFetchFail(guildId) {
    guildId = guildId.guildId;
    if (null != guildId) {
      const result = map3.set(guildId, "error");
    }
    ({ type: "error", fetchedAt: Date.now() });
  },
  VIBEGRATIONS_PROJECT_CREATE_SUCCESS: handleProjectUpsert,
  VIBEGRATIONS_PROJECT_UPDATE_SUCCESS: handleProjectUpsert,
  VIBEGRATIONS_PROJECT_INTEGRATION_STATUS_UPDATE: function handleProjectIntegrationStatusUpdate(projectId) {
    const result = map1.set(projectId.projectId, projectId.integrationStatus);
  },
  VIBEGRATIONS_PROJECT_DELETE_START: function handleProjectDeleteStart(projectId) {
    set.add(projectId.projectId);
  },
  VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function handleProjectDeleteSuccess(projectId) {
    projectId = projectId.projectId;
    set.delete(projectId);
    map.delete(projectId);
    map1.delete(projectId);
    map4.delete(projectId);
    map5.delete(projectId);
    map6.delete(projectId);
    map7.delete(projectId);
    map9.delete(projectId);
    map8.delete(projectId);
    const tmp11 = map2[Symbol.iterator]();
    while (tmp11 !== undefined) {
      let tmp14 = _slicedToArray(tmp12, 2);
      let first = tmp14[0];
      if (tmp14[1] === projectId) {
        let deleteResult9 = map2.delete(first);
      }
      continue;
    }
  },
  VIBEGRATIONS_PROJECT_DELETE_FAIL: function handleProjectDeleteFail(projectId) {
    return set.delete(projectId.projectId);
  },
  VIBEGRATIONS_PROJECT_SELECT: function handleProjectSelect(arg0) {
    let guildId;
    let projectId;
    ({ guildId, projectId } = arg0);
    let value = map2.get(guildId);
    if (value == null) {
      value = null;
    }
    if (value === projectId) {
      return false;
    } else if (null == projectId) {
      map2.delete(guildId);
    } else {
      const result = obj.set(guildId, projectId);
    }
  },
  VIBEGRATIONS_TRACE_REPLAY_STARTING: function handleTraceReplayStarting(projectId) {
    let _Set1;
    projectId = projectId.projectId;
    const _Set = Set;
    set = map10.set;
    let value = map7.get(projectId);
    if (value == null) {
      value = closure_17;
    }
    obj = { snapshot: _Set1, touched: new Set() };
    _Set1 = new _Set(value.map((kind) => "" + kind.kind + ":" + kind.id));
    new Set();
    const result = set(projectId, obj);
  },
  VIBEGRATIONS_HISTORY_LOAD_SETTLE: function handleHistoryLoadSettle(arg0) {
    let count;
    let num;
    let projectId;
    let scope;
    let status;
    let truncated;
    ({ projectId, scope } = arg0);
    let c0;
    let tmp = "trace" === scope;
    let value;
    ({ status, count, truncated } = arg0);
    if (tmp) {
      value = map10.get(projectId);
    }
    c0 = value;
    if (tmp) {
      map10.delete(projectId);
    }
    if ("failed" !== status) {
      if (null != value) {
        const value6 = map7.get(projectId);
        const obj3 = map7;
        if (null != value6) {
          const result = obj3.set(projectId, value6.filter((kind) => {
            const snapshot = _undefined.snapshot;
            const hasItem = snapshot.has("" + kind.kind + ":" + kind.id);
            let hasItem1 = !hasItem;
            const tmp = _undefined;
            if (hasItem) {
              const touched = tmp.touched;
              const _HermesInternal = HermesInternal;
              hasItem1 = touched.has("" + kind.kind + ":" + kind.id);
            }
            return hasItem1;
          }));
        }
      }
      const obj2 = { status: "loaded", truncated, count };
      let value7 = map9.get(projectId);
      const obj5 = map9;
      if (null == value7) {
        const _Map2 = Map;
        const self3 = this;
        const self4 = this;
        map = new Map();
        const result1 = obj5.set(projectId, map);
        value7 = map;
      }
      const result2 = value7.set(scope, obj2);
    } else {
      const value8 = map9.get(projectId);
      let value9;
      if (value8 != null) {
        value9 = value8.get(scope);
      }
      let flag;
      if (value9 != null) {
        flag = value9.truncated;
      }
      if (flag == null) {
        flag = false;
      }
      obj = { status: "failed", truncated: flag, count: num };
      num = undefined;
      if (value9 != null) {
        num = value9.count;
      }
      if (num == null) {
        num = 0;
      }
      let value10 = obj7.get(projectId);
      if (null == value10) {
        const _Map = Map;
        const self = this;
        const self2 = this;
        map1 = new Map();
        const result3 = obj7.set(projectId, map1);
        value10 = map1;
      }
      const result4 = value10.set(scope, obj);
    }
  },
  VIBEGRATIONS_LOG_APPEND: function handleLogAppend(arg0) {
    let combined;
    let log;
    let projectId;
    ({ projectId, log } = arg0);
    const seq = log.seq;
    if (null != seq) {
      const value = map5.get(projectId);
      obj = map5;
      if (null != value) {
        if (seq <= value) {
          return false;
        }
      }
      const result = obj.set(projectId, seq);
    }
    const obj2 = { key: sum, log };
    sum = sum + 1;
    const value2 = map4.get(projectId);
    const tmp4 = map4;
    if (null == value2) {
      const items = [obj2];
      combined = items;
    } else {
      combined = value2.concat(obj2);
    }
    let substr = combined;
    set = tmp4.set;
    if (combined.length > 500) {
      substr = combined.slice(-500);
    }
    const result1 = set(projectId, substr);
  },
  VIBEGRATIONS_LOGS_SEEN: function handleLogsSeen(projectId) {
    projectId = projectId.projectId;
    const value = map4.get(projectId);
    let num = 0;
    if (null != value) {
      num = 0;
      if (0 !== value.length) {
        num = value[value.length - 1].key;
      }
    }
    let num3 = map6.get(projectId);
    obj = map6;
    if (num3 == null) {
      num3 = 0;
    }
    if (num3 >= num) {
      return false;
    } else {
      const result = obj.set(projectId, num);
    }
  },
  VIBEGRATIONS_TOOL_CALL_APPEND: function handleToolCallAppend(arg0) {
    let projectId;
    let startedAt;
    let toolCall;
    ({ projectId, toolCall } = arg0);
    const id = toolCall.id;
    const value = map10.get(projectId);
    if (value != null) {
      const touched = value.touched;
      const _HermesInternal = HermesInternal;
      touched.add("" + "tool" + ":" + id);
    }
    const entry_id = toolCall.entry_id;
    let tmp5 = null != entry_id;
    if (tmp5) {
      const value5 = map8.get(projectId);
      let value6;
      if (value5 != null) {
        value6 = value5.get(entry_id);
      }
      tmp5 = value6 === tmp4;
    }
    if (tmp5) {
      return false;
    } else {
      let obj4;
      let obj6;
      let obj8;
      let obj10;
      let obj12;
      let obj14;
      let obj16;
      let obj18;
      let obj20;
      let obj22;
      let obj24;
      let value7 = map7.get(projectId);
      if (value7 == null) {
        value7 = closure_17;
      }
      const tool = "tool";
      const id2 = toolCall.id;
      const findIndexResult = value7.findIndex((kind) => kind.kind === model && kind.id === id2);
      let tmp11 = null;
      if (-1 !== findIndexResult) {
        tmp11 = value7[findIndexResult];
      }
      let summary = toolCall.summary;
      if (summary == null) {
        let summary1;
        if (tmp11 != null) {
          summary1 = tmp11.summary;
        }
        summary = summary1;
      }
      let fields = toolCall.fields;
      if (fields == null) {
        let fields1;
        if (tmp11 != null) {
          fields1 = tmp11.fields;
        }
        fields = fields1;
      }
      let schema = toolCall.schema;
      if (schema == null) {
        let schema1;
        if (tmp11 != null) {
          schema1 = tmp11.schema;
        }
        schema = schema1;
      }
      let detail_id = toolCall.detail_id;
      if (detail_id == null) {
        let detailId;
        if (tmp11 != null) {
          detailId = tmp11.detailId;
        }
        detail_id = detailId;
      }
      let turn_id = toolCall.turn_id;
      if (turn_id == null) {
        let turnId;
        if (tmp11 != null) {
          turnId = tmp11.turnId;
        }
        turn_id = turnId;
      }
      let parent_id = toolCall.parent_id;
      if (parent_id == null) {
        let parentId;
        if (tmp11 != null) {
          parentId = tmp11.parentId;
        }
        parent_id = parentId;
      }
      obj = { kind: "tool", id: toolCall.id, startedAt };
      if (null != turn_id) {
        obj4 = { turnId: turn_id };
        const obj3 = { turnId: turn_id };
      } else {
        obj4 = {};
      }
      const merged = Object.assign(obj4);
      if (null != parent_id) {
        obj6 = { parentId: parent_id };
        const obj5 = { parentId: parent_id };
      } else {
        obj6 = {};
      }
      const merged1 = Object.assign(obj6);
      ({ agent: obj2.agent, tool: obj2.tool, status: obj2.status } = toolCall);
      if (null != summary) {
        obj8 = { summary };
        const obj7 = { summary };
      } else {
        obj8 = {};
      }
      const merged2 = Object.assign(obj8);
      if (null != fields) {
        obj10 = { fields };
        const obj9 = { fields };
      } else {
        obj10 = {};
      }
      const merged3 = Object.assign(obj10);
      if (null != schema) {
        obj12 = { schema };
        const obj11 = { schema };
      } else {
        obj12 = {};
      }
      const merged4 = Object.assign(obj12);
      if (null != detail_id) {
        obj14 = { detailId: detail_id };
        const obj13 = { detailId: detail_id };
      } else {
        obj14 = {};
      }
      const merged5 = Object.assign(obj14);
      if (null != toolCall.duration_ms) {
        obj16 = { durationMs: toolCall.duration_ms };
        const obj15 = { durationMs: toolCall.duration_ms };
      } else {
        obj16 = {};
      }
      const merged6 = Object.assign(obj16);
      if (null != toolCall.result_chars) {
        obj18 = { resultChars: toolCall.result_chars };
        const obj17 = { resultChars: toolCall.result_chars };
      } else {
        obj18 = {};
      }
      const merged7 = Object.assign(obj18);
      const tmp42 = true === toolCall.result_truncated ? { resultTruncated: true } : {};
      const merged8 = Object.assign(tmp42);
      if (null != toolCall.result_added) {
        obj20 = { resultAdded: toolCall.result_added };
        const obj19 = { resultAdded: toolCall.result_added };
      } else {
        obj20 = {};
      }
      const merged9 = Object.assign(obj20);
      if (null != toolCall.result_removed) {
        obj22 = { resultRemoved: toolCall.result_removed };
        const obj21 = { resultRemoved: toolCall.result_removed };
      } else {
        obj22 = {};
      }
      const merged10 = Object.assign(obj22);
      if (null != toolCall.error) {
        obj24 = { error: toolCall.error };
        const obj23 = { error: toolCall.error };
      } else {
        obj24 = {};
      }
      const merged11 = Object.assign(obj24);
      startedAt = undefined;
      if (tmp11 != null) {
        startedAt = tmp11.startedAt;
      }
      if (startedAt == null) {
        startedAt = toolCall.ts;
      }
      const entry_id2 = toolCall.entry_id;
      if (null != entry_id2) {
        let value8 = map8.get(projectId);
        const obj26 = map8;
        if (null == value8) {
          const _Map = Map;
          const self = this;
          const self2 = this;
          map = new Map();
          const result = obj26.set(projectId, map);
          value8 = map;
        }
        const result1 = value8.set(entry_id2, tmp56);
        if (value8.size > 800) {
          const iter = value8.keys();
          const iter2 = iter.next();
          while (true !== iter2.done) {
            let deleteResult = value8.delete(iter2.value);
            if (value8.size <= 800) {
              break;
            }
          }
        }
      }
      if (null == tmp11) {
        const combined = value7.concat(obj);
        let substr = combined;
        set = map7.set;
        if (combined.length > 400) {
          substr = combined.slice(-400);
        }
        const result2 = set(projectId, substr);
      } else {
        const substr1 = value7.slice();
        substr1[findIndexResult] = obj;
        const result3 = map7.set(projectId, substr1);
      }
    }
  },
  VIBEGRATIONS_MODEL_CALL_APPEND: function handleModelCallAppend(arg0) {
    let modelCall;
    let projectId;
    let startedAt;
    let turn_id;
    ({ projectId, modelCall } = arg0);
    const id = modelCall.id;
    const value = map10.get(projectId);
    if (value != null) {
      const touched = value.touched;
      const _HermesInternal = HermesInternal;
      touched.add("" + "model" + ":" + id);
    }
    const entry_id = modelCall.entry_id;
    let tmp5 = null != entry_id;
    if (tmp5) {
      const value5 = map8.get(projectId);
      let value6;
      if (value5 != null) {
        value6 = value5.get(entry_id);
      }
      tmp5 = value6 === tmp4;
    }
    if (tmp5) {
      return false;
    } else {
      let obj4;
      let obj8;
      let obj10;
      let value7 = map7.get(projectId);
      if (value7 == null) {
        value7 = closure_17;
      }
      const model = "model";
      const id2 = modelCall.id;
      const findIndexResult = value7.findIndex((kind) => kind.kind === model && kind.id === id2);
      let tmp11 = null;
      if (-1 !== findIndexResult) {
        tmp11 = value7[findIndexResult];
      }
      obj = { kind: "model", id: null, startedAt };
      ({ id: obj2.id, turn_id } = modelCall);
      if (turn_id == null) {
        let turnId;
        if (tmp11 != null) {
          turnId = tmp11.turnId;
        }
        turn_id = turnId;
      }
      if (null != turn_id) {
        let turn_id2 = modelCall.turn_id;
        if (turn_id2 == null) {
          let turnId1;
          if (tmp11 != null) {
            turnId1 = tmp11.turnId;
          }
          turn_id2 = turnId1;
        }
        obj4 = { turnId: turn_id2 };
        const obj3 = { turnId: turn_id2 };
      } else {
        obj4 = {};
      }
      const merged = Object.assign(obj4);
      ({ agent: obj2.agent, model: obj2.model, status: obj2.status } = modelCall);
      const obj6 = { promptTokens: null, systemTokens: null, toolsTokens: null, messagesTokens: null, tools: null, messages: null, durationMs: null, inputTokens: null, outputTokens: null, cacheReadTokens: null, cacheWriteTokens: null, costUsd: null };
      ({ prompt_tokens: obj5.promptTokens, system_tokens: obj5.systemTokens, tools_tokens: obj5.toolsTokens, messages_tokens: obj5.messagesTokens, tools: obj5.tools, messages: obj5.messages, duration_ms: obj5.durationMs, input_tokens: obj5.inputTokens, output_tokens: obj5.outputTokens, cache_read_tokens: obj5.cacheReadTokens, cache_write_tokens: obj5.cacheWriteTokens, cost_usd: obj5.costUsd } = modelCall);
      const merged1 = Object.assign(pickNumbers(tmp11, obj6));
      let estimated = modelCall.estimated;
      if (estimated == null) {
        let estimated1;
        if (tmp11 != null) {
          estimated1 = tmp11.estimated;
        }
        estimated = estimated1;
      }
      const tmp21 = true === estimated ? { estimated: true } : {};
      const merged2 = Object.assign(tmp21);
      if (null != modelCall.stop_reason) {
        obj8 = { stopReason: modelCall.stop_reason };
        const obj7 = { stopReason: modelCall.stop_reason };
      } else {
        obj8 = {};
      }
      const merged3 = Object.assign(obj8);
      if (null != modelCall.error) {
        obj10 = { error: modelCall.error };
        const obj9 = { error: modelCall.error };
      } else {
        obj10 = {};
      }
      const merged4 = Object.assign(obj10);
      startedAt = undefined;
      if (tmp11 != null) {
        startedAt = tmp11.startedAt;
      }
      if (startedAt == null) {
        startedAt = modelCall.ts;
      }
      const entry_id2 = modelCall.entry_id;
      if (null != entry_id2) {
        let value8 = map8.get(projectId);
        const obj11 = map8;
        if (null == value8) {
          const _Map = Map;
          const self = this;
          const self2 = this;
          map = new Map();
          const result = obj11.set(projectId, map);
          value8 = map;
        }
        const result1 = value8.set(entry_id2, tmp32);
        if (value8.size > 800) {
          const iter = value8.keys();
          const iter2 = iter.next();
          while (true !== iter2.done) {
            let deleteResult = value8.delete(iter2.value);
            if (value8.size <= 800) {
              break;
            }
          }
        }
      }
      if (null == tmp11) {
        const combined = value7.concat(obj);
        let substr = combined;
        set = map7.set;
        if (combined.length > 400) {
          substr = combined.slice(-400);
        }
        const result2 = set(projectId, substr);
      } else {
        const substr1 = value7.slice();
        substr1[findIndexResult] = obj;
        const result3 = map7.set(projectId, substr1);
      }
    }
  }
};
const vibegrationsProjectStore = new VibegrationsProjectStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/vibegrations/stores/VibegrationsProjectStore.tsx");

export default vibegrationsProjectStore;
export { isProjectOwner };
export const canPublishProject = function canPublishProject(project) {
  const owner_user_id = project.owner_user_id;
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  let tmp3 = owner_user_id === id;
  if (!tmp3) {
    obj = VibegrationsTypes;
    tmp3 = obj.isProjectPublic(project) && null != project.guild_id;
    obj.isProjectPublic(project) && null != project.guild_id;
  }
  return tmp3;
};
export const canRemixProject = function canRemixProject(owner_user_id) {
  owner_user_id = owner_user_id.owner_user_id;
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  let isProjectSharedResult = owner_user_id === id;
  if (!isProjectSharedResult) {
    obj = VibegrationsTypes;
    isProjectSharedResult = obj.isProjectShared(owner_user_id);
  }
  if (!isProjectSharedResult) {
    const obj2 = VibegrationsTypes;
    isProjectSharedResult = obj2.isProjectPublic(owner_user_id) && null != owner_user_id.guild_id;
    obj2.isProjectPublic(owner_user_id) && null != owner_user_id.guild_id;
  }
  return isProjectSharedResult;
};
