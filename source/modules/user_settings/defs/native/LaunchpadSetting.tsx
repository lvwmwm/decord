// Module ID: 14415
// Function ID: 110155
// Name: radio
// Dependencies: [7751, 10480, 3803, 1282, 1212, 10127, 10481, 2]

// Module 14415 (radio)
import { LaunchPadTypes } from "LAUNCH_PAD_SPRING_CONFIG";
import createToggle from "createToggle";

const radio = createToggle.createRadio({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.JqV7IC);
  },
  parent: require("MobileSetting").MobileSetting.ADVANCED,
  useValue: require("useLaunchPadType"),
  onValueChange: function onLaunchpadSettingValueChange(arg0) {
    if (LaunchPadTypes.GESTURE_FULL === arg0) {
      const LaunchPadModeSetting3 = require(3803) /* explicitContentFromProto */.LaunchPadModeSetting;
      LaunchPadModeSetting3.updateSetting(require(1282) /* _callSuper */.LaunchPadMode.LAUNCH_PAD_GESTURE_FULL_SCREEN);
    } else if (LaunchPadTypes.GESTURE_EDGE === arg0) {
      const LaunchPadModeSetting2 = require(3803) /* explicitContentFromProto */.LaunchPadModeSetting;
      LaunchPadModeSetting2.updateSetting(require(1282) /* _callSuper */.LaunchPadMode.LAUNCH_PAD_GESTURE_RIGHT_EDGE);
    } else if (LaunchPadTypes.PULL_TAB === arg0) {
      const LaunchPadModeSetting = require(3803) /* explicitContentFromProto */.LaunchPadModeSetting;
      LaunchPadModeSetting.updateSetting(require(1282) /* _callSuper */.LaunchPadMode.LAUNCH_PAD_PULL_TAB);
    } else if (LaunchPadTypes.DISABLED === arg0) {
      const LaunchPadModeSetting4 = require(3803) /* explicitContentFromProto */.LaunchPadModeSetting;
      LaunchPadModeSetting4.updateSetting(require(1282) /* _callSuper */.LaunchPadMode.LAUNCH_PAD_DISABLED);
    }
  },
  useOptions: function useLaunchpadSettingOptions() {
    let obj = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.label = intl.string(require(1212) /* getSystemLocale */.t.Q3abNB);
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj.subLabel = intl2.string(require(1212) /* getSystemLocale */.t["/gdTGA"]);
    obj.value = LaunchPadTypes.GESTURE_FULL;
    const items = [obj, , , ];
    obj = {};
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj.label = intl3.string(require(1212) /* getSystemLocale */.t.dQN6qS);
    const intl4 = require(1212) /* getSystemLocale */.intl;
    obj.subLabel = intl4.string(require(1212) /* getSystemLocale */.t["W+cPjG"]);
    obj.value = LaunchPadTypes.GESTURE_EDGE;
    items[1] = obj;
    obj = {};
    const intl5 = require(1212) /* getSystemLocale */.intl;
    obj.label = intl5.string(require(1212) /* getSystemLocale */.t["PgDGl+"]);
    const intl6 = require(1212) /* getSystemLocale */.intl;
    obj.subLabel = intl6.string(require(1212) /* getSystemLocale */.t.uVc5MG);
    obj.value = LaunchPadTypes.PULL_TAB;
    items[2] = obj;
    const obj1 = {};
    const intl7 = require(1212) /* getSystemLocale */.intl;
    obj1.label = intl7.string(require(1212) /* getSystemLocale */.t.HnzBCZ);
    const intl8 = require(1212) /* getSystemLocale */.intl;
    obj1.subLabel = intl8.string(require(1212) /* getSystemLocale */.t.It18o2);
    obj1.value = LaunchPadTypes.DISABLED;
    items[3] = obj1;
    return items;
  }
});
let obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.JqV7IC);
  },
  parent: require("MobileSetting").MobileSetting.ADVANCED,
  useValue: require("useLaunchPadType"),
  onValueChange: function onLaunchpadSettingValueChange(arg0) {
    if (LaunchPadTypes.GESTURE_FULL === arg0) {
      const LaunchPadModeSetting3 = require(3803) /* explicitContentFromProto */.LaunchPadModeSetting;
      LaunchPadModeSetting3.updateSetting(require(1282) /* _callSuper */.LaunchPadMode.LAUNCH_PAD_GESTURE_FULL_SCREEN);
    } else if (LaunchPadTypes.GESTURE_EDGE === arg0) {
      const LaunchPadModeSetting2 = require(3803) /* explicitContentFromProto */.LaunchPadModeSetting;
      LaunchPadModeSetting2.updateSetting(require(1282) /* _callSuper */.LaunchPadMode.LAUNCH_PAD_GESTURE_RIGHT_EDGE);
    } else if (LaunchPadTypes.PULL_TAB === arg0) {
      const LaunchPadModeSetting = require(3803) /* explicitContentFromProto */.LaunchPadModeSetting;
      LaunchPadModeSetting.updateSetting(require(1282) /* _callSuper */.LaunchPadMode.LAUNCH_PAD_PULL_TAB);
    } else if (LaunchPadTypes.DISABLED === arg0) {
      const LaunchPadModeSetting4 = require(3803) /* explicitContentFromProto */.LaunchPadModeSetting;
      LaunchPadModeSetting4.updateSetting(require(1282) /* _callSuper */.LaunchPadMode.LAUNCH_PAD_DISABLED);
    }
  },
  useOptions: function useLaunchpadSettingOptions() {
    let obj = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.label = intl.string(require(1212) /* getSystemLocale */.t.Q3abNB);
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj.subLabel = intl2.string(require(1212) /* getSystemLocale */.t["/gdTGA"]);
    obj.value = LaunchPadTypes.GESTURE_FULL;
    const items = [obj, , , ];
    obj = {};
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj.label = intl3.string(require(1212) /* getSystemLocale */.t.dQN6qS);
    const intl4 = require(1212) /* getSystemLocale */.intl;
    obj.subLabel = intl4.string(require(1212) /* getSystemLocale */.t["W+cPjG"]);
    obj.value = LaunchPadTypes.GESTURE_EDGE;
    items[1] = obj;
    obj = {};
    const intl5 = require(1212) /* getSystemLocale */.intl;
    obj.label = intl5.string(require(1212) /* getSystemLocale */.t["PgDGl+"]);
    const intl6 = require(1212) /* getSystemLocale */.intl;
    obj.subLabel = intl6.string(require(1212) /* getSystemLocale */.t.uVc5MG);
    obj.value = LaunchPadTypes.PULL_TAB;
    items[2] = obj;
    const obj1 = {};
    const intl7 = require(1212) /* getSystemLocale */.intl;
    obj1.label = intl7.string(require(1212) /* getSystemLocale */.t.HnzBCZ);
    const intl8 = require(1212) /* getSystemLocale */.intl;
    obj1.subLabel = intl8.string(require(1212) /* getSystemLocale */.t.It18o2);
    obj1.value = LaunchPadTypes.DISABLED;
    items[3] = obj1;
    return items;
  }
};
const result = require("explicitContentFromProto").fileFinishedImporting("modules/user_settings/defs/native/LaunchpadSetting.tsx");

export default radio;
