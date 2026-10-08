// Module ID: 16868
// Function ID: 16869
// Name: conjureRemoveApp
// Dependencies: [5436, 7309, 4705, 2086, 4717, 1389, 11251, 12378, 5417, 558, 576, 504, 12, 1126, 3827, 2]
// Exports: conjureDeleteProjectBody, conjureDeleteProjectItems, conjureRemoveAppItems, conjureRemoveAppSuccess, conjureTitleWithAppTag

// Module 16868 (conjureRemoveApp)
import intl2 from "intl" /* 1126 */;
import _modDef3827 from "module_3827" /* 3827 */;
import ConjureProjectStore2 from "ConjureProjectStore" /* 11251 */;
import conjureAppInServer from "conjureAppInServer" /* 12378 */;
import ApplicationStore from "ApplicationStore" /* 5436 */;
import UserProfileStore from "UserProfileStore" /* 7309 */;
import GuildChannelStore from "GuildChannelStore" /* 4705 */;
import GuildStore from "GuildStore" /* 2086 */;
import RelationshipStore from "RelationshipStore" /* 4717 */;
import UserStore from "UserStore" /* 1389 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ConjureProjectStore = ConjureProjectStore2;
let _require;

const f126748 = (item) => {
  const obj = { key: "channel:" + item, kind: "channel", label: "#" + item };
  return obj;
};
function readConjureRemoveTarget(project) {
  let name;
  let result;
  let tmp8;
  let guild = null;
  if (null != project.guild_id) {
    guild = GuildStore.getGuild(project.guild_id);
  }
  let tmp3 = null;
  if (null != guild) {
    tmp3 = null;
    if (canPublishProject(project)) {
      let obj = conjureAppInServer;
      tmp3 = null;
      const tmp5 = require;
      if ("in_server" === obj.readConjureAppServerPresence(project)) {
        const obj2 = {
          projectName: project.name,
          appName: name,
          previewAppName: tmp8,
          guildName: guild.name,
          channelNames: result.map((item) => {
                  const obj = require("useChannelName");
                  return obj.computeChannelName(item, UserStore, RelationshipStore);
                })
        };
        const application = ApplicationStore.getApplication(project.application_id);
        name = undefined;
        const obj4 = ApplicationStore;
        if (application != null) {
          name = application.name;
        }
        if (name == null) {
          name = project.name;
        }
        tmp8 = null;
        if (null != project.preview_application_id) {
          const application1 = obj4.getApplication(project.preview_application_id);
          let name1;
          if (application1 != null) {
            name1 = application1.name;
          }
          if (name1 == null) {
            const _HermesInternal = HermesInternal;
            name1 = "" + project.name + " (Preview)";
          }
          tmp8 = name1;
        }
        const tmp5Result = tmp5(12378);
        result = tmp5Result.findConjureAppChannels(guild.id, project.application_id);
        tmp3 = obj2;
      }
    }
  }
  return tmp3;
}
const canPublishProject = ConjureProjectStore2.canPublishProject;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureRemoveTarget(arg0) {
  let closure_0;
  let first;
  let tmp12;
  let tmp13;
  _require = arg0;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore, GuildStore, GuildChannelStore, UserProfileStore, ApplicationStore, UserStore, RelationshipStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function v() {
      let project = null;
      if (null != closure_0) {
        project = ConjureProjectStore.getProject(tmp);
      }
      let tmp4 = null;
      if (null != project) {
        tmp4 = readConjureRemoveTarget(project);
      }
      return tmp4;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp13 = items1;
    tmp12 = fn;
  } else {
    tmp12 = cResult[2];
    tmp13 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp12, tmp13, tmp(12).isEqual);
}) : (function useConjureRemoveTarget(arg0) {
  let closure_0;
  _require = arg0;
  const items = [ConjureProjectStore, GuildStore, GuildChannelStore, UserProfileStore, ApplicationStore, UserStore, RelationshipStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let project = null;
    if (null != closure_0) {
      project = ConjureProjectStore.getProject(tmp);
    }
    let tmp4 = null;
    if (null != project) {
      tmp4 = readConjureRemoveTarget(project);
    }
    return tmp4;
  }, items1, require("module_12").isEqual);
});
let result = size.fileFinishedImporting("modules/conjure/projects/conjureRemoveApp.tsx");

export { readConjureRemoveTarget };
export const useConjureRemoveTarget = tmp2;
export const conjureRemoveAppItems = function conjureRemoveAppItems(target) {
  const channelNames = target.channelNames;
  return channelNames.map(f126748);
};
export const conjureDeleteProjectItems = function conjureDeleteProjectItems(target) {
  let obj = { key: "project", kind: "project", label: target.projectName };
  const items = [obj];
  const channelNames = target.channelNames;
  const items1 = [...channelNames.map(f126748)];
  items.push.apply(items1);
  if (null != target.previewAppName) {
    const obj2 = { key: "preview-app", kind: "app", label: target.previewAppName };
    items.push(obj2);
  }
  return items;
};
export function conjureTitleWithAppTag(tmp10Result4) {
  return tmp10Result4;
}
export const conjureRemoveAppSuccess = function conjureRemoveAppSuccess(arg0) {
  let appName;
  let guildName;
  ({ appName, guildName } = arg0);
  const intl = intl2.intl;
  return intl.formatToPlainString(_modDef3827.SNFGxP, { app, server });
};
export const conjureDeleteProjectBody = function conjureDeleteProjectBody(target) {
  let appName;
  let guildName;
  ({ appName, guildName } = target);
  const intl = intl2.intl;
  return intl.formatToPlainString(_modDef3827["9CvVB9"], { app, server });
};
