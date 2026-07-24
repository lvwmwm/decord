// Module ID: 1909
// Function ID: 21498
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1910, 1838, 653, 662, 21, 1915, 1360, 1916, 566, 686, 2]

// Module 1909 (_isNativeReflectConstruct)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import ME from "ME";
import set from "set";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_9 from "_createForOfIteratorHelperLoose";
import closure_10 from "_createForOfIteratorHelperLoose";
import { GuildSettingsSections } from "ME";
import { ChannelNotificationSettingsFlags as closure_12 } from "MAX_FAVORITES";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_13 = {};
let tmp2 = ((Store) => {
  class ImpersonateStore {
    constructor() {
      self = this;
      tmp = outer1_4(this, ImpersonateStore);
      obj = outer1_7(ImpersonateStore);
      tmp2 = outer1_6;
      if (outer1_14()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_7;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_7(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(ImpersonateStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_10, outer1_9);
    }
  };
  const items = [obj, , , , , , , , , , , , , , , ];
  obj = {
    key: "hasViewingRoles",
    value() {
      return !ImpersonateStore(outer1_3[12]).isPlainObjectEmpty(outer1_13);
    }
  };
  items[1] = obj;
  obj = {
    key: "isViewingRoles",
    value(arg0) {
      let tmp = null != arg0;
      if (tmp) {
        tmp = null != outer1_13[arg0];
      }
      return tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getViewingRoles",
    value(arg0) {
      let roles;
      if (null != outer1_13[arg0]) {
        roles = tmp.roles;
      }
      return roles;
    }
  };
  items[4] = {
    key: "getViewingRolesTimestamp",
    value(arg0) {
      let tmp = null;
      if (null != arg0) {
        let timestamp;
        if (null != outer1_13[arg0]) {
          timestamp = tmp3.timestamp;
        }
        tmp = timestamp;
      }
      return tmp;
    }
  };
  items[5] = {
    key: "getData",
    value(arg0) {
      return outer1_13[arg0];
    }
  };
  items[6] = {
    key: "isFullServerPreview",
    value(arg0) {
      let type;
      if (null != outer1_13[arg0]) {
        type = tmp.type;
      }
      return type === ImpersonateStore(outer1_3[10]).ImpersonateType.NEW_MEMBER;
    }
  };
  items[7] = {
    key: "isOptInEnabled",
    value(arg0) {
      let optInEnabled = null != tmp;
      if (optInEnabled) {
        optInEnabled = tmp.type === ImpersonateStore(outer1_3[10]).ImpersonateType.NEW_MEMBER;
      }
      if (optInEnabled) {
        optInEnabled = tmp.optInEnabled;
      }
      return optInEnabled;
    }
  };
  items[8] = {
    key: "isOnboardingEnabled",
    value(arg0) {
      let onboardingEnabled = null != tmp;
      if (onboardingEnabled) {
        onboardingEnabled = tmp.type === ImpersonateStore(outer1_3[10]).ImpersonateType.NEW_MEMBER;
      }
      if (onboardingEnabled) {
        onboardingEnabled = tmp.onboardingEnabled;
      }
      return onboardingEnabled;
    }
  };
  items[9] = {
    key: "getViewingChannels",
    value(arg0) {
      let optInChannels = null;
      if (null != outer1_13[arg0]) {
        optInChannels = null;
        if (tmp.type === ImpersonateStore(outer1_3[10]).ImpersonateType.NEW_MEMBER) {
          optInChannels = tmp.optInChannels;
        }
      }
      return optInChannels;
    }
  };
  items[10] = {
    key: "getOnboardingResponses",
    value(arg0) {
      let onboardingResponses = null;
      if (null != outer1_13[arg0]) {
        onboardingResponses = null;
        if (tmp.type === ImpersonateStore(outer1_3[10]).ImpersonateType.NEW_MEMBER) {
          onboardingResponses = tmp.onboardingResponses;
        }
      }
      return onboardingResponses;
    }
  };
  items[11] = {
    key: "getMemberOptions",
    value(arg0) {
      let memberOptions = null;
      if (null != outer1_13[arg0]) {
        memberOptions = null;
        if (tmp.type === ImpersonateStore(outer1_3[10]).ImpersonateType.NEW_MEMBER) {
          memberOptions = tmp.memberOptions;
        }
      }
      return memberOptions;
    }
  };
  items[12] = {
    key: "isChannelOptedIn",
    value(arg0, arg1) {
      const viewingChannels = this.getViewingChannels(arg0);
      let hasItem = null != viewingChannels;
      if (hasItem) {
        hasItem = viewingChannels.has(arg1);
      }
      return hasItem;
    }
  };
  items[13] = {
    key: "isViewingServerShop",
    value(arg0) {
      let tmp = null != arg0;
      if (tmp) {
        let type;
        if (null != outer1_13[arg0]) {
          type = tmp3.type;
        }
        tmp = type === ImpersonateStore(outer1_3[10]).ImpersonateType.SERVER_SHOP;
      }
      return tmp;
    }
  };
  items[14] = {
    key: "getImpersonateType",
    value(arg0) {
      if (null == arg0) {
        return null;
      } else {
        let type = null;
        if (null != outer1_13[arg0]) {
          type = tmp2.type;
        }
        return type;
      }
    }
  };
  items[15] = {
    key: "getBackNavigationSection",
    value(arg0) {
      if (null == arg0) {
        return outer1_11.ROLES;
      } else if (null == outer1_13[arg0]) {
        return outer1_11.ROLES;
      } else {
        const type = tmp10.type;
        if (ImpersonateStore(outer1_3[10]).ImpersonateType.ROLES !== type) {
          if (ImpersonateStore(outer1_3[10]).ImpersonateType.SERVER_SHOP !== type) {
            if (ImpersonateStore(outer1_3[10]).ImpersonateType.NEW_MEMBER === type) {
              return outer1_11.ONBOARDING;
            } else {
              return outer1_11.ROLES;
            }
          }
        }
        return tmp10.returnToSection;
      }
    }
  };
  return callback(ImpersonateStore, items);
})(require("initialize").Store);
tmp2.displayName = "ImpersonateStore";
tmp2 = new tmp2(require("dispatcher"), {
  IMPERSONATE_UPDATE: function handleImpersonateUpdate(arg0) {
    let data;
    let guildId;
    ({ guildId, data } = arg0);
    let obj = importDefault(21);
    const result = obj.castGuildIdAsEveryoneGuildRoleId(guildId);
    delete tmp2[tmp];
    obj = {};
    const merged = Object.assign(data);
    obj["timestamp"] = Date.now();
    closure_13[guildId] = obj;
  },
  IMPERSONATE_STOP: function handleImpersonateStop(arg0) {
    if (null == dependencyMap[arg0.guildId]) {
      return false;
    } else {
      delete tmp[tmp2];
    }
  },
  GUILD_ROLE_DELETE: function handleGuildRoleDelete(arg0) {
    let guildId;
    let roleId;
    ({ guildId, roleId } = arg0);
    if (null == dependencyMap[guildId]) {
      return false;
    } else {
      const roles = dependencyMap[guildId].roles;
      delete tmp[tmp2];
    }
  },
  USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: function handleUserGuildSettingsChannelUpdateBulk(arg0) {
    let guildId;
    let overrides;
    ({ guildId, overrides } = arg0);
    let optInChannels;
    if (null != guildId) {
      if (null != dependencyMap[guildId]) {
        if (null != dependencyMap[guildId]) {
          if (tmp9.type === overrides(1915).ImpersonateType.NEW_MEMBER) {
            optInChannels = tmp9.optInChannels;
            if (null == optInChannels) {
              const _Set = Set;
              optInChannels = new Set();
            }
            const keys = optInChannels(21).keys(overrides);
            const item = keys.forEach((arg0) => {
              const flags = overrides[arg0].flags;
              let num = 0;
              if (null != flags) {
                num = flags;
              }
              if (obj.hasFlag(num, outer1_12.OPT_IN_ENABLED)) {
                obj2.add(arg0);
              } else {
                obj2.delete(arg0);
              }
            });
            tmp9.optInChannels = optInChannels;
            return true;
          }
        }
        return false;
      }
    }
    return false;
  },
  GUILD_ONBOARDING_SELECT_OPTION: function handleOptionSelect(arg0) {
    let guildId;
    let optionId;
    let removedOptionIds;
    ({ guildId, optionId, removedOptionIds } = arg0);
    let onboardingResponses;
    if (null != guildId) {
      if (null != dependencyMap[guildId]) {
        if (null != dependencyMap[guildId]) {
          if (tmp11.type === onboardingResponses(1915).ImpersonateType.NEW_MEMBER) {
            onboardingResponses = tmp11.onboardingResponses;
            if (null == onboardingResponses) {
              const _Set = Set;
              onboardingResponses = new Set();
            }
            let tmp5 = null != removedOptionIds;
            if (tmp5) {
              tmp5 = removedOptionIds.length > 0;
            }
            if (tmp5) {
              const item = removedOptionIds.forEach((arg0) => onboardingResponses.delete(arg0));
            }
            if (tmp) {
              onboardingResponses.add(optionId);
            } else {
              onboardingResponses.delete(optionId);
            }
            tmp11.onboardingResponses = onboardingResponses;
            return true;
          }
        }
        return false;
      }
    }
    return false;
  },
  GUILD_MEMBER_UPDATE_LOCAL: function handleGuildMemberUpdateLocal(guildId) {
    let flags;
    let roles;
    guildId = guildId.guildId;
    ({ roles, flags } = guildId);
    if (null == guildId) {
      return false;
    } else {
      let flag = null != tmp2;
      if (flag) {
        if (null != roles) {
          tmp2.roles = roles.reduce((arg0, arg1) => {
            const role = outer1_9.getRole(guildId, arg1);
            if (null != role) {
              arg0[arg1] = role;
            }
            return arg0;
          }, {});
        }
        let tmp3 = null != flags;
        if (tmp3) {
          tmp3 = tmp2.type === guildId(1915).ImpersonateType.NEW_MEMBER;
        }
        flag = true;
        if (tmp3) {
          tmp2.memberOptions.flags = flags;
          flag = true;
        }
      }
      return flag;
    }
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/impersonate/ImpersonateStore.tsx");

export default tmp2;
