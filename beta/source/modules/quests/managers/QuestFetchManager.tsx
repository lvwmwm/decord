// Module ID: 18275
// Function ID: 18276
// Name: QuestFetchManager
// Dependencies: [7944, 1095, 7365, 11608, 1235, 10564, 1368, 10585, 18276, 2]

// Module 18275 (QuestFetchManager)
import DurationsDefault from "Durations" /* 1095 */;
import SentryUtilsDefault from "SentryUtils" /* 1235 */;
import QuestsEligibility from "QuestsEligibility" /* 11608 */;
import QuestStore from "QuestStore" /* 7944 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7365 */;

require = fn;
const DAY = DurationsDefault.Millis.DAY;
let closure_5 = 30 * DurationsDefault.Millis.MINUTE;
let closure_6 = 5 * DurationsDefault.Millis.MINUTE;
const HOUR = DurationsDefault.Millis.HOUR;
let closure_7 = 5 * DurationsDefault.Millis.MINUTE;
class QuestFetchManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.instantiatedAt = Date.now();
    applyArgumentsResult.initialFetchTimerId = null;
    applyArgumentsResult.initialQuestHomeHeroFetchTimerId = null;
    applyArgumentsResult.recurringFetchTimerId = null;
    applyArgumentsResult.lastFetchAttemptedAt = 0;
    applyArgumentsResult.lastFetchedQuestForLocaleChangeAt = 0;
    applyArgumentsResult.hasHandledConnectionOpen = false;
    applyArgumentsResult.handleQuestsFetchCurrentQuestsBegin = function handleQuestsFetchCurrentQuestsBegin() {
      applyArgumentsResult.lastFetchAttemptedAt = Date.now();
    };
    applyArgumentsResult.handlePostConnectionOpen = function handlePostConnectionOpen() {
      window.clearTimeout(applyArgumentsResult.initialFetchTimerId);
      window.clearTimeout(applyArgumentsResult.initialQuestHomeHeroFetchTimerId);
      window.clearTimeout(applyArgumentsResult.recurringFetchTimerId);
      applyArgumentsResult.recurringFetchTimerId = window.setInterval(() => {
        if (Date.now() - closure_1_0.lastFetchAttemptedAt > DAY) {
          closure_1_0._fetch("post_connect_recurring");
        }
      }, closure_5);
      const isEligibleForQuests = QuestsEligibility.getIsEligibleForQuests();
      applyArgumentsResult.hasHandledConnectionOpen = true;
      if (applyArgumentsResult.hasHandledConnectionOpen) {
        if (isEligibleForQuests) {
          let DEFAULT_QUEST_FETCH_JITTER_CONFIG = tmp5(18276).getQuestFetchReconnectJitterConfig({ location: "QuestFetchManager" });
          const tmp5Result = tmp5(18276);
        }
        const _Math = Math;
        const _Math2 = Math;
        ({ questFetchJitterMs, questHomeHeroJitterMs } = DEFAULT_QUEST_FETCH_JITTER_CONFIG);
        const rounded = Math.floor(Math.random() * questFetchJitterMs);
        const _window = window;
        tmp.initialFetchTimerId = window.setTimeout(() => {
          if (Date.now() - QuestStore.lastFetchedCurrentQuests > closure_2_7) {
            closure_1_0._fetch("post_connect_initial");
          }
        }, rounded);
        if (isEligibleForQuests) {
          const _Math3 = Math;
          const _Math4 = Math;
          const _window2 = window;
          tmp.initialQuestHomeHeroFetchTimerId = window.setTimeout(() => {
            try {
              const questHomeHero = closure_1_0(closure_1_2[5]).fetchQuestHomeHero();
            } catch (err) {
            }
          }, rounded + Math.floor(Math.random() * questHomeHeroJitterMs));
        }
      }
      DEFAULT_QUEST_FETCH_JITTER_CONFIG = tmp5(18276).DEFAULT_QUEST_FETCH_JITTER_CONFIG;
    };
    applyArgumentsResult.handleRunningGamesChange = function handleRunningGamesChange() {

    };
    applyArgumentsResult.handleUserSettingsProtoUpdate = function handleUserSettingsProtoUpdate(settings) {
      let wasSaved = !("localization" in settings.settings.proto);
      if (!wasSaved) {
        wasSaved = !settings.partial;
      }
      if (!wasSaved) {
        wasSaved = settings.wasSaved;
      }
      if (!wasSaved) {
        const _Date = Date;
        wasSaved = Date.now() - applyArgumentsResult.lastFetchedQuestForLocaleChangeAt <= closure_6;
      }
      if (!wasSaved) {
        const _Date2 = Date;
        applyArgumentsResult.lastFetchedQuestForLocaleChangeAt = Date.now();
        applyArgumentsResult._fetch("user_settings");
      }
    };
    applyArgumentsResult.handleStartSession = function handleStartSession() {
      applyArgumentsResult.hasHandledConnectionOpen = false;
    };
    applyArgumentsResult.handleLogout = function handleLogout() {
      window.clearTimeout(applyArgumentsResult.initialFetchTimerId);
      window.clearTimeout(applyArgumentsResult.initialQuestHomeHeroFetchTimerId);
      window.clearTimeout(applyArgumentsResult.recurringFetchTimerId);
      applyArgumentsResult.lastFetchAttemptedAt = 0;
      applyArgumentsResult.lastFetchedQuestForLocaleChangeAt = 0;
      applyArgumentsResult.hasHandledConnectionOpen = false;
    };
    applyArgumentsResult.actions = { QUESTS_FETCH_CURRENT_QUESTS_BEGIN: applyArgumentsResult.handleQuestsFetchCurrentQuestsBegin, POST_CONNECTION_OPEN: applyArgumentsResult.handlePostConnectionOpen, RUNNING_GAMES_CHANGE: applyArgumentsResult.handleRunningGamesChange, RUNNING_NON_GAMES_CHANGE: applyArgumentsResult.handleRunningGamesChange, USER_SETTINGS_PROTO_UPDATE: applyArgumentsResult.handleUserSettingsProtoUpdate, START_SESSION: applyArgumentsResult.handleStartSession, LOGOUT: applyArgumentsResult.handleLogout };
    return applyArgumentsResult;
  }
}
QuestFetchManager.prototype["_fetch"] = function _fetch(post_connect_initial) {
  let isEligibleForQuests = QuestsEligibility.getIsEligibleForQuests();
  if (isEligibleForQuests) {
    isEligibleForQuests = !QuestStore.isFetchingCurrentQuests;
  }
  if (isEligibleForQuests) {
    const obj3 = { category: "quests.fetch", message: "QuestFetchManager._fetch triggered", data: null };
    const obj4 = { callerSource: post_connect_initial, storeSize: QuestStore.quests.size, lastFetchedCurrentQuests: QuestStore.lastFetchedCurrentQuests, msSinceLastFetch: null, isFetchingCurrentQuests: null };
    const _Date = Date;
    obj4.msSinceLastFetch = Date.now() - QuestStore.lastFetchedCurrentQuests;
    obj4.isFetchingCurrentQuests = QuestStore.isFetchingCurrentQuests;
    obj3.data = obj4;
    SentryUtilsDefault.addBreadcrumb(obj3);
    const tmp6 = importDefault;
    const currentQuests = tmp(10564).fetchCurrentQuests();
    const tmpResult = tmp(10564);
    if (tmpResult2.isMac()) {
      state = tmp6(10585).getState();
      const tmp6Result = tmp6(10585);
    }
    tmpResult2 = tmp(1368);
  }
};
const questFetchManager = new QuestFetchManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/managers/QuestFetchManager.tsx");

export default questFetchManager;
