// Module ID: 16081
// Function ID: 16082
// Dependencies: [19, 1372, 1960, 1371, 21, 589, 3919, 692, 16082, 16091, 2]

// Module 16081
import ensureGuildLoaded from "ensureGuildLoaded";
import handleConnectionOpen from "handleConnectionOpen";
import participantFromServer from "participantFromServer";
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const memoResult = require("noop").memo(function ActivityPanelContainer() {
  let obj = require(589) /* initialize */;
  const items = [participantFromServer, ensureGuildLoaded, handleConnectionOpen];
  let tmp2 = null;
  if (obj.useStateFromStores(items, () => {
    connectedActivityLocation = connectedActivityLocation.getConnectedActivityLocation();
    if (null == connectedActivityLocation) {
      return false;
    } else {
      const embeddedActivityLocationChannelId = callback(table[6]).getEmbeddedActivityLocationChannelId(connectedActivityLocation);
      if (null == embeddedActivityLocationChannelId) {
        return false;
      } else {
        channel = channel.getChannel(embeddedActivityLocationChannelId);
        let type;
        if (channel != null) {
          type = channel.type;
        }
        let tmp4 = type === tmp8(tmp9[7]).ChannelTypes.GUILD_TEXT;
        if (!tmp4) {
          let isPrivateResult;
          if (channel != null) {
            isPrivateResult = channel.isPrivate();
          }
          let tmp6;
          if (true === isPrivateResult) {
            tmp6 = voiceChannelId.getVoiceChannelId() !== embeddedActivityLocationChannelId;
          }
          tmp4 = tmp6;
        }
        return tmp4;
      }
      const obj2 = callback(table[6]);
      tmp8 = callback;
      tmp9 = table;
    }
  }, [])) {
    obj = { children: null };
    obj[0] = jsx(importDefault(16091), {});
    tmp2 = jsx(importDefault(16082), { children: null });
    const tmp5 = importDefault(16082);
  }
  return tmp2;
});
const result = require("handleConnectionOpen").fileFinishedImporting("modules/activities/panel/native/ActivityPanelContainer.tsx");

export default memoResult;
