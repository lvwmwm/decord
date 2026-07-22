// Module ID: 14113
// Function ID: 107127
// Name: useDisplayNameStylesNewFonts
// Dependencies: []
// Exports: useDisplayNameStylesNewEffects, useDisplayNameStylesNewEffectsBadge, useDisplayNameStylesNewFonts, useDisplayNameStylesNewFontsBadge

// Module 14113 (useDisplayNameStylesNewFonts)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
({ FLYWHEEL_EFFECTS: closure_4, FLYWHEEL_FONTS: closure_5 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesNewItems.tsx");

export const useDisplayNameStylesNewFonts = function useDisplayNameStylesNewFonts(visibleFontOrder) {
  const arg1 = visibleFontOrder;
  let obj = arg1(dependencyMap[3]);
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => seenFonts.getSeenFonts());
  const dependencyMap = stateFromStores;
  obj = {
    dotFontIds: React.useMemo(() => new Set(arg0.filter((arg0) => {
      let hasItem = closure_5.includes(arg0);
      if (hasItem) {
        hasItem = !set.has(arg0);
      }
      return hasItem;
    })), items1),
    dismissFontDot: React.useCallback((fontId) => {
      const result = fontId(stateFromStores[4]).markDisplayNameStyleFontSeen(fontId);
    }, [])
  };
  const items1 = [visibleFontOrder, stateFromStores];
  return obj;
};
export const useDisplayNameStylesNewEffects = function useDisplayNameStylesNewEffects(visibleEffectOrder) {
  const arg1 = visibleEffectOrder;
  let obj = arg1(dependencyMap[3]);
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => seenEffects.getSeenEffects());
  const dependencyMap = stateFromStores;
  obj = {
    dotEffectIds: React.useMemo(() => new Set(arg0.filter((arg0) => {
      let hasItem = closure_4.includes(arg0);
      if (hasItem) {
        hasItem = !set.has(arg0);
      }
      return hasItem;
    })), items1),
    dismissEffectDot: React.useCallback((effectId) => {
      const result = effectId(stateFromStores[4]).markDisplayNameStyleEffectSeen(effectId);
    }, [])
  };
  const items1 = [visibleEffectOrder, stateFromStores];
  return obj;
};
export const useDisplayNameStylesNewFontsBadge = function useDisplayNameStylesNewFontsBadge(visibleFontOrder) {
  const arg1 = visibleFontOrder;
  let obj = arg1(dependencyMap[3]);
  const items = [closure_3];
  obj = {};
  const items1 = [visibleFontOrder];
  const stateFromStores = obj.useStateFromStores(items, () => newFontsBadgeDismissed.getNewFontsBadgeDismissed());
  obj.showFontsBadge = React.useMemo(() => arg0.some((arg0) => closure_5.includes(arg0)), items1) && !stateFromStores;
  obj.dismissFontsBadge = React.useCallback(() => {
    const result = arg0(closure_1[4]).markDisplayNameStyleNewFontsBadgeDismissed();
  }, []);
  return obj;
};
export const useDisplayNameStylesNewEffectsBadge = function useDisplayNameStylesNewEffectsBadge(visibleEffectOrder) {
  const arg1 = visibleEffectOrder;
  let obj = arg1(dependencyMap[3]);
  const items = [closure_3];
  obj = {};
  const items1 = [visibleEffectOrder];
  const stateFromStores = obj.useStateFromStores(items, () => newEffectsBadgeDismissed.getNewEffectsBadgeDismissed());
  obj.showEffectsBadge = React.useMemo(() => arg0.some((arg0) => closure_4.includes(arg0)), items1) && !stateFromStores;
  obj.dismissEffectsBadge = React.useCallback(() => {
    const result = arg0(closure_1[4]).markDisplayNameStyleNewEffectsBadgeDismissed();
  }, []);
  return obj;
};
