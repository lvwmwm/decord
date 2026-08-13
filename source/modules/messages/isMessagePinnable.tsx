// Module ID: 11101
// Function ID: 11102
// Name: isMessagePinnable
// Dependencies: [3989, 676, 5931, 5930, 2]
// Exports: default

// Module 11101 (isMessagePinnable)
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import ME from "ME";

let c4;
let c5;
const require = arg1;
({ ChannelTypes: c4, Permissions: c5 } = ME);
const result = require("isSystemMessage").fileFinishedImporting("modules/messages/isMessagePinnable.tsx");

export default function isMessagePinnable(arg0, isSystemDM) {
  const isSystemDMResult = isSystemDM.isSystemDM();
  let isActiveChannelOrUnarchivableThread = !isSystemDMResult;
  if (!isSystemDMResult) {
    isActiveChannelOrUnarchivableThread = !importDefault(5931)(arg0);
  }
  let isPrivateResult = getUncachedChannelPermissions.can(constants2.PIN_MESSAGES, isSystemDM) && getUncachedChannelPermissions.can(constants2.READ_MESSAGE_HISTORY, isSystemDM);
  if (isActiveChannelOrUnarchivableThread) {
    if (!isPrivateResult) {
      isPrivateResult = isSystemDM.isPrivate();
    }
    isActiveChannelOrUnarchivableThread = isPrivateResult;
  }
  if (isActiveChannelOrUnarchivableThread) {
    isActiveChannelOrUnarchivableThread = require(5930) /* useCanUnarchiveThread */.getIsActiveChannelOrUnarchivableThread(isSystemDM);
    const obj2 = require(5930) /* useCanUnarchiveThread */;
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
