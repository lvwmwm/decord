// Module ID: 10870
// Function ID: 84325
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 10870 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-05-bounties-stage-1", kind: "user", defaultConfig: { enabled: false, verticalScrollEnabled: false, loopingEnabled: false, ctaTimerMilliSeconds: 3000, rewardTimerSeconds: 15, orbAmount: 50 }, variations: { [1]: { enabled: true, verticalScrollEnabled: false, loopingEnabled: false, ctaTimerMilliSeconds: 3000, rewardTimerSeconds: 15, orbAmount: 50 }, [2]: { enabled: true, verticalScrollEnabled: false, loopingEnabled: true, ctaTimerMilliSeconds: 3000, rewardTimerSeconds: 15, orbAmount: 50 }, [3]: { enabled: true, verticalScrollEnabled: false, loopingEnabled: false, ctaTimerMilliSeconds: 3000, rewardTimerSeconds: 15, orbAmount: 30 }, [4]: { enabled: true, verticalScrollEnabled: false, loopingEnabled: false, ctaTimerMilliSeconds: 0, rewardTimerSeconds: 15, orbAmount: 50 }, [5]: { enabled: true, verticalScrollEnabled: false, loopingEnabled: false, ctaTimerMilliSeconds: 3000, rewardTimerSeconds: 25, orbAmount: 50 }, [6]: { enabled: true, verticalScrollEnabled: true, loopingEnabled: false, ctaTimerMilliSeconds: 3000, rewardTimerSeconds: 15, orbAmount: 50 }, [7]: { enabled: true, verticalScrollEnabled: true, loopingEnabled: true, ctaTimerMilliSeconds: 3000, rewardTimerSeconds: 15, orbAmount: 50 }, [8]: { enabled: true, verticalScrollEnabled: true, loopingEnabled: false, ctaTimerMilliSeconds: 3000, rewardTimerSeconds: 15, orbAmount: 30 }, [9]: { enabled: true, verticalScrollEnabled: true, loopingEnabled: false, ctaTimerMilliSeconds: 0, rewardTimerSeconds: 15, orbAmount: 50 }, [10]: { enabled: true, verticalScrollEnabled: true, loopingEnabled: false, ctaTimerMilliSeconds: 3000, rewardTimerSeconds: 25, orbAmount: 50 } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/quests/experiments/BountiesStage1Experiment.tsx");

export const BountiesStage1Experiment = apexExperiment;
