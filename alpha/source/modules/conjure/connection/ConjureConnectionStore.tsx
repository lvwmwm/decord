// Module ID: 10698
// Function ID: 10699
// Name: ConjureConnectionStore
// Dependencies: [5, 1392, 10699, 10704, 6773, 10707, 10708, 10709, 10711, 10712, 10713, 10714, 10715, 10716, 584, 10717, 10732, 10733, 10735, 10737, 10738, 10739, 10796, 10806, 10808, 10809, 10811, 10812, 10813, 10718, 10814, 10725, 10785, 10815, 569, 10719, 10742, 10203, 10793, 504, 2]
// Exports: closeConnection, ensureConnection, interruptTurn, loadOlderHistory, optimisticMessageId, prepareTemplate, resetHistoryPaging, sendUserMessage, showUserMessage, stageModelSettings, subscribeDebugBacklog, withdrawUserMessage

// Module 10698 (ConjureConnectionStore)
import get_initializedDefault from "get initialized" /* 504 */;
import BackoffDefault from "Backoff" /* 569 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import createNonce from "createNonce" /* 10203 */;
import ConjureChatStore2 from "ConjureChatStore" /* 10699 */;
import conjureChatConnection from "conjureChatConnection" /* 10717 */;
import ConjureAnalytics from "ConjureAnalytics" /* 10718 */;
import conjureProjectSockets from "conjureProjectSockets" /* 10719 */;
import ConjureWorkerTickets from "ConjureWorkerTickets" /* 10725 */;
import conjureBrowserSessionsConnection from "conjureBrowserSessionsConnection" /* 10732 */;
import conjureDebugConnection from "conjureDebugConnection" /* 10733 */;
import ConjureHostApproval from "ConjureHostApproval" /* 10735 */;
import conjureLiveReloadConnection from "conjureLiveReloadConnection" /* 10737 */;
import conjureModelSettingsConnection from "conjureModelSettingsConnection" /* 10738 */;
import conjurePreviewConnection from "conjurePreviewConnection" /* 10739 */;
import ConjurePlatformUtilsDefault from "ConjurePlatformUtils" /* 10742 */;
import conjurePreviewClaims from "conjurePreviewClaims" /* 10785 */;
import conjureMediaTickets from "conjureMediaTickets" /* 10793 */;
import conjurePublishConnection from "conjurePublishConnection" /* 10796 */;
import conjurePublishScheduleRequests from "conjurePublishScheduleRequests" /* 10806 */;
import conjureRemixConnection from "conjureRemixConnection" /* 10808 */;
import conjureSettingsConnection from "conjureSettingsConnection" /* 10809 */;
import conjureSmartContextConnection from "conjureSmartContextConnection" /* 10811 */;
import conjureAppBuildRequestConnection from "conjureAppBuildRequestConnection" /* 10812 */;
import conjureProjectConnection from "conjureProjectConnection" /* 10813 */;
import conjureKnownStepKinds from "conjureKnownStepKinds" /* 10814 */;
import ConjureWebSocket from "ConjureWebSocket" /* 10815 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserStore from "UserStore" /* 1392 */;
import ConjureDebugStore from "ConjureDebugStore" /* 10704 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6773 */;
import ConjureBrowserSessionsStore from "ConjureBrowserSessionsStore" /* 10707 */;
import ConjureSmartContextStore from "ConjureSmartContextStore" /* 10708 */;
import ConjureDebugLogStore from "ConjureDebugLogStore" /* 10709 */;
import ConjureLiveReloadStore from "ConjureLiveReloadStore" /* 10711 */;
import ConjureModelSettingsStore from "ConjureModelSettingsStore" /* 10712 */;
import ConjureOverlayBackgroundStore from "ConjureOverlayBackgroundStore" /* 10713 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10714 */;
import ConjureRemixStore from "ConjureRemixStore" /* 10715 */;
import ConjureSettingsStore from "ConjureSettingsStore" /* 10716 */;
import size from "module_2" /* 2 */;

const ConjureChatStore = ConjureChatStore2;
let c7, c8;

