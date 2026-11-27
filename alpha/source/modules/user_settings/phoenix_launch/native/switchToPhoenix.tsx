// Module ID: 17392
// Function ID: 17393
// Name: switchToPhoenix
// Dependencies: [5, 17, 3, 17387, 5725, 1112, 17389, 1379, 6046, 4729, 2]
// Exports: cancelSwitchToPhoenix, default

// Module 17392 (switchToPhoenix)
import LoggerDefault from "Logger" /* 3 */;
import react_native from "react-native" /* 17 */;
import PhoenixLaunchState from "PhoenixLaunchState" /* 17387 */;
import LaunchClient from "LaunchClient" /* 17389 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c0, c1, c2, closure_1, closure_2, closure_3;

function storeOrToast() {
  return obj(...arguments);
}
let obj = function _storeOrToast() {
  obj = _asyncToGenerator(async (value) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      let intl;
      let obj4;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              closure_1 = tmp4;
              value = false;
              c4 = 1;
              c5 = 2;
              c6 = 1;
              const obj5 = { value: obj4.storeLaunchClient(value), done: false };
              obj4 = PhoenixLaunchState;
              return obj5;
            }
          } else {
            if (1 === c5) {
              c4 = 0;
              closure_1 = closure_3;
              closure_130_5.error("Failed to store the launch client", closure_1);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              return { value, done: true };
            } else {
              c4 = 0;
            }
            const tmp14 = value;
            if (!tmp14) {
              const obj6 = { text: intl.string(closure_130_0(closure_130_2[5]).t.F8FvUy) };
              const open = closure_130_1(closure_130_2[4]).open;
              closure_130_1(closure_130_2[4]);
              intl = closure_130_0(closure_130_2[5]).intl;
              open("PHOENIX_SWITCH_FAILED", obj6);
            }
            c6 = 3;
            return { value, done: true };
          }
        } catch (tmp28) {
          closure_3 = tmp28;
          if (0 === c4) {
            c6 = 3;
            throw tmp28;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _switchToPhoenix() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let intl;
    let intl2;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_0 = tmp3;
            c1 = 1;
            c2 = 1;
            const obj4 = { value: storeOrToast(LaunchClient.LaunchClient.PHOENIX), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          if (value) {
            obj = closure_128_0(closure_128_2[7]);
            if (obj.isAndroid()) {
              const BundleUpdaterManager = closure_128_4.BundleUpdaterManager;
              BundleUpdaterManager.reload();
            } else {
              const obj6 = { title: intl.string(closure_128_1(closure_128_2[9]).a606CH), body: intl2.string(closure_128_1(closure_128_2[9]).o26UKJ) };
              const show = closure_128_1(closure_128_2[8]).show;
              const tmp10 = closure_128_1(closure_128_2[8]);
              intl = closure_128_0(closure_128_2[5]).intl;
              intl2 = closure_128_0(closure_128_2[5]).intl;
              show(obj6);
            }
          }
          c2 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp23) {
        c2 = 3;
        throw tmp23;
      }
    }
  });
  return obj(...arguments);
};
obj = function _cancelSwitchToPhoenix() {
  obj = _asyncToGenerator(async (arg0, value) => {
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            c1 = 1;
            c0 = 1;
            const obj4 = { value: storeOrToast(LaunchClient.LaunchClient.LEGACY), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c0 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp7) {
        c0 = 3;
        throw tmp7;
      }
    }
  });
  return obj(...arguments);
};
const NativeModules = react_native.NativeModules;
const tmp2 = new LoggerDefault("switchToPhoenix");
let closure_5 = tmp2;
const result = size.fileFinishedImporting("modules/user_settings/phoenix_launch/native/switchToPhoenix.tsx");

export default function switchToPhoenix() {
  return obj(...arguments);
};
export function cancelSwitchToPhoenix() {
  return obj(...arguments);
}
