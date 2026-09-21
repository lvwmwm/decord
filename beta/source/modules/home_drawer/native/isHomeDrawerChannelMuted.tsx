// Module ID: 16659
// Function ID: 16660
// Name: isHomeDrawerChannelMuted
// Dependencies: [4401, 2049, 4939, 558, 568, 504, 2]

// Module 16659 (isHomeDrawerChannelMuted)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4401 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4939 */;

require = fn;
const isThread = fn(2049).isThread;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/home_drawer/native/isHomeDrawerChannelMuted.tsx");

export const useIsHomeDrawerChannelMuted = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [JoinedThreadsStore, UserGuildSettingsStore];
    const fn = function s() {
      return (type) => {
        const tmp = closure_1_3(type.type);
        if (tmp) {
          if (muted.isMuted(type.id)) {
            return true;
          }
        }
        const tmp3 = tmp ? type.parent_id : type.id;
        let result = null != tmp3;
        if (result) {
          result = guildOrCategoryOrChannelMuted.isGuildOrCategoryOrChannelMuted(type.guild_id, tmp3);
        }
        return result;
      };
    };
    const items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp4 = items;
    tmp5 = fn;
    tmp6 = items1;
  } else {
    [tmp4, tmp5, tmp6] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5, tmp6, initialize.statesWillNeverBeEqual);
}) : (() => {
  const items = [JoinedThreadsStore, UserGuildSettingsStore];
  return initialize.useStateFromStores(items, () => (type) => {
    const tmp = closure_1_3(type.type);
    if (tmp) {
      if (muted.isMuted(type.id)) {
        return true;
      }
    }
    const tmp3 = tmp ? type.parent_id : type.id;
    let result = null != tmp3;
    if (result) {
      result = guildOrCategoryOrChannelMuted.isGuildOrCategoryOrChannelMuted(type.guild_id, tmp3);
    }
    return result;
  }, [], initialize.statesWillNeverBeEqual);
});
