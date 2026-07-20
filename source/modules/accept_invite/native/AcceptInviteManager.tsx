// Module ID: 15840
// Function ID: 121220
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15840 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
const ACCEPT_INVITE_MODAL_KEY = arg1(dependencyMap[11]).ACCEPT_INVITE_MODAL_KEY;
({ GuildFeatures: closure_15, InviteStates: closure_16, JoinGuildSources: closure_17, Permissions: closure_18, Routes: closure_19 } = arg1(dependencyMap[12]));
let tmp3 = (arg0) => {
  class AcceptInviteManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_4(this, AcceptInviteManager);
      items1 = [...items];
      obj = closure_6(AcceptInviteManager);
      tmp2 = closure_5;
      if (closure_20()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      AcceptInviteManager = tmp2Result;
      tmp2Result._deferredFromDeeplink = false;
      tmp2Result._isRegistration = false;
      tmp2Result.actions = {
        DISPLAYED_INVITE_SHOW(arg0) {
              return tmp2Result._handleShowInvite(arg0);
            },
        DISPLAYED_INVITE_CLEAR() {
              return tmp2Result._handleClearInvite();
            },
        DEFERRED_INVITE_SHOW() {
              return tmp2Result._handleShowDeferredInvite();
            },
        REGISTER_SUCCESS() {
              return tmp2Result._handleRegisterSuccess();
            }
      };
      tmp2Result._handleShowInvite = (arg0) => {
        let code;
        let deeplinkAttemptId;
        let fromDeeplink;
        let invite_instance_id;
        ({ code, deeplinkAttemptId, fromDeeplink, invite_instance_id } = arg0);
        if (authenticated.isAuthenticated()) {
          obj._handleInvite(code, deeplinkAttemptId, true === fromDeeplink, invite_instance_id);
        } else {
          obj._deferredCode = code;
          obj._deferredFromDeeplink = true === fromDeeplink;
        }
      };
      tmp2Result._handleClearInvite = () => {
        tmp2Result._deferredCode = null;
        tmp2Result._deferredFromDeeplink = false;
        tmp2Result._isRegistration = false;
        callback(closure_2[17]).popWithKey(closure_14);
      };
      tmp2Result._handleShowDeferredInvite = () => {
        if (null != tmp2Result._deferredCode) {
          tmp2Result._handleInvite(tmp2Result._deferredCode, undefined, tmp2Result._deferredFromDeeplink);
          tmp2Result._deferredCode = null;
          tmp2Result._deferredFromDeeplink = false;
        }
      };
      tmp2Result._handleInvite = (arg0, arg1) => {
        let flag = arg2;
        if (arg2 === undefined) {
          flag = false;
        }
        const result = closure_12.addConditionalChangeListener(() => {
          const invite = invite.getInvite(arg0);
          if (null != invite) {
            if (null == invite.channel) {
              if (null == invite.guild) {
                if (null != invite.inviter) {
                  let obj = {};
                  let str2 = "Accept Invite";
                  if (null != arg1) {
                    str2 = "Deep Link";
                  }
                  obj.location = str2;
                  arg0(flag[20]).acceptFriendInvite(invite, obj);
                  const obj14 = arg0(flag[20]);
                  arg1(flag[21]).wait(() => callback(closure_2[22]).clearDisplayedInvite());
                  const obj16 = arg1(flag[21]);
                }
                return false;
              }
            }
            if (function handleExistingMemberDeepLink(invite) {
              if (invite.state === constants.RESOLVED) {
                if (!obj2.isStreamInvite(invite)) {
                  const guild = invite.guild;
                  let id;
                  if (null != guild) {
                    id = guild.id;
                  }
                  const target_channel_id = invite.target_channel_id;
                  if (null != id) {
                    if (null != target_channel_id) {
                      if (null == guild.getGuild(id)) {
                        return false;
                      } else {
                        if (null != invite.roles) {
                          if (invite.roles.length > 0) {
                            let _Set = Set;
                            const selfMember = selfMember.getSelfMember(id);
                            let roles;
                            if (null != selfMember) {
                              roles = selfMember.roles;
                            }
                            if (null == roles) {
                              roles = [];
                            }
                            const prototype = _Set.prototype;
                            _Set = new _Set(roles);
                            roles = invite.roles;
                            if (roles.some((id) => !_Set.has(id.id))) {
                              return false;
                            }
                          }
                        }
                        const tmp14 = !closure_13.can(constants2.VIEW_CHANNEL, channel.getChannel(target_channel_id));
                        let flag = !tmp14;
                        if (!tmp14) {
                          const target_message_id = invite.target_message_id;
                          let tmp18;
                          if (null != target_message_id) {
                            tmp18 = target_message_id;
                          }
                          flag = true;
                          _Set(closure_2[15]).transitionTo(closure_19.CHANNEL(id, target_channel_id, tmp18), { "Bool(false)": null, "Bool(false)": null });
                          const obj = _Set(closure_2[15]);
                        }
                        return flag;
                      }
                    }
                  }
                  return false;
                }
                const obj2 = _Set(closure_2[13]);
              }
              return false;
            }(invite)) {
              arg1(flag[21]).wait(() => callback(closure_2[22]).clearDisplayedInvite());
              const obj13 = arg1(flag[21]);
            } else {
              if (flag) {
                if (invite.state === constants2.RESOLVED) {
                  let isGroupDMInviteResult = null == invite.guild;
                  if (!isGroupDMInviteResult) {
                    obj = arg0(flag[13]);
                    isGroupDMInviteResult = obj.isGroupDMInvite(invite);
                  }
                  if (!isGroupDMInviteResult) {
                    let obj1 = arg0(flag[13]);
                    isGroupDMInviteResult = obj1.isStreamInvite(invite);
                  }
                  if (!isGroupDMInviteResult) {
                    isGroupDMInviteResult = arg0(flag[13]).isGuildScheduledEventInviteEmbed(invite);
                    const obj3 = arg0(flag[13]);
                  }
                  if (!isGroupDMInviteResult) {
                    isGroupDMInviteResult = arg0(flag[13]).isRoleSubscriptionInvite(invite);
                    const obj4 = arg0(flag[13]);
                  }
                  if (!isGroupDMInviteResult) {
                    const features = invite.guild.features;
                    isGroupDMInviteResult = null == features;
                    const obj5 = features;
                  }
                  if (!isGroupDMInviteResult) {
                    isGroupDMInviteResult = !obj5.includes(constants.DISCOVERABLE);
                  }
                  let enabled = !isGroupDMInviteResult;
                  if (enabled) {
                    enabled = arg0(flag[14]).getMobileLurkerServerPreview("AcceptInviteManager").enabled;
                    const obj6 = arg0(flag[14]);
                  }
                  if (enabled) {
                    arg1(flag[21]).wait(() => callback(closure_2[22]).clearDisplayedInvite());
                    const target_channel_id = invite.target_channel_id;
                    let tmp33;
                    if (null != target_channel_id) {
                      tmp33 = target_channel_id;
                    }
                    const obj11 = arg0(flag[23]);
                    let id = invite.guild.id;
                    obj = {};
                    let tmp36 = tmp33;
                    if (null == tmp33) {
                      const channel = invite.channel;
                      id = undefined;
                      if (null != channel) {
                        id = channel.id;
                      }
                      tmp36 = id;
                    }
                    obj.channelId = tmp36;
                    let tmp38;
                    if (null != tmp33) {
                      const target_message_id = invite.target_message_id;
                      if (null != target_message_id) {
                        tmp38 = target_message_id;
                      }
                    }
                    obj.messageId = tmp38;
                    obj.joinSource = constants3.DISCOVERABLE_GUILD_INVITE_LURKER;
                    const items = [arg1(flag[24]).DEEPLINK];
                    obj11.startLurking(id, {}, obj, items);
                    const obj10 = arg1(flag[21]);
                  }
                }
              }
              arg1(flag[16]).hideActionSheet();
              const obj7 = arg1(flag[16]);
              obj1 = { code: arg0, isRegistration: arg0._isRegistration, deeplinkAttemptId: arg1, inviteInstanceId: arg3 };
              arg1(flag[17]).pushLazy(arg0(flag[19])(flag[18], flag.paths), obj1, closure_14);
              const obj8 = arg1(flag[17]);
            }
          }
          return true;
        });
      };
      tmp2Result._handleRegisterSuccess = () => {
        tmp2Result._isRegistration = true;
      };
      return tmp2Result;
    }
  }
  const arg1 = AcceptInviteManager;
  callback2(AcceptInviteManager, arg0);
  return callback(AcceptInviteManager);
}(importDefault(dependencyMap[25]));
tmp3 = new tmp3();
const tmp2 = arg1(dependencyMap[12]);
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/accept_invite/native/AcceptInviteManager.tsx");

export default tmp3;
