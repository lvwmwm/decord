// Module ID: 10259
// Function ID: 10260
// Name: createAutocompleterResultForChannelId
// Dependencies: [5155, 5248, 1388, 7071, 1072, 5954, 2]
// Exports: default

// Module 10259 (createAutocompleterResultForChannelId)
import Constants from "Constants" /* 1072 */;
import useChannelName from "useChannelName" /* 5954 */;
import autocompleter_AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 7071 */;
import ChannelStore from "ChannelStore" /* 5155 */;
import RelationshipStore from "RelationshipStore" /* 5248 */;
import UserStore from "UserStore" /* 1388 */;
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
