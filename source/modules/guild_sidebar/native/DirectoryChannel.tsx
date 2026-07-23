// Module ID: 15034
// Function ID: 114519
// Dependencies: [31, 1348, 1907, 10260, 4326, 33, 4130, 689, 624, 1198, 9099, 14969, 8450, 2]

// Module 15034
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { UnreadSetting } from "ReadStateTypes";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let obj = {};
obj = { marginVertical: require("hairlineWidth").CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
obj.container = obj;
let closure_8 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo((guildId) => {
  guildId = guildId.guildId;
  let selected = guildId.selected;
  let id;
  let obj = guildId(624);
  const items = [_isNativeReflectConstruct, closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const directoryChannelIds = outer1_5.getDirectoryChannelIds(guildId);
    let channel = null;
    if (0 !== directoryChannelIds.length) {
      channel = outer1_4.getChannel(directoryChannelIds[0]);
    }
    return channel;
  });
  id = undefined;
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  if (!selected) {
    selected = id === guildId.selectedChannelId;
  }
  const items1 = [guildId, id];
  [][0] = id;
  const callback = importAllResult.useCallback(() => {
    guildId(outer1_2[9]).transitionToGuild(guildId, id);
  }, items1);
  let tmp6 = null;
  if (null != stateFromStores) {
    obj = { onPress: callback, onLongPress: tmp5, style: tmp.container, accessible: true, accessibilityRole: "button" };
    obj = { channel: stateFromStores };
    obj.accessibilityLabel = id(8450)(obj);
    const obj1 = { selected };
    obj.accessibilityState = obj1;
    obj.channel = stateFromStores;
    obj.selected = selected;
    obj.resolvedUnreadSetting = UnreadSetting.ONLY_MENTIONS;
    tmp6 = jsx(id(14969), { channel: stateFromStores });
    const tmp10 = id(14969);
  }
  return tmp6;
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_sidebar/native/DirectoryChannel.tsx");

export default memoResult;
