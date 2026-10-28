// Module ID: 9112
// Function ID: 9113
// Name: createAutocompleterResultForChannelId
// Dependencies: [4856, 4946, 1389, 6861, 1084, 5640, 2]
// Exports: default

// Module 9112 (createAutocompleterResultForChannelId)
import Constants from "Constants" /* 1084 */;
import useChannelName from "useChannelName" /* 5640 */;
import autocompleter_AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 6861 */;
import ChannelStore from "ChannelStore" /* 4856 */;
import RelationshipStore from "RelationshipStore" /* 4946 */;
import UserStore from "UserStore" /* 1389 */;
import size from "module_2" /* 2 */;

const AutocompleterResultTypes = autocompleter_AutocompleterConstants.AutocompleterResultTypes;
const ChannelTypes = Constants.ChannelTypes;
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
    const obj8 = useChannelName;
    const channelName = obj8.computeChannelName(channel, obj2, tmp);
    const type = channel.type;
    if (ChannelTypes.DM === type) {
      const user = obj2.getUser(channel.getRecipientId());
      let tmp6 = null;
      if (null != user) {
        tmp6 = { type: AutocompleterResultTypes.USER, record: user, score: 0, comparator: channelName };
        const obj3 = { type: AutocompleterResultTypes.USER, record: user, score: 0, comparator: channelName };
      }
      return tmp6;
    } else if (ChannelTypes.GROUP_DM === type) {
      return { type: AutocompleterResultTypes.GROUP_DM, record: channel, score: 0, comparator: channelName };
    } else {
      if (ChannelTypes.GUILD_VOICE !== type) {
        if (ChannelTypes.GUILD_STAGE_VOICE !== type) {
          return { type: AutocompleterResultTypes.TEXT_CHANNEL, record: channel, score: 0, comparator: channelName };
        }
      }
      return { type: AutocompleterResultTypes.VOICE_CHANNEL, record: channel, score: 0, comparator: channelName };
    }
  }
};
