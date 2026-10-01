// Module ID: 9027
// Function ID: 9028
// Name: CreateChannelTypeDescription
// Dependencies: [19, 17, 9028, 1074, 21, 9029, 5863, 4832, 1115, 2]
// Exports: default

// Module 9027 (CreateChannelTypeDescription)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import GuildProfileStore from "GuildProfileStore" /* 9028 */;
import useGuildProfile from "useGuildProfile" /* 9029 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const GuildProfileFetchStatus = GuildProfileStore.GuildProfileFetchStatus;
const ChannelTypes = Constants.ChannelTypes;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/channel/native/components/CreateChannelTypeDescription.tsx");

export default function CreateChannelTypeDescription(guildId) {
  let fetchGuildProfile;
  let guildProfile;
  let intl;
  guildId = guildId.guildId;
  fetchGuildProfile = undefined;
  const channelType = guildId.channelType;
  const obj = useGuildProfile;
  const guildProfile1 = obj.useGuildProfile(guildId);
  ({ guildProfile, fetchGuildProfile } = guildProfile1);
  let hasItem = null != guildProfile;
  const fetchStatus = guildProfile1.fetchStatus;
  const FETCHED = GuildProfileFetchStatus.FETCHED;
  if (hasItem) {
    const VISIBLE = tmp(5863).GuildProfileVisibilitySets.VISIBLE;
    hasItem = VISIBLE.has(guildProfile.visibility);
  }
  let tmp6 = fetchStatus === FETCHED && !hasItem;
  if (tmp6) {
    tmp6 = channelType === ChannelTypes.GUILD_ANNOUNCEMENT;
  }
  const items = [guildId, fetchGuildProfile];
  const effect = react.useEffect(() => {
    fetchGuildProfile();
  }, items);
  let tmp9 = null;
  if (tmp6) {
    ({ variant: "text-sm/normal", color: "text-subtle", children: intl.string(intl2.t["2Ab4Id"]) });
    const Text = tmp(4832).Text;
    intl = tmp(1115).intl;
    tmp9 = <View>{null}</View>;
  }
  return tmp9;
};
