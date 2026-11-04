// Module ID: 17262
// Function ID: 17263
// Name: useFetchOrbsArcadeGames
// Dependencies: [19, 17263, 17264, 2]
// Exports: default

// Module 17262 (useFetchOrbsArcadeGames)
import OrbsArcadeActionCreators from "OrbsArcadeActionCreators" /* 17264 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/orbs_arcade/hooks/useFetchOrbsArcadeGames.tsx");

export default function useFetchOrbsArcadeGames(location) {
  let enabled;
  const OrbsArcadeExperiment = enabled(17263).OrbsArcadeExperiment;
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
