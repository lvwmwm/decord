// Module ID: 20004
// Function ID: 20005
// Name: RoleSubscriptionSettingsDisabledContext
// Dependencies: [2, 20005]

// Module 20004 (RoleSubscriptionSettingsDisabledContext)
import CreatorMonetizationSettingsDisabledContext from "CreatorMonetizationSettingsDisabledContext" /* 20005 */;
import size from "module_2" /* 2 */;

const CreatorMonetizationSettingsDisabledContextDefault = CreatorMonetizationSettingsDisabledContext;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/RoleSubscriptionSettingsDisabledContext.tsx");

export default CreatorMonetizationSettingsDisabledContextDefault;
export const useRoleSubscriptionSettingsDisabled = CreatorMonetizationSettingsDisabledContext.useCreatorMonetizationSettingsDisabled;
export const RoleSubscriptionSettingsDisabledContextProvider = CreatorMonetizationSettingsDisabledContext.CreatorMonetizationSettingsDisabledContextProvider;
