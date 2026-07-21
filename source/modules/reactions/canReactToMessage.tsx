// Module ID: 7652
// Function ID: 61208
// Name: canReactToMessageInternal
// Dependencies: []
// Exports: canReactToMessage, useCanReactToMessage

// Module 7652 (canReactToMessageInternal)
function canReactToMessageInternal(state, getGuildId, items) {
  let obj;
  let obj2;
  let obj3;
  let obj4;
  [obj, obj2, obj3, obj4] = items;
  const guildId = getGuildId.getGuildId();
  const currentUser = obj.getCurrentUser();
  let member = null;
  if (null != guildId) {
    let id;
    if (null != currentUser) {
      id = currentUser.id;
    }
    member = null;
    if (null != id) {
      member = obj2.getMember(guildId, currentUser.id);
    }
  }
  let canResult = null != guildId && obj3.canChatInGuild(guildId);
  if (canResult) {
    canResult = obj4.can(constants.ADD_REACTIONS, getGuildId);
  }
  if (!canResult) {
    canResult = getGuildId.isPrivate();
  }
  if (canResult) {
    canResult = !getGuildId.isArchivedLockedThread();
  }
  if (canResult) {
    canResult = state.state !== constants2.SEND_FAILED;
  }
  if (canResult) {
    canResult = state.type !== constants3.THREAD_STARTER_MESSAGE;
  }
  if (canResult) {
    canResult = !getGuildId(dependencyMap[5]).hasFlag(state.flags, constants4.EPHEMERAL);
    const obj5 = getGuildId(dependencyMap[5]);
  }
  if (canResult) {
    canResult = !getGuildId(dependencyMap[6]).isMemberCommunicationDisabled(member);
    const obj6 = getGuildId(dependencyMap[6]);
  }
  return canResult;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
({ Permissions: closure_6, MessageStates: closure_7, MessageTypes: closure_8, MessageFlags: closure_9 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/reactions/canReactToMessage.tsx");

export const canReactToMessage = function canReactToMessage(message, channel) {
  const items = [closure_5, closure_2, closure_3, closure_4];
  return canReactToMessageInternal(message, channel, items);
};
export const useCanReactToMessage = function useCanReactToMessage(arg0, arg1) {
  arg1 = arg0;
  const dependencyMap = arg1;
  const items = [closure_5, closure_2, closure_3, closure_4];
  return arg1(dependencyMap[7]).useStateFromStores(items, () => {
    const items = [closure_5, closure_2, closure_3, closure_4];
    return callback(arg0, arg1, items);
  });
};
