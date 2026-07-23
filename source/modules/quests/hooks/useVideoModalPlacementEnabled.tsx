// Module ID: 10843
// Function ID: 84135
// Name: useVideoModalPlacementEnabled
// Dependencies: [4976, 10839, 10844, 2]
// Exports: useVideoModalPlacementEnabled

// Module 10843 (useVideoModalPlacementEnabled)
import { QuestsExperimentLocations } from "QuestsExperimentLocations";

const result = require("apexExperiment").fileFinishedImporting("modules/quests/hooks/useVideoModalPlacementEnabled.tsx");

export const useVideoModalPlacementEnabled = function useVideoModalPlacementEnabled(BountiesCtaHeader) {
  let obj = require(10839) /* useBountiesExperience */;
  let enabled = obj.useBountiesExperience(QuestsExperimentLocations.QUEST_HOME_MOBILE).verticalScrollEnabled;
  obj = { location: BountiesCtaHeader };
  if (enabled) {
    enabled = obj2.useConfig(obj).enabled;
  }
  return enabled;
};
