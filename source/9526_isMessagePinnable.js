// Module ID: 9526
// Function ID: 74204
// Name: isMessagePinnable
// Dependencies: []
// Exports: default

// Module 9526 (isMessagePinnable)
let closure_3 = importDefault(dependencyMap[0]);
({ ChannelTypes: closure_4, Permissions: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/messages/isMessagePinnable.tsx");

export default function isMessagePinnable(arg0, isSystemDM) {
  let isActiveChannelOrUnarchivableThread = !isSystemDM.isSystemDM();
  if (isActiveChannelOrUnarchivableThread) {
    isActiveChannelOrUnarchivableThread = !importDefault(dependencyMap[2])(arg0);
  }
  let canResult = closure_3.can(constants2.PIN_MESSAGES, isSystemDM);
  if (canResult) {
    canResult = closure_3.can(constants2.READ_MESSAGE_HISTORY, isSystemDM);
  }
  if (isActiveChannelOrUnarchivableThread) {
    if (!canResult) {
      canResult = isSystemDM.isPrivate();
    }
    isActiveChannelOrUnarchivableThread = canResult;
  }
  if (isActiveChannelOrUnarchivableThread) {
    isActiveChannelOrUnarchivableThread = isSystemDM(dependencyMap[3]).getIsActiveChannelOrUnarchivableThread(isSystemDM);
    const obj = isSystemDM(dependencyMap[3]);
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
