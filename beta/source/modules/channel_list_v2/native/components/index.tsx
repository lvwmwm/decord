// Module ID: 12439
// Function ID: 12440
// Name: renderChannelBadge
// Dependencies: [2, 12440, 12441, 12443, 12444, 12445]

// Module 12439 (renderChannelBadge)
import components_ChannelBadge from "components/ChannelBadge" /* 12440 */;
import VocalChannelJoinButtonDefault from "VocalChannelJoinButton" /* 12441 */;
import Divider from "Divider" /* 12443 */;
import NewBadgeDefault from "NewBadge" /* 12444 */;
import GuildSearchAndInviteDefault from "GuildSearchAndInvite" /* 12445 */;
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
