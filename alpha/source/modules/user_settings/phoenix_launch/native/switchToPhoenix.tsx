// Module ID: 17334
// Function ID: 17335
// Name: switchToPhoenix
// Dependencies: [5, 17, 3, 17329, 17331, 5694, 1112, 1378, 6015, 4728, 2]
// Exports: default

// Module 17334 (switchToPhoenix)
import LoggerDefault from "Logger" /* 3 */;
import react_native from "react-native" /* 17 */;
import PhoenixLaunchState from "PhoenixLaunchState" /* 17329 */;
import LaunchClient from "LaunchClient" /* 17331 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c4, c5, closure_2;

let obj = function _switchToPhoenix() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let intl;
    let intl2;
    let intl3;
    let obj5;
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
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      let c3;
      try {
        let closure_1;
        let closure_0;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_1 = tmp;
            closure_0 = false;
            c3 = 1;
            c4 = 2;
            c5 = 1;
            const obj6 = { value: obj5.storeLaunchClient(LaunchClient.LaunchClient.PHOENIX), done: false };
            obj5 = PhoenixLaunchState;
            return obj6;
          }
        } else {
          if (1 === c4) {
            c3 = 0;
            closure_1 = closure_2;
            closure_129_5.error("Failed to store the launch client", closure_1);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_0 = value;
            c3 = 0;
          }
          if (closure_0) {
            const obj3 = closure_129_0(closure_129_2[7]);
            if (obj3.isAndroid()) {
              const BundleUpdaterManager = closure_129_4.BundleUpdaterManager;
              BundleUpdaterManager.reload();
            } else {
              const obj7 = { title: intl2.string(closure_129_1(closure_129_2[9]).a606CH), body: intl3.string(closure_129_1(closure_129_2[9]).o26UKJ) };
              const show = closure_129_1(closure_129_2[8]).show;
              const tmp29 = closure_129_1(closure_129_2[8]);
              intl2 = closure_129_0(closure_129_2[6]).intl;
              intl3 = closure_129_0(closure_129_2[6]).intl;
              show(obj7);
            }
          } else {
            const obj8 = { text: intl.string(closure_129_0(closure_129_2[6]).t.F8FvUy) };
            const open = closure_129_1(closure_129_2[5]).open;
            const tmp18 = closure_129_1(closure_129_2[5]);
            intl = closure_129_0(closure_129_2[6]).intl;
            open("PHOENIX_SWITCH_FAILED", obj8);
          }
          c5 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp45) {
        closure_2 = tmp45;
        if (0 === c3) {
          c5 = 3;
          throw tmp45;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const NativeModules = react_native.NativeModules;
let closure_5 = new LoggerDefault("switchToPhoenix");
const tmp2 = new LoggerDefault("switchToPhoenix");
const result = size.fileFinishedImporting("modules/user_settings/phoenix_launch/native/switchToPhoenix.tsx");

export default function switchToPhoenix() {
  return obj(...arguments);
};
