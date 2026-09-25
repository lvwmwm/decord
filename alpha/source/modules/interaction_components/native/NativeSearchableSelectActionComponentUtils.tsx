// Module ID: 7571
// Function ID: 7572
// Name: NativeSearchableSelectActionComponentUtils
// Dependencies: [2044, 2101, 2066, 1372, 1074, 5060, 1370, 1400, 6603, 7572, 1092, 576, 7573, 5328, 2]
// Exports: getChannelIconData, transformSearchableSelectOptions

// Module 7571 (NativeSearchableSelectActionComponentUtils)
import nativeDefault from "native" /* 576 */;
import InteractionComponentTypes from "InteractionComponentTypes" /* 5060 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5328 */;
import _modDef7572 from "module_7572" /* 7572 */;
import _modDef7573 from "module_7573" /* 7573 */;
import ChannelStore from "ChannelStore" /* 2044 */;
import GuildRoleStore from "GuildRoleStore" /* 2101 */;
import GuildStore from "GuildStore" /* 2066 */;
import UserStore from "UserStore" /* 1372 */;

const require = globalThis.__r;

require = fn;
const Constants = fn(1074);
({ ChannelTypes: closure_7, DEFAULT_ROLE_COLOR: closure_8 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/interaction_components/native/NativeSearchableSelectActionComponentUtils.tsx");

export const transformSearchableSelectOptions = function transformSearchableSelectOptions(initialSnowflakeSelectOptions, guildId) {
  _require = guildId;
  const guild = GuildStore.getGuild(guildId);
  const mapped = initialSnowflakeSelectOptions.map((type) => {
    type = type.type;
    if (InteractionComponentTypes.SelectOptionType.USER === type) {
      const user = UserStore.getUser(type.value);
      let tmp34 = type;
      if (null != user) {
        const obj = {};
        const merged = Object.assign(type);
        obj.iconSrc = tmp(1400).ensureAvatarSource(user.getAvatarSource(closure_0, false)).uri;
        tmp34 = obj;
        const tmpResult = tmp(1400);
      }
      return tmp34;
    } else if (tmp(5060).SelectOptionType.ROLE === type) {
      let role = null;
      if (null != closure_1) {
        role = GuildRoleStore.getRole(tmp14.id, type.value);
      }
      let tmp18 = type;
      if (null != role) {
        tmp18 = type;
        if (null != tmp14) {
          let roleIconData = null;
          if (tmpResult7.canGuildUseRoleIcons(tmp14, role)) {
            roleIconData = tmp(6603).getRoleIconData(role);
            const tmpResult8 = tmp(6603);
          }
          if (null == roleIconData) {
            const obj2 = {};
            const merged1 = Object.assign(type);
            obj2.iconSrc = tmp(1400).ensureAvatarSource(_modDef7572).uri;
            if (null != role.colorString) {
              let hex2intResult = tmp(1092).hex2int(role.colorString);
              const tmpResult10 = tmp(1092);
            } else {
              hex2intResult = React6;
            }
            obj2.iconColor = 4278190080 | hex2intResult;
            tmp18 = obj2;
            const tmpResult9 = tmp(1400);
          } else {
            ({ customIconSrc, unicodeEmoji } = roleIconData);
            if (null != unicodeEmoji) {
              const obj3 = {};
              const merged2 = Object.assign(type);
              ({ id: obj8.id, name: obj8.name, animated: obj8.animated, url: obj8.src, surrogates: obj8.surrogates } = unicodeEmoji);
              obj3.iconEmoji = { id: null, name: null, animated: null, src: null, surrogates: null };
              tmp18 = obj3;
              const obj4 = { id: null, name: null, animated: null, src: null, surrogates: null };
            } else if (null != customIconSrc) {
              const obj5 = {};
              const merged3 = Object.assign(type);
              obj5.iconSrc = customIconSrc;
              tmp18 = obj5;
            }
          }
          tmpResult7 = tmp(6603);
        }
      }
      return tmp18;
    } else if (tmp(5060).SelectOptionType.CHANNEL === type) {
      const channel = ChannelStore.getChannel(type.value);
      if (null == channel) {
        return type;
      } else {
        const obj6 = {};
        const merged4 = Object.assign(type);
        let tmpResult11 = tmp(1400);
        let hex2int = tmpResult11.ensureAvatarSource;
        if (channel.type === constants.GUILD_CATEGORY) {
          let channelIconWithGuild = _modDef7573;
        } else {
          channelIconWithGuild = tmp(5328).getChannelIconWithGuild(channel, tmp4);
          const tmpResult12 = tmp(5328);
        }
        obj6.iconSrc = hex2int(channelIconWithGuild).uri;
        tmpResult11 = tmp(1092);
        hex2int = tmpResult11.hex2int;
        obj6.iconColor = 4278190080 | hex2int(nativeDefault.unsafe_rawColors.PRIMARY_330);
      }
      tmp4 = closure_1;
    } else {
      return null;
    }
  });
  return mapped.filter(require("GlobalUtils").isNotNullish);
};
export const getChannelIconData = function getChannelIconData(channel, guild) {
  if (channel.type === constants.GUILD_CATEGORY) {
    let channelIconWithGuild = _modDef7573;
  } else {
    channelIconWithGuild = utils_ChannelUtils.getChannelIconWithGuild(channel, guild);
  }
  return channelIconWithGuild;
};
