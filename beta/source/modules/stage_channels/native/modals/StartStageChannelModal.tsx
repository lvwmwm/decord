// Module ID: 10087
// Function ID: 10088
// Name: StartStageChannelModal
// Dependencies: [5, 32, 19, 17, 2050, 5665, 1078, 2051, 21, 4790, 580, 4993, 558, 568, 1119, 5373, 1181, 7368, 8715, 5831, 7492, 504, 8908, 4786, 10056, 10088, 10089, 5235, 1245, 1879, 8706, 7495, 4691, 10090, 10091, 8718, 5220, 7403, 7319, 2]

// Module 10087 (StartStageChannelModal)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import native from "native" /* 1181 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1879 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4993 */;
import Pressables from "Pressables" /* 5373 */;
import GuildIcon from "GuildIcon" /* 5831 */;
import _modDef7368 from "module_7368" /* 7368 */;
import HotspotStore2 from "HotspotStore" /* 7492 */;
import StageSparkleDefault from "StageSparkle" /* 8715 */;
import Form from "Form" /* 8908 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import StageInstanceStore from "StageInstanceStore" /* 2050 */;

const require = globalThis.__r;
const GuildIconDefault = GuildIcon;

require = fn;
function closeModal() {
  ModalActionCreatorsDefault.popWithKey(closure_1_11);
}
get_ActivityIndicator = fn(17);
({ View: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
const StageChannelsConstants = fn(5665);
({ MAX_STAGE_TOPIC_LENGTH: c10, START_STAGE_CHANNEL_EVENT_MODAL_KEY: closure_11 } = StageChannelsConstants);
const AnalyticEvents = fn(1078).AnalyticEvents;
let constants = fn(2051).GuildScheduledEventPrivacyLevel;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4790);
let obj = { keyboardAwareView: { flex: 1 }, closeButtonContainer: { right: 10 }, container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, contentContainer: { paddingHorizontal: 16 }, contentTopSpacing: { paddingTop: 16 }, header: { alignItems: "center", paddingBottom: 24 }, headerTitle: { marginTop: 16, marginBottom: 8 }, headerSubtitle: { textAlign: "center" }, textInput: null, startButton: null, error: null, optionExplanation: null, guildIcon: null, label: null, pill: null, pillLabel: null, notificationToggle: null, ageVerificationNotice: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.textInput = { padding: 12, width: "100%", borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, marginBottom: 16 };
obj.startButton = { marginTop: 16 };
obj.error = { paddingTop: 8 };
obj.optionExplanation = { lineHeight: 16, paddingTop: 8 };
let obj4 = { padding: 12, width: "100%", borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, marginBottom: 16 };
obj.guildIcon = { borderRadius: nativeDefault.radii.md };
obj.label = { display: "flex", alignItems: "center", flexDirection: "row" };
let obj5 = { borderRadius: nativeDefault.radii.md };
obj.pill = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, paddingHorizontal: 4, paddingVertical: 2, marginStart: 8, borderRadius: nativeDefault.radii.xs };
obj.pillLabel = { textTransform: "uppercase" };
let obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, paddingHorizontal: 4, paddingVertical: 2, marginStart: 8, borderRadius: nativeDefault.radii.xs };
obj.notificationToggle = { marginTop: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm };
let obj7 = { marginTop: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm };
obj.ageVerificationNotice = { marginBottom: nativeDefault.space.PX_16 };
let closure_16 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  const cResult = c.c(7);
  const tmp4 = closure_16();
  if (null != guild.guild) {
    return null;
  } else {
    if (cResult[0] === tmp4.contentContainer) {
      if (cResult[1] === tmp4.contentTopSpacing) {
        let tmp5 = cResult[2];
      }
      const _Symbol = Symbol;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1119).intl;
        const stringResult = intl.string(tmp(1119).t.cpT0Cq);
        cResult[3] = stringResult;
        let tmp7 = stringResult;
      } else {
        tmp7 = cResult[3];
      }
      const _Symbol2 = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { accessibilityRole: "button", accessibilityLabel: tmp7, onPress: closeModal, children: null };
        const obj3 = { source: _modDef7368 };
        obj2.children = state(tmp(1181).Icon, obj3);
        const tmp13 = state(tmp(5373).PressableOpacity, obj2);
        cResult[4] = tmp13;
        let tmp9 = tmp13;
      } else {
        tmp9 = cResult[4];
      }
      if (cResult[5] !== tmp5) {
        const obj4 = { style: tmp5, children: tmp9 };
        const tmp17 = state(React5, obj4);
        cResult[5] = tmp5;
        cResult[6] = tmp17;
      }
    }
    const items = [, ];
    ({ contentContainer: arr[0], contentTopSpacing: arr[1] } = tmp4);
    cResult[0] = tmp4.contentContainer;
    cResult[1] = tmp4.contentTopSpacing;
    cResult[2] = items;
    tmp5 = items;
  }
}) : ((guild) => {
  let tmp2 = null;
  if (null == guild.guild) {
    const obj = { style: null, children: null };
    const items = [, ];
    ({ contentContainer: arr[0], contentTopSpacing: arr[1] } = tmp);
    obj.style = items;
    const obj2 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
    const intl = util.intl;
    obj2.accessibilityLabel = intl.string(util.t.cpT0Cq);
    obj2.onPress = closeModal;
    const obj3 = { source: _modDef7368 };
    obj2.children = state(native.Icon, obj3);
    obj.children = state(Pressables.PressableOpacity, obj2);
    tmp2 = state(React5, obj);
  }
  return tmp2;
});
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let tmp2 = dependencyMap;
  const cResult = c.c(4);
  guild = guild.guild;
  const tmp4 = closure_16();
  if (null == guild) {
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      tmp2 = state(StageSparkleDefault, {});
      cResult[0] = tmp2;
      let first = tmp2;
    } else {
      first = cResult[0];
    }
  } else {
    if (cResult[1] === guild) {
      if (cResult[2] === tmp4.guildIcon) {
        let tmp5 = cResult[3];
      }
      return tmp5;
    }
    const obj2 = { style: tmp4.guildIcon, size: GuildIcon.GuildIconSizes.LARGE, guild };
    const tmp9 = state(GuildIconDefault, obj2);
    cResult[1] = guild;
    cResult[2] = tmp4.guildIcon;
    cResult[3] = tmp9;
    tmp5 = tmp9;
  }
}) : ((guild) => {
  guild = guild.guild;
  if (null == guild) {
    let tmp7 = state(StageSparkleDefault, {});
  } else {
    const obj = { style: tmp.guildIcon, size: GuildIcon.GuildIconSizes.LARGE, guild };
    tmp7 = state(GuildIconDefault, obj);
  }
  return tmp7;
});
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(17);
  ({ sendStartNotification, onToggle } = arg0);
  const tmp4 = closure_16();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [tmp(7492).HotspotStore];
    const fn = function n() {
      const HotspotStore = HotspotStore2.HotspotStore;
      return HotspotStore.hasHotspot(HotspotStore2.HotspotLocations.LIVE_STAGE_NOTIFICATION_BADGE);
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { text: null };
    const intl = tmp(1119).intl;
    obj2.text = intl.string(tmp(1119).t.BYJgew);
    const tmp10 = state(tmp(8908).FormLabel, obj2);
    cResult[2] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === stateFromStores) {
    if (cResult[4] === tmp4.pill) {
      if (cResult[5] === tmp4.pillLabel) {
        let tmp11 = cResult[6];
      }
      if (cResult[7] === tmp4.label) {
        if (cResult[8] === tmp11) {
          let tmp15 = cResult[9];
        }
        if (cResult[10] !== sendStartNotification) {
          const obj3 = { selected: sendStartNotification };
          const tmp21 = state(tmp(1181).Checkbox, obj3);
          cResult[10] = sendStartNotification;
          cResult[11] = tmp21;
          let tmp19 = tmp21;
        } else {
          tmp19 = cResult[11];
        }
        if (cResult[12] === onToggle) {
          if (cResult[13] === tmp4.notificationToggle) {
            if (cResult[14] === tmp15) {
              if (cResult[15] === tmp19) {
                let tmp22 = cResult[16];
              }
              return tmp22;
            }
          }
        }
        const obj4 = { DEPRECATED_style: tmp4.notificationToggle, label: tmp15, onPress: onToggle, trailing: tmp19 };
        const tmp24 = state(tmp(8908).FormRow, obj4);
        cResult[12] = onToggle;
        cResult[13] = tmp4.notificationToggle;
        cResult[14] = tmp15;
        cResult[15] = tmp19;
        cResult[16] = tmp24;
        tmp22 = tmp24;
      }
      const obj5 = { style: tmp4.label, children: null };
      const items1 = [tmp8, tmp11];
      obj5.children = items1;
      const tmp18 = closure_1_15(React5, obj5);
      cResult[7] = tmp4.label;
      cResult[8] = tmp11;
      cResult[9] = tmp18;
      tmp15 = tmp18;
    }
  }
  let tmp12 = null;
  if (stateFromStores) {
    const obj6 = { style: tmp4.pill, children: null };
    const obj7 = { style: tmp4.pillLabel, variant: "text-xxs/bold", color: "text-overlay-light", children: null };
    const intl2 = tmp(1119).intl;
    obj7.children = intl2.string(tmp(1119).t.y2b7CA);
    obj6.children = state(tmp(4786).Text, obj7);
    tmp12 = state(React5, obj6);
  }
  cResult[3] = stateFromStores;
  cResult[4] = tmp4.pill;
  cResult[5] = tmp4.pillLabel;
  cResult[6] = tmp12;
  tmp11 = tmp12;
}) : ((arg0) => {
  ({ sendStartNotification, onToggle } = arg0);
  const tmp = closure_16();
  const items = [HotspotStore2.HotspotStore];
  const stateFromStores = initialize.useStateFromStores(items, () => {
    const HotspotStore = HotspotStore2.HotspotStore;
    return HotspotStore.hasHotspot(HotspotStore2.HotspotLocations.LIVE_STAGE_NOTIFICATION_BADGE);
  });
  const obj2 = { DEPRECATED_style: tmp.notificationToggle, label: null, onPress: null, trailing: null };
  const obj3 = { style: tmp.label, children: null };
  const obj4 = { text: null };
  const intl = util.intl;
  obj4.text = intl.string(util.t.BYJgew);
  const items1 = [state(Form.FormLabel, obj4), ];
  let tmp5Result = null;
  if (stateFromStores) {
    const obj5 = { style: tmp.pill, children: null };
    const obj6 = { style: tmp.pillLabel, variant: "text-xxs/bold", color: "text-overlay-light", children: null };
    const intl2 = tmp2(1119).intl;
    obj6.children = intl2.string(tmp2(1119).t.y2b7CA);
    obj5.children = tmp5(tmp2(4786).Text, obj6);
    tmp5Result = tmp5(tmp7, obj5);
  }
  items1[1] = tmp5Result;
  obj3.children = items1;
  obj2.label = closure_1_15(React5, obj3);
  obj2.onPress = onToggle;
  obj2.trailing = state(native.Checkbox, { selected: sendStartNotification });
  return state(Form.FormRow, obj2);
});
let closure_20 = tmp5;
let obj8 = { marginBottom: nativeDefault.space.PX_16 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/native/modals/StartStageChannelModal.tsx");

export default noop.forwardRef((channel, ref) => {
  ({ guild, onStageStarted: require, onClose: importDefault } = channel);
  channel = undefined;
  first1 = undefined;
  _slicedToArray = undefined;
  let first2;
  closure_7 = undefined;
  c8 = undefined;
  c9 = undefined;
  let canSendStageStartNotification;
  let first3;
  closure_12 = undefined;
  constants = undefined;
  let obj5;
  ref = undefined;
  c16 = undefined;
  onConfirmPress = async function _handleSave(arg0, value) {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
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
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_1 = tmp3;
            closure_0 = tmp7;
            closure_128_0 = undefined;
            if ("" !== first1) {
              if (null != first2) {
                closure_2_8(true);
                StageInstanceStore(null);
                const result = tmp66(1879).dismissGlobalKeyboard();
                dependencyMap = 1;
                if (null != memo) {
                  c4 = 3;
                  c5 = 1;
                  const obj8 = { value: tmp66(8706).editStage(channel, tmp75, tmp47), done: false };
                  return obj8;
                } else {
                  obj5 = tmp66(8706);
                  c4 = 2;
                  c5 = 1;
                  const obj9 = { value: obj5.startStage(channel, tmp75, tmp47, first3), done: false };
                  return obj9;
                }
                const obj4 = tmp66(1879);
              }
            }
          }
        } else {
          if (1 === tmp7) {
            dependencyMap = 0;
            closure_128_1 = tmp66;
            const aPIError = new closure_0(4691).APIError(closure_128_1);
            closure_128_0 = aPIError;
            closure_129_9(closure_128_0);
            closure_129_8(false);
          } else {
            if (2 === tmp7) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 !== 2) {
                let tmp8 = closure_129_10;
                if (closure_129_10) {
                  tmp8 = closure_129_13;
                }
                if (tmp8) {
                  tmp66(7495).hideHotspot(closure_0(7492).HotspotLocations.LIVE_STAGE_NOTIFICATION_BADGE);
                  const obj2 = tmp66(7495);
                }
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 0;
              c5 = 3;
              const obj = { value, done: true };
              return obj;
            }
            closure_129_8(false);
            closure_129_9(null);
            if (null != closure_129_1) {
              closure_129_1();
            } else {
              closure_1_17();
            }
            if (closure_129_0 != null) {
              tmp27(closure_129_2);
            }
            dependencyMap = 0;
          }
          dependencyMap = 0;
          c5 = 3;
          const obj10 = { value, done: true };
          return obj10;
        }
        c5 = 3;
      } catch (tmp66) {
        if (tmp4 === dependencyMap) {
          c5 = tmp2;
          throw tmp66;
        } else {
          c4 = tmp;
        }
      }
    }
  };
  let tmp = c16();
  const imperativeHandle = first2.useImperativeHandle(ref, () => ({
    renderRightButton: function RightButton() {
      const obj = { style: c16().closeButtonContainer, accessibilityRole: "button", accessibilityLabel: null, source: null, onPress: null, disableColor: true };
      const tmp = c16();
      const intl = require("util").intl;
      obj.accessibilityLabel = intl.string(require("util").t.cpT0Cq);
      obj.source = require("module_7368");
      obj.onPress = onPress;
      return obj5(require("TouchableHitBox"), obj);
    }
  }));
  const tmp4 = _slicedToArray(first2.useState(channel.channel), 2);
  channel = tmp4[0];
  const items = [channel.id];
  const memo = first2.useMemo(() => StageInstanceStore.getStageInstanceByChannel(first.id), items);
  let str;
  if (memo != null) {
    str = memo.topic;
  }
  if (str == null) {
    str = "";
  }
  [first1, obj11.onChange] = first2.useState(str);
  _slicedToArray = tmp9;
  const GUILD_ONLY = constants.GUILD_ONLY;
  let privacy_level;
  if (memo != null) {
    privacy_level = memo.privacy_level;
  }
  if (privacy_level == null) {
    privacy_level = GUILD_ONLY;
  }
  const tmp3Result5 = _slicedToArray(first2.useState(privacy_level), 2);
  first2 = tmp3Result5[0];
  closure_7 = tmp3Result5[1];
  [tmp14, c8] = _slicedToArray(first2.useState(false), 2);
  const tmp3Result6 = _slicedToArray(first2.useState(false), 2);
  [obj2, c9] = _slicedToArray(first2.useState(null), 2);
  const tmp3Result7 = _slicedToArray(first2.useState(null), 2);
  canSendStageStartNotification = require("LiveStageNotificationsUtils").useCanSendStageStartNotification(channel);
  let obj3 = require("LiveStageNotificationsUtils");
  let tmp20 = null == memo;
  const defaultSendStartStageNotificationToggle = require("LiveStageNotificationsUtils").useDefaultSendStartStageNotificationToggle(channel);
  if (tmp20) {
    tmp20 = canSendStageStartNotification;
  }
  canSendStageStartNotification = tmp20;
  let tmp21 = tmp20;
  if (tmp20) {
    tmp21 = defaultSendStartStageNotificationToggle;
  }
  const tmp3Result8 = _slicedToArray(first2.useState(tmp21), 2);
  first3 = tmp3Result8[0];
  closure_12 = tmp3Result8[1];
  let obj4 = require("LiveStageNotificationsUtils");
  const items1 = [require("HotspotStore").HotspotStore];
  constants = require("initialize").useStateFromStores(items1, () => {
    const HotspotStore = require("HotspotStore").HotspotStore;
    return HotspotStore.hasHotspot(require("HotspotStore").HotspotLocations.LIVE_STAGE_NOTIFICATION_BADGE);
  });
  obj5 = { stageInstance: memo, privacyDefault: GUILD_ONLY };
  ref = obj.useRef(obj5);
  const effect = obj.useEffect(() => {
    closure_15.current = obj5;
  });
  const items2 = [channel.id];
  const effect1 = obj.useEffect(() => {
    const current = ref.current;
    const stageInstance = current.stageInstance;
    let privacy_level;
    if (stageInstance != null) {
      privacy_level = stageInstance.privacy_level;
    }
    if (privacy_level == null) {
      privacy_level = current.privacyDefault;
    }
    closure_7(privacy_level);
    if (null != stageInstance) {
      closure_5(stageInstance.topic);
    }
  }, items2);
  const tmp16Result = require("initialize");
  ({ helpText, publicDisabled: c16 } = require("usePrivacyLevelHelpText")(channel, memo, first2));
  require("useMountEffect")(() => {
    let id;
    if (memo != null) {
      id = memo.id;
    }
    AnalyticsUtilsDefault.track(AnalyticEvents.START_STAGE_OPENED, { stage_instance_id: id, can_start_public_stage: !c16, guild_id: first.guild_id });
  });
  let obj6 = { style: tmp.header, children: null };
  const items3 = [obj5(closure_19, { guild }), , ];
  const obj7 = { style: tmp.headerTitle, accessibilityRole: "header", variant: "text-lg/semibold", color: "mobile-text-heading-primary", children: null };
  if (null == memo) {
    const intl2 = tmp16(tmp17[14]).intl;
    let stringResult = intl2.string(tmp16(tmp17[14]).t.DDF0cJ);
  } else {
    let intl = tmp16(tmp17[14]).intl;
    stringResult = intl.string(tmp16(tmp17[14]).t["5BKP4y"]);
  }
  obj7.children = stringResult;
  items3[1] = obj5(require("Text/Text").Text, obj7);
  let obj8 = { style: tmp.headerSubtitle, variant: "text-sm/medium", color: "text-default", children: null };
  if (null == memo) {
    const intl4 = tmp16(tmp17[14]).intl;
    let stringResult1 = intl4.string(tmp16(tmp17[14]).t.bqQIwa);
  } else {
    const intl3 = tmp16(tmp17[14]).intl;
    stringResult1 = intl3.string(tmp16(tmp17[14]).t["I+9bLx"]);
  }
  obj8.children = stringResult1;
  items3[2] = obj5(require("Text/Text").Text, obj8);
  obj6.children = items3;
  let obj9 = { keyboardShouldPersistTaps: "handled", showsVerticalScrollIndicator: false, alwaysBounceVertical: false, style: tmp.container, contentContainerStyle: null, children: null };
  const items4 = [tmp.contentContainer, ];
  let contentTopSpacing = null;
  const tmp27 = require("usePrivacyLevelHelpText")(channel, memo, first2);
  if (null != guild) {
    contentTopSpacing = tmp.contentTopSpacing;
  }
  items4[1] = contentTopSpacing;
  obj9.contentContainerStyle = items4;
  const items5 = [ref(closure_7, obj6), , , , , , , , ];
  let obj10 = { children: null };
  const tmp29Result = ref(closure_7, obj6);
  const tmp35 = c8;
  const intl5 = tmp16(tmp17[14]).intl;
  obj10.children = intl5.string(require("util").t["5FPBOB"]);
  items5[1] = obj5(require("FormHeader"), obj10);
  const obj11 = { style: tmp.textInput, showBorder: false, showTopContainer: false, multiline: false, maxLength: canSendStageStartNotification, value: first1, placeholder: null, onChange: null, autoFocus: true, clearButtonVisibility: null };
  const intl6 = tmp16(tmp17[14]).intl;
  obj11.placeholder = intl6.string(require("util").t.ZwWruY);
  obj11.clearButtonVisibility = require("native").ClearButtonVisibility.WITH_CONTENT;
  items5[2] = obj5(require("Form").FormInput, obj11);
  let tmp31Result = null != helpText;
  if (tmp31Result) {
    const obj12 = { style: tmp.optionExplanation, variant: "text-xs/medium", color: "text-default", children: helpText };
    tmp31Result = tmp31(tmp16(tmp17[23]).Text, obj12);
  }
  items5[3] = tmp31Result;
  let tmp31Result5 = null != guild;
  if (tmp31Result5) {
    const obj13 = { guild, channel, onChangeChannel: tmp4[1] };
    tmp31Result5 = tmp31(tmp26(tmp17[34]), obj13);
  }
  items5[4] = tmp31Result5;
  let tmp31Result6 = null;
  if (tmp20) {
    const obj14 = {
      sendStartNotification: first3,
      onToggle: function handleSetSendStartNotification() {
          const result = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
          closure_12(!first3);
        }
    };
    tmp31Result6 = tmp31(closure_20, obj14);
  }
  items5[5] = tmp31Result6;
  items5[6] = obj5(require("StageChannelAgeVerificationNotice"), { onConfirmPress, style: tmp.ageVerificationNotice, channelId: channel.id });
  let tmp31Result7 = null;
  if (null != obj2) {
    const obj16 = { style: tmp.error, variant: "text-xs/medium", color: "text-feedback-critical", children: obj2.getAnyErrorMessage() };
    tmp31Result7 = tmp31(tmp16(tmp17[23]).Text, obj16);
  }
  items5[7] = tmp31Result7;
  const obj17 = { style: tmp.startButton, children: null };
  if (null == memo) {
    const intl8 = tmp16(tmp17[14]).intl;
    let stringResult2 = intl8.string(tmp16(tmp17[14]).t.s8mM8A);
  } else {
    const intl7 = tmp16(tmp17[14]).intl;
    stringResult2 = intl7.string(tmp16(tmp17[14]).t.K344S7);
  }
  obj17.children = obj5(require("components/Button/Button").Button, {
    text: stringResult2,
    onPress: function handleSave() {
      const self = this;
      const apply = closure_17.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    },
    disabled: "" === first1 || null == first2,
    loading: tmp14
  });
  items5[8] = obj5(closure_7, obj17);
  obj9.children = items5;
  const tmp29Result2 = ref(tmp35, obj9);
  let tmp31Result8 = tmp29Result2;
  if (null == guild) {
    const rect = { top: true, bottom: true, style: tmp.container, children: null };
    const obj19 = { style: tmp.keyboardAwareView, children: null };
    const obj20 = { guild };
    const items6 = [tmp31(closure_18, obj20), tmp29Result2];
    obj19.children = items6;
    rect.children = tmp29(tmp26(tmp17[38]), obj19);
    tmp31Result8 = tmp31(tmp16(tmp17[37]).SafeAreaPaddingView, rect);
    const tmp26Result2 = tmp26(tmp17[38]);
  }
  return tmp31Result8;
});
export const NotificationToggle = tmp5;
