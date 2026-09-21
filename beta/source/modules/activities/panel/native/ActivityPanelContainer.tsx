// Module ID: 17469
// Function ID: 17470
// Name: ActivityPanelContainer
// Dependencies: [19, 2041, 2095, 2040, 21, 504, 4385, 1095, 17470, 17479, 2]

// Module 17469 (ActivityPanelContainer)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4385 */;
import ActivityPanelControllerDefault from "ActivityPanelController" /* 17470 */;
import ActivityPanelUIDefault from "ActivityPanelUI" /* 17479 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2095 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2040 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/panel/native/ActivityPanelContainer.tsx");

export default noop.memo(function ActivityPanelContainer() {
  const items = [EmbeddedActivitiesStore, ChannelStore, SelectedChannelStore];
  let tmp2 = null;
  if (obj.useStateFromStores(items, () => {
    connectedActivityLocation = connectedActivityLocation.getConnectedActivityLocation();
    if (null == connectedActivityLocation) {
      return false;
    } else {
      const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
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
      tmp8 = require;
      tmp9 = dependencyMap;
    }
  }, [])) {
    let obj2 = { children: jsx(ActivityPanelUIDefault, {}) };
    tmp2 = jsx(ActivityPanelControllerDefault, { children: jsx(ActivityPanelUIDefault, {}) });
  }
  return tmp2;
});
