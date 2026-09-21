// Module ID: 16709
// Function ID: 16710
// Name: YouBarGuildTagExperiment
// Dependencies: [1438, 558, 568, 2]
// Exports: getIsYouBarGuildTagEnabled

// Module 16709 (YouBarGuildTagExperiment)
import c from "c" /* 568 */;
import ApexExperiment from "ApexExperiment" /* 1438 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-07-you-bar-guild-tag", kind: "user", defaultConfig: { showGuildTag: false }, variations: { 0: { showGuildTag: false }, 1: { showGuildTag: true } } });
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarGuildTagExperiment.tsx");

export default apexExperiment;
export const useIsYouBarGuildTagEnabled = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  const cResult = c.c(2);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return apexExperiment.useConfig(tmp2).showGuildTag;
}) : ((location) => apexExperiment.useConfig({ location }).showGuildTag);
export const getIsYouBarGuildTagEnabled = function getIsYouBarGuildTagEnabled(location) {
  return apexExperiment.getConfig({ location }).showGuildTag;
};
