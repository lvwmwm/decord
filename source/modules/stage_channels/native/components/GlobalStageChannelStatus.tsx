// Module ID: 10666
// Function ID: 83133
// Name: getText
// Dependencies: [5, 57, 31, 27, 3823, 1353, 653, 33, 1212, 4130, 689, 4320, 566, 4559, 10667, 7676, 10657, 4955, 7581, 7583, 7562, 7558, 1273, 4126, 4544, 4543, 10659, 10396, 4066, 3840, 7530, 4593, 2]
// Exports: default

// Module 10666 (getText)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import getThreadChannelIcon from "getThreadChannelIcon";
import { View } from "useCanCurrentUserSpeakInChannel";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { Fonts } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
const require = arg1;
function getText(number, number2) {
  if (number > 0) {
    if (number2 > 0) {
      const intl3 = require(1212) /* getSystemLocale */.intl;
      let obj = { number: number + number2 };
      let formatResult = intl3.format(require(1212) /* getSystemLocale */.t["cXaoI+"], obj);
    }
    return formatResult;
  }
  if (number2 > 0) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj = { number: number2 };
    formatResult = intl2.format(require(1212) /* getSystemLocale */.t["0bU4FO"], obj);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    obj = { number };
    formatResult = intl.format(require(1212) /* getSystemLocale */.t.sFzx0G, obj);
  }
}
class StageChannelRaiseHandAck {
  constructor(arg0) {
    channel = global.channel;
    c1 = undefined;
    f83139 = undefined;
    c3 = undefined;
    _handleAcceptInvite = function _handleAcceptInvite(arg0) {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = _handleAcceptInvite(tmp);
      return obj(...arguments);
    };
    tmp = c12();
    stringResult = require("computeDefaultGroupDmNameFromUserIds")(channel);
    if (null == stringResult) {
      tmp3 = channel;
      tmp4 = c3;
      num = 8;
      intl = require("getSystemLocale").intl;
      stringResult = intl.string(require("getSystemLocale").t["/YzI63"]);
    }
    c1 = stringResult;
    obj = require("initialize");
    items = [];
    items[0] = c9;
    items1 = [];
    items1[0] = channel.id;
    stateFromStores = obj.useStateFromStores(items, () => outer1_9.getStageInstanceByChannel(channel.id), items1);
    f83139 = stateFromStores;
    tmp6 = require("useMountLayoutEffect")(() => {
      let obj = _undefined(10667);
      obj = {};
      const intl = channel(1212).intl;
      obj = { channelName: _undefined };
      let topic;
      if (null != stateFromStores) {
        topic = stateFromStores.topic;
      }
      obj.channelTopic = topic;
      obj.alertBody = intl.formatToPlainString(channel(1212).t.sqnsSP, obj);
      const result = obj.presentLocalNotification(obj);
    });
    tmp7 = _slicedToArray(c6.useState(false), 2);
    first = tmp7[0];
    c3 = tmp7[1];
    obj2 = require("useStageBlockedUsersCount");
    id = undefined;
    if (null != channel) {
      id = channel.id;
    }
    stageBlockedUsersCount = obj2.useStageBlockedUsersCount(id);
    obj3 = require("useStageBlockedUsersCount");
    id1 = undefined;
    if (null != channel) {
      id1 = channel.id;
    }
    stageIgnoredUsersCount = obj3.useStageIgnoredUsersCount(id1);
    tmp13 = require("CALL_ACTION_BAR_HEIGHT");
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
      tmp21 = channel;
      tmp22 = c3;
      num2 = 22;
      tmp16 = jsxs;
      tmp17 = View;
      obj3 = {};
      obj3.style = tmp.invitedHeaderText;
      str = "header";
      obj3.accessibilityRole = "header";
      num3 = 8;
      intl2 = require("getSystemLocale").intl;
      obj3.children = intl2.string(require("getSystemLocale").t.Ul1RJQ);
      obj2.children = jsx(require("Button").LegacyText, obj3);
      items3 = [, , ];
      items3[0] = jsx(View, obj2);
      if (stageBlockedUsersCount > 0) {
        tmp24 = jsx;
        tmp25 = View;
        obj4 = {};
        obj4.style = tmp.row;
        tmp26 = jsx;
        tmp27 = channel;
        tmp28 = c3;
        num4 = 23;
        obj5 = { variant: "text-xs/medium", color: "text-overlay-light" };
        tmp29 = getText;
        obj5.children = getText(stageBlockedUsersCount, stageIgnoredUsersCount);
        obj4.children = jsx(require("Text").Text, obj5);
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
      tmp35 = channel;
      tmp36 = c3;
      num5 = 24;
      obj8 = { variant: "secondary", onPress: null, pillStyle: null, size: "sm", text: null, grow: true };
      obj8.onPress = function handleDeclineInvite() {
        if (null != channel) {
          const result = channel(7562).audienceAckRequestToSpeak(channel, true);
          const obj = channel(7562);
        }
      };
      obj8.pillStyle = tmp.declineButtonPill;
      intl3 = require("getSystemLocale").intl;
      obj8.text = intl3.string(require("getSystemLocale").t["1YDv7a"]);
      flag = true;
      obj7.children = jsx(require("CollapsingText").BaseTextButton, obj8);
      items4 = [, ];
      items4[0] = jsx(View, obj7);
      tmp37 = jsx;
      tmp38 = View;
      obj9 = {};
      obj9.style = tmp.buttonWrapper;
      tmp39 = jsx;
      num6 = 25;
      obj10 = { variant: "primary-overlay", onPress: null, size: "sm" };
      obj10.onPress = function handleAcceptInvite() {
        return _handleAcceptInvite(...arguments);
      };
      intl4 = require("getSystemLocale").intl;
      obj10.text = intl4.string(require("getSystemLocale").t.MpO0px);
      obj10.loading = first;
      obj10.disabled = first;
      obj10.grow = true;
      obj9.children = jsx(require("Button").Button, obj10);
      items4[1] = jsx(View, obj9);
      obj6.children = items4;
      items3[2] = jsxs(View, obj6);
      obj.children = items3;
      tmp16Result = tmp16(tmp17, obj);
    }
    return tmp16Result;
  }
}
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.invitedContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.icon = { marginEnd: require("_createForOfIteratorHelperLoose").space.PX_8, tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT };
let obj1 = { marginEnd: require("_createForOfIteratorHelperLoose").space.PX_8, tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT };
_createForOfIteratorHelperLoose.activeSpeakerIcon = { marginEnd: require("_createForOfIteratorHelperLoose").space.PX_8, tintColor: require("_createForOfIteratorHelperLoose").colors.WHITE };
let obj2 = { marginEnd: require("_createForOfIteratorHelperLoose").space.PX_8, tintColor: require("_createForOfIteratorHelperLoose").colors.WHITE };
_createForOfIteratorHelperLoose.activeStageIcon = { marginEnd: require("_createForOfIteratorHelperLoose").space.PX_8, tintColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.GREEN_360 };
let obj3 = { marginEnd: require("_createForOfIteratorHelperLoose").space.PX_8, tintColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.GREEN_360 };
_createForOfIteratorHelperLoose.topic = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT, fontSize: 14, fontFamily: Fonts.PRIMARY_SEMIBOLD };
let obj4 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT, fontSize: 14, fontFamily: Fonts.PRIMARY_SEMIBOLD };
_createForOfIteratorHelperLoose.channel = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT, fontSize: 14, fontFamily: Fonts.PRIMARY_MEDIUM };
let obj5 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT, fontSize: 14, fontFamily: Fonts.PRIMARY_MEDIUM };
_createForOfIteratorHelperLoose.invitedHeaderText = { color: require("_createForOfIteratorHelperLoose").colors.WHITE, fontSize: 14, fontFamily: Fonts.PRIMARY_MEDIUM };
let obj7 = { alignItems: "center", justifyContent: "center", flexDirection: "row", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, marginTop: -8, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.noticeContainer = obj7;
let obj8 = { alignItems: "center", justifyContent: "center", flexDirection: "row", width: "100%", gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.row = obj8;
let obj6 = { color: require("_createForOfIteratorHelperLoose").colors.WHITE, fontSize: 14, fontFamily: Fonts.PRIMARY_MEDIUM };
_createForOfIteratorHelperLoose.buttonWrapper = { flexGrow: 1, margin: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj9 = { flexGrow: 1, margin: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.declineButtonPill = { borderColor: require("_createForOfIteratorHelperLoose").colors.WHITE };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj10 = { borderColor: require("_createForOfIteratorHelperLoose").colors.WHITE };
let result = require("result").fileFinishedImporting("modules/stage_channels/native/components/GlobalStageChannelStatus.tsx");

export default function GlobalStageChannelStatus(arg0) {
  let channel;
  let guild;
  ({ channel, guild } = arg0);
  let id;
  const tmp = _createForOfIteratorHelperLoose();
  id = undefined;
  if (null != channel) {
    id = channel.id;
  }
  let stringResult = importDefault(4320)(channel);
  if (null == stringResult) {
    const intl = id(1212).intl;
    stringResult = intl.string(id(1212).t["/YzI63"]);
  }
  const tmp6 = importDefault(10659)();
  let invitedHeaderText = importDefault(10396)(id);
  let obj = id(566);
  const items = [closure_9];
  const items1 = [id];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_9.getStageInstanceByChannel(id), items1);
  if (invitedHeaderText) {
    let activeSpeakerIcon = tmp.activeSpeakerIcon;
  } else {
    activeSpeakerIcon = null != stateFromStores ? tmp.activeStageIcon : tmp.icon;
  }
  if (!invitedHeaderText) {
    if (!tmp6) {
      let obj1 = id(3840);
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
          const items2 = [callback2(importDefault(7530), obj1), , ];
          const obj2 = { style: activeSpeakerIcon, size: id(1273).Icon.Sizes.REFRESH_SMALL_16 };
          let obj5 = id(4593);
          obj2.source = obj5.getChannelIconWithGuild(channel, guild);
          items2[1] = callback2(id(1273).Icon, obj2);
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
            tmp22Result = closure_11(id(1273).LegacyText, obj4);
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
            tmp27Result = callback2(id(1273).LegacyText, obj5);
            const tmp27 = callback2;
          }
          items5[1] = tmp27Result;
          obj3.children = items5;
          items2[2] = closure_11(id(1273).LegacyText, obj3);
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
