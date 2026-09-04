// Module ID: 9678
// Function ID: 9679
// Name: CreateChannelTypeDescription
// Dependencies: [19, 17, 8995, 673, 21, 9116, 5506, 4477, 1233, 2]
// Exports: default

// Module 9678 (CreateChannelTypeDescription)
import closure_2 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { GuildProfileFetchStatus } from "handleUpdateStart" /* 8995 */;
import { ChannelTypes } from "ME" /* 673 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/channel/native/components/CreateChannelTypeDescription.tsx");

export default function CreateChannelTypeDescription(guildId) {
  guildId = guildId.guildId;
  fetchGuildProfile = undefined;
  let obj = fetchGuildProfile(9116);
  guildProfile = obj.useGuildProfile(guildId);
  ({ guildProfile, fetchGuildProfile } = guildProfile);
  let hasItem = null != guildProfile;
  if (hasItem) {
    const VISIBLE = tmp(5506).GuildProfileVisibilitySets.VISIBLE;
    hasItem = VISIBLE.has(guildProfile.visibility);
  }
  let tmp6 = !tmp5;
  if (guildProfile.fetchStatus === GuildProfileFetchStatus.FETCHED) {
    tmp6 = !hasItem;
  }
  if (tmp6) {
    tmp6 = guildId.channelType === ChannelTypes.GUILD_ANNOUNCEMENT;
  }
  const items = [guildId, fetchGuildProfile];
  const effect = React.useEffect(() => {
    fetchGuildProfile();
  }, items);
  let tmp9 = null;
  if (tmp6) {
    obj = { children: null };
    obj = { variant: "text-sm/normal", color: "text-subtle", children: null };
    const intl = tmp(1233).intl;
    obj[2] = intl.string(tmp(1233).t["2Ab4Id"]);
    obj[0] = jsx(tmp(4477).Text, { variant: "text-sm/normal", color: "text-subtle", children: null });
    tmp9 = <View variant="text-sm/normal" color="text-subtle">{null}</View>;
  }
  return tmp9;
};
