// Module ID: 12513
// Function ID: 95974
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12513 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function makeProductListingGuildIndex(guild_id) {
  return "guild:" + guild_id;
}
function makeProductListingGuildPublishedIndex(guild_id) {
  return "guild:" + guild_id + ":published";
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let obj = { NOT_FETCHED: 0, [0]: "NOT_FETCHED", FETCHING: 1, [1]: "FETCHING", FETCHED: 2, [2]: "FETCHED" };
let closure_8 = {};
let closure_9 = {};
let closure_10 = {};
let closure_11 = 10 * importDefault(dependencyMap[5]).Millis.MINUTE;
const secondaryIndexMap = new arg1(dependencyMap[7]).SecondaryIndexMap((guild_id) => {
  const items = [makeProductListingGuildIndex(guild_id.guild_id)];
  if (guild_id.published) {
    items.push(makeProductListingGuildPublishedIndex(guild_id.guild_id));
  }
  return items;
}, (id) => {
  const extractTimestampResult = importDefault(dependencyMap[6]).extractTimestamp(id.id);
  if (id.published) {
    let diff = -extractTimestampResult;
  } else {
    diff = 1000000000000 - extractTimestampResult;
  }
  return diff;
});
let closure_13 = [];
let tmp3 = (Store) => {
  class GuildProductsStore {
    constructor() {
      self = this;
      tmp = closure_2(this, GuildProductsStore);
      obj = closure_5(GuildProductsStore);
      tmp2 = closure_4;
      if (closure_14()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const importDefault = GuildProductsStore;
  callback2(GuildProductsStore, Store);
  let obj = {
    key: "getGuildProductsForGuildFetchState",
    value(arg0) {
      let NOT_FETCHED = closure_8[arg0];
      if (null == NOT_FETCHED) {
        NOT_FETCHED = constants.NOT_FETCHED;
      }
      return NOT_FETCHED;
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getGuildProduct",
    value(arg0) {
      return closure_12.get(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "getGuildProductsForGuild",
    value(arg0, arg1) {
      if (null == arg0) {
        let values = closure_13;
      } else {
        if (tmp) {
          let tmp4 = callback5(arg0);
        } else {
          tmp4 = callback4(arg0);
        }
        values = closure_12.values(tmp4);
      }
      return values;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getGuildProductFetchState",
    value(arg0) {
      let NOT_FETCHED = closure_9[arg0];
      if (null == NOT_FETCHED) {
        NOT_FETCHED = constants.NOT_FETCHED;
      }
      return NOT_FETCHED;
    }
  };
  items[4] = {
    key: "isGuildProductsCacheExpired",
    value(arg0) {
      let num = 0;
      const timestamp = Date.now();
      if (null != closure_10[arg0]) {
        num = tmp2;
      }
      return timestamp - num > closure_11;
    }
  };
  return callback(GuildProductsStore, items);
}(importDefault(dependencyMap[8]).Store);
tmp3.displayName = "GuildProductsStore";
obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    secondaryIndexMap.clear();
    let closure_8 = {};
    let closure_9 = {};
    let closure_10 = {};
  },
  GUILD_PRODUCTS_FETCH: function handleFetchGuildProducts(guildId) {
    guildId = guildId.guildId;
    closure_8[guildId] = obj.FETCHING;
    const items = [...closure_12.values(closure_15(guildId))];
    const item = items.forEach((id) => {
      set.delete(id.id);
    });
  },
  GUILD_PRODUCTS_FETCH_SUCCESS: function handleFetchProductsSuccess(arg0) {
    let guildId;
    let products;
    ({ guildId, products } = arg0);
    closure_8[guildId] = obj.FETCHED;
    closure_10[guildId] = Date.now();
    const item = products.forEach((id) => {
      const result = closure_12.set(id.id, id);
      closure_9[id.id] = constants.FETCHED;
    });
  },
  GUILD_PRODUCTS_FETCH_FAILURE: function handleFetchProductsFailure(guildId) {
    closure_8[guildId.guildId] = obj.FETCHED;
  },
  GUILD_PRODUCT_CREATE: function handleCreateProduct(product) {
    product = product.product;
    const result = secondaryIndexMap.set(product.id, product);
  },
  GUILD_PRODUCT_UPDATE: function handleUpdateProduct(product) {
    product = product.product;
    const result = secondaryIndexMap.set(product.id, product);
  },
  GUILD_PRODUCT_DELETE: function handleDeleteProduct(productId) {
    secondaryIndexMap.delete(productId.productId);
  },
  GUILD_PRODUCT_FETCH: function handleFetchGuildProduct(productId) {
    closure_9[productId.productId] = obj.FETCHING;
  },
  GUILD_PRODUCT_FETCH_SUCCESS: function handleFetchProductSuccess(product) {
    product = product.product;
    closure_9[product.id] = obj.FETCHED;
    const result = secondaryIndexMap.set(product.id, product);
  },
  GUILD_PRODUCT_FETCH_FAILURE: function handleFetchProductFailure(productId) {
    productId = productId.productId;
    closure_9[productId] = obj.FETCHED;
    if (404 === productId.error.status) {
      secondaryIndexMap.delete(productId);
    }
  }
};
tmp3 = new tmp3(importDefault(dependencyMap[9]), obj);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/guild_products/GuildProductsStore.tsx");

export default tmp3;
export const FetchState = obj;
