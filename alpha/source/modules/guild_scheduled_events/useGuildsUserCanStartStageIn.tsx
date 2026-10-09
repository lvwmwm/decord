// Module ID: 8539
// Function ID: 8540
// Name: useGuildsUserCanStartStageIn
// Dependencies: [4707, 4709, 2072, 558, 576, 504, 2]

// Module 8539 (useGuildsUserCanStartStageIn)
import GuildChannelStore2 from "GuildChannelStore" /* 4707 */;
import PermissionStore from "PermissionStore" /* 4709 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const GuildChannelStore = GuildChannelStore2;

const GUILD_VOCAL_CHANNELS_KEY = GuildChannelStore2.GUILD_VOCAL_CHANNELS_KEY;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useChannelsUserCanStartStageIn(id) {
  let first;
  let tmp8;
  let tmp9;
  let obj = id(576);
  const cResult = obj.c(4);
  const tmp = id;
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  if (id == null) {
    id = null;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildChannelStore, PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id) {
    class S {
      constructor() {
        arr = closure_2.getChannels(c0)[GUILD_VOCAL_CHANNELS_KEY];
        return arr.reduce(() => { /* body not rendered: F140766 */ }, []);
      }
    }
    const items1 = [id];
    cResult[1] = id;
    cResult[2] = S;
    cResult[3] = items1;
    tmp9 = items1;
    tmp8 = S;
  } else {
    class S {
      constructor() {
        arr = closure_2.getChannels(c0)[GUILD_VOCAL_CHANNELS_KEY];
        return arr.reduce(() => { /* body not rendered: F140766 */ }, []);
      }
    }
    tmp9 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStoresArray(first, tmp8, tmp9);
}) : (function useChannelsUserCanStartStageIn(id) {
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  if (id == null) {
    id = null;
  }
  let obj = id(504);
  const items = [GuildChannelStore, PermissionStore];
  const items1 = [id];
  return obj.useStateFromStoresArray(items, () => {
    const arr = GuildChannelStore.getChannels(id)[GUILD_VOCAL_CHANNELS_KEY];
    return arr.reduce((arr, channel) => {
      channel = channel.channel;
      if (channel.isGuildStageVoice()) {
        const channel2 = channel.channel;
        const obj = closure_1_4;
        if (closure_1_4 !== undefined) {
          const canResult = channel2.isGuildStageVoice() && obj.can(id(closure_1_1[2]).MODERATE_STAGE_CHANNEL_PERMISSIONS, channel2);
          if (canResult) {
            arr.push(channel);
          }
        }
      }
      return arr;
    }, []);
  }, items1);
});
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useGuildsUserCanStartStageIn.tsx");

export const useChannelsUserCanStartStageIn = tmp2;
