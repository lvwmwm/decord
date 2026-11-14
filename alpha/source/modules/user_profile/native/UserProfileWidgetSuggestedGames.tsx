// Module ID: 12145
// Function ID: 12146
// Name: UserProfileWidgetSuggestedGames
// Dependencies: [19, 17, 502, 8479, 21, 575, 5306, 12110, 1113, 12112, 12137, 6331, 12104, 12090, 5315, 8546, 5929, 7988, 10866, 2]
// Exports: default

// Module 12145 (UserProfileWidgetSuggestedGames)
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import react_native from "react-native" /* 6331 */;
import Constants from "Constants" /* 8479 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8546 */;
import WidgetUtils from "WidgetUtils" /* 12090 */;
import useGameNameAndCoverImageDefault from "useGameNameAndCoverImage" /* 12110 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let map, set;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let obj2;
let tmp;
const GameCoverImageDefault = tmp(12112);
({ Pressable: closure_4, View: hasOwnProperty } = react_native2);
let closure_7 = Constants.TrackUserProfileEditActions;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const PX_12 = nativeDefault.space.PX_12;
let obj = { container: obj2, header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, row: { flexDirection: "row", gap: PX_12 } };
obj2 = { marginTop: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_NORMAL, gap: nativeDefault.space.PX_16 };
let closure_11 = createStyles.createStyles(obj);
let closure_12 = react.memo(function SuggestedGameCover(gameId) {
  let closure_129_1;
  let obj3;
  let registerCoverRef;
  let str;
  let tmpResult;
  gameId = gameId.gameId;
  ({ onAdd: closure_129_1, registerCoverRef } = gameId);
  const coverWidth = gameId.coverWidth;
  let tmp = importDefault;
  let tmp2 = dependencyMap;
  let tmp3 = useGameNameAndCoverImageDefault(gameId);
  const intl = intl3.intl;
  let isLoading = tmp3.isLoading;
  const obj = { game: tmp3.gameName };
  const formatToPlainStringResult = intl.formatToPlainString(intl3.t["3mb1s5"], obj);
  if (!isLoading) {
    isLoading = !tmp3.hasGameData;
  }
  const items = [registerCoverRef, gameId, isLoading];
  const obj2 = {
    ref: react.useCallback((arg0) => {
      let tmp3 = null;
      const tmp = registerCoverRef;
      const tmp2 = gameId;
      if (!isLoading) {
        tmp3 = arg0;
      }
      return tmp(tmp2, tmp3);
    }, items),
    onPress: function handlePress() {
      closure_1_1(gameId);
    },
    disabled: isLoading,
    accessibilityRole: "button",
    accessibilityLabel: formatToPlainStringResult,
    accessibilityElementsHidden: isLoading,
    importantForAccessibility: str,
    children: metroImportAll(tmpResult, obj3)
  };
  str = "auto";
  const tmp6 = React3;
  if (isLoading) {
    str = "no-hide-descendants";
  }
  obj3 = { width: coverWidth };
  tmpResult = GameCoverImageDefault;
  const merged = Object.assign(tmp3);
  return metroImportAll(tmp6, obj2);
});
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetSuggestedGames.tsx");

export default function UserProfileWidgetSuggestedGames(widgetType) {
  let XLargeIcon;
  let intl;
  let intl2;
  let items3;
  let items4;
  let obj6;
  widgetType = widgetType.widgetType;
  const addedGames = widgetType.addedGames;
  const containerWidth = widgetType.containerWidth;
  const onFillWidget = widgetType.onFillWidget;
  let ref2;
  let registerCoverRef;
  const onDismiss = widgetType.onDismiss;
  const tmp = registerCoverRef();
  let tmp3 = containerWidth;
  let obj = widgetType(containerWidth[10]);
  const suggestedGames = obj.useSuggestedGames(widgetType);
  const gameIds = suggestedGames.gameIds;
  const onAddGame = suggestedGames.onAddGame;
  let bound = Math.min(6, Math.max(4, Math.ceil((containerWidth + ref2) / (100 + ref2))));
  let items = [gameIds, addedGames, bound];
  const memo = onFillWidget.useMemo(() => {
    set = new Set(addedGames.map((gameId) => gameId.gameId));
    const found = gameIds.filter((item) => !set.has(item));
    return found.slice(0, bound);
  }, items);
  const useRef = onFillWidget.useRef;
  map = new Map();
  useRef(map);
  const ref = onFillWidget.useRef(null);
  ref2 = onFillWidget.useRef(null);
  registerCoverRef = onFillWidget.useCallback((arg0, arg1) => {
    if (null != arg1) {
      const current2 = ref.current;
      const result = current2.set(arg0, arg1);
    } else {
      const current = ref.current;
      current.delete(arg0);
    }
  }, []);
  const items1 = [memo];
  const effect = onFillWidget.useEffect(() => {
    let closure_1;
    let current = ref2.current;
    if (null != current) {
      if (0 !== memo.length) {
        const _setTimeout = setTimeout;
        const tmp3 = widgetType;
        const timeout = setTimeout(() => {
          let tmp7;
          ref2.current = null;
          bound = Math.min(current, memo.length - 1);
          const items = [...memo.slice(bound)];
          const substr = memo.slice(0, bound);
          HermesBuiltin.arraySpread(items, substr.reverse(), tmp3);
          const mapped = items.map((item) => {
            current = ref.current;
            return current.get(item);
          });
          const found = mapped.find((item) => null != item);
          const setAccessibilityFocus = react_native.setAccessibilityFocus;
          react_native;
          if (null != found) {
            tmp7 = { current: found };
            const obj = { current: found };
          } else {
            tmp7 = ref;
          }
          const result = setAccessibilityFocus({ ref: tmp7 });
        }, widgetType(containerWidth[12]).WIDGET_FOCUS_DELAY_MS);
        return () => clearTimeout(closure_1);
      }
    }
  }, items1);
  const items2 = [onAddGame, widgetType, memo, addedGames.length, onFillWidget];
  const onAdd = onFillWidget.useCallback((gameId) => {
    const obj = WidgetUtils;
    const obj2 = { widgetType, game: { gameId } };
    if (obj.addPendingGameToWidget(obj2)) {
      onAddGame(gameId);
      const sum = addedGames.length + 1;
      const tmpResult = WidgetUtils;
      if (sum >= tmpResult.widgetMaxGames(widgetType)) {
        onFillWidget(gameId);
      } else {
        ref2.current = memo.indexOf(gameId);
      }
      const AccessibilityAnnouncer = tmp(5315).AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = tmp(1113).intl;
      announce(intl.string(intl3.t.q0U3DE), "polite");
      const obj3 = { userId: AuthenticationStore.getId(), action: memo.GAME_ADDED, widgetEdited: widgetType, gameId };
      const trackUserProfileEditAction = UserProfileAnalyticsUtils.trackUserProfileEditAction;
      UserProfileAnalyticsUtils;
      const result = trackUserProfileEditAction(obj3);
    }
  }, items2);
  let tmp9 = null;
  if (0 !== memo.length) {
    let obj2 = { style: tmp.container, children: items4 };
    let obj3 = { style: tmp.header, children: items3 };
    const obj4 = { variant: "body-sm/medium", color: "text-subtle", children: intl.string(widgetType(tmp3[8]).t.zMUr6Z) };
    const Heading = tmp2(tmp3[16]).Heading;
    intl = tmp2(tmp3[8]).intl;
    items3 = [ref(Heading, obj4), ];
    const obj5 = { ref, size: "sm", variant: "icon-only", icon: ref(XLargeIcon, obj6), accessibilityLabel: intl2.string(widgetType(tmp3[8]).t["pUR+3g"]), onPress: onDismiss };
    const IconButton = tmp2(tmp3[17]).IconButton;
    obj6 = { size: "sm", color: addedGames(tmp3[5]).colors.CONTROL_ICON_ONLY_ICON_DEFAULT };
    XLargeIcon = tmp2(tmp3[18]).XLargeIcon;
    intl2 = tmp2(tmp3[8]).intl;
    items3[1] = ref(IconButton, obj5);
    items4 = [ref(onAddGame, obj3), ];
    const obj7 = {
      style: tmp.row,
      children: memo.map((gameId) => {
          const obj = { gameId, coverWidth: (containerWidth - PX_12 * (bound - 1)) / bound, onAdd, registerCoverRef };
          return metroImportAll(onAdd, obj, gameId);
        })
    };
    items4[1] = ref(onAddGame, obj7);
    tmp9 = ref(onAddGame, obj2);
  }
  return tmp9;
};
