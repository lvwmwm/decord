// Module ID: 11757
// Function ID: 11758
// Name: useSocialLayerStorefrontEmbedData
// Dependencies: [32, 5, 19, 7034, 7548, 11758, 5889, 11760, 11761, 11762, 504, 1380, 558, 7019, 11763, 11759, 2]
// Exports: collectSocialLayerStorefrontEmbedLinks, shouldRefreshSocialLayerStorefrontEmbed, useSocialLayerStorefrontEmbedData

// Module 11757 (useSocialLayerStorefrontEmbedData)
import GlobalUtils from "GlobalUtils" /* 1380 */;
import CodedLink from "CodedLink" /* 5889 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import SKUStore from "SKUStore" /* 7034 */;
import SocialLayerStorefrontStore from "SocialLayerStorefrontStore" /* 7548 */;
import SocialLayerStorefrontEmbedStore from "SocialLayerStorefrontEmbedStore" /* 11758 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c0, c1, closure_7, obj, set, storefront;

let index = { rows: {}, singleSkuIds: [], multiLinks: [] };
let closure_10 = { index, wishlistSkuIds: [], prices: {}, storefronts: {}, skus: {} };
let closure_11 = [];
let result = size.fileFinishedImporting("modules/slayer_storefront/native/useSocialLayerStorefrontEmbedData.tsx");

export function collectSocialLayerStorefrontEmbedLinks(arr) {
  let items1;
  let items2;
  let obj3;
  function readLinks(codedLinks) {
    items = [];
    const iter = codedLinks[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let type = nextResult.type;
      let tmp2 = type;
      let code = nextResult.code;
      let tmp3 = set;
      let tmp4 = set1;
      if (type === set(set1[6]).CodedLinkType.SOCIAL_LAYER_STOREFRONT) {
        let tmp3Result = tmp3(tmp4[7]);
        let result = tmp3Result.parseStorefrontCodedLink(code);
        if (null != result) {
          obj = { type: tmp2 };
          let push = items.push;
          let merged = Object.assign(tmp8);
          let arr = push(obj);
        }
      }
      continue;
    }
    return items;
  }
  const items = [];
  set = new Set();
  const rows = {};
  const set1 = new Set();
  const item = arr.forEach((codedLinks) => {
    let arr = readLinks(codedLinks.codedLinks);
    const iter = arr[Symbol.iterator]();
    while (iter !== undefined) {
      let skuIds = iter.next().skuIds;
      if (1 === skuIds.length) {
        let addResult = set1.add(tmp[0]);
      }
      continue;
    }
    const contentMessage = codedLinks.getContentMessage();
    if (contentMessage !== codedLinks) {
      arr = readLinks(contentMessage.codedLinks);
    }
    if (0 !== arr.length) {
      obj[codedLinks.id] = arr;
      for (const item10033 of arr) {
        let tmp10 = item10033;
        if (item10033.skuIds.length > 1) {
          let arr2 = items.push(tmp10);
        } else {
          let addResult1 = set.add(tmp10.skuIds[0]);
        }
        continue;
      }
    }
  });
  const obj2 = { index: obj3, legacySingleSkuIds: items2 };
  obj3 = { rows, singleSkuIds: items1, multiLinks: items };
  items1 = [...set];
  items2 = [...set1];
  return obj2;
}
export function useSocialLayerStorefrontEmbedData(stateFromStores) {
  let singleSkuIds;
  let stateFromStoresObject;
  let stateFromStoresObject1;
  _require = stateFromStores;
  obj = stateFromStoresObject;
  let items = [stateFromStores];
  const memo = stateFromStoresObject.useMemo(() => {
    let items1;
    let items2;
    let obj3;
    function readLinks(codedLinks) {
      items = [];
      const iter = codedLinks[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let type = nextResult.type;
        let tmp2 = type;
        let code = nextResult.code;
        let tmp3 = set;
        let tmp4 = set1;
        if (type === set(set1[6]).CodedLinkType.SOCIAL_LAYER_STOREFRONT) {
          let tmp3Result = tmp3(tmp4[7]);
          let result = tmp3Result.parseStorefrontCodedLink(code);
          if (null != result) {
            obj = { type: tmp2 };
            let push = items.push;
            let merged = Object.assign(tmp8);
            let arr = push(obj);
          }
        }
        continue;
      }
      return items;
    }
    set = new Set();
    let items = [];
    const set1 = new Set();
    const rows = {};
    const item = stateFromStores.forEach((codedLinks) => {
      let arr = readLinks(codedLinks.codedLinks);
      const iter = arr[Symbol.iterator]();
      while (iter !== undefined) {
        let skuIds = iter.next().skuIds;
        if (1 === skuIds.length) {
          let addResult = set1.add(tmp[0]);
        }
        continue;
      }
      const contentMessage = codedLinks.getContentMessage();
      if (contentMessage !== codedLinks) {
        arr = readLinks(contentMessage.codedLinks);
      }
      if (0 !== arr.length) {
        obj[codedLinks.id] = arr;
        for (const item10033 of arr) {
          let tmp10 = item10033;
          if (item10033.skuIds.length > 1) {
            let arr2 = items.push(tmp10);
          } else {
            let addResult1 = set.add(tmp10.skuIds[0]);
          }
          continue;
        }
      }
    });
    const obj2 = { index: obj3, legacySingleSkuIds: items2 };
    obj3 = { rows, singleSkuIds: items1, multiLinks: items };
    items1 = [...set];
    items2 = [...set1];
    return obj2;
  }, items);
  let isEligibleForSocialLayerStorefrontMobileEmbed = memo.index.singleSkuIds.length > 0 || memo.index.multiLinks.length > 0 || memo.legacySingleSkuIds.length > 0;
  if (isEligibleForSocialLayerStorefrontMobileEmbed) {
    let tmp3 = _require;
    let tmp4 = isEligibleForSocialLayerStorefrontMobileEmbed;
    let obj2 = require("SocialLayerStorefrontMobileEmbedExperiment");
    isEligibleForSocialLayerStorefrontMobileEmbed = obj2.getIsEligibleForSocialLayerStorefrontMobileEmbed({ location: "create_coded_link_embeds" });
  }
  let isEligibleForSocialLayerStorefrontMobileMultiSkuEmbed = isEligibleForSocialLayerStorefrontMobileEmbed && memo.index.multiLinks.length > 0;
  if (isEligibleForSocialLayerStorefrontMobileMultiSkuEmbed) {
    let tmp6 = _require;
    const tmp7 = isEligibleForSocialLayerStorefrontMobileEmbed;
    let obj3 = require("SocialLayerStorefrontMobileMultiSkuEmbedExperiment");
    isEligibleForSocialLayerStorefrontMobileMultiSkuEmbed = obj3.getIsEligibleForSocialLayerStorefrontMobileMultiSkuEmbed({ location: "create_coded_link_embeds" });
  }
  let items1 = [memo, isEligibleForSocialLayerStorefrontMobileEmbed, isEligibleForSocialLayerStorefrontMobileMultiSkuEmbed];
  const memo1 = obj.useMemo(() => {
    let entries;
    let fromEntries;
    let tmp2;
    const tmp = isEligibleForSocialLayerStorefrontMobileEmbed;
    if (tmp) {
      const index = memo.index;
      if (isEligibleForSocialLayerStorefrontMobileMultiSkuEmbed) {
        obj = index;
      } else {
        obj = {
          singleSkuIds: index.singleSkuIds,
          multiLinks: obj.multiLinks,
          rows: fromEntries(entries.map((item) => {
                let arr;
                let tmp;
                [tmp, arr] = item;
                const items = [tmp, ];
                let found;
                if (arr != null) {
                  found = arr.filter((skuIds) => 1 === skuIds.skuIds.length);
                }
                items[1] = found;
                return items;
              }))
        };
        const _Object = Object;
        const _Object2 = Object;
        fromEntries = Object.fromEntries;
        entries = Object.entries(tmp4.index.rows);
      }
      tmp2 = obj;
    } else {
      tmp2 = obj;
    }
    return tmp2;
  }, items1);
  let tmp9 = _require;
  let tmp10 = isEligibleForSocialLayerStorefrontMobileEmbed;
  let obj4 = require("get initialized");
  let items2 = [closure_7];
  const items3 = [memo1.multiLinks];
  stateFromStoresObject = obj4.useStateFromStoresObject(items2, () => {
    const multiLinks = memo1.multiLinks;
    return Object.fromEntries(multiLinks.map((item) => {
      let scopeId;
      let type;
      ({ type, scopeId } = item);
      const items = ["" + type + ":" + scopeId, ];
      const getStorefrontFetchState = closure_1_7.getStorefrontFetchState;
      if (type === stateFromStores(isEligibleForSocialLayerStorefrontMobileEmbed[6]).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP) {
        obj = { type: "application", applicationId: scopeId };
        const obj2 = { type: "application", applicationId: scopeId };
      } else {
        obj = { type: "guild", guildId: scopeId };
      }
      items[1] = getStorefrontFetchState(obj);
      return items;
    }));
  }, items3);
  let obj5 = require("get initialized");
  const items4 = [stateFromStoresObject1];
  const items5 = [memo1.multiLinks];
  let tmp12 = stateFromStoresObject1;
  stateFromStoresObject1 = obj5.useStateFromStoresObject(items4, () => {
    const multiLinks = memo1.multiLinks;
    return Object.fromEntries(multiLinks.flatMap((skuIds) => {
      skuIds = skuIds.skuIds;
      return skuIds.map((item) => {
        const items = [item, closure_1_6.get(item)];
        return items;
      });
    }));
  }, items5);
  let tmp14 = isEligibleForSocialLayerStorefrontMobileEmbed ? memo1.singleSkuIds : memo.legacySingleSkuIds;
  closure_7 = tmp14;
  const items6 = [tmp12];
  const items7 = [tmp14];
  const tmp9Result = tmp9(tmp10[10]);
  const stateFromStoresArray = tmp9Result.useStateFromStoresArray(items6, () => {
    const f128069 = (applicationId) => applicationId.applicationId;
    const mapped = closure_7.map((item) => stateFromStoresObject1.get(item));
    const found = mapped.filter(GlobalUtils.isNotNullish);
    const items = [...new Set(found.map(f128069))];
    new Set(found.map(f128069));
    return items;
  }, items7);
  const items8 = [stateFromStoresArray, stateFromStoresObject, stateFromStoresObject1];
  const memo2 = obj.useMemo(() => {
    let items = [...stateFromStoresArray];
    const values = Object.values(stateFromStoresObject);
    const arraySpreadResult = HermesBuiltin.arraySpread(items, values.flatMap((storefront) => {
      let items1;
      storefront = undefined;
      if (storefront != null) {
        storefront = storefront.storefront;
      }
      if (null != storefront) {
        const items = [storefront.storefront.applicationId];
        items1 = items;
      } else {
        items1 = [];
      }
      return items1;
    }), tmp2);
    const values2 = Object.values(stateFromStoresObject1);
    HermesBuiltin.arraySpread(items, values2.flatMap((applicationId) => {
      let items1;
      if (null != applicationId) {
        const items = [applicationId.applicationId];
        items1 = items;
      } else {
        items1 = [];
      }
      return items1;
    }), arraySpreadResult);
    let items1 = [...new Set(items)];
    new Set(items);
    return items1;
  }, items8);
  const ref = obj.useRef(singleSkuIds);
  const items9 = [memo2];
  const effect = obj.useEffect(() => {
    function fetchApplications() {
      return obj(...arguments);
    }
    obj = function _fetchApplications() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let obj2;
        if (c0 === 2) {
          c0 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          let c2;
          try {
            c0 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c0 = 3;
                throw value;
              } else if (arg0 === 2) {
                c0 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                c2 = 1;
                c1 = 2;
                c0 = 1;
                const obj5 = { value: obj2.fetchApplications(closure_1_9, false), done: false };
                obj2 = memo(isEligibleForSocialLayerStorefrontMobileEmbed[13]);
                return obj5;
              }
            } else {
              if (1 === tmp3) {
                c2 = 0;
              } else if (arg0 === 1) {
                c0 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 0;
                c0 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                c2 = 0;
              }
              c0 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp7) {
            if (0 === c2) {
              c0 = 3;
              throw tmp7;
            } else {
              c1 = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    obj = stateFromStores(isEligibleForSocialLayerStorefrontMobileEmbed[12]);
    const tmp = ref;
    if (!obj.areArraysShallowEqual(memo2, ref.current)) {
      tmp.current = memo2;
      if (0 !== memo2.length) {
        const tmp2 = fetchApplications();
      }
    }
  }, items9);
  if (isEligibleForSocialLayerStorefrontMobileEmbed) {
    singleSkuIds = memo1.singleSkuIds;
  } else {
    singleSkuIds = memo2.singleSkuIds;
  }
  const tmp9Result5 = tmp9(tmp10[14]);
  const fetchSocialLayerStorefrontEmbedWishlist = tmp9Result5.useFetchSocialLayerStorefrontEmbedWishlist(singleSkuIds.length > 0);
  const tmp9Result6 = tmp9(tmp10[15]);
  const fetchSocialLayerStorefrontEmbedPrices = tmp9Result6.useFetchSocialLayerStorefrontEmbedPrices(singleSkuIds);
  const items10 = [singleSkuIds];
  const effect1 = obj.useEffect(() => SocialLayerStorefrontEmbedStore.watch(singleSkuIds), items10);
  const items11 = [stateFromStoresArray];
  const items12 = [singleSkuIds];
  const tmp9Result7 = tmp9(tmp10[10]);
  const stateFromStoresArray1 = tmp9Result7.useStateFromStoresArray(items11, () => {
    let wishlistSkuIds;
    if (singleSkuIds.length > 0) {
      wishlistSkuIds = SocialLayerStorefrontEmbedStore.getWishlistSkuIds();
    } else {
      wishlistSkuIds = ref.wishlistSkuIds;
    }
    return wishlistSkuIds;
  }, items12);
  const items13 = [stateFromStoresArray];
  const items14 = [singleSkuIds];
  const tmp9Result8 = tmp9(tmp10[10]);
  const stateFromStoresObject2 = tmp9Result8.useStateFromStoresObject(items13, () => {
    let price;
    return Object.fromEntries(singleSkuIds.map((item) => {
      const items = [item, price.getPrice(item)];
      return items;
    }));
  }, items14);
  const items15 = [isEligibleForSocialLayerStorefrontMobileEmbed, memo1, stateFromStoresArray1, stateFromStoresObject2, stateFromStoresObject, stateFromStoresObject1];
  return obj.useMemo(() => {
    let tmp2;
    const tmp = isEligibleForSocialLayerStorefrontMobileEmbed;
    if (tmp) {
      tmp2 = { index: memo1, wishlistSkuIds: stateFromStoresArray1, prices: stateFromStoresObject2, storefronts: stateFromStoresObject, skus: stateFromStoresObject1 };
      obj = { index: memo1, wishlistSkuIds: stateFromStoresArray1, prices: stateFromStoresObject2, storefronts: stateFromStoresObject, skus: stateFromStoresObject1 };
    } else {
      tmp2 = closure_10;
    }
    return tmp2;
  }, items15);
}
export function shouldRefreshSocialLayerStorefrontEmbed(codedLinks, socialLayerStorefrontEmbedData, socialLayerStorefrontEmbedData2, fetchingSkuIds, invalidApplicationIds) {
  let someResult;
  let items = fetchingSkuIds;
  if (fetchingSkuIds === undefined) {
    items = [];
  }
  let items1 = invalidApplicationIds;
  if (invalidApplicationIds === undefined) {
    items1 = [];
  }
  if (null != socialLayerStorefrontEmbedData2.index.rows[codedLinks.id]) {
    someResult = obj.some((skuIds) => {
      let prices;
      skuIds = skuIds.skuIds;
      socialLayerStorefrontEmbedData = tmp;
      const combined = "" + skuIds.type + ":" + skuIds.scopeId;
      let tmp3 = !tmp;
      if (skuIds.length > 1) {
        tmp3 = socialLayerStorefrontEmbedData.storefronts[combined] === socialLayerStorefrontEmbedData2.storefronts[combined];
      }
      let someResult = !tmp3;
      if (tmp3) {
        someResult = skuIds.some((item) => {
          let hasItem1;
          const value = SKUStore.get(item);
          if (prices) {
            hasItem1 = tmp2.skus[item] !== socialLayerStorefrontEmbedData2.skus[item];
          } else {
            const wishlistSkuIds = tmp2.wishlistSkuIds;
            const wishlistSkuIds2 = socialLayerStorefrontEmbedData2.wishlistSkuIds;
            const hasItem = wishlistSkuIds.includes(item);
            hasItem1 = hasItem !== wishlistSkuIds2.includes(item) || prices.prices[item] !== socialLayerStorefrontEmbedData2.prices[item];
          }
          if (!hasItem1) {
            hasItem1 = items.includes(item);
          }
          if (!hasItem1) {
            const hasItem2 = null != value && items1.includes(value.applicationId);
            hasItem1 = hasItem2;
          }
          return hasItem1;
        });
      }
      return someResult;
    });
  } else {
    someResult = 0 !== items.length || 0 !== items1.length;
    if (someResult) {
      codedLinks = codedLinks.codedLinks;
      someResult = codedLinks.some((item) => {
        let code;
        let type;
        ({ type, code } = item);
        if (type !== CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT) {
          if (type !== CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP) {
            return false;
          }
        }
        const first = _slicedToArray(code.split("-"), 1)[0];
        if (items.includes(first)) {
          return true;
        } else {
          const value = SKUStore.get(first);
          const hasItem = null != value && items1.includes(value.applicationId);
          return hasItem;
        }
      });
    }
  }
  return someResult;
}
