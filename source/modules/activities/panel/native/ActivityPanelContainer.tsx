// Module ID: 15571
// Function ID: 118808
// Dependencies: []

// Module 15571
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
const jsx = arg1(dependencyMap[4]).jsx;
const importAllResult = importAll(dependencyMap[0]);
const memoResult = importAll(dependencyMap[0]).memo(function ActivityPanelContainer() {
  let obj = arg1(dependencyMap[5]);
  const items = [closure_5, closure_3, closure_4];
  let tmp = null;
  if (obj.useStateFromStores(items, () => {
    const connectedActivityLocation = connectedActivityLocation.getConnectedActivityLocation();
    if (null == connectedActivityLocation) {
      return false;
    } else {
      const embeddedActivityLocationChannelId = callback(closure_2[6]).getEmbeddedActivityLocationChannelId(connectedActivityLocation);
      if (null == embeddedActivityLocationChannelId) {
        return false;
      } else {
        const channel = channel.getChannel(embeddedActivityLocationChannelId);
        let type;
        if (null != channel) {
          type = channel.type;
        }
        let tmp6 = type === callback(closure_2[7]).ChannelTypes.GUILD_TEXT;
        if (!tmp6) {
          let isPrivateResult;
          if (null != channel) {
            isPrivateResult = channel.isPrivate();
          }
          let tmp8;
          if (true === isPrivateResult) {
            tmp8 = voiceChannelId.getVoiceChannelId() !== embeddedActivityLocationChannelId;
          }
          tmp6 = tmp8;
        }
        return tmp6;
      }
      const obj2 = callback(closure_2[6]);
    }
  }, [])) {
    obj = { children: jsx(importDefault(dependencyMap[9]), {}) };
    tmp = jsx(importDefault(dependencyMap[8]), obj);
    const tmp5 = importDefault(dependencyMap[8]);
  }
  return tmp;
});
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/activities/panel/native/ActivityPanelContainer.tsx");

export default memoResult;
