// Module ID: 18336
// Function ID: 18337
// Name: isHomeDrawerChannelMuted
// Dependencies: [4943, 4862, 6769, 504, 2]
// Exports: useIsHomeDrawerChannelMuted

// Module 18336 (isHomeDrawerChannelMuted)
import get_initialized from "get initialized" /* 504 */;
import ChannelRecord from "ChannelRecord" /* 4862 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4943 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6769 */;
import size from "module_2" /* 2 */;

const isThread = ChannelRecord.isThread;
let result = size.fileFinishedImporting("modules/home_drawer/native/isHomeDrawerChannelMuted.tsx");

export function useIsHomeDrawerChannelMuted() {
  const items = [JoinedThreadsStore, UserGuildSettingsStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => {
    let guildOrCategoryOrChannelMuted;
    let muted;
    return (type) => {
      const tmp = closure_1_3(type.type);
      if (tmp) {
        if (muted.isMuted(type.id)) {
          return true;
        }
      }
      const tmp3 = tmp ? type.parent_id : type.id;
      const result = null != tmp3 && guildOrCategoryOrChannelMuted.isGuildOrCategoryOrChannelMuted(type.guild_id, tmp3);
      return result;
    };
  }, [], get_initialized.statesWillNeverBeEqual);
}
