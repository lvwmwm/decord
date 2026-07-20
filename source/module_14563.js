// Module ID: 14563
// Function ID: 109797
// Dependencies: []

// Module 14563
const ScrollView = arg1(dependencyMap[1]).ScrollView;
const jsx = arg1(dependencyMap[2]).jsx;
const importAllResult = importAll(dependencyMap[0]);
let obj = {};
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOW, padding: importDefault(dependencyMap[4]).space.PX_16 };
obj.container = obj;
let closure_5 = arg1(dependencyMap[3]).createStyles(obj);
const obj2 = arg1(dependencyMap[3]);
const memoResult = importAllResult.memo(function DevToolsPerformanceTestingScreen() {
  let obj = callback(dependencyMap[5]);
  const callback = obj.useNavigation();
  obj = { style: callback2().container };
  obj = { paddingBottom: importDefault(dependencyMap[6])().bottom + importDefault(dependencyMap[4]).space.PX_16 };
  obj.contentContainerStyle = obj;
  const obj1 = { hasIcons: true };
  const entries = Object.entries(callback(dependencyMap[8]).PerformanceTestingScreens);
  obj1.children = entries.map((arg0) => {
    let tmp;
    [tmp, ] = arg0;
    const obj = {
      label: tmp2,
      icon: callback2(callback(closure_2[9]).TableRow.Icon, { IconComponent: tmp3 }),
      arrow: true,
      onPress() {
        if (null != arr.push) {
          const arr = arr.push(arr);
        } else {
          let obj = arr(closure_2[10]);
          obj = { screenKey: arr };
          obj.navigateToDevTools(obj);
        }
      }
    };
    return callback2(callback(closure_2[9]).TableRow, obj, tmp);
  });
  obj.children = jsx(callback(dependencyMap[7]).TableRowGroup, obj1);
  return <ScrollView {...obj} />;
});
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/devtools/native/components/screens/DevToolsPerformanceTestingScreen.tsx");

export default memoResult;
