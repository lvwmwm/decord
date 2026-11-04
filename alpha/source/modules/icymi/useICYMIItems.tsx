// Module ID: 18819
// Function ID: 18820
// Name: useICYMIItems
// Dependencies: [19, 9047, 9060, 9068, 504, 9065, 2]
// Exports: default

// Module 18819 (useICYMIItems)
import ICYMITypes from "ICYMITypes" /* 9060 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 9065 */;
import react from "react" /* 19 */;
import ICYMIStore from "ICYMIStore" /* 9047 */;
import size from "module_2" /* 2 */;

function createItem(id, type, unread, arg3, fn) {
  let obj3;
  let obj5;
  let obj9;
  type = type.type;
  if (ICYMITypes.ICYMIItemTypes.MESSAGE === type) {
    if (type.message.id === type.message.channel_id) {
      let obj4;
      if (null != type.threadChannel) {
        const _Date6 = Date;
        const obj2 = { id: id.id, timestamp: Date.now(), channelType: id.data.channel_type, data: obj3, score: id.score, debugScore: JSON.stringify(id.score_components), unread };
        obj3 = { kind: "forumThread", message: null, threadChannel: null };
        ({ message: obj11.message, threadChannel: obj11.threadChannel } = type);
        const _JSON6 = JSON;
        obj4 = obj2;
      }
      return obj4;
    }
    obj4 = { id: id.id, timestamp: Date.now(), channelType: id.data.channel_type, data: obj5, score: id.score, debugScore: JSON.stringify(id.score_components), unread };
    const _Date5 = Date;
    const _JSON5 = JSON;
    obj5 = { kind: "message", message: type.message, mentioned: id.data.has_mention, messageContext: id.data.message_context };
  } else {
    if (ICYMITypes.ICYMIItemTypes.ACTIVITY !== type) {
      if (ICYMITypes.ICYMIItemTypes.CUSTOM_STATUS !== type) {
        if (ICYMITypes.ICYMIItemTypes.GUILD_EVENT === type) {
          const _Date3 = Date;
          const obj6 = { id: id.id, timestamp: Date.now(), data: obj7, score: id.score, debugScore: JSON.stringify(id.score_components), unread };
          const _JSON3 = JSON;
          return obj6;
        } else if (ICYMITypes.ICYMIItemTypes.RECOMMENDED_GUILDS === type) {
          const _Date2 = Date;
          const _JSON2 = JSON;
          const obj8 = { id: id.id, timestamp: Date.now(), data: { kind: "recommendedGuilds" }, score: id.score, debugScore: JSON.stringify(id.score_components), unread };
          return obj8;
        } else if (ICYMITypes.ICYMIItemTypes.DISCOVER_ITEM === type) {
          let tmp6 = null;
          if (arg3) {
            let tmp8;
            if (fn != null) {
              tmp8 = fn(type.card);
            }
            tmp6 = null;
            if (false !== tmp8) {
              const _Date = Date;
              const obj = { id: id.id, timestamp: Date.now(), data: obj9, score: id.score, debugScore: JSON.stringify(id.score_components), unread };
              const _JSON = JSON;
              tmp6 = obj;
              obj9 = { kind: "waterwheelsItem", card: type.card };
            }
          }
          return tmp6;
        } else {
          return null;
        }
      }
    }
    const _Date4 = Date;
    const obj10 = { id: id.id, timestamp: Date.now(), data: obj21, score: id.score, debugScore: JSON.stringify(id.score_components), unread };
    const _JSON4 = JSON;
    return obj10;
  }
}
const result = size.fileFinishedImporting("modules/icymi/useICYMIItems.tsx");

