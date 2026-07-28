// Module ID: 16173
// Function ID: 125181
// Name: useIsExperimentEligible
// Dependencies: [10252, 1212, 16174, 16175, 1334, 2]

// Module 16173 (useIsExperimentEligible)
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
  soundpackLabel: require("getSystemLocale").t.Z5OQNp
};
obj = { webmDark: require("registerAsset"), webmLight: require("registerAsset") };
obj.appSpinnerSources = obj;
obj.coachmarkDismissibleContent = require("DismissibleContent").DismissibleContent.HOLIDAY_COACHMARK_WINTER_2025;
obj.coachmarkBackgroundColor = "#1170ed";
const result = require("registerAsset").fileFinishedImporting("modules/holidays/HolidayEventsConfig.tsx");

export default obj;
export const HolidayEmojiAnimationType = { THROW_EMOJI: 0, [0]: "THROW_EMOJI", SNOW: 1, [1]: "SNOW" };
