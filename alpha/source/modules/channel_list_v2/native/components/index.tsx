// Module ID: 11987
// Function ID: 11988
// Dependencies: [2, 11988, 11989, 11991, 11992, 11993]

// Module 11987
import components_ChannelBadge from "components/ChannelBadge" /* 11988 */;
import VocalChannelJoinButtonDefault from "VocalChannelJoinButton" /* 11989 */;
import Divider from "Divider" /* 11991 */;
import NewBadgeDefault from "NewBadge" /* 11992 */;
import GuildSearchAndInviteDefault from "GuildSearchAndInvite" /* 11993 */;
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
