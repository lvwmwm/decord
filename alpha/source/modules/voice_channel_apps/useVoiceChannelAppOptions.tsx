// Module ID: 18846
// Function ID: 18847
// Name: useVoiceChannelAppOptions
// Dependencies: [32, 19, 6838, 1410, 7413, 2026, 5670, 10855, 504, 7324, 6875, 18847, 2]
// Exports: useVoiceChannelAppSettingOptions, voiceChannelAppIdsToFetch, voiceChannelAppRows

// Module 18846 (useVoiceChannelAppOptions)
import AvatarUtilsDefault from "AvatarUtils" /* 1410 */;
import ConjureUtils from "ConjureUtils" /* 7413 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6838 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, map, name, set;

const f115735 = (application_id) => application_id.application_id;
function voiceChannelAppCandidates(arg0, arg1, arg2) {
  map = new Map();
  const items = [...arg1];
  for (const item10020 of items) {
    let tmp = item10020;
    let obj2 = ConjureUtils;
    if (obj2.isConjureProjectInGuild(item10020, arg2)) {
      let result = map.set(tmp.application_id, tmp);
    }
    continue;
  }
  const items1 = [...map.values()];
  return items1.sort((name, name2) => {
    name = name.name;
    return name.localeCompare(name2.name);
  });
}
let _slicedToArray = _slicedToArray_mod;
let result = size.fileFinishedImporting("modules/voice_channel_apps/useVoiceChannelAppOptions.tsx");

export { voiceChannelAppCandidates };
export function voiceChannelAppRows(arr, arg1) {
  let closure_0 = arg1;
  return arr.filter((item, index) => {
    const tmp = closure_0[index];
    const obj = closure_2_0(stateFromStoresArray1[5]);
    return obj.supportsEmbeddedSurface(tmp, closure_2_0(stateFromStoresArray1[6]).EmbeddedSurfaceType.VOICE_CHANNEL);
  });
}
export function voiceChannelAppIdsToFetch(arr, arg1) {
  let closure_0 = arg1;
  const found = arr.filter((item, index) => {
    const tmp = closure_0[index];
    const obj = closure_2_0(stateFromStoresArray1[5]);
    return !obj.supportsEmbeddedSurface(tmp, closure_2_0(stateFromStoresArray1[6]).EmbeddedSurfaceType.VOICE_CHANNEL);
  });
  return found.map(f115735);
}
export function useVoiceChannelAppSettingOptions(guildId, application_id) {
  let closure_129_6;
  let closure_129_7;
  let closure_8;
  let first;
  let getOrFetchApplication;
  let memo5;
  let tmp20;
  _require = guildId;
  let obj = getOrFetchApplication;
  let items = [guildId];
  const effect = getOrFetchApplication.useEffect(() => {
    const obj = application_id(dependencyMap[7]);
    obj.listProjects(application_id);
  }, items);
  let tmp2 = _require;
  let tmp3 = dependencyMap;
  let obj2 = require("get initialized");
  const items1 = [ConjureProjectStore];
  const stateFromStoresArray = obj2.useStateFromStoresArray(items1, () => ConjureProjectStore.getOwnedProjects());
  let obj3 = require("get initialized");
  const items2 = [ConjureProjectStore];
  const items3 = [guildId];
  const stateFromStoresArray1 = obj3.useStateFromStoresArray(items2, () => ConjureProjectStore.getSharedProjects(closure_0), items3);
  const items4 = [stateFromStoresArray, stateFromStoresArray1, guildId];
  const memo = getOrFetchApplication.useMemo(() => voiceChannelAppCandidates(stateFromStoresArray, stateFromStoresArray1, closure_0), items4);
  const items5 = [memo];
  const memo1 = getOrFetchApplication.useMemo(() => memo.map((application_id) => application_id.application_id), items5);
  const tmp9 = memo5(7324)(memo1, false);
  let closure_4 = tmp9;
  const useRef = getOrFetchApplication.useRef;
  set = new Set();
  let closure_5 = useRef(set);
  const useState = getOrFetchApplication.useState;
  const set1 = new Set();
  const tmp12 = _slicedToArray(useState(set1), 2);
  [closure_129_6, closure_129_7] = tmp12;
  [first, closure_8] = getOrFetchApplication.useState(false);
  const items6 = [memo, tmp9];
  const memo2 = getOrFetchApplication.useMemo(() => {
    closure_0 = closure_4;
    const found = memo.filter((item, index) => {
      const tmp = closure_0[index];
      const obj = closure_2_0(stateFromStoresArray1[5]);
      return !obj.supportsEmbeddedSurface(tmp, closure_2_0(stateFromStoresArray1[6]).EmbeddedSurfaceType.VOICE_CHANNEL);
    });
    return found.map(f115735);
  }, items6);
  const items7 = [memo2];
  const effect1 = getOrFetchApplication.useEffect(() => {
    const found = memo2.filter((item) => {
      const current = ref.current;
      return !current.has(item);
    });
    if (0 !== found.length) {
      for (const item10010 of found) {
        let current = ref.current;
        let addResult = current.add(item10010);
        continue;
      }
      const obj = stateFromStoresArray(stateFromStoresArray1[10]);
      const applications = obj.fetchApplications(found, true);
      const catchPromise = applications.catch(() => closure_1_8(true));
      catchPromise.finally(() => {
        let args;
        return closure_2_7((arg0) => {
          const items = [...closure_1_0];
          set = new Set(items);
          return set;
        });
      });
    }
  }, items7);
  const items8 = [memo, tmp9];
  const memo3 = getOrFetchApplication.useMemo(() => {
    closure_0 = closure_4;
    return memo.filter((item, index) => {
      const tmp = closure_0[index];
      const obj = closure_2_0(stateFromStoresArray1[5]);
      return obj.supportsEmbeddedSurface(tmp, closure_2_0(stateFromStoresArray1[6]).EmbeddedSurfaceType.VOICE_CHANNEL);
    });
  }, items8);
  let obj4 = require("get initialized");
  const items9 = [ConjureProjectStore];
  const items10 = [guildId];
  const stateFromStores = obj4.useStateFromStores(items9, () => ConjureProjectStore.getGuildProjectsFetchState(closure_0), items10);
  let str = "unattempted";
  const tmp8 = memo5;
  if ("unattempted" !== stateFromStores) {
    let str3;
    if ("loading" === stateFromStores) {
      str3 = "pending";
    } else {
      str3 = "settled";
    }
    str = str3;
  }
  let obj5 = { hasRows: memo3.length > 0, loadFailed: tmp20, fetchPhase: str };
  tmp20 = "error" === stateFromStores;
  const voiceChannelAppListState = tmp2(18847).voiceChannelAppListState;
  tmp2(18847);
  if (!tmp20) {
    tmp20 = first;
  }
  const result = voiceChannelAppListState(obj5);
  const items11 = [memo3];
  const memo4 = obj.useMemo(() => memo3.map((preview_application_id) => {
    application_id = preview_application_id.preview_application_id;
    if (application_id == null) {
      application_id = preview_application_id.application_id;
    }
    return application_id;
  }), items11);
  const tmp23 = tmp8(7324)(memo4);
  let closure_11 = tmp23;
  const items12 = [memo3, tmp23];
  memo5 = obj.useMemo(() => memo3.map((application_id, index) => {
    let tmp2;
    let tmp4;
    application_id = application_id.application_id;
    const obj = { applicationId: application_id, name: application_id.name, iconApplication: tmp2, iconURL: tmp4 };
    tmp2 = tmp;
    if (closure_1_11[index] == null) {
      tmp2 = { id: application_id, icon: null };
      const obj2 = { id: application_id, icon: null };
    }
    let icon;
    if (closure_1_11[index] != null) {
      icon = tmp.icon;
    }
    tmp4 = null;
    if (null != icon) {
      const obj6 = { id: null, icon: null, size: 24 };
      ({ id: obj4.id, icon: obj4.icon } = closure_1_11[index]);
      const obj3 = stateFromStoresArray(stateFromStoresArray1[3]);
      let applicationIconURL = obj3.getApplicationIconURL(obj6);
      if (applicationIconURL == null) {
        applicationIconURL = null;
      }
      tmp4 = applicationIconURL;
    }
    return obj;
  }), items12);
  dependencyMap = result;
  let tmp24 = null;
  if (null != application_id) {
    tmp24 = null;
    if (!memo5.some((applicationId) => applicationId.applicationId === application_id)) {
      tmp24 = application_id;
    }
  }
  _slicedToArray = tmp24;
  const tmp2Result2 = tmp2(7324);
  getOrFetchApplication = tmp2Result2.useGetOrFetchApplication(tmp24);
  const items13 = [memo5, result, tmp24, getOrFetchApplication];
  return obj.useMemo(() => {
    let items;
    let tmp3;
    let tmp5;
    if (null != application_id) {
      let obj6;
      if (null != getOrFetchApplication) {
        const obj4 = { applicationId: application_id, name: getOrFetchApplication.name, iconApplication: tmp3, iconURL: tmp5 };
        tmp3 = tmp12;
        if (getOrFetchApplication == null) {
          tmp3 = { id: application_id, icon: null };
          const obj = { id: application_id, icon: null };
        }
        let icon;
        if (getOrFetchApplication != null) {
          icon = tmp12.icon;
        }
        tmp5 = null;
        if (null != icon) {
          const obj5 = { id: null, icon: null, size: 24 };
          ({ id: obj3.id, icon: obj3.icon } = getOrFetchApplication);
          const obj2 = AvatarUtilsDefault;
          let applicationIconURL = obj2.getApplicationIconURL(obj5);
          if (applicationIconURL == null) {
            applicationIconURL = null;
          }
          tmp5 = applicationIconURL;
        }
        obj6 = { options: items, listState: "rows" };
        items = [obj4];
        HermesBuiltin.arraySpread(items, memo5, 1);
      }
      return obj6;
    }
    obj6 = { options: memo5, listState: dependencyMap };
  }, items13);
}
