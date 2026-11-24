// Module ID: 12203
// Function ID: 12204
// Name: GameOrganizationBenefitIllustrations
// Dependencies: [12204, 12208, 12212, 2]

// Module 12203 (GameOrganizationBenefitIllustrations)
import GuildRolesAbstractUI from "GuildRolesAbstractUI" /* 12204 */;
import GuildChatAbstractUI from "GuildChatAbstractUI" /* 12208 */;
import GuildInviteAbstractUI from "GuildInviteAbstractUI" /* 12212 */;
import size from "module_2" /* 2 */;

const obj = { roles: GuildRolesAbstractUI.GuildRolesAbstractUI, chat: GuildChatAbstractUI.GuildChatAbstractUI, invites: GuildInviteAbstractUI.GuildInviteAbstractUI };
const result = size.fileFinishedImporting("modules/game_organizations/GameOrganizationBenefitIllustrations.native.tsx");

export const GAME_ORGANIZATION_BENEFIT_ILLUSTRATIONS = obj;
