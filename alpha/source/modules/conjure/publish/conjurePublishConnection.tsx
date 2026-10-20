// Module ID: 11091
// Function ID: 11092
// Name: conjurePublishConnection
// Dependencies: [11017, 584, 11083, 11022, 2]
// Exports: draftPatchNotes, preparePublish, publishProject, recordPatchNotesSent, rejectPendingPublish

// Module 11091 (conjurePublishConnection)
import DispatcherDefault from "Dispatcher" /* 584 */;
import conjureProjectSockets from "conjureProjectSockets" /* 11022 */;
import ConjurePublishActionCreators from "ConjurePublishActionCreators" /* 11083 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 11017 */;
import size from "module_2" /* 2 */;

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
let obj = {
  publish_notice(id, projectId) {
    projectId = projectId.projectId;
    const obj = DispatcherDefault;
    const obj2 = { type: "CONJURE_CHAT_PUBLISH_NOTICE", projectId, id: id.id, content: id.content, timestamp: id.ts, publishNotice: id.publish_notice };
    obj.dispatch(obj2);
  }
};
let obj2 = {
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
        if (set.has(surface)) {
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
  publish_status(published, projectId) {
    let flatMapResult;
    let found;
    let published_at;
    let published_revision;
    let tmp2;
    projectId = projectId.projectId;
    let obj = { type: "CONJURE_PROJECT_PUBLISH_STATUS_UPDATE", projectId, published: true === published.published, hasUnpublishedChanges: true === published.has_unpublished_changes, surface: tmp2, previewAppChannels: found, publishedRevision: published_revision, publishedAt: published_at, publishing: true === published.publishing, patchNotesSent: flatMapResult, newUiUnpublished: true === published.new_ui_unpublished };
    const surface = published.surface;
    tmp2 = null;
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    if (null != surface) {
      tmp2 = null;
      if (set.has(surface)) {
        tmp2 = surface;
      }
    }
    if (Array.isArray(published.preview_app_channels)) {
      const preview_app_channels = published.preview_app_channels;
      found = preview_app_channels.filter((item) => typeof item === "string");
    } else {
      found = [];
    }
    published_revision = null;
    if (typeof published.published_revision === "number") {
      published_revision = published.published_revision;
    }
    published_at = null;
    if (typeof published.published_at === "string") {
      published_at = published.published_at;
    }
    flatMapResult = undefined;
    if (Array.isArray(published.patch_notes_sent)) {
      const patch_notes_sent = published.patch_notes_sent;
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
    dispatch(obj);
  },
  publish_result(ok, projectId) {
    projectId = projectId.projectId;
    const value = map.get(projectId);
    map.delete(projectId);
    if (null != value) {
      const _clearTimeout = clearTimeout;
      clearTimeout(value.timeout);
      value.resolve(ok);
    }
    if (true !== ok.ok) {
      let str = ok.error;
      const trackPublishFailed = ConjurePublishActionCreators.trackPublishFailed;
      ConjurePublishActionCreators;
      if (str == null) {
        str = "publish_result not ok";
      }
      trackPublishFailed(projectId, str, false);
    } else {
      const publishStatus = ConjurePublishStatusStore.getPublishStatus(projectId);
      if (null != publishStatus) {
        const obj = { type: "CONJURE_PROJECT_PUBLISH_STATUS_UPDATE", projectId, published: true, hasUnpublishedChanges: false, surface: null, previewAppChannels: null, publishedRevision: null, publishedAt: null };
        ({ surface: obj3.surface, previewAppChannels: obj3.previewAppChannels, publishedRevision: obj3.publishedRevision, publishedAt: obj3.publishedAt } = publishStatus);
        const obj2 = DispatcherDefault;
        obj2.dispatch(obj);
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
const set = new Set(["activity", "automod", "widget", "bot"]);
let result = size.fileFinishedImporting("modules/conjure/publish/conjurePublishConnection.tsx");

export const publishFrameHandlers = obj;
export const publishStepHandlers = obj2;
export const preparePublish = function preparePublish(projectId) {
  const obj = conjureProjectSockets;
  const conjureSocket = obj.getConjureSocket(projectId);
  if (conjureSocket != null) {
    conjureSocket.sendPreparePublish();
  }
};
export const publishProject = function publishProject(id) {
  const projectId = id;
  let c1 = false;
  const promise = new Promise(function(resolve, reject) {
    let error1;
    let tmp = dependencyMap;
    let obj = conjureProjectSockets;
    const conjureSocket = obj.getConjureSocket(projectId);
    if (null != conjureSocket) {
      if (map.has(projectId)) {
        const _Error4 = Error;
        const self5 = this;
        const self6 = this;
        let error = new Error("Publish already in flight");
        reject(error);
      } else {
        const _setTimeout = setTimeout;
        const timerId = setTimeout(function() {
          const value = map.get(projectId);
          const obj = map;
          const tmp = projectId;
          if (null != value) {
            obj.delete(tmp);
            const _clearTimeout = clearTimeout;
            clearTimeout(value.timeout);
            const _Error = Error;
            const self = this;
            const self2 = this;
            const reject = value.reject;
            const error = new Error("Publish timed out");
            reject(error);
          }
        }, 900000);
        const obj2 = { resolve, reject, timeout: timerId };
        const result = obj3.set(tmp2, obj2);
        c1 = true;
        const obj4 = { type: "CONJURE_PROJECT_PUBLISH_START", projectId };
        const obj5 = DispatcherDefault;
        obj5.dispatch(obj4);
        try {
          conjureSocket.sendPublish();
        } catch (error1) {
          obj3.delete(tmp2);
          let _clearTimeout = clearTimeout;
          clearTimeout(timerId);
          const _Error2 = Error;
          if (!(error1 instanceof Error)) {
            const _Error3 = Error;
            const self3 = this;
            const self4 = this;
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
    const tmp = c1;
    if (tmp) {
      const obj2 = { type: "CONJURE_PROJECT_PUBLISH_SETTLE", projectId };
      const obj = DispatcherDefault;
      obj.dispatch(obj2);
    }
  });
};
export const draftPatchNotes = function draftPatchNotes(c0) {
  let closure_0 = c0;
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
};
export const recordPatchNotesSent = function recordPatchNotesSent(projectId, sent, source_sha) {
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
};
export const rejectPendingPublish = function rejectPendingPublish(projectId, arg1) {
  const value = map.get(projectId);
  const obj = map;
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
};
export { rejectPendingPatchNotesDraft };