function setConnState(projectId, open) {
  obj = DispatcherDefault;
  obj2 = { type: "CONJURE_CHAT_CONN_STATE", projectId, connState: open };
  obj.dispatch(obj2);
}
function appendLocalUserMessage(projectId, nonce, arg2) {
  let attachments;
  let content;
  let date;
  let id1;
  nonce = nonce.nonce;
  ({ content, attachments } = nonce);
  set = map2.set;
  const currentUser = UserStore.getCurrentUser();
  let id;
  obj = UserStore;
  if (currentUser != null) {
    id = currentUser.id;
  }
  const result = set(nonce, id);
  const tmp5 = DispatcherDefault;
  const dispatch = tmp5.dispatch;
  obj2 = { type: "CONJURE_CHAT_MESSAGE_APPEND", projectId, content, id: "optimistic:" + nonce, userId: id1, timestamp: date.toISOString(), attachments, held: undefined };
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
  set = map2.set;
  const currentUser = UserStore.getCurrentUser();
  let id;
  obj = UserStore;
  if (currentUser != null) {
    id = currentUser.id;
  }
  const result = set(nonce, id);
  const tmp6 = DispatcherDefault;
  const dispatch = tmp6.dispatch;
  obj2 = { type: "CONJURE_CHAT_MESSAGE_APPEND", projectId, content, id: "optimistic:" + nonce, userId: id1, timestamp: date.toISOString(), attachments, held: "duration" };
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
function handleEvent(projectId, pendingEvents, type) {
  let messages;
  let tmp12;
  let tmp36;
  function flushPendingSends(projectId, ws) {
    let attachments;
    let content;
    let nonce;
    ws.pendingSends = [];
    const iter = ws.pendingSends[Symbol.iterator]();
    const nextResult = iter.next();
    if (iter !== undefined) {
      appendLocalUserMessage(projectId, nextResult);
      try {
        ws = ws.ws;
        ({ content, nonce, attachments } = nextResult);
        let mapped;
        const sendUserMessage = ws.sendUserMessage;
        if (attachments != null) {
          mapped = attachments.map((id) => id.id);
        }
        obj = { templateId: null, remix: null, clarificationAnswers: null };
        ({ templateId: obj.templateId, remix: obj.remix, clarificationAnswers: obj.clarificationAnswers } = nextResult);
        sendUserMessage(content, nonce, mapped, obj);
      } catch (tmp14) {
        const _Error = Error;
        let str = "send failed";
        if (tmp14 instanceof Error) {
          str = tmp14.message;
        }
        obj2 = conjureChatConnection;
        obj2.sendFailedStep(projectId, str);
      }
    }
  }
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
      const obj3 = ConjureAnalytics;
      const result = obj3.trackConjureTurnResulted(projectId, kind);
      if ("deployed" === kind.result) {
        obj2 = { type: "CONJURE_CHAT_TURN_PATCH", projectId, turnId: kind.turn_id, patch: { kind: "plan_implemented" } };
        const obj4 = DispatcherDefault;
        obj4.dispatch(obj2);
      }
      const obj5 = { type: "CONJURE_CHAT_TURN_FINISHED", projectId, turnId: null, summary: null };
      ({ turn_id: obj7.turnId, summary: obj7.summary } = kind);
      const obj6 = DispatcherDefault;
      obj6.dispatch(obj5);
      let deleteResult = set.delete(projectId);
      const tmp13 = importDefault;
      if (deleteResult) {
        deleteResult = "cancelled" === kind.result;
      }
      if (deleteResult) {
        const obj8 = { type: "CONJURE_CHAT_INTERRUPTED", projectId };
        const tmp13Result = tmp13(dependencyMap[14]);
        tmp13Result.dispatch(obj8);
      }
    } else if (null != closure_1_18[kind.kind]) {
      closure_1_18[kind.kind](kind, projectId);
    } else {
      obj = conjureKnownStepKinds;
      const tmp4 = require;
      const tmp5 = dependencyMap;
      if (obj.isKnownStepKind(kind.kind)) {
        const tmp4Result = tmp4(tmp5[15]);
        tmp4Result.appendTurnStep(projectId, kind);
      }
    }
  }
  if (!set1.has(type.type)) {
    let str = "open";
    if ("open" !== map1.get(projectId)) {
      const pendingEvents1 = pendingEvents.pendingEvents;
      pendingEvents1.push(type);
    }
  }
  obj = { projectId, ws: pendingEvents.ws };
  type = type.type;
  if ("history_page" === type) {
    let obj3 = map4;
    if (type.requested === map4.get(projectId)) {
      let deleteResult = obj3.delete(projectId);
      if (true !== type.failed) {
        obj2 = { type: "CONJURE_CHAT_HISTORY_PREPEND", projectId, entries: messages.slice(), cursor: tmp36 };
        messages = type.messages;
        const dispatch2 = DispatcherDefault.dispatch;
        DispatcherDefault;
        if (messages == null) {
          messages = [];
        }
        tmp36 = null;
        if (true === type.has_more) {
          let cursor = type.cursor;
          if (cursor == null) {
            cursor = null;
          }
          tmp36 = cursor;
        }
        dispatch2(obj2);
      }
    }
  } else if ("hello" === type) {
    pendingEvents.helloSeen = true;
    pendingEvents.warmTemplateId = null;
    pendingEvents.debugOnDemand = true === type.debug_on_demand;
    const backoff = pendingEvents.backoff;
    backoff.succeed();
  } else if ("history" === type) {
    let messages1 = type.messages;
    if (messages1 == null) {
      messages1 = [];
    }
    const tmp10 = dependencyMap;
    const substr = messages1.slice();
    let obj4 = { type: "CONJURE_CHAT_HISTORY_SET", projectId, entries: substr, cursor: tmp12, degraded: true === type.degraded };
    tmp12 = null;
    const dispatch = DispatcherDefault.dispatch;
    if (true === type.has_more) {
      let cursor1 = type.cursor;
      if (cursor1 == null) {
        cursor1 = null;
      }
      tmp12 = cursor1;
    }
    dispatch(obj4);
    map4.delete(projectId);
    pendingEvents = pendingEvents.pendingEvents;
    pendingEvents.pendingEvents = [];
    setConnState(projectId, "open");
    for (const item10065 of pendingEvents) {
      let tmp22 = handleEvent(projectId, pendingEvents, item10065);
      continue;
    }
    let num4 = map3.get(projectId);
    if (num4 == null) {
      num4 = 0;
    }
    if (num4 > 0) {
      requestDebugBacklog(0, pendingEvents);
    }
    const pendingModelSettings = pendingEvents.pendingModelSettings;
    pendingEvents.pendingModelSettings = null;
    if (null != pendingModelSettings) {
      try {
        let ws = pendingEvents.ws;
        ws.sendModelSettings(pendingModelSettings);
      } catch (err) {
      }
    }
    const pendingTemplatePrep = pendingEvents.pendingTemplatePrep;
    pendingEvents.pendingTemplatePrep = null;
    if (null != pendingTemplatePrep) {
      sendTemplatePrep(pendingEvents, pendingTemplatePrep);
    }
    flushPendingSends(projectId, pendingEvents);
  } else if ("user_message" === type) {
    let tmp6 = appendAcceptedUserMessage(projectId, type);
  } else if ("step" === type) {
    let tmp5 = handleStep(type, obj);
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
    let closure_5;
    let str2;
    let closure_0 = arg0;
    let closure_1 = value;
    if (c8 === 2) {
      c8 = 3;
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
      let c6;
      try {
        let templateId;
        let ticket;
        let open;
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            let obj6 = { value, done: true };
            return obj6;
          } else {
            let closure_4 = tmp;
            templateId = undefined;
            ticket = undefined;
            const ws2 = closure_1.ws;
            open = ws2.close();
            if (closure_1.helloSeen) {
              open = ConjureWorkerTickets;
              open.forgetEarlyTicket(closure_0);
            }
            c6 = 1;
            let obj7 = ConjureWorkerTickets;
            open = obj7.mintWorkerTicket(tmp69);
            c7 = 2;
            c8 = 1;
            let obj8 = { value: open, done: false };
            return obj8;
          }
        } else {
          if (1 === tmp4) {
            open = tmp57;
            c6 = 0;
            if (closure_1.disposed) {
              c8 = 3;
              return { value: "IconComponent", done: null };
            } else {
              closure_132_12(closure_0, "failed");
              open = closure_1;
              const _Error = Error;
              let str = "ws open failed";
              const tmp21 = closure_132_16;
              const tmp22 = closure_0;
              if (tmp57 instanceof Error) {
                str = tmp57.message;
              }
              tmp21(tmp22, open, str);
              closure_1.pendingModelSettings = null;
              closure_1.pendingTemplatePrep = null;
              let obj3 = closure_132_0(closure_132_2[22]);
              const rejectPendingPublishResult = obj3.rejectPendingPublish(closure_0, "Connection failed before the publish result arrived");
              let obj4 = closure_132_0(closure_132_2[23]);
              let result = obj4.rejectPendingPublishSchedule(closure_0);
              let obj5 = closure_132_0(closure_132_2[22]);
              let result1 = obj5.rejectPendingPatchNotesDraft(closure_0, "Connection failed before the draft arrived");
              open = closure_0;
              let obj9 = { location: "connection", code: closure_132_0(closure_132_2[29]).ConjureErrorCodes.WS_OPEN_FAILED, message: str2 };
              const trackConjureErrored = closure_132_0(closure_132_2[29]).trackConjureErrored;
              const tmp45 = closure_132_0(closure_132_2[29]);
              const _Error2 = Error;
              str2 = "ws open failed";
              if (tmp57 instanceof Error) {
                str2 = tmp57.message;
              }
              trackConjureErrored(open, obj9);
            }
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            let obj10 = { value, done: true };
            return obj10;
          } else {
            templateId = value;
            ticket = templateId.ticket;
            open = templateId.baseUrl;
            if (closure_1.disposed) {
              c6 = 0;
              c8 = 3;
              return { value: "IconComponent", done: null };
            } else {
              const ws = closure_1.ws;
              open = ws.open;
              obj = {
                url: open,
                ticket,
                templateId,
                onEvent(arg0) {
                            return closure_2_20(projectId, closure_1_1, arg0);
                          },
                onClose() {
                            obj = projectId(c2[22]);
                            obj.rejectPendingPublish(projectId, "Connection closed before the publish result arrived");
                            obj2 = projectId(c2[23]);
                            const result = obj2.rejectPendingPublishSchedule(projectId);
                            const obj3 = projectId(c2[22]);
                            const result1 = obj3.rejectPendingPatchNotesDraft(projectId, "Connection closed before the draft arrived");
                            const obj4 = projectId(c2[32]);
                            const result2 = obj4.clearConjurePreviewClaims(projectId);
                            if (closure_1_1.disposed) {
                              const obj6 = { type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "closed" };
                              const obj9 = closure_1(c2[14]);
                              obj9.dispatch(obj6);
                            } else if (closure_1_1.helloSeen) {
                              closure_1_1.reconnectPending = true;
                              const obj8 = { type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "connecting" };
                              const obj7 = closure_1(c2[14]);
                              obj7.dispatch(obj8);
                              const backoff = tmp7.backoff;
                              backoff.fail(() => {
                                closure_2_22(projectId);
                              });
                            } else {
                              const obj10 = { type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "closed" };
                              const obj5 = closure_1(c2[14]);
                              obj5.dispatch(obj10);
                              closure_2_16(projectId, closure_1_1, "Connection closed before the message was sent");
                              closure_1_1.pendingModelSettings = null;
                              closure_1_1.pendingTemplatePrep = null;
                            }
                          },
                onError() {

                          }
              };
              const tmp7 = open;
              const warmTemplateId = closure_1.warmTemplateId;
              templateId = warmTemplateId;
              if (warmTemplateId == null) {
                templateId = undefined;
              }
              open(obj);
              c6 = 0;
            }
          }
          c8 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp57) {
        if (0 === c6) {
          c8 = 3;
          throw tmp57;
        } else {
          c7 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function connect(projectId) {
  let conjureWebSocket;
  let tmp10;
  function openWithFreshTicket() {
    return obj(...arguments);
  }
  let warmTemplateId = arg1;
  if (arg1 === undefined) {
    warmTemplateId = null;
  }
  obj = map;
  let value = map.get(projectId);
  if (null == value) {
    const obj3 = { ws: conjureWebSocket, backoff: tmp10, helloSeen: false, disposed: false, reconnectPending: false, pendingSends: [], pendingEvents: [], pendingModelSettings: null, pendingTemplatePrep: null, warmTemplateId: null, debugOnDemand: false };
    const self = this;
    const self2 = this;
    conjureWebSocket = new ConjureWebSocket.ConjureWebSocket();
    const self3 = this;
    const self4 = this;
    tmp10 = new BackoffDefault(1000, 30000);
    const result = obj.set(projectId, obj3);
    const obj5 = conjureProjectSockets;
    obj5.setConjureSocket(projectId, obj3.ws);
    value = obj3;
  }
  if (warmTemplateId == null) {
    warmTemplateId = value.warmTemplateId;
  }
  value.warmTemplateId = warmTemplateId;
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
    const obj3 = conjurePublishScheduleRequests;
    const result = obj3.rejectPendingPublishSchedule(projectId);
    const obj4 = conjurePublishConnection;
    const result1 = obj4.rejectPendingPatchNotesDraft(projectId, "Connection closed before the draft arrived");
    const ws = value.ws;
    ws.close();
    obj.delete(projectId);
    const obj5 = conjureProjectSockets;
    obj5.deleteConjureSocket(projectId);
    map4.delete(projectId);
    const obj6 = ConjurePlatformUtilsDefault;
    const result2 = obj6.releasePreviewControl(projectId);
    const obj7 = conjurePreviewClaims;
    const result3 = obj7.clearConjurePreviewClaims(projectId);
    const obj9 = { type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "closed" };
    const obj8 = DispatcherDefault;
    obj8.dispatch(obj9);
    flag = true;
  }
  return flag;
}
function sendTemplatePrep(value, pendingTemplatePrep) {
  try {
    const ws = value.ws;
    ws.sendPrepareTemplate(pendingTemplatePrep);
  } catch (err) {
  }
}
function closeAllConnections() {
  const arr = Array.from(map.keys());
  const tmp2 = arr[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = teardown(tmp3);
    continue;
  }
  map2.clear();
  obj = conjureMediaTickets;
  obj.clearMediaTickets();
}
const getOlderHistoryCursor = ConjureChatStore2.getOlderHistoryCursor;
const map = new Map();
const map1 = new Map();
let set = new Set();
const map2 = new Map();
obj = {};
let merged = Object.assign(conjureBrowserSessionsConnection.browserSessionsFrameHandlers);
const merged1 = Object.assign(conjureChatConnection.chatFrameHandlers);
const merged2 = Object.assign(conjureDebugConnection.debugFrameHandlers);
const merged3 = Object.assign(ConjureHostApproval.hostAccessFrameHandlers);
const merged4 = Object.assign(conjureLiveReloadConnection.liveReloadFrameHandlers);
const merged5 = Object.assign(conjureModelSettingsConnection.modelSettingsFrameHandlers);
const merged6 = Object.assign(conjurePreviewConnection.previewFrameHandlers);
const merged7 = Object.assign(conjurePublishConnection.publishFrameHandlers);
const merged8 = Object.assign(conjurePublishScheduleRequests.publishScheduleFrameHandlers);
const merged9 = Object.assign(conjureRemixConnection.remixFrameHandlers);
const merged10 = Object.assign(conjureSettingsConnection.settingsFrameHandlers);
const merged11 = Object.assign(conjureSmartContextConnection.smartContextFrameHandlers);
let obj2 = {};
const merged12 = Object.assign(conjureAppBuildRequestConnection.appBuildRequestStepHandlers);
const merged13 = Object.assign(conjureChatConnection.chatStepHandlers);
const merged14 = Object.assign(conjureDebugConnection.debugStepHandlers);
const merged15 = Object.assign(conjurePreviewConnection.previewStepHandlers);
const merged16 = Object.assign(conjureProjectConnection.projectStepHandlers);
const merged17 = Object.assign(conjurePublishConnection.publishStepHandlers);
const set1 = new Set(["hello", "history", "capture_preview", "control_preview", "control_claim", "control_abort", "capture_claim", "preview_operation", "request_upstream_ticket", "host_approvals"]);
const map3 = new Map();
const map4 = new Map();
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
    obj = conjureMediaTickets;
    obj.clearMediaTickets();
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
  let nonce1;
  let nonce2;
  let obj5;
  let remix;
  let templateId;
  obj = arg3;
  if (arg3 === undefined) {
    obj = {};
  }
  ({ clarificationAnswers, nonce, templateId, remix } = obj);
  const trimmed = str.trim();
  let tmp2;
  if (null != arg2) {
    if (arg2.length > 0) {
      tmp2 = arg2;
    }
  }
  if ("" === trimmed) {
    if (null == tmp2) {
      return false;
    }
  }
  obj2 = { content: trimmed, nonce: nonce1, attachments: tmp2, templateId, remix };
  nonce1 = nonce;
  if (nonce == null) {
    const obj3 = createNonce;
    nonce1 = obj3.createNonce();
  }
  if (null != clarificationAnswers) {
    obj5 = { clarificationAnswers };
    const obj4 = { clarificationAnswers };
  } else {
    obj5 = {};
  }
  const merged = Object.assign(obj5);
  const value = map.get(projectId);
  if (null != value) {
    const pendingSends = value.pendingSends;
    pendingSends.push(obj2);
    return true;
  }
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
      ({ content, nonce: nonce2, attachments } = obj2);
      let mapped;
      const sendUserMessage = ws.sendUserMessage;
      if (attachments != null) {
        mapped = attachments.map((id) => id.id);
      }
      const obj11 = { templateId: null, remix: null, clarificationAnswers: null };
      ({ templateId: obj6.templateId, remix: obj6.remix, clarificationAnswers: obj6.clarificationAnswers } = obj2);
      sendUserMessage(content, nonce2, mapped, obj11);
      return true;
    }
  } catch (tmp20) {
    const _Error2 = Error;
    let str3 = "send failed";
    if (tmp20 instanceof Error) {
      str3 = tmp20.message;
    }
    if (null == nonce) {
      const obj7 = conjureChatConnection;
      obj7.sendFailedStep(projectId, str3);
    }
    return false;
  }
};

