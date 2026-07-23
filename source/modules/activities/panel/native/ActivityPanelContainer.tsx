// Module ID: 15688
// Function ID: 120981
// Dependencies: [31, 1348, 1906, 1347, 33, 566, 3748, 669, 15689, 15698, 2]

// Module 15688
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
const memoResult = require("result").memo(function ActivityPanelContainer() {
  let obj = require(566) /* initialize */;
  const items = [_createForOfIteratorHelperLoose, _isNativeReflectConstruct, closure_4];
  let tmp = null;
  if (obj.useStateFromStores(items, () => {
    const connectedActivityLocation = outer1_5.getConnectedActivityLocation();
    if (null == connectedActivityLocation) {
      return false;
    } else {
      const embeddedActivityLocationChannelId = outer1_0(outer1_2[6]).getEmbeddedActivityLocationChannelId(connectedActivityLocation);
      if (null == embeddedActivityLocationChannelId) {
        return false;
      } else {
        const channel = outer1_3.getChannel(embeddedActivityLocationChannelId);
        let type;
        if (null != channel) {
          type = channel.type;
        }
        let tmp6 = type === outer1_0(outer1_2[7]).ChannelTypes.GUILD_TEXT;
        if (!tmp6) {
          let isPrivateResult;
          if (null != channel) {
            isPrivateResult = channel.isPrivate();
          }
          let tmp8;
          if (true === isPrivateResult) {
            tmp8 = outer1_4.getVoiceChannelId() !== embeddedActivityLocationChannelId;
          }
          tmp6 = tmp8;
        }
        return tmp6;
      }
      const obj2 = outer1_0(outer1_2[6]);
    }
  }, [])) {
    obj = { children: jsx(importDefault(15698), {}) };
    tmp = jsx(importDefault(15689), { children: jsx(importDefault(15698), {}) });
    const tmp5 = importDefault(15689);
  }
  return tmp;
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/activities/panel/native/ActivityPanelContainer.tsx");

export default memoResult;
