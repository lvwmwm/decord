// Module ID: 16830
// Function ID: 16831
// Name: ActivityPanelContainer
// Dependencies: [19, 2045, 2099, 2044, 21, 504, 4458, 1095, 16831, 16840, 2]

// Module 16830 (ActivityPanelContainer)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4458 */;
import ActivityPanelControllerDefault from "ActivityPanelController" /* 16831 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import size from "module_2" /* 2 */;

let channel, connectedActivityLocation;

const jsx = Fragment.jsx;
const memoResult = react.memo(function ActivityPanelContainer() {
  let voiceChannelId;
  const items = [EmbeddedActivitiesStore, ChannelStore, SelectedChannelStore];
  let tmp2 = null;
  const obj = get_initialized;
  if (obj.useStateFromStores(items, () => {
    connectedActivityLocation = connectedActivityLocation.getConnectedActivityLocation();
    if (null == connectedActivityLocation) {
      return false;
    } else {
      const obj2 = embeddedActivityLocationUtils;
      const embeddedActivityLocationChannelId = obj2.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
      const tmp8 = require;
      const tmp9 = dependencyMap;
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
    }
  }, [])) {
    let tmp4 = importDefault;
    ActivityPanelControllerDefault;
    tmp2 = <tmp5>{null}</tmp5>;
  }
  return tmp2;
});
const result = size.fileFinishedImporting("modules/activities/panel/native/ActivityPanelContainer.tsx");

export default memoResult;
