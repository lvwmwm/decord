// Module ID: 9518
// Function ID: 9519
// Name: TouchableStreamPreview
// Dependencies: [19, 17, 4853, 4858, 502, 2045, 2067, 4469, 4855, 1074, 21, 4836, 4683, 576, 4981, 504, 1115, 5723, 4978, 5038, 5037, 4888, 5298, 9519, 4832, 2]
// Exports: default

// Module 9518 (TouchableStreamPreview)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import StreamActionCreators from "StreamActionCreators" /* 4978 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5037 */;
import transitionToStreamDefault from "transitionToStream" /* 5038 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5723 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GameConsoleStore from "GameConsoleStore" /* 4853 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4858 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import VoiceStateStore from "VoiceStateStore" /* 4855 */;
import createStyles_mod from "createStyles" /* 4836 */;
import ColorUtils_mod from "ColorUtils" /* 4683 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let ColorUtils;
let StyleSheet;
let closure_4;
let obj2;
let obj3;
let tmp5;
const StreamKeyUtils = tmp5(4888);
function StreamPreviewContainer(disableTransition) {
  let flag;
  let remoteSessionId;
  let stringResult1;
  disableTransition = disableTransition.disableTransition;
  const onPress = disableTransition.onPress;
  const stream = disableTransition.stream;
  const channel = disableTransition.channel;
  const style = disableTransition.style;
  const tmp = closure_14();
  const tmp3 = stream;
  let obj = disableTransition(stream[14]);
  const isChannelFullResult = obj.isChannelFull(channel, VoiceStateStore, GuildStore);
  let obj2 = disableTransition(stream[15]);
  const items = [GameConsoleStore];
  const stateFromStores = obj2.useStateFromStores(items, () => null != remoteSessionId.getRemoteSessionId());
  const items1 = [PermissionStore];
  const obj3 = disableTransition(stream[15]);
  const stateFromStores1 = obj3.useStateFromStores(items1, () => !PermissionStore.can(Permissions.CONNECT, channel));
  const items2 = [VoiceStateStore];
  const obj4 = disableTransition(stream[15]);
  let stateFromStores2 = obj4.useStateFromStores(items2, () => VoiceStateStore.isInChannel(channel.id));
  const items3 = [ApplicationStreamingStore, AuthenticationStore];
  const items4 = [channel.id, stream.ownerId];
  const obj5 = disableTransition(stream[15]);
  const stateFromStores3 = obj5.useStateFromStores(items3, () => {
    const isSelfStreamHiddenResult = stream.ownerId === AuthenticationStore.getId() && ApplicationStreamingStore.isSelfStreamHidden(channel.id);
    return isSelfStreamHiddenResult;
  }, items4);
  const intl = disableTransition(stream[16]).intl;
  let stringResult = intl.string(disableTransition(stream[16]).t["7Xq/nV"]);
  if (stateFromStores) {
    const intl4 = tmp2(tmp3[16]).intl;
    stringResult1 = intl4.string(tmp2(tmp3[16]).t.gcnYT2);
    flag = true;
  } else {
    if (!stateFromStores2) {
      stateFromStores2 = stateFromStores3;
    }
    flag = false;
    stringResult1 = stringResult;
    if (!stateFromStores2) {
      let flag2;
      if (isChannelFullResult) {
        const intl3 = tmp2(tmp3[16]).intl;
        stringResult = intl3.string(tmp2(tmp3[16]).t.rZfiNq);
        flag2 = true;
      } else {
        flag2 = false;
        if (stateFromStores1) {
          const intl2 = tmp2(tmp3[16]).intl;
          stringResult = intl2.string(tmp2(tmp3[16]).t.TVBCKZ);
          flag2 = true;
        }
      }
      flag = flag2;
      stringResult1 = stringResult;
    }
  }
  const items5 = [stream, disableTransition, onPress];
  const callback = channel.useCallback(() => {
    const obj = SelectedChannelActionCreatorsDefault;
    const voiceChannel = obj.selectVoiceChannel(stream.channelId);
    const obj2 = StreamActionCreators;
    obj2.watchStream(stream);
    const tmp7 = disableTransition;
    if (tmp7) {
      const tmpResult = ChannelRTCActionCreatorsDefault;
      const result = tmpResult.rebuildRTCActiveChannels();
    } else {
      transitionToStreamDefault(stream);
    }
    const selectParticipant = ChannelRTCActionCreatorsDefault.selectParticipant;
    const channelId = tmp3.channelId;
    ChannelRTCActionCreatorsDefault;
    const tmp5Result = StreamKeyUtils;
    const participant = selectParticipant(channelId, tmp5Result.encodeStreamKey(tmp3));
    if (onPress != null) {
      onPress();
    }
  }, items5);
  onPress(tmp3[22])(() => {
    if (channel.isGuildStageVoice()) {
      const obj = StreamActionCreators;
      obj.watchStream(stream, { noFocus: true });
    }
  });
  const items6 = [tmp.touchable, style];
  onPress(tmp3[23]);
  return <tmp13 stream={stream} ctaText={stringResult1} style={items6} onPress={callback} disabled={flag}>{null}</tmp13>;
}
({ View: closure_4, StyleSheet } = react_native);
const Permissions = Constants.Permissions;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { touchable: { borderRadius: 5, overflow: "hidden" }, ctaWrapper: obj2, ctaBackground: obj3, ctaText: { lineHeight: 20 } };
obj2 = { alignItems: "center", justifyContent: "center", backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_700, 0.7) };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
ColorUtils = ColorUtils_mod;
obj3 = { height: 40, paddingHorizontal: 16, borderRadius: 20, backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_500, justifyContent: "center", alignItems: "center" };
let closure_14 = createStyles(obj);
let result = size.fileFinishedImporting("components_native/TouchableStreamPreview.tsx");

export default function VoiceChannelSettingsStreamPreview(arg0) {
  let closure_0;
  _require = arg0;
  const items = [ApplicationStreamingStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => ApplicationStreamingStore.getStreamForUser(closure_0.userId, closure_0.guildId));
  const items1 = [ChannelStore];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let channel = null;
    if (null != stateFromStores) {
      channel = ChannelStore.getChannel(tmp.channelId);
    }
    return channel;
  });
  let tmp3 = null;
  if (null != stateFromStores) {
    tmp3 = null;
    if (null != stateFromStores1) {
      const merged = Object.assign(arg0);
      tmp3 = <StreamPreviewContainer stream={stateFromStores} channel={stateFromStores1} />;
    }
  }
  return tmp3;
};
