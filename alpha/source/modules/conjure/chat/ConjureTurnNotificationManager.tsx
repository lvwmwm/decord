// Module ID: 19693
// Function ID: 19694
// Name: ConjureTurnNotificationManager
// Dependencies: [7855, 1231, 11192, 5044, 5172, 6705, 11717, 6979, 1072, 4997, 7423, 11081, 4966, 11057, 11211, 7559, 12854, 2]

// Module 19693 (ConjureTurnNotificationManager)
import UserSettings from "UserSettings" /* 4966 */;
import ChannelConstants from "ChannelConstants" /* 4997 */;
import ConjureUtils from "ConjureUtils" /* 7559 */;
import conjureProjectMute from "conjureProjectMute" /* 11057 */;
import ConjurePlatformUtilsDefault from "ConjurePlatformUtils" /* 11081 */;
import SoundUtils from "SoundUtils" /* 11211 */;
import conjureMentions from "conjureMentions" /* 12854 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7855 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 11192 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5044 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5172 */;
import SelfPresenceStore from "SelfPresenceStore" /* 6705 */;
import ConjurePagesStore from "ConjurePagesStore" /* 11717 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6979 */;
import Constants from "Constants" /* 1072 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7423 */;
import size from "module_2" /* 2 */;

let closure_12;
let unpackModuleId;
function handleConjureTurnSettled(projectId) {
  notifyTurn(projectId.projectId, projectId.guildId, projectId.title, projectId.body, projectId.nonce);
}
function handleConjureTurnNotification(arg0) {
  let body;
  let nonce;
  let projectId;
  ({ projectId, body, nonce } = arg0);
  const project = ConjureProjectStore.getProject(projectId);
  if (null != project) {
    let guild_id = project.guild_id;
    const tmp2 = notifyTurn;
    if (guild_id == null) {
      guild_id = project.preview_guild_id;
    }
    if (guild_id == null) {
      guild_id = null;
    }
    tmp2(projectId, guild_id, project.name, body, nonce);
  }
}
function handleLogout() {
  map.clear();
}
function notifyTurn(projectId, guildId, title, body, nonce) {
  let CHANNELResult;
  let tmp27;
  let tmp8Result3;
  if (null != nonce) {
    let num = map.get(projectId);
    const obj = map;
    if (num == null) {
      num = 0;
    }
    if (nonce > num) {
      const result = obj.set(projectId, nonce);
    }
  }
  const obj2 = ConjurePlatformUtilsDefault;
  let result2 = obj2.areTurnNotificationsDisabled() || SelfPresenceStore.getStatus() === constants.DND;
  if (!result2) {
    const FocusMode = UserSettings.FocusMode;
    result2 = FocusMode.getSetting();
  }
  if (!result2) {
    result2 = FamilyCenterStore.isCurrentUserInRestrictedHours();
  }
  if (!result2) {
    const obj3 = conjureProjectMute;
    if (!obj3.isConjureProjectMuted(UserSettingsProtoStore.settings, projectId)) {
      const isSoundDisabledResult = NotificationSettingsStore.isSoundDisabled(message1);
      guildId = SelectedGuildStore.getGuildId();
      if (ConjurePagesStore.getShownProjectId() !== projectId) {
        let conjureWorkspaceGuildId = guildId;
        if (guildId == null) {
          const tmp8Result = ConjureUtils;
          conjureWorkspaceGuildId = tmp8Result.resolveConjureWorkspaceGuildId(ConjureChatStore);
        }
        const obj5 = { projectId, guildId: conjureWorkspaceGuildId, title, body: tmp8Result3.withConjureMentionNames(body), route: CHANNELResult, sound: tmp27, volume };
        const presentTurnNotification = ConjurePlatformUtilsDefault.presentTurnNotification;
        ConjurePlatformUtilsDefault;
        CHANNELResult = null;
        tmp8Result3 = conjureMentions;
        if (null != conjureWorkspaceGuildId) {
          CHANNELResult = unpackModuleId.CHANNEL(conjureWorkspaceGuildId, StaticChannelRoute.CONJURE, projectId);
        }
        tmp27 = undefined;
        if (!isSoundDisabledResult) {
          tmp27 = bit_message1;
        }
        const result1 = presentTurnNotification(obj5);
      }
      const tmpResult2 = ConjurePlatformUtilsDefault;
      if (tmpResult2.isWindowFocused()) {
        if (!isSoundDisabledResult) {
          const tmp8Result4 = SoundUtils;
          tmp8Result4.playSound(bit_message1, volume);
        }
      }
    }
  }
}
({ Routes: unpackModuleId, StatusTypes: closure_12 } = Constants);
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
class ConjureTurnNotificationManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const obj = { CONJURE_TURN_SETTLED: handleConjureTurnSettled, CONJURE_TURN_NOTIFICATION: handleConjureTurnNotification, LOGOUT: handleLogout };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
const bit_message1 = "bit_message1";
const message1 = "message1";
const ConjureChatStore = "ConjureChatStore";
let c21 = 0.4;
const conjureTurnNotificationManager = new ConjureTurnNotificationManager();
const map = new Map();
let result = size.fileFinishedImporting("modules/conjure/chat/ConjureTurnNotificationManager.tsx");

export default conjureTurnNotificationManager;
