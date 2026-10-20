// Module ID: 12973
// Function ID: 12974
// Dependencies: [2, 12974, 12975, 12977, 12978, 12979]

// Module 12973
import components_ChannelBadge from "components/ChannelBadge" /* 12974 */;
import VocalChannelJoinButtonDefault from "VocalChannelJoinButton" /* 12975 */;
import Divider from "Divider" /* 12977 */;
import NewBadgeDefault from "NewBadge" /* 12978 */;
import GuildSearchAndInviteDefault from "GuildSearchAndInvite" /* 12979 */;
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
