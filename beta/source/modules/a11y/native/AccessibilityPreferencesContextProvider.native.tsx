// Module ID: 16272
// Function ID: 16273
// Name: AccessibilityPreferencesContextProvider
// Dependencies: [19, 4782, 21, 558, 568, 504, 4513, 2]

// Module 16272 (AccessibilityPreferencesContextProvider)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4782 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/a11y/native/AccessibilityPreferencesContextProvider.native.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  const cResult = c.c(22);
  children = children.children;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function c() {
      return { enabled: AccessibilityStore.useReducedMotion, rawValue: AccessibilityStore.rawPrefersReducedMotion };
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStoresObject = initialize.useStateFromStoresObject(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [AccessibilityStore];
    const fn2 = function b() {
      return AccessibilityStore.systemPrefersCrossfades;
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp9 = fn2;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = initialize;
  const stateFromStores = initialize.useStateFromStores(tmp8, tmp9);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [AccessibilityStore];
    const fn3 = function y() {
      return { enabled: AccessibilityStore.useForcedColors, rawValue: AccessibilityStore.systemForcedColors };
    };
    cResult[4] = items2;
    cResult[5] = fn3;
    let tmp13 = fn3;
    let tmp12 = items2;
  } else {
    tmp12 = cResult[4];
    tmp13 = cResult[5];
  }
  const tmpResult6 = initialize;
  const stateFromStoresObject1 = initialize.useStateFromStoresObject(tmp12, tmp13);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [AccessibilityStore];
    class F {
      constructor() {
        return closure_1_3.alwaysShowLinkDecorations;
      }
    }
    cResult[6] = items3;
    cResult[7] = F;
    let tmp17 = F;
    let tmp16 = items3;
  } else {
    tmp16 = cResult[6];
    tmp17 = cResult[7];
  }
  const tmpResult7 = initialize;
  const stateFromStores1 = initialize.useStateFromStores(tmp16, tmp17);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const items4 = [AccessibilityStore];
    class F {
      constructor() {
        return closure_1_3.alwaysShowLinkDecorations;
      }
    }
    cResult[8] = tmp23;
    cResult[9] = items4;
    let tmp21 = items4;
    let tmp20 = tmp23;
  } else {
    tmp20 = cResult[8];
    tmp21 = cResult[9];
  }
  const tmpResult8 = initialize;
  const stateFromStores2 = initialize.useStateFromStores(tmp21, tmp20);
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const items5 = [AccessibilityStore];
    class F {
      constructor() {
        return closure_1_3.alwaysShowLinkDecorations;
      }
    }
    cResult[10] = items5;
    cResult[11] = tmp28;
    let tmp26 = tmp28;
    let tmp25 = items5;
  } else {
    tmp25 = cResult[10];
    tmp26 = cResult[11];
  }
  const tmpResult9 = initialize;
  const stateFromStores3 = initialize.useStateFromStores(tmp25, tmp26);
  if (cResult[12] === stateFromStores1) {
    if (cResult[13] === stateFromStoresObject1) {
      if (cResult[14] === stateFromStores2) {
        if (cResult[15] === stateFromStores) {
          if (cResult[16] === stateFromStoresObject) {
            if (cResult[17] === stateFromStores3) {
              let tmp30 = cResult[18];
            }
            if (cResult[19] === tmp30) {
              if (cResult[20] === children) {
                let tmp31 = cResult[21];
              }
              return tmp31;
            }
            class F {
              constructor() {
                return closure_1_3.alwaysShowLinkDecorations;
              }
            }
            tmp33[0] = tmp30;
            tmp33[1] = children;
            const tmp34 = jsx(tmp(4513).AccessibilityPreferencesContext.Provider, tmp33);
            cResult[19] = tmp30;
            cResult[20] = children;
            cResult[21] = tmp34;
            tmp31 = tmp34;
          }
        }
      }
    }
  }
  const obj2 = { reducedMotion: stateFromStoresObject, prefersCrossfades: stateFromStores, forcedColors: stateFromStoresObject1, alwaysShowLinkDecorations: stateFromStores1, highContrastModeEnabled: false, keyboardModeEnabled: stateFromStores2, switchIconsEnabled: stateFromStores3 };
  cResult[12] = stateFromStores1;
  cResult[13] = stateFromStoresObject1;
  cResult[14] = stateFromStores2;
  cResult[15] = stateFromStores;
  cResult[16] = stateFromStoresObject;
  cResult[17] = stateFromStores3;
  cResult[18] = obj2;
  tmp30 = obj2;
}) : ((children) => {
  let stateFromStoresObject;
  let stateFromStores;
  let stateFromStores1;
  const items = [stateFromStores1];
  stateFromStoresObject = stateFromStoresObject(stateFromStores[5]).useStateFromStoresObject(items, () => ({ enabled: stateFromStores1.useReducedMotion, rawValue: stateFromStores1.rawPrefersReducedMotion }));
  const obj = stateFromStoresObject(stateFromStores[5]);
  const items1 = [stateFromStores1];
  stateFromStores = stateFromStoresObject(stateFromStores[5]).useStateFromStores(items1, () => stateFromStores1.systemPrefersCrossfades);
  const obj2 = stateFromStoresObject(stateFromStores[5]);
  const items2 = [stateFromStores1];
  const stateFromStoresObject1 = stateFromStoresObject(stateFromStores[5]).useStateFromStoresObject(items2, () => ({ enabled: stateFromStores1.useForcedColors, rawValue: stateFromStores1.systemForcedColors }));
  const obj3 = stateFromStoresObject(stateFromStores[5]);
  const items3 = [stateFromStores1];
  stateFromStores1 = stateFromStoresObject(stateFromStores[5]).useStateFromStores(items3, () => stateFromStores1.alwaysShowLinkDecorations);
  const obj4 = stateFromStoresObject(stateFromStores[5]);
  const items4 = [stateFromStores1];
  const stateFromStores2 = stateFromStoresObject(stateFromStores[5]).useStateFromStores(items4, () => stateFromStores1.keyboardModeEnabled);
  const obj5 = stateFromStoresObject(stateFromStores[5]);
  const items5 = [stateFromStores1];
  const stateFromStores3 = stateFromStoresObject(stateFromStores[5]).useStateFromStores(items5, () => stateFromStores1.isSwitchIconsEnabled);
  const items6 = [stateFromStoresObject, stateFromStores, stateFromStoresObject1, stateFromStores1, stateFromStores2, stateFromStores3];
  value = stateFromStoresObject1.useMemo(() => ({ reducedMotion: stateFromStoresObject, prefersCrossfades: stateFromStores, forcedColors: stateFromStoresObject1, alwaysShowLinkDecorations: stateFromStores1, highContrastModeEnabled: false, keyboardModeEnabled: stateFromStores2, switchIconsEnabled: stateFromStores3 }), items6);
  return stateFromStores2(stateFromStoresObject(stateFromStores[6]).AccessibilityPreferencesContext.Provider, { value, children: children.children });
});
