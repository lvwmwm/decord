// Module ID: 10950
// Function ID: 10951
// Name: conjurePublishConnection
// Dependencies: [5, 2038, 6844, 10867, 572, 10951, 10955, 10956, 1994, 10953, 10959, 10941, 10874, 10960, 2]
// Exports: draftPatchNotes, preparePublish, publishProject, publishStateFromFrame, recordPatchNotesSent, rejectPendingPublish, requestPublishOptions

// Module 10950 (conjurePublishConnection)
import DispatcherDefault from "Dispatcher" /* 572 */;
import conjureProjectSockets from "conjureProjectSockets" /* 10874 */;
import ConjurePublishActionCreators from "ConjurePublishActionCreators" /* 10941 */;
import conjureDevicePermissions from "conjureDevicePermissions" /* 10953 */;
import conjureVoiceChannelPin from "conjureVoiceChannelPin" /* 10959 */;
import ConjurePublishTypes from "ConjurePublishTypes" /* 10960 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ApplicationStore from "ApplicationStore" /* 2038 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6844 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10867 */;
import size from "module_2" /* 2 */;

let paths;

let tmp;
const requestConjureDevicePermissionsDefault = tmp(10951);
function rejectPendingPatchNotesDraft(projectId, arg1) {
  const value = map1.get(projectId);
  const obj = map1;
  if (null != value) {
    obj.delete(projectId);
    const _clearTimeout = clearTimeout;
    clearTimeout(value.timeout);
    const _Error = Error;
    const self = this;
    const self2 = this;
    const reject = value.reject;
    const error = new Error(arg1);
    reject(error);
  }
}
function rejectPendingPublishOptions(arg0, arg1) {
  const value = map2.get(arg0);
  const obj = map2;
  if (null != value) {
    obj.delete(arg0);
    const _clearTimeout = clearTimeout;
    clearTimeout(value.timeout);
    const _Error = Error;
    const self = this;
    const self2 = this;
    const reject = value.reject;
    const error = new Error(arg1);
    reject(error);
  }
}
let obj = {
  publish_notice(id, projectId) {
    projectId = projectId.projectId;
    const obj = DispatcherDefault;
    const obj2 = { type: "CONJURE_CHAT_PUBLISH_NOTICE", projectId, id: id.id, content: id.content, timestamp: id.ts, publishNotice: id.publish_notice };
    obj.dispatch(obj2);
  }
};
let obj2 = {
  publish_options(nonce, projectId) {
    projectId = projectId.projectId;
    let options;
    const value = map2.get(projectId);
    const obj = map2;
    if (null != value) {
      if (value.nonce === nonce.nonce) {
        obj.delete(projectId);
        const _clearTimeout = clearTimeout;
        clearTimeout(value.timeout);
        options = nonce.options;
        if (true === nonce.ok) {
          if (null != options) {
            const _Array = Array;
            if (Array.isArray(options.destinations)) {
              if (0 !== options.destinations.length) {
                if (options.destinations.length <= 7) {
                  const destinations2 = options.destinations;
                  if (!destinations2.some((id) => {
                    id = undefined;
                    if (id != null) {
                      id = id.id;
                    }
                    return typeof id !== "string" || 0 === id.id.length || id.id.length > 100 || typeof id.label !== "string" || 0 === id.label.length || id.label.length > 100;
                  })) {
                    const _Set = Set;
                    const destinations1 = options.destinations;
                    const self = this;
                    const self2 = this;
                    set = new Set(destinations1.map((id) => id.id));
                    if (set.size === options.destinations.length) {
                      const destinations = options.destinations;
                      if (destinations.some((id) => id.id === options.selected_destination_id)) {
                        value.resolve(options);
                      }
                    }
                  }
                }
              }
            }
          }
        }
        let str = nonce.error;
        const reject = value.reject;
        const _Error = Error;
        if (str == null) {
          str = "Could not load publish destinations. Try again.";
        }
        const self3 = this;
        const self4 = this;
        const _Error1 = new _Error(str);
        reject(_Error1);
      }
    }
  },
  publish_approval_required(arg0, projectId) {
    let closure_0 = arg0;
    projectId = projectId.projectId;
    return (async (arg0, value) => {
      let c2;
      let v1;
      if (paths === 2) {
        paths = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          paths = 2;
          if (0 === projectId) {
            if (arg0 === 1) {
              paths = 3;
              throw value;
            } else if (arg0 === 2) {
              paths = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              const obj7 = tmp(paths[6]);
              const tmp18 = tmp;
              if (obj7.validPublishApproval(tmp.approval_url, tmp.approval_kind)) {
                const tmp9 = projectId;
                if (publishApprovalUrl.getPublishApprovalUrl(projectId) === tmp.approval_url) {
                  paths = 3;
                  return { value: "HermesInternal", done: "HermesInternal" };
                } else {
                  const obj5 = { type: "CONJURE_PROJECT_PUBLISH_APPROVAL", projectId: tmp9, approvalUrl: tmp.approval_url };
                  const obj2 = projectId(paths[4]);
                  obj2.dispatch(obj5);
                  projectId = 1;
                  paths = 1;
                  const obj6 = { value: tmp18(paths[8])(paths[7], paths.paths), done: false };
                  return obj6;
                }
              }
            }
          } else if (arg0 === 1) {
            paths = 3;
            throw value;
          } else if (arg0 === 2) {
            paths = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            const result = value.promptPublishApproval(closure_128_0.approval_url);
          }
          paths = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        } catch (tmp14) {
          paths = 3;
          throw tmp14;
        }
      }
    })();
  },
  publish_progress(stage, projectId) {
    let obj4;
    projectId = projectId.projectId;
    if (set.has(stage.stage)) {
      const _Number = Number;
      let num2 = 0;
      if (Number.isFinite(stage.stage_elapsed_ms)) {
        const _Math = Math;
        num2 = Math.max(0, stage.stage_elapsed_ms);
      }
      if ("approval" !== stage.stage) {
        const obj2 = { type: "CONJURE_PROJECT_PUBLISH_APPROVAL", projectId, approvalUrl: null };
        const obj = DispatcherDefault;
        obj.dispatch(obj2);
      }
      const obj3 = { type: "CONJURE_PROJECT_PUBLISH_PROGRESS", projectId, progress: obj4 };
      const _Date = Date;
      obj4 = { stage: stage.stage, stageStartedAt: Date.now() - num2 };
      const dispatch = DispatcherDefault.dispatch;
      DispatcherDefault;
      dispatch(obj3);
    }
  },
  publish_cta(publish_cta, arg1) {
    let obj3;
    let str;
    if (null != publish_cta.publish_cta) {
      const surface = publish_cta.publish_cta.surface;
      let tmp3 = null;
      const obj2 = { type: "CONJURE_CHAT_TURN_PATCH", projectId: tmp, turnId: publish_cta.turn_id, patch: obj3 };
      const dispatch = DispatcherDefault.dispatch;
      DispatcherDefault;
      if (null != surface) {
        tmp3 = null;
        if (set1.has(surface)) {
          tmp3 = surface;
        }
      }
      const obj = { surface: tmp3, reason: str };
      str = "first_publish";
      if ("new_ui" === publish_cta.publish_cta.reason) {
        str = "new_ui";
      }
      obj3 = { publishCta: obj };
      dispatch(obj2);
    }
  },
  publish_status(publish_state, projectId) {
    let str;
    projectId = projectId.projectId;
    DispatcherDefault;
    let obj = { type: "CONJURE_PROJECT_PUBLISH_STATUS_UPDATE", projectId, publishState: null, surface: null, previewAppChannels: null, previewDevicePermissions: null, publishedRevision: null, publishedAt: null, publishing: null, patchNotesSent: null, newUiUnpublished: null, voiceChannelPin: null };
    if (typeof publish_state.publish_state === "string") {
      let found;
      let found1;
      if ("" !== publish_state.publish_state) {
        str = publish_state.publish_state;
      }
      obj.publishState = str;
      const surface = publish_state.surface;
      let tmp5 = null;
      if (null != surface) {
        tmp5 = null;
        if (set1.has(surface)) {
          tmp5 = surface;
        }
      }
      obj.surface = tmp5;
      const _Array = Array;
      if (Array.isArray(publish_state.preview_app_channels)) {
        const preview_app_channels = publish_state.preview_app_channels;
        found = preview_app_channels.filter((item) => typeof item === "string");
      } else {
        found = [];
      }
      obj.previewAppChannels = found;
      const _Array2 = Array;
      if (Array.isArray(publish_state.preview_device_permissions)) {
        const prop = publish_state.preview_device_permissions;
        found1 = prop.filter(conjureDevicePermissions.isConjureDevicePermissionName);
      } else {
        found1 = [];
      }
      obj.previewDevicePermissions = found1;
      let published_revision = null;
      if (typeof publish_state.published_revision === "number") {
        published_revision = publish_state.published_revision;
      }
      obj.publishedRevision = published_revision;
      let published_at = null;
      if (typeof publish_state.published_at === "string") {
        published_at = publish_state.published_at;
      }
      obj.publishedAt = published_at;
      obj.publishing = true === publish_state.publishing;
      const _Array3 = Array;
      let flatMapResult;
      if (Array.isArray(publish_state.patch_notes_sent)) {
        const patch_notes_sent = publish_state.patch_notes_sent;
        flatMapResult = patch_notes_sent.flatMap((published_revision) => {
          published_revision = undefined;
          if (published_revision != null) {
            published_revision = published_revision.published_revision;
          }
          if (typeof published_revision === "number") {
            if (typeof published_revision.guild_id === "string") {
              if (typeof published_revision.channel_id === "string") {
                if (typeof published_revision.message_id === "string") {
                  const obj = { publishedRevision: null, guildId: null, channelId: null, messageId: null };
                  ({ published_revision: obj.publishedRevision, guild_id: obj.guildId, channel_id: obj.channelId, message_id: obj.messageId } = published_revision);
                  const items = [obj];
                }
                return [];
              }
            }
          }
        });
      }
      obj.patchNotesSent = flatMapResult;
      obj.newUiUnpublished = true === publish_state.new_ui_unpublished;
      const obj2 = conjureVoiceChannelPin;
      obj.voiceChannelPin = obj2.parseVoiceChannelPinOutcome(publish_state.voice_channel_pin);
      tmp3(obj);
    }
    if (true !== publish_state.published) {
      let str2 = "nothing_built";
      if (true === publish_state.has_unpublished_changes) {
        str2 = "not_live";
      }
      str = str2;
    } else {
      str = "live_current";
      if (true === publish_state.has_unpublished_changes) {
        str = "live_outdated";
      }
    }
  },
  publish_result(ok, projectId) {
    let name;
    projectId = projectId.projectId;
    const obj = DispatcherDefault;
    obj.dispatch({ type: "CONJURE_PROJECT_PUBLISH_APPROVAL", projectId, approvalUrl: null });
    const value = map.get(projectId);
    map.delete(projectId);
    if (null != value) {
      const _clearTimeout = clearTimeout;
      clearTimeout(value.timeout);
      value.resolve(ok);
    }
    if (true !== ok.ok) {
      let str2 = ok.error;
      const trackPublishFailed = ConjurePublishActionCreators.trackPublishFailed;
      ConjurePublishActionCreators;
      if (str2 == null) {
        str2 = "publish_result not ok";
      }
      trackPublishFailed(projectId, str2, false);
    } else {
      let previewDevicePermissions;
      const project = ConjureProjectStore.getProject(projectId);
      const publishStatus = ConjurePublishStatusStore.getPublishStatus(projectId);
      if (publishStatus != null) {
        previewDevicePermissions = publishStatus.previewDevicePermissions;
      }
      let install_scope;
      if (project != null) {
        install_scope = project.install_scope;
      }
      if ("user" === install_scope) {
        if ("" !== project.application_id) {
          if (null != previewDevicePermissions) {
            const application_id = project.application_id;
            const obj2 = { applicationId: application_id, appName: name, iframeId: null, permissions: previewDevicePermissions };
            const tmpResult = requestConjureDevicePermissionsDefault;
            const application = ApplicationStore.getApplication(application_id);
            name = undefined;
            if (application != null) {
              name = application.name;
            }
            if (name == null) {
              name = project.name;
            }
            tmpResult(obj2);
          }
        }
      }
    }
  },
  patch_notes_draft(nonce, projectId) {
    projectId = projectId.projectId;
    const value = map1.get(projectId);
    const obj = map1;
    const tmp = null != value && value.nonce === nonce.nonce;
    if (tmp) {
      obj.delete(projectId);
      const _clearTimeout = clearTimeout;
      clearTimeout(value.timeout);
      value.resolve(nonce);
    }
  }
};
const map = new Map();
const map1 = new Map();
let set = new Set(ConjurePublishTypes.CONJURE_PUBLISH_PROGRESS_STAGES);
const set1 = new Set(["activity", "automod", "widget", "bot"]);
const map2 = new Map();
let result = size.fileFinishedImporting("modules/conjure/publish/conjurePublishConnection.tsx");

