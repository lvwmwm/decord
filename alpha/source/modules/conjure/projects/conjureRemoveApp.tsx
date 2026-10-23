// Module ID: 11769
// Function ID: 11770
// Name: conjureRemoveApp
// Dependencies: [19, 2045, 7701, 4899, 4881, 4843, 4901, 4911, 1392, 10713, 6771, 1087, 10730, 5602, 558, 576, 504, 12, 6828, 1128, 3830, 10803, 2]
// Exports: conjureDeleteProjectBody, conjureDeleteProjectItems, conjurePreviewAppItem, conjureRemoveAppItems, conjureRemoveAppKeptChannels, conjureRemoveAppSuccess, conjureTitleWithAppTag, isPublishedConjureUserApp

// Module 11769 (conjureRemoveApp)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import _modDef3830 from "module_3830" /* 3830 */;
import useChannelName from "useChannelName" /* 5602 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6828 */;
import conjureAppInServer from "conjureAppInServer" /* 10730 */;
import ConjurePublishTypes from "ConjurePublishTypes" /* 10803 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2045 */;
import UserProfileStore from "UserProfileStore" /* 7701 */;
import GuildChannelStore from "GuildChannelStore" /* 4899 */;
import GuildMemberStore from "GuildMemberStore" /* 4881 */;
import GuildStore from "GuildStore" /* 4843 */;
import PermissionStore from "PermissionStore" /* 4901 */;
import RelationshipStore from "RelationshipStore" /* 4911 */;
import UserStore from "UserStore" /* 1392 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10713 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6771 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, tmp5;

const f111225 = (item) => {
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
    const obj3 = found(10730);
    if ("in_server" === obj3.readConjureAppServerPresence(project)) {
      const tmp12Result = found(10730);
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
      canRemoveConjureBot = found(10730).canRemoveConjureBot;
      found(10730);
      canRemoveConjureBot2Result = null == project.preview_application_id;
      tmp12Result6 = found(10730);
      if (!canRemoveConjureBot2Result) {
        const canRemoveConjureBot2 = found(10730).canRemoveConjureBot;
        found(10730);
        const tmp12Result8 = found(10730);
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
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureRemoveTarget(arg0) {
  let closure_0;
  let first;
  let tmp15;
  let tmp16;
  _require = arg0;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(4);
  let tmp4 = closure_17(arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore, GuildStore, GuildChannelStore, GuildMemberStore, UserProfileStore, ApplicationStore, PermissionStore, UserStore, RelationshipStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    class P {
      constructor() {
        project = null;
        if (null != closure_0) {
          tmp3 = closure_13;
          project = closure_13.getProject(tmp);
        }
        tmp4 = null;
        if (null != project) {
          tmp5 = readConjureRemoveTarget;
          tmp4 = readConjureRemoveTarget(project);
        }
        return tmp4;
      }
    }
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = P;
    cResult[3] = items1;
    tmp16 = items1;
    tmp15 = P;
  } else {
    class P {
      constructor() {
        project = null;
        if (null != closure_0) {
          tmp3 = closure_13;
          project = closure_13.getProject(tmp);
        }
        tmp4 = null;
        if (null != project) {
          tmp5 = readConjureRemoveTarget;
          tmp4 = readConjureRemoveTarget(project);
        }
        return tmp4;
      }
    }
    tmp16 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp15, tmp16, tmp(12).isEqual);
}) : (function useConjureRemoveTarget(arg0) {
  let closure_0;
  _require = arg0;
  const tmp = closure_17(arg0);
  const items = [ConjureProjectStore, GuildStore, GuildChannelStore, GuildMemberStore, UserProfileStore, ApplicationStore, PermissionStore, UserStore, RelationshipStore];
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
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureBotMembers(arg0) {
  let botUserIds;
  let closure_0;
  let first;
  let tmp8;
  let tmp9;
  _require = arg0;
  let tmp = _require;
  let tmp2 = botUserIds;
  let obj = require("react");
  const cResult = obj.c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ConjureProjectStore, , ];
    items[1] = ApplicationStore;
    items[2] = GuildMemberStore;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      let items;
      let member;
      let tmp;
      let project = null;
      if (null != closure_0) {
        project = ConjureProjectStore.getProject(tmp);
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
          const obj2 = conjureAppInServer;
          items[0] = obj2.conjureProductionBotUserId(project);
          const obj3 = conjureAppInServer;
          items[1] = obj3.conjurePreviewBotUserId(project);
        }
        return obj;
      }
      obj = { guildId: null, botUserIds: [] };
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp9 = items1;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = tmp(tmp2[16]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp8, tmp9, tmp(tmp2[17]).isEqual);
  const guildId = stateFromStores.guildId;
  botUserIds = stateFromStores.botUserIds;
  if (cResult[4] === botUserIds) {
    let tmp11;
    let tmp12;
    if (cResult[5] === guildId) {
      tmp11 = cResult[6];
      tmp12 = cResult[7];
    }
    const effect = react.useEffect(tmp11, tmp12);
  }
  const fn2 = function j() {
    let tmp2 = null != guildId;
    const tmp = guildId;
    if (tmp2) {
      tmp2 = botUserIds.length > 0;
    }
    if (tmp2) {
      const obj = GuildActionCreatorsDefault;
      const membersById = obj.requestMembersById(tmp, botUserIds, false);
    }
  };
  const items2 = [guildId, botUserIds];
  cResult[4] = botUserIds;
  cResult[5] = guildId;
  cResult[6] = fn2;
  cResult[7] = items2;
  tmp12 = items2;
  tmp11 = fn2;
}) : (function useConjureBotMembers(arg0) {
  let botUserIds;
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  let items = [ConjureProjectStore, ApplicationStore, GuildMemberStore];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let items;
    let member;
    let tmp;
    let project = null;
    if (null != closure_0) {
      project = ConjureProjectStore.getProject(tmp);
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
        const obj2 = conjureAppInServer;
        items[0] = obj2.conjureProductionBotUserId(project);
        const obj3 = conjureAppInServer;
        items[1] = obj3.conjurePreviewBotUserId(project);
      }
      return obj;
    }
    obj = { guildId: null, botUserIds: [] };
  }, items1, require("module_12").isEqual);
  const guildId = stateFromStores.guildId;
  botUserIds = stateFromStores.botUserIds;
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
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsPublishedConjureUserApp(arg0) {
  let closure_0;
  let first;
  let tmp7;
  let tmp8;
  _require = arg0;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore, ConjurePublishStatusStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
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
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp7, tmp8);
}) : (function useIsPublishedConjureUserApp(arg0) {
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
});
function conjurePreviewAppItem(target) {
  const previewAppName = target.previewAppName;
  let tmp = null;
  if (null != previewAppName) {
    tmp = { key: "preview-app", kind: "app", label: previewAppName };
    const obj = { key: "preview-app", kind: "app", label: previewAppName };
  }
  return tmp;
}
function isPublishedConjureUserApp(project, publishStatus) {
  let isConjureLiveResult = "user" === project.install_scope && null != publishStatus;
  if (isConjureLiveResult) {
    const obj = ConjurePublishTypes;
    isConjureLiveResult = obj.isConjureLive(publishStatus.publishState);
  }
  return isConjureLiveResult;
}
let result = size.fileFinishedImporting("modules/conjure/projects/conjureRemoveApp.tsx");

export { readConjureRemoveTarget };
export const useConjureRemoveTarget = tmp2;
export const conjureRemoveAppItems = function conjureRemoveAppItems(target) {
  const channelNames = target.channelNames;
  return channelNames.map(f111225);
};
export const conjureDeleteProjectItems = function conjureDeleteProjectItems(target) {
  let obj = { key: "project", kind: "project", label: target.projectName };
  const items = [obj];
  const channelNames = target.channelNames;
  const items1 = [...channelNames.map(f111225)];
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
};
export { conjurePreviewAppItem };
export const conjureRemoveAppKeptChannels = function conjureRemoveAppKeptChannels(target) {
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
    return intl.formatToPlainString(_modDef3830.pE4Cec, obj);
  }
};
export function conjureTitleWithAppTag(arg0) {
  return arg0;
}
export const conjureRemoveAppSuccess = function conjureRemoveAppSuccess(arg0) {
  let appName;
  let guildName;
  ({ appName, guildName } = arg0);
  const intl = intl2.intl;
  return intl.formatToPlainString(_modDef3830.SNFGxP, { app, server });
};
export const conjureDeleteProjectBody = function conjureDeleteProjectBody(target) {
  let appName;
  let guildName;
  ({ appName, guildName } = target);
  const intl = intl2.intl;
  return intl.formatToPlainString(_modDef3830["9CvVB9"], { app, server });
};
export { isPublishedConjureUserApp };
export const useIsPublishedConjureUserApp = tmp3;
