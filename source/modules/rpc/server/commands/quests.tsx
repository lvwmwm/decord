// Module ID: 13487
// Function ID: 103661
// Dependencies: [6941, 653, 8354, 10530, 6964, 10525, 675, 686, 10505, 2]

// Module 13487
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";

let RPCCommands;
let closure_4;
let closure_5;
const require = arg1;
({ RPCCommands, RPCErrors: closure_4, AnalyticEvents: closure_5 } = ME);
let obj = {};
obj = {
  scope: require("set").OAuth2Scopes.IDENTIFY,
  handler(socket) {
    socket = socket.socket;
    const quest_id = socket.args.quest_id;
    let obj = require(10530) /* recurseReplaceContentTree */;
    const result = obj.validatePostMessageTransport(socket.transport);
    const obj2 = require(10530) /* recurseReplaceContentTree */;
    const quest = store.getQuest(quest_id);
    const validateApplicationResult = require(10530) /* recurseReplaceContentTree */.validateApplication(socket.application);
    const activityApplicationId = require(6964) /* _createForOfIteratorHelperLoose */.getActivityApplicationId(quest);
    if (null != quest) {
      if (null != activityApplicationId) {
        if (activityApplicationId === validateApplicationResult) {
          obj = { quest_id };
          const userStatus = quest.userStatus;
          let enrolledAt;
          if (null != userStatus) {
            enrolledAt = userStatus.enrolledAt;
          }
          obj.is_enrolled = null != enrolledAt;
          const userStatus2 = quest.userStatus;
          let enrolledAt1;
          if (null != userStatus2) {
            enrolledAt1 = userStatus2.enrolledAt;
          }
          let tmp7 = null;
          if (null != enrolledAt1) {
            tmp7 = enrolledAt1;
          }
          obj.enrolled_at = tmp7;
          return obj;
        }
      }
    }
    let tmp8 = importDefault(10525);
    obj = { errorCode: constants.INVALID_COMMAND };
    tmp8 = new tmp8(obj, "Quest not found: " + quest_id);
    throw tmp8;
  }
};
obj[RPCCommands.GET_QUEST_ENROLLMENT_STATUS] = obj;
obj = {
  scope: require("set").OAuth2Scopes.IDENTIFY,
  handler(socket) {
    socket = socket.socket;
    const quest_id = socket.args.quest_id;
    let obj = require(10530) /* recurseReplaceContentTree */;
    const result = obj.validatePostMessageTransport(socket.transport);
    let obj1 = require(10530) /* recurseReplaceContentTree */;
    const validateApplicationResult = obj1.validateApplication(socket.application);
    const quest = store.getQuest(quest_id);
    let obj2 = require(6964) /* _createForOfIteratorHelperLoose */;
    const playActivityApplicationId = obj2.getPlayActivityApplicationId(quest);
    if (null != quest) {
      if (null != playActivityApplicationId) {
        if (playActivityApplicationId === validateApplicationResult) {
          const userStatus = quest.userStatus;
          let enrolledAt;
          if (null != userStatus) {
            enrolledAt = userStatus.enrolledAt;
          }
          if (null == enrolledAt) {
            let tmp13 = importDefault(10525);
            obj = { errorCode: constants.INVALID_COMMAND };
            const prototype = tmp13.prototype;
            tmp13 = new tmp13(obj, "User is not enrolled in quest");
            throw tmp13;
          } else {
            let obj3 = importDefault(675);
            obj = { application_id: validateApplicationResult, quest_id };
            obj3.track(constants2.RPC_QUEST_START_TIMER_CALLED, obj);
            obj1 = { type: "QUEST_APPLICATION_START_TIMER", questId: quest_id, applicationId: validateApplicationResult };
            importDefault(686).dispatch(obj1);
            obj2 = { success: true };
            return obj2;
          }
        }
      }
    }
    let tmp20 = importDefault(10525);
    obj3 = { errorCode: constants.INVALID_COMMAND };
    tmp20 = new tmp20(obj3, "Quest not found: " + quest_id);
    throw tmp20;
  }
};
obj[RPCCommands.QUEST_START_TIMER] = obj;
obj[RPCCommands.GET_QUEST] = {
  scope: require("set").OAuth2Scopes.IDENTIFY,
  handler(socket) {
    socket = socket.socket;
    let obj = require(10530) /* recurseReplaceContentTree */;
    const result = obj.validatePostMessageTransport(socket.transport);
    const obj2 = require(10530) /* recurseReplaceContentTree */;
    const validateApplicationResult = require(10530) /* recurseReplaceContentTree */.validateApplication(socket.application);
    const eligibleQuestsForApplicationId = require(10505) /* _createForOfIteratorHelperLoose */.getEligibleQuestsForApplicationId(store.quests, validateApplicationResult, true);
    if (0 === eligibleQuestsForApplicationId.length) {
      let tmp5 = importDefault(10525);
      obj = { errorCode: constants.INVALID_COMMAND };
      let prototype = tmp5.prototype;
      tmp5 = new tmp5(obj, "No eligible quests found");
      throw tmp5;
    } else {
      const mapped = eligibleQuestsForApplicationId.map((id) => {
        const obj = { quest_id: id.id };
        const userStatus = id.userStatus;
        let enrolledAt;
        if (null != userStatus) {
          enrolledAt = userStatus.enrolledAt;
        }
        let tmp2 = null;
        if (null != enrolledAt) {
          tmp2 = enrolledAt;
        }
        obj.enrolled_at = tmp2;
        const userStatus2 = id.userStatus;
        let completedAt;
        if (null != userStatus2) {
          completedAt = userStatus2.completedAt;
        }
        let tmp4 = null;
        if (null != completedAt) {
          tmp4 = completedAt;
        }
        obj.completed_at = tmp4;
        obj.external_cta_url = id.config.ctaConfig.link;
        return obj;
      });
      return mapped.sort((enrolled_at, enrolled_at2) => {
        if (null != enrolled_at.enrolled_at) {
          let num2 = 1;
          if (null != enrolled_at.enrolled_at) {
            let num3 = -1;
            if (null != enrolled_at2.enrolled_at) {
              const _Date = Date;
              const date = new Date(enrolled_at.enrolled_at);
              const _Date2 = Date;
              const time = date.getTime();
              const date1 = new Date(enrolled_at2.enrolled_at);
              num3 = time - date1.getTime();
            }
            num2 = num3;
          }
          let num = num2;
        } else {
          num = 0;
        }
        return num;
      })[0];
    }
    const obj3 = require(10505) /* _createForOfIteratorHelperLoose */;
  }
};
let obj1 = {
  scope: require("set").OAuth2Scopes.IDENTIFY,
  handler(socket) {
    socket = socket.socket;
    let obj = require(10530) /* recurseReplaceContentTree */;
    const result = obj.validatePostMessageTransport(socket.transport);
    const obj2 = require(10530) /* recurseReplaceContentTree */;
    const validateApplicationResult = require(10530) /* recurseReplaceContentTree */.validateApplication(socket.application);
    const eligibleQuestsForApplicationId = require(10505) /* _createForOfIteratorHelperLoose */.getEligibleQuestsForApplicationId(store.quests, validateApplicationResult, true);
    if (0 === eligibleQuestsForApplicationId.length) {
      let tmp5 = importDefault(10525);
      obj = { errorCode: constants.INVALID_COMMAND };
      let prototype = tmp5.prototype;
      tmp5 = new tmp5(obj, "No eligible quests found");
      throw tmp5;
    } else {
      const mapped = eligibleQuestsForApplicationId.map((id) => {
        const obj = { quest_id: id.id };
        const userStatus = id.userStatus;
        let enrolledAt;
        if (null != userStatus) {
          enrolledAt = userStatus.enrolledAt;
        }
        let tmp2 = null;
        if (null != enrolledAt) {
          tmp2 = enrolledAt;
        }
        obj.enrolled_at = tmp2;
        const userStatus2 = id.userStatus;
        let completedAt;
        if (null != userStatus2) {
          completedAt = userStatus2.completedAt;
        }
        let tmp4 = null;
        if (null != completedAt) {
          tmp4 = completedAt;
        }
        obj.completed_at = tmp4;
        obj.external_cta_url = id.config.ctaConfig.link;
        return obj;
      });
      return mapped.sort((enrolled_at, enrolled_at2) => {
        if (null != enrolled_at.enrolled_at) {
          let num2 = 1;
          if (null != enrolled_at.enrolled_at) {
            let num3 = -1;
            if (null != enrolled_at2.enrolled_at) {
              const _Date = Date;
              const date = new Date(enrolled_at.enrolled_at);
              const _Date2 = Date;
              const time = date.getTime();
              const date1 = new Date(enrolled_at2.enrolled_at);
              num3 = time - date1.getTime();
            }
            num2 = num3;
          }
          let num = num2;
        } else {
          num = 0;
        }
        return num;
      })[0];
    }
    const obj3 = require(10505) /* _createForOfIteratorHelperLoose */;
  }
};
let result = require("set").fileFinishedImporting("modules/rpc/server/commands/quests.tsx");

export default obj;
