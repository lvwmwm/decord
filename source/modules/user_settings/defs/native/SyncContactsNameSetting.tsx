// Module ID: 13626
// Function ID: 103238
// Name: pressable
// Dependencies: []

// Module 13626 (pressable)
const AnalyticEvents = require(dependencyMap[1]).AnalyticEvents;
const _module = require(dependencyMap[7]);
const pressable = _module.createPressable({
  useTitle() {
    const intl = require(dependencyMap[8]).intl;
    return intl.string(require(dependencyMap[8]).t.nAsWKy);
  },
  parent: require(dependencyMap[0]).MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  onPress: function onContactSyncNamePress() {
    importDefault(dependencyMap[2]).track(AnalyticEvents.OPEN_MODAL, { type: "Change Name", location: { page: "User Settings" } });
    const obj = importDefault(dependencyMap[2]);
    importDefault(dependencyMap[3]).pushLazy(require(dependencyMap[5])(dependencyMap[4], dependencyMap.paths), "Contact Sync Name Update Modal");
  },
  withArrow: true,
  usePredicate: function useHasContactSyncAccount() {
    return null != require(dependencyMap[6]).useContactSyncAccount();
  }
});
const _module1 = require(dependencyMap[9]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/SyncContactsNameSetting.tsx");

export default pressable;
