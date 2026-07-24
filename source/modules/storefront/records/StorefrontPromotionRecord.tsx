// Module ID: 8728
// Function ID: 69035
// Name: _isNativeReflectConstruct
// Dependencies: [57, 6, 7, 15, 17, 18, 1858, 2]

// Module 8728 (_isNativeReflectConstruct)
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
let result = require("_defineProperties").fileFinishedImporting("modules/storefront/records/StorefrontPromotionRecord.tsx");

export default tmp2;
