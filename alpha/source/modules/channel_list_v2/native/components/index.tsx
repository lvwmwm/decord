// Module ID: 12006
// Function ID: 12007
// Dependencies: [2, 12007, 12008, 12010, 12011, 12012]

// Module 12006
import components_ChannelBadge from "components/ChannelBadge" /* 12007 */;
import VocalChannelJoinButtonDefault from "VocalChannelJoinButton" /* 12008 */;
import Divider from "Divider" /* 12010 */;
import NewBadgeDefault from "NewBadge" /* 12011 */;
import GuildSearchAndInviteDefault from "GuildSearchAndInvite" /* 12012 */;
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
