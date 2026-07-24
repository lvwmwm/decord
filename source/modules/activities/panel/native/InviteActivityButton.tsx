// Module ID: 15755
// Function ID: 121456
// Dependencies: [31, 10473, 4810, 33, 4098, 15756, 1934, 566, 10940, 4543, 10226, 1212, 2]

// Module 15755
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
const memoResult = require("result").memo(function InviteActivityButton(applicationId) {
  applicationId = applicationId.applicationId;
  let obj = applicationId(566);
  const items = [_isNativeReflectConstruct, closure_4];
  const items1 = [applicationId];
  const stateFromStores = obj.useStateFromStores(items, () => stateFromStores(outer1_2[8])(outer1_3, outer1_4, applicationId), items1);
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = {
      onPress() {
          let obj = stateFromStores(outer1_2[4]);
          obj = { activity: stateFromStores };
          obj.openLazy(applicationId(outer1_2[6])(outer1_2[5], outer1_2.paths), "ActivityInviteSheet-" + stateFromStores.session_id, obj);
        },
      icon: stateFromStores(10226)
    };
    const intl = applicationId(1212).intl;
    obj.text = intl.string(applicationId(1212).t["OzOM/q"]);
    const intl2 = applicationId(1212).intl;
    obj.accessibilityLabel = intl2.string(applicationId(1212).t["OzOM/q"]);
    obj.variant = "secondary-overlay";
    obj.size = "sm";
    obj.shrink = true;
    obj.maxFontSizeMultiplier = 1;
    tmp2 = jsx(applicationId(4543).Button, {
      onPress() {
          let obj = stateFromStores(outer1_2[4]);
          obj = { activity: stateFromStores };
          obj.openLazy(applicationId(outer1_2[6])(outer1_2[5], outer1_2.paths), "ActivityInviteSheet-" + stateFromStores.session_id, obj);
        },
      icon: stateFromStores(10226)
    });
  }
  return tmp2;
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/activities/panel/native/InviteActivityButton.tsx");

export default memoResult;
