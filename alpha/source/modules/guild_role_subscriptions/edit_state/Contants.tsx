// Module ID: 17540
// Function ID: 17541
// Name: Contants
// Dependencies: [1072, 5048, 2]

// Module 17540 (Contants)
import Constants from "Constants" /* 1072 */;
import GuildRoleRecordUtils from "GuildRoleRecordUtils" /* 5048 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
const obj = { id: "0", guildId: "0", name: "", mentionable: false, managed: false, position: 0, hoist: false, permissions: Permissions.SEND_MESSAGES, color: 0, colors: { primary_color: 0, secondary_color: null, tertiary_color: null }, colorString: "0", colorStrings: { primaryColor: "0", secondaryColor: null, tertiaryColor: null }, icon: null, unicodeEmoji: null, flags: 0, description: null, tags: {}, version: 0 };
const result = GuildRoleRecordUtils.constructGuildRoleInPlace(obj);
const result1 = size.fileFinishedImporting("modules/guild_role_subscriptions/edit_state/Contants.tsx");

export const DEFAULT_PREVIEW_ROLE = result;
