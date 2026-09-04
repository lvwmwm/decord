// Module ID: 17301
// Function ID: 17302
// Name: HolidayEmojiAnimationType
// Dependencies: [9833, 1233, 17302, 17303, 1372, 2]

// Module 17301 (HolidayEmojiAnimationType)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import DismissibleContent from "DismissibleContent" /* 1372 */;
import Soundpacks from "Soundpacks" /* 9833 */;
import registerAssetDefault from "registerAsset" /* 17302 */;
import registerAssetDefault2 from "registerAsset" /* 17303 */;

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
  soundpack: Soundpacks.Soundpacks.WINTER_HOLIDAY,
  soundpackLabel: getSystemLocale.t.Z5OQNp,
  appSpinnerSources: null,
  coachmarkDismissibleContent: null,
  coachmarkBackgroundColor: "#1170ed"
};
obj = { webmDark: registerAssetDefault, webmLight: registerAssetDefault2 };
obj[8] = obj;
obj[9] = DismissibleContent.DismissibleContent.HOLIDAY_COACHMARK_WINTER_2025;
const result = set.fileFinishedImporting("modules/holidays/HolidayEventsConfig.tsx");

export default obj;
export const HolidayEmojiAnimationType = { THROW_EMOJI: 0, [0]: "THROW_EMOJI", SNOW: 1, [1]: "SNOW" };
