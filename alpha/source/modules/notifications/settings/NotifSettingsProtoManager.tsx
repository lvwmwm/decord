// Module ID: 19906
// Function ID: 19907
// Name: NotifSettingsProtoManager
// Dependencies: [15808, 16534, 18241, 15822, 18248, 16539, 572, 7373, 1449, 2]

// Module 19906 (NotifSettingsProtoManager)
import DispatcherDefault from "Dispatcher" /* 572 */;
import ApexExperiment from "ApexExperiment" /* 1449 */;
import DeclarativeNotificationSettingsRedesignExperiment from "DeclarativeNotificationSettingsRedesignExperiment" /* 15822 */;
import NotificationSettingsConstants from "NotificationSettingsConstants" /* 16534 */;
import NotificationSettingsExperiments from "NotificationSettingsExperiments" /* 16539 */;
import EffectiveNotifSettingsActionCreators from "EffectiveNotifSettingsActionCreators" /* 18241 */;
import NotifSettingsActionCreators from "NotifSettingsActionCreators" /* 18248 */;
import NotifSettingsProtoStore from "NotifSettingsProtoStore" /* 15808 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7373 */;
import size from "module_2" /* 2 */;

let c3;

const f119324 = () => {
  c3 = undefined;
  const obj = closure_1_0(closure_1_2[2]);
  const effectiveNotifSettings = obj.fetchEffectiveNotifSettings();
};
function cancelRefresh() {
  clearTimeout(c3);
  c3 = undefined;
  const obj = EffectiveNotifSettingsActionCreators;
  const result = obj.cancelEffectiveNotifSettingsRetry();
}
function handleRemoteSettingsUpdate() {
  let timeout;
  if (!NotifSettingsProtoStore.isApplyingEdit) {
    if (NotifSettingsProtoStore.isEffectiveSettingsStale) {
      const obj = DeclarativeNotificationSettingsRedesignExperiment;
      if (obj.isDeclarativeNotificationSettingsRedesignEnabled("refreshEffectiveNotifSettings")) {
        const _clearTimeout = clearTimeout;
        clearTimeout(timeout);
        const _setTimeout = setTimeout;
        timeout = setTimeout(f119324, 250);
      }
    }
  }
}
function handleConnectionRestored() {
  let timeout;
  clearTimeout(timeout);
  timeout = undefined;
  const obj = EffectiveNotifSettingsActionCreators;
  const result = obj.cancelEffectiveNotifSettingsRetry();
  const obj2 = NotifSettingsActionCreators;
  const result1 = obj2.schedulePersistPendingEditsIfNeeded();
  const obj3 = DeclarativeNotificationSettingsRedesignExperiment;
  if (obj3.isDeclarativeNotificationSettingsRedesignEnabled("refreshEffectiveNotifSettings")) {
    const _clearTimeout = clearTimeout;
    clearTimeout(timeout);
    const _setTimeout = setTimeout;
    timeout = setTimeout(f119324, 250);
  }
}
function handleAppStateUpdate(state) {
  state = state.state;
  const tmp = "inactive" !== state && "background" !== state;
  if (!tmp) {
    const obj = NotifSettingsActionCreators;
    const result = obj.schedulePersistPendingEditsIfNeeded();
  }
}
function handleAssignmentChange() {
  const f119326 = (item) => null != item;
  let obj = DeclarativeNotificationSettingsRedesignExperiment;
  const result = obj.isDeclarativeNotificationSettingsRedesignEnabled("effectiveNotifSettingsAssignment");
  require = result;
  const mapped = NOTIF_SETTINGS.map((experiment) => experiment.experiment);
  let items = [...new Set(mapped.filter(f119326))];
  const items1 = [result];
  new Set(mapped.filter(f119326));
  const sorted = items.sort();
  HermesBuiltin.arraySpread(items1, sorted.map((item) => {
    const items = [item, ];
    const obj = NotificationSettingsExperiments.knownExperimentConfigs[item];
    items[1] = obj.getConfig({ location: "effectiveNotifSettingsAssignment" }, { autoTrackExposure: false }).variation;
    return items;
  }), 1);
  const json = stringify(items1);
  if (json !== NotifSettingsProtoStore.effectiveAssignment) {
    let obj2 = json(572);
    obj2.wait(() => {
      const obj = DispatcherDefault;
      const obj2 = { type: "EFFECTIVE_NOTIFICATION_SETTINGS_ARM_CHANGE", enabled: require, assignment: json };
      return obj.dispatch(obj2);
    });
  }
}
const NOTIF_SETTINGS = NotificationSettingsConstants.NOTIF_SETTINGS;
class NotifSettingsProtoManager extends AutomaticLifecycleManager {
  constructor() {
    let closure_3;
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    let obj = {
      POST_CONNECTION_OPEN: handleConnectionRestored,
      CONNECTION_RESUMED: handleConnectionRestored,
      APP_STATE_UPDATE: handleAppStateUpdate,
      USER_SETTINGS_PROTO_UPDATE: handleRemoteSettingsUpdate,
      NOTIFICATION_SETTINGS_UPDATE: handleRemoteSettingsUpdate,
      EFFECTIVE_NOTIFICATION_SETTINGS_SCREEN_OPEN() {
        let timeout;
        if (1 === NotifSettingsProtoStore.effectiveSettingsScreenCount) {
          const obj = EffectiveNotifSettingsActionCreators;
          const result = obj.cancelEffectiveNotifSettingsRetry();
          const obj2 = DeclarativeNotificationSettingsRedesignExperiment;
          if (obj2.isDeclarativeNotificationSettingsRedesignEnabled("refreshEffectiveNotifSettings")) {
            const _clearTimeout = clearTimeout;
            clearTimeout(timeout);
            const _setTimeout = setTimeout;
            timeout = setTimeout(f119324, 250);
          }
        }
      },
      EFFECTIVE_NOTIFICATION_SETTINGS_ARM_CHANGE(enabled) {
        let timeout;
        enabled = enabled.enabled;
        clearTimeout(timeout);
        timeout = undefined;
        const obj = EffectiveNotifSettingsActionCreators;
        const result = obj.cancelEffectiveNotifSettingsRetry();
        const tmp2 = require;
        const tmp3 = dependencyMap;
        if (enabled) {
          const tmp2Result = tmp2(tmp3[3]);
          if (tmp2Result.isDeclarativeNotificationSettingsRedesignEnabled("refreshEffectiveNotifSettings")) {
            const _clearTimeout = clearTimeout;
            clearTimeout(timeout);
            const _setTimeout = setTimeout;
            timeout = setTimeout(f119324, 250);
          }
        }
      },
      DECLARATIVE_NOTIFICATION_SETTINGS_UPDATE(effectiveSettings) {
        let timeout;
        if (null != effectiveSettings.effectiveSettings) {
          if (NotifSettingsProtoStore.hasValidEffectiveSettings) {
            const _clearTimeout2 = clearTimeout;
            clearTimeout(timeout);
            timeout = undefined;
            const obj2 = EffectiveNotifSettingsActionCreators;
            const result = obj2.cancelEffectiveNotifSettingsRetry();
          }
        }
        if (!NotifSettingsProtoStore.isApplyingEdit) {
          if (NotifSettingsProtoStore.isEffectiveSettingsStale) {
            let obj = DeclarativeNotificationSettingsRedesignExperiment;
            if (obj.isDeclarativeNotificationSettingsRedesignEnabled("refreshEffectiveNotifSettings")) {
              const _clearTimeout = clearTimeout;
              clearTimeout(timeout);
              const _setTimeout = setTimeout;
              timeout = setTimeout(f119324, 250);
            }
          }
        }
      },
      LOGOUT: cancelRefresh
    };
    applyArgumentsResult.actions = obj;
    const items = [ApexExperiment.ApexExperimentStore, handleAssignmentChange];
    const items1 = [items];
    applyArgumentsResult.stores = new Map(items1);
    new Map(items1);
    return applyArgumentsResult;
  }
  _terminate() {
    clearTimeout(c3);
    c3 = undefined;
    const obj = EffectiveNotifSettingsActionCreators;
    const result = obj.cancelEffectiveNotifSettingsRetry();
  }
}
const prototype = NotifSettingsProtoManager.prototype;
const notifSettingsProtoManager = new NotifSettingsProtoManager();
let result = size.fileFinishedImporting("modules/notifications/settings/NotifSettingsProtoManager.tsx");

export default notifSettingsProtoManager;
