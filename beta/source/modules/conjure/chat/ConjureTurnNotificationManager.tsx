// Module ID: 18471
// Function ID: 18472
// Name: ConjureTurnNotificationManager
// Dependencies: [7525, 1246, 13512, 2119, 5034, 6015, 6293, 1087, 2075, 7085, 11017, 2044, 11002, 11372, 7222, 12174, 2]

// Module 18471 (ConjureTurnNotificationManager)
import UserSettings from "UserSettings" /* 2044 */;
import ChannelConstants from "ChannelConstants" /* 2075 */;
import ConjureUtils from "ConjureUtils" /* 7222 */;
import conjureProjectMute from "conjureProjectMute" /* 11002 */;
import ConjurePlatformUtilsDefault from "ConjurePlatformUtils" /* 11017 */;
import SoundUtils from "SoundUtils" /* 11372 */;
import conjureMentions from "conjureMentions" /* 12174 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7525 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1246 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 13512 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2119 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5034 */;
import SelfPresenceStore from "SelfPresenceStore" /* 6015 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6293 */;
import Constants from "Constants" /* 1087 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7085 */;
import size from "module_2" /* 2 */;

let c10;
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
  let tmp8Result4;
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
  let result2 = obj2.areTurnNotificationsDisabled() || SelfPresenceStore.getStatus() === unpackModuleId.DND;
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
      if (null != guildId) {
        if (ConjureProjectStore.getSelectedProjectId(guildId) === projectId) {
          if (SelectedChannelStore.getChannelId() === StaticChannelRoute.CONJURE) {
            const tmpResult = ConjurePlatformUtilsDefault;
            if (tmpResult.isWindowFocused()) {
              if (!isSoundDisabledResult) {
                const tmp8Result = SoundUtils;
                tmp8Result.playSound(bit_message1, volume);
              }
            }
          }
        }
      }
      let conjureWorkspaceGuildId = guildId;
      if (guildId == null) {
        const tmp8Result3 = ConjureUtils;
        conjureWorkspaceGuildId = tmp8Result3.resolveConjureWorkspaceGuildId(ConjureChatStore);
      }
      const obj4 = { projectId, guildId: conjureWorkspaceGuildId, title, body: tmp8Result4.withConjureMentionNames(body), route: CHANNELResult, sound: tmp27, volume };
      const presentTurnNotification = ConjurePlatformUtilsDefault.presentTurnNotification;
      ConjurePlatformUtilsDefault;
      CHANNELResult = null;
      tmp8Result4 = conjureMentions;
      if (null != conjureWorkspaceGuildId) {
        CHANNELResult = authStore.CHANNEL(conjureWorkspaceGuildId, StaticChannelRoute.CONJURE, projectId);
      }
      tmp27 = undefined;
      if (!isSoundDisabledResult) {
        tmp27 = bit_message1;
      }
      const result1 = presentTurnNotification(obj4);
    }
  }
}
({ Routes: c10, StatusTypes: unpackModuleId } = Constants);
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
let c20 = 0.4;
const conjureTurnNotificationManager = new ConjureTurnNotificationManager();
const map = new Map();
let result = size.fileFinishedImporting("modules/conjure/chat/ConjureTurnNotificationManager.tsx");

export default conjureTurnNotificationManager;
