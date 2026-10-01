// Module ID: 14377
// Function ID: 14378
// Name: StaffOnlyFindYourFriendsDeletionSetting
// Dependencies: [5, 17, 7417, 21, 1243, 1248, 4452, 12177, 1325, 4528, 11006, 14378, 2]

// Module 14377 (StaffOnlyFindYourFriendsDeletionSetting)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _slicedToArray from "_slicedToArray" /* 4452 */;
import SettingsConstants from "SettingsConstants" /* 7417 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 14378 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import module_1243 from "module_1243" /* 1243 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c4, c5, closure_2;

const f99575 = (isLoading) => isLoading.isLoading;
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
        return { value: "HermesInternal", done: null };
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
            const aPIError = new closure_129_0(closure_129_2[8]).APIError(closure_1);
            content = aPIError.getAnyErrorMessage();
            if (null != content) {
              const obj7 = { key: "FIND_YOUR_FRIENDS_DELETION", content };
              const obj3 = closure_129_1(closure_129_2[9]);
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
        return { value: "HermesInternal", done: null };
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
let closure_6 = module_1243.createWithEqualityFn(() => ({ isLoading: false }));
obj = {
  useTitle() {
    return "STAFF ONLY - Find your friends deletion";
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useIsDisabled: function useIsFindYourFriendsDeletionDisabled() {
    return closure_6(f99575, _slicedToArray.shallow);
  },
  onPress: function onFindYourFriendsDeletionPress() {
    return obj(...arguments);
  },
  usePredicate: useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate,
  useTrailing: function useIsFindYourFriendsDeletionTrailing() {
    let tmp = null;
    if (closure_6(f99575, _slicedToArray.shallow)) {
      tmp = <ActivityIndicator />;
    }
    return tmp;
  }
};
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/StaffOnlyFindYourFriendsDeletionSetting.tsx");

export default pressable;
