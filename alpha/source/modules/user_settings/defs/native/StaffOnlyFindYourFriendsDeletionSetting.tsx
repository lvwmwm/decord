// Module ID: 15038
// Function ID: 15039
// Name: StaffOnlyFindYourFriendsDeletionSetting
// Dependencies: [5, 17, 7974, 21, 1267, 1272, 558, 576, 4692, 12358, 1349, 4768, 10629, 15039, 2]

// Module 15038 (StaffOnlyFindYourFriendsDeletionSetting)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 576 */;
import SettingsConstants from "SettingsConstants" /* 7974 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 15039 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import module_1267 from "module_1267" /* 1267 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c4, c5, closure_2;

let tmp;
const _slicedToArray = tmp(4692);
function setFindYourFriendsDeletionIsLoading(isLoading) {
  let state;
  _require = isLoading;
  obj = require("react-native");
  obj.batchUpdates(() => {
    obj = { isLoading };
    return state.setState(obj);
  });
}
let obj = function _onFindYourFriendsDeletionPress() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let obj5;
    function getFindYourFriendsDeletionIsLoading() {
      return state.getState().isLoading;
    }
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
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        let closure_1;
        let content;
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
            content = undefined;
            if (!getFindYourFriendsDeletionIsLoading()) {
              setFindYourFriendsDeletionIsLoading(true);
              c3 = 2;
              c4 = 3;
              c5 = 1;
              const obj6 = { value: obj5.adminDeleteContactSync(), done: false };
              obj5 = require("ContactSyncUtils");
              return obj6;
            }
          }
        } else if (1 === c4) {
          c3 = 0;
          closure_129_7(false);
          throw closure_2;
        } else {
          if (2 === c4) {
            c3 = 1;
            closure_1 = closure_2;
            const self = this;
            const self2 = this;
            const aPIError = new closure_129_0(closure_129_2[10]).APIError(closure_1);
            content = aPIError.getAnyErrorMessage();
            if (null != content) {
              const obj7 = { key: "FIND_YOUR_FRIENDS_DELETION", content };
              const obj3 = closure_129_1(closure_129_2[11]);
              obj3.open(obj7);
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_129_7(false);
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c3 = 1;
          }
          c3 = 0;
          closure_129_7(false);
        }
        c5 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp35) {
        closure_2 = tmp35;
        if (0 === c3) {
          c5 = 3;
          throw tmp35;
        } else if (1 === tmp37) {
          c4 = 1;
        } else {
          c4 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
const ActivityIndicator = react_native.ActivityIndicator;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
let closure_6 = module_1267.createWithEqualityFn(() => ({ isLoading: false }));
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFindYourFriendsDeletionIsLoading() {
  let first;
  obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function e(isLoading) {
      return isLoading.isLoading;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  return closure_6(first, _slicedToArray.shallow);
}) : (function useFindYourFriendsDeletionIsLoading() {
  return closure_6((isLoading) => isLoading.isLoading, _slicedToArray.shallow);
});
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsFindYourFriendsDeletionTrailing() {
  let tmp3;
  obj = react;
  const cResult = obj.c(2);
  const tmp2 = closure_8();
  if (cResult[0] !== tmp2) {
    let tmp4 = null;
    if (tmp2) {
      tmp4 = <ActivityIndicator />;
    }
    cResult[0] = tmp2;
    cResult[1] = tmp4;
    tmp3 = tmp4;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function useIsFindYourFriendsDeletionTrailing() {
  let tmp = null;
  if (closure_8()) {
    tmp = <ActivityIndicator />;
  }
  return tmp;
});
function useIsFindYourFriendsDeletionDisabled() {
  return closure_8();
}
obj = {
  useTitle() {
    return "STAFF ONLY - Find your friends deletion";
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useIsDisabled: useIsFindYourFriendsDeletionDisabled,
  onPress: function onFindYourFriendsDeletionPress() {
    return obj(...arguments);
  },
  usePredicate: useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate,
  useTrailing: tmp3
};
const pressable = SettingBuilders.createPressable(obj);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/StaffOnlyFindYourFriendsDeletionSetting.tsx");

export default pressable;
