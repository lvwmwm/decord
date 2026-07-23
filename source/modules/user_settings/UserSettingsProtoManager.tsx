// Module ID: 13386
// Function ID: 102859
// Name: handleConnectionOpen
// Dependencies: [1316, 662, 1319, 13387, 13388, 686, 22, 1331, 2]

// Module 13386 (handleConnectionOpen)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { UserSettingsTypes } from "MAX_FAVORITES";

const require = arg1;
function handleConnectionOpen() {
  fullState = fullState.getFullState();
  if (fullState[UserSettingsTypes.PRELOADED_USER_SETTINGS].editInfo.triggeredMigrations) {
    const PreloadedUserSettingsActionCreators = fullState(1331).PreloadedUserSettingsActionCreators;
    let result = PreloadedUserSettingsActionCreators.markDirtyFromMigration(tmp2.proto, tmp2.editInfo.cleanupFuncs);
  }
  const item = importDefault(22).forEach(fullState(1331).UserSettingsActionCreatorsByType, (scheduleSaveFromOfflineEdit) => {
    const tmp = fullState[Number(undefined, arg1)];
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
  require(1331) /* _createForOfIteratorHelperLoose */.UserSettingsActionCreatorsByType[type].markDirty(proto, { delaySeconds, jitter });
}
function handleUserSettingsProtoLoadIfNecessary(arg0) {
  const ifNecessary = require(1331) /* _createForOfIteratorHelperLoose */.UserSettingsActionCreatorsByType[arg0.settingsType].loadIfNecessary();
}
function handleAppStateUpdate(state) {
  state = state.state;
  let tmp = "inactive" !== state;
  if (tmp) {
    tmp = "background" !== state;
  }
  if (!tmp) {
    (function persistPendingChanges() {
      const item = outer1_1(outer1_2[6]).forEach(outer1_0(outer1_2[7]).UserSettingsActionCreatorsByType, (persistChanges) => {
        const fullState = outer2_3.getFullState();
        if (null != fullState[Number(undefined, arg1)].editInfo.timeout) {
          persistChanges.persistChanges();
        }
      });
    })();
  }
}
let result = require("MAX_FAVORITES").fileFinishedImporting("modules/user_settings/UserSettingsProtoManager.tsx");

export default {
  init() {
    importDefault(1319)[UserSettingsTypes.PRELOADED_USER_SETTINGS] = importDefault(13387);
    const tmp = importDefault(1319);
    importDefault(1319)[UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS] = importDefault(13388);
    const tmp2 = importDefault(1319);
    const subscription = importDefault(686).subscribe("CONNECTION_OPEN", handleConnectionOpen);
    const obj = importDefault(686);
    const subscription1 = importDefault(686).subscribe("USER_SETTINGS_PROTO_ENQUEUE_UPDATE", handleUserSettingsProtoEnqueueUpdate);
    const obj2 = importDefault(686);
    const subscription2 = importDefault(686).subscribe("USER_SETTINGS_PROTO_LOAD_IF_NECESSARY", handleUserSettingsProtoLoadIfNecessary);
    const obj3 = importDefault(686);
    const subscription3 = importDefault(686).subscribe("APP_STATE_UPDATE", handleAppStateUpdate);
  }
};
