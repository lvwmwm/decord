// Module ID: 4312
// Function ID: 37750
// Name: computeDefaultGroupDmNameFromUserIds
// Dependencies: []
// Exports: computeGroupDmName, default, unescapeChannelName, useComputedGroupDmName

// Module 4312 (computeDefaultGroupDmNameFromUserIds)
function computeDefaultGroupDmNameFromUserIds(recipients, getUser, closure_12) {
  getUser = closure_12;
  const mapped = recipients.map(getUser.getUser);
  const found = mapped.filter(getUser(dependencyMap[5]).isNotNullish);
  const mapped1 = found.map((id) => {
    let nickname = arg2.getNickname(id.id);
    if (null == nickname) {
      nickname = callback(closure_2[6]).getName(id);
      const obj = callback(closure_2[6]);
    }
    return nickname;
  });
  if (mapped1.length > 0) {
    let joined = mapped1.join(", ");
  } else {
    const intl = getUser(dependencyMap[7]).intl;
    const obj = { name: importDefault(dependencyMap[6]).getName(getUser.getCurrentUser()) };
    joined = intl.formatToPlainString(getUser(dependencyMap[7]).t.9Uk8PF, obj);
    const obj2 = importDefault(dependencyMap[6]);
  }
  return joined;
}
function computeDefaultGroupDmName(recipients, closure_11, closure_12) {
  return computeDefaultGroupDmNameFromUserIds(recipients.recipients, closure_11, closure_12);
}
function computeChannelName(channel, closure_11, closure_12, arg3, arg4) {
  let flag = arg3;
  let flag2 = arg4;
  if (arg3 === undefined) {
    flag = false;
  }
  closure_11 = flag;
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
    const intl = closure_11(dependencyMap[7]).intl;
    return intl.string(closure_11(dependencyMap[7]).t./YzI63);
  } else {
    const type = channel.type;
    if (ChannelTypes.DM === type) {
      if ("" !== name) {
        return maybeFormatDmName(name);
      } else {
        const recipients = channel.recipients;
        const mapped = recipients.map(closure_11.getUser);
        const first = callback(mapped.filter(closure_11(dependencyMap[5]).isNotNullish), 1)[0];
        if (null == first) {
          return "???";
        } else {
          if (first.isProvisional) {
            if (null != first.globalName) {
              return first.globalName;
            }
          }
          let nickname = closure_12.getNickname(first.id);
          if (null == nickname) {
            nickname = importDefault(dependencyMap[6]).getName(first);
            const obj = importDefault(dependencyMap[6]);
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
        tmp13 = computeDefaultGroupDmName(channel, closure_11, closure_12);
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
                    const _HermesInternal = HermesInternal;
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const ChannelTypes = arg1(dependencyMap[4]).ChannelTypes;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/channel/useChannelName.tsx");

export default function useChannelName(arg0) {
  let flag = arg1;
  const arg1 = arg0;
  if (arg1 === undefined) {
    flag = false;
  }
  const importDefault = flag;
  const items = [closure_6, closure_4, closure_5];
  return arg1(dependencyMap[8]).useStateFromStores(items, () => {
    let tmp = null;
    if (null != arg0) {
      tmp = callback(arg0, closure_6, closure_5, flag);
    }
    return tmp;
  });
};
export { computeDefaultGroupDmNameFromUserIds };
export { computeDefaultGroupDmName };
export const useComputedGroupDmName = function useComputedGroupDmName(arg0) {
  const arg1 = arg0;
  const items = [closure_6, closure_5];
  return arg1(dependencyMap[8]).useStateFromStores(items, () => {
    let tmp = null;
    if (null != arg0) {
      tmp = null;
      if (arg0.isMultiUserDM()) {
        tmp = callback(arg0, closure_6, closure_5);
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
