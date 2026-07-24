// Module ID: 7104
// Function ID: 57141
// Name: createAutocompleterResultForChannelId
// Dependencies: [1348, 3767, 1849, 5043, 653, 4320, 2]
// Exports: default

// Module 7104 (createAutocompleterResultForChannelId)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { ChannelTypes } from "ME";

const require = arg1;
require("HeaderRecord").AutocompleterResultTypes;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/autocompleter/createAutocompleterResultForChannelId.tsx");

export default function createAutocompleterResultForChannelId(channelId, arg1, closure_14, closure_7) {
  let obj = arg1;
  let obj1 = closure_14;
  let tmp = closure_7;
  if (arg1 === undefined) {
    obj = _isNativeReflectConstruct;
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
    const channelName = require(4320) /* computeDefaultGroupDmNameFromUserIds */.computeChannelName(channel, obj1, tmp);
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
    const obj8 = require(4320) /* computeDefaultGroupDmNameFromUserIds */;
  }
};
