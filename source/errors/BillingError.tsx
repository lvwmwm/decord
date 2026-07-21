// Module ID: 3796
// Function ID: 31076
// Name: _isNativeReflectConstruct
// Dependencies: [3808, 566, 2, 6, 7, 15, 17, 18, 3809]
// Exports: parseV8BillingAddressSkemaErrorToBillingError

// Module 3796 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import initialize from "initialize";
import result2 from "result2";
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import tmp4 from "_inherits";
import getCountryCodeByCountryName from "getCountryCodeByCountryName";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let obj = { UNKNOWN: 0, [0]: "UNKNOWN", UNKNOWN_BILLING_PROFILE: 100001, [100001]: "UNKNOWN_BILLING_PROFILE", UNKNOWN_PAYMENT_SOURCE: 100002, [100002]: "UNKNOWN_PAYMENT_SOURCE", UNKNOWN_SUBSCRIPTION: 100003, [100003]: "UNKNOWN_SUBSCRIPTION", ALREADY_SUBSCRIBED: 100004, [100004]: "ALREADY_SUBSCRIBED", INVALID_PLAN: 100005, [100005]: "INVALID_PLAN", PAYMENT_SOURCE_REQUIRED: 100006, [100006]: "PAYMENT_SOURCE_REQUIRED", ALREADY_CANCELED: 100007, [100007]: "ALREADY_CANCELED", INVALID_PAYMENT: 100008, [100008]: "INVALID_PAYMENT", ALREADY_REFUNDED: 100009, [100009]: "ALREADY_REFUNDED", INVALID_BILLING_ADDRESS: 100010, [100010]: "INVALID_BILLING_ADDRESS", ALREADY_PURCHASED: 100011, [100011]: "ALREADY_PURCHASED", DUPLICATE_PURCHASE_ATTEMPT: 100012, [100012]: "DUPLICATE_PURCHASE_ATTEMPT", BILLING_PURCHASE_REQUEST_INVALID: 100017, [100017]: "BILLING_PURCHASE_REQUEST_INVALID", NEGATIVE_INVOICE_AMOUNT: 100027, [100027]: "NEGATIVE_INVOICE_AMOUNT", AUTHENTICATION_REQUIRED: 100029, [100029]: "AUTHENTICATION_REQUIRED", SUBSCRIPTION_RENEWAL_IN_PROGRESS: 100042, [100042]: "SUBSCRIPTION_RENEWAL_IN_PROGRESS", CONFIRMATION_REQUIRED: 100047, [100047]: "CONFIRMATION_REQUIRED", CARD_DECLINED: 100054, [100054]: "CARD_DECLINED", INVALID_GIFT_REDEMPTION_FRAUD_REJECTED: 50097, [50097]: "INVALID_GIFT_REDEMPTION_FRAUD_REJECTED", PURCHASE_TOKEN_AUTHORIZATION_REQUIRED: 100056, [100056]: "PURCHASE_TOKEN_AUTHORIZATION_REQUIRED", INVALID_PAYMENT_SOURCE: 50048, [50048]: "INVALID_PAYMENT_SOURCE", INVALID_CURRENCY_FOR_PAYMENT_SOURCE: 100051, [100051]: "INVALID_CURRENCY_FOR_PAYMENT_SOURCE", BILLING_APPLE_SERVER_API_ERROR: 100070, [100070]: "BILLING_APPLE_SERVER_API_ERROR", BILLING_TRIAL_REDEMPTION_DISABLED: 100078, [100078]: "BILLING_TRIAL_REDEMPTION_DISABLED", BILLING_PAUSE_DISABLED: 100079, [100079]: "BILLING_PAUSE_DISABLED", BILLING_PAUSE_PENDING_ALREADY_SET: 100080, [100080]: "BILLING_PAUSE_PENDING_ALREADY_SET", BILLING_PAUSE_NOT_ELIGIBLE: 100081, [100081]: "BILLING_PAUSE_NOT_ELIGIBLE", BILLING_PAUSE_INVALID_INTERVAL: 100082, [100082]: "BILLING_PAUSE_INVALID_INTERVAL", BILLING_ALREADY_PAUSED: 100083, [100083]: "BILLING_ALREADY_PAUSED", BILLING_CANNOT_CHARGE_ZERO_AMOUNT: 100084, [100084]: "BILLING_CANNOT_CHARGE_ZERO_AMOUNT", BILLING_PAUSE_INVALID_UPDATE: 100094, [100094]: "BILLING_PAUSE_INVALID_UPDATE", BILLING_BUNDLE_ALREADY_PURCHASED: 100096, [100096]: "BILLING_BUNDLE_ALREADY_PURCHASED", BILLING_BUNDLE_PARTIALLY_OWNED: 100097, [100097]: "BILLING_BUNDLE_PARTIALLY_OWNED", BILLING_INSUFFICIENT_FUNDS: 100107, [100107]: "BILLING_INSUFFICIENT_FUNDS", BILLING_OUTDATED_REQUEST_PARAMETERS: 100111, [100111]: "BILLING_OUTDATED_REQUEST_PARAMETERS", BILLING_CURRENCY_NOT_ALLOWED_FOR_COUNTRY: 100144, [100144]: "BILLING_CURRENCY_NOT_ALLOWED_FOR_COUNTRY", BILLING_SPENDING_LIMIT_WILL_EXCEED: 100150, [100150]: "BILLING_SPENDING_LIMIT_WILL_EXCEED", BILLING_SPENDING_LIMIT_REACHED: 100151, [100151]: "BILLING_SPENDING_LIMIT_REACHED", BILLING_ORDER_NOT_SIGNABLE: 100152, [100152]: "BILLING_ORDER_NOT_SIGNABLE", BILLING_APPLE_STORE_COUNTRY_MISMATCH: 100153, [100153]: "BILLING_APPLE_STORE_COUNTRY_MISMATCH", BILLING_CLAIM_IN_GAME_BEFORE_REPURCHASE: 100155, [100155]: "BILLING_CLAIM_IN_GAME_BEFORE_REPURCHASE", VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE: 590001, [590001]: "VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE" };
obj = { CARD_NUMBER: "cardNumber", CARD_CVC: "cvc", CARD_EXPIRATION_DATE: "expirationDate", CARD_NAME: "name", ADDRESS_NAME: "name", ADDRESS_LINE_1: "line1", ADDRESS_LINE_2: "line2", ADDRESS_CITY: "city", ADDRESS_STATE: "state", ADDRESS_POSTAL_CODE: "postalCode", ADDRESS_COUNTRY: "country" };
obj = { ADDRESS_LINE_1: "address_line1", ADDRESS_LINE_2: "address_line2", ADDRESS_CITY: "address_city", ADDRESS_STATE: "address_state", ADDRESS_ZIP: "address_zip", ADDRESS_COUNTRY: "address_country", CARD_NUMBER: "number", CARD_EXPIRATION_DATE: "exp", CARD_EXPIRATION_MONTH: "exp_month", CARD_EXPIRATION_YEAR: "exp_year" };
let closure_8 = Object.freeze({ [obj.ADDRESS_LINE_1]: obj.ADDRESS_LINE_1, [obj.ADDRESS_LINE_2]: obj.ADDRESS_LINE_2, [obj.ADDRESS_CITY]: obj.ADDRESS_CITY, [obj.ADDRESS_STATE]: obj.ADDRESS_STATE, [obj.ADDRESS_ZIP]: obj.ADDRESS_POSTAL_CODE, [obj.ADDRESS_COUNTRY]: obj.ADDRESS_COUNTRY, [obj.CARD_NUMBER]: obj.CARD_NUMBER, [obj.CARD_EXPIRATION_DATE]: obj.CARD_EXPIRATION_DATE, [obj.CARD_EXPIRATION_MONTH]: obj.CARD_EXPIRATION_DATE, [obj.CARD_EXPIRATION_YEAR]: obj.CARD_EXPIRATION_DATE });
let closure_9 = Object.freeze({ line_1: obj.ADDRESS_LINE_1, line_2: obj.ADDRESS_LINE_2, postal_code: obj.ADDRESS_POSTAL_CODE });
const items = [, , , ];
({ CARD_NUMBER: arr[0], CARD_CVC: arr[1], CARD_EXPIRATION_DATE: arr[2], CARD_NAME: arr[3] } = obj);
const set = new Set(items);
const items1 = [, , , , , , ];
({ ADDRESS_NAME: arr2[0], ADDRESS_LINE_1: arr2[1], ADDRESS_LINE_2: arr2[2], ADDRESS_CITY: arr2[3], ADDRESS_STATE: arr2[4], ADDRESS_POSTAL_CODE: arr2[5], ADDRESS_COUNTRY: arr2[6] } = obj);
const set1 = new Set(items1);
tmp4.ErrorCodes = obj;
tmp4.Fields = obj;
tmp4.Sections = { CARD: "card", ADDRESS: "address" };
tmp4.CARD_ERRORS = set;
tmp4.ADDRESS_ERRORS = set1;
const result = getCountryCodeByCountryName.fileFinishedImporting("errors/BillingError.tsx");

