// Module ID: 9515
// Function ID: 74064
// Name: onClose
// Dependencies: []
// Exports: default

// Module 9515 (onClose)
function onClose() {
  importDefault(dependencyMap[7]).hideActionSheet();
}
importAll(dependencyMap[0]);
({ View: closure_3, Image: closure_4 } = arg1(dependencyMap[1]));
const tmp4 = arg1(dependencyMap[2]);
const HelpdeskArticles = tmp4.HelpdeskArticles;
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = {};
const tmp5 = arg1(dependencyMap[3]);
const merged = Object.assign(importDefault(dependencyMap[5])(tmp4.Fonts.DISPLAY_EXTRABOLD, importDefault(dependencyMap[6]).colors.INTERACTIVE_TEXT_ACTIVE, 16));
obj["marginTop"] = 8;
obj["marginBottom"] = 8;
obj.title = obj;
const obj1 = { "Null": "_oneway", "Null": "y", "Null": "isArray", color: importDefault(dependencyMap[6]).colors.INTERACTIVE_TEXT_ACTIVE };
obj.subtitle = obj1;
obj.view = {};
obj.rating = { "Null": true, "Null": "/assets/design/components/Icon/native/redesign/generated/images" };
let closure_8 = obj.createStyles(obj);
const importDefaultResult = importDefault(dependencyMap[5]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/notifications/native/NotificationSurveyResponseActionSheet.tsx");

export default function NotificationSurveyResponseActionSheet(header) {
  header = header.header;
  const tmp = callback3();
  let obj = {};
  let tmp3 = null != header;
  if (tmp3) {
    obj = { title: header };
    obj = { onPress: onClose };
    obj.trailing = callback(arg1(dependencyMap[10]).ActionSheetCloseButton, obj);
    tmp3 = callback(arg1(dependencyMap[9]).BottomSheetTitleHeader, obj);
  }
  const items = [tmp3, ];
  const obj1 = { style: tmp.view };
  const items1 = [callback(closure_4, { style: tmp.rating, source: importDefault(dependencyMap[11]) }), , ];
  const obj3 = { style: tmp.title, variant: "heading-md/bold" };
  const intl = arg1(dependencyMap[13]).intl;
  obj3.children = intl.string(arg1(dependencyMap[13]).t.d9+vQ8);
  items1[1] = callback(arg1(dependencyMap[12]).Text, obj3);
  const obj4 = { style: tmp.subtitle, variant: "text-md/normal" };
  const intl2 = arg1(dependencyMap[13]).intl;
  const obj5 = {};
  const obj2 = { style: tmp.rating, source: importDefault(dependencyMap[11]) };
  const tmp2 = callback2;
  obj5.helpUrl = importDefault(dependencyMap[15]).getArticleURL(HelpdeskArticles.HIGHLIGHTS_NOTIFICATIONS);
  obj4.children = intl2.format(arg1(dependencyMap[13]).t.WxD5QY, obj5);
  items1[2] = callback(arg1(dependencyMap[14]).TextWithIOSLinkWorkaround, obj4);
  obj1.children = items1;
  items[1] = callback2(closure_3, obj1);
  obj.children = items;
  return tmp2(arg1(dependencyMap[8]).BottomSheet, obj);
};
