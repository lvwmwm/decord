// Module ID: 16432
// Function ID: 16433
// Name: useFetchOrbsArcadeGames
// Dependencies: [19, 558, 576, 16433, 16434, 2]

// Module 16432 (useFetchOrbsArcadeGames)
import OrbsArcadeActionCreators from "OrbsArcadeActionCreators" /* 16434 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFetchOrbsArcadeGames(location) {
  let enabled;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp = enabled;
  let obj = enabled(576);
  const cResult = obj.c(5);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const OrbsArcadeExperiment = tmp(16433).OrbsArcadeExperiment;
  enabled = OrbsArcadeExperiment.useConfig(tmp4).enabled;
  if (cResult[2] !== enabled) {
    const fn = function o() {
      const tmp = enabled;
      if (tmp) {
        const obj = OrbsArcadeActionCreators;
        const orbsArcadeGamesIfStale = obj.fetchOrbsArcadeGamesIfStale();
      }
    };
    const items = [enabled];
    cResult[2] = enabled;
    cResult[3] = fn;
    cResult[4] = items;
    tmp6 = items;
    tmp5 = fn;
  } else {
    tmp5 = cResult[3];
    tmp6 = cResult[4];
  }
  const effect = react.useEffect(tmp5, tmp6);
  return enabled;
}) : (function useFetchOrbsArcadeGames(location) {
  let enabled;
  const OrbsArcadeExperiment = enabled(16433).OrbsArcadeExperiment;
  let obj = { location };
  enabled = OrbsArcadeExperiment.useConfig(obj).enabled;
  const items = [enabled];
  const effect = react.useEffect(() => {
    const tmp = enabled;
    if (tmp) {
      const obj = OrbsArcadeActionCreators;
      const orbsArcadeGamesIfStale = obj.fetchOrbsArcadeGamesIfStale();
    }
  }, items);
  return enabled;
});
const result = size.fileFinishedImporting("modules/orbs_arcade/hooks/useFetchOrbsArcadeGames.tsx");

export default tmp2;
