// Module ID: 4320
// Function ID: 37846
// Name: computeDefaultGroupDmNameFromUserIds
// Dependencies: [57, 4044, 3767, 1849, 653, 1327, 3969, 1212, 566, 2]
// Exports: computeGroupDmName, default, unescapeChannelName, useComputedGroupDmName

// Module 4320 (computeDefaultGroupDmNameFromUserIds)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { ChannelTypes } from "ME";

const require = arg1;
function computeDefaultGroupDmNameFromUserIds(recipients, getUser, closure_7) {
  const _require = closure_7;
  const mapped = recipients.map(getUser.getUser);
  const found = mapped.filter(_require(1327).isNotNullish);
  const mapped1 = found.map((id) => {
    nickname = nickname.getNickname(id.id);
    if (null == nickname) {
      nickname = outer1_1(outer1_2[6]).getName(id);
      const obj = outer1_1(outer1_2[6]);
    }
    return nickname;
  });
  if (mapped1.length > 0) {
    let joined = mapped1.join(", ");
  } else {
    const intl = _require(1212).intl;
    let obj = { name: importDefault(3969).getName(getUser.getCurrentUser()) };
    joined = intl.formatToPlainString(_require(1212).t["9Uk8PF"], obj);
    const obj2 = importDefault(3969);
  }
  return joined;
}
function computeDefaultGroupDmName(recipients, closure_14, closure_7) {
  return computeDefaultGroupDmNameFromUserIds(recipients.recipients, closure_14, closure_7);
}
function computeChannelName(channel, closure_14, closure_7, arg3, arg4) {
  let flag = arg3;
  let flag2 = arg4;
  if (arg3 === undefined) {
    flag = false;
  }
  if (flag2 === undefined) {
    flag2 = false;
  }
  function maybeFormatDmName(name) {
    let combined = name;
    if (flag) {
      const _HermesInternal = HermesInternal;
      combined = "@" + name;
    }
    return combined;
  }
  const name = channel.name;
  if (channel.isObfuscated()) {
    const intl = flag(1212).intl;
    return intl.string(flag(1212).t["/YzI63"]);
  } else {
    const type = channel.type;
    if (ChannelTypes.DM === type) {
      if ("" !== name) {
        return maybeFormatDmName(name);
      } else {
        const recipients = channel.recipients;
        const mapped = recipients.map(closure_14.getUser);
        const first = callback(mapped.filter(flag(1327).isNotNullish), 1)[0];
        if (null == first) {
          return "???";
        } else {
          if (first.isProvisional) {
            if (null != first.globalName) {
              return first.globalName;
            }
          }
          let nickname = closure_7.getNickname(first.id);
          if (null == nickname) {
            nickname = importDefault(3969).getName(first);
            const obj = importDefault(3969);
          }
          let str7 = "???";
          if (null != nickname) {
            str7 = nickname;
          }
          return maybeFormatDmName(str7);
        }
      }
    } else if (ChannelTypes.GROUP_DM === type) {
      let tmp13 = name;
      if ("" === name) {
        tmp13 = computeDefaultGroupDmName(channel, closure_14, closure_7);
      }
      return tmp13;
    } else {
      if (ChannelTypes.GUILD_ANNOUNCEMENT !== type) {
        if (ChannelTypes.GUILD_TEXT !== type) {
          if (ChannelTypes.GUILD_FORUM !== type) {
            if (ChannelTypes.GUILD_MEDIA !== type) {
              if (ChannelTypes.PUBLIC_THREAD !== type) {
                if (ChannelTypes.PRIVATE_THREAD !== type) {
                  if (ChannelTypes.ANNOUNCEMENT_THREAD !== type) {
                    if (ChannelTypes.GUILD_VOICE !== type) {
                      if (ChannelTypes.GUILD_STAGE_VOICE !== type) {
                        if (ChannelTypes.GUILD_CATEGORY !== type) {
                          return name;
                        }
                      }
                    }
                  }
                }
              }
              if (flag2) {
                const _HermesInternal2 = HermesInternal;
                let combined = "#\"" + escapeChannelName(name) + "\"";
              } else {
                combined = name;
                if (flag) {
                  combined = name;
                  if (channel.isThread()) {
                    let _HermesInternal = HermesInternal;
                    combined = "\"" + name + "\"";
                  }
                }
              }
              return combined;
            }
          }
        }
      }
      let combined1 = name;
      if (flag) {
        const _HermesInternal3 = HermesInternal;
        combined1 = "#" + name;
      }
      return combined1;
    }
  }
}
function escapeChannelName(channelName) {
  return channelName.replace(/\\/g, "\\\\").replace(/"/g, "\\\"");
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/channel/useChannelName.tsx");

export default function useChannelName(arg0) {
  let flag = arg1;
  const _require = arg0;
  if (arg1 === undefined) {
    flag = false;
  }
  const items = [closure_6, _isNativeReflectConstruct, closure_5];
  return _require(566).useStateFromStores(items, () => {
    let tmp = null;
    if (null != closure_0) {
      tmp = outer1_10(closure_0, outer1_6, outer1_5, flag);
    }
    return tmp;
  });
};
export { computeDefaultGroupDmNameFromUserIds };
export { computeDefaultGroupDmName };
export const useComputedGroupDmName = function useComputedGroupDmName(arg0) {
  const _require = arg0;
  const items = [closure_6, closure_5];
  return _require(566).useStateFromStores(items, () => {
    let tmp = null;
    if (null != multiUserDM) {
      tmp = null;
      if (multiUserDM.isMultiUserDM()) {
        tmp = outer1_9(multiUserDM, outer1_6, outer1_5);
      }
    }
    return tmp;
  });
};
export const computeGroupDmName = function computeGroupDmName(isObfuscated) {
  if (!isObfuscated.isObfuscated()) {
    if (isObfuscated.isMultiUserDM()) {
      const name = isObfuscated.name;
      let tmp;
      if ("" !== name) {
        tmp = name;
      }
      return tmp;
    }
  }
};
export { computeChannelName };
export { escapeChannelName };
export const unescapeChannelName = function unescapeChannelName(closure_0) {
  return closure_0.replace(/\\"/g, "\"").replace(/\\\\/g, "\\");
};