export const publishFrameHandlers = obj;
export const publishStepHandlers = obj2;
export function preparePublish(projectId) {
  const obj = conjureProjectSockets;
  const conjureSocket = obj.getConjureSocket(projectId);
  if (conjureSocket != null) {
    conjureSocket.sendPreparePublish();
  }
}
export function publishProject(id, selected_destination_id, arg2) {
  const projectId = id;
  let closure_1 = selected_destination_id;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let c3 = false;
  const promise = new Promise(function(resolve, reject) {
    let error1;
    const tmp = dependencyMap;
    let obj = conjureProjectSockets;
    const conjureSocket = obj.getConjureSocket(projectId);
    if (null != conjureSocket) {
      let obj3 = map;
      if (map.has(projectId)) {
        const _Error4 = Error;
        const self5 = this;
        const self6 = this;
        let error = new Error("Publish already in flight");
        reject(error);
      } else {
        const _setTimeout = setTimeout;
        const timerId = setTimeout(function() {
          const obj = selected_destination_id(flag[4]);
          const obj2 = { type: "CONJURE_PROJECT_PUBLISH_APPROVAL", projectId, approvalUrl: null };
          obj.dispatch(obj2);
          const value = map2.get(projectId);
          const obj3 = map2;
          if (null != value) {
            obj3.delete(projectId);
            const _clearTimeout = clearTimeout;
            clearTimeout(value.timeout);
            const _Error = Error;
            const self = this;
            const self2 = this;
            const reject = value.reject;
            const error = new Error("Publish timed out");
            reject(error);
          }
          const value2 = map.get(tmp);
          const obj4 = map;
          if (null != value2) {
            obj4.delete(projectId);
            const _clearTimeout2 = clearTimeout;
            clearTimeout(value2.timeout);
            const _Error2 = Error;
            const self3 = this;
            const self4 = this;
            const reject2 = value2.reject;
            const error1 = new Error("Publish timed out");
            reject2(error1);
          }
        }, 900000);
        let obj2 = { resolve, reject, timeout: timerId };
        const result = obj3.set(tmp2, obj2);
        flag = true;
        c3 = true;
        let obj4 = { type: "CONJURE_PROJECT_PUBLISH_START", projectId };
        const obj5 = DispatcherDefault;
        obj5.dispatch(obj4);
        try {
          conjureSocket.sendPublish(selected_destination_id, flag);
        } catch (error1) {
          obj3.delete(tmp2);
          let _clearTimeout = clearTimeout;
          clearTimeout(timerId);
          let _Error2 = Error;
          if (!(error1 instanceof Error)) {
            const _Error3 = Error;
            let self3 = this;
            let self4 = this;
            error1 = new Error("publish send failed");
          }
          reject(error1);
        }
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
    const trackPublishFailed = ConjurePublishActionCreators.trackPublishFailed;
    ConjurePublishActionCreators;
    const tmp2 = projectId;
    if (error instanceof Error) {
      str = error.message;
    }
    trackPublishFailed(tmp2, str, false);
    throw error;
  });
  return catchPromise.finally(() => {
    const tmp = c3;
    if (tmp) {
      const obj2 = { type: "CONJURE_PROJECT_PUBLISH_SETTLE", projectId };
      const obj = DispatcherDefault;
      obj.dispatch(obj2);
    }
  });
}
export function draftPatchNotes(arg0) {
  let closure_0 = arg0;
  const promise = new Promise(function(resolve, reject) {
    let error;
    let obj = conjureProjectSockets;
    let tmp = closure_0;
    const conjureSocket = obj.getConjureSocket(closure_0);
    if (null != conjureSocket) {
      rejectPendingPatchNotesDraft(tmp, "Superseded by a newer draft request");
      const _Date = Date;
      const _Math = Math;
      const timestamp = Date.now();
      const _HermesInternal = HermesInternal;
      const str3 = Math.random();
      const str1 = str3.toString(36);
      const combined = "" + timestamp + "-" + str1.slice(2);
      const _setTimeout = setTimeout;
      const timerId = setTimeout(function() {
        const value = map1.get(closure_1_0);
        const obj = map1;
        const tmp = closure_1_0;
        if (null != value) {
          obj.delete(tmp);
          const _clearTimeout = clearTimeout;
          clearTimeout(value.timeout);
          const _Error = Error;
          const self = this;
          const self2 = this;
          const reject = value.reject;
          const error = new Error("Draft timed out");
          reject(error);
        }
      }, 45000);
      const obj2 = { resolve, reject, timeout: timerId, nonce: combined };
      const result = map1.set(tmp, obj2);
      const obj3 = map1;
      try {
        conjureSocket.sendDraftPatchNotes(combined);
      } catch (error) {
        obj3.delete(tmp);
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
}
export function recordPatchNotesSent(projectId, sent, source_sha) {
  const obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_PROJECT_PATCH_NOTES_SENT", projectId, sent };
  obj.dispatch(obj2);
  try {
    const obj3 = conjureProjectSockets;
    const conjureSocket = obj3.getConjureSocket(projectId);
    const obj4 = conjureSocket;
    if (null == conjureSocket) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Not connected");
      throw error;
    } else {
      obj4.sendPatchNotesSent(sent, source_sha);
    }
  } catch (err) {
  }
}
export function rejectPendingPublish(projectId, arg1) {
  const obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_PROJECT_PUBLISH_APPROVAL", projectId, approvalUrl: null };
  obj.dispatch(obj2);
  const value = map2.get(projectId);
  const obj3 = map2;
  if (null != value) {
    obj3.delete(projectId);
    const _clearTimeout = clearTimeout;
    clearTimeout(value.timeout);
    const _Error = Error;
    const self = this;
    const self2 = this;
    const reject = value.reject;
    const error = new Error(arg1);
    reject(error);
  }
  const value2 = map.get(projectId);
  const obj4 = map;
  if (null != value2) {
    obj4.delete(projectId);
    const _clearTimeout2 = clearTimeout;
    clearTimeout(value2.timeout);
    const _Error2 = Error;
    const self3 = this;
    const self4 = this;
    const reject2 = value2.reject;
    const error1 = new Error(arg1);
    reject2(error1);
  }
}
export { rejectPendingPatchNotesDraft };
export function publishStateFromFrame(publish_state) {
  let str;
  if (typeof publish_state.publish_state === "string") {
    if ("" !== publish_state.publish_state) {
      str = publish_state.publish_state;
    }
    return str;
  }
  if (true !== publish_state.published) {
    let str2 = "nothing_built";
    if (true === publish_state.has_unpublished_changes) {
      str2 = "not_live";
    }
    str = str2;
  } else {
    str = "live_current";
    if (true === publish_state.has_unpublished_changes) {
      str = "live_outdated";
    }
  }
}
export function requestPublishOptions(id) {
  let closure_0 = id;
  const promise = new Promise(function(resolve, reject) {
    let items;
    let obj = conjureProjectSockets;
    let tmp = id;
    const conjureSocket = obj.getConjureSocket(id);
    if (null == conjureSocket) {
      let _Error = Error;
      let self = this;
      let self2 = this;
      let error = new Error("Not connected");
      return reject(error);
    } else if (conjureSocket.supportsPublishOptions) {
      rejectPendingPublishOptions(tmp, "Superseded by a newer publish request");
      const _Date = Date;
      const _Math = Math;
      const timestamp = Date.now();
      const _HermesInternal = HermesInternal;
      const str2 = Math.random();
      const str1 = str2.toString(36);
      const combined = "" + timestamp + "-" + str1.slice(2);
      const _setTimeout = setTimeout;
      const obj2 = {
        resolve,
        reject,
        timeout: setTimeout(function() {
            const value = map2.get(id);
            const obj = map2;
            const tmp = id;
            if (null != value) {
              obj.delete(tmp);
              const _clearTimeout = clearTimeout;
              clearTimeout(value.timeout);
              const _Error = Error;
              const self = this;
              const self2 = this;
              const reject = value.reject;
              const error = new Error("Could not load publish destinations. Try again.");
              reject(error);
            }
          }, 15000),
        nonce: combined
      };
      const result = map2.set(tmp, obj2);
      const tmp3 = rejectPendingPublishOptions;
      try {
        conjureSocket.sendPublishOptions(combined);
      } catch (err) {
        tmp3(tmp, "Could not load publish destinations. Try again.");
      }
    } else {
      const obj3 = { destinations: items, selected_destination_id: "conjuring" };
      items = [{ id: "conjuring", label: "Conjuring" }];
      resolve(obj3);
    }
  });
  return promise;
}
