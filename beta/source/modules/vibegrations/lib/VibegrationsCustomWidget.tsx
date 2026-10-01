// Module ID: 12640
// Function ID: 12641
// Name: VibegrationsCustomWidget
// Dependencies: [2067, 504, 1435, 5370, 2]
// Exports: composeVibegrationsCustomWidgetPrompt, useCanConjureVibegrationsCustomWidget

// Module 12640 (VibegrationsCustomWidget)
import GuildStore from "GuildStore" /* 2067 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsCustomWidget.tsx");

export const VIBEGRATIONS_CUSTOM_WIDGET_PROMPT_MAX_LENGTH = 2000;
export const useCanConjureVibegrationsCustomWidget = function useCanConjureVibegrationsCustomWidget(UserProfileContent, isMobileGameCollectionExperimentEnabled) {
  _require = UserProfileContent;
  let flag = isMobileGameCollectionExperimentEnabled;
  if (isMobileGameCollectionExperimentEnabled === undefined) {
    flag = true;
  }
  const items = [GuildStore, ];
  const useStateFromStores = require("get initialized").useStateFromStores;
  require("get initialized");
  items[1] = require("ApexExperiment").ApexExperimentStore;
  const items1 = [UserProfileContent, flag];
  return useStateFromStores(items, () => {
    let someResult = flag;
    if (someResult) {
      const guildsArray = GuildStore.getGuildsArray();
      someResult = guildsArray.some((item) => {
        const obj = closure_0(flag[3]);
        return obj.isVibegrationsGuildEligible(item, closure_1_0);
      });
    }
    return someResult;
  }, items1);
};
export const composeVibegrationsCustomWidgetPrompt = function composeVibegrationsCustomWidgetPrompt(trimmed) {
  const items = ["Build a profile card (an application profile widget) for my Discord profile.", "Read the data from the public source below \u2014 it must be reachable without a login.", "Recommend which fields the card should show and ask me to confirm or edit them before you build.", "", trimmed];
  return items.join("\n");
};
