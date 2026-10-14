// Module ID: 18114
// Function ID: 18115
// Name: ConjureTurnNotificationManager
// Dependencies: [7265, 1244, 13111, 2116, 4941, 5764, 1390, 10662, 1085, 2072, 6812, 10696, 2041, 4964, 10686, 11054, 6951, 2]

// Module 18114 (ConjureTurnNotificationManager)
import UserSettings from "UserSettings" /* 2041 */;
import ChannelConstants from "ChannelConstants" /* 2072 */;
import UserUtilsDefault from "UserUtils" /* 4964 */;
import ConjureUtils from "ConjureUtils" /* 6951 */;
import conjureProjectMute from "conjureProjectMute" /* 10686 */;
import ConjurePlatformUtilsDefault from "ConjurePlatformUtils" /* 10696 */;
import SoundUtils from "SoundUtils" /* 11054 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7265 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1244 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 13111 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2116 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4941 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5764 */;
import UserStore from "UserStore" /* 1390 */;
import ConjureProjectStore from "ConjureProjectStore" /* 10662 */;
import Constants from "Constants" /* 1085 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6812 */;
import size from "module_2" /* 2 */;

let user;

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
  let tmp28;
  if (null != nonce) {
    let obj = map;
    let num = map.get(projectId);
    if (num == null) {
      num = 0;
    }
    if (nonce > num) {
      const result = obj.set(projectId, nonce);
    }
  }
  const obj2 = ConjurePlatformUtilsDefault;
  let result2 = obj2.areTurnNotificationsDisabled();
  if (!result2) {
    result2 = SelfPresenceStore.getStatus() === constants.DND;
  }
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
        const tmp8Result2 = ConjureUtils;
        conjureWorkspaceGuildId = tmp8Result2.resolveConjureWorkspaceGuildId(VibegrationsChatStore);
      }
      const obj4 = {
        projectId,
        guildId: conjureWorkspaceGuildId,
        title,
        body: body.replace(re22, (arg0, arg1) => {
              let combined = arg0;
              user = user.getUser(arg1);
              if (null != user) {
                const _HermesInternal = HermesInternal;
                const obj = UserUtilsDefault;
                combined = "@" + obj.getName(user);
              }
              return combined;
            }),
        route: CHANNELResult,
        sound: tmp28,
        volume
      };
      const presentTurnNotification = ConjurePlatformUtilsDefault.presentTurnNotification;
      ConjurePlatformUtilsDefault;
      CHANNELResult = null;
      if (null != conjureWorkspaceGuildId) {
        CHANNELResult = unpackModuleId.CHANNEL(conjureWorkspaceGuildId, StaticChannelRoute.CONJURE, projectId);
      }
      tmp28 = undefined;
      if (!isSoundDisabledResult) {
        tmp28 = bit_message1;
      }
      const result1 = presentTurnNotification(obj4);
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
const VibegrationsChatStore = "VibegrationsChatStore";
let c21 = 0.4;
const re22 = /<@!?(\d+)>/g;
const conjureTurnNotificationManager = new ConjureTurnNotificationManager();
const map = new Map();
let result = size.fileFinishedImporting("modules/conjure/chat/ConjureTurnNotificationManager.tsx");

export default conjureTurnNotificationManager;
