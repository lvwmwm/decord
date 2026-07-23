// Module ID: 8411
// Function ID: 66945
// Dependencies: [4325, 653, 662, 686, 4942, 480, 1361, 507, 5079, 5073, 5717, 2]

// Module 8411
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import { ChannelNotificationSettingsFlags as closure_7 } from "MAX_FAVORITES";

let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ BITRATE_DEFAULT: closure_4, ChannelTypes: closure_5, Endpoints: closure_6 } = ME);
let result = require("MAX_FAVORITES").fileFinishedImporting("actions/CreateChannelActionCreators.tsx");

export default {
  createChannel(guildId) {
    let availableTags;
    let bitrate;
    let flags;
    let parentId;
    let permissionOverwrites;
    let skuId;
    let type;
    let userLimit;
    guildId = guildId.guildId;
    ({ type, permissionOverwrites } = guildId);
    if (permissionOverwrites === undefined) {
      permissionOverwrites = [];
    }
    ({ bitrate, userLimit, parentId, skuId, flags, availableTags } = guildId);
    let obj = permissionOverwrites(686);
    obj.dispatch({ type: "CREATE_CHANNEL_MODAL_SUBMIT", guildId, channelType: type });
    obj = { type, name: guildId.name, permission_overwrites: permissionOverwrites };
    let tmp2 = null != bitrate;
    if (tmp2) {
      tmp2 = bitrate !== closure_4;
    }
    if (tmp2) {
      obj.bitrate = bitrate;
    }
    let tmp4 = null != userLimit;
    if (tmp4) {
      tmp4 = userLimit > 0;
    }
    if (tmp4) {
      obj.user_limit = userLimit;
    }
    if (null != parentId) {
      obj.parent_id = parentId;
    }
    if (null != flags) {
      obj.flags = flags;
    }
    let tmp5 = null != availableTags;
    if (tmp5) {
      tmp5 = availableTags.length > 0;
    }
    if (tmp5) {
      obj.available_tags = availableTags.map((name) => ({ name: name.name, emoji_id: name.emojiId, emoji_name: name.emojiName, moderated: name.moderated }));
    }
    if (type === constants.GUILD_STORE) {
      if (null == skuId) {
        const _Error = Error;
        const error = new Error("Unexpected missing SKU");
        throw error;
      } else {
        obj.sku_id = skuId;
        obj.branch_id = guildId.branchId;
      }
    }
    obj = { url: closure_6.GUILD_CHANNELS(guildId), body: obj, oldFormErrors: true };
    const obj3 = permissionOverwrites(4942);
    obj.trackedActionData = {
      event: guildId(480).NetworkActionNames.CHANNEL_CREATE,
      properties(body) {
        let obj = guildId(outer1_2[6]);
        obj = { is_private: permissionOverwrites.length > 0 };
        let id;
        if (null != body) {
          body = body.body;
          if (null != body) {
            id = body.id;
          }
        }
        obj.channel_id = id;
        let type;
        if (null != body) {
          const body2 = body.body;
          if (null != body2) {
            type = body2.type;
          }
        }
        obj.channel_type = type;
        return obj.exact(obj);
      }
    };
    const obj1 = {
      event: guildId(480).NetworkActionNames.CHANNEL_CREATE,
      properties(body) {
        let obj = guildId(outer1_2[6]);
        obj = { is_private: permissionOverwrites.length > 0 };
        let id;
        if (null != body) {
          body = body.body;
          if (null != body) {
            id = body.id;
          }
        }
        obj.channel_id = id;
        let type;
        if (null != body) {
          const body2 = body.body;
          if (null != body2) {
            type = body2.type;
          }
        }
        obj.channel_type = type;
        return obj.exact(obj);
      }
    };
    obj.rejectWithError = guildId(507).rejectWithMigratedError();
    const obj6 = guildId(507);
    return obj3.post(obj).then((body) => {
      if (outer1_3.isOptInEnabled(guildId)) {
        let obj = permissionOverwrites(outer1_2[8]);
        obj = { flags: outer1_7.OPT_IN_ENABLED };
        const result = obj.updateChannelOverrideSettings(guildId, body.body.id, obj, guildId(outer1_2[9]).NotificationLabels.OptedIn);
      }
      const result1 = permissionOverwrites(outer1_2[10]).checkGuildTemplateDirty(guildId);
      return body;
    }, (body) => {
      let obj = permissionOverwrites(outer1_2[3]);
      obj = { type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE", errors: body.body };
      obj.dispatch(obj);
      throw body;
    });
  },
  createRoleSubscriptionTemplateChannel(closure_0, name, type, topic) {
    let obj = importDefault(4942);
    obj = { url: closure_6.GUILD_CHANNELS(closure_0), body: obj, oldFormErrors: true };
    obj = {
      name,
      type,
      topic,
      trackedActionData: {
        event: require(480) /* isThrottled */.NetworkActionNames.CHANNEL_CREATE,
        properties(body) {
          let obj = outer1_0(outer1_2[6]);
          obj = { is_private: true };
          let id;
          if (null != body) {
            body = body.body;
            if (null != body) {
              id = body.id;
            }
          }
          obj.channel_id = id;
          let type;
          if (null != body) {
            const body2 = body.body;
            if (null != body2) {
              type = body2.type;
            }
          }
          obj.channel_type = type;
          return obj.exact(obj);
        }
      }
    };
    const obj1 = {
      event: require(480) /* isThrottled */.NetworkActionNames.CHANNEL_CREATE,
      properties(body) {
        let obj = outer1_0(outer1_2[6]);
        obj = { is_private: true };
        let id;
        if (null != body) {
          body = body.body;
          if (null != body) {
            id = body.id;
          }
        }
        obj.channel_id = id;
        let type;
        if (null != body) {
          const body2 = body.body;
          if (null != body2) {
            type = body2.type;
          }
        }
        obj.channel_type = type;
        return obj.exact(obj);
      }
    };
    obj.rejectWithError = require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError();
    return obj.post(obj);
  }
};
