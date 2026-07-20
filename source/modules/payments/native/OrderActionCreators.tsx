// Module ID: 6657
// Function ID: 51264
// Name: getOrders
// Dependencies: []
// Exports: discardOrder, getOrCreateOrder, markOrderAsSigningInProgress, patchOrder, patchOrderLineItem, updateOrder

// Module 6657 (getOrders)
function getOrders(arg0) {
  return _getOrders(...arguments);
}
async function _getOrders(status, arg1) {
  let obj = {};
  status = undefined;
  if (null != status) {
    status = status.status;
  }
  if (null != status) {
    const items = [status.status];
    obj.statuses = items;
  }
  let skuId;
  if (null != status) {
    skuId = status.skuId;
  }
  if (null != skuId) {
    obj.sku_id = status.skuId;
  }
  let createdAfter;
  if (null != status) {
    createdAfter = status.createdAfter;
  }
  if (null != createdAfter) {
    obj.created_after = status.createdAfter;
  }
  let isGift;
  if (null != status) {
    isGift = status.isGift;
  }
  if (null != isGift) {
    obj.is_gift = status.isGift;
  }
  let paymentGateway;
  if (null != status) {
    paymentGateway = status.paymentGateway;
  }
  if (null != paymentGateway) {
    obj.payment_gateway = status.paymentGateway;
  }
  const HTTP = callback(closure_2[4]).HTTP;
  obj = { url: constants.ORDER_LIST, query: obj, rejectWithError: true };
  const body = yield HTTP.get(obj).body;
  let items1 = body;
  if (!body) {
    items1 = [];
  }
  return items1;
}
function createOrder(arg0) {
  return _createOrder(...arguments);
}
async function _createOrder(arg0, arg1) {
  const fn = function*(arg0) {
    let countryCode;
    let externalGatewayFacet;
    let giftInfo;
    let isGift;
    let orderLineItems;
    let paymentGateway;
    let recipientUserId;
    let subscriptionFacet;
    ({ paymentGateway, isGift, giftInfo, externalGatewayFacet, countryCode } = arg0);
    ({ orderLineItems, recipientUserId, subscriptionFacet } = arg0);
    yield undefined;
    let obj = callback2(closure_2[6]);
    obj.dispatch({ type: "ORDER_CREATE_START" });
    if (isGift) {
      obj = { recipient_id: recipientUserId };
      let gift_style;
      if (null != giftInfo) {
        gift_style = giftInfo.gift_style;
      }
      if (null != gift_style) {
        tmp.gift_style = giftInfo.gift_style;
      }
      let emoji_id;
      if (null != giftInfo) {
        emoji_id = giftInfo.emoji_id;
      }
      if (null != emoji_id) {
        tmp.emoji_id = giftInfo.emoji_id;
      }
      let emoji_name;
      if (null != giftInfo) {
        emoji_name = giftInfo.emoji_name;
      }
      if (null != emoji_name) {
        tmp.emoji_name = giftInfo.emoji_name;
      }
      let sound_id;
      if (null != giftInfo) {
        sound_id = giftInfo.sound_id;
      }
      if (null != sound_id) {
        tmp.sound_id = giftInfo.sound_id;
      }
      let reward_sku_ids;
      if (null != giftInfo) {
        reward_sku_ids = giftInfo.reward_sku_ids;
      }
      if (null != reward_sku_ids) {
        tmp.reward_sku_ids = giftInfo.reward_sku_ids;
      }
      let prop;
      if (null != giftInfo) {
        prop = giftInfo.custom_message_contents;
      }
      if (null != prop) {
        tmp.custom_message_contents = giftInfo.custom_message_contents;
      }
    }
    obj = { order_line_items: orderLineItems, billing_facet: { payment_gateway: paymentGateway }, subscription_facet: subscriptionFacet };
    if (null != countryCode) {
      const obj1 = { request_gateway_country_code: countryCode };
      tmp34.location_facet = obj1;
    }
    if (isGift) {
      const obj2 = { is_gift: isGift, gift_customization: tmp };
      tmp34.gifting_facet = obj2;
    }
    if (null != externalGatewayFacet) {
      tmp34.external_gateway_facet = externalGatewayFacet;
    }
    const HTTP = callback(closure_2[4]).HTTP;
    const body = yield HTTP.post({ url: constants.ORDER_CREATE, body: obj, rejectWithError: true, retries: 3 }).body;
    closure_6.info("created order", { orderId: body.id, paymentGateway, body: obj });
    yield callback2(closure_2[6]).dispatch({ type: "ORDER_CREATE_SUCCESS", orderId: body.id, order: body });
    return body;
  };
  fn.next();
  return fn;
}
async function _getOrCreateOrder(arg0, arg1) {
  const fn = function*(arg0) {
    let createdAfter;
    let externalGatewayFacet;
    let giftInfo;
    let isGift;
    let paymentGateway;
    let purchaseType;
    let recipientUserId;
    let skuId;
    let subscriptionPlanId;
    ({ skuId, isGift, paymentGateway, recipientUserId, purchaseType, giftInfo, createdAfter, subscriptionPlanId, externalGatewayFacet } = arg0);
    yield undefined;
    let obj = { isGift, status: constants.DRAFT, skuId, createdAfter };
    const arr = yield closure_8(obj);
    if (arr.length > 0) {
      const first = arr[0];
      obj = { orderId: first.id, skuId, isGift };
      closure_6.info("reusing existing draft order", obj);
      return first;
    } else {
      obj = { paymentGateway, recipientUserId, isGift, giftInfo };
      const obj1 = { sku_id: skuId, quantity: 1, purchase_type: purchaseType, subscription_plan_id: subscriptionPlanId };
      const items = [obj1];
      obj.orderLineItems = items;
      obj.externalGatewayFacet = externalGatewayFacet;
      return yield closure_10(obj);
    }
  };
  fn.next();
  return fn;
}
async function _patchOrderLineItem(arg0, arg1) {
  const fn = function*(expectedRevision) {
    let orderId;
    let orderLineItemId;
    let subscriptionPlanId;
    ({ orderId, orderLineItemId, subscriptionPlanId } = expectedRevision);
    yield undefined;
    let obj = callback2(closure_2[6]);
    obj.dispatch({ type: "ORDER_UPDATE_START" });
    obj = { expected_revision: expectedRevision.expectedRevision, subscription_plan_id: subscriptionPlanId };
    const HTTP = callback(closure_2[4]).HTTP;
    obj = { url: closure_5.ORDER_PATCH_LINE_ITEM(orderId, orderLineItemId), body: obj, rejectWithError: true };
    closure_6.info("updated order line item", { orderId, orderLineItemId, body: obj });
    const tmp3 = yield HTTP.patch(obj);
    yield callback2(closure_2[6]).dispatch({ type: "ORDER_UPDATE_SUCCESS", orderId });
    return tmp3.body.revision;
  };
  fn.next();
  return fn;
}
async function _patchOrder(arg0, arg1) {
  const fn = function*(expectedRevision) {
    let externalGatewayFacet;
    let orderId;
    let orderLineItems;
    let subscriptionFacet;
    ({ orderId, orderLineItems, subscriptionFacet, externalGatewayFacet } = expectedRevision);
    yield undefined;
    let obj = callback2(closure_2[6]);
    obj.dispatch({ type: "ORDER_UPDATE_START" });
    obj = { expected_revision: expectedRevision.expectedRevision };
    if (null != orderLineItems) {
      tmp3.order_line_items = orderLineItems;
    }
    if (null != subscriptionFacet) {
      tmp3.subscription_facet = subscriptionFacet;
    }
    if (null != externalGatewayFacet) {
      tmp3.external_gateway_facet = externalGatewayFacet;
    }
    const HTTP = callback(closure_2[4]).HTTP;
    obj = { url: closure_5.ORDER_UPDATE(orderId), body: tmp3, rejectWithError: true };
    closure_6.info("patched order", { orderId, body: obj });
    yield callback2(closure_2[6]).dispatch({ type: "ORDER_UPDATE_SUCCESS", orderId });
    return yield HTTP.patch(obj).body;
  };
  fn.next();
  return fn;
}
async function _updateOrder(arg0, arg1) {
  const fn = function*(expectedRevision) {
    let giftInfo;
    let orderId;
    ({ orderId, giftInfo } = expectedRevision);
    yield undefined;
    let obj = callback2(closure_2[6]);
    obj.dispatch({ type: "ORDER_UPDATE_START" });
    obj = { expected_revision: expectedRevision.expectedRevision };
    if (null != giftInfo) {
      obj = {};
      if (null != giftInfo.recipient_id) {
        obj.recipient_id = giftInfo.recipient_id;
      }
      if (null != giftInfo.gift_style) {
        obj.gift_style = giftInfo.gift_style;
      }
      if (null != giftInfo.emoji_id) {
        obj.emoji_id = giftInfo.emoji_id;
      }
      if (null != giftInfo.emoji_name) {
        obj.emoji_name = giftInfo.emoji_name;
      }
      if (null != giftInfo.sound_id) {
        obj.sound_id = giftInfo.sound_id;
      }
      if (null != giftInfo.reward_sku_ids) {
        obj.reward_sku_ids = giftInfo.reward_sku_ids;
      }
      if (null != giftInfo.custom_message_contents) {
        obj.custom_message_contents = giftInfo.custom_message_contents;
      }
      const obj1 = { is_gift: true, gift_customization: obj };
      tmp3.gifting_facet = obj1;
    }
    const HTTP = callback(closure_2[4]).HTTP;
    const obj2 = { url: closure_5.ORDER_UPDATE(orderId), body: obj, rejectWithError: true };
    closure_6.info("updated order with gift customization", { orderId, body: obj });
    const tmp25 = yield HTTP.patch({ url: closure_5.ORDER_UPDATE(orderId), body: obj, rejectWithError: true });
    yield callback2(closure_2[6]).dispatch({ type: "ORDER_UPDATE_SUCCESS", orderId });
    return tmp25.body.revision;
  };
  fn.next();
  return fn;
}
async function _discardOrder(arg0, arg1) {
  const HTTP = callback(closure_2[4]).HTTP;
  const tmp = yield HTTP.post({ url: closure_5.ORDER_DISCARD(arg0), rejectWithError: false });
  if (null == tmp.body) {
    const _Error = Error;
    const error = new Error("Invalid discard order response");
    throw error;
  } else {
    return tmp.body;
  }
  const obj = { url: closure_5.ORDER_DISCARD(arg0), rejectWithError: false };
}
async function _markOrderAsSigningInProgress(orderId, arg1) {
  if (null != tmp2) {
    const obj = { orderId };
    closure_6.info("signing already in progress, awaiting existing promise", obj);
    yield closure_7;
  } else {
    const tmp2 = callback(async () => {
      let obj = callback2(closure_2[6]);
      obj = { type: "ORDER_MARK_SIGNING_START", orderId: callback };
      obj.dispatch(obj);
      let obj2 = callback(closure_2[7]);
      const tmp2 = yield obj2.getOrder(closure_0);
      if (null == tmp2) {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error = new Error("Order " + callback + " not found");
        throw error;
      } else {
        const HTTP = callback(closure_2[4]).HTTP;
        obj = { url: closure_5.ORDER_SIGN(callback) };
        const obj1 = { expected_revision: tmp3.revision };
        obj.body = obj1;
        obj.rejectWithError = true;
        yield HTTP.post(obj);
        obj2 = { orderId: callback, revision: tmp2.revision };
        closure_6.info("marked order as signing in progress", obj2);
        const obj3 = { type: "ORDER_MARK_SIGNING_SUCCESS", orderId: callback };
        yield callback2(closure_2[6]).dispatch(obj3);
        let closure_7 = null;
      }
    })();
    yield tmp2;
  }
}
let closure_3 = importDefault(dependencyMap[0]);
const OrderStatus = arg1(dependencyMap[1]).OrderStatus;
const Endpoints = arg1(dependencyMap[2]).Endpoints;
let importDefaultResult = importDefault(dependencyMap[3]);
importDefaultResult = new importDefaultResult("OrderActionCreators");
let closure_7 = null;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/payments/native/OrderActionCreators.tsx");

export const logger = importDefaultResult;
export const DRAFT_ORDER_LOOKBACK_DAYS = 3;
export { getOrders };
export { createOrder };
export const getOrCreateOrder = function getOrCreateOrder(arg0) {
  return _getOrCreateOrder(...arguments);
};
export const patchOrderLineItem = function patchOrderLineItem(arg0) {
  return _patchOrderLineItem(...arguments);
};
export const patchOrder = function patchOrder(arg0) {
  return _patchOrder(...arguments);
};
export const updateOrder = function updateOrder(arg0) {
  return _updateOrder(...arguments);
};
export const discardOrder = function discardOrder(id) {
  return _discardOrder(...arguments);
};
export const markOrderAsSigningInProgress = function markOrderAsSigningInProgress(id) {
  return _markOrderAsSigningInProgress(...arguments);
};
