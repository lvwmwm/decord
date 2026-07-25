// Module ID: 15119
// Function ID: 115141
// Name: handlePress
// Dependencies: [31, 10222, 4327, 33, 4131, 689, 3832, 1212, 9243, 4321, 9029, 15026, 2]

// Module 15119 (handlePress)
import importAllResult from "result";
import { UnreadSetting } from "ReadStateTypes";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function handlePress() {
  let obj = importDefault(3832);
  obj = { key: "UNKNOWN_CHANNEL_UPDATE_DISCORD" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.content = intl.string(require(1212) /* getSystemLocale */.t["/ZjyYE"]);
  obj.icon = importDefault(9243);
  obj.open(obj);
}
let obj = {};
obj = { marginVertical: require("hairlineWidth").CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
obj.container = obj;
let closure_6 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo((channel) => {
  channel = channel.channel;
  const selected = channel.selected;
  const items = [channel.id];
  const tmp = callback();
  callback = importAllResult.useCallback(() => {
    const result = channel(outer1_2[10]).openChannelLongPressActionSheet(channel.id);
  }, items);
  const obj = { onPress: handlePress, onLongPress: callback, style: tmp.container, accessible: true };
  const tmp2 = importDefault(4321)(channel);
  const intl = channel(1212).intl;
  obj.accessibilityLabel = intl.formatToPlainString(channel(1212).t.yjQ9P8, { channelName: tmp2 });
  obj.accessibilityState = { selected };
  obj.channel = channel;
  obj.selected = selected;
  obj.resolvedUnreadSetting = UnreadSetting.ONLY_MENTIONS;
  return jsx(importDefault(15026), { onPress: handlePress, onLongPress: callback, style: tmp.container, accessible: true });
});
let result = require("ReadStateTypes").fileFinishedImporting("modules/channel_list_v2/native/items/UnknownChannel.tsx");

export default memoResult;
