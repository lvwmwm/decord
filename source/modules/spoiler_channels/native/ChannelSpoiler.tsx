// Module ID: 10003
// Function ID: 77317
// Name: ChannelSpoiler
// Dependencies: []
// Exports: default

// Module 10003 (ChannelSpoiler)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const VoicePanelControlsModes = arg1(dependencyMap[6]).VoicePanelControlsModes;
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[7]));
let obj = arg1(dependencyMap[8]);
obj = { subtitle: {}, subtitleContainer: { alignItems: "center" } };
obj = { sa: "surrogates", Array: "y", a: "isArray", skuId: "key", backgroundColor: importDefault(dependencyMap[9]).colors.BORDER_SUBTLE };
obj.divider = obj;
obj.subtitleMeasure = { "Bool(false)": "<string:3082955202>", "Bool(false)": "<string:103629460>", "Bool(false)": "<string:3630497793>", "Bool(false)": "<string:961609729>" };
let closure_12 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/spoiler_channels/native/ChannelSpoiler.tsx");

export default function ChannelSpoiler(channelId) {
  const arg1 = channelId;
  let obj = arg1(dependencyMap[10]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(arg0.guildId));
  let obj1 = arg1(dependencyMap[10]);
  const items1 = [closure_7];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => channel.getChannel(arg0.channelId));
  const tmp2 = callback4();
  const tmp3 = callback(React.useState(false), 2);
  const importDefault = tmp3[1];
  let isVocalResult;
  if (null != stateFromStores1) {
    isVocalResult = stateFromStores1.isVocal();
  }
  const dependencyMap = isVocalResult;
  const setControlsMode = React.useContext(importDefault(dependencyMap[12])).setControlsMode;
  let callback = setControlsMode;
  const items2 = [, , , ];
  ({ guildId: arr3[0], channelId: arr3[1] } = channelId);
  items2[2] = setControlsMode;
  items2[3] = isVocalResult;
  callback = React.useCallback((self) => {
    if (isVocalResult) {
      if (chatOpen.getChatOpen(self.channelId)) {
        callback(isVocalResult[13]).updateChatOpen(self.channelId, false);
        let obj = { mode: constants.FLOATING_DEFAULT };
        setControlsMode(obj);
      }
    }
    obj = callback(isVocalResult[14]);
    obj.nsfwReturnToSafety(self.guildId);
  }, items2);
  const items3 = [channelId.channelId];
  const callback1 = React.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.lines.length > 3);
  }, []);
  let channelIconComponent = null;
  const callback2 = React.useCallback(() => {
    let obj = arg0(isVocalResult[15]);
    const rootNavigationRef = obj.getRootNavigationRef();
    if (null != rootNavigationRef) {
      obj = { channelId: arg0.channelId, expandTopic: true };
      rootNavigationRef.navigate("sidebar", obj);
    }
  }, items3);
  if (null != stateFromStores1) {
    let obj3 = arg1(dependencyMap[16]);
    channelIconComponent = obj3.getChannelIconComponent(stateFromStores1);
  }
  if (null != channelIconComponent) {
    obj = { style: { 2036930899: "th", 1628470960: "recordCanvas", -154250777: "STICKER_PACK_VIEW_ALL", 1373095266: "<string:1312948480>" } };
    const items4 = [callback2(channelIconComponent, {}), ];
    obj = {};
    obj1 = { flexShrink: 1 };
    obj.style = obj1;
    obj.children = tmp4;
    items4[1] = callback2(arg1(dependencyMap[17]).Text, obj);
    obj.children = items4;
    let stringResult = callback3(View, obj);
  } else {
    const intl = arg1(dependencyMap[18]).intl;
    stringResult = intl.string(arg1(dependencyMap[18]).t.q38/ae);
  }
  let topic;
  if (null != stateFromStores1) {
    topic = stateFromStores1.topic;
  }
  let tmp31Result = null;
  if (null != topic) {
    tmp31Result = null;
    if ("" !== str.trim()) {
      const obj2 = { spacing: 4, style: tmp2.subtitleContainer };
      obj3 = { style: tmp2.subtitleMeasure, pointerEvents: "none" };
      const obj4 = { space: 2539982792701946800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, disabled: -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012329723729218196, onTextLayout: callback1 };
      const obj5 = { channelId: stateFromStores1.id };
      obj4.children = importDefault(dependencyMap[20]).parseTopic(stateFromStores1.topic, true, obj5);
      obj3.children = callback2(arg1(dependencyMap[17]).Text, obj4);
      const items5 = [callback2(View, obj3), , , ];
      const obj6 = { style: tmp2.subtitle };
      const obj16 = importDefault(dependencyMap[20]);
      const tmp31 = callback3;
      const obj7 = { channelId: stateFromStores1.id };
      obj6.children = importDefault(dependencyMap[20]).parseTopic(stateFromStores1.topic, true, obj7);
      items5[1] = callback2(arg1(dependencyMap[17]).Text, obj6);
      let tmp25 = null;
      if (tmp3[0]) {
        const obj8 = { onPress: callback2, accessibilityRole: "button" };
        const obj9 = {};
        const obj10 = { textDecorationLine: "underline" };
        obj9.style = obj10;
        const intl2 = arg1(dependencyMap[18]).intl;
        obj9.children = intl2.string(arg1(dependencyMap[18]).t./QvRak);
        obj8.children = callback2(arg1(dependencyMap[17]).Text, obj9);
        tmp25 = callback2(arg1(dependencyMap[21]).PressableHighlight, obj8);
      }
      items5[2] = tmp25;
      const obj11 = { style: tmp2.divider };
      items5[3] = callback2(View, obj11);
      obj2.children = items5;
      tmp31Result = tmp31(arg1(dependencyMap[19]).Stack, obj2);
      const obj19 = importDefault(dependencyMap[20]);
    }
    const str = stateFromStores1.topic;
  }
  const obj12 = {};
  const tmp28 = callback2;
  const tmp4 = importDefault(dependencyMap[11])(stateFromStores1);
  obj12.modalType = arg1(dependencyMap[23]).NsfwSpaceWarningModalType.SPOILER_CHANNEL;
  obj12.onAgree = function onAgree() {
    callback(isVocalResult[14]).spoilerAgree(arg0.channelId);
  };
  obj12.onDisagree = callback;
  obj12.title = stringResult;
  obj12.subtitle = tmp31Result;
  const intl3 = arg1(dependencyMap[18]).intl;
  obj12.description = intl3.string(arg1(dependencyMap[18]).t.08bm2Z);
  const intl4 = arg1(dependencyMap[18]).intl;
  obj12.agreement = intl4.string(arg1(dependencyMap[18]).t.KmRwcW);
  const intl5 = arg1(dependencyMap[18]).intl;
  obj12.disagreement = intl5.string(arg1(dependencyMap[18]).t./g10LC);
  let id;
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  obj12.guildId = id;
  obj12.channelId = channelId.channelId;
  return tmp28(importDefault(dependencyMap[22]), obj12);
};
