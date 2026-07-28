// Module ID: 4354
// Function ID: 37968
// Name: getNickname
// Dependencies: [1348, 1918, 3802, 1212, 4004, 566, 2]
// Exports: useName

// Module 4354 (getNickname)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";

const require = arg1;
function getNickname(id, closure_0, user) {
  if (null == user) {
    return null;
  } else if (null != id) {
    return nick.getNick(id, user.id);
  } else {
    if (null != closure_0) {
      channel = channel.getChannel(closure_0);
      if (null != channel) {
        if (channel.isPrivate()) {
          return nickname.getNickname(user.id);
        }
      }
    }
    return null;
  }
}
function getName(id, closure_0, user) {
  if (null == user) {
    const intl = require(1212) /* getSystemLocale */.intl;
    let stringResult = intl.string(require(1212) /* getSystemLocale */.t.sKdZ6U);
  } else {
    stringResult = getNickname(id, closure_0, user);
    if (null == stringResult) {
      stringResult = importDefault(4004).getName(user);
      const obj = importDefault(4004);
    }
  }
  return stringResult;
}
function useName(arg0, arg1, arg2) {
  const _require = arg0;
  let closure_1 = arg1;
  const dependencyMap = arg2;
  const items = [closure_4, _isNativeReflectConstruct, closure_5];
  return _require(566).useStateFromStores(items, () => outer1_7(closure_0, closure_1, closure_2));
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("utils/NicknameUtils.tsx");

export default { getNickname, getName, useName };
export { getNickname };
export { getName };
export { useName };
