// Module ID: 12624
// Function ID: 12625
// Name: useConjurePatchNotesLink
// Dependencies: [19, 6838, 10847, 1072, 12400, 504, 1100, 2]
// Exports: conjurePatchNotesEditorProps, default, openConjureSentPatchNotes

// Module 12624 (useConjurePatchNotesLink)
import Constants from "Constants" /* 1072 */;
import router_utils from "router_utils" /* 1100 */;
import ConjureProjectStore2 from "ConjureProjectStore" /* 6838 */;
import useConjurePublishAction from "useConjurePublishAction" /* 12400 */;
import react from "react" /* 19 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10847 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ConjureProjectStore = ConjureProjectStore2;
let _require, dependencyMap;

const canPublishProject = ConjureProjectStore2.canPublishProject;
const Routes = Constants.Routes;
const result = size.fileFinishedImporting("modules/conjure/publish/useConjurePatchNotesLink.tsx");

export default function useConjurePatchNotesLink(arg0, published_revision) {
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
};
export function openConjureSentPatchNotes(sent) {
  let channelId;
  let guildId;
  let messageId;
  ({ guildId, channelId, messageId } = sent);
  const obj = router_utils;
  obj.transitionTo(Routes.CHANNEL(guildId, channelId, messageId));
}
export function conjurePatchNotesEditorProps(projectId, arg1) {
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
}
