// Module ID: 18106
// Function ID: 18107
// Name: GuildsBarFavorites
// Dependencies: [19, 4895, 1071, 21, 18090, 10743, 504, 18107, 18093, 18043, 17869, 1112, 18108, 9768, 575, 2]

// Module 18106 (GuildsBarFavorites)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import StarIcon2 from "StarIcon" /* 9768 */;
import FavoritesHooks from "FavoritesHooks" /* 10743 */;
import GuildsBarAnimatedItemWrapper from "GuildsBarAnimatedItemWrapper" /* 18090 */;
import useGuildsBarBottomRightBadgeDefault from "useGuildsBarBottomRightBadge" /* 18093 */;
import useFavoritesGuildUnreadsDefault from "useFavoritesGuildUnreads" /* 18107 */;
import react from "react" /* 19 */;
import FavoriteStore from "FavoriteStore" /* 4895 */;
import size from "module_2" /* 2 */;

const GuildsBarAnimatedItemWrapperDefault = GuildsBarAnimatedItemWrapper;

const FAVORITES = Constants.FAVORITES;
const jsx = Fragment.jsx;
let c7 = "more-options";
const memoResult = react.memo(function GuildsBarFavorites() {
  let accessibilityActions;
  let badge;
  let badge2;
  let cutouts;
  let favoriteChannels;
  let name;
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
      closure_1_1(closure_1_2[9])(closure_1_5);
    },
    onLongPress() {
      closure_1_1(closure_1_2[10])();
    }
  }), []);
  const memo1 = react.useMemo(() => {
    let intl;
    let items;
    const obj = {
      accessibilityActions: items,
      onAccessibilityAction(nativeEvent) {
        if (nativeEvent.nativeEvent.actionName === name) {
          closure_1_1(closure_1_2[10])();
        }
      }
    };
    const obj2 = { name, label: intl.string(intl2.t.PdRCRg) };
    intl = intl2.intl;
    items = [obj2];
    return obj;
  }, []);
  ({ accessibilityActions, onAccessibilityAction } = memo1);
  GuildsBarAnimatedItemWrapperDefault;
  let intl = intl2.intl;
  const StarIcon = StarIcon2.StarIcon;
  const colors = nativeDefault.colors;
  return <tmp9 selected={isFavoritesGuildSelected} circle={false} unread={unread} styles={guildsBarAnimatedWrapperStyles} cutouts={cutouts} overState="l" config={memo} accessibilityActions={accessibilityActions} onAccessibilityAction={onAccessibilityAction} label={intl.string(intl2.t.wMWyci)} externalChildren={badge2} expandedChildren>{true}</tmp9>;
});
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarFavorites.tsx");

export default memoResult;
