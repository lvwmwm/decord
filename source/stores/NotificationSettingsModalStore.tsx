// Module ID: 16194
// Function ID: 125680
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1352, 5070, 1907, 4051, 1838, 4325, 653, 5071, 566, 686, 2]

// Module 16194 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import set from "set";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { isGuildSelectableChannelType as closure_7 } from "_callSuper";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_12 from "_isNativeReflectConstruct";
import ME from "ME";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
const FormStates = ME.FormStates;
const ChannelTypes = ME.ChannelTypes;
let CLOSED = FormStates.CLOSED;
let tmp3 = ((Store) => {
  class NotificationSettingsModalStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, NotificationSettingsModalStore);
      obj = outer1_5(NotificationSettingsModalStore);
      tmp2 = outer1_4;
      if (outer1_17()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(NotificationSettingsModalStore, Store);
  let obj = {
    key: "initialize",
    value() {
      const self = this;
      this.waitFor(outer1_8, outer1_9, outer1_10, outer1_11, outer1_12);
      const items = [outer1_12, outer1_9, outer1_11];
      this.syncWith(items, () => self.isOpen());
    }
  };
  let items = [obj, , ];
  obj = {
    key: "isOpen",
    value() {
      return outer1_16 !== outer1_13.CLOSED;
    }
  };
  items[1] = obj;
  obj = {
    key: "getProps",
    value() {
      const categories = outer1_8.getCategories(outer1_15);
      return {
        guildId: outer1_15,
        categories,
        guild: outer1_11.getGuild(outer1_15),
        memberCount: outer1_10.getMemberCount(outer1_15),
        suppressEveryone: outer1_12.isSuppressEveryoneEnabled(outer1_15),
        suppressRoles: outer1_12.isSuppressRolesEnabled(outer1_15),
        mobilePush: outer1_12.isMobilePushEnabled(outer1_15),
        muted: outer1_12.isMuted(outer1_15),
        muteConfig: outer1_12.getMuteConfig(outer1_15),
        messageNotifications: outer1_12.getMessageNotifications(outer1_15),
        channelOverrides: outer1_12.getChannelOverrides(outer1_15),
        channels: NotificationSettingsModalStore(outer1_1[12])(categories._categories, categories, (channel) => {
          const type = channel.channel.type;
          let tmp = outer2_7(type);
          if (!tmp) {
            tmp = type === outer2_14.GUILD_CATEGORY;
          }
          return tmp;
        })
      };
    }
  };
  items[2] = obj;
  return callback(NotificationSettingsModalStore, items);
})(require("initialize").Store);
tmp3.displayName = "NotificationSettingsModalStore";
tmp3 = new tmp3(require("dispatcher"), {
  NOTIFICATION_SETTINGS_MODAL_OPEN: function handleFormOpen(guildId) {
    const OPEN = FormStates.OPEN;
    guildId = guildId.guildId;
  },
  NOTIFICATION_SETTINGS_MODAL_CLOSE: function handleFormClose() {
    const CLOSED = FormStates.CLOSED;
    let c15 = null;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/NotificationSettingsModalStore.tsx");

export default tmp3;
