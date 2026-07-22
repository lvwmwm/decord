// Module ID: 16391
// Function ID: 126587
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16391 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const DAY = importDefault(dependencyMap[6]).Millis.DAY;
let closure_10 = 30 * importDefault(dependencyMap[6]).Millis.MINUTE;
let closure_11 = 5 * importDefault(dependencyMap[6]).Millis.MINUTE;
const HOUR = importDefault(dependencyMap[6]).Millis.HOUR;
let closure_12 = 5 * importDefault(dependencyMap[6]).Millis.MINUTE;
let tmp2 = (arg0) => {
  class QuestFetchManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, QuestFetchManager);
      items1 = [...items];
      obj = closure_6(QuestFetchManager);
      tmp2 = closure_5;
      if (closure_13()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      QuestFetchManager = tmp2Result;
      tmp2Result.instantiatedAt = Date.now();
      tmp2Result.initialFetchTimerId = null;
      tmp2Result.initialQuestHomeHeroFetchTimerId = null;
      tmp2Result.recurringFetchTimerId = null;
      tmp2Result.lastFetchAttemptedAt = 0;
      tmp2Result.lastFetchedQuestForLocaleChangeAt = 0;
      tmp2Result.hasHandledConnectionOpen = false;
      tmp2Result.handleQuestsFetchCurrentQuestsBegin = () => {
        tmp2Result.lastFetchAttemptedAt = Date.now();
      };
      tmp2Result.handlePostConnectionOpen = () => {
        let questFetchJitterMs;
        let questHomeHeroJitterMs;
        window.clearTimeout(tmp2Result.initialFetchTimerId);
        window.clearTimeout(tmp2Result.initialQuestHomeHeroFetchTimerId);
        window.clearTimeout(tmp2Result.recurringFetchTimerId);
        tmp2Result.recurringFetchTimerId = window.setInterval(() => {
          if (Date.now() - lib.lastFetchAttemptedAt > closure_9) {
            lib._fetch("post_connect_recurring");
          }
        }, closure_10);
        let obj = tmp2Result(closure_2[7]);
        const isEligibleForQuests = obj.getIsEligibleForQuests();
        tmp2Result.hasHandledConnectionOpen = true;
        if (tmp2Result.hasHandledConnectionOpen) {
          if (isEligibleForQuests) {
            obj = { location: "QuestFetchManager" };
            let DEFAULT_QUEST_FETCH_JITTER_CONFIG = tmp2Result(closure_2[8]).getQuestFetchReconnectJitterConfig(obj);
            const obj2 = tmp2Result(closure_2[8]);
          }
          const _Math = Math;
          const _Math2 = Math;
          ({ questFetchJitterMs, questHomeHeroJitterMs } = DEFAULT_QUEST_FETCH_JITTER_CONFIG);
          const rounded = Math.floor(Math.random() * questFetchJitterMs);
          const _window = window;
          tmp2Result.initialFetchTimerId = window.setTimeout(() => {
            if (Date.now() - obj.lastFetchedCurrentQuests > closure_12) {
              lib._fetch("post_connect_initial");
            }
          }, rounded);
          if (isEligibleForQuests) {
            const _Math3 = Math;
            const _Math4 = Math;
            const _window2 = window;
            tmp2Result.initialQuestHomeHeroFetchTimerId = window.setTimeout(() => {
              const questHomeHero = lib(closure_2[9]).fetchQuestHomeHero();
            }, rounded + Math.floor(Math.random() * questHomeHeroJitterMs));
          }
        }
        DEFAULT_QUEST_FETCH_JITTER_CONFIG = tmp2Result(closure_2[8]).DEFAULT_QUEST_FETCH_JITTER_CONFIG;
      };
      tmp2Result.handleRunningGamesChange = () => {

      };
      tmp2Result.handleUserSettingsProtoUpdate = (settings) => {
        let wasSaved = !tmp;
        if ("localization" in settings.settings.proto) {
          wasSaved = !settings.partial;
        }
        if (!wasSaved) {
          wasSaved = settings.wasSaved;
        }
        if (!wasSaved) {
          const _Date = Date;
          wasSaved = Date.now() - tmp2Result.lastFetchedQuestForLocaleChangeAt <= closure_11;
        }
        if (!wasSaved) {
          const _Date2 = Date;
          tmp2Result.lastFetchedQuestForLocaleChangeAt = Date.now();
          tmp2Result._fetch("user_settings");
        }
      };
      tmp2Result.handleStartSession = () => {
        tmp2Result.hasHandledConnectionOpen = false;
      };
      tmp2Result.handleLogout = () => {
        window.clearTimeout(tmp2Result.initialFetchTimerId);
        window.clearTimeout(tmp2Result.initialQuestHomeHeroFetchTimerId);
        window.clearTimeout(tmp2Result.recurringFetchTimerId);
        tmp2Result.lastFetchAttemptedAt = 0;
        tmp2Result.lastFetchedQuestForLocaleChangeAt = 0;
        tmp2Result.hasHandledConnectionOpen = false;
      };
      tmp2Result.actions = { QUESTS_FETCH_CURRENT_QUESTS_BEGIN: tmp2Result.handleQuestsFetchCurrentQuestsBegin, POST_CONNECTION_OPEN: tmp2Result.handlePostConnectionOpen, RUNNING_GAMES_CHANGE: tmp2Result.handleRunningGamesChange, RUNNING_NON_GAMES_CHANGE: tmp2Result.handleRunningGamesChange, USER_SETTINGS_PROTO_UPDATE: tmp2Result.handleUserSettingsProtoUpdate, START_SESSION: tmp2Result.handleStartSession, LOGOUT: tmp2Result.handleLogout };
      return tmp2Result;
    }
  }
  const arg1 = QuestFetchManager;
  callback2(QuestFetchManager, arg0);
  const items = [
    {
      key: "_fetch",
      value(callerSource) {
        let obj = QuestFetchManager(closure_2[7]);
        let isEligibleForQuests = obj.getIsEligibleForQuests();
        if (isEligibleForQuests) {
          isEligibleForQuests = !closure_8.isFetchingCurrentQuests;
        }
        if (isEligibleForQuests) {
          let obj1 = callback(closure_2[10]);
          obj = { style: "y", textStyle: "isArray" };
          obj = { callerSource, storeSize: closure_8.quests.size, lastFetchedCurrentQuests: closure_8.lastFetchedCurrentQuests };
          const _Date = Date;
          obj.msSinceLastFetch = Date.now() - closure_8.lastFetchedCurrentQuests;
          obj.isFetchingCurrentQuests = closure_8.isFetchingCurrentQuests;
          obj.data = obj;
          obj1.addBreadcrumb(obj);
          const currentQuests = QuestFetchManager(closure_2[9]).fetchCurrentQuests();
          const obj5 = QuestFetchManager(closure_2[9]);
          let enableNewRequestBehavior = QuestFetchManager(closure_2[11]).isMac();
          if (enableNewRequestBehavior) {
            enableNewRequestBehavior = "focused" !== callback(closure_2[12]).getState();
            const obj7 = callback(closure_2[12]);
          }
          if (!enableNewRequestBehavior) {
            obj1 = { location: "QuestFetchManager" };
            enableNewRequestBehavior = callback(closure_2[13]).getConfig(obj1).enableNewRequestBehavior;
            const obj8 = callback(closure_2[13]);
          }
          if (!enableNewRequestBehavior) {
            const questToDeliver = QuestFetchManager(closure_2[9]).fetchQuestToDeliver(QuestFetchManager(closure_2[14]).AdPlacement.MOBILE_HOME_DOCK_AREA, callerSource);
            const obj10 = QuestFetchManager(closure_2[9]);
          }
          const obj6 = QuestFetchManager(closure_2[11]);
        }
      }
    }
  ];
  return callback(QuestFetchManager, items);
}(importDefault(dependencyMap[15]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/quests/managers/QuestFetchManager.tsx");

export default tmp2;
