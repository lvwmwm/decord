// Module ID: 11596
// Function ID: 11597
// Name: isMessagePinnable
// Dependencies: [4120, 673, 7210, 7209, 2]
// Exports: default

// Module 11596 (isMessagePinnable)
import useCanStartPrivateThread from "useCanStartPrivateThread" /* 7209 */;
import isSystemMessageDefault from "isSystemMessage" /* 7210 */;
import closure_3 from "getUncachedChannelPermissions" /* 4120 */;
import ME from "ME" /* 673 */;

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
    isActiveChannelOrUnarchivableThread = useCanStartPrivateThread.getIsActiveChannelOrUnarchivableThread(isSystemDM);
    const obj2 = useCanStartPrivateThread;
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
