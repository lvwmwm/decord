// Module ID: 8469
// Function ID: 67545
// Name: NavigationBar
// Dependencies: [5, 57, 31, 27, 1348, 1838, 1354, 8354, 33, 4130, 689, 4337, 4660, 1212, 1273, 7640, 4126, 8463, 566, 8402, 8470, 5121, 7535, 8473, 4543, 2]
// Exports: default

// Module 8469 (NavigationBar)
import closure_3 from "_createForOfIteratorHelperLoose";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_createForOfIteratorHelperLoose";
import GUILD_EVENT_MAX_NAME_LENGTH from "GUILD_EVENT_MAX_NAME_LENGTH";
import { START_EVENT_MODAL_KEY } from "CREATE_GUILD_EVENT_MODAL_KEY";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_12;
let closure_13;
let closure_9;
const require = arg1;
function NavigationBar(onClose) {
  onClose = onClose.onClose;
  let obj = {};
  obj = { accessibilityRole: "button" };
  const intl = onClose(1212).intl;
  obj.accessibilityLabel = intl.string(onClose(1212).t.cpT0Cq);
  obj.onPress = function onPress() {
    return onClose();
  };
  obj = { source: importDefault(7640) };
  obj.children = callback(onClose(1273).Icon, obj);
  obj.children = callback(onClose(4660).PressableOpacity, obj);
  return callback(View, obj);
}
function StartEventHeader(event) {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.header };
  obj = { style: tmp.headerPrivacyLevel, variant: "heading-lg/bold", color: "mobile-text-heading-primary" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t["q+fFJv"]);
  const items = [callback(require(4126) /* Text */.Text, obj), ];
  obj = { style: tmp.headerTitle, variant: "text-md/medium", color: "text-default", children: event.event.name };
  items[1] = callback(require(4126) /* Text */.Text, obj);
  obj.children = items;
  return callback2(View, obj);
}
class PreviewEventCard {
  constructor(arg0) {
    tmp = c14();
    obj = { event: global.event, hideControls: true, style: tmp.previewCard, hideAgeVerificationNotice: true };
    return jsx(require("GuildEventCardControls"), obj);
  }
}
({ AGE_VERIFICATION_STAGE_CHANNEL_TYPES: closure_9, GuildScheduledEventEntityTypes: closure_10 } = GUILD_EVENT_MAX_NAME_LENGTH);
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, padding: require("_createForOfIteratorHelperLoose").space.PX_16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.mainContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.container = { flex: 1, flexDirection: "column", justifyContent: "space-between", alignContent: "center" };
let obj1 = { display: "flex", flexDirection: "column", gap: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.headerContainer = obj1;
_createForOfIteratorHelperLoose.footerContainer = { display: "flex", flexDirection: "column" };
_createForOfIteratorHelperLoose.header = { alignItems: "center", paddingTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.headerTitle = { lineHeight: 24, textAlign: "center" };
let obj3 = { display: "flex", flexDirection: "column", gap: require("_createForOfIteratorHelperLoose").space.PX_8, marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.buttonContainer = obj3;
let obj4 = { borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, shadowColor: "#000", shadowOpacity: 0.2, shadowRadius: 16, shadowOffset: { height: 8, width: 0 } };
_createForOfIteratorHelperLoose.previewCard = obj4;
_createForOfIteratorHelperLoose.headerPrivacyLevel = { textAlign: "center", lineHeight: 18 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { alignItems: "center", paddingTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
const result = require("result").fileFinishedImporting("modules/guild_scheduled_events/native/components/StartEventModal.tsx");

export default function StartEventModal(event) {
  let c6;
  let error;
  let loading;
  let tmp8;
  event = event.event;
  const onCloseActionSheet = event.onCloseActionSheet;
  let closure_3;
  let first;
  let React;
  c6 = undefined;
  function onCloseModal() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    onCloseActionSheet(guild_id[11]).popWithKey(outer1_11);
    if (null != onCloseActionSheet) {
      onCloseActionSheet(flag);
    }
  }
  function _handleStart(outer2_11) {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback(tmp);
    return obj(...arguments);
  }
  const tmp = _createForOfIteratorHelperLoose();
  const guild_id = event.guild_id;
  let obj = event(guild_id[18]);
  const items = [_handleStart];
  let stateFromStores = obj.useStateFromStores(items, () => _handleStart.getGuild(guild_id));
  let obj1 = event(guild_id[18]);
  const items1 = [onCloseModal];
  const items2 = [event];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => onCloseModal.getChannel(event.channel_id), items2);
  let obj2 = event(guild_id[19]);
  if (null != stateFromStores1) {
    stateFromStores = stateFromStores1;
  }
  closure_3 = obj2.useManageResourcePermissions(stateFromStores).canManageGuildEvent(event);
  const tmp5 = first(React.useState(event.entity_type === constants.STAGE_INSTANCE), 2);
  first = tmp5[0];
  React = tmp5[1];
  [c6, tmp8] = first(onCloseActionSheet(guild_id[20])(), 2);
  ({ loading, error } = tmp8);
  obj = { top: true, bottom: true, style: tmp.mainContainer };
  const items3 = [callback(NavigationBar, { onClose: onCloseModal }), ];
  obj = { style: tmp.container };
  obj1 = { style: tmp.headerContainer };
  const items4 = [callback(StartEventHeader, { event }), callback(PreviewEventCard, { event })];
  obj1.children = items4;
  const items5 = [callback2(c6, obj1), ];
  obj2 = { style: tmp.footerContainer };
  let hasItem = set.has(event.entity_type);
  if (hasItem) {
    const obj3 = { channelId: event.channel_id };
    hasItem = callback(onCloseActionSheet(guild_id[22]), obj3);
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
    tmp18 = callback(event(guild_id[23]).NotificationToggle, obj4);
  }
  items6[1] = tmp18;
  const obj5 = { style: tmp.buttonContainer };
  let tmp24 = null;
  if (null != error) {
    const obj6 = { variant: "text-sm/medium", color: "text-feedback-critical", children: error.getAnyErrorMessage() };
    tmp24 = callback(event(guild_id[16]).Text, obj6);
  }
  const items7 = [tmp24, ];
  const obj7 = { variant: "active" };
  const intl = event(guild_id[13]).intl;
  obj7.text = intl.string(event(guild_id[13]).t.cK1GGY);
  obj7.onPress = function handleStart() {
    return _handleStart(...arguments);
  };
  obj7.disabled = loading;
  obj7.loading = loading;
  items7[1] = callback(event(guild_id[24]).Button, obj7);
  obj5.children = items7;
  items6[2] = callback2(c6, obj5);
  obj2.children = items6;
  items5[1] = callback2(c6, obj2);
  obj.children = items5;
  items3[1] = callback2(c6, obj);
  obj.children = items3;
  return callback2(event(guild_id[21]).SafeAreaPaddingView, obj);
};
export { PreviewEventCard };
