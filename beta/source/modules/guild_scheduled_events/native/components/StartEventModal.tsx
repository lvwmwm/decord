// Module ID: 9264
// Function ID: 9265
// Name: StartEventModal
// Dependencies: [5, 32, 19, 17, 2045, 2067, 2051, 8977, 21, 4836, 576, 5039, 5435, 1115, 1177, 6510, 4832, 9263, 504, 8952, 9265, 6544, 7858, 9268, 5281, 2]
// Exports: default

// Module 9264 (StartEventModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4832 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import Pressables from "Pressables" /* 5435 */;
import AssetRegistryDefault from "AssetRegistry" /* 6510 */;
import GuildEventModalConstants from "GuildEventModalConstants" /* 8977 */;
import GuildEventCardDefault from "GuildEventCard" /* 9263 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2051 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c0, c1;

let c10;
let c9;
let closure_12;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
function NavigationBar(onClose) {
  let Icon;
  let PressableOpacity;
  let intl;
  let obj2;
  let obj3;
  onClose = onClose.onClose;
  const obj = { children: closure_12(PressableOpacity, obj2) };
  obj2 = {
    accessibilityRole: "button",
    accessibilityLabel: intl.string(intl2.t.cpT0Cq),
    onPress() {
      return onClose();
    },
    children: closure_12(Icon, obj3)
  };
  PressableOpacity = Pressables.PressableOpacity;
  intl = intl2.intl;
  obj3 = { source: AssetRegistryDefault };
  Icon = native.Icon;
  return closure_12(View, obj);
}
function StartEventHeader(event) {
  let intl;
  let items;
  event = event.event;
  const tmp = closure_14();
  const obj = { style: tmp.header, children: items };
  const obj2 = { style: tmp.headerPrivacyLevel, variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: intl.string(intl2.t["q+fFJv"]) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items = [closure_12(Text, obj2), ];
  const obj3 = { style: tmp.headerTitle, variant: "text-md/medium", color: "text-default", children: event.name };
  items[1] = closure_12(Text_Text.Text, obj3);
  return map1(View, obj);
}
class PreviewEventCard {
  constructor(event) {
    event = event.event;
    const obj = { event, hideControls: true, style: closure_14().previewCard, hideAgeVerificationNotice: true };
    return closure_12(GuildEventCardDefault, obj);
  }
}
let react = react_mod;
const View = react_native.View;
({ AGE_VERIFICATION_STAGE_CHANNEL_TYPES: c9, GuildScheduledEventEntityTypes: c10 } = GuildScheduledEventsConstants);
const START_EVENT_MODAL_KEY = GuildEventModalConstants.START_EVENT_MODAL_KEY;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { mainContainer: obj2, container: { flex: 1, flexDirection: "column", justifyContent: "space-between", alignContent: "center" }, headerContainer: obj3, footerContainer: { display: "flex", flexDirection: "column" }, header: obj4, headerTitle: { lineHeight: 24, textAlign: "center" }, buttonContainer: obj5, previewCard: obj6, headerPrivacyLevel: { textAlign: "center", lineHeight: 18 } };
obj2 = { flex: 1, padding: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_24 };
obj4 = { alignItems: "center", paddingTop: nativeDefault.space.PX_24 };
obj5 = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16 };
obj6 = { borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, shadowColor: "#000", shadowOpacity: 0.2, shadowRadius: 16, shadowOffset: { height: 8, width: 0 } };
const authStore2 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/StartEventModal.tsx");

export default function StartEventModal(event) {
  let _undefined;
  let c6;
  let closure_5;
  let error;
  let intl;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let loading;
  let tmp12;
  event = event.event;
  const onCloseActionSheet = event.onCloseActionSheet;
  let closure_3;
  let sendStartNotification;
  react = undefined;
  c6 = undefined;
  function onCloseModal() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    obj = ModalActionCreatorsDefault;
    obj.popWithKey(START_EVENT_MODAL_KEY);
    if (onCloseActionSheet != null) {
      onCloseActionSheet(flag);
    }
  }
  let obj = function _handleStart() {
    obj = _asyncToGenerator(async (arg0, value) => {
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
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
          c0 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const tmp4 = closure_2_3;
              if (tmp4) {
                const obj4 = {
                  onSuccess() {
                              obj = c1(closure_2_2[11]);
                              obj.popWithKey(closure_2_11);
                              if (closure_1_1 != null) {
                                tmp2(true);
                              }
                            }
                };
                c1 = 1;
                c0 = 1;
                const obj5 = { value: _undefined(event, sendStartNotification, obj4), done: false };
                return obj5;
              } else {
                const flag = false;
                onCloseModal(false);
              }
            }
          } else if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            obj = { value, done: true };
            return obj;
          }
          c0 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp10) {
          c0 = 3;
          throw tmp10;
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = closure_14();
  const guild_id = event.guild_id;
  const tmp2 = event;
  obj = event(guild_id[18]);
  const items = [obj];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guild_id));
  let obj2 = event(guild_id[18]);
  const items1 = [onCloseModal];
  const items2 = [event];
  let stateFromStores1 = obj2.useStateFromStores(items1, () => ChannelStore.getChannel(event.channel_id), items2);
  const useManageResourcePermissions = event(guild_id[19]).useManageResourcePermissions;
  const tmp6 = event(guild_id[19]);
  if (stateFromStores1 == null) {
    stateFromStores1 = stateFromStores;
  }
  closure_3 = useManageResourcePermissions(stateFromStores1).canManageGuildEvent(event);
  const tmp8 = sendStartNotification(react.useState(event.entity_type === constants.STAGE_INSTANCE), 2);
  sendStartNotification = tmp8[0];
  react = tmp8[1];
  const tmp10 = onCloseActionSheet;
  [c6, tmp12] = sendStartNotification(onCloseActionSheet(guild_id[20])(), 2);
  ({ loading, error } = tmp12);
  const rect = { top: true, bottom: true, style: tmp.mainContainer, children: items3 };
  const tmp11 = sendStartNotification(onCloseActionSheet(guild_id[20])(), 2);
  const SafeAreaPaddingView = tmp2(tmp3[21]).SafeAreaPaddingView;
  items3 = [closure_12(NavigationBar, { onClose: onCloseModal }), ];
  let obj3 = { style: tmp.container, children: items5 };
  let obj4 = { style: tmp.headerContainer, children: items4 };
  items4 = [closure_12(StartEventHeader, { event }), closure_12(PreviewEventCard, { event })];
  items5 = [closure_13(c6, obj4), ];
  let obj5 = { style: tmp.footerContainer, children: items6 };
  let hasItem = set.has(event.entity_type);
  if (hasItem) {
    const obj6 = { channelId: event.channel_id };
    hasItem = tmp14(tmp10(tmp3[22]), obj6);
  }
  items6 = [hasItem, , ];
  let tmp14Result = null;
  if (event.entity_type === constants.STAGE_INSTANCE) {
    const obj7 = {
      sendStartNotification,
      onToggle: function handleToggleNotifyMembers() {
          closure_5((arg0) => !arg0);
        }
    };
    tmp14Result = tmp14(tmp2(tmp3[23]).NotificationToggle, obj7);
  }
  items6[1] = tmp14Result;
  let tmp14Result2 = null;
  const obj8 = { style: tmp.buttonContainer, children: items7 };
  if (null != error) {
    const obj9 = { variant: "text-sm/medium", color: "text-feedback-critical", children: error.getAnyErrorMessage() };
    const Text = tmp2(tmp3[16]).Text;
    tmp14Result2 = tmp14(Text, obj9);
  }
  items7 = [tmp14Result2, ];
  const obj10 = {
    variant: "active",
    text: intl.string(tmp2(guild_id[13]).t.cK1GGY),
    onPress: function handleStart() {
      return obj(...arguments);
    },
    disabled: loading,
    loading
  };
  const Button = tmp2(tmp3[24]).Button;
  intl = tmp2(tmp3[13]).intl;
  items7[1] = closure_12(Button, obj10);
  items6[2] = closure_13(c6, obj8);
  items5[1] = closure_13(c6, obj5);
  items3[1] = closure_13(c6, obj3);
  return closure_13(SafeAreaPaddingView, rect);
};
export { PreviewEventCard };
