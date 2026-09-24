// Module ID: 12475
// Function ID: 12476
// Name: renderChannelBadge
// Dependencies: [2, 12476, 12477, 12479, 12480, 12481]

// Module 12475 (renderChannelBadge)
import components_ChannelBadge from "components/ChannelBadge" /* 12476 */;
import VocalChannelJoinButtonDefault from "VocalChannelJoinButton" /* 12477 */;
import Divider from "Divider" /* 12479 */;
import NewBadgeDefault from "NewBadge" /* 12480 */;
import GuildSearchAndInviteDefault from "GuildSearchAndInvite" /* 12481 */;
import size from "module_2" /* 2 */;

const DividerDefault = Divider;

const result = size.fileFinishedImporting("modules/channel_list_v2/native/components/index.tsx");

export const renderChannelBadge = components_ChannelBadge.renderChannelBadge;
export const VocalChannelJoinButton = VocalChannelJoinButtonDefault;
export const Divider = DividerDefault;
export const DIVIDER_MARGIN_BOTTOM = Divider.DIVIDER_MARGIN_BOTTOM;
export const DIVIDER_MARGIN_TOP = Divider.DIVIDER_MARGIN_TOP;
export const NewBadge = NewBadgeDefault;
export const GuildSearchAndInvite = GuildSearchAndInviteDefault;
