// Module ID: 12708
// Function ID: 12709
// Name: GameServerPricingExperiment
// Dependencies: [4704, 558, 568, 4703, 2]

// Module 12708 (GameServerPricingExperiment)
import c from "c" /* 568 */;
import GameServerExperiment from "GameServerExperiment" /* 4703 */;
import createExperiment from "module_4704" /* 4704 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj = { kind: "guild", id: "2026-03_game_server_pricing", label: "Game Server Pricing", defaultConfig: { enabled: false }, treatments: null };
const items = [{ id: 1, label: "Enable Game Server Pricing", config: { enabled: true } }];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/game_server/experiments/GameServerPricingExperiment.tsx");

export const GameServerPricingExperiment = experiment;
export const useIsGameServerPricingEnabled = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId, location) => {
  const cResult = c.c(4);
  let enabled = GameServerExperiment.useGameServerEnabled(guildId, location);
  if (cResult[0] === guildId) {
    if (cResult[1] === location) {
      let tmp2 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { autoTrackExposure: false };
      cResult[3] = obj3;
      let tmp4 = obj3;
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
  let enabled = GameServerExperiment.useGameServerEnabled(guildId, location);
  if (enabled) {
    enabled = experiment.useExperiment(obj2, { autoTrackExposure: false }).enabled;
  }
  return enabled;
});
