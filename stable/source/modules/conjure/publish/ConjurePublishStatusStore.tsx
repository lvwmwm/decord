// Module ID: 10746
// Function ID: 10747
// Name: ConjurePublishStatusStore
// Dependencies: [6805, 504, 568, 584, 2]

// Module 10746 (ConjurePublishStatusStore)
import get_initializedDefault from "get initialized" /* 504 */;
import shallowEqual from "shallowEqual" /* 568 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6805 */;
import size from "module_2" /* 2 */;

const map = new Map();
let set = new Set();
const map1 = new Map();
const map2 = new Map();
const map3 = new Map();
const set1 = new Set();
let closure_9 = [];
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
  isProjectPublishing(id) {
    return set.has(id);
  }
  getPublishApprovalUrl(projectId) {
    let value = map1.get(projectId);
    if (value == null) {
      value = null;
    }
    return value;
  }
  getPublishProgress(arg0) {
    let value = map2.get(arg0);
    if (value == null) {
      value = null;
    }
    return value;
  }
  getPublishFailure(arg0) {
    let value = map3.get(arg0);
    if (value == null) {
      value = null;
    }
    return value;
  }
  isAppChannelPending(projectId) {
    return set1.has(projectId);
  }
}
const prototype = ConjurePublishStatusStore.prototype;
let closure_10 = [];
let obj = {
  LOGOUT: function handleLogout() {
    const obj = map;
    if (0 === map.size) {
      if (0 === set.size) {
        if (0 === map1.size) {
          if (0 === map2.size) {
            if (0 === map3.size) {
              if (0 === set1.size) {
                return false;
              }
            }
          }
        }
      }
    }
    obj.clear();
    set.clear();
    map1.clear();
    map2.clear();
    map3.clear();
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
    const keys1 = map1.keys();
    for (const item10031 of keys1) {
      let tmp9 = item10031;
      if (null == ConjureProjectStore.getProject(item10031)) {
        let deleteResult1 = map1.delete(tmp9);
        flag = true;
      }
      continue;
    }
    const keys2 = map2.keys();
    for (const item10048 of keys2) {
      let tmp15 = item10048;
      if (null == ConjureProjectStore.getProject(item10048)) {
        let deleteResult2 = map2.delete(tmp15);
        flag = true;
      }
      continue;
    }
    const keys3 = map3.keys();
    for (const item10065 of keys3) {
      let tmp21 = item10065;
      if (null == ConjureProjectStore.getProject(item10065)) {
        let deleteResult3 = map3.delete(tmp21);
        flag = true;
      }
      continue;
    }
    return flag ? undefined : false;
  },
  CONJURE_PROJECT_PUBLISH_STATUS_UPDATE: function handleProjectPublishStatusUpdate(publishedRevision) {
    let newUiUnpublished;
    let patchNotesSent;
    let previewAppChannels;
    let previewDevicePermissions;
    let projectId;
    let publishState;
    let surface;
    ({ projectId, publishState, surface, previewAppChannels, previewDevicePermissions } = publishedRevision);
    if (previewDevicePermissions === undefined) {
      previewDevicePermissions = closure_10;
    }
    publishedRevision = publishedRevision.publishedRevision;
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
    const deleteResult = !flag && map1.delete(projectId);
    const deleteResult1 = !flag && map2.delete(projectId);
    const value = map.get(projectId);
    let deleteResult2 = flag;
    const obj = map;
    if (!deleteResult2) {
      deleteResult2 = null != value && value.publishedRevision !== publishedRevision;
    }
    if (deleteResult2) {
      deleteResult2 = map3.delete(projectId);
    }
    if (null == patchNotesSent) {
      let patchNotesSent1;
      if (value != null) {
        patchNotesSent1 = value.patchNotesSent;
      }
      if (patchNotesSent1 == null) {
        patchNotesSent1 = closure_9;
      }
      patchNotesSent = patchNotesSent1;
    } else {
      let patchNotesSent2;
      if (value != null) {
        patchNotesSent2 = value.patchNotesSent;
      }
      if (patchNotesSent2 == null) {
        patchNotesSent2 = closure_9;
      }
      patchNotesSent2.length === patchNotesSent.length && patchNotesSent2.every((publishedRevision, index) => publishedRevision.publishedRevision === patchNotesSent[index].publishedRevision && publishedRevision.messageId === tmp[index].messageId);
    }
    if (!deleteResult) {
      if (!deleteResult1) {
        if (!deleteResult2) {
          let publishState1;
          if (value != null) {
            publishState1 = value.publishState;
          }
          if (publishState1 === publishState) {
            if (value.surface === surface) {
              const obj2 = shallowEqual;
              if (obj2.areArraysShallowEqual(value.previewAppChannels, previewAppChannels)) {
                let previewDevicePermissions2 = value.previewDevicePermissions;
                const areArraysShallowEqual = tmp18(568).areArraysShallowEqual;
                shallowEqual;
                if (previewDevicePermissions2 == null) {
                  previewDevicePermissions2 = closure_10;
                }
                if (areArraysShallowEqual(previewDevicePermissions2, previewDevicePermissions)) {
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
        }
      }
    }
    const result = obj.set(projectId, { publishState, surface, previewAppChannels, previewDevicePermissions, publishedRevision, publishedAt, publishing: flag, patchNotesSent, newUiUnpublished });
  },
  CONJURE_PROJECT_PUBLISH_START: function handleProjectPublishStart(projectId) {
    projectId = projectId.projectId;
    set.add(projectId);
    map3.delete(projectId);
  },
  CONJURE_PROJECT_PUBLISH_SETTLE: function handleProjectPublishSettle(projectId) {
    projectId = projectId.projectId;
    let deleteResult = set.delete(projectId);
    const value = map.get(projectId);
    let publishing;
    if (value != null) {
      publishing = value.publishing;
    }
    const deleteResult1 = true !== publishing && map2.delete(projectId);
    if (!deleteResult) {
      deleteResult = deleteResult1;
    }
    return deleteResult;
  },
  CONJURE_PROJECT_PUBLISH_FAILED: function handleProjectPublishFailed(arg0) {
    let message;
    let projectId;
    ({ projectId, message } = arg0);
    const obj = map3;
    if (map3.get(projectId) === message) {
      return false;
    } else {
      const result = obj.set(projectId, message);
    }
  },
  CONJURE_PROJECT_PUBLISH_APPROVAL: function handleProjectPublishApproval(arg0) {
    let approvalUrl;
    let deleteResult;
    let projectId;
    ({ projectId, approvalUrl } = arg0);
    if (null == approvalUrl) {
      deleteResult = map1.delete(projectId);
    } else {
      deleteResult = map1.get(projectId) !== approvalUrl;
      const obj = map1;
      if (deleteResult) {
        const result = obj.set(projectId, approvalUrl);
      }
    }
    return deleteResult;
  },
  CONJURE_PROJECT_PUBLISH_PROGRESS: function handleProjectPublishProgress(arg0) {
    let progress;
    let projectId;
    ({ projectId, progress } = arg0);
    const value = map2.get(projectId);
    let stage;
    const obj = map2;
    if (value != null) {
      stage = value.stage;
    }
    if (stage === progress.stage) {
      return false;
    } else {
      const result = obj.set(projectId, progress);
    }
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
        patchNotesSent = closure_9;
      }
      items = [];
      items[HermesBuiltin.arraySpread(items, patchNotesSent.filter((publishedRevision) => publishedRevision.publishedRevision !== asks.publishedRevision), 0)] = sent;
      const result = set(projectId, obj);
    }
  },
  CONJURE_PROJECT_DELETE_SUCCESS: function handleProjectDeleteSuccess(projectId) {
    projectId = projectId.projectId;
    map.delete(projectId);
    set.delete(projectId);
    map1.delete(projectId);
    map2.delete(projectId);
    map3.delete(projectId);
    set1.delete(projectId);
  }
};
const conjurePublishStatusStore = new ConjurePublishStatusStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/conjure/publish/ConjurePublishStatusStore.tsx");

export default conjurePublishStatusStore;
