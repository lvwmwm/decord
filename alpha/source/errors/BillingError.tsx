// Module ID: 5668
// Function ID: 5669
// Name: BillingError
// Dependencies: [1284, 4738, 1112, 2]
// Exports: parseV8BillingAddressSkemaErrorToBillingError

// Module 5668 (BillingError)
import intl18 from "intl" /* 1112 */;
import HTTPUtils from "HTTPUtils" /* 1284 */;
import V6OrEarlierAPIError from "errors/V6OrEarlierAPIError" /* 4738 */;
import size from "module_2" /* 2 */;

let errors;

const ErrorCodes = { UNKNOWN: 0, [0]: "UNKNOWN", UNKNOWN_BILLING_PROFILE: 100001, [100001]: "UNKNOWN_BILLING_PROFILE", UNKNOWN_PAYMENT_SOURCE: 100002, [100002]: "UNKNOWN_PAYMENT_SOURCE", UNKNOWN_SUBSCRIPTION: 100003, [100003]: "UNKNOWN_SUBSCRIPTION", ALREADY_SUBSCRIBED: 100004, [100004]: "ALREADY_SUBSCRIBED", INVALID_PLAN: 100005, [100005]: "INVALID_PLAN", PAYMENT_SOURCE_REQUIRED: 100006, [100006]: "PAYMENT_SOURCE_REQUIRED", ALREADY_CANCELED: 100007, [100007]: "ALREADY_CANCELED", INVALID_PAYMENT: 100008, [100008]: "INVALID_PAYMENT", ALREADY_REFUNDED: 100009, [100009]: "ALREADY_REFUNDED", INVALID_BILLING_ADDRESS: 100010, [100010]: "INVALID_BILLING_ADDRESS", ALREADY_PURCHASED: 100011, [100011]: "ALREADY_PURCHASED", DUPLICATE_PURCHASE_ATTEMPT: 100012, [100012]: "DUPLICATE_PURCHASE_ATTEMPT", BILLING_PURCHASE_REQUEST_INVALID: 100017, [100017]: "BILLING_PURCHASE_REQUEST_INVALID", NEGATIVE_INVOICE_AMOUNT: 100027, [100027]: "NEGATIVE_INVOICE_AMOUNT", AUTHENTICATION_REQUIRED: 100029, [100029]: "AUTHENTICATION_REQUIRED", SUBSCRIPTION_RENEWAL_IN_PROGRESS: 100042, [100042]: "SUBSCRIPTION_RENEWAL_IN_PROGRESS", CONFIRMATION_REQUIRED: 100047, [100047]: "CONFIRMATION_REQUIRED", CARD_DECLINED: 100054, [100054]: "CARD_DECLINED", BILLING_OPEN_INVOICE_NOT_FOUND: 100059, [100059]: "BILLING_OPEN_INVOICE_NOT_FOUND", ASYNC_PAYMENT_PENDING: 100075, [100075]: "ASYNC_PAYMENT_PENDING", INVALID_GIFT_REDEMPTION_FRAUD_REJECTED: 50097, [50097]: "INVALID_GIFT_REDEMPTION_FRAUD_REJECTED", PURCHASE_TOKEN_AUTHORIZATION_REQUIRED: 100056, [100056]: "PURCHASE_TOKEN_AUTHORIZATION_REQUIRED", INVALID_PAYMENT_SOURCE: 50048, [50048]: "INVALID_PAYMENT_SOURCE", INVALID_CURRENCY_FOR_PAYMENT_SOURCE: 100051, [100051]: "INVALID_CURRENCY_FOR_PAYMENT_SOURCE", BILLING_APPLE_SERVER_API_ERROR: 100070, [100070]: "BILLING_APPLE_SERVER_API_ERROR", BILLING_TRIAL_REDEMPTION_DISABLED: 100078, [100078]: "BILLING_TRIAL_REDEMPTION_DISABLED", BILLING_PAUSE_DISABLED: 100079, [100079]: "BILLING_PAUSE_DISABLED", BILLING_PAUSE_PENDING_ALREADY_SET: 100080, [100080]: "BILLING_PAUSE_PENDING_ALREADY_SET", BILLING_PAUSE_NOT_ELIGIBLE: 100081, [100081]: "BILLING_PAUSE_NOT_ELIGIBLE", BILLING_PAUSE_INVALID_INTERVAL: 100082, [100082]: "BILLING_PAUSE_INVALID_INTERVAL", BILLING_ALREADY_PAUSED: 100083, [100083]: "BILLING_ALREADY_PAUSED", BILLING_CANNOT_CHARGE_ZERO_AMOUNT: 100084, [100084]: "BILLING_CANNOT_CHARGE_ZERO_AMOUNT", BILLING_PAUSE_INVALID_UPDATE: 100094, [100094]: "BILLING_PAUSE_INVALID_UPDATE", BILLING_BUNDLE_ALREADY_PURCHASED: 100096, [100096]: "BILLING_BUNDLE_ALREADY_PURCHASED", BILLING_BUNDLE_PARTIALLY_OWNED: 100097, [100097]: "BILLING_BUNDLE_PARTIALLY_OWNED", BILLING_INSUFFICIENT_FUNDS: 100107, [100107]: "BILLING_INSUFFICIENT_FUNDS", BILLING_OUTDATED_REQUEST_PARAMETERS: 100111, [100111]: "BILLING_OUTDATED_REQUEST_PARAMETERS", BILLING_CURRENCY_NOT_ALLOWED_FOR_COUNTRY: 100144, [100144]: "BILLING_CURRENCY_NOT_ALLOWED_FOR_COUNTRY", BILLING_SPENDING_LIMIT_WILL_EXCEED: 100150, [100150]: "BILLING_SPENDING_LIMIT_WILL_EXCEED", BILLING_SPENDING_LIMIT_REACHED: 100151, [100151]: "BILLING_SPENDING_LIMIT_REACHED", BILLING_ORDER_NOT_SIGNABLE: 100152, [100152]: "BILLING_ORDER_NOT_SIGNABLE", BILLING_APPLE_STORE_COUNTRY_MISMATCH: 100153, [100153]: "BILLING_APPLE_STORE_COUNTRY_MISMATCH", BILLING_CLAIM_IN_GAME_BEFORE_REPURCHASE: 100155, [100155]: "BILLING_CLAIM_IN_GAME_BEFORE_REPURCHASE", BILLING_PURCHASE_BLOCKED_BY_RESTRICTION: 100166, [100166]: "BILLING_PURCHASE_BLOCKED_BY_RESTRICTION", BILLING_WALLET_BALANCE_CHANGED: 100167, [100167]: "BILLING_WALLET_BALANCE_CHANGED", VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE: 590001, [590001]: "VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE" };
const obj2 = { CARD_NUMBER: "cardNumber", CARD_CVC: "cvc", CARD_EXPIRATION_DATE: "expirationDate", CARD_NAME: "name", ADDRESS_NAME: "name", ADDRESS_LINE_1: "line1", ADDRESS_LINE_2: "line2", ADDRESS_CITY: "city", ADDRESS_STATE: "state", ADDRESS_POSTAL_CODE: "postalCode", ADDRESS_COUNTRY: "country" };
const obj3 = { ADDRESS_LINE_1: "address_line1", ADDRESS_LINE_2: "address_line2", ADDRESS_CITY: "address_city", ADDRESS_STATE: "address_state", ADDRESS_ZIP: "address_zip", ADDRESS_COUNTRY: "address_country", CARD_NUMBER: "number", CARD_EXPIRATION_DATE: "exp", CARD_EXPIRATION_MONTH: "exp_month", CARD_EXPIRATION_YEAR: "exp_year" };
const obj4 = { [obj3.ADDRESS_LINE_1]: obj2.ADDRESS_LINE_1, [obj3.ADDRESS_LINE_2]: obj2.ADDRESS_LINE_2, [obj3.ADDRESS_CITY]: obj2.ADDRESS_CITY, [obj3.ADDRESS_STATE]: obj2.ADDRESS_STATE, [obj3.ADDRESS_ZIP]: obj2.ADDRESS_POSTAL_CODE, [obj3.ADDRESS_COUNTRY]: obj2.ADDRESS_COUNTRY, [obj3.CARD_NUMBER]: obj2.CARD_NUMBER, [obj3.CARD_EXPIRATION_DATE]: obj2.CARD_EXPIRATION_DATE, [obj3.CARD_EXPIRATION_MONTH]: obj2.CARD_EXPIRATION_DATE, [obj3.CARD_EXPIRATION_YEAR]: obj2.CARD_EXPIRATION_DATE };
const _false = Object.freeze(obj4);
const obj5 = { line_1: obj2.ADDRESS_LINE_1, line_2: obj2.ADDRESS_LINE_2, postal_code: obj2.ADDRESS_POSTAL_CODE };
const React3 = Object.freeze(obj5);
const items = [, , , ];
({ CARD_NUMBER: arr[0], CARD_CVC: arr[1], CARD_EXPIRATION_DATE: arr[2], CARD_NAME: arr[3] } = obj2);
const set = new Set(items);
const items1 = [, , , , , , ];
({ ADDRESS_NAME: arr2[0], ADDRESS_LINE_1: arr2[1], ADDRESS_LINE_2: arr2[2], ADDRESS_CITY: arr2[3], ADDRESS_STATE: arr2[4], ADDRESS_POSTAL_CODE: arr2[5], ADDRESS_COUNTRY: arr2[6] } = obj2);
const set1 = new Set(items1);
class BillingError extends V6OrEarlierAPIError {
  constructor(message, UNKNOWN) {
    const tmp47 = new tmp(message, UNKNOWN, tmp6, tmp5, tmp4, tmp3, tmp2, new.target);
    tmp47.paymentId = null;
    if (tmp47.code === obj.BILLING_PURCHASE_BLOCKED_BY_RESTRICTION) {
      const intl17 = intl18.intl;
      tmp47.message = intl17.string(intl18.t.ngZimk);
    } else if (tmp47.code === obj.NEGATIVE_INVOICE_AMOUNT) {
      const intl16 = intl18.intl;
      tmp47.message = intl16.string(intl18.t["+4Empk"]);
    } else if (tmp47.code === obj.INVALID_PAYMENT_SOURCE) {
      const intl15 = intl18.intl;
      tmp47.message = intl15.string(intl18.t.DtFqEI);
    } else if (tmp47.code === obj.UNKNOWN_PAYMENT_SOURCE) {
      const intl14 = intl18.intl;
      tmp47.message = intl14.string(intl18.t.yNYvK1);
    } else if (tmp47.code === obj.SUBSCRIPTION_RENEWAL_IN_PROGRESS) {
      const intl13 = intl18.intl;
      tmp47.message = intl13.string(intl18.t["3jprCb"]);
    } else if (tmp47.code === obj.BILLING_TRIAL_REDEMPTION_DISABLED) {
      const intl12 = intl18.intl;
      tmp47.message = intl12.string(intl18.t.MHlpoJ);
    } else if (tmp47.code === obj.BILLING_BUNDLE_ALREADY_PURCHASED) {
      const intl11 = intl18.intl;
      tmp47.message = intl11.string(intl18.t.Hiwqua);
    } else if (tmp47.code === obj.BILLING_BUNDLE_PARTIALLY_OWNED) {
      const intl10 = intl18.intl;
      tmp47.message = intl10.string(intl18.t.c5zDr3);
    } else if (tmp47.code === obj.BILLING_INSUFFICIENT_FUNDS) {
      const intl9 = intl18.intl;
      tmp47.message = intl9.string(intl18.t.yX8s2v);
    } else if (tmp47.code === obj.CARD_DECLINED) {
      const intl8 = intl18.intl;
      tmp47.message = intl8.string(intl18.t.p0UBvU);
    } else if (tmp47.code === obj.BILLING_OUTDATED_REQUEST_PARAMETERS) {
      const intl7 = intl18.intl;
      tmp47.message = intl7.string(intl18.t.uhPY5p);
    } else if (tmp47.code === obj.BILLING_CURRENCY_NOT_ALLOWED_FOR_COUNTRY) {
      const intl6 = intl18.intl;
      tmp47.message = intl6.string(intl18.t.ckFebQ);
    } else if (tmp47.code === obj.ALREADY_PURCHASED) {
      const intl5 = intl18.intl;
      tmp47.message = intl5.string(intl18.t["3RT0Iu"]);
    } else if (tmp47.code === obj.BILLING_CLAIM_IN_GAME_BEFORE_REPURCHASE) {
      const intl4 = intl18.intl;
      tmp47.message = intl4.string(intl18.t.Zr0Z4K);
    } else if (429 === tmp47.status) {
      const intl3 = intl18.intl;
      tmp47.message = intl3.string(intl18.t.sUWxgR);
    } else if (tmp47.code === obj.UNKNOWN) {
      const intl2 = intl18.intl;
      tmp47.message = intl2.string(intl18.t["5mlOCW"]);
    } else {
      const tmp9 = 400 === tmp47.status && null != tmp47.fields.captcha_key;
      if (tmp9) {
        const intl = intl18.intl;
        tmp47.message = intl.string(intl18.t["3s/vDN"]);
      }
    }
    for (const key10225 in tmp47.fields) {
      let tmp45 = closure_3[key10225];
      let tmp49 = key10225;
      if (!tmp45) {
        tmp45 = closure_4[key10225];
      }
      if (null == tmp45) {
        continue;
      } else {
        let tmp46 = tmp47.fields[key10225];
        delete tmp7.fields[tmp49];
        tmp47.fields[tmp45] = tmp46;
        continue;
      }
      continue;
    }
    let body = null;
    if (typeof message !== "string") {
      body = message.body;
    }
    const tmp48 = null != body && "payment_id" in body && typeof body.payment_id === "string";
    if (tmp48) {
      tmp47.paymentId = body.payment_id;
    }
    return tmp47;
  }
  _isInFieldSet(set) {
    const obj = set[Symbol.iterator]();
    while (obj !== undefined) {
      if (tmp in this.fields) {
        obj.return();
        let flag = true;
        return true;
      }
    }
  }
  hasCardError() {
    return this._isInFieldSet(set);
  }
  hasAddressError() {
    return this._isInFieldSet(set1);
  }
}
const prototype = BillingError.prototype;
BillingError.ErrorCodes = ErrorCodes;
BillingError.Fields = obj2;
BillingError.Sections = { CARD: "card", ADDRESS: "address" };
BillingError.CARD_ERRORS = set;
BillingError.ADDRESS_ERRORS = set1;
const result = size.fileFinishedImporting("errors/BillingError.tsx");

