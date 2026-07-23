// Module ID: 12632
// Function ID: 98158
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 664, 21, 3754, 566, 686, 2]

// Module 12632 (_isNativeReflectConstruct)
import DISCORD_EPOCH from "DISCORD_EPOCH";
import sortedInsert from "sortedInsert";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function makeProductListingGuildIndex(guildId) {
  return "guild:" + guildId;
}
function makeProductListingGuildPublishedIndex(guild_id) {
  return "guild:" + guild_id + ":published";
}
let obj = { NOT_FETCHED: 0, [0]: "NOT_FETCHED", FETCHING: 1, [1]: "FETCHING", FETCHED: 2, [2]: "FETCHED" };
let closure_8 = {};
let closure_9 = {};
let closure_10 = {};
let closure_11 = 10 * require("set").Millis.MINUTE;
const secondaryIndexMap = new require("sortedInsert").SecondaryIndexMap((guild_id) => {
  const items = [makeProductListingGuildIndex(guild_id.guild_id)];
  if (guild_id.published) {
    items.push(makeProductListingGuildPublishedIndex(guild_id.guild_id));
  }
  return items;
}, (id) => {
  const extractTimestampResult = importDefault(21).extractTimestamp(id.id);
  if (id.published) {
    let diff = -extractTimestampResult;
  } else {
    diff = 1000000000000 - extractTimestampResult;
  }
  return diff;
});
let closure_13 = [];
let tmp3 = ((Store) => {
  class GuildProductsStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, GuildProductsStore);
      obj = outer1_5(GuildProductsStore);
      tmp2 = outer1_4;
      if (outer1_14()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(GuildProductsStore, Store);
  let obj = {
    key: "getGuildProductsForGuildFetchState",
    value(arg0) {
      let NOT_FETCHED = outer1_8[arg0];
      if (null == NOT_FETCHED) {
        NOT_FETCHED = outer1_7.NOT_FETCHED;
      }
      return NOT_FETCHED;
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getGuildProduct",
    value(arg0) {
      return outer1_12.get(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "getGuildProductsForGuild",
    value(arg0, arg1) {
      if (null == arg0) {
        let values = outer1_13;
      } else {
        if (tmp) {
          let tmp4 = outer1_16(arg0);
        } else {
          tmp4 = outer1_15(arg0);
        }
        values = outer1_12.values(tmp4);
      }
      return values;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getGuildProductFetchState",
    value(arg0) {
      let NOT_FETCHED = outer1_9[arg0];
      if (null == NOT_FETCHED) {
        NOT_FETCHED = outer1_7.NOT_FETCHED;
      }
      return NOT_FETCHED;
    }
  };
  items[4] = {
    key: "isGuildProductsCacheExpired",
    value(arg0) {
      let num = 0;
      const timestamp = Date.now();
      if (null != outer1_10[arg0]) {
        num = tmp2;
      }
      return timestamp - num > outer1_11;
    }
  };
  return callback(GuildProductsStore, items);
})(require("initialize").Store);
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
    const items = [...secondaryIndexMap.values(makeProductListingGuildIndex(guildId))];
    const item = items.forEach((id) => {
      outer1_12.delete(id.id);
    });
  },
  GUILD_PRODUCTS_FETCH_SUCCESS: function handleFetchProductsSuccess(arg0) {
    let guildId;
    let products;
    ({ guildId, products } = arg0);
    closure_8[guildId] = obj.FETCHED;
    closure_10[guildId] = Date.now();
    const item = products.forEach((id) => {
      const result = outer1_12.set(id.id, id);
      outer1_9[id.id] = outer1_7.FETCHED;
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
tmp3 = new tmp3(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/guild_products/GuildProductsStore.tsx");

export default tmp3;
export const FetchState = obj;
