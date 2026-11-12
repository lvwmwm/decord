// Module ID: 18972
// Function ID: 18973
// Name: openWaterwheelsInterestPicker
// Dependencies: [5, 502, 10149, 18874, 572, 18973, 6785, 18974, 2118, 18974, 2]
// Exports: default

// Module 18972 (openWaterwheelsInterestPicker)
import DispatcherDefault from "Dispatcher" /* 572 */;
import WaterwheelsDiscoverJoinAttribution from "WaterwheelsDiscoverJoinAttribution" /* 18874 */;
import InterestPickerActionCreators from "InterestPickerActionCreators" /* 18973 */;
import WaterwheelsInterestPickerModal from "WaterwheelsInterestPickerModal" /* 18974 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import InterestPickerSessionStore from "InterestPickerSessionStore" /* 10149 */;
import size from "module_2" /* 2 */;

let c1, c4, closure_2, sum;

let obj = function _openWaterwheelsInterestPicker() {
  let pickerOpen;
  obj = _asyncToGenerator(async (arg0, value) => {
    let tmp28;
    if (c4 === 2) {
      c4 = 3;
      const str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else {
      const flag = true;
      if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj4 = { value, done: true };
          return obj4;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c3;
        try {
          let releaseOpenFlag;
          let cleanup;
          c4 = 2;
          const tmp3 = c1;
          if (0 === c1) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              let closure_0 = tmp28;
              let c0;
              c1 = undefined;
              releaseOpenFlag = function releaseOpenFlag() {
                if (c1 === closure_2_6) {
                  obj = closure_2_0(closure_2_2[5]);
                  const result = obj.setInterestPickerOpen(false);
                }
              };
              cleanup = function cleanup() {
                closure_2_4.removeChangeListener(handleAccountChange);
                _undefined.dispose();
              };
              function handleAccountChange() {
                obj = assert;
                if (!assert.isValid()) {
                  if (closure_1_1 === closure_2_6) {
                    const obj2 = closure_2_0(closure_2_2[5]);
                    const result = obj2.setInterestPickerOpen(false);
                  }
                  closure_2_4.removeChangeListener(closure_1_4);
                  obj.dispose();
                }
              }
              if (!pickerOpen.isPickerOpen()) {
                let obj2 = WaterwheelsDiscoverJoinAttribution;
                const obj3 = AuthenticationStore;
                let result = obj2.captureDiscoverJoinAttribution(AuthenticationStore, () => {

                }, DispatcherDefault);
                c0 = result;
                const tmp20 = importDefault;
                if (result.isValid()) {
                  sum = sum + 1;
                  obj3.addChangeListener(handleAccountChange);
                  const tmp18Result = InterestPickerActionCreators;
                  const result1 = tmp18Result.setInterestPickerOpen(true);
                  c3 = 2;
                  const pushLazy = tmp20(dependencyMap[6]).pushLazy;
                  const tmp20Result = tmp20(dependencyMap[6]);
                  tmp28 = _asyncToGenerator(async () => {
                    let v3;
                    await c0(paths[8])(paths[7], paths.paths);
                    return arg1.default;
                  });
                  c1 = 3;
                  c4 = 1;
                  const obj6 = { value: pushLazy(tmp28, {}, WaterwheelsInterestPickerModal.WATERWHEELS_INTEREST_PICKER_MODAL_KEY), done: false };
                  return obj6;
                } else {
                  const disposeResult = result.dispose();
                }
              }
            }
          } else if (1 === tmp3) {
            c3 = 0;
            cleanup();
            throw closure_2;
          } else {
            if (2 === tmp3) {
              c3 = 1;
              const tmp9 = releaseOpenFlag();
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              const tmp6 = cleanup();
              c4 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              c3 = 1;
            }
            c3 = 0;
            cleanup();
          }
          c4 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp29) {
          closure_2 = tmp29;
          if (0 === c3) {
            c4 = 3;
            throw tmp29;
          } else if (1 === tmp31) {
            c1 = 1;
          } else {
            c1 = 2;
          }
        }
      }
    }
  });
  return obj(...arguments);
};
let c6 = 0;
let result = size.fileFinishedImporting("modules/waterwheels/interest/native/openWaterwheelsInterestPicker.tsx");

export default function openWaterwheelsInterestPicker() {
  return obj(...arguments);
};
