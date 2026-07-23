// Module ID: 3786
// Function ID: 29522
// Name: coalesceInvoiceItems
// Dependencies: [22, 2]
// Exports: coalesceInvoiceItems, createInvoiceItemFromServer

// Module 3786 (coalesceInvoiceItems)
const result = require("set").fileFinishedImporting("modules/premium/PremiumSubscriptionInvoiceItem.tsx");

export const coalesceInvoiceItems = function coalesceInvoiceItems(arr) {
  const items = [];
  const set = new Set();
  const mapped = arr.map((subscriptionPlanId) => {
    let tmp;
    let arr = items;
    let num = 0;
    if (0 < items.length) {
      while (true) {
        tmp = arr[num];
        if (tmp.subscriptionPlanId === subscriptionPlanId.subscriptionPlanId) {
          if (tmp.subscriptionPlanPrice === subscriptionPlanId.subscriptionPlanPrice) {
            if (tmp.amount === subscriptionPlanId.amount) {
              let tmp2 = items;
              let tmp3 = set;
              let obj = items(set[0]);
              if (obj.isEqual(tmp.discounts, subscriptionPlanId.discounts)) {
                break;
              }
            }
          }
        }
        num = num + 1;
      }
      set.add(tmp.subscriptionPlanId);
      tmp.quantity = tmp.quantity + subscriptionPlanId.quantity;
    }
    obj = {};
    const merged = Object.assign(subscriptionPlanId);
    arr = items.push(obj);
  });
  return items.map((subscriptionPlanId) => {
    let obj = {};
    let merged = Object.assign(subscriptionPlanId);
    if (set.has(subscriptionPlanId.subscriptionPlanId)) {
      obj.amount = obj.amount * obj.quantity;
      const discounts = obj.discounts;
      obj.discounts = discounts.map((amount) => {
        const obj = {};
        const merged = Object.assign(amount);
        obj["amount"] = amount.amount * obj.quantity;
        return obj;
      });
      if (null != obj.tax) {
        obj.tax = obj.tax * obj.quantity;
      }
    }
    return obj;
  });
};
export const createInvoiceItemFromServer = function createInvoiceItemFromServer(id) {
  return { id: id.id, subscriptionPlanId: id.subscription_plan_id, subscriptionPlanPrice: id.subscription_plan_price, amount: id.amount, quantity: id.quantity, discounts: id.discounts, unitPrice: id.unit_price, tax: id.tax, taxCode: id.tax_code, nominalTaxRate: id.nominal_tax_rate };
};
