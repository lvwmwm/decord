// Module ID: 19557
// Function ID: 19558
// Name: InterestPickerExperiment
// Dependencies: [19, 1447, 2]
// Exports: isInterestPickerExperimentEnabled, useInterestPickerGameList

// Module 19557 (InterestPickerExperiment)
import react_mod from "react" /* 19 */;
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

let react = react_mod;
let obj = { name: "2026-10-interest-picker", kind: "user", defaultConfig: { enabled: false, gameList: "popular" }, variations: { 0: { enabled: false, gameList: "popular" }, 1: { enabled: true, gameList: "popular" }, 2: { enabled: true, gameList: "trending" }, 3: { enabled: true, gameList: "mobile" } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/waterwheels/interest/InterestPickerExperiment.tsx");

export const InterestPickerExperiment = apexExperiment;
export function isInterestPickerExperimentEnabled(nuf_interest_picker_step) {
  try {
    const obj = { location: nuf_interest_picker_step };
    return apexExperiment.getConfig(obj).enabled;
  } catch (err) {
    return false;
  }
}
export function useInterestPickerGameList(InterestPickerStep) {
  let _location;
  react = InterestPickerStep;
  const items = [InterestPickerStep];
  return react.useMemo(() => {
    try {
      const obj = { location: _location };
      return apexExperiment.getConfig(obj, { autoTrackExposure: false }).gameList;
    } catch (err) {
      return null;
    }
  }, items);
}
