// Module ID: 14944
// Function ID: 14945
// Name: ConjureCustomWidget
// Dependencies: [4885, 504, 1447, 7419, 2]
// Exports: composeConjureCustomWidgetPrompt, useCanConjureCustomWidget

// Module 14944 (ConjureCustomWidget)
import ConjureUtils from "ConjureUtils" /* 7419 */;
import GuildStore from "GuildStore" /* 4885 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let result = size.fileFinishedImporting("modules/conjure/custom_widget/ConjureCustomWidget.tsx");

export const CONJURE_CUSTOM_WIDGET_PROMPT_MAX_LENGTH = 2000;
export function useCanConjureCustomWidget(ConjureCustomWidgetAddOption_str, arg1) {
  _require = ConjureCustomWidgetAddOption_str;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  const items = [GuildStore, ];
  const useStateFromStores = require("get initialized").useStateFromStores;
  require("get initialized");
  items[1] = require("ApexExperiment").ApexExperimentStore;
  const items1 = [ConjureCustomWidgetAddOption_str, flag];
  return useStateFromStores(items, () => {
    let result = flag;
    if (result) {
      const obj = ConjureUtils;
      result = obj.hasEligibleConjureGuild(GuildStore.getGuildsArray(), ConjureCustomWidgetAddOption_str);
    }
    return result;
  }, items1);
}
export function composeConjureCustomWidgetPrompt(trimmed) {
  const items = ["Build a profile card (an application profile widget) for my Discord profile.", "Read the data from the public source below \u2014 it must be reachable without a login.", "Recommend which fields the card should show and ask me to confirm or edit them before you build.", "", trimmed];
  return items.join("\n");
}
