// Module ID: 7099
// Function ID: 57071
// Name: createAutocompleterResultForChannelId
// Dependencies: []
// Exports: default

// Module 7099 (createAutocompleterResultForChannelId)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
arg1(dependencyMap[3]).AutocompleterResultTypes;
const ChannelTypes = arg1(dependencyMap[4]).ChannelTypes;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/autocompleter/createAutocompleterResultForChannelId.tsx");

export default function createAutocompleterResultForChannelId(channelId, arg1, closure_11, closure_12) {
  let obj = arg1;
  let obj1 = closure_11;
  let tmp = closure_12;
  if (arg1 === undefined) {
    obj = closure_2;
  }
  if (obj1 === undefined) {
    obj1 = closure_4;
  }
  if (tmp === undefined) {
    tmp = closure_3;
  }
  const channel = obj.getChannel(channelId);
  if (null == channel) {
    return null;
  } else {
    const channelName = arg1(dependencyMap[5]).computeChannelName(channel, obj1, tmp);
    const type = channel.type;
    if (ChannelTypes.DM === type) {
      const user = obj1.getUser(channel.getRecipientId());
      let tmp8 = null;
      if (null != user) {
        obj = { type: AutocompleterResultTypes.USER, record: user, score: 0, comparator: channelName };
        tmp8 = obj;
      }
      return tmp8;
    } else if (ChannelTypes.GROUP_DM === type) {
      obj = { type: AutocompleterResultTypes.GROUP_DM, record: channel, score: 0, comparator: channelName };
      return obj;
    } else {
      if (ChannelTypes.GUILD_VOICE !== type) {
        if (ChannelTypes.GUILD_STAGE_VOICE !== type) {
          obj1 = { type: AutocompleterResultTypes.TEXT_CHANNEL, record: channel, score: 0, comparator: channelName };
          return obj1;
        }
      }
      const obj2 = { type: AutocompleterResultTypes.VOICE_CHANNEL, record: channel, score: 0, comparator: channelName };
      return obj2;
    }
    const obj8 = arg1(dependencyMap[5]);
  }
};
