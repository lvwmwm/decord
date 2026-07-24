// Module ID: 10772
// Function ID: 83693
// Dependencies: [31, 27, 4149, 1194, 1838, 33, 4130, 3974, 689, 10396, 10244, 566, 4950, 8881, 10773, 2]

// Module 10772
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_createForOfIteratorHelperLoose";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import hexToRgb from "hexToRgb";
import importAllResult from "result";

const require = arg1;
let obj = {};
obj = {};
obj.backgroundColor = hexToRgb.hexWithOpacity(require("_createForOfIteratorHelperLoose").unsafe_rawColors.WHITE, 0.24);
obj.borderRadius = require("_createForOfIteratorHelperLoose").radii.sm;
obj.overflow = "hidden";
obj.container = obj;
let closure_8 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = require("result").memo((channel) => {
  channel = channel.channel;
  const tmp = callback();
  let obj = channel(10244);
  const isConnectedToVoiceChannel = obj.useIsConnectedToVoiceChannel(channel);
  let obj1 = channel(566);
  const items = [closure_6];
  const items1 = [channel.guild_id];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_6.getGuild(channel.guild_id), items1);
  const tmp2 = importDefault(10396)(channel.id);
  const items2 = [_isNativeReflectConstruct];
  const items3 = [channel.id];
  const stateFromStoresArray = channel(566).useStateFromStoresArray(items2, () => outer1_4.getAllApplicationStreamsForChannel(channel.id), items3);
  const obj3 = channel(566);
  const items4 = [closure_5];
  importDefault = channel(566).useStateFromStores(items4, () => outer1_5.getId());
  let prop;
  if (null != stateFromStores) {
    prop = stateFromStores.maxStageVideoChannelUsers;
  }
  let num = 0;
  if (null != prop) {
    num = prop;
  }
  const obj4 = channel(566);
  const stageHasMedia = channel(4950).useStageHasMedia(channel.id);
  const items5 = [];
  items5.push(jsx(channel(10773).StreamVolumeItem, {}));
  if (tmp8) {
    obj = { channel };
    let tmp12 = stateFromStoresArray.length > 0;
    if (tmp12) {
      tmp12 = null == stateFromStoresArray.find((ownerId) => ownerId.ownerId === closure_1);
    }
    if (!tmp12) {
      tmp12 = !stageHasMedia && importDefault(8881)(channel).reachedLimit;
      const tmp13 = !stageHasMedia && importDefault(8881)(channel).reachedLimit;
    }
    obj.disabled = tmp12;
    items5.push(jsx(channel(10773).ScreenshareButton, { channel }));
    const tmp9 = jsx;
  }
  obj = { channelId: channel.id, isConnectedToVoiceChannel };
  items5.push(jsx(channel(10773).AudioRouteButton, { channelId: channel.id, isConnectedToVoiceChannel }));
  items5.push(jsx(channel(10773).DeafenButton, { channel }));
  obj1 = { style: tmp.container, children: items5.map((children) => outer1_7(outer1_3, { children }, arg1)) };
  return <View style={tmp.container}>{items5.map((children) => outer1_7(outer1_3, { children }, arg1))}</View>;
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/stage_channels/native/components/StageChannelExpandedControls.tsx");

export default memoResult;
