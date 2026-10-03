// Module ID: 10062
// Function ID: 10063
// Name: ChannelSettingsActionCreators
// Dependencies: [5, 10063, 2051, 1085, 584, 4737, 7261, 1282, 6826, 2]
// Exports: deleteChannel, init, open, removeLinkedLobby, saveChannel, selectPermissionOverwrite, setSection, updateChannel, updateVoiceChannelStatus

// Module 10062 (ChannelSettingsActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import RootNavigationRef from "RootNavigationRef" /* 4737 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ChannelSettingsStore from "ChannelSettingsStore" /* 10063 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let application_id, auto_archive_duration, default_auto_archive_duration, default_forum_layout, default_sort_order, default_tag_setting, default_thread_rate_limit_per_user, permission_overwrites, position, rate_limit_per_user, rtc_region, theme_color, user, user_limit, video_quality_mode;

let Layers;
let metroImportDefault;
let metroRequire;
function init(channelId, location, subsection) {
  obj = DispatcherDefault;
  const obj2 = { type: "CHANNEL_SETTINGS_INIT", channelId, location, subsection };
  obj.dispatch(obj2);
}
function open(channelId, location, subsection) {
  obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      const obj2 = { type: "CHANNEL_SETTINGS_INIT", channelId, location, subsection };
      const obj3 = DispatcherDefault;
      obj3.dispatch(obj2);
      let OVERVIEW = ChannelSettingsStore.getSection();
      if (OVERVIEW == null) {
        OVERVIEW = metroImportDefault.OVERVIEW;
      }
      const obj4 = { channelId, initialRouteName: OVERVIEW, source: "channel-settings-action-creators-open" };
      rootNavigationRef.navigate("sidebar", obj4);
    }
  }
}
function close() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "CHANNEL_SETTINGS_CLOSE" });
}
function setSection(section) {
  obj = DispatcherDefault;
  const obj2 = { type: "CHANNEL_SETTINGS_SET_SECTION", section };
  obj.dispatch(obj2);
}
function selectPermissionOverwrite(overwriteId) {
  obj = DispatcherDefault;
  const obj2 = { type: "CHANNEL_SETTINGS_OVERWRITE_SELECT", overwriteId };
  obj.dispatch(obj2);
}
function updateChannel(arg0) {
  let applicationId;
  let autoArchiveDuration;
  let availableTags;
  let bitrate;
  let defaultAutoArchiveDuration;
  let defaultForumLayout;
  let defaultReactionEmoji;
  let defaultSortOrder;
  let defaultTagSetting;
  let defaultThreadRateLimitPerUser;
  let flags;
  let iconEmoji;
  let invitable;
  let locked;
  let name;
  let nsfw;
  let rateLimitPerUser;
  let rtcRegion;
  let template;
  let themeColor;
  let topic;
  let type;
  let userLimit;
  let videoQualityMode;
  ({ name, type, topic, bitrate, userLimit, nsfw, flags, rateLimitPerUser, defaultThreadRateLimitPerUser, defaultAutoArchiveDuration, template, defaultReactionEmoji, rtcRegion, videoQualityMode, autoArchiveDuration, locked, invitable, availableTags, defaultSortOrder, defaultForumLayout, defaultTagSetting, iconEmoji, themeColor, applicationId } = arg0);
  obj = DispatcherDefault;
  obj.dispatch({ type: "CHANNEL_SETTINGS_UPDATE", name, channelType: type, topic, bitrate, userLimit, nsfw, flags, rateLimitPerUser, defaultThreadRateLimitPerUser, defaultAutoArchiveDuration, template, defaultReactionEmoji, rtcRegion, videoQualityMode, autoArchiveDuration, locked, invitable, availableTags, defaultSortOrder, defaultForumLayout, defaultTagSetting, iconEmoji, themeColor, applicationId });
}
function saveChannel() {
  return obj(...arguments);
}
let obj = function _saveChannel() {
  obj = _asyncToGenerator(async (arg0, name) => {
    let closure_0 = arg0;
    let c8 = 0;
    let c9 = 0;
    const iter = (async (arg0, value) => {
      let c1;
      let c10;
      let c11;
      let c12;
      let c13;
      let c14;
      let c15;
      let c16;
      let c17;
      let c18;
      let c19;
      let c2;
      let c20;
      let c21;
      let c22;
      let c23;
      let c24;
      let c25;
      let c26;
      let c3;
      let c4;
      let c5;
      let c6;
      let c7;
      let c8;
      let c9;
      let emojiName;
      let mapped;
      let obj11;
      let obj3;
      let obj8;
      let patchResult;
      let tmp;
      let tmp21;
      let tmp7;
      if (permission_overwrites === 2) {
        permission_overwrites = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "IconComponent" };
        }
      } else {
        try {
          let closure_6;
          let channel;
          permission_overwrites = 2;
          if (0 === flags) {
            if (arg0 === 1) {
              permission_overwrites = 3;
              throw value;
            } else if (arg0 === 2) {
              permission_overwrites = 3;
              let obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_7 = tmp4;
              closure_6 = tmp;
              name = undefined;
              type = undefined;
              position = undefined;
              topic = undefined;
              bitrate = undefined;
              user_limit = undefined;
              nsfw = undefined;
              rate_limit_per_user = undefined;
              default_thread_rate_limit_per_user = undefined;
              default_auto_archive_duration = undefined;
              template = undefined;
              c14 = undefined;
              rtc_region = undefined;
              video_quality_mode = undefined;
              auto_archive_duration = undefined;
              locked = undefined;
              invitable = undefined;
              c20 = undefined;
              default_sort_order = undefined;
              default_forum_layout = undefined;
              default_tag_setting = undefined;
              user = undefined;
              theme_color = undefined;
              application_id = undefined;
              ({ name: c1, type: c2, position: c3, topic: c4, bitrate: c5, userLimit: c6, nsfw: c7, flags: c8, permissionOverwrites: c9, rateLimitPerUser: c10, defaultThreadRateLimitPerUser: c11, defaultAutoArchiveDuration: c12, template: c13, defaultReactionEmoji: c14, rtcRegion: c15, videoQualityMode: c16, autoArchiveDuration: c17, locked: c18, invitable: c19, availableTags: c20, defaultSortOrder: c21, defaultForumLayout: c22, defaultTagSetting: c23, iconEmoji: c24, themeColor: c25, applicationId: c26 } = closure_1);
              channel = undefined;
              flags = 1;
              permission_overwrites = 1;
              return { value: "Reflect", done: true };
            }
          } else if (1 === flags) {
            if (arg0 === 1) {
              permission_overwrites = 3;
              throw value;
            } else if (arg0 === 2) {
              permission_overwrites = 3;
              return { value, done: true };
            } else {
              channel = closure_135_5.getChannel(channelId);
              if (null != channel) {
                if (type === channel.type) {
                  type = undefined;
                }
                type = topic;
                if (topic == null) {
                  type = "";
                }
                topic = channel.topic;
                const tmp35 = type;
                if (topic == null) {
                  topic = "";
                }
                if (tmp35 === topic) {
                  topic = undefined;
                }
                position = application_id;
                if (application_id == null) {
                  position = null;
                }
                application_id = channel.application_id;
                bitrate = application_id;
                const tmp42 = position;
                if (application_id == null) {
                  bitrate = null;
                }
                if (tmp42 === bitrate) {
                  application_id = undefined;
                }
              }
              let isGameInvitesChannelResult;
              const obj6 = channel;
              if (channel != null) {
                isGameInvitesChannelResult = obj6.isGameInvitesChannel();
              }
              if (isGameInvitesChannelResult) {
                default_auto_archive_duration = undefined;
              }
              const obj7 = closure_135_1(closure_135_2[4]);
              obj7.dispatch({ type: "CHANNEL_SETTINGS_SUBMIT" });
              flags = 2;
              permission_overwrites = 1;
              const obj9 = { value: obj8.unarchiveThreadIfNecessary(channelId), done: false };
              obj8 = closure_135_1(closure_135_2[6]);
              return obj9;
            }
          } else if (arg0 === 1) {
            permission_overwrites = 3;
            throw value;
          } else if (arg0 === 2) {
            permission_overwrites = 3;
            return { value, done: true };
          } else {
            const HTTP = closure_135_0(closure_135_2[7]).HTTP;
            const request = { url: closure_135_6.CHANNEL(channelId), body: obj11, oldFormErrors: true, rejectWithError: obj3.rejectWithMigratedError() };
            const patch = HTTP.patch;
            obj11 = { name, type, position, topic, bitrate, user_limit, nsfw, flags, permission_overwrites, rate_limit_per_user, default_thread_rate_limit_per_user, default_auto_archive_duration, template, rtc_region, video_quality_mode, auto_archive_duration, locked, invitable, default_reaction_emoji: tmp7, available_tags: mapped, default_sort_order, default_forum_layout, default_tag_setting, icon_emoji: tmp21, theme_color, application_id };
            if (null != c14) {
              let emojiId;
              if (c14 != null) {
                emojiId = c14.emojiId;
              }
              obj = { emoji_id: emojiId, emoji_name: emojiName };
              emojiName = undefined;
              if (c14 != null) {
                emojiName = c14.emojiName;
              }
              tmp7 = obj;
            } else {
              let tmp5 = closure_6;
              if (null === c14) {
                tmp7 = null;
              }
            }
            mapped = undefined;
            const arr = c20;
            if (c20 != null) {
              mapped = arr.map((id) => ({ id: id.id, name: id.name, emoji_id: id.emojiId, emoji_name: id.emojiName, moderated: id.moderated }));
            }
            if (null != user) {
              tmp21 = { id: user.id, name: user.name };
              const obj12 = { id: user.id, name: user.name };
            } else if (null === user) {
              tmp21 = null;
            }
            obj3 = closure_135_0(closure_135_2[7]);
            permission_overwrites = 3;
            const obj13 = {
              value: patchResult.then((result) => {
                      obj = name(c2[4]);
                      const obj2 = { type: "CHANNEL_SETTINGS_SUBMIT_SUCCESS", channelId };
                      obj.dispatch(obj2);
                      let guildId;
                      const obj3 = closure_1_27;
                      const tmp = name;
                      const tmp2 = c2;
                      if (closure_1_27 != null) {
                        guildId = obj3.getGuildId();
                      }
                      let tmp5 = null == guildId;
                      if (!tmp5) {
                        let isThreadResult;
                        const obj4 = closure_1_27;
                        if (closure_1_27 != null) {
                          isThreadResult = obj4.isThread();
                        }
                        tmp5 = isThreadResult;
                      }
                      if (!tmp5) {
                        const tmpResult = tmp(tmp2[8]);
                        result = tmpResult.checkGuildTemplateDirty(guildId);
                      }
                      return result;
                    }, (body) => {
                      obj = name(type[4]);
                      const obj2 = { type: "CHANNEL_SETTINGS_SUBMIT_FAILURE", errors: body.body };
                      obj.dispatch(obj2);
                      return body;
                    }),
              done: true
            };
            patchResult = patch(request);
            return obj13;
          }
        } catch (tmp56) {
          permission_overwrites = 3;
          throw tmp56;
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
function deleteChannel() {
  return obj(...arguments);
}
obj = function _deleteChannel() {
  let channel;
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      try {
        let channel2;
        let guildId;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp2;
            let closure_1 = tmp;
            channel2 = undefined;
            guildId = undefined;
            channel2 = channel.getChannel(channel2);
            const HTTP = HTTPUtils.HTTP;
            const obj5 = { url: metroRequire.CHANNEL(channel2), oldFormErrors: true, rejectWithError: true };
            const del = HTTP.del;
            c3 = 1;
            c4 = 1;
            const obj6 = { value: del(obj5), done: false };
            return obj6;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          guildId = undefined;
          const obj7 = channel2;
          if (channel2 != null) {
            guildId = obj7.getGuildId();
          }
          let tmp9 = null == guildId;
          if (!tmp9) {
            let isThreadResult;
            obj = channel2;
            if (channel2 != null) {
              isThreadResult = obj.isThread();
            }
            tmp9 = isThreadResult;
          }
          if (!tmp9) {
            const obj2 = closure_130_1(closure_130_2[8]);
            const result = obj2.checkGuildTemplateDirty(guildId);
          }
          closure_130_8();
          c4 = 3;
          return { value: "IconComponent", done: "IconComponent" };
        }
      } catch (tmp21) {
        c4 = 3;
        throw tmp21;
      }
    }
  });
  return obj(...arguments);
};
function updateVoiceChannelStatus(arg0, status) {
  let obj3;
  const HTTP = HTTPUtils.HTTP;
  const request = { url: metroRequire.UPDATE_VOICE_CHANNEL_STATUS(arg0), body: obj, rejectWithError: obj3.rejectWithMigratedError() };
  const put = HTTP.put;
  obj = { status };
  obj3 = HTTPUtils;
  return put(request);
}
function removeLinkedLobby(arg0) {
  const HTTP = HTTPUtils.HTTP;
  obj = { url: metroRequire.CHANNEL_LINKED_LOBBY(arg0), rejectWithError: true };
  return HTTP.del(obj);
}
({ Endpoints: metroRequire, Layers, ChannelSettingsSections: metroImportDefault } = Constants);
let result = size.fileFinishedImporting("actions/ChannelSettingsActionCreators.tsx");

export default { init, open, close, setSection, selectPermissionOverwrite, updateChannel, saveChannel, deleteChannel, updateVoiceChannelStatus, removeLinkedLobby };
export { init };
export { open };
export { close };
export { setSection };
export { selectPermissionOverwrite };
export { updateChannel };
export { saveChannel };
export { deleteChannel };
export { updateVoiceChannelStatus };
export { removeLinkedLobby };
