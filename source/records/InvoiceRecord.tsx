// Module ID: 3785
// Function ID: 29498
// Name: _callSuper
// Dependencies: [6, 7, 15, 17, 18, 1858, 3786, 2]

// Module 3785 (_callSuper)
import coalesceInvoiceItems from "coalesceInvoiceItems";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import tmp2 from "Record";

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
const tmp3 = ((arg0) => {
  class InvoiceRecord {
    constructor(arg0) {
      tmp = outer1_2(this, InvoiceRecord);
      items = [];
      items[0] = arg0;
      tmp2 = outer1_7(this, InvoiceRecord, items);
      ({ id: tmp2.id, invoiceItems } = arg0);
      if (null == invoiceItems) {
        invoiceItems = [];
      }
      tmp2.invoiceItems = invoiceItems;
      ({ taxInclusive: tmp2.taxInclusive, subscriptionPeriodStart: tmp2.subscriptionPeriodStart, subscriptionPeriodEnd: tmp2.subscriptionPeriodEnd, status: tmp2.status, orbsReward: tmp2.orbsReward, checkoutContext: tmp2.checkoutContext } = arg0);
      return tmp2;
    }
  }
  callback3(InvoiceRecord, arg0);
  let obj = {
    key: "findInvoiceItemByPlanId",
    value(arg0) {
      let closure_0 = arg0;
      const invoiceItems = this.invoiceItems;
      const found = invoiceItems.find((subscriptionPlanId) => subscriptionPlanId.subscriptionPlanId === closure_0);
      let tmp2 = null;
      if (null != found) {
        tmp2 = found;
      }
      return tmp2;
    }
  };
  let items = [obj, ];
  obj = {
    key: "getDiscountIdIfExists",
    value() {
      const invoiceItems = this.invoiceItems;
      const found = invoiceItems.find((discounts) => discounts.discounts.length > 0);
      if (null != found) {
        if (0 !== found.discounts.length) {
          const first = found.discounts[0];
          if (null != first) {
            return first.discount_id;
          }
        }
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "createInvoiceFromServer",
    value(id) {
      let tmp = InvoiceRecord;
      const obj = { id: id.id };
      const invoice_items = id.invoice_items;
      let mapped;
      if (null != invoice_items) {
        mapped = invoice_items.map(InvoiceRecord(outer1_1[6]).createInvoiceItemFromServer);
      }
      obj.invoiceItems = mapped;
      ({ total: obj.total, subtotal: obj.subtotal, currency: obj.currency, tax: obj.tax, tax_inclusive: obj.taxInclusive } = id);
      obj.subscriptionPeriodStart = new Date(id.subscription_period_start);
      const date = new Date(id.subscription_period_start);
      obj.subscriptionPeriodEnd = new Date(id.subscription_period_end);
      ({ status: obj.status, orbs_reward: obj.orbsReward, checkout_context: obj.checkoutContext } = id);
      tmp = new tmp(obj);
      return tmp;
    }
  };
  const items1 = [
    obj,
    {
      key: "createFromOTPPreview",
      value(invoice_items) {
        let tmp = InvoiceRecord;
        const obj = { id: "" };
        invoice_items = invoice_items.invoice_items;
        let mapped;
        if (null != invoice_items) {
          mapped = invoice_items.map(InvoiceRecord(outer1_1[6]).createInvoiceItemFromServer);
        }
        obj.invoiceItems = mapped;
        ({ amount: obj.total, subtotal: obj.subtotal, currency: obj.currency, tax: obj.tax, tax_inclusive: obj.taxInclusive } = invoice_items);
        obj.subscriptionPeriodStart = new Date(0);
        const date = new Date(0);
        obj.subscriptionPeriodEnd = new Date(0);
        ({ orbs_reward: obj.orbsReward, checkout_context: obj.checkoutContext } = invoice_items);
        tmp = new tmp(obj);
        return tmp;
      }
    }
  ];
  return callback(InvoiceRecord, items, items1);
})(tmp2);
let result = require("_possibleConstructorReturn").fileFinishedImporting("records/InvoiceRecord.tsx");

export default tmp3;
export const BaseInvoiceRecord = tmp2;
