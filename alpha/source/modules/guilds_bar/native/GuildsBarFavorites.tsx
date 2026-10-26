// Module ID: 17759
// Function ID: 17760
// Name: GuildsBarFavorites
// Dependencies: [19, 4826, 1087, 21, 558, 576, 17742, 10845, 504, 17760, 17745, 17757, 17562, 1128, 17761, 587, 9949, 2]

// Module 17759 (GuildsBarFavorites)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1087 */;
import intl3 from "intl" /* 1128 */;
import StarIcon2 from "StarIcon" /* 9949 */;
import FavoritesHooks from "FavoritesHooks" /* 10845 */;
import openFavoritesGuildActionSheetDefault from "openFavoritesGuildActionSheet" /* 17562 */;
import GuildsBarAnimatedItemWrapper from "GuildsBarAnimatedItemWrapper" /* 17742 */;
import useGuildsBarBottomRightBadgeDefault from "useGuildsBarBottomRightBadge" /* 17745 */;
import transitionGuildsBarToGuildOrOpenSelectedChannelDefault from "transitionGuildsBarToGuildOrOpenSelectedChannel" /* 17757 */;
import useFavoritesGuildUnreadsDefault from "useFavoritesGuildUnreads" /* 17760 */;
import HomeDrawerFavoritesRow from "HomeDrawerFavoritesRow" /* 17761 */;
import react from "react" /* 19 */;
import FavoriteStore from "FavoriteStore" /* 4826 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const GuildsBarAnimatedItemWrapperDefault = GuildsBarAnimatedItemWrapper;

const FAVORITES = Constants.FAVORITES;
const jsx = Fragment.jsx;
let c7 = "more-options";
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GuildsBarFavorites() {
  let accessibilityActions;
  let badge;
  let badge2;
  let cutouts;
  let favoriteChannels;
  let intl;
  let items1;
  let onAccessibilityAction;
  let tmp12;
  let tmp14;
  let tmp15;
  let tmp17;
  let tmp19;
  let tmp23;
  let tmp6;
  let tmp7;
  let unread;
  const obj = react2;
  const cResult = obj.c(17);
  const obj2 = GuildsBarAnimatedItemWrapper;
  const guildsBarAnimatedWrapperStyles = obj2.useGuildsBarAnimatedWrapperStyles();
  const obj3 = FavoritesHooks;
  const isFavoritesGuildSelected = obj3.useIsFavoritesGuildSelected();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FavoriteStore];
    const fn = function l() {
      return favoriteChannels.getFavoriteChannels();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  ({ badge, unread } = useFavoritesGuildUnreadsDefault(stateFromStores));
  useFavoritesGuildUnreadsDefault(stateFromStores);
  if (cResult[2] !== badge) {
    const obj4 = { mentionCount: badge };
    cResult[2] = badge;
    cResult[3] = obj4;
    tmp12 = obj4;
  } else {
    tmp12 = cResult[3];
  }
  ({ badge: badge2, cutouts } = useGuildsBarBottomRightBadgeDefault(tmp12));
  useGuildsBarBottomRightBadgeDefault(tmp12);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = {
      onPress() {
          transitionGuildsBarToGuildOrOpenSelectedChannelDefault(FAVORITES);
        },
      onLongPress() {
          openFavoritesGuildActionSheetDefault();
        }
    };
    cResult[4] = obj5;
    tmp14 = obj5;
  } else {
    tmp14 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = {
      accessibilityActions: items1,
      onAccessibilityAction(nativeEvent) {
          if (nativeEvent.nativeEvent.actionName === name) {
            openFavoritesGuildActionSheetDefault();
          }
        }
    };
    const obj7 = { name, label: intl.string(intl3.t.PdRCRg) };
    intl = tmp(1128).intl;
    items1 = [obj7];
    cResult[5] = obj6;
    tmp15 = obj6;
  } else {
    tmp15 = cResult[5];
  }
  ({ accessibilityActions, onAccessibilityAction } = tmp15);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1128).intl;
    const stringResult = intl2.string(intl3.t.wMWyci);
    cResult[6] = stringResult;
    tmp17 = stringResult;
  } else {
    tmp17 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp21 = jsx(HomeDrawerFavoritesRow.HomeDrawerFavoritesRowExpandedChildren, {});
    cResult[7] = tmp21;
    tmp19 = tmp21;
  } else {
    tmp19 = cResult[7];
  }
  const colors = tmp10(587).colors;
  const tmp22 = isFavoritesGuildSelected ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT;
  if (cResult[8] !== tmp22) {
    const tmp25 = jsx(StarIcon2.StarIcon, { color: tmp22 });
    cResult[8] = tmp22;
    cResult[9] = tmp25;
    tmp23 = tmp25;
  } else {
    tmp23 = cResult[9];
  }
  if (cResult[10] === badge2) {
    if (cResult[11] === cutouts) {
      if (cResult[12] === isFavoritesGuildSelected) {
        if (cResult[13] === guildsBarAnimatedWrapperStyles) {
          if (cResult[14] === tmp23) {
            let tmp26;
            if (cResult[15] === unread) {
              tmp26 = cResult[16];
            }
            return tmp26;
          }
        }
      }
    }
  }
  const tmp27 = jsx(GuildsBarAnimatedItemWrapperDefault, { selected: isFavoritesGuildSelected, circle: false, unread, styles: guildsBarAnimatedWrapperStyles, cutouts, overState: "l", config: tmp14, accessibilityActions, onAccessibilityAction, label: tmp17, externalChildren: badge2, expandedChildren: tmp19, children: tmp23 });
  cResult[10] = badge2;
  cResult[11] = cutouts;
  cResult[12] = isFavoritesGuildSelected;
  cResult[13] = guildsBarAnimatedWrapperStyles;
  cResult[14] = tmp23;
  cResult[15] = unread;
  cResult[16] = tmp27;
  tmp26 = tmp27;
}) : (function GuildsBarFavorites() {
  let accessibilityActions;
  let badge;
  let badge2;
  let cutouts;
  let favoriteChannels;
  let onAccessibilityAction;
  let unread;
  let obj = GuildsBarAnimatedItemWrapper;
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles();
  let obj2 = FavoritesHooks;
  const isFavoritesGuildSelected = obj2.useIsFavoritesGuildSelected();
  let items = [FavoriteStore];
  const obj3 = get_initialized;
  const stateFromStores = obj3.useStateFromStores(items, () => favoriteChannels.getFavoriteChannels());
  ({ badge, unread } = useFavoritesGuildUnreadsDefault(stateFromStores));
  useFavoritesGuildUnreadsDefault(stateFromStores);
  ({ badge: badge2, cutouts } = useGuildsBarBottomRightBadgeDefault({ mentionCount: badge }));
  useGuildsBarBottomRightBadgeDefault({ mentionCount: badge });
  const memo = react.useMemo(() => ({
    onPress() {
      closure_1_1(closure_1_2[11])(closure_1_5);
    },
    onLongPress() {
      closure_1_1(closure_1_2[12])();
    }
  }), []);
  const memo1 = react.useMemo(() => {
    let intl;
    let items;
    const obj = {
      accessibilityActions: items,
      onAccessibilityAction(nativeEvent) {
        if (nativeEvent.nativeEvent.actionName === name) {
          closure_1_1(closure_1_2[12])();
        }
      }
    };
    const obj2 = { name, label: intl.string(intl3.t.PdRCRg) };
    intl = intl3.intl;
    items = [obj2];
    return obj;
  }, []);
  ({ accessibilityActions, onAccessibilityAction } = memo1);
  GuildsBarAnimatedItemWrapperDefault;
  let intl = intl3.intl;
  const StarIcon = StarIcon2.StarIcon;
  const colors = nativeDefault.colors;
  return <tmp9 selected={isFavoritesGuildSelected} circle={false} unread={unread} styles={guildsBarAnimatedWrapperStyles} cutouts={cutouts} overState="l" config={memo} accessibilityActions={accessibilityActions} onAccessibilityAction={onAccessibilityAction} label={intl.string(intl3.t.wMWyci)} externalChildren={badge2} expandedChildren={null}>{null}</tmp9>;
}));
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarFavorites.tsx");

export default memoResult;
