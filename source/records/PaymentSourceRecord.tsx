// Module ID: 3780
// Function ID: 29303
// Name: _callSuper
// Dependencies: [6, 7, 15, 17, 18, 1858, 653, 1360, 1327, 2]

// Module 3780 (_callSuper)
import closure_2 from "ME";
import hasFlag from "hasFlag";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import ME from "ME";
import tmp4 from "Record";
import importDefaultResult from "Record";

let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const obj = callback2(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(obj, items, callback2(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, items);
  }
  return _possibleConstructorReturn(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
({ IRREDEEMABLE_PAYMENT_SOURCES: closure_7, PaymentGateways: closure_8, PaymentSourceTypes: closure_9 } = ME);
const tmp5 = ((arg0) => {
  class CreditCardSourceRecord {
    constructor(arg0) {
      tmp = outer1_2(this, CreditCardSourceRecord);
      items = [];
      items[0] = arg0;
      tmp2 = outer1_28(this, CreditCardSourceRecord, items);
      if (arg0.type !== outer1_9.CARD) {
        tmp4 = globalThis;
        _Error = Error;
        tmp5 = outer1_9;
        _HermesInternal = HermesInternal;
        str3 = "Cannot instantiate CreditCardSourceRecord with type: ";
        str4 = ", must be ";
        prototype = Error.prototype;
        tmp6 = new.target;
        tmp7 = new.target;
        error = new Error("Cannot instantiate CreditCardSourceRecord with type: " + arg0.type + ", must be " + outer1_9.CARD);
        tmp9 = error;
        throw error;
      } else {
        brand = arg0.brand;
        tmp3 = null;
        str = "";
        str2 = "";
        if (null != brand) {
          str2 = brand;
        }
        tmp2.brand = str2;
        last4 = arg0.last4;
        if (null != last4) {
          str = last4;
        }
        tmp2.last4 = str;
        expiresMonth = arg0.expiresMonth;
        num = 0;
        if (null != expiresMonth) {
          num = expiresMonth;
        }
        tmp2.expiresMonth = num;
        expiresYear = arg0.expiresYear;
        num2 = 0;
        if (null != expiresYear) {
          num2 = expiresYear;
        }
        tmp2.expiresYear = num2;
        return tmp2;
      }
    }
  }
  callback3(CreditCardSourceRecord, arg0);
  let items = [
    {
      key: "isStripeLinkBankAccount",
      get() {
        let tmp = "link" === this.brand;
        if (tmp) {
          tmp = "0000" === this.last4;
        }
        return tmp;
      }
    }
  ];
  return callback(CreditCardSourceRecord, items);
})(tmp4);
let closure_10 = tmp5;
const tmp6 = ((arg0) => {
  class PaypalSourceRecord {
    constructor(arg0) {
      tmp = outer1_2(this, PaypalSourceRecord);
      items = [];
      items[0] = arg0;
      tmp2 = outer1_28(this, PaypalSourceRecord, items);
      if (arg0.type !== outer1_9.PAYPAL) {
        tmp3 = globalThis;
        _Error = Error;
        tmp4 = outer1_9;
        _HermesInternal = HermesInternal;
        str = "Cannot instantiate PaypalSourceRecord with type: ";
        str2 = ", must be ";
        prototype = Error.prototype;
        tmp5 = new.target;
        tmp6 = new.target;
        error = new Error("Cannot instantiate PaypalSourceRecord with type: " + arg0.type + ", must be " + outer1_9.PAYPAL);
        tmp8 = error;
        throw error;
      } else {
        tmp2.email = arg0.email || "";
        return tmp2;
      }
    }
  }
  callback3(PaypalSourceRecord, arg0);
  return callback(PaypalSourceRecord);
})(tmp4);
let closure_11 = tmp6;
const tmp7 = ((arg0) => {
  class SofortSourceRecord {
    constructor(arg0) {
      tmp = outer1_2(this, SofortSourceRecord);
      items = [];
      items[0] = arg0;
      tmp2 = outer1_28(this, SofortSourceRecord, items);
      if (arg0.type !== outer1_9.SOFORT) {
        tmp3 = outer1_9;
        if (arg0.type !== outer1_9.SEPA_DEBIT) {
          tmp4 = globalThis;
          _Error = Error;
          tmp5 = outer1_9;
          _HermesInternal = HermesInternal;
          str = "Cannot instantiate SofortSourceRecord with type: ";
          str2 = ", must be ";
          str3 = " or ";
          prototype = Error.prototype;
          tmp6 = new.target;
          tmp7 = new.target;
          error = new Error("Cannot instantiate SofortSourceRecord with type: " + arg0.type + ", must be " + outer1_9.SOFORT + " or " + outer1_9.SEPA_DEBIT);
          tmp9 = error;
          throw error;
        }
      }
      tmp2.email = arg0.email || "";
      return tmp2;
    }
  }
  callback3(SofortSourceRecord, arg0);
  return callback(SofortSourceRecord);
})(tmp4);
let closure_12 = tmp7;
const tmp8 = ((arg0) => {
  class GiropaySourceRecord {
    constructor(arg0) {
      tmp = outer1_2(this, GiropaySourceRecord);
      [][0] = arg0;
      if (arg0.type !== outer1_9.GIROPAY) {
        tmp3 = globalThis;
        _Error = Error;
        tmp4 = outer1_9;
        _HermesInternal = HermesInternal;
        str = "Cannot instantiate GiropaySourceRecord with type: ";
        str2 = ", must be ";
        prototype = Error.prototype;
        tmp5 = new.target;
        tmp6 = new.target;
        error = new Error("Cannot instantiate GiropaySourceRecord with type: " + arg0.type + ", must be " + outer1_9.GIROPAY);
        tmp8 = error;
        throw error;
      } else {
        return tmp2;
      }
    }
  }
  callback3(GiropaySourceRecord, arg0);
  return callback(GiropaySourceRecord);
})(tmp4);
let closure_13 = tmp8;
let tmp9 = ((arg0) => {
  class Przelewy24SourceRecord {
    constructor(arg0) {
      tmp = outer1_2(this, Przelewy24SourceRecord);
      items = [];
      items[0] = arg0;
      tmp2 = outer1_28(this, Przelewy24SourceRecord, items);
      if (arg0.type !== outer1_9.PRZELEWY24) {
        tmp3 = globalThis;
        _Error = Error;
        tmp4 = outer1_9;
        _HermesInternal = HermesInternal;
        str = "Cannot instantiate Przelewy24SourceRecord with type: ";
        str2 = ", must be ";
        prototype = Error.prototype;
        tmp5 = new.target;
        tmp6 = new.target;
        error = new Error("Cannot instantiate Przelewy24SourceRecord with type: " + arg0.type + ", must be " + outer1_9.PRZELEWY24);
        tmp8 = error;
        throw error;
      } else {
        tmp2.email = arg0.email || "";
        tmp2.bank = arg0.bank;
        return tmp2;
      }
    }
  }
  callback3(Przelewy24SourceRecord, arg0);
  return callback(Przelewy24SourceRecord);
})(tmp4);
let closure_14 = tmp9;
const tmp10 = ((arg0) => {
  class EPSSourceRecord {
    constructor(arg0) {
      tmp = outer1_2(this, EPSSourceRecord);
      items = [];
      items[0] = arg0;
      tmp2 = outer1_28(this, EPSSourceRecord, items);
      if (arg0.type !== outer1_9.EPS) {
        tmp3 = globalThis;
        _Error = Error;
        tmp4 = outer1_9;
        _HermesInternal = HermesInternal;
        str = "Cannot instantiate EPSSourceRecord with type: ";
        str2 = ", must be ";
        prototype = Error.prototype;
        tmp5 = new.target;
        tmp6 = new.target;
        error = new Error("Cannot instantiate EPSSourceRecord with type: " + arg0.type + ", must be " + outer1_9.EPS);
        tmp8 = error;
        throw error;
      } else {
        tmp2.bank = arg0.bank;
        return tmp2;
      }
    }
  }
  callback3(EPSSourceRecord, arg0);
  return callback(EPSSourceRecord);
})(tmp4);
let closure_15 = tmp10;
const tmp11 = ((arg0) => {
  class IdealSourceRecord {
    constructor(arg0) {
      tmp = outer1_2(this, IdealSourceRecord);
      items = [];
      items[0] = arg0;
      tmp2 = outer1_28(this, IdealSourceRecord, items);
      if (arg0.type !== outer1_9.IDEAL) {
        tmp3 = globalThis;
        _Error = Error;
        tmp4 = outer1_9;
        _HermesInternal = HermesInternal;
        str = "Cannot instantiate IdealSourceRecord with type: ";
        str2 = ", must be ";
        prototype = Error.prototype;
        tmp5 = new.target;
        tmp6 = new.target;
        error = new Error("Cannot instantiate IdealSourceRecord with type: " + arg0.type + ", must be " + outer1_9.IDEAL);
        tmp8 = error;
        throw error;
      } else {
        tmp2.bank = arg0.bank;
        return tmp2;
      }
    }
  }
  callback3(IdealSourceRecord, arg0);
  return callback(IdealSourceRecord);
})(tmp4);
let closure_16 = tmp11;
const tmp12 = ((arg0) => {
  class PaysafeSourceRecord {
    constructor(arg0) {
      tmp = outer1_2(this, PaysafeSourceRecord);
      [][0] = arg0;
      if (arg0.type !== outer1_9.PAYSAFE_CARD) {
        tmp3 = globalThis;
        _Error = Error;
        tmp4 = outer1_9;
        _HermesInternal = HermesInternal;
        str = "Cannot instantiate PaysafeSourceRecord with type: ";
        str2 = ", must be ";
        prototype = Error.prototype;
        tmp5 = new.target;
        tmp6 = new.target;
        error = new Error("Cannot instantiate PaysafeSourceRecord with type: " + arg0.type + ", must be " + outer1_9.PAYSAFE_CARD);
        tmp8 = error;
        throw error;
      } else {
        return tmp2;
      }
    }
  }
  callback3(PaysafeSourceRecord, arg0);
  return callback(PaysafeSourceRecord);
})(tmp4);
let closure_17 = tmp12;
let tmp13 = ((arg0) => {
  class GcashSourceRecord {
    constructor(arg0) {
      tmp = outer1_2(this, GcashSourceRecord);
      [][0] = arg0;
      if (arg0.type !== outer1_9.GCASH) {
        tmp3 = globalThis;
        _Error = Error;
        tmp4 = outer1_9;
        _HermesInternal = HermesInternal;
        str = "Cannot instantiate GcashSourceRecord with type: ";
        str2 = ", must be ";
        prototype = Error.prototype;
        tmp5 = new.target;
        tmp6 = new.target;
        error = new Error("Cannot instantiate GcashSourceRecord with type: " + arg0.type + ", must be " + outer1_9.GCASH);
        tmp8 = error;
        throw error;
      } else {
        return tmp2;
      }
    }
  }
  callback3(GcashSourceRecord, arg0);
  return callback(GcashSourceRecord);
})(tmp4);
let closure_18 = tmp13;
const tmp14 = ((arg0) => {
  class GrabPayMySourceRecord {
    constructor(arg0) {
      tmp = outer1_2(this, GrabPayMySourceRecord);
      [][0] = arg0;
      if (arg0.type !== outer1_9.GRABPAY_MY) {
        tmp3 = globalThis;
        _Error = Error;
        tmp4 = outer1_9;
        _HermesInternal = HermesInternal;
        str = "Cannot instantiate GrabPayMySourceRecord with type: ";
        str2 = ", must be ";
        prototype = Error.prototype;
        tmp5 = new.target;
        tmp6 = new.target;
        error = new Error("Cannot instantiate GrabPayMySourceRecord with type: " + arg0.type + ", must be " + outer1_9.GRABPAY_MY);
        tmp8 = error;
        throw error;
      } else {
        return tmp2;
      }
    }
  }
  callback3(GrabPayMySourceRecord, arg0);
  return callback(GrabPayMySourceRecord);
})(tmp4);
let closure_19 = tmp14;
let tmp15 = ((arg0) => {
  class MomoWalletSourceRecord {
    constructor(arg0) {
      tmp = outer1_2(this, MomoWalletSourceRecord);
      [][0] = arg0;
      if (arg0.type !== outer1_9.MOMO_WALLET) {
        tmp3 = globalThis;
        _Error = Error;
        tmp4 = outer1_9;
        _HermesInternal = HermesInternal;
        str = "Cannot instantiate MomoWalletSourceRecord with type: ";
        str2 = ", must be ";
        prototype = Error.prototype;
        tmp5 = new.target;
        tmp6 = new.target;
        error = new Error("Cannot instantiate MomoWalletSourceRecord with type: " + arg0.type + ", must be " + outer1_9.MOMO_WALLET);
        tmp8 = error;
        throw error;
      } else {
        return tmp2;
      }
    }
  }
  callback3(MomoWalletSourceRecord, arg0);
  return callback(MomoWalletSourceRecord);
})(tmp4);
let closure_20 = tmp15;
const tmp16 = ((arg0) => {
  class VenmoSourceRecord {
    constructor(arg0) {
      tmp = outer1_2(this, VenmoSourceRecord);
      items = [];
      items[0] = arg0;
      tmp2 = outer1_28(this, VenmoSourceRecord, items);
      if (arg0.type !== outer1_9.VENMO) {
        tmp3 = globalThis;
        _Error = Error;
        tmp4 = outer1_9;
        _HermesInternal = HermesInternal;
        str = "Cannot instantiate VenmoSourceRecord with type: ";
        str2 = ", must be ";
        prototype = Error.prototype;
        tmp5 = new.target;
        tmp6 = new.target;
        error = new Error("Cannot instantiate VenmoSourceRecord with type: " + arg0.type + ", must be " + outer1_9.VENMO);
        tmp8 = error;
        throw error;
      } else {
        tmp2.username = arg0.username || "";
        return tmp2;
      }
    }
  }
  callback3(VenmoSourceRecord, arg0);
  return callback(VenmoSourceRecord);
})(tmp4);
let closure_21 = tmp16;
const tmp17 = ((arg0) => {
  class KaKaoPaySourceRecord {
    constructor(arg0) {
      tmp = outer1_2(this, KaKaoPaySourceRecord);
      [][0] = arg0;
      if (arg0.type !== outer1_9.KAKAOPAY) {
        tmp3 = globalThis;
        _Error = Error;
        tmp4 = outer1_9;
        _HermesInternal = HermesInternal;
        str = "Cannot instantiate KaKaoPaySourceRecord with type: ";
        str2 = ", must be ";
        prototype = Error.prototype;
        tmp5 = new.target;
        tmp6 = new.target;
        error = new Error("Cannot instantiate KaKaoPaySourceRecord with type: " + arg0.type + ", must be " + outer1_9.KAKAOPAY);
        tmp8 = error;
        throw error;
      } else {
        return tmp2;
      }
    }
  }
  callback3(KaKaoPaySourceRecord, arg0);
  return callback(KaKaoPaySourceRecord);
})(tmp4);
let closure_22 = tmp17;
const tmp18 = ((arg0) => {
  class GoPayWalletSourceRecord {
    constructor(arg0) {
      tmp = outer1_2(this, GoPayWalletSourceRecord);
      [][0] = arg0;
      if (arg0.type !== outer1_9.GOPAY_WALLET) {
        tmp3 = globalThis;
        _Error = Error;
        tmp4 = outer1_9;
        _HermesInternal = HermesInternal;
        str = "Cannot instantiate GoPayWalletSourceRecord with type: ";
        str2 = ", must be ";
        prototype = Error.prototype;
        tmp5 = new.target;
        tmp6 = new.target;
        error = new Error("Cannot instantiate GoPayWalletSourceRecord with type: " + arg0.type + ", must be " + outer1_9.GOPAY_WALLET);
        tmp8 = error;
        throw error;
      } else {
        return tmp2;
      }
    }
  }
  callback3(GoPayWalletSourceRecord, arg0);
  return callback(GoPayWalletSourceRecord);
})(tmp4);
let closure_23 = tmp18;
const tmp19 = ((arg0) => {
  class BancontactSourceRecord {
    constructor(arg0) {
      tmp = outer1_2(this, BancontactSourceRecord);
      [][0] = arg0;
      if (arg0.type !== outer1_9.BANCONTACT) {
        tmp3 = globalThis;
        _Error = Error;
        tmp4 = outer1_9;
        _HermesInternal = HermesInternal;
        str = "Cannot instantiate BancontactSourceRecord with type: ";
        str2 = ", must be ";
        prototype = Error.prototype;
        tmp5 = new.target;
        tmp6 = new.target;
        error = new Error("Cannot instantiate BancontactSourceRecord with type: " + arg0.type + ", must be " + outer1_9.BANCONTACT);
        tmp8 = error;
        throw error;
      } else {
        return tmp2;
      }
    }
  }
  callback3(BancontactSourceRecord, arg0);
  return callback(BancontactSourceRecord);
})(tmp4);
let closure_24 = tmp19;
const tmp20 = ((arg0) => {
  class CashAppSourceRecord {
    constructor(arg0) {
      tmp = outer1_2(this, CashAppSourceRecord);
      items = [];
      items[0] = arg0;
      tmp2 = outer1_28(this, CashAppSourceRecord, items);
      if (arg0.type !== outer1_9.CASH_APP) {
        tmp3 = globalThis;
        _Error = Error;
        tmp4 = outer1_9;
        _HermesInternal = HermesInternal;
        str = "Cannot instantiate Cashapp with type: ";
        str2 = ", must be ";
        prototype = Error.prototype;
        tmp5 = new.target;
        tmp6 = new.target;
        error = new Error("Cannot instantiate Cashapp with type: " + arg0.type + ", must be " + outer1_9.CASH_APP);
        tmp8 = error;
        throw error;
      } else {
        tmp2.username = arg0.username || "";
        return tmp2;
      }
    }
  }
  callback3(CashAppSourceRecord, arg0);
  return callback(CashAppSourceRecord);
})(tmp4);
let closure_25 = tmp20;
let tmp22 = ((arg0) => {
  class TDSWalletSourceRecord {
    constructor(arg0) {
      tmp = outer1_2(this, TDSWalletSourceRecord);
      [][0] = arg0;
      if (arg0.type !== outer1_9.TDS_WALLET) {
        tmp3 = globalThis;
        _Error = Error;
        tmp4 = outer1_9;
        _HermesInternal = HermesInternal;
        str = "Cannot instantiate TDSWalletSourceRecord with type: ";
        str2 = ", must be ";
        prototype = Error.prototype;
        tmp5 = new.target;
        tmp6 = new.target;
        error = new Error("Cannot instantiate TDSWalletSourceRecord with type: " + arg0.type + ", must be " + outer1_9.TDS_WALLET);
        tmp8 = error;
        throw error;
      } else {
        return tmp2;
      }
    }
  }
  callback3(TDSWalletSourceRecord, arg0);
  return callback(TDSWalletSourceRecord);
})(tmp4);
let closure_26 = tmp22;
const tmp23 = ((arg0) => {
  class PixSourceRecord {
    constructor(arg0) {
      tmp = outer1_2(this, PixSourceRecord);
      items = [];
      items[0] = arg0;
      tmp2 = outer1_28(this, PixSourceRecord, items);
      if (arg0.type !== outer1_9.PIX) {
        tmp3 = globalThis;
        _Error = Error;
        tmp4 = outer1_9;
        _HermesInternal = HermesInternal;
        str = "Cannot instantiate PixSourceRecord with type: ";
        str2 = ", must be ";
        prototype = Error.prototype;
        tmp5 = new.target;
        tmp6 = new.target;
        error = new Error("Cannot instantiate PixSourceRecord with type: " + arg0.type + ", must be " + outer1_9.PIX);
        tmp8 = error;
        throw error;
      } else {
        tmp2.email = arg0.email;
        return tmp2;
      }
    }
  }
  callback3(PixSourceRecord, arg0);
  return callback(PixSourceRecord);
})(tmp4);
let closure_27 = tmp23;
let tmp21 = ((arg0) => {
  class AppleSourceRecord {
    constructor(arg0) {
      tmp = outer1_2(this, AppleSourceRecord);
      arg0.id = "";
      arg0.paymentGateway = outer1_8.APPLE_PARTNER;
      arg0.type = outer1_9.APPLE;
      arg0.billingAddress = {};
      arg0.country = "";
      arg0.invalid = false;
      arg0.isDefault = false;
      arg0.flags = 0;
      [][0] = arg0;
      if (arg0.type !== outer1_9.APPLE) {
        tmp3 = globalThis;
        _Error = Error;
        tmp4 = outer1_9;
        _HermesInternal = HermesInternal;
        str = "Cannot instantiate AppleSourceRecord with type: ";
        str2 = ", must be ";
        prototype = Error.prototype;
        tmp5 = new.target;
        tmp6 = new.target;
        error = new Error("Cannot instantiate AppleSourceRecord with type: " + arg0.type + ", must be " + outer1_9.APPLE);
        tmp8 = error;
        throw error;
      } else {
        return tmp2;
      }
    }
  }
  callback3(AppleSourceRecord, arg0);
  return callback(AppleSourceRecord);
})(tmp4);
let result = require("_possibleConstructorReturn").fileFinishedImporting("records/PaymentSourceRecord.tsx");

export default tmp4;
export const CreditCardSourceRecord = tmp5;
export const PaypalSourceRecord = tmp6;
export const SofortSourceRecord = tmp7;
export const GiropaySourceRecord = tmp8;
export const Przelewy24SourceRecord = tmp9;
export const EPSSourceRecord = tmp10;
export const IdealSourceRecord = tmp11;
export const PaysafeSourceRecord = tmp12;
export const GcashSourceRecord = tmp13;
export const GrabPayMySourceRecord = tmp14;
export const MomoWalletSourceRecord = tmp15;
export const VenmoSourceRecord = tmp16;
export const KaKaoPaySourceRecord = tmp17;
export const GoPayWalletSourceRecord = tmp18;
export const BancontactSourceRecord = tmp19;
export const CashAppSourceRecord = tmp20;
export const AppleSourceRecord = tmp21;
export const TDSWalletSourceRecord = tmp22;
export const PixSourceRecord = tmp23;
