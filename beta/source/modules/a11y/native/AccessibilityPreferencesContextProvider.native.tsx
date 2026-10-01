// Module ID: 14132
// Function ID: 14133
// Name: AccessibilityPreferencesContextProvider
// Dependencies: [19, 4825, 21, 504, 4550, 2]
// Exports: default

// Module 14132 (AccessibilityPreferencesContextProvider)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/a11y/native/AccessibilityPreferencesContextProvider.native.tsx");

export default function AccessibilityPreferencesContextProvider(children) {
  let stateFromStoresObject;
  let stateFromStores;
  let stateFromStores1;
  children = children.children;
  const items = [stateFromStores1];
  const obj = stateFromStoresObject(stateFromStores[3]);
  stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ enabled: stateFromStores1.useReducedMotion, rawValue: stateFromStores1.rawPrefersReducedMotion }));
  const items1 = [stateFromStores1];
  const obj2 = stateFromStoresObject(stateFromStores[3]);
  stateFromStores = obj2.useStateFromStores(items1, () => stateFromStores1.systemPrefersCrossfades);
  const items2 = [stateFromStores1];
  const obj3 = stateFromStoresObject(stateFromStores[3]);
  const stateFromStoresObject1 = obj3.useStateFromStoresObject(items2, () => ({ enabled: stateFromStores1.useForcedColors, rawValue: stateFromStores1.systemForcedColors }));
  const items3 = [stateFromStores1];
  const obj4 = stateFromStoresObject(stateFromStores[3]);
  stateFromStores1 = obj4.useStateFromStores(items3, () => stateFromStores1.alwaysShowLinkDecorations);
  const items4 = [stateFromStores1];
  const obj5 = stateFromStoresObject(stateFromStores[3]);
  const stateFromStores2 = obj5.useStateFromStores(items4, () => stateFromStores1.keyboardModeEnabled);
  const items5 = [stateFromStores1];
  const obj6 = stateFromStoresObject(stateFromStores[3]);
  const stateFromStores3 = obj6.useStateFromStores(items5, () => stateFromStores1.isSwitchIconsEnabled);
  const items6 = [stateFromStoresObject, stateFromStores, stateFromStoresObject1, stateFromStores1, stateFromStores2, stateFromStores3];
  const value = stateFromStoresObject1.useMemo(() => ({ reducedMotion: stateFromStoresObject, prefersCrossfades: stateFromStores, forcedColors: stateFromStoresObject1, alwaysShowLinkDecorations: stateFromStores1, highContrastModeEnabled: false, keyboardModeEnabled: stateFromStores2, switchIconsEnabled: stateFromStores3 }), items6);
  return stateFromStores2(stateFromStoresObject(stateFromStores[4]).AccessibilityPreferencesContext.Provider, { value, children });
};
