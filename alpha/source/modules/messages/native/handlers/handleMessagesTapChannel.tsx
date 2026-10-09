// Module ID: 10662
// Function ID: 10663
// Name: handleMessagesTapChannel
// Dependencies: [5, 2068, 2082, 2064, 2086, 4709, 1085, 7045, 6913, 8478, 8109, 10663, 6943, 5419, 7481, 5886, 2]
// Exports: handleMessagesTapChannel

// Module 10662 (handleMessagesTapChannel)
import ChannelRecord from "ChannelRecord" /* 2068 */;
import GuildRecord from "GuildRecord" /* 2082 */;
import GuildDiscoveryUtilsAll from "GuildDiscoveryUtils" /* 7045 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import GuildStore from "GuildStore" /* 2086 */;
import PermissionStore from "PermissionStore" /* 4709 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c4, c5, c8, closure_6;

let c10;
let closure_12;
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
    let v4;
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
        c4 = 2;
        if (0 === v4) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp4;
            let closure_1 = tmp;
            c0 = undefined;
            navigationReplace = undefined;
            c2 = undefined;
            v4 = undefined;
            ({ data: c0, navigationReplace } = closure_0);
            const tmp188 = closure_0;
            if (navigationReplace === undefined) {
              navigationReplace = false;
            }
            ({ onBeforeNavigate: c2, dismissKeyboard: c3 } = tmp188);
            channelId = undefined;
            guildId = undefined;
            messageId = undefined;
            channel = undefined;
            guild = undefined;
            v4 = 1;
            c4 = 1;
            return { value: "Set", done: true };
          }
        } else {
          if (1 === v4) {
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
              const obj6 = { guildId, channelId, messageId };
              const obj5 = closure_130_1(closure_130_3[9]);
              const result = obj5.trackDiscordLinkClicked(obj6);
              if (null != guildId) {
                if (null != channelId) {
                  const obj7 = closure_130_0(closure_130_3[10]);
                  if (obj7.isStaticRouteIconType(channelId)) {
                    const obj8 = { guildId, staticRoute: channelId, itemId: messageId, navigationReplace };
                    closure_130_1(closure_130_3[11])(obj8);
                  }
                  c4 = 3;
                  return { value: "IconComponent", done: null };
                }
              }
              if (null != messageId) {
                if (null != channel) {
                  if (!channel.isPrivate()) {
                    v4 = 2;
                    c4 = 1;
                    const obj10 = { value: closure_130_13(guild, channel.guild_id, channel.id, messageId), done: false };
                    return obj10;
                  }
                }
              }
              if (null != channel) {
                if (null != guildId) {
                  if (channel.isPrivate()) {
                    if (closure_130_5(channel.type)) {
                      const obj12 = closure_130_0(closure_130_3[13]);
                      if (obj12.canViewChannel(channel)) {
                        if (channel.type === closure_130_10.GUILD_STAGE_VOICE) {
                          if (!closure_130_9.can(closure_130_11.CONNECT, channel)) {
                            c4 = 3;
                            return { value: "IconComponent", done: null };
                          }
                        }
                        if (v4 != null) {
                          v4();
                        }
                        if (c2 != null) {
                          c2();
                        }
                        const obj14 = closure_130_0(closure_130_3[14]);
                        obj14.openChannelCallModal(channel);
                      }
                    }
                    if (c2 != null) {
                      c2();
                    }
                    const obj11 = { navigationReplace, openChannel: true };
                    const tmp119 = closure_130_1(closure_130_3[12]);
                    tmp119(closure_130_12.CHANNEL(guildId, channel.id), obj11);
                  } else {
                    v4 = 3;
                    c4 = 1;
                    const obj13 = { value: closure_130_13(guild, guildId, channel.id, messageId), done: false };
                    return obj13;
                  }
                }
              }
              if (null != channelId) {
                if (null != guildId) {
                  v4 = 4;
                  c4 = 1;
                  const obj15 = { value: closure_130_13(guild, guildId, channelId, messageId), done: false };
                  return obj15;
                }
              }
              if (null != channel) {
                if (channel.isPrivate()) {
                  if (v4 != null) {
                    v4();
                  }
                  if (c2 != null) {
                    c2();
                  }
                  const obj9 = closure_130_1(closure_130_3[15]);
                  const voiceChannel = obj9.selectVoiceChannel(channelId);
                }
              }
              const tmp61 = null != channelId && null == guildId;
              if (tmp61) {
                if (c2 != null) {
                  c2();
                }
                const obj16 = { navigationReplace, openChannel: true };
                const tmp70 = closure_130_1(closure_130_3[12]);
                tmp70(closure_130_12.CHANNEL(guildId, channelId, messageId), obj16);
              }
            }
          } else if (2 === v4) {
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
          } else if (3 === v4) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj18 = { value, done: true };
              return obj18;
            } else if (value) {
              c4 = 3;
              return { value: "IconComponent", done: null };
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj19 = { value, done: true };
            return obj19;
          } else if (value) {
            c4 = 3;
            return { value: "IconComponent", done: null };
          } else {
            if (c2 != null) {
              tmp6();
            }
            obj = { navigationReplace, openChannel: true };
            const tmp13 = closure_130_1(closure_130_3[12]);
            tmp13(closure_130_12.CHANNEL(guildId, channelId, messageId), obj);
          }
          if (c2 != null) {
            tmp155();
          }
          const obj20 = { navigationReplace, openChannel: true };
          const tmp162 = closure_130_1(closure_130_3[12]);
          tmp162(closure_130_12.CHANNEL(channel.guild_id, channel.id, messageId), obj20);
        }
      } catch (tmp178) {
        c4 = 3;
        throw tmp178;
      }
    }
  });
  return obj(...arguments);
};
const isGuildVocalChannelType = ChannelRecord.isGuildVocalChannelType;
const isGuildLurker = GuildRecord.isGuildLurker;
({ ChannelTypes: c10, Permissions: unpackModuleId, Routes: closure_12 } = Constants);
let result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapChannel.tsx");

export const handleMessagesTapChannel = function handleMessagesTapChannel() {
  return obj(...arguments);
};
