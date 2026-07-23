// Module ID: 8482
// Function ID: 67658
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1348, 1838, 7463, 653, 8483, 8485, 44, 566, 686, 2]

// Module 8482 (_isNativeReflectConstruct)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_createForOfIteratorHelperLoose";
import closure_10 from "_isNativeReflectConstruct";
import { FormStates } from "ME";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function updateWithLatestInvite(channelId, arg1) {
  let targetApplicationId;
  let targetType;
  let targetUserId;
  ({ targetType, targetUserId, targetApplicationId } = arg1);
  channel = channel.getChannel(channelId);
  let guild_id;
  if (null != channel) {
    guild_id = channel.guild_id;
  }
  guild = guild.getGuild(guild_id);
  let obj = require(8485) /* getDefaultInviteExpiration */;
  let maxAge = obj.getDefaultInviteExpiration({ guild });
  const invite2 = invite.getInvite(channelId, { targetType, targetUserId, targetApplicationId });
  obj = { channelId };
  if (null != invite2) {
    maxAge = invite2.maxAge;
  }
  obj.maxAge = maxAge;
  if (null != invite2) {
    let maxUses = invite2.maxUses;
  } else {
    maxUses = closure_18;
  }
  obj.maxUses = maxUses;
  let temporary = null != invite2;
  if (temporary) {
    temporary = invite2.temporary;
  }
  obj.temporary = temporary;
  let num = 0;
  if (null != invite2) {
    num = invite2.flags;
  }
  obj.flags = num;
  obj.targetType = targetType;
  obj.targetUserId = targetUserId;
  obj.targetApplicationId = targetApplicationId;
  let mapped;
  if (null != invite2) {
    const roles = invite2.roles;
    if (null != roles) {
      mapped = roles.map((id) => id.id);
    }
  }
  if (null == mapped) {
    mapped = [];
  }
  obj.roleIds = mapped;
}
function init(guildId) {
  guildId = guildId.guildId;
  let c13 = null;
  const targetType = guildId.targetType;
  let tmp = null;
  if (null != targetType) {
    tmp = targetType;
  }
  const targetUserId = guildId.targetUserId;
  let tmp2 = null;
  if (null != targetUserId) {
    tmp2 = targetUserId;
  }
  const targetApplicationId = guildId.targetApplicationId;
  let tmp3 = null;
  if (null != targetApplicationId) {
    tmp3 = targetApplicationId;
  }
  const obj = { targetType: tmp, targetUserId: tmp2, targetApplicationId: tmp3 };
  updateWithLatestInvite(guildId.channelId, obj);
}
const value = require("_createForOfIteratorHelperLoose").INVITE_OPTIONS_UNLIMITED.value;
let CLOSED = FormStates.CLOSED;
let c20 = false;
let tmp2 = ((Store) => {
  class CreateInviteModalStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, CreateInviteModalStore);
      obj = outer1_6(CreateInviteModalStore);
      tmp2 = outer1_5;
      if (outer1_21()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(CreateInviteModalStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_8, outer1_9, outer1_10);
    }
  };
  const items = [obj, , , , , , , , , , ];
  obj = {
    key: "init",
    value() {
      this.waitFor(outer1_10);
    }
  };
  items[1] = obj;
  obj = {
    key: "isOpen",
    value() {
      return outer1_19 !== outer1_11.CLOSED;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isSubmitting",
    value() {
      return outer1_20;
    }
  };
  items[4] = {
    key: "getGuildId",
    value() {
      return outer1_12;
    }
  };
  items[5] = {
    key: "getError",
    value() {
      return outer1_13;
    }
  };
  items[6] = {
    key: "getInvite",
    value() {
      return outer1_14;
    }
  };
  items[7] = {
    key: "getInviteSettings",
    value() {
      return outer1_15;
    }
  };
  items[8] = {
    key: "getPendingSettings",
    value() {
      return outer1_16;
    }
  };
  items[9] = {
    key: "getProps",
    value() {
      return {};
    }
  };
  items[10] = {
    key: "onClose",
    get() {
      return outer1_17;
    }
  };
  return callback(CreateInviteModalStore, items);
})(require("initialize").Store);
tmp2.displayName = "CreateInviteModalStore";
tmp2 = new tmp2(require("dispatcher"), {
  CREATE_INVITE_MODAL_INIT: function handleInit(arg0) {
    init(arg0);
  },
  CREATE_INVITE_MODAL_OPEN: function handleModalOpen(onClose) {
    const OPEN = FormStates.OPEN;
    onClose = onClose.onClose;
    let tmp;
    if (null != onClose) {
      tmp = onClose;
    }
    let closure_17 = tmp;
    init(onClose);
  },
  CREATE_INVITE_MODAL_UPDATE_SETTINGS: function handleUpdateSettings(settings) {
    settings = settings.settings;
    if (null != obj) {
      obj = {};
      const merged = Object.assign(obj);
      const merged1 = Object.assign(settings);
    }
  },
  CREATE_INVITE_MODAL_RESET_SETTINGS: function handleResetSettings() {
    let closure_16 = closure_15;
  },
  CREATE_INVITE_MODAL_GENERATE_INVITE: function handleGenerateInvite() {
    let closure_15 = closure_16;
    let c20 = true;
  },
  CREATE_INVITE_MODAL_GENERATE_INVITE_SUCCESS: function handleGenerateInviteSuccess(channelId) {
    let c13 = null;
    let c20 = false;
    importDefault(44)(null != closure_15, "No invite settings for generated invite");
    updateWithLatestInvite(channelId.channelId, { targetType: closure_15.targetType, targetUserId: closure_15.targetUserId, targetApplicationId: closure_15.targetApplicationId });
  },
  CREATE_INVITE_MODAL_GENERATE_INVITE_FAILURE: function handleGenerateInviteFailure(message) {
    let c14 = null;
    let c20 = false;
    message = message.message;
  },
  CREATE_INVITE_MODAL_CLOSE: function handleModalClose() {
    const CLOSED = FormStates.CLOSED;
    let c17;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/CreateInviteModalStore.tsx");

export default tmp2;
