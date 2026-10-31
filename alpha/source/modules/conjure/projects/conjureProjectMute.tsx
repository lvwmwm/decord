// Module ID: 10878
// Function ID: 10879
// Name: conjureProjectMute
// Dependencies: [1231, 504, 4844, 1196, 2]
// Exports: isConjureProjectMuted, setConjureProjectMuted, useIsConjureProjectMuted

// Module 10878 (conjureProjectMute)
import preloaded_user_settings from "preloaded_user_settings" /* 1196 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, projects;

const result = size.fileFinishedImporting("modules/conjure/projects/conjureProjectMute.tsx");

export function isConjureProjectMuted(settings, id) {
  const conjure = settings.conjure;
  let muted;
  if (conjure != null) {
    if (conjure.projects[id] != null) {
      muted = tmp3.muted;
    }
  }
  return true === muted;
}
export function useIsConjureProjectMuted(id) {
  _require = id;
  const items = [UserSettingsProtoStore];
  const items1 = [id];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const conjure = UserSettingsProtoStore.settings.conjure;
    let muted;
    if (conjure != null) {
      if (conjure.projects[tmp] != null) {
        muted = tmp3.muted;
      }
    }
    return true === muted;
  }, items1);
}
export function setConjureProjectMuted(id, arg1) {
  let closure_1;
  _require = id;
  dependencyMap = arg1;
  const PreloadedUserSettingsActionCreators = require("UserSettingsProtoActionCreators").PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync("conjure", async (projects) => {
    projects = projects.projects;
    if (closure_1) {
      const ConjureProjectSettings = preloaded_user_settings.ConjureProjectSettings;
      projects[id] = ConjureProjectSettings.create({ muted: true });
    } else if (null == projects[id]) {
      return false;
    } else {
      delete projects.projects[id];
    }
  }, require("UserSettingsProtoActionCreators").UserSettingsDelay.INFREQUENT_USER_ACTION);
}
