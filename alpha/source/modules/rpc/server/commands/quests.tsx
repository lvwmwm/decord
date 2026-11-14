// Module ID: 16977
// Function ID: 16978
// Name: quests
// Dependencies: [8808, 1072, 16922, 7307, 12869, 8831, 7303, 1256, 572, 15252, 2]

// Module 16977 (quests)
import DispatcherDefault from "Dispatcher" /* 572 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import RPCErrorDefault from "RPCError" /* 7303 */;
import OAuth2Scopes from "OAuth2Scopes" /* 7307 */;
import QuestTaskUtils from "QuestTaskUtils" /* 8831 */;
import RPCHelpers from "RPCHelpers" /* 12869 */;
import QuestMatchingUtils from "QuestMatchingUtils" /* 15252 */;
import QuestStore from "QuestStore" /* 8808 */;
import Constants from "Constants" /* 1072 */;
import CONTEXT_MENU_ICON_NAMES_mod from "CONTEXT_MENU_ICON_NAMES" /* 16922 */;
import size from "module_2" /* 2 */;

let RPCCommands;
let closure_4;
let hasOwnProperty;
({ RPCCommands, RPCErrors: closure_4, AnalyticEvents: hasOwnProperty } = Constants);
let obj = {};
const GET_QUEST_ENROLLMENT_STATUS = RPCCommands.GET_QUEST_ENROLLMENT_STATUS;
let CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
let obj2 = {
  scope: OAuth2Scopes.OAuth2Scopes.IDENTIFY,
  handler(socket) {
    let enrolledAt;
    let enrolledAt1;
    socket = socket.socket;
    const quest_id = socket.args.quest_id;
    const obj = RPCHelpers;
    const result = obj.validatePostMessageTransport(socket.transport);
    const obj2 = RPCHelpers;
    const validateApplicationResult = obj2.validateApplication(socket.application);
    const quest = QuestStore.getQuest(quest_id);
    const obj3 = QuestTaskUtils;
    const activityApplicationId = obj3.getActivityApplicationId(quest);
    if (null != quest) {
      if (null != activityApplicationId) {
        if (activityApplicationId === validateApplicationResult) {
          const userStatus = quest.userStatus;
          const obj4 = { quest_id, is_enrolled: null != enrolledAt, enrolled_at: enrolledAt1 };
          enrolledAt = undefined;
          if (userStatus != null) {
            enrolledAt = userStatus.enrolledAt;
          }
          const userStatus2 = quest.userStatus;
          enrolledAt1 = undefined;
          if (userStatus2 != null) {
            enrolledAt1 = userStatus2.enrolledAt;
          }
          if (enrolledAt1 == null) {
            enrolledAt1 = null;
          }
          return obj4;
        }
      }
    }
    const obj5 = { errorCode: constants.INVALID_COMMAND };
    const tmp8 = RPCErrorDefault;
    const tmp82 = new tmp8(obj5, "Quest not found: " + quest_id);
    throw tmp82;
  }
};
obj[GET_QUEST_ENROLLMENT_STATUS] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.GET_QUEST_ENROLLMENT_STATUS, obj2);
const QUEST_START_TIMER = RPCCommands.QUEST_START_TIMER;
CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
let obj3 = {
  scope: OAuth2Scopes.OAuth2Scopes.IDENTIFY,
  handler(socket) {
    socket = socket.socket;
    const quest_id = socket.args.quest_id;
    const obj = RPCHelpers;
    const result = obj.validatePostMessageTransport(socket.transport);
    const obj2 = RPCHelpers;
    const validateApplicationResult = obj2.validateApplication(socket.application);
    const quest = QuestStore.getQuest(quest_id);
    const obj3 = QuestTaskUtils;
    const playActivityApplicationId = obj3.getPlayActivityApplicationId(quest);
    if (null != quest) {
      if (null != playActivityApplicationId) {
        if (playActivityApplicationId === validateApplicationResult) {
          const userStatus = quest.userStatus;
          let enrolledAt;
          if (userStatus != null) {
            enrolledAt = userStatus.enrolledAt;
          }
          if (null == enrolledAt) {
            const self = this;
            const self2 = this;
            const obj5 = { errorCode: constants.INVALID_COMMAND };
            const tmp14 = new RPCErrorDefault(obj5, "User is not enrolled in quest");
            throw tmp14;
          } else {
            const obj7 = { application_id: validateApplicationResult, quest_id };
            const obj4 = AnalyticsUtilsDefault;
            obj4.track(hasOwnProperty.RPC_QUEST_START_TIMER_CALLED, obj7);
            const obj8 = { type: "QUEST_APPLICATION_START_TIMER", questId: quest_id, applicationId: validateApplicationResult };
            const obj6 = DispatcherDefault;
            obj6.dispatch(obj8);
            return { success: true };
          }
        }
      }
    }
    const obj9 = { errorCode: constants.INVALID_COMMAND };
    const tmp16 = RPCErrorDefault;
    const tmp162 = new tmp16(obj9, "Quest not found: " + quest_id);
    throw tmp162;
  }
};
obj[QUEST_START_TIMER] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.QUEST_START_TIMER, obj3);
const GET_QUEST = RPCCommands.GET_QUEST;
CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
let obj4 = {
  scope: OAuth2Scopes.OAuth2Scopes.IDENTIFY,
  handler(socket) {
    let completedAt;
    let enrolledAt;
    let userStatus;
    socket = socket.socket;
    const obj = RPCHelpers;
    const result = obj.validatePostMessageTransport(socket.transport);
    const obj2 = RPCHelpers;
    const validateApplicationResult = obj2.validateApplication(socket.application);
    const obj3 = QuestMatchingUtils;
    const activityQuestForApplicationId = obj3.getActivityQuestForApplicationId(QuestStore.quests, validateApplicationResult);
    if (null == activityQuestForApplicationId) {
      const self = this;
      const self2 = this;
      const obj5 = { errorCode: constants.INVALID_COMMAND };
      const tmp10 = new RPCErrorDefault(obj5, "No eligible quests found");
      throw tmp10;
    } else {
      const obj7 = { quest_id: null, enrolled_at: enrolledAt, completed_at: completedAt, external_cta_url: activityQuestForApplicationId.config.ctaConfig.link };
      ({ id: obj4.quest_id, userStatus } = activityQuestForApplicationId);
      enrolledAt = undefined;
      if (userStatus != null) {
        enrolledAt = userStatus.enrolledAt;
      }
      if (enrolledAt == null) {
        enrolledAt = null;
      }
      const userStatus2 = activityQuestForApplicationId.userStatus;
      completedAt = undefined;
      if (userStatus2 != null) {
        completedAt = userStatus2.completedAt;
      }
      if (completedAt == null) {
        completedAt = null;
      }
      return obj7;
    }
  }
};
obj[GET_QUEST] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.GET_QUEST, obj4);
let result = size.fileFinishedImporting("modules/rpc/server/commands/quests.tsx");

export default obj;
