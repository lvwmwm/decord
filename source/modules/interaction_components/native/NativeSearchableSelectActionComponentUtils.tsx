// Module ID: 7797
// Function ID: 62232
// Name: getChannelIconData
// Dependencies: []
// Exports: transformSearchableSelectOptions

// Module 7797 (getChannelIconData)
function getChannelIconData(channel, guild) {
  if (channel.type === constants.GUILD_CATEGORY) {
    let channelIconWithGuild = importDefault(dependencyMap[12]);
  } else {
    channelIconWithGuild = guild(dependencyMap[13]).getChannelIconWithGuild(channel, guild);
    const obj = guild(dependencyMap[13]);
  }
  return channelIconWithGuild;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
({ ChannelTypes: closure_7, DEFAULT_ROLE_COLOR: closure_8 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/interaction_components/native/NativeSearchableSelectActionComponentUtils.tsx");

export const transformSearchableSelectOptions = function transformSearchableSelectOptions(found, guildId) {
  const guild2 = guild.getGuild(guildId);
  const mapped = found.map((type) => {
    let customIconSrc;
    let unicodeEmoji;
    type = type.type;
    if (arg1(closure_2[5]).SelectOptionType.USER === type) {
      const user = user.getUser(type.value);
      let tmp33 = type;
      if (null != user) {
        let obj = {};
        const merged = Object.assign(type);
        obj["iconSrc"] = arg1(closure_2[7]).ensureAvatarSource(user.getAvatarSource(arg1, false)).uri;
        tmp33 = obj;
        const obj10 = arg1(closure_2[7]);
      }
      return tmp33;
    } else if (arg1(closure_2[5]).SelectOptionType.ROLE === type) {
      let role = null;
      if (null != callback) {
        role = role.getRole(tmp7.id, type.value);
      }
      let tmp11 = type;
      if (null != role) {
        tmp11 = type;
        if (null != tmp7) {
          let roleIconData = null;
          if (obj14.canGuildUseRoleIcons(tmp7, role)) {
            obj = arg1(closure_2[8]);
            roleIconData = obj.getRoleIconData(role);
          }
          if (null == roleIconData) {
            obj = {};
            const merged1 = Object.assign(type);
            let obj2 = arg1(closure_2[7]);
            obj["iconSrc"] = obj2.ensureAvatarSource(callback(closure_2[9])).uri;
            if (null != role.colorString) {
              let obj3 = arg1(closure_2[10]);
              let hex2intResult = obj3.hex2int(role.colorString);
            } else {
              hex2intResult = closure_8;
            }
            obj["iconColor"] = 4278190080 | hex2intResult;
            tmp11 = obj;
          } else {
            ({ customIconSrc, unicodeEmoji } = roleIconData);
            if (null != unicodeEmoji) {
              const obj1 = {};
              const merged2 = Object.assign(type);
              obj2 = {};
              ({ id: obj7.id, name: obj7.name, animated: obj7.animated, url: obj7.src, surrogates: obj7.surrogates } = unicodeEmoji);
              obj1["iconEmoji"] = obj2;
              tmp11 = obj1;
            } else if (null != customIconSrc) {
              obj3 = {};
              const merged3 = Object.assign(type);
              obj3["iconSrc"] = customIconSrc;
              tmp11 = obj3;
            }
          }
          const obj14 = arg1(closure_2[8]);
        }
      }
      return tmp11;
    } else if (arg1(closure_2[5]).SelectOptionType.CHANNEL === type) {
      const channel = channel.getChannel(type.value);
      let tmp6 = type;
      if (null != channel) {
        const obj4 = {};
        const merged4 = Object.assign(type);
        obj4["iconSrc"] = arg1(closure_2[7]).ensureAvatarSource(callback2(channel, callback)).uri;
        const obj12 = arg1(closure_2[7]);
        obj4["iconColor"] = 4278190080 | arg1(closure_2[10]).hex2int(callback(closure_2[11]).unsafe_rawColors.PRIMARY_330);
        tmp6 = obj4;
        const obj13 = arg1(closure_2[10]);
      }
      return tmp6;
    } else {
      return null;
    }
  });
  return mapped.filter(guildId(dependencyMap[6]).isNotNullish);
};
export { getChannelIconData };
