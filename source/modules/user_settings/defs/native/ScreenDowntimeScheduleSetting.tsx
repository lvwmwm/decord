// Module ID: 14456
// Function ID: 110381
// Name: toggle
// Dependencies: [7733, 5838, 13921, 6235, 10099, 1212, 3838, 2]

// Module 14456 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.dxlHN2);
  },
  useDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["/071J7"]);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").EnableScreenDowntimeScheduleNotifications.useSetting,
  onValueChange(addFlagResult) {
    const EnableScreenDowntimeScheduleNotifications = require(3838) /* explicitContentFromProto */.EnableScreenDowntimeScheduleNotifications;
    return EnableScreenDowntimeScheduleNotifications.updateSetting(addFlagResult);
  },
  usePredicate() {
    let isFamilyCenterV3Enabled = require(5838) /* apexExperiment */.useIsFamilyCenterV3Enabled({ location: "ScreenDowntimeScheduleSetting" });
    const obj = require(5838) /* apexExperiment */;
    const tmp2 = importDefault(13921)();
    const hasActiveParentLinks = require(6235) /* useUserIdsForLinkStatus */.useHasActiveParentLinks();
    if (isFamilyCenterV3Enabled) {
      isFamilyCenterV3Enabled = tmp2;
    }
    if (isFamilyCenterV3Enabled) {
      isFamilyCenterV3Enabled = hasActiveParentLinks;
    }
    return isFamilyCenterV3Enabled;
  }
});
let obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.dxlHN2);
  },
  useDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["/071J7"]);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").EnableScreenDowntimeScheduleNotifications.useSetting,
  onValueChange(addFlagResult) {
    const EnableScreenDowntimeScheduleNotifications = require(3838) /* explicitContentFromProto */.EnableScreenDowntimeScheduleNotifications;
    return EnableScreenDowntimeScheduleNotifications.updateSetting(addFlagResult);
  },
  usePredicate() {
    let isFamilyCenterV3Enabled = require(5838) /* apexExperiment */.useIsFamilyCenterV3Enabled({ location: "ScreenDowntimeScheduleSetting" });
    const obj = require(5838) /* apexExperiment */;
    const tmp2 = importDefault(13921)();
    const hasActiveParentLinks = require(6235) /* useUserIdsForLinkStatus */.useHasActiveParentLinks();
    if (isFamilyCenterV3Enabled) {
      isFamilyCenterV3Enabled = tmp2;
    }
    if (isFamilyCenterV3Enabled) {
      isFamilyCenterV3Enabled = hasActiveParentLinks;
    }
    return isFamilyCenterV3Enabled;
  }
};
const result = require("useUserIsTeenAgeGroup").fileFinishedImporting("modules/user_settings/defs/native/ScreenDowntimeScheduleSetting.tsx");

export default toggle;
