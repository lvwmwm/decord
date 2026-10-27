// Module ID: 8984
// Function ID: 8985
// Name: createAutocompleterResultForChannelId
// Dependencies: [2068, 4855, 1392, 6372, 1087, 5521, 2]
// Exports: default

// Module 8984 (createAutocompleterResultForChannelId)
import Constants from "Constants" /* 1087 */;
import useChannelName from "useChannelName" /* 5521 */;
import autocompleter_AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 6372 */;
import ChannelStore from "ChannelStore" /* 2068 */;
import RelationshipStore from "RelationshipStore" /* 4855 */;
import UserStore from "UserStore" /* 1392 */;
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
