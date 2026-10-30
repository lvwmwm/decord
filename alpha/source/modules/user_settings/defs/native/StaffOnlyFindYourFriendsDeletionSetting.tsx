// Module ID: 16690
// Function ID: 16691
// Name: StaffOnlyFindYourFriendsDeletionSetting
// Dependencies: [5, 17, 8424, 21, 1255, 1260, 4924, 14198, 1337, 5707, 11505, 16691, 2]

// Module 16690 (StaffOnlyFindYourFriendsDeletionSetting)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _slicedToArray from "_slicedToArray" /* 4924 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 16691 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import module_1255 from "module_1255" /* 1255 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c4, c5, closure_2;

const f110198 = (isLoading) => isLoading.isLoading;
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
        let text;
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
            text = undefined;
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
            text = aPIError.getAnyErrorMessage();
            if (null != text) {
              const obj7 = { text };
              const obj3 = closure_129_1(closure_129_2[9]);
              obj3.open("FIND_YOUR_FRIENDS_DELETION", obj7);
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
let closure_6 = module_1255.createWithEqualityFn(() => ({ isLoading: false }));
obj = {
  useTitle() {
    return "STAFF ONLY - Find your friends deletion";
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useIsDisabled: function useIsFindYourFriendsDeletionDisabled() {
    return closure_6(f110198, _slicedToArray.shallow);
  },
  onPress: function onFindYourFriendsDeletionPress() {
    return obj(...arguments);
  },
  usePredicate: useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate,
  useTrailing: function useIsFindYourFriendsDeletionTrailing() {
    let tmp = null;
    if (closure_6(f110198, _slicedToArray.shallow)) {
      tmp = <ActivityIndicator />;
    }
    return tmp;
  }
};
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/StaffOnlyFindYourFriendsDeletionSetting.tsx");

export default pressable;
