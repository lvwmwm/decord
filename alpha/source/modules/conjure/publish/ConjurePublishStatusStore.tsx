// Module ID: 10993
// Function ID: 10994
// Name: ConjurePublishStatusStore
// Dependencies: [6293, 504, 584, 2]

// Module 10993 (ConjurePublishStatusStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6293 */;
import size from "module_2" /* 2 */;

const map = new Map();
let set = new Set();
const set1 = new Set();
let closure_4 = [];
const Store = get_initializedDefault.Store;
class ConjurePublishStatusStore extends Store {
  initialize() {
    this.waitFor(ConjureProjectStore);
  }
  getPublishStatus(projectId) {
    let value = map.get(projectId);
    if (value == null) {
      value = null;
    }
    return value;
  }
  isProjectPublishing(arg0) {
    return set.has(arg0);
  }
  isAppChannelPending(projectId) {
    return set1.has(projectId);
  }
}
const prototype = ConjurePublishStatusStore.prototype;
let obj = {
  LOGOUT: function handleLogout() {
    const obj = map;
    if (0 === map.size) {
      if (0 === set.size) {
        if (0 === set1.size) {
          return false;
        }
      }
    }
    obj.clear();
    set.clear();
    set1.clear();
  },
  CONJURE_PROJECTS_FETCH_SUCCESS: function handleProjectsFetchSuccess() {
    let flag = false;
    const keys = map.keys();
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if (null == ConjureProjectStore.getProject(nextResult)) {
        let deleteResult = map.delete(tmp3);
        flag = true;
      }
      continue;
    }
    return flag ? undefined : false;
  },
  CONJURE_PROJECT_PUBLISH_STATUS_UPDATE: function handleProjectPublishStatusUpdate(publishedRevision) {
    let hasUnpublishedChanges;
    let newUiUnpublished;
    let patchNotesSent;
    let previewAppChannels;
    let projectId;
    let published;
    let surface;
    ({ projectId, surface, previewAppChannels } = publishedRevision);
    publishedRevision = publishedRevision.publishedRevision;
    ({ published, hasUnpublishedChanges } = publishedRevision);
    if (publishedRevision === undefined) {
      publishedRevision = null;
    }
    let publishedAt = publishedRevision.publishedAt;
    if (publishedAt === undefined) {
      publishedAt = null;
    }
    let flag = publishedRevision.publishing;
    if (flag === undefined) {
      flag = false;
    }
    ({ patchNotesSent, newUiUnpublished } = publishedRevision);
    if (newUiUnpublished === undefined) {
      newUiUnpublished = false;
    }
    let str = "unpublished";
    if (published) {
      let str2 = "up_to_date";
      if (hasUnpublishedChanges) {
        str2 = "changes";
      }
      str = str2;
    }
    const value = map.get(projectId);
    const obj = map;
    if (null == patchNotesSent) {
      let patchNotesSent1;
      if (value != null) {
        patchNotesSent1 = value.patchNotesSent;
      }
      if (patchNotesSent1 == null) {
        patchNotesSent1 = closure_4;
      }
      patchNotesSent = patchNotesSent1;
    } else {
      let patchNotesSent2;
      if (value != null) {
        patchNotesSent2 = value.patchNotesSent;
      }
      if (patchNotesSent2 == null) {
        patchNotesSent2 = closure_4;
      }
      patchNotesSent2.length === patchNotesSent.length && patchNotesSent2.every((publishedRevision, index) => publishedRevision.publishedRevision === patchNotesSent[index].publishedRevision && publishedRevision.messageId === tmp[index].messageId);
    }
    let state;
    if (value != null) {
      state = value.state;
    }
    if (state === str) {
      if (value.surface === surface) {
        if (value.previewAppChannels.length === previewAppChannels.length) {
          const previewAppChannels2 = value.previewAppChannels;
          if (previewAppChannels2.every((item, index) => item === previewAppChannels[index])) {
            if (value.publishedRevision === publishedRevision) {
              if (value.publishedAt === publishedAt) {
                if (value.publishing === flag) {
                  if (value.patchNotesSent === patchNotesSent) {
                    if (value.newUiUnpublished === newUiUnpublished) {
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
    const result = obj.set(projectId, { state: str, surface, previewAppChannels, publishedRevision, publishedAt, publishing: flag, patchNotesSent, newUiUnpublished });
  },
  CONJURE_PROJECT_PUBLISH_START: function handleProjectPublishStart(projectId) {
    set.add(projectId.projectId);
  },
  CONJURE_PROJECT_PUBLISH_SETTLE: function handleProjectPublishSettle(projectId) {
    return set.delete(projectId.projectId);
  },
  CONJURE_PROJECT_APP_CHANNEL_PENDING: function handleProjectAppChannelPending(arg0) {
    let pending;
    let projectId;
    ({ projectId, pending } = arg0);
    if (set1.has(projectId) === pending) {
      return false;
    } else if (pending) {
      set1.add(projectId);
    } else {
      set1.delete(projectId);
    }
  },
  CONJURE_PROJECT_PATCH_NOTES_SENT: function handleProjectPatchNotesSent(arg0) {
    let items;
    let projectId;
    let sent;
    ({ projectId, sent } = arg0);
    const value = map.get(projectId);
    const tmp2 = map;
    if (null == value) {
      return false;
    } else {
      const obj = { patchNotesSent: items };
      set = tmp2.set;
      const merged = Object.assign(value);
      let patchNotesSent = value.patchNotesSent;
      if (patchNotesSent == null) {
        patchNotesSent = closure_4;
      }
      items = [];
      items[HermesBuiltin.arraySpread(items, patchNotesSent.filter((publishedRevision) => publishedRevision.publishedRevision !== remove_host.publishedRevision), 0)] = sent;
      const result = set(projectId, obj);
    }
  },
  CONJURE_PROJECT_DELETE_SUCCESS: function handleProjectDeleteSuccess(projectId) {
    projectId = projectId.projectId;
    map.delete(projectId);
    set.delete(projectId);
    set1.delete(projectId);
  }
};
const conjurePublishStatusStore = new ConjurePublishStatusStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/conjure/publish/ConjurePublishStatusStore.tsx");

export default conjurePublishStatusStore;
