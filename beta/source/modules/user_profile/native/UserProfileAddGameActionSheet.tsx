// Module ID: 15244
// Function ID: 15245
// Name: UserProfileAddGameActionSheet
// Dependencies: [32, 19, 17, 502, 12582, 8858, 21, 5170, 575, 7071, 5767, 7314, 504, 15209, 7883, 15245, 9732, 15248, 15246, 15247, 12581, 5179, 1113, 6185, 8866, 7616, 5406, 15243, 5420, 7415, 7315, 7048, 5783, 7320, 2]
// Exports: default

// Module 15244 (UserProfileAddGameActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1113 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5179 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import TableRow from "TableRow" /* 7071 */;
import _extends from "_extends" /* 7616 */;
import UserProfileGameWidgetTypes from "UserProfileGameWidgetTypes" /* 7883 */;
import Constants from "Constants" /* 8858 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8866 */;
import WidgetUtils from "WidgetUtils" /* 12581 */;
import openUserProfileAddGameActionSheet from "openUserProfileAddGameActionSheet" /* 15243 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import WidgetStore from "WidgetStore" /* 12582 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let set;

let c10;
let c9;
let obj2;
let obj3;
let obj4;
let obj5;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
let closure_8 = Constants.TrackUserProfileEditActions;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { searchBar: obj2, list: obj3, loading: obj4, emptyState: obj5, emptyStateText: { textAlign: "center" } };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj4 = { paddingVertical: nativeDefault.space.PX_24, alignItems: "center" };
obj5 = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_24 };
let closure_11 = createStyles(obj);
let closure_12 = react.memo(function AddGameRow(option) {
  let end;
  let start;
  option = option.option;
  const onSelect = option.onSelect;
  ({ start, end } = option);
  const obj = {
    label: option.label,
    labelLineClamp: 1,
    disabled: option.disabled,
    start,
    end,
    onPress() {
      return onSelect(option.id);
    }
  };
  return React4(TableRow.TableRow, obj);
});
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileAddGameActionSheet.tsx");

export default function UserProfileAddGameActionSheet(widgetType) {
  let BottomSheetTitleHeader;
  let SearchBar;
  let Text;
  let closure_3;
  let closure_4;
  let intl;
  let intl2;
  let intl3;
  let items13;
  let items14;
  let obj12;
  let obj7;
  let obj9;
  let str;
  let tmp23;
  let tmp35Result;
  widgetType = widgetType.widgetType;
  const returnFocusRef = widgetType.returnFocusRef;
  str = undefined;
  _slicedToArray = undefined;
  react = undefined;
  let closure_6;
  let gameIds;
  let ref;
  let trackEditAction;
  let callback1;
  let closure_18;
  let callback3;
  let tmp = gameIds();
  let tmp2 = returnFocusRef;
  const tmp3 = str;
  const insets = returnFocusRef(str[10])().insets;
  let obj = react;
  const tmp5 = _slicedToArray;
  const tmp4 = returnFocusRef(str[11])();
  [str, _slicedToArray] = react.useState("");
  const tmp7 = str.trim().length > 0;
  react = tmp7;
  let obj2 = widgetType(str[12]);
  let items = [closure_6];
  const stateFromStores = obj2.useStateFromStores(items, () => closure_6.getId());
  const tmp10 = returnFocusRef(str[13])(stateFromStores);
  closure_6 = tmp10;
  const items1 = [tmp10, widgetType];
  const memo = react.useMemo(() => {
    const _Set = Set;
    const found = closure_6.filter(UserProfileGameWidgetTypes.isGameWidget);
    const found1 = found.find((type) => type.type === widgetType);
    let mapped;
    if (found1 != null) {
      const games = found1.games;
      mapped = games.map((gameId) => gameId.gameId);
    }
    const _Set1 = new _Set(mapped);
    return _Set1;
  }, items1);
  let obj3 = widgetType(str[15]);
  let obj4 = { surface: widgetType(str[16]).GameSearchSurface.PROFILE_WIDGET, query: str };
  const profileSortedGames = obj3.useProfileSortedGames(obj4);
  const options = profileSortedGames.options;
  const isLoading = profileSortedGames.isLoading;
  const onSelect = profileSortedGames.onSelect;
  let obj5 = widgetType(str[17]);
  const suggestedGames = obj5.useSuggestedGames(widgetType);
  gameIds = suggestedGames.gameIds;
  const onAddGame = suggestedGames.onAddGame;
  const tmp14 = returnFocusRef(str[18])(gameIds);
  let closure_13 = tmp14;
  const items2 = [options, memo, tmp14, tmp7];
  const tmp15 = returnFocusRef(str[19])(gameIds);
  const memo1 = react.useMemo(function() {
    const mapped = options.map((id) => {
      const obj = { id: id.value, label: id.label, disabled: set.has(id.value) };
      return obj;
    });
    const tmp = closure_4;
    if (tmp) {
      return mapped;
    } else {
      const found = closure_13.filter((id) => {
        const hasItem = set.has(id.id);
        let result = !hasItem;
        if (result) {
          const obj = widgetType(str[20]);
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
  const items3 = [memo];
  const items4 = [gameIds.length];
  const tmp16 = tmp7 && !isLoading && 0 === memo1.length;
  const tmp8Result = widgetType(tmp3[12]);
  const tmp17 = isLoading || tmp8Result.useStateFromStores(items3, () => {
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
  }, items4) || tmp15;
  const tmp5Result = tmp5(obj.useState(false), 2);
  const first = tmp5Result[0];
  let tmp21 = first;
  const tmp20 = tmp5Result[1];
  if (!first) {
    tmp21 = tmp7;
  }
  if (!tmp21) {
    tmp21 = tmp17;
  }
  if (!tmp21) {
    tmp20(true);
  }
  if (tmp7) {
    tmp23 = isLoading && 0 === memo1.length;
  } else {
    tmp23 = !first && tmp17;
  }
  ref = obj.useRef(false);
  const items5 = [tmp7, isLoading, memo1.length];
  const effect = obj.useEffect(() => {
    let current = !closure_4;
    if (closure_4) {
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
  }, items5);
  const items6 = [returnFocusRef];
  const effect1 = obj.useEffect(() => () => {
    const obj = widgetType(str[23]);
    const obj2 = { ref, delay: 100 };
    return obj.setAccessibilityFocus(obj2);
  }, items6);
  const items7 = [stateFromStores, widgetType];
  trackEditAction = obj.useCallback((arg0) => {
    const trackUserProfileEditAction = UserProfileAnalyticsUtils.trackUserProfileEditAction;
    const obj = { userId: stateFromStores, widgetEdited: widgetType };
    UserProfileAnalyticsUtils;
    const merged = Object.assign(arg0);
    return trackUserProfileEditAction(obj);
  }, items7);
  const items8 = [tmp7, memo1];
  callback1 = obj.useCallback((query) => {
    const tmp = closure_4;
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
  }, items8);
  closure_18 = obj.useRef({ query: "", getResultCount: callback1, trackEditAction });
  const items9 = [str, callback1, trackEditAction];
  const effect2 = obj.useEffect(() => {
    const obj = { query: str, getResultCount: callback1, trackEditAction };
    closure_18.current = obj;
  }, items9);
  const effect3 = obj.useEffect(() => {
    let obj = { action: options.PRESS_ADD_GAME };
    callback(obj);
    return () => {
      let query;
      const current = ref.current;
      const obj = { action: options.GAME_SEARCH_SESSION_ENDED, numCharacters: query.trim().length, numResults: current.getResultCount(current.query) };
      ({ query, trackEditAction } = current);
      trackEditAction(obj);
    };
  }, []);
  const items10 = [tmp7, trackEditAction, callback1];
  const items11 = [widgetType, onSelect, gameIds, onAddGame, trackEditAction];
  const callback2 = obj.useCallback((str) => {
    const tmp = closure_4 || "" === str.trim();
    if (!tmp) {
      const obj = { action: options.GAME_SEARCH_SESSION_STARTED, numCharacters: str.trim().length, numResults: callback1(str) };
      callback(obj);
    }
    closure_3(str);
  }, items10);
  callback3 = obj.useCallback((gameId) => {
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
      const AccessibilityAnnouncer = tmp5(5179).AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = tmp5(1113).intl;
      announce(intl.string(intl4.t.q0U3DE));
      const obj4 = { action: options.GAME_ADDED, gameId };
      callback(obj4);
      const obj5 = ActionSheetActionCreatorsDefault;
      obj5.hideActionSheet(openUserProfileAddGameActionSheet.USER_PROFILE_ADD_GAME_ACTION_SHEET_KEY);
    }
  }, items11);
  const items12 = [memo1, callback3];
  const callback4 = obj.useCallback((arg0, arg1) => {
    const obj = { option: memo1[arg1], start: 0 === arg1, end: arg1 === memo1.length - 1, onSelect: callback3 };
    return React4(closure_12, obj);
  }, items12);
  const obj6 = { scrollable: true, header: isLoading(BottomSheetTitleHeader, obj7), children: items13 };
  const BottomSheet = tmp8(tmp3[28]).BottomSheet;
  obj7 = { title: intl.string(widgetType(tmp3[22]).t.PYyENc) };
  BottomSheetTitleHeader = tmp8(tmp3[29]).BottomSheetTitleHeader;
  intl = tmp8(tmp3[22]).intl;
  const obj8 = { style: tmp.searchBar, children: isLoading(SearchBar, obj9) };
  obj9 = { size: "md", accessibilityLabel: intl2.string(widgetType(tmp3[22]).t.uqw8wK), onChange: callback2 };
  SearchBar = tmp8(tmp3[30]).SearchBar;
  intl2 = tmp8(tmp3[22]).intl;
  items13 = [isLoading(stateFromStores, obj8), ];
  const tmp34 = onSelect;
  if (tmp23) {
    const obj10 = { style: tmp.loading, children: isLoading(widgetType(tmp3[31]).ActivityIndicator, { size: "large" }) };
    tmp35Result = tmp35(tmp36, obj10);
  } else if (tmp16) {
    const obj11 = { style: tmp.emptyState, children: isLoading(Text, obj12) };
    obj12 = { variant: "body-md/medium", color: "text-subtle", style: tmp.emptyStateText, children: intl3.string(widgetType(tmp3[22]).t.jkk7t9) };
    Text = tmp8(tmp3[32]).Text;
    intl3 = tmp8(tmp3[22]).intl;
    tmp35Result = tmp35(tmp36, obj11);
  } else {
    const obj13 = { style: tmp.list, inActionSheet: true, keyboardShouldPersistTaps: "handled", sections: items14, itemSize: tmp4, estimatedListSize: "windowSize", renderItem: callback4, insetEnd: tmp2(tmp3[8]).space.PX_16 + insets.bottom };
    items14 = [memo1.length];
    const tmp2Result = tmp2(tmp3[33]);
    tmp35Result = tmp35(tmp2Result, obj13);
  }
  items13[1] = tmp35Result;
  return tmp34(BottomSheet, obj6);
};
