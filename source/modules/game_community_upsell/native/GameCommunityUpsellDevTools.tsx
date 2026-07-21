// Module ID: 14464
// Function ID: 108980
// Name: MultiGuildDevTools
// Dependencies: []
// Exports: default

// Module 14464 (MultiGuildDevTools)
function MultiGuildDevTools() {
  let dismissedCount;
  let guildsCount;
  const tmp = callback4();
  let obj = callback(dependencyMap[7]);
  const items = [closure_5];
  let callback = obj.useStateFromStores(items, () => closure_5.getUserAgnosticState());
  let obj1 = callback(dependencyMap[7]);
  const items1 = [closure_6];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items1, () => ({ guildsCount: store.getPresentableUpsellGuilds().length, dismissedCount: store.getDismissedGuildIds().size, lastFetchedAt: store.getLastFetchedAt() }));
  const lastFetchedAt = stateFromStoresObject.lastFetchedAt;
  ({ guildsCount, dismissedCount } = stateFromStoresObject);
  const entries = Object.entries(callback(dependencyMap[8]).DETECTABLE_GAME_TO_APPLICATION_ID_MAP);
  const mapped = entries.map((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    const obj = { detectableAppName: tmp, gameId: tmp2 };
    let detected;
    if (null != lib.apps[tmp]) {
      detected = tmp3.detected;
    }
    obj.detected = null != detected && detected;
    let lastScannedAt;
    if (null != lib.apps[tmp]) {
      lastScannedAt = tmp3.lastScannedAt;
    }
    obj.lastScannedAt = lastScannedAt;
    return obj;
  });
  let str = "Never";
  if (lastFetchedAt > 0) {
    const _Date = Date;
    const date = new Date(lastFetchedAt);
    const _HermesInternal = HermesInternal;
    str = "" + date.toLocaleTimeString();
  }
  callback = React.useCallback(() => {
    closure_5.DEV_resetState();
    store.DEV_clearFetchCache();
    lib(callback[9]).detectLocalApps(lib(callback[10]).ALL_DETECTABLE_APP_NAMES);
  }, []);
  const dependencyMap = callback;
  obj = { style: tmp.container };
  obj = { style: tmp.scrollView };
  obj1 = { style: tmp.section };
  const obj2 = {};
  if (0 === mapped.length) {
    let mapped1 = callback2(callback(dependencyMap[12]).TableRow, { style: true, nativeID: true, collapsableChildren: true });
  } else {
    mapped1 = mapped.map((detectableAppName) => {
      const obj = { label: detectableAppName.detectableAppName };
      let str = "Not detected";
      if (detectableAppName.detected) {
        str = "Detected";
      }
      let str2 = "";
      if (null != detectableAppName.lastScannedAt) {
        const _Date = Date;
        const date = new Date(detectableAppName.lastScannedAt);
        const _HermesInternal = HermesInternal;
        str2 = " (scanned " + date.toLocaleTimeString() + ")";
      }
      obj.subLabel = "Game ID: " + detectableAppName.gameId + " \u2014 " + str + str2;
      obj.disabled = true;
      return closure_7(lib(callback[12]).TableRow, obj, detectableAppName.detectableAppName);
    });
  }
  obj2.children = mapped1;
  obj1.children = callback2(callback(dependencyMap[11]).TableRowGroup, obj2);
  const items2 = [callback2(closure_3, obj1), , ];
  const obj3 = { style: tmp.section };
  const obj4 = { "Bool(false)": "/assets/.cache/intl/bW9kdWxlcy9pbnRs", "Bool(false)": null };
  const obj5 = { style: "837672453878b871665e1e66114aefea", nativeID: "ja.messages.837672453878b871665e1e66114aefea.compiled.messages", collapsableChildren: "jsona", subLabel: String(guildsCount) };
  const items3 = [callback2(callback(dependencyMap[12]).TableRow, obj5), , ];
  const obj6 = { style: "90d00b19b83abb5315af7cd0e82a3fdd", nativeID: "ko.messages.90d00b19b83abb5315af7cd0e82a3fdd.compiled.messages", collapsableChildren: "jsona", subLabel: String(dismissedCount) };
  items3[1] = callback2(callback(dependencyMap[12]).TableRow, obj6);
  const obj7 = { style: true, nativeID: "/assets/.cache/intl/bW9kdWxlcy9jbGlwcw==", collapsableChildren: null, subLabel: str };
  items3[2] = callback2(callback(dependencyMap[12]).TableRow, obj7);
  obj4.children = items3;
  obj3.children = callback3(callback(dependencyMap[11]).TableRowGroup, obj4);
  items2[1] = callback2(closure_3, obj3);
  const obj8 = { style: tmp.section };
  const obj9 = {};
  const obj10 = { onPress: callback, icon: callback2(callback(dependencyMap[13]).RefreshIcon, {}), trailing: callback2(callback(dependencyMap[14]).TableRowArrow, {}) };
  const items4 = [callback2(callback(dependencyMap[12]).TableRow, obj10), , , ];
  const obj11 = {
    onPress() {
      const result = store.DEV_clearDismissedGuilds();
      callback();
    },
    icon: callback2(callback(dependencyMap[13]).RefreshIcon, {}),
    trailing: callback2(callback(dependencyMap[14]).TableRowArrow, {})
  };
  items4[1] = callback2(callback(dependencyMap[12]).TableRow, obj11);
  const obj12 = {
    onPress() {
      store.DEV_clearState();
    },
    icon: callback2(callback(dependencyMap[13]).RefreshIcon, {}),
    trailing: callback2(callback(dependencyMap[14]).TableRowArrow, {})
  };
  items4[2] = callback2(callback(dependencyMap[12]).TableRow, obj12);
  const obj13 = {
    onPress() {
      const result = lib(callback[15]).removeDismissedContent(lib(callback[16]).DismissibleContent.MOBILE_MULTI_GUILD_CREATE_UPSELL_ANIMATION);
      const obj = lib(callback[15]);
      const result1 = lib(callback[17]).resetDismissibleContentFrameworkStore();
    },
    icon: callback2(callback(dependencyMap[13]).RefreshIcon, {}),
    trailing: callback2(callback(dependencyMap[14]).TableRowArrow, {})
  };
  items4[3] = callback2(callback(dependencyMap[12]).TableRow, obj13);
  obj9.children = items4;
  obj8.children = callback3(callback(dependencyMap[11]).TableRowGroup, obj9);
  items2[2] = callback2(closure_3, obj8);
  obj.children = items2;
  obj.children = callback3(closure_4, obj);
  return callback2(closure_3, obj);
}
let closure_2 = importAll(dependencyMap[0]);
({ View: closure_3, ScrollView: closure_4 } = arg1(dependencyMap[1]));
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.container = obj;
obj.scrollView = { flex: 1 };
const tmp3 = arg1(dependencyMap[4]);
obj.section = { paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16, paddingTop: importDefault(dependencyMap[6]).space.PX_16, paddingBottom: importDefault(dependencyMap[6]).space.PX_8 };
let closure_9 = obj.createStyles(obj);
const obj1 = { paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16, paddingTop: importDefault(dependencyMap[6]).space.PX_16, paddingBottom: importDefault(dependencyMap[6]).space.PX_8 };
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/game_community_upsell/native/GameCommunityUpsellDevTools.tsx");

export default function GameCommunityUpsellDevTools() {
  return callback2(MultiGuildDevTools, {});
};
