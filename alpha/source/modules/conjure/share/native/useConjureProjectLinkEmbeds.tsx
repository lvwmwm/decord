// Module ID: 11907
// Function ID: 11908
// Name: useConjureProjectLinkEmbeds
// Dependencies: [19, 4793, 2165, 4641, 4704, 4663, 4724, 1388, 6500, 11908, 5514, 8779, 504, 1452, 11909, 11914, 11915, 11912, 2]
// Exports: default

// Module 11907 (useConjureProjectLinkEmbeds)
import ChannelStore2 from "ChannelStore" /* 4641 */;
import conjureProjectLinkCard2 from "conjureProjectLinkCard" /* 11909 */;
import loadConjureSharedProjectDefault from "loadConjureSharedProject" /* 11914 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4793 */;
import ApplicationStore from "ApplicationStore" /* 2165 */;
import GuildMemberStore from "GuildMemberStore" /* 4704 */;
import GuildStore from "GuildStore" /* 4663 */;
import PermissionStore from "PermissionStore" /* 4724 */;
import UserStore from "UserStore" /* 1388 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6500 */;
import ConjureSharedProjectStore from "ConjureSharedProjectStore" /* 11908 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ChannelStore = ChannelStore2;
let _require, currentUser, map, set;

const ChannelLoader = ChannelStore2.ChannelLoader;
let result = size.fileFinishedImporting("modules/conjure/share/native/useConjureProjectLinkEmbeds.tsx");

export default function useConjureProjectLinkEmbeds(channelId) {
  let memo2;
  let stateFromStores;
  _require = channelId;
  let items = [channelId];
  const memo = stateFromStores.useMemo(() => {
    map = new Map();
    const item = channelId.forEach((item) => {
      let code;
      let type;
      let url;
      const iter = item.getContentMessage().codedLinks[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        ({ code, url, type } = nextResult);
        let tmp2 = channelId;
        let tmp3 = memo1;
        if (type === channelId(memo1[10]).CodedLinkType.CONJURE_PROJECT) {
          let tmp2Result = tmp2(tmp3[11]);
          let result = tmp2Result.conjureProjectLinkTicket(url);
          let str = result;
          let tmp6 = result;
          set = map.set;
          if (result == null) {
            str = "";
          }
          let _HermesInternal = HermesInternal;
          let obj = { applicationId: code, ticket: tmp6 };
          let result1 = set("" + code + "/" + str, obj);
        }
        continue;
      }
    }, null);
    const items = [...map.values()];
    return stringify(items);
  }, items);
  const items1 = [memo];
  const memo1 = stateFromStores.useMemo(() => JSON.parse(memo), items1);
  let obj = require("get initialized");
  const items2 = [UserStore];
  stateFromStores = obj.useStateFromStores(items2, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    if (id == null) {
      id = null;
    }
    return id;
  });
  channelId = channelId.channelId;
  let obj2 = require("get initialized");
  const items3 = [memo2];
  const items4 = [channelId];
  const stateFromStores1 = obj2.useStateFromStores(items3, () => {
    const channel = ChannelStore.getChannel(channelId);
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    if (guild_id == null) {
      guild_id = null;
    }
    return guild_id;
  }, items4);
  const items5 = [stateFromStores1, channelId];
  memo2 = stateFromStores.useMemo(() => ({ guildId: stateFromStores1, channelId }), items5);
  let tmp6 = require("get initialized");
  const items6 = [channelId, ConjureSharedProjectStore, stateFromStores1, ConjureProjectStore, UserStore, , , , , ];
  const useStateFromStoresObject = tmp6.useStateFromStoresObject;
  items6[5] = require("ApexExperiment").ApexExperimentStore;
  items6[6] = memo2;
  items6[7] = GuildMemberStore;
  items6[8] = GuildStore;
  items6[9] = PermissionStore;
  const items7 = [memo1, memo2];
  const stateFromStoresObject = useStateFromStoresObject(items6, () => {
    const obj = {};
    const iter = memo1[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let combined;
      let applicationId = nextResult.applicationId;
      let ticket = nextResult.ticket;
      let obj2 = conjureProjectLinkCard2;
      let result = obj2.conjureProjectLinkCardKey(applicationId, ticket, memo2);
      let tmp7 = obj[applicationId];
      if (null == tmp7) {
        combined = result;
      } else {
        let _HermesInternal = HermesInternal;
        combined = "" + tmp8 + "\u0001" + result;
      }
      obj[applicationId] = combined;
      continue;
    }
    return obj;
  }, items7);
  const items8 = [memo1, stateFromStoresObject, memo2, stateFromStores];
  const effect = stateFromStores.useEffect(() => {
    let applicationId;
    let ticket;
    if (null != stateFromStores) {
      const items = [];
      const iter = memo1[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        ({ applicationId, ticket } = nextResult);
        let tmp4 = applicationId;
        let tmp5 = ticket;
        let tmp8 = loadConjureSharedProjectDefault(applicationId, ticket);
        let tmp9 = require;
        let obj = conjureProjectLinkCard2;
        let conjureProjectLinkCard = obj.readConjureProjectLinkCard(applicationId, ticket, memo2);
        let tmp12 = conjureProjectLinkCard;
        let type;
        if (conjureProjectLinkCard != null) {
          type = conjureProjectLinkCard.type;
        }
        let tmp14 = "ready" === type;
        if (tmp14) {
          tmp14 = null == tmp12.creator;
        }
        if (tmp14) {
          let tmp9Result = tmp9(11915);
          let messageAuthor = tmp9Result.requestMessageAuthor(tmp12.ownerId);
        }
        let status = ConjureSharedProjectStore.getStatus(tmp4, tmp5);
        let type1;
        let tmp22 = status;
        if (status != null) {
          type1 = status.type;
        }
        let project = null;
        if ("ready" === type1) {
          project = ConjureProjectStore.getProject(tmp22.projectId);
        }
        let sharedProjectHomeGuildId = null;
        if (null != project) {
          let tmp9Result2 = tmp9(11912);
          sharedProjectHomeGuildId = tmp9Result2.getSharedProjectHomeGuildId(tmp27);
        }
        if (null != sharedProjectHomeGuildId) {
          let arr = items.push(tmp30);
        }
        continue;
      }
      const guildIds = ChannelLoader.loadGuildIds(items);
    }
  }, items8);
  return stateFromStoresObject;
};
