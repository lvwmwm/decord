// Module ID: 8651
// Function ID: 68468
// Name: getExtendedInviteType
// Dependencies: [1194, 1838, 6979, 653, 6978, 4116, 675, 4942, 480, 1361, 2]
// Exports: default

// Module 8651 (getExtendedInviteType)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import InviteSendStates from "InviteSendStates";
import ME from "ME";

let closure_10;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function getExtendedInviteType(target_type) {
  if (null == target_type) {
    return null;
  } else if (target_type.target_type === constants.STREAM) {
    return constants4.STREAM;
  } else if (target_type.target_type === constants.EMBEDDED_APPLICATION) {
    return constants4.APPLICATION;
  } else {
    const inviteType = require(6978) /* isGroupDMInvite */.getInviteType(target_type);
    if (constants2.FRIEND === inviteType) {
      return constants4.FRIEND_INVITE;
    } else if (constants2.GROUP_DM === inviteType) {
      return constants4.GDM_INVITE;
    } else if (constants2.GUILD === inviteType) {
      return constants4.SERVER_INVITE;
    } else {
      const _String = String;
      return String(inviteType);
    }
    const obj = require(6978) /* isGroupDMInvite */;
  }
}
({ InviteTargetTypes: closure_5, InviteTypes: closure_6 } = InviteSendStates);
({ Endpoints: closure_7, AnalyticEvents: closure_8, LoggingInviteTypes: closure_9, AbortCodes: closure_10 } = ME);
const map = new Map();
let result = require("InviteSendStates").fileFinishedImporting("modules/instant_invite/resolveInvite.tsx");

