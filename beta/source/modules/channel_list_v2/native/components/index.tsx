// Module ID: 12574
// Function ID: 12575
// Name: renderChannelBadge
// Dependencies: [2, 12575, 12576, 12578, 12579, 12580]

// Module 12574 (renderChannelBadge)
import components_ChannelBadge from "components/ChannelBadge" /* 12575 */;
import VocalChannelJoinButtonDefault from "VocalChannelJoinButton" /* 12576 */;
import Divider from "Divider" /* 12578 */;
import NewBadgeDefault from "NewBadge" /* 12579 */;
import GuildSearchAndInviteDefault from "GuildSearchAndInvite" /* 12580 */;
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
