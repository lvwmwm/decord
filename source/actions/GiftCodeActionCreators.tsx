// Module ID: 8188
// Function ID: 64740
// Name: resolveGiftCode
// Dependencies: []
// Exports: resolveGiftCode

// Module 8188 (resolveGiftCode)
function resolveGiftCode() {
  return _resolveGiftCode(...arguments);
}
async function _resolveGiftCode(arg0, arg1) {
  const fn = function*(code) {
    let flag = arg1;
    let flag2 = arg2;
    if (flag === undefined) {
      flag = false;
    }
    if (flag2 === undefined) {
      flag2 = false;
    }
    yield undefined;
    let obj = callback2(closure_2[6]);
    obj = { type: "GIFT_CODE_RESOLVE", code };
    obj.dispatch(obj);
    const tmp3 = yield callback(closure_2[7]).resolveGiftCode(code, flag, flag2);
    if (null != tmp3.application_id) {
      if (tmp4.application_id !== closure_10) {
        if (null == application.getApplication(tmp4.application_id)) {
          yield callback2(closure_2[8]).fetchApplication(tmp4.application_id);
          const obj4 = callback2(closure_2[8]);
        }
      }
    }
    while (true) {
      let tmp13 = tmp3;
      let tmp14 = closure_7;
      if (tmp4.application_id !== closure_7) {
        break;
      } else {
        let tmp15 = callback;
        let tmp16 = closure_2;
        let num2 = 9;
        let obj5 = callback(closure_2[9]);
        let tmp17 = tmp3;
        let tmp18 = yield obj5.fetchCollectiblesProduct(tmp4.sku_id);
        let tmp19 = product;
        let tmp20 = tmp3;
        let product = product.getProduct(tmp4.sku_id);
        let tmp22 = product;
        let someResult;
        if (null != product) {
          let items = product.items;
          let tmp24 = closure_6;
          someResult = items.some(closure_6);
        }
        let flag3 = true;
        if (true !== someResult) {
          break;
        } else {
          let tmp28 = callback;
          let tmp29 = closure_2;
          let num3 = 10;
          let ClientOutdatedAcceptGiftError = callback(closure_2[10]).ClientOutdatedAcceptGiftError;
          let prototype = ClientOutdatedAcceptGiftError.prototype;
          let tmp30 = new.target;
          let str2 = "Client update required to redeem this gift";
          let tmp31 = new.target;
          let clientOutdatedAcceptGiftError = new ClientOutdatedAcceptGiftError("Client update required to redeem this gift");
          let tmp33 = clientOutdatedAcceptGiftError;
          throw clientOutdatedAcceptGiftError;
        }
      }
      let tmp25 = callback2;
      let tmp26 = closure_2;
      let obj6 = callback2(closure_2[6]);
      obj = {};
      let str = "GIFT_CODE_RESOLVE_SUCCESS";
      obj.type = "GIFT_CODE_RESOLVE_SUCCESS";
      obj.giftCode = tmp3;
      let dispatchResult1 = obj6.dispatch(obj);
      let obj1 = { giftCode: tmp3 };
      return obj1;
    }
  };
  fn.next();
  return fn;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = arg1(dependencyMap[3]).isUnknownCollectiblesItemRecord;
({ COLLECTIBLES_APPLICATION_ID: closure_7, Endpoints: closure_8, RPCCommands: closure_9 } = arg1(dependencyMap[4]));
let closure_10 = arg1(dependencyMap[5]).PREMIUM_SUBSCRIPTION_APPLICATION;
const merged = Object.assign(arg1(dependencyMap[13]).default);
const obj = {
  resolveGiftCode,
  fetchUserGiftCodesForSKU(skuId, subscriptionPlanId) {
    let tmp = subscriptionPlanId;
    subscriptionPlanId = skuId;
    if (subscriptionPlanId === undefined) {
      tmp = null;
    }
    const importDefault = tmp;
    return callback(async () => {
      let obj = callback2(closure_2[6]);
      obj = { type: "GIFT_CODES_FETCH", skuId: callback, subscriptionPlanId: callback2 };
      obj.dispatch(obj);
      const HTTP = callback(closure_2[11]).HTTP;
      obj = { url: constants.USER_GIFT_CODES, query: obj1, oldFormErrors: true, rejectWithError: true };
      const obj1 = { sku_id: callback, subscription_plan_id: callback2 };
      const tmp2 = yield HTTP.get(obj);
      callback2(closure_2[6]).dispatch({ type: "GIFT_CODES_FETCH_SUCCESS", giftCodes: tmp2.body, skuId: callback, subscriptionPlanId: callback2 });
    })();
  },
  createGiftCode(skuId, subscriptionPlanId, giftStyle) {
    let tmp = subscriptionPlanId;
    let tmp2 = giftStyle;
    subscriptionPlanId = skuId;
    if (subscriptionPlanId === undefined) {
      tmp = null;
    }
    const importDefault = tmp;
    if (tmp2 === undefined) {
      tmp2 = null;
    }
    const dependencyMap = tmp2;
    return callback(async () => {
      let obj = callback2(closure_2[6]);
      obj = { type: "GIFT_CODE_CREATE_START", skuId: callback, subscriptionPlanId: callback2 };
      obj.dispatch(obj);
      const HTTP = callback(closure_2[11]).HTTP;
      obj = { url: constants.USER_GIFT_CODE_CREATE, body: obj1, oldFormErrors: true, rejectWithError: true };
      const tmp2 = yield HTTP.post(obj);
      callback2(closure_2[6]).dispatch({ type: "GIFT_CODE_CREATE_SUCCESS", giftCode: tmp2.body });
      return tmp2.body;
    })();
  },
  revokeGiftCode(arg0) {
    const arg1 = arg0;
    return callback(async () => {
      let obj = callback2(closure_2[6]);
      obj = { type: "GIFT_CODE_REVOKE", code: callback };
      obj.dispatch(obj);
      const HTTP = callback(closure_2[11]).HTTP;
      obj = { disabled: null, accessibilityHint: null, legacyCompat_selected: null, url: closure_8.USER_GIFT_CODE_REVOKE(callback) };
      yield HTTP.del(obj);
      callback2(closure_2[6]).dispatch({ type: "GIFT_CODE_REVOKE_SUCCESS", code: callback });
    })();
  },
  openNativeGiftCodeModal(arg0) {
    importDefault(dependencyMap[12]).openNativeAppModal(arg0, constants.GIFT_CODE_BROWSER);
  }
};
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("actions/GiftCodeActionCreators.tsx");

export default obj;
export { resolveGiftCode };
