// Module ID: 14589
// Function ID: 111215
// Name: MultiGuildDevTools
// Dependencies: [31, 27, 12634, 14590, 33, 4130, 689, 566, 14591, 12636, 12635, 5503, 5165, 13509, 5171, 1331, 1334, 12996, 2]
// Exports: default

// Module 14589 (MultiGuildDevTools)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import closure_5 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_7;
let closure_8;
const require = arg1;
function MultiGuildDevTools() {
  let dismissedCount;
  let guildsCount;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = _require(callback[7]);
  const items = [closure_5];
  _require = obj.useStateFromStores(items, () => outer1_5.getUserAgnosticState());
  let obj1 = _require(callback[7]);
  const items1 = [_isNativeReflectConstruct];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items1, () => ({ guildsCount: outer1_6.getPresentableUpsellGuilds().length, dismissedCount: outer1_6.getDismissedGuildIds().size, lastFetchedAt: outer1_6.getLastFetchedAt() }));
  const lastFetchedAt = stateFromStoresObject.lastFetchedAt;
  ({ guildsCount, dismissedCount } = stateFromStoresObject);
  const entries = Object.entries(_require(callback[8]).DETECTABLE_GAME_TO_APPLICATION_ID_MAP);
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
    let _Date = Date;
    let date = new Date(lastFetchedAt);
    let _HermesInternal = HermesInternal;
    str = "" + date.toLocaleTimeString();
  }
  callback = React.useCallback(() => {
    outer1_5.DEV_resetState();
    outer1_6.DEV_clearFetchCache();
    lib(callback[9]).detectLocalApps(lib(callback[10]).ALL_DETECTABLE_APP_NAMES);
  }, []);
  obj = { style: tmp.container };
  obj = { style: tmp.scrollView };
  obj1 = { style: tmp.section };
  const obj2 = { title: "Detected Apps", hasIcons: false };
  if (0 === mapped.length) {
    let mapped1 = callback(_require(callback[12]).TableRow, { label: "No games configured", subLabel: "MULTI_GUILD_GAME_CONFIGS is empty", disabled: true });
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
      return outer1_7(lib(callback[12]).TableRow, obj, detectableAppName.detectableAppName);
    });
  }
  obj2.children = mapped1;
  obj1.children = callback(_require(callback[11]).TableRowGroup, obj2);
  const items2 = [callback(closure_3, obj1), , ];
  const obj3 = { style: tmp.section };
  const obj4 = { title: "Store State", hasIcons: false };
  const obj5 = { label: "Presentable Guilds", subLabel: String(guildsCount), disabled: true };
  const items3 = [callback(_require(callback[12]).TableRow, obj5), , ];
  const obj6 = { label: "Dismissed Guilds", subLabel: String(dismissedCount), disabled: true };
  items3[1] = callback(_require(callback[12]).TableRow, obj6);
  const obj7 = { label: "Last Fetched", subLabel: str, disabled: true };
  items3[2] = callback(_require(callback[12]).TableRow, obj7);
  obj4.children = items3;
  obj3.children = callback2(_require(callback[11]).TableRowGroup, obj4);
  items2[1] = callback(closure_3, obj3);
  const obj8 = { style: tmp.section };
  const obj9 = { title: "Actions", hasIcons: true };
  const obj10 = { label: "Refresh Upsell Guilds", subLabel: "Redects games and suggested guilds", onPress: callback, icon: callback(_require(callback[13]).RefreshIcon, {}), trailing: callback(_require(callback[14]).TableRowArrow, {}) };
  const items4 = [callback(_require(callback[12]).TableRow, obj10), , , ];
  const obj11 = {
    label: "Clear Dismissed Guilds",
    subLabel: "Reset dismissed guild IDs so all guilds show again",
    onPress() {
      const result = outer1_6.DEV_clearDismissedGuilds();
      callback();
    },
    icon: callback(_require(callback[13]).RefreshIcon, {}),
    trailing: callback(_require(callback[14]).TableRowArrow, {})
  };
  items4[1] = callback(_require(callback[12]).TableRow, obj11);
  const obj12 = {
    label: "Clear All Store State",
    subLabel: "Reset all MobileGameCommunitiesStore state (guilds, dismissed, fetch cache)",
    onPress() {
      outer1_6.DEV_clearState();
    },
    icon: callback(_require(callback[13]).RefreshIcon, {}),
    trailing: callback(_require(callback[14]).TableRowArrow, {})
  };
  items4[2] = callback(_require(callback[12]).TableRow, obj12);
  const obj13 = {
    label: "Reset Upsell Animation",
    subLabel: "Clear the dismissed state for the create button NUX animation so it can replay",
    onPress() {
      const result = lib(callback[15]).removeDismissedContent(lib(callback[16]).DismissibleContent.MOBILE_MULTI_GUILD_CREATE_UPSELL_ANIMATION);
      const obj = lib(callback[15]);
      const result1 = lib(callback[17]).resetDismissibleContentFrameworkStore();
    },
    icon: callback(_require(callback[13]).RefreshIcon, {}),
    trailing: callback(_require(callback[14]).TableRowArrow, {})
  };
  items4[3] = callback(_require(callback[12]).TableRow, obj13);
  obj9.children = items4;
  obj8.children = callback2(_require(callback[11]).TableRowGroup, obj9);
  items2[2] = callback(closure_3, obj8);
  obj.children = items2;
  obj.children = callback2(closure_4, obj);
  return callback(closure_3, obj);
}
({ View: closure_3, ScrollView: closure_4 } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, flex: 1 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.scrollView = { flex: 1 };
_createForOfIteratorHelperLoose.section = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/game_community_upsell/native/GameCommunityUpsellDevTools.tsx");

export default function GameCommunityUpsellDevTools() {
  return callback(MultiGuildDevTools, {});
};
