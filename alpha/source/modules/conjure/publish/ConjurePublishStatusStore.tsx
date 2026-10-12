// Module ID: 13229
// Function ID: 13230
// Name: ConjurePublishStatusStore
// Dependencies: [10652, 504, 584, 2]

// Module 13229 (ConjurePublishStatusStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import ConjureProjectStore from "ConjureProjectStore" /* 10652 */;
import size from "module_2" /* 2 */;

const map = new Map();
const set = new Set();
const set1 = new Set();
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
    let str = "unpublished";
    if (published) {
      let str2 = "up_to_date";
      if (hasUnpublishedChanges) {
        str2 = "changes";
      }
      str = str2;
    }
    const value = map.get(projectId);
    let state;
    const obj = map;
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
                  return false;
                }
              }
            }
          }
        }
      }
    }
    const result = obj.set(projectId, { state: str, surface, previewAppChannels, publishedRevision, publishedAt, publishing: flag });
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
