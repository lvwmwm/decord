// Module ID: 15041
// Function ID: 113251
// Name: ForYouLoadMore
// Dependencies: []
// Exports: ForYouLoadMore

// Module 15041 (ForYouLoadMore)
importAll(dependencyMap[0]);
({ ActivityIndicator: closure_2, View: closure_3 } = arg1(dependencyMap[1]));
let closure_4 = importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
const tmp3 = arg1(dependencyMap[1]);
let closure_6 = arg1(dependencyMap[4]).createStyles({ container: {} });
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/notification_center/native/ForYouLoadMore.tsx");

export const ForYouLoadMore = function ForYouLoadMore(onPressLoad) {
  let obj = arg1(dependencyMap[5]);
  const items = [closure_4];
  obj = { style: callback().container };
  if (obj.useStateFromStores(items, () => loading.loading)) {
    let tmp4Result = tmp4(closure_2, {});
  } else {
    obj = {};
    const intl = arg1(dependencyMap[7]).intl;
    obj.text = intl.string(arg1(dependencyMap[7]).t.Q/LSXp);
    obj.onPress = onPressLoad.onPressLoad;
    tmp4Result = tmp4(arg1(dependencyMap[6]).Button, obj);
  }
  obj.children = tmp4Result;
  return <closure_3 {...obj} />;
};
