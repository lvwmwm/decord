// Module ID: 11989
// Function ID: 11990
// Dependencies: [2, 11990, 11991, 11993, 11994, 11995]

// Module 11989
import components_ChannelBadge from "components/ChannelBadge" /* 11990 */;
import VocalChannelJoinButtonDefault from "VocalChannelJoinButton" /* 11991 */;
import Divider from "Divider" /* 11993 */;
import NewBadgeDefault from "NewBadge" /* 11994 */;
import GuildSearchAndInviteDefault from "GuildSearchAndInvite" /* 11995 */;
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
