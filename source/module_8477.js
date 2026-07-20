// Module ID: 8477
// Function ID: 67703
// Dependencies: []

// Module 8477
let closure_3 = importDefault(dependencyMap[0]);
const AnalyticEvents = arg1(dependencyMap[1]).AnalyticEvents;
const result = arg1(dependencyMap[6]).fileFinishedImporting("actions/CreateInviteModalActionCreators.tsx");

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
    let obj = importDefault(dependencyMap[2]);
    obj = { type: "CREATE_INVITE_MODAL_INIT", guildId, channelId, targetType, targetUserId, targetApplicationId };
    obj.dispatch(obj);
    if (!skipCreateInvite) {
      const invite = self.createInvite(str, true);
    }
  },
  openSettings(arg0, arg1, source) {
    const inviteSettings = store.getInviteSettings();
    let obj = importDefault(dependencyMap[2]);
    obj = { type: "CREATE_INVITE_MODAL_OPEN" };
    const merged = Object.assign(inviteSettings);
    obj["guildId"] = arg0;
    obj["channelId"] = arg1;
    obj["onClose"] = arg3;
    obj.dispatch(obj);
    obj = { type: "Instant Invite", source };
    importDefault(dependencyMap[3]).track(AnalyticEvents.OPEN_MODAL, obj);
  },
  updateSettings(settings) {
    let obj = importDefault(dependencyMap[2]);
    obj = { type: "CREATE_INVITE_MODAL_UPDATE_SETTINGS", settings };
    obj.dispatch(obj);
  },
  resetSettings() {
    importDefault(dependencyMap[2]).dispatch({ type: "CREATE_INVITE_MODAL_RESET_SETTINGS" });
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
      importDefault(dependencyMap[2]).dispatch(obj);
      const channelId = pendingSettings.channelId;
      arg1 = channelId;
      ({ maxAge, maxUses, temporary, targetType, targetUserId, targetApplicationId, flags, roleIds } = pendingSettings);
      const invite = store.getInvite();
      let code = null;
      if (arg1) {
        code = null;
        if (null != invite) {
          code = invite.code;
        }
      }
      obj = importDefault(dependencyMap[4]);
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
        let obj = callback(closure_2[2]);
        obj = { type: "CREATE_INVITE_MODAL_GENERATE_INVITE_SUCCESS", channelId };
        obj.dispatch(obj);
      }, (message) => {
        const intl = channelId(closure_2[5]).intl;
        message = intl.string(channelId(closure_2[5]).t.WB1ip6);
        message = undefined;
        if (null != message) {
          message = message.message;
        }
        if (null != message) {
          message = message.message;
        }
        let obj = callback(closure_2[2]);
        obj = { type: "CREATE_INVITE_MODAL_GENERATE_INVITE_FAILURE", message };
        obj.dispatch(obj);
      });
      const obj3 = importDefault(dependencyMap[2]);
    }
  },
  close() {
    const onClose = store.onClose;
    importDefault(dependencyMap[2]).dispatch({ type: "CREATE_INVITE_MODAL_CLOSE" });
    if (null != onClose) {
      onClose();
    }
  }
};
