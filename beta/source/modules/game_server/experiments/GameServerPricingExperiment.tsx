// Module ID: 11913
// Function ID: 11914
// Name: GameServerPricingExperiment
// Dependencies: [4750, 558, 576, 4749, 2]

// Module 11913 (GameServerPricingExperiment)
import react from "react" /* 576 */;
import GameServerExperiment from "GameServerExperiment" /* 4749 */;
import createExperiment from "module_4750" /* 4750 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let items;
let obj = { kind: "guild", id: "2026-03_game_server_pricing", label: "Game Server Pricing", defaultConfig: { enabled: false }, treatments: items };
items = [{ id: 1, label: "Enable Game Server Pricing", config: { enabled: true } }];
const experiment = createExperiment.createExperiment(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId, location) => {
  const obj = react;
  const cResult = obj.c(4);
  const obj2 = GameServerExperiment;
  let enabled = obj2.useGameServerEnabled(guildId, location);
  if (cResult[0] === guildId) {
    let tmp2;
    let tmp4;
    if (cResult[1] === location) {
      tmp2 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { autoTrackExposure: false };
      cResult[3] = obj3;
      tmp4 = obj3;
    } else {
      tmp4 = cResult[3];
    }
    if (enabled) {
      enabled = experiment.useExperiment(tmp2, tmp4).enabled;
    }
    return enabled;
  }
  const obj4 = { guildId, location };
  cResult[0] = guildId;
  cResult[1] = location;
  cResult[2] = obj4;
  tmp2 = obj4;
}) : ((guildId, location) => {
  const obj = GameServerExperiment;
  let enabled = obj.useGameServerEnabled(guildId, location);
  const obj2 = { guildId, location };
  if (enabled) {
    enabled = experiment.useExperiment(obj2, { autoTrackExposure: false }).enabled;
  }
  return enabled;
});
const result = size.fileFinishedImporting("modules/game_server/experiments/GameServerPricingExperiment.tsx");

export const GameServerPricingExperiment = experiment;
export const useIsGameServerPricingEnabled = tmp3;
