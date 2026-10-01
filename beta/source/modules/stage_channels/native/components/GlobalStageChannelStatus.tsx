// Module ID: 8968
// Function ID: 8969
// Name: GlobalStageChannelStatus
// Dependencies: [5, 32, 19, 17, 4521, 2050, 1074, 21, 1115, 4836, 576, 4989, 504, 5298, 8746, 8080, 8957, 5734, 7859, 7861, 7846, 7842, 1177, 4832, 5282, 5281, 8959, 8861, 4767, 4538, 8839, 5335, 2]
// Exports: default

// Module 8968 (GlobalStageChannelStatus)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl8 from "intl" /* 1115 */;
import useChannelNameDefault from "useChannelName" /* 4989 */;
import StageChannelActionCreators from "StageChannelActionCreators" /* 7846 */;
import PushNotificationDefault from "PushNotification" /* 8746 */;
import StatusBarDefault from "StatusBar" /* 8839 */;
import useIsInvitedToSpeakDefault from "useIsInvitedToSpeak" /* 8959 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 4521 */;
import StageInstanceStore from "StageInstanceStore" /* 2050 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c4, c5, dependencyMap, importDefault;

let c10;
let obj10;
let obj11;
let obj12;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let tmp2;
let unpackModuleId;
const useMountEffectDefault = tmp2(5298);
class StageChannelRaiseHandAck {
  constructor(channel) {
    let BaseTextButton;
    let Button;
    let LegacyText;
    let _undefined;
    let c3;
    let channelName;
    let intl2;
    let intl6;
    let intl7;
    let items2;
    let items3;
    let items4;
    let obj13;
    let obj15;
    let obj5;
    let tmp10;
    channel = channel.channel;
    importDefault = undefined;
    let stateFromStores;
    dependencyMap = undefined;
    let obj = function _handleAcceptInvite() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let closure_0;
        let closure_1;
        let closure_2;
        let tmp38Result;
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                id = tmp4;
                if (null != id) {
                  const obj8 = id(c3[17]);
                  if (obj8.shouldAgeVerifyToSpeakForCurrentUser(id.id)) {
                    const obj4 = { entryPoint: id(c3[19]).AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND };
                    const showAgeVerificationGetStartedModal = tmp(c3[18]).showAgeVerificationGetStartedModal;
                    const tmp22 = tmp(c3[18]);
                    const result = showAgeVerificationGetStartedModal(obj4);
                  } else {
                    _undefined(true);
                    c3 = 1;
                    c4 = 2;
                    c5 = 1;
                    const obj5 = { value: tmp38Result.audienceAckRequestToSpeak(id, false), done: false };
                    tmp38Result = id(c3[20]);
                    return obj5;
                  }
                }
              }
            } else if (1 === c4) {
              c3 = 0;
              id = tmp25;
              closure_129_3(false);
              throw id;
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              c3 = 0;
              closure_129_3(false);
              if (null == key.getKey()) {
                const obj7 = tmp25(c3[21]);
                obj7.openStageChannel(closure_129_0);
              }
            }
            c5 = 3;
            return { value: "HermesInternal", done: null };
          } catch (tmp25) {
            if (0 === c3) {
              c5 = 3;
              throw tmp25;
            } else {
              c4 = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    const tmp = closure_12();
    const tmp3 = dependencyMap;
    let stringResult = useChannelNameDefault(channel);
    if (stringResult == null) {
      let intl = channel(1115).intl;
      stringResult = intl.string(channel(1115).t["/YzI63"]);
    }
    importDefault = stringResult;
    obj = channel(504);
    const items = [StageInstanceStore];
    const items1 = [channel.id];
    stateFromStores = obj.useStateFromStores(items, () => StageInstanceStore.getStageInstanceByChannel(channel.id), items1);
    useMountEffectDefault(() => {
      let topic;
      const presentLocalNotification = PushNotificationDefault.presentLocalNotification;
      PushNotificationDefault;
      const intl = intl8.intl;
      const formatToPlainString = intl.formatToPlainString;
      obj = { channelName, channelTopic: topic };
      topic = undefined;
      const sqnsSP = intl8.t.sqnsSP;
      if (stateFromStores != null) {
        topic = stateFromStores.topic;
      }
      const obj2 = { alertBody: formatToPlainString(sqnsSP, obj) };
      const result = presentLocalNotification(obj2);
    });
    [tmp10, c3] = _slicedToArray(react.useState(false), 2);
    const tmp9 = _slicedToArray(react.useState(false), 2);
    let id1;
    const useStageBlockedUsersCount = channel(8080).useStageBlockedUsersCount;
    const tmp11 = channel(8080);
    if (channel != null) {
      id1 = channel.id;
    }
    const stageBlockedUsersCount = useStageBlockedUsersCount(id1);
    let id2;
    const useStageIgnoredUsersCount = tmp6(8080).useStageIgnoredUsersCount;
    channel(8080);
    if (channel != null) {
      id2 = channel.id;
    }
    const stageIgnoredUsersCount = useStageIgnoredUsersCount(id2);
    channel(8957);
    if (channel != null) {
      let id = channel.id;
    }
    let tmp20Result = null;
    if (null != stateFromStores) {
      let tmp22Result;
      let obj2 = { style: items2, children: items3 };
      items2 = [tmp.invitedContainer, ];
      let obj3 = { height: tmp18 };
      items2[1] = obj3;
      let tmp22 = closure_10;
      let obj4 = { style: tmp.row, children: closure_10(LegacyText, obj5) };
      obj5 = { style: tmp.invitedHeaderText, accessibilityRole: "header", children: intl2.string(tmp6(1115).t.Ul1RJQ) };
      LegacyText = tmp6(1177).LegacyText;
      intl2 = tmp6(1115).intl;
      items3 = [closure_10(View, obj4), , ];
      if (stageBlockedUsersCount > 0) {
        let formatResult;
        const obj6 = { style: tmp.row, children: null };
        if (stageBlockedUsersCount > 0) {
          if (stageIgnoredUsersCount > 0) {
            const intl5 = tmp6(1115).intl;
            let obj7 = { number: stageBlockedUsersCount + stageIgnoredUsersCount };
            formatResult = intl5.format(tmp6(1115).t["cXaoI+"], obj7);
          }
          let obj8 = { variant: "text-xs/medium", color: "text-overlay-light", children: formatResult };
          obj6.children = tmp22(tmp24, obj8);
          tmp22Result = tmp22(tmp21, obj6);
        }
        if (stageIgnoredUsersCount > 0) {
          const intl4 = tmp6(1115).intl;
          const obj9 = { number: stageIgnoredUsersCount };
          formatResult = intl4.format(tmp6(1115).t["0bU4FO"], obj9);
        } else {
          const intl3 = tmp6(1115).intl;
          const obj10 = { number: stageBlockedUsersCount };
          formatResult = intl3.format(tmp6(1115).t.sFzx0G, obj10);
        }
      } else {
        tmp22Result = null;
      }
      items3[1] = tmp22Result;
      const obj11 = { style: tmp.row, children: items4 };
      const obj12 = { style: tmp.buttonWrapper, children: tmp22(BaseTextButton, obj13) };
      obj13 = {
        variant: "secondary",
        onPress: function handleDeclineInvite() {
            if (null != channel) {
              obj = StageChannelActionCreators;
              const result = obj.audienceAckRequestToSpeak(tmp, true);
            }
          },
        pillStyle: tmp.declineButtonPill,
        size: "sm",
        text: intl6.string(channel(1115).t["1YDv7a"]),
        grow: true
      };
      BaseTextButton = tmp6(5282).BaseTextButton;
      intl6 = tmp6(1115).intl;
      items4 = [tmp22(tmp21, obj12), ];
      const obj14 = { style: tmp.buttonWrapper, children: tmp22(Button, obj15) };
      obj15 = {
        variant: "primary-overlay",
        onPress: function handleAcceptInvite() {
            return obj(...arguments);
          },
        size: "sm",
        text: intl7.string(channel(1115).t.MpO0px),
        loading: tmp10,
        disabled: tmp10,
        grow: true
      };
      Button = tmp6(5281).Button;
      intl7 = tmp6(1115).intl;
      items4[1] = tmp22(View, obj14);
      items3[2] = closure_11(View, obj11);
      tmp20Result = tmp20(tmp21, obj2);
    }
    return tmp20Result;
  }
}
const View = react_native.View;
const Fonts = Constants.Fonts;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { invitedContainer: obj2, icon: obj3, activeSpeakerIcon: obj4, activeStageIcon: obj5, topic: obj6, channel: obj7, invitedHeaderText: obj8, noticeContainer: obj9, row: obj10, buttonWrapper: obj11, declineButtonPill: obj12 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { marginEnd: nativeDefault.space.PX_8, tintColor: nativeDefault.colors.TEXT_DEFAULT };
obj4 = { marginEnd: nativeDefault.space.PX_8, tintColor: nativeDefault.colors.WHITE };
obj5 = { marginEnd: nativeDefault.space.PX_8, tintColor: nativeDefault.unsafe_rawColors.GREEN_360 };
obj6 = { color: nativeDefault.colors.TEXT_DEFAULT, fontSize: 14, fontFamily: Fonts.PRIMARY_SEMIBOLD };
obj7 = { color: nativeDefault.colors.TEXT_DEFAULT, fontSize: 14, fontFamily: Fonts.PRIMARY_MEDIUM };
obj8 = { color: nativeDefault.colors.WHITE, fontSize: 14, fontFamily: Fonts.PRIMARY_MEDIUM };
obj9 = { alignItems: "center", justifyContent: "center", flexDirection: "row", paddingHorizontal: nativeDefault.space.PX_8, marginTop: -8, paddingBottom: nativeDefault.space.PX_4 };
obj10 = { alignItems: "center", justifyContent: "center", flexDirection: "row", width: "100%", gap: nativeDefault.space.PX_4 };
obj11 = { flexGrow: 1, margin: nativeDefault.space.PX_8 };
obj12 = { borderColor: nativeDefault.colors.WHITE };
let closure_12 = createStyles(obj);
let result = size.fileFinishedImporting("modules/stage_channels/native/components/GlobalStageChannelStatus.tsx");

export default function GlobalStageChannelStatus(arg0) {
  let activeSpeakerIcon;
  let channel;
  let guild;
  let items2;
  let items4;
  let tmp8Result2;
  ({ channel, guild } = arg0);
  const tmp = closure_12();
  let id;
  if (channel != null) {
    id = channel.id;
  }
  let stringResult = useChannelNameDefault(channel);
  if (stringResult == null) {
    const intl = id(1115).intl;
    stringResult = intl.string(id(1115).t["/YzI63"]);
  }
  const tmp7 = useIsInvitedToSpeakDefault();
  let invitedHeaderText = tmp3(8861)(id);
  const items = [StageInstanceStore];
  const items1 = [id];
  const obj = id(504);
  const stateFromStores = obj.useStateFromStores(items, () => StageInstanceStore.getStageInstanceByChannel(id), items1);
  if (invitedHeaderText) {
    activeSpeakerIcon = tmp.activeSpeakerIcon;
  } else {
    activeSpeakerIcon = null != stateFromStores ? tmp.activeStageIcon : tmp.icon;
  }
  if (!invitedHeaderText) {
    let str;
    if (!tmp7) {
      str = "dark-content";
      id(4538);
    }
    if (null != channel) {
      if (null != guild) {
        let tmp13Result2;
        const _HermesInternal = HermesInternal;
        let tmp17 = ": ";
        const combined = "" + guild.name + ": " + stringResult;
        let str2;
        if (stateFromStores != null) {
          str2 = stateFromStores.topic;
        }
        if (str2 == null) {
          str2 = "";
        }
        if (tmp7) {
          const obj2 = { channel };
          tmp13Result2 = closure_10(StageChannelRaiseHandAck, obj2);
        } else {
          const obj3 = { style: tmp.noticeContainer, children: items2 };
          const obj4 = { animated: true, barStyle: str };
          items2 = [closure_10(StatusBarDefault, obj4), , ];
          const obj5 = { style: activeSpeakerIcon, size: id(1177).Icon.Sizes.REFRESH_SMALL_16, source: tmp8Result2.getChannelIconWithGuild(channel, guild) };
          const Icon = tmp8(1177).Icon;
          tmp8Result2 = id(5335);
          items2[1] = closure_10(Icon, obj5);
          let tmp13Result = "" !== str2;
          const LegacyText = tmp8(1177).LegacyText;
          const tmp14 = View;
          const tmp15 = closure_10;
          if (tmp13Result) {
            const items3 = [tmp.topic, ];
            let invitedHeaderText2 = invitedHeaderText;
            const LegacyText2 = tmp8(1177).LegacyText;
            if (invitedHeaderText) {
              invitedHeaderText2 = tmp.invitedHeaderText;
            }
            const obj6 = { style: items3, children: items4 };
            items3[1] = invitedHeaderText2;
            items4 = [str2, ];
            if (tmp11 > 50) {
              tmp17 = null;
            }
            items4[1] = tmp17;
            tmp13Result = tmp13(LegacyText2, obj6);
          }
          const items5 = [tmp13Result, ];
          let tmp15Result = !tmp12;
          if (tmp15Result) {
            const items6 = [tmp.channel, ];
            const LegacyText3 = tmp8(1177).LegacyText;
            if (invitedHeaderText) {
              invitedHeaderText = tmp.invitedHeaderText;
            }
            const obj7 = { style: items6, children: combined };
            items6[1] = invitedHeaderText;
            tmp15Result = tmp15(LegacyText3, obj7);
          }
          const obj8 = { numberOfLines: 1, children: items5 };
          items5[1] = tmp15Result;
          items2[2] = closure_11(LegacyText, obj8);
          tmp13Result2 = tmp13(tmp14, obj3);
        }
        return tmp13Result2;
      }
    }
    return null;
  }
  str = "light-content";
};
export { StageChannelRaiseHandAck };
