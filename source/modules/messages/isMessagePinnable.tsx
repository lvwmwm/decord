// Module ID: 9575
// Function ID: 74494
// Name: isMessagePinnable
// Dependencies: [3758, 653, 5651, 5650, 2]
// Exports: default

// Module 9575 (isMessagePinnable)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";

let closure_4;
let closure_5;
const require = arg1;
({ ChannelTypes: closure_4, Permissions: closure_5 } = ME);
const result = require("isSystemMessage").fileFinishedImporting("modules/messages/isMessagePinnable.tsx");

export default function isMessagePinnable(arg0, isSystemDM) {
  let isActiveChannelOrUnarchivableThread = !isSystemDM.isSystemDM();
  if (isActiveChannelOrUnarchivableThread) {
    isActiveChannelOrUnarchivableThread = !importDefault(5651)(arg0);
  }
  let canResult = _isNativeReflectConstruct.can(constants2.PIN_MESSAGES, isSystemDM);
  if (canResult) {
    canResult = _isNativeReflectConstruct.can(constants2.READ_MESSAGE_HISTORY, isSystemDM);
  }
  if (isActiveChannelOrUnarchivableThread) {
    if (!canResult) {
      canResult = isSystemDM.isPrivate();
    }
    isActiveChannelOrUnarchivableThread = canResult;
  }
  if (isActiveChannelOrUnarchivableThread) {
    isActiveChannelOrUnarchivableThread = require(5650) /* useCanStartPublicThread */.getIsActiveChannelOrUnarchivableThread(isSystemDM);
    const obj = require(5650) /* useCanStartPublicThread */;
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
