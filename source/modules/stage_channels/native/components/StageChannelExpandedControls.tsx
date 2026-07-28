// Module ID: 10783
// Function ID: 83561
// Dependencies: [31, 27, 4184, 1194, 1838, 33, 4165, 4009, 689, 10370, 10218, 566, 4985, 8813, 10784, 2]

// Module 10783
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
  let obj = channel(10218);
  const isConnectedToVoiceChannel = obj.useIsConnectedToVoiceChannel(channel);
  let obj1 = channel(566);
  const items = [closure_6];
  const items1 = [channel.guild_id];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_6.getGuild(channel.guild_id), items1);
  const tmp2 = importDefault(10370)(channel.id);
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
  const stageHasMedia = channel(4985).useStageHasMedia(channel.id);
  const items5 = [];
  items5.push(jsx(channel(10784).StreamVolumeItem, {}));
  if (tmp8) {
    obj = { channel };
    let tmp12 = stateFromStoresArray.length > 0;
    if (tmp12) {
      tmp12 = null == stateFromStoresArray.find((ownerId) => ownerId.ownerId === closure_1);
    }
    if (!tmp12) {
      tmp12 = !stageHasMedia && importDefault(8813)(channel).reachedLimit;
      const tmp13 = !stageHasMedia && importDefault(8813)(channel).reachedLimit;
    }
    obj.disabled = tmp12;
    items5.push(jsx(channel(10784).ScreenshareButton, { channel }));
    const tmp9 = jsx;
  }
  obj = { channelId: channel.id, isConnectedToVoiceChannel };
  items5.push(jsx(channel(10784).AudioRouteButton, { channelId: channel.id, isConnectedToVoiceChannel }));
  items5.push(jsx(channel(10784).DeafenButton, { channel }));
  obj1 = { style: tmp.container, children: items5.map((children) => outer1_7(outer1_3, { children }, arg1)) };
  return <View style={tmp.container}>{items5.map((children) => outer1_7(outer1_3, { children }, arg1))}</View>;
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/stage_channels/native/components/StageChannelExpandedControls.tsx");

export default memoResult;
