// Module ID: 12643
// Function ID: 12644
// Name: VibegrationsChatStore
// Dependencies: [32, 109, 6957, 9541, 2099, 4655, 5591, 8495, 1074, 2052, 1115, 3715, 8498, 2021, 9357, 504, 573, 2]
// Exports: getOlderHistoryCursor, turnSettled

// Module 12643 (VibegrationsChatStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import intl2 from "intl" /* 1115 */;
import UserSettings from "UserSettings" /* 2021 */;
import ChannelConstants from "ChannelConstants" /* 2052 */;
import _modDef3715 from "module_3715" /* 3715 */;
import VibegrationsPlatformUtilsDefault from "VibegrationsPlatformUtils" /* 8498 */;
import SoundUtils from "SoundUtils" /* 9357 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import FamilyCenterStore from "FamilyCenterStore" /* 6957 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 9541 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4655 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5591 */;
import VibegrationsProjectStore from "VibegrationsProjectStore" /* 8495 */;
import Constants from "Constants" /* 1074 */;
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
    const sum = c28 + 1;
    c28 = sum;
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
  let obj = { ts: ts.ts, id: ts.id, userId: ts.user_id, attachments: ts.attachments };
  const tmp = newMessage(ts.role, ts.content, obj);
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
  const tmp2 = null != ts.ideas && ts.ideas.length > 0;
  if (tmp2) {
    tmp.ideas = ts.ideas;
  }
  const tmp3 = null != ts.clarification && ts.clarification.questions.length > 0;
  if (tmp3) {
    tmp.clarification = ts.clarification;
  }
  const tmp4 = null == ts.steps && null == ts.events && null != ts.todos && ts.todos.length > 0;
  if (tmp4) {
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
  const tmp6 = null != ts.secret_request && ts.secret_request.fields.length > 0;
  if (tmp6) {
    tmp.secretRequest = ts.secret_request;
  }
  if (null != ts.settings_request) {
    tmp.settingsRequest = ts.settings_request;
  }
  const tmp7 = null != ts.intake && ts.intake.questions.length > 0;
  if (tmp7) {
    tmp.intake = ts.intake;
  }
  let steps = ts.steps;
  if (steps == null) {
    steps = [];
  }
  const iter = steps[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp9 = nextResult;
    let tmp10 = "awaiting_user" === nextResult.kind;
    if (tmp10) {
      tmp10 = "secrets" === tmp9.action;
    }
    if (tmp10) {
      let obj2 = { action: tmp9.action };
      tmp.awaitingUser = obj2;
    }
    continue;
  }
  return tmp;
}
function patchTurn(projectId, turnId, fn) {
  const value = map.get(projectId);
  if (null != value) {
    let num3 = -1;
    if (null != turnId) {
      let diff = value.length - 1;
      num3 = -1;
      if (0 <= diff) {
        num3 = diff;
        while (value[diff].turn_id !== turnId) {
          diff = diff - 1;
          num3 = -1;
          if (0 > diff) {
            break;
          }
        }
      }
    }
    if (-1 === num3) {
      let diff1 = value.length - 1;
      num3 = -1;
      if (0 <= diff1) {
        while (true) {
          let tmp5 = value[diff1];
          if ("assistant" === tmp5.role) {
            let someResult = true === tmp5.finished || true === tmp5.continued || "" !== tmp5.content || null != tmp5.proposal || null != tmp5.clarification || null != tmp5.intake;
            if (!someResult) {
              let steps = tmp5.steps;
              someResult = steps.some((kind) => set.has(kind.kind));
            }
            if (!someResult) {
              num3 = diff1;
              if (null == tmp5.turn_id) {
                break;
              }
            }
            break;
          }
          diff1 = diff1 - 1;
          num3 = -1;
          if (0 > diff1) {
            break;
          }
        }
      }
    }
    if (-1 !== num3) {
      let tmp16 = tmp15;
      if (null != turnId) {
        tmp16 = tmp15;
        if (null == value[num3].turn_id) {
          const obj2 = { turn_id: turnId };
          const merged = Object.assign(tmp15);
          tmp16 = obj2;
        }
      }
      const items = [];
      set2 = map.set;
      const arraySpreadResult = HermesBuiltin.arraySpread(items, value.slice(0, num3), 0);
      items[arraySpreadResult] = fn(tmp16);
      HermesBuiltin.arraySpread(items, value.slice(num3 + 1), arraySpreadResult + 1);
      set2(projectId, items);
    } else {
      let obj;
      const items1 = [];
      set = map.set;
      const arraySpreadResult4 = HermesBuiltin.arraySpread(items1, value, 0);
      const tmp13 = newMessage;
      if (null != turnId) {
        obj = { turnId };
        const obj3 = { turnId };
      } else {
        obj = {};
      }
      items1[arraySpreadResult4] = fn(tmp13("assistant", "", obj));
      const result = set(projectId, items1);
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
          tmp4 = flag2;
          if ("side_reply" !== tmp.kind) {
            let flag = flag2;
            if (!flag) {
              let someResult = true === tmp.finished || true === tmp.continued || "" !== tmp.content || null != tmp.proposal || null != tmp.clarification || null != tmp.intake;
              if (!someResult) {
                let steps = tmp.steps;
                someResult = steps.some((kind) => set.has(kind.kind));
              }
              flag = true;
              if (!someResult) {
                break;
              }
            }
            tmp4 = flag;
            if (null != tmp.turn_id) {
              let someResult1 = true === tmp.finished || true === tmp.continued || "" !== tmp.content || null != tmp.proposal || null != tmp.clarification || null != tmp.intake;
              if (!someResult1) {
                let steps2 = tmp.steps;
                someResult1 = steps2.some((kind) => set.has(kind.kind));
              }
              tmp4 = flag;
              if (!someResult1) {
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
function recordThinkingTransition(projectId) {
  let tmp48;
  let tmp62;
  let flag = map2.get(projectId);
  const obj = map2;
  if (flag == null) {
    flag = false;
  }
  const tmp2 = hasOpenTurn(map.get(projectId));
  const obj2 = map;
  if (flag !== tmp2) {
    const result = obj.set(projectId, tmp2);
    const index = closure_22.indexOf(projectId);
    if (-1 !== index) {
      closure_22.splice(index, 1);
    }
    closure_22.unshift(projectId);
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
              if ("side_reply" !== value[diff].kind) {
                break;
              }
            }
            diff = diff - 1;
            tmp5 = null;
          }
          tmp5 = value[diff];
        }
      }
      let tmp8 = null != tmp5;
      if (tmp8) {
        const str3 = tmp5.content;
        let someResult = "" !== str3.trim() || null != tmp5.proposal || null != tmp5.clarification || null != tmp5.intake;
        if (!someResult) {
          const steps = tmp5.steps;
          someResult = steps.some((kind) => {
            const hasItem = set.has(kind.kind) && "terminal_error" !== kind.kind;
            return hasItem;
          });
        }
        tmp8 = someResult;
      }
      if (tmp8) {
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
            let someResult1 = true === tmp14.finished || true === tmp14.continued || "" !== tmp14.content || null != tmp14.proposal || null != tmp14.clarification || null != tmp14.intake;
            if (!someResult1) {
              const steps2 = tmp14.steps;
              someResult1 = steps2.some((kind) => set.has(kind.kind));
            }
            if (someResult1) {
              set = map.set;
              const items = [];
              const arraySpreadResult = HermesBuiltin.arraySpread(items, value3.slice(0, diff1), 0);
              const obj4 = { finished_at: Date.now() };
              const merged = Object.assign(tmp14);
              const _Date2 = Date;
              items[arraySpreadResult] = obj4;
              HermesBuiltin.arraySpread(items, value3.slice(diff1 + 1), arraySpreadResult + 1);
              const result2 = set(projectId, items);
            }
          }
        }
      }
      const project = VibegrationsProjectStore.getProject(projectId);
      const obj5 = VibegrationsProjectStore;
      if (null != project) {
        const obj9 = VibegrationsPlatformUtilsDefault;
        let result4 = obj9.areTurnNotificationsDisabled();
        const tmp72 = importDefault;
        if (!result4) {
          result4 = SelfPresenceStore.getStatus() === constants.DND;
        }
        if (!result4) {
          const FocusMode = UserSettings.FocusMode;
          result4 = FocusMode.getSetting();
        }
        if (!result4) {
          result4 = FamilyCenterStore.isCurrentUserInRestrictedHours();
        }
        if (!result4) {
          const isSoundDisabledResult = NotificationSettingsStore.isSoundDisabled("message1");
          const guildId = SelectedGuildStore.getGuildId();
          let guild_id = null;
          if (null != guildId) {
            guild_id = null;
            if (obj5.getSelectedProjectId(guildId) === projectId) {
              guild_id = guildId;
            }
          }
          let isWindowFocusedResult = null != guild_id && SelectedChannelStore.getChannelId() === StaticChannelRoute.VIBEGRATIONS;
          if (isWindowFocusedResult) {
            const tmp72Result = tmp72(8498);
            isWindowFocusedResult = tmp72Result.isWindowFocused();
          }
          if (guild_id == null) {
            guild_id = project.guild_id;
          }
          if (guild_id == null) {
            guild_id = project.preview_guild_id;
          }
          const value4 = map.get(projectId);
          let tmp44 = null;
          if (null != value4) {
            let diff2 = value4.length - 1;
            tmp44 = null;
            if (0 <= diff2) {
              while (true) {
                if ("assistant" === value4[diff2].role) {
                  if ("side_reply" !== value4[diff2].kind) {
                    break;
                  }
                }
                diff2 = diff2 - 1;
                tmp44 = null;
              }
              tmp44 = value4[diff2];
            }
          }
          let content = null;
          if (null != tmp44) {
            const str9 = tmp44.content;
            if ("" !== str9.trim()) {
              content = tmp44.content;
            } else if (null != tmp44.proposal) {
              content = tmp44.proposal.summary;
            } else if (null != tmp44.clarification) {
              const first = tmp44.clarification.questions[0];
              let question;
              if (first != null) {
                question = first.question;
              }
              if (question == null) {
                question = null;
              }
              content = question;
            } else if (null != tmp44.intake) {
              content = tmp44.intake.intro.lead;
            } else {
              let diff3 = tmp44.steps.length - 1;
              content = null;
              if (0 <= diff3) {
                while (true) {
                  tmp48 = tmp44.steps[diff3];
                  if ("error" !== tmp48.kind) {
                    if ("terminal_error" !== tmp48.kind) {
                      if ("preview_ready" === tmp48.kind) {
                        let intl = intl2.intl;
                        content = intl.string(_modDef3715["78YNh7"]);
                      } else {
                        diff3 = diff3 - 1;
                        content = null;
                      }
                    }
                  }
                  if (null != tmp48.message) {
                    if ("" !== tmp48.message) {
                      break;
                    }
                  }
                }
                content = tmp48.message;
              }
            }
          }
          if (null != content) {
            if (isWindowFocusedResult) {
              if (!isSoundDisabledResult) {
                const obj8 = SoundUtils;
                obj8.playSound(bit_message1, 0.4);
              }
            } else {
              let CHANNELResult = null;
              if (null != guild_id) {
                CHANNELResult = authStore2.CHANNEL(guild_id, StaticChannelRoute.VIBEGRATIONS, projectId);
              }
              const obj6 = { projectId, guildId: guild_id, title: project.name, body: content, route: CHANNELResult, sound: tmp62, volume: 0.4 };
              const presentTurnNotification = VibegrationsPlatformUtilsDefault.presentTurnNotification;
              VibegrationsPlatformUtilsDefault;
              if (guild_id == null) {
                guild_id = null;
              }
              tmp62 = undefined;
              if (!isSoundDisabledResult) {
                tmp62 = bit_message1;
              }
              const result3 = presentTurnNotification(obj6);
            }
          }
        }
      }
    }
  }
}
function purgeProject(projectId) {
  let deleteResult = map.delete(projectId);
  const deleteResult1 = map5.delete(projectId);
  const deleteResult2 = set2.delete(projectId);
  const deleteResult3 = map1.delete(projectId);
  const deleteResult4 = map2.delete(projectId);
  const deleteResult5 = map3.delete(projectId);
  const deleteResult6 = map4.delete(projectId);
  const deleteResult7 = set1.delete(projectId);
  const index = closure_22.indexOf(projectId);
  const arr = closure_22;
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
    deleteResult = tmp10;
  }
  return deleteResult;
}
function openTimeline(steps) {
  let first;
  let items1;
  let tmp7;
  let items = steps;
  if (steps === undefined) {
    items = [];
  }
  set = new Set();
  let num = -1;
  const entries = items.entries();
  const tmp2 = entries[Symbol.iterator]();
  while (tmp2 !== undefined) {
    [first, tmp7] = tmp3;
    let tmp8 = tmp7;
    if (null != tmp7.turn_seq) {
      let addResult = set.add(tmp8.turn_seq);
    }
    let tmp12 = -1 === num;
    if (tmp12) {
      tmp12 = "todos" === tmp8.kind;
    }
    if (tmp12) {
      tmp12 = null == tmp8.task_id;
    }
    if (tmp12) {
      num = first;
    }
    continue;
  }
  const obj = { steps: items1, seenSeq: set, todosAt: num };
  items1 = [...items];
  return obj;
}
function pushStep(todosAt, turn_seq) {
  if (null == turn_seq.turn_seq) {
    if ("todos" === turn_seq.kind) {
      if (null == turn_seq.task_id) {
        if (-1 === todosAt.todosAt) {
          todosAt.todosAt = todosAt.steps.length;
          const steps = todosAt.steps;
          steps.push(turn_seq);
          if (null != turn_seq.turn_seq) {
            const seenSeq4 = todosAt.seenSeq;
            seenSeq4.add(turn_seq.turn_seq);
          }
        } else {
          if (null != todosAt.steps[todosAt.todosAt].turn_seq) {
            const seenSeq2 = todosAt.seenSeq;
            seenSeq2.delete(todosAt.steps[todosAt.todosAt].turn_seq);
          }
          todosAt.steps[todosAt.todosAt] = turn_seq;
          if (null != turn_seq.turn_seq) {
            const seenSeq3 = todosAt.seenSeq;
            seenSeq3.add(turn_seq.turn_seq);
          }
        }
      }
    }
    const steps1 = todosAt.steps;
    steps1.push(turn_seq);
    if (null != turn_seq.turn_seq) {
      const seenSeq5 = todosAt.seenSeq;
      seenSeq5.add(turn_seq.turn_seq);
    }
  } else {
    const seenSeq = todosAt.seenSeq;
  }
}
function replayTimeline(steps) {
  const tmp = openTimeline();
  const tmp2 = steps[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = pushStep(tmp, tmp3);
    continue;
  }
  return tmp.steps;
}
function stoppable(role) {
  let tmp = "assistant" === role.role && "side_reply" !== role.kind;
  if (tmp) {
    let someResult = true === role.finished || true === role.continued || "" !== role.content || null != role.proposal || null != role.clarification || null != role.intake;
    if (!someResult) {
      const steps = role.steps;
      someResult = steps.some((kind) => set.has(kind.kind));
    }
    tmp = !someResult;
  }
  if (tmp) {
    tmp = true !== role.stopRequested;
  }
  return tmp;
}
let closure_3 = ["disposition"];
let closure_4 = ["disposition"];
let closure_5 = ["disposition"];
({ Routes: closure_14, StatusTypes: closure_15 } = Constants);
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const bit_message1 = "bit_message1";
let set = new Set(["reply", "plan_proposed", "terminal_error"]);
const map = new Map();
const map1 = new Map();
const map2 = new Map();
const authStore5 = [];
const map3 = new Map();
const map4 = new Map();
let set1 = new Set();
let width = 0;
let closure_27 = [];
let c28 = 0;
const Store = get_initializedDefault.Store;
class VibegrationsChatStore extends Store {
  initialize() {
    this.waitFor(FamilyCenterStore, NotificationSettingsStore, SelectedChannelStore, SelectedGuildStore, SelfPresenceStore, VibegrationsProjectStore);
  }
  getMessages(arg0) {
    let value = map.get(arg0);
    if (value == null) {
      value = closure_27;
    }
    return value;
  }
  hasPendingSettingsRequest(arg0) {
    const messages = this.getMessages(arg0);
    return null != tmp && "assistant" === tmp.role && null != tmp.settingsRequest;
  }
  isThinking(item10008) {
    return hasOpenTurn(map.get(item10008));
  }
  hasLoadedHistory(projectId) {
    return map5.has(projectId);
  }
  isHistoryUnavailable(projectId) {
    return set2.has(projectId);
  }
  getFinishedAt(arg0) {
    let tmp = null;
    if (!hasOpenTurn(map.get(arg0))) {
      let value = map1.get(arg0);
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
  getSidebarWidth() {
    return width;
  }
  getActivityOrderedProjectIds() {
    return closure_22.slice();
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
const prototype = VibegrationsChatStore.prototype;
const map5 = new Map();
let set2 = new Set();
let obj = {
  LOGOUT: function handleLogout() {
    const obj = map;
    if (0 === map.size) {
      if (0 === map1.size) {
        if (0 === map2.size) {
          if (0 === map3.size) {
            if (0 === map4.size) {
              if (0 === set1.size) {
                if (0 === map5.size) {
                  if (0 === set2.size) {
                    if (0 === closure_22.length) {
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
    obj.clear();
    map1.clear();
    map2.clear();
    map3.clear();
    map4.clear();
    set1.clear();
    map5.clear();
    set2.clear();
    closure_22.length = 0;
    width = 0;
  },
  VIBEGRATIONS_CHAT_HISTORY_SET: function handleChatHistorySet(degraded) {
    let cursor;
    let entries;
    let projectId;
    ({ projectId, entries, cursor } = degraded);
    set1 = undefined;
    degraded = degraded.degraded;
    let tmp = map5;
    set = map5.set;
    if (cursor == null) {
      cursor = null;
    }
    const result = set(projectId, cursor);
    if (true === degraded) {
      set2.add(projectId);
    } else {
      set2.delete(projectId);
    }
    map4.delete(projectId);
    set1.delete(projectId);
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
    const result1 = map.set(projectId, found.map(newMessageFromHistory));
    recordThinkingTransition(projectId);
  },
  VIBEGRATIONS_CHAT_HISTORY_PREPEND: function handleChatHistoryPrepend(cursor) {
    let entries;
    let projectId;
    ({ projectId, entries } = cursor);
    set1 = undefined;
    const result = map5.set(projectId, cursor.cursor);
    if (0 !== entries.length) {
      let items1 = map.get(projectId);
      const tmp11 = map;
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
      set = tmp11.set;
      HermesBuiltin.arraySpread(items, items1, HermesBuiltin.arraySpread(items, mapped.filter((id) => {
        const tmp = null == id.id || !set1.has(id.id);
        return tmp;
      }), 0));
      const result1 = set(projectId, items);
    }
  },
  VIBEGRATIONS_CHAT_MESSAGE_APPEND: function handleChatMessageAppend(optimisticId) {
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
  VIBEGRATIONS_CHAT_MESSAGE_DISPOSITION: function handleChatMessageDisposition(arg0) {
    let activeTurnId;
    let closure_129_0;
    let disposition;
    let finished_at;
    let projectId;
    ({ projectId, id: closure_129_0, activeTurnId, disposition } = arg0);
    const value = map.get(projectId);
    if (null == value) {
      return false;
    } else {
      const findIndexResult = value.findIndex((id) => id.id === closure_1_0);
      if (-1 === findIndexResult) {
        return false;
      } else {
        let arr3 = value;
        if (value[findIndexResult].disposition !== disposition) {
          const items = [];
          const arraySpreadResult = HermesBuiltin.arraySpread(items, value.slice(0, findIndexResult), 0);
          const obj2 = { disposition };
          const merged = Object.assign(value[findIndexResult]);
          items[arraySpreadResult] = obj2;
          HermesBuiltin.arraySpread(items, value.slice(findIndexResult + 1), arraySpreadResult + 1);
          arr3 = items;
        }
        let num4 = -1;
        if ("steered" === disposition) {
          let num5 = -1;
          if (null != activeTurnId) {
            let diff = arr3.length - 1;
            num5 = -1;
            if (0 <= diff) {
              num5 = diff;
              while (arr3[diff].turn_id !== activeTurnId) {
                diff = diff - 1;
                num5 = -1;
                if (0 > diff) {
                  break;
                }
              }
            }
          }
          num4 = num5;
        }
        if (-1 !== num4) {
          if (num4 <= findIndexResult) {
            const items1 = [, ];
            set = map.set;
            const arraySpreadResult5 = HermesBuiltin.arraySpread(items1, arr3.slice(0, num4), 0);
            const obj3 = { continued: true, finished_at };
            const merged1 = Object.assign(arr3[num4]);
            finished_at = arr3[num4].finished_at;
            if (finished_at == null) {
              const _Date = Date;
              finished_at = Date.now();
            }
            items1[arraySpreadResult5] = obj3;
            const obj4 = { turnId: activeTurnId };
            const arraySpreadResult6 = HermesBuiltin.arraySpread(items1, arr3.slice(num4 + 1), arraySpreadResult5 + 1);
            items1[arraySpreadResult6] = newMessage("assistant", "", obj4);
            const result = set(projectId, items1);
            recordThinkingTransition(projectId);
          }
        }
        if (arr3 !== value) {
          const result1 = obj.set(projectId, arr3);
        }
        return arr3 !== value;
      }
    }
  },
  VIBEGRATIONS_CHAT_SIDE_REPLY: function handleChatSideReply(inReplyTo) {
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
        const disposition = tmp8.disposition;
        const items = [, ];
        set = map.set;
        const tmp11 = _objectWithoutProperties(value[findIndexResult], closure_3);
        const arraySpreadResult = HermesBuiltin.arraySpread(items, value.slice(0, findIndexResult), 0);
        items[arraySpreadResult] = tmp11;
        const sum = arraySpreadResult + 1;
        items[sum] = tmp3;
        HermesBuiltin.arraySpread(items, value.slice(findIndexResult + 1), sum + 1);
        const result = set(projectId, items);
      } else {
        const items1 = [];
        items1[HermesBuiltin.arraySpread(items1, value, 0)] = tmp3;
        const result1 = obj.set(projectId, items1);
      }
    }
  },
  VIBEGRATIONS_CHAT_STEP_APPEND: function handleChatStepAppend(turnId) {
    let projectId;
    ({ projectId, step: require } = turnId);
    patchTurn(projectId, turnId.turnId, (steps) => {
      let tmp2;
      const obj = { steps: tmp2.steps };
      const merged = Object.assign(steps);
      tmp2 = openTimeline(steps.steps);
      pushStep(tmp2, require);
      return obj;
    });
    let tmp2 = recordThinkingTransition(projectId);
  },
  VIBEGRATIONS_CHAT_TURN_FINISHED: function handleChatTurnFinished(turnId) {
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
          return _objectWithoutProperties(disposition, closure_1_4);
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
    recordThinkingTransition(projectId);
  },
  VIBEGRATIONS_CHAT_INTERRUPTED: function handleChatInterrupted(projectId) {
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
  VIBEGRATIONS_CHAT_STOP_REQUESTED: function handleChatStopRequested(projectId) {
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
  VIBEGRATIONS_CHAT_PROVISIONAL_TODO: function handleChatProvisionalTodo(text) {
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
          num2 = diff;
          while (value[diff].turn_id !== turnId) {
            diff = diff - 1;
            num2 = -1;
            if (0 > diff) {
              break;
            }
          }
        }
      }
      let flag2 = -1 !== num2;
      if (-1 !== num2) {
        const items = [];
        set = map.set;
        const arraySpreadResult = HermesBuiltin.arraySpread(items, value.slice(0, num2), 0);
        const obj = { provisionalTodo: text };
        const merged = Object.assign(value[num2]);
        items[arraySpreadResult] = obj;
        HermesBuiltin.arraySpread(items, value.slice(num2 + 1), arraySpreadResult + 1);
        const result = set(projectId, items);
        flag2 = true;
      }
      flag = flag2;
    }
    return flag ? undefined : false;
  },
  VIBEGRATIONS_CHAT_THINKING_SET: function handleChatThinkingSet(arg0) {
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
  VIBEGRATIONS_CHAT_COMPACTING_SET: function handleChatCompactingSet(arg0) {
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
  VIBEGRATIONS_CHAT_USAGE_SET: function handleChatUsageSet(projectId) {
    const result = map3.set(projectId.projectId, projectId.project);
  },
  VIBEGRATIONS_CHAT_SIDEBAR_WIDTH_SET: function handleChatSidebarWidthSet(width) {
    width = width.width;
    if (width === width) {
      return false;
    }
  },
  VIBEGRATIONS_CHAT_TURN_PATCH: function handleChatTurnPatch(turnId) {
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
  VIBEGRATIONS_CHAT_CONN_STATE: function handleChatConnState(arg0) {
    let connState;
    let projectId;
    ({ projectId, connState } = arg0);
    if ("closed" !== connState) {
      if ("failed" !== connState) {
        return false;
      }
    }
    let obj = map;
    const deleteResult = set1.delete(projectId);
    const deleteResult1 = map4.delete(projectId);
    const value = map.get(projectId);
    if (null != value) {
      if (value.some((role) => {
        let tmp = "assistant" === role.role;
        if (tmp) {
          let someResult = true === role.finished || true === role.continued || "" !== role.content || null != role.proposal || null != role.clarification || null != role.intake;
          if (!someResult) {
            const steps = role.steps;
            someResult = steps.some((kind) => set.has(kind.kind));
          }
          tmp = !someResult;
        }
        return tmp;
      })) {
        const result = obj.set(projectId, value.map((disposition) => {
          let intl;
          let items;
          if (null != disposition.disposition) {
            disposition = disposition.disposition;
            return _objectWithoutProperties(disposition, closure_1_5);
          } else {
            let tmp3 = disposition;
            if ("assistant" === disposition.role) {
              let someResult = true === disposition.finished || true === disposition.continued || "" !== disposition.content || null != disposition.proposal || null != disposition.clarification || null != disposition.intake;
              if (!someResult) {
                const steps = disposition.steps;
                someResult = steps.some((kind) => set.has(kind.kind));
              }
              tmp3 = disposition;
              if (!someResult) {
                const obj = { provisionalTodo: undefined, steps: items };
                const merged = Object.assign(disposition);
                items = [];
                const obj2 = { type: "step", kind: "terminal_error", message: intl.string(_modDef3715["wjWm+/"]) };
                const arraySpreadResult = HermesBuiltin.arraySpread(items, disposition.steps, 0);
                intl = intl2.intl;
                items[arraySpreadResult] = obj2;
                tmp3 = obj;
              }
            }
            return tmp3;
          }
        }));
        recordThinkingTransition(projectId);
      }
    }
    return !(!deleteResult1 && !deleteResult) && undefined;
  },
  VIBEGRATIONS_PROJECT_CREATE_SUCCESS: function handleProjectCreateSuccess(project) {
    project = project.project;
    const obj = map5;
    if (map5.has(project.id)) {
      return false;
    } else {
      const result = obj.set(project.id, null);
    }
  },
  VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function handleProjectDeleteSuccess(projectId) {
    if (!purgeProject(projectId.projectId)) {
      return false;
    }
  },
  VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function handleProjectsFetchSuccess() {
    const items = [...map.keys(), ...map5.keys(), ...map1.keys(), ...map2.keys(), ...map3.keys()];
    let flag = false;
    set = new Set(items);
    const iter = set[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let tmp5 = null == VibegrationsProjectStore.getProject(nextResult);
      if (tmp5) {
        tmp5 = purgeProject(tmp3);
      }
      if (tmp5) {
        flag = true;
      }
      continue;
    }
    return flag ? undefined : false;
  }
};
const vibegrationsChatStore = new VibegrationsChatStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/vibegrations/stores/VibegrationsChatStore.tsx");

export default vibegrationsChatStore;
export const turnSettled = function turnSettled(message) {
  let someResult = true === message.finished || true === message.continued || "" !== message.content || null != message.proposal || null != message.clarification || null != message.intake;
  if (!someResult) {
    const steps = message.steps;
    someResult = steps.some((kind) => set.has(kind.kind));
  }
  return someResult;
};
export const getOlderHistoryCursor = function getOlderHistoryCursor(projectId) {
  let value = map5.get(projectId);
  if (value == null) {
    value = null;
  }
  return value;
};
export { replayTimeline };
