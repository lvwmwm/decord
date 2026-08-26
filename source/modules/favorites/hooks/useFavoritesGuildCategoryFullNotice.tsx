// Module ID: 15543
// Function ID: 15544
// Name: useFavoritesGuildCategoryFullNotice
// Dependencies: [1394, 1429, 676, 589, 9927, 1913, 1236, 3147, 2]
// Exports: default

// Module 15543 (useFavoritesGuildCategoryFullNotice)
import initialize from "initialize" /* 589 */;
import messagesProxyDefault from "messagesProxy" /* 3147 */;
import useFavoritesAccess from "useFavoritesAccess" /* 9927 */;
import closure_3 from "initializeFromUserSettings" /* 1394 */;
import { FAVORITES_AUTO_ADDED_THREADS_CATEGORY_NAME as closure_4 } from "date" /* 1429 */;
import { ChannelTypes } from "ME" /* 676 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildCategoryFullNotice.tsx");

export default function useFavoritesGuildCategoryFullNotice(getGuildId, str) {
  let obj = initialize;
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => autoAddJoinedThreads.autoAddJoinedThreads);
  useFavoritesAccess;
  let tmp6 = null;
  if (stateFromStores) {
    tmp6 = null;
    if (tmp5) {
      tmp6 = null;
      if (null != str) {
        tmp6 = null;
        if (tmpResult.isFavoritesGuildId(getGuildId.getGuildId())) {
          tmp6 = null;
          if (getGuildId.type === ChannelTypes.GUILD_CATEGORY) {
            const formatted = str.trim().toLowerCase();
            tmp6 = null;
            if (formatted === closure_4.toLowerCase()) {
              obj = { label: null, tooltip: null };
              const intl = tmp(1236).intl;
              obj[0] = intl.string(messagesProxyDefault.WsUrMD);
              const intl2 = tmp(1236).intl;
              obj[1] = intl2.string(messagesProxyDefault.dW9Kov);
              tmp6 = obj;
            }
            str = str.trim();
          }
        }
        tmpResult = tmp(1913);
      }
    }
  }
  return tmp6;
};
