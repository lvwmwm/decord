// Module ID: 11953
// Function ID: 92395
// Name: getChannelIconURL
// Dependencies: [57, 1849, 653, 1327, 1392, 2]
// Exports: getChannelIconSource, getChannelIconURL

// Module 11953 (getChannelIconURL)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ChannelTypes } from "ME";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/channel/getChannelIcon.tsx");

export const getChannelIconURL = function getChannelIconURL(type, canRing, animate) {
  let num = canRing;
  if (canRing === undefined) {
    num = 32;
  }
  type = type.type;
  if (ChannelTypes.DM === type) {
    const recipients = type.recipients;
    const mapped = recipients.map(_isNativeReflectConstruct.getUser);
    const first = callback(mapped.filter(require(1327) /* isDiscordFrontendDevelopment */.isNotNullish), 1)[0];
    let avatarURL = null;
    if (null != first) {
      avatarURL = first.getAvatarURL(undefined, num, animate);
    }
    return avatarURL;
  } else if (ChannelTypes.GROUP_DM === type) {
    let obj = importDefault(1392);
    obj = {};
    ({ id: obj2.id, icon: obj2.icon } = type);
    obj.applicationId = type.getApplicationId();
    obj.size = num;
    return obj.getChannelIconURL(obj);
  }
};
export const getChannelIconSource = function getChannelIconSource(type) {
  type = type.type;
  if (ChannelTypes.DM === type) {
    const recipients = type.recipients;
    const mapped = recipients.map(_isNativeReflectConstruct.getUser);
    const first = callback(mapped.filter(require(1327) /* isDiscordFrontendDevelopment */.isNotNullish), 1)[0];
    let avatarSource = null;
    if (null != first) {
      avatarSource = first.getAvatarSource(undefined);
    }
    return avatarSource;
  } else if (ChannelTypes.GROUP_DM === type) {
    let obj = importDefault(1392);
    obj = {};
    ({ id: obj2.id, icon: obj2.icon } = type);
    obj.applicationId = type.getApplicationId();
    obj.size = 128;
    return obj.getChannelIconSource(obj);
  }
};