export default function resolveInvite(inviteKey, arg1, inviteInstanceId) {
  let guildScheduledEventId;
  let targetChannelId;
  let targetMessageId;
  const _require = inviteKey;
  const importDefault = arg1;
  const dependencyMap = inviteInstanceId;
  let obj = _require(4116);
  const result = obj.parseExtraDataFromInviteKey(inviteKey);
  const baseCode = result.baseCode;
  ({ targetChannelId, targetMessageId, guildScheduledEventId } = result);
  let obj1 = importDefault(675);
  obj = { invite_code: baseCode };
  inviteInstanceId = undefined;
  if (null != inviteInstanceId) {
    inviteInstanceId = inviteInstanceId.inviteInstanceId;
  }
  obj.invite_instance_id = inviteInstanceId;
  obj1.track(constants3.INVITE_OPENED, obj);
  if (map.has(inviteKey)) {
    return map.get(inviteKey);
  } else {
    obj = { inputValue: null, with_counts: true, with_expiration: true };
    let inputValue;
    if (null != inviteInstanceId) {
      inputValue = inviteInstanceId.inputValue;
    }
    obj.inputValue = inputValue;
    obj.guild_scheduled_event_id = guildScheduledEventId;
    obj.target_channel_id = targetChannelId;
    obj.target_message_id = targetMessageId;
    obj.with_permissions = true;
    obj.with_games = !(null == inviteInstanceId || !inviteInstanceId.withGames);
    obj1 = { url: closure_7.INVITE(baseCode), query: obj, oldFormErrors: true };
    const obj2 = {
      event: _require(480).NetworkActionNames.INVITE_RESOLVE,
      properties(ok) {
          let body = null;
          if (ok.ok) {
            body = ok.body;
          }
          body = ok.body;
          let code;
          if (null != body) {
            code = body.code;
          }
          let obj = inviteKey(inviteInstanceId[9]);
          obj = { resolved: ok.ok };
          let id;
          if (null != body) {
            const guild = body.guild;
            if (null != guild) {
              id = guild.id;
            }
          }
          obj.guild_id = id;
          let id1;
          if (null != body) {
            const channel = body.channel;
            if (null != channel) {
              id1 = channel.id;
            }
          }
          obj.channel_id = id1;
          let type;
          if (null != body) {
            const channel2 = body.channel;
            if (null != channel2) {
              type = channel2.type;
            }
          }
          obj.channel_type = type;
          let id2;
          if (null != body) {
            const inviter = body.inviter;
            if (null != inviter) {
              id2 = inviter.id;
            }
          }
          obj.inviter_id = id2;
          obj.code = baseCode;
          let inputValue;
          if (null != inviteInstanceId) {
            inputValue = inviteInstanceId.inputValue;
          }
          obj.input_value = inputValue;
          obj.location = closure_1;
          obj.authenticated = baseCode.isAuthenticated();
          let prop;
          if (null != body) {
            prop = body.approximate_member_count;
          }
          obj.size_total = prop;
          let prop1;
          if (null != body) {
            prop1 = body.approximate_presence_count;
          }
          obj.size_online = prop1;
          let id3;
          if (null != body) {
            const target_user = body.target_user;
            if (null != target_user) {
              id3 = target_user.id;
            }
          }
          obj.destination_user_id = id3;
          obj.invite_type = outer1_12(body);
          obj.user_banned = code === outer1_10.USER_BANNED;
          let id4;
          if (null != body) {
            const guild2 = body.guild;
            if (null != guild2) {
              id4 = guild2.id;
            }
          }
          obj.user_is_member = null != outer1_4.getGuild(id4);
          return obj.exact(obj);
        }
    };
    obj1.trackedActionData = obj2;
    obj1.rejectWithError = false;
    const value = importDefault(4942).get(obj1);
    const obj5 = importDefault(4942);
    const tmp6 = !(null == inviteInstanceId || !inviteInstanceId.withGames);
    const cleanupPromise = value.then((body) => {
      body = body.body;
      if (null != callback) {
        let obj = { resolved: true };
        let id = null;
        if (null != body.guild) {
          id = body.guild.id;
        }
        obj.guild_id = id;
        let id1 = null;
        if (null != body.channel) {
          id1 = body.channel.id;
        }
        obj.channel_id = id1;
        let type = null;
        if (null != body.channel) {
          type = body.channel.type;
        }
        obj.channel_type = type;
        let id2 = null;
        if (body.inviter) {
          id2 = body.inviter.id;
        }
        obj.inviter_id = id2;
        obj.code = baseCode;
        let inputValue;
        if (null != inviteInstanceId) {
          inputValue = inviteInstanceId.inputValue;
        }
        obj.input_value = inputValue;
        obj.location = callback;
        obj.authenticated = baseCode.isAuthenticated();
        ({ approximate_member_count: obj4.size_total, approximate_presence_count: obj4.size_online } = body);
        let id3 = null;
        if (null != body.target_user) {
          id3 = body.target_user.id;
        }
        obj.destination_user_id = id3;
        obj.invite_type = outer1_12(body);
        let id4;
        if (null != body) {
          const guild = body.guild;
          if (null != guild) {
            id4 = guild.id;
          }
        }
        obj.user_is_member = null != outer1_4.getGuild(id4);
        inviteInstanceId = undefined;
        if (null != inviteInstanceId) {
          inviteInstanceId = inviteInstanceId.inviteInstanceId;
        }
        let tmp18 = null;
        if (null != inviteInstanceId) {
          tmp18 = inviteInstanceId;
        }
        obj.invite_instance_id = tmp18;
        obj = { flush: true };
        callback(inviteInstanceId[6]).track(outer1_8.INVITE_RESOLVED, obj, obj);
        const obj3 = callback(inviteInstanceId[6]);
      }
      obj = { invite: body, code: closure_0 };
      return obj;
    }, (body) => {
      let tmp = null != body.body;
      if (tmp) {
        tmp = body.body.code === outer1_10.USER_BANNED;
      }
      if (null != callback) {
        let obj = { resolved: false, code: baseCode };
        let inputValue;
        if (null != inviteInstanceId) {
          inputValue = inviteInstanceId.inputValue;
        }
        obj.input_value = inputValue;
        obj.location = callback;
        obj.authenticated = baseCode.isAuthenticated();
        obj.user_banned = tmp;
        body = body.body;
        let code;
        if (null != body) {
          code = body.code;
        }
        obj.error_code = code;
        const body2 = body.body;
        let message;
        if (null != body2) {
          message = body2.message;
        }
        obj.error_message = message;
        obj = { flush: true };
        callback(inviteInstanceId[6]).track(outer1_8.INVITE_RESOLVED, obj, obj);
        const obj3 = callback(inviteInstanceId[6]);
      }
      obj = { invite: null, code: closure_0, banned: tmp };
      return obj;
    }).finally(() => {
      outer1_11.delete(closure_0);
    });
    const result1 = map.set(inviteKey, cleanupPromise);
    return cleanupPromise;
  }
};
