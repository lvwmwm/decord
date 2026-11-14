// Module ID: 13206
// Function ID: 13207
// Name: conjureRemoveApp
// Dependencies: [19, 2165, 7352, 5236, 5218, 5177, 5238, 5248, 1388, 7377, 7017, 1072, 7351, 5954, 504, 12, 7018, 1113, 4131, 6917, 7384, 2]
// Exports: canRemoveConjureAppFromServer, conjureDeleteProjectBody, conjureDeleteProjectItems, conjureRemoveAppKeptChannels, conjureTitleWithAppTag, isPublishedConjureUserApp, readConjureOtherRemoveTargets, readConjureViewedRemoveTarget, useConjureProjectServers, useConjureRemoveTarget, useConjureViewedRemoveTarget, useIsPublishedConjureUserApp

// Module 13206 (conjureRemoveApp)
import Constants from "Constants" /* 1072 */;
import intl3 from "intl" /* 1113 */;
import _modDef4131 from "module_4131" /* 4131 */;
import useChannelName from "useChannelName" /* 5954 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6917 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 7018 */;
import ConjurePublishTypes from "ConjurePublishTypes" /* 7384 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2165 */;
import UserProfileStore from "UserProfileStore" /* 7352 */;
import GuildChannelStore from "GuildChannelStore" /* 5236 */;
import GuildMemberStore from "GuildMemberStore" /* 5218 */;
import GuildStore from "GuildStore" /* 5177 */;
import PermissionStore from "PermissionStore" /* 5238 */;
import RelationshipStore from "RelationshipStore" /* 5248 */;
import UserStore from "UserStore" /* 1388 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 7377 */;
import ConjureProjectStore from "ConjureProjectStore" /* 7017 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f106741 = () => {
  let guild;
  let tmp2;
  project = null;
  if (null != closure_0) {
    project = project.getProject(tmp2);
  }
  if (null != project) {
    let found1;
    if (null != project.guild_id) {
      items = [project.guild_id];
      let obj = closure_0(dependencyMap[16]);
      let result = obj.conjureProjectServerIds(project);
      HermesBuiltin.arraySpread(items, result.filter((item) => item !== project.guild_id), 1);
      const found = items.filter((item) => null != guild.getGuild(item));
      const mapped = found.map((guildId) => {
        let member;
        closure_0 = guildId;
        let tmp = closure_2_0;
        const obj = {
          guildId,
          botUserIds: items.filter((item) => {
            const tmp = null != item && null == member.getMember(closure_0, item);
            return tmp;
          })
        };
        items = [, ];
        const obj2 = closure_2_0(closure_2_2[12]);
        items[0] = obj2.conjureProductionBotUserId(project);
        let result = null;
        const tmp2 = closure_2_2;
        const tmp3 = project;
        if (guildId === project.guild_id) {
          const tmpResult = tmp(tmp2[12]);
          result = tmpResult.conjurePreviewBotUserId(tmp3);
        }
        items[1] = result;
        return obj;
      });
      found1 = mapped.filter((botUserIds) => botUserIds.botUserIds.length > 0);
    }
    return found1;
  }
  found1 = closure_2_17;
};
function readConjureRemoveTarget(project, item) {
  let canRemoveConjureBot;
  let canRemoveConjureBot2Result;
  let found1;
  let name;
  let tmp11;
  let tmp7Result4;
  let guild_id = item;
  if (item === undefined) {
    guild_id = project.guild_id;
  }
  let found;
  let guild = null;
  if (null != guild_id) {
    guild = GuildStore.getGuild(guild_id);
  }
  if (null != guild) {
    let tmp3;
    const id = guild.id;
    if (id === project.guild_id) {
      const obj = found(7351);
      tmp3 = "in_server" === obj.readConjureAppServerPresence(project);
    } else {
      tmp3 = "guild" === project.install_scope;
      if (tmp3) {
        const guild_ids = project.guild_ids;
        let hasItem;
        if (guild_ids != null) {
          hasItem = guild_ids.includes(id);
        }
        tmp3 = true === hasItem;
      }
    }
    if (tmp3) {
      const obj2 = found(7351);
      const result = obj2.findConjureAppChannels(guild.id, project.application_id);
      found = result.filter((item) => PermissionStore.can(constants.MANAGE_CHANNELS, item));
      const obj5 = { projectName: project.name, appName: name, previewAppName: tmp11, guildId: null, guildName: null, channelNames: found.map(channelName), keptChannelNames: found1.map(channelName), canRemoveBot: canRemoveConjureBot(guild, tmp7Result4.conjureProductionBotUserId(project)), canRemovePreviewBot: canRemoveConjureBot2Result };
      const application = ApplicationStore.getApplication(project.application_id);
      name = undefined;
      const obj4 = ApplicationStore;
      if (application != null) {
        name = application.name;
      }
      if (name == null) {
        name = project.name;
      }
      tmp11 = null;
      if (null != project.preview_application_id) {
        tmp11 = null;
        if (guild.id === project.guild_id) {
          const application1 = obj4.getApplication(project.preview_application_id);
          let name1;
          if (application1 != null) {
            name1 = application1.name;
          }
          if (name1 == null) {
            const _HermesInternal = HermesInternal;
            name1 = "" + project.name + " (Preview)";
          }
          tmp11 = name1;
        }
      }
      ({ id: obj3.guildId, name: obj3.guildName } = guild);
      found1 = result.filter((item) => !found.includes(item));
      canRemoveConjureBot = found(7351).canRemoveConjureBot;
      found(7351);
      canRemoveConjureBot2Result = null == project.preview_application_id;
      tmp7Result4 = found(7351);
      if (!canRemoveConjureBot2Result) {
        const canRemoveConjureBot2 = found(7351).canRemoveConjureBot;
        found(7351);
        const tmp7Result6 = found(7351);
        canRemoveConjureBot2Result = canRemoveConjureBot2(guild, tmp7Result6.conjurePreviewBotUserId(project));
      }
      return obj5;
    }
  }
  return null;
}
function channelName(channel) {
  const obj = useChannelName;
  return obj.computeChannelName(channel, UserStore, RelationshipStore);
}
const Permissions = Constants.Permissions;
let closure_13 = [];
let items = [ConjureProjectStore, GuildStore, GuildChannelStore, GuildMemberStore, UserProfileStore, ApplicationStore, PermissionStore, UserStore, RelationshipStore];
let closure_17 = [];
let result = size.fileFinishedImporting("modules/conjure/projects/conjureRemoveApp.tsx");

export { readConjureRemoveTarget };
export function useConjureRemoveTarget(id) {
  _require = id;
  items = [ConjureProjectStore, ApplicationStore, GuildMemberStore, GuildStore];
  const items1 = [id];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, f106741, items1, require("module_12").isEqual);
  const items2 = [stateFromStores];
  const effect = react.useEffect(() => {
    let botUserIds;
    let guildId;
    const iter = stateFromStores[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      ({ guildId, botUserIds } = nextResult);
      let obj = GuildActionCreatorsDefault;
      let membersById = obj.requestMembersById(guildId, botUserIds, false);
      continue;
    }
  }, items2);
  const items3 = [id];
  const obj2 = require("get initialized");
  return obj2.useStateFromStores(items, () => {
    let project = null;
    if (null != id) {
      project = ConjureProjectStore.getProject(tmp);
    }
    let tmp4 = null;
    if (null != project) {
      tmp4 = readConjureRemoveTarget(project);
    }
    return tmp4;
  }, items3, require("module_12").isEqual);
}
export function readConjureViewedRemoveTarget(project, guildId) {
  let tmp = null;
  if (null != guildId) {
    tmp = null;
    if (guildId !== project.guild_id) {
      tmp = readConjureRemoveTarget(project, guildId);
    }
  }
  if (tmp == null) {
    tmp = readConjureRemoveTarget(project);
  }
  return tmp;
}
export function useConjureViewedRemoveTarget(id, guildId) {
  _require = id;
  let closure_1 = guildId;
  items = [id, guildId];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let project = null;
    if (null != id) {
      project = ConjureProjectStore.getProject(tmp);
    }
    let tmp4 = null;
    if (null != project) {
      let tmp6 = null;
      if (null != guildId) {
        tmp6 = null;
        if (guildId !== project.guild_id) {
          tmp6 = readConjureRemoveTarget(project, tmp5);
        }
      }
      if (tmp6 == null) {
        tmp6 = readConjureRemoveTarget(project);
      }
      tmp4 = tmp6;
    }
    return tmp4;
  }, items, require("module_12").isEqual);
}
export function canRemoveConjureAppFromServer(conjureViewedRemoveTarget, arg1) {
  return conjureViewedRemoveTarget.canRemoveBot || arg1;
}
export function useConjureProjectServers(projectId) {
  _require = projectId;
  let obj = require("get initialized");
  items = [ConjureProjectStore, ApplicationStore, GuildMemberStore, GuildStore];
  const items1 = [projectId];
  const stateFromStores = obj.useStateFromStores(items, f106741, items1, require("module_12").isEqual);
  const items2 = [stateFromStores];
  const effect = react.useEffect(() => {
    let botUserIds;
    let guildId;
    const iter = stateFromStores[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      ({ guildId, botUserIds } = nextResult);
      let obj = GuildActionCreatorsDefault;
      let membersById = obj.requestMembersById(guildId, botUserIds, false);
      continue;
    }
  }, items2);
  let obj2 = require("get initialized");
  const items3 = [projectId];
  return obj2.useStateFromStores(items, () => {
    let mapped;
    project = ConjureProjectStore.getProject(projectId);
    if (null == project) {
      mapped = closure_13;
    } else {
      let obj = ConjureProjectTypes;
      const result = obj.conjureProjectServerIds(project);
      mapped = result.map((guildId) => {
        let intl2;
        let name1;
        let stringResult;
        let tmp13;
        let usesPreviewAppResult;
        guild = guild.getGuild(guildId);
        let name;
        if (guild != null) {
          name = guild.name;
        }
        const obj = { guildId, guildName: stringResult, isTestServer: usesPreviewAppResult, removeTarget: tmp13 };
        stringResult = name;
        if (name == null) {
          const intl = projectId(closure_2_2[17]).intl;
          stringResult = intl.string(closure_2_1(closure_2_2[18])["6bhivN"]);
        }
        usesPreviewAppResult = guildId === tmp.guild_id;
        if (usesPreviewAppResult) {
          const obj2 = projectId(closure_2_2[16]);
          usesPreviewAppResult = obj2.usesPreviewApp(tmp);
        }
        if (usesPreviewAppResult) {
          const obj3 = projectId(closure_2_2[16]);
          usesPreviewAppResult = obj3.conjureProjectServerIds(tmp).length > 1;
        }
        tmp13 = closure_2_15(tmp, guildId);
        if (tmp13 == null) {
          let tmp20 = null;
          if (null == name) {
            const obj4 = { projectName: project.name, appName: name1, previewAppName: null, guildId, guildName: intl2.string(closure_2_1(closure_2_2[18])["6bhivN"]), channelNames: [], keptChannelNames: [], canRemoveBot: false, canRemovePreviewBot: false };
            application = application.getApplication(tmp.application_id);
            name1 = undefined;
            if (application != null) {
              name1 = application.name;
            }
            if (name1 == null) {
              name1 = tmp.name;
            }
            intl2 = projectId(closure_2_2[17]).intl;
            tmp20 = obj4;
          }
          tmp13 = tmp20;
        }
        return obj;
      });
    }
    return mapped;
  }, items3, require("module_12").isEqual);
}
export function readConjureOtherRemoveTargets(project) {
  _require = project;
  const obj = require("ConjureProjectTypes");
  const result = obj.conjureProjectServerIds(project);
  const found = result.filter((item) => item !== project.guild_id);
  const mapped = found.map((item) => readConjureRemoveTarget(project, item));
  return mapped.filter((item) => null != item);
}
export function conjureDeleteProjectItems(target, otherTargets) {
  items = otherTargets;
  if (otherTargets === undefined) {
    items = [];
  }
  let obj = { key: "project", kind: "project", label: target.projectName };
  const items1 = [obj];
  const items2 = [target, ...items];
  const item = items2.forEach((guildName, index) => {
    let combined;
    guildName = guildName.guildName;
    const iter = guildName.channelNames[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      let obj = { key: "channel:" + index + ":" + nextResult, kind: "channel", label: combined };
      let _HermesInternal = HermesInternal;
      let push = items1.push;
      if (0 === items.length) {
        let _HermesInternal2 = HermesInternal;
        combined = "#" + tmp2;
      } else {
        let intl = intl3.intl;
        let obj2 = { channel: tmp2, server: guildName };
        combined = intl.formatToPlainString(_modDef4131.kCC2X2, obj2);
      }
      let arr = push(obj);
      continue;
    }
  });
  const previewAppName = target.previewAppName;
  let tmp2 = null;
  if (null != previewAppName) {
    let obj2 = { key: "preview-app", kind: "app", label: previewAppName };
    tmp2 = obj2;
  }
  if (null != tmp2) {
    let arr = items1.push(tmp2);
  }
  return items1;
}
export function conjureRemoveAppKeptChannels(target) {
  const keptChannelNames = target.keptChannelNames;
  if (0 === keptChannelNames.length) {
    return null;
  } else {
    const _Intl = Intl;
    const self = this;
    const self2 = this;
    const listFormat = new Intl.ListFormat(intl3.intl.currentLocale, { type: "conjunction" });
    const formatResult = listFormat.format(keptChannelNames.map((item) => "#" + item));
    const intl = intl3.intl;
    const obj = { channels: formatResult };
    return intl.formatToPlainString(_modDef4131.pE4Cec, obj);
  }
}
export function conjureTitleWithAppTag(arg0) {
  return arg0;
}
export function conjureDeleteProjectBody(target, otherTargets) {
  let appName;
  let guildName;
  let items1;
  let listFormat;
  items = otherTargets;
  ({ appName, guildName } = target);
  if (otherTargets === undefined) {
    items = [];
  }
  const intl = intl3.intl;
  const formatToPlainString = intl.formatToPlainString;
  const obj = { app: appName, server: listFormat.format(items1) };
  const v9CvVB9 = _modDef4131["9CvVB9"];
  listFormat = new Intl.ListFormat(intl3.intl.currentLocale, { type: "conjunction" });
  items1 = [guildName, ...items.map((guildName) => guildName.guildName)];
  return formatToPlainString(v9CvVB9, obj);
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
  items = [ConjureProjectStore, ConjurePublishStatusStore];
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
