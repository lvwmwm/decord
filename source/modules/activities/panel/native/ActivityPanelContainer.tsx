// Module ID: 16098
// Function ID: 16099
// Dependencies: [19, 1391, 1979, 1390, 21, 589, 3938, 692, 16099, 16108, 2]

// Module 16098
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
    obj[0] = jsx(importDefault(16108), {});
    tmp2 = jsx(importDefault(16099), { children: null });
    const tmp5 = importDefault(16099);
  }
  return tmp2;
});
const result = require("handleConnectionOpen").fileFinishedImporting("modules/activities/panel/native/ActivityPanelContainer.tsx");

export default memoResult;
