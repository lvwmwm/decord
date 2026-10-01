// Module ID: 16296
// Function ID: 16297
// Name: useMediaKeyboardConfig
// Dependencies: [19, 1609, 1074, 7180, 11718, 6687, 8789, 10098, 1979, 2]
// Exports: default

// Module 16296 (useMediaKeyboardConfig)
import MediaKeyboardConstants from "MediaKeyboardConstants" /* 1609 */;
import Server from "Server" /* 1979 */;
import useUploadDisabledDefault from "useUploadDisabled" /* 11718 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

let hasOwnProperty;
let metroRequire;
let MediaKeyboardTarget = MediaKeyboardConstants.MediaKeyboardTarget;
({ ChannelTypesSets: hasOwnProperty, MAX_UPLOAD_COUNT: metroRequire } = Constants);
const result = size.fileFinishedImporting("modules/media_keyboard/native/components/useMediaKeyboardConfig.tsx");

export default function useMediaKeyboardConfig(arg0) {
  let canPostPolls;
  let channel;
  let context;
  let isAppLauncherEnabled;
  let uploadDisabled;
  ({ channel, context } = arg0);
  MediaKeyboardTarget = undefined;
  let mediaKeyboardDraftType;
  const tmp = context.target === MediaKeyboardTarget.COMMAND;
  let obj = context(7180);
  const tmp4 = obj.useCanPostPollsInChannel(channel) && !tmp;
  importDefault = tmp4;
  const tmp5 = useUploadDisabledDefault(channel);
  dependencyMap = tmp5;
  const tmp2Result = context(6687);
  let canStartThread = tmp2Result.useCanStartThread(channel);
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
  const tmp2Result3 = context(8789);
  const tmp8 = tmp2Result3.useIsAppLauncherEnabled(channel.id) && !tmp;
  MediaKeyboardTarget = tmp8;
  const tmp2Result4 = context(10098);
  mediaKeyboardDraftType = tmp2Result4.getMediaKeyboardDraftType(context.target);
  let items = [context, tmp4, tmp5, mediaKeyboardDraftType, canStartThread, tmp8];
  return canStartThread.useMemo(function() {
    let tmp6;
    const target = context.target;
    if (target !== MediaKeyboardTarget.CHAT) {
      if (target !== MediaKeyboardTarget.COMMAND) {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const self = this;
        const self2 = this;
        const error = new Error("MediaKeyboard does not support context target " + target);
        throw error;
      }
    }
    let fileTypes;
    if (target === MediaKeyboardTarget.COMMAND) {
      if (context.option.type === Server.ApplicationCommandOptionType.ATTACHMENT) {
        fileTypes = tmp.option.fileTypes;
      }
    }
    let num = 1;
    if (target === MediaKeyboardTarget.CHAT) {
      num = metroRequire;
    }
    const obj = { uploadLimit: num, disableWhenReachedLimit: target === MediaKeyboardTarget.CHAT, includedUploadIds: tmp6, fileTypes, canPostPolls, canStartThreads: canStartThread, isAppLauncherEnabled, uploadDisabled, draftType: mediaKeyboardDraftType };
    tmp6 = undefined;
    if (target !== MediaKeyboardTarget.CHAT) {
      const items = [context.option.name];
      tmp6 = items;
    }
    return obj;
  }, items);
};
