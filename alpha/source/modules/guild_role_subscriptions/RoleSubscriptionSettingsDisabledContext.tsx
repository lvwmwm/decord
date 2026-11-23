// Module ID: 20003
// Function ID: 20004
// Name: RoleSubscriptionSettingsDisabledContext
// Dependencies: [2, 20004]

// Module 20003 (RoleSubscriptionSettingsDisabledContext)
import CreatorMonetizationSettingsDisabledContext from "CreatorMonetizationSettingsDisabledContext" /* 20004 */;
import size from "module_2" /* 2 */;

const CreatorMonetizationSettingsDisabledContextDefault = CreatorMonetizationSettingsDisabledContext;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/RoleSubscriptionSettingsDisabledContext.tsx");

export default CreatorMonetizationSettingsDisabledContextDefault;
export const useRoleSubscriptionSettingsDisabled = CreatorMonetizationSettingsDisabledContext.useCreatorMonetizationSettingsDisabled;
export const RoleSubscriptionSettingsDisabledContextProvider = CreatorMonetizationSettingsDisabledContext.CreatorMonetizationSettingsDisabledContextProvider;
