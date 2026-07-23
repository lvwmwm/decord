// Module ID: 8399
// Function ID: 66835
// Dependencies: [5, 57, 31, 1354, 33, 4130, 689, 8345, 8359, 1820, 8344, 3843, 1212, 8349, 8400, 8368, 8403, 8447, 8448, 5519, 2]

// Module 8399
import closure_4 from "_createForOfIteratorHelperLoose";
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { GuildScheduledEventEntityTypes as closure_7 } from "GUILD_EVENT_MAX_NAME_LENGTH";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let obj = {};
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
obj.cardStyle = obj;
let closure_9 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo((guild) => {
  let c6;
  let importDefault;
  let initialGuildEvent;
  let tmp6;
  guild = guild.guild;
  ({ onCloseModal: importDefault, initialGuildEvent } = guild);
  let first1;
  function _handleSave(Navigator, arg1) {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback(tmp);
    return obj(...arguments);
  }
  let obj = guild(first[7]);
  let tmp2 = first1(undefined.useState(obj.getInitialGuildEventData(initialGuildEvent, guild.targetChannel)), 2);
  first = tmp2[0];
  let closure_4 = tmp2[1];
  let obj1 = guild(first[7]);
  first1 = first1(importAllResult.useState(obj1.isEditingEvent(initialGuildEvent)), 1)[0];
  const tmp = callback();
  [c6, tmp6] = first1(importDefault(first[8])(() => {
    const result = initialGuildEvent(first[9]).dismissGlobalKeyboard();
    if (first1) {
      let id;
      if (null != initialGuildEvent) {
        id = initialGuildEvent.id;
      }
      if (null != id) {
        let saveEventResult = outer1_1(first[10]).saveEvent(initialGuildEvent.id, first, guild.id);
        const obj3 = outer1_1(first[10]);
      }
      return saveEventResult;
    }
    const obj = initialGuildEvent(first[9]);
    saveEventResult = outer1_1(first[10]).createGuildEvent(first, guild.id);
  }), 2);
  let closure_7 = {
    guild,
    guildEvent: first,
    initialGuildEvent,
    isEdit: first1,
    error: tmp6.error,
    loading: tmp6.loading,
    onSave: function handleSave() {
      return _handleSave(...arguments);
    },
    onChange: function handleChange(entityType) {
      const guild = entityType;
      if (null != entityType.entityType) {
        let id;
        const channelTypeFromEntity = guild(first[13]).getChannelTypeFromEntity(entityType.entityType);
        const obj = guild(first[13]);
        first = first1(guild(first[14]).getEventChannelsByType(guild.id, channelTypeFromEntity), 1)[0];
        if (null != first) {
          id = first.id;
        }
        let tmp2 = null;
        if (null != id) {
          tmp2 = id;
        }
        entityType.channelId = tmp2;
        let tmp4 = entityType.entityType !== constants.EXTERNAL;
        if (tmp4) {
          tmp4 = first.entityType === constants.EXTERNAL;
        }
        if (tmp4) {
          entityType.entityMetadata = null;
        }
        const obj2 = guild(first[14]);
      }
      callback((arg0) => {
        const merged = Object.assign(arg0);
        const merged1 = Object.assign(closure_0);
        return {};
      });
    }
  };
  function getChannelSelectorHeader(CHANNEL_SELECTOR) {
    let closure_0 = CHANNEL_SELECTOR;
    return () => _handleSave(outer2_1(first[15]), { screen: closure_0, onClose: outer1_1 });
  }
  obj = {};
  obj = {
    title: "",
    customNavbar: getChannelSelectorHeader(guild(first[7]).EditGuildEventScreens.CHANNEL_SELECTOR),
    headerLeft() {
      return null;
    },
    render() {
      const obj = {};
      const merged = Object.assign(closure_7);
      let id;
      if (null != initialGuildEvent) {
        id = initialGuildEvent.id;
      }
      obj["guildEventId"] = id;
      return _handleSave(outer1_1(first[16]), obj);
    },
    fullscreen: true
  };
  obj[guild(first[7]).EditGuildEventScreens.CHANNEL_SELECTOR] = obj;
  obj1 = {
    title: "",
    customNavbar: getChannelSelectorHeader(guild(first[7]).EditGuildEventScreens.DETAILS),
    render() {
      const merged = Object.assign(closure_7);
      return _handleSave(outer1_1(first[17]), {});
    },
    fullscreen: true
  };
  obj[guild(first[7]).EditGuildEventScreens.DETAILS] = obj1;
  let obj2 = {
    title: "",
    customNavbar: getChannelSelectorHeader(guild(first[7]).EditGuildEventScreens.PREVIEW),
    render() {
      const merged = Object.assign(closure_7);
      return _handleSave(outer1_1(first[18]), {});
    },
    fullscreen: true
  };
  obj[guild(first[7]).EditGuildEventScreens.PREVIEW] = obj2;
  let obj3 = {
    screens: obj,
    initialRouteName: guild(first[7]).EditGuildEventScreens.CHANNEL_SELECTOR,
    initialRouteStack: first1(undefined.useState(() => {
      let obj = { name: guild(first[7]).EditGuildEventScreens.CHANNEL_SELECTOR };
      if (first1) {
        const items = [obj, ];
        obj = { name: guild(first[7]).EditGuildEventScreens.DETAILS };
        items[1] = obj;
        let items1 = items;
      } else {
        items1 = [obj];
      }
      return items1;
    }), 1)[0],
    cardShadowEnabled: false,
    cardOverlayEnabled: false,
    cardStyle: tmp.cardStyle
  };
  return _handleSave(guild(first[19]).Navigator, obj3);
});
let result = require("result").fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventModal.tsx");

export default memoResult;
