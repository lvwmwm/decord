// Module ID: 15353
// Function ID: 116917
// Dependencies: []

// Module 15353
const View = arg1(dependencyMap[1]).View;
const RootNavigatorScreen = arg1(dependencyMap[2]).RootNavigatorScreen;
const jsx = arg1(dependencyMap[3]).jsx;
let obj1 = arg1(dependencyMap[4]);
let obj = {};
obj = { borderRadius: importDefault(dependencyMap[5]).radii.xl };
obj.container = obj;
obj1 = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SCRIM, borderRadius: importDefault(dependencyMap[5]).radii.none };
obj.androidContainer = obj1;
const importAllResult = importAll(dependencyMap[0]);
obj.wrapper = { borderRadius: importDefault(dependencyMap[5]).radii.xl };
let closure_6 = obj1.createStyles(obj);
const obj2 = { borderRadius: importDefault(dependencyMap[5]).radii.xl };
const memoResult = importAllResult.memo(function YouScreenContainer(route) {
  route = route.route;
  let tmp = callback();
  let obj = arg1(dependencyMap[7]);
  const trackTabPerformance = obj.useTrackTabPerformance(RootNavigatorScreen.YOU);
  if (null != route) {
    const params = route.params;
    if (null != params) {
      const initialTab = params.initialTab;
    }
  }
  if (importDefault(dependencyMap[9])().isChatBesideChannelList) {
    obj = {};
    const items = [tmp.container, ];
    let obj3 = arg1(dependencyMap[11]);
    let tmp9;
    if (obj3.isAndroid()) {
      obj = {};
      const merged = Object.assign(tmp.androidContainer);
      obj["paddingTop"] = importDefault(dependencyMap[6])().top;
      tmp9 = obj;
    }
    items[1] = tmp9;
    obj.style = items;
    let obj5 = arg1(dependencyMap[11]);
    if (obj5.isAndroid()) {
      const obj1 = {};
      const items1 = [tmp.wrapper, ];
      const obj2 = { maxWidth: 0.6 * importDefault(dependencyMap[8])().width };
      items1[1] = obj2;
      obj1.style = items1;
      tmp = importDefault(dependencyMap[10]);
      obj3 = { initialTab };
      obj1.children = tmp14(tmp, obj3);
      let tmp14Result = tmp14(View, obj1);
    } else {
      const obj4 = { initialTab };
      tmp14Result = tmp14(importDefault(dependencyMap[10]), obj4);
    }
    obj.children = tmp14Result;
    tmp3(View, obj);
    const tmp6 = View;
  } else {
    obj5 = { initialTab };
    return tmp3(importDefault(dependencyMap[10]), obj5);
  }
});
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreenContainer.tsx");

export default memoResult;
