// Module ID: 12549
// Function ID: 12550
// Name: renderChannelBadge
// Dependencies: [2, 12550, 12551, 12553, 12554, 12555]

// Module 12549 (renderChannelBadge)
import components_ChannelBadge from "components/ChannelBadge" /* 12550 */;
import VocalChannelJoinButtonDefault from "VocalChannelJoinButton" /* 12551 */;
import Divider from "Divider" /* 12553 */;
import NewBadgeDefault from "NewBadge" /* 12554 */;
import GuildSearchAndInviteDefault from "GuildSearchAndInvite" /* 12555 */;
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
