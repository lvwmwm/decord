// Module ID: 12128
// Function ID: 12129
// Name: isMessagePinnable
// Dependencies: [4845, 1071, 6666, 6893, 2]
// Exports: default

// Module 12128 (isMessagePinnable)
import isSystemMessageDefault from "isSystemMessage" /* 6666 */;
import ThreadHooks from "ThreadHooks" /* 6893 */;
import PermissionStore from "PermissionStore" /* 4845 */;
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ ChannelTypes: closure_4, Permissions: hasOwnProperty } = Constants);
const result = size.fileFinishedImporting("modules/messages/isMessagePinnable.tsx");

export default function isMessagePinnable(arg0, isSystemDM) {
  let isActiveChannelOrUnarchivableThread = !isSystemDM.isSystemDM();
  isSystemDM.isSystemDM();
  if (isActiveChannelOrUnarchivableThread) {
    isActiveChannelOrUnarchivableThread = !isSystemMessageDefault(arg0);
  }
  let isPrivateResult = PermissionStore.can(hasOwnProperty.PIN_MESSAGES, isSystemDM) && PermissionStore.can(hasOwnProperty.READ_MESSAGE_HISTORY, isSystemDM);
  if (isActiveChannelOrUnarchivableThread) {
    if (!isPrivateResult) {
      isPrivateResult = isSystemDM.isPrivate();
    }
    isActiveChannelOrUnarchivableThread = isPrivateResult;
  }
  if (isActiveChannelOrUnarchivableThread) {
    const obj2 = ThreadHooks;
    isActiveChannelOrUnarchivableThread = obj2.getIsActiveChannelOrUnarchivableThread(isSystemDM);
  }
  if (isActiveChannelOrUnarchivableThread) {
    isActiveChannelOrUnarchivableThread = isSystemDM.type !== constants.GUILD_VOICE;
  }
  if (isActiveChannelOrUnarchivableThread) {
    isActiveChannelOrUnarchivableThread = isSystemDM.type !== constants.GUILD_STAGE_VOICE;
  }
  if (isActiveChannelOrUnarchivableThread) {
    isActiveChannelOrUnarchivableThread = isSystemDM.type !== constants.MEDIA_THREAD;
  }
  return isActiveChannelOrUnarchivableThread;
};
