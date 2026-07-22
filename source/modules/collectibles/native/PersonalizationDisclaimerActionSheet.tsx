// Module ID: 14382
// Function ID: 108554
// Name: PersonalizationDisclaimerActionSheet
// Dependencies: []
// Exports: default

// Module 14382 (PersonalizationDisclaimerActionSheet)
let closure_3 = importAll(dependencyMap[0]);
const HelpdeskArticles = arg1(dependencyMap[1]).HelpdeskArticles;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[4]).space.PX_16 };
obj.container = obj;
const obj1 = { enabled: "string", verticalScrollEnabled: "string", scrollAffordanceVariant: "color", paddingVertical: importDefault(dependencyMap[4]).space.PX_8 };
obj.header = obj1;
let closure_7 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/collectibles/native/PersonalizationDisclaimerActionSheet.tsx");

export default function PersonalizationDisclaimerActionSheet() {
  const tmp = callback3();
  const callback = React.useCallback(() => {
    const obj = callback(closure_2[5]);
    obj.openURL(callback(closure_2[6]).getArticleURL(constants.DATA_USED_FOR_RECOMMENDED));
  }, []);
  let obj = { contentStyles: tmp.container };
  obj = { style: tmp.header };
  const intl = arg1(dependencyMap[9]).intl;
  obj.children = intl.string(arg1(dependencyMap[9]).t.euks4U);
  const items = [callback(arg1(dependencyMap[8]).Text, obj), ];
  obj = {};
  const obj1 = { size: "lg" };
  const intl2 = arg1(dependencyMap[9]).intl;
  obj1.text = intl2.string(arg1(dependencyMap[9]).t.hvVgAZ);
  obj1.onPress = callback;
  const obj2 = { color: importDefault(dependencyMap[4]).colors.WHITE };
  obj1.icon = callback(arg1(dependencyMap[12]).LinkExternalSmallIcon, obj2);
  obj1.iconPosition = "end";
  const items1 = [callback(arg1(dependencyMap[11]).Button, obj1), ];
  const obj3 = {};
  const intl3 = arg1(dependencyMap[9]).intl;
  obj3.text = intl3.string(arg1(dependencyMap[9]).t.WAI6xu);
  obj3.onPress = function onPress() {
    return callback(closure_2[13]).hideActionSheet();
  };
  items1[1] = callback(arg1(dependencyMap[11]).Button, obj3);
  obj.children = items1;
  items[1] = callback2(arg1(dependencyMap[10]).ButtonGroup, obj);
  obj.children = items;
  return callback2(arg1(dependencyMap[7]).BottomSheet, obj);
};
