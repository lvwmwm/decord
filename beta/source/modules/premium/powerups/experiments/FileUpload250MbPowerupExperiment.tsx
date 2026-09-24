// Module ID: 4717
// Function ID: 4718
// Name: FileUpload250MbPowerupExperiment
// Dependencies: [4704, 558, 568, 2]
// Exports: getFileUpload250MbPowerupEnabled, getFileUpload250MbPowerupRollbackEnabled

// Module 4717 (FileUpload250MbPowerupExperiment)
import c from "c" /* 568 */;
import createExperiment from "module_4704" /* 4704 */;
import "ReactCompilerGating";
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const obj = { kind: "guild", id: "2026-03_file_upload_250_mb_powerup", label: "File Upload 250MB Powerup", defaultConfig: { enabled: false, rollbackEnabled: false }, treatments: null };
const items = [{ id: 1, label: "Enable File Upload 250MB Powerup", config: { enabled: true, rollbackEnabled: false } }, { id: 2, label: "Rollback UI for File Upload 250MB Powerup", config: { enabled: true, rollbackEnabled: true } }];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId, location) => {
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
const result = size.fileFinishedImporting("modules/premium/powerups/experiments/FileUpload250MbPowerupExperiment.tsx");

export const FileUpload250MbPowerupExperiment = experiment;
export const getFileUpload250MbPowerupEnabled = function getFileUpload250MbPowerupEnabled(guildId, GuildPowerupsConstants) {
  return experiment.getCurrentConfig({ guildId, location: GuildPowerupsConstants }, { autoTrackExposure: false }).enabled;
};
export const useFileUpload250MbPowerupEnabled = tmp3;
export const useFileUpload250MbPowerupRollbackEnabled = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId, location) => {
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
    return experiment.useExperiment(tmp2, tmp4).rollbackEnabled;
  }
  const obj3 = { guildId, location };
  cResult[0] = guildId;
  cResult[1] = location;
  cResult[2] = obj3;
  tmp2 = obj3;
}) : ((guildId, location) => experiment.useExperiment({ guildId, location }, { autoTrackExposure: false }).rollbackEnabled);
export const getFileUpload250MbPowerupRollbackEnabled = function getFileUpload250MbPowerupRollbackEnabled(guildId, location) {
  return experiment.getCurrentConfig({ guildId, location }, { autoTrackExposure: false }).rollbackEnabled;
};
