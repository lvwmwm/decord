// Module ID: 4321
// Function ID: 37860
// Name: canViewChannel
// Dependencies: [1348, 1838, 3758, 653, 1355, 4118, 2]
// Exports: isAccessibleChannelPath, tryParseChannelPath, tryParseDiceRollLink, tryParseEventDetailsPath

// Module 4321 (canViewChannel)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_4 from "_isNativeReflectConstruct";
import ME from "ME";

function canViewChannel(isPrivate) {
  const tmp = !isPrivate.isPrivate();
  let canResult = !tmp;
  if (tmp) {
    canResult = closure_4.can(Permissions.VIEW_CHANNEL, isPrivate);
  }
  return canResult;
}
ME = ME.ME;
const Permissions = ME.Permissions;
const mapped = Array.from(require("set").StaticChannelRoutes).map((arg0) => importDefault(4118).escape(arg0));
const joined = mapped.join("|");
const regExp = new RegExp("^/channels/(\\d+|" + ME + ")(?:/)?(\\d+|" + joined + ")?");
const regExp1 = new RegExp("^/channels/(\\d+|" + ME + ")(?:/)(\\d+|" + joined + ")(?:/)(\\d+)");
const regExp2 = new RegExp("^/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)");
const regExp3 = new RegExp("^/channels/(\\d+|" + ME + ")(?:/)(\\d+)/roll-dice(?:/(\\d+)d(\\d+))?$");
const regExp4 = new RegExp("^/guild-stages/(\\d+)(?:/)?(\\d+)?");
const regExp5 = new RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?");
const regExp6 = new RegExp("^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/channels/(\\d+|" + ME + ")(?:/(\\d+|[a-zA-Z-]+))?(?:/(\\d+|[a-zA-Z-]+))?");
const regExp7 = new RegExp("^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)");
const arr = Array.from(require("set").StaticChannelRoutes);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/links/LinkUtils.tsx");

export const CHANNEL_OR_MESSAGES_URL_RE = regExp6;
export const MEDIA_POST_URL_RE = regExp7;
export const tryParseChannelPath = function tryParseChannelPath(pathname) {
  if (null == pathname) {
    return null;
  } else {
    const match = pathname.match(regExp1);
    if (null != match) {
      if (match.length > 3) {
        let obj = { guildId: match[1], channelId: match[2], messageId: match[3] };
        return obj;
      }
    }
    const match1 = pathname.match(regExp2);
    if (null != match1) {
      if (match1.length > 4) {
        obj = { guildId: match1[1], channelId: match1[2], threadId: match1[3], messageId: match1[4] };
        return obj;
      }
    }
    const match2 = pathname.match(regExp);
    if (null != match2) {
      if (match2.length > 1) {
        obj = { guildId: match2[1] };
        let tmp7;
        if (null != match2[2]) {
          tmp7 = tmp6;
        }
        obj.channelId = tmp7;
        let tmp5 = obj;
      }
      return tmp5;
    }
    const match3 = pathname.match(regExp4);
    tmp5 = null;
  }
};
export const tryParseEventDetailsPath = function tryParseEventDetailsPath(pathname) {
  if (null == pathname) {
    return null;
  } else {
    const match = pathname.match(regExp5);
    let tmp2 = null;
    if (null != match) {
      tmp2 = null;
      if (match.length > 1) {
        const obj = { guildId: match[1], guildEventId: match[2], recurrenceId: match[4] };
        tmp2 = obj;
      }
    }
    return tmp2;
  }
};
export { canViewChannel };
export const isAccessibleChannelPath = function isAccessibleChannelPath(arg0) {
  let channelId;
  let guildId;
  ({ guildId, channelId } = arg0);
  if (null == guild.getGuild(guildId)) {
    if (guildId !== ME) {
      return false;
    }
  }
  if (null == channelId) {
    return true;
  } else {
    channel = channel.getChannel(channelId);
    let tmp4 = null != channel;
    if (tmp4) {
      tmp4 = canViewChannel(channel);
    }
    return tmp4;
  }
};
export const tryParseDiceRollLink = function tryParseDiceRollLink(pathname) {
  if (null == pathname) {
    return null;
  } else {
    const match = pathname.match(regExp3);
    let tmp = null;
    if (null != match) {
      tmp = null;
      if (match.length > 2) {
        const obj = {};
        let num2 = 1;
        obj.guildId = match[1];
        obj.channelId = match[2];
        if (5 === match.length) {
          const _parseInt = parseInt;
          num2 = parseInt(match[3], 10);
        }
        obj.diceCount = num2;
        let num6 = 6;
        if (5 === match.length) {
          const _parseInt2 = parseInt;
          num6 = parseInt(match[4], 10);
        }
        obj.diceSides = num6;
        tmp = obj;
      }
    }
    return tmp;
  }
};
