// Module ID: 15751
// Function ID: 15752
// Name: newMessageFromHistory
// Dependencies: [5793, 10245, 1931, 4006, 4867, 5683, 676, 1379, 1236, 3259, 3862, 12613, 10271, 14477, 15752, 1222, 589, 709, 2]
// Exports: turnSettled

// Module 15751 (newMessageFromHistory)
import freshTeenActivityWithMap from "freshTeenActivityWithMap";
import DesktopNotificationTypes from "DesktopNotificationTypes";
import handleConnectionOpen from "handleConnectionOpen";
import closure_6 from "handleConnectionOpen";
import filterPlayingActivities from "filterPlayingActivities";
import handleProjectUpsert from "handleProjectUpsert";
import ME from "ME";
import { StaticChannelRoute } from "set";
import { Store } from "initialize";
import set from "handleConnectionOpen";

let c10;
let c9;
let unpackModuleId;
let require = arg1;
function newMessageFromHistory(role) {
  const ts = role.ts;
  const obj = { id: `m${tmp}`, role: role.role, content: role.content, steps: [], created_at: null };
  const sum = c22 + 1;
  c22 = sum;
  if (null != ts) {
    const _Date2 = Date;
    let parsed = Date.parse(ts);
  } else {
    const _Date = Date;
    parsed = Date.now();
  }
  obj[4] = parsed;
  if (null != role.kind) {
    obj.kind = role.kind;
  }
  if (null != role.proposal) {
    obj.proposal = role.proposal;
  }
  return obj;
}
function recordThinkingTransition(projectId) {
  let tmp30;
  let obj = map2;
  let flag = map2.get(projectId);
  if (flag == null) {
    flag = false;
  }
  let value = map.get(projectId);
  let flag2 = false;
  if (null != value) {
    flag2 = false;
    if (0 !== value.length) {
      let tmp2 = "assistant" === tmp.role;
      if (tmp2) {
        let someResult = "" !== tmp.content || null != tmp.proposal;
        if (!someResult) {
          const steps = tmp.steps;
          someResult = steps.some((kind) => set.has(kind.kind));
        }
        tmp2 = !someResult;
      }
      flag2 = tmp2;
    }
  }
  if (flag !== flag2) {
    const result = obj.set(projectId, flag2);
    if (flag2) {
      map1.delete(projectId);
    } else {
      value = obj2.get(projectId);
      let tmp4;
      if (value != null) {
        tmp4 = value[value.length - 1];
      }
      let role;
      if (tmp4 != null) {
        role = tmp4.role;
      }
      let tmp6 = "assistant" === role;
      if (tmp6) {
        let someResult1 = "" !== tmp4.content.trim() || null != tmp4.proposal;
        if (!someResult1) {
          const steps2 = tmp4.steps;
          someResult1 = steps2.some((kind) => {
            let hasItem = set.has(kind.kind);
            if (hasItem) {
              hasItem = "terminal_error" !== kind.kind;
            }
            return hasItem;
          });
        }
        tmp6 = someResult1;
        const str4 = tmp4.content;
      }
      if (tmp6) {
        const _Date = Date;
        const result1 = obj3.set(projectId, Date.now());
      } else {
        obj3.delete(projectId);
      }
      project = project.getProject(projectId);
      if (null != project) {
        let setting = desktopType.getDesktopType() === constants2.NEVER;
        if (!setting) {
          setting = status.getStatus() === constants.DND;
        }
        if (!setting) {
          const FocusMode = require(3862) /* explicitContentFromProto */.FocusMode;
          setting = FocusMode.getSetting();
        }
        if (!setting) {
          setting = currentUserInRestrictedHours.isCurrentUserInRestrictedHours();
        }
        if (!setting) {
          const isSoundDisabledResult = obj10.isSoundDisabled(message1);
          guildId = guildId.getGuildId();
          let guild_id = null;
          if (null != guildId) {
            guild_id = null;
            if (obj4.getSelectedProjectId(guildId) === projectId) {
              guild_id = guildId;
            }
          }
          let isWindowFocusedResult = null != guild_id;
          if (isWindowFocusedResult) {
            isWindowFocusedResult = channelId.getChannelId() === StaticChannelRoute.VIBEGRATIONS;
          }
          if (isWindowFocusedResult) {
            isWindowFocusedResult = importDefault(12613).isWindowFocused();
            const obj5 = importDefault(12613);
          }
          if (guild_id == null) {
            guild_id = project.guild_id;
          }
          if (guild_id == null) {
            guild_id = project.preview_guild_id;
          }
          const value1 = obj2.get(projectId);
          let content = null;
          if (null != value1) {
            content = null;
            if (0 !== value1.length) {
              content = null;
              if ("assistant" === value1[value1.length - 1].role) {
                if ("" !== str7.trim()) {
                  content = tmp59.content;
                } else if (null != tmp59.proposal) {
                  content = tmp59.proposal.summary;
                } else {
                  let diff = tmp59.steps.length - 1;
                  content = null;
                  if (0 <= diff) {
                    while (true) {
                      tmp30 = tmp59.steps[diff];
                      let tmp31 = diff;
                      if ("error" !== tmp30.kind) {
                        if ("terminal_error" !== tmp30.kind) {
                          if ("preview_ready" === tmp30.kind) {
                            let tmp33 = require;
                            let tmp34 = dependencyMap;
                            let intl = require(1236) /* getSystemLocale */.intl;
                            let tmp35 = importDefault;
                            content = intl.string(importDefault(3259)["78YNh7"]);
                          } else {
                            diff = diff - 1;
                            content = null;
                          }
                        }
                      }
                      if (null != tmp30.message) {
                        if ("" !== tmp30.message) {
                          break;
                        }
                      }
                    }
                    content = tmp30.message;
                  }
                }
                str7 = tmp59.content;
              }
            }
          }
          if (null != content) {
            if (isWindowFocusedResult) {
              if (!isSoundDisabledResult) {
                require(10271) /* createSoundForPack */.playSound(tmp18, 0.4);
                const obj9 = require(10271) /* createSoundForPack */;
              }
            } else {
              let CHANNELResult = null;
              if (null != guild_id) {
                CHANNELResult = closure_9.CHANNEL(guild_id, StaticChannelRoute.VIBEGRATIONS, projectId);
              }
              require = CHANNELResult;
              const obj6 = importDefault(14477);
              const tmp42 = require(15752) /* registerAsset */;
              const name = project.name;
              obj = { tag: null, sound: null, volume: 0.4, fallbackDeepLink: null, onClick: null, isUserAvatar: false };
              const _HermesInternal = HermesInternal;
              obj[0] = "vibegrations-" + projectId;
              let tmp44;
              if (!isSoundDisabledResult) {
                tmp44 = tmp18;
              }
              obj[1] = tmp44;
              let notificationDeepLink;
              if (null != CHANNELResult) {
                notificationDeepLink = tmp39(12613).createNotificationDeepLink(CHANNELResult);
                const tmp39Result = tmp39(12613);
              }
              obj[3] = notificationDeepLink;
              let fn;
              if (null != CHANNELResult) {
                fn = () => CHANNELResult(outer1_2[15]).transitionTo(closure_0);
              }
              obj[4] = fn;
              obj6.showNotification(tmp42, name, content, { notif_type: "VIBEGRATIONS_ASSISTANT_FINISHED" }, obj);
              tmp39 = importDefault;
            }
          }
        }
        obj10 = desktopType;
      }
      obj4 = project;
    }
  }
}
function purgeProject(arg0) {
  let deleteResult = map.delete(arg0);
  const deleteResult1 = map1.delete(arg0);
  const deleteResult2 = map2.delete(arg0);
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
({ Routes: c9, StatusTypes: c10, DesktopNotificationTypes: unpackModuleId } = ME);
const message1 = "message1";
let set = new Set(["reply", "plan_proposed", "preview_ready", "terminal_error"]);
const map = new Map();
const map1 = new Map();
const map2 = new Map();
const map3 = new Map();
let c19 = 0;
let c20 = null;
let closure_21 = [];
let c22 = 0;
class VibegrationsChatStore extends Store {
}
const prototype = VibegrationsChatStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(freshTeenActivityWithMap, DesktopNotificationTypes, handleConnectionOpen, closure_6, filterPlayingActivities, handleProjectUpsert);
};
prototype["getMessages"] = function getMessages(arg0) {
  let value = map.get(arg0);
  if (value == null) {
    value = closure_21;
  }
  return value;
};
prototype["isThinking"] = function isThinking(item10008) {
  const value = map.get(item10008);
  let flag = false;
  if (null != value) {
    flag = false;
    if (0 !== value.length) {
      let tmp2 = "assistant" === tmp.role;
      if (tmp2) {
        let someResult = "" !== tmp.content || null != tmp.proposal;
        if (!someResult) {
          const steps = tmp.steps;
          someResult = steps.some((kind) => set.has(kind.kind));
        }
        tmp2 = !someResult;
      }
      flag = tmp2;
    }
  }
  return flag;
};
prototype["getFinishedAt"] = function getFinishedAt(arg0) {
  let value = map.get(arg0);
  let flag = false;
  if (null != value) {
    flag = false;
    if (0 !== value.length) {
      let tmp2 = "assistant" === tmp.role;
      if (tmp2) {
        let someResult = "" !== tmp.content || null != tmp.proposal;
        if (!someResult) {
          const steps = tmp.steps;
          someResult = steps.some((kind) => set.has(kind.kind));
        }
        tmp2 = !someResult;
      }
      flag = tmp2;
    }
  }
  let tmp4 = null;
  if (!flag) {
    value = map1.get(arg0);
    if (value == null) {
      value = null;
    }
    tmp4 = value;
  }
  return tmp4;
};
prototype["getProjectUsage"] = function getProjectUsage(arg0) {
  let value = map3.get(arg0);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["getSidebarWidth"] = function getSidebarWidth() {
  return c19;
};
prototype["getBuilderPreviewApplicationId"] = function getBuilderPreviewApplicationId() {
  return c20;
};
prototype["isAnyThinking"] = function isAnyThinking() {
  const self = this;
  const keys = map.keys();
  for (const item10008 of keys) {
    if (self.isThinking(item10008)) {
      let tmp2 = obj;
      obj.return();
      let flag = true;
      return true;
    }
  }
  return false;
};
const vibegrationsChatStore = new VibegrationsChatStore(require("dispatcher"), {
  LOGOUT: function handleLogout() {
    if (0 === map.size) {
      if (0 === map1.size) {
        if (0 === map2.size) {
          if (0 === map3.size) {
            if (0 === c19) {
              if (null == c20) {
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
    c19 = 0;
    c20 = null;
  },
  VIBEGRATIONS_CHAT_HISTORY_SET: function handleChatHistorySet(arg0) {
    let entries;
    let projectId;
    ({ projectId, entries } = arg0);
    const result = map.set(projectId, entries.map(newMessageFromHistory));
    recordThinkingTransition(projectId);
  },
  VIBEGRATIONS_CHAT_MESSAGE_APPEND: function handleChatMessageAppend(content) {
    const projectId = content.projectId;
    let obj = map;
    let items = map.get(projectId);
    if (items == null) {
      items = [];
    }
    items = [...items];
    obj = { id: `m${tmp2}`, role: "user", content: content.content, steps: [], created_at: Date.now() };
    const sum = sum1 + 1;
    sum1 = sum;
    items[tmp] = obj;
    obj = { id: `m${tmp3}`, role: "assistant", content: "", steps: [], created_at: Date.now() };
    sum1 = sum1 + 1;
    items[tmp + 1] = obj;
    const result = obj.set(projectId, items);
    recordThinkingTransition(projectId);
  },
  VIBEGRATIONS_CHAT_STEP_APPEND: function handleChatStepAppend(projectId) {
    projectId = projectId.projectId;
    let obj = map;
    const value = map.get(projectId);
    if (null != value) {
      if (0 !== value.length) {
        if ("assistant" === value[value.length - 1].role) {
          const items = [];
          obj = {};
          const merged = Object.assign(tmp);
          const items1 = [];
          items1[HermesBuiltin.arraySpread(tmp.steps, 0)] = projectId.step;
          obj.steps = items1;
          items[HermesBuiltin.arraySpread(value.slice(0, -1), 0)] = obj;
          const result = obj.set(projectId, items);
          const arraySpreadResult = HermesBuiltin.arraySpread(value.slice(0, -1), 0);
        }
      }
    }
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
    let patch;
    let projectId;
    ({ projectId, patch } = arg0);
    let obj = map;
    const value = map.get(projectId);
    if (null != value) {
      if (0 !== value.length) {
        if ("assistant" === value[value.length - 1].role) {
          const items = [];
          obj = {};
          const merged = Object.assign(tmp);
          const merged1 = Object.assign(patch);
          items[HermesBuiltin.arraySpread(value.slice(0, -1), 0)] = obj;
          const result = obj.set(projectId, items);
          const arraySpreadResult = HermesBuiltin.arraySpread(value.slice(0, -1), 0);
        }
      }
    }
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
          let someResult = "" !== role.content;
          if (!someResult) {
            someResult = null != role.proposal;
          }
          if (!someResult) {
            const steps = role.steps;
            someResult = steps.some((kind) => set.has(kind.kind));
          }
          tmp = !someResult;
        }
        return tmp;
      })) {
        const result = map.set(projectId, value.map((role) => {
          let tmp = role;
          if ("assistant" === role.role) {
            let someResult = "" !== role.content;
            if (!someResult) {
              someResult = null != role.proposal;
            }
            if (!someResult) {
              const steps = role.steps;
              someResult = steps.some((kind) => set.has(kind.kind));
            }
            tmp = role;
            if (!someResult) {
              let obj = {};
              const merged = Object.assign(role);
              const items = [];
              obj = { type: "step", kind: "terminal_error", message: null };
              const intl = callback(1236).intl;
              obj[2] = intl.string(callback2(3259)["wjWm+/"]);
              items[HermesBuiltin.arraySpread(role.steps, 0)] = obj;
              obj.steps = items;
              tmp = obj;
              const arraySpreadResult = HermesBuiltin.arraySpread(role.steps, 0);
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
    projectId = projectId.projectId;
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
    if (!deleteResult) {
      return false;
    }
    deleteResult3 = map3.delete(projectId);
  },
  VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function handleProjectsFetchSuccess(projects) {
    projects = projects.projects;
    const items = [...map.keys(), ...map1.keys(), ...map2.keys(), ...map3.keys()];
    const set = new Set(projects.map((id) => id.id));
    let flag = false;
    for (const item10047 of set1) {
      let tmp2 = item10047;
      let hasItem = set.has(item10047);
      let tmp4 = !hasItem;
      if (!hasItem) {
        let tmp5 = purgeProject;
        let tmp6 = item10047;
        tmp4 = purgeProject(tmp2);
      }
      if (tmp4) {
        flag = true;
      }
      continue;
    }
    return flag ? undefined : false;
  }
});
let result = set.fileFinishedImporting("modules/vibegrations/stores/VibegrationsChatStore.tsx");

export default vibegrationsChatStore;
export const turnSettled = function turnSettled(content) {
  let someResult = "" !== content.content;
  if (!someResult) {
    someResult = null != content.proposal;
  }
  if (!someResult) {
    const steps = content.steps;
    someResult = steps.some((kind) => set.has(kind.kind));
  }
  return someResult;
};
