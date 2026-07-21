// Module ID: 6661
// Function ID: 51308
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 6661 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
const tmp2 = (arg0) => {
  class SubscriptionFacetRecord {
    constructor(arg0) {
      self = this;
      tmp = SubscriptionFacetRecord(this, SubscriptionFacetRecord);
      obj = closure_3(SubscriptionFacetRecord);
      tmp2 = closure_2;
      if (closure_5()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj, [], closure_3(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      subscriptionId = arg0.subscriptionId;
      tmp7 = null;
      if (null != subscriptionId) {
        tmp7 = subscriptionId;
      }
      tmp2Result.subscriptionId = tmp7;
      subscriptionPreview = arg0.subscriptionPreview;
      tmp8 = null;
      if (null != subscriptionPreview) {
        tmp8 = subscriptionPreview;
      }
      tmp2Result.subscriptionPreview = tmp8;
      updateType = arg0.updateType;
      tmp9 = null;
      if (null != updateType) {
        tmp9 = updateType;
      }
      tmp2Result.updateType = tmp9;
      resetBillingCycle = arg0.resetBillingCycle;
      tmp2Result.resetBillingCycle = null != resetBillingCycle && resetBillingCycle;
      return tmp2Result;
    }
  }
  let closure_0 = SubscriptionFacetRecord;
  callback2(SubscriptionFacetRecord, arg0);
  const items = [
    {
      key: "createFromServer",
      value(subscription_id) {
        let renewal_line_items;
        let subscription_trial_id;
        let tmp = null;
        if (null != subscription_id) {
          let obj = {};
          subscription_id = subscription_id.subscription_id;
          let tmp3 = null;
          if (null != subscription_id) {
            tmp3 = subscription_id;
          }
          obj.subscriptionId = tmp3;
          const subscription_preview = subscription_id.subscription_preview;
          let tmp4 = null;
          if (null != subscription_preview) {
            obj = {};
            ({ currency: obj2.currency, country_code: obj2.countryCode, subscription_trial_id } = subscription_preview);
            let tmp5 = null;
            if (null != subscription_trial_id) {
              tmp5 = subscription_trial_id;
            }
            obj.subscriptionTrialId = tmp5;
            const renewal_info = subscription_preview.renewal_info;
            let tmp6 = null;
            if (null != renewal_info) {
              obj = {};
              ({ price: obj3.price, currency: obj3.currency, renewal_line_items } = renewal_info);
              if (null == renewal_line_items) {
                renewal_line_items = [];
              }
              obj.renewalLineItems = renewal_line_items.map((refOrderLineItemId) => ({ refOrderLineItemId: refOrderLineItemId.ref_order_line_item_id, price: refOrderLineItemId.price }));
              tmp6 = obj;
            }
            obj.renewalInfo = tmp6;
            const subscription_type = subscription_preview.subscription_type;
            let tmp7 = null;
            if (null != subscription_type) {
              tmp7 = subscription_type;
            }
            obj.subscriptionType = tmp7;
            tmp4 = obj;
          }
          obj.subscriptionPreview = tmp4;
          const update_type = subscription_id.update_type;
          let tmp8 = null;
          if (null != update_type) {
            tmp8 = update_type;
          }
          obj.updateType = tmp8;
          const reset_billing_cycle = subscription_id.reset_billing_cycle;
          obj.resetBillingCycle = null != reset_billing_cycle && reset_billing_cycle;
          const prototype = tmp2.prototype;
          tmp = new tmp2(obj);
        }
        return tmp;
      }
    }
  ];
  return callback(SubscriptionFacetRecord, null, items);
}(importDefault(dependencyMap[5]));
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/payments/records/SubscriptionFacetRecord.tsx");

export default tmp2;
