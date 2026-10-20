// Module ID: 11991
// Function ID: 11992
// Dependencies: [2, 11992, 11993, 11995, 11996, 11997]

// Module 11991
import components_ChannelBadge from "components/ChannelBadge" /* 11992 */;
import VocalChannelJoinButtonDefault from "VocalChannelJoinButton" /* 11993 */;
import Divider from "Divider" /* 11995 */;
import NewBadgeDefault from "NewBadge" /* 11996 */;
import GuildSearchAndInviteDefault from "GuildSearchAndInvite" /* 11997 */;
import size from "module_2" /* 2 */;

const DividerDefault = Divider;

const result = size.fileFinishedImporting("modules/channel_list_v2/native/components/index.tsx");
const Divider_export = DividerDefault;

export const renderChannelBadge = components_ChannelBadge.renderChannelBadge;
export const VocalChannelJoinButton = VocalChannelJoinButtonDefault;
export { Divider_export as Divider };
export const DIVIDER_MARGIN_BOTTOM = Divider.DIVIDER_MARGIN_BOTTOM;
export const DIVIDER_MARGIN_TOP = Divider.DIVIDER_MARGIN_TOP;
export const NewBadge = NewBadgeDefault;
export const GuildSearchAndInvite = GuildSearchAndInviteDefault;
