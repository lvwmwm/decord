// Module ID: 12615
// Function ID: 96941
// Name: ProvisionalAccountNoCallAllowed
// Dependencies: []
// Exports: default

// Module 12615 (ProvisionalAccountNoCallAllowed)
importAll(dependencyMap[0]);
const HelpdeskArticles = arg1(dependencyMap[1]).HelpdeskArticles;
const jsx = arg1(dependencyMap[2]).jsx;
let closure_5 = arg1(dependencyMap[3]).createStyles({ header: { alignSelf: "center" } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/provisional_accounts/native/ProvisionalAccountNoCallAllowed.tsx");

export default function ProvisionalAccountNoCallAllowed() {
  let obj = {};
  obj = { size: "lg", style: callback().header };
  obj.header = jsx(arg1(dependencyMap[5]).CircleErrorIcon, obj);
  const intl = arg1(dependencyMap[6]).intl;
  obj.title = intl.string(arg1(dependencyMap[6]).t.vh+Zpq);
  const intl2 = arg1(dependencyMap[6]).intl;
  obj = {};
  const tmp = callback();
  obj.helpdeskArticle = importDefault(dependencyMap[7]).getArticleURL(HelpdeskArticles.SLAYER_PROVISIONAL_ACCOUNTS);
  obj.content = intl2.format(arg1(dependencyMap[6]).t.tx08s+, obj);
  const obj1 = {};
  const obj2 = { variant: "secondary" };
  const intl3 = arg1(dependencyMap[6]).intl;
  obj2.text = intl3.string(arg1(dependencyMap[6]).t.NX+WJN);
  obj1.children = jsx(arg1(dependencyMap[4]).AlertActionButton, obj2, "got-it");
  obj.actions = jsx(arg1(dependencyMap[8]).AlertActions, obj1);
  return jsx(arg1(dependencyMap[4]).AlertModal, obj);
};
