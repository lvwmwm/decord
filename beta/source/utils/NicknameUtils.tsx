// Module ID: 4988
// Function ID: 4989
// Name: NicknameUtils
// Dependencies: [2045, 2108, 4479, 1115, 4678, 504, 2]
// Exports: getNickname, useName

// Module 4988 (NicknameUtils)
import intl2 from "intl" /* 1115 */;
import UserUtilsDefault from "UserUtils" /* 4678 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

function getNickname(id, arg1, id2) {
  if (null == id) {
    return null;
  } else if (null != id) {
    return GuildMemberStore.getNick(id, id.id);
  } else {
    if (null != arg1) {
      const channel = ChannelStore.getChannel(arg1);
      let isPrivateResult;
      if (channel != null) {
        isPrivateResult = channel.isPrivate();
      }
      if (isPrivateResult) {
        return RelationshipStore.getNickname(id.id);
      }
    }
    return null;
  }
}
function getName(id, arg1, id2) {
  let stringResult;
  if (null == id) {
    const intl = intl2.intl;
    stringResult = intl.string(intl2.t.sKdZ6U);
  } else {
    stringResult = null;
    if (null != id) {
      if (null != id) {
        stringResult = GuildMemberStore.getNick(id, id.id);
      } else {
        stringResult = null;
        if (null != arg1) {
          const channel = ChannelStore.getChannel(arg1);
          let isPrivateResult;
          if (channel != null) {
            isPrivateResult = channel.isPrivate();
          }
          stringResult = null;
          if (isPrivateResult) {
            stringResult = RelationshipStore.getNickname(id.id);
          }
        }
      }
    }
    if (stringResult == null) {
      const obj2 = UserUtilsDefault;
      stringResult = obj2.getName(id);
    }
  }
  return stringResult;
}
function useName(arg0, arg1, arg2) {
  let closure_0;
  let closure_2;
  _require = arg0;
  let closure_1 = arg1;
  dependencyMap = arg2;
  const items = [GuildMemberStore, ChannelStore, RelationshipStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => getName(closure_0, closure_1, closure_2));
}
const result = size.fileFinishedImporting("utils/NicknameUtils.tsx");

export default { getNickname, getName, useName };
export { getNickname };
export { getName };
export { useName };
