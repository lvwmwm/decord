// Module ID: 15928
// Function ID: 122201
// Name: useIsExperimentEligible
// Dependencies: []

// Module 15928 (useIsExperimentEligible)
let obj = {
  "Bool(true)": "<string:189857795>",
  "Bool(true)": "Glass_01",
  "Bool(true)": "<string:3813801984>",
  "Bool(true)": "<string:1904831089>",
  "Bool(true)": "a",
  "Bool(true)": "<string:30166593>",
  useIsExperimentEligible() {
    return false;
  },
  getIsExperimentEligible() {
    return false;
  },
  soundpack: require(dependencyMap[0]).Soundpacks.WINTER_HOLIDAY,
  soundpackLabel: require(dependencyMap[1]).t.Z5OQNp
};
obj = { webmDark: importDefault(dependencyMap[2]), webmLight: importDefault(dependencyMap[3]) };
obj.appSpinnerSources = obj;
obj.coachmarkDismissibleContent = require(dependencyMap[4]).DismissibleContent.HOLIDAY_COACHMARK_WINTER_2025;
obj.coachmarkBackgroundColor = "#1170ed";
const _module = require(dependencyMap[5]);
const result = _module.fileFinishedImporting("modules/holidays/HolidayEventsConfig.tsx");

export default obj;
export const HolidayEmojiAnimationType = { THROW_EMOJI: 0, [0]: "THROW_EMOJI", SNOW: 1, [1]: "SNOW" };
