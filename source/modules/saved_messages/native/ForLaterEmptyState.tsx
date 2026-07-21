// Module ID: 9924
// Function ID: 76755
// Name: ForLaterEmptyState
// Dependencies: []
// Exports: ForLaterEmptyState

// Module 9924 (ForLaterEmptyState)
const _module = require(dependencyMap[0]);
({ View: closure_3, Image: closure_4, ScrollView: closure_5 } = _module);
const _module1 = require(dependencyMap[1]);
({ jsx: closure_6, jsxs: closure_7 } = _module1);
const _module2 = require(dependencyMap[2]);
let closure_8 = _module2.createStyles({ scrollView: { flex: 1 }, pageContainer: { dateTimeObject: "{0} \u0430\u0431\u043E {1}", getUnreadDisplayItems: "{0}, {1}", zoom: "{0} \u0430\u0431\u043E {1}", GET_ENTITLEMENT_TICKET: "{0}, {1}", maxFontSizeMultiplier: "<string:1090633297>" }, container: {}, image: {}, textContainer: { maxFontSizeMultiplier: "<string:1091687288>", lineClamp: "/assets/design/components/Icon/native/redesign/generated/images" }, text: { textAlign: "center" } });
const _module3 = require(dependencyMap[6]);
const result = _module3.fileFinishedImporting("modules/saved_messages/native/ForLaterEmptyState.tsx");

export const ForLaterEmptyState = function ForLaterEmptyState() {
  const tmp = callback3();
  let obj = { style: tmp.scrollView, contentContainerStyle: tmp.pageContainer };
  obj = { style: tmp.container };
  obj = { source: importDefault(dependencyMap[3]), style: tmp.image };
  const items = [callback(closure_4, obj), ];
  const obj1 = { style: tmp.textContainer };
  const obj2 = { style: tmp.text };
  const intl = require(dependencyMap[5]).intl;
  obj2.children = intl.string(require(dependencyMap[5]).t.erEf2g);
  const items1 = [callback(require(dependencyMap[4]).Text, obj2), ];
  const obj3 = { style: tmp.text };
  const intl2 = require(dependencyMap[5]).intl;
  obj3.children = intl2.string(require(dependencyMap[5]).t.w1o+75);
  items1[1] = callback(require(dependencyMap[4]).Text, obj3);
  obj1.children = items1;
  items[1] = callback2(closure_3, obj1);
  obj.children = items;
  obj.children = callback2(closure_3, obj);
  return callback(closure_5, obj);
};
