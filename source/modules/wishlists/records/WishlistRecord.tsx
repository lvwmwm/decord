// Module ID: 8678
// Function ID: 68696
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1858, 4153, 8679, 8680, 8681, 8682, 653, 2]
// Exports: getWishlistProductLines, getWishlistSkuIds, wishlistHasSkuId

// Module 8678 (_isNativeReflectConstruct)
import _callSuper from "_callSuper";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_5 from "_callSuper";
import closure_6 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { SKUProductLines } from "ME";
import importDefaultResult from "Record";
import tmp3 from "Record";

function _isNativeReflectConstruct() {
  let _callSuper = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return _callSuper;
  }
  const result = _isNativeReflectConstruct();
}
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/wishlists/records/WishlistRecord.tsx");

export default tmp3;
export const getWishlistSkuIds = function getWishlistSkuIds(items) {
  items = items.items;
  return items.map((skuId) => skuId.skuId);
};
export const wishlistHasSkuId = function wishlistHasSkuId(items) {
  let _callSuper = arg1;
  items = items.items;
  return items.some((skuId) => skuId.skuId === _callSuper);
};
export const getWishlistProductLines = function getWishlistProductLines(items) {
  items = items.items;
  return new Set(items.map((skuProductLine) => skuProductLine.skuProductLine));
};
