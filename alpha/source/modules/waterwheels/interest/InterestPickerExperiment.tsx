// Module ID: 19202
// Function ID: 19203
// Name: InterestPickerExperiment
// Dependencies: [19, 1452, 558, 576, 2]
// Exports: isInterestPickerExperimentEnabled

// Module 19202 (InterestPickerExperiment)
import react2 from "react" /* 576 */;
import react from "react" /* 19 */;
import ApexExperiment from "ApexExperiment" /* 1452 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-10-interest-picker", kind: "user", defaultConfig: { enabled: false, gameList: "popular" }, variations: { 0: { enabled: false, gameList: "popular" }, 1: { enabled: true, gameList: "popular" }, 2: { enabled: true, gameList: "trending" }, 3: { enabled: true, gameList: "mobile" } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useInterestPickerGameList(location) {
  let gameList;
  const obj = react2;
  const cResult = obj.c(2);
  try {
    let tmp3;
    if (cResult[0] !== location) {
      const obj2 = { location };
      const config = apexExperiment.getConfig(obj2, { autoTrackExposure: false });
      tmp3 = config;
      cResult[0] = location;
      cResult[1] = config;
    } else {
      tmp3 = cResult[1];
    }
    gameList = tmp3.gameList;
  } catch (err) {
    gameList = null;
  }
  return gameList;
}) : (function useInterestPickerGameList(_location) {
  const items = [_location];
  return react.useMemo(() => {
    try {
      const obj = { location: _location };
      return apexExperiment.getConfig(obj, { autoTrackExposure: false }).gameList;
    } catch (err) {
      return null;
    }
  }, items);
});
const result = size.fileFinishedImporting("modules/waterwheels/interest/InterestPickerExperiment.tsx");

export const InterestPickerExperiment = apexExperiment;
export const isInterestPickerExperimentEnabled = function isInterestPickerExperimentEnabled(nuf_interest_picker_step) {
  try {
    const obj = { location: nuf_interest_picker_step };
    return apexExperiment.getConfig(obj).enabled;
  } catch (err) {
    return false;
  }
};
export const useInterestPickerGameList = tmp3;
