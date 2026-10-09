// Module ID: 11919
// Function ID: 11920
// Name: useShowConvoStarterInDM
// Dependencies: [19, 6062, 5429, 4719, 1390, 1085, 2071, 558, 576, 10349, 504, 2]

// Module 11919 (useShowConvoStarterInDM)
import react from "react" /* 19 */;
import ChannelConstants from "ChannelConstants" /* 2071 */;
import MessageRequestStore_mod from "MessageRequestStore" /* 6062 */;
import MessageStore_mod from "MessageStore" /* 5429 */;
import RelationshipStore from "RelationshipStore" /* 4719 */;
import UserStore_mod from "UserStore" /* 1390 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap;

let metroImportAll;
let metroImportDefault;
let useRef = react.useRef;
let MessageRequestStore = MessageRequestStore_mod;
let MessageStore = MessageStore_mod;
let UserStore = UserStore_mod;
({ RelationshipTypes: metroImportDefault, UserFlags: metroImportAll } = Constants);
const ChannelFlags = ChannelConstants.ChannelFlags;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useShowConvoStarterInDM(id) {
  let closure_3;
  let closure_4;
  let closure_6;
  let ref;
  let ref2;
  let tmp4;
  const _require = id;
  const tmp = _require;
  const tmp2 = dependencyMap;
  const obj = require("react");
  const cResult = obj.c(15);
  dependencyMap = useRef(false);
  useRef = useRef(id.id);
  if (cResult[0] !== id) {
    let tmp5 = id.isDM() && !id.isSystemDM();
    if (tmp5) {
      const rawRecipients = id.rawRecipients;
      tmp5 = !rawRecipients.some((bot) => bot.bot);
    }
    cResult[0] = id;
    cResult[1] = tmp5;
    tmp4 = tmp5;
  } else {
    tmp4 = cResult[1];
  }
  MessageRequestStore = tmp4;
  if (cResult[2] === id) {
    let tmp6;
    let tmp9;
    let tmp13;
    if (cResult[3] === tmp4) {
      tmp6 = cResult[4];
    }
    MessageStore = tmp6;
    const tmpResult = tmp(10349);
    const strangerDangerWarning = tmpResult.useStrangerDangerWarning(id.id);
    if (cResult[5] !== id) {
      let tmp10 = ChannelFlags;
      const hasFlagResult = id.hasFlag(ChannelFlags.HAS_ONLY_SYSTEM_MESSAGES);
      cResult[5] = id;
      cResult[6] = hasFlagResult;
      tmp9 = hasFlagResult;
    } else {
      tmp9 = cResult[6];
    }
    UserStore = tmp9;
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [MessageStore, , , ];
      let tmp15 = MessageRequestStore;
      items[1] = MessageRequestStore;
      items[2] = strangerDangerWarning;
      items[3] = UserStore;
      cResult[7] = items;
      tmp13 = items;
    } else {
      tmp13 = cResult[7];
    }
    if (cResult[8] === id.id) {
      if (cResult[9] === tmp4) {
        if (cResult[10] === tmp9) {
          if (cResult[11] === strangerDangerWarning) {
            let tmp18;
            let tmp19;
            if (cResult[12] === tmp6) {
              tmp18 = cResult[13];
              tmp19 = cResult[14];
            }
            const tmpResult2 = tmp(504);
            return tmpResult2.useStateFromStores(tmp13, tmp18, tmp19);
          }
        }
      }
    }
    class O {
      constructor() {
        if (ref2.current !== id.id) {
          ref.current = false;
          tmp.current = id.id;
        }
        if (null != strangerDangerWarning) {
          return false;
        } else {
          const tmp15 = closure_3;
          if (tmp15) {
            if (MessageRequestStore.isMessageRequest(id.id)) {
              return false;
            } else {
              if (null != closure_4) {
                if (RelationshipStore.getRelationshipType(closure_4) === metroImportDefault.BLOCKED) {
                  return false;
                }
              }
              if (null != closure_4) {
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
                current = closure_6 || tmp10;
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
      }
    }
    const items1 = [strangerDangerWarning, tmp4, id.id, tmp6, tmp9];
    cResult[8] = id.id;
    cResult[9] = tmp4;
    cResult[10] = tmp9;
    cResult[11] = strangerDangerWarning;
    cResult[12] = tmp6;
    cResult[13] = O;
    cResult[14] = items1;
    tmp19 = items1;
    tmp18 = O;
  }
  let recipientId = null;
  if (tmp4) {
    recipientId = id.getRecipientId();
  }
  cResult[2] = id;
  cResult[3] = tmp4;
  cResult[4] = recipientId;
  tmp6 = recipientId;
}) : (function useShowConvoStarterInDM(id) {
  let ref;
  let ref2;
  const _require = id;
  dependencyMap = useRef(false);
  useRef = useRef(id.id);
  let tmp = id.isDM() && !id.isSystemDM();
  if (tmp) {
    const rawRecipients = id.rawRecipients;
    tmp = !rawRecipients.some((bot) => bot.bot);
  }
  let closure_3 = tmp;
  let recipientId = null;
  if (tmp) {
    recipientId = id.getRecipientId();
  }
  const obj = require("useStrangerDangerWarning");
  const strangerDangerWarning = obj.useStrangerDangerWarning(id.id);
  const hasFlagResult = id.hasFlag(ChannelFlags.HAS_ONLY_SYSTEM_MESSAGES);
  UserStore = hasFlagResult;
  let obj2 = require("get initialized");
  const items = [recipientId, closure_3, strangerDangerWarning, UserStore];
  const items1 = [strangerDangerWarning, tmp, id.id, recipientId, hasFlagResult];
  return obj2.useStateFromStores(items, () => {
    if (ref2.current !== id.id) {
      ref.current = false;
      tmp.current = id.id;
    }
    if (null != strangerDangerWarning) {
      return false;
    } else {
      const tmp15 = closure_3;
      if (tmp15) {
        if (MessageRequestStore.isMessageRequest(id.id)) {
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
});
let result = size.fileFinishedImporting("modules/messages/useShowConvoStarterInDM.tsx");

export const MAX_MESSAGES_ALLOWED_FOR_GREETING = 25;
export const useShowConvoStarterInDM = tmp3;
