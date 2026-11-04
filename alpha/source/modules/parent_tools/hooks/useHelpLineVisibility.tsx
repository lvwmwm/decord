// Module ID: 11485
// Function ID: 11486
// Name: useHelpLineVisibility
// Dependencies: [19, 2191, 7855, 8511, 563, 11166, 2]
// Exports: useShouldShowHelplineLink, useShouldShowThroughlineLink

// Module 11485 (useHelpLineVisibility)
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8511 */;
import MessageRequestActionCreators from "MessageRequestActionCreators" /* 11166 */;
import react from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2191 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7855 */;
import size from "module_2" /* 2 */;

const f99945 = () => userCountry.getUserCountry();
const f99946 = () => locale.locale;
const set = new Set(["US"]);
const set1 = new Set(["en-US", "es-ES"]);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useHelpLineVisibility.tsx");

export function useShouldShowHelplineLink() {
  let stateFromStores;
  const items = [FamilyCenterStore];
  const tmp = useIsInAdultAgeGroupDefault();
  const obj = stateFromStores(563);
  stateFromStores = obj.useStateFromStores(items, f99945);
  const items1 = [LocaleStore];
  const items2 = [stateFromStores];
  const obj2 = stateFromStores(563);
  const stateFromStores1 = obj2.useStateFromStores(items1, f99946);
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
  stateFromStores = obj.useStateFromStores(items, f99945);
  const items1 = [LocaleStore];
  const items2 = [stateFromStores];
  const obj2 = stateFromStores(563);
  const stateFromStores1 = obj2.useStateFromStores(items1, f99946);
  const effect = react.useEffect(() => {
    if (null == stateFromStores) {
      const obj = MessageRequestActionCreators;
      const userCountryCode = obj.fetchUserCountryCode();
    }
  }, items2);
  const hasItem = !tmp2 && null != stateFromStores && set.has(stateFromStores.alpha2) && set1.has(stateFromStores1);
  return !tmp && !hasItem;
}
