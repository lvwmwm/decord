// Module ID: 16628
// Function ID: 129662
// Name: _isNativeReflectConstruct
// Dependencies: [57, 5, 6, 7, 15, 17, 18, 1347, 10508, 4150, 4149, 4162, 4203, 6941, 15761, 4976, 664, 6947, 6939, 10505, 4977, 9480, 4979, 6968, 4302, 4301, 4983, 6964, 4194, 1327, 4300, 6962, 5078, 2]

// Module 16628 (_isNativeReflectConstruct)
import "_slicedToArray";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_6 from "QuestsExperimentLocations";
import closure_7 from "getQuestLogger";
import closure_8 from "_createForOfIteratorHelperLoose";
import closure_9 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import closure_16 from "_isNativeReflectConstruct";
import QuestsExperimentLocations from "QuestsExperimentLocations";
import getQuestLogger from "getQuestLogger";
import tmp4 from "AutomaticLifecycleManager";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function isQuestProgressable(userStatus) {
  let tmp = !require(6939) /* _createForOfIteratorHelperLoose */.isQuestExpired(userStatus);
  if (tmp) {
    tmp = null != userStatus.userStatus;
  }
  if (tmp) {
    tmp = null != userStatus.userStatus.enrolledAt;
  }
  if (tmp) {
    tmp = null == userStatus.userStatus.completedAt;
  }
  return tmp;
}
function handleEmbeddedActivityLaunchSuccess(applicationId) {
  let obj = require(10505) /* _createForOfIteratorHelperLoose */;
  const tmp2 = _createForOfIteratorHelperLoose(obj.getEligibleQuestsForApplicationId(quests.quests, applicationId));
  const iter = tmp2();
  let iter2 = iter;
  if (!iter.done) {
    while (true) {
      if (tmp) {
        let features = iter2.value.config.features;
        let tmp4 = require;
        let tmp5 = dependencyMap;
        if (features.includes(require(4977) /* QuestVariants */.QuestVariants.MOBILE_ACTIVITY_QUEST)) {
          break;
        }
      }
      let iter3 = tmp2();
      iter2 = iter3;
    }
    obj = { questContent: require(4979) /* QuestsVisibleMessagesChangedSource */.QuestContent.RUNNING_ACTIVITY, questContentCTA: require(6968) /* getQuestContentName */.QuestContentCTA.START_QUEST, sourceQuestContent: require(4979) /* QuestsVisibleMessagesChangedSource */.QuestContent.RUNNING_ACTIVITY };
    return require(9480) /* _manuallyStartConsoleQuest */.enrollInQuest(tmp3.id, obj);
  }
}
function isQuestRobloxRelated(arr, distributor) {
  let tmp = null != distributor;
  if (tmp) {
    let someResult = arr.some((arg0) => arg0 === outer1_0(outer1_2[24]).ROBLOX_APPLICATION_ID);
    if (someResult) {
      someResult = require(4301) /* hasSubgameInfoChanged */.isRobloxSubgame(distributor);
      const obj = require(4301) /* hasSubgameInfoChanged */;
    }
    tmp = someResult;
  }
  return tmp;
}
function manualHeartbeatInitializationQuest(config) {
  let hasItem = null != config;
  if (hasItem) {
    const features = config.config.features;
    hasItem = features.includes(require(4977) /* QuestVariants */.QuestVariants.MANUAL_HEARTBEAT_INITIALIZATION);
  }
  return hasItem;
}
const DISCORD_APPLICATION_ID = QuestsExperimentLocations.DISCORD_APPLICATION_ID;
const MINUTE = require("set").Millis.MINUTE;
const SECOND = require("set").Millis.SECOND;
getQuestLogger = { location: QuestsExperimentLocations.QuestsExperimentLocations.QUESTS_MANAGER };
getQuestLogger = getQuestLogger.getQuestLogger(getQuestLogger);
tmp4 = new tmp4();
let result = require("_classCallCheck").fileFinishedImporting("modules/quests/managers/QuestProgressManager.tsx");

export default tmp4;
