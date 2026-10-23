// Module ID: 15724
// Function ID: 15725
// Name: merged15
// Dependencies: [5, 6376, 1087, 15725, 15726, 9263, 9453, 10568, 15727, 7506, 15699, 2]

// Module 15724 (merged15)
import EntitlementActionCreatorsAll from "EntitlementActionCreators" /* 7506 */;
import RPCErrorDefault from "RPCError" /* 9263 */;
import validateTransportType from "validateTransportType" /* 15726 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import Constants_mod from "Constants" /* 6376 */;
import Constants_mod2 from "Constants" /* 1087 */;
import CONTEXT_MENU_ICON_NAMES_mod from "CONTEXT_MENU_ICON_NAMES" /* 15699 */;
import size from "module_2" /* 2 */;

let closure_3, subscription_plans;

let RPCCommands;
let RPC_AUTHENTICATED_SCOPE;
let RPC_LOCAL_SCOPE;
let RPC_SCOPE_CONFIG;
let hasOwnProperty;
let items;
let items1;
let items2;
let items3;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
function isRPCCompatibleSku(name) {
  return null != name.name && null != name.price;
}
function transformSku(id) {
  let release_date;
  obj = { id: id.id, name: id.name, type: id.type, price: id.price, application_id: id.application_id, flags: id.flags, release_date };
  release_date = id.release_date;
  if (release_date == null) {
    release_date = null;
  }
  return obj;
}
function getSubscriptionSkusViaListings() {
  return obj(...arguments);
}
let obj = function _getSubscriptionSkusViaListings() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let c4;
    let closure_2;
    let closure_1 = arg1;
    if (arg0 === 1) {
      throw arg1;
    }
    if (arg0 === 2) {
      return arg1;
    }
    let found = closure_1.filter((type) => type.type === constants2.SUBSCRIPTION_GROUP);
    await Promise.all(found.map((() => {
      closure_0 = closure_1_4(function*(arg0, value) {
        let obj3;
        closure_0 = arg0;
        if (c1 === 2) {
          c1 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c1 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c1 = 3;
                throw value;
              } else if (arg0 === 2) {
                c1 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                c2 = 1;
                c1 = 1;
                const obj5 = { value: obj3.fetchAllSubscriptionListingsDataForApplication(closure_0, closure_0.id), done: false };
                obj3 = closure_0(closure_2_3[3]);
                return obj5;
              }
            } else if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c1 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              c1 = 3;
              obj = { value, done: true };
              return obj;
            }
          } catch (tmp8) {
            c1 = 3;
            throw tmp8;
          }
        }
      });
      return function() {
        return closure_0(...arguments);
      };
    })()));
    if (arg0 === 1) {
      throw arg1;
    }
    if (arg0 === 2) {
      return arg1;
    }
    const tmp = arg1;
    const value = [];
    let item = tmp.forEach((subscription_listings) => {
      if (null == subscription_listings) {
        return null;
      } else {
        const prop = subscription_listings.subscription_listings;
        if (null == prop) {
          return null;
        } else {
          let item = prop.forEach((subscription_plans) => {
            closure_0 = subscription_plans;
            subscription_plans = subscription_plans.subscription_plans;
            const item = subscription_plans.forEach((sku_id) => {
              let obj2;
              let release_date;
              closure_0 = sku_id;
              const found = closure_2_1.find((id) => id.id === sku_id.sku_id);
              let name;
              if (found != null) {
                name = found.name;
              }
              if (null != name) {
                obj = { id: sku_id.sku_id, name: null, type: null, price: obj2, application_id: null, flags: null, release_date };
                ({ name: obj.name, type: obj.type } = found);
                obj2 = { amount: sku_id.price, currency: constants.USD };
                ({ application_id: obj.application_id, sku_flags: obj.flags } = closure_0);
                release_date = found.release_date;
                const push = navigation.push;
                if (release_date == null) {
                  release_date = null;
                }
                push(obj);
              }
            });
          });
        }
      }
    });
    return value;
  });
  return obj(...arguments);
};
function getSkusHandler() {
  return obj(...arguments);
}
obj = function _getSkusHandler() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_4;
    let socket = arg0;
    let c5 = 0;
    let c6 = 0;
    const iter = (async function(arg0, value) {
      let tmp69Result;
      let tmp69Result2;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let id;
          let tmp;
          let closure_5;
          let closure_6;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              socket = undefined;
              socket = socket.socket;
              id = undefined;
              closure_2 = undefined;
              closure_3 = undefined;
              tmp = undefined;
              closure_5 = undefined;
              closure_6 = undefined;
              c5 = 1;
              c6 = 1;
              return { value: "Reflect", done: true };
            }
          } else if (1 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              const obj17 = closure_132_0(closure_132_3[4]);
              const result = obj17.validateTransportType(socket.transport);
              id = socket.application.id;
              if (null == id) {
                const self = this;
                const self2 = this;
                const obj5 = { errorCode: closure_132_6.INVALID_COMMAND };
                const tmp40 = new closure_132_1(closure_132_3[5])(obj5, "No application.");
                throw tmp40;
              } else {
                const obj18 = closure_132_0(closure_132_3[6]);
                if (obj18.isTestModeForApplication(id)) {
                  c5 = 2;
                  c6 = 1;
                  const obj6 = { value: tmp69Result.fetchTestSKUsForApplication(id, false), done: false };
                  tmp69Result = closure_132_2(closure_132_3[7]);
                  return obj6;
                } else {
                  c5 = 3;
                  c6 = 1;
                  const obj7 = { value: tmp69Result2.fetchAllStoreListingsForApplication(id), done: false };
                  tmp69Result2 = closure_132_2(closure_132_3[8]);
                  return obj7;
                }
              }
            }
          } else if (2 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_2 = value;
              c5 = 4;
              c6 = 1;
              const obj9 = { value: closure_132_10(id, closure_2), done: false };
              return obj9;
            }
          } else if (3 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              tmp = value;
              const found = tmp.filter((sku) => sku.sku.type !== constants.SUBSCRIPTION_GROUP);
              closure_5 = found.map((sku) => sku.sku);
              c5 = 5;
              c6 = 1;
              const obj11 = { value: closure_132_10(id, tmp.map((sku) => sku.sku)), done: false };
              return obj11;
            }
          } else if (4 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_3 = value;
              closure_1 = 0;
              const found1 = closure_2.filter(closure_132_8);
              const items = [];
              const arraySpreadResult = HermesBuiltin.arraySpread(items, found1.map(closure_132_9), closure_1);
              closure_1 = HermesBuiltin.arraySpread(items, closure_3, arraySpreadResult);
              c6 = 3;
              return { value: items, done: true };
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            return { value, done: true };
          } else {
            closure_6 = value;
            closure_2 = 0;
            const found2 = closure_5.filter(closure_132_8);
            const items1 = [];
            const arraySpreadResult2 = HermesBuiltin.arraySpread(items1, found2.map(closure_132_9), closure_2);
            closure_2 = HermesBuiltin.arraySpread(items1, closure_6, arraySpreadResult2);
            c6 = 3;
            return { value: items1, done: true };
          }
        } catch (tmp43) {
          c6 = 3;
          throw tmp43;
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
function getEntitlementsHandler(socket) {
  socket = socket.socket;
  obj = validateTransportType;
  const result = obj.validateTransportType(socket.transport);
  const id = socket.application.id;
  if (null == id) {
    const self = this;
    const self2 = this;
    const obj3 = { errorCode: metroRequire.INVALID_COMMAND };
    const tmp7 = new RPCErrorDefault(obj3, "No application.");
    throw tmp7;
  } else {
    const obj2 = EntitlementActionCreatorsAll;
    return obj2.fetchUserEntitlementsForApplication(id);
  }
}
let Constants = Constants_mod2;
({ RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE, RPC_SCOPE_CONFIG } = Constants);
Constants = Constants_mod2;
({ CurrencyCodes: hasOwnProperty, RPCCommands, RPCErrors: metroRequire, SKUTypes: metroImportDefault } = Constants);
obj = { [RPCCommands.GET_SKUS]: obj2, [RPCCommands.GET_ENTITLEMENTS]: obj3 };
obj2 = { scope: { [RPC_SCOPE_CONFIG.ANY]: items }, handler: getSkusHandler };
items = [RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE];
obj3 = { scope: { [RPC_SCOPE_CONFIG.ANY]: items1 }, handler: getEntitlementsHandler };
items1 = [RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE];
const GET_SKUS_EMBEDDED = RPCCommands.GET_SKUS_EMBEDDED;
let CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
let obj4 = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items2 },
  handler(arg0) {
    let closure_0 = arg0;
    return (async () => {
      let c1;
      let c2;
      let value;
      value = { skus: await closure_1_12(value) };
      return value;
    })();
  }
};
items2 = [RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE];
obj[GET_SKUS_EMBEDDED] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.GET_SKUS_EMBEDDED, obj4);
const GET_ENTITLEMENTS_EMBEDDED = RPCCommands.GET_ENTITLEMENTS_EMBEDDED;
CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
let obj5 = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items3 },
  handler(arg0) {
    let closure_0 = arg0;
    return (async () => {
      let c1;
      let c2;
      let value;
      value = { entitlements: await closure_1_14(value) };
      return value;
    })();
  }
};
items3 = [RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE];
obj[GET_ENTITLEMENTS_EMBEDDED] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.GET_ENTITLEMENTS_EMBEDDED, obj5);
let result = size.fileFinishedImporting("modules/rpc/server/commands/store.tsx");

export default obj;
