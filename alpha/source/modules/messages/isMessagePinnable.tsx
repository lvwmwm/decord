// Module ID: 9904
// Function ID: 9905
// Name: isMessagePinnable
// Dependencies: [4806, 1085, 6302, 7190, 2]
// Exports: default

// Module 9904 (isMessagePinnable)
import isSystemMessageDefault from "isSystemMessage" /* 6302 */;
import ThreadHooks from "ThreadHooks" /* 7190 */;
import PermissionStore from "PermissionStore" /* 4806 */;
import Constants from "Constants" /* 1085 */;
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
