// Module ID: 13710
// Function ID: 103722
// Name: FamilyCenterParentalControlsContentAndSocial
// Dependencies: []
// Exports: default

// Module 13710 (FamilyCenterParentalControlsContentAndSocial)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const HelpdeskArticles = arg1(dependencyMap[2]).HelpdeskArticles;
const MobileSetting = arg1(dependencyMap[3]).MobileSetting;
const jsx = arg1(dependencyMap[4]).jsx;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/parent_tools/native/FamilyCenterParentalControlsContentAndSocial.tsx");

export default function FamilyCenterParentalControlsContentAndSocial() {
  let obj = arg1(dependencyMap[5]);
  obj = {};
  obj = { settings: items };
  const items = [MobileSetting.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS];
  const intl = arg1(dependencyMap[6]).intl;
  const obj1 = {};
  let obj4 = importDefault(dependencyMap[7]);
  obj1.learnMoreLink = obj4.getArticleURL(HelpdeskArticles.EXPLICIT_MEDIA_REDACTION);
  obj.subLabel = intl.format(arg1(dependencyMap[6]).t.dliU4j, obj1);
  const items1 = [obj, , ];
  const obj2 = {};
  const intl2 = arg1(dependencyMap[6]).intl;
  obj2.label = intl2.string(arg1(dependencyMap[6]).t.MeYuqs);
  const items2 = [, ];
  ({ PARENTAL_CONTROLS_DIRECT_MESSAGES: arr3[0], PARENTAL_CONTROLS_MESSAGE_REQUESTS: arr3[1] } = MobileSetting);
  obj2.settings = items2;
  items1[1] = obj2;
  const obj3 = {};
  const intl3 = arg1(dependencyMap[6]).intl;
  obj3.label = intl3.string(arg1(dependencyMap[6]).t.XlGG9c);
  const items3 = [, , ];
  ({ PARENTAL_CONTROLS_FRIEND_REQUESTS_EVERYONE: arr4[0], PARENTAL_CONTROLS_FRIEND_REQUESTS_MUTUAL_FRIENDS: arr4[1], PARENTAL_CONTROLS_FRIEND_REQUESTS_MUTUAL_GUILDS: arr4[2] } = MobileSetting);
  obj3.settings = items3;
  items1[2] = obj3;
  obj.sections = items1;
  obj4 = {};
  const list = obj.createList(obj);
  obj4.children = jsx(importDefault(dependencyMap[8]), { node: list });
  return <View {...obj4} />;
};
