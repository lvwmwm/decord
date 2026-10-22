// Module ID: 12323
// Function ID: 12324
// Name: useConjurePatchNotesLink
// Dependencies: [19, 6759, 10684, 1087, 558, 576, 11816, 504, 1114, 2]
// Exports: conjurePatchNotesEditorProps, openConjureSentPatchNotes

// Module 12323 (useConjurePatchNotesLink)
import Constants from "Constants" /* 1087 */;
import router_utils from "router_utils" /* 1114 */;
import ConjureProjectStore2 from "ConjureProjectStore" /* 6759 */;
import useConjurePublishAction from "useConjurePublishAction" /* 11816 */;
import react from "react" /* 19 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10684 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ConjureProjectStore = ConjureProjectStore2;
let _require, dependencyMap;

const canPublishProject = ConjureProjectStore2.canPublishProject;
const Routes = Constants.Routes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjurePatchNotesLink(arg0, published_revision) {
  let closure_0;
  let first;
  let guildId;
  _require = arg0;
  dependencyMap = published_revision;
  let obj = require("react");
  const cResult = obj.c(12);
  const context = guildId.useContext(require("useConjurePublishAction").ConjurePublishActionContext);
  guildId = undefined;
  const tmp = _require;
  if (context != null) {
    guildId = context.guildId;
  }
  if (guildId == null) {
    guildId = null;
  }
  published_revision = published_revision.published_revision;
  if (published_revision == null) {
    published_revision = null;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjurePublishStatusStore, ];
    items[1] = published_revision;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === guildId) {
    if (cResult[2] === published_revision.update) {
      if (cResult[3] === arg0) {
        let tmp10;
        let tmp11;
        let tmp14;
        if (cResult[4] === published_revision) {
          tmp10 = cResult[5];
          tmp11 = cResult[6];
        }
        const tmpResult = tmp(504);
        const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp10, tmp11);
        const sent = stateFromStoresObject.sent;
        if (null != sent) {
          let tmp16;
          if (cResult[7] !== sent) {
            const obj2 = { state: "sent", sent };
            cResult[7] = sent;
            cResult[8] = obj2;
            tmp16 = obj2;
          } else {
            tmp16 = cResult[8];
          }
          tmp14 = tmp16;
        } else {
          tmp14 = null;
          if (tmp13) {
            tmp14 = null;
            if (null != published_revision) {
              tmp14 = null;
              if (null != guildId) {
                if (cResult[9] === guildId) {
                  let tmp15;
                  if (cResult[10] === published_revision) {
                    tmp15 = cResult[11];
                  }
                  tmp14 = tmp15;
                }
                const obj3 = { state: "offer", publishedRevision: published_revision, fallbackGuildId: guildId };
                cResult[9] = guildId;
                cResult[10] = published_revision;
                cResult[11] = obj3;
                tmp15 = obj3;
              }
            }
          }
        }
        return tmp14;
      }
    }
  }
  const fn = function p() {
    let update;
    const publishStatus = ConjurePublishStatusStore.getPublishStatus(closure_0);
    const project = ConjureProjectStore.getProject(closure_0);
    let tmp4 = null;
    if (null != published_revision) {
      let found;
      if (publishStatus != null) {
        const patchNotesSent = publishStatus.patchNotesSent;
        if (patchNotesSent != null) {
          found = patchNotesSent.find((publishedRevision) => publishedRevision.publishedRevision === published_revision);
        }
      }
      if (found == null) {
        found = null;
      }
      tmp4 = found;
    }
    const obj = { sent: tmp4, canOffer: update };
    update = null != tmp3 && published_revision.update;
    if (update) {
      let publishedRevision;
      if (publishStatus != null) {
        publishedRevision = publishStatus.publishedRevision;
      }
      update = tmp3 === publishedRevision;
    }
    if (update) {
      update = null != guildId;
    }
    if (update) {
      update = null != project;
    }
    if (update) {
      update = "user" !== project.install_scope;
    }
    if (update) {
      update = canPublishProject(project);
    }
    return obj;
  };
  const items1 = [arg0, published_revision, published_revision.update, guildId];
  cResult[1] = guildId;
  cResult[2] = published_revision.update;
  cResult[3] = arg0;
  cResult[4] = published_revision;
  cResult[5] = fn;
  cResult[6] = items1;
  tmp11 = items1;
  tmp10 = fn;
}) : (function useConjurePatchNotesLink(arg0, published_revision) {
  let closure_0;
  let guildId;
  let tmp8;
  _require = arg0;
  dependencyMap = published_revision;
  const context = guildId.useContext(require("useConjurePublishAction").ConjurePublishActionContext);
  guildId = undefined;
  const tmp = _require;
  if (context != null) {
    guildId = context.guildId;
  }
  if (guildId == null) {
    guildId = null;
  }
  published_revision = published_revision.published_revision;
  if (published_revision == null) {
    published_revision = null;
  }
  const items = [ConjurePublishStatusStore, published_revision];
  const items1 = [arg0, published_revision, published_revision.update, guildId];
  const tmpResult = tmp(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(items, () => {
    let update;
    const publishStatus = ConjurePublishStatusStore.getPublishStatus(closure_0);
    const project = ConjureProjectStore.getProject(closure_0);
    let tmp4 = null;
    if (null != published_revision) {
      let found;
      if (publishStatus != null) {
        const patchNotesSent = publishStatus.patchNotesSent;
        if (patchNotesSent != null) {
          found = patchNotesSent.find((publishedRevision) => publishedRevision.publishedRevision === published_revision);
        }
      }
      if (found == null) {
        found = null;
      }
      tmp4 = found;
    }
    const obj = { sent: tmp4, canOffer: update };
    update = null != tmp3 && published_revision.update;
    if (update) {
      let publishedRevision;
      if (publishStatus != null) {
        publishedRevision = publishStatus.publishedRevision;
      }
      update = tmp3 === publishedRevision;
    }
    if (update) {
      update = null != guildId;
    }
    if (update) {
      update = null != project;
    }
    if (update) {
      update = "user" !== project.install_scope;
    }
    if (update) {
      update = canPublishProject(project);
    }
    return obj;
  }, items1);
  const sent = stateFromStoresObject.sent;
  if (null != sent) {
    let obj = { state: "sent", sent };
    tmp8 = obj;
  } else {
    tmp8 = null;
    if (tmp7) {
      tmp8 = null;
      if (null != published_revision) {
        tmp8 = null;
        if (null != guildId) {
          tmp8 = { state: "offer", publishedRevision: published_revision, fallbackGuildId: guildId };
          const obj2 = { state: "offer", publishedRevision: published_revision, fallbackGuildId: guildId };
        }
      }
    }
  }
  return tmp8;
});
const result = size.fileFinishedImporting("modules/conjure/publish/useConjurePatchNotesLink.tsx");

export default tmp2;
export const openConjureSentPatchNotes = function openConjureSentPatchNotes(sent) {
  let channelId;
  let guildId;
  let messageId;
  ({ guildId, channelId, messageId } = sent);
  const obj = router_utils;
  obj.transitionTo(Routes.CHANNEL(guildId, channelId, messageId));
};
export const conjurePatchNotesEditorProps = function conjurePatchNotesEditorProps(projectId, arg1) {
  let fallbackGuildId;
  let publishedRevision;
  ({ publishedRevision, fallbackGuildId } = arg1);
  const project = ConjureProjectStore.getProject(projectId);
  let publishGuildIdResult = null;
  if (null != project) {
    const obj = useConjurePublishAction;
    publishGuildIdResult = obj.publishGuildId(project, fallbackGuildId);
  }
  let tmp5 = null;
  if (null != project) {
    tmp5 = null;
    if (null != publishGuildIdResult) {
      const obj3 = { projectId, guildId: publishGuildIdResult, applicationId: null, projectName: null, publishedRevision };
      ({ application_id: obj2.applicationId, name: obj2.projectName } = project);
      tmp5 = obj3;
    }
  }
  return tmp5;
};
