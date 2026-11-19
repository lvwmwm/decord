// Module ID: 19580
// Function ID: 19581
// Name: HolidayEventsConfig
// Dependencies: [10823, 19581, 1113, 19582, 19583, 19584, 19585, 4625, 2]

// Module 19580 (HolidayEventsConfig)
import intl from "intl" /* 1113 */;
import dismissible_content from "dismissible_content" /* 4625 */;
import Constants from "Constants" /* 10823 */;
import HolidayRingtoneExperimentDefault from "HolidayRingtoneExperiment" /* 19581 */;
import AssetRegistryDefault from "AssetRegistry" /* 19582 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 19583 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 19584 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 19585 */;
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
  appSpinnerSources: { movDark: AssetRegistryDefault, movLight: AssetRegistryDefault2, webmDark: AssetRegistryDefault3, webmLight: AssetRegistryDefault4 },
  coachmarkDismissibleContent: dismissible_content.DismissibleContent.HOLIDAY_COACHMARK_WINTER_2026
};
Soundpacks = Constants.Soundpacks;
({ movDark: AssetRegistryDefault, movLight: AssetRegistryDefault2, webmDark: AssetRegistryDefault3, webmLight: AssetRegistryDefault4 });
const result = size.fileFinishedImporting("modules/holidays/HolidayEventsConfig.tsx");

export default obj;
export const HolidayEmojiAnimationType = { THROW_EMOJI: 0, [0]: "THROW_EMOJI", SNOW: 1, [1]: "SNOW" };
