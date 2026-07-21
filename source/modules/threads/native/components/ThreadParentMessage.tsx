// Module ID: 15191
// Function ID: 114587
// Name: ThreadChannelStarterMessage
// Dependencies: []
// Exports: ThreadChannelStarterMessage, ThreadCreationStarterMessage

// Module 15191 (ThreadChannelStarterMessage)
importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const ReferencedMessageState = arg1(dependencyMap[1]).ReferencedMessageState;
let closure_5 = importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
let importDefaultResult = importDefault(dependencyMap[4]);
importDefaultResult = new importDefaultResult();
importDefaultResult.setOptions({});
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/threads/native/components/ThreadParentMessage.tsx");

export const ThreadChannelStarterMessage = function ThreadChannelStarterMessage(arg0) {
  ({ guildId: closure_0, messageId: closure_1, channelId: closure_2 } = arg0);
  let obj = arg1(dependencyMap[5]);
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => message.getMessage(closure_2, closure_1));
  let state;
  if (null != stateFromStores) {
    state = stateFromStores.state;
  }
  let tmp3 = null;
  if (state === ReferencedMessageState.LOADED) {
    obj = {
      accessibilityRole: "button",
      onPress() {
          callback(closure_2[7]).transitionToGuild(callback, closure_2, closure_1);
        }
    };
    obj = { rowGenerator: importDefaultResult, message: stateFromStores.message };
    obj.children = jsx(importDefault(dependencyMap[8]), obj);
    tmp3 = jsx(arg1(dependencyMap[6]).PressableOpacity, obj);
  }
  return tmp3;
};
export const ThreadCreationStarterMessage = function ThreadCreationStarterMessage(arg0) {
  ({ messageId: closure_0, channelId: closure_1 } = arg0);
  let obj = arg1(dependencyMap[5]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => message.getMessage(closure_1, closure_0));
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = { rowGenerator: importDefaultResult, message: stateFromStores };
    tmp2 = jsx(importDefault(dependencyMap[8]), obj);
  }
  return tmp2;
};
