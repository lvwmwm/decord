// Module ID: 3783
// Function ID: 29488
// Name: _callSuper
// Dependencies: []

// Module 3783 (_callSuper)
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const tmp2 = (arg0) => {
  class BaseInvoiceRecord {
    constructor(arg0) {
      tmp = closure_2(this, BaseInvoiceRecord);
      tmp2 = closure_7(this, BaseInvoiceRecord);
      ({ total: tmp2.total, subtotal: tmp2.subtotal, tax: tmp2.tax, currency: tmp2.currency, invoiceItems } = arg0);
      if (null == invoiceItems) {
        invoiceItems = [];
      }
      tmp2.invoiceItems = invoiceItems;
      return tmp2;
    }
  }
  const arg1 = BaseInvoiceRecord;
  callback3(BaseInvoiceRecord, arg0);
  let obj = {
    key: "getInvoicePreviewLineItemForSku",
    value(arg0) {
      const BaseInvoiceRecord = arg0;
      const invoiceItems = this.invoiceItems;
      const found = invoiceItems.find((skuId) => skuId.skuId === skuId);
      let tmp2 = null;
      if (null != found) {
        tmp2 = found;
      }
      return tmp2;
    }
  };
  const items = [obj, ];
  obj = {
    key: "getInvoicePreviewLineItemUnitPriceForSku",
    value(arg0) {
      const invoicePreviewLineItemForSku = this.getInvoicePreviewLineItemForSku(arg0);
      let amount = null;
      if (null != invoicePreviewLineItemForSku) {
        amount = null;
        if (null != invoicePreviewLineItemForSku.unitPrice) {
          amount = invoicePreviewLineItemForSku.unitPrice.amount;
        }
      }
      return amount;
    }
  };
  items[1] = obj;
  obj = {
    key: "createFromServer",
    value(total) {
      const invoice_items = total.invoice_items;
      const obj = { total: total.total, subtotal: total.subtotal, tax: total.tax, currency: total.currency, invoiceItems: invoice_items.map((skuId) => ({ skuId: skuId.sku_id, quantity: skuId.quantity, description: skuId.description })) };
      return new BaseInvoiceRecord({ total: total.total, subtotal: total.subtotal, tax: total.tax, currency: total.currency, invoiceItems: invoice_items.map((skuId) => ({ skuId: skuId.sku_id, quantity: skuId.quantity, description: skuId.description })) });
    }
  };
  const items1 = [
    obj,
    {
      key: "createInvoiceFromOrder",
      value(billing_facet) {
        const BaseInvoiceRecord = billing_facet;
        billing_facet = billing_facet.billing_facet;
        let invoice_preview = null;
        if (null != billing_facet) {
          invoice_preview = billing_facet.invoice_preview;
        }
        if (null == invoice_preview) {
          return null;
        } else {
          const line_items = invoice_preview.line_items;
          const mapped = line_items.map((unit_price) => {
            const order_line_items = unit_price.order_line_items;
            const found = order_line_items.find((id) => id.id === id.ref_order_line_item_id);
            let tmp2 = null;
            if (null != found) {
              let obj = { skuId: found.sku_id };
              obj = { amount: unit_price.unit_price, currency: invoice_preview.currency };
              obj.unitPrice = obj;
              obj.quantity = unit_price.quantity;
              tmp2 = obj;
            }
            return tmp2;
          });
          const obj = {};
          ({ total: obj.total, subtotal: obj.subtotal, tax: obj.tax, currency: obj.currency } = invoice_preview);
          obj.invoiceItems = mapped.filter((arg0) => null != arg0);
          const prototype = BaseInvoiceRecord.prototype;
          const tmp6 = new BaseInvoiceRecord(obj);
          return tmp6;
        }
      }
    }
  ];
  return callback(BaseInvoiceRecord, items, items1);
}(importDefault(dependencyMap[5]));
const tmp3 = (arg0) => {
  class InvoiceRecord {
    constructor(arg0) {
      tmp = closure_2(this, InvoiceRecord);
      items = [];
      items[0] = arg0;
      tmp2 = closure_7(this, InvoiceRecord, items);
      ({ id: tmp2.id, invoiceItems } = arg0);
      if (null == invoiceItems) {
        invoiceItems = [];
      }
      tmp2.invoiceItems = invoiceItems;
      ({ taxInclusive: tmp2.taxInclusive, subscriptionPeriodStart: tmp2.subscriptionPeriodStart, subscriptionPeriodEnd: tmp2.subscriptionPeriodEnd, status: tmp2.status, orbsReward: tmp2.orbsReward, checkoutContext: tmp2.checkoutContext } = arg0);
      return tmp2;
    }
  }
  const arg1 = InvoiceRecord;
  callback3(InvoiceRecord, arg0);
  let obj = {
    key: "findInvoiceItemByPlanId",
    value(arg0) {
      const InvoiceRecord = arg0;
      const invoiceItems = this.invoiceItems;
      const found = invoiceItems.find((subscriptionPlanId) => subscriptionPlanId.subscriptionPlanId === subscriptionPlanId);
      let tmp2 = null;
      if (null != found) {
        tmp2 = found;
      }
      return tmp2;
    }
  };
  const items = [obj, ];
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
        mapped = invoice_items.map(InvoiceRecord(closure_1[6]).createInvoiceItemFromServer);
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
          mapped = invoice_items.map(InvoiceRecord(closure_1[6]).createInvoiceItemFromServer);
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
}(tmp2);
const result = arg1(dependencyMap[7]).fileFinishedImporting("records/InvoiceRecord.tsx");

export default tmp3;
export const BaseInvoiceRecord = tmp2;
