// Module ID: 13323
// Function ID: 13324
// Name: getChannelIcon
// Dependencies: [32, 1372, 1074, 1370, 1397, 2]
// Exports: getChannelIconSource, getChannelIconURL

// Module 13323 (getChannelIcon)
import GlobalUtils from "GlobalUtils" /* 1370 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import _slicedToArray from "module_32" /* 32 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const ChannelTypes = fn(1074).ChannelTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel/getChannelIcon.tsx");

export const getChannelIconURL = function getChannelIconURL(type) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 32;
  }
  type = type.type;
  if (ChannelTypes.DM === type) {
    const recipients = type.recipients;
    const mapped = recipients.map(UserStore.getUser);
    const first = _slicedToArray(mapped.filter(GlobalUtils.isNotNullish), 1)[0];
    let avatarURL = null;
    if (null != first) {
      avatarURL = first.getAvatarURL(undefined, num, arg2);
    }
    return avatarURL;
  } else if (tmp.GROUP_DM === type) {
    const obj3 = { id: null, icon: null, applicationId: null, size: null };
    ({ id: obj2.id, icon: obj2.icon } = type);
    obj3.applicationId = type.getApplicationId();
    obj3.size = num;
    return AvatarUtilsDefault.getChannelIconURL(obj3);
  }
};
export const getChannelIconSource = function getChannelIconSource(type) {
  type = type.type;
  if (ChannelTypes.DM === type) {
    const recipients = type.recipients;
    const mapped = recipients.map(UserStore.getUser);
    const first = _slicedToArray(mapped.filter(GlobalUtils.isNotNullish), 1)[0];
    let avatarSource = null;
    if (null != first) {
      avatarSource = first.getAvatarSource(undefined);
    }
    return avatarSource;
  } else if (tmp.GROUP_DM === type) {
    const obj3 = { id: null, icon: null, applicationId: null, size: 128 };
    ({ id: obj2.id, icon: obj2.icon } = type);
    obj3.applicationId = type.getApplicationId();
    return AvatarUtilsDefault.getChannelIconSource(obj3);
  }
};
