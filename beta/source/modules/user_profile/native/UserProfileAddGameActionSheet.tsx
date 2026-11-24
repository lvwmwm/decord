// Module ID: 10206
// Function ID: 10207
// Name: UserProfileAddGameActionSheet
// Dependencies: [32, 19, 17, 502, 10207, 8069, 21, 4913, 575, 7045, 2151, 2152, 7977, 5600, 10208, 5488, 7426, 10212, 504, 10213, 6958, 10214, 9931, 10220, 10215, 10216, 10217, 4922, 1112, 5923, 8136, 6680, 5127, 10205, 5141, 7515, 7427, 7020, 5504, 7432, 2]
// Exports: default

// Module 10206 (UserProfileAddGameActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1112 */;
import getGameMediaRefURLDefault from "getGameMediaRefURL" /* 2151 */;
import StringUtils from "StringUtils" /* 2152 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4922 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import _extends from "_extends" /* 6680 */;
import UserProfileGameWidgetTypes from "UserProfileGameWidgetTypes" /* 6958 */;
import TableRow2 from "TableRow" /* 7045 */;
import Constants from "Constants" /* 8069 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8136 */;
import openUserProfileAddGameActionSheet from "openUserProfileAddGameActionSheet" /* 10205 */;
import GamePlatformBadgeRowDefault from "GamePlatformBadgeRow" /* 10208 */;
import WidgetUtils from "WidgetUtils" /* 10217 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import WidgetStore from "WidgetStore" /* 10207 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4913 */;
import size_mod from "module_2" /* 2 */;

let map, set;

let c10;
let c9;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let size;
let react = react_mod;
const View = react_native.View;
let closure_8 = Constants.TrackUserProfileEditActions;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { searchBar: obj2, list: obj3, loading: obj4, emptyState: obj5, emptyStateText: { textAlign: "center" }, gameIcon: size, gameIconBackground: obj6 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj4 = { paddingVertical: nativeDefault.space.PX_24, alignItems: "center" };
obj5 = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_24 };
size = { width: 32, height: 32, borderRadius: nativeDefault.radii.sm };
obj6 = { backgroundColor: nativeDefault.unsafe_rawColors.NEUTRAL_36 };
let closure_11 = createStyles(obj);
let closure_12 = react.memo(function AddGameRow(option) {
  let closure_129_1;
  let end;
  let items;
  let metadata;
  let obj6;
  let obj7;
  let start;
  let tmp11Result;
  let tmp5Result;
  option = option.option;
  ({ metadata, start, end, onSelect: closure_129_1 } = option);
  const extraChromeEnabled = option.extraChromeEnabled;
  const tmp = closure_11();
  if (extraChromeEnabled) {
    let icon;
    const id = option.id;
    const tmp7 = getGameMediaRefURLDefault;
    if (metadata != null) {
      icon = metadata.icon;
    }
    const tmp7Result = tmp7(id, icon, { size: 32 });
    const obj2 = {
      label: option.label,
      labelLineClamp: 1,
      icon: tmp11Result,
      trailing: React4(tmp5Result, obj7),
      disabled: option.disabled,
      start,
      end,
      onPress() {
          return closure_1_1(option.id);
        }
    };
    const TableRow = TableRow2.TableRow;
    const obj3 = StringUtils;
    const tmp12 = require;
    if (obj3.isNullOrEmpty(tmp7Result)) {
      const obj4 = { size: "sm", style: tmp.gameIcon };
      tmp11Result = tmp11(tmp12(7977).UnknownGameIcon, obj4);
    } else {
      const obj5 = { style: items, source: obj6 };
      items = [, ];
      ({ gameIcon: arr[0], gameIconBackground: arr[1] } = tmp);
      obj6 = { uri: tmp7Result };
      tmp11Result = tmp11(tmp5(5600), obj5);
    }
    let platformAvailability;
    tmp5Result = GamePlatformBadgeRowDefault;
    if (metadata != null) {
      platformAvailability = metadata.platformAvailability;
    }
    obj7 = { platforms: platformAvailability };
    return React4(TableRow, obj2);
  } else {
    const obj = {
      label: null,
      labelLineClamp: 1,
      disabled: null,
      start,
      end,
      onPress() {
          return closure_1_1(option.id);
        }
    };
    ({ label: obj.label, disabled: obj.disabled } = option);
    return React4(TableRow2.TableRow, obj);
  }
});
size = size_mod;
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileAddGameActionSheet.tsx");

