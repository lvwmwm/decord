// Module ID: 8409
// Function ID: 66973
// Name: CreateChannelTypeDescription
// Dependencies: []
// Exports: default

// Module 8409 (CreateChannelTypeDescription)
let closure_2 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const GuildProfileFetchStatus = arg1(dependencyMap[2]).GuildProfileFetchStatus;
const ChannelTypes = arg1(dependencyMap[3]).ChannelTypes;
const jsx = arg1(dependencyMap[4]).jsx;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/channel/native/components/CreateChannelTypeDescription.tsx");

export default function CreateChannelTypeDescription(guildId) {
  let fetchGuildProfile;
  let guildProfile;
  guildId = guildId.guildId;
  let obj = arg1(dependencyMap[5]);
  guildProfile = obj.useGuildProfile(guildId);
  ({ guildProfile, fetchGuildProfile } = guildProfile);
  const arg1 = fetchGuildProfile;
  let hasItem = null != guildProfile;
  if (hasItem) {
    const VISIBLE = arg1(dependencyMap[6]).GuildProfileVisibilitySets.VISIBLE;
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
    obj = {};
    const intl = arg1(dependencyMap[8]).intl;
    obj.children = intl.string(arg1(dependencyMap[8]).t.2Ab4Id);
    obj.children = jsx(arg1(dependencyMap[7]).Text, obj);
    tmp9 = <View {...obj} />;
  }
  return tmp9;
};
