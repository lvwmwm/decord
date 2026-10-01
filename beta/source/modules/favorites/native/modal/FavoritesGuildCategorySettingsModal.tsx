// Module ID: 15744
// Function ID: 15745
// Name: FavoritesGuildCategorySettingsModal
// Dependencies: [32, 19, 17, 2048, 2058, 21, 4836, 576, 1485, 504, 2070, 9684, 7288, 1115, 5203, 1177, 5279, 6024, 5999, 5917, 4790, 10383, 10385, 2]
// Exports: default

// Module 15744 (FavoritesGuildCategorySettingsModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl5 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import FavoritesConstants from "FavoritesConstants" /* 2058 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5203 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 9684 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import FavoriteStore from "FavoriteStore" /* 2048 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let navigation;

let c9;
let metroImportAll;
let obj2;
let obj3;
function FavoritesGuildCategorySettings(categoryId) {
  let Stack;
  let TableRow;
  let _undefined;
  let closure_7;
  let intl;
  let intl2;
  let intl3;
  let items8;
  let obj10;
  let obj7;
  let str;
  let tmp8;
  categoryId = categoryId.categoryId;
  const onGoBack = categoryId.onGoBack;
  navigation = undefined;
  let trimmed;
  let callback1;
  let tmp = callback1();
  let obj = categoryId(navigation[8]);
  navigation = obj.useNavigation();
  let obj2 = categoryId(navigation[9]);
  const items = [trimmed];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    let str = FavoriteStore.getNickname(categoryId);
    if (str == null) {
      str = "";
    }
    return str;
  });
  const items1 = [trimmed];
  const obj3 = categoryId(navigation[9]);
  const stateFromStores1 = obj3.useStateFromStores(items1, () => null != FavoriteStore.getCategoryRecord(categoryId));
  [str, tmp8] = stateFromStores(stateFromStores1.useState(stateFromStores), 2);
  let c5 = tmp8;
  const items2 = [stateFromStores];
  const tmp7 = stateFromStores(stateFromStores1.useState(stateFromStores), 2);
  const effect = stateFromStores1.useEffect(() => {
    _undefined(stateFromStores);
  }, items2);
  trimmed = str.trim();
  const obj5 = categoryId(navigation[10]);
  const tmp11 = obj5.isFavoritesGuildCategoryNameValid(str) && trimmed !== stateFromStores;
  maxLength = tmp11;
  const ref = obj4.useRef(false);
  const items3 = [onGoBack];
  const callback = obj4.useCallback(() => {
    if (!ref.current) {
      tmp.current = true;
      onGoBack();
    }
  }, items3);
  const items4 = [tmp11, categoryId, callback, trimmed];
  callback1 = obj4.useCallback(() => {
    const tmp = closure_7;
    if (tmp) {
      const obj = FavoritesActionCreators;
      const result = obj.setFavoriteChannelNickname(categoryId, trimmed);
      callback();
    }
  }, items4);
  const items5 = [callback, stateFromStores1];
  const effect1 = obj4.useEffect(() => {
    const tmp = stateFromStores1;
    if (!tmp) {
      callback();
    }
  }, items5);
  const items6 = [tmp11, callback1, navigation];
  const effect2 = obj4.useEffect(() => {
    let onPress;
    let obj = {
      headerRight(arg0) {
        let intl;
        const obj = { label: intl.string(categoryId(navigation[13]).t["R3BPH+"]), onPress, disabled: !closure_1_7 };
        const HeaderTextButton = categoryId(navigation[12]).HeaderTextButton;
        const merged = Object.assign(arg0);
        intl = categoryId(navigation[13]).intl;
        return ref(HeaderTextButton, obj);
      }
    };
    navigation.setOptions(obj);
  }, items6);
  const items7 = [categoryId, callback, stateFromStores];
  const obj6 = { style: tmp.container, contentContainerStyle: tmp.content, keyboardShouldPersistTaps: "handled", children: callback(Stack, obj7) };
  const callback2 = obj4.useCallback(() => {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let obj2;
    let obj = {
      title: intl.string(intl5.t["4VpUw8"]),
      body: intl2.format(intl5.t.GuhMa5, obj2),
      confirmText: intl3.string(intl5.t.xOscRh),
      confirmColor: native.ButtonColors.RED,
      cancelText: intl4.string(intl5.t["ETE/oC"]),
      onConfirm() {
        const obj = categoryId(navigation[11]);
        const result = obj.removeFavoriteCategory(closure_1_0);
        callback();
      }
    };
    const show = AlertActionCreatorsDefault.show;
    AlertActionCreatorsDefault;
    intl = intl5.intl;
    intl2 = intl5.intl;
    obj2 = { channelName: stateFromStores };
    intl3 = intl5.intl;
    intl4 = intl5.intl;
    show(obj);
  }, items7);
  obj7 = { spacing: onGoBack(navigation[7]).space.PX_24, children: items8 };
  Stack = tmp2(tmp3[16]).Stack;
  const obj8 = { label: intl.string(categoryId(navigation[13]).t.OCAkGP), placeholder: intl2.string(categoryId(navigation[13]).t.eTVbtx), value: str, onChange: tmp8, maxLength, clearable: true };
  const TextInput = tmp2(tmp3[17]).TextInput;
  intl = tmp2(tmp3[13]).intl;
  intl2 = tmp2(tmp3[13]).intl;
  items8 = [ref(TextInput, obj8), ];
  const obj9 = { hasIcons: true, children: ref(TableRow, obj10) };
  const TableRowGroup = tmp2(tmp3[18]).TableRowGroup;
  obj10 = { variant: "danger", icon: ref(categoryId(navigation[20]).TrashIcon, { color: "text-feedback-critical" }), label: intl3.string(categoryId(navigation[13]).t.ifbXnL), onPress: callback2 };
  TableRow = tmp2(tmp3[19]).TableRow;
  intl3 = tmp2(tmp3[13]).intl;
  items8[1] = ref(TableRowGroup, obj9);
  return ref(c5, obj6);
}
const ScrollView = react_native.ScrollView;
let maxLength = FavoritesConstants.MAX_FAVORITE_CATEGORY_NAME_LENGTH;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, content: obj3 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16 };
let closure_10 = createStyles(obj);
let result = size.fileFinishedImporting("modules/favorites/native/modal/FavoritesGuildCategorySettingsModal.tsx");

export default function FavoritesGuildCategorySettingsModal(categoryId) {
  let intl;
  categoryId = categoryId.categoryId;
  let onGoBack;
  onGoBack = onGoBack(10383)().onGoBack;
  let obj = {
    screenKey: "favoritesGuildCategorySettings",
    title: intl.string(categoryId(1115).t["/uELTj"]),
    render() {
      const obj = { categoryId, onGoBack };
      return metroImportAll(FavoritesGuildCategorySettings, obj);
    }
  };
  const tmp = onGoBack(10385);
  intl = categoryId(1115).intl;
  return closure_8(tmp, obj);
};
