// Module ID: 8197
// Function ID: 64808
// Name: redeemGiftCode
// Dependencies: [5, 653, 6656, 7227, 686, 507, 675, 4029, 4337, 8198, 1934, 2]
// Exports: openGiftCodeRedeemModal, redeemGiftCode

// Module 8197 (redeemGiftCode)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";

let closure_4;
let closure_5;
const require = arg1;
function redeemGiftCode(arg0) {
  return _redeemGiftCode(...arguments);
}
async function _redeemGiftCode(arg0, arg1) {
  let iter = (function*(arg0) {
    let code;
    let onError;
    let onRedeemed;
    let options;
    ({ code, options } = arg0);
    if (options === undefined) {
      options = outer2_6;
    }
    ({ onRedeemed, onError } = arg0);
    yield undefined;
    let obj = outer2_0(outer2_2[2]);
    if (obj.getIsPaymentsBlocked()) {
      outer2_1(outer2_2[3])();
    } else {
      const channelId = options.channelId;
      let tmp3 = null;
      if (undefined !== channelId) {
        tmp3 = channelId;
      }
      const paymentSource = options.paymentSource;
      let tmp5 = null;
      if (undefined !== paymentSource) {
        tmp5 = paymentSource;
      }
      let obj1 = outer2_1(outer2_2[4]);
      obj = { type: "GIFT_CODE_REDEEM", code };
      obj1.dispatch(obj);
      const HTTP = outer2_0(outer2_2[5]).HTTP;
      obj = { url: outer2_4.GIFT_CODE_REDEEM(code) };
      obj1 = { channel_id: tmp3 };
      let id;
      if (null != tmp5) {
        id = tmp5.id;
      }
      obj1.payment_source_id = id;
      obj.body = obj1;
      obj.oldFormErrors = true;
      obj.rejectWithError = false;
      const tmp17 = yield HTTP.post(obj);
      const obj2 = { type: "GIFT_CODE_REDEEM_SUCCESS", code };
      outer2_1(outer2_2[4]).dispatch(obj2);
      const obj6 = outer2_1(outer2_2[4]);
      const obj3 = { type: "gift_accept" };
      outer2_1(outer2_2[6]).track(outer2_5.OPEN_MODAL, obj3);
      if (null != onRedeemed) {
        onRedeemed();
      }
      const obj4 = { code, entitlement: tmp17 };
      return obj4;
    }
  })();
  iter.next();
  return iter;
}
function openGiftCodeRedeemModal(code) {
  let obj = importDefault(4337);
  obj = { code };
  obj.pushLazy(require(1934) /* maybeLoadBundle */(8198, dependencyMap.paths), obj, "GIFT_CODE_REDEEM_MODAL_KEY");
}
({ Endpoints: closure_4, AnalyticEvents: closure_5 } = ME);
let closure_6 = Object.freeze({});
const result = require("items").fileFinishedImporting("actions/native/GiftCodeActionCreators.tsx");

export default { redeemGiftCode, openGiftCodeRedeemModal };
export { redeemGiftCode };
export { openGiftCodeRedeemModal };
