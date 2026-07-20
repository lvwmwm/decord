// Module ID: 10826
// Function ID: 84039
// Name: useVideoModalPlacementEnabled
// Dependencies: []
// Exports: useVideoModalPlacementEnabled

// Module 10826 (useVideoModalPlacementEnabled)
const QuestsExperimentLocations = require(dependencyMap[0]).QuestsExperimentLocations;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/quests/hooks/useVideoModalPlacementEnabled.tsx");

export const useVideoModalPlacementEnabled = function useVideoModalPlacementEnabled(BountiesCtaHeader) {
  let obj = require(dependencyMap[1]);
  let enabled = obj.useBountiesExperience(QuestsExperimentLocations.QUEST_HOME_MOBILE).verticalScrollEnabled;
  obj = { location: BountiesCtaHeader };
  if (enabled) {
    enabled = obj2.useConfig(obj).enabled;
  }
  return enabled;
};
