// Module ID: 7538
// Function ID: 7539
// Name: useCurrentChangelog
// Dependencies: [19, 2112, 4850, 2098, 563, 7539, 2]
// Exports: useCurrentChangelog

// Module 7538 (useCurrentChangelog)
import useStateFromStores from "useStateFromStores" /* 563 */;
import ChangelogConstants from "ChangelogConstants" /* 2098 */;
import ChangeLogActionCreatorsDefault from "ChangeLogActionCreators" /* 7539 */;
import react from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2112 */;
import ChangelogStore from "ChangelogStore" /* 4850 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function useChangelog(changelogId, stateFromStores) {
  let changelog;
  let defaultChangelog;
  let defaultLoadState;
  let obj4;
  _require = changelogId;
  let closure_1 = stateFromStores;
  let obj = require("useStateFromStores");
  const items = [ChangelogStore];
  const items1 = [changelogId, stateFromStores];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let changelogLoadStatus1;
    changelog = null;
    if (null != changelogId) {
      changelog = ChangelogStore.getChangelog(tmp, stateFromStores);
    }
    let changelog1 = null;
    if (null != changelogId) {
      changelog1 = ChangelogStore.getChangelog(tmp, "en-US");
    }
    const changelogLoadStatus = null != tmp && ChangelogStore.getChangelogLoadStatus(tmp, "en-US");
    const obj = { changelog, loadState: changelogLoadStatus1, defaultChangelog: changelog1, defaultLoadState: changelogLoadStatus };
    changelogLoadStatus1 = null != tmp && ChangelogStore.getChangelogLoadStatus(tmp, stateFromStores);
    return obj;
  }, items1);
  changelog = stateFromStoresObject.changelog;
  const loadState = stateFromStoresObject.loadState;
  const items2 = [changelogId, changelog, loadState, stateFromStores];
  ({ defaultChangelog, defaultLoadState } = stateFromStoresObject);
  const effect = loadState.useEffect(() => {
    let tmp2 = null != changelogId;
    const tmp = changelogId;
    if (tmp2) {
      tmp2 = null == changelog;
    }
    if (tmp2) {
      tmp2 = loadState === ChangelogLoadState.NOT_LOADED;
    }
    if (tmp2) {
      const obj = ChangeLogActionCreatorsDefault;
      changelog = obj.fetchChangelog(tmp, stateFromStores);
    }
  }, items2);
  if (null == changelogId) {
    obj4 = { id: changelogId, changelog: null, loaded: false };
    const obj2 = { id: changelogId, changelog: null, loaded: false };
  } else {
    if (null == changelog) {
      if (loadState === ChangelogLoadState.LOADED_FAILURE) {
        obj4 = { id: changelogId, changelog: defaultChangelog, loaded: defaultLoadState !== tmp3.NOT_LOADED };
        const obj3 = { id: changelogId, changelog: defaultChangelog, loaded: defaultLoadState !== tmp3.NOT_LOADED };
      }
    }
    obj4 = { id: changelogId, changelog, loaded: loadState !== ChangelogLoadState.NOT_LOADED };
  }
  return obj4;
}
const ChangelogLoadState = ChangelogConstants.ChangelogLoadState;
const result = size.fileFinishedImporting("modules/changelog/useCurrentChangelog.tsx");

export { useChangelog };
export const useCurrentChangelog = function useCurrentChangelog() {
  let changelog;
  let changelog2;
  let loaded;
  let loaded2;
  let locale;
  let obj5;
  const items = [LocaleStore];
  const obj = useStateFromStores;
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  const items1 = [ChangelogStore];
  const obj2 = useStateFromStores;
  const stateFromStores1 = obj2.useStateFromStores(items1, () => ChangelogStore.latestChangelogId());
  const items2 = [ChangelogStore];
  const obj3 = useStateFromStores;
  const stateFromStores2 = obj3.useStateFromStores(items2, () => ChangelogStore.getConfig());
  let tmp7 = null != stateFromStores2;
  const tmp4 = ChangelogStore;
  if (tmp7) {
    const _Object = Object;
    tmp7 = 0 === Object.keys(stateFromStores2).length;
  }
  let tmp9 = null != stateFromStores2;
  if (tmp9) {
    const _Object2 = Object;
    tmp9 = Object.keys(stateFromStores2).length > 0;
  }
  if (tmp9) {
    tmp9 = null == stateFromStores1;
  }
  const items3 = [tmp4];
  const tmpResult = useStateFromStores;
  const stateFromStores3 = tmpResult.useStateFromStores(items3, () => ChangelogStore.overrideId());
  ({ changelog, loaded } = useChangelog(stateFromStores1, stateFromStores));
  useChangelog(stateFromStores1, stateFromStores);
  ({ changelog: changelog2, loaded: loaded2 } = useChangelog(stateFromStores3, stateFromStores));
  useChangelog(stateFromStores3, stateFromStores);
  if (null == stateFromStores3) {
    obj5 = { id: stateFromStores1, changelog, loaded: tmp7 || loaded, clientTooOld: tmp9 };
    const obj4 = { id: stateFromStores1, changelog, loaded: tmp7 || loaded, clientTooOld: tmp9 };
  } else {
    obj5 = { id: stateFromStores3, changelog: changelog2, loaded: loaded2, clientTooOld: false };
  }
  return obj5;
};
