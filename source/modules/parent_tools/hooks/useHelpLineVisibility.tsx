// Module ID: 10141
// Function ID: 78411
// Name: useShouldShowHelplineLink
// Dependencies: [31, 1922, 5775, 6236, 624, 10142, 2]
// Exports: useShouldShowThroughlineLink

// Module 10141 (useShouldShowHelplineLink)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import set from "_isNativeReflectConstruct";

const require = arg1;
function useShouldShowHelplineLink() {
  const tmp = importDefault(6236)();
  const items = [closure_5];
  stateFromStores = stateFromStores(624).useStateFromStores(items, () => outer1_5.getUserCountry());
  let obj = stateFromStores(624);
  const items1 = [_isNativeReflectConstruct];
  const items2 = [stateFromStores];
  const stateFromStores1 = stateFromStores(624).useStateFromStores(items1, () => outer1_4.locale);
  const effect = React.useEffect(() => {
    if (null == stateFromStores) {
      const userCountryCode = stateFromStores(outer1_2[5]).fetchUserCountryCode();
      const obj = stateFromStores(outer1_2[5]);
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
let set = new Set(["US"]);
const set1 = new Set(["en-US", "es-ES"]);
const result = set.fileFinishedImporting("modules/parent_tools/hooks/useHelpLineVisibility.tsx");

export { useShouldShowHelplineLink };
export const useShouldShowThroughlineLink = function useShouldShowThroughlineLink() {
  const tmp = importDefault(6236)();
  return !importDefault(6236)() && !useShouldShowHelplineLink();
};
