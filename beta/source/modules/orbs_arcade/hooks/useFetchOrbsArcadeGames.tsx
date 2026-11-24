// Module ID: 16426
// Function ID: 16427
// Name: useFetchOrbsArcadeGames
// Dependencies: [19, 16427, 16428, 2]
// Exports: default

// Module 16426 (useFetchOrbsArcadeGames)
import OrbsArcadeActionCreators from "OrbsArcadeActionCreators" /* 16428 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/orbs_arcade/hooks/useFetchOrbsArcadeGames.tsx");

export default function useFetchOrbsArcadeGames(location) {
  let enabled;
  const OrbsArcadeExperiment = enabled(16427).OrbsArcadeExperiment;
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
