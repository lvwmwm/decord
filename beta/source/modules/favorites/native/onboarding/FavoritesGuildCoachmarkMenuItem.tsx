// Module ID: 15866
// Function ID: 15867
// Name: FavoritesGuildCoachmarkMenuItem
// Dependencies: [19, 2048, 1074, 2042, 21, 9703, 6577, 504, 1115, 3361, 10589, 2]
// Exports: default

// Module 15866 (FavoritesGuildCoachmarkMenuItem)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import intl4 from "intl" /* 1115 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import _modDef3361 from "module_3361" /* 3361 */;
import FavoritesDismissibleContent from "FavoritesDismissibleContent" /* 9703 */;
import react from "react" /* 19 */;
import FavoriteStore from "FavoriteStore" /* 2048 */;
import size from "module_2" /* 2 */;

let tmp;
const LayerScope2 = tmp(6577);
function FavoritesGuildCoachmarkMenuItemContent(arg0) {
  let channelType;
  let targetRef;
  let stateFromStores;
  let markPopoverAsDismissed;
  let onDismiss;
  let callback1;
  ({ targetRef, channelType } = arg0);
  let obj = stateFromStores(markPopoverAsDismissed[7]);
  const items = [callback1];
  stateFromStores = obj.useStateFromStores(items, () => callback1.hasStoredFavorites());
  const obj2 = stateFromStores(markPopoverAsDismissed[5]);
  const favoritesMenuItemPopoverDismissibleContent = obj2.useFavoritesMenuItemPopoverDismissibleContent(set.has(channelType));
  const shouldShowPopover = favoritesMenuItemPopoverDismissibleContent.shouldShowPopover;
  markPopoverAsDismissed = favoritesMenuItemPopoverDismissibleContent.markPopoverAsDismissed;
  const items1 = [markPopoverAsDismissed];
  onDismiss = onDismiss.useCallback(() => {
    markPopoverAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items1);
  const items2 = [markPopoverAsDismissed];
  callback1 = onDismiss.useCallback(() => {
    markPopoverAsDismissed(ContentDismissActionType.TAKE_ACTION);
  }, items2);
  const items3 = [shouldShowPopover, stateFromStores, onDismiss, callback1];
  const memo = onDismiss.useMemo(() => {
    let TWuDTt;
    let intl2;
    let intl3;
    let string;
    let tmp6;
    const obj = { visible: shouldShowPopover, position: "bottom", title: string(TWuDTt), description: intl2.string(tmp6(3361).Ztl9ht), onDismiss, renderImgComponent: "r", buttonLabel: intl3.string(tmp6(3361)["+h9aza"]), onButtonPress: callback1 };
    const intl = intl4.intl;
    string = intl.string;
    const tmp4 = _modDef3361;
    if (stateFromStores) {
      TWuDTt = tmp4.TWuDTt;
      tmp6 = tmp3;
    } else {
      TWuDTt = tmp4["25YCHl"];
      tmp6 = tmp3;
    }
    intl2 = tmp(1115).intl;
    intl3 = tmp(1115).intl;
    return obj;
  }, items3);
  const obj3 = stateFromStores(markPopoverAsDismissed[10]);
  const coachmark = obj3.useCoachmark(targetRef, memo);
  return null;
}
const ChannelTypes = Constants.ChannelTypes;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let items = [, , ];
({ GUILD_TEXT: arr[0], GUILD_ANNOUNCEMENT: arr[1], GUILD_FORUM: arr[2] } = ChannelTypes);
const set = new Set(items);
const result = size.fileFinishedImporting("modules/favorites/native/onboarding/FavoritesGuildCoachmarkMenuItem.tsx");

export default function FavoritesGuildCoachmarkMenuItem(arg0) {
  let tmp3 = null;
  const obj = FavoritesDismissibleContent;
  if (obj.useShouldRenderFavoritesMenuItemPopover()) {
    const LayerScope = LayerScope2.LayerScope;
    const merged = Object.assign(arg0);
    tmp3 = <LayerScope zIndex={1}>{null}</LayerScope>;
  }
  return tmp3;
};
