// Module ID: 17055
// Function ID: 17056
// Name: PhoenixLaunchSetting
// Dependencies: [5, 19, 3, 1257, 17056, 1262, 16021, 17057, 11817, 1112, 7268, 2]

// Module 17055 (PhoenixLaunchSetting)
import LoggerDefault from "Logger" /* 3 */;
import intl2 from "intl" /* 1112 */;
import MobilePhoneIcon from "MobilePhoneIcon" /* 7268 */;
import PhoenixAppAccessExperimentDefault from "PhoenixAppAccessExperiment" /* 17057 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import module_1257 from "module_1257" /* 1257 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
import size from "module_2" /* 2 */;

let c5, c6;

let tmp2;
const react_nativeDefault = tmp2(17056);
let obj = function _refreshPhoenixLaunchState() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_1;
    let state;
    let tmp27Result;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c3;
      try {
        let closure_0;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = undefined;
            let hasPhoenix;
            let client;
            const tmp27 = importDefault;
            if (null != react_nativeDefault) {
              c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj4 = { value: tmp27Result.getState(), done: false };
              tmp27Result = tmp27(dependencyMap[4]);
              return obj4;
            }
          }
        } else if (1 === c4) {
          c3 = 0;
          let closure_3 = closure_2;
          closure_129_6.error("Failed to read the launch client", closure_3);
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_0 = value;
          hasPhoenix = closure_0.hasPhoenix;
          client = closure_0.client;
          obj = closure_129_0(closure_129_2[5]);
          obj.batchUpdates(() => {
            obj = { hasPhoenix, launchPhoenix: closure_1_2 === c5 };
            return state.setState(obj);
          });
          c3 = 0;
        }
        c5 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp20) {
        closure_2 = tmp20;
        if (0 === c3) {
          c5 = 3;
          throw tmp20;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _handlePhoenixLaunchValueChange() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0;
    let state;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c4;
      try {
        let closure_1;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            closure_1 = tmp4;
            const tmp26 = launchPhoenix;
            const tmp27 = importDefault;
            if (null != react_nativeDefault) {
              c4 = 1;
              let str = "legacy";
              const setClient = tmp27(dependencyMap[4]).setClient;
              const tmp27Result = tmp27(dependencyMap[4]);
              if (tmp26) {
                str = phoenix;
              }
              c5 = 2;
              c6 = 1;
              const obj4 = { value: setClient(str), done: false };
              return obj4;
            }
          }
        } else if (1 === c5) {
          c4 = 0;
          closure_1 = closure_3;
          closure_130_6.error("Failed to set the launch client", closure_1);
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          if (value) {
            obj = closure_130_0(closure_130_2[5]);
            obj.batchUpdates(() => {
              obj = { launchPhoenix };
              return state.setState(obj);
            });
          }
          c4 = 0;
        }
        c6 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp19) {
        closure_3 = tmp19;
        if (0 === c4) {
          c6 = 3;
          throw tmp19;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const phoenix = "phoenix";
tmp2 = new LoggerDefault("PhoenixLaunchSetting");
let closure_6 = tmp2;
let closure_7 = module_1257.createWithEqualityFn(() => ({ hasPhoenix: false, launchPhoenix: false }));
obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.paDGCW);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(intl2.t.DXxeZL);
  },
  parent: null,
  IconComponent: MobilePhoneIcon.MobilePhoneIcon,
  useValue: function usePhoenixLaunchValue() {
    return closure_7((launchPhoenix) => launchPhoenix.launchPhoenix);
  },
  onValueChange: function handlePhoenixLaunchValueChange() {
    return obj(...arguments);
  },
  usePredicate: function usePhoenixLaunchPredicate() {
    let enabled;
    let tmp = dependencyMap;
    obj = enabled(16021);
    enabled = obj.useStaffOrDeveloperSettingPredicate();
    const obj2 = PhoenixAppAccessExperimentDefault;
    if (!enabled) {
      enabled = obj2.useConfig({ location: "PhoenixLaunchSetting" }, { autoTrackExposure: false }).enabled;
    }
    if (enabled) {
      enabled = null != react_nativeDefault;
    }
    const items = [enabled];
    const effect = react.useEffect(() => {
      function refreshPhoenixLaunchState() {
        return closure_1_8(...arguments);
      }
      const tmp = enabled;
      if (tmp) {
        refreshPhoenixLaunchState();
      }
    }, items);
    if (enabled) {
      enabled = closure_7((hasPhoenix) => hasPhoenix.hasPhoenix);
    }
    return enabled;
  }
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/PhoenixLaunchSetting.tsx");

export default toggle;
