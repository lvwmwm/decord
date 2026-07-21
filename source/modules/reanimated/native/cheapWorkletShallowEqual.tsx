// Module ID: 9415
// Function ID: 73281
// Name: cheapWorkletShallowEqual
// Dependencies: []

// Module 9415 (cheapWorkletShallowEqual)
let closure_0 = { code: "function cheapWorkletShallowEqual_cheapWorkletShallowEqualTsx1(a,b){if(a===b)return true;if(a==null||b==null)return false;for(const key in a){if(a[key]!==b[key])return false;}return true;}" };
let closure_1 = { code: "function cheapWorkletArrayShallowEqual_cheapWorkletShallowEqualTsx2(a,b){if(a===b)return true;if(a==null||b==null)return false;if(a.length!==b.length)return false;for(let i=0;i<a.length;i++){if(a[i]!==b[i])return false;}return true;}" };
const tmp2 = () => {
  function cheapWorkletShallowEqual(safeAreaState, safeAreaState2) {
    if (safeAreaState === safeAreaState2) {
      return true;
    } else {
      if (null != safeAreaState) {
        if (null != safeAreaState2) {
          for (const key10005 in arg0) {
            let tmp3 = key10005;
            if (arg0[key10005] === arg1[key10005]) {
              continue;
            } else {
              let flag = false;
              return false;
            }
          }
          return true;
        }
      }
      return false;
    }
  }
  cheapWorkletShallowEqual.__closure = {};
  cheapWorkletShallowEqual.__workletHash = 760221372005;
  cheapWorkletShallowEqual.__initData = closure_0;
  return cheapWorkletShallowEqual;
}();
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/reanimated/native/cheapWorkletShallowEqual.tsx");

export const cheapWorkletShallowEqual = tmp2;
export const cheapWorkletArrayShallowEqual = () => {
  function cheapWorkletArrayShallowEqual(arg0, arg1) {
    if (arg0 === arg1) {
      return true;
    } else {
      if (null != arg0) {
        if (null != arg1) {
          if (arg0.length !== arg1.length) {
            return false;
          } else {
            let num = 0;
            if (0 < arg0.length) {
              while (arg0[num] === arg1[num]) {
                num = num + 1;
              }
              return false;
            }
            return true;
          }
        }
      }
      return false;
    }
  }
  cheapWorkletArrayShallowEqual.__closure = {};
  cheapWorkletArrayShallowEqual.__workletHash = 3679738010781;
  cheapWorkletArrayShallowEqual.__initData = closure_1;
  return cheapWorkletArrayShallowEqual;
}();
