// Module ID: 15679
// Function ID: 15680
// Name: HexagonCampaignPersistedStore
// Dependencies: [504, 584, 2]

// Module 15679 (HexagonCampaignPersistedStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let obj = { hasAppliedPerk: false, hasVisitedDisplayNameStyles: false, previousPerkValues: {} };
let closure_1 = obj;
const PersistedStore = get_initializedDefault.PersistedStore;
class HexagonCampaignPersistedStore extends PersistedStore {
  initialize(arg0) {
    if (null != arg0) {
      obj = {};
      const merged = Object.assign(obj);
      const merged1 = Object.assign(arg0);
      closure_1 = obj;
    }
  }
  getState() {
    return closure_1;
  }
}
const prototype = HexagonCampaignPersistedStore.prototype;
Object.defineProperty(prototype, "hasAppliedPerk", {
  get: function hasAppliedPerk() {
    return closure_1.hasAppliedPerk;
  },
  set: undefined
});
Object.defineProperty(prototype, "hasVisitedDisplayNameStyles", {
  get: function hasVisitedDisplayNameStyles() {
    return closure_1.hasVisitedDisplayNameStyles;
  },
  set: undefined
});
Object.defineProperty(prototype, "previousPerkValues", {
  get: function previousPerkValues() {
    return closure_1.previousPerkValues;
  },
  set: undefined
});
HexagonCampaignPersistedStore.displayName = "HexagonCampaignPersistedStore";
HexagonCampaignPersistedStore.persistKey = "HexagonCampaignPersistedStore";
const items = [
  (hasVisitedDisplayNameStyles) => {
    let flag;
    obj = { hasVisitedDisplayNameStyles: flag };
    const merged = Object.assign(hasVisitedDisplayNameStyles);
    flag = undefined;
    if (hasVisitedDisplayNameStyles != null) {
      flag = hasVisitedDisplayNameStyles.hasVisitedDisplayNameStyles;
    }
    if (flag == null) {
      flag = false;
    }
    return obj;
  },
  (previousPerkValues) => {
    obj = { previousPerkValues };
    const merged = Object.assign(previousPerkValues);
    previousPerkValues = undefined;
    if (previousPerkValues != null) {
      previousPerkValues = previousPerkValues.previousPerkValues;
    }
    if (previousPerkValues == null) {
      previousPerkValues = {};
    }
    return obj;
  }
];
HexagonCampaignPersistedStore.migrations = items;
let obj2 = {
  HEXAGON_CAMPAIGN_PERK_APPLIED: function handlePerkApplied() {
    obj = { hasAppliedPerk: true };
    const merged = Object.assign(closure_1);
    closure_1 = obj;
  },
  HEXAGON_CAMPAIGN_APPLIED_PERKS_CLEARED: function handleAppliedPerksCleared() {
    obj = { hasAppliedPerk: false };
    const merged = Object.assign(closure_1);
    closure_1 = obj;
  },
  HEXAGON_CAMPAIGN_DISPLAY_NAME_STYLES_VISITED: function handleDisplayNameStylesVisited() {
    if (closure_1.hasVisitedDisplayNameStyles) {
      return false;
    } else {
      obj = { hasVisitedDisplayNameStyles: true };
      const merged = Object.assign(closure_1);
      closure_1 = obj;
    }
  },
  HEXAGON_CAMPAIGN_PREVIOUS_PERK_VALUES_SAVED: function handlePreviousPerkValuesSaved(previousPerkValues) {
    let obj2;
    previousPerkValues = previousPerkValues.previousPerkValues;
    obj = { previousPerkValues: obj2 };
    const merged = Object.assign(closure_1);
    obj2 = {};
    const merged1 = Object.assign(closure_1.previousPerkValues);
    const merged2 = Object.assign(previousPerkValues);
    closure_1 = obj;
  },
  LOGOUT: function handleLogout() {
    closure_1 = obj;
  }
};
const hexagonCampaignPersistedStore = new HexagonCampaignPersistedStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/hexagon_campaign/HexagonCampaignPersistedStore.tsx");

export default hexagonCampaignPersistedStore;
