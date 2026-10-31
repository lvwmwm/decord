// Module ID: 12644
// Function ID: 12645
// Name: ConjureMentionText
// Dependencies: [19, 1383, 21, 504, 5068, 12641, 12634, 12485, 2]
// Exports: default

// Module 12644 (ConjureMentionText)
import UserUtils from "UserUtils" /* 5068 */;
import ConjureFileMentionDefault from "ConjureFileMention" /* 12485 */;
import conjureMentions from "conjureMentions" /* 12634 */;
import ConjureSelectedMentionDefault from "ConjureSelectedMention" /* 12641 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1383 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
function ConjureUserMention(userId) {
  userId = userId.userId;
  const variant = userId.variant;
  let obj = userId(504);
  const items = [UserStore];
  const items1 = [userId];
  let stateFromStores = obj.useStateFromStores(items, () => {
    const obj = UserUtils;
    return obj.getName(UserStore.getUser(userId));
  }, items1);
  const tmp2 = closure_5;
  const tmp3 = ConjureSelectedMentionDefault;
  if (stateFromStores == null) {
    stateFromStores = userId;
  }
  const obj2 = { label: "@" + stateFromStores, variant };
  return tmp2(tmp3, obj2);
}
({ jsx: hasOwnProperty, Fragment: metroRequire } = Fragment);
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureMentionText.tsx");

export default function ConjureMentionText(text) {
  text = text.text;
  require = text;
  const variant = text.variant;
  let obj = conjureMentions;
  const requestConjureMentionedUsers = obj.useRequestConjureMentionedUsers(text);
  const items = [text];
  const memo = react.useMemo(() => {
    const obj = conjureMentions;
    return obj.splitConjureMentions(require);
  }, items);
  let obj2 = {
    children: memo.map((kind, index) => {
      if ("text" === kind.kind) {
        text = kind.text;
      } else if ("file" === kind.kind) {
        const _HermesInternal2 = HermesInternal;
        const obj2 = { attachmentId: kind.attachmentId, variant };
        const tmp8 = ConjureFileMentionDefault;
        text = hasOwnProperty(tmp8, obj2, "" + index + "-" + kind.attachmentId);
      } else {
        const _HermesInternal = HermesInternal;
        const obj = { userId: kind.userId, variant };
        text = hasOwnProperty(ConjureUserMention, obj, "" + index + "-" + kind.userId);
      }
      return text;
    })
  };
  return closure_5(closure_6, obj2);
};
