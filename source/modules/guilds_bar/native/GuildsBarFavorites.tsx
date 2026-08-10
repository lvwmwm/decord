// Module ID: 15433
// Function ID: 15434
// Dependencies: [19, 17, 1375, 676, 21, 15431, 4303, 712, 1348, 15417, 9711, 589, 15434, 15419, 15358, 9720, 1236, 15435, 8744, 15436, 2]

// Module 15433
import importAllResult from "FavoritesGuildCoachmarkIntro";
import { View } from "HomeDrawerFavoritesRowExpandedChildren";
import initializeFromUserSettings from "initializeFromUserSettings";
import { FAVORITES } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let error;
let metroImportAll;
const require = arg1;
let c3 = importAllResult;
({ jsx: error, jsxs: metroImportAll } = jsxProd);
let closure_9 = {
  onPress() {
    importDefault(15431)(FAVORITES);
  }
};
let obj = { anchor: null };
obj = { position: "absolute", top: require("Themes").modules.mobile.GUILD_BAR_ITEM_MARGIN, left: 12, width: require("Themes").modules.mobile.GUILD_BAR_ITEM_SIZE, height: require("Themes").modules.mobile.GUILD_BAR_ITEM_SIZE };
obj[0] = obj;
let closure_10 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function GuildsBarFavorites() {
  let badge;
  let badge2;
  let cutouts;
  let unread;
  const tmp3 = importDefault(1348)("GuildsBarFavorites");
  let obj = require(15417) /* UnreadIndicator */;
  let obj1 = require(9711) /* useFavoritesAccess */;
  const isFavoritesGuildSelected = obj1.useIsFavoritesGuildSelected();
  let obj2 = require(589) /* initialize */;
  const items = [initializeFromUserSettings];
  const stateFromStores = obj2.useStateFromStores(items, () => favoriteChannels.getFavoriteChannels());
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles();
  ({ badge, unread } = importDefault(15434)(stateFromStores));
  const tmp8 = importDefault(15434)(stateFromStores);
  ({ badge: badge2, cutouts } = importDefault(15419)({ mentionCount: badge }));
  const ref = importAllResult.useRef(null);
  const tmp9 = importDefault(15419)({ mentionCount: badge });
  const tmp11 = callback();
  const tmp12 = importDefault(15358)();
  const favoritesIntroPopoverDismissibleContent = require(9720) /* items1 */.useFavoritesIntroPopoverDismissibleContent(tmp12);
  const shouldShowPopover = favoritesIntroPopoverDismissibleContent.shouldShowPopover;
  obj = { selected: isFavoritesGuildSelected, circle: null, unread: null, styles: null, cutouts: null, overState: "Boolean", config: "RangeError", label: "prototype", externalChildren: "ReferenceError", expandedChildren: "prototype", children: "RegExp" };
  let tmp18 = !tmp3;
  const obj4 = require(9720) /* items1 */;
  const tmp14 = closure_8;
  if (!tmp3) {
    tmp18 = !isFavoritesGuildSelected;
  }
  obj[1] = tmp18;
  obj[2] = unread;
  obj[3] = guildsBarAnimatedWrapperStyles;
  obj[4] = cutouts;
  obj[6] = closure_9;
  const intl = tmp4(1236).intl;
  obj[7] = intl.string(require(1236) /* getSystemLocale */.t.wMWyci);
  obj[8] = badge2;
  obj[9] = closure_7(require(15435) /* HomeDrawerFavoritesRowExpandedChildren */.HomeDrawerFavoritesRowExpandedChildren, {});
  const colors = tmp(712).colors;
  obj = { color: isFavoritesGuildSelected ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT };
  obj[10] = closure_7(require(8744) /* StarIcon */.StarIcon, obj);
  const children = [closure_7(importDefault(15417), obj), , ];
  obj1 = { ref, style: tmp11.anchor, pointerEvents: "none", collapsable: false };
  children[1] = closure_7(View, obj1);
  let tmp16Result = shouldShowPopover;
  if (shouldShowPopover) {
    obj2 = { targetRef: null, visible: null, markAsDismissed: null };
    obj2[0] = ref;
    obj2[1] = shouldShowPopover;
    obj2[2] = favoritesIntroPopoverDismissibleContent.markPopoverAsDismissed;
    tmp16Result = tmp16(tmp(15436), obj2);
  }
  children[2] = tmp16Result;
  return tmp14(View, { children });
});
const result = require("initializeFromUserSettings").fileFinishedImporting("modules/guilds_bar/native/GuildsBarFavorites.tsx");

export default memoResult;
