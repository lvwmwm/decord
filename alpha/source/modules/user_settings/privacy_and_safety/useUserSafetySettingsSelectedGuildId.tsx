// Module ID: 16078
// Function ID: 16079
// Name: useUserSafetySettingsSelectedGuildId
// Dependencies: [2086, 16074, 1085, 558, 576, 504, 2]
// Exports: useAllServersOptionSelected

// Module 16078 (useUserSafetySettingsSelectedGuildId)
import Constants from "Constants" /* 1085 */;
import GuildStore from "GuildStore" /* 2086 */;
import UserSettingsSafetySelectedGuildStore from "UserSettingsSafetySelectedGuildStore" /* 16074 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ GUILD_SELECT_ALL_SERVERS_OPTION_ID: c3, useUserSafetySettingsSelectedGuildStore: closure_4 } = UserSettingsSafetySelectedGuildStore);
const GuildFeatures = Constants.GuildFeatures;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
function useUserSafetySettingsSelectedGuildId() {
  return React3().selectedGuildId;
}
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
function useAllServersOptionSelected() {
  return React3().selectedGuildId === _false;
}
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsSelectedGuildAHub() {
  let selectedGuildId;
  const obj = selectedGuildId(576);
  const cResult = obj.c(5);
  const tmp = selectedGuildId;
  if (typeof useUserSafetySettingsSelectedGuildId === "function") {
    let first;
    let tmp8;
    let tmp13;
    selectedGuildId = closure_4().selectedGuildId;
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [GuildStore];
      cResult[0] = items;
      first = items;
    } else {
      first = cResult[0];
    }
    if (cResult[1] !== selectedGuildId) {
      const fn = function u() {
        return GuildStore.getGuild(selectedGuildId);
      };
      cResult[1] = selectedGuildId;
      cResult[2] = fn;
      tmp8 = fn;
    } else {
      tmp8 = cResult[2];
    }
    const tmpResult = tmp(504);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
    let features1;
    const tmp10 = cResult[3];
    if (stateFromStores != null) {
      features1 = stateFromStores.features;
    }
    if (tmp10 !== features1) {
      let flag;
      if (stateFromStores != null) {
        const features = stateFromStores.features;
        flag = features.has(GuildFeatures.HUB);
      }
      if (flag == null) {
        flag = false;
      }
      let features2;
      if (stateFromStores != null) {
        features2 = stateFromStores.features;
      }
      cResult[3] = features2;
      cResult[4] = flag;
      tmp13 = flag;
    } else {
      tmp13 = cResult[4];
    }
    return tmp13;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}) : (function useIsSelectedGuildAHub() {
  if (typeof useUserSafetySettingsSelectedGuildId === "function") {
    const selectedGuildId = closure_4().selectedGuildId;
    const items = [GuildStore];
    const obj = selectedGuildId(504);
    const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(selectedGuildId));
    let flag;
    if (stateFromStores != null) {
      const features = stateFromStores.features;
      flag = features.has(GuildFeatures.HUB);
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
const result2 = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/useUserSafetySettingsSelectedGuildId.tsx");

export { useUserSafetySettingsSelectedGuildId };
export { useAllServersOptionSelected };
export const useIsSelectedGuildAHub = tmp5;
