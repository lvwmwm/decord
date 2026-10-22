// Module ID: 14324
// Function ID: 14325
// Name: ConjureCustomWidget
// Dependencies: [4843, 558, 576, 1455, 7330, 504, 2]
// Exports: composeConjureCustomWidgetPrompt

// Module 14324 (ConjureCustomWidget)
import ConjureUtils from "ConjureUtils" /* 7330 */;
import GuildStore from "GuildStore" /* 4843 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanConjureCustomWidget(arg0, arg1) {
  let closure_0;
  let closure_1;
  let first;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(5);
  dependencyMap = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, require("ApexExperiment").ApexExperimentStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === (undefined === arg1 || arg1)) {
    let tmp7;
    let tmp8;
    if (cResult[2] === arg0) {
      tmp7 = cResult[3];
      tmp8 = cResult[4];
    }
    const tmpResult = require("get initialized");
    return tmpResult.useStateFromStores(first, tmp7, tmp8);
  }
  const fn = function s() {
    let result = closure_1;
    if (result) {
      const obj = ConjureUtils;
      result = obj.hasEligibleConjureGuild(GuildStore.getGuildsArray(), closure_0);
    }
    return result;
  };
  const items1 = [arg0, tmp4];
  cResult[1] = undefined === arg1 || arg1;
  cResult[2] = arg0;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp8 = items1;
  tmp7 = fn;
}) : (function useCanConjureCustomWidget(arg0) {
  let closure_0;
  _require = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  const items = [GuildStore, ];
  const useStateFromStores = require("get initialized").useStateFromStores;
  require("get initialized");
  items[1] = require("ApexExperiment").ApexExperimentStore;
  const items1 = [arg0, flag];
  return useStateFromStores(items, () => {
    let result = flag;
    if (result) {
      const obj = ConjureUtils;
      result = obj.hasEligibleConjureGuild(GuildStore.getGuildsArray(), closure_0);
    }
    return result;
  }, items1);
});
let result = size.fileFinishedImporting("modules/conjure/custom_widget/ConjureCustomWidget.tsx");

export const CONJURE_CUSTOM_WIDGET_PROMPT_MAX_LENGTH = 2000;
export const useCanConjureCustomWidget = tmp2;
export const composeConjureCustomWidgetPrompt = function composeConjureCustomWidgetPrompt(trimmed) {
  const items = ["Build a profile card (an application profile widget) for my Discord profile.", "Read the data from the public source below \u2014 it must be reachable without a login.", "Recommend which fields the card should show and ask me to confirm or edit them before you build.", "", trimmed];
  return items.join("\n");
};
