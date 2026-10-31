// Module ID: 8742
// Function ID: 8743
// Name: useShopProductItems
// Dependencies: [19, 1987, 2]
// Exports: getProductItems, getPurchasedItem, useShopProductItems

// Module 8742 (useShopProductItems)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let map;

class ItemsSortingHat {
  constructor(items) {
    const obj = Object.create(new.target.prototype);
    obj.itemsByTypes = obj.sortByTypes(items);
    return obj;
  }
  getFirstItemByType(AVATAR_DECORATION) {
    const itemsByTypes = this.itemsByTypes;
    let items = itemsByTypes.get(AVATAR_DECORATION);
    if (items == null) {
      items = [];
    }
    const first = items[0];
    return null != first ? first : undefined;
  }
  sortByTypes(items) {
    const reduce = items.reduce;
    map = new Map();
    return reduce((get, type) => {
      const value = get.get(type.type);
      if (null != value) {
        value.push(type);
      } else {
        const items = [type];
        const result = get.set(type.type, items);
      }
      return get;
    }, map);
  }
}
const prototype = ItemsSortingHat.prototype;
Object.defineProperty(prototype, "firstAvatarDecoration", {
  get: function firstAvatarDecoration() {
    return this.getFirstItemByType(require("CollectiblesItemType").CollectiblesItemType.AVATAR_DECORATION);
  },
  set: undefined
});
Object.defineProperty(prototype, "firstProfileEffect", {
  get: function firstProfileEffect() {
    return this.getFirstItemByType(require("CollectiblesItemType").CollectiblesItemType.PROFILE_EFFECT);
  },
  set: undefined
});
Object.defineProperty(prototype, "firstNameplate", {
  get: function firstNameplate() {
    return this.getFirstItemByType(require("CollectiblesItemType").CollectiblesItemType.NAMEPLATE);
  },
  set: undefined
});
Object.defineProperty(prototype, "firstProfileFrame", {
  get: function firstProfileFrame() {
    return this.getFirstItemByType(require("CollectiblesItemType").CollectiblesItemType.PROFILE_FRAME);
  },
  set: undefined
});
let result = size.fileFinishedImporting("modules/collectibles/hooks/useShopProductItems.tsx");

export { ItemsSortingHat };
export function getProductItems(product) {
  if (typeof ItemsSortingHat === "function") {
    const obj = Object.create(ItemsSortingHat.prototype);
    obj.itemsByTypes = obj.sortByTypes(tmp);
    const obj3 = { firstProfileEffect: null, firstAvatarDecoration: null, firstNameplate: null, firstProfileFrame: null };
    ({ firstProfileEffect: obj2.firstProfileEffect, firstAvatarDecoration: obj2.firstAvatarDecoration, firstNameplate: obj2.firstNameplate, firstProfileFrame: obj2.firstProfileFrame } = obj);
    return obj3;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
export function getPurchasedItem(arg0, firstAvatarDecoration) {
  let tmp;
  if (null != arg0) {
    const self = this;
    if (typeof ItemsSortingHat === "function") {
      const obj = Object.create(tmp2.prototype);
      obj.itemsByTypes = obj.sortByTypes(tmp3);
      const obj3 = { firstProfileEffect: null, firstAvatarDecoration: null, firstNameplate: null, firstProfileFrame: null };
      ({ firstProfileEffect: obj2.firstProfileEffect, firstAvatarDecoration: obj2.firstAvatarDecoration, firstNameplate: obj2.firstNameplate, firstProfileFrame: obj2.firstProfileFrame } = obj);
      tmp = obj3[firstAvatarDecoration];
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  return tmp;
}
export function useShopProductItems(product) {
  let closure_0 = product;
  const items = [product];
  return react.useMemo(() => {
    if (typeof ItemsSortingHat === "function") {
      const obj = Object.create(ItemsSortingHat.prototype);
      obj.itemsByTypes = obj.sortByTypes(tmp);
      const obj3 = { firstProfileEffect: null, firstAvatarDecoration: null, firstNameplate: null, firstProfileFrame: null };
      ({ firstProfileEffect: obj2.firstProfileEffect, firstAvatarDecoration: obj2.firstAvatarDecoration, firstNameplate: obj2.firstNameplate, firstProfileFrame: obj2.firstProfileFrame } = obj);
      return obj3;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }, items);
}
