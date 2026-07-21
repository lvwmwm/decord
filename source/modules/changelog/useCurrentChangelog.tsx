// Module ID: 7760
// Function ID: 61616
// Name: useChangelog
// Dependencies: []
// Exports: useCurrentChangelog

// Module 7760 (useChangelog)
function useChangelog(changelogId, stateFromStores) {
  let defaultChangelog;
  let defaultLoadState;
  stateFromStores = changelogId;
  const importDefault = stateFromStores;
  let obj = stateFromStores(dependencyMap[4]);
  const items = [closure_5];
  const items1 = [changelogId, stateFromStores];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let changelog = null;
    if (null != arg0) {
      changelog = store.getChangelog(arg0, arg1);
    }
    let changelog1 = null;
    if (null != arg0) {
      changelog1 = store.getChangelog(arg0, "en-US");
    }
    let changelogLoadStatus = null != arg0;
    if (changelogLoadStatus) {
      changelogLoadStatus = store.getChangelogLoadStatus(arg0, "en-US");
    }
    const obj = { changelog };
    let changelogLoadStatus1 = null != arg0;
    if (changelogLoadStatus1) {
      changelogLoadStatus1 = store.getChangelogLoadStatus(arg0, arg1);
    }
    obj.loadState = changelogLoadStatus1;
    obj.defaultChangelog = changelog1;
    obj.defaultLoadState = changelogLoadStatus;
    return obj;
  }, items1);
  const changelog = stateFromStoresObject.changelog;
  const dependencyMap = changelog;
  const loadState = stateFromStoresObject.loadState;
  const React = loadState;
  const items2 = [changelogId, changelog, loadState, stateFromStores];
  ({ defaultChangelog, defaultLoadState } = stateFromStoresObject);
  const effect = React.useEffect(() => {
    let tmp = null != arg0;
    if (tmp) {
      tmp = null == changelog;
    }
    if (tmp) {
      tmp = loadState === constants.NOT_LOADED;
    }
    if (tmp) {
      const changelog = arg1(changelog[5]).fetchChangelog(arg0, arg1);
      const obj = arg1(changelog[5]);
    }
  }, items2);
  if (null == changelogId) {
    obj = { flexDirection: "handled", alignItems: false, justifyContent: 16, id: changelogId };
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
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const ChangelogLoadState = arg1(dependencyMap[3]).ChangelogLoadState;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/changelog/useCurrentChangelog.tsx");

export { useChangelog };
export const useCurrentChangelog = function useCurrentChangelog() {
  let changelog;
  let changelog2;
  let loaded;
  let loaded2;
  let obj = arg1(dependencyMap[4]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  const items1 = [closure_5];
  const stateFromStores1 = arg1(dependencyMap[4]).useStateFromStores(items1, () => closure_5.latestChangelogId());
  const obj2 = arg1(dependencyMap[4]);
  const items2 = [closure_5];
  const stateFromStores2 = arg1(dependencyMap[4]).useStateFromStores(items2, () => closure_5.getConfig());
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
  const obj3 = arg1(dependencyMap[4]);
  const items3 = [closure_5];
  const stateFromStores3 = arg1(dependencyMap[4]).useStateFromStores(items3, () => closure_5.overrideId());
  const obj4 = arg1(dependencyMap[4]);
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
