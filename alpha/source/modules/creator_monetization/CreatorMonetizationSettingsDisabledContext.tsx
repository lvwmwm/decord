// Module ID: 19939
// Function ID: 19940
// Name: CreatorMonetizationSettingsDisabledContext
// Dependencies: [19, 21, 7427, 2]
// Exports: CreatorMonetizationSettingsDisabledContextProvider, useCreatorMonetizationSettingsDisabled

// Module 19939 (CreatorMonetizationSettingsDisabledContext)
import Fragment from "Fragment" /* 21 */;
import CreatorMonetizationRestrictionsHooks from "CreatorMonetizationRestrictionsHooks" /* 7427 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let context = react.createContext(undefined);
const result = size.fileFinishedImporting("modules/creator_monetization/CreatorMonetizationSettingsDisabledContext.tsx");

export default context;
export function useCreatorMonetizationSettingsDisabled() {
  context = react.useContext(context);
  if (null == context) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("useCreatorMonetizationSettingsDisabled must be used within a CreatorMonetizationSettingsDisabledContext");
    throw error;
  } else {
    return context;
  }
}
export function CreatorMonetizationSettingsDisabledContextProvider(arg0) {
  let children;
  let guildId;
  ({ guildId, children } = arg0);
  const obj = CreatorMonetizationRestrictionsHooks;
  return <context.Provider value={obj.useShouldRestrictUpdatingCreatorMonetizationSettings(guildId).shouldRestrictUpdatingCreatorMonetizationSettings}>{children}</context.Provider>;
}
