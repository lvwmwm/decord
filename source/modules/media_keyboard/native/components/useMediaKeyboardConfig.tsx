// Module ID: 15331
// Function ID: 116646
// Name: useMediaKeyboardConfig
// Dependencies: []
// Exports: default

// Module 15331 (useMediaKeyboardConfig)
let closure_3 = importAll(dependencyMap[0]);
const MediaKeyboardTarget = arg1(dependencyMap[1]).MediaKeyboardTarget;
({ ChannelTypesSets: closure_5, MAX_UPLOAD_COUNT: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/media_keyboard/native/components/useMediaKeyboardConfig.tsx");

export default function useMediaKeyboardConfig(arg0) {
  let channel;
  let context;
  ({ channel, context } = arg0);
  const arg1 = context;
  let importDefault;
  let dependencyMap;
  let React;
  let MediaKeyboardTarget;
  let mediaKeyboardDraftType;
  const tmp2 = arg1(dependencyMap[3]).useCanPostPollsInChannel(channel) && context.target !== MediaKeyboardTarget.COMMAND;
  importDefault = tmp2;
  const tmp3 = importDefault(dependencyMap[4])(channel);
  dependencyMap = tmp3;
  const obj = arg1(dependencyMap[3]);
  let canStartThread = arg1(dependencyMap[5]).useCanStartThread(channel);
  if (canStartThread) {
    const GUILD_THREADS_ONLY = mediaKeyboardDraftType.GUILD_THREADS_ONLY;
    canStartThread = !GUILD_THREADS_ONLY.has(channel.type);
  }
  if (canStartThread) {
    canStartThread = !channel.isThread();
  }
  if (canStartThread) {
    canStartThread = !tmp;
  }
  React = canStartThread;
  const obj2 = arg1(dependencyMap[5]);
  const tmp6 = arg1(dependencyMap[6]).useIsAppLauncherEnabled(channel.id) && context.target !== MediaKeyboardTarget.COMMAND;
  MediaKeyboardTarget = tmp6;
  const obj3 = arg1(dependencyMap[6]);
  mediaKeyboardDraftType = arg1(dependencyMap[7]).getMediaKeyboardDraftType(context.target);
  const items = [context, tmp2, tmp3, mediaKeyboardDraftType, canStartThread, tmp6];
  return React.useMemo(() => {
    const target = context.target;
    if (target !== tmp6.CHAT) {
      if (target !== tmp6.COMMAND) {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error = new Error("MediaKeyboard does not support context target " + target);
        throw error;
      }
    }
    let fileTypes;
    if (target === tmp6.COMMAND) {
      if (context.option.type === context(context[8]).ApplicationCommandOptionType.ATTACHMENT) {
        fileTypes = context.option.fileTypes;
      }
    }
    const obj = {};
    let num2 = 1;
    if (target === tmp6.CHAT) {
      num2 = closure_6;
    }
    obj.uploadLimit = num2;
    obj.disableWhenReachedLimit = target === tmp6.CHAT;
    let tmp7;
    if (target !== tmp6.CHAT) {
      const items = [context.option.name];
      tmp7 = items;
    }
    obj.includedUploadIds = tmp7;
    obj.fileTypes = fileTypes;
    obj.canPostPolls = tmp2;
    obj.canStartThreads = canStartThread;
    obj.isAppLauncherEnabled = tmp6;
    obj.uploadDisabled = tmp3;
    obj.draftType = mediaKeyboardDraftType;
    return obj;
  }, items);
};
