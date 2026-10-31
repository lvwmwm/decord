// Module ID: 12453
// Function ID: 12454
// Name: useConjureLiveParts
// Dependencies: [2038, 4944, 5242, 4885, 6844, 504, 7419, 2]
// Exports: default

// Module 12453 (useConjureLiveParts)
import GuildChannelStore2 from "GuildChannelStore" /* 4944 */;
import ApplicationStore from "ApplicationStore" /* 2038 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 5242 */;
import GuildStore from "GuildStore" /* 4885 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6844 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const GuildChannelStore = GuildChannelStore2;
let _require, channel, dependencyMap;

let closure_4 = GuildChannelStore2.GUILD_SELECTABLE_CHANNELS_KEY;
const result = size.fileFinishedImporting("modules/conjure/publish/useConjureLiveParts.tsx");

export default function useConjureLiveParts(arg0, arg1) {
  let closure_0;
  let closure_1;
  let stateFromStoresArray;
  let str;
  let str2;
  _require = arg0;
  dependencyMap = arg1;
  const tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("get initialized");
  const items = [ConjureProjectStore];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let project = ConjureProjectStore.getProject(closure_0);
    if (project == null) {
      project = null;
    }
    return project;
  }, items1);
  let application_id;
  if (stateFromStores != null) {
    application_id = stateFromStores.application_id;
  }
  if (application_id == null) {
    application_id = null;
  }
  const items2 = [application_id];
  const items3 = [application_id];
  const tmpResult = tmp(504);
  const stateFromStores1 = tmpResult.useStateFromStores(items2, () => {
    let tmp2 = null;
    if (null != application_id) {
      let application = ApplicationStore.getApplication(tmp);
      if (application == null) {
        application = null;
      }
      tmp2 = application;
    }
    return tmp2;
  }, items3);
  const items4 = [GuildStore];
  const items5 = [arg1];
  const tmpResult4 = tmp(504);
  const stateFromStores2 = tmpResult4.useStateFromStores(items4, () => {
    let tmp2 = null;
    if (null != closure_1) {
      let guild = GuildStore.getGuild(tmp);
      if (guild == null) {
        guild = null;
      }
      tmp2 = guild;
    }
    return tmp2;
  }, items5);
  const items6 = [GuildMemberCountStore];
  const items7 = [arg1];
  const tmpResult5 = tmp(504);
  const stateFromStores3 = tmpResult5.useStateFromStores(items6, () => {
    let tmp2 = null;
    if (null != closure_1) {
      let memberCount = GuildMemberCountStore.getMemberCount(tmp);
      if (memberCount == null) {
        memberCount = null;
      }
      tmp2 = memberCount;
    }
    return tmp2;
  }, items7);
  const items8 = [GuildChannelStore];
  const items9 = [arg1, application_id];
  const obj2 = { project: stateFromStores, liveName: str, liveDescription: str2, channels: stateFromStoresArray, guild: stateFromStores2, memberCount: stateFromStores3 };
  str = undefined;
  const tmpResult6 = tmp(504);
  stateFromStoresArray = tmpResult6.useStateFromStoresArray(items8, () => {
    if (null != closure_1) {
      if (null != application_id) {
        const arr = GuildChannelStore.getChannels(tmp)[closure_4];
        const found = arr.filter((channel) => {
          channel = channel.channel;
          const obj = closure_0(closure_1[6]);
          return obj.conjureChannelAppId(channel) === application_id;
        });
        const mapped = found.map((channel) => channel.channel);
      }
      return [];
    }
  }, items9);
  if (stateFromStores1 != null) {
    str = stateFromStores1.name;
  }
  if (str == null) {
    let name;
    if (stateFromStores != null) {
      name = stateFromStores.name;
    }
    str = name;
  }
  if (str == null) {
    str = "";
  }
  str2 = undefined;
  if (stateFromStores1 != null) {
    if (stateFromStores1.description != null) {
      str2 = str3.trim();
    }
  }
  if (str2 == null) {
    str2 = "";
  }
  return obj2;
};