export default BillingError;
export { ErrorCodes };
export function parseV8BillingAddressSkemaErrorToBillingError(body) {
  if (typeof body !== "string") {
    let code;
    if (body != null) {
      body = body.body;
      if (body != null) {
        code = body.code;
      }
    }
    if (code === HTTPUtils.INVALID_FORM_BODY_ERROR_CODE) {
      let errors1;
      const _Array = Array;
      if (body != null) {
        const body2 = body.body;
        if (body2 != null) {
          errors1 = body2.errors;
        }
      }
      if (!isArray(errors1)) {
        let billing_address;
        if (body != null) {
          const body3 = body.body;
          if (body3 != null) {
            errors = body3.errors;
            if (errors != null) {
              billing_address = errors.billing_address;
            }
          }
        }
        if (null != billing_address) {
          for (const key10023 in body.body.errors.billing_address) {
            let tmp11 = body.body.errors.billing_address[key10023];
            delete body.body.errors.billing_address[key10023];
            body.body.errors[key10023] = tmp11;
            continue;
          }
          delete body.body.errors["billing_address"];
        }
      }
      const body4 = body.body;
      let errors2;
      if (body4 != null) {
        errors2 = body4.errors;
      }
      if (null != errors2) {
        const obj = HTTPUtils;
        body.body = obj.convertSkemaError(body.body.errors);
      }
    }
  }
  return new BillingError(body);
}
