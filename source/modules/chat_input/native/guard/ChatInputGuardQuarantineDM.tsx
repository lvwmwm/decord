// Module ID: 11474
// Function ID: 89386
// Dependencies: []

// Module 11474
const QUARANTINE_APPEAL_LINK = arg1(dependencyMap[1]).QUARANTINE_APPEAL_LINK;
const jsx = arg1(dependencyMap[2]).jsx;
const importAllResult = importAll(dependencyMap[0]);
const memoResult = importAll(dependencyMap[0]).memo(function ChatInputGuardQuarantineDM() {
  let obj = { type: "simple-action", icon: jsx(arg1(dependencyMap[4]).ChatWarningIcon, {}) };
  const intl = arg1(dependencyMap[5]).intl;
  obj.message = intl.string(arg1(dependencyMap[5]).t.EouHwv);
  const intl2 = arg1(dependencyMap[5]).intl;
  obj = { appealLink: QUARANTINE_APPEAL_LINK };
  obj.subtext = intl2.format(arg1(dependencyMap[5]).t.PThBel, obj);
  return jsx(importDefault(dependencyMap[3]), obj);
});
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardQuarantineDM.tsx");

export default memoResult;