export default tmp4;
export const ErrorCodes = obj;
export const parseV8BillingAddressSkemaErrorToBillingError = function parseV8BillingAddressSkemaErrorToBillingError(body) {
  if ("string" !== typeof body) {
    let code;
    if (null != body) {
      body = body.body;
      if (null != body) {
        code = body.code;
      }
    }
    if (code === arg1(dependencyMap[5]).INVALID_FORM_BODY_ERROR_CODE) {
      let _Array = Array;
      let errors;
      if (null != body) {
        const body2 = body.body;
        if (null != body2) {
          errors = body2.errors;
        }
      }
      if (!Array.isArray(errors)) {
        let billing_address;
        if (null != body) {
          const body3 = body.body;
          _Array = null == body3;
          if (!_Array) {
            errors = body3.errors;
            _Array = null == errors;
            if (!_Array) {
              billing_address = errors.billing_address;
            }
          }
        }
        if (null != billing_address) {
          for (const key10025 in arg0.body.errors.billing_address) {
            let tmp12 = key10025;
            billing_address = arg0.body.errors.billing_address;
            delete r10[r12];
            arg0.body.errors[key10025] = arg0.body.errors.billing_address[key10025];
          }
          const errors2 = body.body.errors;
          delete r1.billing_address;
        }
      }
      const body4 = body.body;
      let errors1;
      if (null != body4) {
        errors1 = body4.errors;
      }
      if (null != errors1) {
        body.body = arg1(dependencyMap[5]).convertSkemaError(body.body.errors);
        const obj = arg1(dependencyMap[5]);
      }
    }
  }
  return new tmp4(body);
};
