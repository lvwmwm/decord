// Module ID: 14886
// Function ID: 14887
// Name: useDisplayNameStylesNewItems
// Dependencies: [19, 14887, 1390, 504, 14888, 2]
// Exports: useDisplayNameStylesNewEffects, useDisplayNameStylesNewEffectsBadge, useDisplayNameStylesNewFonts, useDisplayNameStylesNewFontsBadge

// Module 14886 (useDisplayNameStylesNewItems)
import react from "react" /* 19 */;
import DisplayNameStylesSeenStore from "DisplayNameStylesSeenStore" /* 14887 */;
import DisplayNameStylesConstants from "DisplayNameStylesConstants" /* 1390 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

let closure_4;
let hasOwnProperty;
({ FLYWHEEL_EFFECTS: closure_4, FLYWHEEL_FONTS: hasOwnProperty } = DisplayNameStylesConstants);
let result = size.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesNewItems.tsx");

export const useDisplayNameStylesNewFonts = function useDisplayNameStylesNewFonts(visibleFontOrder) {
  let items1;
  let seenFonts;
  let stateFromStores;
  _require = visibleFontOrder;
  let obj = require("get initialized");
  const items = [DisplayNameStylesSeenStore];
  stateFromStores = obj.useStateFromStores(items, () => seenFonts.getSeenFonts());
  const obj2 = {
    dotFontIds: react.useMemo(() => {
      set = new Set(visibleFontOrder.filter((item) => {
        const hasItem = closure_2_5.includes(item) && !set.has(item);
        return hasItem;
      }));
      return set;
    }, items1),
    dismissFontDot: react.useCallback((fontId) => {
      const obj = visibleFontOrder(stateFromStores[4]);
      const result = obj.markDisplayNameStyleFontSeen(fontId);
    }, [])
  };
  items1 = [visibleFontOrder, stateFromStores];
  return obj2;
};
export const useDisplayNameStylesNewEffects = function useDisplayNameStylesNewEffects(visibleEffectOrder) {
  let items1;
  let seenEffects;
  let stateFromStores;
  _require = visibleEffectOrder;
  let obj = require("get initialized");
  const items = [DisplayNameStylesSeenStore];
  stateFromStores = obj.useStateFromStores(items, () => seenEffects.getSeenEffects());
  const obj2 = {
    dotEffectIds: react.useMemo(() => {
      set = new Set(visibleEffectOrder.filter((item) => {
        const hasItem = closure_2_4.includes(item) && !set.has(item);
        return hasItem;
      }));
      return set;
    }, items1),
    dismissEffectDot: react.useCallback((effectId) => {
      const obj = visibleEffectOrder(stateFromStores[4]);
      const result = obj.markDisplayNameStyleEffectSeen(effectId);
    }, [])
  };
  items1 = [visibleEffectOrder, stateFromStores];
  return obj2;
};
export const useDisplayNameStylesNewFontsBadge = function useDisplayNameStylesNewFontsBadge(visibleFontOrder) {
  let newFontsBadgeDismissed;
  _require = visibleFontOrder;
  let obj = require("get initialized");
  const items = [DisplayNameStylesSeenStore];
  const items1 = [visibleFontOrder];
  const stateFromStores = obj.useStateFromStores(items, () => newFontsBadgeDismissed.getNewFontsBadgeDismissed());
  const tmp2 = react.useMemo(() => visibleFontOrder.some((item) => closure_1_5.includes(item)), items1) && !stateFromStores;
  const obj3 = {
    showFontsBadge: tmp2,
    dismissFontsBadge: react.useCallback(() => {
      const obj = visibleFontOrder(dependencyMap[4]);
      const result = obj.markDisplayNameStyleNewFontsBadgeDismissed();
    }, [])
  };
  return obj3;
};
export const useDisplayNameStylesNewEffectsBadge = function useDisplayNameStylesNewEffectsBadge(visibleEffectOrder) {
  let newEffectsBadgeDismissed;
  _require = visibleEffectOrder;
  let obj = require("get initialized");
  const items = [DisplayNameStylesSeenStore];
  const items1 = [visibleEffectOrder];
  const stateFromStores = obj.useStateFromStores(items, () => newEffectsBadgeDismissed.getNewEffectsBadgeDismissed());
  const tmp2 = react.useMemo(() => visibleEffectOrder.some((item) => closure_1_4.includes(item)), items1) && !stateFromStores;
  const obj3 = {
    showEffectsBadge: tmp2,
    dismissEffectsBadge: react.useCallback(() => {
      const obj = visibleEffectOrder(dependencyMap[4]);
      const result = obj.markDisplayNameStyleNewEffectsBadgeDismissed();
    }, [])
  };
  return obj3;
};
