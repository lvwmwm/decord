// Module ID: 16559
// Function ID: 16560
// Name: context
// Dependencies: [19, 21, 12610, 2]
// Exports: CreatorMonetizationSettingsDisabledContextProvider, useCreatorMonetizationSettingsDisabled

// Module 16559 (context)
import importAllResult from "noop";
import { jsx } from "jsxProd";

const require = arg1;
let context = importAllResult.createContext(undefined);
const result = require("useShouldHideGuildPurchaseEntryPoints").fileFinishedImporting("modules/creator_monetization/CreatorMonetizationSettingsDisabledContext.tsx");

export default context;
export const useCreatorMonetizationSettingsDisabled = function useCreatorMonetizationSettingsDisabled() {
  context = importAllResult.useContext(context);
  if (null == context) {
    const _Error = Error;
    const error = new Error("useCreatorMonetizationSettingsDisabled must be used within a CreatorMonetizationSettingsDisabledContext");
    throw error;
  } else {
    return context;
  }
};
export const CreatorMonetizationSettingsDisabledContextProvider = function CreatorMonetizationSettingsDisabledContextProvider(arg0) {
  let children;
  let guildId;
  ({ guildId, children } = arg0);
  let obj = require(12610) /* useShouldHideGuildPurchaseEntryPoints */;
  obj = { value: obj.useShouldRestrictUpdatingCreatorMonetizationSettings(guildId).shouldRestrictUpdatingCreatorMonetizationSettings, children };
  return <context.Provider value={obj.useShouldRestrictUpdatingCreatorMonetizationSettings(guildId).shouldRestrictUpdatingCreatorMonetizationSettings}>{children}</context.Provider>;
};
