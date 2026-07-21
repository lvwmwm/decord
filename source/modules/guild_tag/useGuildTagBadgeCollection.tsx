// Module ID: 16155
// Function ID: 124528
// Name: useGuildTagBadgeCollection
// Dependencies: []
// Exports: default

// Module 16155 (useGuildTagBadgeCollection)
const useMemo = require(dependencyMap[0]).useMemo;
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const _module = require(dependencyMap[3]);
({ BADGE_PACKS: closure_5, BADGES: closure_6, BADGE_PACK_TO_SKU_ID: closure_7 } = _module);
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/guild_tag/useGuildTagBadgeCollection.tsx");

export default function useGuildTagBadgeCollection() {
  const items = [closure_3];
  const stateFromStores = require(dependencyMap[4]).useStateFromStores(items, () => guild.getGuild());
  const require = stateFromStores;
  const obj = require(dependencyMap[4]);
  const items1 = [closure_4];
  const stateFromStores1 = require(dependencyMap[4]).useStateFromStores(items1, () => {
    let id;
    if (null != stateFromStores) {
      id = stateFromStores.id;
    }
    const stateForGuild = stateForGuild.getStateForGuild(id);
    let allPowerups;
    if (null != stateForGuild) {
      allPowerups = stateForGuild.allPowerups;
    }
    return allPowerups;
  });
  const dependencyMap = stateFromStores1;
  let features;
  if (null != stateFromStores) {
    features = stateFromStores.features;
  }
  const items2 = [features, stateFromStores1];
  return useMemo(() => {
    const unlockedBadges = closure_6.map((kind) => ({ kind }));
    const stateFromStores = unlockedBadges;
    const lockedBadges = [];
    const stateFromStores1 = lockedBadges;
    let features;
    if (null != stateFromStores) {
      features = stateFromStores.features;
    }
    if (null != features) {
      const _Object = Object;
      const keys = Object.keys(closure_5);
      const item = keys.forEach((arg0) => {
        let tmp2;
        if (null != lockedBadges) {
          tmp2 = lockedBadges[tmp];
        }
        let title;
        if (null != tmp2) {
          title = tmp2.title;
        }
        const unlockedBadges = title;
        const mapped = closure_5[arg0].map((kind) => ({ kind, packName: title }));
        const features = unlockedBadges.features;
        if (features.has(arg0)) {
          const push2 = unlockedBadges.push;
          const items = [];
          HermesBuiltin.arraySpread(mapped, 0);
          HermesBuiltin.apply(items, unlockedBadges);
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
