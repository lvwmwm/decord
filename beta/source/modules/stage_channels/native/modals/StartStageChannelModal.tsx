// Module ID: 9268
// Function ID: 9269
// Name: StartStageChannelModal
// Dependencies: [5, 32, 19, 17, 2050, 5726, 1074, 2051, 21, 4836, 576, 5039, 5435, 1115, 1177, 6510, 7855, 5896, 504, 6634, 8053, 4832, 9203, 9269, 9270, 5298, 1241, 1876, 7846, 6637, 4735, 9271, 9272, 7858, 5281, 6544, 5890, 2]

// Module 9268 (StartStageChannelModal)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl9 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1876 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2051 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import Pressables from "Pressables" /* 5435 */;
import GuildIcon from "GuildIcon" /* 5896 */;
import AssetRegistryDefault from "AssetRegistry" /* 6510 */;
import HotspotStore2 from "HotspotStore" /* 6634 */;
import StageSparkleDefault from "StageSparkle" /* 7855 */;
import Form from "Form" /* 8053 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import StageInstanceStore from "StageInstanceStore" /* 2050 */;
import StageChannelsConstants from "StageChannelsConstants" /* 5726 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const GuildIconDefault = GuildIcon;
let c3, c4, c5, channel, closure_12;

let c10;
let closure_14;
let closure_15;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let unpackModuleId;
function closeModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(unpackModuleId);
}
function NavigationBar(guild) {
  let Icon;
  let PressableOpacity;
  let intl;
  let items;
  let obj2;
  let obj3;
  guild = guild.guild;
  let tmp2 = null;
  const tmp = closure_16();
  if (null == guild) {
    const obj = { style: items, children: authStore2(PressableOpacity, obj2) };
    items = [, ];
    ({ contentContainer: arr[0], contentTopSpacing: arr[1] } = tmp);
    obj2 = { accessibilityRole: "button", accessibilityLabel: intl.string(intl9.t.cpT0Cq), onPress: closeModal, children: authStore2(Icon, obj3) };
    PressableOpacity = Pressables.PressableOpacity;
    intl = intl9.intl;
    obj3 = { source: AssetRegistryDefault };
    Icon = native.Icon;
    tmp2 = authStore2(metroImportDefault, obj);
  }
  return tmp2;
}
function HeaderIcon(guild) {
  let tmp7;
  guild = guild.guild;
  if (null == guild) {
    tmp7 = authStore2(StageSparkleDefault, {});
  } else {
    const obj = { style: tmp.guildIcon, size: GuildIcon.GuildIconSizes.LARGE, guild };
    const tmp5 = GuildIconDefault;
    tmp7 = authStore2(tmp5, obj);
  }
  return tmp7;
}
class NotificationToggle {
  constructor(arg0) {
    let Text;
    let intl;
    let intl2;
    let items1;
    let obj2;
    let obj5;
    let onToggle;
    let sendStartNotification;
    let tmp7;
    ({ sendStartNotification, onToggle } = arg0);
    const tmp = closure_16();
    const useStateFromStores = get_initialized.useStateFromStores;
    const items = [];
    get_initialized;
    items[0] = HotspotStore2.HotspotStore;
    const stateFromStores = useStateFromStores(items, () => {
      const HotspotStore = HotspotStore2.HotspotStore;
      return HotspotStore.hasHotspot(HotspotStore2.HotspotLocations.LIVE_STAGE_NOTIFICATION_BADGE);
    });
    const obj = { DEPRECATED_style: tmp.notificationToggle, label: tmp7(metroImportDefault, obj2), onPress: onToggle, trailing: authStore2(native.Checkbox, { selected: sendStartNotification }) };
    obj2 = { style: tmp.label, children: items1 };
    const FormRow = Form.FormRow;
    const obj3 = { text: intl.string(intl9.t.BYJgew) };
    const FormLabel = Form.FormLabel;
    intl = intl9.intl;
    items1 = [authStore2(FormLabel, obj3), ];
    let tmp6Result = null;
    tmp7 = closure_15;
    if (stateFromStores) {
      const obj4 = { style: tmp.pill, children: authStore2(Text, obj5) };
      obj5 = { style: tmp.pillLabel, variant: "text-xxs/bold", color: "text-overlay-light", children: intl2.string(intl9.t.y2b7CA) };
      Text = tmp2(4832).Text;
      intl2 = tmp2(1115).intl;
      tmp6Result = tmp6(tmp8, obj4);
    }
    items1[1] = tmp6Result;
    return authStore2(FormRow, obj);
  }
}
let _slicedToArray = _slicedToArray_mod;
({ View: metroImportDefault, ScrollView: metroImportAll } = react_native);
({ MAX_STAGE_TOPIC_LENGTH: c10, START_STAGE_CHANNEL_EVENT_MODAL_KEY: unpackModuleId } = StageChannelsConstants);
const AnalyticEvents = Constants.AnalyticEvents;
let constants = GuildScheduledEventsConstants.GuildScheduledEventPrivacyLevel;
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let createStyles = createStyles_mod;
let obj = { keyboardAwareView: { flex: 1 }, closeButtonContainer: { right: 10 }, container: obj2, contentContainer: { paddingHorizontal: 16 }, contentTopSpacing: { paddingTop: 16 }, header: { alignItems: "center", paddingBottom: 24 }, headerTitle: { marginTop: 16, marginBottom: 8 }, headerSubtitle: { textAlign: "center" }, textInput: obj3, startButton: { marginTop: 16 }, error: { paddingTop: 8 }, optionExplanation: { lineHeight: 16, paddingTop: 8 }, guildIcon: obj4, label: { display: "flex", alignItems: "center", flexDirection: "row" }, pill: obj5, pillLabel: { textTransform: "uppercase" }, notificationToggle: obj6, ageVerificationNotice: obj7 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { padding: 12, width: "100%", borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, marginBottom: 16 };
obj4 = { borderRadius: nativeDefault.radii.md };
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, paddingHorizontal: 4, paddingVertical: 2, marginStart: 8, borderRadius: nativeDefault.radii.xs };
obj6 = { marginTop: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm };
obj7 = { marginBottom: nativeDefault.space.PX_16 };
const authStore3 = createStyles(obj);
const forwardRefResult = react.forwardRef((channel, ref) => {
  let Button;
  let _undefined;
  let _undefined2;
  let c16;
  let c8;
  let c9;
  let closure_13;
  let closure_5;
  let guild;
  let helpText;
  let intl5;
  let intl6;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj18;
  let obj19;
  let obj2;
  let stringResult;
  let stringResult1;
  let stringResult2;
  let tmp15;
  let tmp28Result2;
  let tmp6;
  ({ guild, onStageStarted: require, onClose: importDefault } = channel);
  channel = undefined;
  let first1;
  _slicedToArray = undefined;
  let first2;
  let closure_7;
  c8 = undefined;
  c9 = undefined;
  let canSendStageStartNotification;
  let first3;
  closure_12 = undefined;
  constants = undefined;
  let obj5;
  ref = undefined;
  c16 = undefined;
  let onConfirmPress = function _handleSave() {
    let obj = _asyncToGenerator(async function(arg0, value) {
      let closure_2;
      let obj7;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let closure_1;
          let closure_0;
          let aPIError;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              closure_1 = tmp;
              closure_0 = tmp4;
              aPIError = undefined;
              if ("" !== first1) {
                if (null != first2) {
                  _undefined(true);
                  _undefined2(null);
                  const obj4 = tmp61(c3[27]);
                  const result = obj4.dismissGlobalKeyboard();
                  c3 = 1;
                  if (null != memo) {
                    c4 = 3;
                    c5 = 1;
                    const obj8 = { value: obj7.editStage(channel, first1, first2), done: false };
                    obj7 = tmp61(c3[28]);
                    return obj8;
                  } else {
                    obj5 = tmp61(c3[28]);
                    c4 = 2;
                    c5 = 1;
                    const obj9 = { value: obj5.startStage(channel, first1, first2, first3), done: false };
                    return obj9;
                  }
                }
              }
            }
          } else if (1 === c4) {
            c3 = 0;
            closure_1 = tmp61;
            const self = this;
            const self2 = this;
            aPIError = new closure_0(c3[30]).APIError(closure_1);
            closure_129_9(aPIError);
            closure_129_8(false);
          } else {
            if (2 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                const obj10 = { value, done: true };
                return obj10;
              } else {
                const tmp5 = closure_129_10 && closure_129_13;
                if (tmp5) {
                  const obj2 = tmp61(c3[29]);
                  obj2.hideHotspot(closure_0(c3[19]).HotspotLocations.LIVE_STAGE_NOTIFICATION_BADGE);
                }
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj = { value, done: true };
              return obj;
            }
            closure_129_8(false);
            closure_129_9(null);
            if (null != closure_129_1) {
              closure_129_1();
            } else {
              onConfirmPress();
            }
            if (closure_129_0 != null) {
              tmp24(closure_129_2);
            }
            c3 = 0;
          }
          c5 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp61) {
          if (0 === c3) {
            c5 = 3;
            throw tmp61;
          } else {
            c4 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  channel = channel.channel;
  let tmp = c16();
  onConfirmPress = first2;
  const imperativeHandle = first2.useImperativeHandle(ref, () => {
    let onPress;
    let obj = {
      renderRightButton: function RightButton() {
        let intl;
        const obj = { style: c16().closeButtonContainer, accessibilityRole: "button", accessibilityLabel: intl.string(require("intl").t.cpT0Cq), source: require("AssetRegistry"), onPress, disableColor: true };
        const tmp2 = require("TouchableHitBox");
        intl = require("intl").intl;
        return obj5(tmp2, obj);
      }
    };
    return obj;
  });
  const tmp3 = _slicedToArray;
  [channel, tmp6] = first2.useState(channel);
  const items = [channel.id];
  const memo = first2.useMemo(() => StageInstanceStore.getStageInstanceByChannel(first.id), items);
  let str;
  const useState = first2.useState;
  if (memo != null) {
    str = memo.topic;
  }
  if (str == null) {
    str = "";
  }
  const tmp3Result = tmp3(useState(str), 2);
  first1 = tmp3Result[0];
  _slicedToArray = tmp10;
  const GUILD_ONLY = constants.GUILD_ONLY;
  let privacy_level;
  const useState2 = onConfirmPress.useState;
  if (memo != null) {
    privacy_level = memo.privacy_level;
  }
  if (privacy_level == null) {
    privacy_level = GUILD_ONLY;
  }
  const tmp3Result5 = tmp3(useState2(privacy_level), 2);
  first2 = tmp3Result5[0];
  closure_7 = tmp3Result5[1];
  [tmp15, c8] = tmp3(onConfirmPress.useState(false), 2);
  tmp3(onConfirmPress.useState(false), 2);
  [obj2, c9] = tmp3(onConfirmPress.useState(null), 2);
  tmp3(onConfirmPress.useState(null), 2);
  let obj3 = require("LiveStageNotificationsUtils");
  canSendStageStartNotification = obj3.useCanSendStageStartNotification(channel);
  let obj4 = require("LiveStageNotificationsUtils");
  let tmp21 = null == memo;
  const defaultSendStartStageNotificationToggle = obj4.useDefaultSendStartStageNotificationToggle(channel);
  if (tmp21) {
    tmp21 = canSendStageStartNotification;
  }
  canSendStageStartNotification = tmp21;
  let tmp22 = tmp21;
  const useState3 = onConfirmPress.useState;
  if (tmp21) {
    tmp22 = defaultSendStartStageNotificationToggle;
  }
  const tmp3Result8 = tmp3(useState3(tmp22), 2);
  first3 = tmp3Result8[0];
  closure_12 = tmp3Result8[1];
  const useStateFromStores = tmp17(tmp18[18]).useStateFromStores;
  const items1 = [];
  require("get initialized");
  items1[0] = require("HotspotStore").HotspotStore;
  constants = useStateFromStores(items1, () => {
    const HotspotStore = require("HotspotStore").HotspotStore;
    return HotspotStore.hasHotspot(require("HotspotStore").HotspotLocations.LIVE_STAGE_NOTIFICATION_BADGE);
  });
  obj5 = { stageInstance: memo, privacyDefault: GUILD_ONLY };
  ref = onConfirmPress.useRef(obj5);
  const effect = onConfirmPress.useEffect(() => {
    ref.current = obj5;
  });
  const items2 = [channel.id];
  const effect1 = onConfirmPress.useEffect(() => {
    const current = ref.current;
    const stageInstance = current.stageInstance;
    let privacy_level;
    const privacyDefault = current.privacyDefault;
    const tmp = closure_7;
    if (stageInstance != null) {
      privacy_level = stageInstance.privacy_level;
    }
    if (privacy_level == null) {
      privacy_level = privacyDefault;
    }
    tmp(privacy_level);
    if (null != stageInstance) {
      closure_5(stageInstance.topic);
    }
  }, items2);
  ({ helpText, publicDisabled: c16 } = require("usePrivacyLevelHelpText")(channel, memo, first2));
  const tmp29 = require("usePrivacyLevelHelpText")(channel, memo, first2);
  require("useMountEffect")(() => {
    let id;
    const track = AnalyticsUtilsDefault.track;
    const START_STAGE_OPENED = AnalyticEvents.START_STAGE_OPENED;
    AnalyticsUtilsDefault;
    if (memo != null) {
      id = memo.id;
    }
    const obj = { stage_instance_id: id, can_start_public_stage: !c16, guild_id: first.guild_id };
    track(START_STAGE_OPENED, obj);
  });
  let obj6 = { style: tmp.header, children: items3 };
  items3 = [obj5(HeaderIcon, { guild }), , ];
  let obj7 = { style: tmp.headerTitle, accessibilityRole: "header", variant: "text-lg/semibold", color: "mobile-text-heading-primary", children: stringResult };
  const Text = tmp17(tmp18[21]).Text;
  if (null == memo) {
    const intl2 = tmp17(tmp18[13]).intl;
    stringResult = intl2.string(tmp17(tmp18[13]).t.DDF0cJ);
  } else {
    let intl = tmp17(tmp18[13]).intl;
    stringResult = intl.string(tmp17(tmp18[13]).t["5BKP4y"]);
  }
  items3[1] = obj5(Text, obj7);
  let obj8 = { style: tmp.headerSubtitle, variant: "text-sm/medium", color: "text-default", children: stringResult1 };
  const Text2 = tmp17(tmp18[21]).Text;
  if (null == memo) {
    const intl4 = tmp17(tmp18[13]).intl;
    stringResult1 = intl4.string(tmp17(tmp18[13]).t.bqQIwa);
  } else {
    const intl3 = tmp17(tmp18[13]).intl;
    stringResult1 = intl3.string(tmp17(tmp18[13]).t["I+9bLx"]);
  }
  items3[2] = obj5(Text2, obj8);
  let obj9 = { keyboardShouldPersistTaps: "handled", showsVerticalScrollIndicator: false, alwaysBounceVertical: false, style: tmp.container, contentContainerStyle: items4, children: items5 };
  items4 = [tmp.contentContainer, ];
  let contentTopSpacing = null;
  const tmp31Result = ref(closure_7, obj6);
  const tmp37 = c8;
  if (null != guild) {
    contentTopSpacing = tmp.contentTopSpacing;
  }
  items4[1] = contentTopSpacing;
  items5 = [tmp31Result, , , , , , , , ];
  let obj10 = { children: intl5.string(tmp17(tmp18[13]).t["5FPBOB"]) };
  const tmp28Result = require("FormHeader");
  intl5 = tmp17(tmp18[13]).intl;
  items5[1] = obj5(tmp28Result, obj10);
  const obj11 = { style: tmp.textInput, showBorder: false, showTopContainer: false, multiline: false, maxLength: canSendStageStartNotification, value: first1, placeholder: intl6.string(require("intl").t.ZwWruY), onChange: tmp3Result[1], autoFocus: true, clearButtonVisibility: require("native").ClearButtonVisibility.WITH_CONTENT };
  const FormInput = tmp17(tmp18[20]).FormInput;
  intl6 = tmp17(tmp18[13]).intl;
  items5[2] = obj5(FormInput, obj11);
  let tmp33Result = null != helpText;
  if (tmp33Result) {
    const obj12 = { style: tmp.optionExplanation, variant: "text-xs/medium", color: "text-default", children: helpText };
    tmp33Result = tmp33(tmp17(tmp18[21]).Text, obj12);
  }
  items5[3] = tmp33Result;
  let tmp33Result5 = null != guild;
  if (tmp33Result5) {
    const obj13 = { guild, channel, onChangeChannel: tmp6 };
    tmp33Result5 = tmp33(tmp28(tmp18[32]), obj13);
  }
  items5[4] = tmp33Result5;
  let tmp33Result6 = null;
  if (tmp21) {
    const obj14 = {
      sendStartNotification: first3,
      onToggle: function handleSetSendStartNotification() {
          const obj = KeyboardManagerUtilsAll;
          const result = obj.dismissGlobalKeyboard();
          closure_12(!first3);
        }
    };
    tmp33Result6 = tmp33(NotificationToggle, obj14);
  }
  items5[5] = tmp33Result6;
  const obj15 = { onConfirmPress, style: tmp.ageVerificationNotice, channelId: channel.id };
  items5[6] = obj5(require("StageChannelAgeVerificationNotice"), obj15);
  let tmp33Result7 = null;
  if (null != obj2) {
    const obj16 = { style: tmp.error, variant: "text-xs/medium", color: "text-feedback-critical", children: obj2.getAnyErrorMessage() };
    const Text3 = tmp17(tmp18[21]).Text;
    tmp33Result7 = tmp33(Text3, obj16);
  }
  items5[7] = tmp33Result7;
  const obj17 = { style: tmp.startButton, children: obj5(Button, obj18) };
  Button = tmp17(tmp18[34]).Button;
  if (null == memo) {
    const intl8 = tmp17(tmp18[13]).intl;
    stringResult2 = intl8.string(tmp17(tmp18[13]).t.s8mM8A);
  } else {
    const intl7 = tmp17(tmp18[13]).intl;
    stringResult2 = intl7.string(tmp17(tmp18[13]).t.K344S7);
  }
  obj18 = {
    text: stringResult2,
    onPress: function handleSave() {
      return obj(...arguments);
    },
    disabled: "" === first1 || null == first2,
    loading: tmp15
  };
  items5[8] = obj5(closure_7, obj17);
  const tmp31Result2 = ref(tmp37, obj9);
  let tmp33Result8 = tmp31Result2;
  if (null == guild) {
    const rect = { top: true, bottom: true, style: tmp.container, children: tmp31(tmp28Result2, obj19) };
    const SafeAreaPaddingView = tmp17(tmp18[35]).SafeAreaPaddingView;
    obj19 = { style: tmp.keyboardAwareView, children: items6 };
    items6 = [, ];
    const obj20 = { guild };
    tmp28Result2 = require("KeyboardAwareView");
    items6[0] = obj5(NavigationBar, obj20);
    items6[1] = tmp31Result2;
    tmp33Result8 = tmp33(SafeAreaPaddingView, rect);
  }
  return tmp33Result8;
});
let result = size.fileFinishedImporting("modules/stage_channels/native/modals/StartStageChannelModal.tsx");

export default forwardRefResult;
export { NotificationToggle };
