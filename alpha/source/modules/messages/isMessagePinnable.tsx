// Module ID: 10040
// Function ID: 10041
// Name: isMessagePinnable
// Dependencies: [4901, 1087, 6795, 7346, 2]
// Exports: default

// Module 10040 (isMessagePinnable)
import isSystemMessageDefault from "isSystemMessage" /* 6795 */;
import ThreadHooks from "ThreadHooks" /* 7346 */;
import PermissionStore from "PermissionStore" /* 4901 */;
import Constants from "Constants" /* 1087 */;
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
