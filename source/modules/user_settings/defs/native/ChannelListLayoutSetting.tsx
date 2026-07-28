// Module ID: 14472
// Function ID: 110464
// Name: useChannelListLayoutPredicate
// Dependencies: [7733, 3838, 1212, 3843, 10099, 2]
// Exports: useChannelListLayoutPredicate

// Module 14472 (useChannelListLayoutPredicate)
import createToggle from "createToggle";

function useChannelListLayoutPredicate() {
  return false;
}
const radio = createToggle.createRadio({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.eY1X1e);
  },
  parent: require("MobileSetting").MobileSetting.ADVANCED,
  useValue: require("explicitContentFromProto").ChannelListLayoutSetting.useSetting,
  onValueChange: function onChannelListLayoutValueChange(addFlagResult) {
    const ChannelListLayoutSetting = require(3838) /* explicitContentFromProto */.ChannelListLayoutSetting;
    ChannelListLayoutSetting.updateSetting(addFlagResult);
  },
  useOptions: function useChannelListLayoutOptions() {
    let obj = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.label = intl.string(require(1212) /* getSystemLocale */.t.T7G4Y0);
    obj.value = require(3843) /* ChannelListLayoutTypes */.ChannelListLayoutTypes.COZY;
    const items = [obj, ];
    obj = {};
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj.label = intl2.string(require(1212) /* getSystemLocale */.t["7iegX4"]);
    obj.value = require(3843) /* ChannelListLayoutTypes */.ChannelListLayoutTypes.COMPACT;
    items[1] = obj;
    return items;
  },
  usePredicate: useChannelListLayoutPredicate
});
let obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.eY1X1e);
  },
  parent: require("MobileSetting").MobileSetting.ADVANCED,
  useValue: require("explicitContentFromProto").ChannelListLayoutSetting.useSetting,
  onValueChange: function onChannelListLayoutValueChange(addFlagResult) {
    const ChannelListLayoutSetting = require(3838) /* explicitContentFromProto */.ChannelListLayoutSetting;
    ChannelListLayoutSetting.updateSetting(addFlagResult);
  },
  useOptions: function useChannelListLayoutOptions() {
    let obj = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.label = intl.string(require(1212) /* getSystemLocale */.t.T7G4Y0);
    obj.value = require(3843) /* ChannelListLayoutTypes */.ChannelListLayoutTypes.COZY;
    const items = [obj, ];
    obj = {};
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj.label = intl2.string(require(1212) /* getSystemLocale */.t["7iegX4"]);
    obj.value = require(3843) /* ChannelListLayoutTypes */.ChannelListLayoutTypes.COMPACT;
    items[1] = obj;
    return items;
  },
  usePredicate: useChannelListLayoutPredicate
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/ChannelListLayoutSetting.tsx");

export default radio;
export { useChannelListLayoutPredicate };
