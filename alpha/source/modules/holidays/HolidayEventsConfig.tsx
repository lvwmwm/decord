// Module ID: 19525
// Function ID: 19526
// Name: HolidayEventsConfig
// Dependencies: [10885, 19526, 1112, 19527, 19528, 19529, 19530, 4746, 2]

// Module 19525 (HolidayEventsConfig)
import intl from "intl" /* 1112 */;
import dismissible_content from "dismissible_content" /* 4746 */;
import Constants from "Constants" /* 10885 */;
import HolidayRingtoneExperimentDefault from "HolidayRingtoneExperiment" /* 19526 */;
import AssetRegistryDefault from "AssetRegistry" /* 19527 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 19528 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 19529 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 19530 */;
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
