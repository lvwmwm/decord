// Module ID: 8616
// Function ID: 68511
// Name: _isNativeReflectConstruct
// Dependencies: [57, 6, 7, 15, 17, 18, 1859, 2]

// Module 8616 (_isNativeReflectConstruct)
import _slicedToArray from "_slicedToArray";
import Record from "Record";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import tmp2 from "Record";

function _isNativeReflectConstruct() {
  let _slicedToArray = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return _slicedToArray;
  }
  const result = _isNativeReflectConstruct();
}
function parseRewardConfig(discount) {
  let tmp = null;
  if (null != discount) {
    let obj = {};
    let tmp2 = null;
    if (null != discount.discount) {
      obj = { id: discount.discount.id, type: discount.discount.type, amount: discount.discount.amount, fiatEnabled: discount.discount.fiat_enabled, orbsEnabled: discount.discount.orbs_enabled };
      tmp2 = obj;
    }
    obj.discount = tmp2;
    tmp = obj;
  }
  return tmp;
}
function parseSkuIds(arg0) {
  let length;
  if (null == arg0) {
    return null;
  } else {
    let obj = {};
    const _Object = Object;
    const entries = Object.entries(arg0);
    let num4 = 0;
    if (0 < entries.length) {
      do {
        let tmp2 = callback;
        let tmp3 = callback(entries[num4], 2);
        obj = { priceTiers: tmp3[1].price_tiers };
        obj[tmp3[0]] = obj;
        num4 = num4 + 1;
        length = entries.length;
      } while (num4 < length);
    }
    return obj;
  }
}
function parseTenantMetadata(collectibles) {
  const obj = {};
  let tmp;
  if (null != collectibles.collectibles) {
    tmp = parseCollectiblesTenantMetadata(collectibles.collectibles);
  }
  obj.collectibles = tmp;
  return obj;
}
function parseCollectiblesTenantMetadata(collectibles) {
  let obj = {};
  const reward = collectibles.reward;
  let nagbar;
  if (null != reward) {
    const storefront = reward.storefront;
    if (null != storefront) {
      nagbar = storefront.nagbar;
    }
  }
  let tmp2;
  if (null != nagbar) {
    obj = {};
    obj = {};
    const obj1 = {};
    const header_text = collectibles.reward.storefront.nagbar.header_text;
    let tmp3;
    if (null != header_text) {
      tmp3 = header_text;
    }
    obj1.headerText = tmp3;
    const body_text = collectibles.reward.storefront.nagbar.body_text;
    let tmp4;
    if (null != body_text) {
      tmp4 = body_text;
    }
    obj1.bodyText = tmp4;
    let tmp5;
    if (null != collectibles.reward.storefront.nagbar.cta) {
      const obj2 = {};
      const text = collectibles.reward.storefront.nagbar.cta.text;
      let tmp6;
      if (null != text) {
        tmp6 = text;
      }
      obj2.text = tmp6;
      tmp5 = obj2;
    }
    obj1.cta = tmp5;
    const help_center_id = collectibles.reward.storefront.nagbar.help_center_id;
    let tmp7;
    if (null != help_center_id) {
      tmp7 = help_center_id;
    }
    obj1.helpCenterId = tmp7;
    obj.nagbar = obj1;
    obj.storefront = obj;
    tmp2 = obj;
  }
  obj.reward = tmp2;
  return obj;
}
let result = require("_defineProperties").fileFinishedImporting("modules/storefront/records/StorefrontPromotionRecord.tsx");

export default tmp2;
