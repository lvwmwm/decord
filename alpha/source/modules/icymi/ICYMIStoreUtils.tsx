// Module ID: 19123
// Function ID: 19124
// Name: ICYMIStoreUtils
// Dependencies: [5, 6309, 10136, 19124, 10147, 10141, 504, 2]
// Exports: getViewableFeedItemsArray, hydrateNextPage, useGravityMessage, useGravityMessageItem, useICYMIMessage

// Module 19123 (ICYMIStoreUtils)
import ICYMIItemTypes from "ICYMIItemTypes" /* 19124 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import MessageStore from "MessageStore" /* 6309 */;
import ICYMIStore from "ICYMIStore" /* 10136 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c0, c1, dependencyMap;

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
        return { value: "HermesInternal", done: null };
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
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp5) {
        c0 = 3;
        throw tmp5;
      }
    }
  });
  return obj(...arguments);
};
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
  dependencyMap = reply_message_id;
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
