// Module ID: 19679
// Function ID: 19680
// Name: HolidayEventsConfig
// Dependencies: [10258, 19680, 1112, 4845, 2]

// Module 19679 (HolidayEventsConfig)
import intl from "intl" /* 1112 */;
import dismissible_content from "dismissible_content" /* 4845 */;
import Constants from "Constants" /* 10258 */;
import HolidayRingtoneExperimentDefault from "HolidayRingtoneExperiment" /* 19680 */;
import size from "module_2" /* 2 */;

let Soundpacks;
let obj = {
  experiment: HolidayRingtoneExperimentDefault,
  useIsExperimentEligible() {
    const obj = HolidayRingtoneExperimentDefault;
    return obj.useConfig({ location: "holiday_events_use_eligible" }).enabled;
  },
  getIsExperimentEligible() {
    const obj = HolidayRingtoneExperimentDefault;
    return obj.getConfig({ location: "holiday_events_is_eligible" }).enabled;
  },
  startTimeMs: 1797267600000,
  endTimeMs: 1799082000000,
  isDesktopOnly: true,
  soundpack: Soundpacks.WINTER_HOLIDAY,
  soundpackLabel: intl.t.Z5OQNp,
  coachmarkDismissibleContent: dismissible_content.DismissibleContent.HOLIDAY_COACHMARK_WINTER_2026
};
Soundpacks = Constants.Soundpacks;
const result = size.fileFinishedImporting("modules/holidays/HolidayEventsConfig.tsx");

export default obj;
export const HolidayEmojiAnimationType = { THROW_EMOJI: 0, [0]: "THROW_EMOJI", SNOW: 1, [1]: "SNOW" };
