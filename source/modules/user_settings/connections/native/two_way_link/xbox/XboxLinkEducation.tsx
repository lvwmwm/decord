// Module ID: 9030
// Function ID: 70963
// Name: XboxLinkEducation
// Dependencies: []
// Exports: default

// Module 9030 (XboxLinkEducation)
let closure_3 = importAll(dependencyMap[0]);
({ Image: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
const HelpdeskArticles = arg1(dependencyMap[2]).HelpdeskArticles;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
let closure_9 = arg1(dependencyMap[4]).createStyles({ image: { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true } });
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkEducation.tsx");

export default function XboxLinkEducation(onClose) {
  let obj = arg1(dependencyMap[5]);
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  let obj1 = importDefault(dependencyMap[6]);
  const articleURL = obj1.getArticleURL(HelpdeskArticles.XBOX_CONNECTION);
  obj = { style: twoWayLinkStyles.container };
  obj = { style: twoWayLinkStyles.content };
  obj1 = { source: React.useMemo(() => ({ uri: callback(closure_2[7]) }), []), style: callback3().image };
  const items = [callback(closure_4, obj1), , ];
  const obj2 = { cachedAt: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011454504407100313, edpbxy: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004026493667951817, style: twoWayLinkStyles.title };
  const intl = arg1(dependencyMap[9]).intl;
  obj2.children = intl.string(arg1(dependencyMap[9]).t.jHytat);
  items[1] = callback(arg1(dependencyMap[8]).Text, obj2);
  const obj3 = { style: twoWayLinkStyles.body };
  const intl2 = arg1(dependencyMap[9]).intl;
  obj3.children = intl2.format(arg1(dependencyMap[9]).t.yhozpz, { helpdeskArticleUrl: articleURL });
  items[2] = callback(arg1(dependencyMap[10]).TextWithIOSLinkWorkaround, obj3);
  obj.children = items;
  const items1 = [callback2(closure_5, obj), ];
  const obj4 = { bottom: true, style: twoWayLinkStyles.footerContainer };
  const obj5 = { style: twoWayLinkStyles.footerButton };
  const obj6 = { <string:1986169986>: true, <string:2487833047>: true };
  const intl3 = arg1(dependencyMap[9]).intl;
  obj6.text = intl3.string(arg1(dependencyMap[9]).t.i4jeWR);
  obj6.onPress = onClose.onClose;
  obj5.children = callback(arg1(dependencyMap[12]).Button, obj6);
  obj4.children = callback(closure_5, obj5);
  items1[1] = callback(arg1(dependencyMap[11]).SafeAreaPaddingView, obj4);
  obj.children = items1;
  return callback2(closure_5, obj);
};
