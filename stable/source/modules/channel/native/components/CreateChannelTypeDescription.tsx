// Module ID: 9004
// Function ID: 9005
// Name: CreateChannelTypeDescription
// Dependencies: [19, 17, 9005, 1086, 21, 558, 576, 9006, 5864, 4833, 1127, 2]

// Module 9004 (CreateChannelTypeDescription)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1086 */;
import intl2 from "intl" /* 1127 */;
import GuildProfileStore from "GuildProfileStore" /* 9005 */;
import useGuildProfile from "useGuildProfile" /* 9006 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const GuildProfileFetchStatus = GuildProfileStore.GuildProfileFetchStatus;
const ChannelTypes = Constants.ChannelTypes;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channelType;
  let fetchGuildProfile;
  let guildId;
  let guildProfile;
  let intl;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(6);
  ({ guildId, channelType } = arg0);
  const obj2 = useGuildProfile;
  const guildProfile1 = obj2.useGuildProfile(guildId);
  ({ guildProfile, fetchGuildProfile } = guildProfile1);
  let hasItem = null != guildProfile;
  const fetchStatus = guildProfile1.fetchStatus;
  const FETCHED = GuildProfileFetchStatus.FETCHED;
  if (hasItem) {
    const VISIBLE = tmp(5864).GuildProfileVisibilitySets.VISIBLE;
    hasItem = VISIBLE.has(guildProfile.visibility);
  }
  let tmp7 = fetchStatus === FETCHED && !hasItem;
  if (tmp7) {
    tmp7 = channelType === ChannelTypes.GUILD_ANNOUNCEMENT;
  }
  if (cResult[0] !== fetchGuildProfile) {
    const fn = function c() {
      fetchGuildProfile();
    };
    cResult[0] = fetchGuildProfile;
    cResult[1] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] === fetchGuildProfile) {
    let tmp10;
    if (cResult[3] === guildId) {
      tmp10 = cResult[4];
    }
    const effect = react.useEffect(tmp9, tmp10);
    let tmp13 = null;
    if (tmp7) {
      let tmp15;
      const _Symbol = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        ({ variant: "text-sm/normal", color: "text-subtle", children: intl.string(intl2.t["2Ab4Id"]) });
        const Text = tmp(4833).Text;
        intl = tmp(1127).intl;
        const tmp18 = <View>{null}</View>;
        cResult[5] = tmp18;
        tmp15 = tmp18;
      } else {
        tmp15 = cResult[5];
      }
      tmp13 = tmp15;
    }
    return tmp13;
  }
  const items = [guildId, fetchGuildProfile];
  cResult[2] = fetchGuildProfile;
  cResult[3] = guildId;
  cResult[4] = items;
  tmp10 = items;
}) : ((guildId) => {
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
    const VISIBLE = tmp(5864).GuildProfileVisibilitySets.VISIBLE;
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
    const Text = tmp(4833).Text;
    intl = tmp(1127).intl;
    tmp9 = <View>{null}</View>;
  }
  return tmp9;
});
const result = size.fileFinishedImporting("modules/channel/native/components/CreateChannelTypeDescription.tsx");

export default tmp2;
