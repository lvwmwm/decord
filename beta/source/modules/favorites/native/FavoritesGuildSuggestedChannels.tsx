// Module ID: 15833
// Function ID: 15834
// Name: FavoritesGuildSuggestedChannels
// Dependencies: [19, 17, 15834, 1074, 9577, 21, 576, 4836, 15738, 1115, 3361, 5992, 6470, 15835, 15836, 5281, 10444, 2]
// Exports: default, getFavoritesSuggestionsNoticeHeight

// Module 15833 (FavoritesGuildSuggestedChannels)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import XSmallIcon from "XSmallIcon" /* 5992 */;
import useScaledRowHeightDefault from "useScaledRowHeight" /* 6470 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 9577 */;
import SearchableDestinationListRowDefault from "SearchableDestinationListRow" /* 15835 */;
import handleFavoritesGuildAddSuggestedChannelDefault from "handleFavoritesGuildAddSuggestedChannel" /* 15836 */;
import react_mod from "react" /* 19 */;
import FavoritesGuildSuggestionsStore from "FavoritesGuildSuggestionsStore" /* 15834 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let tmp7;
const _modDef3361 = tmp7(3361);
let react = react_mod;
const View = react_native.View;
({ useFavoritesGuildSuggestions: hasOwnProperty, useFavoritesGuildSuggestionsDismissal: metroRequire } = FavoritesGuildSuggestionsStore);
const NOOP = Constants.NOOP;
let closure_8 = RedesignChannelListConstants.getScaledCategoryRowHeight;
({ jsx: c9, jsxs: c10 } = Fragment);
const PX_8 = nativeDefault.space.PX_8;
const PX_16 = nativeDefault.space.PX_16;
const PX_4 = nativeDefault.space.PX_4;
let obj = { container: { marginTop: PX_4 }, rows: { paddingHorizontal: PX_16, paddingBottom: PX_8 } };
let closure_13 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildSuggestedChannels.tsx");

export default function FavoritesGuildSuggestedChannels() {
  let arr;
  let height;
  let intl;
  let items2;
  let perform;
  let style;
  let tmp = closure_13();
  let obj = arr(15738);
  const categoryStyles = obj.useCategoryStyles();
  arr = closure_5();
  const tmp5 = closure_6();
  importDefault = tmp5;
  const items = [tmp5];
  const memo = react.useMemo(() => {
    let intl;
    const obj = { label: intl.string(_modDef3361.F3dWTe), perform, Icon: XSmallIcon.XSmallIcon };
    intl = intl2.intl;
    return obj;
  }, items);
  const tmp8 = useScaledRowHeightDefault();
  dependencyMap = tmp8;
  const items1 = [tmp8];
  react = react.useMemo(() => ({ height }), items1);
  let tmp9 = null;
  if (0 !== arr.length) {
    let obj2 = { style: tmp.container, children: items2 };
    let obj3 = { name: intl.string(_modDef3361.oHWnLy), withMarginTop: false, styles: categoryStyles, trailingAction: memo };
    const renderCategoryItem = arr(15738).renderCategoryItem;
    arr(15738);
    intl = tmp2(1115).intl;
    items2 = [renderCategoryItem(obj3), ];
    const obj4 = {
      style: tmp.rows,
      children: arr.map((item, index) => {
          let Button;
          let intl;
          let obj2;
          let obj3;
          let tmp;
          let closure_0 = item;
          let obj = { style, children: React4(tmp, obj2) };
          obj2 = { result: item, onPressDestination: handleFavoritesGuildAddSuggestedChannelDefault, onLongPress: NOOP, start: 0 === index, end: index === arr.length - 1, trailing: React4(Button, obj3) };
          tmp = SearchableDestinationListRowDefault;
          obj3 = {
            variant: "secondary",
            size: "sm",
            grow: false,
            text: intl.string(intl2.t.OYkgVk),
            onPress() {
              const tmp = perform(height[14]);
              const obj = arr(height[16]);
              return tmp(obj.getDestinationIdFromResult(closure_0));
            }
          };
          Button = components_Button_Button.Button;
          intl = intl2.intl;
          return React4(View, obj, "" + item.type + "-" + item.record.id);
        })
    };
    items2[1] = closure_9(View, obj4);
    tmp9 = closure_10(View, obj2);
  }
  return tmp9;
};
export const getFavoritesSuggestionsNoticeHeight = function getFavoritesSuggestionsNoticeHeight(fontScale, arg1, arg2) {
  let num = 0;
  if (0 !== arg2) {
    num = PX_4 + closure_8(fontScale) + arg2 * arg1 + PX_8;
  }
  return num;
};
