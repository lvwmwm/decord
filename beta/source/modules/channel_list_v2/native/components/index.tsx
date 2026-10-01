// Module ID: 11774
// Function ID: 11775
// Dependencies: [2, 11775, 11776, 11778, 11779, 11780]

// Module 11774
import ChannelBadge from "ChannelBadge" /* 11775 */;
import VocalChannelJoinButtonDefault from "VocalChannelJoinButton" /* 11776 */;
import Divider from "Divider" /* 11778 */;
import NewBadgeDefault from "NewBadge" /* 11779 */;
import GuildSearchAndInviteDefault from "GuildSearchAndInvite" /* 11780 */;
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
