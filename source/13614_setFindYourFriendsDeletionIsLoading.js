// Module ID: 13614
// Function ID: 103169
// Name: setFindYourFriendsDeletionIsLoading
// Dependencies: []

// Module 13614 (setFindYourFriendsDeletionIsLoading)
function setFindYourFriendsDeletionIsLoading(arg0) {
  const arg1 = arg0;
  arg1(dependencyMap[5]).batchUpdates(() => state.setState({ isLoading: arg0 }));
}
function useFindYourFriendsDeletionIsLoading() {
  return callback2((isLoading) => isLoading.isLoading, arg1(dependencyMap[6]).shallow);
}
function _onFindYourFriendsDeletionPress() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _onFindYourFriendsDeletionPress = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
const ActivityIndicator = arg1(dependencyMap[1]).ActivityIndicator;
const jsx = arg1(dependencyMap[3]).jsx;
let obj = arg1(dependencyMap[4]);
let closure_6 = obj.createWithEqualityFn(() => ({ isLoading: false }));
obj = {
  useTitle() {
    return "STAFF ONLY - Find your friends deletion";
  },
  parent: arg1(dependencyMap[2]).MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useIsDisabled: function useIsFindYourFriendsDeletionDisabled() {
    return useFindYourFriendsDeletionIsLoading();
  },
  onPress: function onFindYourFriendsDeletionPress() {
    return _onFindYourFriendsDeletionPress(...arguments);
  },
  usePredicate: arg1(dependencyMap[11]).useStaffOrDeveloperSettingPredicate,
  useTrailing: function useIsFindYourFriendsDeletionTrailing() {
    let tmp = null;
    if (useFindYourFriendsDeletionIsLoading()) {
      tmp = <ActivityIndicator />;
    }
    return tmp;
  }
};
const pressable = arg1(dependencyMap[10]).createPressable(obj);
const obj2 = arg1(dependencyMap[10]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/user_settings/defs/native/StaffOnlyFindYourFriendsDeletionSetting.tsx");

export default pressable;
