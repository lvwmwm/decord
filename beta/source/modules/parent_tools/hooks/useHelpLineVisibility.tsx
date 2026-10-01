// Module ID: 10937
// Function ID: 10938
// Name: useHelpLineVisibility
// Dependencies: [19, 2112, 6957, 8106, 563, 10422, 2]
// Exports: useShouldShowHelplineLink, useShouldShowThroughlineLink

// Module 10937 (useHelpLineVisibility)
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8106 */;
import MessageRequestActionCreators from "MessageRequestActionCreators" /* 10422 */;
import react from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2112 */;
import FamilyCenterStore from "FamilyCenterStore" /* 6957 */;
import size from "module_2" /* 2 */;

const f92294 = () => userCountry.getUserCountry();
const f92295 = () => locale.locale;
const set = new Set(["US"]);
const set1 = new Set(["en-US", "es-ES"]);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useHelpLineVisibility.tsx");

export const useShouldShowHelplineLink = function useShouldShowHelplineLink() {
  let stateFromStores;
  const items = [FamilyCenterStore];
  const tmp = useIsInAdultAgeGroupDefault();
  const obj = stateFromStores(563);
  stateFromStores = obj.useStateFromStores(items, f92294);
  const items1 = [LocaleStore];
  const items2 = [stateFromStores];
  const obj2 = stateFromStores(563);
  const stateFromStores1 = obj2.useStateFromStores(items1, f92295);
  const effect = react.useEffect(() => {
    if (null == stateFromStores) {
      const obj = MessageRequestActionCreators;
      const userCountryCode = obj.fetchUserCountryCode();
    }
  }, items2);
  const hasItem = !tmp && null != stateFromStores && set.has(stateFromStores.alpha2) && set1.has(stateFromStores1);
  return hasItem;
};
export const useShouldShowThroughlineLink = function useShouldShowThroughlineLink() {
  let locale;
  let userCountry;
  let stateFromStores;
  const tmp = useIsInAdultAgeGroupDefault();
  const tmp2 = useIsInAdultAgeGroupDefault();
  let obj = stateFromStores(563);
  const items = [FamilyCenterStore];
  stateFromStores = obj.useStateFromStores(items, f92294);
  const items1 = [LocaleStore];
  const items2 = [stateFromStores];
  const obj2 = stateFromStores(563);
  const stateFromStores1 = obj2.useStateFromStores(items1, f92295);
  const effect = react.useEffect(() => {
    if (null == stateFromStores) {
      const obj = MessageRequestActionCreators;
      const userCountryCode = obj.fetchUserCountryCode();
    }
  }, items2);
  const hasItem = !tmp2 && null != stateFromStores && set.has(stateFromStores.alpha2) && set1.has(stateFromStores1);
  return !tmp && !hasItem;
};
