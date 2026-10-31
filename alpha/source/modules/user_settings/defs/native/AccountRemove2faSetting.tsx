// Module ID: 16656
// Function ID: 16657
// Name: AccountRemove2faSetting
// Dependencies: [5, 17, 8432, 21, 560, 16657, 1259, 16658, 1113, 5958, 16652, 11539, 16570, 2]

// Module 16656 (AccountRemove2faSetting)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl4 from "intl" /* 1113 */;
import react_native2 from "react-native" /* 1259 */;
import SettingsConstants from "SettingsConstants" /* 8432 */;
import SettingsAccountUtils from "SettingsAccountUtils" /* 16570 */;
import account_MFAUtils from "account/MFAUtils" /* 16657 */;
import MfaFactorUtils from "MfaFactorUtils" /* 16658 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import module_560 from "module_560" /* 560 */;
import SettingBuilders from "SettingBuilders" /* 11539 */;
import size from "module_2" /* 2 */;

let c4, c5, closure_2;

let obj = function _remove2FA() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let intl;
    let intl2;
    let intl3;
    let obj10;
    const f137586 = () => closure_1_6.setState({ isCheckingLastFactor: false });
    if (c5 === 2) {
      c5 = 3;
      const str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      let c3;
      try {
        let EA4ZEk;
        let closure_0;
        c5 = 2;
        const tmp4 = c4;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            let obj5 = { value, done: true };
            return obj5;
          } else {
            let closure_1;
            EA4ZEk = undefined;
            let obj9 = react_native2;
            const batchUpdatesResult = obj9.batchUpdates(() => closure_1_6.setState({ isCheckingLastFactor: true }));
            closure_0 = false;
            c3 = 1;
            c4 = 2;
            c5 = 1;
            let obj6 = { value: obj10.isLastRemainingMfaFactor("totp"), done: false };
            obj10 = MfaFactorUtils;
            return obj6;
          }
        } else if (1 === tmp4) {
          c3 = 0;
          let obj4 = closure_129_0(closure_129_2[6]);
          const batchUpdatesResult1 = obj4.batchUpdates(f137586);
          throw closure_2;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          let obj2 = closure_129_0(closure_129_2[6]);
          const batchUpdatesResult2 = obj2.batchUpdates(f137586);
          c5 = 3;
          let obj7 = { value, done: true };
          return obj7;
        } else {
          closure_0 = value;
          c3 = 0;
          let obj8 = closure_129_0(closure_129_2[6]);
          const batchUpdatesResult3 = obj8.batchUpdates(f137586);
          const t = closure_129_0(closure_129_2[8]).t;
          if (closure_0) {
            EA4ZEk = t.xlA7Tl;
          } else {
            EA4ZEk = t.EA4ZEk;
          }
          obj = {
            title: intl.string(closure_129_0(closure_129_2[8]).t["D+aE7g"]),
            body: intl2.string(EA4ZEk),
            cancelText: intl3.string(closure_129_0(closure_129_2[8]).t["ETE/oC"]),
            onConfirm() {
                    return closure_1_1(...arguments);
                  }
          };
          const show = closure_129_1(closure_129_2[9]).show;
          const tmp9 = closure_129_1(closure_129_2[9]);
          intl = closure_129_0(closure_129_2[8]).intl;
          intl2 = closure_129_0(closure_129_2[8]).intl;
          intl3 = closure_129_0(closure_129_2[8]).intl;
          closure_1 = closure_129_3(async (arg0, value) => {
            let obj6;
            const f140173 = () => closure_1_6.setState({ isCheckingLastFactor: false });
            if (c5 === 2) {
              c5 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj3 = { value, done: true };
                return obj3;
              } else {
                return { value: "HermesInternal", done: "HermesInternal" };
              }
            } else {
              try {
                c5 = 2;
                if (0 === c4) {
                  if (arg0 === 1) {
                    c5 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c5 = 3;
                    const obj7 = { value, done: true };
                    return obj7;
                  } else {
                    const obj5 = tmp(closure_2[6]);
                    obj5.batchUpdates(() => closure_1_6.setState({ isCheckingLastFactor: true }));
                    c3 = 1;
                    c4 = 2;
                    c5 = 1;
                    const obj8 = { value: obj6.disable(), done: false };
                    obj6 = tmp(closure_2[10]);
                    return obj8;
                  }
                } else if (1 === tmp4) {
                  c3 = 0;
                  const obj4 = tmp(closure_2[6]);
                  obj4.batchUpdates(f140173);
                  throw closure_2;
                } else if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  const obj2 = tmp(closure_2[6]);
                  obj2.batchUpdates(f140173);
                  c5 = 3;
                  const obj9 = { value, done: true };
                  return obj9;
                } else {
                  c3 = 0;
                  obj = tmp(closure_2[6]);
                  obj.batchUpdates(f140173);
                  c5 = 3;
                  return { value: "HermesInternal", done: "HermesInternal" };
                }
              } catch (tmp27) {
                closure_2 = tmp27;
                if (0 === c3) {
                  c5 = 3;
                  throw tmp27;
                } else {
                  c4 = 1;
                }
              }
            }
          });
          show(obj);
          c5 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp35) {
        closure_2 = tmp35;
        if (0 === c3) {
          c5 = 3;
          throw tmp35;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const ActivityIndicator = react_native.ActivityIndicator;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
obj = module_560.create(() => ({ isCheckingLastFactor: false }));
let obj2 = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(intl4.t["D+aE7g"]);
  },
  parent: MobileUserSettings.ACCOUNT,
  onPress: function remove2FA() {
    return obj(...arguments);
  },
  useIsDisabled() {
    obj = account_MFAUtils;
    const result = obj.use2FARemoveDisableReason();
    const tmp2 = null !== result || obj((isCheckingLastFactor) => isCheckingLastFactor.isCheckingLastFactor);
    return tmp2;
  },
  useTrailing: function useRemove2FATrailing() {
    let tmp = null;
    if (obj((isCheckingLastFactor) => isCheckingLastFactor.isCheckingLastFactor)) {
      tmp = <ActivityIndicator />;
    }
    return tmp;
  },
  useDescription: account_MFAUtils.use2FARemoveDisableReason,
  usePredicate: SettingsAccountUtils.useIsTOTPEnabled
};
const pressable = SettingBuilders.createPressable(obj2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountRemove2faSetting.tsx");

export default pressable;
export const useRemove2FAStore = obj;
