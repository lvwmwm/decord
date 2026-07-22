// Module ID: 10627
// Function ID: 82891
// Name: getText
// Dependencies: []
// Exports: default

// Module 10627 (getText)
function getText(number, number2) {
  if (number > 0) {
    if (number2 > 0) {
      const intl3 = number2(dependencyMap[8]).intl;
      let obj = { number: number + number2 };
      let formatResult = intl3.format(number2(dependencyMap[8]).t.cXaoI+, obj);
    }
    return formatResult;
  }
  if (number2 > 0) {
    const intl2 = number2(dependencyMap[8]).intl;
    obj = { number: number2 };
    formatResult = intl2.format(number2(dependencyMap[8]).t.0bU4FO, obj);
  } else {
    const intl = number2(dependencyMap[8]).intl;
    obj = { number };
    formatResult = intl.format(number2(dependencyMap[8]).t.sFzx0G, obj);
  }
}
class StageChannelRaiseHandAck {
  constructor(arg0) {
    channel = global.channel;
    arg1 = channel;
    closure_1 = undefined;
    f82897 = undefined;
    closure_3 = undefined;
    _handleAcceptInvite = function _handleAcceptInvite(arg0) {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = _handleAcceptInvite(tmp);
      const _handleAcceptInvite = obj;
      return obj(...arguments);
    };
    tmp = closure_12();
    stringResult = closure_1(closure_3[11])(channel);
    if (null == stringResult) {
      tmp3 = arg1;
      tmp4 = closure_3;
      num = 8;
      intl = arg1(closure_3[8]).intl;
      stringResult = intl.string(arg1(closure_3[8]).t./YzI63);
    }
    closure_1 = stringResult;
    obj = arg1(closure_3[12]);
    items = [];
    items[0] = closure_9;
    items1 = [];
    items1[0] = channel.id;
    stateFromStores = obj.useStateFromStores(items, () => stageInstanceByChannel.getStageInstanceByChannel(channel.id), items1);
    f82897 = stateFromStores;
    tmp6 = closure_1(closure_3[13])(() => {
      let obj = stringResult(closure_3[14]);
      obj = {};
      const intl = channel(closure_3[8]).intl;
      obj = { channelName: stringResult };
      let topic;
      if (null != stateFromStores) {
        topic = stateFromStores.topic;
      }
      obj.channelTopic = topic;
      obj.alertBody = intl.formatToPlainString(channel(closure_3[8]).t.sqnsSP, obj);
      const result = obj.presentLocalNotification(obj);
    });
    tmp7 = closure_5(closure_6.useState(false), 2);
    first = tmp7[0];
    closure_3 = tmp7[1];
    obj2 = arg1(closure_3[15]);
    id = undefined;
    if (null != channel) {
      id = channel.id;
    }
    stageBlockedUsersCount = obj2.useStageBlockedUsersCount(id);
    obj3 = arg1(closure_3[15]);
    id1 = undefined;
    if (null != channel) {
      id1 = channel.id;
    }
    stageIgnoredUsersCount = obj3.useStageIgnoredUsersCount(id1);
    tmp13 = arg1(closure_3[16]);
    if (null != channel) {
      id = channel.id;
    }
    tmp16Result = null;
    if (null != stateFromStores) {
      obj = {};
      items2 = [, ];
      items2[0] = tmp.invitedContainer;
      obj1 = {};
      obj1.height = tmp14;
      items2[1] = obj1;
      obj.style = items2;
      tmp18 = jsx;
      tmp19 = View;
      obj2 = {};
      obj2.style = tmp.row;
      tmp20 = jsx;
      tmp21 = arg1;
      tmp22 = closure_3;
      num2 = 22;
      tmp16 = jsxs;
      tmp17 = View;
      obj3 = {};
      obj3.style = tmp.invitedHeaderText;
      str = "header";
      obj3.accessibilityRole = "header";
      num3 = 8;
      intl2 = arg1(closure_3[8]).intl;
      obj3.children = intl2.string(arg1(closure_3[8]).t.Ul1RJQ);
      obj2.children = jsx(arg1(closure_3[22]).LegacyText, obj3);
      items3 = [, , ];
      items3[0] = jsx(View, obj2);
      if (stageBlockedUsersCount > 0) {
        tmp24 = jsx;
        tmp25 = View;
        obj4 = {};
        obj4.style = tmp.row;
        tmp26 = jsx;
        tmp27 = arg1;
        tmp28 = closure_3;
        num4 = 23;
        obj5 = {};
        tmp29 = getText;
        obj5.children = getText(stageBlockedUsersCount, stageIgnoredUsersCount);
        obj4.children = jsx(arg1(closure_3[23]).Text, obj5);
        tmp23 = jsx(View, obj4);
      } else {
        tmp23 = null;
      }
      items3[1] = tmp23;
      tmp30 = jsxs;
      tmp31 = View;
      obj6 = {};
      obj6.style = tmp.row;
      tmp32 = jsx;
      tmp33 = View;
      obj7 = {};
      obj7.style = tmp.buttonWrapper;
      tmp34 = jsx;
      tmp35 = arg1;
      tmp36 = closure_3;
      num5 = 24;
      obj8 = {};
      obj8.onPress = function handleDeclineInvite() {
        if (null != channel) {
          const result = channel(closure_3[20]).audienceAckRequestToSpeak(channel, true);
          const obj = channel(closure_3[20]);
        }
      };
      obj8.pillStyle = tmp.declineButtonPill;
      intl3 = arg1(closure_3[8]).intl;
      obj8.text = intl3.string(arg1(closure_3[8]).t.1YDv7a);
      flag = true;
      obj7.children = jsx(arg1(closure_3[24]).BaseTextButton, obj8);
      items4 = [, ];
      items4[0] = jsx(View, obj7);
      tmp37 = jsx;
      tmp38 = View;
      obj9 = {};
      obj9.style = tmp.buttonWrapper;
      tmp39 = jsx;
      num6 = 25;
      obj10 = {};
      obj10.onPress = function handleAcceptInvite() {
        return _handleAcceptInvite(...arguments);
      };
      intl4 = arg1(closure_3[8]).intl;
      obj10.text = intl4.string(arg1(closure_3[8]).t.MpO0px);
      obj10.loading = first;
      obj10.disabled = first;
      obj10.grow = true;
      obj9.children = jsx(arg1(closure_3[25]).Button, obj10);
      items4[1] = jsx(View, obj9);
      obj6.children = items4;
      items3[2] = jsxs(View, obj6);
      obj.children = items3;
      tmp16Result = tmp16(tmp17, obj);
    }
    return tmp16Result;
  }
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
const Fonts = arg1(dependencyMap[6]).Fonts;
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[7]));
let obj = arg1(dependencyMap[9]);
obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[10]).space.PX_8 };
obj.invitedContainer = obj;
const tmp2 = arg1(dependencyMap[7]);
obj.icon = { marginEnd: importDefault(dependencyMap[10]).space.PX_8, tintColor: importDefault(dependencyMap[10]).colors.TEXT_DEFAULT };
const obj1 = { marginEnd: importDefault(dependencyMap[10]).space.PX_8, tintColor: importDefault(dependencyMap[10]).colors.TEXT_DEFAULT };
obj.activeSpeakerIcon = { marginEnd: importDefault(dependencyMap[10]).space.PX_8, tintColor: importDefault(dependencyMap[10]).colors.WHITE };
const obj2 = { marginEnd: importDefault(dependencyMap[10]).space.PX_8, tintColor: importDefault(dependencyMap[10]).colors.WHITE };
obj.activeStageIcon = { marginEnd: importDefault(dependencyMap[10]).space.PX_8, tintColor: importDefault(dependencyMap[10]).unsafe_rawColors.GREEN_360 };
const obj3 = { marginEnd: importDefault(dependencyMap[10]).space.PX_8, tintColor: importDefault(dependencyMap[10]).unsafe_rawColors.GREEN_360 };
obj.topic = { color: importDefault(dependencyMap[10]).colors.TEXT_DEFAULT, fontSize: 14, fontFamily: Fonts.PRIMARY_SEMIBOLD };
const obj4 = { color: importDefault(dependencyMap[10]).colors.TEXT_DEFAULT, fontSize: 14, fontFamily: Fonts.PRIMARY_SEMIBOLD };
obj.channel = { color: importDefault(dependencyMap[10]).colors.TEXT_DEFAULT, fontSize: 14, fontFamily: Fonts.PRIMARY_MEDIUM };
const obj5 = { color: importDefault(dependencyMap[10]).colors.TEXT_DEFAULT, fontSize: 14, fontFamily: Fonts.PRIMARY_MEDIUM };
obj.invitedHeaderText = { color: importDefault(dependencyMap[10]).colors.WHITE, fontSize: 14, fontFamily: Fonts.PRIMARY_MEDIUM };
const obj7 = { "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, paddingHorizontal: importDefault(dependencyMap[10]).space.PX_8, paddingBottom: importDefault(dependencyMap[10]).space.PX_4 };
obj.noticeContainer = obj7;
const obj6 = { color: importDefault(dependencyMap[10]).colors.WHITE, fontSize: 14, fontFamily: Fonts.PRIMARY_MEDIUM };
obj.row = { gap: importDefault(dependencyMap[10]).space.PX_4 };
const obj8 = { gap: importDefault(dependencyMap[10]).space.PX_4 };
obj.buttonWrapper = { flexGrow: 1, margin: importDefault(dependencyMap[10]).space.PX_8 };
const obj9 = { flexGrow: 1, margin: importDefault(dependencyMap[10]).space.PX_8 };
obj.declineButtonPill = { borderColor: importDefault(dependencyMap[10]).colors.WHITE };
let closure_12 = obj.createStyles(obj);
const obj10 = { borderColor: importDefault(dependencyMap[10]).colors.WHITE };
const result = arg1(dependencyMap[32]).fileFinishedImporting("modules/stage_channels/native/components/GlobalStageChannelStatus.tsx");

export default function GlobalStageChannelStatus(arg0) {
  let channel;
  let guild;
  ({ channel, guild } = arg0);
  let arg1;
  const tmp = callback4();
  let id;
  if (null != channel) {
    id = channel.id;
  }
  arg1 = id;
  let stringResult = importDefault(dependencyMap[11])(channel);
  if (null == stringResult) {
    const intl = arg1(dependencyMap[8]).intl;
    stringResult = intl.string(arg1(dependencyMap[8]).t./YzI63);
  }
  const tmp6 = importDefault(dependencyMap[26])();
  let invitedHeaderText = importDefault(dependencyMap[27])(id);
  let obj = arg1(dependencyMap[12]);
  const items = [closure_9];
  const items1 = [id];
  const stateFromStores = obj.useStateFromStores(items, () => stageInstanceByChannel.getStageInstanceByChannel(id), items1);
  if (invitedHeaderText) {
    let activeSpeakerIcon = tmp.activeSpeakerIcon;
  } else {
    activeSpeakerIcon = null != stateFromStores ? tmp.activeStageIcon : tmp.icon;
  }
  if (!invitedHeaderText) {
    if (!tmp6) {
      let obj1 = arg1(dependencyMap[29]);
      let str = "dark-content";
    }
    if (null != channel) {
      if (null != guild) {
        const _HermesInternal = HermesInternal;
        let tmp25 = ": ";
        const combined = "" + guild.name + ": " + stringResult;
        let topic;
        if (null != stateFromStores) {
          topic = stateFromStores.topic;
        }
        let str2 = "";
        if (null != topic) {
          str2 = topic;
        }
        if (tmp6) {
          obj = { channel };
          let tmp13Result = callback2(StageChannelRaiseHandAck, obj);
        } else {
          obj = { style: tmp.noticeContainer };
          obj1 = { animated: true, barStyle: str };
          const items2 = [callback2(importDefault(dependencyMap[30]), obj1), , ];
          const obj2 = { style: activeSpeakerIcon, size: arg1(dependencyMap[22]).Icon.Sizes.REFRESH_SMALL_16 };
          let obj5 = arg1(dependencyMap[31]);
          obj2.source = obj5.getChannelIconWithGuild(channel, guild);
          items2[1] = callback2(arg1(dependencyMap[22]).Icon, obj2);
          const obj3 = { numberOfLines: 1 };
          let tmp22Result = "" !== str2;
          if (tmp22Result) {
            const obj4 = {};
            const items3 = [tmp.topic, ];
            let invitedHeaderText2 = invitedHeaderText;
            if (invitedHeaderText) {
              invitedHeaderText2 = tmp.invitedHeaderText;
            }
            items3[1] = invitedHeaderText2;
            obj4.style = items3;
            const items4 = [str2, ];
            if (tmp12) {
              tmp25 = null;
            }
            items4[1] = tmp25;
            obj4.children = items4;
            tmp22Result = closure_11(arg1(dependencyMap[22]).LegacyText, obj4);
            const tmp22 = closure_11;
          }
          const items5 = [tmp22Result, ];
          let tmp27Result = !tmp12;
          if (!tmp12) {
            obj5 = {};
            const items6 = [tmp.channel, ];
            if (invitedHeaderText) {
              invitedHeaderText = tmp.invitedHeaderText;
            }
            items6[1] = invitedHeaderText;
            obj5.style = items6;
            obj5.children = combined;
            tmp27Result = callback2(arg1(dependencyMap[22]).LegacyText, obj5);
            const tmp27 = callback2;
          }
          items5[1] = tmp27Result;
          obj3.children = items5;
          items2[2] = closure_11(arg1(dependencyMap[22]).LegacyText, obj3);
          obj.children = items2;
          tmp13Result = closure_11(View, obj);
          const tmp13 = closure_11;
          const tmp14 = View;
          const tmp20 = closure_11;
        }
        return tmp13Result;
      }
    }
    return null;
  }
  str = "light-content";
};
export { StageChannelRaiseHandAck };
