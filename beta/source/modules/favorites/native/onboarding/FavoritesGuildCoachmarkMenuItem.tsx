// Module ID: 16576
// Function ID: 16577
// Name: FavoritesGuildCoachmarkMenuItem
// Dependencies: [19, 2044, 1074, 2038, 21, 10537, 7433, 504, 1115, 3356, 11423, 2]
// Exports: default

// Module 16576 (FavoritesGuildCoachmarkMenuItem)
import util from "util" /* 1115 */;
import _modDef3356 from "module_3356" /* 3356 */;
import LayerScope from "LayerScope" /* 7433 */;
import noop from "module_19" /* 19 */;
import FavoriteStore from "FavoriteStore" /* 2044 */;

require = fn;
function FavoritesGuildCoachmarkMenuItemContent(arg0) {
  let stateFromStores;
  let markPopoverAsDismissed;
  let onDismiss;
  let callback1;
  ({ targetRef, channelType } = arg0);
  const items = [callback1];
  stateFromStores = stateFromStores(markPopoverAsDismissed[7]).useStateFromStores(items, () => callback1.hasStoredFavorites());
  let obj = stateFromStores(markPopoverAsDismissed[7]);
  const favoritesMenuItemPopoverDismissibleContent = stateFromStores(markPopoverAsDismissed[5]).useFavoritesMenuItemPopoverDismissibleContent(set.has(channelType));
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
    const obj = { visible: shouldShowPopover, position: "bottom", title: null, description: null, onDismiss: null, renderImgComponent: "r", buttonLabel: "M4 0H3v1h1V0ZM6 5H5v1h1V5ZM11 5h-1v1h1V5ZM13 0h-1v1h1V0ZM14 1h-1v1h1V1ZM15 2h-1v1h1V2ZM16 3h-1v1h1V3ZM9 0H7v1h2V0Z", onButtonPress: "#000" };
    const intl = util.intl;
    const tmp4 = _modDef3356;
    if (stateFromStores) {
      let TWuDTt = tmp4.TWuDTt;
      let tmp6 = tmp3;
    } else {
      TWuDTt = tmp4["25YCHl"];
      tmp6 = tmp3;
    }
    obj.title = intl.string(TWuDTt);
    const intl2 = tmp(1115).intl;
    obj.description = intl2.string(tmp6(3356).Ztl9ht);
    obj.onDismiss = onDismiss;
    const intl3 = tmp(1115).intl;
    obj.buttonLabel = intl3.string(tmp6(3356)["+h9aza"]);
    obj.onButtonPress = callback1;
    return obj;
  }, items3);
  const obj2 = stateFromStores(markPopoverAsDismissed[5]);
  const coachmark = stateFromStores(markPopoverAsDismissed[10]).useCoachmark(targetRef, memo);
  return null;
}
const ContentDismissActionType = fn(2038).ContentDismissActionType;
const jsx = fn(21).jsx;
let items = [, , ];
({ GUILD_TEXT: arr[0], GUILD_ANNOUNCEMENT: arr[1], GUILD_FORUM: arr[2] } = fn(1074).ChannelTypes);
const set = new Set(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/onboarding/FavoritesGuildCoachmarkMenuItem.tsx");

export default function FavoritesGuildCoachmarkMenuItem(arg0) {
  let tmp3 = null;
  if (obj.useShouldRenderFavoritesMenuItemPopover()) {
    const obj2 = { zIndex: 1, children: null };
    const obj3 = {};
    const merged = Object.assign(arg0);
    obj2.children = <FavoritesGuildCoachmarkMenuItemContent />;
    tmp3 = jsx(LayerScope.LayerScope, { zIndex: 1, children: null });
  }
  return tmp3;
};
