// Module ID: 6664
// Function ID: 51328
// Name: _callSuper
// Dependencies: [6, 7, 15, 17, 18, 1858, 3785, 6665, 6666, 2]

// Module 6664 (_callSuper)
import _callSuper from "_callSuper";
import closure_1 from "_callSuper";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import importDefaultResult from "Record";
import { BaseInvoiceRecord } from "_callSuper";
import closure_6 from "_callSuper";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

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
  let _callSuper = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return _callSuper;
  }
  const result = _isNativeReflectConstruct();
}
let tmp3 = ((importDefaultResult) => {
  class BillingFacetRecord {
    constructor(arg0) {
      tmp = BillingFacetRecord(this, BillingFacetRecord);
      tmp2 = outer1_9(this, BillingFacetRecord);
      ({ paymentGateway: tmp2.paymentGateway, paymentSourceId } = importDefaultResult);
      tmp3 = null;
      if (null != paymentSourceId) {
        tmp3 = paymentSourceId;
      }
      tmp2.paymentSourceId = tmp3;
      invoicePreview = importDefaultResult.invoicePreview;
      tmp4 = null;
      if (null != invoicePreview) {
        tmp4 = invoicePreview;
      }
      tmp2.invoicePreview = tmp4;
      return tmp2;
    }
  }
  callback3(BillingFacetRecord, importDefaultResult);
  const items = [
    {
      key: "createFromOrder",
      value(billing_facet) {
        let payment_source_id;
        billing_facet = billing_facet.billing_facet;
        let tmp = null;
        if (null != billing_facet) {
          const obj = {};
          ({ payment_gateway: obj.paymentGateway, payment_source_id } = billing_facet);
          let tmp3 = null;
          if (null != payment_source_id) {
            tmp3 = payment_source_id;
          }
          obj.paymentSourceId = tmp3;
          obj.invoicePreview = outer1_5.createInvoiceFromOrder(billing_facet);
          const prototype = tmp2.prototype;
          tmp = new tmp2(obj);
        }
        return tmp;
      }
    }
  ];
  return callback(BillingFacetRecord, null, items);
})(importDefaultResult);
let closure_8 = tmp3;
let tmp4 = ((importDefaultResult) => {
  class OrderRecord {
    constructor(arg0) {
      tmp = OrderRecord(this, OrderRecord);
      tmp2 = outer1_9(this, OrderRecord);
      ({ id: tmp2.id, status: tmp2.status, revision: tmp2.revision, orderLineItems } = importDefaultResult);
      if (null == orderLineItems) {
        orderLineItems = [];
      }
      tmp2.orderLineItems = orderLineItems;
      billingFacetRecord = importDefaultResult.billingFacetRecord;
      tmp3 = null;
      if (null != billingFacetRecord) {
        tmp3 = billingFacetRecord;
      }
      tmp2.billingFacetRecord = tmp3;
      externalGatewayFacet = importDefaultResult.externalGatewayFacet;
      tmp4 = null;
      if (null != externalGatewayFacet) {
        tmp4 = externalGatewayFacet;
      }
      tmp2.externalGatewayFacet = tmp4;
      giftingFacet = importDefaultResult.giftingFacet;
      tmp5 = null;
      if (null != giftingFacet) {
        tmp5 = giftingFacet;
      }
      tmp2.giftingFacet = tmp5;
      subscriptionFacet = importDefaultResult.subscriptionFacet;
      tmp6 = null;
      if (null != subscriptionFacet) {
        tmp6 = subscriptionFacet;
      }
      tmp2.subscriptionFacet = tmp6;
      checkoutContextRecord = importDefaultResult.checkoutContextRecord;
      tmp7 = null;
      if (null != checkoutContextRecord) {
        tmp7 = checkoutContextRecord;
      }
      tmp2.checkoutContextRecord = tmp7;
      ({ createdAt: tmp2.createdAt, unsatisfiedConstraints } = importDefaultResult);
      if (null == unsatisfiedConstraints) {
        unsatisfiedConstraints = [];
      }
      tmp2.unsatisfiedConstraints = unsatisfiedConstraints;
      return tmp2;
    }
  }
  callback3(OrderRecord, importDefaultResult);
  let obj = {
    key: "getInvoicePreview",
    value() {
      let invoicePreview = null;
      if (null != this.billingFacetRecord) {
        invoicePreview = this.billingFacetRecord.invoicePreview;
      }
      return invoicePreview;
    }
  };
  const items = [obj, ];
  obj = {
    key: "firstUnsatisfiedConstraintReasonCode",
    value() {
      let reason_code = null;
      if (this.unsatisfiedConstraints.length > 0) {
        reason_code = this.unsatisfiedConstraints[0].reason_code;
      }
      return reason_code;
    }
  };
  items[1] = obj;
  obj = {
    key: "createFromServer",
    value(id) {
      let unsatisfied_constraints;
      let tmp = OrderRecord;
      const obj = { id: id.id, status: id.status, revision: id.revision, orderLineItems: id.order_line_items, billingFacetRecord: outer1_8.createFromOrder(id) };
      const external_gateway_facet = id.external_gateway_facet;
      let tmp2 = null;
      if (null != external_gateway_facet) {
        tmp2 = external_gateway_facet;
      }
      obj.externalGatewayFacet = tmp2;
      const gifting_facet = id.gifting_facet;
      let tmp3 = null;
      if (null != gifting_facet) {
        tmp3 = gifting_facet;
      }
      obj.giftingFacet = tmp3;
      obj.checkoutContextRecord = outer1_6.createFromOrder(id);
      ({ created_at: obj.createdAt, unsatisfied_constraints } = id);
      if (null == unsatisfied_constraints) {
        unsatisfied_constraints = [];
      }
      obj.unsatisfiedConstraints = unsatisfied_constraints;
      obj.subscriptionFacet = outer1_7.createFromServer(id.subscription_facet);
      tmp = new tmp(obj);
      return tmp;
    }
  };
  const items1 = [obj];
  return callback(OrderRecord, items, items1);
})(importDefaultResult);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/payments/records/OrderRecord.tsx");

export default tmp4;
export const BillingFacetRecord = tmp3;
