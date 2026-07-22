// Module ID: 10129
// Function ID: 78417
// Name: useShouldShowHelplineLink
// Dependencies: [0, 0, 0, 0, 0, 0, 0]
// Exports: useShouldShowThroughlineLink

// Module 10129 (useShouldShowHelplineLink)
import __exportStarResult1 from "__exportStarResult1";
import closure_4 from "__exportStarResult1";
import closure_5 from "__exportStarResult1";

function useShouldShowHelplineLink() {
  const tmp = importDefault(dependencyMap[3])();
  const items = [closure_5];
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => userCountry.getUserCountry());
  const arg1 = stateFromStores;
  const obj = arg1(dependencyMap[4]);
  const items1 = [closure_4];
  const items2 = [stateFromStores];
  const stateFromStores1 = arg1(dependencyMap[4]).useStateFromStores(items1, () => locale.locale);
  const effect = React.useEffect(() => {
    if (null == stateFromStores) {
      const userCountryCode = stateFromStores(closure_2[5]).fetchUserCountryCode();
      const obj = stateFromStores(closure_2[5]);
    }
  }, items2);
  let hasItem = !tmp;
  if (hasItem) {
    hasItem = null != stateFromStores;
  }
  if (hasItem) {
    hasItem = set.has(stateFromStores.alpha2);
  }
  if (hasItem) {
    hasItem = set1.has(stateFromStores1);
  }
  return hasItem;
}
const set = new Set([]);
const set1 = new Set([0, 5]);
const result = require("__exportStarResult1").fileFinishedImporting("modules/parent_tools/hooks/useHelpLineVisibility.tsx");

export { useShouldShowHelplineLink };
export const useShouldShowThroughlineLink = function useShouldShowThroughlineLink() {
  const tmp = importDefault(dependencyMap[3])();
  return !importDefault(dependencyMap[3])() && !useShouldShowHelplineLink();
};
