// Module ID: 11929
// Function ID: 11930
// Name: useConjureProjectLinkEmbeds
// Dependencies: [19, 4824, 2165, 4672, 4735, 4755, 1388, 6529, 11930, 5545, 8810, 504, 1452, 11931, 11936, 11937, 2]
// Exports: default

// Module 11929 (useConjureProjectLinkEmbeds)
import conjureProjectLinkCard2 from "conjureProjectLinkCard" /* 11931 */;
import loadConjureSharedProjectDefault from "loadConjureSharedProject" /* 11936 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4824 */;
import ApplicationStore from "ApplicationStore" /* 2165 */;
import ChannelStore from "ChannelStore" /* 4672 */;
import GuildMemberStore from "GuildMemberStore" /* 4735 */;
import PermissionStore from "PermissionStore" /* 4755 */;
import UserStore from "UserStore" /* 1388 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6529 */;
import ConjureSharedProjectStore from "ConjureSharedProjectStore" /* 11930 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, currentUser, map, set;

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
        if (type === channelId(memo1[9]).CodedLinkType.CONJURE_PROJECT) {
          let tmp2Result = tmp2(tmp3[10]);
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
  const items6 = [channelId, ConjureSharedProjectStore, stateFromStores1, ConjureProjectStore, UserStore, , , , ];
  const useStateFromStoresObject = tmp6.useStateFromStoresObject;
  items6[5] = require("ApexExperiment").ApexExperimentStore;
  items6[6] = memo2;
  items6[7] = GuildMemberStore;
  items6[8] = PermissionStore;
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
      const iter = memo1[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        ({ applicationId, ticket } = nextResult);
        let tmp6 = loadConjureSharedProjectDefault(applicationId, ticket);
        let tmp7 = require;
        let obj = conjureProjectLinkCard2;
        let conjureProjectLinkCard = obj.readConjureProjectLinkCard(applicationId, ticket, memo2);
        let tmp10 = conjureProjectLinkCard;
        let type;
        if (conjureProjectLinkCard != null) {
          type = conjureProjectLinkCard.type;
        }
        let tmp12 = "ready" === type;
        if (tmp12) {
          tmp12 = null == tmp10.creator;
        }
        if (tmp12) {
          let tmp7Result = tmp7(11937);
          let messageAuthor = tmp7Result.requestMessageAuthor(tmp10.ownerId);
        }
        continue;
      }
    }
  }, items8);
  return stateFromStoresObject;
};
