// Module ID: 12360
// Function ID: 12361
// Name: GameOrganizationBenefitIllustrations
// Dependencies: [12361, 12365, 12369, 2]

// Module 12360 (GameOrganizationBenefitIllustrations)
import GuildRolesAbstractUI from "GuildRolesAbstractUI" /* 12361 */;
import GuildChatAbstractUI from "GuildChatAbstractUI" /* 12365 */;
import GuildInviteAbstractUI from "GuildInviteAbstractUI" /* 12369 */;
import size from "module_2" /* 2 */;

const obj = { roles: GuildRolesAbstractUI.GuildRolesAbstractUI, chat: GuildChatAbstractUI.GuildChatAbstractUI, invites: GuildInviteAbstractUI.GuildInviteAbstractUI };
const result = size.fileFinishedImporting("modules/game_organizations/GameOrganizationBenefitIllustrations.native.tsx");

export const GAME_ORGANIZATION_BENEFIT_ILLUSTRATIONS = obj;
