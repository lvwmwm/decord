// Module ID: 11400
// Function ID: 88646
// Name: MAX_MESSAGES_ALLOWED_FOR_GREETING
// Dependencies: [31, 5602, 4349, 3767, 1849, 653, 1355, 10432, 566, 2]
// Exports: useShowConvoStarterInDM

// Module 11400 (MAX_MESSAGES_ALLOWED_FOR_GREETING)
import { useRef } from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import ME from "ME";
import { ChannelFlags } from "set";

let closure_7;
let closure_8;
({ RelationshipTypes: closure_7, UserFlags: closure_8 } = ME);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/messages/useShowConvoStarterInDM.tsx");

export const MAX_MESSAGES_ALLOWED_FOR_GREETING = 25;
export const useShowConvoStarterInDM = function useShowConvoStarterInDM(channel) {
  const _require = channel;
  const dependencyMap = useRef(false);
  useRef = useRef(channel.id);
  let tmp = channel.isDM() && !channel.isSystemDM();
  if (tmp) {
    const rawRecipients = channel.rawRecipients;
    tmp = !rawRecipients.some((bot) => bot.bot);
  }
  let _isNativeReflectConstruct = tmp;
  let recipientId = null;
  if (tmp) {
    recipientId = channel.getRecipientId();
  }
  const strangerDangerWarning = _require(10432).useStrangerDangerWarning(channel.id);
  const hasFlagResult = channel.hasFlag(ChannelFlags.HAS_ONLY_SYSTEM_MESSAGES);
  const obj = _require(10432);
  const items = [recipientId, _isNativeReflectConstruct, strangerDangerWarning, hasFlagResult];
  const items1 = [strangerDangerWarning, tmp, channel.id, recipientId, hasFlagResult];
  return _require(566).useStateFromStores(items, () => {
    if (ref2.current !== user.id) {
      ref.current = false;
      ref2.current = user.id;
    }
    if (null != strangerDangerWarning) {
      return false;
    } else if (tmp) {
      if (tmp.isMessageRequest(user.id)) {
        return false;
      } else {
        if (null != recipientId) {
          if (strangerDangerWarning.getRelationshipType(recipientId) === outer1_7.BLOCKED) {
            return false;
          }
        }
        if (null != recipientId) {
          user = hasFlagResult.getUser(recipientId);
          if (null != user) {
            if (user.hasFlag(outer1_8.PROVISIONAL_ACCOUNT)) {
              return false;
            }
          }
        }
        const messages = recipientId.getMessages(user.id);
        let tmp16 = !messages.hasMoreBefore && !messages.hasMoreAfter;
        if (tmp16) {
          tmp16 = messages.length < 25;
        }
        let current = messages.ready;
        const result = recipientId.hasCurrentUserSentWaveBlockingMessage(user.id);
        if (!current) {
          current = ref.current;
        }
        if (current) {
          let tmp21 = closure_6;
          if (!closure_6) {
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
