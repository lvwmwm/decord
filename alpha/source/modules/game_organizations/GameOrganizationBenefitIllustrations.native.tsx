// Module ID: 12352
// Function ID: 12353
// Name: GameOrganizationBenefitIllustrations
// Dependencies: [12353, 12357, 12361, 2]

// Module 12352 (GameOrganizationBenefitIllustrations)
import GuildRolesAbstractUI from "GuildRolesAbstractUI" /* 12353 */;
import GuildChatAbstractUI from "GuildChatAbstractUI" /* 12357 */;
import GuildInviteAbstractUI from "GuildInviteAbstractUI" /* 12361 */;
import size from "module_2" /* 2 */;

const obj = { roles: GuildRolesAbstractUI.GuildRolesAbstractUI, chat: GuildChatAbstractUI.GuildChatAbstractUI, invites: GuildInviteAbstractUI.GuildInviteAbstractUI };
const result = size.fileFinishedImporting("modules/game_organizations/GameOrganizationBenefitIllustrations.native.tsx");

export const GAME_ORGANIZATION_BENEFIT_ILLUSTRATIONS = obj;
