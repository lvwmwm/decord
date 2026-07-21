// Module ID: 4456
// Function ID: 39279
// Name: getPurchaseToken
// Dependencies: []
// Exports: getPurchaseTokenHash

// Module 4456 (getPurchaseToken)
function getPurchaseToken() {
  const Storage = arg1(dependencyMap[2]).Storage;
  const value = Storage.get(closure_3);
  if (null != value) {
    const _Date = Date;
    if (value.expires >= Date.now()) {
      return value.purchaseToken;
    }
  }
  let obj = arg1(dependencyMap[3]);
  const v4Result = obj.v4();
  const Storage2 = arg1(dependencyMap[2]).Storage;
  obj = { purchaseToken: v4Result, expires: Date.now() + closure_4 };
  const result = Storage2.set(closure_3, obj);
  return v4Result;
}
async function _getPurchaseTokenHash() {
  const parts = callback().split("");
  const uint8Array = new Uint8Array(parts.map((str) => str.charCodeAt(0)));
  const str = callback();
  const uint8Array1 = new Uint8Array(yield subtle.digest({ name: "SHA-256" }, uint8Array));
  const items = [...uint8Array1];
  return btoa(String.fromCharCode.apply(items));
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = "purchase_token";
let closure_4 = 60 * importDefault(dependencyMap[1]).Millis.DAY;
const result = arg1(dependencyMap[4]).fileFinishedImporting("utils/PurchaseTokenUtils.tsx");

export { getPurchaseToken };
export const getPurchaseTokenHash = function getPurchaseTokenHash() {
  return _getPurchaseTokenHash(...arguments);
};
