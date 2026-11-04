// Module ID: 10850
// Function ID: 10851
// Name: ConjureConnectionStore
// Dependencies: [32, 5, 1383, 10851, 10857, 6844, 10860, 10861, 10862, 10864, 10865, 10866, 10867, 10868, 10869, 10870, 10871, 572, 10872, 10892, 10893, 10895, 10897, 10898, 10899, 10950, 10961, 10963, 10964, 10966, 10967, 10968, 10969, 10873, 10970, 10940, 10880, 10971, 559, 10972, 10874, 10973, 10902, 10974, 10315, 10947, 504, 2]
// Exports: closeConnection, ensureConnection, interruptTurn, loadOlderHistory, optimisticMessageId, prepareTemplate, resetHistoryPaging, sendUserMessage, showUserMessage, stageModelSettings, subscribeDebugBacklog, withdrawUserMessage

// Module 10850 (ConjureConnectionStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import createNonce from "createNonce" /* 10315 */;
import ConjureChatStore2 from "ConjureChatStore" /* 10851 */;
import conjureChatConnection from "conjureChatConnection" /* 10872 */;
import conjureProjectSockets from "conjureProjectSockets" /* 10874 */;
import conjureBrowserSessionsConnection from "conjureBrowserSessionsConnection" /* 10892 */;
import conjureDebugConnection from "conjureDebugConnection" /* 10893 */;
import ConjureHostApproval from "ConjureHostApproval" /* 10895 */;
import conjureLiveReloadConnection from "conjureLiveReloadConnection" /* 10897 */;
import conjureModelSettingsConnection from "conjureModelSettingsConnection" /* 10898 */;
import conjurePreviewConnection from "conjurePreviewConnection" /* 10899 */;
import ConjurePlatformUtilsDefault from "ConjurePlatformUtils" /* 10902 */;
import conjurePreviewClaims from "conjurePreviewClaims" /* 10940 */;
import conjureMediaTickets from "conjureMediaTickets" /* 10947 */;
import conjurePublishConnection from "conjurePublishConnection" /* 10950 */;
import conjurePublishScheduleRequests from "conjurePublishScheduleRequests" /* 10961 */;
import conjureRemixConnection from "conjureRemixConnection" /* 10963 */;
import conjureSettingsConnection from "conjureSettingsConnection" /* 10964 */;
import conjureSmartContextConnection from "conjureSmartContextConnection" /* 10966 */;
import conjureAppBuildRequestConnection from "conjureAppBuildRequestConnection" /* 10967 */;
import conjureProjectConnection from "conjureProjectConnection" /* 10968 */;
import conjureUsageConnection from "conjureUsageConnection" /* 10969 */;
import conjureLinkEmbeds from "conjureLinkEmbeds" /* 10974 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserStore from "UserStore" /* 1383 */;
import ConjureDebugStore from "ConjureDebugStore" /* 10857 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6844 */;
import ConjureBrowserSessionsStore from "ConjureBrowserSessionsStore" /* 10860 */;
import ConjureSmartContextStore from "ConjureSmartContextStore" /* 10861 */;
import ConjureDebugLogStore from "ConjureDebugLogStore" /* 10862 */;
import ConjureLiveReloadStore from "ConjureLiveReloadStore" /* 10864 */;
import ConjureModelSettingsStore from "ConjureModelSettingsStore" /* 10865 */;
import ConjureOverlayBackgroundStore from "ConjureOverlayBackgroundStore" /* 10866 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10867 */;
import ConjureRemixStore from "ConjureRemixStore" /* 10868 */;
import ConjureSettingsStore from "ConjureSettingsStore" /* 10869 */;
import ConjureSpendLimitStore from "ConjureSpendLimitStore" /* 10870 */;
import ConjureVoiceChannelPinStore from "ConjureVoiceChannelPinStore" /* 10871 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ConjureChatStore = ConjureChatStore2;
let _require, c7, c8;

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
  obj2 = { type: "CONJURE_CHAT_MESSAGE_APPEND", projectId, content, id: "optimistic:" + nonce, userId: id1, timestamp: date.toISOString(), attachments, held: "dispatch" };
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
function failPendingSends(projectId, value, message) {
  value.pendingSends = [];
  const tmp = value.pendingSends[Symbol.iterator]();
  while (tmp !== undefined) {
    let tmp4 = appendFailedUserMessage(projectId, tmp2, message);
    continue;
  }
}
function handleEvent(projectId, pendingEvents, type) {
  let messages;
  let tmp12;
  let tmp37;
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
        obj = { templateId: null, remix: null, clarificationAnswers: null, linkEmbeds: null };
        ({ templateId: obj.templateId, remix: obj.remix, clarificationAnswers: obj.clarificationAnswers, linkEmbeds: obj.linkEmbeds } = nextResult);
        sendUserMessage(content, nonce, mapped, obj);
      } catch (tmp14) {
        const _Error = Error;
        let str = "send failed";
        if (tmp14 instanceof Error) {
          str = tmp14.message;
        }
        obj2 = require("conjureChatConnection");
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
      const obj3 = require("ConjureAnalytics");
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
        const tmp13Result = tmp13(dependencyMap[17]);
        tmp13Result.dispatch(obj8);
      }
    } else if (null != closure_1_19[kind.kind]) {
      closure_1_19[kind.kind](kind, projectId);
    } else {
      obj = require("conjureKnownStepKinds");
      const tmp4 = _require;
      const tmp5 = dependencyMap;
      if (obj.isKnownStepKind(kind.kind)) {
        const tmp4Result = tmp4(tmp5[18]);
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
        obj2 = { type: "CONJURE_CHAT_HISTORY_PREPEND", projectId, entries: messages.slice(), cursor: tmp37 };
        messages = type.messages;
        const dispatch2 = DispatcherDefault.dispatch;
        DispatcherDefault;
        if (messages == null) {
          messages = [];
        }
        tmp37 = null;
        if (true === type.has_more) {
          let cursor = type.cursor;
          if (cursor == null) {
            cursor = null;
          }
          tmp37 = cursor;
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
    if (true === type.heartbeat) {
      const heartbeat = pendingEvents.heartbeat;
      heartbeat.start();
    }
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
function handleSocketClosed(projectId, value) {
  _require = projectId;
  const heartbeat = value.heartbeat;
  heartbeat.stop();
  obj = require("conjurePublishConnection");
  obj.rejectPendingPublish(projectId, "Connection closed before the publish result arrived");
  obj2 = require("conjurePublishScheduleRequests");
  const result = obj2.rejectPendingPublishSchedule(projectId);
  const obj3 = require("conjurePublishConnection");
  const result1 = obj3.rejectPendingPatchNotesDraft(projectId, "Connection closed before the draft arrived");
  const obj4 = require("conjurePreviewClaims");
  const result2 = obj4.clearConjurePreviewClaims(projectId);
  if (value.disposed) {
    const obj6 = { type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "closed" };
    const obj9 = DispatcherDefault;
    obj9.dispatch(obj6);
  } else if (value.helloSeen) {
    value.reconnectPending = true;
    const obj8 = { type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "connecting" };
    const obj7 = DispatcherDefault;
    obj7.dispatch(obj8);
    const backoff = value.backoff;
    backoff.fail(() => {
      connect(projectId);
    });
  } else {
    const obj10 = { type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "closed" };
    const obj5 = DispatcherDefault;
    obj5.dispatch(obj10);
    failPendingSends(projectId, value, "Connection closed before the message was sent");
    value.pendingModelSettings = null;
    value.pendingTemplatePrep = null;
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
            const obj6 = { value, done: true };
            return obj6;
          } else {
            let closure_4 = tmp;
            templateId = undefined;
            ticket = undefined;
            const ws2 = closure_1.ws;
            open = ws2.close();
            if (closure_1.helloSeen) {
              open = require("ConjureWorkerTickets");
              open.forgetEarlyTicket(closure_0);
            }
            c6 = 1;
            const obj7 = require("ConjureWorkerTickets");
            open = obj7.mintWorkerTicket(tmp69);
            c7 = 2;
            c8 = 1;
            const obj8 = { value: open, done: false };
            return obj8;
          }
        } else {
          if (1 === tmp4) {
            open = tmp57;
            c6 = 0;
            if (closure_1.disposed) {
              c8 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            } else {
              closure_132_13(closure_0, "failed");
              open = closure_1;
              const _Error = Error;
              let str = "ws open failed";
              const tmp21 = closure_132_17;
              const tmp22 = closure_0;
              if (tmp57 instanceof Error) {
                str = tmp57.message;
              }
              tmp21(tmp22, open, str);
              closure_1.pendingModelSettings = null;
              closure_1.pendingTemplatePrep = null;
              const obj3 = closure_132_0(closure_132_2[25]);
              obj3.rejectPendingPublish(closure_0, "Connection failed before the publish result arrived");
              const obj4 = closure_132_0(closure_132_2[26]);
              const result = obj4.rejectPendingPublishSchedule(closure_0);
              const obj5 = closure_132_0(closure_132_2[25]);
              const result1 = obj5.rejectPendingPatchNotesDraft(closure_0, "Connection failed before the draft arrived");
              open = closure_0;
              const obj9 = { location: "connection", code: closure_132_0(closure_132_2[33]).ConjureErrorCodes.WS_OPEN_FAILED, message: str2 };
              const trackConjureErrored = closure_132_0(closure_132_2[33]).trackConjureErrored;
              const tmp45 = closure_132_0(closure_132_2[33]);
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
            const obj10 = { value, done: true };
            return obj10;
          } else {
            templateId = value;
            ticket = templateId.ticket;
            open = templateId.baseUrl;
            if (closure_1.disposed) {
              c6 = 0;
              c8 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            } else {
              const ws = closure_1.ws;
              open = ws.open;
              obj = {
                url: open,
                ticket,
                templateId,
                onEvent(arg0) {
                            const heartbeat = closure_1_1.heartbeat;
                            heartbeat.received();
                            closure_2_21(closure_1_0, closure_1_1, arg0);
                          },
                onPong() {
                            const heartbeat = closure_1_1.heartbeat;
                            return heartbeat.pong();
                          },
                onClose() {
                            closure_2_22(closure_1_0, closure_1_1);
                          },
                onError() {

                          }
              };
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
  let conjureSocketHeartbeat;
  let tmp11;
  function openWithFreshTicket() {
    return obj(...arguments);
  }
  _require = projectId;
  let warmTemplateId = arg1;
  if (arg1 === undefined) {
    warmTemplateId = null;
  }
  let conjureWebSocket;
  obj = map;
  let value = map.get(projectId);
  if (null == value) {
    const self = this;
    const self2 = this;
    conjureWebSocket = new require("ConjureWebSocket").ConjureWebSocket();
    const obj3 = { ws: conjureWebSocket, backoff: tmp11, heartbeat: conjureSocketHeartbeat, helloSeen: false, disposed: false, reconnectPending: false, pendingSends: [], pendingEvents: [], pendingModelSettings: null, pendingTemplatePrep: null, warmTemplateId: null, debugOnDemand: false };
    const self3 = this;
    const self4 = this;
    const self5 = this;
    const self6 = this;
    tmp11 = new conjureWebSocket(559)(1000, 30000);
    conjureSocketHeartbeat = new require("ConjureSocketHeartbeat").ConjureSocketHeartbeat(() => conjureWebSocket.sendPing(), () => {
      const value = map.get(projectId);
      const tmp = projectId;
      if (null != value) {
        const ws = value.ws;
        ws.close();
        handleSocketClosed(tmp, value);
      }
    });
    const result = obj.set(projectId, obj3);
    const obj5 = require("conjureProjectSockets");
    obj5.setConjureSocket(projectId, obj3.ws);
    const obj6 = require("conjureWakeSignals");
    obj6.listenForConjureWake(handleWake);
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
  const heartbeat = value.heartbeat;
  heartbeat.stop();
  obj2 = conjureWebSocket(572);
  const obj4 = { type: "CONJURE_CHAT_CONN_STATE", projectId, connState: "connecting" };
  obj2.dispatch(obj4);
  openWithFreshTicket(projectId, value);
}
function handleWake() {
  let tmp6;
  let tmp7;
  const arr = Array.from(map.entries());
  const tmp2 = arr[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let tmp8 = tmp7;
    if (tmp7.reconnectPending) {
      let backoff = tmp8.backoff;
      let succeedResult = backoff.succeed();
      let tmp14 = connect(tmp6);
    } else {
      let heartbeat = tmp8.heartbeat;
      let expediteResult = heartbeat.expedite();
    }
    continue;
  }
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
    const heartbeat = value.heartbeat;
    heartbeat.stop();
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
let merged1 = Object.assign(conjureChatConnection.chatFrameHandlers);
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
const merged18 = Object.assign(conjureUsageConnection.usageStepHandlers);
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
  APP_STATE_UPDATE: function handleAppStateUpdate(state) {
    if ("active" === state.state) {
      handleWake();
    }
    return false;
  },
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

export default conjureConnectionStore;
export function optimisticMessageId(arg0) {
  return "optimistic:" + arg0;
}
export function subscribeDebugBacklog(projectId) {
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
}
export function ensureConnection(arg0) {
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
}
export function sendUserMessage(projectId, trimmed, arg2) {
  let attachments;
  let clarificationAnswers;
  let content;
  let nonce;
  let nonce1;
  let nonce2;
  let obj5;
  let obj7;
  let remix;
  let templateId;
  obj = arg3;
  if (arg3 === undefined) {
    obj = {};
  }
  ({ clarificationAnswers, nonce, templateId, remix } = obj);
  trimmed = trimmed.trim();
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
  obj2 = conjureLinkEmbeds;
  const result = obj2.readyConjureLinkEmbeds(trimmed);
  const obj3 = { content: trimmed, nonce: nonce1, attachments: tmp2, templateId, remix };
  nonce1 = nonce;
  if (nonce == null) {
    const tmp3Result = createNonce;
    nonce1 = tmp3Result.createNonce();
  }
  if (null != clarificationAnswers) {
    obj5 = { clarificationAnswers };
    const obj4 = { clarificationAnswers };
  } else {
    obj5 = {};
  }
  const merged = Object.assign(obj5);
  if (null != result) {
    obj7 = { linkEmbeds: result };
    const obj6 = { linkEmbeds: result };
  } else {
    obj7 = {};
  }
  const merged1 = Object.assign(obj7);
  const value = map.get(projectId);
  if (null != value) {
    const pendingSends = value.pendingSends;
    pendingSends.push(obj3);
    return true;
  }
  appendLocalUserMessage(projectId, obj3);
  try {
    if (null == value) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Not connected");
      throw error;
    } else {
      const ws = value.ws;
      ({ content, nonce: nonce2, attachments } = obj3);
      let mapped;
      const sendUserMessage = ws.sendUserMessage;
      if (attachments != null) {
        mapped = attachments.map((id) => id.id);
      }
      const obj8 = { templateId: null, remix: null, clarificationAnswers: null, linkEmbeds: null };
      ({ templateId: obj9.templateId, remix: obj9.remix, clarificationAnswers: obj9.clarificationAnswers, linkEmbeds: obj9.linkEmbeds } = obj3);
      sendUserMessage(content, nonce2, mapped, obj8);
      return true;
    }
  } catch (tmp22) {
    const _Error2 = Error;
    let str3 = "send failed";
    if (tmp22 instanceof Error) {
      str3 = tmp22.message;
    }
    if (null == nonce) {
      const tmp3Result2 = conjureChatConnection;
      tmp3Result2.sendFailedStep(projectId, str3);
    }
    return false;
  }
}
export function showUserMessage(projectId, str, arg2) {
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
}
export function withdrawUserMessage(projectId, arg1) {
  map2.delete(arg1);
  obj = DispatcherDefault;
  obj2 = { type: "CONJURE_CHAT_MESSAGE_CANCELLED", projectId, id: "optimistic:" + arg1, withdrawn: true };
  obj.dispatch(obj2);
}
export function interruptTurn(projectId) {
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
}
export function stageModelSettings(arg0, pendingModelSettings) {
  const value = map.get(arg0);
  if (null != value) {
    value.pendingModelSettings = pendingModelSettings;
  }
}
export function prepareTemplate(arg0, pendingTemplatePrep) {
  const value = map.get(arg0);
  if (null != value) {
    if ("open" === map1.get(arg0)) {
      sendTemplatePrep(value, pendingTemplatePrep);
    } else {
      value.pendingTemplatePrep = pendingTemplatePrep;
    }
  }
}
export function loadOlderHistory(arg0) {
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
}
export function resetHistoryPaging(arg0) {
  map4.delete(arg0);
}
export function closeConnection(projectId) {
  teardown(projectId);
}
export { closeAllConnections };
