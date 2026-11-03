// Module ID: 11435
// Function ID: 11436
// Name: useHelpLineVisibility
// Dependencies: [19, 2191, 7839, 8494, 563, 11118, 2]
// Exports: useShouldShowHelplineLink, useShouldShowThroughlineLink

// Module 11435 (useHelpLineVisibility)
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8494 */;
import MessageRequestActionCreators from "MessageRequestActionCreators" /* 11118 */;
import react from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2191 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7839 */;
import size from "module_2" /* 2 */;

const f99308 = () => userCountry.getUserCountry();
const f99309 = () => locale.locale;
const set = new Set(["US"]);
const set1 = new Set(["en-US", "es-ES"]);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useHelpLineVisibility.tsx");

export function useShouldShowHelplineLink() {
  let stateFromStores;
  const items = [FamilyCenterStore];
  const tmp = useIsInAdultAgeGroupDefault();
  const obj = stateFromStores(563);
  stateFromStores = obj.useStateFromStores(items, f99308);
  const items1 = [LocaleStore];
  const items2 = [stateFromStores];
  const obj2 = stateFromStores(563);
  const stateFromStores1 = obj2.useStateFromStores(items1, f99309);
  const effect = react.useEffect(() => {
    if (null == stateFromStores) {
      const obj = MessageRequestActionCreators;
      const userCountryCode = obj.fetchUserCountryCode();
    }
  }, items2);
  const hasItem = !tmp && null != stateFromStores && set.has(stateFromStores.alpha2) && set1.has(stateFromStores1);
  return hasItem;
}
export function useShouldShowThroughlineLink() {
  let locale;
  let userCountry;
  let stateFromStores;
  const tmp = useIsInAdultAgeGroupDefault();
  const tmp2 = useIsInAdultAgeGroupDefault();
  let obj = stateFromStores(563);
  const items = [FamilyCenterStore];
  stateFromStores = obj.useStateFromStores(items, f99308);
  const items1 = [LocaleStore];
  const items2 = [stateFromStores];
  const obj2 = stateFromStores(563);
  const stateFromStores1 = obj2.useStateFromStores(items1, f99309);
  const effect = react.useEffect(() => {
    if (null == stateFromStores) {
      const obj = MessageRequestActionCreators;
      const userCountryCode = obj.fetchUserCountryCode();
    }
  }, items2);
  const hasItem = !tmp2 && null != stateFromStores && set.has(stateFromStores.alpha2) && set1.has(stateFromStores1);
  return !tmp && !hasItem;
}
