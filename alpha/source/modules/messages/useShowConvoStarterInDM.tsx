// Module ID: 13222
// Function ID: 13223
// Name: useShowConvoStarterInDM
// Dependencies: [19, 6946, 6391, 4985, 1387, 1071, 4899, 11820, 504, 2]
// Exports: useShowConvoStarterInDM

// Module 13222 (useShowConvoStarterInDM)
import react from "react" /* 19 */;
import ChannelConstants from "ChannelConstants" /* 4899 */;
import MessageRequestStore from "MessageRequestStore" /* 6946 */;
import MessageStore from "MessageStore" /* 6391 */;
import RelationshipStore from "RelationshipStore" /* 4985 */;
import UserStore_mod from "UserStore" /* 1387 */;
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let metroImportAll;
let metroImportDefault;
let useRef = react.useRef;
let UserStore = UserStore_mod;
({ RelationshipTypes: metroImportDefault, UserFlags: metroImportAll } = Constants);
const ChannelFlags = ChannelConstants.ChannelFlags;
let result = size.fileFinishedImporting("modules/messages/useShowConvoStarterInDM.tsx");

export const MAX_MESSAGES_ALLOWED_FOR_GREETING = 25;
export function useShowConvoStarterInDM(channel) {
  let ref;
  let ref2;
  _require = channel;
  dependencyMap = useRef(false);
  useRef = useRef(channel.id);
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
  const obj = require("useStrangerDangerWarning");
  const strangerDangerWarning = obj.useStrangerDangerWarning(channel.id);
  const hasFlagResult = channel.hasFlag(ChannelFlags.HAS_ONLY_SYSTEM_MESSAGES);
  UserStore = hasFlagResult;
  let obj2 = require("get initialized");
  const items = [recipientId, closure_3, strangerDangerWarning, UserStore];
  const items1 = [strangerDangerWarning, tmp, channel.id, recipientId, hasFlagResult];
  return obj2.useStateFromStores(items, () => {
    if (ref2.current !== channel.id) {
      ref.current = false;
      tmp.current = channel.id;
    }
    if (null != strangerDangerWarning) {
      return false;
    } else {
      const tmp15 = closure_3;
      if (tmp15) {
        if (MessageRequestStore.isMessageRequest(channel.id)) {
          return false;
        } else {
          if (null != recipientId) {
            if (RelationshipStore.getRelationshipType(recipientId) === metroImportDefault.BLOCKED) {
              return false;
            }
          }
          if (null != recipientId) {
            const user = UserStore.getUser(tmp5);
            if (null != user) {
              if (user.hasFlag(metroImportAll.PROVISIONAL_ACCOUNT)) {
                return false;
              }
            }
          }
          const messages = MessageStore.getMessages(tmp2.id);
          let tmp10 = !messages.hasMoreBefore && !messages.hasMoreAfter;
          const obj2 = MessageStore;
          if (tmp10) {
            tmp10 = messages.length < 25;
          }
          let current = messages.ready;
          const result = obj2.hasCurrentUserSentWaveBlockingMessage(tmp2.id);
          if (!current) {
            current = ref.current;
          }
          if (current) {
            current = UserStore || tmp10;
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
    }
  }, items1);
}