export default conjureConnectionStore;
export const optimisticMessageId = function optimisticMessageId(arg0) {
  return "optimistic:" + arg0;
};
export const subscribeDebugBacklog = function subscribeDebugBacklog(projectId) {
  let closure_0 = projectId;
  obj = map3;
  let num = map3.get(projectId);
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
    let num = map3.get(projectId);
    if (num == null) {
      num = 1;
    }
    const diff = num - 1;
    if (0 < diff) {
      const result = obj.set(tmp, diff);
    } else {
      map3.delete(projectId);
    }
  };
};
export const ensureConnection = function ensureConnection(arg0) {
  obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let templateId = obj.templateId;
  const value = map.get(arg0);
  if (null != value) {
    const value2 = map1.get(arg0);
    const reconnectPending = "closed" !== value2 && "failed" !== value2 || value.reconnectPending;
    if (!reconnectPending) {
      connect(arg0);
    }
  } else {
    const tmp3 = connect;
    if (templateId == null) {
      templateId = null;
    }
    tmp3(arg0, templateId);
  }
};
export { sendUserMessage_export as sendUserMessage };
export const showUserMessage = function showUserMessage(projectId, str, arg2) {
  let date;
  let held;
  let id1;
  let nonce;
  obj = arg3;
  if (arg3 === undefined) {
    obj = {};
  }
  ({ nonce, held } = obj);
  if (nonce === undefined) {
    obj2 = createNonce;
    nonce = obj2.createNonce();
  }
  let tmp4;
  const trimmed = str.trim();
  if (null != arg2) {
    if (arg2.length > 0) {
      tmp4 = arg2;
    }
  }
  set = map2.set;
  const currentUser = UserStore.getCurrentUser();
  let id;
  const obj3 = UserStore;
  if (currentUser != null) {
    id = currentUser.id;
  }
  const result = set(nonce, id);
  const tmp9 = DispatcherDefault;
  const dispatch = tmp9.dispatch;
  const obj4 = { type: "CONJURE_CHAT_MESSAGE_APPEND", projectId, content: trimmed, id: "optimistic:" + nonce, userId: id1, timestamp: date.toISOString(), attachments: tmp4, held };
  const currentUser1 = obj3.getCurrentUser();
  id1 = undefined;
  if (currentUser1 != null) {
    id1 = currentUser1.id;
  }
  date = new Date();
  dispatch(obj4);
  const obj5 = { nonce, messageKey: "optimistic:" + nonce };
  return obj5;
};
export const withdrawUserMessage = function withdrawUserMessage(projectId, arg1) {
  map2.delete(arg1);
  obj = DispatcherDefault;
  obj2 = { type: "CONJURE_CHAT_MESSAGE_CANCELLED", projectId, id: "optimistic:" + arg1, withdrawn: true };
  obj.dispatch(obj2);
};
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
export const prepareTemplate = function prepareTemplate(arg0, pendingTemplatePrep) {
  const value = map.get(arg0);
  if (null != value) {
    if ("open" === map1.get(arg0)) {
      sendTemplatePrep(value, pendingTemplatePrep);
    } else {
      value.pendingTemplatePrep = pendingTemplatePrep;
    }
  }
};
export const loadOlderHistory = function loadOlderHistory(arg0) {
  const tmp = getOlderHistoryCursor(arg0);
  if (null == tmp) {
    return false;
  } else {
    obj = map4;
    if (map4.get(arg0) === tmp) {
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
  map4.delete(arg0);
};
export const closeConnection = function closeConnection(projectId) {
  teardown(projectId);
};
export { closeAllConnections };
