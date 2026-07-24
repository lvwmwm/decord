// Module ID: 15109
// Function ID: 115013
// Name: handlePress
// Dependencies: [31, 10289, 4326, 33, 4130, 689, 3831, 1212, 9350, 4320, 9137, 15016, 2]

// Module 15109 (handlePress)
import importAllResult from "result";
import { UnreadSetting } from "ReadStateTypes";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function handlePress() {
  let obj = importDefault(3831);
  obj = { key: "UNKNOWN_CHANNEL_UPDATE_DISCORD" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.content = intl.string(require(1212) /* getSystemLocale */.t["/ZjyYE"]);
  obj.icon = importDefault(9350);
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
  const tmp2 = importDefault(4320)(channel);
  const intl = channel(1212).intl;
  obj.accessibilityLabel = intl.formatToPlainString(channel(1212).t.yjQ9P8, { channelName: tmp2 });
  obj.accessibilityState = { selected };
  obj.channel = channel;
  obj.selected = selected;
  obj.resolvedUnreadSetting = UnreadSetting.ONLY_MENTIONS;
  return jsx(importDefault(15016), { onPress: handlePress, onLongPress: callback, style: tmp.container, accessible: true });
});
let result = require("ReadStateTypes").fileFinishedImporting("modules/channel_list_v2/native/items/UnknownChannel.tsx");

export default memoResult;
