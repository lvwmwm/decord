// Module ID: 8404
// Function ID: 66885
// Dependencies: []

// Module 8404
let closure_3 = importDefault(dependencyMap[0]);
({ BITRATE_DEFAULT: closure_4, ChannelTypes: closure_5, Endpoints: closure_6 } = arg1(dependencyMap[1]));
let closure_7 = arg1(dependencyMap[2]).ChannelNotificationSettingsFlags;
const obj = {
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
    const arg1 = guildId;
    ({ type, permissionOverwrites } = guildId);
    if (permissionOverwrites === undefined) {
      permissionOverwrites = [];
    }
    const importDefault = permissionOverwrites;
    ({ bitrate, userLimit, parentId, skuId, flags, availableTags } = guildId);
    let obj = importDefault(dependencyMap[3]);
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
    const obj3 = importDefault(dependencyMap[4]);
    obj.trackedActionData = {
      event: arg1(dependencyMap[5]).NetworkActionNames.CHANNEL_CREATE,
      properties(body) {
        let obj = guildId(closure_2[6]);
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
      event: arg1(dependencyMap[5]).NetworkActionNames.CHANNEL_CREATE,
      properties(body) {
        let obj = guildId(closure_2[6]);
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
    obj.rejectWithError = arg1(dependencyMap[7]).rejectWithMigratedError();
    const obj6 = arg1(dependencyMap[7]);
    return obj3.post(obj).then((body) => {
      if (optInEnabled.isOptInEnabled(guildId)) {
        let obj = permissionOverwrites(closure_2[8]);
        obj = { flags: constants.OPT_IN_ENABLED };
        const result = obj.updateChannelOverrideSettings(guildId, body.body.id, obj, guildId(closure_2[9]).NotificationLabels.OptedIn);
      }
      const result1 = permissionOverwrites(closure_2[10]).checkGuildTemplateDirty(guildId);
      return body;
    }, (body) => {
      let obj = permissionOverwrites(closure_2[3]);
      obj = { type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE", errors: body.body };
      obj.dispatch(obj);
      throw body;
    });
  },
  createRoleSubscriptionTemplateChannel(closure_0, name, type, topic) {
    let obj = importDefault(dependencyMap[4]);
    obj = { url: closure_6.GUILD_CHANNELS(closure_0), body: obj, oldFormErrors: true };
    obj = {
      name,
      type,
      topic,
      trackedActionData: {
        event: name(dependencyMap[5]).NetworkActionNames.CHANNEL_CREATE,
        properties(body) {
          let obj = callback(closure_2[6]);
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
      event: name(dependencyMap[5]).NetworkActionNames.CHANNEL_CREATE,
      properties(body) {
        let obj = callback(closure_2[6]);
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
    obj.rejectWithError = name(dependencyMap[7]).rejectWithMigratedError();
    return obj.post(obj);
  }
};
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("actions/CreateChannelActionCreators.tsx");

export default obj;
