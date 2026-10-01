// Module ID: 14788
// Function ID: 14789
// Name: PremiumRestoreSubscriptionSetting
// Dependencies: [1372, 21, 6839, 5204, 1115, 14789, 1981, 504, 1364, 11006, 8122, 2]

// Module 14788 (PremiumRestoreSubscriptionSetting)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import intl4 from "intl" /* 1115 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5204 */;
import BillingActionCreatorsDefault from "BillingActionCreators" /* 6839 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8122 */;
import UserStore from "UserStore" /* 1372 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let tmp;
const PlatformUtils = tmp(1364);
const jsx = Fragment.jsx;
let obj = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(intl4.t.s9h22P);
  },
  parent: null,
  IconComponent: NitroWheelIcon.NitroWheelIcon,
  onPress: function handleNitroRestoreSettingPress() {
    let paths;
    let obj = BillingActionCreatorsDefault;
    const result = obj.restoreAndApplyPurchases(true);
    result.then((result) => {
      let intl;
      let intl2;
      let intl3;
      if (result.length > 0) {
        const obj = { body: intl.string(require("intl").t.pnRpIb) };
        const show = require("actions/AlertActionCreators").show;
        require("actions/AlertActionCreators");
        intl = require("intl").intl;
        show(obj);
      } else {
        const obj2 = { title: intl2.string(require("intl").t.WXkaoM), body: intl3.string(require("intl").t.YW7lqS) };
        const show2 = require("actions/AlertActionCreators").show;
        require("actions/AlertActionCreators");
        intl2 = require("intl").intl;
        intl3 = require("intl").intl;
        show2(obj2);
      }
    }, () => {
      let intl;
      let intl2;
      const obj = { title: intl.string(require("intl").t.POsVOt), body: intl2.string(require("intl").t["XbE/Ez"]) };
      const show = require("actions/AlertActionCreators").show;
      require("actions/AlertActionCreators");
      intl = require("intl").intl;
      intl2 = require("intl").intl;
      show(obj);
    });
    let obj2 = actions_AlertActionCreatorsDefault;
    const obj3 = {
      importer() {
        const promise = require("asyncRequire")(paths[5], paths.paths);
        return promise.then((result) => {
          let closure_0 = result.default;
          return (arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            return closure_2_4(closure_0, obj);
          };
        });
      },
      isDismissable: false
    };
    obj2.openLazy(obj3);
  },
  withArrow: true,
  usePredicate: function useHasPremiumRestoreSubscriptionSetting() {
    let currentUser;
    const items = [UserStore];
    const obj = get_initialized;
    const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
    let tmp4 = null != stateFromStores && stateFromStores.verified;
    if (tmp4) {
      const tmpResult = PlatformUtils;
      tmp4 = !tmpResult.isAndroid();
    }
    return tmp4;
  }
};
const pressable = SettingBuilders.createPressable(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/PremiumRestoreSubscriptionSetting.tsx");

export default pressable;
