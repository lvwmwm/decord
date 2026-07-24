// Module ID: 14982
// Function ID: 114193
// Name: useCallActivityData
// Dependencies: [31, 1347, 4149, 3767, 33, 14983, 14995, 14996, 624, 14973, 2]
// Exports: default

// Module 14982 (useCallActivityData)
import "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";

const require = arg1;
function useCallActivityData(channelId) {
  const _require = channelId;
  const items = [_createForOfIteratorHelperLoose, _isNativeReflectConstruct, closure_5];
  const items1 = [channelId];
  return _require(624).useStateFromStoresObject(items, () => {
    if (null == closure_0) {
      return {};
    } else {
      const allApplicationStreamsForChannel = outer1_4.getAllApplicationStreamsForChannel(closure_0);
      if (allApplicationStreamsForChannel.length > 0) {
        const found = allApplicationStreamsForChannel.find((ownerId) => outer2_5.isFriend(ownerId.ownerId));
        if (null != found) {
          let obj = { stream: found };
          return obj;
        }
      }
      const embeddedActivitiesForChannel = outer1_3.getEmbeddedActivitiesForChannel(closure_0);
      const tmp7 = outer1_1(outer1_2[9])(embeddedActivitiesForChannel);
      if (null != tmp7) {
        obj = { activity: tmp7 };
      } else if (tmp10) {
        const obj1 = { stream: allApplicationStreamsForChannel[0] };
        obj = obj1;
      } else {
        obj = {};
      }
      return obj;
    }
  }, items1);
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardUnifiedVC.tsx");

export default function HappeningNowCardUnifiedVC(arg0) {
  let activity;
  let cardKey;
  let fullwidth;
  let guildId;
  let index;
  let panelVariant;
  let stream;
  let userId;
  let voiceState;
  ({ guildId, index, voiceState, fullwidth, panelVariant } = arg0);
  ({ userId, cardKey } = arg0);
  if (panelVariant === undefined) {
    panelVariant = false;
  }
  ({ stream, activity } = useCallActivityData(voiceState.channelId));
  if (null != stream) {
    let obj = { index, userId: stream.ownerId, guildId, stream, fullwidth, panelVariant };
    let tmp5 = jsx(importDefault(14983), { index, userId: stream.ownerId, guildId, stream, fullwidth, panelVariant });
  } else if (null != activity) {
    obj = { index, voiceState, fullwidth, guildId, activity, userId, cardKey, panelVariant };
    tmp5 = jsx(importDefault(14995), { index, voiceState, fullwidth, guildId, activity, userId, cardKey, panelVariant });
  } else {
    obj = { index, voiceState, fullwidth, guildId, panelVariant };
    tmp5 = jsx(importDefault(14996), { index, voiceState, fullwidth, guildId, panelVariant });
  }
  return tmp5;
};
export { useCallActivityData };
