// Module ID: 10814
// Function ID: 83961
// Name: StreamPreviewContainer
// Dependencies: [31, 27, 4144, 4149, 1194, 1348, 1838, 3758, 4146, 653, 33, 4130, 3974, 689, 4312, 566, 1212, 4944, 4309, 4336, 4323, 4194, 4559, 10815, 4126, 2]
// Exports: default

// Module 10814 (StreamPreviewContainer)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_createForOfIteratorHelperLoose";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import { Permissions } from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import hexToRgb from "hexToRgb";

const require = arg1;
function StreamPreviewContainer(disableTransition) {
  disableTransition = disableTransition.disableTransition;
  const onPress = disableTransition.onPress;
  const stream = disableTransition.stream;
  const channel = disableTransition.channel;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = disableTransition(stream[14]);
  let obj1 = disableTransition(stream[15]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj1.useStateFromStores(items, () => null != outer1_5.getRemoteSessionId());
  let obj2 = disableTransition(stream[15]);
  const items1 = [closure_10];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => !outer1_10.can(outer1_12.CONNECT, channel));
  const isChannelFullResult = obj.isChannelFull(channel, closure_11, closure_9);
  const items2 = [closure_11];
  const stateFromStores2 = disableTransition(stream[15]).useStateFromStores(items2, () => outer1_11.isInChannel(channel.id));
  let obj4 = disableTransition(stream[15]);
  const items3 = [closure_6, closure_7];
  const items4 = [channel.id, stream.ownerId];
  const stateFromStores3 = disableTransition(stream[15]).useStateFromStores(items3, () => {
    let isSelfStreamHiddenResult = stream.ownerId === outer1_7.getId();
    if (isSelfStreamHiddenResult) {
      isSelfStreamHiddenResult = outer1_6.isSelfStreamHidden(channel.id);
    }
    return isSelfStreamHiddenResult;
  }, items4);
  const intl = disableTransition(stream[16]).intl;
  let stringResult = intl.string(disableTransition(stream[16]).t["7Xq/nV"]);
  if (stateFromStores) {
    const intl4 = disableTransition(stream[16]).intl;
    let stringResult1 = intl4.string(disableTransition(stream[16]).t.gcnYT2);
    let flag = true;
  } else {
    let tmp8 = stateFromStores2;
    if (!stateFromStores2) {
      tmp8 = stateFromStores3;
    }
    stringResult1 = stringResult;
    flag = false;
    if (!tmp8) {
      if (isChannelFullResult) {
        const intl3 = disableTransition(stream[16]).intl;
        stringResult = intl3.string(disableTransition(stream[16]).t.rZfiNq);
        let flag2 = true;
      } else {
        flag2 = false;
        if (stateFromStores1) {
          const intl2 = disableTransition(stream[16]).intl;
          stringResult = intl2.string(disableTransition(stream[16]).t.TVBCKZ);
          flag2 = true;
        }
      }
      stringResult1 = stringResult;
      flag = flag2;
    }
  }
  const items5 = [stream, disableTransition, onPress];
  const callback = channel.useCallback(() => {
    const voiceChannel = onPress(stream[17]).selectVoiceChannel(stream.channelId);
    const obj = onPress(stream[17]);
    disableTransition(stream[18]).watchStream(stream);
    if (disableTransition) {
      const result = tmp3(tmp4[20]).rebuildRTCActiveChannels();
      const tmp3Result = tmp3(tmp4[20]);
    } else {
      tmp3(tmp4[19])(stream);
    }
    const obj2 = disableTransition(stream[18]);
    const obj4 = onPress(stream[20]);
    const participant = obj4.selectParticipant(stream.channelId, disableTransition(stream[21]).encodeStreamKey(stream));
    if (null != onPress) {
      onPress();
    }
  }, items5);
  onPress(stream[22])(() => {
    if (channel.isGuildStageVoice()) {
      let obj = disableTransition(stream[18]);
      obj = { noFocus: true };
      obj.watchStream(stream, obj);
    }
  });
  obj = { stream, ctaText: stringResult1 };
  const items6 = [tmp.touchable, disableTransition.style];
  obj.style = items6;
  obj.onPress = callback;
  obj.disabled = flag;
  obj = { style: tmp.ctaWrapper };
  obj1 = { style: tmp.ctaBackground };
  const obj5 = disableTransition(stream[15]);
  obj2 = { style: tmp.ctaText, variant: "text-md/semibold", color: "text-overlay-light", children: stringResult1 };
  obj1.children = jsx(disableTransition(stream[24]).Text, { style: tmp.ctaText, variant: "text-md/semibold", color: "text-overlay-light", children: stringResult1 });
  obj.children = <View style={tmp.ctaBackground} />;
  obj.children = <View style={tmp.ctaWrapper} />;
  return jsx(onPress(stream[23]), { style: tmp.ctaWrapper });
}
const View = get_ActivityIndicator.View;
_createForOfIteratorHelperLoose = { touchable: { borderRadius: 5, overflow: "hidden" } };
_createForOfIteratorHelperLoose = {};
let merged = Object.assign(get_ActivityIndicator.StyleSheet.absoluteFillObject);
_createForOfIteratorHelperLoose["alignItems"] = "center";
_createForOfIteratorHelperLoose["justifyContent"] = "center";
_createForOfIteratorHelperLoose["backgroundColor"] = hexToRgb.hexWithOpacity(require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_700, 0.7);
_createForOfIteratorHelperLoose.ctaWrapper = _createForOfIteratorHelperLoose;
let obj1 = { height: 40, paddingHorizontal: 16, borderRadius: 20, backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_500, justifyContent: "center", alignItems: "center" };
_createForOfIteratorHelperLoose.ctaBackground = obj1;
_createForOfIteratorHelperLoose.ctaText = { lineHeight: 20 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("components_native/TouchableStreamPreview.tsx");

export default function VoiceChannelSettingsStreamPreview(arg0) {
  const _require = arg0;
  let obj = _require(566);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getStreamForUser(closure_0.userId, closure_0.guildId));
  const items1 = [closure_8];
  const stateFromStores1 = _require(566).useStateFromStores(items1, () => {
    let channel = null;
    if (null != stateFromStores) {
      channel = outer1_8.getChannel(stateFromStores.channelId);
    }
    return channel;
  });
  let tmp3 = null;
  if (null != stateFromStores) {
    tmp3 = null;
    if (null != stateFromStores1) {
      obj = {};
      const merged = Object.assign(arg0);
      obj["stream"] = stateFromStores;
      obj["channel"] = stateFromStores1;
      tmp3 = <StreamPreviewContainer />;
    }
  }
  return tmp3;
};
