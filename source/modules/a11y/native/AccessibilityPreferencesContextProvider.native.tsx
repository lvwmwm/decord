// Module ID: 13370
// Function ID: 101632
// Name: AccessibilityPreferencesContextProvider
// Dependencies: []
// Exports: default

// Module 13370 (AccessibilityPreferencesContextProvider)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/a11y/native/AccessibilityPreferencesContextProvider.native.tsx");

export default function AccessibilityPreferencesContextProvider(children) {
  const items = [closure_3];
  const stateFromStoresObject = arg1(dependencyMap[3]).useStateFromStoresObject(items, () => ({ enabled: stateFromStores1.useReducedMotion, rawValue: stateFromStores1.rawPrefersReducedMotion }));
  const arg1 = stateFromStoresObject;
  const obj = arg1(dependencyMap[3]);
  const items1 = [closure_3];
  const stateFromStores = arg1(dependencyMap[3]).useStateFromStores(items1, () => stateFromStores1.systemPrefersCrossfades);
  const dependencyMap = stateFromStores;
  const obj2 = arg1(dependencyMap[3]);
  const items2 = [closure_3];
  const stateFromStoresObject1 = arg1(dependencyMap[3]).useStateFromStoresObject(items2, () => ({ enabled: stateFromStores1.useForcedColors, rawValue: stateFromStores1.systemForcedColors }));
  const React = stateFromStoresObject1;
  const obj3 = arg1(dependencyMap[3]);
  const items3 = [closure_3];
  const stateFromStores1 = arg1(dependencyMap[3]).useStateFromStores(items3, () => stateFromStores1.alwaysShowLinkDecorations);
  closure_3 = stateFromStores1;
  const obj4 = arg1(dependencyMap[3]);
  const items4 = [closure_3];
  const stateFromStores2 = arg1(dependencyMap[3]).useStateFromStores(items4, () => stateFromStores1.keyboardModeEnabled);
  const jsx = stateFromStores2;
  const obj5 = arg1(dependencyMap[3]);
  const items5 = [closure_3];
  const stateFromStores3 = arg1(dependencyMap[3]).useStateFromStores(items5, () => stateFromStores1.isSwitchIconsEnabled);
  const items6 = [stateFromStoresObject, stateFromStores, stateFromStoresObject1, stateFromStores1, stateFromStores2, stateFromStores3];
  const value = React.useMemo(() => ({ reducedMotion: stateFromStoresObject, prefersCrossfades: stateFromStores, forcedColors: stateFromStoresObject1, alwaysShowLinkDecorations: stateFromStores1, highContrastModeEnabled: false, keyboardModeEnabled: stateFromStores2, switchIconsEnabled: stateFromStores3 }), items6);
  return jsx(arg1(dependencyMap[4]).AccessibilityPreferencesContext.Provider, { value, children: children.children });
};
