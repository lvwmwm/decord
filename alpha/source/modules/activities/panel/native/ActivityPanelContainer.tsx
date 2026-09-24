// Module ID: 17573
// Function ID: 17574
// Name: ActivityPanelContainer
// Dependencies: [19, 2044, 2098, 2043, 21, 504, 4453, 1095, 17574, 17583, 2]

// Module 17573 (ActivityPanelContainer)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4453 */;
import ActivityPanelControllerDefault from "ActivityPanelController" /* 17574 */;
import ActivityPanelUIDefault from "ActivityPanelUI" /* 17583 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2044 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2098 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2043 */;

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
