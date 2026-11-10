// Module ID: 11008
// Function ID: 11009
// Name: conjureProjectMute
// Dependencies: [1231, 504, 4972, 1196, 2]
// Exports: isConjureProjectMuted, setConjureProjectMuted, useIsConjureProjectMuted

// Module 11008 (conjureProjectMute)
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
    const tmp3 = closure_1;
    if (tmp3) {
      projects = projects.projects;
      const ConjureProjectSettings = preloaded_user_settings.ConjureProjectSettings;
      const create = ConjureProjectSettings.create;
      const obj = { muted: true };
      const merged = Object.assign(tmp2);
      projects[id] = create(obj);
    } else if (null == projects.projects[id]) {
      return false;
    } else {
      const _Number = Number;
      if (Number(projects.projects[id].sidebarDismissedAt) > 0) {
        projects.projects[id].muted = false;
      } else {
        delete projects.projects[id];
      }
    }
  }, require("UserSettingsProtoActionCreators").UserSettingsDelay.INFREQUENT_USER_ACTION);
}
