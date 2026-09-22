// Module ID: 18196
// Function ID: 18197
// Name: CreatorMonetizationSettingsDisabledContext
// Dependencies: [19, 21, 7497, 2]
// Exports: CreatorMonetizationSettingsDisabledContextProvider, useCreatorMonetizationSettingsDisabled

// Module 18196 (CreatorMonetizationSettingsDisabledContext)
import CreatorMonetizationRestrictionsHooks from "CreatorMonetizationRestrictionsHooks" /* 7497 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let context = noop.createContext(undefined);
const size = fn(2);
const result = size.fileFinishedImporting("modules/creator_monetization/CreatorMonetizationSettingsDisabledContext.tsx");

export default context;
export const useCreatorMonetizationSettingsDisabled = function useCreatorMonetizationSettingsDisabled() {
  context = noop.useContext(context);
  if (null == context) {
    const _Error = Error;
    const error = new Error("useCreatorMonetizationSettingsDisabled must be used within a CreatorMonetizationSettingsDisabledContext");
    throw error;
  } else {
    return context;
  }
};
export const CreatorMonetizationSettingsDisabledContextProvider = function CreatorMonetizationSettingsDisabledContextProvider(arg0) {
  ({ guildId, children } = arg0);
  return <context.Provider value={CreatorMonetizationRestrictionsHooks.useShouldRestrictUpdatingCreatorMonetizationSettings(guildId).shouldRestrictUpdatingCreatorMonetizationSettings}>{children}</context.Provider>;
};
