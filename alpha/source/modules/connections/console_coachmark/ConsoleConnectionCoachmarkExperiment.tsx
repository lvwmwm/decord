// Module ID: 19436
// Function ID: 19437
// Name: ConsoleConnectionCoachmarkExperiment
// Dependencies: [7022, 6783, 1072, 1449, 504, 2]
// Exports: useIsConsoleConnectionCoachmarkEligible

// Module 19436 (ConsoleConnectionCoachmarkExperiment)
import get_initialized from "get initialized" /* 504 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 7022 */;
import ConsentStore from "ConsentStore" /* 6783 */;
import Constants from "Constants" /* 1072 */;
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let PlatformTypes;
let closure_4;
let obj2;
({ Consents: closure_4, PlatformTypes } = Constants);
let items = [, , ];
({ PLAYSTATION: arr[0], PLAYSTATION_STAGING: arr[1], XBOX: arr[2] } = PlatformTypes);
const set = new Set(items);
let obj = { name: "2026-11-console-connection-coachmark", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null, 2: { enabled: true }, 3: { enabled: true } };
obj2[3] = { enabled: true };
let closure_6 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/connections/console_coachmark/ConsoleConnectionCoachmarkExperiment.tsx");

export function useIsConsoleConnectionCoachmarkEligible(YouSettingsCoachmark) {
  let fetching;
  let obj = { location: YouSettingsCoachmark };
  let enabled = closure_6.useConfig(obj).enabled;
  const items = [ConnectedAccountsStore];
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => {
    let tmp2 = !fetching.isFetching();
    fetching.isFetching();
    const obj = fetching;
    if (tmp2) {
      const accounts = obj.getAccounts();
      tmp2 = !accounts.some((type) => set.has(type.type));
    }
    return tmp2;
  });
  const items1 = [ConsentStore];
  const obj3 = get_initialized;
  const stateFromStores1 = obj3.useStateFromStores(items1, () => ConsentStore.hasConsented(constants.PERSONALIZATION));
  if (enabled) {
    enabled = stateFromStores;
  }
  if (enabled) {
    enabled = stateFromStores1;
  }
  return enabled;
}
