// Module ID: 16287
// Function ID: 125684
// Name: context
// Dependencies: []
// Exports: CreatorMonetizationSettingsDisabledContextProvider, useCreatorMonetizationSettingsDisabled

// Module 16287 (context)
const importAllResult = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const context = importAllResult.createContext(undefined);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/creator_monetization/CreatorMonetizationSettingsDisabledContext.tsx");

export default context;
export const useCreatorMonetizationSettingsDisabled = function useCreatorMonetizationSettingsDisabled() {
  const context = importAllResult.useContext(context);
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
  let obj = arg1(dependencyMap[2]);
  obj = { value: obj.useShouldRestrictUpdatingCreatorMonetizationSettings(guildId).shouldRestrictUpdatingCreatorMonetizationSettings, children };
  return <context.Provider {...obj} />;
};
