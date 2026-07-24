// Module ID: 14400
// Function ID: 110076
// Name: toggle
// Dependencies: [7751, 6828, 13865, 7122, 10127, 1212, 3803, 2]

// Module 14400 (toggle)
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
    const EnableScreenDowntimeScheduleNotifications = require(3803) /* explicitContentFromProto */.EnableScreenDowntimeScheduleNotifications;
    return EnableScreenDowntimeScheduleNotifications.updateSetting(addFlagResult);
  },
  usePredicate() {
    let isFamilyCenterV3Enabled = require(6828) /* apexExperiment */.useIsFamilyCenterV3Enabled({ location: "ScreenDowntimeScheduleSetting" });
    const obj = require(6828) /* apexExperiment */;
    const tmp2 = importDefault(13865)();
    const hasActiveParentLinks = require(7122) /* useUserIdsForLinkStatus */.useHasActiveParentLinks();
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
    const EnableScreenDowntimeScheduleNotifications = require(3803) /* explicitContentFromProto */.EnableScreenDowntimeScheduleNotifications;
    return EnableScreenDowntimeScheduleNotifications.updateSetting(addFlagResult);
  },
  usePredicate() {
    let isFamilyCenterV3Enabled = require(6828) /* apexExperiment */.useIsFamilyCenterV3Enabled({ location: "ScreenDowntimeScheduleSetting" });
    const obj = require(6828) /* apexExperiment */;
    const tmp2 = importDefault(13865)();
    const hasActiveParentLinks = require(7122) /* useUserIdsForLinkStatus */.useHasActiveParentLinks();
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
