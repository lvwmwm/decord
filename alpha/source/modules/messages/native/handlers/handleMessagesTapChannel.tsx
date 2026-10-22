// Module ID: 11213
// Function ID: 11214
// Name: handleMessagesTapChannel
// Dependencies: [5, 4825, 4839, 4821, 4843, 4901, 1087, 7433, 7304, 8839, 8457, 11214, 7332, 5682, 10048, 5592, 7852, 6619, 2]
// Exports: handleMessagesTapChannel

// Module 11213 (handleMessagesTapChannel)
import ChannelRecord from "ChannelRecord" /* 4825 */;
import GuildRecord from "GuildRecord" /* 4839 */;
import GuildDiscoveryUtilsAll from "GuildDiscoveryUtils" /* 7433 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ChannelStore from "ChannelStore" /* 4821 */;
import GuildStore from "GuildStore" /* 4843 */;
import PermissionStore from "PermissionStore" /* 4901 */;
import Constants from "Constants" /* 1087 */;
import size from "module_2" /* 2 */;

let c4, c5, c8, closure_6;

let c10;
let closure_12;
let map1;
let unpackModuleId;
function maybeStartLurking() {
  return obj(...arguments);
}
let obj = function _maybeStartLurking() {
  obj = _asyncToGenerator(async (arg0, value, arg2, arg3) => {
    let closure_0;
    let obj2;
    let closure_1 = value;
    let closure_2 = arg2;
    let closure_3 = arg3;
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c7;
      try {
        c8 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_4 = tmp;
            const tmp21 = closure_1;
            const tmp22 = closure_2;
            const tmp23 = closure_3;
            c7 = 1;
            const obj5 = { channelId: tmp22, messageId: tmp23 };
            c5 = 2;
            c8 = 1;
            const obj6 = { value: obj2.startLurking(tmp21, {}, obj5), done: false };
            obj2 = GuildDiscoveryUtilsAll;
            return obj6;
          }
        } else if (1 === tmp4) {
          c7 = 0;
          if (closure_6 instanceof closure_132_0(closure_132_3[8]).JoinGuildRefusedError) {
            c8 = 3;
            return { value: true, done: true };
          }
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 0;
          c8 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c7 = 0;
          c8 = 3;
          return { value: true, done: true };
        }
        c8 = 3;
        return { value: false, done: true };
      } catch (tmp13) {
        closure_6 = tmp13;
        if (0 === c7) {
          c8 = 3;
          throw tmp13;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _handleMessagesTapChannel() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let c0;
    let c2;
    let c3;
    let navigationReplace;
    let tmp189;
    let v3;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let channelId;
        let guildId;
        let messageId;
        let channel;
        let guild;
        let payload;
        let conversationId;
        c4 = 2;
        if (0 === v3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            c0 = undefined;
            navigationReplace = undefined;
            v3 = undefined;
            ({ data: c0, navigationReplace } = closure_0);
            const tmp217 = closure_0;
            if (navigationReplace === undefined) {
              navigationReplace = false;
            }
            ({ onBeforeNavigate: c2, dismissKeyboard: c3 } = tmp217);
            channelId = undefined;
            guildId = undefined;
            messageId = undefined;
            channel = undefined;
            guild = undefined;
            payload = undefined;
            conversationId = undefined;
            v3 = 1;
            c4 = 1;
            return { value: "Reflect", done: true };
          }
        } else {
          if (1 === v3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              channelId = c0.channelId;
              guildId = c0.guildId;
              messageId = c0.messageId;
              channel = null;
              if (null != channelId) {
                channel = closure_130_7.getChannel(channelId);
              }
              guild = closure_130_8.getGuild(guildId);
              const obj5 = { guildId, channelId, messageId };
              const obj7 = closure_130_1(closure_130_3[9]);
              const result = obj7.trackDiscordLinkClicked(obj5);
              if (null != guildId) {
                if (null != channelId) {
                  const obj9 = closure_130_0(closure_130_3[10]);
                  if (obj9.isStaticRouteIconType(channelId)) {
                    const obj6 = { guildId, staticRoute: channelId, itemId: messageId, navigationReplace };
                    closure_130_1(closure_130_3[11])(obj6);
                  }
                  c4 = 3;
                  return { value: "IconComponent", done: null };
                }
              }
              if (null != messageId) {
                if (null != channel) {
                  if (!channel.isPrivate()) {
                    v3 = 2;
                    c4 = 1;
                    const obj8 = { value: closure_130_14(guild, channel.guild_id, channel.id, messageId), done: false };
                    return obj8;
                  }
                }
              }
              if (null != channel) {
                if (null != guildId) {
                  if (channel.isPrivate()) {
                    if (closure_130_5(channel.type)) {
                      const obj14 = closure_130_0(closure_130_3[15]);
                      if (obj14.canViewChannel(channel)) {
                        if (channel.type === closure_130_10.GUILD_STAGE_VOICE) {
                          if (!closure_130_9.can(closure_130_12.CONNECT, channel)) {
                            c4 = 3;
                            return { value: "IconComponent", done: null };
                          }
                        }
                        if (v3 != null) {
                          v3();
                        }
                        if (tmp != null) {
                          tmp();
                        }
                        const obj16 = closure_130_0(closure_130_3[16]);
                        obj16.openChannelCallModal(channel);
                      }
                    }
                    if (tmp != null) {
                      tmp();
                    }
                    const obj10 = { navigationReplace, openChannel: true };
                    const tmp146 = closure_130_1(closure_130_3[12]);
                    tmp146(closure_130_13.CHANNEL(guildId, channel.id), obj10);
                  } else {
                    v3 = 4;
                    c4 = 1;
                    const obj12 = { value: closure_130_14(guild, guildId, channel.id, messageId), done: false };
                    return obj12;
                  }
                }
              }
              if (null != channelId) {
                if (null != guildId) {
                  v3 = 5;
                  c4 = 1;
                  const obj13 = { value: closure_130_14(guild, guildId, channelId, messageId), done: false };
                  return obj13;
                }
              }
              if (null != channel) {
                if (channel.isPrivate()) {
                  if (v3 != null) {
                    v3();
                  }
                  if (tmp != null) {
                    tmp();
                  }
                  const obj11 = closure_130_1(closure_130_3[17]);
                  const voiceChannel = obj11.selectVoiceChannel(channelId);
                }
              }
              const tmp88 = null != channelId && null == guildId;
              if (tmp88) {
                if (tmp != null) {
                  tmp();
                }
                const obj15 = { navigationReplace, openChannel: true };
                const tmp97 = closure_130_1(closure_130_3[12]);
                tmp97(closure_130_13.CHANNEL(guildId, channelId, messageId), obj15);
              }
            }
          } else if (2 === v3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj17 = { value, done: true };
              return obj17;
            } else if (value) {
              c4 = 3;
              return { value: "IconComponent", done: null };
            }
          } else if (3 === v3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj18 = { value, done: true };
              return obj18;
            } else {
              payload = null;
              if (null != c0.originalLink) {
                payload = closure_130_1(closure_130_3[13])(c0.originalLink).payload;
              }
              let type;
              if (payload != null) {
                type = payload.type;
              }
              conversationId = null;
              if (type === closure_130_11.MESSAGE) {
                conversationId = payload.conversationId;
              }
              const tmp35 = null != conversationId && null != channel.guild_id;
              if (tmp35) {
                const obj19 = { guildId: channel.guild_id, channelId: channel.id, conversationId, messageId };
                closure_130_1(closure_130_3[14])(obj19);
              }
            }
          } else if (4 === v3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj20 = { value, done: true };
              return obj20;
            } else if (value) {
              c4 = 3;
              return { value: "IconComponent", done: null };
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj21 = { value, done: true };
            return obj21;
          } else if (value) {
            c4 = 3;
            return { value: "IconComponent", done: null };
          } else {
            if (tmp != null) {
              tmp6();
            }
            obj = { navigationReplace, openChannel: true };
            const tmp13 = closure_130_1(closure_130_3[12]);
            tmp13(closure_130_13.CHANNEL(guildId, channelId, messageId), obj);
          }
          if (tmp != null) {
            tmp182();
          }
          const obj22 = { navigationReplace, openChannel: true };
          v3 = 3;
          c4 = 1;
          const obj23 = { value: tmp189(closure_130_13.CHANNEL(channel.guild_id, channel.id, messageId), obj22), done: false };
          tmp189 = closure_130_1(closure_130_3[12]);
          return obj23;
        }
      } catch (tmp204) {
        c4 = 3;
        throw tmp204;
      }
    }
  });
  return obj(...arguments);
};
const isGuildVocalChannelType = ChannelRecord.isGuildVocalChannelType;
const isGuildLurker = GuildRecord.isGuildLurker;
({ ChannelTypes: c10, LinkingTypes: unpackModuleId, Permissions: closure_12, Routes: map1 } = Constants);
let result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapChannel.tsx");

export const handleMessagesTapChannel = function handleMessagesTapChannel() {
  return obj(...arguments);
};
