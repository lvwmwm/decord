// Module ID: 12265
// Function ID: 12266
// Name: conjureRemoveApp
// Dependencies: [19, 2163, 6837, 4724, 4706, 4665, 4726, 4736, 1386, 6860, 6502, 1071, 6836, 5410, 504, 12, 6503, 6392, 1112, 4091, 12190, 2]
// Exports: conjureDeleteProjectBody, conjureDeleteProjectItems, conjureRemoveAppKeptChannels, conjureTitleWithAppTag, isPublishedConjureUserApp, readConjureOtherRemoveTargets, useConjureRemoveTarget, useIsPublishedConjureUserApp

// Module 12265 (conjureRemoveApp)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import _modDef4091 from "module_4091" /* 4091 */;
import useChannelName from "useChannelName" /* 5410 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6392 */;
import ConjurePublishTypes from "ConjurePublishTypes" /* 12190 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2163 */;
import UserProfileStore from "UserProfileStore" /* 6837 */;
import GuildChannelStore from "GuildChannelStore" /* 4724 */;
import GuildMemberStore from "GuildMemberStore" /* 4706 */;
import GuildStore from "GuildStore" /* 4665 */;
import PermissionStore from "PermissionStore" /* 4726 */;
import RelationshipStore from "RelationshipStore" /* 4736 */;
import UserStore from "UserStore" /* 1386 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 6860 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6502 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

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
      const obj = found(6836);
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
      const obj2 = found(6836);
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
      canRemoveConjureBot = found(6836).canRemoveConjureBot;
      found(6836);
      canRemoveConjureBot2Result = null == project.preview_application_id;
      tmp7Result4 = found(6836);
      if (!canRemoveConjureBot2Result) {
        const canRemoveConjureBot2 = found(6836).canRemoveConjureBot;
        found(6836);
        const tmp7Result6 = found(6836);
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
let items = [ConjureProjectStore, GuildStore, GuildChannelStore, GuildMemberStore, UserProfileStore, ApplicationStore, PermissionStore, UserStore, RelationshipStore];
let closure_16 = [];
let result = size.fileFinishedImporting("modules/conjure/projects/conjureRemoveApp.tsx");

export { readConjureRemoveTarget };
export function useConjureRemoveTarget(id) {
  _require = id;
  let obj = require("get initialized");
  items = [ConjureProjectStore, ApplicationStore, GuildMemberStore, GuildStore];
  const items1 = [id];
  const stateFromStores = obj.useStateFromStores(items, () => {
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
    found1 = closure_2_16;
  }, items1, require("module_12").isEqual);
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
  const items3 = [id];
  return obj2.useStateFromStores(items, () => {
    project = null;
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
        let intl = intl2.intl;
        let obj2 = { channel: tmp2, server: guildName };
        combined = intl.formatToPlainString(_modDef4091.kCC2X2, obj2);
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
    const listFormat = new Intl.ListFormat(intl2.intl.currentLocale, { type: "conjunction" });
    const formatResult = listFormat.format(keptChannelNames.map((item) => "#" + item));
    const intl = intl2.intl;
    const obj = { channels: formatResult };
    return intl.formatToPlainString(_modDef4091.pE4Cec, obj);
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
  const intl = intl2.intl;
  const formatToPlainString = intl.formatToPlainString;
  const obj = { app: appName, server: listFormat.format(items1) };
  const v9CvVB9 = _modDef4091["9CvVB9"];
  listFormat = new Intl.ListFormat(intl2.intl.currentLocale, { type: "conjunction" });
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
