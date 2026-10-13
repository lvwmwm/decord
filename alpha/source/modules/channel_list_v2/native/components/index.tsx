// Module ID: 12505
// Function ID: 12506
// Dependencies: [2, 12506, 12507, 12509, 12510, 12511]

// Module 12505
import components_ChannelBadge from "components/ChannelBadge" /* 12506 */;
import VocalChannelJoinButtonDefault from "VocalChannelJoinButton" /* 12507 */;
import Divider from "Divider" /* 12509 */;
import NewBadgeDefault from "NewBadge" /* 12510 */;
import GuildSearchAndInviteDefault from "GuildSearchAndInvite" /* 12511 */;
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
