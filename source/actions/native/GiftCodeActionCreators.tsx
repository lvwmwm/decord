// Module ID: 8191
// Function ID: 64771
// Name: redeemGiftCode
// Dependencies: []
// Exports: openGiftCodeRedeemModal, redeemGiftCode

// Module 8191 (redeemGiftCode)
function redeemGiftCode(arg0) {
  return _redeemGiftCode(...arguments);
}
async function _redeemGiftCode(arg0, arg1) {
  const fn = function*(arg0) {
    let code;
    let onError;
    let onRedeemed;
    let options;
    ({ code, options } = arg0);
    if (options === undefined) {
      options = closure_6;
    }
    ({ onRedeemed, onError } = arg0);
    yield undefined;
    let obj = callback(closure_2[2]);
    if (obj.getIsPaymentsBlocked()) {
      callback2(closure_2[3])();
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
      let obj1 = callback2(closure_2[4]);
      obj = { type: "GIFT_CODE_REDEEM", code };
      obj1.dispatch(obj);
      const HTTP = callback(closure_2[5]).HTTP;
      obj = { url: closure_4.GIFT_CODE_REDEEM(code) };
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
      callback2(closure_2[4]).dispatch(obj2);
      const obj6 = callback2(closure_2[4]);
      const obj3 = { type: "gift_accept" };
      callback2(closure_2[6]).track(constants.OPEN_MODAL, obj3);
      if (null != onRedeemed) {
        onRedeemed();
      }
      const obj4 = { code, entitlement: tmp17 };
      return obj4;
    }
  };
  fn.next();
  return fn;
}
function openGiftCodeRedeemModal(code) {
  let obj = importDefault(dependencyMap[8]);
  obj = { code };
  obj.pushLazy(arg1(dependencyMap[10])(dependencyMap[9], dependencyMap.paths), obj, "GIFT_CODE_REDEEM_MODAL_KEY");
}
let closure_3 = importDefault(dependencyMap[0]);
({ Endpoints: closure_4, AnalyticEvents: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = Object.freeze({});
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("actions/native/GiftCodeActionCreators.tsx");

export default { redeemGiftCode, openGiftCodeRedeemModal };
export { redeemGiftCode };
export { openGiftCodeRedeemModal };
