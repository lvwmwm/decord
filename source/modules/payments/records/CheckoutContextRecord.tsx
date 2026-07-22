// Module ID: 6660
// Function ID: 51300
// Name: _callSuper
// Dependencies: []

// Module 6660 (_callSuper)
function _callSuper(arg0, arg1, arg2) {
  const obj = callback2(arg1);
  if (_isNativeReflectConstruct()) {
    const _Reflect = Reflect;
    const items = [];
    let constructResult = Reflect.construct(obj, items, callback2(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, undefined);
  }
  return closure_4(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
const importDefaultResult = importDefault(dependencyMap[6]);
const tmp3 = (importDefaultResult) => {
  class AvailablePlanRecord {
    constructor(arg0) {
      tmp = closure_2(this, AvailablePlanRecord);
      tmp2 = closure_9(this, AvailablePlanRecord);
      ({ id: tmp2.id, quantity: tmp2.quantity, price: tmp2.price, total: tmp2.total, addOnPlans } = importDefaultResult);
      if (null == addOnPlans) {
        addOnPlans = [];
      }
      tmp2.addOnPlans = addOnPlans;
      return tmp2;
    }
  }
  const arg1 = AvailablePlanRecord;
  callback3(AvailablePlanRecord, importDefaultResult);
  let obj = {
    key: "getPlanQuantities",
    value() {
      let iter2;
      const items = [, ];
      ({ id: arr[0], quantity: arr[1] } = this);
      const items1 = [items];
      const map = new Map(items1);
      const tmp = callback4(this.addOnPlans);
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
  const items = [obj, , ];
  obj = {
    key: "matchesItems",
    value(arg0) {
      let iter2;
      let planId;
      let quantity;
      const planQuantities = this.getPlanQuantities();
      const map = new Map();
      const tmp2 = callback4(arg0);
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
        const tmp6 = callback4(planQuantities);
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
          const tmp8 = callback2(iter3.value, 2);
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
      const result = total.amount / Math.pow(10, total.exponent);
      return AvailablePlanRecord(closure_1[7]).formatPrice(result, total.currency, { convertToMajorUnits: false });
    }
  };
  items[2] = obj;
  const items1 = [
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
}(importDefaultResult);
const tmp4 = (importDefaultResult) => {
  class CheckoutContextRecord {
    constructor(arg0) {
      tmp = closure_2(this, CheckoutContextRecord);
      tmp2 = closure_9(this, CheckoutContextRecord);
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
  const arg1 = CheckoutContextRecord;
  callback3(CheckoutContextRecord, importDefaultResult);
  let obj = {
    key: "getAvailablePlanForItems",
    value(arg0) {
      const CheckoutContextRecord = arg0;
      const availablePlans = this.availablePlans;
      const found = availablePlans.find((matchesItems) => matchesItems.matchesItems(matchesItems));
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
        obj.availablePlans = available_plans.map(createFromServer.createFromServer);
        const prototype = tmp3.prototype;
        tmp3 = new tmp3(obj);
      }
      return tmp3;
    }
  };
  const items1 = [obj];
  return callback(CheckoutContextRecord, items, items1);
}(importDefaultResult);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/payments/records/CheckoutContextRecord.tsx");

export default tmp4;
export const AvailablePlanRecord = tmp3;
