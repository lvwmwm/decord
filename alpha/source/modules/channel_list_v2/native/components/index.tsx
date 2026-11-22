// Module ID: 13145
// Function ID: 13146
// Dependencies: [2, 13146, 13147, 13149, 13150, 13151]

// Module 13145
import ChannelBadge from "ChannelBadge" /* 13146 */;
import VocalChannelJoinButtonDefault from "VocalChannelJoinButton" /* 13147 */;
import Divider from "Divider" /* 13149 */;
import NewBadgeDefault from "NewBadge" /* 13150 */;
import GuildSearchAndInviteDefault from "GuildSearchAndInvite" /* 13151 */;
import size from "module_2" /* 2 */;

const DividerDefault = Divider;

const result = size.fileFinishedImporting("modules/channel_list_v2/native/components/index.tsx");
const Divider_export = DividerDefault;

export const renderChannelBadge = ChannelBadge.renderChannelBadge;
export const VocalChannelJoinButton = VocalChannelJoinButtonDefault;
export { Divider_export as Divider };
export const DIVIDER_MARGIN_BOTTOM = Divider.DIVIDER_MARGIN_BOTTOM;
export const DIVIDER_MARGIN_TOP = Divider.DIVIDER_MARGIN_TOP;
export const NewBadge = NewBadgeDefault;
export const GuildSearchAndInvite = GuildSearchAndInviteDefault;
