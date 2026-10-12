// Module ID: 13218
// Function ID: 13219
// Name: ConjureConnectionStore
// Dependencies: [5, 1390, 12998, 13219, 10652, 13222, 13223, 13224, 13226, 13227, 13228, 13229, 13230, 584, 13231, 13233, 13234, 13236, 13237, 13238, 13244, 13245, 13246, 13247, 13248, 11412, 13241, 13239, 13249, 569, 13232, 11421, 9807, 13240, 504, 2]
// Exports: closeConnection, ensureConnection, interruptTurn, loadOlderHistory, resetHistoryPaging, sendUserMessage, stageModelSettings, subscribeDebugBacklog

// Module 13218 (ConjureConnectionStore)
import get_initializedDefault from "get initialized" /* 504 */;
import BackoffDefault from "Backoff" /* 569 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import createNonce from "createNonce" /* 9807 */;
import ConjureAnalytics from "ConjureAnalytics" /* 11412 */;
import ConjurePlatformUtilsDefault from "ConjurePlatformUtils" /* 11421 */;
import ConjureChatStore2 from "ConjureChatStore" /* 12998 */;
import conjureChatConnection from "conjureChatConnection" /* 13231 */;
import conjureProjectSockets from "conjureProjectSockets" /* 13232 */;
import conjureBrowserSessionsConnection from "conjureBrowserSessionsConnection" /* 13233 */;
import conjureDebugConnection from "conjureDebugConnection" /* 13234 */;
import conjureLiveReloadConnection from "conjureLiveReloadConnection" /* 13236 */;
import conjureModelSettingsConnection from "conjureModelSettingsConnection" /* 13237 */;
import conjurePreviewConnection from "conjurePreviewConnection" /* 13238 */;
import conjurePreviewClaims from "conjurePreviewClaims" /* 13239 */;
import conjureMediaTickets from "conjureMediaTickets" /* 13240 */;
import ConjureWorkerTickets from "ConjureWorkerTickets" /* 13241 */;
import conjurePublishConnection from "conjurePublishConnection" /* 13244 */;
import conjureRemixConnection from "conjureRemixConnection" /* 13245 */;
import conjureSettingsConnection from "conjureSettingsConnection" /* 13246 */;
import conjureSmartContextConnection from "conjureSmartContextConnection" /* 13247 */;
import conjureProjectConnection from "conjureProjectConnection" /* 13248 */;
import ConjureWebSocket from "ConjureWebSocket" /* 13249 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserStore from "UserStore" /* 1390 */;
import ConjureDebugStore from "ConjureDebugStore" /* 13219 */;
import ConjureProjectStore from "ConjureProjectStore" /* 10652 */;
import ConjureBrowserSessionsStore from "ConjureBrowserSessionsStore" /* 13222 */;
import ConjureSmartContextStore from "ConjureSmartContextStore" /* 13223 */;
import ConjureDebugLogStore from "ConjureDebugLogStore" /* 13224 */;
import ConjureLiveReloadStore from "ConjureLiveReloadStore" /* 13226 */;
import ConjureModelSettingsStore from "ConjureModelSettingsStore" /* 13227 */;
import ConjureOverlayBackgroundStore from "ConjureOverlayBackgroundStore" /* 13228 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 13229 */;
import ConjureSettingsStore from "ConjureSettingsStore" /* 13230 */;
import size from "module_2" /* 2 */;

const ConjureChatStore = ConjureChatStore2;
let c6, c7, closure_4;

