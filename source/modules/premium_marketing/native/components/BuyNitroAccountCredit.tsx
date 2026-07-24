// Module ID: 12394
// Function ID: 96368
// Dependencies: [31, 1849, 3782, 6637, 1851, 33, 4130, 689, 566, 1390, 7420, 2]

// Module 12394
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { PREMIUM_SUBSCRIPTION_APPLICATION as closure_6 } from "GuildFeatures";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

const require = arg1;
let obj = {};
obj = { borderRadius: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_BORDER_RADIUS };
obj.creditList = obj;
let closure_8 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = require("result").memo(function BuyNitroAccountCredit() {
  let obj = require(566) /* initialize */;
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let forApplication = outer1_5.getForApplication(outer1_6);
    if (null == forApplication) {
      const _Set = Set;
      forApplication = new Set();
    }
    return forApplication;
  }, [], require(1390) /* _createForOfIteratorHelperLoose */.areSetsEqual);
  const tmp = callback();
  const items1 = [closure_4];
  const stateFromStores1 = require(566) /* initialize */.useStateFromStores(items1, () => outer1_4.getPremiumTypeSubscription());
  const obj2 = require(566) /* initialize */;
  const items2 = [_isNativeReflectConstruct];
  const stateFromStores2 = require(566) /* initialize */.useStateFromStores(items2, () => {
    const currentUser = outer1_3.getCurrentUser();
    let result;
    if (null != currentUser) {
      result = currentUser.isPremiumWithPremiumGroup();
    }
    return null != result && result;
  });
  obj = { creditListContainerStyle: tmp.creditList, currentSubscription: stateFromStores1, entitlements: stateFromStores, hasPremiumGroup: stateFromStores2 };
  return jsx(importDefault(7420), { creditListContainerStyle: tmp.creditList, currentSubscription: stateFromStores1, entitlements: stateFromStores, hasPremiumGroup: stateFromStores2 });
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium_marketing/native/components/BuyNitroAccountCredit.tsx");

export default memoResult;
