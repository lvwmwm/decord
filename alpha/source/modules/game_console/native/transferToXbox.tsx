// Module ID: 10525
// Function ID: 10526
// Name: transferToXbox
// Dependencies: [5, 19, 17, 1071, 21, 10516, 10512, 10526, 6047, 10527, 2120, 10519, 8420, 2]
// Exports: default

// Module 10525 (transferToXbox)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1071 */;
import GameConsoleAlertUtilsDefault from "GameConsoleAlertUtils" /* 10516 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_2, nonce;

let obj = function _transferToXbox() {
  obj = _asyncToGenerator(async (arg0) => {
    const user = arg0;
    let c4 = 0;
    let c5 = 0;
    let c3 = 0;
    return (async (arg0, value) => {
      let obj11;
      let obj14;
      let obj2;
      let obj8;
      let paths;
      if (c5 === 2) {
        c5 = 3;
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
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              nonce = undefined;
              closure_2 = undefined;
              c4 = 1;
              c5 = 1;
              const obj5 = { value: obj14.maybeShowPTTAlert(constants.XBOX), done: false };
              obj14 = GameConsoleAlertUtilsDefault;
              return obj5;
            }
          } else if (1 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              c4 = 2;
              c5 = 1;
              const obj7 = { value: obj11.disconnectRemote(), done: false };
              obj11 = closure_130_2(closure_130_3[6]);
              return obj7;
            }
          } else if (2 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              c4 = 3;
              c5 = 1;
              const obj10 = { value: obj8.getConnectNonce(), done: false };
              obj8 = closure_130_2(closure_130_3[6]);
              return obj10;
            }
          } else if (3 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              nonce = value;
              const obj13 = { nonce, forQRCode: false };
              closure_2 = closure_130_1(closure_130_3[7])(user, obj13);
              c3 = 1;
              c4 = 5;
              c5 = 1;
              const obj15 = { value: closure_130_5.openURL(closure_2), done: false };
              return obj15;
            }
          } else if (4 === c4) {
            c3 = 0;
            c5 = 3;
            const obj16 = {
              importer() {
                      const promise = user(paths[10])(paths[9], paths.paths);
                      return promise.then((result) => {
                        let closure_0 = result.default;
                        return (arg0) => {
                          obj = {};
                          const merged = Object.assign(arg0);
                          return closure_2_7(closure_0, obj);
                        };
                      });
                    },
              isDismissable: false
            };
            const obj17 = { value: obj2.openLazy(obj16), done: true };
            obj2 = closure_130_1(closure_130_3[8]);
            return obj17;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
            closure_130_1(closure_130_3[11])(user.id, closure_130_6.XBOX);
            const obj18 = closure_130_2(closure_130_3[6]);
            obj18.waitForSession(closure_130_6.XBOX, user.id, nonce);
            const obj19 = closure_130_2(closure_130_3[12]);
            obj19.stopOwnStream(false);
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp29) {
          if (0 === c3) {
            c5 = 3;
            throw tmp29;
          } else {
            c4 = 4;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const Linking = react_native.Linking;
const PlatformTypes = Constants.PlatformTypes;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/game_console/native/transferToXbox.tsx");

export default function transferToXbox() {
  return obj(...arguments);
};
