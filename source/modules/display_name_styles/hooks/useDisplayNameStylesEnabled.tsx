// Module ID: 4354
// Function ID: 38601
// Name: useDisplayNameStylesEnabled
// Dependencies: []
// Exports: useDisplayNameStylesEnabled

// Module 4354 (useDisplayNameStylesEnabled)
const useContext = require(dependencyMap[0]).useContext;
let closure_3 = importDefault(dependencyMap[1]);
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesEnabled.tsx");

export const useDisplayNameStylesEnabled = function useDisplayNameStylesEnabled(arg0) {
  const items = [closure_3];
  let overrideSettings = require(dependencyMap[2]).useStateFromStores(items, () => obj.displayNameStylesEnabled);
  if (!overrideSettings) {
    overrideSettings = useContext(require(dependencyMap[3]).DisplayNameStylesContext).overrideSettings;
  }
  return overrideSettings;
};
