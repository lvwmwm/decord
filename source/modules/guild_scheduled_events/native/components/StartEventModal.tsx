// Module ID: 8462
// Function ID: 67496
// Name: NavigationBar
// Dependencies: []
// Exports: default

// Module 8462 (NavigationBar)
function NavigationBar(onClose) {
  const arg1 = onClose.onClose;
  let obj = {};
  obj = { accessibilityRole: "button" };
  const intl = arg1(dependencyMap[13]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[13]).t.cpT0Cq);
  obj.onPress = function onPress() {
    return onClose();
  };
  obj = { source: importDefault(dependencyMap[15]) };
  obj.children = callback2(arg1(dependencyMap[14]).Icon, obj);
  obj.children = callback2(arg1(dependencyMap[12]).PressableOpacity, obj);
  return callback2(View, obj);
}
function StartEventHeader(children) {
  const tmp = callback4();
  let obj = { style: tmp.header };
  obj = { delete: "accessibilityLabel", dispatch: "r", raw: "isArray", style: tmp.headerPrivacyLevel };
  const intl = arg1(dependencyMap[13]).intl;
  obj.children = intl.string(arg1(dependencyMap[13]).t.q+fFJv);
  const items = [callback2(arg1(dependencyMap[16]).Text, obj), ];
  obj = { style: tmp.headerTitle, children: children.event.name };
  items[1] = callback2(arg1(dependencyMap[16]).Text, obj);
  obj.children = items;
  return callback3(View, obj);
}
class PreviewEventCard {
  constructor(arg0) {
    tmp = closure_14();
    obj = { event: global.event, hideControls: true, style: tmp.previewCard, hideAgeVerificationNotice: true };
    return jsx(importDefault(dependencyMap[17]), obj);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
({ AGE_VERIFICATION_STAGE_CHANNEL_TYPES: closure_9, GuildScheduledEventEntityTypes: closure_10 } = arg1(dependencyMap[6]));
const START_EVENT_MODAL_KEY = arg1(dependencyMap[7]).START_EVENT_MODAL_KEY;
const tmp2 = arg1(dependencyMap[6]);
({ jsx: closure_12, jsxs: closure_13 } = arg1(dependencyMap[8]));
let obj = arg1(dependencyMap[9]);
obj = {};
obj = { flex: 1, padding: importDefault(dependencyMap[10]).space.PX_16, backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_BASE_LOW };
obj.mainContainer = obj;
obj.container = {};
const obj1 = { 979464370: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001863282064227495, 1637975633: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007062002001945, gap: importDefault(dependencyMap[10]).space.PX_24 };
obj.headerContainer = obj1;
obj.footerContainer = { 979464370: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001863282064227495, 1637975633: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007062002001945 };
const tmp3 = arg1(dependencyMap[8]);
obj.header = { alignItems: "center", paddingTop: importDefault(dependencyMap[10]).space.PX_24 };
obj.headerTitle = { "Bool(false)": null, "Bool(false)": null };
const obj3 = { 979464370: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001863282064227495, 1637975633: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007062002001945, gap: importDefault(dependencyMap[10]).space.PX_8, marginTop: importDefault(dependencyMap[10]).space.PX_16 };
obj.buttonContainer = obj3;
const obj2 = { alignItems: "center", paddingTop: importDefault(dependencyMap[10]).space.PX_24 };
obj.previewCard = { borderColor: importDefault(dependencyMap[10]).colors.BORDER_SUBTLE, backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_SURFACE_HIGH, shadowOffset: { y: null, isArray: null } };
obj.headerPrivacyLevel = {};
let closure_14 = obj.createStyles(obj);
const obj4 = { borderColor: importDefault(dependencyMap[10]).colors.BORDER_SUBTLE, backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_SURFACE_HIGH, shadowOffset: { y: null, isArray: null } };
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/guild_scheduled_events/native/components/StartEventModal.tsx");

export default function StartEventModal(event) {
  let error;
  let loading;
  let tmp8;
  event = event.event;
  const arg1 = event;
  const importDefault = event.onCloseActionSheet;
  let closure_3;
  let callback;
  let React;
  let closure_6;
  function onCloseModal() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    onCloseActionSheet(guild_id[11]).popWithKey(closure_11);
    if (null != onCloseActionSheet) {
      onCloseActionSheet(flag);
    }
  }
  let closure_7 = onCloseModal;
  function _handleStart(closure_11) {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback(tmp);
    const _handleStart = obj;
    return obj(...arguments);
  }
  const tmp = callback4();
  const dependencyMap = event.guild_id;
  let obj = arg1(dependencyMap[18]);
  const items = [_handleStart];
  let stateFromStores = obj.useStateFromStores(items, () => _handleStart.getGuild(guild_id));
  let obj1 = arg1(dependencyMap[18]);
  const items1 = [closure_7];
  const items2 = [event];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => onCloseModal.getChannel(event.channel_id), items2);
  let obj2 = arg1(dependencyMap[19]);
  if (null != stateFromStores1) {
    stateFromStores = stateFromStores1;
  }
  closure_3 = obj2.useManageResourcePermissions(stateFromStores).canManageGuildEvent(event);
  const tmp5 = callback(React.useState(event.entity_type === constants.STAGE_INSTANCE), 2);
  const first = tmp5[0];
  callback = first;
  React = tmp5[1];
  [closure_6, tmp8] = callback(importDefault(dependencyMap[20])(), 2);
  ({ loading, error } = tmp8);
  obj = { paddingVertical: null, paddingHorizontal: null, style: tmp.mainContainer };
  const items3 = [callback2(NavigationBar, { onClose: onCloseModal }), ];
  obj = { style: tmp.container };
  obj1 = { style: tmp.headerContainer };
  const items4 = [callback2(StartEventHeader, { event }), callback2(PreviewEventCard, { event })];
  obj1.children = items4;
  const items5 = [callback3(closure_6, obj1), ];
  obj2 = { style: tmp.footerContainer };
  let hasItem = set.has(event.entity_type);
  if (hasItem) {
    const obj3 = { channelId: event.channel_id };
    hasItem = callback2(importDefault(dependencyMap[22]), obj3);
  }
  const items6 = [hasItem, , ];
  let tmp18 = null;
  if (event.entity_type === constants.STAGE_INSTANCE) {
    const obj4 = {
      sendStartNotification: first,
      onToggle: function handleToggleNotifyMembers() {
          callback2((arg0) => !arg0);
        }
    };
    tmp18 = callback2(arg1(dependencyMap[23]).NotificationToggle, obj4);
  }
  items6[1] = tmp18;
  const obj5 = { style: tmp.buttonContainer };
  let tmp24 = null;
  if (null != error) {
    const obj6 = { hasMaxConnections: 1, isBoostOnlySubscription: "center", children: error.getAnyErrorMessage() };
    tmp24 = callback2(arg1(dependencyMap[16]).Text, obj6);
  }
  const items7 = [tmp24, ];
  const obj7 = { variant: "active" };
  const intl = arg1(dependencyMap[13]).intl;
  obj7.text = intl.string(arg1(dependencyMap[13]).t.cK1GGY);
  obj7.onPress = function handleStart() {
    return _handleStart(...arguments);
  };
  obj7.disabled = loading;
  obj7.loading = loading;
  items7[1] = callback2(arg1(dependencyMap[24]).Button, obj7);
  obj5.children = items7;
  items6[2] = callback3(closure_6, obj5);
  obj2.children = items6;
  items5[1] = callback3(closure_6, obj2);
  obj.children = items5;
  items3[1] = callback3(closure_6, obj);
  obj.children = items3;
  return callback3(arg1(dependencyMap[21]).SafeAreaPaddingView, obj);
};
export { PreviewEventCard };
