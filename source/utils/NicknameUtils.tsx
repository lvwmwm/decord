// Module ID: 4311
// Function ID: 37745
// Name: getNickname
// Dependencies: []
// Exports: useName

// Module 4311 (getNickname)
function getNickname(id, channelId, user) {
  if (null == user) {
    return null;
  } else if (null != id) {
    return nick.getNick(id, user.id);
  } else {
    if (null != channelId) {
      const channel = channel.getChannel(channelId);
      if (null != channel) {
        if (channel.isPrivate()) {
          return nickname.getNickname(user.id);
        }
      }
    }
    return null;
  }
}
function getName(id, channelId, user) {
  if (null == user) {
    const intl = channelId(dependencyMap[3]).intl;
    let stringResult = intl.string(channelId(dependencyMap[3]).t.sKdZ6U);
  } else {
    stringResult = getNickname(id, channelId, user);
    if (null == stringResult) {
      stringResult = importDefault(dependencyMap[4]).getName(user);
      const obj = importDefault(dependencyMap[4]);
    }
  }
  return stringResult;
}
function useName(arg0, arg1, arg2) {
  arg1 = arg0;
  const importDefault = arg1;
  const dependencyMap = arg2;
  const items = [closure_4, closure_3, closure_5];
  return arg1(dependencyMap[5]).useStateFromStores(items, () => callback(arg0, arg1, arg2));
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("utils/NicknameUtils.tsx");

export default { getNickname, getName, useName };
export { getNickname };
export { getName };
export { useName };
