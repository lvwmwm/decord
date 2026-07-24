// Module ID: 6776
// Function ID: 53373
// Name: _callSuper
// Dependencies: [57, 6, 7, 15, 17, 102, 18, 6777, 6778, 6783, 655, 653, 4171, 1876, 2]

// Module 6776 (_callSuper)
import _slicedToArray from "_slicedToArray";
import _inherits from "_inherits";
import CollectiblesBundledProductRecord from "CollectiblesBundledProductRecord";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _get from "_get";
import closure_9 from "_inherits";
import closure_10 from "CollectiblesBundledProductRecord";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { REWARD_CATEGORY_AND_REWARD_SKU_IDS as closure_13 } from "items";
import ME from "ME";
import tmp5 from "_isNativeReflectConstruct";
import importDefaultResult from "_isNativeReflectConstruct";

let closure_11;
let closure_12;
let closure_14;
let closure_15;
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
function _superPropGet(arg0, arg1, arg2, arg3) {
  let closure_0 = arg2;
  let prototype = arg0;
  if (0) {
    prototype = arg0.prototype;
  }
  const tmpResult = _get(_getPrototypeOf(prototype), "fromServer", arg2);
  const importDefault = tmpResult;
  let fn = tmpResult;
  if (2) {
    fn = tmpResult;
    if ("function" === typeof tmpResult) {
      fn = (arg0) => tmpResult.apply(closure_0, arg0);
    }
  }
  return fn;
}
({ createCollectiblesItemsFromServerResponse: closure_11, transformSKUToCollectiblesItem: closure_12 } = _createForOfIteratorHelperLoose);
({ PREMIUM_TYPE_NONE: closure_14, PriceSetAssignmentPurchaseTypes: closure_15 } = ME);
let tmp6 = ((arg0) => {
  class CollectiblesVariantProductRecord {
    constructor(arg0) {
      tmp = outer1_4(this, CollectiblesVariantProductRecord);
      items = [];
      items[0] = arg0;
      tmp2 = outer1_17(this, CollectiblesVariantProductRecord, items);
      ({ baseVariantName: tmp2.baseVariantName, baseVariantSkuId: tmp2.baseVariantSkuId, variantLabel: tmp2.variantLabel, variantValue: tmp2.variantValue } = arg0);
      return tmp2;
    }
  }
  callback3(CollectiblesVariantProductRecord, arg0);
  let items = [
    {
      key: "fromServer",
      value(arg0) {
        let base_variant_name;
        let base_variant_sku_id;
        let variant_label;
        let variant_value;
        let obj = { base_variant_name: 0, base_variant_sku_id: 0, variant_label: 0, variant_value: 0 };
        ({ base_variant_name, base_variant_sku_id, variant_label, variant_value } = arg0);
        Object.setPrototypeOf(null);
        obj = {};
        const merged = Object.assign(arg0, obj);
        const items = [merged];
        const merged1 = Object.assign(outer1_19(CollectiblesVariantProductRecord, "fromServer", this, 2)(items));
        obj["baseVariantName"] = base_variant_name;
        obj["baseVariantSkuId"] = base_variant_sku_id;
        obj["variantLabel"] = variant_label;
        obj["variantValue"] = variant_value;
        return new CollectiblesVariantProductRecord(obj);
      }
    }
  ];
  return callback(CollectiblesVariantProductRecord, null, items);
})(tmp5);
let closure_16 = tmp6;
let result = require("_defineProperties").fileFinishedImporting("modules/collectibles/records/CollectiblesProductRecord.tsx");

export default tmp5;
export const CollectiblesVariantProductRecord = tmp6;
