// Module ID: 20001
// Function ID: 20002
// Name: RoleSubscriptionSettingsDisabledContext
// Dependencies: [2, 20002]

// Module 20001 (RoleSubscriptionSettingsDisabledContext)
import CreatorMonetizationSettingsDisabledContext from "CreatorMonetizationSettingsDisabledContext" /* 20002 */;
import size from "module_2" /* 2 */;

const CreatorMonetizationSettingsDisabledContextDefault = CreatorMonetizationSettingsDisabledContext;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/RoleSubscriptionSettingsDisabledContext.tsx");

export default CreatorMonetizationSettingsDisabledContextDefault;
export const useRoleSubscriptionSettingsDisabled = CreatorMonetizationSettingsDisabledContext.useCreatorMonetizationSettingsDisabled;
export const RoleSubscriptionSettingsDisabledContextProvider = CreatorMonetizationSettingsDisabledContext.CreatorMonetizationSettingsDisabledContextProvider;
