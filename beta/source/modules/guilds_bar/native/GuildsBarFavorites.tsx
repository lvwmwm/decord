// Module ID: 16652
// Function ID: 16653
// Name: GuildsBarFavorites
// Dependencies: [19, 17, 2048, 1078, 2042, 21, 4758, 580, 558, 568, 16635, 10606, 504, 16653, 16638, 10616, 16650, 16475, 1119, 16654, 10515, 16655, 2]

// Module 16652 (GuildsBarFavorites)
import nativeDefault from "native" /* 580 */;
import transitionGuildsBarToGuildOrOpenSelectedChannelDefault from "transitionGuildsBarToGuildOrOpenSelectedChannel" /* 16650 */;
import noop from "module_19" /* 19 */;
import FavoriteStore from "FavoriteStore" /* 2048 */;

const require = fn;
const View = fn(17).View;
const FAVORITES = fn(1078).FAVORITES;
const ContentDismissActionType = fn(2042).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let c10 = "more-options";
const createStyles = fn(4758);
let obj = { anchor: null };
let size = { position: "absolute", top: nativeDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN, left: 12, width: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE, height: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE };
obj.anchor = size;
let closure_11 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarFavorites.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = shouldShowPopover(568).c(32);
  const obj = shouldShowPopover(568);
  const guildsBarAnimatedWrapperStyles = shouldShowPopover(16635).useGuildsBarAnimatedWrapperStyles();
  const obj2 = shouldShowPopover(16635);
  const isFavoritesGuildSelected = shouldShowPopover(10606).useIsFavoritesGuildSelected();
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
  const obj3 = shouldShowPopover(10606);
  const stateFromStores = shouldShowPopover(504).useStateFromStores(tmp6, tmp7);
  const tmpResult = shouldShowPopover(504);
  ({ badge, unread } = markPopoverAsDismissed(16653)(stateFromStores));
  if (cResult[2] !== badge) {
    const obj4 = { mentionCount: badge };
    cResult[2] = badge;
    cResult[3] = obj4;
    let tmp12 = obj4;
  } else {
    tmp12 = cResult[3];
  }
  const tmp11 = markPopoverAsDismissed(16653)(stateFromStores);
  ({ badge: badge2, cutouts } = markPopoverAsDismissed(16638)(tmp12));
  noop.useRef(null);
  closure_11();
  const tmp13 = markPopoverAsDismissed(16638)(tmp12);
  const favoritesIntroPopover = shouldShowPopover(10616).useFavoritesIntroPopover();
  shouldShowPopover = favoritesIntroPopover.shouldShowPopover;
  markPopoverAsDismissed = favoritesIntroPopover.markPopoverAsDismissed;
  if (cResult[4] === markPopoverAsDismissed) {
    if (cResult[5] === shouldShowPopover) {
      let tmp17 = cResult[6];
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor() {
          tmp = markPopoverAsDismissed(closure_1_2[17])();
          return;
        }
      }
      cResult[7] = F;
      const tmp18 = F;
    } else {
      class F {
        constructor() {
          tmp = markPopoverAsDismissed(closure_1_2[17])();
          return;
        }
      }
    }
    if (cResult[8] !== tmp17) {
      class F {
        constructor() {
          tmp = markPopoverAsDismissed(closure_1_2[17])();
          return;
        }
      }
      tmp20[0] = tmp17;
      tmp20[1] = tmp18;
      cResult[8] = tmp17;
      cResult[9] = tmp20;
      const tmp19 = tmp20;
    } else {
      class F {
        constructor() {
          tmp = markPopoverAsDismissed(closure_1_2[17])();
          return;
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor() {
          tmp = markPopoverAsDismissed(closure_1_2[17])();
          return;
        }
      }
      const obj5 = { name, label: null };
      const intl = tmp(1119).intl;
      obj5.label = intl.string(tmp(1119).t.PdRCRg);
      const items1 = [obj5];
      tmp22[0] = items1;
      tmp22[1] = function onAccessibilityAction(nativeEvent) {
        if (nativeEvent.nativeEvent.actionName === name) {
          markPopoverAsDismissed(16475)();
        }
      };
      cResult[10] = tmp22;
      const tmp21 = tmp22;
    } else {
      class F {
        constructor() {
          tmp = markPopoverAsDismissed(closure_1_2[17])();
          return;
        }
      }
    }
    const _Symbol3 = Symbol;
    ({ accessibilityActions, onAccessibilityAction } = tmp21);
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor() {
          tmp = markPopoverAsDismissed(closure_1_2[17])();
          return;
        }
      }
      const stringResult = obj8.string(tmp(1119).t.wMWyci);
      cResult[11] = stringResult;
      const tmp24 = stringResult;
    } else {
      class F {
        constructor() {
          tmp = markPopoverAsDismissed(closure_1_2[17])();
          return;
        }
      }
    }
    const _Symbol4 = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor() {
          tmp = markPopoverAsDismissed(closure_1_2[17])();
          return;
        }
      }
      const tmp27 = closure_8(tmp(16654).HomeDrawerFavoritesRowExpandedChildren, {});
      cResult[12] = tmp27;
      const tmp26 = tmp27;
    } else {
      class F {
        constructor() {
          tmp = markPopoverAsDismissed(closure_1_2[17])();
          return;
        }
      }
    }
    const colors = tmp10(580).colors;
    const tmp28 = isFavoritesGuildSelected ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT;
    if (cResult[13] !== tmp28) {
      class F {
        constructor() {
          tmp = markPopoverAsDismissed(closure_1_2[17])();
          return;
        }
      }
      const obj6 = { color: tmp28 };
      const tmp30 = closure_8(tmp(10515).StarIcon, obj6);
      cResult[13] = tmp28;
      cResult[14] = tmp30;
    } else {
      class F {
        constructor() {
          tmp = markPopoverAsDismissed(closure_1_2[17])();
          return;
        }
      }
    }
    if (cResult[15] === badge2) {
      class F {
        constructor() {
          tmp = markPopoverAsDismissed(closure_1_2[17])();
          return;
        }
      }
    }
    const obj7 = { selected: isFavoritesGuildSelected, circle: false, unread, styles: guildsBarAnimatedWrapperStyles, cutouts, overState: "l", config: tmp19, accessibilityActions, onAccessibilityAction, label: tmp24, externalChildren: badge2, expandedChildren: tmp26, children: tmp29 };
    const tmp33 = closure_8(tmp10(16635), obj7);
    cResult[15] = badge2;
    class R {
      constructor() {
        if (shouldShowPopover) {
          tmp = markPopoverAsDismissed;
          tmp2 = ContentDismissActionType;
          tmp3 = markPopoverAsDismissed(ContentDismissActionType.TAKE_ACTION);
        }
        tmp4 = closure_1(closure_2[16])(FAVORITES);
        return;
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
      if (shouldShowPopover) {
        tmp = markPopoverAsDismissed;
        tmp2 = ContentDismissActionType;
        tmp3 = markPopoverAsDismissed(ContentDismissActionType.TAKE_ACTION);
      }
      tmp4 = closure_1(closure_2[16])(FAVORITES);
      return;
    }
  }
  cResult[4] = markPopoverAsDismissed;
  cResult[5] = shouldShowPopover;
  cResult[6] = R;
  tmp17 = R;
}) : (() => {
  let obj = shouldShowPopover(16635);
  const guildsBarAnimatedWrapperStyles = shouldShowPopover(16635).useGuildsBarAnimatedWrapperStyles();
  const isFavoritesGuildSelected = shouldShowPopover(10606).useIsFavoritesGuildSelected();
  let obj2 = shouldShowPopover(10606);
  let items = [FavoriteStore];
  const stateFromStores = shouldShowPopover(504).useStateFromStores(items, () => favoriteChannels.getFavoriteChannels());
  const obj3 = shouldShowPopover(504);
  const tmp5 = markPopoverAsDismissed;
  ({ badge, unread } = markPopoverAsDismissed(16653)(stateFromStores));
  const tmp6 = markPopoverAsDismissed(16653)(stateFromStores);
  ({ badge: badge2, cutouts } = markPopoverAsDismissed(16638)({ mentionCount: badge }));
  const ref = noop.useRef(null);
  const tmp7 = markPopoverAsDismissed(16638)({ mentionCount: badge });
  const tmp9 = closure_11();
  const favoritesIntroPopover = shouldShowPopover(10616).useFavoritesIntroPopover();
  shouldShowPopover = favoritesIntroPopover.shouldShowPopover;
  markPopoverAsDismissed = favoritesIntroPopover.markPopoverAsDismissed;
  const items1 = [shouldShowPopover, markPopoverAsDismissed];
  const memo = noop.useMemo(() => ({
    onPress() {
      if (shouldShowPopover) {
        closure_1_1(constants.TAKE_ACTION);
      }
      markPopoverAsDismissed(16650)(FAVORITES);
    },
    onLongPress() {
      markPopoverAsDismissed(dependencyMap[17])();
    }
  }), items1);
  const memo1 = noop.useMemo(() => {
    const obj = { accessibilityActions: null, onAccessibilityAction: null };
    const obj2 = { name, label: null };
    const intl = shouldShowPopover(1119).intl;
    obj2.label = intl.string(shouldShowPopover(1119).t.PdRCRg);
    const items = [obj2];
    obj.accessibilityActions = items;
    obj.onAccessibilityAction = function onAccessibilityAction(nativeEvent) {
      if (nativeEvent.nativeEvent.actionName === name) {
        markPopoverAsDismissed(dependencyMap[17])();
      }
    };
    return obj;
  }, []);
  ({ accessibilityActions, onAccessibilityAction } = memo1);
  const obj5 = { selected: isFavoritesGuildSelected, circle: false, unread, styles: guildsBarAnimatedWrapperStyles, cutouts, overState: "l", config: memo, accessibilityActions, onAccessibilityAction, label: null, externalChildren: "active", expandedChildren: null, children: "md" };
  const obj4 = shouldShowPopover(10616);
  const tmp13 = closure_9;
  let intl = shouldShowPopover(1119).intl;
  obj5.label = intl.string(shouldShowPopover(1119).t.wMWyci);
  obj5.externalChildren = badge2;
  obj5.expandedChildren = closure_8(shouldShowPopover(16654).HomeDrawerFavoritesRowExpandedChildren, {});
  const colors = markPopoverAsDismissed(580).colors;
  obj5.children = closure_8(shouldShowPopover(10515).StarIcon, { color: isFavoritesGuildSelected ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT });
  const children = [closure_8(markPopoverAsDismissed(16635), obj5), closure_8(View, { ref, style: tmp9.anchor, pointerEvents: "none", collapsable: false }), ];
  if (shouldShowPopover) {
    const obj8 = { targetRef: ref, markAsDismissed: markPopoverAsDismissed };
    shouldShowPopover = tmp15(tmp5(16655), obj8);
  }
  children[2] = shouldShowPopover;
  return tmp13(View, { children });
}));
