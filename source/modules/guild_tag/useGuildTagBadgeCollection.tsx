// Module ID: 16327
// Function ID: 127067
// Name: useGuildTagBadgeCollection
// Dependencies: [31, 8483, 4017, 7721, 566, 2]
// Exports: default

// Module 16327 (useGuildTagBadgeCollection)
import { useMemo } from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import items from "items";

let closure_5;
let closure_6;
let closure_7;
({ BADGE_PACKS: closure_5, BADGES: closure_6, BADGE_PACK_TO_SKU_ID: closure_7 } = items);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_tag/useGuildTagBadgeCollection.tsx");

export default function useGuildTagBadgeCollection() {
  let items = [_isNativeReflectConstruct];
  stateFromStores = stateFromStores(stateFromStores1[4]).useStateFromStores(items, () => outer1_3.getGuild());
  const obj = stateFromStores(stateFromStores1[4]);
  let items1 = [closure_4];
  stateFromStores1 = stateFromStores(stateFromStores1[4]).useStateFromStores(items1, () => {
    let id;
    if (null != stateFromStores) {
      id = stateFromStores.id;
    }
    const stateForGuild = outer1_4.getStateForGuild(id);
    let allPowerups;
    if (null != stateForGuild) {
      allPowerups = stateForGuild.allPowerups;
    }
    return allPowerups;
  });
  let features;
  if (null != stateFromStores) {
    features = stateFromStores.features;
  }
  const items2 = [features, stateFromStores1];
  return useMemo(() => {
    const unlockedBadges = outer1_6.map((kind) => ({ kind }));
    const lockedBadges = [];
    let features;
    if (null != unlockedBadges) {
      features = unlockedBadges.features;
    }
    if (null != features) {
      const _Object = Object;
      const keys = Object.keys(outer1_5);
      const item = keys.forEach((arg0) => {
        let tmp2;
        if (null != lockedBadges) {
          tmp2 = lockedBadges[tmp];
        }
        let title;
        if (null != tmp2) {
          title = tmp2.title;
        }
        const mapped = outer2_5[arg0].map((kind) => ({ kind, packName: title }));
        const features = unlockedBadges.features;
        if (features.has(arg0)) {
          const push2 = title.push;
          const items = [];
          HermesBuiltin.arraySpread(mapped, 0);
          HermesBuiltin.apply(items, title);
        } else {
          const push = lockedBadges.push;
          const items1 = [];
          HermesBuiltin.arraySpread(mapped, 0);
          HermesBuiltin.apply(items1, lockedBadges);
        }
      });
    }
    return { unlockedBadges, lockedBadges };
  }, items2);
};