function setConnState(projectId, open) {
  obj = DispatcherDefault;
  obj2 = { type: "CONJURE_CHAT_CONN_STATE", projectId, connState: open };
  obj.dispatch(obj2);
}
function appendLocalUserMessage(projectId, nextResult) {
  let attachments;
  let content;
  let date;
  let id1;
  const nonce = nextResult.nonce;
  ({ content, attachments } = nextResult);
  set = map3.set;
  const currentUser = UserStore.getCurrentUser();
  let id;
  obj = UserStore;
  if (currentUser != null) {
    id = currentUser.id;
  }
  const result = set(nonce, id);
  const tmp5 = DispatcherDefault;
  const dispatch = tmp5.dispatch;
  obj2 = { type: "CONJURE_CHAT_MESSAGE_APPEND", projectId, content, id: "optimistic:" + nonce, userId: id1, timestamp: date.toISOString(), attachments };
  const currentUser1 = obj.getCurrentUser();
  id1 = undefined;
  if (currentUser1 != null) {
    id1 = currentUser1.id;
  }
  date = new Date();
  dispatch(obj2);
}
function appendFailedUserMessage(projectId, nonce, message) {
  let attachments;
  let content;
  let date;
  let id1;
  nonce = nonce.nonce;
  ({ content, attachments } = nonce);
  set = map3.set;
  const currentUser = UserStore.getCurrentUser();
  let id;
  obj = UserStore;
  if (currentUser != null) {
    id = currentUser.id;
  }
  const result = set(nonce, id);
  const tmp6 = DispatcherDefault;
  const dispatch = tmp6.dispatch;
  obj2 = { type: "CONJURE_CHAT_MESSAGE_APPEND", projectId, content, id: "optimistic:" + nonce, userId: id1, timestamp: date.toISOString(), attachments };
  const currentUser1 = obj.getCurrentUser();
  id1 = undefined;
  if (currentUser1 != null) {
    id1 = currentUser1.id;
  }
  date = new Date();
  dispatch(obj2);
  const obj4 = conjureChatConnection;
  obj4.sendFailedStep(projectId, message);
}
function failPendingSends(projectId, arg1, message) {
  arg1.pendingSends = [];
  const tmp = arg1.pendingSends[Symbol.iterator]();
  while (tmp !== undefined) {
    let tmp4 = appendFailedUserMessage(projectId, tmp2, message);
    continue;
  }
}
function flushPendingSends(projectId, pendingSends) {
  let attachments;
  let content;
  let nonce;
  if (true !== map2.get(projectId)) {
    pendingSends = pendingSends.pendingSends;
    pendingSends.pendingSends = [];
    const iter = pendingSends[Symbol.iterator]();
    const nextResult = iter.next();
    if (iter !== undefined) {
      appendLocalUserMessage(projectId, nextResult);
      try {
        const ws = pendingSends.ws;
        ({ content, nonce, attachments } = nextResult);
        let mapped;
        const sendUserMessage = ws.sendUserMessage;
        if (attachments != null) {
          mapped = attachments.map((id) => id.id);
        }
        const project = ConjureProjectStore.getProject(projectId);
        let name;
        if (project != null) {
          name = project.name;
        }
        obj = { templateId: null, remix: null, clarificationAnswers: null };
        ({ templateId: obj.templateId, remix: obj.remix, clarificationAnswers: obj.clarificationAnswers } = nextResult);
        sendUserMessage(content, nonce, mapped, name, obj);
      } catch (tmp20) {
        const _Error = Error;
        let str = "send failed";
        if (tmp20 instanceof Error) {
          str = tmp20.message;
        }
        obj2 = conjureChatConnection;
        obj2.sendFailedStep(projectId, str);
      }
    }
  }
}
function handleEvent(projectId, pendingEvents, type) {
  let messages;
  let tmp18;
  let tmp40;
  function appendAcceptedUserMessage(projectId, content) {
    let value;
    let hasItem = null != content.nonce && map.has(content.nonce);
    if (hasItem) {
      if (null != content.nonce) {
        value = map.get(content.nonce);
      }
    }
    if (hasItem) {
      hasItem = null == value || null == content.user_id || value === content.user_id;
    }
    const tmp6 = hasItem && null != content.nonce;
    if (tmp6) {
      map.delete(content.nonce);
    }
    DispatcherDefault;
    obj = { type: "CONJURE_CHAT_MESSAGE_APPEND", projectId, content: content.content, id: content.id };
    if (hasItem) {
      let obj3;
      if (null != content.nonce) {
        const _HermesInternal = HermesInternal;
        obj3 = { optimisticId: "optimistic:" + content.nonce };
        obj2 = { optimisticId: "optimistic:" + content.nonce };
      }
      const merged = Object.assign(obj3);
      ({ user_id: obj.userId, ts: obj.timestamp, attachments: obj.attachments } = content);
      tmp10(obj);
    }
    obj3 = {};
  }
  function handleStep(kind, projectId) {
    projectId = projectId.projectId;
    if ("turn_result" === kind.kind) {
      obj2 = ConjureAnalytics;
      const result = obj2.trackConjureTurnResulted(projectId, kind);
      if ("deployed" === kind.result) {
        const obj4 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: kind.turn_id, patch: { kind: "plan_implemented" } };
        const obj3 = DispatcherDefault;
        obj3.dispatch(obj4);
      }
      const obj7 = { type: "CONJURE_CHAT_TURN_FINISHED", projectId, turnId: null, summary: null };
      ({ turn_id: obj6.turnId, summary: obj6.summary } = kind);
      const obj5 = DispatcherDefault;
      obj5.dispatch(obj7);
      let deleteResult = set.delete(projectId);
      const tmp13 = importDefault;
      if (deleteResult) {
        deleteResult = "cancelled" === kind.result;
      }
      if (deleteResult) {
        const obj8 = { type: "CONJURE_CHAT_INTERRUPTED", projectId };
        const tmp13Result = tmp13(dependencyMap[13]);
        tmp13Result.dispatch(obj8);
      }
    } else if (null != closure_1_20[kind.kind]) {
      closure_1_20[kind.kind](kind, projectId);
    } else {
      obj = conjureChatConnection;
      obj.appendTurnStep(projectId, kind);
    }
  }
  if (!set1.has(type.type)) {
    if ("open" !== map1.get(projectId)) {
      const pendingEvents1 = pendingEvents.pendingEvents;
      pendingEvents1.push(type);
    }
  }
  obj = { projectId, ws: pendingEvents.ws };
  type = type.type;
  if ("history_page" === type) {
    let obj5 = map5;
    if (type.requested === map5.get(projectId)) {
      let deleteResult = obj5.delete(projectId);
      if (true !== type.failed) {
        let obj3 = { type: "CONJURE_CHAT_HISTORY_PREPEND", projectId, entries: messages.slice(), cursor: tmp40 };
        messages = type.messages;
        const dispatch2 = DispatcherDefault.dispatch;
        DispatcherDefault;
        if (messages == null) {
          messages = [];
        }
        tmp40 = null;
        if (true === type.has_more) {
          let cursor = type.cursor;
          if (cursor == null) {
            cursor = null;
          }
          tmp40 = cursor;
        }
        dispatch2(obj3);
      }
    }
  } else if ("hello" === type) {
    pendingEvents.helloSeen = true;
    pendingEvents.debugOnDemand = true === type.debug_on_demand;
    const backoff = pendingEvents.backoff;
    backoff.succeed();
  } else if ("history" === type) {
    let messages1 = type.messages;
    let tmp13 = null;
    if (messages1 == null) {
      messages1 = [];
    }
    const substr = messages1.slice();
    let obj4 = { type: "CONJURE_CHAT_HISTORY_SET", projectId, entries: substr, cursor: tmp18, degraded: true === type.degraded };
    tmp18 = null;
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    if (true === type.has_more) {
      let cursor1 = type.cursor;
      if (cursor1 == null) {
        cursor1 = null;
      }
      tmp18 = cursor1;
    }
    dispatch(obj4);
    map5.delete(projectId);
    pendingEvents = pendingEvents.pendingEvents;
    pendingEvents.pendingEvents = [];
    setConnState(projectId, "open");
    for (const item10084 of pendingEvents) {
      let tmp28 = handleEvent(projectId, pendingEvents, item10084);
      continue;
    }
    let num5 = map4.get(projectId);
    if (num5 == null) {
      num5 = 0;
    }
    if (num5 > 0) {
      requestDebugBacklog(0, pendingEvents);
    }
    const pendingModelSettings = pendingEvents.pendingModelSettings;
    pendingEvents.pendingModelSettings = null;
    if (null != pendingModelSettings) {
      try {
        const ws = pendingEvents.ws;
        ws.sendModelSettings(pendingModelSettings);
      } catch (err) {
      }
    }
    flushPendingSends(projectId, pendingEvents);
  } else if ("chat_state" === type) {
    obj2 = DispatcherDefault;
    const obj6 = { type: "CONJURE_CHAT_STOPPED_SET", projectId, stopped: type.stopped };
    obj2.dispatch(obj6);
    let stopped = type.stopped;
    if (!stopped) {
      const tmp10 = map1;
      stopped = "open" !== map1.get(projectId);
    }
    if (!stopped) {
      flushPendingSends(projectId, pendingEvents);
    }
  } else if ("user_message" === type) {
    let tmp6 = appendAcceptedUserMessage(projectId, type);
  } else if ("step" === type) {
    const tmp5 = handleStep(type, obj);
  } else {
    let log = obj[type.type];
    if (log == null) {
      log = obj.log;
    }
    if (log != null) {
      log(type, obj);
    }
  }
}
let obj = function _openWithFreshTicket() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let str2;
    let closure_0 = arg0;
    let closure_1 = value;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c5;
      try {
        let ticket;
        let baseUrl;
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            let obj5 = { value, done: true };
            return obj5;
          } else {
            let closure_3 = tmp;
            ticket = undefined;
            const ws2 = closure_1.ws;
            ws2.close();
            c5 = 1;
            let obj6 = ConjureWorkerTickets;
            baseUrl = obj6.mintWorkerTicket(closure_0);
            c6 = 2;
            c7 = 1;
            let obj7 = { value: baseUrl, done: false };
            return obj7;
          }
        } else {
          if (1 === tmp4) {
            baseUrl = closure_4;
            c5 = 0;
            let closure_5 = closure_4;
            if (closure_1.disposed) {
              c7 = 3;
              return { value: "IconComponent", done: null };
            } else {
              closure_131_13(closure_0, "failed");
              baseUrl = closure_1;
              const _Error = Error;
              let str = "ws open failed";
              const tmp18 = closure_131_17;
              const tmp19 = closure_0;
              if (closure_5 instanceof Error) {
                str = closure_5.message;
              }
              tmp18(tmp19, baseUrl, str);
              closure_1.pendingModelSettings = null;
              let obj3 = closure_131_0(closure_131_2[20]);
              const rejectPendingPublishResult = obj3.rejectPendingPublish(closure_0, "Connection failed before the publish result arrived");
              let obj4 = closure_131_0(closure_131_2[20]);
              let result = obj4.rejectPendingPatchNotesDraft(closure_0, "Connection failed before the draft arrived");
              baseUrl = closure_0;
              let obj8 = { location: "connection", code: closure_131_0(closure_131_2[25]).ConjureErrorCodes.WS_OPEN_FAILED, message: str2 };
              const trackConjureErrored = closure_131_0(closure_131_2[25]).trackConjureErrored;
              const tmp37 = closure_131_0(closure_131_2[25]);
              const _Error2 = Error;
              str2 = "ws open failed";
              if (closure_5 instanceof Error) {
                str2 = closure_5.message;
              }
              trackConjureErrored(baseUrl, obj8);
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            let obj9 = { value, done: true };
            return obj9;
          } else {
            baseUrl = value;
            ticket = baseUrl.ticket;
            baseUrl = baseUrl.baseUrl;
            if (closure_1.disposed) {
              c5 = 0;
              c7 = 3;
              return { value: "IconComponent", done: null };
            } else {
              const tmp6 = closure_1;
              const ws = closure_1.ws;
              obj = {
                url: baseUrl,
                ticket,
                onEvent(arg0) {
                            return closure_2_22(projectId, closure_1_1, arg0);
                          },
                onClose() {
                            obj = projectId(baseUrl[20]);
                            obj.rejectPendingPublish(projectId, "Connection closed before the publish result arrived");
                            obj2 = projectId(baseUrl[20]);
                            const result = obj2.rejectPendingPatchNotesDraft(projectId, "Connection closed before the draft arrived");
                            const obj3 = projectId(baseUrl[27]);
                            const result1 = obj3.clearConjurePreviewClaims(projectId);
                            if (closure_1_1.disposed) {
                              const obj5 = { type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "closed" };
                              const obj8 = closure_1(baseUrl[13]);
                              obj8.dispatch(obj5);
                            } else if (closure_1_1.helloSeen) {
                              closure_1_1.reconnectPending = true;
                              const obj7 = { type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "connecting" };
                              const obj6 = closure_1(baseUrl[13]);
                              obj6.dispatch(obj7);
                              const backoff = tmp6.backoff;
                              backoff.fail(() => {
                                closure_2_24(projectId);
                              });
                            } else {
                              const obj9 = { type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "closed" };
                              const obj4 = closure_1(baseUrl[13]);
                              obj4.dispatch(obj9);
                              closure_2_17(projectId, closure_1_1, "Connection closed before the message was sent");
                              closure_1_1.pendingModelSettings = null;
                            }
                          },
                onError() {

                          }
              };
              ws.open(obj);
              c5 = 0;
            }
          }
          c7 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp49) {
        closure_4 = tmp49;
        if (0 === c5) {
          c7 = 3;
          throw tmp49;
        } else {
          c6 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function connect(projectId) {
  let conjureWebSocket;
  let tmp9;
  function openWithFreshTicket() {
    return obj(...arguments);
  }
  obj = map;
  let value = map.get(projectId);
  if (null == value) {
    const obj3 = { ws: conjureWebSocket, backoff: tmp9, helloSeen: false, disposed: false, reconnectPending: false, pendingSends: [], pendingEvents: [], pendingModelSettings: null, debugOnDemand: false };
    const self = this;
    const self2 = this;
    conjureWebSocket = new ConjureWebSocket.ConjureWebSocket();
    const self3 = this;
    const self4 = this;
    tmp9 = new BackoffDefault(1000, 30000);
    const result = obj.set(projectId, obj3);
    const obj5 = conjureProjectSockets;
    obj5.setConjureSocket(projectId, obj3.ws);
    value = obj3;
  }
  value.pendingEvents = [];
  value.helloSeen = false;
  value.debugOnDemand = false;
  value.disposed = false;
  value.reconnectPending = false;
  obj2 = DispatcherDefault;
  const obj4 = { type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "connecting" };
  obj2.dispatch(obj4);
  openWithFreshTicket(projectId, value);
}
function requestDebugBacklog(arg0, debugOnDemand) {
  if (debugOnDemand.debugOnDemand) {
    const ws = debugOnDemand.ws;
    ws.sendDebugSubscribe();
  }
}
function teardown(projectId) {
  const value = map.get(projectId);
  let flag = null != value;
  obj = map;
  if (flag) {
    value.disposed = true;
    const backoff = value.backoff;
    backoff.cancel();
    obj2 = conjurePublishConnection;
    obj2.rejectPendingPublish(projectId, "Connection closed before the publish result arrived");
    const obj3 = conjurePublishConnection;
    const result = obj3.rejectPendingPatchNotesDraft(projectId, "Connection closed before the draft arrived");
    const ws = value.ws;
    ws.close();
    obj.delete(projectId);
    const obj4 = conjureProjectSockets;
    obj4.deleteConjureSocket(projectId);
    map5.delete(projectId);
    const obj5 = ConjurePlatformUtilsDefault;
    const result1 = obj5.releasePreviewControl(projectId);
    const obj6 = conjurePreviewClaims;
    const result2 = obj6.clearConjurePreviewClaims(projectId);
    const obj8 = { type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "closed" };
    const obj7 = DispatcherDefault;
    obj7.dispatch(obj8);
    flag = true;
  }
  return flag;
}
function closeAllConnections() {
  const arr = Array.from(map.keys());
  const tmp2 = arr[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = teardown(tmp3);
    continue;
  }
  map2.clear();
  map3.clear();
  obj = conjureMediaTickets;
  obj.clearMediaTickets();
}
const getOlderHistoryCursor = ConjureChatStore2.getOlderHistoryCursor;
const map = new Map();
const map1 = new Map();
const map2 = new Map();
let set = new Set();
const map3 = new Map();
obj = {};
let merged = Object.assign(conjureBrowserSessionsConnection.browserSessionsFrameHandlers);
const merged1 = Object.assign(conjureChatConnection.chatFrameHandlers);
const merged2 = Object.assign(conjureDebugConnection.debugFrameHandlers);
const merged3 = Object.assign(conjureLiveReloadConnection.liveReloadFrameHandlers);
const merged4 = Object.assign(conjureModelSettingsConnection.modelSettingsFrameHandlers);
const merged5 = Object.assign(conjurePreviewConnection.previewFrameHandlers);
const merged6 = Object.assign(conjurePublishConnection.publishFrameHandlers);
const merged7 = Object.assign(conjureRemixConnection.remixFrameHandlers);
const merged8 = Object.assign(conjureSettingsConnection.settingsFrameHandlers);
const merged9 = Object.assign(conjureSmartContextConnection.smartContextFrameHandlers);
let obj2 = {};
const merged10 = Object.assign(conjureChatConnection.chatStepHandlers);
const merged11 = Object.assign(conjureDebugConnection.debugStepHandlers);
const merged12 = Object.assign(conjurePreviewConnection.previewStepHandlers);
const merged13 = Object.assign(conjureProjectConnection.projectStepHandlers);
const merged14 = Object.assign(conjurePublishConnection.publishStepHandlers);
const set1 = new Set(["hello", "history", "capture_preview", "control_preview", "control_claim", "control_abort", "capture_claim", "preview_operation", "request_upstream_ticket"]);
const map4 = new Map();
const map5 = new Map();
const Store = get_initializedDefault.Store;
class ConjureConnectionStore extends Store {
  initialize() {
    this.waitFor(ConjureChatStore, ConjureDebugStore, ConjureProjectStore, UserStore);
  }
  getConnState(projectId) {
    let str = map1.get(projectId);
    if (str == null) {
      str = "connecting";
    }
    return str;
  }
  isChatStopped(projectId) {
    let flag = map2.get(projectId);
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
}
const prototype = ConjureConnectionStore.prototype;
let obj3 = {
  CONJURE_CHAT_CONN_STATE: function handleChatConnState(arg0) {
    let connState;
    let projectId;
    ({ projectId, connState } = arg0);
    obj = map1;
    if (map1.get(projectId) === connState) {
      return false;
    } else {
      const result = obj.set(projectId, connState);
      const tmp2 = "closed" !== connState && "failed" !== connState;
      if (!tmp2) {
        set.delete(projectId);
      }
    }
  },
  CONJURE_CHAT_STOPPED_SET: function handleChatStoppedSet(arg0) {
    let projectId;
    let stopped;
    ({ projectId, stopped } = arg0);
    let flag = map2.get(projectId);
    obj = map2;
    if (flag == null) {
      flag = false;
    }
    if (flag === stopped) {
      return false;
    } else {
      const result = obj.set(projectId, stopped);
    }
  },
  CONJURE_PROJECT_DELETE_SUCCESS: function handleProjectDeleteSuccess(projectId) {
    if (!teardown(projectId.projectId)) {
      return false;
    }
  },
  CONJURE_PROJECTS_FETCH_SUCCESS: function handleProjectsFetchSuccess() {
    let flag = false;
    const arr = Array.from(map.keys());
    const iter = arr[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let tmp5 = null == ConjureProjectStore.getProject(nextResult);
      if (tmp5) {
        tmp5 = teardown(tmp3);
      }
      if (tmp5) {
        flag = true;
      }
      continue;
    }
    return flag ? undefined : false;
  },
  LOGOUT: function handleLogout() {
    if (0 === map.size) {
      return false;
    } else {
      closeAllConnections();
    }
  }
};
const conjureConnectionStore = new ConjureConnectionStore(DispatcherDefault, obj3);
let result = size.fileFinishedImporting("modules/conjure/connection/ConjureConnectionStore.tsx");
const sendUserMessage_export = function sendUserMessage(projectId, str, arg2) {
  let attachments;
  let clarificationAnswers;
  let content;
  let nonce;
  let obj3;
  let remix;
  let templateId;
  obj = arg3;
  if (arg3 === undefined) {
    obj = {};
  }
  ({ clarificationAnswers, templateId, remix } = obj);
  const trimmed = str.trim();
  if ("" !== trimmed) {
    let obj5;
    obj2 = { content: trimmed, nonce: obj3.createNonce(), attachments: tmp2, templateId, remix };
    obj3 = createNonce;
    const tmp3 = require;
    if (null != clarificationAnswers) {
      obj5 = { clarificationAnswers };
      const obj4 = { clarificationAnswers };
    } else {
      obj5 = {};
    }
    const merged = Object.assign(obj5);
    const value = map.get(projectId);
    if (null == value) {
      appendLocalUserMessage(projectId, obj2);
      try {
        if (null == value) {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error = new Error("Not connected");
          throw error;
        } else {
          const ws = value.ws;
          ({ content, nonce, attachments } = obj2);
          let mapped;
          const sendUserMessage = ws.sendUserMessage;
          if (attachments != null) {
            mapped = attachments.map((id) => id.id);
          }
          const project = ConjureProjectStore.getProject(projectId);
          let name;
          if (project != null) {
            name = project.name;
          }
          const obj7 = { templateId: null, remix: null, clarificationAnswers: null };
          ({ templateId: obj6.templateId, remix: obj6.remix, clarificationAnswers: obj6.clarificationAnswers } = obj2);
          sendUserMessage(content, nonce, mapped, name, obj7);
        }
      } catch (tmp29) {
        const _Error2 = Error;
        let str3 = "send failed";
        if (tmp29 instanceof Error) {
          str3 = tmp29.message;
        }
        const tmp3Result = tmp3(13231);
        tmp3Result.sendFailedStep(projectId, str3);
      }
    } else {
      const pendingSends = value.pendingSends;
      pendingSends.push(obj2);
    }
  }
};

export default conjureConnectionStore;
export const subscribeDebugBacklog = function subscribeDebugBacklog(projectId) {
  let closure_0 = projectId;
  obj = map4;
  let num = map4.get(projectId);
  if (num == null) {
    num = 0;
  }
  let result = obj.set(projectId, num + 1);
  const value = map.get(projectId);
  const tmp3 = 0 === num && null != value && "open" === map1.get(projectId);
  if (tmp3) {
    if (value.debugOnDemand) {
      const ws = value.ws;
      ws.sendDebugSubscribe();
    }
  }
  return () => {
    let num = map4.get(projectId);
    if (num == null) {
      num = 1;
    }
    const diff = num - 1;
    if (0 < diff) {
      const result = obj.set(tmp, diff);
    } else {
      map4.delete(projectId);
    }
  };
};
export const ensureConnection = function ensureConnection(arg0) {
  const value = map.get(arg0);
  if (null != value) {
    const value2 = map1.get(arg0);
    const reconnectPending = "closed" !== value2 && "failed" !== value2 || value.reconnectPending;
    if (!reconnectPending) {
      connect(arg0);
    }
  } else {
    connect(arg0);
  }
};
export { sendUserMessage_export as sendUserMessage };
export const interruptTurn = function interruptTurn(projectId) {
  const value = map.get(projectId);
  try {
    if (null == value) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Not connected");
      throw error;
    } else {
      const ws = value.ws;
      ws.sendInterrupt();
      if (ConjureChatStore.isThinking(projectId)) {
        set.add(projectId);
        obj2 = { type: "CONJURE_CHAT_STOP_REQUESTED", projectId };
        obj = DispatcherDefault;
        obj.dispatch(obj2);
      }
    }
  } catch (err) {
  }
};
export const stageModelSettings = function stageModelSettings(arg0, pendingModelSettings) {
  const value = map.get(arg0);
  if (null != value) {
    value.pendingModelSettings = pendingModelSettings;
  }
};
export const loadOlderHistory = function loadOlderHistory(arg0) {
  const tmp = getOlderHistoryCursor(arg0);
  if (null == tmp) {
    return false;
  } else {
    obj = map5;
    if (map5.get(arg0) === tmp) {
      return true;
    } else {
      const value = map.get(arg0);
      let flag = null != value && "open" === map1.get(arg0);
      if (flag) {
        const result = obj.set(arg0, tmp);
        const ws = value.ws;
        ws.sendLoadHistory(tmp);
        flag = true;
      }
      return flag;
    }
  }
};
export const resetHistoryPaging = function resetHistoryPaging(arg0) {
  map5.delete(arg0);
};
export const closeConnection = function closeConnection(projectId) {
  teardown(projectId);
};
export { closeAllConnections };
