// Module ID: 8466
// Function ID: 67528
// Name: closeModal
// Dependencies: []

// Module 8466 (closeModal)
function closeModal() {
  importDefault(dependencyMap[11]).popWithKey(closure_11);
}
function NavigationBar(guild) {
  let tmp2 = null;
  if (null == guild.guild) {
    let obj = {};
    const items = [, ];
    ({ contentContainer: arr[0], contentTopSpacing: arr[1] } = tmp);
    obj.style = items;
    obj = { accessibilityRole: "button" };
    const intl = arg1(dependencyMap[13]).intl;
    obj.accessibilityLabel = intl.string(arg1(dependencyMap[13]).t.cpT0Cq);
    obj.onPress = closeModal;
    obj = { source: importDefault(dependencyMap[15]) };
    obj.children = callback2(arg1(dependencyMap[14]).Icon, obj);
    obj.children = callback2(arg1(dependencyMap[12]).PressableOpacity, obj);
    tmp2 = callback2(closure_7, obj);
  }
  return tmp2;
}
function HeaderIcon(guild) {
  guild = guild.guild;
  if (null == guild) {
    let tmp7 = callback2(importDefault(dependencyMap[16]), {});
  } else {
    const obj = { style: tmp.guildIcon, size: arg1(dependencyMap[17]).GuildIconSizes.LARGE, guild };
    tmp7 = callback2(importDefault(dependencyMap[17]), obj);
    const tmp5 = importDefault(dependencyMap[17]);
  }
  return tmp7;
}
class NotificationToggle {
  constructor(arg0) {
    ({ sendStartNotification, onToggle } = global);
    tmp = closure_16();
    obj = arg1(dependencyMap[18]);
    items = [];
    items[0] = arg1(dependencyMap[19]).HotspotStore;
    stateFromStores = obj.useStateFromStores(items, () => {
      const HotspotStore = callback(closure_3[19]).HotspotStore;
      return HotspotStore.hasHotspot(callback(closure_3[19]).HotspotLocations.LIVE_STAGE_NOTIFICATION_BADGE);
    });
    tmp3 = jsx;
    obj = { DEPRECATED_style: tmp.notificationToggle };
    obj1 = { style: tmp.label };
    tmp4 = jsxs;
    tmp5 = View;
    obj2 = {};
    intl = arg1(dependencyMap[13]).intl;
    obj2.text = intl.string(arg1(dependencyMap[13]).t.BYJgew);
    items1 = [, ];
    items1[0] = jsx(arg1(dependencyMap[20]).FormLabel, obj2);
    tmp6 = null;
    if (stateFromStores) {
      tmp7 = jsx;
      tmp8 = View;
      obj3 = {};
      obj3.style = tmp.pill;
      tmp9 = jsx;
      tmp10 = arg1;
      tmp11 = dependencyMap;
      num = 21;
      obj4 = {};
      obj4.style = tmp.pillLabel;
      intl2 = arg1(dependencyMap[13]).intl;
      obj4.children = intl2.string(arg1(dependencyMap[13]).t.y2b7CA);
      obj3.children = jsx(arg1(dependencyMap[21]).Text, obj4);
      tmp6 = jsx(View, obj3);
    }
    items1[1] = tmp6;
    obj1.children = items1;
    obj.label = tmp4(tmp5, obj1);
    obj.onPress = onToggle;
    obj.trailing = jsx(arg1(dependencyMap[14]).Checkbox, { selected: sendStartNotification });
    return tmp3(arg1(dependencyMap[20]).FormRow, obj);
  }
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
const importAllResult = importAll(dependencyMap[2]);
({ View: closure_7, ScrollView: closure_8 } = arg1(dependencyMap[3]));
let closure_9 = importDefault(dependencyMap[4]);
const tmp2 = arg1(dependencyMap[3]);
({ MAX_STAGE_TOPIC_LENGTH: closure_10, START_STAGE_CHANNEL_EVENT_MODAL_KEY: closure_11 } = arg1(dependencyMap[5]));
const AnalyticEvents = arg1(dependencyMap[6]).AnalyticEvents;
let closure_13 = arg1(dependencyMap[7]).GuildScheduledEventPrivacyLevel;
const tmp3 = arg1(dependencyMap[5]);
({ jsx: closure_14, jsxs: closure_15 } = arg1(dependencyMap[8]));
let obj1 = arg1(dependencyMap[9]);
let obj = { keyboardAwareView: { flex: 1 }, closeButtonContainer: { right: 10 } };
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
obj.contentContainer = { paddingHorizontal: 16 };
obj.contentTopSpacing = { paddingTop: 16 };
obj.header = { guild: 24, body: "recent_games_enabled" };
obj.headerTitle = {};
obj.headerSubtitle = { textAlign: "center" };
obj1 = { borderRadius: importDefault(dependencyMap[10]).radii.xs, backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_BASE_LOWEST };
obj.textInput = obj1;
obj.startButton = { marginTop: 16 };
obj.error = { paddingTop: 8 };
obj.optionExplanation = {};
const tmp4 = arg1(dependencyMap[8]);
obj.guildIcon = { borderRadius: importDefault(dependencyMap[10]).radii.md };
obj.label = {};
const obj3 = { flexDirection: "be0495259d7800ba5ff04ac01243104d", flexWrap: "LocationIcon", justifyContent: "png", paddingHorizontal: null, backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_BRAND, borderRadius: importDefault(dependencyMap[10]).radii.xs };
obj.pill = obj3;
obj.pillLabel = { textTransform: "uppercase" };
const obj2 = { borderRadius: importDefault(dependencyMap[10]).radii.md };
obj.notificationToggle = { marginTop: 16, backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[10]).radii.sm };
const obj4 = { marginTop: 16, backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[10]).radii.sm };
obj.ageVerificationNotice = { marginBottom: importDefault(dependencyMap[10]).space.PX_16 };
let closure_16 = obj1.createStyles(obj);
const obj5 = { marginBottom: importDefault(dependencyMap[10]).space.PX_16 };
const forwardRefResult = importAllResult.forwardRef((channel) => {
  let guild;
  let helpText;
  let obj;
  let tmp17;
  ({ guild, onStageStarted: closure_0, onClose: closure_1 } = channel);
  let importAll;
  let dependencyMap;
  let closure_4;
  let callback;
  let importAllResult;
  let closure_7;
  let closure_8;
  let closure_9;
  let tmp21;
  let first3;
  let closure_12;
  let constants;
  obj = undefined;
  let callback3;
  let callback4;
  function _handleSave() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = first1(tmp);
    const _handleSave = obj;
    return obj(...arguments);
  }
  const tmp = callback4();
  const imperativeHandle = importAllResult.useImperativeHandle(arg1, () => ({
    renderRightButton: function RightButton() {
      const obj = { style: callback4().closeButtonContainer, accessibilityRole: "button" };
      const tmp = callback4();
      const intl = callback(closure_3[13]).intl;
      obj.accessibilityLabel = intl.string(callback(closure_3[13]).t.cpT0Cq);
      obj.source = callback2(closure_3[15]);
      obj.onPress = callback2;
      obj.disableColor = true;
      return callback3(callback2(closure_3[22]), obj);
    }
  }));
  const tmp4 = callback(importAllResult.useState(channel.channel), 2);
  const first = tmp4[0];
  importAll = first;
  const items = [first.id];
  const memo = importAllResult.useMemo(() => stageInstanceByChannel.getStageInstanceByChannel(first.id), items);
  dependencyMap = memo;
  let topic;
  if (null != memo) {
    topic = memo.topic;
  }
  let str = "";
  if (null != topic) {
    str = topic;
  }
  const tmp8 = callback(importAllResult.useState(str), 2);
  const first1 = tmp8[0];
  closure_4 = first1;
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
  const tmp14 = callback(importAllResult.useState(tmp13), 2);
  const first2 = tmp14[0];
  importAllResult = first2;
  closure_7 = tmp14[1];
  [tmp17, closure_8] = callback(importAllResult.useState(false), 2);
  const tmp16 = callback(importAllResult.useState(false), 2);
  [obj, closure_9] = callback(importAllResult.useState(null), 2);
  let obj1 = arg1(dependencyMap[23]);
  const canSendStageStartNotification = obj1.useCanSendStageStartNotification(first);
  let obj2 = arg1(dependencyMap[23]);
  tmp21 = null == memo;
  const defaultSendStartStageNotificationToggle = obj2.useDefaultSendStartStageNotificationToggle(first);
  if (tmp21) {
    tmp21 = canSendStageStartNotification;
  }
  let tmp23 = tmp21;
  if (tmp21) {
    tmp23 = defaultSendStartStageNotificationToggle;
  }
  const tmp24 = callback(importAllResult.useState(tmp23), 2);
  first3 = tmp24[0];
  closure_12 = tmp24[1];
  let obj3 = arg1(dependencyMap[18]);
  const items1 = [arg1(dependencyMap[19]).HotspotStore];
  constants = obj3.useStateFromStores(items1, () => {
    const HotspotStore = callback(memo[19]).HotspotStore;
    return HotspotStore.hasHotspot(callback(memo[19]).HotspotLocations.LIVE_STAGE_NOTIFICATION_BADGE);
  });
  obj = { stageInstance: memo, privacyDefault: GUILD_ONLY };
  callback3 = importAllResult.useRef(obj);
  const effect = importAllResult.useEffect(() => {
    closure_15.current = obj;
  });
  const items2 = [first.id];
  const effect1 = importAllResult.useEffect(() => {
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
      tmp10(stageInstance.topic);
    }
  }, items2);
  const tmp18 = callback(importAllResult.useState(null), 2);
  ({ helpText, publicDisabled: closure_16 } = importDefault(dependencyMap[24])(first, memo, first2));
  importDefault(dependencyMap[25])(() => {
    let obj = callback2(memo[26]);
    obj = {};
    let id;
    if (null != memo) {
      id = memo.id;
    }
    obj.stage_instance_id = id;
    obj.can_start_public_stage = !closure_16;
    obj.guild_id = first.guild_id;
    obj.track(lib.START_STAGE_OPENED, obj);
  });
  obj = { style: tmp.header };
  const items3 = [obj(HeaderIcon, { guild }), , ];
  obj1 = { style: tmp.headerTitle };
  if (null == memo) {
    const intl2 = arg1(dependencyMap[13]).intl;
    let stringResult = intl2.string(arg1(dependencyMap[13]).t.DDF0cJ);
  } else {
    const intl = arg1(dependencyMap[13]).intl;
    stringResult = intl.string(arg1(dependencyMap[13]).t.5BKP4y);
  }
  obj1.children = stringResult;
  items3[1] = obj(arg1(dependencyMap[21]).Text, obj1);
  obj2 = { style: tmp.headerSubtitle };
  if (null == memo) {
    const intl4 = arg1(dependencyMap[13]).intl;
    let stringResult1 = intl4.string(arg1(dependencyMap[13]).t.bqQIwa);
  } else {
    const intl3 = arg1(dependencyMap[13]).intl;
    stringResult1 = intl3.string(arg1(dependencyMap[13]).t.I+9bLx);
  }
  obj2.children = stringResult1;
  items3[2] = obj(arg1(dependencyMap[21]).Text, obj2);
  obj.children = items3;
  obj3 = { accessible: null, type: null, padding: null, style: tmp.container };
  const items4 = [tmp.contentContainer, ];
  let contentTopSpacing = null;
  const tmp28 = importDefault(dependencyMap[24])(first, memo, first2);
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
  const tmp46 = closure_8;
  const intl5 = arg1(dependencyMap[13]).intl;
  obj4.children = intl5.string(arg1(dependencyMap[13]).t.5FPBOB);
  items5[1] = obj(importDefault(dependencyMap[31]), obj4);
  const obj5 = { style: tmp.textInput, maxLength: tmp21, value: first1 };
  const intl6 = arg1(dependencyMap[13]).intl;
  obj5.placeholder = intl6.string(arg1(dependencyMap[13]).t.ZwWruY);
  obj5.onChange = tmp8[1];
  obj5.autoFocus = true;
  obj5.clearButtonVisibility = arg1(dependencyMap[14]).ClearButtonVisibility.WITH_CONTENT;
  items5[2] = obj(arg1(dependencyMap[20]).FormInput, obj5);
  let tmp49 = null != helpText;
  if (tmp49) {
    const obj6 = { style: tmp.optionExplanation, children: helpText };
    tmp49 = obj(arg1(dependencyMap[21]).Text, obj6);
  }
  items5[3] = tmp49;
  let tmp53 = null != guild;
  if (tmp53) {
    const obj7 = { guild, channel: first, onChangeChannel: tmp4[1] };
    tmp53 = obj(importDefault(dependencyMap[32]), obj7);
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
  items5[6] = obj(importDefault(dependencyMap[33]), { onConfirmPress: _handleSave, style: tmp.ageVerificationNotice, channelId: first.id });
  let tmp60 = null;
  if (null != obj) {
    const obj10 = { style: tmp.error, children: obj.getAnyErrorMessage() };
    tmp60 = obj(arg1(dependencyMap[21]).Text, obj10);
  }
  items5[7] = tmp60;
  const obj11 = { style: tmp.startButton };
  const obj12 = {};
  if (null == memo) {
    const intl8 = arg1(dependencyMap[13]).intl;
    let stringResult2 = intl8.string(arg1(dependencyMap[13]).t.s8mM8A);
  } else {
    const intl7 = arg1(dependencyMap[13]).intl;
    stringResult2 = intl7.string(arg1(dependencyMap[13]).t.K344S7);
  }
  obj12.text = stringResult2;
  obj12.onPress = function handleSave() {
    return _handleSave(...arguments);
  };
  obj12.disabled = "" === first1 || null == first2;
  obj12.loading = tmp17;
  obj11.children = obj(arg1(dependencyMap[34]).Button, obj12);
  items5[8] = obj(closure_7, obj11);
  obj3.children = items5;
  const tmp45Result = tmp45(tmp46, obj3);
  let tmp73 = tmp45Result;
  if (null == guild) {
    const obj13 = { <string:2958189153>: null, <string:1661207664>: null, style: tmp.container };
    const obj14 = { style: tmp.keyboardAwareView };
    const obj15 = { guild };
    const items6 = [obj(NavigationBar, obj15), tmp45Result];
    obj14.children = items6;
    obj13.children = callback3(importDefault(dependencyMap[36]), obj14);
    tmp73 = obj(arg1(dependencyMap[35]).SafeAreaPaddingView, obj13);
    const tmp79 = importDefault(dependencyMap[36]);
  }
  return tmp73;
});
const result = arg1(dependencyMap[37]).fileFinishedImporting("modules/stage_channels/native/modals/StartStageChannelModal.tsx");

export default forwardRefResult;
export { NotificationToggle };
