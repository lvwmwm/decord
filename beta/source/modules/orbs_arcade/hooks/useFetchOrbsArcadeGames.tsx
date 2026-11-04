// Module ID: 17027
// Function ID: 17028
// Name: useFetchOrbsArcadeGames
// Dependencies: [19, 17028, 17029, 2]
// Exports: default

// Module 17027 (useFetchOrbsArcadeGames)
import OrbsArcadeActionCreators from "OrbsArcadeActionCreators" /* 17029 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/orbs_arcade/hooks/useFetchOrbsArcadeGames.tsx");

export default function useFetchOrbsArcadeGames(location) {
  let enabled;
  const OrbsArcadeExperiment = enabled(17028).OrbsArcadeExperiment;
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
};
