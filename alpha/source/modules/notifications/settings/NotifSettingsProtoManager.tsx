// Module ID: 20412
// Function ID: 20413
// Name: NotifSettingsProtoManager
// Dependencies: [16200, 16933, 18668, 16214, 18676, 16938, 572, 7892, 1452, 2]

// Module 20412 (NotifSettingsProtoManager)
import DispatcherDefault from "Dispatcher" /* 572 */;
import ApexExperiment from "ApexExperiment" /* 1452 */;
import DeclarativeNotificationSettingsRedesignExperiment from "DeclarativeNotificationSettingsRedesignExperiment" /* 16214 */;
import NotificationSettingsConstants from "NotificationSettingsConstants" /* 16933 */;
import NotificationSettingsExperiments from "NotificationSettingsExperiments" /* 16938 */;
import EffectiveNotifSettingsActionCreators from "EffectiveNotifSettingsActionCreators" /* 18668 */;
import NotifSettingsActionCreators from "NotifSettingsActionCreators" /* 18676 */;
import NotifSettingsProtoStore from "NotifSettingsProtoStore" /* 16200 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7892 */;
import size from "module_2" /* 2 */;

let c3;

const f123091 = () => {
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
        timeout = setTimeout(f123091, 250);
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
    timeout = setTimeout(f123091, 250);
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
  const f123093 = (item) => null != item;
  let obj = DeclarativeNotificationSettingsRedesignExperiment;
  const result = obj.isDeclarativeNotificationSettingsRedesignEnabled("effectiveNotifSettingsAssignment");
  require = result;
  const mapped = NOTIF_SETTINGS.map((experiment) => experiment.experiment);
  let items = [...new Set(mapped.filter(f123093))];
  const items1 = [result];
  new Set(mapped.filter(f123093));
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
            timeout = setTimeout(f123091, 250);
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
            timeout = setTimeout(f123091, 250);
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
              timeout = setTimeout(f123091, 250);
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
