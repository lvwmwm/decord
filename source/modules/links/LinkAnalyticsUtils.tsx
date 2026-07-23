// Module ID: 8341
// Function ID: 66088
// Name: _createForOfIteratorHelperLoose
// Dependencies: [653, 8342, 1443, 4321, 675, 2]

// Module 8341 (_createForOfIteratorHelperLoose)
import { AnalyticEvents } from "ME";

function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function getDiscordLinkTypeFromMetadata(guildId) {
  if (null != guildId.guildId) {
    if (null != guildId.channelId) {
      if (null != guildId.messageId) {
        let UNKNOWN = constants.MESSAGE;
      }
      return UNKNOWN;
    }
  }
  if (null != guildId.guildId) {
    if (null != guildId.channelId) {
      UNKNOWN = constants.CHANNEL;
    }
  }
  UNKNOWN = constants.UNKNOWN;
}
function getDiscordLinkType(ctaLink, guildId) {
  if (null == guildId) {
    if (null == ctaLink) {
      let UNKNOWN = constants.UNKNOWN;
    }
    return UNKNOWN;
  }
  if (null == guildId) {
    const tmp4 = _createForOfIteratorHelperLoose(items);
    const iter = tmp4();
    let iter2 = iter;
    if (iter.done) {
      let UNKNOWN2 = constants.UNKNOWN;
    } else {
      UNKNOWN2 = iter2.value(ctaLink);
      while (null == UNKNOWN2) {
        let iter3 = tmp4();
        iter2 = iter3;
        break;
      }
    }
    UNKNOWN = UNKNOWN2;
  } else {
    UNKNOWN = getDiscordLinkTypeFromMetadata(guildId);
  }
}
let closure_4 = { MESSAGE: "Discord Message Link", CHANNEL: "Discord Channel Link", SERVER_INVITE: "Discord Server Invite", GIFT: "Discord Gift Link", UNKNOWN: "Unknown", DISCOVERY: "Discord Discovery Link" };
const items = [
  (arr) => {
    let SERVER_INVITE = null;
    if (obj.isInvite(arr)) {
      SERVER_INVITE = constants.SERVER_INVITE;
    }
    return SERVER_INVITE;
  },
  (aPIEndpoint) => {
    let obj = importDefault(1443);
    const safeParseWithQueryResult = obj.safeParseWithQuery(aPIEndpoint);
    if (null == safeParseWithQueryResult) {
      return null;
    } else {
      const tryParseChannelPathResult = require(4321) /* canViewChannel */.tryParseChannelPath(safeParseWithQueryResult.path);
      let tmp5 = null;
      if (null != tryParseChannelPathResult) {
        obj = {};
        ({ guildId: obj3.guildId, channelId: obj3.channelId, messageId: obj3.messageId } = tryParseChannelPathResult);
        tmp5 = getDiscordLinkTypeFromMetadata(obj);
      }
      return tmp5;
    }
  },
  (arg0) => {
    let DISCOVERY = null;
    if (obj.isDiscoveryLink(arg0)) {
      DISCOVERY = constants.DISCOVERY;
    }
    return DISCOVERY;
  }
];
const result = require("isOriginalContentTypeDifferent").fileFinishedImporting("modules/links/LinkAnalyticsUtils.tsx");

export default {
  trackDiscordLinkClicked(guildId) {
    let obj = importDefault(675);
    obj = { is_discord_link: true, discord_link_type: getDiscordLinkTypeFromMetadata(guildId) };
    obj.track(AnalyticEvents.LINK_CLICKED, obj);
  },
  trackLinkClicked(ctaLink, guildId) {
    if (null != ctaLink) {
      let obj = importDefault(1443);
      const tmp3 = obj.isDiscordUrl(ctaLink, true) || null != guildId;
      obj = { is_discord_link: tmp3 };
      let tmp7 = null;
      if (tmp3) {
        tmp7 = getDiscordLinkType(ctaLink, guildId);
      }
      obj.discord_link_type = tmp7;
      importDefault(675).track(AnalyticEvents.LINK_CLICKED, obj);
      const obj2 = importDefault(675);
    }
  },
  trackAnnouncementMessageLinkClicked(arg0) {
    let channelId;
    let guildId;
    let messageId;
    let sourceChannelId;
    let sourceGuildId;
    ({ messageId, channelId, guildId, sourceChannelId, sourceGuildId } = arg0);
    importDefault(675).track(AnalyticEvents.ANNOUNCEMENT_MESSAGE_LINK_CLICKED, { message_id: messageId, channel_id: channelId, guild_id: guildId, source_channel_id: sourceChannelId, source_guild_id: sourceGuildId });
  }
};
