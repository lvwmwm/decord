// Module ID: 16530
// Function ID: 16531
// Name: HolidayEmojiAnimationType
// Dependencies: [9831, 1236, 16531, 16532, 1377, 2]

// Module 16530 (HolidayEmojiAnimationType)
let obj = {
  experiment: null,
  useIsExperimentEligible() {
    return false;
  },
  getIsExperimentEligible() {
    return false;
  },
  startTimeMs: 1766163600000,
  endTimeMs: 1767632400000,
  isDesktopOnly: true,
  soundpack: require("Soundpacks").Soundpacks.WINTER_HOLIDAY,
  soundpackLabel: require("getSystemLocale").t.Z5OQNp,
  appSpinnerSources: null,
  coachmarkDismissibleContent: null,
  coachmarkBackgroundColor: "#1170ed"
};
obj = { webmDark: require("registerAsset"), webmLight: require("registerAsset") };
obj[8] = obj;
obj[9] = require("DismissibleContent").DismissibleContent.HOLIDAY_COACHMARK_WINTER_2025;
const result = require("registerAsset").fileFinishedImporting("modules/holidays/HolidayEventsConfig.tsx");

export default obj;
export const HolidayEmojiAnimationType = { THROW_EMOJI: 0, [0]: "THROW_EMOJI", SNOW: 1, [1]: "SNOW" };
