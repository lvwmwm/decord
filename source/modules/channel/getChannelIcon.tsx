// Module ID: 11940
// Function ID: 92316
// Name: getChannelIconURL
// Dependencies: []
// Exports: getChannelIconSource, getChannelIconURL

// Module 11940 (getChannelIconURL)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const ChannelTypes = arg1(dependencyMap[2]).ChannelTypes;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/channel/getChannelIcon.tsx");

export const getChannelIconURL = function getChannelIconURL(type, closure_10, animate) {
  let num = closure_10;
  if (closure_10 === undefined) {
    num = 32;
  }
  type = type.type;
  if (ChannelTypes.DM === type) {
    const recipients = type.recipients;
    const mapped = recipients.map(closure_4.getUser);
    const first = callback(mapped.filter(closure_10(dependencyMap[3]).isNotNullish), 1)[0];
    let avatarURL = null;
    if (null != first) {
      avatarURL = first.getAvatarURL(undefined, num, animate);
    }
    return avatarURL;
  } else if (ChannelTypes.GROUP_DM === type) {
    let obj = importDefault(dependencyMap[4]);
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
    const mapped = recipients.map(closure_4.getUser);
    const first = callback(mapped.filter(arg1(dependencyMap[3]).isNotNullish), 1)[0];
    let avatarSource = null;
    if (null != first) {
      avatarSource = first.getAvatarSource(undefined);
    }
    return avatarSource;
  } else if (ChannelTypes.GROUP_DM === type) {
    let obj = importDefault(dependencyMap[4]);
    obj = {};
    ({ id: obj2.id, icon: obj2.icon } = type);
    obj.applicationId = type.getApplicationId();
    obj.size = 128;
    return obj.getChannelIconSource(obj);
  }
};
