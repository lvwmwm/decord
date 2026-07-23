// Module ID: 4460
// Function ID: 39327
// Name: getPurchaseToken
// Dependencies: [5, 664, 587, 491, 2]
// Exports: getPurchaseTokenHash

// Module 4460 (getPurchaseToken)
import asyncGeneratorStep from "asyncGeneratorStep";

const require = arg1;
function getPurchaseToken() {
  const Storage = require(587) /* Storage */.Storage;
  const value = Storage.get(purchase_token);
  if (null != value) {
    const _Date = Date;
    if (value.expires >= Date.now()) {
      return value.purchaseToken;
    }
  }
  let obj = require(491) /* v1 */;
  const v4Result = obj.v4();
  const Storage2 = require(587) /* Storage */.Storage;
  obj = { purchaseToken: v4Result, expires: Date.now() + closure_4 };
  const result = Storage2.set(purchase_token, obj);
  return v4Result;
}
async function _getPurchaseTokenHash() {
  const parts = outer2_5().split("");
  const uint8Array = new Uint8Array(parts.map((str) => str.charCodeAt(0)));
  const str = outer2_5();
  const uint8Array1 = new Uint8Array(yield subtle.digest({ name: "SHA-256" }, uint8Array));
  const items = [...uint8Array1];
  return btoa(String.fromCharCode.apply(items));
}
const purchase_token = "purchase_token";
let closure_4 = 60 * require("set").Millis.DAY;
let result = require("Storage").fileFinishedImporting("utils/PurchaseTokenUtils.tsx");

export { getPurchaseToken };
export const getPurchaseTokenHash = function getPurchaseTokenHash() {
  return _getPurchaseTokenHash(...arguments);
};
