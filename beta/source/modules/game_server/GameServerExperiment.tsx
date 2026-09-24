// Module ID: 4703
// Function ID: 4704
// Name: GameServerExperiment
// Dependencies: [4704, 558, 568, 2]
// Exports: getGameServerEnabled

// Module 4703 (GameServerExperiment)
import c from "c" /* 568 */;
import createExperiment from "module_4704" /* 4704 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const obj = { kind: "guild", id: "2025-08_portkey_enabled", label: "GameServer Enabled", defaultConfig: { enabled: false }, treatments: null };
const items = [{ id: 1, label: "Enable GameServer", config: { enabled: true } }];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/game_server/GameServerExperiment.tsx");

export const GameServerExperiment = experiment;
export const getGameServerEnabled = function getGameServerEnabled(id, maybeGetGameServerHostingGuildEligiblePopoutDCF) {
  return experiment.getCurrentConfig({ guildId: id, location: maybeGetGameServerHostingGuildEligiblePopoutDCF }, { autoTrackExposure: false }).enabled;
};
export const useGameServerEnabled = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId, location) => {
  const cResult = c.c(4);
  if (cResult[0] === guildId) {
    if (cResult[1] === location) {
      let tmp2 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { autoTrackExposure: false };
      cResult[3] = obj2;
      let tmp4 = obj2;
    } else {
      tmp4 = cResult[3];
    }
    return experiment.useExperiment(tmp2, tmp4).enabled;
  }
  const obj3 = { guildId, location };
  cResult[0] = guildId;
  cResult[1] = location;
  cResult[2] = obj3;
  tmp2 = obj3;
}) : ((guildId, location) => experiment.useExperiment({ guildId, location }, { autoTrackExposure: false }).enabled);
