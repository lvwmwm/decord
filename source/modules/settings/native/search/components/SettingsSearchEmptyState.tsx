// Module ID: 14457
// Function ID: 108943
// Dependencies: []

// Module 14457
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
let closure_6 = arg1(dependencyMap[3]).createStyles({ container: { <string:2930266538>: 3, <string:1666624098>: 2, <string:1675098530>: 0 }, textContainer: { marginTop: 24 } });
const obj2 = arg1(dependencyMap[3]);
const memoResult = importAllResult.memo(function SettingsSearchEmptyState() {
  const tmp = callback3();
  const effect = importAllResult.useEffect(() => {
    const AccessibilityAnnouncer = callback(closure_1[4]).AccessibilityAnnouncer;
    const intl = callback(closure_1[5]).intl;
    AccessibilityAnnouncer.announce(intl.string(callback(closure_1[5]).t.zihbmv), "polite");
  }, []);
  let obj = { style: tmp.container };
  const items = [callback(arg1(dependencyMap[6]).NoResultsAlt, { resizeMode: "contain" }), ];
  obj = { headerBackground: false, headerTransparent: false, headerBackVisible: false, style: tmp.textContainer };
  obj = {};
  const intl = arg1(dependencyMap[5]).intl;
  obj.children = intl.string(arg1(dependencyMap[5]).t.zihbmv);
  const items1 = [callback(arg1(dependencyMap[8]).Text, obj), ];
  const obj1 = {};
  const intl2 = arg1(dependencyMap[5]).intl;
  obj1.children = intl2.string(arg1(dependencyMap[5]).t.XclvsB);
  items1[1] = callback(arg1(dependencyMap[8]).Text, obj1);
  obj.children = items1;
  items[1] = callback2(arg1(dependencyMap[7]).Stack, obj);
  obj.children = items;
  return callback2(View, obj);
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/settings/native/search/components/SettingsSearchEmptyState.tsx");

export default memoResult;
