// Module ID: 8894
// Function ID: 8895
// Name: CreateChannelTypeDescription
// Dependencies: [19, 17, 8895, 676, 21, 8896, 5267, 4251, 1236, 2]
// Exports: default

// Module 8894 (CreateChannelTypeDescription)
import noop from "noop";
import { View } from "get ActivityIndicator";
import { GuildProfileFetchStatus } from "handleUpdateStart";
import { ChannelTypes } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("handleUpdateStart").fileFinishedImporting("modules/channel/native/components/CreateChannelTypeDescription.tsx");

export default function CreateChannelTypeDescription(guildId) {
  let fetchGuildProfile;
  let guildProfile;
  guildId = guildId.guildId;
  fetchGuildProfile = undefined;
  let obj = fetchGuildProfile(8896);
  guildProfile = obj.useGuildProfile(guildId);
  ({ guildProfile, fetchGuildProfile } = guildProfile);
  let hasItem = null != guildProfile;
  if (hasItem) {
    const VISIBLE = tmp(5267).GuildProfileVisibilitySets.VISIBLE;
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
    const intl = tmp(1236).intl;
    obj[2] = intl.string(tmp(1236).t["2Ab4Id"]);
    obj[0] = jsx(tmp(4251).Text, { variant: "text-sm/normal", color: "text-subtle", children: null });
    tmp9 = <View variant="text-sm/normal" color="text-subtle">{null}</View>;
  }
  return tmp9;
};
