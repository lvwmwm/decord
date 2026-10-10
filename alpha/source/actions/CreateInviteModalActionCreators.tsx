// Module ID: 8689
// Function ID: 8690
// Name: CreateInviteModalActionCreators
// Dependencies: [8683, 1085, 584, 1265, 8496, 1126, 2]

// Module 8689 (CreateInviteModalActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import CreateInviteModalStore from "CreateInviteModalStore" /* 8683 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const AnalyticEvents = Constants.AnalyticEvents;
let obj = {
  init(guildId, channelId, location) {
    let skipCreateInvite;
    let targetApplicationId;
    let targetType;
    let targetUserId;
    let str = location.location;
    if (str === undefined) {
      str = "";
    }
    ({ targetType, targetUserId, targetApplicationId, skipCreateInvite } = location);
    const obj = DispatcherDefault;
    const obj2 = { type: "CREATE_INVITE_MODAL_INIT", guildId, channelId, targetType, targetUserId, targetApplicationId };
    obj.dispatch(obj2);
    if (!skipCreateInvite) {
      const self = this;
      const invite = this.createInvite(str, true);
    }
  },
  openSettings(guildId, channelId, source, onClose) {
    const inviteSettings = CreateInviteModalStore.getInviteSettings();
    const obj = { type: "CREATE_INVITE_MODAL_OPEN", guildId, channelId, onClose };
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    const merged = Object.assign(inviteSettings);
    dispatch(obj);
    const obj2 = AnalyticsUtilsDefault;
    const obj3 = { type: "Instant Invite", source };
    obj2.track(AnalyticEvents.OPEN_MODAL, obj3);
  },
  updateSettings(settings) {
    const obj = DispatcherDefault;
    const obj2 = { type: "CREATE_INVITE_MODAL_UPDATE_SETTINGS", settings };
    obj.dispatch(obj2);
  },
  resetSettings() {
    const obj = DispatcherDefault;
    obj.dispatch({ type: "CREATE_INVITE_MODAL_RESET_SETTINGS" });
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
    let obj = CreateInviteModalStore;
    const pendingSettings = CreateInviteModalStore.getPendingSettings();
    if (null != pendingSettings) {
      const obj4 = DispatcherDefault;
      obj4.dispatch({ type: "CREATE_INVITE_MODAL_GENERATE_INVITE" });
      const channelId = pendingSettings.channelId;
      ({ maxAge, maxUses, temporary, targetType, targetUserId, targetApplicationId, flags, roleIds } = pendingSettings);
      const invite = obj.getInvite();
      let code = null;
      const tmp6 = importDefault;
      if (arg1) {
        code = null;
        if (null != invite) {
          code = invite.code;
        }
      }
      let obj2 = { temporary, validate: code, max_age: maxAge, max_uses: maxUses, target_type: targetType, target_user_id: targetUserId, target_application_id: targetApplicationId, flags, role_ids: roleIds };
      const tmp6Result = tmp6(8496);
      const invite1 = tmp6Result.createInvite(channelId, obj2, arg0);
      invite1.then(() => {
        const obj = DispatcherDefault;
        const obj2 = { type: "CREATE_INVITE_MODAL_GENERATE_INVITE_SUCCESS", channelId };
        obj.dispatch(obj2);
      }, (message) => {
        const intl = channelId(dependencyMap[5]).intl;
        message = intl.string(channelId(dependencyMap[5]).t.WB1ip6);
        let message1;
        const tmp = dependencyMap;
        if (message != null) {
          message1 = message.message;
        }
        if (null != message1) {
          message = message.message;
        }
        const obj = require("Dispatcher");
        obj.dispatch({ type: "CREATE_INVITE_MODAL_GENERATE_INVITE_FAILURE", message });
      });
    }
  },
  close() {
    const onClose = CreateInviteModalStore.onClose;
    const obj = DispatcherDefault;
    obj.dispatch({ type: "CREATE_INVITE_MODAL_CLOSE" });
    if (onClose != null) {
      onClose();
    }
  }
};
const result = size.fileFinishedImporting("actions/CreateInviteModalActionCreators.tsx");

export default obj;
