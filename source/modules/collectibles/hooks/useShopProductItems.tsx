// Module ID: 8194
// Function ID: 64825
// Name: ItemsSortingHat
// Dependencies: []
// Exports: getBundleItemNames, useShopProductItems

// Module 8194 (ItemsSortingHat)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importAll(dependencyMap[2]);
const tmp2 = () => {
  class ItemsSortingHat {
    constructor(arg0) {
      tmp = closure_2(this, ItemsSortingHat);
      this.itemsByTypes = this.sortByTypes(arg0);
      return;
    }
  }
  const arg1 = ItemsSortingHat;
  let obj = {
    key: "firstAvatarDecoration",
    get() {
      return this.getFirstItemByType(ItemsSortingHat(closure_1[3]).CollectiblesItemType.AVATAR_DECORATION);
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "firstProfileEffect",
    get() {
      return this.getFirstItemByType(ItemsSortingHat(closure_1[3]).CollectiblesItemType.PROFILE_EFFECT);
    }
  };
  items[1] = obj;
  obj = {
    key: "firstNameplate",
    get() {
      return this.getFirstItemByType(ItemsSortingHat(closure_1[3]).CollectiblesItemType.NAMEPLATE);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "firstProfileFrame",
    get() {
      return this.getFirstItemByType(ItemsSortingHat(closure_1[3]).CollectiblesItemType.PROFILE_FRAME);
    }
  };
  items[4] = {
    key: "getFirstItemByType",
    value(arg0) {
      const itemsByTypes = this.itemsByTypes;
      let items = itemsByTypes.get(arg0);
      if (null == items) {
        items = [];
      }
      const first = items[0];
      return null != first ? first : undefined;
    }
  };
  items[5] = {
    key: "sortByTypes",
    value(arr) {
      return arr.reduce((get, type) => {
        const value = get.get(type.type);
        if (null != value) {
          value.push(type);
        } else {
          const items = [type];
          const result = get.set(type.type, items);
        }
        return get;
      }, new Map());
    }
  };
  return callback(ItemsSortingHat, items);
}();
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/collectibles/hooks/useShopProductItems.tsx");

export const ItemsSortingHat = tmp2;
export const useShopProductItems = function useShopProductItems(product) {
  const arg1 = product;
  const items = [product];
  return React.useMemo(() => {
    const tmp = new closure_5(arg0.items);
    return { firstProfileEffect: tmp.firstProfileEffect, firstAvatarDecoration: tmp.firstAvatarDecoration, firstNameplate: tmp.firstNameplate, firstProfileFrame: tmp.firstProfileFrame };
  }, items);
};
export const getBundleItemNames = function getBundleItemNames(bundledProducts) {
  const intl = arg1(dependencyMap[4]).intl;
  let stringResult = intl.string(arg1(dependencyMap[4]).t.7v0T9P);
  const intl2 = arg1(dependencyMap[4]).intl;
  let stringResult1 = intl2.string(arg1(dependencyMap[4]).t.wR5wOo);
  const intl3 = arg1(dependencyMap[4]).intl;
  const stringResult2 = intl3.string(arg1(dependencyMap[4]).t.x5CoXR);
  let tmp4 = stringResult;
  let tmp5 = stringResult1;
  let tmp6 = stringResult2;
  if (null != bundledProducts.bundledProducts) {
    if (bundledProducts.bundledProducts.length > 0) {
      const first = bundledProducts.bundledProducts[0];
      let name;
      if (null != first) {
        name = first.name;
      }
      stringResult = name;
    }
    if (bundledProducts.bundledProducts.length > 1) {
      let name1;
      if (null != bundledProducts.bundledProducts[1]) {
        name1 = tmp9.name;
      }
      stringResult1 = name1;
    }
    tmp4 = stringResult;
    tmp5 = stringResult1;
    tmp6 = stringResult2;
    if (bundledProducts.bundledProducts.length > 2) {
      let name2;
      if (null != bundledProducts.bundledProducts[2]) {
        name2 = tmp11.name;
      }
      tmp6 = name2;
      tmp4 = stringResult;
      tmp5 = stringResult1;
    }
  }
  const obj = { itemOneName: tmp4, itemTwoName: tmp5, itemThreeName: tmp6 };
  return obj;
};
