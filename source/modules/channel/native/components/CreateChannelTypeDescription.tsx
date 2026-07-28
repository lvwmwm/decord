// Module ID: 8256
// Function ID: 66023
// Name: CreateChannelTypeDescription
// Dependencies: [31, 27, 8257, 653, 33, 8258, 5165, 4161, 1212, 2]
// Exports: default

// Module 8256 (CreateChannelTypeDescription)
import result from "result";
import { View } from "get ActivityIndicator";
import { GuildProfileFetchStatus } from "_isNativeReflectConstruct";
import { ChannelTypes } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/channel/native/components/CreateChannelTypeDescription.tsx");

export default function CreateChannelTypeDescription(guildId) {
  let fetchGuildProfile;
  let guildProfile;
  guildId = guildId.guildId;
  let obj = fetchGuildProfile(8258);
  guildProfile = obj.useGuildProfile(guildId);
  ({ guildProfile, fetchGuildProfile } = guildProfile);
  let hasItem = null != guildProfile;
  if (hasItem) {
    const VISIBLE = fetchGuildProfile(5165).GuildProfileVisibilitySets.VISIBLE;
    hasItem = VISIBLE.has(guildProfile.visibility);
  }
  let tmp6 = !tmp2;
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
    obj = {};
    obj = { variant: "text-sm/normal", color: "text-subtle" };
    const intl = fetchGuildProfile(1212).intl;
    obj.children = intl.string(fetchGuildProfile(1212).t["2Ab4Id"]);
    obj.children = jsx(fetchGuildProfile(4161).Text, { variant: "text-sm/normal", color: "text-subtle" });
    tmp9 = <View variant="text-sm/normal" color="text-subtle" />;
  }
  return tmp9;
};
