// Module ID: 10774
// Function ID: 83696
// Name: StreamPreviewContainer
// Dependencies: []
// Exports: default

// Module 10774 (StreamPreviewContainer)
function StreamPreviewContainer(disableTransition) {
  disableTransition = disableTransition.disableTransition;
  const arg1 = disableTransition;
  const onPress = disableTransition.onPress;
  const importDefault = onPress;
  const stream = disableTransition.stream;
  const dependencyMap = stream;
  const channel = disableTransition.channel;
  const React = channel;
  const tmp = callback();
  let obj = arg1(dependencyMap[14]);
  let obj1 = arg1(dependencyMap[15]);
  const items = [closure_5];
  const stateFromStores = obj1.useStateFromStores(items, () => null != remoteSessionId.getRemoteSessionId());
  let obj2 = arg1(dependencyMap[15]);
  const items1 = [closure_10];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => !closure_10.can(constants.CONNECT, channel));
  const isChannelFullResult = obj.isChannelFull(channel, closure_11, closure_9);
  const items2 = [closure_11];
  const stateFromStores2 = arg1(dependencyMap[15]).useStateFromStores(items2, () => inChannel.isInChannel(channel.id));
  const obj4 = arg1(dependencyMap[15]);
  const items3 = [closure_6, closure_7];
  const items4 = [channel.id, stream.ownerId];
  const stateFromStores3 = arg1(dependencyMap[15]).useStateFromStores(items3, () => {
    let isSelfStreamHiddenResult = stream.ownerId === id.getId();
    if (isSelfStreamHiddenResult) {
      isSelfStreamHiddenResult = selfStreamHidden.isSelfStreamHidden(channel.id);
    }
    return isSelfStreamHiddenResult;
  }, items4);
  const intl = arg1(dependencyMap[16]).intl;
  let stringResult = intl.string(arg1(dependencyMap[16]).t.7Xq/nV);
  if (stateFromStores) {
    const intl4 = arg1(dependencyMap[16]).intl;
    let stringResult1 = intl4.string(arg1(dependencyMap[16]).t.gcnYT2);
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
        const intl3 = arg1(dependencyMap[16]).intl;
        stringResult = intl3.string(arg1(dependencyMap[16]).t.rZfiNq);
        let flag2 = true;
      } else {
        flag2 = false;
        if (stateFromStores1) {
          const intl2 = arg1(dependencyMap[16]).intl;
          stringResult = intl2.string(arg1(dependencyMap[16]).t.TVBCKZ);
          flag2 = true;
        }
      }
      stringResult1 = stringResult;
      flag = flag2;
    }
  }
  const items5 = [stream, disableTransition, onPress];
  const callback = React.useCallback(() => {
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
  importDefault(dependencyMap[22])(() => {
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
  const obj5 = arg1(dependencyMap[15]);
  obj2 = { "Null": false, "Null": false, "Null": false, style: tmp.ctaText, children: stringResult1 };
  obj1.children = jsx(arg1(dependencyMap[24]).Text, obj2);
  obj.children = <View {...obj1} />;
  obj.children = <View {...obj} />;
  return jsx(importDefault(dependencyMap[23]), obj);
}
let closure_3 = importAll(dependencyMap[0]);
const tmp2 = arg1(dependencyMap[1]);
const View = tmp2.View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
const Permissions = arg1(dependencyMap[9]).Permissions;
const jsx = arg1(dependencyMap[10]).jsx;
let obj = arg1(dependencyMap[11]);
obj = { touchable: {} };
obj = {};
const merged = Object.assign(tmp2.StyleSheet.absoluteFillObject);
obj["alignItems"] = "center";
obj["justifyContent"] = "center";
obj["backgroundColor"] = arg1(dependencyMap[12]).hexWithOpacity(importDefault(dependencyMap[13]).unsafe_rawColors.PRIMARY_700, 0.7);
obj.ctaWrapper = obj;
const obj1 = { SRATIONAL: null, IFD: null, hours: null, minutes: null, "Bool(true)": "\u7E41\u9AD4\u4E2D\u6587", "Bool(true)": "Traditional Chinese", backgroundColor: importDefault(dependencyMap[13]).unsafe_rawColors.PRIMARY_500 };
obj.ctaBackground = obj1;
obj.ctaText = { lineHeight: 20 };
let closure_14 = obj.createStyles(obj);
const obj4 = arg1(dependencyMap[12]);
const result = arg1(dependencyMap[25]).fileFinishedImporting("components_native/TouchableStreamPreview.tsx");

export default function VoiceChannelSettingsStreamPreview(arg0) {
  const arg1 = arg0;
  let obj = arg1(dependencyMap[15]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, (self) => streamForUser.getStreamForUser(self.userId, self.guildId));
  const importDefault = stateFromStores;
  const items1 = [closure_8];
  const stateFromStores1 = arg1(dependencyMap[15]).useStateFromStores(items1, () => {
    let channel = null;
    if (null != stateFromStores) {
      channel = channel.getChannel(stateFromStores.channelId);
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
      tmp3 = <StreamPreviewContainer {...obj} />;
    }
  }
  return tmp3;
};
