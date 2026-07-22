// Module ID: 14251
// Function ID: 107679
// Name: radio
// Dependencies: []

// Module 14251 (radio)
const LaunchPadTypes = require(dependencyMap[1]).LaunchPadTypes;
const _module = require(dependencyMap[5]);
const radio = _module.createRadio({
  useTitle() {
    const intl = require(dependencyMap[4]).intl;
    return intl.string(require(dependencyMap[4]).t.JqV7IC);
  },
  parent: require(dependencyMap[0]).MobileSetting.ADVANCED,
  useValue: importDefault(dependencyMap[6]),
  onValueChange: function onLaunchpadSettingValueChange(arg0) {
    if (LaunchPadTypes.GESTURE_FULL === arg0) {
      const LaunchPadModeSetting3 = require(dependencyMap[2]).LaunchPadModeSetting;
      LaunchPadModeSetting3.updateSetting(require(dependencyMap[3]).LaunchPadMode.LAUNCH_PAD_GESTURE_FULL_SCREEN);
    } else if (LaunchPadTypes.GESTURE_EDGE === arg0) {
      const LaunchPadModeSetting2 = require(dependencyMap[2]).LaunchPadModeSetting;
      LaunchPadModeSetting2.updateSetting(require(dependencyMap[3]).LaunchPadMode.LAUNCH_PAD_GESTURE_RIGHT_EDGE);
    } else if (LaunchPadTypes.PULL_TAB === arg0) {
      const LaunchPadModeSetting = require(dependencyMap[2]).LaunchPadModeSetting;
      LaunchPadModeSetting.updateSetting(require(dependencyMap[3]).LaunchPadMode.LAUNCH_PAD_PULL_TAB);
    } else if (LaunchPadTypes.DISABLED === arg0) {
      const LaunchPadModeSetting4 = require(dependencyMap[2]).LaunchPadModeSetting;
      LaunchPadModeSetting4.updateSetting(require(dependencyMap[3]).LaunchPadMode.LAUNCH_PAD_DISABLED);
    }
  },
  useOptions: function useLaunchpadSettingOptions() {
    let obj = {};
    const intl = require(dependencyMap[4]).intl;
    obj.label = intl.string(require(dependencyMap[4]).t.Q3abNB);
    const intl2 = require(dependencyMap[4]).intl;
    obj.subLabel = intl2.string(require(dependencyMap[4]).t./gdTGA);
    obj.value = LaunchPadTypes.GESTURE_FULL;
    const items = [obj, , , ];
    obj = {};
    const intl3 = require(dependencyMap[4]).intl;
    obj.label = intl3.string(require(dependencyMap[4]).t.dQN6qS);
    const intl4 = require(dependencyMap[4]).intl;
    obj.subLabel = intl4.string(require(dependencyMap[4]).t.W+cPjG);
    obj.value = LaunchPadTypes.GESTURE_EDGE;
    items[1] = obj;
    obj = {};
    const intl5 = require(dependencyMap[4]).intl;
    obj.label = intl5.string(require(dependencyMap[4]).t.PgDGl+);
    const intl6 = require(dependencyMap[4]).intl;
    obj.subLabel = intl6.string(require(dependencyMap[4]).t.uVc5MG);
    obj.value = LaunchPadTypes.PULL_TAB;
    items[2] = obj;
    const obj1 = {};
    const intl7 = require(dependencyMap[4]).intl;
    obj1.label = intl7.string(require(dependencyMap[4]).t.HnzBCZ);
    const intl8 = require(dependencyMap[4]).intl;
    obj1.subLabel = intl8.string(require(dependencyMap[4]).t.It18o2);
    obj1.value = LaunchPadTypes.DISABLED;
    items[3] = obj1;
    return items;
  }
});
const _module1 = require(dependencyMap[7]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/LaunchpadSetting.tsx");

export default radio;
