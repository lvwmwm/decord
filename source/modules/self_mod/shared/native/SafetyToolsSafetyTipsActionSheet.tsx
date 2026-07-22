// Module ID: 10145
// Function ID: 78483
// Name: SafetyToolsSafetyTipsActionSheet
// Dependencies: []
// Exports: default

// Module 10145 (SafetyToolsSafetyTipsActionSheet)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = arg1(dependencyMap[2]).getInappropriateConversationsSafetyTips;
const jsx = arg1(dependencyMap[3]).jsx;
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { marginHorizontal: importDefault(dependencyMap[5]).space.PX_16 };
obj.safetyTipsContainer = obj;
let closure_6 = obj.createStyles(obj);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/self_mod/shared/native/SafetyToolsSafetyTipsActionSheet.tsx");

export default function SafetyToolsSafetyTipsActionSheet(arg0) {
  let channelId;
  let onClose;
  let recipientId;
  let warningId;
  let warningType;
  ({ channelId, recipientId, warningId, warningType, onClose } = arg0);
  let obj = { hasHeaderBack: true, recipientId, warningId, warningType };
  const tmp = callback2();
  const intl = arg1(dependencyMap[7]).intl;
  obj.headerTitle = intl.string(arg1(dependencyMap[7]).t.EtNxi6);
  obj.channelId = channelId;
  obj.onClose = onClose;
  obj = { style: tmp.safetyTipsContainer };
  obj = {};
  const tmp2 = importDefault(dependencyMap[6]);
  const intl2 = arg1(dependencyMap[7]).intl;
  obj.description = intl2.string(arg1(dependencyMap[7]).t.DJMZX6);
  const tmp3 = importDefault(dependencyMap[8]);
  obj.safetyTips = callback().map((children) => callback2(callback(closure_2[9]).Text, { variant: "text-sm/medium", children }, arg1));
  obj.children = <tmp3 {...obj} />;
  obj.children = <View {...obj} />;
  return <tmp2 {...obj} />;
};
