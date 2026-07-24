// Module ID: 7895
// Function ID: 62613
// Name: getChannelIconData
// Dependencies: [1348, 1910, 1838, 1849, 653, 4359, 1327, 1395, 5487, 7896, 665, 689, 7897, 4593, 2]
// Exports: transformSearchableSelectOptions

// Module 7895 (getChannelIconData)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_5 from "_createForOfIteratorHelperLoose";
import closure_6 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_7;
let closure_8;
const require = arg1;
function getChannelIconData(channel, guild) {
  if (channel.type === constants.GUILD_CATEGORY) {
    let channelIconWithGuild = importDefault(7897);
  } else {
    channelIconWithGuild = require(4593) /* getThreadChannelIcon */.getChannelIconWithGuild(channel, guild);
    const obj = require(4593) /* getThreadChannelIcon */;
  }
  return channelIconWithGuild;
}
({ ChannelTypes: closure_7, DEFAULT_ROLE_COLOR: closure_8 } = ME);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/interaction_components/native/NativeSearchableSelectActionComponentUtils.tsx");

export const transformSearchableSelectOptions = function transformSearchableSelectOptions(found, guildId) {
  const _require = guildId;
  const guild2 = guild.getGuild(guildId);
  const mapped = found.map((type) => {
    let customIconSrc;
    let unicodeEmoji;
    type = type.type;
    if (guildId(outer1_2[5]).SelectOptionType.USER === type) {
      const user = outer1_6.getUser(type.value);
      let tmp33 = type;
      if (null != user) {
        let obj = {};
        const merged = Object.assign(type);
        obj["iconSrc"] = guildId(outer1_2[7]).ensureAvatarSource(user.getAvatarSource(guildId, false)).uri;
        tmp33 = obj;
        const obj10 = guildId(outer1_2[7]);
      }
      return tmp33;
    } else if (guildId(outer1_2[5]).SelectOptionType.ROLE === type) {
      let role = null;
      if (null != callback) {
        role = outer1_4.getRole(tmp7.id, type.value);
      }
      let tmp11 = type;
      if (null != role) {
        tmp11 = type;
        if (null != tmp7) {
          let roleIconData = null;
          if (obj14.canGuildUseRoleIcons(tmp7, role)) {
            obj = guildId(outer1_2[8]);
            roleIconData = obj.getRoleIconData(role);
          }
          if (null == roleIconData) {
            obj = {};
            const merged1 = Object.assign(type);
            let obj2 = guildId(outer1_2[7]);
            obj["iconSrc"] = obj2.ensureAvatarSource(callback(outer1_2[9])).uri;
            if (null != role.colorString) {
              let obj3 = guildId(outer1_2[10]);
              let hex2intResult = obj3.hex2int(role.colorString);
            } else {
              hex2intResult = outer1_8;
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
          obj14 = guildId(outer1_2[8]);
        }
      }
      return tmp11;
    } else if (guildId(outer1_2[5]).SelectOptionType.CHANNEL === type) {
      const channel = outer1_3.getChannel(type.value);
      let tmp6 = type;
      if (null != channel) {
        const obj4 = {};
        const merged4 = Object.assign(type);
        obj4["iconSrc"] = guildId(outer1_2[7]).ensureAvatarSource(outer1_9(channel, callback)).uri;
        const obj12 = guildId(outer1_2[7]);
        obj4["iconColor"] = 4278190080 | guildId(outer1_2[10]).hex2int(callback(outer1_2[11]).unsafe_rawColors.PRIMARY_330);
        tmp6 = obj4;
        const obj13 = guildId(outer1_2[10]);
      }
      return tmp6;
    } else {
      return null;
    }
  });
  return mapped.filter(_require(1327).isNotNullish);
};
export { getChannelIconData };
