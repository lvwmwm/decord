// Module ID: 9101
// Function ID: 71329
// Name: ChatGDMCustomizeActionSheet
// Dependencies: []
// Exports: default

// Module 9101 (ChatGDMCustomizeActionSheet)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/group_dm/native/ChatGDMCustomizeActionSheet.tsx");

export default function ChatGDMCustomizeActionSheet(channelId) {
  const arg1 = channelId.channelId;
  ({ onGoBack: closure_1, ref: closure_2 } = importDefault(dependencyMap[2])());
  const obj = { screenKey: "kick" };
  const tmp = importDefault(dependencyMap[2])();
  const intl = arg1(dependencyMap[4]).intl;
  obj.title = intl.string(arg1(dependencyMap[4]).t.1r5E+m);
  obj.render = function render() {
    return callback2(callback(closure_2[5]), { ref: closure_2, onFinish: callback, channelId });
  };
  return jsx(importDefault(dependencyMap[3]), obj);
};
