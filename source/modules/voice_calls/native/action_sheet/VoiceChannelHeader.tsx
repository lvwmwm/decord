// Module ID: 12609
// Function ID: 96907
// Name: PrivateChannelSubtitle
// Dependencies: []

// Module 12609 (PrivateChannelSubtitle)
function PrivateChannelSubtitle(channel) {
  channel = channel.channel;
  const tmp = callback2();
  const state = importDefault(dependencyMap[9])(channel.id).state;
  let obj = { style: tmp.subtitleWrapper };
  obj = { useAllAloneText: false, channel, voiceState: state, style: tmp.subtitle };
  const items = [callback(importDefault(dependencyMap[10]), obj), , ];
  let tmp4 = state === arg1(dependencyMap[9]).CallStates.CONNECTED;
  if (tmp4) {
    obj = { "Null": 130, ti: 130, tk: 256, tl: 16, style: tmp.subtitle };
    tmp4 = callback(arg1(dependencyMap[11]).Text, obj);
  }
  items[1] = tmp4;
  let tmp8 = state === arg1(dependencyMap[9]).CallStates.CONNECTED;
  if (tmp8) {
    const obj1 = { channelId: channel.id, style: tmp.subtitle };
    tmp8 = callback(importDefault(dependencyMap[12]), obj1);
  }
  items[2] = tmp8;
  obj.children = items;
  return closure_11(View, obj);
}
class VoiceChannelHeader {
  constructor(arg0) {
    channel = global.channel;
    arg1 = channel;
    tmp = closure_12();
    obj = arg1(dependencyMap[13]);
    items = [];
    items[0] = closure_5;
    stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(channel.getGuildId()));
    tmp3 = f96911(dependencyMap[14])(channel);
    obj2 = arg1(dependencyMap[13]);
    items1 = [];
    items1[0] = closure_4;
    items2 = [];
    items2[0] = channel;
    f96911 = obj2.useStateFromStores(items1, () => selfEmbeddedActivityForChannel.getSelfEmbeddedActivityForChannel(channel.id), items2);
    name = undefined;
    tmp4 = f96911(dependencyMap[15])(channel);
    if (null != stateFromStores) {
      name = stateFromStores.name;
    }
    E = null;
    if (closure_6.can(Permissions.CREATE_INSTANT_INVITE, channel)) {
      E = null;
      if (!tmp3) {
        E = () => {
          let applicationId;
          let obj = channel(closure_2[16]);
          obj = { source: constants2.VOICE_CHANNEL };
          if (null != applicationId) {
            applicationId = applicationId.applicationId;
          }
          obj.targetApplicationId = applicationId;
          return obj.showInstantInviteActionSheet(channel, obj);
        };
      }
    }
    formatToPlainStringResult = tmp4;
    if (channel.isPrivate()) {
      tmp7 = arg1;
      tmp8 = dependencyMap;
      num = 17;
      intl = arg1(dependencyMap[17]).intl;
      obj = {};
      num2 = 1;
      obj.count = channel.recipients.length + 1;
      formatToPlainStringResult = intl.formatToPlainString(arg1(dependencyMap[17]).t.8bn8Br, obj);
      tmp9 = jsx;
      tmp10 = PrivateChannelSubtitle;
      obj1 = {};
      obj1.channel = channel;
      name = jsx(PrivateChannelSubtitle, obj1);
      class E {
        constructor() {
          obj = channel(closure_2[18]);
          return obj.navigateToNewGroupDM(channel.id, closure_8.CHANNEL_CALL);
        }
      }
    }
    obj2 = { style: tmp.container };
    tmp11 = jsxs;
    tmp12 = View;
    tmp13 = jsx;
    obj3 = {};
    obj3.size = arg1(dependencyMap[19]).Icon.Sizes.MEDIUM;
    tmp14 = f96911;
    tmp15 = dependencyMap;
    if (f96911(dependencyMap[20])(channel)) {
      num4 = 21;
      tmp14Result = tmp14(tmp15[21]);
    } else {
      num3 = 22;
      tmp14Result = tmp14(tmp15[22]);
    }
    obj3.source = tmp14Result;
    obj3.disableColor = true;
    obj3.style = tmp.icons;
    items3 = [, , ];
    items3[0] = tmp13(arg1(dependencyMap[19]).Icon, obj3);
    obj4 = { style: tmp.middle };
    tmp19 = formatToPlainStringResult;
    tmp17 = jsxs;
    tmp18 = View;
    if ("string" === typeof formatToPlainStringResult) {
      tmp20 = jsx;
      tmp21 = arg1;
      tmp22 = dependencyMap;
      num5 = 11;
      obj5 = {};
      obj5.children = formatToPlainStringResult;
      tmp19 = jsx(arg1(dependencyMap[11]).Text, obj5);
    }
    items4 = [, ];
    items4[0] = tmp19;
    tmp23 = name;
    if ("string" === typeof name) {
      tmp24 = jsx;
      tmp25 = arg1;
      tmp26 = dependencyMap;
      num6 = 11;
      obj6 = {};
      obj6.children = name;
      tmp23 = jsx(arg1(dependencyMap[11]).Text, obj6);
    }
    items4[1] = tmp23;
    obj4.children = items4;
    items3[1] = tmp17(tmp18, obj4);
    obj7 = { style: tmp.icons };
    tmp29 = null != E;
    tmp27 = jsx;
    tmp28 = View;
    if (tmp29) {
      tmp30 = jsx;
      tmp31 = AddMemberButton;
      obj8 = {};
      obj8.onPress = E;
      tmp29 = jsx(AddMemberButton, obj8);
    }
    obj7.children = tmp29;
    items3[2] = tmp27(tmp28, obj7);
    obj2.children = items3;
    return tmp11(tmp12, obj2);
  }
}
function AddMemberButton(onPress) {
  const obj = { onPress: onPress.onPress, iconSource: importDefault(dependencyMap[23]), iconStyle: callback2().icons };
  const intl = arg1(dependencyMap[17]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[17]).t.6Qgrev);
  return callback(IconButton, obj);
}
class IconButton {
  constructor(arg0) {
    ({ onPress, iconStyle, iconSource, accessibilityLabel, style } = global);
    obj = { accessibilityRole: "button", accessibilityLabel, onPress, style };
    obj.children = jsx(arg1(dependencyMap[19]).Icon, { source: iconSource, style: iconStyle });
    return jsx(arg1(dependencyMap[24]).PressableOpacity, obj);
  }
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
({ Permissions: closure_7, AnalyticsPages: closure_8, InstantInviteSources: closure_9 } = arg1(dependencyMap[5]));
const tmp3 = arg1(dependencyMap[5]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = { container: { disabled: null, onPress: "86035f94bc8c78da758eed4788f623cf", position: "empty_castle", left: "png", right: "sm" }, middle: {} };
obj = { flexDirection: "row", tintColor: importDefault(dependencyMap[8]).colors.WHITE };
obj.icons = obj;
const tmp4 = arg1(dependencyMap[6]);
obj.subtitle = { color: importDefault(dependencyMap[8]).colors.WHITE };
obj.subtitleWrapper = { flexDirection: "row" };
let closure_12 = obj.createStyles(obj);
const obj1 = { color: importDefault(dependencyMap[8]).colors.WHITE };
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceChannelHeader.tsx");

export default VoiceChannelHeader;
export { VoiceChannelHeader };
export { IconButton };
