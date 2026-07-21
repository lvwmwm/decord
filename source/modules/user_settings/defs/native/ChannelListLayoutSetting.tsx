// Module ID: 14241
// Function ID: 107608
// Name: useChannelListLayoutPredicate
// Dependencies: []
// Exports: useChannelListLayoutPredicate

// Module 14241 (useChannelListLayoutPredicate)
function useChannelListLayoutPredicate() {
  return false;
}
const _module = require(dependencyMap[4]);
const radio = _module.createRadio({
  useTitle() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.eY1X1e);
  },
  parent: require(dependencyMap[0]).MobileSetting.ADVANCED,
  useValue: require(dependencyMap[1]).ChannelListLayoutSetting.useSetting,
  onValueChange: function onChannelListLayoutValueChange(addFlagResult) {
    const ChannelListLayoutSetting = require(dependencyMap[1]).ChannelListLayoutSetting;
    ChannelListLayoutSetting.updateSetting(addFlagResult);
  },
  useOptions: function useChannelListLayoutOptions() {
    let obj = {};
    const intl = require(dependencyMap[2]).intl;
    obj.label = intl.string(require(dependencyMap[2]).t.T7G4Y0);
    obj.value = require(dependencyMap[3]).ChannelListLayoutTypes.COZY;
    const items = [obj, ];
    obj = {};
    const intl2 = require(dependencyMap[2]).intl;
    obj.label = intl2.string(require(dependencyMap[2]).t.7iegX4);
    obj.value = require(dependencyMap[3]).ChannelListLayoutTypes.COMPACT;
    items[1] = obj;
    return items;
  },
  usePredicate: useChannelListLayoutPredicate
});
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/ChannelListLayoutSetting.tsx");

export default radio;
export { useChannelListLayoutPredicate };
