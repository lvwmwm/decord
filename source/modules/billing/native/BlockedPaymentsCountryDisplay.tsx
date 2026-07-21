// Module ID: 7182
// Function ID: 57838
// Name: BlockedPaymentsCountryDisplay
// Dependencies: []
// Exports: default

// Module 7182 (BlockedPaymentsCountryDisplay)
importAll(dependencyMap[0]);
({ View: closure_3, Image: closure_4 } = arg1(dependencyMap[1]));
const HelpdeskArticles = arg1(dependencyMap[2]).HelpdeskArticles;
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { container: { alignItems: "center" } };
obj = { color: importDefault(dependencyMap[5]).colors.TEXT_SUBTLE };
obj.header = obj;
obj.image = { marginTop: 38 };
let closure_8 = obj.createStyles(obj);
const tmp4 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/billing/native/BlockedPaymentsCountryDisplay.tsx");

export default function BlockedPaymentsCountryDisplay() {
  const tmp = callback2();
  let obj = { style: tmp.container };
  obj = { style: tmp.header };
  const intl = arg1(dependencyMap[8]).intl;
  obj.children = intl.string(arg1(dependencyMap[8]).t.vwMEHS);
  const items = [callback(arg1(dependencyMap[7]).LegacyText, obj), , ];
  obj = {};
  const intl2 = arg1(dependencyMap[8]).intl;
  const obj1 = {};
  const tmp2 = importDefault(dependencyMap[6])();
  const tmp3 = closure_7;
  const tmp4 = closure_3;
  const tmp5 = callback;
  obj1.helpdeskArticle = importDefault(dependencyMap[9]).getArticleURL(HelpdeskArticles.BLOCKED_PAYMENTS);
  obj.children = intl2.format(arg1(dependencyMap[8]).t.IHxEJU, obj1);
  items[1] = callback(arg1(dependencyMap[7]).LegacyText, obj);
  const obj2 = { style: tmp.image };
  const obj5 = importDefault(dependencyMap[9]);
  const tmp6 = closure_4;
  if (obj7.isThemeDark(tmp2)) {
    let tmp7Result = tmp7(tmp8[11]);
  } else {
    tmp7Result = tmp7(tmp8[12]);
  }
  obj2.source = tmp7Result;
  items[2] = tmp5(tmp6, obj2);
  obj.children = items;
  return tmp3(tmp4, obj);
};
