// Module ID: 19029
// Function ID: 19030
// Name: AcceptInviteManager
// Dependencies: [502, 4856, 4916, 4878, 5736, 4936, 7779, 1084, 7843, 1111, 5246, 6707, 19030, 1999, 7250, 19031, 9373, 2]

// Module 19029 (AcceptInviteManager)
import router_utils from "router_utils" /* 1111 */;
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5246 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6707 */;
import AcceptInviteConstants from "AcceptInviteConstants" /* 7779 */;
import InviteTypeUtils from "InviteTypeUtils" /* 7843 */;
import DisplayedInviteActionCreators from "DisplayedInviteActionCreators" /* 9373 */;
import FriendInviteUtils from "FriendInviteUtils" /* 19031 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4856 */;
import GuildMemberStore from "GuildMemberStore" /* 4916 */;
import GuildStore from "GuildStore" /* 4878 */;
import InviteStore from "InviteStore" /* 5736 */;
import PermissionStore from "PermissionStore" /* 4936 */;
import Constants from "Constants" /* 1084 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7250 */;
import size from "module_2" /* 2 */;

let c10;
let closure_12;
let unpackModuleId;
const ACCEPT_INVITE_MODAL_KEY = AcceptInviteConstants.ACCEPT_INVITE_MODAL_KEY;
({ InviteStates: c10, Permissions: unpackModuleId, Routes: closure_12 } = Constants);
class AcceptInviteManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult._isRegistration = false;
    applyArgumentsResult.actions = {
      DISPLAYED_INVITE_SHOW(code) {
        return require._handleShowInvite(code);
      },
      DISPLAYED_INVITE_CLEAR() {
        return require._handleClearInvite();
      },
      DEFERRED_INVITE_SHOW() {
        return require._handleShowDeferredInvite();
      },
      REGISTER_SUCCESS() {
        return require._handleRegisterSuccess();
      }
    };
    applyArgumentsResult._handleShowInvite = function _handleShowInvite(code) {
      let deeplinkAttemptId;
      let invite_instance_id;
      code = code.code;
      ({ deeplinkAttemptId, invite_instance_id } = code);
      if (AuthenticationStore.isAuthenticated()) {
        require._handleInvite(code, deeplinkAttemptId, invite_instance_id);
      } else {
        require._deferredCode = code;
      }
    };
    applyArgumentsResult._handleClearInvite = function _handleClearInvite() {
      require._deferredCode = null;
      require._isRegistration = false;
      const obj = ModalActionCreatorsDefault;
      obj.popWithKey(ACCEPT_INVITE_MODAL_KEY);
    };
    applyArgumentsResult._handleShowDeferredInvite = function _handleShowDeferredInvite() {
      if (null != require._deferredCode) {
        require._handleInvite(require._deferredCode);
        require._deferredCode = null;
      }
    };
    applyArgumentsResult._handleInvite = function _handleInvite(_deferredCode, deeplinkAttemptId, invite_instance_id) {
      let closure_0 = _deferredCode;
      const inviteInstanceId = invite_instance_id;
      const result = InviteStore.addConditionalChangeListener(function() {
        const invite = InviteStore.getInvite(_deferredCode);
        let flag = null == invite;
        const tmp = _deferredCode;
        if (!flag) {
          flag = invite.state !== constants.RESOLVED && invite.state !== constants.EXPIRED && invite.state !== constants.BANNED && invite.state !== constants.ERROR;
        }
        if (!flag) {
          if (null == invite.channel) {
            if (null == invite.guild) {
              if (null != invite.inviter) {
                let str = "Accept Invite";
                const acceptFriendInvite = FriendInviteUtils.acceptFriendInvite;
                FriendInviteUtils;
                const tmp32 = require;
                if (null != deeplinkAttemptId) {
                  str = "Deep Link";
                }
                const obj3 = { location: str };
                acceptFriendInvite(invite, obj3);
                const tmp32Result = tmp32(9373);
                tmp32Result.clearDisplayedInvite();
                flag = false;
              }
            }
          }
          let flag2 = false;
          if (invite.state === constants.RESOLVED) {
            flag2 = false;
            const obj7 = InviteTypeUtils;
            if (!obj7.isStreamInvite(invite)) {
              const guild = invite.guild;
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
                        const _Set = Set;
                        const selfMember = GuildMemberStore.getSelfMember(id);
                        let roles1;
                        if (selfMember != null) {
                          roles1 = selfMember.roles;
                        }
                        if (roles1 == null) {
                          roles1 = [];
                        }
                        const self = this;
                        const self2 = this;
                        const _Set1 = new _Set(roles1);
                        const roles = invite.roles;
                        flag2 = false;
                      }
                    }
                    let flag3 = PermissionStore.can(unpackModuleId.VIEW_CHANNEL, ChannelStore.getChannel(target_channel_id));
                    if (flag3) {
                      const target_message_id = invite.target_message_id;
                      const transitionTo = tmp38(1111).transitionTo;
                      const CHANNEL = constants2.CHANNEL;
                      router_utils;
                      transitionTo(CHANNEL(id, target_channel_id, target_message_id), { navigationReplace: true, openChannel: true });
                      flag3 = true;
                    }
                    flag2 = flag3;
                  }
                }
              }
            }
          }
          if (flag2) {
            const obj4 = DisplayedInviteActionCreators;
            obj4.clearDisplayedInvite();
            flag = false;
          } else {
            const _isRegistration = require._isRegistration;
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
            const obj5 = { code: tmp, isRegistration: _isRegistration, deeplinkAttemptId, inviteInstanceId };
            const obj2 = ModalActionCreatorsDefault;
            obj2.pushLazy(asyncRequire(19030, dependencyMap.paths), obj5, ACCEPT_INVITE_MODAL_KEY);
            flag = false;
          }
        }
        return flag;
      });
    };
    applyArgumentsResult._handleRegisterSuccess = function _handleRegisterSuccess() {
      require._isRegistration = true;
    };
    return applyArgumentsResult;
  }
}
const acceptInviteManager = new AcceptInviteManager();
let result = size.fileFinishedImporting("modules/accept_invite/native/AcceptInviteManager.tsx");

export default acceptInviteManager;
