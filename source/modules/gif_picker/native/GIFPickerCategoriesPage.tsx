// Module ID: 9631
// Function ID: 74935
// Dependencies: [31, 27, 9611, 33, 4130, 9618, 689, 9608, 566, 9612, 9632, 8867, 9280, 5163, 1212, 2]

// Module 9631
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_7 = _createForOfIteratorHelperLoose.createStyles((height) => {
  let obj = {};
  obj = { height, flexDirection: "row", gap: require(9618) /* transformFavoriteGifUrl */.GIF_PICKER_GUTTER_SPACING, paddingBottom: require(9618) /* transformFavoriteGifUrl */.GIF_PICKER_GUTTER_SPACING };
  obj.item = obj;
  obj = { backgroundColor: importDefault(689).colors.BORDER_SUBTLE, height: height - require(9618) /* transformFavoriteGifUrl */.GIF_PICKER_GUTTER_SPACING, borderRadius: importDefault(689).radii.xs, flex: 1 };
  obj.placeholder = obj;
  return obj;
});
const memoResult = importAllResult.memo(function GIFPickerCategoriesPage(columns) {
  columns = columns.columns;
  const favoritesCategory = columns.favoritesCategory;
  const onSelectCategory = columns.onSelectCategory;
  let GIF_PICKER_ITEM_ESIMTATED_HEIGHT;
  let c4;
  let trendingCategories;
  let data;
  if (columns > 2) {
    GIF_PICKER_ITEM_ESIMTATED_HEIGHT = columns(onSelectCategory[5]).GIF_PICKER_ITEM_ESIMTATED_HEIGHT;
  } else {
    GIF_PICKER_ITEM_ESIMTATED_HEIGHT = columns(onSelectCategory[5]).GIF_PICKER_ITEM_ESIMTATED_HEIGHT / 2;
  }
  let tmp5 = callback(GIF_PICKER_ITEM_ESIMTATED_HEIGHT);
  c4 = tmp5;
  let obj = columns(onSelectCategory[8]);
  let items = [trendingCategories];
  trendingCategories = obj.useStateFromStoresObject(items, () => ({ trendingCategories: trendingCategories.getTrendingCategories() })).trendingCategories;
  let items1 = [columns, favoritesCategory, trendingCategories];
  const memo = GIF_PICKER_ITEM_ESIMTATED_HEIGHT.useMemo(() => {
    let bound;
    const items = [...trendingCategories];
    if (null != favoritesCategory) {
      items.unshift(favoritesCategory);
    }
    const data = [];
    let num = 0;
    if (0 < Math.max(items.length, columns(onSelectCategory[5]).DEFAULT_CATEGORY_ROWS)) {
      do {
        let tmp3 = columns;
        let arr = data.push(items.slice(num, num + columns));
        num = num + columns;
        let _Math = Math;
        let tmp5 = columns;
        let tmp6 = onSelectCategory;
        bound = Math.max(items.length, columns(onSelectCategory[5]).DEFAULT_CATEGORY_ROWS);
      } while (num < bound);
    }
    const sections = [data.length];
    return { data, sections };
  }, items1);
  data = memo.data;
  const items2 = [trendingCategories];
  const effect = GIF_PICKER_ITEM_ESIMTATED_HEIGHT.useEffect(() => {
    if (0 === trendingCategories.length) {
      const trending = columns(onSelectCategory[9]).fetchTrending();
      const obj = columns(onSelectCategory[9]);
    }
  }, items2);
  const items3 = [columns, data, onSelectCategory, tmp5];
  const items4 = [GIF_PICKER_ITEM_ESIMTATED_HEIGHT, columns, tmp5];
  callback = GIF_PICKER_ITEM_ESIMTATED_HEIGHT.useCallback((arg0, arg1) => {
    const items = [];
    let num = 0;
    if (0 < columns) {
      do {
        let tmp2 = tmp[num];
        if (null != tmp2) {
          let tmp8 = data;
          let tmp9 = favoritesCategory;
          let tmp10 = onSelectCategory;
          let obj = { item: tmp2 };
          let tmp11 = onSelectCategory;
          obj.onSelectCategory = onSelectCategory;
          let tmp7 = data(favoritesCategory(onSelectCategory[10]), obj, num);
        } else {
          let tmp3 = data;
          let tmp4 = _undefined;
          obj = {};
          let tmp5 = _undefined;
          let items1 = [_undefined.item, ];
          let tmp6 = _undefined;
          items1[1] = _undefined.placeholder;
          obj.style = items1;
          tmp7 = data(_undefined, obj, num);
        }
        let arr = items.push(tmp7);
        num = num + 1;
        let tmp13 = columns;
      } while (num < columns);
    }
    obj = { style: _undefined.item, collapsable: false, children: items };
    return data(_undefined, obj);
  }, items3);
  const memo1 = GIF_PICKER_ITEM_ESIMTATED_HEIGHT.useMemo(() => {
    let obj = {};
    obj = { type: columns(onSelectCategory[11]).FastestListPropsPlaceholderType.SHAPE, shape: "rect", shapeCount: columns, spaceGap: columns(onSelectCategory[5]).GIF_PICKER_GUTTER_SPACING, borderRadius: _undefined.placeholder.borderRadius, colorHex: _undefined.placeholder.backgroundColor, height: GIF_PICKER_ITEM_ESIMTATED_HEIGHT - columns(onSelectCategory[5]).GIF_PICKER_GUTTER_SPACING, verticalAlignment: "top" };
    obj.sectionItem = obj;
    return obj;
  }, items4);
  obj = {};
  let tmp10 = favoritesCategory(onSelectCategory[12]);
  obj.estimatedListSize = columns(onSelectCategory[13]).getCustomKeyboardHeight();
  obj.inActionSheet = columns.inActionSheet;
  obj.insetEnd = favoritesCategory(onSelectCategory[7])({ hasCategories: false }).safeAreaBottomKeyboardAware;
  obj.itemSize = GIF_PICKER_ITEM_ESIMTATED_HEIGHT;
  obj.sections = memo.sections;
  obj.placeholderConfig = memo1;
  obj.renderItem = callback;
  const intl = columns(onSelectCategory[14]).intl;
  obj.accessibilityLabel = intl.string(columns(onSelectCategory[14]).t.ffgJrs);
  return data(tmp10, obj);
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/gif_picker/native/GIFPickerCategoriesPage.tsx");

export default memoResult;
