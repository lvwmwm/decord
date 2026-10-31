// Module ID: 18518
// Function ID: 18519
// Name: ICYMIStoreUtils
// Dependencies: [5, 6061, 6842, 8906, 1072, 18519, 8923, 8919, 7279, 1994, 1072, 11, 8924, 504, 2]
// Exports: getViewableFeedItemsArray, hydrateNextPage, regenerateFeedAndClearReadStates, useGravityMessage, useGravityMessageItem, useICYMIMessage

// Module 18518 (ICYMIStoreUtils)
import Constants from "Constants" /* 1072 */;
import ICYMIItemTypes from "ICYMIItemTypes" /* 18519 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import MessageStore from "MessageStore" /* 6061 */;
import ReadStateStore from "ReadStateStore" /* 6842 */;
import ICYMIStore from "ICYMIStore" /* 8906 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c0, c1, c3, c4, constants;

let obj = function _hydrateNextPage() {
  obj = _asyncToGenerator(async (arg0, value) => {
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const unreadDisplayItems = ICYMIStore.getUnreadDisplayItems();
            const readDisplayItems = ICYMIStore.getReadDisplayItems();
            const nextIndexToHydrate = ICYMIStore.getNextIndexToHydrate();
            const tmp15 = require("ICYMIUtils");
            const items = [];
            const hydrateItems = tmp15.hydrateItems;
            HermesBuiltin.arraySpread(items, readDisplayItems, HermesBuiltin.arraySpread(items, unreadDisplayItems, 0));
            const sum = nextIndexToHydrate + require("ICYMITypes").ICYMI_PAGE_SIZE;
            c1 = 1;
            c0 = 1;
            const obj4 = { value: hydrateItems(items, nextIndexToHydrate, sum, ICYMIStore.getHydratedItems()), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c0 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp5) {
        c0 = 3;
        throw tmp5;
      }
    }
  });
  return obj(...arguments);
};
obj = function _regenerateFeedAndClearReadStates() {
  let paths;
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0;
    let closure_2;
    let obj12;
    let obj6;
    let obj9;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c4 = 2;
        const tmp4 = c3;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            constants = tmp;
            let closure_1 = tmp4;
            let ack;
            let AnalyticsObjectTypes;
            c3 = 1;
            c4 = 1;
            const obj5 = { value: require("asyncRequire")(paths[8], paths.paths), done: false };
            return obj5;
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            ack = value.ack;
            c3 = 2;
            c4 = 1;
            const obj8 = { value: closure_130_0(closure_130_2[9])(closure_130_2[10], closure_130_2.paths), done: false };
            return obj8;
          }
        } else if (2 === tmp4) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            AnalyticsObjectTypes = value.AnalyticsObjectTypes;
            const dehydratedItems = closure_130_6.getDehydratedItems();
            const item = dehydratedItems.forEach((type) => {
              let tmp2 = type.type === object(constants[7]).ICYMIItemTypes.MESSAGE && type.data.channel_type === constants.GUILD_ANNOUNCEMENT;
              if (tmp2) {
                obj = closure_1(constants[11]);
                tmp2 = obj.compare(closure_2_5.ackMessageId(type.data.channel_id), type.data.message_id) >= 0;
              }
              if (tmp2) {
                const channel_id = type.data.channel_id;
                const obj2 = { object, objectType: constants.ACK_SEMI_AUTOMATIC };
                const obj3 = closure_1(constants[11]);
                closure_1_1(channel_id, obj2, true, true, obj3.atPreviousMillisecond(type.data.message_id));
              }
            });
            c3 = 3;
            c4 = 1;
            const obj11 = { value: obj12.clearReadStates(), done: false };
            obj12 = closure_130_1(closure_130_2[12]);
            return obj11;
          }
        } else if (3 === tmp4) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj13 = { value, done: true };
            return obj13;
          } else {
            c3 = 4;
            c4 = 1;
            const obj14 = { value: obj9.fetchDehydrated({ isReloading: true, forceRefresh: true }), done: false };
            obj9 = closure_130_1(closure_130_2[12]);
            return obj14;
          }
        } else if (4 === tmp4) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj15 = { value, done: true };
            return obj15;
          } else {
            c3 = 5;
            c4 = 1;
            const obj16 = { value: obj6.reloadICYMITab(), done: false };
            obj6 = closure_130_1(closure_130_2[12]);
            return obj16;
          }
        } else if (5 === tmp4) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj17 = { value, done: true };
            return obj17;
          } else {
            let obj3 = closure_130_1(closure_130_2[12]);
            c3 = 6;
            c4 = 1;
            const obj18 = { value: obj3.getGuildChannelScores(), done: false };
            return obj18;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj19 = { value, done: true };
          return obj19;
        } else {
          obj = closure_130_1(closure_130_2[12]);
          const recommendedGuilds = obj.getRecommendedGuilds();
          c4 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp35) {
        c4 = 3;
        throw tmp35;
      }
    }
  });
  return obj(...arguments);
};
const ChannelTypes = Constants.ChannelTypes;
const result = size.fileFinishedImporting("modules/icymi/ICYMIStoreUtils.tsx");

export function getViewableFeedItemsArray(viewableItems) {
  let tmp3;
  const items = [...ICYMIStore.getUnreadDisplayItems(), ...ICYMIStore.getReadDisplayItems()];
  let id = null;
  let diff = viewableItems.length - 1;
  let tmp2 = null;
  if (0 <= diff) {
    while (true) {
      tmp3 = viewableItems[diff];
      if (null != tmp3) {
        let NON_ELIGIBLE_SCROLL_ITEMS = ICYMIItemTypes.NON_ELIGIBLE_SCROLL_ITEMS;
        if (!NON_ELIGIBLE_SCROLL_ITEMS.has(tmp3.item.data.kind)) {
          break;
        }
      }
      diff = diff - 1;
      tmp2 = null;
    }
    id = tmp3.item.id;
    tmp2 = id;
  }
  if (null == tmp2) {
    return [];
  } else {
    let items1;
    const findIndexResult = items.findIndex((id) => id.id === id);
    if (findIndexResult < 0) {
      items1 = [];
    } else {
      items1 = items.slice(0, findIndexResult + 1);
    }
    return items1;
  }
}
export function hydrateNextPage() {
  return obj(...arguments);
}
export function regenerateFeedAndClearReadStates() {
  return obj(...arguments);
}
export function useGravityMessage(message) {
  _require = message;
  const items = [MessageStore, ICYMIStore];
  const items1 = [message];
  obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    message = MessageStore.getMessage(message.getChannelId(), message.id);
    if (message == null) {
      const hydratedItem = ICYMIStore.getHydratedItem(tmp.id);
      let message1;
      if (hydratedItem != null) {
        message1 = hydratedItem.message;
      }
      message = message1;
    }
    if (message == null) {
      message = tmp;
    }
    return message;
  }, items1);
}
export function useGravityMessageItem(id) {
  _require = id;
  const items = [ICYMIStore];
  const items1 = [id.id];
  obj = require("get initialized");
  return obj.useStateFromStores(items, () => ICYMIStore.getHydratedItem(id.id), items1);
}
export function useICYMIMessage(id, reply_message_id) {
  _require = id;
  let closure_1 = reply_message_id;
  const items = [MessageStore, ICYMIStore];
  const items1 = [id, reply_message_id];
  obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let tmp2 = null;
    if (null != reply_message_id) {
      let message = MessageStore.getMessage(id, tmp);
      if (message == null) {
        const hydratedItem = ICYMIStore.getHydratedItem(tmp);
        let message1;
        if (hydratedItem != null) {
          message1 = hydratedItem.message;
        }
        message = message1;
      }
      tmp2 = message;
    }
    return tmp2;
  }, items1);
}
