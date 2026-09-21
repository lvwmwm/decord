// Module ID: 17722
// Function ID: 17723
// Name: AcceptInviteManager
// Dependencies: [502, 2045, 2109, 2067, 4742, 4399, 7912, 1078, 7982, 1105, 4725, 4961, 17723, 1984, 7365, 17724, 577, 9016, 2]

// Module 17722 (AcceptInviteManager)
import DispatcherDefault from "Dispatcher" /* 577 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4961 */;
import InviteTypeUtils from "InviteTypeUtils" /* 7982 */;
import FriendInviteUtils from "FriendInviteUtils" /* 17724 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildMemberStore from "GuildMemberStore" /* 2109 */;
import GuildStore from "GuildStore" /* 2067 */;
import InviteStore from "InviteStore" /* 4742 */;
import PermissionStore from "PermissionStore" /* 4399 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7365 */;

require = fn;
const ACCEPT_INVITE_MODAL_KEY = fn(7912).ACCEPT_INVITE_MODAL_KEY;
const Constants = fn(1078);
({ InviteStates: c10, Permissions: closure_11, Routes: closure_12 } = Constants);
const prototype = function AcceptInviteManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  require = applyArgumentsResult;
  applyArgumentsResult._isRegistration = false;
  applyArgumentsResult.actions = {
    DISPLAYED_INVITE_SHOW(code) {
      return applyArgumentsResult._handleShowInvite(code);
    },
    DISPLAYED_INVITE_CLEAR() {
      return applyArgumentsResult._handleClearInvite();
    },
    DEFERRED_INVITE_SHOW() {
      return applyArgumentsResult._handleShowDeferredInvite();
    },
    REGISTER_SUCCESS() {
      return applyArgumentsResult._handleRegisterSuccess();
    }
  };
  applyArgumentsResult._handleShowInvite = function _handleShowInvite(code) {
    code = code.code;
    ({ deeplinkAttemptId, invite_instance_id } = code);
    if (AuthenticationStore.isAuthenticated()) {
      obj._handleInvite(code, deeplinkAttemptId, invite_instance_id);
    } else {
      obj._deferredCode = code;
    }
  };
  applyArgumentsResult._handleClearInvite = function _handleClearInvite() {
    applyArgumentsResult._deferredCode = null;
    applyArgumentsResult._isRegistration = false;
    ModalActionCreatorsDefault.popWithKey(ACCEPT_INVITE_MODAL_KEY);
  };
  applyArgumentsResult._handleShowDeferredInvite = function _handleShowDeferredInvite() {
    if (null != applyArgumentsResult._deferredCode) {
      obj._handleInvite(obj._deferredCode);
      obj._deferredCode = null;
    }
  };
  applyArgumentsResult._handleInvite = function _handleInvite(_deferredCode, deeplinkAttemptId, invite_instance_id) {
    const code = _deferredCode;
    const inviteInstanceId = invite_instance_id;
    const result = InviteStore.addConditionalChangeListener(() => {
      const invite = InviteStore.getInvite(code);
      let flag = null == invite;
      if (!flag) {
        flag = invite.state !== constants.RESOLVED && invite.state !== constants.EXPIRED && invite.state !== constants.BANNED && invite.state !== constants.ERROR;
        const tmp4 = invite.state !== constants.RESOLVED && invite.state !== constants.EXPIRED && invite.state !== constants.BANNED && invite.state !== constants.ERROR;
      }
      if (!flag) {
        if (null == invite.channel) {
          if (null == invite.guild) {
            if (null != invite.inviter) {
              let str = "Accept Invite";
              if (null != deeplinkAttemptId) {
                str = "Deep Link";
              }
              const obj = { location: str };
              FriendInviteUtils.acceptFriendInvite(invite, obj);
              DispatcherDefault.wait(() => set(9016).clearDisplayedInvite());
              flag = false;
            }
          }
        }
        let flag2 = false;
        if (invite.state === constants.RESOLVED) {
          flag2 = false;
          if (!obj9.isStreamInvite(invite)) {
            guild = invite.guild;
            let id;
            if (guild != null) {
              id = guild.id;
            }
            const target_channel_id = invite.target_channel_id;
            flag2 = false;
            if (null != id) {
              flag2 = false;
              if (null != target_channel_id) {
                flag2 = false;
                if (null != GuildStore.getGuild(id)) {
                  if (null != invite.roles) {
                    if (invite.roles.length > 0) {
                      const selfMember = GuildMemberStore.getSelfMember(id);
                      let roles1;
                      if (selfMember != null) {
                        roles1 = selfMember.roles;
                      }
                      if (roles1 == null) {
                        roles1 = [];
                      }
                      const set = new Set(roles1);
                      const roles = invite.roles;
                      flag2 = false;
                    }
                  }
                  let flag3 = PermissionStore.can(constants2.VIEW_CHANNEL, ChannelStore.getChannel(target_channel_id));
                  if (flag3) {
                    const target_message_id = invite.target_message_id;
                    tmp39(1105).transitionTo(__initData.CHANNEL(id, target_channel_id, target_message_id), { navigationReplace: true, openChannel: true });
                    flag3 = true;
                    const tmp39Result = tmp39(1105);
                  }
                  flag2 = flag3;
                }
              }
            }
          }
          obj9 = InviteTypeUtils;
          tmp39 = require;
        }
        if (flag2) {
          DispatcherDefault.wait(() => set(9016).clearDisplayedInvite());
          flag = false;
        } else {
          ActionSheetActionCreatorsDefault.hideActionSheet();
          const obj4 = { code, isRegistration: applyArgumentsResult._isRegistration, deeplinkAttemptId, inviteInstanceId };
          ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(17723, dependencyMap.paths), obj4, ACCEPT_INVITE_MODAL_KEY);
          flag = false;
        }
      }
      return flag;
    });
  };
  applyArgumentsResult._handleRegisterSuccess = function _handleRegisterSuccess() {
    applyArgumentsResult._isRegistration = true;
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp3 {
}
const prototype1 = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/accept_invite/native/AcceptInviteManager.tsx");

export default prototype1;
