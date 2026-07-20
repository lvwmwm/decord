// Module ID: 9582
// Function ID: 74642
// Dependencies: []

// Module 9582
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
let closure_7 = arg1(dependencyMap[4]).createStyles((height) => {
  let obj = {};
  obj = { height, flexDirection: "row", gap: arg1(dependencyMap[5]).GIF_PICKER_GUTTER_SPACING, paddingBottom: arg1(dependencyMap[5]).GIF_PICKER_GUTTER_SPACING };
  obj.item = obj;
  obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BORDER_SUBTLE, height: height - arg1(dependencyMap[5]).GIF_PICKER_GUTTER_SPACING, borderRadius: importDefault(dependencyMap[6]).radii.xs, flex: 1 };
  obj.placeholder = obj;
  return obj;
});
const obj2 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo(function GIFPickerCategoriesPage(columns) {
  columns = columns.columns;
  const arg1 = columns;
  const favoritesCategory = columns.favoritesCategory;
  const importDefault = favoritesCategory;
  const onSelectCategory = columns.onSelectCategory;
  const dependencyMap = onSelectCategory;
  let importAllResult;
  let View;
  let closure_5;
  let jsx;
  if (columns > 2) {
    let GIF_PICKER_ITEM_ESIMTATED_HEIGHT = arg1(dependencyMap[5]).GIF_PICKER_ITEM_ESIMTATED_HEIGHT;
  } else {
    GIF_PICKER_ITEM_ESIMTATED_HEIGHT = arg1(dependencyMap[5]).GIF_PICKER_ITEM_ESIMTATED_HEIGHT / 2;
  }
  importAllResult = GIF_PICKER_ITEM_ESIMTATED_HEIGHT;
  const tmp5 = callback(GIF_PICKER_ITEM_ESIMTATED_HEIGHT);
  View = tmp5;
  let obj = arg1(dependencyMap[8]);
  const items = [closure_5];
  const trendingCategories = obj.useStateFromStoresObject(items, () => ({ trendingCategories: trendingCategories.getTrendingCategories() })).trendingCategories;
  closure_5 = trendingCategories;
  const items1 = [columns, favoritesCategory, trendingCategories];
  const memo = importAllResult.useMemo(() => {
    let bound;
    const items = [...closure_5];
    if (null != favoritesCategory) {
      items.unshift(favoritesCategory);
    }
    const data = [];
    let num = 0;
    if (0 < Math.max(items.length, columns(onSelectCategory[5]).DEFAULT_CATEGORY_ROWS)) {
      do {
        let tmp3 = closure_0;
        let arr = data.push(items.slice(num, num + closure_0));
        num = num + closure_0;
        let _Math = Math;
        let tmp5 = closure_0;
        let tmp6 = closure_2;
        bound = Math.max(items.length, closure_0(closure_2[5]).DEFAULT_CATEGORY_ROWS);
      } while (num < bound);
    }
    const sections = [data.length];
    return { data, sections };
  }, items1);
  const data = memo.data;
  jsx = data;
  const items2 = [trendingCategories];
  const effect = importAllResult.useEffect(() => {
    if (0 === trendingCategories.length) {
      const trending = columns(onSelectCategory[9]).fetchTrending();
      const obj = columns(onSelectCategory[9]);
    }
  }, items2);
  const items3 = [columns, data, onSelectCategory, tmp5];
  const items4 = [GIF_PICKER_ITEM_ESIMTATED_HEIGHT, columns, tmp5];
  const callback = importAllResult.useCallback((arg0, arg1) => {
    let tmp5;
    const items = [];
    let num = 0;
    if (0 < columns) {
      do {
        let tmp2 = tmp[num];
        if (null != tmp2) {
          let tmp8 = closure_6;
          let tmp9 = closure_1;
          let tmp10 = closure_2;
          let obj = { item: tmp2 };
          let tmp11 = closure_2;
          obj.onSelectCategory = closure_2;
          let tmp7 = closure_6(closure_1(closure_2[10]), obj, num);
        } else {
          let tmp3 = closure_6;
          let tmp4 = closure_4;
          obj = {};
          tmp5 = closure_4;
          let items1 = [closure_4.item, ];
          let tmp6 = closure_4;
          items1[1] = closure_4.placeholder;
          obj.style = items1;
          tmp7 = closure_6(closure_4, obj, num);
        }
        let arr = items.push(tmp7);
        num = num + 1;
        let tmp13 = closure_0;
      } while (num < closure_0);
    }
    obj = { style: tmp5.item, collapsable: false, children: items };
    return data(tmp5, obj);
  }, items3);
  const memo1 = importAllResult.useMemo(() => {
    let obj = {};
    obj = { type: columns(onSelectCategory[11]).FastestListPropsPlaceholderType.SHAPE, shape: "rect", shapeCount: columns, spaceGap: columns(onSelectCategory[5]).GIF_PICKER_GUTTER_SPACING, borderRadius: tmp5.placeholder.borderRadius, colorHex: tmp5.placeholder.backgroundColor, height: GIF_PICKER_ITEM_ESIMTATED_HEIGHT - columns(onSelectCategory[5]).GIF_PICKER_GUTTER_SPACING, verticalAlignment: "top" };
    obj.sectionItem = obj;
    return obj;
  }, items4);
  obj = {};
  const tmp10 = importDefault(dependencyMap[12]);
  obj.estimatedListSize = arg1(dependencyMap[13]).getCustomKeyboardHeight();
  obj.inActionSheet = columns.inActionSheet;
  obj.insetEnd = importDefault(dependencyMap[7])({ hasCategories: false }).safeAreaBottomKeyboardAware;
  obj.itemSize = GIF_PICKER_ITEM_ESIMTATED_HEIGHT;
  obj.sections = memo.sections;
  obj.placeholderConfig = memo1;
  obj.renderItem = callback;
  const intl = arg1(dependencyMap[14]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[14]).t.ffgJrs);
  return <tmp10 {...obj} />;
});
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/gif_picker/native/GIFPickerCategoriesPage.tsx");

export default memoResult;
