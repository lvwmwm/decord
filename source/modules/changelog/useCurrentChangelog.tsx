// Module ID: 7767
// Function ID: 61675
// Name: useChangelog
// Dependencies: [31, 1921, 4141, 1905, 624, 7768, 2]
// Exports: useCurrentChangelog

// Module 7767 (useChangelog)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { ChangelogLoadState } from "CHANGELOG_MODAL_KEY";

const require = arg1;
function useChangelog(changelogId, stateFromStores) {
  let defaultChangelog;
  let defaultLoadState;
  const _require = changelogId;
  let closure_1 = stateFromStores;
  let obj = _require(changelog[4]);
  const items = [closure_5];
  const items1 = [changelogId, stateFromStores];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let changelog = null;
    if (null != closure_0) {
      changelog = outer1_5.getChangelog(closure_0, closure_1);
    }
    let changelog1 = null;
    if (null != closure_0) {
      changelog1 = outer1_5.getChangelog(closure_0, "en-US");
    }
    let changelogLoadStatus = null != closure_0;
    if (changelogLoadStatus) {
      changelogLoadStatus = outer1_5.getChangelogLoadStatus(closure_0, "en-US");
    }
    const obj = { changelog };
    let changelogLoadStatus1 = null != closure_0;
    if (changelogLoadStatus1) {
      changelogLoadStatus1 = outer1_5.getChangelogLoadStatus(closure_0, closure_1);
    }
    obj.loadState = changelogLoadStatus1;
    obj.defaultChangelog = changelog1;
    obj.defaultLoadState = changelogLoadStatus;
    return obj;
  }, items1);
  changelog = stateFromStoresObject.changelog;
  const loadState = stateFromStoresObject.loadState;
  const items2 = [changelogId, changelog, loadState, stateFromStores];
  ({ defaultChangelog, defaultLoadState } = stateFromStoresObject);
  const effect = loadState.useEffect(() => {
    let tmp = null != closure_0;
    if (tmp) {
      tmp = null == changelog;
    }
    if (tmp) {
      tmp = loadState === outer1_6.NOT_LOADED;
    }
    if (tmp) {
      changelog = stateFromStores(changelog[5]).fetchChangelog(closure_0, stateFromStores);
      const obj = stateFromStores(changelog[5]);
    }
  }, items2);
  if (null == changelogId) {
    obj = { id: changelogId, changelog: null, loaded: false };
    let obj1 = obj;
  } else {
    if (null == changelog) {
      if (loadState === ChangelogLoadState.LOADED_FAILURE) {
        obj = { id: changelogId, changelog: defaultChangelog, loaded: defaultLoadState !== ChangelogLoadState.NOT_LOADED };
        obj1 = obj;
      }
    }
    obj1 = { id: changelogId, changelog, loaded: loadState !== ChangelogLoadState.NOT_LOADED };
  }
  return obj1;
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/changelog/useCurrentChangelog.tsx");

export { useChangelog };
export const useCurrentChangelog = function useCurrentChangelog() {
  let changelog;
  let changelog2;
  let loaded;
  let loaded2;
  let obj = require(624) /* defaultAreStatesEqual */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.locale);
  const items1 = [closure_5];
  const stateFromStores1 = require(624) /* defaultAreStatesEqual */.useStateFromStores(items1, () => outer1_5.latestChangelogId());
  const obj2 = require(624) /* defaultAreStatesEqual */;
  const items2 = [closure_5];
  const stateFromStores2 = require(624) /* defaultAreStatesEqual */.useStateFromStores(items2, () => outer1_5.getConfig());
  let tmp4 = null != stateFromStores2;
  if (tmp4) {
    const _Object = Object;
    tmp4 = 0 === Object.keys(stateFromStores2).length;
  }
  let tmp6 = null != stateFromStores2;
  if (tmp6) {
    const _Object2 = Object;
    tmp6 = Object.keys(stateFromStores2).length > 0;
  }
  if (tmp6) {
    tmp6 = null == stateFromStores1;
  }
  const obj3 = require(624) /* defaultAreStatesEqual */;
  const items3 = [closure_5];
  const stateFromStores3 = require(624) /* defaultAreStatesEqual */.useStateFromStores(items3, () => outer1_5.overrideId());
  const obj4 = require(624) /* defaultAreStatesEqual */;
  ({ changelog, loaded } = useChangelog(stateFromStores1, stateFromStores));
  const tmp9 = useChangelog(stateFromStores1, stateFromStores);
  ({ changelog: changelog2, loaded: loaded2 } = useChangelog(stateFromStores3, stateFromStores));
  if (null == stateFromStores3) {
    obj = { id: stateFromStores1, changelog };
    let tmp11 = tmp4;
    if (!tmp4) {
      tmp11 = loaded;
    }
    obj.loaded = tmp11;
    obj.clientTooOld = tmp6;
  } else {
    obj = { id: stateFromStores3, changelog: changelog2, loaded: loaded2, clientTooOld: false };
  }
  return obj;
};
