// Module ID: 14227
// Function ID: 109283
// Name: useDisplayNameStylesNewFonts
// Dependencies: [31, 14228, 1861, 566, 14229, 2]
// Exports: useDisplayNameStylesNewEffects, useDisplayNameStylesNewEffectsBadge, useDisplayNameStylesNewFonts, useDisplayNameStylesNewFontsBadge

// Module 14227 (useDisplayNameStylesNewFonts)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import items3 from "items3";

let closure_4;
let closure_5;
const require = arg1;
({ FLYWHEEL_EFFECTS: closure_4, FLYWHEEL_FONTS: closure_5 } = items3);
let result = require("items3").fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesNewItems.tsx");

export const useDisplayNameStylesNewFonts = function useDisplayNameStylesNewFonts(visibleFontOrder) {
  const _require = visibleFontOrder;
  let obj = _require(stateFromStores[3]);
  const items = [_isNativeReflectConstruct];
  stateFromStores = obj.useStateFromStores(items, () => outer1_3.getSeenFonts());
  obj = {
    dotFontIds: React.useMemo(() => new Set(visibleFontOrder.filter((arg0) => {
      let hasItem = outer2_5.includes(arg0);
      if (hasItem) {
        hasItem = !outer1_1.has(arg0);
      }
      return hasItem;
    })), items1),
    dismissFontDot: React.useCallback((fontId) => {
      const result = visibleFontOrder(stateFromStores[4]).markDisplayNameStyleFontSeen(fontId);
    }, [])
  };
  items1 = [visibleFontOrder, stateFromStores];
  return obj;
};
export const useDisplayNameStylesNewEffects = function useDisplayNameStylesNewEffects(visibleEffectOrder) {
  const _require = visibleEffectOrder;
  let obj = _require(stateFromStores[3]);
  const items = [_isNativeReflectConstruct];
  stateFromStores = obj.useStateFromStores(items, () => outer1_3.getSeenEffects());
  obj = {
    dotEffectIds: React.useMemo(() => new Set(visibleEffectOrder.filter((arg0) => {
      let hasItem = outer2_4.includes(arg0);
      if (hasItem) {
        hasItem = !outer1_1.has(arg0);
      }
      return hasItem;
    })), items1),
    dismissEffectDot: React.useCallback((effectId) => {
      const result = visibleEffectOrder(stateFromStores[4]).markDisplayNameStyleEffectSeen(effectId);
    }, [])
  };
  items1 = [visibleEffectOrder, stateFromStores];
  return obj;
};
export const useDisplayNameStylesNewFontsBadge = function useDisplayNameStylesNewFontsBadge(visibleFontOrder) {
  const _require = visibleFontOrder;
  let obj = _require(566);
  const items = [_isNativeReflectConstruct];
  obj = {};
  const items1 = [visibleFontOrder];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_3.getNewFontsBadgeDismissed());
  obj.showFontsBadge = React.useMemo(() => visibleFontOrder.some((arg0) => outer2_5.includes(arg0)), items1) && !stateFromStores;
  obj.dismissFontsBadge = React.useCallback(() => {
    const result = visibleFontOrder(outer1_1[4]).markDisplayNameStyleNewFontsBadgeDismissed();
  }, []);
  return obj;
};
export const useDisplayNameStylesNewEffectsBadge = function useDisplayNameStylesNewEffectsBadge(visibleEffectOrder) {
  const _require = visibleEffectOrder;
  let obj = _require(566);
  const items = [_isNativeReflectConstruct];
  obj = {};
  const items1 = [visibleEffectOrder];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_3.getNewEffectsBadgeDismissed());
  obj.showEffectsBadge = React.useMemo(() => visibleEffectOrder.some((arg0) => outer2_4.includes(arg0)), items1) && !stateFromStores;
  obj.dismissEffectsBadge = React.useCallback(() => {
    const result = visibleEffectOrder(outer1_1[4]).markDisplayNameStyleNewEffectsBadgeDismissed();
  }, []);
  return obj;
};
