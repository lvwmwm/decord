// Module ID: 14882
// Function ID: 14883
// Name: getChannelIcon
// Dependencies: [32, 1383, 1072, 1379, 1409, 2]
// Exports: getChannelIconSource, getChannelIconURL

// Module 14882 (getChannelIcon)
import Constants from "Constants" /* 1072 */;
import GlobalUtils from "GlobalUtils" /* 1379 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1409 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import UserStore from "UserStore" /* 1383 */;
import size from "module_2" /* 2 */;

const ChannelTypes = Constants.ChannelTypes;
const result = size.fileFinishedImporting("modules/channel/getChannelIcon.tsx");

export function getChannelIconURL(type) {
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
    const obj = { id: null, icon: null, applicationId: type.getApplicationId(), size: num };
    ({ id: obj.id, icon: obj.icon } = type);
    const getChannelIconURL = AvatarUtilsDefault.getChannelIconURL;
    AvatarUtilsDefault;
    return getChannelIconURL(obj);
  }
}
export function getChannelIconSource(type) {
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
    const obj = { id: null, icon: null, applicationId: type.getApplicationId(), size: 128 };
    ({ id: obj.id, icon: obj.icon } = type);
    const getChannelIconSource = AvatarUtilsDefault.getChannelIconSource;
    AvatarUtilsDefault;
    return getChannelIconSource(obj);
  }
}
