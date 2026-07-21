// Module ID: 8392
// Function ID: 66775
// Dependencies: []

// Module 8392
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
const importAllResult = importAll(dependencyMap[2]);
let closure_7 = arg1(dependencyMap[3]).GuildScheduledEventEntityTypes;
const jsx = arg1(dependencyMap[4]).jsx;
let obj = {};
obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW };
obj.cardStyle = obj;
let closure_9 = arg1(dependencyMap[5]).createStyles(obj);
const obj2 = arg1(dependencyMap[5]);
const memoResult = importAllResult.memo((guild) => {
  let initialGuildEvent;
  let tmp6;
  guild = guild.guild;
  const arg1 = guild;
  ({ onCloseModal: closure_1, initialGuildEvent } = guild);
  const importAll = initialGuildEvent;
  let callback;
  let React;
  function _handleSave(Navigator, arg1) {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback2(tmp);
    const _handleSave = obj;
    return obj(...arguments);
  }
  let obj = arg1(dependencyMap[7]);
  const tmp2 = callback(React.useState(obj.getInitialGuildEventData(initialGuildEvent, guild.targetChannel)), 2);
  const first = tmp2[0];
  const dependencyMap = first;
  let closure_4 = tmp2[1];
  let obj1 = arg1(dependencyMap[7]);
  const first1 = callback(React.useState(obj1.isEditingEvent(initialGuildEvent)), 1)[0];
  callback = first1;
  const tmp = callback2();
  [closure_6, tmp6] = callback(importDefault(dependencyMap[8])(() => {
    const result = initialGuildEvent(first[9]).dismissGlobalKeyboard();
    if (first1) {
      let id;
      if (null != initialGuildEvent) {
        id = initialGuildEvent.id;
      }
      if (null != id) {
        let saveEventResult = callback(first[10]).saveEvent(initialGuildEvent.id, first, guild.id);
        const obj3 = callback(first[10]);
      }
      return saveEventResult;
    }
    const obj = initialGuildEvent(first[9]);
    saveEventResult = callback(first[10]).createGuildEvent(first, guild.id);
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
        const first = first1(guild(first[14]).getEventChannelsByType(guild.id, channelTypeFromEntity), 1)[0];
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
      callback2((arg0) => {
        const merged = Object.assign(arg0);
        const merged1 = Object.assign(arg0);
        return {};
      });
    }
  };
  function getChannelSelectorHeader(CHANNEL_SELECTOR) {
    const guild = CHANNEL_SELECTOR;
    return () => callback2(callback(closure_3[15]), { screen: arg0, onClose: callback });
  }
  obj = {};
  obj = {
    title: "",
    customNavbar: getChannelSelectorHeader(arg1(dependencyMap[7]).EditGuildEventScreens.CHANNEL_SELECTOR),
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
      return _handleSave(callback(first[16]), obj);
    },
    fullscreen: true
  };
  obj[arg1(dependencyMap[7]).EditGuildEventScreens.CHANNEL_SELECTOR] = obj;
  obj1 = {
    title: "",
    customNavbar: getChannelSelectorHeader(arg1(dependencyMap[7]).EditGuildEventScreens.DETAILS),
    render() {
      const merged = Object.assign(closure_7);
      return _handleSave(callback(first[17]), {});
    },
    fullscreen: true
  };
  obj[arg1(dependencyMap[7]).EditGuildEventScreens.DETAILS] = obj1;
  const obj2 = {
    title: "",
    customNavbar: getChannelSelectorHeader(arg1(dependencyMap[7]).EditGuildEventScreens.PREVIEW),
    render() {
      const merged = Object.assign(closure_7);
      return _handleSave(callback(first[18]), {});
    },
    fullscreen: true
  };
  obj[arg1(dependencyMap[7]).EditGuildEventScreens.PREVIEW] = obj2;
  const obj3 = {
    screens: obj,
    initialRouteName: arg1(dependencyMap[7]).EditGuildEventScreens.CHANNEL_SELECTOR,
    initialRouteStack: callback(React.useState(() => {
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
  return _handleSave(arg1(dependencyMap[19]).Navigator, obj3);
});
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventModal.tsx");

export default memoResult;
