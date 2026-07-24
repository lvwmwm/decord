// Module ID: 15495
// Function ID: 119142
// Name: useMediaKeyboardConfig
// Dependencies: [31, 1552, 653, 7002, 11371, 5650, 8005, 9686, 1881, 2]
// Exports: default

// Module 15495 (useMediaKeyboardConfig)
import result from "result";
import { MediaKeyboardTarget } from "DRAG_HANDLE";
import ME from "ME";

let closure_5;
let closure_6;
const require = arg1;
({ ChannelTypesSets: closure_5, MAX_UPLOAD_COUNT: closure_6 } = ME);
const result = require("ME").fileFinishedImporting("modules/media_keyboard/native/components/useMediaKeyboardConfig.tsx");

export default function useMediaKeyboardConfig(arg0) {
  let channel;
  let context;
  ({ channel, context } = arg0);
  let importDefault;
  let dependencyMap;
  let canStartThread;
  let MediaKeyboardTarget;
  let mediaKeyboardDraftType;
  const tmp2 = context(7002).useCanPostPollsInChannel(channel) && context.target !== MediaKeyboardTarget.COMMAND;
  importDefault = tmp2;
  const tmp3 = importDefault(11371)(channel);
  dependencyMap = tmp3;
  let obj = context(7002);
  canStartThread = context(5650).useCanStartThread(channel);
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
  const obj2 = context(5650);
  const tmp6 = context(8005).useIsAppLauncherEnabled(channel.id) && context.target !== MediaKeyboardTarget.COMMAND;
  MediaKeyboardTarget = tmp6;
  const obj3 = context(8005);
  mediaKeyboardDraftType = context(9686).getMediaKeyboardDraftType(context.target);
  let items = [context, tmp2, tmp3, mediaKeyboardDraftType, canStartThread, tmp6];
  return canStartThread.useMemo(() => {
    const target = context.target;
    if (target !== _undefined2.CHAT) {
      if (target !== _undefined2.COMMAND) {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error = new Error("MediaKeyboard does not support context target " + target);
        throw error;
      }
    }
    let fileTypes;
    if (target === _undefined2.COMMAND) {
      if (context.option.type === context(_undefined[8]).ApplicationCommandOptionType.ATTACHMENT) {
        fileTypes = context.option.fileTypes;
      }
    }
    const obj = {};
    let num2 = 1;
    if (target === _undefined2.CHAT) {
      num2 = outer1_6;
    }
    obj.uploadLimit = num2;
    obj.disableWhenReachedLimit = target === _undefined2.CHAT;
    let tmp7;
    if (target !== _undefined2.CHAT) {
      const items = [context.option.name];
      tmp7 = items;
    }
    obj.includedUploadIds = tmp7;
    obj.fileTypes = fileTypes;
    obj.canPostPolls = c1;
    obj.canStartThreads = canStartThread;
    obj.isAppLauncherEnabled = _undefined2;
    obj.uploadDisabled = _undefined;
    obj.draftType = mediaKeyboardDraftType;
    return obj;
  }, items);
};
