// Module ID: 11360
// Function ID: 88343
// Name: MAX_MESSAGES_ALLOWED_FOR_GREETING
// Dependencies: []
// Exports: useShowConvoStarterInDM

// Module 11360 (MAX_MESSAGES_ALLOWED_FOR_GREETING)
const useRef = require(dependencyMap[0]).useRef;
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const _module = require(dependencyMap[5]);
({ RelationshipTypes: closure_7, UserFlags: closure_8 } = _module);
const ChannelFlags = require(dependencyMap[6]).ChannelFlags;
const _module1 = require(dependencyMap[9]);
const result = _module1.fileFinishedImporting("modules/messages/useShowConvoStarterInDM.tsx");

export const MAX_MESSAGES_ALLOWED_FOR_GREETING = 25;
export const useShowConvoStarterInDM = function useShowConvoStarterInDM(channel) {
  const require = channel;
  let closure_1 = useRef(false);
  const useRef = useRef(channel.id);
  let tmp = channel.isDM() && !channel.isSystemDM();
  if (tmp) {
    const rawRecipients = channel.rawRecipients;
    tmp = !rawRecipients.some((bot) => bot.bot);
  }
  let closure_3 = tmp;
  let recipientId = null;
  if (tmp) {
    recipientId = channel.getRecipientId();
  }
  let closure_4 = recipientId;
  const strangerDangerWarning = require(closure_1[7]).useStrangerDangerWarning(channel.id);
  let closure_5 = strangerDangerWarning;
  const hasFlagResult = channel.hasFlag(ChannelFlags.HAS_ONLY_SYSTEM_MESSAGES);
  let closure_6 = hasFlagResult;
  const obj = require(closure_1[7]);
  const items = [closure_4, closure_3, closure_5, closure_6];
  const items1 = [strangerDangerWarning, tmp, channel.id, recipientId, hasFlagResult];
  return require(closure_1[8]).useStateFromStores(items, () => {
    if (ref2.current !== arg0.id) {
      ref.current = false;
      ref2.current = arg0.id;
    }
    if (null != strangerDangerWarning) {
      return false;
    } else if (tmp) {
      if (tmp.isMessageRequest(arg0.id)) {
        return false;
      } else {
        if (null != recipientId) {
          if (strangerDangerWarning.getRelationshipType(recipientId) === constants.BLOCKED) {
            return false;
          }
        }
        if (null != recipientId) {
          const user = hasFlagResult.getUser(recipientId);
          if (null != user) {
            if (user.hasFlag(constants2.PROVISIONAL_ACCOUNT)) {
              return false;
            }
          }
        }
        const messages = recipientId.getMessages(arg0.id);
        let tmp16 = !messages.hasMoreBefore && !messages.hasMoreAfter;
        if (tmp16) {
          tmp16 = messages.length < 25;
        }
        let current = messages.ready;
        const result = recipientId.hasCurrentUserSentWaveBlockingMessage(arg0.id);
        if (!current) {
          current = ref.current;
        }
        if (current) {
          let tmp21 = hasFlagResult;
          if (!hasFlagResult) {
            tmp21 = tmp16;
          }
          current = tmp21;
        }
        if (current) {
          current = !result;
        }
        ref.current = current;
        return current;
      }
    } else {
      return false;
    }
  }, items1);
};
