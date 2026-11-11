// Module ID: 12349
// Function ID: 12350
// Name: useConjureProjectLinkEmbeds
// Dependencies: [19, 2162, 5092, 5175, 1385, 6954, 12350, 5992, 12351, 504, 1449, 12352, 12356, 12357, 2]
// Exports: default

// Module 12349 (useConjureProjectLinkEmbeds)
import conjureProjectLinkCard2 from "conjureProjectLinkCard" /* 12352 */;
import loadConjureSharedProjectDefault from "loadConjureSharedProject" /* 12356 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2162 */;
import ChannelStore from "ChannelStore" /* 5092 */;
import PermissionStore from "PermissionStore" /* 5175 */;
import UserStore from "UserStore" /* 1385 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6954 */;
import ConjureSharedProjectStore from "ConjureSharedProjectStore" /* 12350 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, currentUser, map, set;

let result = size.fileFinishedImporting("modules/conjure/share/native/useConjureProjectLinkEmbeds.tsx");

export default function useConjureProjectLinkEmbeds(channelId) {
  let stateFromStores;
  let stateFromStores1;
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
        if (type === channelId(memo1[7]).CodedLinkType.CONJURE_PROJECT) {
          let tmp2Result = tmp2(tmp3[8]);
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
  const items3 = [stateFromStores1];
  const items4 = [channelId];
  stateFromStores1 = obj2.useStateFromStores(items3, () => {
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
  const memo2 = stateFromStores.useMemo(() => ({ guildId: stateFromStores1, channelId }), items5);
  let tmp6 = require("get initialized");
  const items6 = [ConjureSharedProjectStore, channelId, ConjureProjectStore, UserStore, , , ];
  const useStateFromStoresObject = tmp6.useStateFromStoresObject;
  items6[4] = require("ApexExperiment").ApexExperimentStore;
  items6[5] = stateFromStores1;
  items6[6] = memo2;
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
          tmp12 = null == tmp10.creatorName;
        }
        if (tmp12) {
          let tmp7Result = tmp7(12357);
          let messageAuthor = tmp7Result.requestMessageAuthor(tmp10.ownerId);
        }
        continue;
      }
    }
  }, items8);
  return stateFromStoresObject;
};
