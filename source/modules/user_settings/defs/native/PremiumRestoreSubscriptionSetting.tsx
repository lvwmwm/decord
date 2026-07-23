// Module ID: 14132
// Function ID: 108761
// Name: pressable
// Dependencies: [1849, 33, 6658, 4471, 1212, 14133, 1934, 566, 477, 10095, 7871, 2]

// Module 14132 (pressable)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.s9h22P);
  },
  parent: null,
  IconComponent: require("NitroWheelIcon").NitroWheelIcon,
  onPress: function handleNitroRestoreSettingPress() {
    let obj = importDefault(6658);
    const result = obj.restoreAndApplyPurchases(true);
    result.then((arg0) => {
      if (arg0.length > 0) {
        let obj = outer1_1(outer1_2[3]);
        obj = {};
        const intl = outer1_0(outer1_2[4]).intl;
        obj.body = intl.string(outer1_0(outer1_2[4]).t.pnRpIb);
        obj.show(obj);
      } else {
        obj = {};
        const intl2 = outer1_0(outer1_2[4]).intl;
        obj.title = intl2.string(outer1_0(outer1_2[4]).t.WXkaoM);
        const intl3 = outer1_0(outer1_2[4]).intl;
        obj.body = intl3.string(outer1_0(outer1_2[4]).t.YW7lqS);
        outer1_1(outer1_2[3]).show(obj);
        const obj3 = outer1_1(outer1_2[3]);
      }
    }, () => {
      let obj = outer1_1(outer1_2[3]);
      obj = {};
      const intl = outer1_0(outer1_2[4]).intl;
      obj.title = intl.string(outer1_0(outer1_2[4]).t.POsVOt);
      const intl2 = outer1_0(outer1_2[4]).intl;
      obj.body = intl2.string(outer1_0(outer1_2[4]).t["XbE/Ez"]);
      obj.show(obj);
    });
    obj = {
      importer() {
        return outer1_0(outer1_2[6])(outer1_2[5], outer1_2.paths).then((arg0) => {
          let closure_0 = arg0.default;
          return (arg0) => {
            const merged = Object.assign(arg0);
            return outer3_4(closure_0, {});
          };
        });
      }
    };
    importDefault(4471).openLazy(obj);
  },
  withArrow: true,
  usePredicate: function useHasPremiumRestoreSubscriptionSetting() {
    const items = [_isNativeReflectConstruct];
    const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_3.getCurrentUser());
    let tmp2 = null != stateFromStores && stateFromStores.verified;
    if (tmp2) {
      tmp2 = !require(477) /* set */.isAndroid();
      const obj2 = require(477) /* set */;
    }
    return tmp2;
  }
};
createToggle = createToggle.createPressable(createToggle);
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/user_settings/defs/native/PremiumRestoreSubscriptionSetting.tsx");

export default createToggle;
