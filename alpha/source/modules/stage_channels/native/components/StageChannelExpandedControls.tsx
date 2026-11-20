// Module ID: 10916
// Function ID: 10917
// Name: StageChannelExpandedControls
// Dependencies: [19, 17, 6281, 502, 4665, 21, 4794, 4791, 575, 10547, 10520, 504, 6414, 9546, 10917, 2]

// Module 10916 (StageChannelExpandedControls)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import useCanSpeakInChannelDefault from "useCanSpeakInChannel" /* 10547 */;
import react from "react" /* 19 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6281 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildStore from "GuildStore" /* 4665 */;
import createStyles_mod from "createStyles" /* 4794 */;
import ColorUtils_mod from "ColorUtils" /* 4791 */;
import size from "module_2" /* 2 */;

let importDefault;

let ColorUtils;
let obj2;
let tmp2;
const useChannelVideoLimitDefault = tmp2(9546);
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: obj2 };
obj2 = { backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.24), borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
createStyles = createStyles.createStyles;
ColorUtils = ColorUtils_mod;
let closure_8 = createStyles(obj);
const memoResult = react.memo(function StageChannelExpandedControls(channel) {
  let closure_1;
  let id;
  channel = channel.channel;
  importDefault = undefined;
  const tmp = closure_8();
  const tmp4 = useCanSpeakInChannelDefault(channel.id);
  const obj = channel(10520);
  const isConnectedToVoiceChannel = obj.useIsConnectedToVoiceChannel(channel);
  const items = [GuildStore];
  const items1 = [channel.guild_id];
  const obj2 = channel(504);
  const stateFromStores = obj2.useStateFromStores(items, () => GuildStore.getGuild(channel.guild_id), items1);
  const items2 = [ApplicationStreamingStore];
  const items3 = [channel.id];
  const obj3 = channel(504);
  const stateFromStoresArray = obj3.useStateFromStoresArray(items2, () => ApplicationStreamingStore.getAllApplicationStreamsForChannel(channel.id), items3);
  const items4 = [AuthenticationStore];
  const obj4 = channel(504);
  importDefault = obj4.useStateFromStores(items4, () => id.getId());
  let num;
  if (stateFromStores != null) {
    num = stateFromStores.maxStageVideoChannelUsers;
  }
  if (num == null) {
    num = 0;
  }
  const tmp5Result = channel(6414);
  const stageHasMedia = tmp5Result.useStageHasMedia(channel.id);
  const items5 = [];
  const reachedLimit = useChannelVideoLimitDefault(channel).reachedLimit;
  items5.push(jsx(channel(10917).StreamVolumeItem, {}));
  const tmp11 = num > 0 && tmp4;
  if (tmp11) {
    const push = items5.push;
    let tmp12 = stateFromStoresArray.length > 0;
    const ScreenshareButton = tmp5(10917).ScreenshareButton;
    if (tmp12) {
      tmp12 = null == stateFromStoresArray.find((ownerId) => ownerId.ownerId === closure_1);
    }
    if (!tmp12) {
      tmp12 = !stageHasMedia && reachedLimit;
    }
    push(<ScreenshareButton channel={channel} disabled={tmp12} />);
  }
  items5.push(jsx(channel(10917).AudioRouteButton, { channelId: channel.id, isConnectedToVoiceChannel }));
  items5.push(jsx(channel(10917).DeafenButton, { channel }));
  return <View style={tmp.container}>{items5.map((children, index) => <View key={arg1}>{arg0}</View>)}</View>;
});
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageChannelExpandedControls.tsx");

export default memoResult;
