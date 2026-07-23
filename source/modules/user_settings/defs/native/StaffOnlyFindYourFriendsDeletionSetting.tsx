// Module ID: 13744
// Function ID: 105403
// Name: setFindYourFriendsDeletionIsLoading
// Dependencies: [5, 27, 7662, 33, 677, 682, 3743, 11709, 562, 3831, 10095, 13745, 2]

// Module 13744 (setFindYourFriendsDeletionIsLoading)
import batchUpdates from "batchUpdates";
import { ActivityIndicator } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import useStoreWithEqualityFn from "useStoreWithEqualityFn";
import createToggle from "createToggle";

const require = arg1;
function setFindYourFriendsDeletionIsLoading(arg0) {
  const _require = arg0;
  _require(682).batchUpdates(() => outer1_6.setState({ isLoading: closure_0 }));
}
function useFindYourFriendsDeletionIsLoading() {
  return callback2((isLoading) => isLoading.isLoading, require(3743) /* isIterable */.shallow);
}
function _onFindYourFriendsDeletionPress() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
let closure_6 = useStoreWithEqualityFn.createWithEqualityFn(() => ({ isLoading: false }));
useStoreWithEqualityFn = {
  useTitle() {
    return "STAFF ONLY - Find your friends deletion";
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useIsDisabled: function useIsFindYourFriendsDeletionDisabled() {
    return useFindYourFriendsDeletionIsLoading();
  },
  onPress: function onFindYourFriendsDeletionPress() {
    return _onFindYourFriendsDeletionPress(...arguments);
  },
  usePredicate: require("useStaffOrDeveloperSettingPredicate").useStaffOrDeveloperSettingPredicate,
  useTrailing: function useIsFindYourFriendsDeletionTrailing() {
    let tmp = null;
    if (useFindYourFriendsDeletionIsLoading()) {
      tmp = <ActivityIndicator />;
    }
    return tmp;
  }
};
useStoreWithEqualityFn = createToggle.createPressable(useStoreWithEqualityFn);
const result = require("MobileSetting").fileFinishedImporting("modules/user_settings/defs/native/StaffOnlyFindYourFriendsDeletionSetting.tsx");

export default useStoreWithEqualityFn;
