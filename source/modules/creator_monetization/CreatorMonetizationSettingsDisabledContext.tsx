// Module ID: 16467
// Function ID: 128285
// Name: context
// Dependencies: [31, 33, 5634, 2]
// Exports: CreatorMonetizationSettingsDisabledContextProvider, useCreatorMonetizationSettingsDisabled

// Module 16467 (context)
import importAllResult from "result";
import { jsx } from "jsxProd";

const require = arg1;
let context = importAllResult.createContext(undefined);
const result = require("useCreatorMonetizationRestrictions").fileFinishedImporting("modules/creator_monetization/CreatorMonetizationSettingsDisabledContext.tsx");

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
  let obj = require(5634) /* useCreatorMonetizationRestrictions */;
  obj = { value: obj.useShouldRestrictUpdatingCreatorMonetizationSettings(guildId).shouldRestrictUpdatingCreatorMonetizationSettings, children };
  return <context.Provider value={obj.useShouldRestrictUpdatingCreatorMonetizationSettings(guildId).shouldRestrictUpdatingCreatorMonetizationSettings}>{children}</context.Provider>;
};