export default function useICYMIItems() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const isWaterwheelsCardEligible = obj.isWaterwheelsCardEligible;
  let stateFromStores1;
  const obj2 = stateFromStores1(9068);
  const waterwheelsDiscoverEnabled = obj2.useWaterwheelsDiscoverEnabled("icymi_items");
  const items = [ICYMIStore];
  const obj3 = stateFromStores1(504);
  const stateFromStores = obj3.useStateFromStores(items, () => ICYMIStore.getUnreadDisplayItems());
  const items1 = [ICYMIStore];
  const obj4 = stateFromStores1(504);
  stateFromStores1 = obj4.useStateFromStores(items1, () => ICYMIStore.getReadDisplayItems());
  const items2 = [ICYMIStore];
  const obj5 = stateFromStores1(504);
  const stateFromStores2 = obj5.useStateFromStores(items2, () => ICYMIStore.getNextIndexToHydrate());
  const items3 = [ICYMIStore];
  const obj6 = stateFromStores1(504);
  const stateFromStoresObject = obj6.useStateFromStoresObject(items3, () => ICYMIStore.getHydratedItems());
  const items4 = [ICYMIStore];
  const obj7 = stateFromStores1(504);
  const stateFromStores3 = obj7.useStateFromStores(items4, () => ICYMIStore.getMissingItems());
  const items5 = [stateFromStores1];
  const effect = react.useEffect(() => {
    let closure_0 = Date.now() + stateFromStores1.length;
    let obj = ICYMIActionCreatorsDefault;
    obj.ackGravityItems(stateFromStores1.map((id) => {
      const obj = { id: id.id, timestamp: +closure_0 };
      closure_0 = tmp - 1;
      return obj;
    }, true));
  }, items5);
  const items6 = [];
  let num = 0;
  if (0 < stateFromStores.length) {
    let num3 = 0;
    let num4 = 0;
    num = 0;
    if (0 < stateFromStores2) {
      while (true) {
        let tmp7 = stateFromStores[num3];
        if (!stateFromStores3[tmp7.id]) {
          let tmp10 = stateFromStoresObject[tmp7.id];
          let tmp11 = null == tmp10;
          if (tmp11) {
            tmp11 = tmp7.type === stateFromStores1(9060).ICYMIItemTypes.MESSAGE;
          }
          if (tmp11) {
            let message_context = tmp7.data.message_context;
            let reference_message_id;
            if (message_context != null) {
              reference_message_id = message_context.reference_message_id;
            }
            tmp11 = null != reference_message_id;
          }
          if (tmp11) {
            tmp10 = stateFromStoresObject[tmp7.data.message_id];
          }
          if (null != tmp10) {
            let flag = true;
            let tmp20 = createItem(tmp7, tmp10, true, waterwheelsDiscoverEnabled, isWaterwheelsCardEligible);
            if (null != tmp20) {
              let arr = items6.push(tmp20);
            }
          }
        }
        let sum = num4 + 1;
        let sum1 = num3 + 1;
        num = sum;
        if (sum1 >= stateFromStores.length) {
          break;
        } else {
          num3 = sum1;
          num4 = sum;
          num = sum;
          if (sum >= stateFromStores2) {
            break;
          }
        }
      }
    }
  }
  const items7 = [];
  if (0 < stateFromStores1.length) {
    let num7 = 0;
    if (num < stateFromStores2) {
      while (true) {
        let tmp24 = stateFromStores1[num7];
        if (!stateFromStores3[tmp24.id]) {
          let tmp27 = stateFromStoresObject[tmp24.id];
          let tmp28 = null == tmp27;
          if (tmp28) {
            tmp28 = tmp24.type === stateFromStores1(9060).ICYMIItemTypes.MESSAGE;
          }
          if (tmp28) {
            let message_context2 = tmp24.data.message_context;
            let reference_message_id1;
            if (message_context2 != null) {
              reference_message_id1 = message_context2.reference_message_id;
            }
            tmp28 = null != reference_message_id1;
          }
          if (tmp28) {
            tmp27 = stateFromStoresObject[tmp24.data.message_id];
          }
          if (null != tmp27) {
            let flag2 = false;
            let tmp37 = createItem(tmp24, tmp27, false, waterwheelsDiscoverEnabled, isWaterwheelsCardEligible);
            if (null != tmp37) {
              let arr2 = items7.push(tmp37);
            }
          }
        }
        let sum2 = num7 + 1;
        if (sum2 >= stateFromStores1.length) {
          break;
        } else {
          num = num + 1;
          num7 = sum2;
          if (num >= stateFromStores2) {
            break;
          }
        }
      }
    }
  }
  return { unreadItems: items6, readItems: items7, allUnreadItemsHydrated: stateFromStores2 >= stateFromStores.length };
};
