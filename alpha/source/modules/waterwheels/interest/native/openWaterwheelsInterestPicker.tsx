// Module ID: 19026
// Function ID: 19027
// Name: openWaterwheelsInterestPicker
// Dependencies: [5, 502, 10218, 19003, 572, 19027, 6848, 19028, 2121, 19028, 2]
// Exports: default

// Module 19026 (openWaterwheelsInterestPicker)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import InterestPickerSessionStore from "InterestPickerSessionStore" /* 10218 */;
import size from "module_2" /* 2 */;

let obj = function _openWaterwheelsInterestPicker() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let cleanup;
    let closure_2;
    let flag;
    let handleAccountChange;
    let pushLazyResult;
    let releaseOpenFlag;
    let sum;
    let closure_0 = arg0;
    if (1 === tmp4) {
      if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        pushLazyResult = pickerOpen;
        if (!pickerOpen.isPickerOpen()) {
          const obj2 = closure_130_0(closure_130_2[3]);
          pushLazyResult = obj2.captureDiscoverJoinAttribution(closure_130_4, () => {

          }, closure_130_1(closure_130_2[4]));
          if (pushLazyResult.isValid()) {
            sum = sum + 1;
            let c2 = sum;
            closure_130_4.addChangeListener(handleAccountChange);
            const obj3 = closure_130_0(closure_130_2[5]);
            let result = obj3.setInterestPickerOpen(true);
            let c4 = 2;
            const pushLazy = closure_130_1(closure_130_2[6]).pushLazy;
            const obj7 = { edit: flag };
            const tmp42 = closure_130_1(closure_130_2[6]);
            const tmp44 = closure_130_3(async () => {
              let c1;
              let v3;
              await c0(paths[8])(paths[7], paths.paths);
              return arg1.default;
            });
            pushLazyResult = pushLazy(tmp44, obj7, closure_130_0(closure_130_2[9]).WATERWHEELS_INTEREST_PICKER_MODAL_KEY);
            let c5 = 4;
            c6 = 1;
            const obj8 = { value: pushLazyResult, done: false };
            return obj8;
          } else {
            const disposeResult = pushLazyResult.dispose();
          }
        }
      }
    } else if (2 === tmp4) {
      c4 = 0;
      pushLazyResult = cleanup();
      throw closure_3;
    } else {
      if (3 === tmp4) {
        c4 = 1;
        releaseOpenFlag();
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        const tmp7 = cleanup();
        c6 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        c4 = 1;
      }
      c4 = 0;
      cleanup();
    }
    await "HermesInternal";
    flag = closure_0;
    if (closure_0 === undefined) {
      flag = false;
    }
    releaseOpenFlag = function releaseOpenFlag() {
      if (c2 === closure_2_6) {
        obj = closure_2_0(closure_2_2[5]);
        const result = obj.setInterestPickerOpen(false);
      }
    };
    cleanup = function cleanup() {
      closure_2_4.removeChangeListener(handleAccountChange);
      assert.dispose();
    };
    handleAccountChange = function handleAccountChange() {
      if (!assert.isValid()) {
        if (c2 === closure_2_6) {
          obj = closure_2_0(closure_2_2[5]);
          const result = obj.setInterestPickerOpen(false);
        }
        closure_2_4.removeChangeListener(handleAccountChange);
        assert.dispose();
      }
    };
    return "Path";
  });
  return obj(...arguments);
};
let c6 = 0;
let result = size.fileFinishedImporting("modules/waterwheels/interest/native/openWaterwheelsInterestPicker.tsx");

export default function openWaterwheelsInterestPicker() {
  return obj(...arguments);
};
