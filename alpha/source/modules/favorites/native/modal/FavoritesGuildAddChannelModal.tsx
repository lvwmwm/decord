// Module ID: 14605
// Function ID: 14606
// Name: FavoritesGuildAddChannelModal
// Dependencies: [5, 32, 19, 17, 5032, 10863, 21, 5170, 575, 14606, 14607, 13591, 1380, 5866, 1113, 10967, 14604, 1493, 1377, 13601, 3606, 10872, 13602, 13626, 14608, 2]
// Exports: default

// Module 14605 (FavoritesGuildAddChannelModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import FavoritesConstants from "FavoritesConstants" /* 5032 */;
import UserRowConstants from "UserRowConstants" /* 10863 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let c3, c4, dependencyMap;

let c10;
let c9;
let obj2;
const View = react_native.View;
let closure_7 = FavoritesConstants.MAX_FAVORITES_ADD_CHANNEL_COUNT;
const UserRowModes = UserRowConstants.UserRowModes;
({ jsx: c9, jsxs: c10 } = Fragment);
let obj = { container: obj2 };
obj2 = { flex: 1, display: "flex", backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_11 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/favorites/native/modal/FavoritesGuildAddChannelModal.tsx");

export default function FavoritesGuildAddChannelModal(parentId) {
  let closure_2;
  let first;
  let intl;
  let items2;
  let items3;
  let num;
  let tmp13Result;
  parentId = parentId.parentId;
  first = undefined;
  dependencyMap = undefined;
  let height;
  const source = parentId.source;
  const tmp = closure_11();
  const tmp3 = dependencyMap;
  const tmp4 = first(14606)();
  first(14607)(source);
  const tmp2 = first;
  [first, dependencyMap] = react.useState([]);
  const callback = react.useCallback((arg0) => {
    closure_2(arg0);
  }, []);
  const items = [parentId, first];
  const callback1 = react.useCallback(height(function*(arg0, value) {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let c2;
        let _null;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            c2 = 0;
            let closure_1 = tmp;
            _null = undefined;
            c3 = 1;
            c4 = 1;
            const obj5 = { value: Promise.all(first.map(_null(c2[11]).getOrResolveChannelIdFromDestinationId)), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          _null = value.filter(_null(c2[12]).isNotNullish);
          if (0 !== _null.length) {
            const obj = { channelIds: _null, parentId: _null, source: "modal" };
            const tmp18 = _null(c2[15]);
            _null = closure_130_0;
            const addFavoriteChannels = tmp18.addFavoriteChannels;
            if (closure_130_0 == null) {
              _null = null;
            }
            addFavoriteChannels(obj);
            const obj2 = _null(c2[16]);
            const result = obj2.closeFavoritesGuildAddChannelModal();
          } else {
            const presentError = _null(c2[13]).presentError;
            const tmp8 = _null(c2[13]);
            const intl = _null(c2[14]).intl;
            presentError(intl.string(_null(c2[14]).t.R0RpRX));
          }
          c4 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp32) {
        c4 = 3;
        throw tmp32;
      }
    }
  }), items);
  height = first(1493)({ ignoreKeyboard: true }).height;
  const items1 = [height];
  let obj = {
    style: react.useMemo(() => {
      height = "100%";
      PlatformUtils;
      return { height };
    }, items1),
    children: items2
  };
  let obj2 = { title: intl.string(first(3606).Rp35U1), onClose: parentId(14604).closeFavoritesGuildAddChannelModal };
  const tmp12 = first(13601);
  intl = parentId(1113).intl;
  items2 = [closure_9(tmp12, obj2), ];
  let obj3 = { style: tmp.container, children: items3 };
  items3 = [closure_9(first(10872), { absolute: true }), , ];
  let obj4 = { rowMode: UserRowModes.TOGGLE, initialSelectedDestinations: [], onSelectedDestinationChange: callback, channelFilter: tmp4, insetEnd: num, disableGradient: true, disableStickySections: true, disableSelection: first.length >= closure_7 };
  num = 0;
  const tmp14 = first(13602);
  if (first.length > 0) {
    num = tmp2(575).space.PX_80;
  }
  items3[1] = closure_9(tmp14, obj4);
  let obj5 = { isVisible: length > 0, floatingBackgroundColor: tmp.container.backgroundColor, text: tmp13Result.getFavoritesAddButtonLabel(first.length), onPress: callback1 };
  const ModalFloatingAction = tmp13(13626).ModalFloatingAction;
  tmp13Result = parentId(14608);
  items3[2] = closure_9(ModalFloatingAction, obj5);
  items2[1] = closure_10(View, obj3);
  return closure_10(View, obj);
};
