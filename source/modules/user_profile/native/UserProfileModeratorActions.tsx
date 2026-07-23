// Module ID: 11971
// Function ID: 92495
// Name: ModeratorActionRow
// Dependencies: [31, 4954, 1348, 1907, 1917, 1838, 3758, 4146, 653, 3746, 33, 4130, 1324, 5165, 5511, 4126, 8266, 4098, 9066, 566, 5650, 10980, 1356, 8174, 4320, 4314, 4312, 3763, 1212, 10659, 7482, 10661, 7495, 4658, 10375, 1934, 5048, 5791, 4337, 10981, 1360, 9959, 3747, 10998, 10984, 8874, 10735, 8870, 11563, 9134, 4072, 11000, 9027, 11002, 11972, 11653, 7007, 5503, 2]
// Exports: default

// Module 11971 (ModeratorActionRow)
import "MicrophoneArrowRightIcon";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { GUILD_VOCAL_CHANNELS_KEY } from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_createForOfIteratorHelperLoose";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import ME from "ME";
import { GuildMemberFlags } from "GuildMemberFlags";
import { jsx } from "VoiceNormalIcon";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_12;
let closure_13;
const require = arg1;
function ModeratorActionRow(arg0) {
  let disabled;
  let hint;
  let icon;
  let isDestructive;
  let label;
  let onPress;
  let sublabel;
  ({ label, sublabel, icon, hint, disabled, isDestructive, onPress } = arg0);
  if (importDefault(1324)("UserProfileModeratorActions")) {
    let str = "default";
    if (isDestructive) {
      str = "danger";
    }
    let obj = { label, subLabel: sublabel };
    obj = { IconComponent: icon, variant: str };
    obj.icon = jsx(require(5165) /* TableRowInner */.TableRow.Icon, { IconComponent: icon, variant: str });
    obj.arrow = null != hint;
    obj.variant = str;
    obj.disabled = disabled;
    obj.onPress = onPress;
    let combined = label;
    if (null != sublabel) {
      const _HermesInternal = HermesInternal;
      combined = "" + label + ", " + sublabel;
    }
    obj.accessibilityLabel = combined;
    obj.accessibilityRole = "button";
    return jsx(require(5165) /* TableRowInner */.TableRow, { IconComponent: icon, variant: str });
  } else {
    obj = { label };
    let tmp5;
    if (null != sublabel) {
      const obj1 = { variant: "text-xs/normal", color: "text-subtle", children: sublabel };
      tmp5 = jsx(require(4126) /* Text */.Text, { variant: "text-xs/normal", color: "text-subtle", children: sublabel });
    }
    obj.sublabel = tmp5;
    obj.icon = icon;
    obj.hint = hint;
    obj.disabled = disabled;
    obj.isDestructive = isDestructive;
    obj.onPress = onPress;
    return jsx(require(5511) /* Divider */.UserProfileFormRow, { label });
  }
}
({ GuildFeatures: closure_12, Permissions: closure_13 } = ME);
let closure_16 = _createForOfIteratorHelperLoose.createStyles({ cardContainer: { paddingBottom: 0 }, cardTitle: { marginBottom: 0 } });
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_profile/native/UserProfileModeratorActions.tsx");

