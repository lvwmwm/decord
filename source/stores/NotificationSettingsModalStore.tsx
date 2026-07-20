// Module ID: 16054
// Function ID: 123373
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16054 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = arg1(dependencyMap[5]).isGuildSelectableChannelType;
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
let closure_10 = importDefault(dependencyMap[8]);
let closure_11 = importDefault(dependencyMap[9]);
let closure_12 = importDefault(dependencyMap[10]);
const tmp2 = arg1(dependencyMap[11]);
const FormStates = tmp2.FormStates;
const ChannelTypes = tmp2.ChannelTypes;
const CLOSED = FormStates.CLOSED;
let tmp3 = (Store) => {
  class NotificationSettingsModalStore {
    constructor() {
      self = this;
      tmp = closure_2(this, NotificationSettingsModalStore);
      obj = closure_5(NotificationSettingsModalStore);
      tmp2 = closure_4;
      if (closure_17()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const importDefault = NotificationSettingsModalStore;
  callback2(NotificationSettingsModalStore, Store);
  let obj = {
    key: "initialize",
    value() {
      const NotificationSettingsModalStore = this;
      this.waitFor(closure_8, closure_9, closure_10, closure_11, closure_12);
      const items = [closure_12, closure_9, closure_11];
      this.syncWith(items, () => self.isOpen());
    }
  };
  const items = [obj, , ];
  obj = {
    key: "isOpen",
    value() {
      return closure_16 !== constants.CLOSED;
    }
  };
  items[1] = obj;
  obj = {
    key: "getProps",
    value() {
      const categories = categories.getCategories(closure_15);
      return {
        guildId: closure_15,
        categories,
        guild: guild.getGuild(closure_15),
        memberCount: memberCount.getMemberCount(closure_15),
        suppressEveryone: store.isSuppressEveryoneEnabled(closure_15),
        suppressRoles: store.isSuppressRolesEnabled(closure_15),
        mobilePush: store.isMobilePushEnabled(closure_15),
        muted: store.isMuted(closure_15),
        muteConfig: store.getMuteConfig(closure_15),
        messageNotifications: store.getMessageNotifications(closure_15),
        channelOverrides: store.getChannelOverrides(closure_15),
        channels: NotificationSettingsModalStore(closure_1[12])(categories._categories, categories, (channel) => {
          const type = channel.channel.type;
          let tmp = callback(type);
          if (!tmp) {
            tmp = type === constants.GUILD_CATEGORY;
          }
          return tmp;
        })
      };
    }
  };
  items[2] = obj;
  return callback(NotificationSettingsModalStore, items);
}(importDefault(dependencyMap[13]).Store);
tmp3.displayName = "NotificationSettingsModalStore";
tmp3 = new tmp3(importDefault(dependencyMap[14]), {
  NOTIFICATION_SETTINGS_MODAL_OPEN: function handleFormOpen(guildId) {
    const CLOSED = FormStates.OPEN;
    guildId = guildId.guildId;
  },
  NOTIFICATION_SETTINGS_MODAL_CLOSE: function handleFormClose() {
    const CLOSED = FormStates.CLOSED;
    let closure_15 = null;
  }
});
const result = arg1(dependencyMap[15]).fileFinishedImporting("stores/NotificationSettingsModalStore.tsx");

export default tmp3;
