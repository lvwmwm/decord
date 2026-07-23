// Module ID: 6665
// Function ID: 51329
// Name: _callSuper
// Dependencies: [6, 7, 15, 17, 18, 57, 1858, 5620, 5618, 2]

// Module 6665 (_callSuper)
import Record from "Record";
import add from "add";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _slicedToArray from "_slicedToArray";
import importDefaultResult from "Record";

const require = arg1;
function _callSuper(arg0, arg1, arg2) {
  const obj = callback2(arg1);
  if (_isNativeReflectConstruct()) {
    const _Reflect = Reflect;
    const items = [];
    let constructResult = Reflect.construct(obj, items, callback2(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, undefined);
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
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function convertPriceToMajorUnit(amount) {
  let tmp = importDefault(5620);
  tmp = new tmp(amount.amount);
  return tmp.dividedBy(10 ** amount.exponent).toNumber();
}
let tmp3 = ((importDefaultResult) => {
  class AvailablePlanRecord {
    constructor(arg0) {
      tmp = outer1_3(this, AvailablePlanRecord);
      tmp2 = outer1_10(this, AvailablePlanRecord);
      ({ id: tmp2.id, quantity: tmp2.quantity, price: tmp2.price, total: tmp2.total, addOnPlans } = importDefaultResult);
      if (null == addOnPlans) {
        addOnPlans = [];
      }
      tmp2.addOnPlans = addOnPlans;
      return tmp2;
    }
  }
  callback3(AvailablePlanRecord, importDefaultResult);
  let obj = {
    key: "getPlanQuantities",
    value() {
      let iter2;
      const items = [, ];
      ({ id: arr[0], quantity: arr[1] } = this);
      const items1 = [items];
      const map = new Map(items1);
      const tmp = outer1_12(this.addOnPlans);
      let iter = tmp();
      if (!iter.done) {
        do {
          let value = iter.value;
          value = map.get(value.id);
          let num = 0;
          if (null != value) {
            num = value;
          }
          let result = map.set(value.id, num + value.quantity);
          iter2 = tmp();
          iter = iter2;
        } while (!iter2.done);
      }
      return map;
    }
  };
  let items = [obj, , , ];
  obj = {
    key: "matchesItems",
    value(arg0) {
      let iter2;
      let planId;
      let quantity;
      const planQuantities = this.getPlanQuantities();
      const map = new Map();
      const tmp2 = outer1_12(arg0);
      let iter = tmp2();
      if (!iter.done) {
        do {
          ({ planId, quantity } = iter.value);
          let value = map.get(planId);
          let num = 0;
          if (null != value) {
            num = value;
          }
          let result = map.set(planId, num + quantity);
          iter2 = tmp2();
          iter = iter2;
        } while (!iter2.done);
      }
      let flag = false;
      if (planQuantities.size === map.size) {
        const tmp6 = outer1_12(planQuantities);
        let iter3 = tmp6();
        flag = true;
        if (!iter3.done) {
          flag = false;
          while (map.get(tmp8[0]) === tmp9) {
            let iter4 = tmp6();
            iter3 = iter4;
            flag = true;
            if (iter4.done) {
              break;
            }
          }
          tmp8 = outer1_8(iter3.value, 2);
        }
      }
      return flag;
    }
  };
  items[1] = obj;
  obj = {
    key: "getPriceString",
    value() {
      const total = this.total;
      return AvailablePlanRecord(outer1_2[8]).formatPrice(outer1_14(total), total.currency, { convertToMajorUnits: false });
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getAddOnPrice",
    value() {
      const self = this;
      if (0 === this.addOnPlans.length) {
        return null;
      } else {
        const price = self.addOnPlans[0].price;
        const currency = price.currency;
        let obj = {};
        obj = { currency, exponent: price.exponent };
        const addOnPlans = self.addOnPlans;
        obj.amount = addOnPlans.reduce((arg0, price) => arg0 + price.price.amount * price.quantity, 0);
        obj.majorUnits = outer1_14(obj);
        obj.currency = currency;
        return obj;
      }
    }
  };
  let items1 = [
    {
      key: "createFromServer",
      value(id) {
        let tmp = AvailablePlanRecord;
        const obj = { id: id.id, quantity: id.quantity, price: id.price, total: id.total };
        let add_on_plans = id.add_on_plans;
        if (null == add_on_plans) {
          add_on_plans = [];
        }
        obj.addOnPlans = add_on_plans;
        tmp = new tmp(obj);
        return tmp;
      }
    }
  ];
  return callback(AvailablePlanRecord, items, items1);
})(importDefaultResult);
let closure_9 = tmp3;
const tmp4 = ((importDefaultResult) => {
  class CheckoutContextRecord {
    constructor(arg0) {
      tmp = outer1_3(this, CheckoutContextRecord);
      tmp2 = outer1_10(this, CheckoutContextRecord);
      paymentSources = importDefaultResult.paymentSources;
      if (null == paymentSources) {
        paymentSources = [];
      }
      tmp2.paymentSources = paymentSources;
      storeCountry = importDefaultResult.storeCountry;
      tmp3 = null;
      if (null != storeCountry) {
        tmp3 = storeCountry;
      }
      tmp2.storeCountry = tmp3;
      allowedCurrencies = importDefaultResult.allowedCurrencies;
      if (null == allowedCurrencies) {
        allowedCurrencies = [];
      }
      tmp2.allowedCurrencies = allowedCurrencies;
      availablePlans = importDefaultResult.availablePlans;
      if (null == availablePlans) {
        availablePlans = [];
      }
      tmp2.availablePlans = availablePlans;
      return tmp2;
    }
  }
  callback3(CheckoutContextRecord, importDefaultResult);
  let obj = {
    key: "getAvailablePlanForItems",
    value(arg0) {
      let closure_0 = arg0;
      const availablePlans = this.availablePlans;
      const found = availablePlans.find((matchesItems) => matchesItems.matchesItems(closure_0));
      let tmp2 = null;
      if (null != found) {
        tmp2 = found;
      }
      return tmp2;
    }
  };
  const items = [obj];
  obj = {
    key: "createFromOrder",
    value(checkout_context) {
      checkout_context = undefined;
      if (null != checkout_context) {
        checkout_context = checkout_context.checkout_context;
      }
      let tmp3 = null;
      if (null != checkout_context) {
        tmp3 = CheckoutContextRecord;
        const obj = {};
        let payment_sources = checkout_context.payment_sources;
        if (null == payment_sources) {
          payment_sources = [];
        }
        obj.paymentSources = payment_sources;
        let country = null;
        if (null != checkout_context.store_country) {
          country = checkout_context.store_country.country;
        }
        obj.storeCountry = country;
        let allowed_currencies = checkout_context.allowed_currencies;
        if (null == allowed_currencies) {
          allowed_currencies = [];
        }
        obj.allowedCurrencies = allowed_currencies;
        let available_plans = checkout_context.available_plans;
        if (null == available_plans) {
          available_plans = [];
        }
        obj.availablePlans = available_plans.map(outer1_9.createFromServer);
        const prototype = tmp3.prototype;
        tmp3 = new tmp3(obj);
      }
      return tmp3;
    }
  };
  const items1 = [obj];
  return callback(CheckoutContextRecord, items, items1);
})(importDefaultResult);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/payments/records/CheckoutContextRecord.tsx");

export default tmp4;
export const AvailablePlanRecord = tmp3;
