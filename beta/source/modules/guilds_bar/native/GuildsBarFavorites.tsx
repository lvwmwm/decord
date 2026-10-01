// Module ID: 15947
// Function ID: 15948
// Name: GuildsBarFavorites
// Dependencies: [19, 17, 2048, 1074, 2042, 21, 4836, 576, 15930, 9685, 504, 15948, 15933, 9701, 15945, 15768, 1115, 15949, 9698, 15950, 2]

// Module 15947 (GuildsBarFavorites)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import react from "react" /* 19 */;
import FavoriteStore from "FavoriteStore" /* 2048 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
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
const memoResult = react.memo(function GuildsBarFavorites() {
  let StarIcon;
  let accessibilityActions;
  let badge;
  let badge2;
  let cutouts;
  let favoriteChannels;
  let intl;
  let markPopoverAsDismissed;
  let name;
  let obj6;
  let onAccessibilityAction;
  let shouldShowPopover;
  let unread;
  let tmp = dependencyMap;
  let obj = shouldShowPopover(15930);
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles();
  let obj2 = shouldShowPopover(9685);
  const isFavoritesGuildSelected = obj2.useIsFavoritesGuildSelected();
  let items = [FavoriteStore];
  const obj3 = shouldShowPopover(504);
  const stateFromStores = obj3.useStateFromStores(items, () => favoriteChannels.getFavoriteChannels());
  ({ badge, unread } = markPopoverAsDismissed(15948)(stateFromStores));
  markPopoverAsDismissed(15948)(stateFromStores);
  ({ badge: badge2, cutouts } = markPopoverAsDismissed(15933)({ mentionCount: badge }));
  markPopoverAsDismissed(15933)({ mentionCount: badge });
  const ref = react.useRef(null);
  const tmp9 = closure_11();
  const obj4 = shouldShowPopover(9701);
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
      markPopoverAsDismissed(dependencyMap[14])(FAVORITES);
    },
    onLongPress() {
      markPopoverAsDismissed(closure_1_2[15])();
    }
  }), items1);
  const memo1 = react.useMemo(() => {
    let intl;
    let items;
    const obj = {
      accessibilityActions: items,
      onAccessibilityAction(nativeEvent) {
        if (nativeEvent.nativeEvent.actionName === name) {
          markPopoverAsDismissed(closure_1_2[15])();
        }
      }
    };
    const obj2 = { name, label: intl.string(shouldShowPopover(dependencyMap[16]).t.PdRCRg) };
    intl = shouldShowPopover(dependencyMap[16]).intl;
    items = [obj2];
    return obj;
  }, []);
  ({ accessibilityActions, onAccessibilityAction } = memo1);
  const obj5 = { selected: isFavoritesGuildSelected, circle: false, unread, styles: guildsBarAnimatedWrapperStyles, cutouts, overState: "l", config: memo, accessibilityActions, onAccessibilityAction, label: intl.string(shouldShowPopover(1115).t.wMWyci), externalChildren: badge2, expandedChildren: closure_8(shouldShowPopover(15949).HomeDrawerFavoritesRowExpandedChildren, {}), children: closure_8(StarIcon, obj6) };
  const tmp16 = markPopoverAsDismissed(15930);
  intl = shouldShowPopover(1115).intl;
  StarIcon = shouldShowPopover(9698).StarIcon;
  const colors = markPopoverAsDismissed(576).colors;
  obj6 = { color: isFavoritesGuildSelected ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT };
  const children = [closure_8(tmp16, obj5), , ];
  const obj7 = { ref, style: tmp9.anchor, pointerEvents: "none", collapsable: false };
  children[1] = closure_8(View, obj7);
  const tmp13 = closure_9;
  if (shouldShowPopover) {
    const obj8 = { targetRef: ref, markAsDismissed: markPopoverAsDismissed };
    shouldShowPopover = tmp15(tmp5(15950), obj8);
  }
  children[2] = shouldShowPopover;
  return tmp13(View, { children });
});
size = size_mod;
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarFavorites.tsx");

export default memoResult;
