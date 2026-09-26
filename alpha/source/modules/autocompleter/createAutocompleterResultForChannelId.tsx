// Module ID: 9299
// Function ID: 9300
// Name: createAutocompleterResultForChannelId
// Dependencies: [2045, 4479, 1372, 5827, 1074, 4989, 2]
// Exports: default

// Module 9299 (createAutocompleterResultForChannelId)
import useChannelName from "useChannelName" /* 4989 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
fn(5827).AutocompleterResultTypes;
const ChannelTypes = fn(1074).ChannelTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/autocompleter/createAutocompleterResultForChannelId.tsx");

export default function createAutocompleterResultForChannelId(arg0, arg1, UserStore, RelationshipStore) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = ChannelStore;
  }
  let obj2 = UserStore;
  if (UserStore === undefined) {
    obj2 = UserStore;
  }
  let tmp = RelationshipStore;
  if (RelationshipStore === undefined) {
    tmp = RelationshipStore;
  }
  const channel = obj.getChannel(arg0);
  if (null == channel) {
    return null;
  } else {
    const channelName = useChannelName.computeChannelName(channel, obj2, tmp);
    const type = channel.type;
    if (ChannelTypes.DM === type) {
      const user = obj2.getUser(channel.getRecipientId());
      let tmp6 = null;
      if (null != user) {
        const obj3 = { type: AutocompleterResultTypes.USER, record: user, score: 0, comparator: channelName };
        tmp6 = obj3;
      }
      return tmp6;
    } else if (tmp11.GROUP_DM === type) {
      const obj4 = { type: AutocompleterResultTypes.GROUP_DM, record: channel, score: 0, comparator: channelName };
      return obj4;
    } else {
      if (tmp11.GUILD_VOICE !== type) {
        if (tmp11.GUILD_STAGE_VOICE !== type) {
          const obj5 = { type: AutocompleterResultTypes.TEXT_CHANNEL, record: channel, score: 0, comparator: channelName };
          return obj5;
        }
      }
      const obj6 = { type: AutocompleterResultTypes.VOICE_CHANNEL, record: channel, score: 0, comparator: channelName };
      return obj6;
    }
  }
};
