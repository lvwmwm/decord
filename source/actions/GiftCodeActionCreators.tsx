// Module ID: 8195
// Function ID: 64789
// Name: resolveGiftCode
// Dependencies: [5, 4167, 6774, 6782, 653, 1851, 686, 4366, 5465, 6773, 4029, 507, 8196, 8197, 2]
// Exports: resolveGiftCode

// Module 8195 (resolveGiftCode)
import GuildFeatures from "GuildFeatures";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { isUnknownCollectiblesItemRecord as closure_6 } from "_isNativeReflectConstruct";
import ME from "ME";
import { PREMIUM_SUBSCRIPTION_APPLICATION as closure_10 } from "GuildFeatures";

let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function resolveGiftCode() {
  return _resolveGiftCode(...arguments);
}
async function _resolveGiftCode(arg0, arg1) {
  let iter = (function*(code) {
    let flag = arg1;
    let flag2 = arg2;
    if (flag === undefined) {
      flag = false;
    }
    if (flag2 === undefined) {
      flag2 = false;
    }
    yield undefined;
    let obj = outer2_1(outer2_2[6]);
    obj = { type: "GIFT_CODE_RESOLVE", code };
    obj.dispatch(obj);
    const tmp3 = yield outer2_0(outer2_2[7]).resolveGiftCode(code, flag, flag2);
    if (null != tmp3.application_id) {
      if (tmp4.application_id !== outer2_10) {
        if (null == outer2_4.getApplication(tmp4.application_id)) {
          yield outer2_1(outer2_2[8]).fetchApplication(tmp4.application_id);
          const obj4 = outer2_1(outer2_2[8]);
        }
      }
    }
    while (true) {
      let tmp13 = tmp3;
      let tmp14 = outer2_7;
      if (tmp4.application_id !== outer2_7) {
        break;
      } else {
        let tmp15 = outer2_0;
        let tmp16 = outer2_2;
        let num2 = 9;
        let obj5 = outer2_0(outer2_2[9]);
        let tmp17 = tmp3;
        let tmp18 = yield obj5.fetchCollectiblesProduct(tmp4.sku_id);
        let tmp19 = outer2_5;
        let tmp20 = tmp3;
        let product = outer2_5.getProduct(tmp4.sku_id);
        let tmp22 = product;
        let someResult;
        if (null != product) {
          let items = product.items;
          let tmp24 = outer2_6;
          someResult = items.some(outer2_6);
        }
        let flag3 = true;
        if (true !== someResult) {
          break;
        } else {
          let tmp28 = outer2_0;
          let tmp29 = outer2_2;
          let num3 = 10;
          let ClientOutdatedAcceptGiftError = outer2_0(outer2_2[10]).ClientOutdatedAcceptGiftError;
          let prototype = ClientOutdatedAcceptGiftError.prototype;
          let tmp30 = new.target;
          let str2 = "Client update required to redeem this gift";
          let tmp31 = new.target;
          let clientOutdatedAcceptGiftError = new ClientOutdatedAcceptGiftError("Client update required to redeem this gift");
          let tmp33 = clientOutdatedAcceptGiftError;
          throw clientOutdatedAcceptGiftError;
        }
      }
      let tmp25 = outer2_1;
      let tmp26 = outer2_2;
      let obj6 = outer2_1(outer2_2[6]);
      obj = {};
      let str = "GIFT_CODE_RESOLVE_SUCCESS";
      obj.type = "GIFT_CODE_RESOLVE_SUCCESS";
      obj.giftCode = tmp3;
      let dispatchResult1 = obj6.dispatch(obj);
      let obj1 = { giftCode: tmp3 };
      return obj1;
    }
  })();
  iter.next();
  return iter;
}
({ COLLECTIBLES_APPLICATION_ID: closure_7, Endpoints: closure_8, RPCCommands: closure_9 } = ME);
const merged = Object.assign(require("redeemGiftCode").default);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("actions/GiftCodeActionCreators.tsx");

export default {
  resolveGiftCode,
  fetchUserGiftCodesForSKU(skuId, subscriptionPlanId) {
    let tmp = subscriptionPlanId;
    let closure_0 = skuId;
    if (subscriptionPlanId === undefined) {
      tmp = null;
    }
    const importDefault = tmp;
    return callback(async () => {
      let obj = callback2(outer2_2[6]);
      obj = { type: "GIFT_CODES_FETCH", skuId: outer1_0, subscriptionPlanId: outer1_1 };
      obj.dispatch(obj);
      const HTTP = callback(outer2_2[11]).HTTP;
      obj = { url: outer2_8.USER_GIFT_CODES, query: obj1, oldFormErrors: true, rejectWithError: true };
      obj1 = { sku_id: outer1_0, subscription_plan_id: outer1_1 };
      const tmp2 = yield HTTP.get(obj);
      callback2(outer2_2[6]).dispatch({ type: "GIFT_CODES_FETCH_SUCCESS", giftCodes: tmp2.body, skuId: outer1_0, subscriptionPlanId: outer1_1 });
    })();
  },
  createGiftCode(skuId, subscriptionPlanId, giftStyle) {
    let tmp = subscriptionPlanId;
    let tmp2 = giftStyle;
    let closure_0 = skuId;
    if (subscriptionPlanId === undefined) {
      tmp = null;
    }
    const importDefault = tmp;
    if (tmp2 === undefined) {
      tmp2 = null;
    }
    const dependencyMap = tmp2;
    return callback(async () => {
      let obj = callback2(686);
      obj = { type: "GIFT_CODE_CREATE_START", skuId: outer1_0, subscriptionPlanId: outer1_1 };
      obj.dispatch(obj);
      const HTTP = callback(507).HTTP;
      obj = { url: outer2_8.USER_GIFT_CODE_CREATE, body: obj1, oldFormErrors: true, rejectWithError: true };
      const tmp2 = yield HTTP.post(obj);
      callback2(686).dispatch({ type: "GIFT_CODE_CREATE_SUCCESS", giftCode: tmp2.body });
      return tmp2.body;
    })();
  },
  revokeGiftCode(arg0) {
    let closure_0 = arg0;
    return callback(async () => {
      let obj = outer2_1(outer2_2[6]);
      obj = { type: "GIFT_CODE_REVOKE", code: outer1_0 };
      obj.dispatch(obj);
      const HTTP = callback(outer2_2[11]).HTTP;
      obj = { url: outer2_8.USER_GIFT_CODE_REVOKE(outer1_0), oldFormErrors: true, rejectWithError: true };
      yield HTTP.del(obj);
      outer2_1(outer2_2[6]).dispatch({ type: "GIFT_CODE_REVOKE_SUCCESS", code: outer1_0 });
    })();
  },
  openNativeGiftCodeModal(arg0) {
    importDefault(8196).openNativeAppModal(arg0, constants.GIFT_CODE_BROWSER);
  }
};
export { resolveGiftCode };
