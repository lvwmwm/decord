// Module ID: 10893
// Function ID: 10894
// Name: isMessagePinnable
// Dependencies: [4024, 676, 5390, 7272, 2]
// Exports: default

// Module 10893 (isMessagePinnable)
import isSystemMessageDefault from "isSystemMessage" /* 5390 */;
import useCanUnarchiveThread from "useCanUnarchiveThread" /* 7272 */;
import closure_3 from "getUncachedChannelPermissions" /* 4024 */;
import ME from "ME" /* 676 */;

require = arg1;
({ ChannelTypes: c4, Permissions: c5 } = ME);
const result = require("set").fileFinishedImporting("modules/messages/isMessagePinnable.tsx");

export default function isMessagePinnable(arg0, isSystemDM) {
  const isSystemDMResult = isSystemDM.isSystemDM();
  let isActiveChannelOrUnarchivableThread = !isSystemDMResult;
  if (!isSystemDMResult) {
    isActiveChannelOrUnarchivableThread = !isSystemMessageDefault(arg0);
  }
  let isPrivateResult = closure_3.can(constants2.PIN_MESSAGES, isSystemDM) && closure_3.can(constants2.READ_MESSAGE_HISTORY, isSystemDM);
  if (isActiveChannelOrUnarchivableThread) {
    if (!isPrivateResult) {
      isPrivateResult = isSystemDM.isPrivate();
    }
    isActiveChannelOrUnarchivableThread = isPrivateResult;
  }
  if (isActiveChannelOrUnarchivableThread) {
    isActiveChannelOrUnarchivableThread = useCanUnarchiveThread.getIsActiveChannelOrUnarchivableThread(isSystemDM);
    const obj2 = useCanUnarchiveThread;
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