export default function UserProfileAddGameActionSheet(widgetType) {
  let BottomSheetTitleHeader;
  let SearchBar;
  let Text;
  let closure_4;
  let intl;
  let intl2;
  let intl3;
  let items14;
  let items15;
  let obj10;
  let obj13;
  let obj8;
  let tmp24;
  let tmp36Result;
  widgetType = widgetType.widgetType;
  const returnFocusRef = widgetType.returnFocusRef;
  let extraChromeEnabled;
  let str;
  react = undefined;
  let stateFromStores;
  let isLoading;
  let ref;
  let trackEditAction;
  let callback1;
  let closure_21;
  let callback3;
  let tmp = isLoading();
  let tmp2 = returnFocusRef;
  const tmp3 = extraChromeEnabled;
  const insets = returnFocusRef(extraChromeEnabled[15])().insets;
  let tmp4 = returnFocusRef(extraChromeEnabled[16])();
  let obj = returnFocusRef(extraChromeEnabled[17]);
  extraChromeEnabled = obj.useConfig({ location: "add_game_action_sheet_native" }).extraChromeEnabled;
  let obj2 = react;
  const tmp5 = str;
  let tmp6 = str(react.useState(""), 2);
  str = tmp6[0];
  react = tmp6[1];
  const tmp7 = str.trim().length > 0;
  let closure_5 = tmp7;
  let obj3 = widgetType(extraChromeEnabled[18]);
  let items = [stateFromStores];
  stateFromStores = obj3.useStateFromStores(items, () => stateFromStores.getId());
  const tmp10 = returnFocusRef(extraChromeEnabled[19])(stateFromStores);
  let closure_7 = tmp10;
  const items1 = [tmp10, widgetType];
  const memo = react.useMemo(() => {
    const _Set = Set;
    const found = closure_7.filter(UserProfileGameWidgetTypes.isGameWidget);
    const found1 = found.find((type) => type.type === widgetType);
    let mapped;
    if (found1 != null) {
      const games = found1.games;
      mapped = games.map((gameId) => gameId.gameId);
    }
    const _Set1 = new _Set(mapped);
    return _Set1;
  }, items1);
  let obj4 = widgetType(extraChromeEnabled[21]);
  let obj5 = { surface: widgetType(extraChromeEnabled[22]).GameSearchSurface.PROFILE_WIDGET, query: str };
  const profileSortedGames = obj4.useProfileSortedGames(obj5);
  const options = profileSortedGames.options;
  const metadataByGameId = profileSortedGames.metadataByGameId;
  isLoading = profileSortedGames.isLoading;
  const onSelect = profileSortedGames.onSelect;
  const obj6 = widgetType(extraChromeEnabled[23]);
  const suggestedGames = obj6.useSuggestedGames(widgetType);
  const gameIds = suggestedGames.gameIds;
  const onAddGame = suggestedGames.onAddGame;
  const tmp14 = returnFocusRef(extraChromeEnabled[24])(gameIds);
  let closure_15 = tmp14;
  const items2 = [options, memo, tmp14, tmp7];
  const tmp15 = returnFocusRef(extraChromeEnabled[25])(gameIds);
  const memo1 = react.useMemo(function() {
    const mapped = options.map((id) => {
      const obj = { id: id.value, label: id.label, disabled: set.has(id.value) };
      return obj;
    });
    const tmp = closure_5;
    if (tmp) {
      return mapped;
    } else {
      const found = closure_15.filter((id) => {
        const hasItem = set.has(id.id);
        let result = !hasItem;
        if (result) {
          const obj = widgetType(extraChromeEnabled[26]);
          result = obj.isGameAllowedInGameWidgets(id);
        }
        return result;
      });
      const mapped1 = found.map((id) => ({ id: id.id, label: id.name, disabled: false }));
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set(mapped1.map((id) => id.id));
      const items = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(items, mapped1, 0);
      HermesBuiltin.arraySpread(items, mapped.filter((id) => !set.has(id.id)), arraySpreadResult);
      return items;
    }
  }, items2);
  const items3 = [metadataByGameId, tmp14];
  const memo2 = react.useMemo(() => {
    map = new Map(metadataByGameId);
    const iter = closure_15[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let media = nextResult.media;
      let icon;
      let tmp4 = nextResult;
      set = map.set;
      let id = nextResult.id;
      if (media != null) {
        icon = media.icon;
      }
      let obj = { icon, platformAvailability: tmp4.platformAvailability };
      let result = set(id, obj);
      continue;
    }
    return map;
  }, items3);
  const items4 = [closure_7];
  const items5 = [gameIds.length];
  const tmp17 = tmp7 && !isLoading && 0 === memo1.length;
  const tmp8Result = widgetType(tmp3[18]);
  const tmp18 = isLoading || tmp8Result.useStateFromStores(items4, () => {
    const suggestedFetchAttempted = WidgetStore.suggestedFetchAttempted;
    let suggestedFetchIsLoading = !suggestedFetchAttempted;
    if (suggestedFetchAttempted) {
      suggestedFetchIsLoading = tmp.suggestedFetchIsLoading;
    }
    if (!suggestedFetchIsLoading) {
      suggestedFetchIsLoading = !tmp.suggestedFetchError && 0 === gameIds.length;
      const tmp2 = !tmp.suggestedFetchError && 0 === gameIds.length;
    }
    return suggestedFetchIsLoading;
  }, items5) || tmp15;
  const tmp5Result = tmp5(obj2.useState(false), 2);
  const first = tmp5Result[0];
  let tmp22 = first;
  const tmp21 = tmp5Result[1];
  if (!first) {
    tmp22 = tmp7;
  }
  if (!tmp22) {
    tmp22 = tmp18;
  }
  if (!tmp22) {
    tmp21(true);
  }
  if (tmp7) {
    tmp24 = isLoading && 0 === memo1.length;
  } else {
    tmp24 = !first && tmp18;
  }
  ref = obj2.useRef(false);
  const items6 = [tmp7, isLoading, memo1.length];
  const effect = obj2.useEffect(() => {
    let current = !closure_5;
    if (closure_5) {
      current = isLoading;
    }
    if (!current) {
      current = ref.current;
    }
    if (!current) {
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = intl4.intl;
      const obj = { count: memo1.length };
      announce(intl.formatToPlainString(intl4.t.ZGVL3g, obj), "polite");
    }
  }, items6);
  const items7 = [returnFocusRef];
  const effect1 = obj2.useEffect(() => () => {
    const obj = widgetType(extraChromeEnabled[29]);
    const obj2 = { ref, delay: 100 };
    return obj.setAccessibilityFocus(obj2);
  }, items7);
  const items8 = [stateFromStores, widgetType];
  trackEditAction = obj2.useCallback((arg0) => {
    const trackUserProfileEditAction = UserProfileAnalyticsUtils.trackUserProfileEditAction;
    const obj = { userId: stateFromStores, widgetEdited: widgetType };
    UserProfileAnalyticsUtils;
    const merged = Object.assign(arg0);
    return trackUserProfileEditAction(obj);
  }, items8);
  const items9 = [tmp7, memo1];
  callback1 = obj2.useCallback((query) => {
    const tmp = closure_5;
    if (!tmp) {
      let length;
      if ("" !== query.trim()) {
        const obj2 = { keys: ["label"] };
        const obj = _extends;
        length = obj.matchSorter(memo1, query, obj2).length;
      }
      return length;
    }
    length = memo1.length;
  }, items9);
  closure_21 = obj2.useRef({ query: "", getResultCount: callback1, trackEditAction });
  const items10 = [str, callback1, trackEditAction];
  const effect2 = obj2.useEffect(() => {
    const obj = { query: str, getResultCount: callback1, trackEditAction };
    closure_21.current = obj;
  }, items10);
  const effect3 = obj2.useEffect(() => {
    let obj = { action: memo.PRESS_ADD_GAME };
    callback(obj);
    return () => {
      let query;
      const current = ref.current;
      const obj = { action: memo.GAME_SEARCH_SESSION_ENDED, numCharacters: query.trim().length, numResults: current.getResultCount(current.query) };
      ({ query, trackEditAction } = current);
      trackEditAction(obj);
    };
  }, []);
  const items11 = [tmp7, trackEditAction, callback1];
  const items12 = [widgetType, onSelect, gameIds, onAddGame, trackEditAction];
  const callback2 = obj2.useCallback((str) => {
    const tmp = closure_5 || "" === str.trim();
    if (!tmp) {
      const obj = { action: memo.GAME_SEARCH_SESSION_STARTED, numCharacters: str.trim().length, numResults: callback1(str) };
      callback(obj);
    }
    closure_4(str);
  }, items11);
  callback3 = obj2.useCallback((gameId) => {
    let obj3;
    if (!ref.current) {
      tmp.current = true;
      onSelect(gameId);
      const obj2 = { widgetType, game: obj3 };
      obj3 = { gameId };
      const obj = WidgetUtils;
      const result = obj.addPendingGameToWidget(obj2);
      if (gameIds.includes(gameId)) {
        onAddGame(gameId);
      }
      const AccessibilityAnnouncer = tmp5(4922).AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = tmp5(1112).intl;
      announce(intl.string(intl4.t.q0U3DE));
      const obj4 = { action: memo.GAME_ADDED, gameId };
      callback(obj4);
      const obj5 = ActionSheetActionCreatorsDefault;
      obj5.hideActionSheet(openUserProfileAddGameActionSheet.USER_PROFILE_ADD_GAME_ACTION_SHEET_KEY);
    }
  }, items12);
  const items13 = [memo1, memo2, extraChromeEnabled, callback3];
  const callback4 = obj2.useCallback((arg0, arg1) => {
    const obj = { option: memo1[arg1], metadata: memo2.get(memo1[arg1].id), extraChromeEnabled, start: 0 === arg1, end: arg1 === memo1.length - 1, onSelect: callback3 };
    return React4(closure_12, obj);
  }, items13);
  const obj7 = { scrollable: true, header: options(BottomSheetTitleHeader, obj8), children: items14 };
  const BottomSheet = tmp8(tmp3[34]).BottomSheet;
  obj8 = { title: intl.string(widgetType(tmp3[28]).t.PYyENc) };
  BottomSheetTitleHeader = tmp8(tmp3[35]).BottomSheetTitleHeader;
  intl = tmp8(tmp3[28]).intl;
  const obj9 = { style: tmp.searchBar, children: options(SearchBar, obj10) };
  obj10 = { size: "md", accessibilityLabel: intl2.string(widgetType(tmp3[28]).t.uqw8wK), onChange: callback2 };
  SearchBar = tmp8(tmp3[36]).SearchBar;
  intl2 = tmp8(tmp3[28]).intl;
  items14 = [options(closure_5, obj9), ];
  const tmp35 = metadataByGameId;
  if (tmp24) {
    const obj11 = { style: tmp.loading, children: options(widgetType(tmp3[37]).ActivityIndicator, { size: "large" }) };
    tmp36Result = tmp36(tmp37, obj11);
  } else if (tmp17) {
    const obj12 = { style: tmp.emptyState, children: options(Text, obj13) };
    obj13 = { variant: "body-md/medium", color: "text-subtle", style: tmp.emptyStateText, children: intl3.string(widgetType(tmp3[28]).t.jkk7t9) };
    Text = tmp8(tmp3[38]).Text;
    intl3 = tmp8(tmp3[28]).intl;
    tmp36Result = tmp36(tmp37, obj12);
  } else {
    const obj14 = { style: tmp.list, inActionSheet: true, keyboardShouldPersistTaps: "handled", sections: items15, itemSize: tmp4, estimatedListSize: "windowSize", renderItem: callback4, insetEnd: tmp2(tmp3[8]).space.PX_16 + insets.bottom };
    items15 = [memo1.length];
    const tmp2Result = tmp2(tmp3[39]);
    tmp36Result = tmp36(tmp2Result, obj14);
  }
  items14[1] = tmp36Result;
  return tmp35(BottomSheet, obj7);
};
