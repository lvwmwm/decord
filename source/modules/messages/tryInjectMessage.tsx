// Module ID: 11086
// Function ID: 86225
// Name: createInjectedInGameNuxMessage
// Dependencies: []
// Exports: tryCreateInjectedMessage

// Module 11086 (createInjectedInGameNuxMessage)
function createInjectedInGameNuxMessage(author, id) {
  const obj = { channelId: id, type: constants3.IN_GAME_MESSAGE_NUX, content: "", author: author.author, flags: constants.EPHEMERAL, state: constants2.SENT };
  const tmp = importDefault(dependencyMap[2])({ channelId: id, type: constants3.IN_GAME_MESSAGE_NUX, content: "", author: author.author, flags: constants.EPHEMERAL, state: constants2.SENT });
  const messageRecord = id(dependencyMap[3]).createMessageRecord(tmp);
  ({ applicationId: tmp2.applicationId, timestamp: tmp2.timestamp } = author);
  return messageRecord;
}
let closure_3 = importDefault(dependencyMap[0]);
({ MessageFlags: closure_4, MessageStates: closure_5, MessageTypes: closure_6 } = arg1(dependencyMap[1]));
const map = new Map();
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/messages/tryInjectMessage.tsx");

export const tryCreateInjectedMessage = function tryCreateInjectedMessage(id, closure_0) {
  if (map.get(closure_0.id) === id.id) {
    let tmp4 = createInjectedInGameNuxMessage(id, closure_0.id);
  } else {
    tmp4 = null;
    if (null != id.applicationId) {
      let obj = closure_0(dependencyMap[4]);
      tmp4 = null;
      if (obj.hasFlag(id.flags, constants.SENT_BY_SOCIAL_LAYER_INTEGRATION)) {
        tmp4 = null;
        if (closure_0.isDM()) {
          tmp4 = null;
          if (id.author.id !== id.getId()) {
            tmp4 = null;
            if (null == id.activity) {
              const recipientFlags = closure_0.recipientFlags;
              let num2 = 0;
              if (null != recipientFlags) {
                num2 = recipientFlags;
              }
              tmp4 = null;
              if (!obj2.hasFlag(num2, closure_0(dependencyMap[5]).ChannelRecipientPrivateUserDataFlags.DISMISSED_IN_GAME_MESSAGE_NUX)) {
                tmp4 = null;
                if (!map.has(closure_0.id)) {
                  const result = map.set(closure_0.id, id.id);
                  const tmp12 = createInjectedInGameNuxMessage(id, closure_0.id);
                  const recipientFlags2 = closure_0.recipientFlags;
                  let num4 = 0;
                  if (null != recipientFlags2) {
                    num4 = recipientFlags2;
                  }
                  const obj3 = closure_0(dependencyMap[4]);
                  const setFlagResult = closure_0(dependencyMap[4]).setFlag(num4, closure_0(dependencyMap[5]).ChannelRecipientPrivateUserDataFlags.DISMISSED_IN_GAME_MESSAGE_NUX, true);
                  const result1 = importDefault(dependencyMap[6]).updatePrivateChannelRecipientFlags(closure_0.id, setFlagResult);
                  tmp4 = tmp12;
                  const obj4 = importDefault(dependencyMap[6]);
                }
              }
              const obj2 = closure_0(dependencyMap[4]);
            }
          }
        }
      }
    }
  }
  let tmp23 = null;
  if (null != tmp4) {
    obj = { message: tmp4, position: "before" };
    tmp23 = obj;
  }
  return tmp23;
};
