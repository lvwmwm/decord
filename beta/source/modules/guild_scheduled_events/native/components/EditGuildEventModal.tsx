// Module ID: 9003
// Function ID: 9004
// Name: EditGuildEventModal
// Dependencies: [5, 32, 19, 17, 2051, 21, 4836, 576, 1613, 8982, 8979, 1876, 8981, 4541, 1115, 8983, 9004, 8985, 9005, 9057, 9058, 6421, 2]

// Module 9003 (EditGuildEventModal)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1876 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2051 */;
import GuildScheduledEventsActionCreatorsDefault from "GuildScheduledEventsActionCreators" /* 8981 */;
import EditGuildEventUtils from "EditGuildEventUtils" /* 8982 */;
import EntityUtils from "EntityUtils" /* 8983 */;
import EditGuildEventModalNavbarDefault from "EditGuildEventModalNavbar" /* 8985 */;
import useGetEventChannelsByType from "useGetEventChannelsByType" /* 9004 */;
import EditGuildEventWhereDefault from "EditGuildEventWhere" /* 9005 */;
import EditGuildEventDetailsDefault from "EditGuildEventDetails" /* 9057 */;
import EditGuildEventPreviewDefault from "EditGuildEventPreview" /* 9058 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c1, c2, constants, guild;

let obj2;
let obj3;
let react = react_mod;
const View = react_native.View;
let closure_8 = GuildScheduledEventsConstants.GuildScheduledEventEntityTypes;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: obj2, cardStyle: obj3 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_10 = createStyles(obj);
const memoResult = react.memo((guild) => {
  let _undefined;
  let c6;
  let initialGuildEvent;
  let left;
  let onClose;
  let right;
  let tmp8;
  const f87858 = () => {
    obj = KeyboardManagerUtilsAll;
    const result = obj.dismissGlobalKeyboard();
    const tmp3 = first1;
    if (tmp3) {
      let saveEventResult;
      let id;
      if (initialGuildEvent != null) {
        id = tmp4.id;
      }
      if (null != id) {
        const obj3 = GuildScheduledEventsActionCreatorsDefault;
        saveEventResult = obj3.saveEvent(tmp4.id, first, guild.id);
      }
      return saveEventResult;
    }
    const obj2 = GuildScheduledEventsActionCreatorsDefault;
    saveEventResult = obj2.createGuildEvent(first, guild.id);
  };
  const customNavbar = () => jsx(EditGuildEventModalNavbarDefault, { screen: PREVIEW2, onClose: importDefault });
  guild = guild.guild;
  ({ onCloseModal: importDefault, initialGuildEvent } = guild);
  let guildEvent;
  let first1;
  react = undefined;
  let obj = function _handleSave() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_0;
      if (c2 === 2) {
        c2 = 3;
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
          c2 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              c1 = 1;
              c2 = 1;
              const obj4 = { value: _undefined(), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            if (null != value) {
              const tmp31 = closure_128_5;
              if (tmp31) {
                let id;
                if (closure_128_2 != null) {
                  id = closure_128_2.id;
                }
                if (null != id) {
                  const AccessibilityAnnouncer2 = tmp3(guildEvent[13]).AccessibilityAnnouncer;
                  const announce2 = AccessibilityAnnouncer2.announce;
                  const intl2 = tmp3(guildEvent[14]).intl;
                  announce2(intl2.string(tmp3(guildEvent[14]).t["F9On+q"]));
                }
                closure_128_1();
              }
              const AccessibilityAnnouncer = tmp3(guildEvent[13]).AccessibilityAnnouncer;
              const announce = AccessibilityAnnouncer.announce;
              const intl = tmp3(guildEvent[14]).intl;
              announce(intl.string(tmp3(guildEvent[14]).t["5HzXO5"]));
            }
            c2 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp25) {
          c2 = 3;
          throw tmp25;
        }
      }
    });
    return obj(...arguments);
  };
  const targetChannel = guild.targetChannel;
  let tmp = closure_10();
  let tmp2 = require("useSafeAreaInsets")();
  ({ left, right } = tmp2);
  obj = guild(guildEvent[9]);
  let tmp3 = first1(react.useState(obj.getInitialGuildEventData(initialGuildEvent, targetChannel)), 2);
  guildEvent = tmp3[0];
  let closure_4 = tmp3[1];
  const useState = react.useState;
  let obj2 = guild(guildEvent[9]);
  first1 = first1(useState(obj2.isEditingEvent(initialGuildEvent)), 1)[0];
  const first2 = first1(react.useState(() => {
    let items1;
    obj = { name: EditGuildEventUtils.EditGuildEventScreens.CHANNEL_SELECTOR };
    if (first1) {
      const items = [obj, ];
      items[1] = { name: EditGuildEventUtils.EditGuildEventScreens.DETAILS };
      items1 = items;
      const obj2 = { name: EditGuildEventUtils.EditGuildEventScreens.DETAILS };
    } else {
      items1 = [obj];
    }
    return items1;
  }), 1)[0];
  [c6, tmp8] = first1(require("LazyAPIPromise")(f87858), 2);
  constants = {
    guild,
    guildEvent,
    initialGuildEvent,
    isEdit: first1,
    error: tmp8.error,
    loading: tmp8.loading,
    onSave: function handleSave() {
      return obj(...arguments);
    },
    onChange: function handleChange(entityType) {
      let closure_0 = entityType;
      if (null != entityType.entityType) {
        obj = EntityUtils;
        const channelTypeFromEntity = obj.getChannelTypeFromEntity(entityType.entityType);
        const obj2 = useGetEventChannelsByType;
        const first = _slicedToArray(obj2.getEventChannelsByType(guild.id, channelTypeFromEntity), 1)[0];
        let id;
        if (first != null) {
          id = first.id;
        }
        if (id == null) {
          id = null;
        }
        entityType.channelId = id;
        const tmp3 = entityType.entityType !== constants.EXTERNAL && first.entityType === tmp2.EXTERNAL;
        if (tmp3) {
          entityType.entityMetadata = null;
        }
      }
      closure_4((arg0) => {
        obj = {};
        const merged = Object.assign(arg0);
        const merged1 = Object.assign(closure_0);
        return obj;
      });
    }
  };
  let obj3 = {};
  let obj4 = {
    title: "",
    customNavbar,
    headerLeft() {
      return null;
    },
    render() {
      let id;
      obj = { guildEventId: id };
      const tmp2 = EditGuildEventWhereDefault;
      const merged = Object.assign(constants);
      id = undefined;
      const tmp = jsx;
      if (initialGuildEvent != null) {
        id = initialGuildEvent.id;
      }
      return tmp(tmp2, obj);
    },
    fullscreen: true
  };
  const tmp7 = first1(require("LazyAPIPromise")(f87858), 2);
  const CHANNEL_SELECTOR = guild(guildEvent[9]).EditGuildEventScreens.CHANNEL_SELECTOR;
  const CHANNEL_SELECTOR2 = guild(guildEvent[9]).EditGuildEventScreens.CHANNEL_SELECTOR;
  obj3[CHANNEL_SELECTOR] = obj4;
  const obj5 = {
    title: "",
    customNavbar,
    render() {
      EditGuildEventDetailsDefault;
      const merged = Object.assign(constants);
      return <tmp />;
    },
    fullscreen: true
  };
  const DETAILS = guild(guildEvent[9]).EditGuildEventScreens.DETAILS;
  const DETAILS2 = guild(guildEvent[9]).EditGuildEventScreens.DETAILS;
  obj3[DETAILS] = obj5;
  const obj6 = {
    title: "",
    customNavbar,
    render() {
      EditGuildEventPreviewDefault;
      const merged = Object.assign(constants);
      return <tmp />;
    },
    fullscreen: true
  };
  const PREVIEW = guild(guildEvent[9]).EditGuildEventScreens.PREVIEW;
  const PREVIEW2 = guild(guildEvent[9]).EditGuildEventScreens.PREVIEW;
  obj3[PREVIEW] = obj6;
  let items = [tmp.container, { paddingLeft: left, paddingRight: right }];
  ({ screens: obj3, initialRouteName: guild(guildEvent[9]).EditGuildEventScreens.CHANNEL_SELECTOR, initialRouteStack: first2, cardShadowEnabled: false, cardOverlayEnabled: false, cardStyle: tmp.cardStyle });
  const Navigator = guild(guildEvent[21]).Navigator;
  return <obj style={items}>{null}</obj>;
});
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventModal.tsx");

export default memoResult;