export default function UserProfileModeratorActions(user) {
  let canBanUser;
  let canChangeNick;
  let canDeafenMembers;
  let canKickUser;
  let canManageGuild;
  let canManageGuildRoles;
  let canManageUserRoles;
  let canModerateMembers;
  let canMoveMembers;
  let canMuteMembers;
  let currentUser;
  let guildId;
  user = user.user;
  ({ currentUser, guildId } = user);
  let channelId = user.channelId;
  const showUserProfile = user.showUserProfile;
  let closure_13;
  let GuildMemberFlags;
  let arr5 = callback();
  const tmp2 = guildId(showUserProfile[12])("UserProfileModeratorActions");
  let obj = user(showUserProfile[16]);
  const trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  const hideActionSheet = guildId(showUserProfile[17]).hideActionSheet;
  obj = { userId: user.id, guildId };
  const tmp3 = guildId(showUserProfile[18])(obj);
  const voiceState = tmp3.voiceState;
  const voiceChannel = tmp3.voiceChannel;
  let obj2 = user(showUserProfile[19]);
  const items = [stateFromStores1];
  const stateFromStores = obj2.useStateFromStores(items, () => stateFromStores1.getGuild(guildId));
  let obj3 = user(showUserProfile[19]);
  const items1 = [stateFromStores];
  stateFromStores1 = obj3.useStateFromStores(items1, () => stateFromStores.getMember(guildId, user.id));
  let closure_10 = tmp6;
  let obj4 = user(showUserProfile[19]);
  const items2 = [hideActionSheet];
  const stateFromStores2 = obj4.useStateFromStores(items2, () => {
    const channel = hideActionSheet.getChannel(channelId);
    let isThreadResult;
    if (null != channel) {
      isThreadResult = channel.isThread();
    }
    return null != isThreadResult && isThreadResult;
  });
  let obj5 = user(showUserProfile[19]);
  const items3 = [hideActionSheet];
  const stateFromStores3 = obj5.useStateFromStores(items3, () => {
    const channel = hideActionSheet.getChannel(channelId);
    let isForumPostResult;
    if (null != channel) {
      isForumPostResult = channel.isForumPost();
    }
    return null != isForumPostResult && isForumPostResult;
  });
  let obj6 = user(showUserProfile[20]);
  const canRemoveThreadMember = obj6.useCanRemoveThreadMember(channelId);
  let obj7 = user(showUserProfile[19]);
  const items4 = [closure_10];
  const stateFromStoresObject = obj7.useStateFromStoresObject(items4, () => {
    const obj = { canKickUser: user(showUserProfile[21]).canKickMember(user, stateFromStores) };
    const obj2 = user(showUserProfile[21]);
    obj.canBanUser = user(showUserProfile[21]).canBanMember(user, stateFromStores);
    let canManageUserResult = null != stateFromStores;
    if (canManageUserResult) {
      canManageUserResult = tmp6.canManageUser(constants.MANAGE_NICKNAMES, user, stateFromStores);
    }
    obj.canChangeNick = canManageUserResult;
    let canManageUserResult1 = null != stateFromStores;
    if (canManageUserResult1) {
      canManageUserResult1 = tmp6.canManageUser(constants.MANAGE_ROLES, user, stateFromStores);
    }
    obj.canManageUserRoles = canManageUserResult1;
    let canResult = null != stateFromStores;
    if (canResult) {
      canResult = tmp6.can(constants.MANAGE_ROLES, stateFromStores);
    }
    obj.canManageGuildRoles = canResult;
    let canManageUserResult2 = null != stateFromStores;
    if (canManageUserResult2) {
      canManageUserResult2 = tmp6.canManageUser(constants.MANAGE_GUILD, user, stateFromStores);
    }
    obj.canManageGuild = canManageUserResult2;
    let canManageUserResult3 = null != stateFromStores;
    if (canManageUserResult3) {
      canManageUserResult3 = tmp6.canManageUser(constants.MODERATE_MEMBERS, user, stateFromStores);
    }
    obj.canModerateMembers = canManageUserResult3;
    obj.canMoveMembers = tmp6.can(constants.MOVE_MEMBERS, voiceChannel);
    obj.canMuteMembers = tmp6.can(constants.MUTE_MEMBERS, voiceChannel);
    obj.canDeafenMembers = tmp6.can(constants.DEAFEN_MEMBERS, voiceChannel);
    obj.canModerateStage = tmp6.can(user(showUserProfile[22]).MODERATE_STAGE_CHANNEL_PERMISSIONS, voiceChannel);
    return obj;
  });
  ({ canKickUser, canBanUser, canModerateMembers, canMoveMembers } = stateFromStoresObject);
  const canModerateStage = stateFromStoresObject.canModerateStage;
  ({ canChangeNick, canManageUserRoles, canManageGuildRoles, canManageGuild, canMuteMembers, canDeafenMembers } = stateFromStoresObject);
  if (canModerateMembers) {
    canModerateMembers = canKickUser;
  }
  if (canModerateMembers) {
    canModerateMembers = canBanUser;
  }
  if (!canModerateMembers) {
    canModerateMembers = canManageGuild;
  }
  if (!canModerateMembers) {
    canModerateMembers = canManageUserRoles;
  }
  const tmp12 = guildId(showUserProfile[24])(voiceChannel);
  let id;
  const tmp11 = guildId(showUserProfile[23])(guildId, user.id);
  if (null != voiceChannel) {
    id = voiceChannel.id;
  }
  const tmp13Result = guildId(showUserProfile[25])(user.id, id);
  let tmp16 = null != voiceChannel;
  if (tmp16) {
    channelId = undefined;
    if (null != voiceState) {
      channelId = voiceState.channelId;
    }
    tmp16 = null != channelId;
  }
  const tmp18 = null != voiceChannel && voiceChannel.isGuildStageVoice();
  let tmp19 = null != voiceChannel;
  if (tmp19) {
    let tmp20 = !tmp18;
    if (!tmp20) {
      tmp20 = tmp13Result === user(showUserProfile[25]).RequestToSpeakStates.ON_STAGE;
    }
    tmp19 = tmp20;
  }
  let obj8 = user(showUserProfile[19]);
  const items5 = [trackUserProfileAction];
  const stateFromStores4 = obj8.useStateFromStores(items5, () => {
    let id;
    if (null != voiceChannel) {
      id = voiceChannel.id;
    }
    return trackUserProfileAction.getPermissionsForUser(user.id, id).speaker;
  });
  let obj9 = user(showUserProfile[19]);
  const items6 = [voiceState, stateFromStores3, stateFromStores1, closure_10];
  closure_13 = obj9.useStateFromStoresArray(items6, () => {
    if (canMoveMembers) {
      if (null != voiceChannel) {
        const found = voiceState.getChannels(guildId)[voiceChannel].filter((channel) => {
          channel = channel.channel;
          if (channel.id === outer1_7.id) {
            return tmp;
          } else {
            let can = closure_10.can;
            let canResult = constants;
            if (outer1_10) {
              canResult = can(canResult.CONNECT, channel);
              if (canResult) {
                can = stateFromStores3;
                canResult = !user(showUserProfile[26]).isChannelFull(channel, stateFromStores3, stateFromStores1);
                const obj4 = user(showUserProfile[26]);
              }
              let canResult1 = canResult;
            } else {
              canResult1 = can(canResult.MOVE_MEMBERS, channel);
              if (canResult1) {
                let canResult2 = closure_10.can(constants.CONNECT, channel);
                if (!canResult2) {
                  let obj = channelId(showUserProfile[27]);
                  obj = { permission: constants.CONNECT, user: outer1_0, context: channel };
                  canResult2 = obj.can(obj);
                }
                canResult1 = canResult2;
              }
              if (canResult1) {
                canResult1 = !user(showUserProfile[26]).isChannelFull(channel, stateFromStores3, stateFromStores1);
                const obj3 = user(showUserProfile[26]);
              }
            }
          }
        });
        const mapped = found.map((channel) => channel.channel);
        const arr = voiceState.getChannels(guildId)[voiceChannel];
      }
      return [];
    }
  });
  if (null == stateFromStores) {
    return null;
  } else {
    const items7 = [];
    let tmp24 = tmp18;
    if (tmp18) {
      tmp24 = canModerateStage;
    }
    if (tmp24) {
      tmp24 = stateFromStores4;
    }
    if (!tmp24) {
      if (tmp18) {
        if (canModerateStage) {
          if (!stateFromStores4) {
            const tmp37 = tmp13Result === user(showUserProfile[25]).RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
            const intl3 = user(showUserProfile[28]).intl;
            let string = intl3.string;
            const t = user(showUserProfile[28]).t;
            if (tmp37) {
              let stringResult = string(t.tHj7Tb);
            } else {
              stringResult = string(t.VUCWcO);
            }
            obj = { icon: user(showUserProfile[31]).MicrophoneArrowRightIcon };
            if (tmp6) {
              const intl4 = user(showUserProfile[28]).intl;
              stringResult = intl4.string(user(showUserProfile[28]).t["8Joh+p"]);
            }
            obj.label = stringResult;
            obj.disabled = tmp37;
            obj.onPress = function onPress() {
              trackUserProfileAction({ action: "PRESS_INVITE_TO_SPEAK" });
              const obj = user(showUserProfile[30]);
              if (closure_10) {
                const result = obj.audienceAckRequestToSpeak(voiceChannel, false);
              } else {
                obj.inviteUserToStage(voiceChannel, user.id);
              }
              guildId(showUserProfile[17]).hideActionSheet();
            };
            items7.push(<ModeratorActionRow key="invite-to-speak" icon={user(showUserProfile[31]).MicrophoneArrowRightIcon} />);
            const tmp41 = jsx;
            const tmp42 = ModeratorActionRow;
          }
        }
      }
      let tmp48 = tmp16;
      if (tmp16) {
        tmp48 = canMoveMembers;
      }
      if (tmp48) {
        const obj1 = {};
        const intl5 = user(showUserProfile[28]).intl;
        obj1.label = intl5.string(user(showUserProfile[28]).t.FAplms);
        obj1.hint = user(showUserProfile[32]).FormArrow;
        let tmp53;
        if (null != tmp12) {
          tmp53 = tmp12;
        }
        obj1.sublabel = tmp53;
        obj1.icon = user(showUserProfile[33]).VoiceNormalIcon;
        obj1.onPress = function onPress() {
          trackUserProfileAction({ action: "PRESS_MOVE_TO_CHANNEL" });
          let obj = guildId(showUserProfile[17]);
          obj = { guild: stateFromStores };
          obj = {};
          const intl = user(showUserProfile[28]).intl;
          obj.title = intl.string(user(showUserProfile[28]).t.r2ptsz);
          obj.header = obj;
          obj.channels = closure_13;
          obj.onSelect = function onSelect(id) {
            return guildId(showUserProfile[36]).setChannel(outer1_8.id, outer1_0.id, id.id);
          };
          obj.selectedChannel = null;
          obj.openLazy(user(showUserProfile[35])(showUserProfile[34], showUserProfile.paths), "ChannelPicker", obj, "stack");
        };
        items7.push(<ModeratorActionRow key="move-to-channel" />);
        const tmp49 = jsx;
        const tmp50 = ModeratorActionRow;
      }
      let tmp57 = null != stateFromStores1;
      if (tmp57) {
        let tmp58 = canKickUser;
        if (!canKickUser) {
          tmp58 = canBanUser;
        }
        if (!tmp58) {
          tmp58 = canChangeNick;
        }
        if (!tmp58) {
          tmp58 = canManageGuildRoles;
        }
        tmp57 = tmp58;
      }
      if (tmp57) {
        tmp57 = !user.isNonUserBot();
      }
      if (tmp57) {
        obj2 = {};
        const intl6 = user(showUserProfile[28]).intl;
        obj2.label = intl6.string(user(showUserProfile[28]).t.HxrBOZ);
        obj2.icon = user(showUserProfile[37]).SettingsIcon;
        obj2.onPress = function onPress() {
          trackUserProfileAction({ action: "PRESS_MANAGE_USER" });
          hideActionSheet();
          let obj = guildId(showUserProfile[38]);
          obj = {
            userId: user.id,
            guildId: stateFromStores.id,
            onClose() {
              let arr = guildId(showUserProfile[38]);
              arr = arr.pop();
              outer1_3();
            },
            onRemove() {
              let arr = guildId(showUserProfile[38]);
              arr = arr.pop();
            }
          };
          obj.pushLazy(user(showUserProfile[35])(showUserProfile[39], showUserProfile.paths), obj);
        };
        items7.push(<ModeratorActionRow key="manage" />);
      }
      const features = stateFromStores.features;
      const hasItem = features.has(canMoveMembers.COMMUNITY);
      const features2 = stateFromStores.features;
      const hasItem1 = features2.has(canMoveMembers.GUILD_ONBOARDING_EVER_ENABLED);
      let hasFlagResult = null != stateFromStores1;
      if (hasFlagResult) {
        let obj14 = user(showUserProfile[40]);
        let flags = stateFromStores1.flags;
        let num12 = 0;
        if (null != flags) {
          num12 = flags;
        }
        hasFlagResult = obj14.hasFlag(num12, GuildMemberFlags.BYPASSES_VERIFICATION);
      }
      if (tmp71) {
        obj3 = {};
        const intl7 = user(showUserProfile[28]).intl;
        obj3.label = intl7.string(user(showUserProfile[28]).t.NbhSI7);
        obj3.icon = user(showUserProfile[41]).StampIcon;
        obj3.onPress = function onPress() {
          trackUserProfileAction({ action: "PRESS_UNVERIFY_USER" });
          const obj = guildId(showUserProfile[36]);
          const flags = stateFromStores1.flags;
          let num = 0;
          if (null != flags) {
            num = flags;
          }
          obj.setMemberFlags(stateFromStores.id, user.id, user(showUserProfile[40]).setFlag(num, _undefined.BYPASSES_VERIFICATION, false));
        };
        items7.push(<ModeratorActionRow key="unverify" />);
      }
      if (tmp77) {
        obj4 = {};
        const intl8 = user(showUserProfile[28]).intl;
        obj4.label = intl8.string(user(showUserProfile[28]).t["6QlTeK"]);
        obj4.icon = user(showUserProfile[41]).StampIcon;
        obj4.onPress = function onPress() {
          trackUserProfileAction({ action: "PRESS_VERIFY_USER" });
          const obj = guildId(showUserProfile[36]);
          const flags = stateFromStores1.flags;
          let num = 0;
          if (null != flags) {
            num = flags;
          }
          obj.setMemberFlags(stateFromStores.id, user.id, user(showUserProfile[40]).setFlag(num, _undefined.BYPASSES_VERIFICATION, true));
        };
        items7.push(<ModeratorActionRow key="verify" />);
      }
      if (null != stateFromStores1) {
        if (tmp11) {
          let result = user(showUserProfile[42]).isMemberCommunicationDisabled(stateFromStores1);
          GuildMemberFlags = result;
          obj5 = {};
          const intl9 = user(showUserProfile[28]).intl;
          let string2 = intl9.string;
          let t2 = user(showUserProfile[28]).t;
          if (result) {
            let string2Result = string2(t2.qXtNtS);
          } else {
            string2Result = string2(t2.xpsADY);
          }
          obj5.label = string2Result;
          t2 = user;
          string2 = showUserProfile;
          obj5.icon = user(showUserProfile[43]).ClockWarningIcon;
          obj5.onPress = function onPress() {
            let obj = {};
            let str = "PRESS_TIME_OUT_USER";
            if (c14) {
              str = "PRESS_REMOVE_TIME_OUT";
            }
            obj.action = str;
            trackUserProfileAction(obj);
            hideActionSheet();
            const obj2 = user(showUserProfile[44]);
            if (c14) {
              obj = {};
              ({ guildId: obj4.guildId, userId: obj4.userId } = stateFromStores1);
              obj.cancelButtonCallback = showUserProfile;
              const result = obj2.openEnableCommunication(obj);
            } else {
              obj = {};
              ({ guildId: obj3.guildId, userId: obj3.userId } = stateFromStores1);
              obj.cancelButtonCallback = showUserProfile;
              const result1 = obj2.openDisableCommunication(obj);
            }
          };
          items7.push(<ModeratorActionRow key="time-out" />);
          const obj18 = user(showUserProfile[42]);
          const tmp86 = jsx;
          const tmp87 = ModeratorActionRow;
        }
      }
      let tmp92 = tmp16;
      if (tmp16) {
        tmp92 = tmp19;
      }
      if (tmp92) {
        tmp92 = canMuteMembers;
      }
      if (!tmp92) {
        arr5 = tmp16;
        if (tmp16) {
          arr5 = tmp19;
        }
        if (arr5) {
          arr5 = canDeafenMembers;
        }
        if (!arr5) {
          if (tmp16) {
            tmp16 = canMoveMembers;
          }
          if (!tmp16) {
            arr5 = null != stateFromStores1 && canKickUser;
            if (arr5) {
              arr5 = jsx;
              arr5 = ModeratorActionRow;
              obj6 = {};
              arr5 = user;
              arr5 = showUserProfile;
              const intl14 = user(showUserProfile[28]).intl;
              obj6.label = intl14.string(user(showUserProfile[28]).t["3glT6Z"]);
              obj6.icon = user(showUserProfile[50]).UserMinusIcon;
              obj6.isDestructive = true;
              obj6.onPress = function onPress() {
                trackUserProfileAction({ action: "PRESS_KICK_USER" });
                hideActionSheet();
                guildId(showUserProfile[51])({ guildId: stateFromStores.id, userId: user.id, cancelButtonCallback: showUserProfile });
              };
              arr5 = items7.push(<ModeratorActionRow key="kick" />);
            }
            if (canBanUser) {
              arr5 = jsx;
              arr5 = ModeratorActionRow;
              obj7 = {};
              arr5 = user;
              arr5 = showUserProfile;
              const intl15 = user(showUserProfile[28]).intl;
              obj7.label = intl15.string(user(showUserProfile[28]).t["5MBJ5M"]);
              obj7.icon = user(showUserProfile[52]).HammerIcon;
              obj7.isDestructive = true;
              obj7.onPress = function onPress() {
                trackUserProfileAction({ action: "PRESS_BAN_USER" });
                guildId(showUserProfile[53])({ guildId: stateFromStores.id, userId: user.id, cancelButtonCallback: showUserProfile });
              };
              arr5 = items7.push(<ModeratorActionRow key="ban" />);
            }
            if (stateFromStores2) {
              if (canRemoveThreadMember) {
                if (!tmp6) {
                  if (null != channelId) {
                    arr5 = user;
                    arr5 = showUserProfile;
                    let intl16 = user(showUserProfile[28]).intl;
                    string = intl16.string;
                    let push = user(showUserProfile[28]).t;
                    if (stateFromStores3) {
                      arr5 = string(push["6+b8ae"]);
                    } else {
                      arr5 = string(push.at1yY3);
                    }
                    push = items7.push;
                    arr5 = jsx;
                    intl16 = ModeratorActionRow;
                    string = { isDestructive: true, label: arr5 };
                    arr5 = user;
                    arr5 = showUserProfile;
                    string.icon = user(showUserProfile[54]).ThreadMinusIcon;
                    string.onPress = function onPress() {
                      let obj = user(showUserProfile[55]);
                      obj = {
                        isForumPost: stateFromStores3,
                        user,
                        onConfirm() {
                          outer1_4({ action: "PRESS_REMOVE_FROM_THREAD" });
                          guildId(showUserProfile[56]).removeMember(outer1_2, outer1_0.id, "Context Menu");
                          outer1_5();
                        }
                      };
                      obj.confirmThreadRemove(obj);
                    };
                    arr5 = push(<ModeratorActionRow key="remove-from-thread" isDestructive label={arr5} />);
                  }
                }
              }
            }
            arr5 = null;
            if (0 === items7.length) {
              return null;
            } else {
              arr5 = guildId;
              arr5 = showUserProfile;
              arr5 = jsx;
              obj8 = {};
              arr5 = undefined;
              arr5 = guildId(showUserProfile[14]);
              if (!tmp2) {
                arr5 = user;
                arr5 = showUserProfile;
                const intl17 = user(showUserProfile[28]).intl;
                arr5 = intl17.string(user(showUserProfile[28]).t["EApw/R"]);
              }
              obj8.title = arr5;
              const items8 = [user.style, arr5.cardContainer];
              obj8.style = items8;
              obj8.titleStyle = arr5.cardTitle;
              arr5 = jsx;
              arr5 = user;
              arr5 = showUserProfile;
              if (tmp2) {
                obj9 = { hasIcons: true };
                const intl18 = arr5(arr5[28]).intl;
                obj9.title = intl18.string(arr5(arr5[28]).t["EApw/R"]);
                obj9.children = items7;
                arr5 = arr5(arr5(arr5[57]).TableRowGroup, obj9);
              } else {
                const obj10 = { children: items7 };
                arr5 = arr5(arr5(arr5[14]).UserProfileCardRows, obj10);
              }
              obj8.children = arr5;
              arr5 = arr5(arr5, obj8);
            }
          } else {
            const obj11 = {};
            arr5 = jsx;
            arr5 = ModeratorActionRow;
            if (user.id === currentUser.id) {
              arr5 = user;
              arr5 = showUserProfile;
              const intl13 = user(showUserProfile[28]).intl;
              arr5 = intl13.string(user(showUserProfile[28]).t["6vrfgt"]);
            } else {
              arr5 = user;
              arr5 = showUserProfile;
              const intl12 = user(showUserProfile[28]).intl;
              arr5 = intl12.string(user(showUserProfile[28]).t["/jERiG"]);
            }
            obj11.label = arr5;
            arr5 = user;
            arr5 = showUserProfile;
            obj11.icon = user(showUserProfile[49]).PhoneHangUpIcon;
            obj11.isDestructive = true;
            obj11.onPress = function onPress() {
              trackUserProfileAction({ action: "DISCONNECT" });
              guildId(showUserProfile[36]).setChannel(stateFromStores.id, user.id, null);
            };
            arr5 = items7.push(arr5(arr5, obj11, "disconnect"));
          }
        } else {
          const obj12 = {};
          arr5 = user;
          arr5 = showUserProfile;
          arr5 = jsx;
          arr5 = ModeratorActionRow;
          const intl11 = user(showUserProfile[28]).intl;
          const string4 = intl11.string;
          const t4 = user(showUserProfile[28]).t;
          if (voiceState.deaf) {
            arr5 = string4(t4.Gbw4Z9);
          } else {
            arr5 = string4(t4.hMA2GE);
          }
          obj12.label = arr5;
          arr5 = user;
          arr5 = showUserProfile;
          if (voiceState.deaf) {
            let HeadphonesIcon = arr5(arr5[47]).HeadphonesSlashIcon;
          } else {
            HeadphonesIcon = arr5(arr5[48]).HeadphonesIcon;
          }
          obj12.icon = HeadphonesIcon;
          obj12.onPress = function onPress() {
            trackUserProfileAction({ action: "DEAFEN" });
            guildId(showUserProfile[36]).setServerDeaf(stateFromStores.id, user.id, !voiceState.deaf);
          };
          arr5 = items7.push(arr5(arr5, obj12, "deafen"));
        }
      } else {
        const obj13 = {};
        const intl10 = user(showUserProfile[28]).intl;
        const string3 = intl10.string;
        const t3 = user(showUserProfile[28]).t;
        if (voiceState.mute) {
          let string3Result = string3(t3.wG9K2n);
        } else {
          string3Result = string3(t3.e9e9Ua);
        }
        obj13.label = string3Result;
        if (voiceState.mute) {
          let MicrophoneIcon = tmp98(tmp99[45]).MicrophoneSlashIcon;
        } else {
          MicrophoneIcon = tmp98(tmp99[46]).MicrophoneIcon;
        }
        obj13.icon = MicrophoneIcon;
        obj13.onPress = function onPress() {
          trackUserProfileAction({ action: "SERVER_MUTE" });
          guildId(showUserProfile[36]).setServerMute(stateFromStores.id, user.id, !voiceState.mute);
        };
        arr5 = items7.push(<ModeratorActionRow key="server-mute" />);
        const tmp93 = jsx;
        const tmp94 = ModeratorActionRow;
      }
      tmp71 = null != stateFromStores1 && !tmp6 && canModerateMembers && hasItem && hasItem1 && hasFlagResult;
      tmp77 = null != stateFromStores1 && !tmp6 && canModerateMembers && hasItem && hasItem1 && !hasFlagResult;
    } else {
      obj14 = {};
      if (user.id === currentUser.id) {
        const intl2 = user(showUserProfile[28]).intl;
        let stringResult1 = intl2.string(user(showUserProfile[28]).t["6C6PJx"]);
      } else {
        let intl = user(showUserProfile[28]).intl;
        stringResult1 = intl.string(user(showUserProfile[28]).t.r23NoB);
      }
      obj14.label = stringResult1;
      obj14.icon = user(showUserProfile[29]).GroupArrowDownIcon;
      obj14.onPress = function onPress() {
        trackUserProfileAction({ action: "PRESS_REMOVE_FROM_STAGE" });
        user(showUserProfile[30]).moveUserToAudience(user, voiceChannel);
        const obj = user(showUserProfile[30]);
        guildId(showUserProfile[17]).hideActionSheet();
      };
      items7.push(<ModeratorActionRow key="remove-from-stage" />);
      const tmp25 = jsx;
      const tmp26 = ModeratorActionRow;
    }
  }
};
