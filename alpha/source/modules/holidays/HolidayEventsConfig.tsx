// Module ID: 19584
// Function ID: 19585
// Name: HolidayEventsConfig
// Dependencies: [10845, 19585, 1113, 19586, 19587, 19588, 19589, 4656, 2]

// Module 19584 (HolidayEventsConfig)
import intl from "intl" /* 1113 */;
import dismissible_content from "dismissible_content" /* 4656 */;
import Constants from "Constants" /* 10845 */;
import HolidayRingtoneExperimentDefault from "HolidayRingtoneExperiment" /* 19585 */;
import AssetRegistryDefault from "AssetRegistry" /* 19586 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 19587 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 19588 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 19589 */;
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
