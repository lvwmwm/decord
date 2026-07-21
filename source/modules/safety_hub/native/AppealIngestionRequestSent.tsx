// Module ID: 11040
// Function ID: 85944
// Name: AppealIngestionRequestSent
// Dependencies: []
// Exports: default

// Module 11040 (AppealIngestionRequestSent)
importAll(dependencyMap[0]);
({ View: closure_3, Image: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ SafetyHubAnalyticsActions: closure_5, SafetyHubLinks: closure_6 } = arg1(dependencyMap[2]));
const tmp4 = arg1(dependencyMap[2]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
const tmp5 = arg1(dependencyMap[3]);
let closure_9 = arg1(dependencyMap[4]).createStyles({ container: { accessibilityRole: "P", guildId: 40 }, actionsHeader: {}, checkboxPng: { <string:2489072230>: true, <string:1664854612>: true, <string:1375441979>: true, <string:996410372>: true } });
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/safety_hub/native/AppealIngestionRequestSent.tsx");

export default function AppealIngestionRequestSent() {
  let obj = callback(dependencyMap[5]);
  const callback = obj.useEmitAppealIngestionEvent();
  const tmp = callback4();
  const intl = callback(dependencyMap[6]).intl;
  const intl2 = callback(dependencyMap[6]).intl;
  const stringResult = intl.string(callback(dependencyMap[6]).t.QMbTSu);
  obj = {};
  obj = { style: tmp.container };
  const obj1 = { source: importDefault(dependencyMap[8]), style: tmp.checkboxPng };
  const items = [callback2(closure_4, obj1), callback2(callback(dependencyMap[7]).AppealIngestionModalHeader, { headerText: stringResult, subHeaderText: intl2.string(callback(dependencyMap[6]).t.Qdx8AP) }), , , ];
  const obj2 = { style: tmp.actionsHeader };
  const intl3 = callback(dependencyMap[6]).intl;
  obj2.children = intl3.string(callback(dependencyMap[6]).t.9BRc1N);
  items[2] = callback2(callback(dependencyMap[9]).Text, obj2);
  const obj3 = {};
  const stringResult1 = intl2.string(callback(dependencyMap[6]).t.Qdx8AP);
  const intl4 = callback(dependencyMap[6]).intl;
  obj3.text = intl4.string(callback(dependencyMap[6]).t.PxL38B);
  obj3.url = constants.COMMUNITY_GUIDELINES;
  obj3.onPress = function onPress() {
    return callback(closure_5.ClickCommunityGuidelinesLink);
  };
  items[3] = callback2(importDefault(dependencyMap[10]), obj3);
  const obj4 = {};
  const tmp4 = importDefault(dependencyMap[10]);
  const intl5 = callback(dependencyMap[6]).intl;
  obj4.text = intl5.string(callback(dependencyMap[6]).t.qC3XKa);
  obj4.url = constants.WARNING_SYSTEM_HELPCENTER_LINK;
  obj4.onPress = function onPress() {
    return callback(closure_5.ClickWarningSystemHelpcenterLink);
  };
  items[4] = callback2(importDefault(dependencyMap[10]), obj4);
  obj.children = items;
  obj.children = callback3(closure_3, obj);
  return callback2(callback(dependencyMap[7]).AppealIngestionModalScreen, obj);
};
