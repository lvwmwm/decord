// Module ID: 15954
// Function ID: 15955
// Name: isHomeDrawerChannelMuted
// Dependencies: [4471, 2049, 5017, 504, 2]
// Exports: useIsHomeDrawerChannelMuted

// Module 15954 (isHomeDrawerChannelMuted)
import get_initialized from "get initialized" /* 504 */;
import ChannelRecord from "ChannelRecord" /* 2049 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4471 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5017 */;
import size from "module_2" /* 2 */;

const isThread = ChannelRecord.isThread;
let result = size.fileFinishedImporting("modules/home_drawer/native/isHomeDrawerChannelMuted.tsx");

export const useIsHomeDrawerChannelMuted = function useIsHomeDrawerChannelMuted() {
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
};
