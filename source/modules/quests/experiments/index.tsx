// Module ID: 10466
// Function ID: 80991
// Name: date
// Dependencies: [57, 31, 4976, 1428, 9465, 9466, 10467, 664, 2]
// Exports: useMobileQuestOrbRewardModalCtaPriorityExperiment, useQuestOrbsMultiplierMarketing, useShouldRemoveQuestHomeHero

// Module 10466 (date)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { QuestsExperimentLocations } from "QuestsExperimentLocations";
import ApexExperiment from "ApexExperiment";
import ApexExperiment from "ApexExperiment";
import ApexExperiment from "ApexExperiment";
import ApexExperiment from "ApexExperiment";
import ApexExperiment from "ApexExperiment";
import ApexExperiment from "ApexExperiment";
import ApexExperiment from "ApexExperiment";
import ApexExperiment from "ApexExperiment";
import ApexExperiment from "ApexExperiment";
import ApexExperiment from "ApexExperiment";
import ApexExperiment from "ApexExperiment";
import ApexExperiment from "ApexExperiment";
import ApexExperiment from "ApexExperiment";
import ApexExperiment from "ApexExperiment";
import ApexExperiment from "ApexExperiment";

const require = arg1;
ApexExperiment = { name: "2025-11-video-end-card-v2", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
ApexExperiment = ApexExperiment.createApexExperiment(ApexExperiment);
ApexExperiment = { name: "2026-02-new-video-quest-progress-bar-styling", kind: "user", defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
ApexExperiment = ApexExperiment.createApexExperiment(ApexExperiment);
const obj1 = { name: "2026-05-app-store-overlay-feature-gate", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment2 = ApexExperiment.createApexExperiment(obj1);
ApexExperiment = { name: "2026-03-quest-reload-video-on-obscured", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const obj3 = { DEFAULT: 0, [0]: "DEFAULT", AUTO_ENABLE_CAPTIONS: 1, [1]: "AUTO_ENABLE_CAPTIONS", AUTO_UNMUTE: 2, [2]: "AUTO_UNMUTE" };
ApexExperiment = ApexExperiment.createApexExperiment(ApexExperiment);
ApexExperiment = { name: "2026-03-muted-video-quest-new-defaults", kind: "user", defaultConfig: { enabled: false, variant: obj3.DEFAULT } };
ApexExperiment = { enabled: true, variant: obj3.AUTO_ENABLE_CAPTIONS };
ApexExperiment.variations = { [0]: { enabled: false, variant: obj3.DEFAULT }, [1]: ApexExperiment, [2]: { enabled: true, variant: obj3.AUTO_UNMUTE } };
ApexExperiment = ApexExperiment.createApexExperiment(ApexExperiment);
const obj8 = { name: "2026-04-quests-premium-orb-multiplier-marketing", kind: "user", defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
let closure_5 = ApexExperiment.createApexExperiment(obj8);
ApexExperiment = { name: "2026-03-video-quest-player-refactor", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
ApexExperiment = ApexExperiment.createApexExperiment(ApexExperiment);
const obj10 = { name: "2026-04-composed-quest-player", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const obj11 = { CONTROL: 0, [0]: "CONTROL", EARN_ORBS_PRIMARY: 1, [1]: "EARN_ORBS_PRIMARY", EARN_ORBS_ONLY: 2, [2]: "EARN_ORBS_ONLY" };
const apexExperiment6 = ApexExperiment.createApexExperiment(obj10);
const obj12 = { name: "2026-04-mobile-quest-orb-reward-modal-cta-priority", kind: "user", defaultConfig: { enabled: false, variant: obj11.CONTROL } };
ApexExperiment = { enabled: true, variant: obj11.EARN_ORBS_PRIMARY };
obj12.variations = { [0]: { enabled: false, variant: obj11.CONTROL }, [1]: ApexExperiment, [2]: { enabled: true, variant: obj11.EARN_ORBS_ONLY } };
let closure_6 = ApexExperiment.createApexExperiment(obj12);
ApexExperiment = { name: "2026-03-mobile-quest-home-red-dot-notification", kind: "user", defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
ApexExperiment = ApexExperiment.createApexExperiment(ApexExperiment);
const obj17 = { name: "2026-05-quest-home-tile-redesign", kind: "user", defaultConfig: { useNewLayoutWithSearch: false, useNewTile: false, useLargeFeaturedTiles: false, ctaOnHover: false, clickableTile: false }, variations: { [0]: { useNewLayoutWithSearch: false, useNewTile: false, useLargeFeaturedTiles: false, ctaOnHover: false, clickableTile: false }, [1]: { useNewLayoutWithSearch: true, useNewTile: false, useLargeFeaturedTiles: false, ctaOnHover: false, clickableTile: false }, [2]: { useNewLayoutWithSearch: true, useNewTile: true, useLargeFeaturedTiles: true, ctaOnHover: true, clickableTile: false }, [3]: { useNewLayoutWithSearch: true, useNewTile: true, useLargeFeaturedTiles: false, ctaOnHover: true, clickableTile: false }, [4]: { useNewLayoutWithSearch: true, useNewTile: true, useLargeFeaturedTiles: true, ctaOnHover: false, clickableTile: false }, [5]: { useNewLayoutWithSearch: true, useNewTile: true, useLargeFeaturedTiles: true, ctaOnHover: true, clickableTile: true } } };
const apexExperiment8 = ApexExperiment.createApexExperiment(obj17);
ApexExperiment = { name: "2026-05-bounty-stale-refresh-quest-home", kind: "user", defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
ApexExperiment = ApexExperiment.createApexExperiment(ApexExperiment);
const obj19 = { name: "2026-06-remove-quest-home-hero", kind: "user", defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
let closure_7 = ApexExperiment.createApexExperiment(obj19);
const date = new Date("2026-07-31T10:00:00-07:00");
const date1 = new Date("2026-08-07T10:00:00-07:00");
let closure_10 = 5 * require("set").Millis.MINUTE;
const obj20 = { CONTROL: 0, [0]: "CONTROL", NEW_LAYOUT_WITH_SEARCH: 1, [1]: "NEW_LAYOUT_WITH_SEARCH", LARGE_MASK_MARGIN: 2, [2]: "LARGE_MASK_MARGIN", REMOVE_QUEST_TITLE_SUFFIX: 3, [3]: "REMOVE_QUEST_TITLE_SUFFIX", REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER: 4, [4]: "REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER" };
ApexExperiment = { name: "2026-06-quest-home-layout-visual-tweaks", kind: "user", defaultConfig: { enabled: false, variant: obj20.CONTROL } };
ApexExperiment = { enabled: true, variant: obj20.REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER };
ApexExperiment.variations = { [0]: { enabled: false, variant: obj20.CONTROL }, [1]: { enabled: true, variant: obj20.NEW_LAYOUT_WITH_SEARCH }, [2]: { enabled: true, variant: obj20.LARGE_MASK_MARGIN }, [3]: { enabled: true, variant: obj20.REMOVE_QUEST_TITLE_SUFFIX }, [4]: ApexExperiment };
ApexExperiment = ApexExperiment.createApexExperiment(ApexExperiment);
const obj27 = { name: "2026-07-quest-bar-secondary-cta", kind: "user", defaultConfig: { enabled: false, showPlayInstantlyLabel: false }, variations: { [0]: { enabled: false, showPlayInstantlyLabel: false }, [1]: { enabled: true, showPlayInstantlyLabel: false }, [2]: { enabled: true, showPlayInstantlyLabel: true } } };
const apexExperiment11 = ApexExperiment.createApexExperiment(obj27);
const result = require("QuestsExperimentLocations").fileFinishedImporting("modules/quests/experiments/index.tsx");

export const VideoEndCardV2Experiment = ApexExperiment;
export const NewVideoQuestProgressBarStylingExperiment = ApexExperiment;
export const AppStoreBottomSheetOverlayFeatureGate = apexExperiment2;
export const QuestReloadVideoOnObscuredExperiment = ApexExperiment;
export const MutedVideoQuestNewDefaultsVariant = obj3;
export const MutedVideoQuestNewDefaultsExperiment = ApexExperiment;
export const useQuestOrbsMultiplierMarketing = function useQuestOrbsMultiplierMarketing(location) {
  let obj = { location };
  const questOrbMultiplierEligibility = require(9465) /* getQuestOrbMultiplierEligibilityForUser */.useQuestOrbMultiplierEligibility();
  obj = {};
  let enabled = questOrbMultiplierEligibility !== require(9466) /* items */.QuestOrbMultiplierEligibilityType.INELIGIBLE;
  if (enabled) {
    enabled = questOrbMultiplierEligibility !== require(9466) /* items */.QuestOrbMultiplierEligibilityType.CREPE;
  }
  if (enabled) {
    enabled = closure_5.useConfig(obj).enabled;
  }
  obj.shouldShowBonusOrbsUX = enabled;
  obj.multiplier = require(10467) /* QuestOrbsMultiplier */.QuestOrbsMultiplier.PREMIUM_TIER_2_MULTIPLIER_PERCENTAGE_POINTS / 100;
  return obj;
};
export const VideoQuestPlayerRefactorExperiment = ApexExperiment;
export const ComposedQuestPlayerExperiment = apexExperiment6;
export const MobileQuestOrbRewardModalCtaPriorityVariant = obj11;
export const useMobileQuestOrbRewardModalCtaPriorityExperiment = function useMobileQuestOrbRewardModalCtaPriorityExperiment() {
  return closure_6.useConfig({ location: QuestsExperimentLocations.ORBS_REWARD_MODAL });
};
export const MobileQuestHomeRedDotNotificationExperiment = ApexExperiment;
export const QuestHomeTileRedesignExperiment = apexExperiment8;
export const BountyStaleRefreshQuestHomeExperiment = ApexExperiment;
export const useShouldRemoveQuestHomeHero = function useShouldRemoveQuestHomeHero() {
  const tmp = callback(React.useState(() => new Date()), 2);
  const first = tmp[0];
  let closure_0 = tmp[1];
  const effect = React.useEffect(() => {
    const interval = setInterval(() => callback(new Date()), outer1_10);
    return () => clearInterval(closure_0);
  }, []);
  let tmp4 = first >= date;
  if (tmp4) {
    tmp4 = first < date1;
  }
  const obj = {};
  let str = "remove-quest-home-hero-ineligible";
  if (tmp4) {
    str = "remove-quest-home-hero-eligible";
  }
  obj.location = str;
  let enabled = tmp4;
  if (tmp4) {
    enabled = closure_7.useConfig(obj).enabled;
  }
  return enabled;
};
export const QuestHomeLayoutVisualTweakVariant = obj20;
export const QuestHomeLayoutVisualTweaksExperiment = ApexExperiment;
export const QuestBarSecondaryCtaExperiment = apexExperiment11;
