// Module ID: 12904
// Function ID: 12905
// Name: VibegrationsConnectionStore
// Dependencies: [32, 5, 1377, 12905, 8699, 584, 8701, 12907, 8702, 12909, 1126, 3723, 8700, 12910, 569, 7249, 12911, 12912, 504, 2]
// Exports: closeConnection, createDatabaseRestorePoint, deleteStagedAttachment, draftPatchNotes, ensureConnection, exportProjectArchive, fetchDatabaseRestorePoints, fetchDatabaseRestoreWindow, fetchProjectMcpConnection, fetchSourceHistory, forceCompaction, formatMcpConnectionExpiry, getPreviewScreenshotUrl, interruptTurn, isAttachmentAvailable, publishProject, remixProjectWorkspace, requestDebugStatus, requestExternalAuthorizeUrl, requestProjectRebuild, resetHistoryPaging, restoreDatabaseToPoint, restoreDatabaseToTimestamp, restoreSourceHistoryEntry, sendModelSettings, sendUserMessage, stageModelSettings, submitProjectSecrets, submitProjectSettings, uploadAttachment

// Module 12904 (VibegrationsConnectionStore)
import get_initializedDefault from "get initialized" /* 504 */;
import BackoffDefault from "Backoff" /* 569 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import createNonce from "createNonce" /* 7249 */;
import VibegrationsActionCreators from "VibegrationsActionCreators" /* 8700 */;
import VibegrationsAnalytics from "VibegrationsAnalytics" /* 8701 */;
import VibegrationsPlatformUtilsDefault from "VibegrationsPlatformUtils" /* 8702 */;
import VibegrationsChatStore2 from "VibegrationsChatStore" /* 12905 */;
import vibegrationsPreviewClaims from "vibegrationsPreviewClaims" /* 12909 */;
import VibegrationsWebSocket from "VibegrationsWebSocket" /* 12910 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserStore from "UserStore" /* 1377 */;
import VibegrationsProjectStore from "VibegrationsProjectStore" /* 8699 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const VibegrationsChatStore = VibegrationsChatStore2;
let _require, body, connection_type, externalAuthErrorCode, hasOwnProperty;

let obj4;
let obj5;
let obj6;
let obj8;
let obj9;
function rejectPendingPublish(pendingPublish, arg1) {
  pendingPublish = pendingPublish.pendingPublish;
  if (null != pendingPublish) {
    pendingPublish.pendingPublish = null;
    const _clearTimeout = clearTimeout;
    clearTimeout(pendingPublish.timeout);
    const _Error = Error;
    const self = this;
    const self2 = this;
    const reject = pendingPublish.reject;
    const error = new Error("Connection failed before the publish result arrived");
    reject(error);
  }
}
function rejectPendingPatchNotesDraft(value, arg1) {
  const pendingPatchNotesDraft = value.pendingPatchNotesDraft;
  if (null != pendingPatchNotesDraft) {
    value.pendingPatchNotesDraft = null;
    const _clearTimeout = clearTimeout;
    clearTimeout(pendingPatchNotesDraft.timeout);
    const _Error = Error;
    const self = this;
    const self2 = this;
    const reject = pendingPatchNotesDraft.reject;
    const error = new Error(arg1);
    reject(error);
  }
}
function publishSurface(surface) {
  let tmp = null;
  if (null != surface) {
    tmp = null;
    if (set.has(surface)) {
      tmp = surface;
    }
  }
  return tmp;
}
function setConnState(projectId, open) {
  obj = DispatcherDefault;
  obj2 = { type: "VIBEGRATIONS_CHAT_CONN_STATE", projectId, connState: open };
  obj.dispatch(obj2);
}
function sendFailedStep(projectId, intl, arg2) {
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = obj;
  }
  obj = DispatcherDefault;
  obj2 = { type: "VIBEGRATIONS_CHAT_STEP_APPEND", projectId, step: { type: "step", kind: "terminal_error", message: intl } };
  obj.dispatch(obj2);
  obj3 = { message: intl };
  const trackVibegrationErrored = VibegrationsAnalytics.trackVibegrationErrored;
  VibegrationsAnalytics;
  const merged = Object.assign(tmp);
  const result = trackVibegrationErrored(projectId, obj3);
}
function appendLocalUserMessage(projectId, nextResult) {
  let attachments;
  let content;
  let date;
  let id1;
  const nonce = nextResult.nonce;
  ({ content, attachments } = nextResult);
  set = map5.set;
  const currentUser = UserStore.getCurrentUser();
  let id;
  obj = UserStore;
  if (currentUser != null) {
    id = currentUser.id;
  }
  const result = set(nonce, id);
  const tmp5 = DispatcherDefault;
  const dispatch = tmp5.dispatch;
  obj2 = { type: "VIBEGRATIONS_CHAT_MESSAGE_APPEND", projectId, content, id: "optimistic:" + nonce, userId: id1, timestamp: date.toISOString(), attachments };
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
  set = map5.set;
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  const result = set(nonce, id);
  const tmp7 = DispatcherDefault;
  const dispatch = tmp7.dispatch;
  obj2 = { type: "VIBEGRATIONS_CHAT_MESSAGE_APPEND", projectId, content, id: "optimistic:" + nonce, userId: id1, timestamp: date.toISOString(), attachments };
  const currentUser1 = obj.getCurrentUser();
  id1 = undefined;
  if (currentUser1 != null) {
    id1 = currentUser1.id;
  }
  date = new Date();
  dispatch(obj2);
  obj3 = { type: "VIBEGRATIONS_CHAT_STEP_APPEND", projectId, step: { type: "step", kind: "terminal_error", message } };
  const tmp5Result = DispatcherDefault;
  tmp5Result.dispatch(obj3);
  const obj4 = { message };
  const trackVibegrationErrored = VibegrationsAnalytics.trackVibegrationErrored;
  VibegrationsAnalytics;
  const merged = Object.assign(obj);
  const result1 = trackVibegrationErrored(projectId, obj4);
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
        const project = VibegrationsProjectStore.getProject(projectId);
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
        const tmp21 = sendFailedStep;
        if (tmp20 instanceof Error) {
          str = tmp20.message;
        }
        tmp21(projectId, str);
      }
    }
  }
}
let obj = function _mintUpstreamTicket() {
  obj = _asyncToGenerator(async (arg0, value, arg2) => {
    let closure_0 = arg0;
    let closure_1 = value;
    let closure_2 = arg2;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      let c6;
      let status;
      try {
        let ticket;
        c7 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_3 = tmp3;
            ticket = undefined;
            status = undefined;
            c6 = 1;
            c4 = 2;
            c7 = 1;
            const obj5 = { value: obj2.mintRemixTicket(closure_2), done: false };
            obj2 = require("VibegrationsWorkerTickets");
            return obj5;
          }
        } else {
          if (1 === c4) {
            c6 = 0;
            status = undefined;
            if (status != null) {
              status = status.status;
            }
            const ws2 = closure_0.ws;
            let str = "failed";
            const sendUpstreamTicketAck = ws2.sendUpstreamTicketAck;
            const tmp13 = closure_1;
            if (403 === status) {
              str = "forbidden";
            }
            const result = sendUpstreamTicketAck(tmp13, undefined, str);
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            ticket = value.ticket;
            const ws = closure_0.ws;
            const result1 = ws.sendUpstreamTicketAck(closure_1, ticket);
            c6 = 0;
          }
          c7 = 3;
          return { value: "IconComponent", done: "IconComponent" };
        }
      } catch (tmp21) {
        status = tmp21;
        if (0 === c6) {
          c7 = 3;
          throw tmp21;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _relayCaptureRequest() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let ws = arg1;
    const user = arg2;
    let c4 = 0;
    let c7 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "IconComponent" };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              obj3 = { value, done: true };
              return obj3;
            } else {
              ws2 = undefined;
              const _Date = Date;
              const timestamp = Date.now();
              c6 = 1;
              const obj4 = {
                probe: null,
                spec: null,
                build: null,
                onAccepted: function() {
                          return closure_1_4(...arguments);
                        }
              };
              ({ probe: obj5.probe, spec: obj5.spec, build: obj5.build } = user);
              const relayPreviewCapture = VibegrationsPlatformUtilsDefault.relayPreviewCapture;
              const id = user.id;
              VibegrationsPlatformUtilsDefault;
              let closure_4 = _asyncToGenerator(async () => {
                let c1;
                let v3;
                ws = ws.ws;
                ws.sendCaptureAck(user.id, "accepted");
                obj3 = c0(closure_1_2[9]);
                await obj3.awaitVibegrationsPreviewClaim(closure_2_0, user.id);
                return arg1;
              });
              c4 = 2;
              c7 = 1;
              const obj9 = { value: relayPreviewCapture(closure_0, id, obj4), done: false };
              return obj9;
            }
          } else {
            if (1 === tmp3) {
              c6 = 0;
              ws2 = { status: "failed" };
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c7 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              ws2 = value;
              c6 = 0;
            }
            ws = ws.ws;
            ws.sendCaptureAck(user.id, ws2.status, ws2.code, ws2.message);
            c7 = 3;
            return { value: "IconComponent", done: "IconComponent" };
          }
        } catch (tmp15) {
          closure_5 = tmp15;
          if (0 === c6) {
            c7 = 3;
            throw tmp15;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _relayControlRequest() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    const user = arg2;
    let c4 = 0;
    let c7 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      let id;
      let request;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "IconComponent" };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              obj3 = { value, done: true };
              return obj3;
            } else {
              closure_3 = undefined;
              const _Date = Date;
              const timestamp = Date.now();
              c6 = 1;
              const obj5 = VibegrationsPlatformUtilsDefault;
              ({ id, request } = user);
              c4 = 2;
              c7 = 1;
              const obj4 = {
                value: obj5.relayPreviewControl(closure_0, id, request, _asyncToGenerator(async () => {
                          let c1;
                          let v3;
                          let ws;
                          ws = ws.ws;
                          ws.sendControlAck(user.id, "accepted");
                          obj3 = c0(closure_1_2[9]);
                          await obj3.awaitVibegrationsPreviewClaim(closure_2_0, user.id);
                          return null != arg1;
                        })),
                done: false
              };
              return obj4;
            }
          } else {
            if (1 === c4) {
              c6 = 0;
              const ws4 = closure_1.ws;
              ws4.sendControlAck(user.id, "failed", undefined, "the client could not drive the preview frame");
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c7 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_3 = value;
              if ("completed" === closure_3.status) {
                const ws3 = closure_1.ws;
                ws3.sendControlAck(user.id, "completed", closure_3.response);
              } else if ("failed" === closure_3.status) {
                const ws2 = closure_1.ws;
                ws2.sendControlAck(user.id, "failed", undefined, closure_3.message);
              } else {
                let ws = closure_1.ws;
                ws.sendControlAck(user.id, "unavailable");
              }
              c6 = 0;
            }
            c7 = 3;
            return { value: "IconComponent", done: "IconComponent" };
          }
        } catch (tmp27) {
          closure_5 = tmp27;
          if (0 === c6) {
            c7 = 3;
            throw tmp27;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function handleEvent(projectId, pendingEvents, type) {
  let attachment_id;
  let date;
  let date1;
  let date2;
  let date3;
  let elapsed_ms;
  let headroom;
  let input_tokens;
  let messages;
  let num15;
  let num16;
  let num17;
  let num2;
  let num3;
  let num4;
  let obj173;
  let obj31;
  let obj34;
  let obj43;
  let obj48;
  let obj51;
  let obj53;
  let obj57;
  let obj58;
  let obj62;
  let obj77;
  let obj82;
  let obj86;
  let obj89;
  let obj90;
  let obj93;
  let obj95;
  let obj97;
  let phase;
  let retained_messages;
  let seq;
  let session;
  let status;
  let stderr_tail;
  let stop_reason;
  let str10;
  let text;
  let ticks;
  let tier_settings;
  let tiers;
  let tmp218;
  let tmp240;
  function beginHistoryDrain(projectId) {
    const tmp = getOlderHistoryCursor(projectId);
    if (null != tmp) {
      obj = map7;
      if (map7.get(projectId) !== tmp) {
        const value = map.get(projectId);
        if (null != value) {
          const result = obj.set(projectId, tmp);
          const ws = value.ws;
          ws.sendLoadHistory(tmp);
        }
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
    attachment_id(dependencyMap[5]);
    obj = { type: "VIBEGRATIONS_CHAT_MESSAGE_APPEND", projectId, content: content.content, id: content.id };
    if (hasItem) {
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
  function isKnownDisposition(disposition) {
    hasOwnProperty = Object.prototype.hasOwnProperty;
    return hasOwnProperty.call(closure_1_26, disposition);
  }
  function relayCaptureRequest() {
    return obj(...arguments);
  }
  function relayControlRequest() {
    return obj(...arguments);
  }
  function mintUpstreamTicket() {
    return obj(...arguments);
  }
  function reportRuntimeError(projectId, historical) {
    if (true !== historical.historical) {
      if ("error" === historical.level) {
        let tmp2;
        if (null != historical.source) {
          tmp2 = obj7[historical.source];
        }
        if (null != tmp2) {
          let value = map6.get(projectId);
          const obj4 = map6;
          if (null == value) {
            const _Set = Set;
            const self = this;
            const self2 = this;
            set = new Set();
            const result = obj4.set(projectId, set);
            value = set;
          }
          const source = historical.source;
          const str = historical.message;
          const replaced = str.replace(/\d+/g, "#");
          const _HermesInternal = HermesInternal;
          const combined = "" + source + ":" + replaced.slice(0, 200);
          const hasItem = value.has(combined) || value.size >= 10;
          if (!hasItem) {
            value.add(combined);
            obj = { location: null, code: null, message: null, details: null };
            ({ location: obj3.location, code: obj3.code } = tmp2);
            ({ message: obj3.message, source: obj3.details } = historical);
            obj2 = pendingEvents(dependencyMap[6]);
            const result1 = obj2.trackVibegrationErrored(projectId, obj);
          }
        }
      }
    }
  }
  _require = pendingEvents;
  if ("hello" !== type.type) {
    if ("history" !== type.type) {
      if ("capture_preview" !== type.type) {
        let str = "control_preview";
        if ("control_preview" !== type.type) {
          if ("control_claim" !== type.type) {
            if ("capture_claim" !== type.type) {
              if ("preview_operation" !== type.type) {
                if ("request_upstream_ticket" !== type.type) {
                  let tmp = map1;
                  if ("open" !== map1.get(projectId)) {
                    const pendingEvents1 = pendingEvents.pendingEvents;
                    pendingEvents1.push(type);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if ("history_page" === type.type) {
    let value = map7.get(projectId);
    map7.delete(projectId);
    if (true !== type.failed) {
      obj2 = { type: "VIBEGRATIONS_CHAT_HISTORY_PREPEND", projectId, entries: messages.slice(), cursor: tmp240 };
      messages = type.messages;
      const dispatch9 = attachment_id(584).dispatch;
      attachment_id(584);
      if (messages == null) {
        messages = [];
      }
      tmp240 = null;
      if (true === type.has_more) {
        let cursor = type.cursor;
        if (cursor == null) {
          cursor = null;
        }
        tmp240 = cursor;
      }
      dispatch9(obj2);
      loadOlderHistory(projectId);
    }
  } else if ("hello" === type.type) {
    pendingEvents.helloSeen = true;
    const backoff = pendingEvents.backoff;
    backoff.succeed();
  } else if ("history" === type.type) {
    let messages1 = type.messages;
    if (messages1 == null) {
      messages1 = [];
    }
    const substr = messages1.slice();
    const obj6 = { type: "VIBEGRATIONS_CHAT_HISTORY_SET", projectId, entries: substr, cursor: tmp218, degraded: true === type.degraded };
    tmp218 = null;
    const dispatch8 = attachment_id(584).dispatch;
    attachment_id(584);
    if (true === type.has_more) {
      let cursor1 = type.cursor;
      if (cursor1 == null) {
        cursor1 = null;
      }
      tmp218 = cursor1;
    }
    dispatch8(obj6);
    map7.delete(projectId);
    beginHistoryDrain(projectId);
    pendingEvents = pendingEvents.pendingEvents;
    pendingEvents.pendingEvents = [];
    setConnState(projectId, "open");
    for (const item10721 of pendingEvents) {
      let tmp229 = handleEvent(projectId, pendingEvents, item10721);
      continue;
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
    flushPendingSends(projectId, pendingEvents);
  } else if ("chat_state" === type.type) {
    const obj8 = { type: "VIBEGRATIONS_CHAT_STOPPED_SET", projectId, stopped: type.stopped };
    const obj75 = attachment_id(584);
    obj75.dispatch(obj8);
    const stopped = type.stopped || "open" !== map1.get(projectId);
    if (!stopped) {
      flushPendingSends(projectId, pendingEvents);
    }
  } else if ("user_message" === type.type) {
    appendAcceptedUserMessage(projectId, type);
  } else if ("message_disposition" === type.type) {
    if (isKnownDisposition(type.disposition)) {
      const obj9 = { type: "VIBEGRATIONS_CHAT_MESSAGE_DISPOSITION", projectId, id: null, activeTurnId: null, disposition: null };
      ({ id: obj74.id, active_turn_id: obj74.activeTurnId, disposition: obj74.disposition } = type);
      const obj73 = attachment_id(584);
      obj73.dispatch(obj9);
    }
  } else if ("publish_notice" === type.type) {
    const obj11 = { type: "VIBEGRATIONS_CHAT_PUBLISH_NOTICE", projectId, id: null, content: null, timestamp: null, publishNotice: null };
    ({ id: obj72.id, content: obj72.content, ts: obj72.timestamp, publish_notice: obj72.publishNotice } = type);
    const obj71 = attachment_id(584);
    obj71.dispatch(obj11);
  } else if ("side_reply" === type.type) {
    const obj13 = { type: "VIBEGRATIONS_CHAT_SIDE_REPLY", projectId, id: null, inReplyTo: null, content: null, timestamp: null };
    ({ id: obj70.id, in_reply_to: obj70.inReplyTo, content: obj70.content, ts: obj70.timestamp } = type);
    const obj69 = attachment_id(584);
    obj69.dispatch(obj13);
  } else if ("source_checkpoint" === type.type) {
    const obj17 = { type: "VIBEGRATIONS_CHAT_SOURCE_CHECKPOINT", projectId, turnId: null, sourceSha: null };
    ({ turn_id: obj68.turnId, source_sha: obj68.sourceSha } = type);
    const obj67 = attachment_id(584);
    obj67.dispatch(obj17);
  } else if ("turn_notification" === type.type) {
    const obj20 = { type: "VIBEGRATIONS_TURN_NOTIFICATION", projectId, body: null, nonce: null };
    ({ summary: obj66.body, nonce: obj66.nonce } = type);
    const obj65 = attachment_id(584);
    obj65.dispatch(obj20);
  } else if ("provisional_todo" === type.type) {
    const obj23 = { type: "VIBEGRATIONS_CHAT_PROVISIONAL_TODO", projectId, turnId: null, text: null };
    ({ turn_id: obj64.turnId, text: obj64.text } = type);
    const obj63 = attachment_id(584);
    obj63.dispatch(obj23);
  } else if ("step" === type.type) {
    if ("reply" === type.kind) {
      let str31 = type.message;
      if (str31 == null) {
        str31 = "";
      }
      if ("" !== str31) {
        const obj24 = { type: "VIBEGRATIONS_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: obj31 };
        obj31 = { content: str31, kind: "message" };
        const obj60 = attachment_id(584);
        obj60.dispatch(obj24);
      } else {
        const intl2 = require("intl").intl;
        sendFailedStep(projectId, intl2.string(attachment_id(3723).Z8Eo8I), obj2);
      }
    } else if ("thinking_lifecycle" === type.kind) {
      ({ phase, session, seq, ticks, elapsed_ms, text } = type);
      const tmp173 = null != phase && null != seq && null != session;
      if (tmp173) {
        const obj32 = { type: "VIBEGRATIONS_CHAT_THINKING_SET", projectId, activity: obj34 };
        obj34 = { phase, session, seq, ticks, elapsedMs: elapsed_ms, text };
        const dispatch7 = attachment_id(584).dispatch;
        attachment_id(584);
        if (ticks == null) {
          ticks = 0;
        }
        if (elapsed_ms == null) {
          elapsed_ms = 0;
        }
        if (text == null) {
          text = "";
        }
        dispatch7(obj32);
      }
    } else if ("compaction" === type.kind) {
      const tmp168 = "start" !== type.phase && "end" !== type.phase;
      if (!tmp168) {
        const obj35 = { type: "VIBEGRATIONS_CHAT_COMPACTING_SET", projectId, compacting: "start" === type.phase };
        const obj56 = attachment_id(584);
        obj56.dispatch(obj35);
      }
    } else if ("debug_compaction_declined" === type.kind) {
      const tmp161 = null != type.projected && null != type.threshold;
      if (tmp161) {
        const obj38 = { type: "VIBEGRATIONS_DEBUG_COMPACTION_DECLINED", projectId, promptCeiling: num16, threshold: null, projected: null, headroom, retainedMessages: num17, observedAt: date.toISOString() };
        num16 = type.prompt_ceiling;
        const dispatch6 = attachment_id(584).dispatch;
        attachment_id(584);
        if (num16 == null) {
          num16 = 0;
        }
        ({ threshold: obj54.threshold, projected: obj54.projected, headroom } = type);
        if (headroom == null) {
          headroom = type.threshold - type.projected;
        }
        num17 = type.retained_messages;
        if (num17 == null) {
          num17 = 0;
        }
        const _Date4 = Date;
        const self7 = this;
        const self8 = this;
        date = new Date();
        dispatch6(obj38);
      }
    } else if ("force_compaction_result" === type.kind) {
      const outcome = type.outcome;
      const tmp149 = "compacted" !== outcome && "declined" !== outcome && "failed" !== outcome && "busy" !== outcome;
      if (!tmp149) {
        const obj39 = { type: "VIBEGRATIONS_DEBUG_FORCE_COMPACTION_RESULT", projectId, outcome, reason: type.reason, observedAt: date1.toISOString() };
        const tmp153 = true === type.pending_turn ? { pendingTurn: true } : {};
        const dispatch5 = attachment_id(584).dispatch;
        attachment_id(584);
        let merged = Object.assign(tmp153);
        const _Date3 = Date;
        const self5 = this;
        const self6 = this;
        date1 = new Date();
        dispatch5(obj39);
      }
    } else if ("debug_compaction_report" === type.kind) {
      const tmp142 = null != type.tokens_before && null != type.tokens_after;
      if (tmp142) {
        const obj41 = { type: "VIBEGRATIONS_DEBUG_COMPACTION_REPORT", projectId, tokensBefore: null, tokensAfter: null, retainedMessages: retained_messages, promptCeiling: num15, observedAt: date2.toISOString() };
        ({ tokens_before: obj50.tokensBefore, tokens_after: obj50.tokensAfter, retained_messages } = type);
        const dispatch4 = attachment_id(584).dispatch;
        attachment_id(584);
        if (retained_messages == null) {
          retained_messages = 0;
        }
        num15 = type.prompt_ceiling;
        if (num15 == null) {
          num15 = 0;
        }
        const _Date2 = Date;
        const self3 = this;
        const self4 = this;
        date2 = new Date();
        dispatch4(obj41);
      }
    } else if ("todos" === type.kind) {
      let items = type.items;
      if (items == null) {
        items = [];
      }
      if (items.length > 0) {
        const obj42 = { type: "VIBEGRATIONS_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: obj43 };
        obj43 = { todos: items };
        const obj101 = attachment_id(584);
        obj101.dispatch(obj42);
        const obj45 = { type: "VIBEGRATIONS_CHAT_STEP_APPEND", projectId, turnId: type.turn_id, step: type };
        const obj104 = attachment_id(584);
        obj104.dispatch(obj45);
      }
    } else if ("plan_proposed" === type.kind) {
      if (null != type.proposal) {
        const obj46 = { type: "VIBEGRATIONS_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: obj48 };
        obj48 = { proposal: type.proposal, kind: "proposal" };
        const obj47 = attachment_id(584);
        obj47.dispatch(obj46);
      } else {
        const intl = require("intl").intl;
        sendFailedStep(projectId, intl.string(attachment_id(3723).IHCafX), obj2);
      }
    } else if ("ideas" === type.kind) {
      const tmp126 = null != type.ideas && type.ideas.length > 0;
      if (tmp126) {
        const obj49 = { type: "VIBEGRATIONS_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: obj51 };
        obj51 = { ideas: type.ideas };
        const obj44 = attachment_id(584);
        obj44.dispatch(obj49);
      }
    } else if ("restore_proposal" === type.kind) {
      if (null != type.restore_proposal) {
        const obj52 = { type: "VIBEGRATIONS_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: obj53 };
        obj53 = { restoreProposal: type.restore_proposal };
        const obj98 = attachment_id(584);
        obj98.dispatch(obj52);
      }
    } else if ("publish_cta" === type.kind) {
      if (null != type.publish_cta) {
        const obj55 = { type: "VIBEGRATIONS_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: obj57 };
        obj57 = { publishCta: obj58 };
        obj58 = { surface: publishSurface(type.publish_cta.surface) };
        const dispatch11 = attachment_id(584).dispatch;
        attachment_id(584);
        dispatch11(obj55);
      }
    } else if ("publish_status" === type.kind) {
      const obj59 = { type: "VIBEGRATIONS_PROJECT_PUBLISH_STATUS_UPDATE", projectId, published: true === type.published, hasUnpublishedChanges: true === type.has_unpublished_changes, surface: publishSurface(type.surface) };
      const dispatch3 = attachment_id(584).dispatch;
      attachment_id(584);
      dispatch3(obj59);
    } else if ("clarification" === type.kind) {
      let tmp114 = null != type.clarification;
      if (tmp114) {
        const questions = type.clarification.questions;
        let num9;
        if (questions != null) {
          num9 = questions.length;
        }
        if (num9 == null) {
          num9 = 0;
        }
        tmp114 = num9 > 0;
      }
      if (tmp114) {
        const obj61 = { type: "VIBEGRATIONS_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: obj62 };
        obj62 = { clarification: type.clarification };
        const obj40 = attachment_id(584);
        obj40.dispatch(obj61);
      }
    } else if ("attachment" === type.kind) {
      const tmp109 = null != type.attachments && type.attachments.length > 0;
      if (tmp109) {
        const obj76 = { type: "VIBEGRATIONS_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: obj77 };
        obj77 = { attachments: type.attachments };
        const obj37 = attachment_id(584);
        obj37.dispatch(obj76);
      }
    } else if ("collect_secrets" === type.kind) {
      let fields = type.fields;
      if (fields == null) {
        fields = [];
      }
      if (fields.length > 0) {
        const obj79 = { type: "VIBEGRATIONS_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: obj82 };
        obj82 = { secretRequest: obj86 };
        obj86 = { fields, note: null, copy_values: null };
        ({ note: obj94.note, copy_values: obj94.copy_values } = type);
        const obj91 = attachment_id(584);
        obj91.dispatch(obj79);
      }
    } else if ("collect_settings" === type.kind) {
      const obj88 = { type: "VIBEGRATIONS_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: obj89 };
      obj89 = { settingsRequest: obj90 };
      obj90 = { keys: null, note: null };
      ({ keys: obj36.keys, note: obj36.note } = type);
      const obj33 = attachment_id(584);
      obj33.dispatch(obj88);
    } else if ("awaiting_user" === type.kind) {
      if ("secrets" === type.action) {
        const obj92 = { type: "VIBEGRATIONS_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: obj93 };
        obj93 = { awaitingUser: obj95 };
        obj95 = { action: type.action };
        const obj87 = attachment_id(584);
        obj87.dispatch(obj92);
      }
    } else if ("intake" === type.kind) {
      let tmp100 = null != type.intake;
      if (tmp100) {
        const questions1 = type.intake.questions;
        let num5;
        if (questions1 != null) {
          num5 = questions1.length;
        }
        if (num5 == null) {
          num5 = 0;
        }
        tmp100 = num5 > 0;
      }
      if (tmp100) {
        const obj96 = { type: "VIBEGRATIONS_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: obj97 };
        obj97 = { intake: type.intake };
        const obj30 = attachment_id(584);
        obj30.dispatch(obj96);
      }
    } else if ("usage" === type.kind) {
      const tmp95 = null != type.turn && null != type.project;
      if (tmp95) {
        const obj99 = { type: "VIBEGRATIONS_CHAT_USAGE_SET", projectId, turn: null, project: null };
        ({ turn: obj29.turn, project: obj29.project } = type);
        const obj28 = attachment_id(584);
        obj28.dispatch(obj99);
      }
    } else if ("reaction" === type.kind) {
      const tmp90 = null != type.message_id && null != type.emoji && "" !== type.emoji;
      if (tmp90) {
        const obj100 = { type: "VIBEGRATIONS_CHAT_MESSAGE_REACTION", projectId, id: null, emoji: null };
        ({ message_id: obj27.id, emoji: obj27.emoji } = type);
        const obj26 = attachment_id(584);
        obj26.dispatch(obj100);
      }
    } else if ("project_named" === type.kind) {
      const name = type.name;
      const tmp85 = null != name && "" !== name;
      if (tmp85) {
        const obj25 = require("VibegrationsActionCreators");
        const renameProjectResult = obj25.renameProject(projectId, name);
        renameProjectResult.catch(() => {

        });
      }
    } else if ("publish_result" === type.kind) {
      const pendingPublish = pendingEvents.pendingPublish;
      pendingEvents.pendingPublish = null;
      if (null != pendingPublish) {
        const _clearTimeout2 = clearTimeout;
        clearTimeout(pendingPublish.timeout);
        pendingPublish.resolve(type);
      }
      if (true !== type.ok) {
        let str21 = type.error;
        const trackPublishFailed = require("VibegrationsActionCreators").trackPublishFailed;
        require("VibegrationsActionCreators");
        if (str21 == null) {
          str21 = "publish_result not ok";
        }
        trackPublishFailed(projectId, str21, false);
      } else {
        const publishStatus = VibegrationsProjectStore.getPublishStatus(projectId);
        if (null != publishStatus) {
          const obj102 = { type: "VIBEGRATIONS_PROJECT_PUBLISH_STATUS_UPDATE", projectId, published: true, hasUnpublishedChanges: false, surface: publishStatus.surface };
          const obj85 = attachment_id(584);
          obj85.dispatch(obj102);
        }
      }
    } else if ("patch_notes_draft" === type.kind) {
      const pendingPatchNotesDraft = pendingEvents.pendingPatchNotesDraft;
      const tmp70 = null != pendingPatchNotesDraft && pendingPatchNotesDraft.nonce === type.nonce;
      if (tmp70) {
        pendingEvents.pendingPatchNotesDraft = null;
        const _clearTimeout = clearTimeout;
        clearTimeout(pendingPatchNotesDraft.timeout);
        pendingPatchNotesDraft.resolve(type);
      }
    } else if ("app_icon_set" === type.kind) {
      const icon = type.icon;
      if (null != icon) {
        if ("" !== icon) {
          attachment_id = type.attachment_id;
          const obj84 = require("VibegrationsActionCreators");
          const setProjectIconResult = obj84.setProjectIcon(projectId, icon);
          const nextPromise = setProjectIconResult.then((ok) => {
            let str = "failed";
            if (ok.ok) {
              str = "applied";
            }
            const tmp2 = null != attachment_id && "" !== tmp;
            if (tmp2) {
              const ws = pendingEvents.ws;
              ws.sendAppIconAck(attachment_id, str);
            }
          });
          nextPromise.catch(() => {
            const tmp2 = null != attachment_id && "" !== tmp;
            if (tmp2) {
              const ws = pendingEvents.ws;
              ws.sendAppIconAck(attachment_id, "failed");
            }
          });
        }
      }
    } else if ("turn_result" === type.kind) {
      const obj18 = require("VibegrationsAnalytics");
      let result = obj18.trackVibegrationTurnResulted(projectId, type);
      if ("deployed" === type.result) {
        const obj103 = { type: "VIBEGRATIONS_CHAT_TURN_PATCH", projectId, turnId: type.turn_id, patch: { kind: "plan_implemented" } };
        const obj19 = attachment_id(584);
        obj19.dispatch(obj103);
      }
      const obj105 = { type: "VIBEGRATIONS_CHAT_TURN_FINISHED", projectId, turnId: null, summary: null };
      ({ turn_id: obj22.turnId, summary: obj22.summary } = type);
      const obj21 = attachment_id(584);
      obj21.dispatch(obj105);
      let deleteResult2 = set1.delete(projectId);
      const tmp63 = attachment_id;
      if (deleteResult2) {
        deleteResult2 = "cancelled" === type.result;
      }
      if (deleteResult2) {
        const obj167 = { type: "VIBEGRATIONS_CHAT_INTERRUPTED", projectId };
        const tmp63Result = tmp63(584);
        tmp63Result.dispatch(obj167);
      }
    } else {
      const obj168 = { type: "VIBEGRATIONS_CHAT_STEP_APPEND", projectId, turnId: type.turn_id, step: type };
      const obj81 = attachment_id(584);
      obj81.dispatch(obj168);
      const tmp50 = "build_error" !== type.kind && "healthcheck_failed" !== type.kind && "error" !== type.kind;
      if (!tmp50) {
        const obj169 = { message: type.message, details: stderr_tail };
        const trackVibegrationErrored = require("VibegrationsAnalytics").trackVibegrationErrored;
        require("VibegrationsAnalytics");
        const merged1 = Object.assign(obj3[type.kind]);
        stderr_tail = undefined;
        if ("build_error" === type.kind) {
          stderr_tail = type.stderr_tail;
        }
        let result1 = trackVibegrationErrored(projectId, obj169);
      }
      if ("preview_ready" === type.kind) {
        const obj83 = require("VibegrationsActionCreators");
        const result2 = obj83.refreshPublishedProject(projectId, { isPreview: true });
        result2.catch(() => {

        });
      }
    }
  } else if ("capture_preview" === type.type) {
    const promise2 = relayCaptureRequest(projectId, pendingEvents, type);
    promise2.catch(() => {

    });
  } else if ("control_preview" === type.type) {
    const promise = relayControlRequest(projectId, pendingEvents, type);
    promise.catch(() => {

    });
  } else {
    if ("control_claim" !== type.type) {
      if ("capture_claim" !== type.type) {
        if ("preview_operation" === type.type) {
          if ("begin" === type.phase) {
            const obj16 = attachment_id(8702);
            const result3 = obj16.beginPreviewOperation(projectId);
          } else {
            const obj15 = attachment_id(8702);
            obj15.endPreviewOperation(projectId);
          }
        } else if ("model_settings" === type.type) {
          const obj170 = { type: "VIBEGRATIONS_MODEL_SETTINGS_SET", projectId, settings: null, tierSettings: tier_settings, tiers, choices: type.choices };
          ({ settings: obj14.settings, tier_settings } = type);
          const dispatch2 = attachment_id(584).dispatch;
          attachment_id(584);
          if (tier_settings == null) {
            tier_settings = null;
          }
          tiers = type.tiers;
          if (tiers == null) {
            tiers = null;
          }
          dispatch2(obj170);
        } else if ("debug_status" === type.type) {
          const obj171 = { type: "VIBEGRATIONS_DEBUG_STATUS_SET", projectId, status, failed: true === type.failed || null == type.status };
          status = type.status;
          const dispatch = attachment_id(584).dispatch;
          attachment_id(584);
          if (status == null) {
            status = null;
          }
          dispatch(obj171);
        } else if ("settings" === type.type) {
          const obj172 = { type: "VIBEGRATIONS_SETTINGS_SET", projectId, settings: obj173 };
          obj173 = { schema: null, values: null, secrets: null, connections: null };
          ({ schema: obj12.schema, values: obj12.values, secrets: obj12.secrets, connections: obj12.connections } = type);
          const obj10 = attachment_id(584);
          obj10.dispatch(obj172);
        } else if ("debug_model_call" === type.type) {
          obj7 = attachment_id(584);
          const obj174 = { type: "VIBEGRATIONS_MODEL_CALL_APPEND", projectId, modelCall: type };
          obj7.dispatch(obj174);
          if ("started" !== type.status) {
            const obj175 = { type: "VIBEGRATIONS_DEBUG_MODEL_CALL", projectId, id: type.id, role: str10, model: type.model, stopReason: stop_reason, durationMs: null, inputTokens: input_tokens, outputTokens: num2, cacheReadTokens: num3, cacheWriteTokens: num4, observedAt: date3.toISOString() };
            str10 = "compaction";
            const dispatch10 = tmp14(584).dispatch;
            attachment_id(584);
            if ("compaction" !== type.agent) {
              let str8 = "orchestrator";
              if ("subagent" === type.agent) {
                str8 = "codegen";
              }
              str10 = str8;
            }
            if ("error" === type.status) {
              let str12 = type.stop_reason;
              if (str12 == null) {
                str12 = "error";
              }
              stop_reason = str12;
            } else {
              stop_reason = type.stop_reason;
            }
            ({ duration_ms: obj80.durationMs, input_tokens } = type);
            if (input_tokens == null) {
              input_tokens = 0;
            }
            num2 = type.output_tokens;
            if (num2 == null) {
              num2 = 0;
            }
            num3 = type.cache_read_tokens;
            if (num3 == null) {
              num3 = 0;
            }
            num4 = type.cache_write_tokens;
            if (num4 == null) {
              num4 = 0;
            }
            const _Date = Date;
            let self = this;
            let self2 = this;
            date3 = new Date();
            dispatch10(obj175);
          }
        } else if ("debug_tool_call" === type.type) {
          const obj176 = { type: "VIBEGRATIONS_TOOL_CALL_APPEND", projectId, toolCall: type };
          const obj5 = attachment_id(584);
          obj5.dispatch(obj176);
        } else if ("request_upstream_ticket" === type.type) {
          const tmp10 = mintUpstreamTicket(pendingEvents, type.id, type.project_id);
        } else if ("debug_history_state" === type.type) {
          obj3 = attachment_id(584);
          const obj177 = { type: "VIBEGRATIONS_HISTORY_LOAD_SETTLE", projectId, scope: null, status: null, count: null, truncated: true === type.truncated };
          ({ scope: obj4.scope, status: obj4.status, count: obj4.count } = type);
          obj3.dispatch(obj177);
        } else {
          obj = attachment_id(584);
          const obj178 = { type: "VIBEGRATIONS_LOG_APPEND", projectId, log: type };
          obj.dispatch(obj178);
          let tmp6 = reportRuntimeError(projectId, type);
        }
      }
    }
    let upload_token;
    const resolveVibegrationsPreviewClaim = require("vibegrationsPreviewClaims").resolveVibegrationsPreviewClaim;
    const id = type.id;
    require("vibegrationsPreviewClaims");
    if ("capture_claim" === type.type) {
      upload_token = type.upload_token;
    }
    const vibegrationsPreviewClaim = resolveVibegrationsPreviewClaim(id, upload_token);
  }
}
obj = function _openWithFreshTicket() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let str2;
    let closure_0 = arg0;
    let closure_1 = value;
    if (c7 === 2) {
      c7 = 3;
      const str3 = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
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
            obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_3 = tmp;
            ticket = undefined;
            const ws2 = closure_1.ws;
            ws2.close();
            c5 = 1;
            let obj4 = require("VibegrationsWorkerTickets");
            baseUrl = obj4.mintWorkerTicket(closure_0);
            c6 = 2;
            c7 = 1;
            let obj5 = { value: baseUrl, done: false };
            return obj5;
          }
        } else {
          if (1 === tmp4) {
            baseUrl = closure_4;
            c5 = 0;
            let closure_5 = closure_4;
            if (closure_1.disposed) {
              c7 = 3;
              return { value: "IconComponent", done: "IconComponent" };
            } else {
              const tmp17 = closure_131_19(closure_0, "failed");
              baseUrl = closure_1;
              let _Error = Error;
              let str = "ws open failed";
              const tmp18 = closure_131_27;
              const tmp19 = closure_0;
              if (closure_5 instanceof Error) {
                str = closure_5.message;
              }
              tmp18(tmp19, baseUrl, str);
              closure_1.pendingModelSettings = null;
              closure_131_9(closure_1, "Connection failed before the publish result arrived");
              closure_131_10(closure_1, "Connection failed before the draft arrived");
              baseUrl = closure_0;
              let obj6 = { location: "connection", code: closure_131_0(closure_131_2[6]).VibegrationErrorCodes.WS_OPEN_FAILED, message: str2 };
              const trackVibegrationErrored = closure_131_0(closure_131_2[6]).trackVibegrationErrored;
              const tmp35 = closure_131_0(closure_131_2[6]);
              let _Error2 = Error;
              str2 = "ws open failed";
              if (closure_5 instanceof Error) {
                str2 = closure_5.message;
              }
              let result = trackVibegrationErrored(baseUrl, obj6);
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            obj7 = { value, done: true };
            return obj7;
          } else {
            baseUrl = value;
            ticket = baseUrl.ticket;
            baseUrl = baseUrl.baseUrl;
            if (closure_1.disposed) {
              c5 = 0;
              c7 = 3;
              return { value: "IconComponent", done: "IconComponent" };
            } else {
              const ws = closure_1.ws;
              obj = {
                url: baseUrl,
                ticket,
                onEvent(arg0) {
                            return closure_2_35(projectId, closure_1_1, arg0);
                          },
                onClose() {
                            const pendingPublish = closure_1_1.pendingPublish;
                            if (null != pendingPublish) {
                              closure_1_1.pendingPublish = null;
                              const _clearTimeout = clearTimeout;
                              clearTimeout(pendingPublish.timeout);
                              const _Error = Error;
                              const self = this;
                              const self2 = this;
                              const reject = pendingPublish.reject;
                              const error = new Error("Connection closed before the publish result arrived");
                              reject(error);
                            }
                            const pendingPatchNotesDraft = tmp.pendingPatchNotesDraft;
                            if (null != pendingPatchNotesDraft) {
                              closure_1_1.pendingPatchNotesDraft = null;
                              const _clearTimeout2 = clearTimeout;
                              clearTimeout(pendingPatchNotesDraft.timeout);
                              const _Error2 = Error;
                              const self3 = this;
                              const self4 = this;
                              const reject2 = pendingPatchNotesDraft.reject;
                              const error1 = new Error("Connection closed before the draft arrived");
                              reject2(error1);
                            }
                            obj = projectId(baseUrl[9]);
                            const result = obj.clearVibegrationsPreviewClaims(projectId);
                            if (closure_1_1.disposed) {
                              obj3 = { type: "VIBEGRATIONS_CHAT_CONN_STATE", projectId, connState: "closed" };
                              const obj6 = closure_1(baseUrl[5]);
                              obj6.dispatch(obj3);
                            } else if (closure_1_1.helloSeen) {
                              closure_1_1.reconnectPending = true;
                              const obj5 = { type: "VIBEGRATIONS_CHAT_CONN_STATE", projectId, connState: "connecting" };
                              const obj4 = closure_1(baseUrl[5]);
                              obj4.dispatch(obj5);
                              const backoff = tmp.backoff;
                              backoff.fail(() => {
                                closure_2_37(projectId);
                              });
                            } else {
                              obj7 = { type: "VIBEGRATIONS_CHAT_CONN_STATE", projectId, connState: "closed" };
                              obj2 = closure_1(baseUrl[5]);
                              obj2.dispatch(obj7);
                              closure_2_27(projectId, closure_1_1, "Connection closed before the message was sent");
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
          return { value: "IconComponent", done: "IconComponent" };
        }
      } catch (tmp47) {
        closure_4 = tmp47;
        if (0 === c5) {
          c7 = 3;
          throw tmp47;
        } else {
          c6 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function connect(projectId) {
  let tmp10;
  let vibegrationsWebSocket;
  function openWithFreshTicket() {
    return obj(...arguments);
  }
  obj = map;
  let value = map.get(projectId);
  if (null == value) {
    obj3 = { ws: vibegrationsWebSocket, backoff: tmp10, helloSeen: false, disposed: false, reconnectPending: false, pendingSends: [], pendingEvents: [], pendingModelSettings: null, pendingPublish: null, pendingPatchNotesDraft: null };
    const self = this;
    const self2 = this;
    vibegrationsWebSocket = new VibegrationsWebSocket.VibegrationsWebSocket();
    const self3 = this;
    const self4 = this;
    tmp10 = new BackoffDefault(1000, 30000);
    const result = obj.set(projectId, obj3);
    value = obj3;
  }
  value.pendingEvents = [];
  value.helloSeen = false;
  value.disposed = false;
  value.reconnectPending = false;
  obj2 = DispatcherDefault;
  const obj5 = { type: "VIBEGRATIONS_CHAT_CONN_STATE", projectId, connState: "connecting" };
  obj2.dispatch(obj5);
  const obj4 = DispatcherDefault;
  const obj6 = { type: "VIBEGRATIONS_TRACE_REPLAY_STARTING", projectId };
  obj4.dispatch(obj6);
  openWithFreshTicket(projectId, value);
}
function teardown(projectId) {
  const value = map.get(projectId);
  let flag = null != value;
  obj = map;
  if (flag) {
    value.disposed = true;
    const backoff = value.backoff;
    backoff.cancel();
    const pendingPublish = value.pendingPublish;
    if (null != pendingPublish) {
      value.pendingPublish = null;
      const _clearTimeout = clearTimeout;
      clearTimeout(pendingPublish.timeout);
      const _Error = Error;
      const self = this;
      const self2 = this;
      const reject = pendingPublish.reject;
      const error = new Error("Connection closed before the publish result arrived");
      reject(error);
    }
    const pendingPatchNotesDraft = value.pendingPatchNotesDraft;
    if (null != pendingPatchNotesDraft) {
      value.pendingPatchNotesDraft = null;
      const _clearTimeout2 = clearTimeout;
      clearTimeout(pendingPatchNotesDraft.timeout);
      const _Error2 = Error;
      const self3 = this;
      const self4 = this;
      const reject2 = pendingPatchNotesDraft.reject;
      const error1 = new Error("Connection closed before the draft arrived");
      reject2(error1);
    }
    const ws = value.ws;
    ws.close();
    obj.delete(projectId);
    map7.delete(projectId);
    obj2 = VibegrationsPlatformUtilsDefault;
    const result = obj2.releasePreviewControl(projectId);
    obj3 = vibegrationsPreviewClaims;
    const result1 = obj3.clearVibegrationsPreviewClaims(projectId);
    const obj5 = { type: "VIBEGRATIONS_CHAT_CONN_STATE", projectId, connState: "closed" };
    const obj4 = DispatcherDefault;
    obj4.dispatch(obj5);
    flag = true;
  }
  return flag;
}
function loadOlderHistory(projectId) {
  const tmp = getOlderHistoryCursor(projectId);
  if (null == tmp) {
    return false;
  } else {
    obj = map7;
    if (map7.get(projectId) === tmp) {
      return true;
    } else {
      const value = map.get(projectId);
      let flag = null != value;
      if (flag) {
        const result = obj.set(projectId, tmp);
        const ws = value.ws;
        ws.sendLoadHistory(tmp);
        flag = true;
      }
      return flag;
    }
  }
}
function getMediaTicket(arg0) {
  let closure_0;
  _require = arg0;
  const value = map8.get(arg0);
  if (null != value) {
    const tmp2 = globalThis;
    const _Date = Date;
    if (value.expiresAt > Date.now()) {
      return Promise.resolve(value.ticket);
    }
  }
  obj = map9;
  const value2 = map9.get(arg0);
  if (null != value2) {
    return value2;
  } else {
    obj2 = require("VibegrationsWorkerTickets");
    const mintWorkerTicketResult = obj2.mintWorkerTicket(arg0);
    const nextPromise = mintWorkerTicketResult.then((ticket) => {
      function ticketExpiryMs(ticket) {
        try {
          const _atob = atob;
          const _JSON = JSON;
          const str2 = ticket.split(".")[0];
          const str4 = str2.replace(/-/g, "+");
          const exp = JSON.parse(atob(str4.replace(/_/g, "/"))).exp;
          let result = null;
          if (typeof exp === "number") {
            const _Number = Number;
            result = null;
            if (Number.isFinite(exp)) {
              result = 1000 * tmp3;
            }
          }
          return result;
        } catch (err) {
          return null;
        }
      }
      const tmp = ticketExpiryMs(ticket.ticket);
      if (null != tmp) {
        const tmp3 = closure_0;
        obj = { ticket, expiresAt: tmp - 30000 };
        let result = map8.set(closure_0, obj);
      }
      return ticket;
    });
    const cleanupPromise = nextPromise.finally(() => {
      map9.delete(closure_0);
    });
    let result = obj.set(arg0, cleanupPromise);
    return cleanupPromise;
  }
}
obj = function _fetchSourceHistory() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let closure_0 = arg0;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      try {
        let ticket;
        let baseUrl;
        let uRLSearchParams;
        let closure_4;
        let closure_5;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp;
            closure_0 = undefined;
            ticket = undefined;
            baseUrl = undefined;
            uRLSearchParams = undefined;
            closure_4 = undefined;
            closure_5 = undefined;
            c2 = 1;
            c3 = 1;
            const obj4 = { value: obj7.mintWorkerTicket(closure_0), done: false };
            obj7 = require("VibegrationsWorkerTickets");
            return obj4;
          }
        } else if (1 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_0 = value;
            ticket = closure_0.ticket;
            baseUrl = closure_0.baseUrl;
            const _URLSearchParams = URLSearchParams;
            const obj6 = { ticket };
            const self3 = this;
            const self4 = this;
            uRLSearchParams = new URLSearchParams(obj6);
            const _fetch = fetch;
            const _HermesInternal2 = HermesInternal;
            c2 = 2;
            c3 = 1;
            const obj8 = { value: fetch("" + baseUrl + "/agent/source-history?" + uRLSearchParams), done: false };
            return obj8;
          }
        } else if (2 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            closure_4 = value;
            if (closure_4.ok) {
              c2 = 3;
              c3 = 1;
              const obj10 = { value: closure_4.json(), done: false };
              return obj10;
            } else {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const self = this;
              const self2 = this;
              const error = new Error("version history failed (" + closure_4.status + ")");
              throw error;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj11 = { value, done: true };
          return obj11;
        } else {
          let entries;
          closure_5 = value;
          const _Array = Array;
          if (Array.isArray(closure_5.entries)) {
            entries = closure_5.entries;
          } else {
            entries = [];
          }
          c3 = 3;
          obj = { value: entries, done: true };
          return obj;
        }
      } catch (tmp18) {
        c3 = 3;
        throw tmp18;
      }
    }
  });
  return obj(...arguments);
};
obj = function _restoreSourceHistoryEntry() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let closure_2;
    let obj11;
    let closure_0 = arg0;
    let closure_1 = value;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      try {
        let tmp;
        let ticket;
        let baseUrl;
        let uRLSearchParams;
        let closure_6;
        let closure_7;
        let closure_8;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_3 = tmp4;
            tmp = undefined;
            ticket = undefined;
            baseUrl = undefined;
            uRLSearchParams = undefined;
            closure_6 = undefined;
            closure_7 = undefined;
            closure_8 = undefined;
            c4 = 1;
            c5 = 1;
            const obj4 = { value: obj11.mintWorkerTicket(closure_0), done: false };
            obj11 = require("VibegrationsWorkerTickets");
            return obj4;
          }
        } else if (1 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            tmp = value;
            ticket = tmp.ticket;
            baseUrl = tmp.baseUrl;
            const _URLSearchParams = URLSearchParams;
            obj7 = { ticket };
            const self5 = this;
            const self6 = this;
            uRLSearchParams = new URLSearchParams(obj7);
            const _fetch = fetch;
            const _encodeURIComponent = encodeURIComponent;
            const _HermesInternal3 = HermesInternal;
            c4 = 2;
            c5 = 1;
            const obj8 = { value: fetch("" + baseUrl + "/agent/source-history/" + encodeURIComponent(closure_1) + "/restore?" + uRLSearchParams, { method: "POST" }), done: false };
            return obj8;
          }
        } else if (2 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            closure_6 = value;
            if (closure_6.ok) {
              c4 = 4;
              c5 = 1;
              const obj10 = { value: closure_6.json(), done: false };
              return obj10;
            } else {
              c4 = 3;
              c5 = 1;
              const obj12 = { value: closure_6.text(), done: false };
              return obj12;
            }
          }
        } else if (3 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj13 = { value, done: true };
            return obj13;
          } else {
            closure_7 = value.trim();
            let str3 = "";
            const _Error2 = Error;
            const status = closure_6.status;
            if ("" !== closure_7) {
              const _HermesInternal = HermesInternal;
              str3 = ": " + closure_7;
            }
            const _HermesInternal2 = HermesInternal;
            const self3 = this;
            const self4 = this;
            const _Error21 = new _Error2("version restore failed (" + status + ")" + str3);
            throw _Error21;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj14 = { value, done: true };
          return obj14;
        } else {
          closure_8 = value;
          if (null == closure_8.entry) {
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error = new Error("version restore returned no commit");
            throw error;
          } else {
            obj = closure_131_0(closure_131_2[12]);
            const result = obj.refreshPublishedProject(closure_0, { isPreview: true });
            result.catch(() => {

            });
            c5 = 3;
            const obj15 = { value: closure_8.entry, done: true };
            return obj15;
          }
        }
      } catch (tmp26) {
        c5 = 3;
        throw tmp26;
      }
    }
  });
  return obj(...arguments);
};
obj = function _fetchDatabaseRestorePoints() {
  obj = _asyncToGenerator(async (environment, arg1) => {
    let closure_1 = arg1;
    let c3 = 0;
    let c4 = 0;
    return (async function(arg0, value) {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: "IconComponent" };
        }
      } else {
        try {
          let ticket;
          let baseUrl;
          let uRLSearchParams;
          let closure_5;
          let closure_6;
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              environment = closure_1;
              closure_1 = undefined;
              ticket = undefined;
              baseUrl = undefined;
              uRLSearchParams = undefined;
              closure_5 = undefined;
              closure_6 = undefined;
              c3 = 1;
              c4 = 1;
              const obj4 = { value: obj7.mintWorkerTicket(environment), done: false };
              obj7 = require("VibegrationsWorkerTickets");
              return obj4;
            }
          } else if (1 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_1 = value;
              ticket = closure_1.ticket;
              baseUrl = closure_1.baseUrl;
              const _URLSearchParams = URLSearchParams;
              const self3 = this;
              const self4 = this;
              const obj6 = { ticket, environment };
              uRLSearchParams = new URLSearchParams(obj6);
              const _fetch = fetch;
              const _HermesInternal2 = HermesInternal;
              c3 = 2;
              c4 = 1;
              const obj8 = { value: fetch("" + baseUrl + "/agent/database/restore-points?" + uRLSearchParams), done: false };
              return obj8;
            }
          } else if (2 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_5 = value;
              if (closure_5.ok) {
                c3 = 3;
                c4 = 1;
                const obj10 = { value: closure_5.json(), done: false };
                return obj10;
              } else {
                const _Error = Error;
                const _HermesInternal = HermesInternal;
                const self = this;
                const self2 = this;
                const error = new Error("restore points failed (" + closure_5.status + ")");
                throw error;
              }
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            let restorePoints;
            closure_6 = value;
            const _Array = Array;
            if (Array.isArray(closure_6.restorePoints)) {
              restorePoints = closure_6.restorePoints;
            } else {
              restorePoints = [];
            }
            c4 = 3;
            return { value: restorePoints, done: true };
          }
        } catch (tmp19) {
          c4 = 3;
          throw tmp19;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _fetchDatabaseRestoreWindow() {
  obj = _asyncToGenerator(async (environment, arg1) => {
    let closure_1 = arg1;
    let c3 = 0;
    let c4 = 0;
    return (async function(arg0, value) {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: "IconComponent" };
        }
      } else {
        try {
          let ticket;
          let baseUrl;
          let uRLSearchParams;
          let closure_5;
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              environment = closure_1;
              closure_1 = undefined;
              ticket = undefined;
              baseUrl = undefined;
              uRLSearchParams = undefined;
              closure_5 = undefined;
              c3 = 1;
              c4 = 1;
              const obj4 = { value: obj7.mintWorkerTicket(environment), done: false };
              obj7 = require("VibegrationsWorkerTickets");
              return obj4;
            }
          } else if (1 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_1 = value;
              ticket = closure_1.ticket;
              baseUrl = closure_1.baseUrl;
              const _URLSearchParams = URLSearchParams;
              const self3 = this;
              const self4 = this;
              const obj6 = { ticket, environment };
              uRLSearchParams = new URLSearchParams(obj6);
              const _fetch = fetch;
              const _HermesInternal2 = HermesInternal;
              c3 = 2;
              c4 = 1;
              const obj8 = { value: fetch("" + baseUrl + "/agent/database/restore-window?" + uRLSearchParams), done: false };
              return obj8;
            }
          } else if (2 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_5 = value;
              if (closure_5.ok) {
                c3 = 3;
                c4 = 1;
                const obj10 = { value: closure_5.json(), done: false };
                return obj10;
              } else {
                const _Error = Error;
                const _HermesInternal = HermesInternal;
                const self = this;
                const self2 = this;
                const error = new Error("restore window failed (" + closure_5.status + ")");
                throw error;
              }
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            c4 = 3;
            return { value, done: true };
          }
        } catch (tmp14) {
          c4 = 3;
          throw tmp14;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _createDatabaseRestorePoint() {
  obj = _asyncToGenerator(async (environment, label, arg2) => {
    let closure_2 = arg2;
    let c4 = 0;
    let c5 = 0;
    return (async function(arg0, value, arg2) {
      let obj9;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: "IconComponent" };
        }
      } else {
        try {
          let ticket;
          let closure_6;
          let closure_7;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              environment = label;
              label = closure_2;
              closure_2 = undefined;
              ticket = undefined;
              let baseUrl;
              let uRLSearchParams;
              closure_6 = undefined;
              closure_7 = undefined;
              c4 = 1;
              c5 = 1;
              const obj4 = { value: obj9.mintWorkerTicket(environment), done: false };
              obj9 = require("VibegrationsWorkerTickets");
              return obj4;
            }
          } else if (1 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_2 = value;
              ticket = closure_2.ticket;
              baseUrl = closure_2.baseUrl;
              const _URLSearchParams = URLSearchParams;
              const self5 = this;
              const self6 = this;
              const obj6 = { ticket };
              uRLSearchParams = new URLSearchParams(obj6);
              const _HermesInternal2 = HermesInternal;
              const _fetch = fetch;
              const request = { method: "POST", headers: { "content-type": "application/json" }, body: null };
              if (null != label) {
                let obj10;
                if ("" !== label.trim()) {
                  obj10 = { environment, label };
                  obj7 = { environment, label };
                }
                request.body = tmp49(obj10);
                c4 = 2;
                c5 = 1;
                const obj8 = { value: _fetch(tmp47, request), done: false };
                return obj8;
              }
              obj10 = { environment };
            }
          } else if (2 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_6 = value;
              if (closure_6.ok) {
                c4 = 3;
                c5 = 1;
                const obj12 = { value: closure_6.json(), done: false };
                return obj12;
              } else {
                const _Error2 = Error;
                const _HermesInternal = HermesInternal;
                const self3 = this;
                const self4 = this;
                const error = new Error("restore point create failed (" + closure_6.status + ")");
                throw error;
              }
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            closure_7 = value;
            if (null == closure_7.restorePoint) {
              const _Error = Error;
              const self = this;
              const self2 = this;
              const error1 = new Error("restore point create returned nothing");
              throw error1;
            } else {
              c5 = 3;
              return { value: closure_7.restorePoint, done: true };
            }
          }
        } catch (tmp30) {
          c5 = 3;
          throw tmp30;
        }
      }
    })();
  });
  return obj(...arguments);
};
function settleDatabaseRestore() {
  return obj(...arguments);
}
obj = function _settleDatabaseRestore() {
  obj = _asyncToGenerator(async (arg0, value) => {
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
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      let c5;
      try {
        let str;
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            let closure_2 = tmp4;
            str = undefined;
            value = undefined;
            if (closure_1.ok) {
              str = "";
              if (202 !== closure_1.status) {
                obj3 = closure_131_0(closure_131_2[16]);
                value = obj3.databaseRestoreResultFromStatus(closure_1.status, str);
                if (value.ok) {
                  const obj4 = closure_131_0(closure_131_2[12]);
                  const result = obj4.reloadVibegrationsProjectFrames(closure_0);
                  c5 = 0;
                }
              }
            }
            c6 = 1;
            c7 = 1;
            const obj6 = { value: closure_1.text(), done: false };
            return obj6;
          }
        } else if (1 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            str = value.trim();
          }
        } else {
          c5 = 0;
        }
        c7 = 3;
        obj7 = { value, done: true };
        return obj7;
      } catch (tmp20) {
        let closure_4 = tmp20;
        if (0 === c5) {
          c7 = 3;
          throw tmp20;
        } else {
          c6 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _restoreDatabaseToPoint() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let obj5;
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
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      try {
        let closure_2;
        let ticket;
        let baseUrl;
        let uRLSearchParams;
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_4 = tmp4;
            let closure_5 = tmp;
            closure_2 = undefined;
            ticket = undefined;
            baseUrl = undefined;
            uRLSearchParams = undefined;
            c6 = 1;
            c7 = 1;
            const obj4 = { value: obj5.mintWorkerTicket(closure_0), done: false };
            obj5 = require("VibegrationsWorkerTickets");
            return obj4;
          }
        } else {
          let closure_3;
          if (1 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              closure_2 = value;
              ticket = closure_2.ticket;
              baseUrl = closure_2.baseUrl;
              const _URLSearchParams = URLSearchParams;
              obj7 = { ticket };
              const self = this;
              const self2 = this;
              uRLSearchParams = new URLSearchParams(obj7);
              closure_3 = closure_132_49;
              closure_2 = closure_0;
              const _fetch = fetch;
              const _encodeURIComponent = encodeURIComponent;
              const _HermesInternal = HermesInternal;
              c6 = 2;
              c7 = 1;
              const obj8 = { value: fetch("" + baseUrl + "/agent/database/restore-points/" + encodeURIComponent(closure_1) + "/restore?" + uRLSearchParams, { method: "POST" }), done: false };
              return obj8;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            c7 = 3;
            obj = { value: closure_3(closure_2, value), done: true };
            return obj;
          }
        }
      } catch (tmp11) {
        c7 = 3;
        throw tmp11;
      }
    }
  });
  return obj(...arguments);
};
obj = function _restoreDatabaseToTimestamp() {
  obj = _asyncToGenerator(async (arg0, environment, timestampMs) => {
    let closure_0 = arg0;
    let c7 = 0;
    let c8 = 0;
    return (async function(arg0, value, arg2) {
      let obj5;
      let obj8;
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: "IconComponent" };
        }
      } else {
        try {
          let ticket;
          let baseUrl;
          let uRLSearchParams;
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_5 = tmp4;
              closure_6 = tmp;
              closure_3 = undefined;
              ticket = undefined;
              baseUrl = undefined;
              uRLSearchParams = undefined;
              c7 = 1;
              c8 = 1;
              const obj4 = { value: obj5.mintWorkerTicket(closure_0), done: false };
              obj5 = require("VibegrationsWorkerTickets");
              return obj4;
            }
          } else if (1 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_3 = value;
              ticket = closure_3.ticket;
              baseUrl = closure_3.baseUrl;
              const _URLSearchParams = URLSearchParams;
              const self = this;
              const self2 = this;
              obj7 = { ticket };
              uRLSearchParams = new URLSearchParams(obj7);
              closure_4 = closure_133_49;
              closure_3 = closure_0;
              const _fetch = fetch;
              const _HermesInternal = HermesInternal;
              const request = { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(obj8) };
              const _JSON = JSON;
              obj8 = { environment, timestampMs };
              const combined = "" + baseUrl + "/agent/database/restore?" + uRLSearchParams;
              c7 = 2;
              c8 = 1;
              const obj9 = { value: fetch(combined, request), done: false };
              return obj9;
            }
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            return { value, done: true };
          } else {
            c8 = 3;
            obj = { value: closure_4(closure_3, value), done: true };
            return obj;
          }
        } catch (tmp12) {
          c8 = 3;
          throw tmp12;
        }
      }
    })();
  });
  return obj(...arguments);
};
function attachmentEndpoint(arg0, arg1) {
  let combined;
  if (null == arg1) {
    const _HermesInternal2 = HermesInternal;
    combined = "" + arg0 + "/agent/attachments";
  } else {
    const _encodeURIComponent = encodeURIComponent;
    const _HermesInternal = HermesInternal;
    combined = "" + arg0 + "/agent/attachments/" + encodeURIComponent(arg1);
  }
  return combined;
}
function uploadAttachmentBytes() {
  return obj(...arguments);
}
obj = function _uploadAttachmentBytes() {
  obj = _asyncToGenerator(async (body, name, arg2, arg3) => {
    let closure_2 = arg2;
    let closure_3 = arg3;
    let c6 = 0;
    let c7 = 0;
    return (async function(arg0, value, arg2, arg3) {
      let obj13;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: "IconComponent" };
        }
      } else {
        try {
          let ticket;
          let baseUrl;
          let uRLSearchParams;
          let closure_7;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_5 = tmp4;
              closure_4 = tmp;
              body = name;
              name = closure_2;
              closure_2 = closure_3;
              closure_3 = undefined;
              ticket = undefined;
              baseUrl = undefined;
              uRLSearchParams = undefined;
              closure_7 = undefined;
              c6 = 1;
              c7 = 1;
              const obj4 = { value: obj13.mintWorkerTicket(body), done: false };
              obj13 = require("VibegrationsWorkerTickets");
              return obj4;
            }
          } else if (1 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = value;
              ticket = closure_3.ticket;
              baseUrl = closure_3.baseUrl;
              const _URLSearchParams = URLSearchParams;
              const self3 = this;
              const self4 = this;
              const obj6 = { ticket, name };
              uRLSearchParams = new URLSearchParams(obj6);
              const _fetch = fetch;
              const _HermesInternal2 = HermesInternal;
              let str3 = "application/octet-stream";
              const combined = "" + closure_133_53(baseUrl) + "?" + uRLSearchParams;
              if ("" !== closure_2) {
                str3 = closure_2;
              }
              const request = { method: "POST", headers: obj7, body };
              c6 = 2;
              c7 = 1;
              obj7 = { "content-type": str3 };
              const obj8 = { value: _fetch(combined, request), done: false };
              return obj8;
            }
          } else if (2 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_7 = value;
              if (closure_7.ok) {
                c6 = 3;
                c7 = 1;
                const obj10 = { value: closure_7.json(), done: false };
                return obj10;
              } else {
                const _Error = Error;
                const _HermesInternal = HermesInternal;
                const self = this;
                const self2 = this;
                const error = new Error("attachment upload failed (" + closure_7.status + ")");
                throw error;
              }
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            return { value, done: true };
          } else {
            c7 = 3;
            return { value, done: true };
          }
        } catch (tmp13) {
          c7 = 3;
          throw tmp13;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _exportProjectArchive() {
  obj = _asyncToGenerator(async (name, arg1) => {
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    return (async function(arg0, value) {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: "IconComponent" };
        }
      } else {
        try {
          let ticket;
          let baseUrl;
          let uRLSearchParams;
          let closure_5;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp4;
              closure_2 = tmp;
              name = closure_1;
              closure_1 = undefined;
              ticket = undefined;
              baseUrl = undefined;
              uRLSearchParams = undefined;
              closure_5 = undefined;
              c4 = 1;
              c5 = 1;
              const obj4 = { value: obj7.mintWorkerTicket(name), done: false };
              obj7 = require("VibegrationsWorkerTickets");
              return obj4;
            }
          } else if (1 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_1 = value;
              ticket = closure_1.ticket;
              baseUrl = closure_1.baseUrl;
              const _URLSearchParams = URLSearchParams;
              const self2 = this;
              const self3 = this;
              const obj6 = { ticket, name };
              uRLSearchParams = new URLSearchParams(obj6);
              const _fetch = fetch;
              const _HermesInternal = HermesInternal;
              c4 = 2;
              c5 = 1;
              const obj8 = { value: fetch("" + baseUrl + "/agent/export?" + uRLSearchParams), done: false };
              return obj8;
            }
          } else if (2 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_5 = value;
              if (closure_5.ok) {
                c4 = 3;
                c5 = 1;
                const obj10 = { value: closure_5.blob(), done: false };
                return obj10;
              } else {
                const self = this;
                throw new closure_131_56(closure_5.status);
              }
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            c5 = 3;
            return { value, done: true };
          }
        } catch (tmp16) {
          c5 = 3;
          throw tmp16;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _remixProjectWorkspace() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let closure_2;
    let closure_0 = arg0;
    let closure_1 = value;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      try {
        let tmp;
        let ticket;
        let uRLSearchParams;
        let closure_5;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = undefined;
            closure_1 = undefined;
            tmp = undefined;
            ticket = undefined;
            uRLSearchParams = undefined;
            closure_5 = undefined;
            const items = [, ];
            const obj10 = require("VibegrationsWorkerTickets");
            items[0] = obj10.mintRemixTicket(closure_0);
            const obj11 = require("VibegrationsWorkerTickets");
            items[1] = obj11.mintWorkerTicket(closure_1);
            c4 = 1;
            c5 = 1;
            const obj4 = { value: all(items), done: false };
            return obj4;
          }
        } else if (1 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_0 = value;
            closure_1 = closure_131_3(closure_0, 2);
            tmp = closure_1[0];
            ticket = closure_1[1];
            const _URLSearchParams = URLSearchParams;
            const obj6 = { ticket: tmp.ticket };
            const self2 = this;
            const self3 = this;
            uRLSearchParams = new URLSearchParams(obj6);
            const _fetch = fetch;
            const _HermesInternal = HermesInternal;
            const request = { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(obj7) };
            const _JSON = JSON;
            obj7 = { dest_ticket: ticket.ticket };
            const combined = "" + tmp.baseUrl + "/agent/fork?" + uRLSearchParams;
            c4 = 2;
            c5 = 1;
            const obj8 = { value: fetch(combined, request), done: false };
            return obj8;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_5 = value;
          if (closure_5.ok) {
            c5 = 3;
            return { value: "IconComponent", done: "IconComponent" };
          } else {
            const self = this;
            throw new closure_131_58(closure_5.status);
          }
        }
      } catch (tmp11) {
        c5 = 3;
        throw tmp11;
      }
    }
  });
  return obj(...arguments);
};
obj = function _submitProjectSecrets() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let obj4;
    let closure_0 = arg0;
    let closure_1 = value;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      try {
        let ticket;
        let baseUrl;
        let uRLSearchParams;
        let closure_5;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            closure_0 = closure_1;
            closure_1 = undefined;
            ticket = undefined;
            baseUrl = undefined;
            uRLSearchParams = undefined;
            closure_5 = undefined;
            c3 = 1;
            c4 = 1;
            const obj5 = { value: obj4.mintWorkerTicket(closure_0), done: false };
            obj4 = require("VibegrationsWorkerTickets");
            return obj5;
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_1 = value;
            ticket = closure_1.ticket;
            baseUrl = closure_1.baseUrl;
            const _URLSearchParams = URLSearchParams;
            obj7 = { ticket };
            const self3 = this;
            const self4 = this;
            uRLSearchParams = new URLSearchParams(obj7);
            const _fetch = fetch;
            const _HermesInternal2 = HermesInternal;
            const request = { method: "PUT", headers: { "content-type": "application/json" }, body: JSON.stringify(closure_0) };
            const _JSON = JSON;
            const combined = "" + baseUrl + "/agent/secrets?" + uRLSearchParams;
            c3 = 2;
            c4 = 1;
            const obj8 = { value: fetch(combined, request), done: false };
            return obj8;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_5 = value;
          if (closure_5.ok) {
            c4 = 3;
            return { value: "IconComponent", done: "IconComponent" };
          } else {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const self = this;
            const self2 = this;
            const error = new Error("secret submission failed (" + closure_5.status + ")");
            throw error;
          }
        }
      } catch (tmp16) {
        c4 = 3;
        throw tmp16;
      }
    }
  });
  return obj(...arguments);
};
obj = function _submitProjectSettings() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let obj8;
    let closure_0 = arg0;
    let closure_1 = value;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      try {
        let ticket;
        let baseUrl;
        let uRLSearchParams;
        let closure_5;
        let rebuild_required;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            closure_0 = closure_1;
            closure_1 = undefined;
            ticket = undefined;
            baseUrl = undefined;
            uRLSearchParams = undefined;
            closure_5 = undefined;
            rebuild_required = undefined;
            c3 = 1;
            c4 = 1;
            const obj4 = { value: obj8.mintWorkerTicket(closure_0), done: false };
            obj8 = require("VibegrationsWorkerTickets");
            return obj4;
          }
        } else if (1 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_1 = value;
            ticket = closure_1.ticket;
            baseUrl = closure_1.baseUrl;
            const _URLSearchParams = URLSearchParams;
            const obj6 = { ticket };
            const self3 = this;
            const self4 = this;
            uRLSearchParams = new URLSearchParams(obj6);
            const _fetch = fetch;
            const _HermesInternal2 = HermesInternal;
            const request = { method: "PUT", headers: { "content-type": "application/json" }, body: JSON.stringify(closure_0) };
            const _JSON = JSON;
            const combined = "" + baseUrl + "/agent/settings?" + uRLSearchParams;
            c3 = 2;
            c4 = 1;
            obj7 = { value: fetch(combined, request), done: false };
            return obj7;
          }
        } else if (2 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            closure_5 = value;
            if (closure_5.ok) {
              const data = closure_5.json();
              c3 = 3;
              c4 = 1;
              const obj10 = { value: data.catch(() => null), done: false };
              return obj10;
            } else {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const self = this;
              const self2 = this;
              const error = new Error("settings submission failed (" + closure_5.status + ")");
              throw error;
            }
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj11 = { value, done: true };
          return obj11;
        } else {
          rebuild_required = undefined;
          if (rebuild_required != null) {
            rebuild_required = rebuild_required.rebuild_required;
          }
          obj = { rebuildRequired: true === rebuild_required };
          c4 = 3;
          const obj12 = { value: obj, done: true };
          return obj12;
        }
      } catch (tmp17) {
        c4 = 3;
        throw tmp17;
      }
    }
  });
  return obj(...arguments);
};
obj = function _fetchProjectMcpConnection() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let closure_2;
    let obj8;
    let closure_0 = arg0;
    let closure_1 = value;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      try {
        let flag;
        let tmp;
        let ticket;
        let baseUrl;
        let uRLSearchParams;
        let closure_6;
        let closure_7;
        let expiresAtMs;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_3 = tmp4;
            flag = undefined;
            let obj4 = closure_1;
            if (closure_1 === undefined) {
              obj4 = {};
            }
            flag = obj4.regenerate ?? false;
            tmp = undefined;
            ticket = undefined;
            baseUrl = undefined;
            uRLSearchParams = undefined;
            closure_6 = undefined;
            closure_7 = undefined;
            expiresAtMs = undefined;
            c4 = 1;
            c5 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            c4 = 2;
            c5 = 1;
            const obj6 = { value: obj8.mintWorkerTicket(closure_0), done: false };
            obj8 = closure_131_0(closure_131_2[7]);
            return obj6;
          }
        } else if (2 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj7 = { value, done: true };
            return obj7;
          } else {
            tmp = value;
            ticket = tmp.ticket;
            baseUrl = tmp.baseUrl;
            const _URLSearchParams = URLSearchParams;
            const obj9 = { ticket };
            const self3 = this;
            const self4 = this;
            uRLSearchParams = new URLSearchParams(obj9);
            const tmp49 = flag;
            if (tmp49) {
              const result = uRLSearchParams.set("regenerate", "1");
            }
            const _fetch = fetch;
            const _HermesInternal2 = HermesInternal;
            c4 = 3;
            c5 = 1;
            const obj10 = { value: fetch("" + baseUrl + "/agent/mcp-token?" + uRLSearchParams, { method: "POST" }), done: false };
            return obj10;
          }
        } else if (3 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            closure_6 = value;
            if (closure_6.ok) {
              c4 = 4;
              c5 = 1;
              const obj12 = { value: closure_6.json(), done: false };
              return obj12;
            } else {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const self = this;
              const self2 = this;
              const error = new Error("mcp token failed (" + closure_6.status + ")");
              throw error;
            }
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj13 = { value, done: true };
          return obj13;
        } else {
          let sum;
          closure_7 = value;
          if (typeof closure_7.expires_in === "number") {
            const _Date = Date;
            sum = Date.now() + 1000 * closure_7.expires_in;
          } else {
            const _Date2 = Date;
            sum = Date.parse(closure_7.expires_at);
          }
          expiresAtMs = sum;
          obj = { url: closure_7.url, expiresAtMs };
          c5 = 3;
          const obj14 = { value: obj, done: true };
          return obj14;
        }
      } catch (tmp29) {
        c5 = 3;
        throw tmp29;
      }
    }
  });
  return obj(...arguments);
};
obj = function _requestExternalAuthorizeUrl() {
  obj = _asyncToGenerator(async (connection_type, arg1) => {
    let closure_1 = arg1;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async (arg0, value) => {
      let obj16;
      let obj8;
      function externalAuthEndpoint(baseUrl, arg1, ticket) {
        obj = { ticket };
        const uRLSearchParams = new URLSearchParams(obj);
        return "" + baseUrl + "/agent/external-auth/" + "authorize-url" + "?" + uRLSearchParams;
      }
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: "IconComponent" };
        }
      } else {
        try {
          let url;
          let ticket;
          let baseUrl;
          let closure_6;
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_5 = tmp;
              closure_4 = tmp4;
              connection_type = closure_1;
              closure_1 = undefined;
              url = undefined;
              closure_3 = undefined;
              ticket = undefined;
              baseUrl = undefined;
              closure_6 = undefined;
              c6 = 1;
              c7 = 2;
              c8 = 1;
              const obj4 = { value: obj16.mintWorkerTicket(connection_type), done: false };
              obj16 = require("VibegrationsWorkerTickets");
              return obj4;
            }
          } else if (1 === c7) {
            c6 = 0;
            c8 = 3;
            return { value: { type: "error", error: "unavailable" }, done: true };
          } else if (2 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              return { value, done: true };
            } else {
              closure_3 = value;
              ticket = closure_3.ticket;
              baseUrl = closure_3.baseUrl;
              const _fetch = fetch;
              const request = { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(obj7) };
              const _JSON = JSON;
              obj7 = { connection_type };
              c7 = 3;
              c8 = 1;
              const tmp46 = externalAuthEndpoint(baseUrl, "authorize-url", ticket);
              const obj9 = { value: fetch(tmp46, request), done: false };
              return obj9;
            }
          } else if (3 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              return { value, done: true };
            } else {
              closure_1 = value;
              c6 = 0;
              if (closure_1.ok) {
                c6 = 3;
                c7 = 7;
                c8 = 1;
                const obj11 = { value: closure_1.json(), done: false };
                return obj11;
              } else {
                closure_6 = null;
                c6 = 2;
                const tmp23 = closure_133_0(closure_133_2[17]);
                closure_3 = tmp23;
                externalAuthErrorCode = tmp23.externalAuthErrorCode;
                c7 = 6;
                c8 = 1;
                const obj12 = { value: closure_1.json(), done: false };
                return obj12;
              }
            }
          } else {
            if (4 === c7) {
              c6 = 0;
            } else if (5 === c7) {
              c6 = 0;
              c8 = 3;
              return { value: { type: "error", error: "unavailable" }, done: true };
            } else if (6 === c7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 0;
                c8 = 3;
                return { value, done: true };
              } else {
                let error;
                if (value != null) {
                  error = value.error;
                }
                closure_6 = externalAuthErrorCode(error);
                c6 = 0;
              }
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              return { value, done: true };
            } else {
              url = undefined;
              if (value != null) {
                url = value.url;
              }
              c6 = 0;
              if (typeof url === "string") {
                if (url.startsWith("https://")) {
                  obj = { type: "url", url };
                  const obj17 = { type: "url", url };
                }
                c8 = 3;
                return { value: obj, done: true };
              }
              obj = { type: "error", error: "unavailable" };
            }
            const obj19 = { type: "error", error: obj8.externalAuthErrorFor(closure_1.status, closure_6) };
            c8 = 3;
            obj8 = closure_133_0(closure_133_2[17]);
            return { value: obj19, done: true };
          }
        } catch (tmp30) {
          if (0 === c6) {
            c8 = 3;
            throw tmp30;
          } else if (1 === c6) {
            c7 = 1;
          } else if (2 === c6) {
            c7 = 4;
          } else {
            c7 = 5;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _deleteStagedAttachment() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let obj4;
    let closure_0 = arg0;
    let closure_1 = value;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      try {
        let ticket;
        let baseUrl;
        let uRLSearchParams;
        let closure_5;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_3 = tmp4;
            let closure_2 = tmp;
            closure_0 = closure_1;
            closure_1 = undefined;
            ticket = undefined;
            baseUrl = undefined;
            uRLSearchParams = undefined;
            closure_5 = undefined;
            c4 = 1;
            c5 = 1;
            const obj5 = { value: obj4.mintWorkerTicket(closure_0), done: false };
            obj4 = require("VibegrationsWorkerTickets");
            return obj5;
          }
        } else if (1 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_1 = value;
            ticket = closure_1.ticket;
            baseUrl = closure_1.baseUrl;
            const _URLSearchParams = URLSearchParams;
            obj7 = { ticket };
            const self3 = this;
            const self4 = this;
            uRLSearchParams = new URLSearchParams(obj7);
            const _fetch = fetch;
            const _HermesInternal2 = HermesInternal;
            c4 = 2;
            c5 = 1;
            const obj8 = { value: fetch("" + closure_131_53(baseUrl, closure_0) + "?" + uRLSearchParams, { method: "DELETE", keepalive: true }), done: false };
            return obj8;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_5 = value;
          if (closure_5.ok) {
            c5 = 3;
            return { value: "IconComponent", done: "IconComponent" };
          } else {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const self = this;
            const self2 = this;
            const error = new Error("attachment cleanup failed (" + closure_5.status + ")");
            throw error;
          }
        }
      } catch (tmp16) {
        c5 = 3;
        throw tmp16;
      }
    }
  });
  return obj(...arguments);
};
obj = function _getPreviewScreenshotUrl() {
  obj = _asyncToGenerator(async function(arg0, arg1) {
    let c3;
    let c4;
    let closure_2;
    let closure_1 = arg1;
    let closure_0 = closure_1;
    closure_1 = await getMediaTicket(closure_0);
    const ticket = closure_1.ticket;
    const baseUrl = closure_1.baseUrl;
    const _URLSearchParams = URLSearchParams;
    const obj6 = { ticket };
    const self = this;
    const self2 = this;
    const uRLSearchParams = new URLSearchParams(obj6);
    const _encodeURIComponent = encodeURIComponent;
    const _HermesInternal = HermesInternal;
    return "" + baseUrl + "/agent/screenshots/" + encodeURIComponent(closure_0) + "?" + uRLSearchParams;
  });
  return obj(...arguments);
};
function getAttachmentUrl(arg0, arg1) {
  return obj(...arguments);
}
obj = function _getAttachmentUrl() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let closure_3;
    let closure_0 = arg0;
    let closure_1 = value;
    let closure_2 = arg2;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      try {
        let flag;
        let tmp;
        let ticket;
        let baseUrl;
        let uRLSearchParams;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_4 = tmp4;
            flag = undefined;
            let obj4 = closure_2;
            if (closure_2 === undefined) {
              obj4 = {};
            }
            flag = obj4.download ?? false;
            tmp = undefined;
            ticket = undefined;
            baseUrl = undefined;
            uRLSearchParams = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            c5 = 2;
            c6 = 1;
            const obj6 = { value: closure_132_43(closure_0), done: false };
            return obj6;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj7 = { value, done: true };
          return obj7;
        } else {
          tmp = value;
          ticket = tmp.ticket;
          baseUrl = tmp.baseUrl;
          const _URLSearchParams = URLSearchParams;
          const obj8 = { ticket };
          const self = this;
          const self2 = this;
          uRLSearchParams = new URLSearchParams(obj8);
          const tmp32 = flag;
          if (tmp32) {
            const result = uRLSearchParams.set("download", "1");
          }
          const _HermesInternal = HermesInternal;
          c6 = 3;
          obj = { value: "" + closure_132_53(baseUrl, closure_1) + "?" + uRLSearchParams, done: true };
          return obj;
        }
      } catch (tmp20) {
        c6 = 3;
        throw tmp20;
      }
    }
  });
  return obj(...arguments);
};
obj = function _isAttachmentAvailable() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let closure_1;
    let closure_0 = arg0;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      try {
        let closure_4;
        let probe;
        c5 = 2;
        const tmp4 = c4;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_3 = tmp4;
            let closure_2 = tmp;
            closure_4 = undefined;
            probe = function probe() {
              return closure_1_3(...arguments);
            };
            obj = function _probe() {
              obj = closure_2_4(function*() {
                let c1;
                let c2;
                const _fetch = fetch;
                yield closure_1_66(closure_2_0, closure_2_1);
                return fetch(arg1, { method: "HEAD" });
              });
              return obj(...arguments);
            };
            c4 = 1;
            c5 = 1;
            const obj4 = { value: probe(), done: false };
            return obj4;
          }
        } else {
          if (1 === tmp4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              closure_4 = value;
              if (401 === closure_4.status) {
                closure_131_41.delete(closure_0);
                c4 = 2;
                c5 = 1;
                const obj6 = { value: probe(), done: false };
                return obj6;
              }
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_4 = value;
          }
          if (404 === closure_4.status) {
            c5 = 3;
            return { value: false, done: true };
          } else if (closure_4.ok) {
            c5 = 3;
            return { value: true, done: true };
          } else {
            const tmp11 = globalThis;
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const str = ")";
            const self = this;
            const self2 = this;
            const error = new Error("attachment availability check failed (" + closure_4.status + ")");
            throw error;
          }
        }
      } catch (tmp23) {
        c5 = 3;
        throw tmp23;
      }
    }
  });
  return obj(...arguments);
};
function closeAllConnections() {
  const arr = Array.from(map.keys());
  const tmp2 = arr[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = teardown(tmp3);
    continue;
  }
  map2.clear();
  map5.clear();
  map8.clear();
}
const getOlderHistoryCursor = VibegrationsChatStore2.getOlderHistoryCursor;
const map = new Map();
let set = new Set(["activity", "automod", "widget", "bot"]);
const map1 = new Map();
const map2 = new Map();
const set1 = new Set();
const map3 = new Map();
const map4 = new Map();
obj = { location: "connection", code: VibegrationsAnalytics.VibegrationErrorCodes.SEND_FAILED };
let obj2 = { location: "agent", code: VibegrationsAnalytics.VibegrationErrorCodes.AGENT_ERROR };
const map5 = new Map();
let closure_26 = { steered: true, queued: true, restarting: true, answered: true };
let obj3 = { build_error: obj4, healthcheck_failed: obj5, error: obj6 };
obj4 = { location: "build", code: VibegrationsAnalytics.VibegrationErrorCodes.BUILD_FAILED };
obj5 = { location: "healthcheck", code: VibegrationsAnalytics.VibegrationErrorCodes.HEALTHCHECK_FAILED };
obj6 = { location: "agent", code: VibegrationsAnalytics.VibegrationErrorCodes.AGENT_ERROR };
let obj7 = { web: obj8, preview: obj9 };
obj8 = { location: "runtime_frame", code: VibegrationsAnalytics.VibegrationErrorCodes.RUNTIME_FRAME_ERROR };
obj9 = { location: "runtime_worker", code: VibegrationsAnalytics.VibegrationErrorCodes.RUNTIME_WORKER_ERROR };
const map6 = new Map();
const map7 = new Map();
const map8 = new Map();
const map9 = new Map();
class VibegrationsExportError extends Error {
  constructor(status) {
    const tmp3 = new tmp(concat(status, ")"), tmp2, concat);
    tmp3.status = status;
    return tmp3;
  }
}
class VibegrationsRemixError extends Error {
  constructor(status) {
    const tmp3 = new tmp(concat(status, ")"), tmp2, concat);
    tmp3.status = status;
    return tmp3;
  }
}
const Store = get_initializedDefault.Store;
class VibegrationsConnectionStore extends Store {
  initialize() {
    this.waitFor(UserStore, VibegrationsChatStore, VibegrationsProjectStore);
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
  getModelSettings(projectId) {
    let value = map3.get(projectId);
    if (value == null) {
      value = null;
    }
    return value;
  }
  getSettings(arg0) {
    let value = map4.get(arg0);
    if (value == null) {
      value = null;
    }
    return value;
  }
  getDeclaredConnections(projectId) {
    const value = map4.get(projectId);
    let connections;
    if (value != null) {
      connections = value.connections;
    }
    if (connections == null) {
      connections = closure_70;
    }
    return connections;
  }
}
const prototype = VibegrationsConnectionStore.prototype;
let closure_70 = [];
let obj10 = {
  VIBEGRATIONS_CHAT_CONN_STATE: function handleChatConnState(arg0) {
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
        set1.delete(projectId);
      }
    }
  },
  VIBEGRATIONS_CHAT_STOPPED_SET: function handleChatStoppedSet(arg0) {
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
  VIBEGRATIONS_MODEL_SETTINGS_SET: function handleModelSettingsSet(settings) {
    obj = { settings: settings.settings, tierSettings: settings.tierSettings, tiers: settings.tiers, choices: settings.choices };
    const result = map3.set(settings.projectId, obj);
  },
  VIBEGRATIONS_SETTINGS_SET: function handleSettingsSet(projectId) {
    const result = map4.set(projectId.projectId, projectId.settings);
  },
  VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function handleProjectDeleteSuccess(projectId) {
    if (!teardown(projectId.projectId)) {
      return false;
    }
  },
  VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function handleProjectsFetchSuccess(arg0) {
    let flag = false;
    const arr = Array.from(map.keys());
    const iter = arr[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let tmp5 = null == VibegrationsProjectStore.getProject(nextResult);
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
const vibegrationsConnectionStore = new VibegrationsConnectionStore(DispatcherDefault, obj10);
let result = size.fileFinishedImporting("modules/vibegrations/stores/VibegrationsConnectionStore.tsx");
const sendUserMessage_export = function sendUserMessage(projectId, str, arg2) {
  let attachments;
  let clarificationAnswers;
  let content;
  let nonce;
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
          const project = VibegrationsProjectStore.getProject(projectId);
          let name;
          if (project != null) {
            name = project.name;
          }
          const obj10 = { templateId: null, remix: null, clarificationAnswers: null };
          ({ templateId: obj6.templateId, remix: obj6.remix, clarificationAnswers: obj6.clarificationAnswers } = obj2);
          sendUserMessage(content, nonce, mapped, name, obj10);
        }
      } catch (tmp29) {
        const _Error2 = Error;
        let str3 = "send failed";
        const tmp30 = sendFailedStep;
        if (tmp29 instanceof Error) {
          str3 = tmp29.message;
        }
        tmp30(projectId, str3);
      }
    } else {
      const pendingSends = value.pendingSends;
      pendingSends.push(obj2);
    }
  }
};

export default vibegrationsConnectionStore;
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
      if (VibegrationsChatStore.isThinking(projectId)) {
        set1.add(projectId);
        obj2 = { type: "VIBEGRATIONS_CHAT_STOP_REQUESTED", projectId };
        obj = DispatcherDefault;
        obj.dispatch(obj2);
      }
    }
  } catch (err) {
  }
};
export const publishProject = function publishProject(projectId) {
  let c1 = false;
  const promise = new Promise(function(resolve, reject) {
    let error;
    const value = map.get(projectId);
    const tmp = projectId;
    if (null != value) {
      if (null == value.pendingPublish) {
        const _setTimeout = setTimeout;
        const timerId = setTimeout(function() {
          const pendingPublish = value.pendingPublish;
          if (null != pendingPublish) {
            value.pendingPublish = null;
            const _clearTimeout = clearTimeout;
            clearTimeout(pendingPublish.timeout);
            const _Error = Error;
            const self = this;
            const self2 = this;
            const reject = pendingPublish.reject;
            const error = new Error("Publish timed out");
            reject(error);
          }
        }, 120000);
        obj = { resolve, reject, timeout: timerId };
        value.pendingPublish = obj;
        c1 = true;
        obj3 = { type: "VIBEGRATIONS_PROJECT_PUBLISH_START", projectId: tmp };
        obj2 = DispatcherDefault;
        obj2.dispatch(obj3);
        try {
          const ws = value.ws;
          ws.sendPublish();
        } catch (error) {
          value.pendingPublish = null;
          let _clearTimeout = clearTimeout;
          clearTimeout(timerId);
          const _Error3 = Error;
          if (!(error instanceof Error)) {
            const _Error4 = Error;
            const self5 = this;
            const self6 = this;
            error = new Error("publish send failed");
          }
          reject(error);
        }
      } else {
        const _Error2 = Error;
        const self3 = this;
        const self4 = this;
        const error1 = new Error("Publish already in flight");
        reject(error1);
      }
    } else {
      let _Error = Error;
      let self = this;
      let self2 = this;
      const error2 = new Error("Not connected");
      reject(error2);
    }
  });
  const catchPromise = promise.catch((error) => {
    let str = "publish failed";
    const trackPublishFailed = VibegrationsActionCreators.trackPublishFailed;
    VibegrationsActionCreators;
    const tmp2 = projectId;
    if (error instanceof Error) {
      str = error.message;
    }
    trackPublishFailed(tmp2, str, false);
    throw error;
  });
  return catchPromise.finally(() => {
    const tmp = c1;
    if (tmp) {
      obj2 = { type: "VIBEGRATIONS_PROJECT_PUBLISH_SETTLE", projectId };
      obj = DispatcherDefault;
      obj.dispatch(obj2);
    }
  });
};
export const draftPatchNotes = function draftPatchNotes(arg0) {
  let closure_0 = arg0;
  const promise = new Promise(function(resolve, reject) {
    let error;
    const value = map.get(closure_0);
    if (null != value) {
      rejectPendingPatchNotesDraft(value, "Superseded by a newer draft request");
      const _Date = Date;
      const _Math = Math;
      const timestamp = Date.now();
      const _HermesInternal = HermesInternal;
      const str3 = Math.random();
      const str1 = str3.toString(36);
      const combined = "" + timestamp + "-" + str1.slice(2);
      const _setTimeout = setTimeout;
      const timerId = setTimeout(function() {
        const pendingPatchNotesDraft = value.pendingPatchNotesDraft;
        if (null != pendingPatchNotesDraft) {
          value.pendingPatchNotesDraft = null;
          const _clearTimeout = clearTimeout;
          clearTimeout(pendingPatchNotesDraft.timeout);
          const _Error = Error;
          const self = this;
          const self2 = this;
          const reject = pendingPatchNotesDraft.reject;
          const error = new Error("Draft timed out");
          reject(error);
        }
      }, 10000);
      obj = { resolve, reject, timeout: timerId, nonce: combined };
      value.pendingPatchNotesDraft = obj;
      try {
        const ws = value.ws;
        ws.sendDraftPatchNotes(combined);
      } catch (error) {
        value.pendingPatchNotesDraft = null;
        let _clearTimeout = clearTimeout;
        clearTimeout(timerId);
        const _Error2 = Error;
        if (!(error instanceof Error)) {
          const _Error3 = Error;
          const self3 = this;
          const self4 = this;
          error = new Error("draft send failed");
        }
        reject(error);
      }
    } else {
      let _Error = Error;
      let self = this;
      let self2 = this;
      const error1 = new Error("Not connected");
      reject(error1);
    }
  });
  return promise;
};
export const stageModelSettings = function stageModelSettings(arg0, pendingModelSettings) {
  const value = map.get(arg0);
  if (null != value) {
    value.pendingModelSettings = pendingModelSettings;
  }
};
export const requestDebugStatus = function requestDebugStatus(projectId) {
  obj = DispatcherDefault;
  obj2 = { type: "VIBEGRATIONS_DEBUG_STATUS_REQUESTED", projectId };
  obj.dispatch(obj2);
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
      const result = ws.sendDebugStatusRequest();
    }
  } catch (err) {
    obj3 = { type: "VIBEGRATIONS_DEBUG_STATUS_SET", projectId, status: null, failed: true };
    const tmpResult = DispatcherDefault;
    tmpResult.dispatch(obj3);
  }
};
export const forceCompaction = function forceCompaction(projectId, flag) {
  let date;
  if (flag === undefined) {
    flag = false;
  }
  obj = DispatcherDefault;
  obj2 = { type: "VIBEGRATIONS_DEBUG_FORCE_COMPACTION_REQUESTED", projectId };
  obj.dispatch(obj2);
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
      ws.sendForceCompaction(flag);
    }
  } catch (err) {
    const _Date = Date;
    const self3 = this;
    const self4 = this;
    obj3 = { type: "VIBEGRATIONS_DEBUG_FORCE_COMPACTION_RESULT", projectId, outcome: "failed", reason: "Not connected", observedAt: date.toISOString() };
    const dispatch = tmp(584).dispatch;
    DispatcherDefault;
    date = new Date();
    dispatch(obj3);
  }
};
export const sendModelSettings = function sendModelSettings(arg0, arg1) {
  const value = map.get(arg0);
  try {
    if (null == value) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Not connected");
      throw error;
    } else {
      const ws = value.ws;
      ws.sendModelSettings(arg1);
    }
  } catch (err) {
  }
};
export { loadOlderHistory };
export const resetHistoryPaging = function resetHistoryPaging(arg0) {
  map7.delete(arg0);
};
export const fetchSourceHistory = function fetchSourceHistory() {
  return obj(...arguments);
};
export const restoreSourceHistoryEntry = function restoreSourceHistoryEntry() {
  return obj(...arguments);
};
export const fetchDatabaseRestorePoints = function fetchDatabaseRestorePoints() {
  return obj(...arguments);
};
export const fetchDatabaseRestoreWindow = function fetchDatabaseRestoreWindow() {
  return obj(...arguments);
};
export const createDatabaseRestorePoint = function createDatabaseRestorePoint() {
  return obj(...arguments);
};
export const restoreDatabaseToPoint = function restoreDatabaseToPoint() {
  return obj(...arguments);
};
export const restoreDatabaseToTimestamp = function restoreDatabaseToTimestamp() {
  return obj(...arguments);
};
export const uploadAttachment = function uploadAttachment(arg0, name) {
  return uploadAttachmentBytes(arg0, name, name.name, name.type);
};
export { uploadAttachmentBytes };
export { VibegrationsExportError };
export const exportProjectArchive = function exportProjectArchive() {
  return obj(...arguments);
};
export { VibegrationsRemixError };
export const remixProjectWorkspace = function remixProjectWorkspace() {
  return obj(...arguments);
};
export const submitProjectSecrets = function submitProjectSecrets() {
  return obj(...arguments);
};
export const submitProjectSettings = function submitProjectSettings() {
  return obj(...arguments);
};
export const requestProjectRebuild = function requestProjectRebuild(arg0) {
  function kick() {
    return obj(...arguments);
  }
  let closure_0 = arg0;
  obj = function _kick() {
    obj = _asyncToGenerator(async function(arg0, value) {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "IconComponent" };
        }
      } else {
        try {
          let tmp;
          let ticket;
          let baseUrl;
          let uRLSearchParams;
          c2 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              obj3 = { value, done: true };
              return obj3;
            } else {
              tmp = undefined;
              ticket = undefined;
              baseUrl = undefined;
              uRLSearchParams = undefined;
              c1 = 1;
              const obj4 = tmp(c2[7]);
              c2 = 1;
              const obj5 = { value: obj4.mintWorkerTicket(closure_2_0), done: false };
              return obj5;
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              tmp = value;
              ticket = tmp.ticket;
              baseUrl = tmp.baseUrl;
              const _URLSearchParams = URLSearchParams;
              obj7 = { ticket };
              const self = this;
              const self2 = this;
              uRLSearchParams = new URLSearchParams(obj7);
              const _fetch = fetch;
              const _HermesInternal = HermesInternal;
              c1 = 2;
              c2 = 1;
              const obj8 = { value: fetch("" + baseUrl + "/agent/rebuild?" + uRLSearchParams, { method: "POST" }), done: false };
              return obj8;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            const ok = value.ok;
            c2 = 3;
            return { value: "IconComponent", done: "IconComponent" };
          }
        } catch (tmp8) {
          c2 = 3;
          throw tmp8;
        }
      }
    });
    return obj(...arguments);
  };
  const promise = kick();
  promise.catch((error) => {

  });
};
export const formatMcpConnectionExpiry = function formatMcpConnectionExpiry(connection) {
  const date = new Date(connection.expiresAtMs);
  return date.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
};
export const fetchProjectMcpConnection = function fetchProjectMcpConnection(arg0) {
  return obj(...arguments);
};
export const requestExternalAuthorizeUrl = function requestExternalAuthorizeUrl(arg0, arg1) {
  return obj(...arguments);
};
export const deleteStagedAttachment = function deleteStagedAttachment(arg0, arg1) {
  return obj(...arguments);
};
export const getPreviewScreenshotUrl = function getPreviewScreenshotUrl(arg0, arg1) {
  return obj(...arguments);
};
export { getAttachmentUrl };
export const isAttachmentAvailable = function isAttachmentAvailable(arg0, arg1) {
  return obj(...arguments);
};
export const closeConnection = function closeConnection(arg0) {
  teardown(arg0);
};
export { closeAllConnections };
