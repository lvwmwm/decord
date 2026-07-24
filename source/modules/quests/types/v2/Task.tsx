// Module ID: 6950
// Function ID: 55562
// Name: _firstPartyTasksFromServer
// Dependencies: [6951, 4983, 6952, 6953, 2]
// Exports: questTaskConfigFromServer, questTaskConfigV2FromServer

// Module 6950 (_firstPartyTasksFromServer)
function _firstPartyTasksFromServer(tasks) {
  let obj = {};
  const keys = Object.keys(tasks);
  for (let num = 0; num < keys.length; num = num + 1) {
    let tmp = keys[num];
    let tmp2 = tasks[tmp];
    if (null != tmp2) {
      obj = {};
      ({ event_name: obj2.eventName, target: obj2.target, external_ids: obj2.externalIds } = tmp2);
      obj[tmp] = obj;
    }
  }
  return obj;
}
function _thirdPartyTasksFromServer(tasks) {
  let obj = {};
  const keys = Object.keys(tasks);
  for (let num = 0; num < keys.length; num = num + 1) {
    let tmp = keys[num];
    let tmp2 = tasks[tmp];
    if (null != tmp2) {
      obj = {};
      ({ event_name: obj2.eventName, title: obj2.title, target: obj2.target, description: obj2.description } = tmp2);
      obj[tmp] = obj;
    }
  }
  return obj;
}
function _questTaskFromServer(type) {
  type = type.type;
  if (require(4983) /* set */.FirstPartyQuestTaskTypes.WATCH_VIDEO === type) {
    let obj = { type: require(4983) /* set */.FirstPartyQuestTaskTypes.WATCH_VIDEO, target: type.target, assets: require(6952) /* videoAssetFromServer */.desktopVideoAssetsFromServer(type.assets) };
    const obj14 = require(6952) /* videoAssetFromServer */;
    obj.messages = require(6952) /* videoAssetFromServer */.desktopVideoMessagesFromServer(type.messages);
    return obj;
  } else if (require(4983) /* set */.FirstPartyQuestTaskTypes.WATCH_VIDEO_ON_MOBILE === type) {
    obj = { type: require(4983) /* set */.FirstPartyQuestTaskTypes.WATCH_VIDEO_ON_MOBILE, target: type.target, assets: require(6952) /* videoAssetFromServer */.mobileVideoAssetsFromServer(type.assets) };
    const obj11 = require(6952) /* videoAssetFromServer */;
    obj.messages = require(6952) /* videoAssetFromServer */.mobileVideoMessagesFromServer(type.messages);
    return obj;
  } else if (require(4983) /* set */.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP === type) {
    const obj1 = { type: require(4983) /* set */.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP };
    ({ target: obj9.target, applications: obj9.applications } = type);
    return obj1;
  } else if (require(4983) /* set */.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP === type) {
    const obj2 = { type: require(4983) /* set */.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP };
    ({ target: obj8.target, applications: obj8.applications } = type);
    return obj2;
  } else if (require(4983) /* set */.FirstPartyQuestTaskTypes.PLAY_ACTIVITY === type) {
    const obj3 = { type: require(4983) /* set */.FirstPartyQuestTaskTypes.PLAY_ACTIVITY };
    ({ target: obj7.target, applications: obj7.applications } = type);
    return obj3;
  } else if (require(4983) /* set */.FirstPartyQuestTaskTypes.PLAY_ON_XBOX === type) {
    const obj4 = { type: require(4983) /* set */.FirstPartyQuestTaskTypes.PLAY_ON_XBOX };
    ({ target: obj6.target, external_ids: obj6.externalIds, applications: obj6.applications } = type);
    return obj4;
  } else if (require(4983) /* set */.FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION === type) {
    const obj5 = { type: require(4983) /* set */.FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION };
    ({ target: obj5.target, external_ids: obj5.externalIds, applications: obj5.applications } = type);
    return obj5;
  } else if (require(4983) /* set */.FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_GAME === type) {
    const obj6 = { type: require(4983) /* set */.FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_GAME };
    ({ target: obj3.target, event_name: obj3.eventName } = type);
    const obj7 = { taskTitle: type.messages.task_title, taskDescription: type.messages.task_description };
    obj6.messages = obj7;
    ({ applications: obj3.applications, account_link_instructions: obj3.accountLinkInstructions } = type);
    return obj6;
  } else if (require(4983) /* set */.FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_ACTIVITY === type) {
    obj = { type: require(4983) /* set */.FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_ACTIVITY };
    ({ target: obj.target, event_name: obj.eventName } = type);
    const obj8 = { taskTitle: type.messages.task_title, taskDescription: type.messages.task_description };
    obj.messages = obj8;
    obj.applications = type.applications;
    return obj;
  } else {
    return null;
  }
}
const result = require("videoAssetFromServer").fileFinishedImporting("modules/quests/types/v2/Task.tsx");

export const questTaskConfigFromServer = function questTaskConfigFromServer(type) {
  type = type.type;
  if (require(6951) /* QuestTaskConfigTypes */.QuestTaskConfigTypes.FIRST_PARTY === type) {
    let obj = { type: require(6951) /* QuestTaskConfigTypes */.QuestTaskConfigTypes.FIRST_PARTY, tasks: _firstPartyTasksFromServer(type.tasks), joinOperator: type.join_operator };
    return obj;
  } else if (require(6951) /* QuestTaskConfigTypes */.QuestTaskConfigTypes.THIRD_PARTY === type) {
    obj = { type: require(6951) /* QuestTaskConfigTypes */.QuestTaskConfigTypes.THIRD_PARTY, tasks: _thirdPartyTasksFromServer(type.tasks) };
    ({ enrollment_url: obj.enrollmentUrl, developer_application_id: obj.developerApplicationId, join_operator: obj.joinOperator } = type);
    return obj;
  }
};
export const questTaskConfigV2FromServer = function questTaskConfigV2FromServer(task_config_v2) {
  const entries = Object.entries(task_config_v2.tasks);
  const mapped = entries.map((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    const items = [tmp, outer1_4(tmp2)];
    return items;
  });
  return {
    tasks: Object.fromEntries(mapped.filter((arg0) => {
      let tmp;
      [, tmp] = arg0;
      return null !== tmp;
    })),
    joinOperator: task_config_v2.join_operator
  };
};
