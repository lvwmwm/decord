// Module ID: 12936
// Function ID: 12937
// Dependencies: [2, 12937, 12938, 12940, 12941, 12942]

// Module 12936
import components_ChannelBadge from "components/ChannelBadge" /* 12937 */;
import VocalChannelJoinButtonDefault from "VocalChannelJoinButton" /* 12938 */;
import Divider from "Divider" /* 12940 */;
import NewBadgeDefault from "NewBadge" /* 12941 */;
import GuildSearchAndInviteDefault from "GuildSearchAndInvite" /* 12942 */;
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
