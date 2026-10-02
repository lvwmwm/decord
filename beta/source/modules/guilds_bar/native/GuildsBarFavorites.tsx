// Module ID: 15948
// Function ID: 15949
// Name: GuildsBarFavorites
// Dependencies: [19, 17, 2054, 1086, 2048, 21, 4837, 588, 558, 576, 15931, 9807, 504, 15949, 15934, 9819, 15946, 15767, 1127, 15950, 9716, 15951, 2]

// Module 15948 (GuildsBarFavorites)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 588 */;
import Constants from "Constants" /* 1086 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import transitionGuildsBarToGuildOrOpenSelectedChannelDefault from "transitionGuildsBarToGuildOrOpenSelectedChannel" /* 15946 */;
import react from "react" /* 19 */;
import FavoriteStore from "FavoriteStore" /* 2054 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c9;
let metroImportAll;
let size;
const View = react_native.View;
const FAVORITES = Constants.FAVORITES;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let c10 = "more-options";
let obj = { anchor: size };
size = { position: "absolute", top: nativeDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN, left: 12, width: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE, height: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE };
let closure_11 = createStyles.createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let accessibilityActions;
  let badge;
  let badge2;
  let cutouts;
  let favoriteChannels;
  let intl;
  let markPopoverAsDismissed;
  let onAccessibilityAction;
  let shouldShowPopover;
  let tmp12;
  let tmp6;
  let tmp7;
  let unread;
  let tmp = shouldShowPopover;
  const obj = shouldShowPopover(576);
  const cResult = obj.c(32);
  const obj2 = shouldShowPopover(15931);
  const guildsBarAnimatedWrapperStyles = obj2.useGuildsBarAnimatedWrapperStyles();
  const obj3 = shouldShowPopover(9807);
  const isFavoritesGuildSelected = obj3.useIsFavoritesGuildSelected();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FavoriteStore];
    const fn = function _() {
      return favoriteChannels.getFavoriteChannels();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  ({ badge, unread } = markPopoverAsDismissed(15949)(stateFromStores));
  markPopoverAsDismissed(15949)(stateFromStores);
  if (cResult[2] !== badge) {
    const obj4 = { mentionCount: badge };
    cResult[2] = badge;
    cResult[3] = obj4;
    tmp12 = obj4;
  } else {
    tmp12 = cResult[3];
  }
  ({ badge: badge2, cutouts } = markPopoverAsDismissed(15934)(tmp12));
  markPopoverAsDismissed(15934)(tmp12);
  react.useRef(null);
  closure_11();
  const tmpResult2 = tmp(9819);
  const favoritesIntroPopover = tmpResult2.useFavoritesIntroPopover();
  shouldShowPopover = favoritesIntroPopover.shouldShowPopover;
  markPopoverAsDismissed = favoritesIntroPopover.markPopoverAsDismissed;
  if (cResult[4] === markPopoverAsDismissed) {
    let tmp17;
    let tmp18;
    let tmp19;
    let tmp21;
    let tmp24;
    let tmp26;
    if (cResult[5] === shouldShowPopover) {
      tmp17 = cResult[6];
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor() {
          markPopoverAsDismissed(dependencyMap[17])();
        }
      }
      cResult[7] = F;
      tmp18 = F;
    } else {
      class F {
        constructor() {
          markPopoverAsDismissed(dependencyMap[17])();
        }
      }
    }
    if (cResult[8] !== tmp17) {
      class F {
        constructor() {
          markPopoverAsDismissed(dependencyMap[17])();
        }
      }
      tmp20[0] = tmp17;
      tmp20[1] = tmp18;
      cResult[8] = tmp17;
      cResult[9] = tmp20;
      tmp19 = tmp20;
    } else {
      class F {
        constructor() {
          markPopoverAsDismissed(dependencyMap[17])();
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor() {
          markPopoverAsDismissed(dependencyMap[17])();
        }
      }
      const obj5 = { name, label: intl.string(tmp(1127).t.PdRCRg) };
      intl = tmp(1127).intl;
      const items1 = [obj5];
      tmp22[0] = items1;
      tmp22[1] = function onAccessibilityAction(nativeEvent) {
        if (nativeEvent.nativeEvent.actionName === name) {
          markPopoverAsDismissed(dependencyMap[17])();
        }
      };
      cResult[10] = tmp22;
      tmp21 = tmp22;
    } else {
      class F {
        constructor() {
          markPopoverAsDismissed(dependencyMap[17])();
        }
      }
    }
    const _Symbol3 = Symbol;
    ({ accessibilityActions, onAccessibilityAction } = tmp21);
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor() {
          markPopoverAsDismissed(dependencyMap[17])();
        }
      }
      const stringResult = obj8.string(tmp(1127).t.wMWyci);
      cResult[11] = stringResult;
      tmp24 = stringResult;
    } else {
      class F {
        constructor() {
          markPopoverAsDismissed(dependencyMap[17])();
        }
      }
    }
    const _Symbol4 = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor() {
          markPopoverAsDismissed(dependencyMap[17])();
        }
      }
      const tmp27 = closure_8(tmp(15950).HomeDrawerFavoritesRowExpandedChildren, {});
      cResult[12] = tmp27;
      tmp26 = tmp27;
    } else {
      class F {
        constructor() {
          markPopoverAsDismissed(dependencyMap[17])();
        }
      }
    }
    const colors = tmp10(588).colors;
    const tmp28 = isFavoritesGuildSelected ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT;
    if (cResult[13] !== tmp28) {
      class F {
        constructor() {
          markPopoverAsDismissed(dependencyMap[17])();
        }
      }
      const obj6 = { color: tmp28 };
      cResult[13] = tmp28;
      cResult[14] = closure_8(tmp(9716).StarIcon, obj6);
      const tmp30 = closure_8(tmp(9716).StarIcon, obj6);
    } else {
      class F {
        constructor() {
          markPopoverAsDismissed(dependencyMap[17])();
        }
      }
    }
    if (cResult[15] === badge2) {
      class F {
        constructor() {
          markPopoverAsDismissed(dependencyMap[17])();
        }
      }
    }
    const obj7 = { selected: isFavoritesGuildSelected, circle: false, unread, styles: guildsBarAnimatedWrapperStyles, cutouts, overState: "l", config: tmp19, accessibilityActions, onAccessibilityAction, label: tmp24, externalChildren: badge2, expandedChildren: tmp26, children: tmp29 };
    cResult[15] = badge2;
    const tmp33 = closure_8(markPopoverAsDismissed(15931), obj7);
    class R {
      constructor() {
        const tmp = shouldShowPopover;
        if (tmp) {
          markPopoverAsDismissed(ContentDismissActionType.TAKE_ACTION);
        }
        transitionGuildsBarToGuildOrOpenSelectedChannelDefault(FAVORITES);
      }
    }
    cResult[17] = cutouts;
    cResult[18] = isFavoritesGuildSelected;
    cResult[19] = guildsBarAnimatedWrapperStyles;
    cResult[20] = tmp29;
    cResult[21] = unread;
    cResult[22] = tmp33;
  }
  class R {
    constructor() {
      const tmp = shouldShowPopover;
      if (tmp) {
        markPopoverAsDismissed(ContentDismissActionType.TAKE_ACTION);
      }
      transitionGuildsBarToGuildOrOpenSelectedChannelDefault(FAVORITES);
    }
  }
  cResult[4] = markPopoverAsDismissed;
  cResult[5] = shouldShowPopover;
  cResult[6] = R;
  tmp17 = R;
}) : (() => {
  let StarIcon;
  let accessibilityActions;
  let badge;
  let badge2;
  let cutouts;
  let favoriteChannels;
  let intl;
  let markPopoverAsDismissed;
  let obj6;
  let onAccessibilityAction;
  let shouldShowPopover;
  let unread;
  let tmp = dependencyMap;
  let obj = shouldShowPopover(15931);
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles();
  let obj2 = shouldShowPopover(9807);
  const isFavoritesGuildSelected = obj2.useIsFavoritesGuildSelected();
  let items = [FavoriteStore];
  const obj3 = shouldShowPopover(504);
  const stateFromStores = obj3.useStateFromStores(items, () => favoriteChannels.getFavoriteChannels());
  ({ badge, unread } = markPopoverAsDismissed(15949)(stateFromStores));
  markPopoverAsDismissed(15949)(stateFromStores);
  ({ badge: badge2, cutouts } = markPopoverAsDismissed(15934)({ mentionCount: badge }));
  markPopoverAsDismissed(15934)({ mentionCount: badge });
  const ref = react.useRef(null);
  const tmp9 = closure_11();
  const obj4 = shouldShowPopover(9819);
  const favoritesIntroPopover = obj4.useFavoritesIntroPopover();
  shouldShowPopover = favoritesIntroPopover.shouldShowPopover;
  const tmp5 = markPopoverAsDismissed;
  markPopoverAsDismissed = favoritesIntroPopover.markPopoverAsDismissed;
  const items1 = [shouldShowPopover, markPopoverAsDismissed];
  const memo = react.useMemo(() => ({
    onPress() {
      const tmp = shouldShowPopover;
      if (tmp) {
        closure_1_1(constants.TAKE_ACTION);
      }
      markPopoverAsDismissed(dependencyMap[16])(FAVORITES);
    },
    onLongPress() {
      markPopoverAsDismissed(closure_1_2[17])();
    }
  }), items1);
  const memo1 = react.useMemo(() => {
    let intl;
    let items;
    const obj = {
      accessibilityActions: items,
      onAccessibilityAction(nativeEvent) {
        if (nativeEvent.nativeEvent.actionName === name) {
          markPopoverAsDismissed(closure_1_2[17])();
        }
      }
    };
    const obj2 = { name, label: intl.string(shouldShowPopover(dependencyMap[18]).t.PdRCRg) };
    intl = shouldShowPopover(dependencyMap[18]).intl;
    items = [obj2];
    return obj;
  }, []);
  ({ accessibilityActions, onAccessibilityAction } = memo1);
  const obj5 = { selected: isFavoritesGuildSelected, circle: false, unread, styles: guildsBarAnimatedWrapperStyles, cutouts, overState: "l", config: memo, accessibilityActions, onAccessibilityAction, label: intl.string(shouldShowPopover(1127).t.wMWyci), externalChildren: badge2, expandedChildren: closure_8(shouldShowPopover(15950).HomeDrawerFavoritesRowExpandedChildren, {}), children: closure_8(StarIcon, obj6) };
  const tmp16 = markPopoverAsDismissed(15931);
  intl = shouldShowPopover(1127).intl;
  StarIcon = shouldShowPopover(9716).StarIcon;
  const colors = markPopoverAsDismissed(588).colors;
  obj6 = { color: isFavoritesGuildSelected ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT };
  const children = [closure_8(tmp16, obj5), , ];
  const obj7 = { ref, style: tmp9.anchor, pointerEvents: "none", collapsable: false };
  children[1] = closure_8(View, obj7);
  const tmp13 = closure_9;
  if (shouldShowPopover) {
    const obj8 = { targetRef: ref, markAsDismissed: markPopoverAsDismissed };
    shouldShowPopover = tmp15(tmp5(15951), obj8);
  }
  children[2] = shouldShowPopover;
  return tmp13(View, { children });
}));
size = size_mod;
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarFavorites.tsx");

export default memoResult;
