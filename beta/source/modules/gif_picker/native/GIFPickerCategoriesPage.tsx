// Module ID: 9843
// Function ID: 9844
// Name: GIFPickerCategoriesPage
// Dependencies: [19, 17, 9826, 21, 4836, 9830, 576, 9746, 504, 9827, 9844, 9783, 6483, 6476, 5891, 1115, 2]

// Module 9843 (GIFPickerCategoriesPage)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import FastestListPropsPlaceholder from "FastestListPropsPlaceholder" /* 6483 */;
import GIFPickerActionCreators from "GIFPickerActionCreators" /* 9827 */;
import gif_picker_GIFPickerUtils from "gif_picker/GIFPickerUtils" /* 9830 */;
import GIFPickerCategoryViewDefault from "GIFPickerCategoryView" /* 9844 */;
import react from "react" /* 19 */;
import GIFPickerViewStore from "GIFPickerViewStore" /* 9826 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles((height) => {
  const obj = { item: { height, flexDirection: "row", gap: gif_picker_GIFPickerUtils.GIF_PICKER_GUTTER_SPACING, paddingBottom: gif_picker_GIFPickerUtils.GIF_PICKER_GUTTER_SPACING }, placeholder: { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: height - gif_picker_GIFPickerUtils.GIF_PICKER_GUTTER_SPACING, borderRadius: nativeDefault.radii.xs, flex: 1 } };
  ({ height, flexDirection: "row", gap: gif_picker_GIFPickerUtils.GIF_PICKER_GUTTER_SPACING, paddingBottom: gif_picker_GIFPickerUtils.GIF_PICKER_GUTTER_SPACING });
  ({ backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: height - gif_picker_GIFPickerUtils.GIF_PICKER_GUTTER_SPACING, borderRadius: nativeDefault.radii.xs, flex: 1 });
  return obj;
});
const memoResult = react.memo(function GIFPickerCategoriesPage(columns) {
  let intl;
  let tmp2;
  let tmp3;
  let tmp3Result4;
  columns = columns.columns;
  const favoritesCategory = columns.favoritesCategory;
  const onSelectCategory = columns.onSelectCategory;
  let GIF_PICKER_ITEM_ESIMTATED_HEIGHT;
  let closure_4;
  let trendingCategories;
  let data;
  const inActionSheet = columns.inActionSheet;
  if (columns > 2) {
    let tmp4 = columns;
    let tmp5 = onSelectCategory;
    GIF_PICKER_ITEM_ESIMTATED_HEIGHT = columns(onSelectCategory[5]).GIF_PICKER_ITEM_ESIMTATED_HEIGHT;
    tmp3 = columns;
    tmp2 = onSelectCategory;
  } else {
    const tmp = columns;
    tmp2 = onSelectCategory;
    GIF_PICKER_ITEM_ESIMTATED_HEIGHT = columns(onSelectCategory[5]).GIF_PICKER_ITEM_ESIMTATED_HEIGHT / 2;
    tmp3 = columns;
  }
  let tmp6 = closure_7(GIF_PICKER_ITEM_ESIMTATED_HEIGHT);
  closure_4 = tmp6;
  const safeAreaBottomKeyboardAware = favoritesCategory(tmp2[7])({ hasCategories: false }).safeAreaBottomKeyboardAware;
  let items = [trendingCategories];
  const tmp3Result = tmp3(tmp2[8]);
  trendingCategories = tmp3Result.useStateFromStoresObject(items, () => {
    const obj = { trendingCategories: trendingCategories.getTrendingCategories() };
    return obj;
  }).trendingCategories;
  let items1 = [columns, favoritesCategory, trendingCategories];
  const memo = GIF_PICKER_ITEM_ESIMTATED_HEIGHT.useMemo(() => {
    let bound;
    let items2;
    const items = [...trendingCategories];
    if (null != favoritesCategory) {
      items.unshift(tmp);
    }
    const items1 = [];
    let num = 0;
    if (0 < Math.max(items.length, gif_picker_GIFPickerUtils.DEFAULT_CATEGORY_ROWS)) {
      do {
        let arr2 = items1.push(items.slice(num, num + columns));
        num = num + columns;
        let _Math = Math;
        bound = Math.max(items.length, gif_picker_GIFPickerUtils.DEFAULT_CATEGORY_ROWS);
      } while (num < bound);
    }
    const obj = { data: items1, sections: items2 };
    items2 = [items1.length];
    return obj;
  }, items1);
  data = memo.data;
  let items2 = [trendingCategories];
  const sections = memo.sections;
  const effect = GIF_PICKER_ITEM_ESIMTATED_HEIGHT.useEffect(() => {
    if (0 === trendingCategories.length) {
      const obj = GIFPickerActionCreators;
      const trending = obj.fetchTrending();
    }
  }, items2);
  const items3 = [columns, data, onSelectCategory, tmp6];
  const callback = GIF_PICKER_ITEM_ESIMTATED_HEIGHT.useCallback((arg0, arg1) => {
    const items = [];
    let num = 0;
    if (0 < columns) {
      do {
        let tmp7;
        let tmp2 = tmp[num];
        let push = items.push;
        if (null != tmp2) {
          tmp7 = jsx(GIFPickerCategoryViewDefault, { item: tmp2, onSelectCategory }, num);
        } else {
          let items1 = [, ];
          ({ item: arr2[0], placeholder: arr2[1] } = closure_4);
          tmp7 = <View key={num} style={items1} />;
        }
        let arr = push(tmp7);
        num = num + 1;
      } while (num < columns);
    }
    return <View style={closure_4.item} collapsable={false}>{items}</View>;
  }, items3);
  const items4 = [GIF_PICKER_ITEM_ESIMTATED_HEIGHT, columns, tmp6];
  const tmp3Result3 = tmp3(tmp2[11]);
  const isPortalKeyboardInModal = tmp3Result3.useIsPortalKeyboardInModal();
  const memo1 = GIF_PICKER_ITEM_ESIMTATED_HEIGHT.useMemo(() => {
    const obj = { sectionItem: { type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.SHAPE, shape: "rect", shapeCount: columns, spaceGap: gif_picker_GIFPickerUtils.GIF_PICKER_GUTTER_SPACING, borderRadius: closure_4.placeholder.borderRadius, colorHex: closure_4.placeholder.backgroundColor, height: GIF_PICKER_ITEM_ESIMTATED_HEIGHT - gif_picker_GIFPickerUtils.GIF_PICKER_GUTTER_SPACING, verticalAlignment: "top" } };
    ({ type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.SHAPE, shape: "rect", shapeCount: columns, spaceGap: gif_picker_GIFPickerUtils.GIF_PICKER_GUTTER_SPACING, borderRadius: closure_4.placeholder.borderRadius, colorHex: closure_4.placeholder.backgroundColor, height: GIF_PICKER_ITEM_ESIMTATED_HEIGHT - gif_picker_GIFPickerUtils.GIF_PICKER_GUTTER_SPACING, verticalAlignment: "top" });
    return obj;
  }, items4);
  let obj = { estimatedListSize: tmp3Result4.getCustomKeyboardHeight(), inActionSheet, preventNativeModalDismiss: isPortalKeyboardInModal, insetEnd: safeAreaBottomKeyboardAware, itemSize: GIF_PICKER_ITEM_ESIMTATED_HEIGHT, sections, placeholderConfig: memo1, renderItem: callback, accessibilityLabel: intl.string(tmp3(tmp2[15]).t.ffgJrs) };
  const tmp12 = favoritesCategory(tmp2[13]);
  tmp3Result4 = tmp3(tmp2[14]);
  intl = tmp3(tmp2[15]).intl;
  return data(tmp12, obj);
});
const result = size.fileFinishedImporting("modules/gif_picker/native/GIFPickerCategoriesPage.tsx");

export default memoResult;
