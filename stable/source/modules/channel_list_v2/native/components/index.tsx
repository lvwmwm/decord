// Module ID: 12424
// Function ID: 12425
// Name: renderChannelBadge
// Dependencies: [2, 12425, 12426, 12428, 12429, 12430]

// Module 12424 (renderChannelBadge)
import components_ChannelBadge from "components/ChannelBadge" /* 12425 */;
import VocalChannelJoinButtonDefault from "VocalChannelJoinButton" /* 12426 */;
import Divider from "Divider" /* 12428 */;
import NewBadgeDefault from "NewBadge" /* 12429 */;
import GuildSearchAndInviteDefault from "GuildSearchAndInvite" /* 12430 */;
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
