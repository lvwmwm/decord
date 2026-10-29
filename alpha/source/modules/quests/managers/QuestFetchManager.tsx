// Module ID: 19901
// Function ID: 19902
// Name: QuestFetchManager
// Dependencies: [5, 7834, 1101, 7274, 9628, 1254, 9637, 1381, 6859, 19902, 2]

// Module 19901 (QuestFetchManager)
import DurationsDefault from "Durations" /* 1101 */;
import SentryUtilsDefault from "SentryUtils" /* 1254 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import QuestsEligibility from "QuestsEligibility" /* 9628 */;
import QuestActionCreators from "QuestActionCreators" /* 9637 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import QuestStore from "QuestStore" /* 7834 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7274 */;
import size from "module_2" /* 2 */;

let c0;

const DAY = DurationsDefault.Millis.DAY;
const HOUR = DurationsDefault.Millis.HOUR;
const MINUTE = DurationsDefault.Millis.MINUTE;
let closure_6 = 30 * DurationsDefault.Millis.MINUTE;
let closure_7 = 5 * DurationsDefault.Millis.MINUTE;
const HOUR2 = DurationsDefault.Millis.HOUR;
let closure_8 = 5 * DurationsDefault.Millis.MINUTE;
class QuestFetchManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.instantiatedAt = Date.now();
    applyArgumentsResult.initialFetchTimerId = null;
    applyArgumentsResult.initialQuestHomeHeroFetchTimerId = null;
    applyArgumentsResult.recurringFetchTimerId = null;
    applyArgumentsResult.lastFetchAttemptedAt = 0;
    applyArgumentsResult.lastQuestHomeHeroFetchAttemptedAt = 0;
    applyArgumentsResult.lastFetchedQuestForLocaleChangeAt = 0;
    applyArgumentsResult.hasHandledConnectionOpen = false;
    applyArgumentsResult.handleQuestsFetchCurrentQuestsBegin = function handleQuestsFetchCurrentQuestsBegin() {
      require.lastFetchAttemptedAt = Date.now();
    };
    applyArgumentsResult.handleQuestsFetchQuestHomeHeroBegin = function handleQuestsFetchQuestHomeHeroBegin() {
      require.lastQuestHomeHeroFetchAttemptedAt = Date.now();
    };
    applyArgumentsResult.handlePostConnectionOpen = function handlePostConnectionOpen() {
      let closure_0;
      window.clearTimeout(require.initialFetchTimerId);
      window.clearTimeout(require.initialQuestHomeHeroFetchTimerId);
      window.clearTimeout(require.recurringFetchTimerId);
      require.recurringFetchTimerId = window.setInterval(_asyncToGenerator(async (arg0, value) => {
        if (c0 === 2) {
          c0 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: "IconComponent" };
          }
        } else {
          try {
            c0 = 2;
            if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const _Date = Date;
              const obj = lastFetchAttemptedAt;
              if (Date.now() - lastFetchAttemptedAt.lastFetchAttemptedAt > DAY) {
                obj._fetch("post_connect_recurring");
              }
              c0 = 3;
              return { value: "IconComponent", done: "IconComponent" };
            }
          } catch (tmp6) {
            c0 = 3;
            throw tmp6;
          }
        }
      }), closure_1_6);
      const tmp6 = dependencyMap;
      let obj = QuestsEligibility;
      require.hasHandledConnectionOpen = true;
      const tmp = require;
      if (require.hasHandledConnectionOpen) {
        let DEFAULT_QUEST_FETCH_JITTER_CONFIG;
        if (obj.getIsEligibleForQuests()) {
          const tmp5Result = require("QuestFetchReconnectJitterExperiment");
          DEFAULT_QUEST_FETCH_JITTER_CONFIG = tmp5Result.getQuestFetchReconnectJitterConfig({ location: "QuestFetchManager" });
        }
        const questHomeHeroJitterMs = DEFAULT_QUEST_FETCH_JITTER_CONFIG.questHomeHeroJitterMs;
        const _Math = Math;
        const _Math2 = Math;
        const _window = window;
        tmp.initialFetchTimerId = window.setTimeout(() => {
          if (Date.now() - QuestStore.lastFetchedCurrentQuests > closure_2_8) {
            closure_0._fetch("post_connect_initial");
          }
        }, Math.floor(Math.random() * DEFAULT_QUEST_FETCH_JITTER_CONFIG.questFetchJitterMs));
      }
      DEFAULT_QUEST_FETCH_JITTER_CONFIG = tmp5(tmp6[9]).DEFAULT_QUEST_FETCH_JITTER_CONFIG;
    };
    applyArgumentsResult.handleRunningGamesChange = function handleRunningGamesChange() {

    };
    applyArgumentsResult.handleUserSettingsProtoUpdate = function handleUserSettingsProtoUpdate(settings) {
      let tmp = !("localization" in settings.settings.proto);
      const wasSaved = settings.wasSaved;
      if (!tmp) {
        tmp = !settings.partial;
      }
      if (!tmp) {
        tmp = wasSaved;
      }
      if (!tmp) {
        const _Date = Date;
        tmp = Date.now() - require.lastFetchedQuestForLocaleChangeAt <= closure_7;
      }
      if (!tmp) {
        const _Date2 = Date;
        require.lastFetchedQuestForLocaleChangeAt = Date.now();
        require._fetch("user_settings");
      }
    };
    applyArgumentsResult.handleStartSession = function handleStartSession() {
      require.hasHandledConnectionOpen = false;
    };
    applyArgumentsResult.handleLogout = function handleLogout() {
      window.clearTimeout(require.initialFetchTimerId);
      window.clearTimeout(require.initialQuestHomeHeroFetchTimerId);
      window.clearTimeout(require.recurringFetchTimerId);
      require.lastFetchAttemptedAt = 0;
      require.lastQuestHomeHeroFetchAttemptedAt = 0;
      require.lastFetchedQuestForLocaleChangeAt = 0;
      require.hasHandledConnectionOpen = false;
    };
    applyArgumentsResult.actions = { QUESTS_FETCH_CURRENT_QUESTS_BEGIN: applyArgumentsResult.handleQuestsFetchCurrentQuestsBegin, QUESTS_FETCH_QUEST_HOME_HERO_BEGIN: applyArgumentsResult.handleQuestsFetchQuestHomeHeroBegin, POST_CONNECTION_OPEN: applyArgumentsResult.handlePostConnectionOpen, RUNNING_GAMES_CHANGE: applyArgumentsResult.handleRunningGamesChange, RUNNING_NON_GAMES_CHANGE: applyArgumentsResult.handleRunningGamesChange, USER_SETTINGS_PROTO_UPDATE: applyArgumentsResult.handleUserSettingsProtoUpdate, START_SESSION: applyArgumentsResult.handleStartSession, LOGOUT: applyArgumentsResult.handleLogout };
    return applyArgumentsResult;
  }
  _fetch(callerSource) {
    let obj3;
    const obj = QuestsEligibility;
    const isEligibleForQuests = obj.getIsEligibleForQuests() && !QuestStore.isFetchingCurrentQuests;
    if (isEligibleForQuests) {
      const obj2 = { category: "quests.fetch", message: "QuestFetchManager._fetch triggered", data: obj3 };
      const _Date = Date;
      obj3 = { callerSource, storeSize: QuestStore.quests.size, lastFetchedCurrentQuests: QuestStore.lastFetchedCurrentQuests, msSinceLastFetch: Date.now() - QuestStore.lastFetchedCurrentQuests, isFetchingCurrentQuests: QuestStore.isFetchingCurrentQuests };
      const addBreadcrumb = SentryUtilsDefault.addBreadcrumb;
      SentryUtilsDefault;
      addBreadcrumb(obj2);
      const tmpResult = QuestActionCreators;
      const currentQuests = tmpResult.fetchCurrentQuests();
      const tmp6 = importDefault;
      const tmpResult2 = PlatformUtils;
      if (tmpResult2.isMac()) {
        const tmp6Result = tmp6(6859);
        const state = tmp6Result.getState();
      }
    }
  }
}
const prototype = QuestFetchManager.prototype;
const questFetchManager = new QuestFetchManager();
const result = size.fileFinishedImporting("modules/quests/managers/QuestFetchManager.tsx");

export default questFetchManager;
