// Module ID: 12302
// Function ID: 12303
// Name: GameOrganizationBenefitIllustrations
// Dependencies: [12303, 12307, 12311, 2]

// Module 12302 (GameOrganizationBenefitIllustrations)
import GuildRolesAbstractUI from "GuildRolesAbstractUI" /* 12303 */;
import GuildChatAbstractUI from "GuildChatAbstractUI" /* 12307 */;
import GuildInviteAbstractUI from "GuildInviteAbstractUI" /* 12311 */;
import size from "module_2" /* 2 */;

const obj = { roles: GuildRolesAbstractUI.GuildRolesAbstractUI, chat: GuildChatAbstractUI.GuildChatAbstractUI, invites: GuildInviteAbstractUI.GuildInviteAbstractUI };
const result = size.fileFinishedImporting("modules/game_organizations/GameOrganizationBenefitIllustrations.native.tsx");

export const GAME_ORGANIZATION_BENEFIT_ILLUSTRATIONS = obj;
