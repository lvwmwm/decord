// Module ID: 10839
// Function ID: 84126
// Name: useBountiesExperience
// Dependencies: [10840, 10841, 10842, 2]
// Exports: useBountiesExperience

// Module 10839 (useBountiesExperience)
const result = require("apexExperiment").fileFinishedImporting("modules/quests/experiments/useBountiesExperience.tsx");

export const useBountiesExperience = function useBountiesExperience(VIDEO_MODAL_MOBILE) {
  const BountiesVerticalScrollExperiment = require(10840) /* shouldUseScrollIndicatorOverlay */.BountiesVerticalScrollExperiment;
  let obj = { location: VIDEO_MODAL_MOBILE };
  const config = BountiesVerticalScrollExperiment.useConfig(obj);
  const BountiesStage1Experiment = require(10841) /* apexExperiment */.BountiesStage1Experiment;
  obj = { location: VIDEO_MODAL_MOBILE };
  const config1 = BountiesStage1Experiment.useConfig(obj);
  const QuestHomeBountiesExperiment = require(10842) /* apexExperiment */.QuestHomeBountiesExperiment;
  obj = { location: VIDEO_MODAL_MOBILE };
  let num = 50;
  const config2 = QuestHomeBountiesExperiment.useConfig(obj);
  if (config1.enabled) {
    num = config1.orbAmount;
  }
  let num2 = 15;
  if (config1.enabled) {
    num2 = config1.rewardTimerSeconds;
  }
  if (config.enabled) {
    const obj1 = { showBounties: true, ownedByVerticalScrollExperiment: true, verticalScrollEnabled: null, loopingEnabled: false };
    ({ verticalScrollEnabled: obj5.verticalScrollEnabled, ctaTimerMilliSeconds: obj5.ctaTimerMilliSeconds, scrollAffordanceVariant: obj5.scrollAffordanceVariant } = config);
    obj1.stage1Enabled = config1.enabled;
    obj1.orbAmount = num;
    obj1.rewardTimerSeconds = num2;
    let obj2 = obj1;
  } else {
    obj2 = { showBounties: config2.enabled, ownedByVerticalScrollExperiment: false };
    ({ verticalScrollEnabled: obj4.verticalScrollEnabled, loopingEnabled: obj4.loopingEnabled, ctaTimerMilliSeconds: obj4.ctaTimerMilliSeconds } = config1);
    obj2.scrollAffordanceVariant = "none";
    obj2.stage1Enabled = config1.enabled;
    obj2.orbAmount = num;
    obj2.rewardTimerSeconds = num2;
  }
  return obj2;
};
