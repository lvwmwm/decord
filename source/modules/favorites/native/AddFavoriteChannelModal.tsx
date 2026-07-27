// Module ID: 15051
// Function ID: 114674
// Name: AddFavoriteChannelModal
// Dependencies: [5, 57, 31, 27, 1386, 8745, 33, 4131, 689, 10152, 15052, 10156, 6106, 1327, 10151, 1450, 477, 9842, 1212, 2945, 4663, 9843, 9864, 15053, 9832, 4338, 2]
// Exports: openAddFavoriteChannelModal

// Module 15051 (AddFavoriteChannelModal)
import UserRowModes from "UserRowModes";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import { MAX_FAVORITES_ADD_CHANNEL_COUNT as closure_7 } from "date";
import { UserRowModes } from "UserRowModes";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_9;
const require = arg1;
function AddFavoriteChannelModal(source) {
  source = source.source;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = source(first[9]);
  const notifyFavoriteAdded = obj.useFavoriteAdded().notifyFavoriteAdded;
  const items = [source];
  const effect = React.useEffect(() => {
    const result = source(first[11]).trackFavoritesGuildAddModalOpened(source);
  }, items);
  const tmp4 = height(React.useState([]), 2);
  first = tmp4[0];
  let callback = tmp4[1];
  const items1 = [];
  // CreateGeneratorClosureLongIndex (0x67)
  callback = React.useCallback((arg0) => {
    callback(arg0);
  }, items1);
  const items2 = [notifyFavoriteAdded, first];
  const callback1 = React.useCallback(callback(items1), items2);
  height = notifyFavoriteAdded(first[15])({ ignoreKeyboard: true }).height;
  const items3 = [height];
  obj = {
    style: React.useMemo(() => {
      const obj = {};
      let str = "100%";
      if (obj2.isAndroid()) {
        str = height;
      }
      obj.height = str;
      return obj;
    }, items3)
  };
  obj = {};
  const tmp2 = notifyFavoriteAdded(first[10])();
  const intl = source(first[18]).intl;
  obj.title = intl.string(notifyFavoriteAdded(first[19]).Rp35U1);
  obj.onClose = closeAddFavoriteChannelModal;
  const items4 = [callback2(notifyFavoriteAdded(first[17]), obj), ];
  const obj1 = { style: tmp.container };
  const items5 = [callback2(notifyFavoriteAdded(first[20]), { absolute: true }), callback2(notifyFavoriteAdded(first[21]), { rowMode: UserRowModes.TOGGLE, initialSelectedDestinations: [], onSelectedDestinationChange: callback, channelFilter: tmp2, insetEnd: 0, disableGradient: true, disableStickySections: true, disableSelection: first.length >= closure_7 }), ];
  const obj3 = { isVisible: first.length > 0, floatingBackgroundColor: tmp.container.backgroundColor };
  const obj2 = { rowMode: UserRowModes.TOGGLE, initialSelectedDestinations: [], onSelectedDestinationChange: callback, channelFilter: tmp2, insetEnd: 0, disableGradient: true, disableStickySections: true, disableSelection: first.length >= closure_7 };
  const tmp7 = notifyFavoriteAdded(first[17]);
  obj3.text = source(first[23]).getFavoritesAddButtonLabel(first.length);
  obj3.onPress = callback1;
  items5[2] = callback2(source(first[22]).ModalFloatingAction, obj3);
  obj1.children = items5;
  items4[1] = callback3(View, obj1);
  obj.children = items4;
  return callback3(View, obj);
}
function closeAddFavoriteChannelModal() {
  importDefault(4338).popWithKey(c12);
}
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, display: "flex", backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let c12 = "add-favorite-channel-modal";
let result = require("result").fileFinishedImporting("modules/favorites/native/AddFavoriteChannelModal.tsx");

export const ADD_FAVORITE_CHANNEL_MODAL_KEY = "add-favorite-channel-modal";
export const openAddFavoriteChannelModal = function openAddFavoriteChannelModal(source) {
  importDefault(9832)(Promise.resolve({ default: AddFavoriteChannelModal }), { source: source.source }, c12);
};
export { closeAddFavoriteChannelModal };
