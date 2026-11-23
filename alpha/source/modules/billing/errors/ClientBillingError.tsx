// Module ID: 6362
// Function ID: 6363
// Name: ClientBillingError
// Dependencies: [32, 1082, 3, 4726, 6351, 1284, 2]

// Module 6362 (ClientBillingError)
import LoggerDefault from "Logger" /* 3 */;
import Constants from "Constants" /* 1082 */;
import BillingUtils from "BillingUtils" /* 4726 */;
import BillingErrorDefault from "BillingError" /* 6351 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

let info;

const PaymentSourceTypes = Constants.PaymentSourceTypes;
let tmp2 = new LoggerDefault("ClientBillingError");
const hasOwnProperty = tmp2;
let closure_6 = "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL;
const metroImportDefault = { payment_method_confirmation: "PaymentMethodConfirmation", submit_address_step: "SubmitAddressStep", payment_element_setup: "PaymentElementSetup", express_checkout_vault: "ExpressCheckoutAddPaymentMethod", express_checkout_load: "ExpressCheckoutLoad", payment_authentication: "PaymentAuthentication", braintree_tokenize: "BraintreeTokenize", gateway_sdk_init: "GatewaySdkInit", stripe_load: "StripeLoad" };
const set = new Set(["card_error", "api_connection_error", "validation_error"]);
const set1 = new Set(["setup_intent_authentication_failure", "payment_intent_authentication_failure"]);
const set2 = new Set(["email_invalid", "tax_id_invalid"]);
const unpackModuleId = ["google_pay.", "apple_pay."];
const set3 = new Set(["BraintreeError", "AdyenCheckoutError"]);
const re13 = /Failed to fetch|NetworkError|Load failed|Failed to load Stripe\.js/;
const set4 = new Set(["PAYPAL_TOKENIZATION_REQUEST_ACTIVE"]);
let items = [/authentication/gi, "verification"];
let items1 = [items, , , ];
const items2 = [/authoriz/gi, "approv"];
items1[1] = items2;
const items3 = [/token/gi, "tokn"];
items1[2] = items3;
const items4 = [/email/gi, "e_mail"];
items1[3] = items4;
class ClientBillingError extends Error {
  constructor(source, error) {
    const classifyResult = ClientBillingError.classify(error);
    const tmp5 = new tmp(ClientBillingError.getMessage(classifyResult), tmp4, tmp3, tmp2, new.target, tmp, ClientBillingError, error);
    tmp5.classification = classifyResult;
    tmp5.source = source;
    tmp5.key = ClientBillingError.getKeyFor(tmp5.classification);
    tmp5.shouldReport = tmp5.getShouldReport();
    let tmp6;
    if (error instanceof Error) {
      tmp6 = error;
    }
    tmp5.cause = tmp6;
    tmp5.name = "" + closure_7[source.site] + "Error[" + tmp5.key + "]";
    return tmp5;
  }
  static report(source, error, arg2) {
    if (typeof ClientBillingError === "function") {
      let obj5;
      const classifyResult = ClientBillingError.classify(error);
      const self = this;
      const self2 = this;
      const tmp10 = new tmp(ClientBillingError.getMessage(classifyResult), tmp7, tmp6, tmp5, tmp4, tmp3, tmp2);
      tmp10.classification = classifyResult;
      tmp10.source = source;
      tmp10.key = ClientBillingError.getKeyFor(tmp10.classification);
      tmp10.shouldReport = tmp10.getShouldReport();
      const _Error = Error;
      let tmp14;
      if (error instanceof Error) {
        tmp14 = error;
      }
      tmp10.cause = tmp14;
      const _HermesInternal = HermesInternal;
      tmp10.name = "" + closure_7[source.site] + "Error[" + tmp10.key + "]";
      const sentryOptions = tmp10.getSentryOptions(arg2);
      let str4 = "Skipping Sentry report:";
      info = info.info;
      if (tmp10.shouldReport) {
        str4 = "Reporting to Sentry:";
      }
      const obj2 = { fingerprint: null, tags: null };
      ({ fingerprint: obj3.fingerprint, tags: obj3.tags } = sentryOptions);
      const name = tmp10.name;
      if (closure_6) {
        obj5 = { extra: sentryOptions.extra };
        const obj4 = { extra: sentryOptions.extra };
      } else {
        obj5 = {};
      }
      const merged = Object.assign(obj5);
      info(str4, name, obj2);
      if (tmp10.shouldReport) {
        const obj6 = BillingUtils;
        const result = obj6.captureBillingException(tmp10, sentryOptions);
      }
      return tmp10;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  static classify(error) {
    if (error instanceof BillingErrorDefault) {
      return { shape: "billing_error", error };
    } else {
      const obj = BillingUtils;
      const tmp2 = require;
      if (obj.isOfTypeStripeError(error)) {
        return { shape: "stripe_error", error };
      } else if (error instanceof tmp2(1284).HTTPResponseError) {
        return { shape: "http_error", error };
      } else if (typeof error === "string") {
        return { shape: "string", error };
      } else {
        let obj9;
        let tmp4 = null;
        if (typeof error === "object") {
          tmp4 = null;
          if (null !== error) {
            let code = error.code;
            let tmp3 = null;
            if (typeof code === "string") {
              tmp3 = code;
            }
            tmp4 = tmp3;
          }
        }
        code = tmp4;
        if (null != tmp4) {
          if (closure_11.some((item) => code.startsWith(item))) {
            obj9 = { shape: "stripe_wallet_exception", error };
            const obj6 = { shape: "stripe_wallet_exception", error };
          }
          return obj9;
        }
        if (null != tmp4) {
          const _Error = Error;
          if (error instanceof Error) {
            if (set3.has(error.name)) {
              obj9 = { shape: "gateway_sdk_error", error };
              const obj7 = { shape: "gateway_sdk_error", error };
            }
          }
        }
        const _Error2 = Error;
        if (error instanceof Error) {
          obj9 = { shape: "error", error };
          const obj8 = { shape: "error", error };
        } else {
          obj9 = { shape: "unknown", error };
        }
      }
    }
  }
  static getBillingErrorFieldNames(error) {
    const keys = Object.keys(error.fields);
    const found = keys.filter((item) => "_misc" !== item);
    return found.sort();
  }
  static getMessage(shape) {
    let code;
    let code2;
    let status;
    let type;
    shape = shape.shape;
    if ("string" === shape) {
      return shape.error;
    } else if ("stripe_error" === shape) {
      let combined;
      ({ type, code: code2 } = shape.error);
      if (null != code2) {
        const _HermesInternal6 = HermesInternal;
        combined = "Stripe " + type + " (" + code2 + ")";
      } else {
        const _HermesInternal5 = HermesInternal;
        combined = "Stripe " + type;
      }
      return combined;
    } else if ("billing_error" === shape) {
      let combined1;
      ({ code, status } = shape.error);
      const billingErrorFieldNames = ClientBillingError.getBillingErrorFieldNames(shape.error);
      if (billingErrorFieldNames.length > 0) {
        const _HermesInternal4 = HermesInternal;
        combined1 = "BillingError (field error: " + billingErrorFieldNames.join(", ") + ")";
      } else if (code > 0) {
        const _HermesInternal3 = HermesInternal;
        combined1 = "BillingError (code: " + code + ")";
      } else {
        let str4 = "";
        if (null != status) {
          const _HermesInternal2 = HermesInternal;
          str4 = " (HTTP " + status + ")";
        }
        combined1 = `BillingError${str4}`;
      }
      return combined1;
    } else if ("stripe_wallet_exception" === shape) {
      const _HermesInternal = HermesInternal;
      return "Stripe Wallet Exception (code: " + shape.error.code + ")";
    } else {
      const error = shape.error;
      let keyFor = null;
      if (typeof error === "object") {
        keyFor = null;
        if (null !== error) {
          const message = error.message;
          let tmp3 = null;
          if (typeof message === "string") {
            tmp3 = message;
          }
          keyFor = tmp3;
        }
      }
      if (null == keyFor) {
        keyFor = ClientBillingError.getKeyFor(shape);
      }
      return keyFor;
    }
  }
  static getKeyFor(classification) {
    const shape = classification.shape;
    if ("billing_error" === shape) {
      let str17;
      const error2 = classification.error;
      const billingErrorFieldNames = ClientBillingError.getBillingErrorFieldNames(error2);
      if (billingErrorFieldNames.length > 0) {
        const _HermesInternal5 = HermesInternal;
        str17 = "field_error:" + billingErrorFieldNames.join("+");
      } else if (error2.code > 0) {
        const _String = String;
        str17 = String(error2.code);
      } else {
        str17 = "unknown";
        if (null != error2.status) {
          const _HermesInternal4 = HermesInternal;
          str17 = "http_" + error2.status;
        }
      }
      return str17;
    } else if ("stripe_error" === shape) {
      let type;
      const error = classification.error;
      if (null == error.code) {
        type = error.type;
      } else {
        const _HermesInternal3 = HermesInternal;
        type = "" + error.type + ":" + error.code;
      }
      return type;
    } else if ("http_error" === shape) {
      const _HermesInternal2 = HermesInternal;
      return "http_" + classification.error.status;
    } else if ("stripe_wallet_exception" === shape) {
      return classification.error.code;
    } else if ("gateway_sdk_error" === shape) {
      const str8 = classification.error.name;
      const str9 = str8.toLowerCase();
      const str11 = str9.replace(/[^a-z0-9]+/g, "_");
      const replaced = str11.replace(/^_+|_+$/g, "");
      const _HermesInternal = HermesInternal;
      return "" + replaced.slice(0, 48) + ":" + classification.error.code;
    } else if ("string" === shape) {
      const str3 = classification.error;
      const str4 = str3.toLowerCase();
      const str6 = str4.replace(/[^a-z0-9]+/g, "_");
      const replaced1 = str6.replace(/^_+|_+$/g, "");
      return replaced1.slice(0, 48);
    } else if ("error" === shape) {
      return classification.error.name;
    } else {
      return "unknown" === shape ? "unknown" : undefined;
    }
  }
  getShouldReport() {
    const self = this;
    const classification = this.classification;
    const shape = classification.shape;
    if ("billing_error" === shape) {
      const error2 = classification.error;
      let tmp16 = error2.code !== BillingErrorDefault.ErrorCodes.INVALID_PAYMENT_SOURCE;
      if (tmp16) {
        let tmp18 = ClientBillingError.getBillingErrorFieldNames(error2).length > 0;
        if (!tmp18) {
          const obj2 = BillingUtils;
          tmp18 = !obj2.isExpectedHttpClientError(error2);
        }
        tmp16 = tmp18;
      }
      return tmp16;
    } else if ("stripe_error" === shape) {
      const error = classification.error;
      const hasItem = set.has(error.type);
      let tmp7 = !hasItem;
      if (tmp7) {
        let tmp8 = "invalid_request_error" !== error.type;
        if (!tmp8) {
          let tmp10 = null == error.code || !set2.has(error.code);
          if (tmp10) {
            let tmp12;
            if ("setup_intent_unexpected_state" === error.code) {
              if (null != error.setup_intent) {
                tmp12 = "canceled" !== error.setup_intent.status;
              }
              tmp10 = tmp12;
            }
            if (null != error.code) {
              tmp12 = !set1.has(error.code);
            } else {
              tmp12 = !self.isStripeWalletSelected();
            }
          }
          tmp8 = tmp10;
        }
        tmp7 = tmp8;
      }
      return tmp7;
    } else if ("http_error" === shape) {
      const obj = BillingUtils;
      return !obj.isExpectedHttpClientError(classification.error);
    } else if ("stripe_wallet_exception" === shape) {
      return false;
    } else if ("error" === shape) {
      return !re13.test(classification.error.message);
    } else if ("gateway_sdk_error" === shape) {
      return !set4.has(classification.error.code);
    } else {
      return true;
    }
  }
  isStripeWalletSelected() {
    return "express_checkout_vault" === this.source.site || this.source.selectedElementType === PaymentSourceTypes.PAYMENT_REQUEST;
  }
  getErrorTags() {
    let StringResult;
    let status;
    let status1;
    const classification = this.classification;
    const shape = classification.shape;
    if ("billing_error" === shape) {
      const _String2 = String;
      const _String3 = String;
      const obj2 = { error_code: String(classification.error.code), has_field_error: String(ClientBillingError.getBillingErrorFieldNames(classification.error).length > 0), http_status: StringResult };
      StringResult = null;
      if (null != classification.error.status) {
        const _String4 = String;
        StringResult = String(classification.error.status);
      }
      return obj2;
    } else if ("stripe_error" === shape) {
      const obj3 = { stripe_error_type: classification.error.type, stripe_error_code: classification.error.code, stripe_decline_code: classification.error.decline_code, setup_intent_status: status, payment_intent_status: status1 };
      status = null;
      if (null != classification.error.setup_intent) {
        status = classification.error.setup_intent.status;
      }
      status1 = null;
      if (null != classification.error.payment_intent) {
        status1 = classification.error.payment_intent.status;
      }
      return obj3;
    } else if ("http_error" === shape) {
      const _String = String;
      const obj4 = { http_status: String(classification.error.status) };
      return obj4;
    } else if ("stripe_wallet_exception" === shape) {
      return { wallet_code: classification.error.code };
    } else if ("gateway_sdk_error" === shape) {
      return { gateway_error_name: classification.error.name, gateway_error_code: classification.error.code };
    } else if ("error" === shape) {
      return { error_name: classification.error.name };
    } else {
      return {};
    }
  }
  getRawErrorExtra() {
    let entries;
    let entries1;
    let entries2;
    let entries3;
    let entries4;
    let entries5;
    let fromEntries2;
    let fromEntries3;
    let fromEntries4;
    let fromEntries5;
    let fromEntries6;
    let fromEntries7;
    let tmp3;
    const f88672 = (item) => {
      let arr;
      let tmp;
      let tmp2;
      const f88671 = (acc, item) => {
        let tmp;
        [tmp, ] = item;
        return acc.replace(tmp, (str) => {
          let formatted;
          if (str === str.toUpperCase()) {
            formatted = closure_1_0.toUpperCase();
          } else {
            formatted = closure_1_0;
          }
          return formatted;
        });
      };
      [tmp, arr] = item;
      if (typeof arr === "string") {
        const items = [tmp, closure_1_15.reduce(f88671, arr)];
        tmp2 = items;
      } else {
        const _Array = Array;
        items1 = [tmp, ];
        if (Array.isArray(arr)) {
          items1[1] = arr.map((item) => {
            let reduced = item;
            if (typeof item === "string") {
              reduced = closure_1_15.reduce(f88671, item);
            }
            return reduced;
          });
          tmp2 = items1;
        } else {
          items1[1] = arr;
          tmp2 = items1;
        }
      }
      return tmp2;
    };
    const classification = this.classification;
    const shape = classification.shape;
    if ("billing_error" === shape) {
      const obj = { raw_error: fromEntries7(entries.map(f88672)) };
      ({ code: obj14.code, status: obj14.status, message: obj14.message } = classification.error);
      const _Object14 = Object;
      const _Object15 = Object;
      fromEntries7 = Object.fromEntries;
      const obj2 = { code: null, status: null, message: null, fields: ClientBillingError.getBillingErrorFieldNames(classification.error) };
      entries = Object.entries(obj2);
      return obj;
    } else if ("stripe_error" === shape) {
      const obj5 = { type: null, code: null, decline_code: null, param: null, doc_url: null, message: null };
      ({ type: obj12.type, code: obj12.code, decline_code: obj12.decline_code, param: obj12.param, doc_url: obj12.doc_url, message: obj12.message } = classification.error);
      const _Object12 = Object;
      const _Object13 = Object;
      const obj3 = { raw_error: fromEntries6(entries1.map(f88672)) };
      fromEntries6 = Object.fromEntries;
      entries1 = Object.entries(obj5);
      return obj3;
    } else if ("http_error" === shape) {
      const obj9 = { status: null, method: null, message: null };
      ({ status: obj10.status, method: obj10.method, message: obj10.message } = classification.error);
      const _Object10 = Object;
      const _Object11 = Object;
      const obj7 = { raw_error: fromEntries5(entries2.map(f88672)) };
      fromEntries5 = Object.fromEntries;
      entries2 = Object.entries(obj9);
      return obj7;
    } else if ("stripe_wallet_exception" === shape) {
      const obj13 = { code: null, message: null };
      ({ code: obj8.code, message: obj8.message } = classification.error);
      const _Object8 = Object;
      const _Object9 = Object;
      const obj11 = { raw_error: fromEntries4(entries3.map(f88672)) };
      fromEntries4 = Object.fromEntries;
      entries3 = Object.entries(obj13);
      return obj11;
    } else if ("gateway_sdk_error" === shape) {
      const obj28 = { name: null, code: null, message: null };
      ({ name: obj6.name, code: obj6.code, message: obj6.message } = classification.error);
      const _Object6 = Object;
      const _Object7 = Object;
      const obj27 = { raw_error: fromEntries3(entries4.map(f88672)) };
      fromEntries3 = Object.fromEntries;
      entries4 = Object.entries(obj28);
      return obj27;
    } else if ("error" === shape) {
      const obj30 = { name: null, message: null };
      ({ name: obj4.name, message: obj4.message } = classification.error);
      const _Object4 = Object;
      const _Object5 = Object;
      const obj29 = { raw_error: fromEntries2(entries5.map(f88672)) };
      fromEntries2 = Object.fromEntries;
      entries5 = Object.entries(obj30);
      return obj29;
    } else if ("string" === shape) {
      return {};
    } else if ("unknown" === shape) {
      let fromEntriesResult;
      const tmp = null;
      if (null != classification.error) {
        let tmp2 = globalThis;
        const _Object = Object;
        const error = classification.error;
        const obj31 = { raw_error_keys: Object.keys(classification.error), raw_error_message: tmp3 };
        tmp3 = null;
        if (typeof error === "object") {
          tmp3 = null;
          if (null !== error) {
            const message = error.message;
            let tmp4 = null;
            if (typeof message === "string") {
              tmp4 = message;
            }
            tmp3 = tmp4;
          }
        }
        const _Object2 = Object;
        const _Object3 = Object;
        const entries6 = Object.entries(obj31);
        fromEntriesResult = fromEntries(entries6.map(f88672));
      } else {
        fromEntriesResult = {};
      }
      return fromEntriesResult;
    }
  }
  getSentryOptions(arg0) {
    let entries;
    let extra;
    let fromEntries;
    let items;
    let obj3;
    let selectedElementType;
    let site;
    let tags;
    let tmp2;
    const self = this;
    ({ site, selectedElementType, tags, extra } = this.source);
    const obj = { source: site, error_shape: this.classification.shape, error_key: this.key, selected_element_type: tmp2 };
    const merged = Object.assign(this.getErrorTags());
    tmp2 = null;
    if (null != selectedElementType) {
      tmp2 = PaymentSourceTypes[selectedElementType];
    }
    const obj2 = {
      tags: fromEntries(entries.filter((item) => {
        const tmp = _slicedToArray(item, 2);
        return null != tmp[1];
      })),
      fingerprint: items,
      extra: obj3
    };
    const merged1 = Object.assign(tags);
    fromEntries = Object.fromEntries;
    entries = Object.entries(obj);
    items = [site, self.key];
    obj3 = {};
    const merged2 = Object.assign(extra);
    const merged3 = Object.assign(arg0);
    const merged4 = Object.assign(self.getRawErrorExtra());
    return obj2;
  }
}
const prototype = ClientBillingError.prototype;
let result = size.fileFinishedImporting("modules/billing/errors/ClientBillingError.tsx");

export { ClientBillingError };
