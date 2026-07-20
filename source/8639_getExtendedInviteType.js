// Module ID: 8639
// Function ID: 68393
// Name: getExtendedInviteType
// Dependencies: []
// Exports: default

// Module 8639 (getExtendedInviteType)
function getExtendedInviteType(target_type) {
  if (null == target_type) {
    return null;
  } else if (target_type.target_type === constants.STREAM) {
    return constants4.STREAM;
  } else if (target_type.target_type === constants.EMBEDDED_APPLICATION) {
    return constants4.APPLICATION;
  } else {
    const inviteType = arg1(dependencyMap[4]).getInviteType(target_type);
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
    const obj = arg1(dependencyMap[4]);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
({ InviteTargetTypes: closure_5, InviteTypes: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ Endpoints: closure_7, AnalyticEvents: closure_8, LoggingInviteTypes: closure_9, AbortCodes: closure_10 } = arg1(dependencyMap[3]));
const map = new Map();
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/instant_invite/resolveInvite.tsx");

export default function resolveInvite(inviteKey, arg1, inviteInstanceId) {
  let guildScheduledEventId;
  let targetChannelId;
  let targetMessageId;
  arg1 = inviteKey;
  const importDefault = arg1;
  const dependencyMap = inviteInstanceId;
  let obj = arg1(dependencyMap[5]);
  const result = obj.parseExtraDataFromInviteKey(inviteKey);
  const baseCode = result.baseCode;
  let closure_3 = baseCode;
  ({ targetChannelId, targetMessageId, guildScheduledEventId } = result);
  let obj1 = importDefault(dependencyMap[6]);
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
    obj = { <string:2700829420>: null, <string:1661205841>: null, <string:1365420630>: null };
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
      event: arg1(dependencyMap[8]).NetworkActionNames.INVITE_RESOLVE,
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
          let obj = ok(arg2[9]);
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
          if (null != arg2) {
            inputValue = arg2.inputValue;
          }
          obj.input_value = inputValue;
          obj.location = arg1;
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
          obj.invite_type = callback(body);
          obj.user_banned = code === constants2.USER_BANNED;
          let id4;
          if (null != body) {
            const guild2 = body.guild;
            if (null != guild2) {
              id4 = guild2.id;
            }
          }
          obj.user_is_member = null != store.getGuild(id4);
          return obj.exact(obj);
        }
    };
    obj1.trackedActionData = obj2;
    obj1.rejectWithError = false;
    const value = importDefault(dependencyMap[7]).get(obj1);
    const obj5 = importDefault(dependencyMap[7]);
    const tmp6 = !(null == inviteInstanceId || !inviteInstanceId.withGames);
    const cleanupPromise = value.then((body, arg1, self) => {
      body = body.body;
      if (null != arg1) {
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
        if (null != self) {
          inputValue = self.inputValue;
        }
        obj.input_value = inputValue;
        obj.location = arg1;
        obj.authenticated = baseCode.isAuthenticated();
        ({ approximate_member_count: obj4.size_total, approximate_presence_count: obj4.size_online } = body);
        let id3 = null;
        if (null != body.target_user) {
          id3 = body.target_user.id;
        }
        obj.destination_user_id = id3;
        obj.invite_type = callback(body);
        let id4;
        if (null != body) {
          const guild = body.guild;
          if (null != guild) {
            id4 = guild.id;
          }
        }
        obj.user_is_member = null != store.getGuild(id4);
        let inviteInstanceId;
        if (null != self) {
          inviteInstanceId = self.inviteInstanceId;
        }
        let tmp18 = null;
        if (null != inviteInstanceId) {
          tmp18 = inviteInstanceId;
        }
        obj.invite_instance_id = tmp18;
        obj = { flush: true };
        arg1(self[6]).track(constants.INVITE_RESOLVED, obj, obj);
        const obj3 = arg1(self[6]);
      }
      obj = { invite: body, code: body };
      return obj;
    }, (body) => {
      let tmp = null != body.body;
      if (tmp) {
        tmp = body.body.code === constants2.USER_BANNED;
      }
      if (null != arg1) {
        let obj = { resolved: false, code: baseCode };
        let inputValue;
        if (null != arg2) {
          inputValue = arg2.inputValue;
        }
        obj.input_value = inputValue;
        obj.location = arg1;
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
        arg1(arg2[6]).track(constants.INVITE_RESOLVED, obj, obj);
        const obj3 = arg1(arg2[6]);
      }
      obj = { invite: null, code: body, banned: tmp };
      return obj;
    }).finally(() => {
      set.delete(arg0);
    });
    const result1 = map.set(inviteKey, cleanupPromise);
    return cleanupPromise;
  }
};
