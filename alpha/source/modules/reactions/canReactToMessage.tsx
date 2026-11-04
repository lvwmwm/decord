// Module ID: 8569
// Function ID: 8570
// Name: canReactToMessage
// Dependencies: [5053, 6843, 5073, 1385, 1072, 8570, 1398, 5060, 504, 2]
// Exports: canReactToMessage, useCanReactToMessage

// Module 8569 (canReactToMessage)
import FlagUtils from "FlagUtils" /* 1398 */;
import CommunicationDisabledUtils from "CommunicationDisabledUtils" /* 5060 */;
import canAddNewReactionsDefault from "canAddNewReactions" /* 8570 */;
import GuildMemberStore from "GuildMemberStore" /* 5053 */;
import GuildVerificationStore from "GuildVerificationStore" /* 6843 */;
import PermissionStore from "PermissionStore" /* 5073 */;
import UserStore from "UserStore" /* 1385 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c9;
let metroImportAll;
let metroImportDefault;
function canReactToMessageInternal(state, getGuildId, items) {
  let obj;
  let obj2;
  [obj, obj2] = items;
  const guildId = getGuildId.getGuildId();
  const currentUser = obj.getCurrentUser();
  let member = null;
  if (null != guildId) {
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    member = null;
    if (null != id) {
      member = obj2.getMember(guildId, currentUser.id);
    }
  }
  let tmp6 = canAddNewReactionsDefault(getGuildId) && !getGuildId.isArchivedLockedThread() && state.state !== metroImportDefault.SEND_FAILED && state.type !== metroImportAll.THREAD_STARTER_MESSAGE;
  if (tmp6) {
    const obj3 = FlagUtils;
    tmp6 = !obj3.hasFlag(state.flags, constants3.EPHEMERAL);
  }
  if (tmp6) {
    const obj4 = CommunicationDisabledUtils;
    tmp6 = !obj4.isMemberCommunicationDisabled(member);
  }
  return tmp6;
}
({ MessageStates: metroImportDefault, MessageTypes: metroImportAll, MessageFlags: c9 } = Constants);
const result = size.fileFinishedImporting("modules/reactions/canReactToMessage.tsx");

export function canReactToMessage(message, channel) {
  const items = [UserStore, GuildMemberStore, GuildVerificationStore, PermissionStore];
  return canReactToMessageInternal(message, channel, items);
}
export function useCanReactToMessage(arg0, arg1) {
  let closure_0;
  _require = arg0;
  let closure_1 = arg1;
  let items = [UserStore, GuildMemberStore, GuildVerificationStore, PermissionStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const items = [UserStore, GuildMemberStore, GuildVerificationStore, PermissionStore];
    return canReactToMessageInternal(closure_0, closure_1, items);
  });
}
