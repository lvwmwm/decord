// Module ID: 14702
// Function ID: 14703
// Name: resolveInvite
// Dependencies: [502, 4880, 7872, 1072, 7873, 7871, 5745, 1253, 6741, 1261, 4870, 2]
// Exports: default

// Module 14702 (resolveInvite)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import TypeUtils from "TypeUtils" /* 4870 */;
import TrackedHTTPUtilsDefault from "TrackedHTTPUtils" /* 6741 */;
import InviteTypeUtils from "InviteTypeUtils" /* 7871 */;
import Constants2 from "Constants" /* 7872 */;
import InviteTargetTypes from "InviteTargetTypes" /* 7873 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildStore from "GuildStore" /* 4880 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, code, dependencyMap, importDefault;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
const InviteTypes = Constants2.InviteTypes;
({ Endpoints: metroRequire, AnalyticEvents: metroImportDefault, LoggingInviteTypes: metroImportAll, AbortCodes: c9 } = Constants);
const map = new Map();
let result = size.fileFinishedImporting("modules/instant_invite/resolveInvite.tsx");

export default function resolveInvite(inviteKey, _location, inviteInstanceId) {
  let guildScheduledEventId;
  let obj5;
  let targetChannelId;
  let targetMessageId;
  let withGames;
  let withGuildExperiments;
  _require = inviteKey;
  importDefault = _location;
  dependencyMap = inviteInstanceId;
  const tmp = _require;
  let obj = require("InviteCodeUtils");
  const result = obj.parseExtraDataFromInviteKey(inviteKey);
  const baseCode = result.baseCode;
  ({ targetChannelId, targetMessageId, guildScheduledEventId } = result);
  const tmp5 = AnalyticsUtilsDefault;
  let obj2 = { invite_code: baseCode, invite_instance_id: inviteInstanceId };
  inviteInstanceId = undefined;
  let track = tmp5.track;
  const INVITE_OPENED = constants.INVITE_OPENED;
  if (inviteInstanceId != null) {
    inviteInstanceId = inviteInstanceId.inviteInstanceId;
  }
  track(INVITE_OPENED, obj2);
  if (map.has(inviteKey)) {
    return map.get(inviteKey);
  } else {
    let inputValue;
    if (inviteInstanceId != null) {
      inputValue = inviteInstanceId.inputValue;
    }
    const obj4 = { inputValue, with_counts: true, with_expiration: true, guild_scheduled_event_id: guildScheduledEventId, target_channel_id: targetChannelId, target_message_id: targetMessageId, with_permissions: true, with_games: withGames || undefined, with_guild_experiments: withGuildExperiments || undefined };
    withGames = undefined;
    if (inviteInstanceId != null) {
      withGames = inviteInstanceId.withGames;
    }
    withGuildExperiments = undefined;
    if (inviteInstanceId != null) {
      withGuildExperiments = inviteInstanceId.withGuildExperiments;
    }
    const request = { url: closure_6.INVITE(baseCode), query: obj4, oldFormErrors: true, trackedActionData: obj5, rejectWithError: false };
    const get = tmp4(6741).get;
    TrackedHTTPUtilsDefault;
    obj5 = {
      event: tmp(1261).NetworkActionNames.INVITE_RESOLVE,
      properties(ok) {
          let STREAM;
          let getGuild;
          let id;
          let id1;
          let id2;
          let id3;
          let id4;
          let inputValue;
          let prop;
          let prop1;
          let type;
          let body1 = null;
          if (ok.ok) {
            body1 = ok.body;
          }
          const body = ok.body;
          code = undefined;
          if (body != null) {
            code = body.code;
          }
          const USER_BANNED = constants.USER_BANNED;
          const obj = { resolved: ok.ok, guild_id: id, channel_id: id1, channel_type: type, inviter_id: id2, code: baseCode, input_value: inputValue, location: _location, authenticated: AuthenticationStore.isAuthenticated(), size_total: prop, size_online: prop1, destination_user_id: id3, invite_type: STREAM, user_banned: code === USER_BANNED, user_is_member: null != getGuild(id4) };
          id = undefined;
          const exact = TypeUtils.exact;
          TypeUtils;
          if (body1 != null) {
            const guild = body1.guild;
            if (guild != null) {
              id = guild.id;
            }
          }
          id1 = undefined;
          if (body1 != null) {
            const channel = body1.channel;
            if (channel != null) {
              id1 = channel.id;
            }
          }
          type = undefined;
          if (body1 != null) {
            const channel2 = body1.channel;
            if (channel2 != null) {
              type = channel2.type;
            }
          }
          id2 = undefined;
          if (body1 != null) {
            const inviter = body1.inviter;
            if (inviter != null) {
              id2 = inviter.id;
            }
          }
          inputValue = undefined;
          if (inviteInstanceId != null) {
            inputValue = inviteInstanceId.inputValue;
          }
          prop = undefined;
          if (body1 != null) {
            prop = body1.approximate_member_count;
          }
          prop1 = undefined;
          if (body1 != null) {
            prop1 = body1.approximate_presence_count;
          }
          id3 = undefined;
          if (body1 != null) {
            const target_user = body1.target_user;
            if (target_user != null) {
              id3 = target_user.id;
            }
          }
          STREAM = null;
          if (null != body1) {
            if (body1.target_type === InviteTargetTypes.InviteTargetTypes.STREAM) {
              STREAM = metroImportAll.STREAM;
            } else if (body1.target_type === InviteTargetTypes.InviteTargetTypes.EMBEDDED_APPLICATION) {
              STREAM = metroImportAll.APPLICATION;
            } else {
              const tmp3Result = InviteTypeUtils;
              const inviteType = tmp3Result.getInviteType(body1);
              if (InviteTypes.FRIEND === inviteType) {
                STREAM = metroImportAll.FRIEND_INVITE;
              } else if (InviteTypes.GROUP_DM === inviteType) {
                STREAM = metroImportAll.GDM_INVITE;
              } else if (InviteTypes.GUILD === inviteType) {
                STREAM = metroImportAll.SERVER_INVITE;
              } else {
                const _String = String;
                STREAM = String(inviteType);
              }
            }
          }
          id4 = undefined;
          getGuild = GuildStore.getGuild;
          if (body1 != null) {
            const guild2 = body1.guild;
            if (guild2 != null) {
              id4 = guild2.id;
            }
          }
          return exact(obj);
        }
    };
    const value = get(request);
    const nextPromise = value.then((body) => {
      let STREAM;
      let getGuild;
      let id1;
      let id2;
      let id3;
      let id4;
      let inputValue;
      let type;
      body = body.body;
      if (null != _location) {
        let id = null;
        const track = AnalyticsUtilsDefault.track;
        const INVITE_RESOLVED = metroImportDefault.INVITE_RESOLVED;
        AnalyticsUtilsDefault;
        if (null != body.guild) {
          id = body.guild.id;
        }
        const obj = { resolved: true, guild_id: id, channel_id: id1, channel_type: type, inviter_id: id2, code: baseCode, input_value: inputValue, location: tmp, authenticated: AuthenticationStore.isAuthenticated(), size_total: null, size_online: null, destination_user_id: id3, invite_type: STREAM, user_is_member: null != getGuild(id4), invite_instance_id: inviteInstanceId };
        id1 = null;
        if (null != body.channel) {
          id1 = body.channel.id;
        }
        type = null;
        if (null != body.channel) {
          type = body.channel.type;
        }
        id2 = null;
        if (body.inviter) {
          id2 = body.inviter.id;
        }
        inputValue = undefined;
        if (closure_2 != null) {
          inputValue = tmp7.inputValue;
        }
        ({ approximate_member_count: obj.size_total, approximate_presence_count: obj.size_online } = body);
        id3 = null;
        if (null != body.target_user) {
          id3 = body.target_user.id;
        }
        STREAM = null;
        if (null != body) {
          if (body.target_type === InviteTargetTypes.InviteTargetTypes.STREAM) {
            STREAM = metroImportAll.STREAM;
          } else if (body.target_type === InviteTargetTypes.InviteTargetTypes.EMBEDDED_APPLICATION) {
            STREAM = metroImportAll.APPLICATION;
          } else {
            const tmp12Result = InviteTypeUtils;
            const inviteType = tmp12Result.getInviteType(body);
            if (InviteTypes.FRIEND === inviteType) {
              STREAM = metroImportAll.FRIEND_INVITE;
            } else if (InviteTypes.GROUP_DM === inviteType) {
              STREAM = metroImportAll.GDM_INVITE;
            } else if (InviteTypes.GUILD === inviteType) {
              STREAM = metroImportAll.SERVER_INVITE;
            } else {
              const _String = String;
              STREAM = String(inviteType);
            }
          }
        }
        id4 = undefined;
        getGuild = GuildStore.getGuild;
        if (body != null) {
          const guild = body.guild;
          if (guild != null) {
            id4 = guild.id;
          }
        }
        inviteInstanceId = undefined;
        if (closure_2 != null) {
          inviteInstanceId = tmp7.inviteInstanceId;
        }
        if (inviteInstanceId == null) {
          inviteInstanceId = null;
        }
        track(INVITE_RESOLVED, obj, { flush: true });
      }
      return { invite: body, code };
    }, (body) => {
      let inputValue;
      let message;
      if (null != _location) {
        const obj2 = { resolved: false, code: baseCode, input_value: inputValue, location: tmp3, authenticated: AuthenticationStore.isAuthenticated(), user_banned: null != body.body && body.body.code === constants.USER_BANNED, error_code: code, error_message: message };
        inputValue = undefined;
        const track = AnalyticsUtilsDefault.track;
        const INVITE_RESOLVED = metroImportDefault.INVITE_RESOLVED;
        AnalyticsUtilsDefault;
        if (inviteInstanceId != null) {
          inputValue = inviteInstanceId.inputValue;
        }
        body = body.body;
        code = undefined;
        if (body != null) {
          code = body.code;
        }
        const body2 = body.body;
        message = undefined;
        if (body2 != null) {
          message = body2.message;
        }
        track(INVITE_RESOLVED, obj2, { flush: true });
      }
      return { invite: null, code, banned: null != body.body && body.body.code === constants.USER_BANNED };
    });
    const cleanupPromise = nextPromise.finally(() => {
      map.delete(code);
    });
    const result1 = obj3.set(inviteKey, cleanupPromise);
    return cleanupPromise;
  }
};
