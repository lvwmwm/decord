// Module ID: 13256
// Function ID: 100625
// Name: handleConnectionOpen
// Dependencies: []

// Module 13256 (handleConnectionOpen)
function handleConnectionOpen() {
  const fullState = fullState.getFullState();
  const arg1 = fullState;
  if (fullState[closure_4.PRELOADED_USER_SETTINGS].editInfo.triggeredMigrations) {
    const PreloadedUserSettingsActionCreators = arg1(dependencyMap[7]).PreloadedUserSettingsActionCreators;
    const result = PreloadedUserSettingsActionCreators.markDirtyFromMigration(tmp2.proto, tmp2.editInfo.cleanupFuncs);
  }
  const item = importDefault(dependencyMap[6]).forEach(arg1(dependencyMap[7]).UserSettingsActionCreatorsByType, (scheduleSaveFromOfflineEdit) => {
    if (tmp2) {
      const result = scheduleSaveFromOfflineEdit.scheduleSaveFromOfflineEdit();
    }
  });
}
function handleUserSettingsProtoEnqueueUpdate(settings) {
  let delaySeconds;
  let jitter;
  let proto;
  let type;
  ({ proto, type } = settings.settings);
  ({ delaySeconds, jitter } = settings);
  arg1(dependencyMap[7]).UserSettingsActionCreatorsByType[type].markDirty(proto, { delaySeconds, jitter });
}
function handleUserSettingsProtoLoadIfNecessary(arg0) {
  const ifNecessary = arg1(dependencyMap[7]).UserSettingsActionCreatorsByType[arg0.settingsType].loadIfNecessary();
}
function handleAppStateUpdate(state) {
  state = state.state;
  let tmp = "inactive" !== state;
  if (tmp) {
    tmp = "background" !== state;
  }
  if (!tmp) {
    function persistPendingChanges() {
      const item = callback2(closure_2[6]).forEach(callback(closure_2[7]).UserSettingsActionCreatorsByType, (persistChanges) => {
        const fullState = fullState.getFullState();
        if (null != fullState[Number(undefined, arg1)].editInfo.timeout) {
          persistChanges.persistChanges();
        }
      });
    }();
  }
}
let closure_3 = importDefault(dependencyMap[0]);
const UserSettingsTypes = arg1(dependencyMap[1]).UserSettingsTypes;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/user_settings/UserSettingsProtoManager.tsx");

export default {
  init() {
    importDefault(dependencyMap[2])[UserSettingsTypes.PRELOADED_USER_SETTINGS] = importDefault(dependencyMap[3]);
    const tmp = importDefault(dependencyMap[2]);
    importDefault(dependencyMap[2])[UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS] = importDefault(dependencyMap[4]);
    const tmp2 = importDefault(dependencyMap[2]);
    const subscription = importDefault(dependencyMap[5]).subscribe("CONNECTION_OPEN", handleConnectionOpen);
    const obj = importDefault(dependencyMap[5]);
    const subscription1 = importDefault(dependencyMap[5]).subscribe("USER_SETTINGS_PROTO_ENQUEUE_UPDATE", handleUserSettingsProtoEnqueueUpdate);
    const obj2 = importDefault(dependencyMap[5]);
    const subscription2 = importDefault(dependencyMap[5]).subscribe("USER_SETTINGS_PROTO_LOAD_IF_NECESSARY", handleUserSettingsProtoLoadIfNecessary);
    const obj3 = importDefault(dependencyMap[5]);
    const subscription3 = importDefault(dependencyMap[5]).subscribe("APP_STATE_UPDATE", handleAppStateUpdate);
  }
};
