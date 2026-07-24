// Module ID: 8533
// Function ID: 68005
// Dependencies: [8527, 653, 686, 675, 7540, 1212, 2]

// Module 8533
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";

const require = arg1;
const result = require("dispatcher").fileFinishedImporting("actions/CreateInviteModalActionCreators.tsx");

export default {
  init(guildId, channelId, location) {
    let skipCreateInvite;
    let targetApplicationId;
    let targetType;
    let targetUserId;
    const self = this;
    let str = location.location;
    if (str === undefined) {
      str = "";
    }
    ({ targetType, targetUserId, targetApplicationId, skipCreateInvite } = location);
    let obj = importDefault(686);
    obj = { type: "CREATE_INVITE_MODAL_INIT", guildId, channelId, targetType, targetUserId, targetApplicationId };
    obj.dispatch(obj);
    if (!skipCreateInvite) {
      const invite = self.createInvite(str, true);
    }
  },
  openSettings(arg0, arg1, source) {
    const inviteSettings = store.getInviteSettings();
    let obj = importDefault(686);
    obj = { type: "CREATE_INVITE_MODAL_OPEN" };
    const merged = Object.assign(inviteSettings);
    obj["guildId"] = arg0;
    obj["channelId"] = arg1;
    obj["onClose"] = arg3;
    obj.dispatch(obj);
    obj = { type: "Instant Invite", source };
    importDefault(675).track(AnalyticEvents.OPEN_MODAL, obj);
  },
  updateSettings(settings) {
    let obj = importDefault(686);
    obj = { type: "CREATE_INVITE_MODAL_UPDATE_SETTINGS", settings };
    obj.dispatch(obj);
  },
  resetSettings() {
    importDefault(686).dispatch({ type: "CREATE_INVITE_MODAL_RESET_SETTINGS" });
  },
  createInvite(arg0, arg1) {
    let flags;
    let maxAge;
    let maxUses;
    let roleIds;
    let targetApplicationId;
    let targetType;
    let targetUserId;
    let temporary;
    const pendingSettings = store.getPendingSettings();
    if (null != pendingSettings) {
      let obj = { type: "CREATE_INVITE_MODAL_GENERATE_INVITE" };
      importDefault(686).dispatch(obj);
      const channelId = pendingSettings.channelId;
      ({ maxAge, maxUses, temporary, targetType, targetUserId, targetApplicationId, flags, roleIds } = pendingSettings);
      const invite = store.getInvite();
      let code = null;
      if (arg1) {
        code = null;
        if (null != invite) {
          code = invite.code;
        }
      }
      obj = importDefault(7540);
      obj = { temporary, validate: code };
      const _parseInt = parseInt;
      obj.max_age = parseInt(maxAge, 10);
      const _parseInt2 = parseInt;
      obj.max_uses = parseInt(maxUses, 10);
      obj.target_type = targetType;
      obj.target_user_id = targetUserId;
      obj.target_application_id = targetApplicationId;
      obj.flags = flags;
      obj.role_ids = roleIds;
      const invite1 = obj.createInvite(channelId, obj, arg0);
      invite1.then(() => {
        let obj = outer1_1(outer1_2[2]);
        obj = { type: "CREATE_INVITE_MODAL_GENERATE_INVITE_SUCCESS", channelId };
        obj.dispatch(obj);
      }, (message) => {
        const intl = channelId(outer1_2[5]).intl;
        message = intl.string(channelId(outer1_2[5]).t.WB1ip6);
        message = undefined;
        if (null != message) {
          message = message.message;
        }
        if (null != message) {
          message = message.message;
        }
        let obj = outer1_1(outer1_2[2]);
        obj = { type: "CREATE_INVITE_MODAL_GENERATE_INVITE_FAILURE", message };
        obj.dispatch(obj);
      });
      const obj3 = importDefault(686);
    }
  },
  close() {
    const onClose = store.onClose;
    importDefault(686).dispatch({ type: "CREATE_INVITE_MODAL_CLOSE" });
    if (null != onClose) {
      onClose();
    }
  }
};
