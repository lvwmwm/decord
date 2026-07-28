// Module ID: 11857
// Function ID: 91843
// Name: AddFavoriteChannelModal
// Dependencies: [5, 57, 31, 27, 1386, 8789, 33, 4165, 689, 10194, 11858, 10198, 6140, 1327, 10193, 1450, 477, 9882, 1212, 2945, 4697, 9883, 9904, 11859, 9872, 4372, 2]
// Exports: openAddFavoriteChannelModal

// Module 11857 (AddFavoriteChannelModal)
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
function AddFavoriteChannelModal(parentId) {
  parentId = parentId.parentId;
  const source = parentId.source;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = parentId(notifyFavoriteAdded[9]);
  notifyFavoriteAdded = obj.useFavoriteAdded().notifyFavoriteAdded;
  const items = [source];
  const effect = height.useEffect(() => {
    const result = parentId(notifyFavoriteAdded[11]).trackFavoritesGuildAddModalOpened(source);
  }, items);
  const tmp4 = callback(height.useState([]), 2);
  const first = tmp4[0];
  callback = tmp4[1];
  const items1 = [];
  // CreateGeneratorClosureLongIndex (0x67)
  callback = height.useCallback((arg0) => {
    callback(arg0);
  }, items1);
  const items2 = [notifyFavoriteAdded, parentId, first];
  const callback1 = height.useCallback(first(items1), items2);
  height = source(notifyFavoriteAdded[15])({ ignoreKeyboard: true }).height;
  const items3 = [height];
  obj = {
    style: height.useMemo(() => {
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
  const tmp2 = source(notifyFavoriteAdded[10])();
  const intl = parentId(notifyFavoriteAdded[18]).intl;
  obj.title = intl.string(source(notifyFavoriteAdded[19]).Rp35U1);
  obj.onClose = closeAddFavoriteChannelModal;
  const items4 = [callback2(source(notifyFavoriteAdded[17]), obj), ];
  const obj1 = { style: tmp.container };
  const items5 = [callback2(source(notifyFavoriteAdded[20]), { absolute: true }), callback2(source(notifyFavoriteAdded[21]), { rowMode: UserRowModes.TOGGLE, initialSelectedDestinations: [], onSelectedDestinationChange: callback, channelFilter: tmp2, insetEnd: 0, disableGradient: true, disableStickySections: true, disableSelection: first.length >= closure_7 }), ];
  const obj3 = { isVisible: first.length > 0, floatingBackgroundColor: tmp.container.backgroundColor };
  const obj2 = { rowMode: UserRowModes.TOGGLE, initialSelectedDestinations: [], onSelectedDestinationChange: callback, channelFilter: tmp2, insetEnd: 0, disableGradient: true, disableStickySections: true, disableSelection: first.length >= closure_7 };
  const tmp7 = source(notifyFavoriteAdded[17]);
  obj3.text = parentId(notifyFavoriteAdded[23]).getFavoritesAddButtonLabel(first.length);
  obj3.onPress = callback1;
  items5[2] = callback2(parentId(notifyFavoriteAdded[22]).ModalFloatingAction, obj3);
  obj1.children = items5;
  items4[1] = callback3(View, obj1);
  obj.children = items4;
  return callback3(View, obj);
}
function closeAddFavoriteChannelModal() {
  importDefault(4372).popWithKey(c12);
}
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, display: "flex", backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let c12 = "add-favorite-channel-modal";
let result = require("result").fileFinishedImporting("modules/favorites/native/AddFavoriteChannelModal.tsx");

export const ADD_FAVORITE_CHANNEL_MODAL_KEY = "add-favorite-channel-modal";
export const openAddFavoriteChannelModal = function openAddFavoriteChannelModal(arg0) {
  let parentId;
  let source;
  ({ parentId, source } = arg0);
  importDefault(9872)(Promise.resolve({ default: AddFavoriteChannelModal }), { parentId, source }, c12);
};
export { closeAddFavoriteChannelModal };
