// Module ID: 15175
// Function ID: 15176
// Name: GameCommunityUpsellDevTools
// Dependencies: [19, 17, 13256, 15176, 21, 4836, 576, 504, 15177, 13258, 13257, 5999, 5917, 14506, 5924, 2]
// Exports: default

// Module 15175 (GameCommunityUpsellDevTools)
import nativeDefault from "native" /* 576 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import LocalAppDetectionStore from "LocalAppDetectionStore" /* 13256 */;
import MobileGameCommunitiesStore from "MobileGameCommunitiesStore" /* 15176 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c3;
let closure_4;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
function MultiGuildDevTools() {
  let TableRowGroup;
  let TableRowGroup2;
  let TableRowGroup3;
  let closure_0;
  let dismissedCount;
  let guildsCount;
  let items2;
  let items3;
  let items4;
  let mapped1;
  let obj11;
  let obj4;
  let obj7;
  let onPress;
  let tmp11;
  let tmp = closure_9();
  const tmp2 = _require;
  const tmp3 = onPress;
  let obj = require("get initialized");
  const items = [LocalAppDetectionStore];
  _require = obj.useStateFromStores(items, () => LocalAppDetectionStore.getUserAgnosticState());
  const items1 = [MobileGameCommunitiesStore];
  const obj2 = require("get initialized");
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => {
    const obj = { guildsCount: MobileGameCommunitiesStore.getPresentableUpsellGuilds().length, dismissedCount: MobileGameCommunitiesStore.getDismissedGuildIds().size, lastFetchedAt: MobileGameCommunitiesStore.getLastFetchedAt() };
    return obj;
  });
  const lastFetchedAt = stateFromStoresObject.lastFetchedAt;
  ({ guildsCount, dismissedCount } = stateFromStoresObject);
  const entries = Object.entries(require("GameCommunityConfig").DETECTABLE_GAME_TO_APPLICATION_ID_MAP);
  const mapped = entries.map((item) => {
    let flag;
    let lastScannedAt;
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    const obj = { detectableAppName: tmp, gameId: tmp2, detected: flag, lastScannedAt };
    flag = undefined;
    if (closure_0.apps[tmp] != null) {
      flag = tmp3.detected;
    }
    if (flag == null) {
      flag = false;
    }
    lastScannedAt = undefined;
    if (closure_0.apps[tmp] != null) {
      lastScannedAt = tmp3.lastScannedAt;
    }
    return obj;
  });
  let str = "Never";
  if (lastFetchedAt > 0) {
    let _Date = Date;
    let self = this;
    let self2 = this;
    let date = new Date(lastFetchedAt);
    let _HermesInternal = HermesInternal;
    let str2 = "";
    str = "" + date.toLocaleTimeString();
  }
  onPress = react.useCallback(() => {
    LocalAppDetectionStore.DEV_resetState();
    MobileGameCommunitiesStore.DEV_clearFetchCache();
    const obj = closure_0(callback[9]);
    obj.detectLocalApps(closure_0(callback[10]).ALL_DETECTABLE_APP_NAMES);
  }, []);
  const obj3 = { style: tmp.container, children: closure_8(tmp11, obj4) };
  obj4 = { style: tmp.scrollView, children: items2 };
  const obj5 = { style: tmp.section, children: closure_7(TableRowGroup, { title: "Detected Apps", hasIcons: false, children: mapped1 }) };
  TableRowGroup = tmp2(tmp3[11]).TableRowGroup;
  tmp11 = closure_4;
  if (0 === mapped.length) {
    mapped1 = tmp8(tmp2(tmp3[12]).TableRow, { label: "No games configured", subLabel: "MULTI_GUILD_GAME_CONFIGS is empty", disabled: true });
  } else {
    mapped1 = mapped.map(function(detectableAppName) {
      let gameId;
      let str;
      let str2;
      const obj = { label: detectableAppName.detectableAppName, subLabel: "Game ID: " + gameId + " \u2014 " + str + str2, disabled: true };
      gameId = detectableAppName.gameId;
      str = "Not detected";
      const TableRow = closure_0(callback[12]).TableRow;
      const tmp = closure_1_7;
      if (detectableAppName.detected) {
        str = "Detected";
      }
      str2 = "";
      if (null != detectableAppName.lastScannedAt) {
        const _Date = Date;
        const self = this;
        const self2 = this;
        const _HermesInternal = HermesInternal;
        const date = new Date(detectableAppName.lastScannedAt);
        str2 = " (scanned " + date.toLocaleTimeString() + ")";
      }
      return tmp(TableRow, obj, detectableAppName.detectableAppName);
    });
  }
  items2 = [closure_7(closure_3, obj5), , ];
  const obj6 = { style: tmp.section, children: closure_8(TableRowGroup2, obj7) };
  obj7 = { title: "Store State", hasIcons: false, children: items3 };
  TableRowGroup2 = tmp2(tmp3[11]).TableRowGroup;
  const obj8 = { label: "Presentable Guilds", subLabel: String(guildsCount), disabled: true };
  let TableRow = tmp2(tmp3[12]).TableRow;
  items3 = [closure_7(TableRow, obj8), , ];
  const obj9 = { label: "Dismissed Guilds", subLabel: String(dismissedCount), disabled: true };
  const TableRow2 = tmp2(tmp3[12]).TableRow;
  items3[1] = closure_7(TableRow2, obj9);
  items3[2] = closure_7(tmp2(tmp3[12]).TableRow, { label: "Last Fetched", subLabel: str, disabled: true });
  items2[1] = closure_7(closure_3, obj6);
  const obj10 = { style: tmp.section, children: closure_8(TableRowGroup3, obj11) };
  obj11 = { title: "Actions", hasIcons: true, children: items4 };
  TableRowGroup3 = tmp2(tmp3[11]).TableRowGroup;
  const obj12 = { label: "Refresh Upsell Guilds", subLabel: "Redects games and suggested guilds", onPress, icon: closure_7(tmp2(tmp3[13]).RefreshIcon, {}), trailing: closure_7(tmp2(tmp3[14]).TableRowArrow, {}) };
  const TableRow3 = tmp2(tmp3[12]).TableRow;
  items4 = [closure_7(TableRow3, obj12), , ];
  const obj13 = {
    label: "Clear Dismissed Guilds",
    subLabel: "Reset dismissed guild IDs so all guilds show again",
    onPress() {
      const result = MobileGameCommunitiesStore.DEV_clearDismissedGuilds();
      callback();
    },
    icon: closure_7(tmp2(tmp3[13]).RefreshIcon, {}),
    trailing: closure_7(tmp2(tmp3[14]).TableRowArrow, {})
  };
  const TableRow4 = tmp2(tmp3[12]).TableRow;
  items4[1] = closure_7(TableRow4, obj13);
  const obj14 = {
    label: "Clear All Store State",
    subLabel: "Reset all MobileGameCommunitiesStore state (guilds, dismissed, fetch cache)",
    onPress() {
      MobileGameCommunitiesStore.DEV_clearState();
    },
    icon: closure_7(tmp2(tmp3[13]).RefreshIcon, {}),
    trailing: closure_7(tmp2(tmp3[14]).TableRowArrow, {})
  };
  const TableRow5 = tmp2(tmp3[12]).TableRow;
  items4[2] = closure_7(TableRow5, obj14);
  items2[2] = closure_7(closure_3, obj10);
  return closure_7(closure_3, obj3);
}
({ View: c3, ScrollView: closure_4 } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, scrollView: { flex: 1 }, section: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8 };
let closure_9 = createStyles(obj);
let result = size.fileFinishedImporting("modules/game_community_upsell/native/GameCommunityUpsellDevTools.tsx");

export default function GameCommunityUpsellDevTools() {
  return metroImportDefault(MultiGuildDevTools, {});
};
