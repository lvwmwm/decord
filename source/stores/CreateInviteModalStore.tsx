// Module ID: 8476
// Function ID: 67621
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8476 (_isNativeReflectConstruct)
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
  const channel = channel.getChannel(channelId);
  let guild_id;
  if (null != channel) {
    guild_id = channel.guild_id;
  }
  const guild = guild.getGuild(guild_id);
  let obj = arg1(dependencyMap[10]);
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
    maxUses = value;
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
  let closure_13 = null;
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
const FormStates = arg1(dependencyMap[8]).FormStates;
const value = importDefault(dependencyMap[9]).INVITE_OPTIONS_UNLIMITED.value;
const CLOSED = FormStates.CLOSED;
let closure_20 = false;
let tmp2 = (Store) => {
  class CreateInviteModalStore {
    constructor() {
      self = this;
      tmp = closure_3(this, CreateInviteModalStore);
      obj = closure_6(CreateInviteModalStore);
      tmp2 = closure_5;
      if (closure_21()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = CreateInviteModalStore;
  callback2(CreateInviteModalStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_8, closure_9, closure_10);
    }
  };
  const items = [obj, , , , , , , , , , ];
  obj = {
    key: "init",
    value() {
      this.waitFor(closure_10);
    }
  };
  items[1] = obj;
  obj = {
    key: "isOpen",
    value() {
      return closure_19 !== constants.CLOSED;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isSubmitting",
    value() {
      return closure_20;
    }
  };
  items[4] = {
    key: "getGuildId",
    value() {
      return closure_12;
    }
  };
  items[5] = {
    key: "getError",
    value() {
      return closure_13;
    }
  };
  items[6] = {
    key: "getInvite",
    value() {
      return closure_14;
    }
  };
  items[7] = {
    key: "getInviteSettings",
    value() {
      return closure_15;
    }
  };
  items[8] = {
    key: "getPendingSettings",
    value() {
      return closure_16;
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
      return closure_17;
    }
  };
  return callback(CreateInviteModalStore, items);
}(importDefault(dependencyMap[12]).Store);
tmp2.displayName = "CreateInviteModalStore";
tmp2 = new tmp2(importDefault(dependencyMap[13]), {
  CREATE_INVITE_MODAL_INIT: function handleInit(arg0) {
    init(arg0);
  },
  CREATE_INVITE_MODAL_OPEN: function handleModalOpen(onClose) {
    const CLOSED = FormStates.OPEN;
    onClose = onClose.onClose;
    let tmp;
    if (null != onClose) {
      tmp = onClose;
    }
    init(onClose);
  },
  CREATE_INVITE_MODAL_UPDATE_SETTINGS: function handleUpdateSettings(settings) {
    settings = settings.settings;
    if (null != obj) {
      const obj = {};
      const merged = Object.assign(obj);
      const merged1 = Object.assign(settings);
    }
  },
  CREATE_INVITE_MODAL_RESET_SETTINGS: function handleResetSettings() {
    let closure_16 = closure_15;
  },
  CREATE_INVITE_MODAL_GENERATE_INVITE: function handleGenerateInvite() {
    let closure_15 = closure_16;
    let closure_20 = true;
  },
  CREATE_INVITE_MODAL_GENERATE_INVITE_SUCCESS: function handleGenerateInviteSuccess(channelId) {
    let closure_13 = null;
    let closure_20 = false;
    importDefault(dependencyMap[11])(null != closure_15, "No invite settings for generated invite");
    updateWithLatestInvite(channelId.channelId, { targetType: closure_15.targetType, targetUserId: closure_15.targetUserId, targetApplicationId: closure_15.targetApplicationId });
  },
  CREATE_INVITE_MODAL_GENERATE_INVITE_FAILURE: function handleGenerateInviteFailure(message) {
    let closure_14 = null;
    let closure_20 = false;
    message = message.message;
  },
  CREATE_INVITE_MODAL_CLOSE: function handleModalClose() {
    const CLOSED = FormStates.CLOSED;
    let closure_17;
  }
});
const result = arg1(dependencyMap[14]).fileFinishedImporting("stores/CreateInviteModalStore.tsx");

export default tmp2;
