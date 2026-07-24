// Module ID: 14409
// Function ID: 110123
// Dependencies: [5, 31, 27, 1849, 653, 7444, 33, 4130, 566, 7443, 1872, 5462, 7445, 8028, 7636, 14410, 8605, 8183, 8059, 1212, 2]

// Module 14409
import getDefaultIcon from "getDefaultIcon";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import { getIconById } from "getDefaultIcon";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_10;
let closure_11;
let closure_6;
let closure_7;
let closure_9;
const require = arg1;
({ UpsellTypes: closure_6, AnalyticsPages: closure_7 } = ME);
({ jsx: closure_9, Fragment: closure_10, jsxs: closure_11 } = jsxProd);
let closure_12 = _createForOfIteratorHelperLoose.createStyles({ upsellButtonContainer: { padding: 0, position: "absolute", bottom: 56, width: 350, alignSelf: "center" } });
const memoResult = require("result").memo(() => {
  function _onSelect() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = analyticsLocations(tmp);
    return obj(...arguments);
  }
  let obj = stateFromStores(566);
  const items = [_onSelect];
  stateFromStores = obj.useStateFromStores(items, () => _onSelect.getCurrentUser());
  let obj1 = stateFromStores(7443);
  const importDefault = obj1.useCurrentAppIcon();
  let obj2 = stateFromStores(1872);
  const isPremiumResult = obj2.isPremium(stateFromStores);
  const dependencyMap = isPremiumResult;
  const analyticsLocations = importDefault(5462)().analyticsLocations;
  obj = { page: constants.APP_ICONS };
  obj = {};
  obj1 = {};
  obj2 = {
    accessibilityRole: "radiogroup",
    children: callback(importDefault(14410), {
      onSelect(arg0) {
        return _onSelect(...arguments);
      }
    })
  };
  obj1.children = callback(obj, obj2);
  const items1 = [callback(stateFromStores(7636).Form, obj1), ];
  let tmp6 = !isPremiumResult;
  if (tmp6) {
    const obj4 = { style: tmp.upsellButtonContainer };
    const obj5 = {
      onPress() {
          obj = { analyticsLocation: obj, analyticsLocations, premiumFeatureCardOrder: stateFromStores(isPremiumResult[18]).PremiumFeatureCardOrder.TIER_2_LEADING };
          callback(isPremiumResult[17])(obj);
        }
    };
    const intl = stateFromStores(1212).intl;
    obj5.text = intl.string(stateFromStores(1212).t.M0rDSO);
    obj4.children = callback(importDefault(8605), obj5);
    tmp6 = callback(obj, obj4);
    const tmp11 = importDefault(8605);
  }
  items1[1] = tmp6;
  obj.children = items1;
  return closure_11(closure_10, obj);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/app_icon/native/UserSettingsAppIcons.tsx");

export default memoResult;
