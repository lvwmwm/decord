// Module ID: 12948
// Function ID: 12949
// Name: ConjureChatStore
// Dependencies: [109, 32, 7252, 1244, 12517, 2115, 4900, 5756, 10617, 1085, 2071, 11, 11371, 2041, 12949, 10940, 6939, 504, 1126, 3827, 584, 2]
// Exports: getOlderHistoryCursor, isStrandedSegment, recordStep, turnSettled

// Module 12948 (ConjureChatStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import intl2 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2041 */;
import ChannelConstants from "ChannelConstants" /* 2071 */;
import _modDef3827 from "module_3827" /* 3827 */;
import ConjureUtils from "ConjureUtils" /* 6939 */;
import SoundUtils from "SoundUtils" /* 10940 */;
import ConjurePlatformUtilsDefault from "ConjurePlatformUtils" /* 11371 */;
import conjureProjectMute from "conjureProjectMute" /* 12949 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7252 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1244 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 12517 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2115 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4900 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5756 */;
import ConjureProjectStore from "ConjureProjectStore" /* 10617 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let closure_14;
let closure_15;
function newMessage(assistant, content, arg2) {
  let id;
  let obj4;
  let obj6;
  let parsed;
  let ts;
  let turnId;
  let userId;
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  ({ ts, id, userId, turnId } = obj);
  const attachments = obj.attachments;
  if (id == null) {
    const sum = c31 + 1;
    c31 = sum;
    id = `m${tmp2}`;
  }
  const obj2 = { id, render_id: id, role: assistant, content, steps: [], created_at: parsed, attachments };
  if (null != userId) {
    obj4 = { user_id: userId };
    const obj3 = { user_id: userId };
  } else {
    obj4 = {};
  }
  const merged = Object.assign(obj4);
  if (null != turnId) {
    obj6 = { turn_id: turnId };
    const obj5 = { turn_id: turnId };
  } else {
    obj6 = {};
  }
  const merged1 = Object.assign(obj6);
  if (null != ts) {
    const _Date2 = Date;
    parsed = Date.parse(ts);
  } else {
    const _Date = Date;
    parsed = Date.now();
  }
  return obj2;
}
function newMessageFromHistory(ts) {
  function snowflakeTimeOf(id) {
    let startsWithResult;
    if (id != null) {
      startsWithResult = id.startsWith(closure_1_33);
    }
    let substr = id;
    if (true === startsWithResult) {
      substr = id.slice(5);
    }
    if (null != substr) {
      const obj = /^\d+$/;
      if (obj.test(substr)) {
        const obj2 = SnowflakeUtilsDefault;
        const extractTimestampResult = obj2.extractTimestamp(substr);
        const _Number = Number;
        let tmp8 = null;
        if (Number.isFinite(extractTimestampResult)) {
          tmp8 = null;
          if (extractTimestampResult > 0) {
            tmp8 = extractTimestampResult;
          }
        }
        return tmp8;
      }
    }
    return null;
  }
  let obj = { ts: ts.ts, id: ts.id, userId: ts.user_id, attachments: ts.attachments };
  const tmp = newMessage(ts.role, ts.content, obj);
  const tmp2 = snowflakeTimeOf(ts.id);
  let tmp3 = null == tmp2;
  if (!tmp3) {
    tmp3 = "assistant" !== ts.role && null != ts.ts;
    const tmp4 = "assistant" !== ts.role && null != ts.ts;
  }
  if (!tmp3) {
    tmp.created_at = tmp2;
  }
  if ("assistant" === ts.role) {
    if (null != ts.ts) {
      const _Date = Date;
      const parsed = Date.parse(ts.ts);
      let _Number = Number;
      if (Number.isFinite(parsed)) {
        tmp.settled_at = parsed;
      }
    }
  }
  if (null != ts.kind) {
    tmp.kind = ts.kind;
  }
  if ("interrupted" === ts.kind) {
    tmp.interrupted = true;
    tmp.content = "";
    tmp.finished = true;
  }
  if (null != ts.proposal) {
    tmp.proposal = ts.proposal;
  }
  const tmp7 = null != ts.ideas && ts.ideas.length > 0;
  if (tmp7) {
    tmp.ideas = ts.ideas;
  }
  if (null != ts.publish_cta) {
    tmp.publishCta = ts.publish_cta;
  }
  if (null != ts.publish_notice) {
    tmp.publishNotice = ts.publish_notice;
  }
  if (null != ts.project_event) {
    tmp.projectEvent = ts.project_event;
  }
  let tmp8 = null != ts.clarification && ts.clarification.questions.length > 0;
  if (tmp8) {
    tmp.clarification = ts.clarification;
  }
  if (null != ts.restore_proposal) {
    tmp.restoreProposal = ts.restore_proposal;
  }
  if (null != ts.source_sha) {
    tmp.sourceSha = ts.source_sha;
  }
  const tmp9 = null == ts.steps && null == ts.events && null != ts.todos && ts.todos.length > 0;
  if (tmp9) {
    tmp.todos = ts.todos;
  }
  if (null != ts.steps) {
    tmp.steps = replayTimeline(ts.steps);
  } else if (null != ts.events) {
    const events = ts.events;
    tmp.steps = events.flatMap((type) => {
      let items1;
      if ("todos" === type.type) {
        const items = [{ type: "step", kind: "todos", items: type.items }];
        items1 = items;
        const obj = { type: "step", kind: "todos", items: type.items };
      } else {
        items1 = [];
      }
      return items1;
    });
  }
  const tmp11 = null != ts.secret_request && ts.secret_request.fields.length > 0;
  if (tmp11) {
    tmp.secretRequest = ts.secret_request;
  }
  if (null != ts.settings_request) {
    tmp.settingsRequest = ts.settings_request;
  }
  const tmp12 = null != ts.intake && ts.intake.questions.length > 0;
  if (tmp12) {
    tmp.intake = ts.intake;
  }
  let steps = ts.steps;
  if (steps == null) {
    steps = [];
  }
  const iter = steps[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp14 = nextResult;
    let tmp15 = "awaiting_user" === nextResult.kind;
    if (tmp15) {
      tmp15 = "secrets" === tmp14.action;
    }
    if (tmp15) {
      let obj2 = { action: tmp14.action };
      tmp.awaitingUser = obj2;
    }
    continue;
  }
  return tmp;
}
function resolveTurnIndex(arr3, activeTurnId) {
  let num = -1;
  if (null != activeTurnId) {
    let diff = arr3.length - 1;
    num = -1;
    if (0 <= diff) {
      while (true) {
        let tmp3 = arr3[diff];
        let tmp4 = tmp3.turn_id === activeTurnId;
        if (!tmp4) {
          let _HermesInternal = HermesInternal;
          tmp4 = tmp3.id === "" + c33 + activeTurnId;
        }
        num = diff;
        if (tmp4) {
          break;
        } else {
          diff = diff - 1;
          num = -1;
          if (0 > diff) {
            break;
          }
        }
      }
    }
  }
  if (-1 !== num) {
    return num;
  } else {
    let diff1 = arr3.length - 1;
    if (0 <= diff1) {
      while (true) {
        let tmp7 = arr3[diff1];
        if ("assistant" === tmp7.role) {
          let tmp9 = true === tmp7.finished || true === tmp7.continued || "" !== tmp7.content || null != tmp7.proposal || null != tmp7.clarification || null != tmp7.intake;
          if (!tmp9) {
            let steps = tmp7.steps;
            let obj = weakMap;
            let value = weakMap.get(steps);
            if (null == value) {
              let someResult = steps.some((kind) => set.has(kind.kind));
              let result = obj.set(steps, someResult);
              value = someResult;
            }
            tmp9 = value;
          }
          if (!tmp9) {
            if (null == tmp7.turn_id) {
              break;
            }
          }
        }
        diff1 = diff1 - 1;
      }
      return diff1;
    }
    return -1;
  }
}
function patchTurn(projectId, turnId, fn) {
  const value = map.get(projectId);
  if (null != value) {
    const tmp22 = resolveTurnIndex(value, turnId);
    if (-1 !== tmp22) {
      let tmp9 = tmp8;
      if (null != turnId) {
        tmp9 = tmp8;
        if (null == value[tmp22].turn_id) {
          let tmp10 = tmp8.turn_id === turnId;
          if (!tmp10) {
            const _HermesInternal = HermesInternal;
            tmp10 = tmp8.id === "" + c33 + turnId;
          }
          tmp9 = tmp8;
          if (!tmp10) {
            const obj2 = { turn_id: turnId };
            const merged = Object.assign(tmp8);
            tmp9 = obj2;
          }
        }
      }
      const tmp16 = fn(tmp9);
      if (tmp16 !== value[tmp22]) {
        set2 = map.set;
        const substr = value.slice();
        substr[tmp22] = tmp16;
        set2(projectId, substr);
      }
    } else {
      let obj;
      const items = [];
      set = map.set;
      const arraySpreadResult = HermesBuiltin.arraySpread(items, value, 0);
      const tmp6 = newMessage;
      if (null != turnId) {
        obj = { turnId };
        const obj3 = { turnId };
      } else {
        obj = {};
      }
      items[arraySpreadResult] = fn(tmp6("assistant", "", obj));
      const result = set(projectId, items);
    }
  }
}
function hasOpenTurn(map) {
  if (null == map) {
    return false;
  } else {
    let diff = map.length - 1;
    let flag2 = false;
    if (0 <= diff) {
      while (true) {
        let tmp = map[diff];
        let tmp4 = flag2;
        if ("assistant" === tmp.role) {
          let tmp5 = "side_reply" === tmp.kind || "publish_notice" === tmp.kind || "project_event" === tmp.kind;
          tmp4 = flag2;
          if (!tmp5) {
            let flag = flag2;
            if (!flag) {
              let tmp6 = true === tmp.finished || true === tmp.continued || "" !== tmp.content || null != tmp.proposal || null != tmp.clarification || null != tmp.intake;
              if (!tmp6) {
                let steps = tmp.steps;
                let obj = weakMap;
                let value = weakMap.get(steps);
                if (null == value) {
                  let someResult = steps.some((kind) => set.has(kind.kind));
                  let result = obj.set(steps, someResult);
                  value = someResult;
                }
                tmp6 = value;
              }
              flag = true;
              if (!tmp6) {
                break;
              }
            }
            tmp4 = flag;
            if (null != tmp.turn_id) {
              let tmp10 = true === tmp.finished || true === tmp.continued || "" !== tmp.content || null != tmp.proposal || null != tmp.clarification || null != tmp.intake;
              if (!tmp10) {
                let steps2 = tmp.steps;
                let obj2 = weakMap;
                let value2 = weakMap.get(steps2);
                if (null == value2) {
                  let someResult1 = steps2.some((kind) => set.has(kind.kind));
                  let result1 = obj2.set(steps2, someResult1);
                  value2 = someResult1;
                }
                tmp10 = value2;
              }
              tmp4 = flag;
              if (!tmp10) {
                return true;
              }
            }
          }
        }
        diff = diff - 1;
        flag2 = tmp4;
      }
      return true;
    }
    return false;
  }
}
function notifyTurn(projectId, guildId, title, body, nonce) {
  let CHANNELResult;
  let tmp25;
  if (null != nonce) {
    let num = map5.get(projectId);
    const obj = map5;
    if (num == null) {
      num = 0;
    }
    if (nonce > num) {
      const result = obj.set(projectId, nonce);
    }
  }
  const obj2 = ConjurePlatformUtilsDefault;
  let result2 = obj2.areTurnNotificationsDisabled() || SelfPresenceStore.getStatus() === constants.DND;
  if (!result2) {
    const FocusMode = UserSettings.FocusMode;
    result2 = FocusMode.getSetting();
  }
  if (!result2) {
    result2 = FamilyCenterStore.isCurrentUserInRestrictedHours();
  }
  if (!result2) {
    const obj3 = conjureProjectMute;
    if (!obj3.isConjureProjectMuted(UserSettingsProtoStore.settings, projectId)) {
      const isSoundDisabledResult = NotificationSettingsStore.isSoundDisabled("message1");
      guildId = SelectedGuildStore.getGuildId();
      if (null != guildId) {
        if (ConjureProjectStore.getSelectedProjectId(guildId) === projectId) {
          if (SelectedChannelStore.getChannelId() === StaticChannelRoute.CONJURE) {
            const tmpResult = ConjurePlatformUtilsDefault;
            if (tmpResult.isWindowFocused()) {
              if (!isSoundDisabledResult) {
                const tmp8Result = SoundUtils;
                tmp8Result.playSound(bit_message1, 0.4);
              }
            }
          }
        }
      }
      let conjureWorkspaceGuildId = guildId;
      if (guildId == null) {
        const tmp8Result2 = ConjureUtils;
        conjureWorkspaceGuildId = tmp8Result2.resolveConjureWorkspaceGuildId("VibegrationsChatStore");
      }
      const obj4 = { projectId, guildId: conjureWorkspaceGuildId, title, body, route: CHANNELResult, sound: tmp25, volume: 0.4 };
      CHANNELResult = null;
      const presentTurnNotification = ConjurePlatformUtilsDefault.presentTurnNotification;
      ConjurePlatformUtilsDefault;
      if (null != conjureWorkspaceGuildId) {
        CHANNELResult = authStore3.CHANNEL(conjureWorkspaceGuildId, StaticChannelRoute.CONJURE, projectId);
      }
      tmp25 = undefined;
      if (!isSoundDisabledResult) {
        tmp25 = bit_message1;
      }
      const result1 = presentTurnNotification(obj4);
    }
  }
}
function recordThinkingTransition(projectId) {
  let flag = map2.get(projectId);
  const obj = map2;
  if (flag == null) {
    flag = false;
  }
  const tmp2 = hasOpenTurn(map.get(projectId));
  const obj2 = map;
  if (flag !== tmp2) {
    const result = obj.set(projectId, tmp2);
    const index = closure_23.indexOf(projectId);
    if (-1 !== index) {
      closure_23.splice(index, 1);
    }
    closure_23.unshift(projectId);
    if (tmp2) {
      map1.delete(projectId);
    } else {
      const value = obj2.get(projectId);
      let tmp5 = null;
      if (null != value) {
        let diff = value.length - 1;
        tmp5 = null;
        if (0 <= diff) {
          while (true) {
            if ("assistant" === value[diff].role) {
              let tmp8 = value[diff];
              let tmp9 = "side_reply" === tmp8.kind || "publish_notice" === tmp8.kind || "project_event" === tmp8.kind;
              if (!tmp9) {
                break;
              }
            }
            diff = diff - 1;
            tmp5 = null;
          }
          tmp5 = value[diff];
        }
      }
      let tmp10 = null != tmp5;
      if (tmp10) {
        const str5 = tmp5.content;
        let someResult = "" !== str5.trim() || null != tmp5.proposal || null != tmp5.clarification || null != tmp5.intake;
        if (!someResult) {
          const steps = tmp5.steps;
          someResult = steps.some((kind) => {
            const hasItem = set.has(kind.kind) && "terminal_error" !== kind.kind;
            return hasItem;
          });
        }
        tmp10 = someResult;
      }
      if (tmp10) {
        const _Date = Date;
        const result1 = obj3.set(projectId, Date.now());
      } else {
        map1.delete(projectId);
      }
      const value3 = map.get(projectId);
      if (null != value3) {
        let diff1 = value3.length - 1;
        if (0 <= diff1) {
          while ("assistant" !== value3[diff1].role) {
            diff1 = diff1 - 1;
          }
          if (null == value3[diff1].finished_at) {
            let tmp19 = true === tmp16.finished || true === tmp16.continued || "" !== tmp16.content || null != tmp16.proposal || null != tmp16.clarification || null != tmp16.intake;
            if (!tmp19) {
              const steps2 = tmp16.steps;
              let value4 = weakMap.get(steps2);
              const obj4 = weakMap;
              if (null == value4) {
                const someResult1 = steps2.some((kind) => set.has(kind.kind));
                const result2 = obj4.set(steps2, someResult1);
                value4 = someResult1;
              }
              tmp19 = value4;
            }
            if (tmp19) {
              set = map.set;
              const items = [];
              const arraySpreadResult = HermesBuiltin.arraySpread(items, value3.slice(0, diff1), 0);
              const obj5 = { finished_at: Date.now() };
              const merged = Object.assign(tmp16);
              const _Date2 = Date;
              items[arraySpreadResult] = obj5;
              HermesBuiltin.arraySpread(items, value3.slice(diff1 + 1), arraySpreadResult + 1);
              const result3 = set(projectId, items);
            }
          }
        }
      }
    }
  }
}
function purgeProject(projectId) {
  let deleteResult = map.delete(projectId);
  const deleteResult1 = map6.delete(projectId);
  const deleteResult2 = set3.delete(projectId);
  const deleteResult3 = map1.delete(projectId);
  const deleteResult4 = map2.delete(projectId);
  const deleteResult5 = map3.delete(projectId);
  const deleteResult6 = map4.delete(projectId);
  const deleteResult7 = set1.delete(projectId);
  const deleteResult8 = set2.delete(projectId);
  const index = closure_23.indexOf(projectId);
  const arr = closure_23;
  if (-1 !== index) {
    arr.splice(index, 1);
  }
  if (!deleteResult) {
    deleteResult = deleteResult1;
  }
  if (!deleteResult) {
    deleteResult = deleteResult2;
  }
  if (!deleteResult) {
    deleteResult = deleteResult3;
  }
  if (!deleteResult) {
    deleteResult = deleteResult4;
  }
  if (!deleteResult) {
    deleteResult = deleteResult5;
  }
  if (!deleteResult) {
    deleteResult = deleteResult6;
  }
  if (!deleteResult) {
    deleteResult = deleteResult7;
  }
  if (!deleteResult) {
    deleteResult = deleteResult8;
  }
  if (!deleteResult) {
    deleteResult = tmp11;
  }
  return deleteResult;
}
function applyAgentReactions(items) {
  map = new Map();
  const iter = items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    if ("assistant" === nextResult.role) {
      let steps = tmp2.steps;
      for (const item10022 of steps) {
        let tmp4 = item10022;
        let tmp5 = "reaction" === item10022.kind;
        if (tmp5) {
          tmp5 = null != tmp4.message_id;
        }
        if (tmp5) {
          tmp5 = null != tmp4.emoji;
        }
        if (tmp5) {
          tmp5 = "" !== tmp4.emoji;
        }
        if (tmp5) {
          let result = map.set(tmp4.message_id, tmp4.emoji);
        }
        continue;
      }
    }
    continue;
  }
  let mapped = items;
  if (0 !== map.size) {
    mapped = items.map((role) => {
      let value;
      if ("user" === role.role) {
        if (null != role.id) {
          value = map.get(role.id);
        }
      }
      let tmp4 = role;
      if (null != value) {
        tmp4 = role;
        if (role.agentReaction !== value) {
          const obj = { agentReaction: value };
          const merged = Object.assign(role);
          tmp4 = obj;
        }
      }
      return tmp4;
    });
  }
  return mapped;
}
function pushStep(substr, todosAt, step) {
  if (null == step.turn_seq) {
    if ("todos" === step.kind) {
      if (null == step.task_id) {
        if (-1 === todosAt.todosAt) {
          todosAt.todosAt = substr.length;
          substr.push(step);
          if (null != step.turn_seq) {
            const seenSeq4 = todosAt.seenSeq;
            seenSeq4.add(step.turn_seq);
          }
        } else {
          if (null != substr[todosAt.todosAt].turn_seq) {
            const seenSeq2 = todosAt.seenSeq;
            seenSeq2.delete(substr[todosAt.todosAt].turn_seq);
          }
          substr[todosAt.todosAt] = step;
          if (null != step.turn_seq) {
            const seenSeq3 = todosAt.seenSeq;
            seenSeq3.add(step.turn_seq);
          }
        }
      }
    }
    substr.push(step);
    if (null != step.turn_seq) {
      const seenSeq5 = todosAt.seenSeq;
      seenSeq5.add(step.turn_seq);
    }
  } else {
    const seenSeq = todosAt.seenSeq;
  }
}
function replayTimeline(steps) {
  const items = [];
  const obj = { seenSeq: new Set(), todosAt: -1 };
  new Set();
  const tmp2 = steps[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = pushStep(items, obj, tmp3);
    continue;
  }
  const result = weakMap1.set(items, obj);
  return items;
}
function stoppable(role) {
  let tmp = "assistant" === role.role;
  if (tmp) {
    tmp = !("side_reply" === role.kind || "publish_notice" === role.kind || "project_event" === role.kind);
    const tmp2 = "side_reply" === role.kind || "publish_notice" === role.kind || "project_event" === role.kind;
  }
  if (tmp) {
    let tmp3 = true === role.finished || true === role.continued || "" !== role.content || null != role.proposal || null != role.clarification || null != role.intake;
    if (!tmp3) {
      const steps = role.steps;
      let value = weakMap.get(steps);
      const obj = weakMap;
      if (null == value) {
        const someResult = steps.some((kind) => set.has(kind.kind));
        const result = obj.set(steps, someResult);
        value = someResult;
      }
      tmp3 = value;
    }
    tmp = !tmp3;
  }
  if (tmp) {
    tmp = true !== role.stopRequested;
  }
  return tmp;
}
let closure_3 = ["disposition"];
let closure_4 = ["disposition"];
({ Routes: closure_14, StatusTypes: closure_15 } = Constants);
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const bit_message1 = "bit_message1";
let set = new Set(["reply", "plan_proposed", "terminal_error"]);
const weakMap = new WeakMap();
let map = new Map();
const map1 = new Map();
const map2 = new Map();
let closure_23 = [];
const map3 = new Map();
const map4 = new Map();
let set1 = new Set();
let set2 = new Set();
const map5 = new Map();
let width = 0;
let closure_30 = [];
let c31 = 0;
let c33 = "turn:";
const Store = get_initializedDefault.Store;
class ConjureChatStore extends Store {
  initialize() {
    this.waitFor(FamilyCenterStore, NotificationSettingsStore, SelectedChannelStore, SelectedGuildStore, SelfPresenceStore, UserSettingsProtoStore, ConjureProjectStore);
  }
  getMessages(arg0) {
    let value = map.get(arg0);
    if (value == null) {
      value = closure_30;
    }
    return value;
  }
  hasPendingSettingsRequest(arg0) {
    const messages = this.getMessages(arg0);
    return null != tmp && "assistant" === tmp.role && null != tmp.settingsRequest;
  }
  isThinking(projectId) {
    return hasOpenTurn(map.get(projectId));
  }
  hasLoadedHistory(projectId) {
    return map6.has(projectId);
  }
  isHistoryUnavailable(projectId) {
    return set3.has(projectId);
  }
  getFinishedAt(id) {
    let tmp = null;
    if (!hasOpenTurn(map.get(id))) {
      let value = map1.get(id);
      if (value == null) {
        value = null;
      }
      tmp = value;
    }
    return tmp;
  }
  getProjectUsage(projectId) {
    let value = map3.get(projectId);
    if (value == null) {
      value = null;
    }
    return value;
  }
  getThinkingActivity(projectId) {
    let value = map4.get(projectId);
    if (value == null) {
      value = null;
    }
    return value;
  }
  isCompacting(projectId) {
    return set1.has(projectId);
  }
  isSaving(arg0) {
    return set2.has(arg0);
  }
  getSidebarWidth() {
    return width;
  }
  getActivityOrderedProjectIds() {
    return closure_23.slice();
  }
  isAnyThinking() {
    const self = this;
    const keys = map.keys();
    for (const item10008 of keys) {
      if (self.isThinking(item10008)) {
        obj.return();
        let flag = true;
        return true;
      }
    }
    return false;
  }
}
const prototype = ConjureChatStore.prototype;
const map6 = new Map();
const set3 = new Set();
const weakMap1 = new WeakMap();
let obj = {
  LOGOUT: function handleLogout() {
    map5.clear();
    const obj = map;
    if (0 === map.size) {
      if (0 === map1.size) {
        if (0 === map2.size) {
          if (0 === map3.size) {
            if (0 === map4.size) {
              if (0 === set1.size) {
                if (0 === set2.size) {
                  if (0 === map6.size) {
                    if (0 === set3.size) {
                      if (0 === closure_23.length) {
                        if (0 === width) {
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
    }
    obj.clear();
    map1.clear();
    map2.clear();
    map3.clear();
    map4.clear();
    set1.clear();
    set2.clear();
    map6.clear();
    set3.clear();
    closure_23.length = 0;
    width = 0;
  },
  CONJURE_CHAT_HISTORY_SET: function handleChatHistorySet(arg0) {
    let cursor;
    let degraded;
    let entries;
    let items;
    let projectId;
    ({ projectId, entries, cursor, degraded } = arg0);
    set1 = undefined;
    let mapped;
    let num;
    let tmp = map6;
    let value = map6.get(projectId);
    if (map6.has(projectId)) {
      let value2 = map.get(projectId);
      if (value2 == null) {
        value2 = [];
      }
      items = value2;
    } else {
      items = [];
    }
    let tmp5 = cursor;
    set = tmp.set;
    if (cursor == null) {
      tmp5 = null;
    }
    const result = set(projectId, tmp5);
    if (true === degraded) {
      set3.add(projectId);
    } else {
      set3.delete(projectId);
    }
    map4.delete(projectId);
    set1.delete(projectId);
    set2.delete(projectId);
    const self = this;
    set1 = new Set();
    const found = entries.filter((id) => {
      let tmp = null == id.id;
      if (!tmp) {
        const hasItem = set1.has(id.id);
        let flag = !hasItem;
        const obj = set1;
        if (flag) {
          obj.add(id.id);
          flag = true;
        }
        tmp = flag;
      }
      return tmp;
    });
    mapped = found.map(newMessageFromHistory);
    num = -1;
    if (null != cursor) {
      num = -1;
      if (true !== degraded) {
        num = mapped.findIndex((id) => null != id.id);
      }
    }
    let num2 = -1;
    if (-1 !== num) {
      num2 = items.findIndex((id) => id.id === mapped[num].id);
    }
    if (-1 !== num2) {
      if (value == null) {
        value = null;
      }
      tmp.set(projectId, value);
    }
    let tmp18 = mapped;
    const tmp17 = applyAgentReactions;
    if (-1 !== num2) {
      const items1 = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(items1, items.slice(0, num2), 0);
      HermesBuiltin.arraySpread(items1, mapped.slice(num), arraySpreadResult);
      tmp18 = items1;
    }
    map.set(projectId, tmp17(tmp18));
    recordThinkingTransition(projectId);
  },
  CONJURE_CHAT_HISTORY_PREPEND: function handleChatHistoryPrepend(cursor) {
    let entries;
    let projectId;
    ({ projectId, entries } = cursor);
    set1 = undefined;
    const result = map6.set(projectId, cursor.cursor);
    if (0 !== entries.length) {
      let items1 = map.get(projectId);
      const tmp12 = map;
      if (items1 == null) {
        items1 = [];
      }
      const mapped = entries.map(newMessageFromHistory);
      const _Set = Set;
      const self = this;
      const self2 = this;
      set1 = new Set(items1.flatMap((id) => {
        let items;
        if (null == id.id) {
          items = [];
        } else {
          items = [id.id];
        }
        return items;
      }));
      let items = [];
      set = tmp12.set;
      HermesBuiltin.arraySpread(items, items1, HermesBuiltin.arraySpread(items, mapped.filter((id) => {
        const tmp = null == id.id || !set1.has(id.id);
        return tmp;
      }), 0));
      const result1 = set(projectId, applyAgentReactions(items));
    }
  },
  CONJURE_CHAT_MESSAGE_APPEND: function handleChatMessageAppend(optimisticId) {
    let attachments;
    let content;
    let id;
    let projectId;
    let timestamp;
    let userId;
    ({ projectId, id } = optimisticId);
    optimisticId = optimisticId.optimisticId;
    ({ content, userId, timestamp, attachments } = optimisticId);
    let items2 = map.get(projectId);
    if (items2 == null) {
      items2 = [];
    }
    if (items2.some((id) => id.id === id)) {
      return false;
    } else {
      const obj2 = { ts: timestamp, id, userId, attachments };
      const tmp3 = newMessage("user", content, obj2);
      let num3 = -1;
      const tmp2 = newMessage;
      if (null != optimisticId) {
        num3 = items2.findIndex((id) => id.id === optimisticId);
      }
      if (-1 !== num3) {
        tmp3.render_id = items2[num3].render_id;
        const items = [];
        set = map.set;
        const arraySpreadResult = HermesBuiltin.arraySpread(items, items2.slice(0, num3), 0);
        items[arraySpreadResult] = tmp3;
        HermesBuiltin.arraySpread(items, items2.slice(num3 + 1), arraySpreadResult + 1);
        const result = set(projectId, items);
        recordThinkingTransition(projectId);
      } else {
        const items1 = [];
        items1[HermesBuiltin.arraySpread(items1, items2, 0)] = tmp3;
        if (!hasOpenTurn(items1)) {
          items1.push(tmp2("assistant", ""));
        }
        const result1 = obj.set(projectId, items1);
        recordThinkingTransition(projectId);
      }
    }
  },
  CONJURE_CHAT_MESSAGE_DISPOSITION: function handleChatMessageDisposition(arg0) {
    let activeTurnId;
    let closure_129_0;
    let disposition;
    let finished_at;
    let projectId;
    ({ projectId, id: closure_129_0, activeTurnId, disposition } = arg0);
    let c1;
    const value = map.get(projectId);
    if (null == value) {
      return false;
    } else {
      const findIndexResult = value.findIndex((id) => id.id === closure_1_0);
      c1 = findIndexResult;
      if (-1 === findIndexResult) {
        return false;
      } else {
        let found = value;
        if ("steered" === disposition) {
          found = value.filter((in_reply_to, index) => index <= c1 || in_reply_to.in_reply_to !== closure_1_0 || "queued" !== in_reply_to.acknowledges);
        }
        let arr3 = found;
        if (found[findIndexResult].disposition !== disposition) {
          const items = [];
          const arraySpreadResult = HermesBuiltin.arraySpread(items, found.slice(0, findIndexResult), 0);
          const obj2 = { disposition };
          const merged = Object.assign(found[findIndexResult]);
          items[arraySpreadResult] = obj2;
          HermesBuiltin.arraySpread(items, found.slice(findIndexResult + 1), arraySpreadResult + 1);
          arr3 = items;
        }
        let num4 = -1;
        if ("steered" === disposition) {
          let num5 = -1;
          if (null != activeTurnId) {
            let diff = arr3.length - 1;
            num5 = -1;
            if (0 <= diff) {
              while (true) {
                let tmp10 = arr3[diff];
                let tmp11 = tmp10.turn_id === activeTurnId;
                if (!tmp11) {
                  let _HermesInternal = HermesInternal;
                  tmp11 = tmp10.id === "" + c33 + activeTurnId;
                }
                num5 = diff;
                if (tmp11) {
                  break;
                } else {
                  diff = diff - 1;
                  num5 = -1;
                  if (0 > diff) {
                    break;
                  }
                }
              }
            }
          }
          num4 = num5;
        }
        let tmp14 = num4;
        let arr5 = arr3;
        if ("steered" === disposition) {
          tmp14 = num4;
          arr5 = arr3;
          if (-1 === num4) {
            tmp14 = num4;
            arr5 = arr3;
            if (null != activeTurnId) {
              const tmp40 = resolveTurnIndex(arr3, activeTurnId);
              tmp14 = num4;
              arr5 = arr3;
              if (-1 !== tmp40) {
                tmp14 = num4;
                arr5 = arr3;
                if (tmp40 < findIndexResult) {
                  const obj3 = { turn_id: activeTurnId };
                  const merged1 = Object.assign(arr3[tmp40]);
                  if (0 === obj3.steps.length) {
                    const items1 = [];
                    set = map.set;
                    const arraySpreadResult11 = HermesBuiltin.arraySpread(items1, arr3.slice(0, tmp40), 0);
                    const arraySpreadResult12 = HermesBuiltin.arraySpread(items1, arr3.slice(tmp40 + 1, findIndexResult + 1), arraySpreadResult11);
                    items1[arraySpreadResult12] = obj3;
                    HermesBuiltin.arraySpread(items1, arr3.slice(findIndexResult + 1), arraySpreadResult12 + 1);
                    const result = set(projectId, items1);
                    recordThinkingTransition(projectId);
                  } else {
                    const items2 = [];
                    const arraySpreadResult14 = HermesBuiltin.arraySpread(items2, arr3.slice(0, tmp40), 0);
                    items2[arraySpreadResult14] = obj3;
                    HermesBuiltin.arraySpread(items2, arr3.slice(tmp40 + 1), arraySpreadResult14 + 1);
                    tmp14 = tmp40;
                    arr5 = items2;
                  }
                }
              }
            }
          }
        }
        if (-1 !== tmp14) {
          if (tmp14 <= findIndexResult) {
            const items3 = [, ];
            set2 = map.set;
            const arraySpreadResult16 = HermesBuiltin.arraySpread(items3, arr5.slice(0, tmp14), 0);
            const obj4 = { continued: true, finished_at };
            const merged2 = Object.assign(arr5[tmp14]);
            finished_at = arr5[tmp14].finished_at;
            if (finished_at == null) {
              const _Date = Date;
              finished_at = Date.now();
            }
            items3[arraySpreadResult16] = obj4;
            const arraySpreadResult17 = HermesBuiltin.arraySpread(items3, arr5.slice(tmp14 + 1, findIndexResult + 1), arraySpreadResult16 + 1);
            const obj5 = { turnId: activeTurnId };
            items3[arraySpreadResult17] = newMessage("assistant", "", obj5);
            HermesBuiltin.arraySpread(items3, arr5.slice(findIndexResult + 1), arraySpreadResult17 + 1);
            set2(projectId, items3);
            recordThinkingTransition(projectId);
          }
        }
        if (arr5 !== value) {
          const result1 = obj.set(projectId, arr5);
        }
        return arr5 !== value;
      }
    }
  },
  CONJURE_CHAT_MESSAGE_CANCELLED: function handleChatMessageCancelled(arg0) {
    let closure_129_0;
    let projectId;
    ({ projectId, id: closure_129_0 } = arg0);
    const value = map.get(projectId);
    const obj = map;
    if (null == value) {
      return false;
    } else {
      const found = value.filter((id) => id.id !== closure_1_0 && id.in_reply_to !== tmp);
      if (found.length === value.length) {
        return false;
      } else {
        const result = obj.set(projectId, found);
      }
    }
  },
  CONJURE_CHAT_MESSAGE_REACTION: function handleChatMessageReaction(arg0) {
    let closure_129_0;
    let emoji;
    let projectId;
    ({ projectId, id: closure_129_0, emoji } = arg0);
    const value = map.get(projectId);
    const tmp2 = map;
    if (null == value) {
      return false;
    } else {
      const findIndexResult = value.findIndex((role) => "user" === role.role && role.id === closure_1_0);
      if (-1 !== findIndexResult) {
        if (value[findIndexResult].agentReaction !== emoji) {
          const items = [];
          set = tmp2.set;
          const arraySpreadResult = HermesBuiltin.arraySpread(items, value.slice(0, findIndexResult), 0);
          const obj = { agentReaction: emoji };
          const merged = Object.assign(value[findIndexResult]);
          items[arraySpreadResult] = obj;
          HermesBuiltin.arraySpread(items, value.slice(findIndexResult + 1), arraySpreadResult + 1);
          const result = set(projectId, items);
        }
      }
      return false;
    }
  },
  CONJURE_CHAT_SIDE_REPLY: function handleChatSideReply(inReplyTo) {
    let content;
    let id;
    let projectId;
    let timestamp;
    ({ projectId, id } = inReplyTo);
    inReplyTo = inReplyTo.inReplyTo;
    ({ content, timestamp } = inReplyTo);
    const value = map.get(projectId);
    if (null == value) {
      return false;
    } else if (value.some((id) => id.id === id)) {
      return false;
    } else {
      const obj2 = { ts: timestamp, id };
      const tmp3 = newMessage("assistant", content, obj2);
      tmp3.kind = "side_reply";
      tmp3.in_reply_to = inReplyTo;
      const findIndexResult = value.findIndex((id) => id.id === inReplyTo);
      if (-1 !== findIndexResult) {
        const disposition = value[findIndexResult].disposition;
        if (null != disposition) {
          tmp3.acknowledges = disposition;
        }
        const items = [];
        set = map.set;
        const arraySpreadResult = HermesBuiltin.arraySpread(items, value.slice(0, findIndexResult + 1), 0);
        items[arraySpreadResult] = tmp3;
        HermesBuiltin.arraySpread(items, value.slice(findIndexResult + 1), arraySpreadResult + 1);
        const result = set(projectId, items);
      } else {
        const items1 = [];
        items1[HermesBuiltin.arraySpread(items1, value, 0)] = tmp3;
        const result1 = obj.set(projectId, items1);
      }
    }
  },
  CONJURE_CHAT_PUBLISH_NOTICE: function handleChatPublishNotice(arg0) {
    let content;
    let id;
    let projectId;
    let publishNotice;
    let timestamp;
    ({ projectId, id } = arg0);
    ({ content, timestamp, publishNotice } = arg0);
    const value = map.get(projectId);
    const obj = map;
    if (null == value) {
      return false;
    } else if (value.some((id) => id.id === id)) {
      return false;
    } else {
      const obj2 = { ts: timestamp, id };
      const tmp3 = newMessage("assistant", content, obj2);
      tmp3.kind = "publish_notice";
      tmp3.publishNotice = publishNotice;
      tmp3.finished = true;
      const items = [];
      items[HermesBuiltin.arraySpread(items, value, 0)] = tmp3;
      const result = obj.set(projectId, items);
    }
  },
  CONJURE_CHAT_PROJECT_EVENT: function handleChatProjectEvent(arg0) {
    let event;
    let projectId;
    ({ projectId, event } = arg0);
    const value = map.get(projectId);
    const obj = map;
    if (null == value) {
      return false;
    } else if (value.some((id) => id.id === event.id)) {
      return false;
    } else {
      const obj2 = { ts: null, id: null };
      ({ ts: obj3.ts, id: obj3.id } = event);
      const tmp3 = newMessage("assistant", "", obj2);
      tmp3.kind = "project_event";
      tmp3.projectEvent = event;
      tmp3.finished = true;
      const items = [];
      items[HermesBuiltin.arraySpread(items, value, 0)] = tmp3;
      const result = obj.set(projectId, items);
    }
  },
  CONJURE_CHAT_STEP_APPEND: function handleChatStepAppend(turnId) {
    let projectId;
    let step;
    ({ projectId, step } = turnId);
    turnId = turnId.turnId;
    if ("preview_ready" === step.kind) {
      const tmp = null;
      if (null == turnId) {
        let tmp2 = hasOpenTurn;
        let tmp3 = map;
        let num = 0;
        if (!hasOpenTurn(map.get(projectId))) {
          return false;
        }
      }
    }
    let value = map.get(projectId);
    let tmp5 = patchTurn(projectId, turnId, (steps) => {
      let tmp3;
      steps = steps.steps;
      const tmp2 = (function indexTimeline(steps) {
        const value = closure_1_44.get(steps);
        if (null != value) {
          return value;
        } else {
          const _Set = Set;
          const self = this;
          const self2 = this;
          set = new Set();
          let num = -1;
          const entries = steps.entries();
          const tmp22 = entries[Symbol.iterator]();
          while (tmp22 !== undefined) {
            let tmp6 = closure_1_6(tmp3, 2);
            let tmp8 = tmp6[1];
            let tmp9 = tmp8;
            let first = tmp6[0];
            if (null != tmp8.turn_seq) {
              let addResult = set.add(tmp9.turn_seq);
            }
            let tmp13 = -1 === num;
            if (tmp13) {
              tmp13 = "todos" === tmp9.kind;
            }
            if (tmp13) {
              tmp13 = null == tmp9.task_id;
            }
            if (tmp13) {
              num = first;
            }
            continue;
          }
          const obj = { seenSeq: set, todosAt: num };
          const result = closure_1_44.set(steps, obj);
          return obj;
        }
      })(steps);
      if (null == step.turn_seq) {
        const substr = steps.slice();
        let tmp5 = weakMap1;
        weakMap1.delete(steps);
        let tmp8 = pushStep(substr, tmp2, tmp);
        let result = weakMap1.set(substr, tmp2);
        let obj = weakMap;
        set = weakMap.set;
        let hasItem = weakMap.get(steps);
        if (null == hasItem) {
          const someResult = steps.some((kind) => set.has(kind.kind));
          const result1 = obj.set(steps, someResult);
          hasItem = someResult;
        }
        if (!hasItem) {
          let tmp13 = set;
          hasItem = set.has(tmp.kind);
        }
        const result2 = set(substr, hasItem);
        tmp3 = substr;
      } else {
        const seenSeq = tmp2.seenSeq;
        tmp3 = steps;
      }
      let tmp15 = steps;
      if (tmp3 !== steps.steps) {
        const obj2 = { steps: tmp3 };
        const merged = Object.assign(steps);
        tmp15 = obj2;
      }
      return tmp15;
    });
    if (map.get(projectId) === value) {
      return false;
    } else {
      let tmp6 = recordThinkingTransition;
      recordThinkingTransition(projectId);
    }
  },
  CONJURE_CHAT_TURN_FINISHED: function handleChatTurnFinished(turnId) {
    let projectId;
    ({ projectId, summary: require } = turnId);
    let obj = map;
    turnId = turnId.turnId;
    const value = map.get(projectId);
    const someResult = null != value && value.some((disposition) => null != disposition.disposition);
    if (someResult) {
      const result = obj.set(projectId, value.map((disposition) => {
        if (null == disposition.disposition) {
          return disposition;
        } else {
          disposition = disposition.disposition;
          return _objectWithoutProperties(disposition, closure_1_3);
        }
      }));
    }
    patchTurn(projectId, turnId, (content) => {
      let str;
      const obj = { finished: true, finished_at: Date.now(), provisionalTodo: undefined, content: str };
      const merged = Object.assign(content);
      if ("" !== content.content) {
        str = content.content;
      } else {
        str = require;
        if (require == null) {
          str = "";
        }
      }
      return obj;
    });
    if (!hasOpenTurn(obj.get(projectId))) {
      map4.delete(projectId);
      set1.delete(projectId);
    }
    set2.delete(projectId);
    recordThinkingTransition(projectId);
  },
  CONJURE_CHAT_INTERRUPTED: function handleChatInterrupted(projectId) {
    projectId = projectId.projectId;
    const value = map.get(projectId);
    const obj = map;
    if (null == value) {
      return false;
    } else {
      const tmp4 = newMessage("assistant", "");
      tmp4.finished = true;
      const _Date = Date;
      tmp4.finished_at = Date.now();
      tmp4.interrupted = true;
      const items = [];
      items[HermesBuiltin.arraySpread(items, value, 0)] = tmp4;
      const result = obj.set(projectId, items);
    }
  },
  CONJURE_CHAT_STOP_REQUESTED: function handleChatStopRequested(projectId) {
    projectId = projectId.projectId;
    let obj = map;
    const value = map.get(projectId);
    let tmp = null != value;
    if (tmp) {
      const someResult = value.some(stoppable);
      if (someResult) {
        const result = obj.set(projectId, value.map((item) => {
          let tmp = item;
          if (stoppable(item)) {
            const obj = { stopRequested: true };
            const merged = Object.assign(item);
            tmp = obj;
          }
          return tmp;
        }));
      }
      tmp = someResult;
    }
    return tmp;
  },
  CONJURE_CHAT_PROVISIONAL_TODO: function handleChatProvisionalTodo(text) {
    let projectId;
    let turnId;
    ({ projectId, turnId } = text);
    text = text.text;
    const value = map.get(projectId);
    let flag = false;
    if (null != value) {
      let num2 = -1;
      if (null != turnId) {
        let diff = value.length - 1;
        num2 = -1;
        if (0 <= diff) {
          while (true) {
            let tmp3 = value[diff];
            let tmp4 = tmp3.turn_id === turnId;
            if (!tmp4) {
              let _HermesInternal = HermesInternal;
              tmp4 = tmp3.id === "" + c33 + turnId;
            }
            num2 = diff;
            if (tmp4) {
              break;
            } else {
              diff = diff - 1;
              num2 = -1;
              if (0 > diff) {
                break;
              }
            }
          }
        }
      }
      let flag2 = -1 !== num2;
      if (-1 !== num2) {
        const obj = { provisionalTodo: text };
        set = map.set;
        const merged = Object.assign(value[num2]);
        const substr = value.slice();
        substr[num2] = obj;
        const result = set(projectId, substr);
        flag2 = true;
      }
      flag = flag2;
    }
    return flag ? undefined : false;
  },
  CONJURE_CHAT_SOURCE_CHECKPOINT: function handleChatSourceCheckpoint(arg0) {
    let _undefined;
    let projectId;
    ({ projectId, turnId: require, sourceSha: importDefault } = arg0);
    let obj = map;
    const value = map.get(projectId);
    let c2 = value;
    if (null == value) {
      return false;
    } else {
      const mapped = value.map((role) => {
        let tmp = role;
        if ("assistant" === role.role) {
          tmp = role;
          if (role.sourceSha !== importDefault) {
            let tmp4 = role.turn_id === require;
            if (!tmp4) {
              const _HermesInternal = HermesInternal;
              tmp4 = role.id === "" + c33 + tmp3;
            }
            let tmp7 = role;
            if (tmp4) {
              const obj = { sourceSha: tmp2 };
              const merged = Object.assign(role);
              tmp7 = obj;
            }
            tmp = tmp7;
          }
        }
        return tmp;
      });
      if (mapped.every((item, index) => item === c2[index])) {
        return false;
      } else {
        const result = obj.set(projectId, mapped);
      }
    }
  },
  CONJURE_CHAT_THINKING_SET: function handleChatThinkingSet(arg0) {
    let activity;
    let projectId;
    ({ projectId, activity } = arg0);
    if (null == activity) {
      const tmp4 = map4.delete(projectId) && undefined;
      return tmp4;
    } else {
      const value = map4.get(projectId);
      const obj = map4;
      if (null != value) {
        if (activity.session === value.session) {
          if (activity.seq <= value.seq) {
            return false;
          }
        }
      }
      const result = obj.set(projectId, activity);
    }
  },
  CONJURE_CHAT_COMPACTING_SET: function handleChatCompactingSet(arg0) {
    let compacting;
    let projectId;
    ({ projectId, compacting } = arg0);
    if (compacting === set1.has(projectId)) {
      return false;
    } else if (compacting) {
      set1.add(projectId);
    } else {
      set1.delete(projectId);
    }
  },
  CONJURE_CHAT_SAVING_SET: function handleChatSavingSet(arg0) {
    let projectId;
    let saving;
    ({ projectId, saving } = arg0);
    if (saving === set2.has(projectId)) {
      return false;
    } else if (saving) {
      set2.add(projectId);
    } else {
      set2.delete(projectId);
    }
  },
  CONJURE_CHAT_USAGE_SET: function handleChatUsageSet(projectId) {
    const result = map3.set(projectId.projectId, projectId.project);
  },
  CONJURE_CHAT_SIDEBAR_WIDTH_SET: function handleChatSidebarWidthSet(width) {
    width = width.width;
    if (width === width) {
      return false;
    }
  },
  CONJURE_CHAT_TURN_PATCH: function handleChatTurnPatch(turnId) {
    let closure_129_0;
    let projectId;
    ({ projectId, patch: closure_129_0 } = turnId);
    patchTurn(projectId, turnId.turnId, (arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(closure_1_0);
      if ("todos" in closure_1_0) {
        obj.provisionalTodo = undefined;
      }
      return obj;
    });
    recordThinkingTransition(projectId);
  },
  CONJURE_CHAT_CONN_STATE: function handleChatConnState(arg0) {
    let connState;
    let projectId;
    ({ projectId, connState } = arg0);
    if ("closed" !== connState) {
      if ("failed" !== connState) {
        return false;
      }
    }
    const deleteResult = set1.delete(projectId);
    const deleteResult1 = set2.delete(projectId);
    let deleteResult2 = map4.delete(projectId);
    let obj = map;
    let value = map.get(projectId);
    if (null != value) {
      if (value.some((role) => {
        let tmp = "assistant" === role.role;
        if (tmp) {
          let tmp2 = true === role.finished || true === role.continued || "" !== role.content || null != role.proposal || null != role.clarification || null != role.intake;
          if (!tmp2) {
            const steps = role.steps;
            let value = weakMap.get(steps);
            const obj = weakMap;
            if (null == value) {
              const someResult = steps.some((kind) => set.has(kind.kind));
              const result = obj.set(steps, someResult);
              value = someResult;
            }
            tmp2 = value;
          }
          tmp = !tmp2;
        }
        return tmp;
      })) {
        let result = obj.set(projectId, value.map((disposition) => {
          let intl;
          let items;
          if (null != disposition.disposition) {
            disposition = disposition.disposition;
            return _objectWithoutProperties(disposition, closure_1_4);
          } else {
            let tmp6 = disposition;
            if ("assistant" === disposition.role) {
              let tmp2 = true === disposition.finished || true === disposition.continued || "" !== disposition.content || null != disposition.proposal || null != disposition.clarification || null != disposition.intake;
              if (!tmp2) {
                const steps = disposition.steps;
                let value = weakMap.get(steps);
                const obj = weakMap;
                if (null == value) {
                  const someResult = steps.some((kind) => set.has(kind.kind));
                  const result = obj.set(steps, someResult);
                  value = someResult;
                }
                tmp2 = value;
              }
              tmp6 = disposition;
              if (!tmp2) {
                const obj2 = { provisionalTodo: undefined, steps: items };
                const merged = Object.assign(disposition);
                items = [];
                const obj3 = { type: "step", kind: "terminal_error", message: intl.string(_modDef3827.lmiuFX) };
                const arraySpreadResult = HermesBuiltin.arraySpread(items, disposition.steps, 0);
                intl = intl2.intl;
                items[arraySpreadResult] = obj3;
                tmp6 = obj2;
              }
            }
            return tmp6;
          }
        }));
        let tmp6 = recordThinkingTransition(projectId);
      }
    }
    if (!deleteResult2) {
      deleteResult2 = deleteResult;
    }
    if (!deleteResult2) {
      deleteResult2 = deleteResult1;
    }
    return deleteResult2 && undefined;
  },
  CONJURE_PROJECT_CREATE_SUCCESS: function handleProjectCreateSuccess(project) {
    project = project.project;
    const obj = map6;
    if (map6.has(project.id)) {
      return false;
    } else {
      const result = obj.set(project.id, null);
    }
  },
  CONJURE_PROJECT_DELETE_SUCCESS: function handleProjectDeleteSuccess(projectId) {
    if (!purgeProject(projectId.projectId)) {
      return false;
    }
  },
  CONJURE_PROJECTS_FETCH_SUCCESS: function handleProjectsFetchSuccess() {
    const items = [...map.keys(), ...map6.keys(), ...map1.keys(), ...map2.keys(), ...map3.keys()];
    let flag = false;
    set = new Set(items);
    const iter = set[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let tmp5 = null == ConjureProjectStore.getProject(nextResult);
      if (tmp5) {
        tmp5 = purgeProject(tmp3);
      }
      if (tmp5) {
        flag = true;
      }
      continue;
    }
    return flag ? undefined : false;
  },
  CONJURE_TURN_SETTLED: function handleConjureTurnSettled(projectId) {
    notifyTurn(projectId.projectId, projectId.guildId, projectId.title, projectId.body, projectId.nonce);
    return false;
  },
  CONJURE_TURN_NOTIFICATION: function handleConjureTurnNotification(arg0) {
    let body;
    let nonce;
    let projectId;
    ({ projectId, body, nonce } = arg0);
    const project = ConjureProjectStore.getProject(projectId);
    if (null != project) {
      let guild_id = project.guild_id;
      const tmp2 = notifyTurn;
      if (guild_id == null) {
        guild_id = project.preview_guild_id;
      }
      if (guild_id == null) {
        guild_id = null;
      }
      tmp2(projectId, guild_id, project.name, body, nonce);
    }
    return false;
  }
};
const conjureChatStore = new ConjureChatStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/conjure/chat/ConjureChatStore.tsx");

export default conjureChatStore;
export const turnSettled = function turnSettled(message) {
  let tmp = true === message.finished || true === message.continued || "" !== message.content || null != message.proposal || null != message.clarification || null != message.intake;
  if (!tmp) {
    const steps = message.steps;
    let value = weakMap.get(steps);
    const obj = weakMap;
    if (null == value) {
      const someResult = steps.some((kind) => set.has(kind.kind));
      const result = obj.set(steps, someResult);
      value = someResult;
    }
    tmp = value;
  }
  return tmp;
};
export const isStrandedSegment = function isStrandedSegment(arg0, arg1) {
  let turn_id;
  if (arg0[arg1] != null) {
    turn_id = tmp.turn_id;
  }
  if (null != arg0[arg1]) {
    if ("assistant" === arg0[arg1].role) {
      if (null != turn_id) {
        if ("" === arg0[arg1].content) {
          let tmp2 = true === tmp.finished || true === tmp.continued || "" !== tmp.content || null != tmp.proposal || null != tmp.clarification || null != tmp.intake;
          if (!tmp2) {
            const steps = tmp.steps;
            let value = weakMap.get(steps);
            const obj = weakMap;
            if (null == value) {
              const someResult = steps.some((kind) => set.has(kind.kind));
              const result = obj.set(steps, someResult);
              value = someResult;
            }
            tmp2 = value;
          }
          if (!tmp2) {
            let diff = arg1 - 1;
            if (0 <= diff) {
              while ("user" !== arg0[diff].role) {
                let tmp11 = tmp8.turn_id === turn_id;
                if (!tmp11) {
                  let _HermesInternal = HermesInternal;
                  tmp11 = tmp8.id === "" + c33 + turn_id;
                }
                if (tmp11) {
                  let tmp12 = true === tmp8.finished || true === tmp8.continued || "" !== tmp8.content || null != tmp8.proposal || null != tmp8.clarification || null != tmp8.intake;
                  if (!tmp12) {
                    let steps2 = tmp8.steps;
                    let obj2 = weakMap;
                    let value2 = weakMap.get(steps2);
                    if (null == value2) {
                      let someResult1 = steps2.some((kind) => set.has(kind.kind));
                      let result1 = obj2.set(steps2, someResult1);
                      value2 = someResult1;
                    }
                    tmp12 = value2;
                  }
                  return tmp12;
                } else {
                  diff = diff - 1;
                }
              }
              return false;
            }
            return false;
          }
        }
      }
    }
  }
  return false;
};
export const getOlderHistoryCursor = function getOlderHistoryCursor(arg0) {
  let value = map6.get(arg0);
  if (value == null) {
    value = null;
  }
  return value;
};
export const recordStep = function recordStep(arr, turn_seq) {
  const tmp = (function indexTimeline(steps) {
    const value = closure_1_44.get(steps);
    if (null != value) {
      return value;
    } else {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set();
      let num = -1;
      const entries = steps.entries();
      const tmp22 = entries[Symbol.iterator]();
      while (tmp22 !== undefined) {
        let tmp6 = closure_1_6(tmp3, 2);
        let tmp8 = tmp6[1];
        let tmp9 = tmp8;
        let first = tmp6[0];
        if (null != tmp8.turn_seq) {
          let addResult = set.add(tmp9.turn_seq);
        }
        let tmp13 = -1 === num;
        if (tmp13) {
          tmp13 = "todos" === tmp9.kind;
        }
        if (tmp13) {
          tmp13 = null == tmp9.task_id;
        }
        if (tmp13) {
          num = first;
        }
        continue;
      }
      const obj = { seenSeq: set, todosAt: num };
      const result = closure_1_44.set(steps, obj);
      return obj;
    }
  })(arr);
  if (null != turn_seq.turn_seq) {
    const seenSeq = tmp.seenSeq;
    if (seenSeq.has(turn_seq.turn_seq)) {
      return arr;
    }
  }
  const substr = arr.slice();
  weakMap1.delete(arr);
  pushStep(substr, tmp, turn_seq);
  const result = weakMap1.set(substr, tmp);
  let hasItem = weakMap.get(arr);
  const obj = weakMap;
  if (null == hasItem) {
    const someResult = arr.some((kind) => set.has(kind.kind));
    const result1 = obj.set(arr, someResult);
    hasItem = someResult;
  }
  if (!hasItem) {
    hasItem = set.has(turn_seq.kind);
  }
  const result2 = set(substr, hasItem);
  return substr;
};
export { replayTimeline };
