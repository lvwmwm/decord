// Module ID: 12513
// Function ID: 12514
// Name: conjureRemoveApp
// Dependencies: [19, 2040, 7765, 4939, 4921, 4880, 4941, 4951, 1384, 10847, 6838, 1072, 10866, 5647, 504, 12, 6896, 1114, 3865, 10941, 2]
// Exports: conjureDeleteProjectBody, conjureDeleteProjectItems, conjurePreviewAppItem, conjureRemoveAppItems, conjureRemoveAppKeptChannels, conjureRemoveAppSuccess, conjureTitleWithAppTag, isPublishedConjureUserApp, useConjureRemoveTarget, useIsPublishedConjureUserApp

// Module 12513 (conjureRemoveApp)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1114 */;
import _modDef3865 from "module_3865" /* 3865 */;
import useChannelName from "useChannelName" /* 5647 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6896 */;
import ConjurePublishTypes from "ConjurePublishTypes" /* 10941 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2040 */;
import UserProfileStore from "UserProfileStore" /* 7765 */;
import GuildChannelStore from "GuildChannelStore" /* 4939 */;
import GuildMemberStore from "GuildMemberStore" /* 4921 */;
import GuildStore from "GuildStore" /* 4880 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import RelationshipStore from "RelationshipStore" /* 4951 */;
import UserStore from "UserStore" /* 1384 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10847 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6838 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f102132 = (item) => {
  const obj = { key: "channel:" + item, kind: "channel", label: "#" + item };
  return obj;
};
function readConjureRemoveTarget(project) {
  let canRemoveConjureBot;
  let canRemoveConjureBot2Result;
  let found;
  let found1;
  let name;
  let tmp12Result6;
  let tmp4;
  let guild = null;
  if (null != project.guild_id) {
    guild = GuildStore.getGuild(project.guild_id);
  }
  if (null != guild) {
    const obj3 = found(10866);
    if ("in_server" === obj3.readConjureAppServerPresence(project)) {
      const tmp12Result = found(10866);
      const result = tmp12Result.findConjureAppChannels(guild.id, project.application_id);
      found = result.filter((item) => PermissionStore.can(constants.MANAGE_CHANNELS, item));
      const obj = { projectName: project.name, appName: name, previewAppName: tmp4, guildName: guild.name, channelNames: found.map(channelName), keptChannelNames: found1.map(channelName), canRemoveBot: canRemoveConjureBot(guild, tmp12Result6.conjureProductionBotUserId(project)), canRemovePreviewBot: canRemoveConjureBot2Result };
      const application = ApplicationStore.getApplication(project.application_id);
      name = undefined;
      const obj6 = ApplicationStore;
      if (application != null) {
        name = application.name;
      }
      if (name == null) {
        name = project.name;
      }
      tmp4 = null;
      if (null != project.preview_application_id) {
        const application1 = obj6.getApplication(project.preview_application_id);
        let name1;
        if (application1 != null) {
          name1 = application1.name;
        }
        if (name1 == null) {
          const _HermesInternal = HermesInternal;
          name1 = "" + project.name + " (Preview)";
        }
        tmp4 = name1;
      }
      found1 = result.filter((item) => !found.includes(item));
      canRemoveConjureBot = found(10866).canRemoveConjureBot;
      found(10866);
      canRemoveConjureBot2Result = null == project.preview_application_id;
      tmp12Result6 = found(10866);
      if (!canRemoveConjureBot2Result) {
        const canRemoveConjureBot2 = found(10866).canRemoveConjureBot;
        found(10866);
        const tmp12Result8 = found(10866);
        canRemoveConjureBot2Result = canRemoveConjureBot2(guild, tmp12Result8.conjurePreviewBotUserId(project));
      }
      return obj;
    }
  }
  return null;
}
function channelName(channel) {
  const obj = useChannelName;
  return obj.computeChannelName(channel, UserStore, RelationshipStore);
}
const Permissions = Constants.Permissions;
let result = size.fileFinishedImporting("modules/conjure/projects/conjureRemoveApp.tsx");

export { readConjureRemoveTarget };
export function useConjureRemoveTarget(projectId) {
  _require = projectId;
  let obj = require("get initialized");
  let items = [ConjureProjectStore, ApplicationStore, GuildMemberStore];
  const items1 = [projectId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let items;
    let member;
    let tmp;
    project = null;
    if (null != closure_0) {
      project = project.getProject(tmp);
    }
    let guild_id;
    if (project != null) {
      guild_id = project.guild_id;
    }
    if (null != project) {
      let obj;
      if (null != guild_id) {
        obj = {
          guildId: guild_id,
          botUserIds: items.filter((item) => {
                const tmp = null != item && null == member.getMember(guild_id, item);
                return tmp;
              })
        };
        items = [, ];
        const obj2 = closure_0(dependencyMap[12]);
        items[0] = obj2.conjureProductionBotUserId(project);
        const obj3 = closure_0(dependencyMap[12]);
        items[1] = obj3.conjurePreviewBotUserId(project);
      }
      return obj;
    }
    obj = { guildId: null, botUserIds: [] };
  }, items1, require("module_12").isEqual);
  const guildId = stateFromStores.guildId;
  const botUserIds = stateFromStores.botUserIds;
  const items2 = [guildId, botUserIds];
  const effect = react.useEffect(() => {
    let tmp2 = null != guildId;
    const tmp = guildId;
    if (tmp2) {
      tmp2 = botUserIds.length > 0;
    }
    if (tmp2) {
      const obj = GuildActionCreatorsDefault;
      const membersById = obj.requestMembersById(tmp, botUserIds, false);
    }
  }, items2);
  let obj2 = require("get initialized");
  const items3 = [ConjureProjectStore, GuildStore, GuildChannelStore, GuildMemberStore, UserProfileStore, ApplicationStore, PermissionStore, UserStore, RelationshipStore];
  const items4 = [projectId];
  return obj2.useStateFromStores(items3, () => {
    project = null;
    if (null != projectId) {
      project = ConjureProjectStore.getProject(tmp);
    }
    let tmp4 = null;
    if (null != project) {
      tmp4 = readConjureRemoveTarget(project);
    }
    return tmp4;
  }, items4, require("module_12").isEqual);
}
export function conjureRemoveAppItems(target) {
  const channelNames = target.channelNames;
  return channelNames.map(f102132);
}
export function conjureDeleteProjectItems(target) {
  let obj = { key: "project", kind: "project", label: target.projectName };
  const items = [obj];
  const channelNames = target.channelNames;
  const items1 = [...channelNames.map(f102132)];
  items.push.apply(items1);
  const previewAppName = target.previewAppName;
  let tmp2 = null;
  if (null != previewAppName) {
    tmp2 = { key: "preview-app", kind: "app", label: previewAppName };
    const obj2 = { key: "preview-app", kind: "app", label: previewAppName };
  }
  if (null != tmp2) {
    items.push(tmp2);
  }
  return items;
}
export function conjurePreviewAppItem(target) {
  const previewAppName = target.previewAppName;
  let tmp = null;
  if (null != previewAppName) {
    tmp = { key: "preview-app", kind: "app", label: previewAppName };
    const obj = { key: "preview-app", kind: "app", label: previewAppName };
  }
  return tmp;
}
export function conjureRemoveAppKeptChannels(target) {
  const keptChannelNames = target.keptChannelNames;
  if (0 === keptChannelNames.length) {
    return null;
  } else {
    const _Intl = Intl;
    const self = this;
    const self2 = this;
    const listFormat = new Intl.ListFormat(intl2.intl.currentLocale, { type: "conjunction" });
    const formatResult = listFormat.format(keptChannelNames.map((item) => "#" + item));
    const intl = intl2.intl;
    const obj = { channels: formatResult };
    return intl.formatToPlainString(_modDef3865.pE4Cec, obj);
  }
}
export function conjureTitleWithAppTag(arg0) {
  return arg0;
}
export function conjureRemoveAppSuccess(arg0) {
  let appName;
  let guildName;
  ({ appName, guildName } = arg0);
  const intl = intl2.intl;
  return intl.formatToPlainString(_modDef3865.SNFGxP, { app, server });
}
export function conjureDeleteProjectBody(target) {
  let appName;
  let guildName;
  ({ appName, guildName } = target);
  const intl = intl2.intl;
  return intl.formatToPlainString(_modDef3865["9CvVB9"], { app, server });
}
export function isPublishedConjureUserApp(project, publishStatus) {
  let isConjureLiveResult = "user" === project.install_scope && null != publishStatus;
  if (isConjureLiveResult) {
    const obj = ConjurePublishTypes;
    isConjureLiveResult = obj.isConjureLive(publishStatus.publishState);
  }
  return isConjureLiveResult;
}
export function useIsPublishedConjureUserApp(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [ConjureProjectStore, ConjurePublishStatusStore];
  const items1 = [arg0];
  return obj.useStateFromStores(items, () => {
    let project = null;
    if (null != closure_0) {
      project = ConjureProjectStore.getProject(tmp);
    }
    let tmp4 = null != project;
    if (tmp4) {
      const publishStatus = ConjurePublishStatusStore.getPublishStatus(project.id);
      let isConjureLiveResult = "user" === project.install_scope && null != publishStatus;
      if (isConjureLiveResult) {
        const obj = ConjurePublishTypes;
        isConjureLiveResult = obj.isConjureLive(publishStatus.publishState);
      }
      tmp4 = isConjureLiveResult;
    }
    return tmp4;
  }, items1);
}
