// Module ID: 11661
// Function ID: 11662
// Name: useSafeAreaInsetsSharedValue
// Dependencies: [1653, 1628, 10092, 11639, 1641, 1497, 2]
// Exports: default

// Module 11661 (useSafeAreaInsetsSharedValue)
import AppEntryKeyContext from "AppEntryKeyContext" /* 1497 */;
import AppEntryKey from "AppEntryKey" /* 1641 */;
import subscribeToSafeAreaInsetsDefault from "subscribeToSafeAreaInsets" /* 10092 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 11639 */;
import module_1653_mod from "module_1653" /* 1653 */;
import useSafeAreaInsets_mod from "useSafeAreaInsets" /* 1628 */;
import size from "module_2" /* 2 */;

let makeMutable;
let makeMutable2;
let obj2;
let obj3;
function getSafeAreaInsetsWorklet_useSafeAreaInsetsSharedValueNativeTsx1Factory(items) {
  let tmp;
  let tmp2;
  [tmp, tmp2] = items;
  function getSafeAreaInsetsWorklet() {
    let str = arg0;
    if (arg0 === undefined) {
      str = "main";
    }
    obj = require[str];
    return obj.get();
  }
  items = [tmp2];
  getSafeAreaInsetsWorklet.__closure = items;
  getSafeAreaInsetsWorklet.__workletHash = 50436263204;
  getSafeAreaInsetsWorklet.__initData = tmp;
  return getSafeAreaInsetsWorklet;
}
let obj = { main: makeMutable(obj2), share: makeMutable2(obj3) };
let module_1653 = module_1653_mod;
makeMutable = module_1653.makeMutable;
obj2 = {};
let useSafeAreaInsets = useSafeAreaInsets_mod;
const merged = Object.assign(useSafeAreaInsets.getSafeAreaInsets("main"));
module_1653 = module_1653_mod;
makeMutable2 = module_1653.makeMutable;
obj3 = {};
useSafeAreaInsets = useSafeAreaInsets_mod;
const merged1 = Object.assign(useSafeAreaInsets.getSafeAreaInsets("share"));
function _loop(iter) {
  let closure_0 = iter;
  subscribeToSafeAreaInsetsDefault((arg0) => {
    updateSharedValueIfChangedDefault(obj[iter], arg0);
  }, iter);
}
const iter = AppEntryKey.APP_ENTRY_KEYS[Symbol.iterator]();
while (iter !== undefined) {
  let _loopResult = _loop(iter.next());
  continue;
}
let items = [{ code: "(function getSafeAreaInsetsWorklet_useSafeAreaInsetsSharedValueNativeTsx1(appEntryKey='main'){let[safeAreaInsetsSharedValues]=this.__closure;return safeAreaInsetsSharedValues[appEntryKey].get();})" }, obj];
const tmp7 = getSafeAreaInsetsWorklet_useSafeAreaInsetsSharedValueNativeTsx1Factory(items);
const result = size.fileFinishedImporting("modules/safe_area/useSafeAreaInsetsSharedValue.native.tsx");

export default function useSafeAreaInsetsSharedValue() {
  obj = AppEntryKeyContext;
  return obj[obj.useAppEntryKey(obj)];
};
