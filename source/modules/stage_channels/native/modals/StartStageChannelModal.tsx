// Module ID: 8517
// Function ID: 67816
// Name: closeModal
// Dependencies: [5, 57, 31, 27, 1353, 4947, 653, 1354, 33, 4130, 689, 4337, 4660, 1212, 1273, 7729, 7571, 5513, 566, 5596, 7636, 4126, 8518, 8519, 8520, 4559, 675, 1820, 7562, 5599, 4029, 8521, 8522, 7580, 4543, 5121, 5585, 2]

// Module 8517 (closeModal)
import closure_4 from "MAX_STAGE_TOPIC_LENGTH";
import _slicedToArray from "_slicedToArray";
import importAllResult from "FormHeader";
import get_ActivityIndicator from "dismissGlobalKeyboard";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import MAX_STAGE_TOPIC_LENGTH from "MAX_STAGE_TOPIC_LENGTH";
import { AnalyticEvents } from "ME";
import { GuildScheduledEventPrivacyLevel as closure_13 } from "GUILD_EVENT_MAX_NAME_LENGTH";
import jsxProd from "StageChannelAgeVerificationNoticeContent";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_14;
let closure_15;
let closure_7;
let closure_8;
const require = arg1;
function closeModal() {
  importDefault(4337).popWithKey(closure_11);
}
function NavigationBar(guild) {
  let tmp2 = null;
  if (null == guild.guild) {
    let obj = {};
    const items = [, ];
    ({ contentContainer: arr[0], contentTopSpacing: arr[1] } = tmp);
    obj.style = items;
    obj = { accessibilityRole: "button" };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.cpT0Cq);
    obj.onPress = closeModal;
    obj = { source: importDefault(7729) };
    obj.children = callback2(require(1273) /* Button */.Icon, obj);
    obj.children = callback2(require(4660) /* PressableBase */.PressableOpacity, obj);
    tmp2 = callback2(closure_7, obj);
  }
  return tmp2;
}
function HeaderIcon(guild) {
  guild = guild.guild;
  if (null == guild) {
    let tmp7 = callback2(importDefault(7571), {});
  } else {
    const obj = { style: tmp.guildIcon, size: require(5513) /* makeSizeStyle */.GuildIconSizes.LARGE, guild };
    tmp7 = callback2(importDefault(5513), obj);
    const tmp5 = importDefault(5513);
  }
  return tmp7;
}
class NotificationToggle {
  constructor(arg0) {
    ({ sendStartNotification, onToggle } = global);
    tmp = c16();
    obj = require("initialize");
    items = [];
    items[0] = require("HotspotStore").HotspotStore;
    stateFromStores = obj.useStateFromStores(items, () => {
      const HotspotStore = outer1_0(outer1_3[19]).HotspotStore;
      return HotspotStore.hasHotspot(outer1_0(outer1_3[19]).HotspotLocations.LIVE_STAGE_NOTIFICATION_BADGE);
    });
    tmp3 = jsx;
    obj = { DEPRECATED_style: tmp.notificationToggle };
    obj1 = { style: tmp.label };
    tmp4 = jsxs;
    tmp5 = View;
    obj2 = {};
    intl = require("getSystemLocale").intl;
    obj2.text = intl.string(require("getSystemLocale").t.BYJgew);
    items1 = [, ];
    items1[0] = jsx(require("Form").FormLabel, obj2);
    tmp6 = null;
    if (stateFromStores) {
      tmp7 = jsx;
      tmp8 = View;
      obj3 = {};
      obj3.style = tmp.pill;
      tmp9 = jsx;
      tmp10 = closure_0;
      tmp11 = closure_3;
      num = 21;
      obj4 = { style: null, variant: "text-xxs/bold", color: "text-overlay-light" };
      obj4.style = tmp.pillLabel;
      intl2 = require("getSystemLocale").intl;
      obj4.children = intl2.string(require("getSystemLocale").t.y2b7CA);
      obj3.children = jsx(require("Text").Text, obj4);
      tmp6 = jsx(View, obj3);
    }
    items1[1] = tmp6;
    obj1.children = items1;
    obj.label = tmp4(tmp5, obj1);
    obj.onPress = onToggle;
    obj.trailing = jsx(require("Button").Checkbox, { selected: sendStartNotification });
    return tmp3(require("Form").FormRow, obj);
  }
}
({ View: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
({ MAX_STAGE_TOPIC_LENGTH: closure_10, START_STAGE_CHANNEL_EVENT_MODAL_KEY: closure_11 } = MAX_STAGE_TOPIC_LENGTH);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let obj = { keyboardAwareView: { flex: 1 }, closeButtonContainer: { right: 10 } };
obj = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
obj.container = obj;
obj.contentContainer = { paddingHorizontal: 16 };
obj.contentTopSpacing = { paddingTop: 16 };
obj.header = { alignItems: "center", paddingBottom: 24 };
obj.headerTitle = { marginTop: 16, marginBottom: 8 };
obj.headerSubtitle = { textAlign: "center" };
_createForOfIteratorHelperLoose = { padding: 12, width: "100%", borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, marginBottom: 16 };
obj.textInput = _createForOfIteratorHelperLoose;
obj.startButton = { marginTop: 16 };
obj.error = { paddingTop: 8 };
obj.optionExplanation = { lineHeight: 16, paddingTop: 8 };
obj.guildIcon = { borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
obj.label = { display: "flex", alignItems: "center", flexDirection: "row" };
let obj3 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, paddingHorizontal: 4, paddingVertical: 2, marginStart: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs };
obj.pill = obj3;
obj.pillLabel = { textTransform: "uppercase" };
let obj2 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
obj.notificationToggle = { marginTop: 16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
let obj4 = { marginTop: 16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
obj.ageVerificationNotice = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
let closure_16 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj5 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
const forwardRefResult = importAllResult.forwardRef((channel) => {
  let c16;
  let c8;
  let c9;
  let guild;
  let helpText;
  let importDefault;
  let obj;
  let require;
  let tmp17;
  ({ guild, onStageStarted: require, onClose: importDefault } = channel);
  let first;
  let memo;
  let first1;
  let callback;
  let first2;
  let closure_7;
  c8 = undefined;
  c9 = undefined;
  let c10;
  let first3;
  let closure_12;
  let constants;
  obj = undefined;
  let callback3;
  let callback4;
  function _handleSave() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = first1(tmp);
    return obj(...arguments);
  }
  let tmp = callback4();
  const imperativeHandle = first2.useImperativeHandle(arg1, () => ({
    renderRightButton: function RightButton() {
      const obj = { style: callback().closeButtonContainer, accessibilityRole: "button" };
      const tmp = callback();
      const intl = outer2_0(memo[13]).intl;
      obj.accessibilityLabel = intl.string(outer2_0(memo[13]).t.cpT0Cq);
      obj.source = outer2_1(memo[15]);
      obj.onPress = outer1_1;
      obj.disableColor = true;
      return obj(outer2_1(memo[22]), obj);
    }
  }));
  const tmp4 = callback(first2.useState(channel.channel), 2);
  first = tmp4[0];
  const items = [first.id];
  memo = first2.useMemo(() => _undefined2.getStageInstanceByChannel(first.id), items);
  let topic;
  if (null != memo) {
    topic = memo.topic;
  }
  let str = "";
  if (null != topic) {
    str = topic;
  }
  const tmp8 = callback(first2.useState(str), 2);
  first1 = tmp8[0];
  callback = tmp10;
  const GUILD_ONLY = constants.GUILD_ONLY;
  let privacy_level;
  if (null != memo) {
    privacy_level = memo.privacy_level;
  }
  let tmp13 = GUILD_ONLY;
  if (null != privacy_level) {
    tmp13 = privacy_level;
  }
  const tmp14 = callback(first2.useState(tmp13), 2);
  first2 = tmp14[0];
  closure_7 = tmp14[1];
  [tmp17, c8] = callback(first2.useState(false), 2);
  const tmp16 = callback(first2.useState(false), 2);
  [obj, c9] = callback(first2.useState(null), 2);
  let obj1 = require(memo[23]);
  const canSendStageStartNotification = obj1.useCanSendStageStartNotification(first);
  let obj2 = require(memo[23]);
  let tmp21 = null == memo;
  const defaultSendStartStageNotificationToggle = obj2.useDefaultSendStartStageNotificationToggle(first);
  if (tmp21) {
    tmp21 = canSendStageStartNotification;
  }
  c10 = tmp21;
  let tmp23 = tmp21;
  if (tmp21) {
    tmp23 = defaultSendStartStageNotificationToggle;
  }
  const tmp24 = callback(first2.useState(tmp23), 2);
  first3 = tmp24[0];
  closure_12 = tmp24[1];
  let obj3 = require(memo[18]);
  const items1 = [require(memo[19]).HotspotStore];
  constants = obj3.useStateFromStores(items1, () => {
    const HotspotStore = outer1_0(memo[19]).HotspotStore;
    return HotspotStore.hasHotspot(outer1_0(memo[19]).HotspotLocations.LIVE_STAGE_NOTIFICATION_BADGE);
  });
  obj = { stageInstance: memo, privacyDefault: GUILD_ONLY };
  callback3 = first2.useRef(obj);
  const effect = first2.useEffect(() => {
    closure_15.current = obj;
  });
  const items2 = [first.id];
  const effect1 = first2.useEffect(() => {
    let privacyDefault;
    let stageInstance;
    ({ stageInstance, privacyDefault } = ref.current);
    let privacy_level;
    if (null != stageInstance) {
      privacy_level = stageInstance.privacy_level;
    }
    if (null != privacy_level) {
      privacyDefault = privacy_level;
    }
    closure_7(privacyDefault);
    if (null != stageInstance) {
      _undefined(stageInstance.topic);
    }
  }, items2);
  const tmp18 = callback(first2.useState(null), 2);
  ({ helpText, publicDisabled: c16 } = importDefault(memo[24])(first, memo, first2));
  importDefault(memo[25])(() => {
    let obj = outer1_1(memo[26]);
    obj = {};
    let id;
    if (null != memo) {
      id = memo.id;
    }
    obj.stage_instance_id = id;
    obj.can_start_public_stage = !c16;
    obj.guild_id = first.guild_id;
    obj.track(lib.START_STAGE_OPENED, obj);
  });
  obj = { style: tmp.header };
  const items3 = [obj(HeaderIcon, { guild }), , ];
  obj1 = { style: tmp.headerTitle, accessibilityRole: "header", variant: "text-lg/semibold", color: "mobile-text-heading-primary" };
  if (null == memo) {
    const intl2 = require(memo[13]).intl;
    let stringResult = intl2.string(require(memo[13]).t.DDF0cJ);
  } else {
    let intl = require(memo[13]).intl;
    stringResult = intl.string(require(memo[13]).t["5BKP4y"]);
  }
  obj1.children = stringResult;
  items3[1] = obj(require(memo[21]).Text, obj1);
  obj2 = { style: tmp.headerSubtitle, variant: "text-sm/medium", color: "text-default" };
  if (null == memo) {
    const intl4 = require(memo[13]).intl;
    let stringResult1 = intl4.string(require(memo[13]).t.bqQIwa);
  } else {
    const intl3 = require(memo[13]).intl;
    stringResult1 = intl3.string(require(memo[13]).t["I+9bLx"]);
  }
  obj2.children = stringResult1;
  items3[2] = obj(require(memo[21]).Text, obj2);
  obj.children = items3;
  obj3 = { keyboardShouldPersistTaps: "handled", showsVerticalScrollIndicator: false, alwaysBounceVertical: false, style: tmp.container };
  const items4 = [tmp.contentContainer, ];
  let contentTopSpacing = null;
  const tmp28 = importDefault(memo[24])(first, memo, first2);
  const tmp30 = callback3;
  const tmp31 = closure_7;
  const tmp32 = obj;
  const tmp38 = obj;
  if (null != guild) {
    contentTopSpacing = tmp.contentTopSpacing;
  }
  items4[1] = contentTopSpacing;
  obj3.contentContainerStyle = items4;
  const items5 = [callback3(closure_7, obj), , , , , , , , ];
  const obj4 = {};
  const tmp30Result = callback3(closure_7, obj);
  const tmp45 = callback3;
  const tmp46 = c8;
  const intl5 = require(memo[13]).intl;
  obj4.children = intl5.string(require(memo[13]).t["5FPBOB"]);
  items5[1] = obj(importDefault(memo[31]), obj4);
  const obj5 = { style: tmp.textInput, showBorder: false, showTopContainer: false, multiline: false, maxLength: c10, value: first1 };
  const intl6 = require(memo[13]).intl;
  obj5.placeholder = intl6.string(require(memo[13]).t.ZwWruY);
  obj5.onChange = tmp8[1];
  obj5.autoFocus = true;
  obj5.clearButtonVisibility = require(memo[14]).ClearButtonVisibility.WITH_CONTENT;
  items5[2] = obj(require(memo[20]).FormInput, obj5);
  let tmp49 = null != helpText;
  if (tmp49) {
    const obj6 = { style: tmp.optionExplanation, variant: "text-xs/medium", color: "text-default", children: helpText };
    tmp49 = obj(require(memo[21]).Text, obj6);
  }
  items5[3] = tmp49;
  let tmp53 = null != guild;
  if (tmp53) {
    const obj7 = { guild, channel: first, onChangeChannel: tmp4[1] };
    tmp53 = obj(importDefault(memo[32]), obj7);
  }
  items5[4] = tmp53;
  let tmp57 = null;
  if (tmp21) {
    const obj8 = {
      sendStartNotification: first3,
      onToggle: function handleSetSendStartNotification() {
          const result = first(memo[27]).dismissGlobalKeyboard();
          lib(!first3);
        }
    };
    tmp57 = obj(NotificationToggle, obj8);
  }
  items5[5] = tmp57;
  items5[6] = obj(importDefault(memo[33]), { onConfirmPress: _handleSave, style: tmp.ageVerificationNotice, channelId: first.id });
  let tmp60 = null;
  if (null != obj) {
    const obj10 = { style: tmp.error, variant: "text-xs/medium", color: "text-feedback-critical", children: obj.getAnyErrorMessage() };
    tmp60 = obj(require(memo[21]).Text, obj10);
  }
  items5[7] = tmp60;
  const obj11 = { style: tmp.startButton };
  const obj12 = {};
  if (null == memo) {
    const intl8 = require(memo[13]).intl;
    let stringResult2 = intl8.string(require(memo[13]).t.s8mM8A);
  } else {
    const intl7 = require(memo[13]).intl;
    stringResult2 = intl7.string(require(memo[13]).t.K344S7);
  }
  obj12.text = stringResult2;
  obj12.onPress = function handleSave() {
    return _handleSave(...arguments);
  };
  obj12.disabled = "" === first1 || null == first2;
  obj12.loading = tmp17;
  obj11.children = obj(require(memo[34]).Button, obj12);
  items5[8] = obj(closure_7, obj11);
  obj3.children = items5;
  const tmp45Result = tmp45(tmp46, obj3);
  let tmp73 = tmp45Result;
  if (null == guild) {
    const obj13 = { top: true, bottom: true, style: tmp.container };
    const obj14 = { style: tmp.keyboardAwareView };
    const obj15 = { guild };
    const items6 = [obj(NavigationBar, obj15), tmp45Result];
    obj14.children = items6;
    obj13.children = callback3(importDefault(memo[36]), obj14);
    tmp73 = obj(require(memo[35]).SafeAreaPaddingView, obj13);
    const tmp79 = importDefault(memo[36]);
  }
  return tmp73;
});
let result = require("result").fileFinishedImporting("modules/stage_channels/native/modals/StartStageChannelModal.tsx");

export default forwardRefResult;
export { NotificationToggle };
