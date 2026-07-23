// Module ID: 9475
// Function ID: 73807
// Name: _createForOfIteratorHelperLoose
// Dependencies: [6, 7, 15, 17, 18, 653, 480, 5484, 1327, 1362, 675, 5078, 2]

// Module 9475 (_createForOfIteratorHelperLoose)
import isThrottled from "isThrottled";
import QUICK_SWITCHER from "QUICK_SWITCHER";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { AnalyticEvents } from "ME";
import tmp2 from "AutomaticLifecycleManager";

const require = arg1;
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
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getAnalyticsConfig(type) {
  type = type.type;
  if (obj.ANNOUNCEMENT === type) {
    obj = { event: AnalyticEvents.ANNOUNCEMENT_MESSAGE_VIEWED };
    obj = {};
    ({ messageId: obj9.message_id, channelId: obj9.channel_id, guildId: obj9.guild_id, sourceChannelId: obj9.source_channel_id, sourceGuildId: obj9.source_guild_id } = type);
    obj.properties = obj;
    return obj;
  } else if (obj.APP_EMBED === type) {
    const obj1 = { event: AnalyticEvents.APP_EMBED_VIEWED };
    ({ applicationId: obj7.application_id, linkType: obj7.link_type, messageId: obj7.message_id, channelId: obj7.channel_id, guildId: obj7.guild_id } = type);
    obj1.properties = {};
    return obj1;
  } else if (obj.OFFICIAL_MESSAGE === type) {
    const obj3 = { event: AnalyticEvents.OFFICIAL_MESSAGE_VIEWED };
    ({ messageId: obj5.message_id, channelId: obj5.channel_id, guildId: obj5.guild_id } = type);
    obj3.properties = {};
    return obj3;
  } else if (obj.VOICE_INVITE_EMBED === type) {
    const obj5 = { event: require(480) /* isThrottled */.ImpressionNames.VOICE_INVITE_EMBED };
    const obj6 = { impression_type: require(480) /* isThrottled */.ImpressionTypes.VIEW };
    ({ inviteCode: obj3.invite_code, inviteGuildId: obj3.invite_guild_id, inviteChannelId: obj3.invite_channel_id, inviteInstanceId: obj3.invite_instance_id, hasActiveStream: obj3.has_active_stream } = type);
    const INVITE_EMBED = importDefault(5484).INVITE_EMBED;
    if (type.treatmentRendered) {
      const items = [INVITE_EMBED, importDefault(5484).VOICE_CHANNEL_LIST_INVITE_EMBED];
      let items1 = items;
    } else {
      items1 = [INVITE_EMBED];
    }
    obj6.location_stack = items1;
    obj5.properties = obj6;
    return obj5;
  } else {
    obj = require(1327) /* isDiscordFrontendDevelopment */;
    return obj.assertNever(type);
  }
}
function getMessageViewKey(type) {
  if (type.type === obj.VOICE_INVITE_EMBED) {
    const _HermesInternal2 = HermesInternal;
    let combined = "" + type.messageId + "-" + type.inviteCode + "-" + type.type;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "" + type.messageId + "-" + type.type;
  }
  return combined;
}
let obj = { ANNOUNCEMENT: "announcement", APP_EMBED: "app_embed", OFFICIAL_MESSAGE: "official_message", VOICE_INVITE_EMBED: "voice_invite_embed" };
tmp2 = new tmp2();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/messages/MessageViewTrackingManager.tsx");

export default tmp2;
export const MessageViewTrackingType = obj;
