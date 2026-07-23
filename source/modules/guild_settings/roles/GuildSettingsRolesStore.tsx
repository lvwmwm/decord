// Module ID: 16305
// Function ID: 127108
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1388, 16306, 1911, 1910, 8439, 16300, 653, 16307, 11455, 4571, 1327, 483, 3763, 665, 1913, 22, 566, 686, 2]

// Module 16305 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import GuildRoleRecordTypeTag from "GuildRoleRecordTypeTag";
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment";
import calculateElevatedPermissions from "calculateElevatedPermissions";
import pad2 from "pad2";
import { set } from "constructInPlace";
import closure_10 from "_isNativeReflectConstruct";
import { isRoleEqual } from "GuildRoleRecordTypeTag";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_13 from "_isNativeReflectConstruct";
import { GuildSettingsRoleEditSections } from "MAX_SUBCATEGORIES";
import ME from "ME";
import HOLOGRAPHIC_ROLE_COLORS from "HOLOGRAPHIC_ROLE_COLORS";
import set from "_possibleConstructorReturn";

let FormStates;
let closure_15;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function clearRoleEdit(id) {
  set.delete(id);
  if (0 === set.size) {
    let c28 = false;
  }
}
function clearConfigurationEdit(id) {
  set1.delete(id);
  if (0 === set1.size) {
    let c32 = false;
  }
}
function calculatePositionDeltas() {
  if (null != user) {
    if (null != closure_30) {
      let obj = importDefault(11455);
      obj = {
        oldOrdering: store.getSortedRoles(user.id),
        newOrdering: closure_30,
        idGetter(id) {
              return id.id;
            },
        existingPositionGetter(position) {
              return position.position;
            },
        ascending: false
      };
      const result = obj.calculatePositionDeltas(obj);
    }
    return [];
  }
}
function handleSetSection(arg0) {
  if (null == closure_21) {
    if (tmp === constants.ROLES) {
      handleInit();
    }
  }
  return false;
}
function handleInit() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  const guild = store2.getProps().guild;
  let c28 = false;
  let c29 = false;
  let c23;
  set.clear();
  map2.clear();
  const OPEN = FormStates.OPEN;
  if (null != guild) {
    let items = [];
    HermesBuiltin.arraySpread(store.getSortedRoles(guild.id), 0);
    let items1 = items;
  } else {
    items1 = [];
  }
  const items2 = [...items1];
  let id;
  if (null != guild) {
    id = guild.id;
  }
  initRoleStyles(id, items2);
  let c32 = false;
  if (flag) {
    map1.clear();
    const item = map.forEach((arg0, arg1) => {
      const items = [...arg0];
      const result = outer1_35.set(arg1, items);
    });
  }
}
function initRoleStyles(guildId, items) {
  let closure_0 = guildId;
  const item = items.forEach((colors) => {
    let GRADIENT = outer1_24.SOLID;
    let obj = guildId(outer1_3[14]);
    if (!tmp) {
      obj = {};
      obj = { primary_color: outer1_17, secondary_color: null, tertiary_color: null };
      obj[outer1_24.SOLID] = obj;
      const obj1 = { primary_color: outer1_19.primary_color, secondary_color: outer1_19.secondary_color, tertiary_color: null };
      obj[outer1_24.GRADIENT] = obj1;
      const obj2 = { primary_color: outer1_20.primary_color, secondary_color: outer1_20.secondary_color, tertiary_color: outer1_20.tertiary_color };
      obj[outer1_24.HOLOGRAPHIC] = obj2;
      if (null != colors.colors) {
        const obj3 = {};
        let primary_color = colors.colors.primary_color;
        if (null == primary_color) {
          primary_color = outer1_17;
        }
        obj3.primary_color = primary_color;
        const secondary_color = colors.colors.secondary_color;
        let tmp14 = null;
        if (null != secondary_color) {
          tmp14 = secondary_color;
        }
        obj3.secondary_color = tmp14;
        const tertiary_color = colors.colors.tertiary_color;
        let tmp15 = null;
        if (null != tertiary_color) {
          tmp15 = tertiary_color;
        }
        obj3.tertiary_color = tmp15;
        obj[GRADIENT] = obj3;
      }
      const obj4 = { currentStyle: GRADIENT, styleColors: obj };
      const result = outer1_36.set(colors.id, obj4);
    } else if (null != colors.colors.tertiary_color) {
      GRADIENT = outer1_24.HOLOGRAPHIC;
    } else if (null != colors.colors.secondary_color) {
      GRADIENT = outer1_24.GRADIENT;
    }
  });
}
function getSectionFieldContext(id, section) {
  if (null != table[section]) {
    if (0 !== arr.length) {
      const tmp2 = _getRole(id);
      const tmp4 = getOriginalRole(id);
      let tmp5 = null;
      if (null != tmp2) {
        tmp5 = null;
        if (null != tmp4) {
          const obj = { fields: arr, role: tmp2, original: tmp4 };
          tmp5 = obj;
        }
      }
      return tmp5;
    }
  }
  return null;
}
function getRolesInOrder(map, roles) {
  const _require = map;
  const mapped = roles.map((arg0) => map.get(arg0));
  const found = mapped.filter(_require(length[15]).isNotNullish);
  const set = new Set(roles);
  const item = map.forEach((arg0, arg1) => {
    if (!set.has(arg1)) {
      found.push(arg0);
    }
  });
  return found.map((arg0, arg1) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj["position"] = length - 1 - arg1;
    return obj;
  });
}
function updateRole(arg0, arg1) {
  const index = items.indexOf(arg0);
  if (index < 0) {
    return false;
  } else {
    const obj = {};
    const merged = Object.assign(arg0);
    const merged1 = Object.assign(arg1);
    items = [];
    HermesBuiltin.arraySpread(items, 0);
    items[index] = obj;
    let c28 = true;
    set.add(obj.id);
    callback3();
  }
}
function _getRole(id) {
  let closure_0 = id;
  return closure_30.find((id) => id.id === closure_0);
}
function getOriginalRole(id) {
  let closure_0 = id;
  return closure_31.find((id) => id.id === closure_0);
}
function syncGuildChanges(guildId) {
  guildId = guildId.guildId;
  let items;
  let map;
  const guild = store2.getProps().guild;
  if (null != guild) {
    if (guildId === guild.id) {
      if (CLOSED !== FormStates.SUBMITTING) {
        items = [];
        HermesBuiltin.arraySpread(store.getSortedRoles(guild.id), 0);
        const item = set.forEach((arg0) => {
          const items = arg0;
          const tmp = outer1_48(arg0);
          let c1 = -1;
          if (null != items.find((id) => {
            if (id.id === closure_0) {
              let closure_1 = arg1;
              return true;
            }
          })) {
            if (null != tmp) {
              items[c1] = tmp;
            }
          }
          outer1_40(arg0);
        });
        const _Map = Map;
        map = new Map();
        const item1 = set.forEach((arg0) => {
          const value = outer1_36.get(arg0);
          if (null != value) {
            const result = map.set(arg0, value);
          }
        });
        map2.clear();
        initRoleStyles(guildId, items);
        const item2 = map.forEach((arg0, arg1) => {
          const result = outer1_36.set(arg1, arg0);
        });
        let c29 = false;
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
      }
    }
  }
  return false;
}
({ GuildSettingsSections: closure_15, FormStates } = ME);
({ DEFAULT_ROLE_COLOR: closure_17, GuildFeatures: closure_18 } = ME);
({ DEFAULT_GRADIENT_ROLE_COLORS: closure_19, HOLOGRAPHIC_ROLE_COLORS: closure_20 } = HOLOGRAPHIC_ROLE_COLORS);
let obj = { SOLID: "solid", GRADIENT: "gradient", HOLOGRAPHIC: "holographic" };
let closure_25 = { [GuildSettingsRoleEditSections.DISPLAY]: ["name", "hoist", "mentionable", "color", "colors", "colorString", "colorStrings"], [GuildSettingsRoleEditSections.PERMISSIONS]: ["permissions"], [GuildSettingsRoleEditSections.MEMBERS]: [], [GuildSettingsRoleEditSections.VERIFICATIONS]: [] };
set = new Set();
let CLOSED = FormStates.CLOSED;
let c28 = false;
let c29 = false;
let closure_30 = [];
let closure_31 = [];
let c32 = false;
const set1 = new Set();
let map = new Map();
let map1 = new Map();
const map2 = new Map();
let closure_37 = require("dispatcher").debounce(() => {
  let c0 = false;
  if (c29) {
    const tmp2 = calculatePositionDeltas().length > 0;
    c29 = tmp2;
    if (!tmp2) {
      c0 = true;
    }
  }
  const items = [...set];
  const item = items.forEach((arg0) => {
    if (outer1_11(tmp, outer1_49(arg0))) {
      outer1_40(arg0);
      let c0 = true;
    }
  });
  const items1 = [...set1];
  const item1 = items1.forEach((arg0) => {
    const value = outer1_35.get(arg0);
    if (obj.isEqual(value, outer1_34.get(arg0))) {
      outer1_41(arg0);
      let c0 = true;
    }
  });
  if (c0) {
    tmp9.emitChange();
  }
}, 500);
let tmp9 = ((Store) => {
  class GuildSettingsRolesStore {
    constructor() {
      self = this;
      tmp = outer1_4(this, GuildSettingsRolesStore);
      obj = outer1_7(GuildSettingsRolesStore);
      tmp2 = outer1_6;
      if (outer1_39()) {
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
  callback2(GuildSettingsRolesStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_13, outer1_10, outer1_12);
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , ];
  obj = {
    key: "hasChanges",
    value() {
      let tmp = outer1_28;
      if (!outer1_28) {
        tmp = outer1_29;
      }
      if (!tmp) {
        tmp = outer1_32;
      }
      return tmp;
    }
  };
  items[1] = obj;
  obj = {
    key: "hasSectionChanges",
    value(arg0, arg1) {
      if (arg1 === outer1_14.VERIFICATIONS) {
        return outer1_33.has(arg0);
      } else {
        const tmp2 = outer1_45(arg0, arg1);
        let tmp4 = null != tmp2;
        if (tmp4) {
          const obj = outer1_1(outer1_3[20]);
          const pickResult = outer1_1(outer1_3[20]).pick(tmp2.role, tmp2.fields);
          tmp4 = !outer1_11(pickResult, outer1_1(outer1_3[20]).pick(tmp2.original, tmp2.fields));
          const obj2 = outer1_1(outer1_3[20]);
        }
        return tmp4;
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getRoleStyleData",
    value(arg0) {
      return outer1_36.get(arg0);
    }
  };
  items[4] = {
    key: "errorMessage",
    get() {
      return outer1_23;
    }
  };
  items[5] = {
    key: "hasSortChanges",
    get() {
      return outer1_29;
    }
  };
  items[6] = {
    key: "hasRoleConfigurationChanges",
    get() {
      return outer1_32;
    }
  };
  items[7] = {
    key: "guild",
    get() {
      return outer1_21;
    }
  };
  items[8] = {
    key: "editedRoleIds",
    get() {
      return Array.from(outer1_26);
    }
  };
  items[9] = {
    key: "editedRoleIdsForConfigurations",
    get() {
      return outer1_33;
    }
  };
  items[10] = {
    key: "roles",
    get() {
      return outer1_30;
    }
  };
  items[11] = {
    key: "formState",
    get() {
      return outer1_27;
    }
  };
  items[12] = {
    key: "getSortDeltas",
    value() {
      return outer1_42();
    }
  };
  items[13] = {
    key: "showNotice",
    value() {
      return this.hasChanges();
    }
  };
  items[14] = {
    key: "getRole",
    value(arg0) {
      return outer1_48(arg0);
    }
  };
  items[15] = {
    key: "getPermissionSearchQuery",
    value() {
      return outer1_22;
    }
  };
  items[16] = {
    key: "getEditedRoleConnectionConfigurationsMap",
    value() {
      return outer1_35;
    }
  };
  return callback(GuildSettingsRolesStore, items);
})(require("initialize").Store);
tmp9.displayName = "GuildSettingsRolesStore";
obj = {
  GUILD_SETTINGS_ROLES_INIT() {
    handleInit();
  },
  GUILD_SETTINGS_INIT: handleSetSection,
  GUILD_SETTINGS_SET_SECTION: handleSetSection,
  GUILD_SETTINGS_ROLES_SORT_UPDATE: function handleSortUpdate(roles) {
    roles = roles.roles;
    if (null != closure_30) {
      if (roles.length !== closure_30.length) {
        return false;
      }
    }
    const mapped = roles.map((arg0) => outer1_48(arg0));
    closure_30 = mapped.filter(require(1327) /* isDiscordFrontendDevelopment */.isNotNullish);
    let c29 = true;
    callback3();
  },
  GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS: function handleUpdatePermissions(flag) {
    const tmp = _getRole(flag.id);
    if (null == tmp) {
      return false;
    } else {
      const permissions = tmp.permissions;
      const obj = {};
      const obj2 = importAll(483);
      if (flag.allow) {
        let addResult = obj2.add(permissions, flag);
      } else {
        addResult = obj2.remove(permissions, flag);
      }
      obj.permissions = addResult;
      return updateRole(tmp, obj);
    }
  },
  GUILD_SETTINGS_ROLES_UPDATE_PERMISSION_SET: function handleUpdatePermissionSet(id) {
    const tmp = _getRole(id.id);
    let tmp2 = null != tmp;
    if (tmp2) {
      const obj = { permissions: id.permissions };
      tmp2 = updateRole(tmp, obj);
    }
    return tmp2;
  },
  GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS: function handleClearRolePermissions(id) {
    const tmp = _getRole(id.id);
    let tmp2 = null != tmp;
    if (tmp2) {
      const obj = { permissions: importAll(3763).NONE };
      tmp2 = updateRole(tmp, obj);
    }
    return tmp2;
  },
  GUILD_SETTINGS_ROLES_UPDATE_NAME: function handleUpdateName(id) {
    const tmp = _getRole(id.id);
    let tmp2 = null != tmp;
    if (tmp2) {
      const obj = { name: id.name };
      tmp2 = updateRole(tmp, obj);
    }
    return tmp2;
  },
  GUILD_SETTINGS_ROLES_UPDATE_DESCRIPTION: function handleUpdateDescription(id) {
    const tmp = _getRole(id.id);
    let tmp2 = null != tmp;
    if (tmp2) {
      const obj = { description: id.description };
      tmp2 = updateRole(tmp, obj);
    }
    return tmp2;
  },
  GUILD_SETTINGS_ROLES_UPDATE_COLOR: function handleUpdateColor(arg0) {
    let color;
    let id;
    ({ id, color } = arg0);
    let int2hexResult = null;
    if (0 !== color) {
      let obj = require(665) /* pad2 */;
      int2hexResult = obj.int2hex(color);
    }
    const tmp4 = _getRole(id);
    if (null == tmp4) {
      return false;
    } else {
      const value = map2.get(id);
      let tmp12Result = null != value;
      if (tmp12Result) {
        value.currentStyle = obj.SOLID;
        obj = { primary_color: color, secondary_color: null, tertiary_color: null };
        value.styleColors[obj.SOLID] = obj;
        obj = {};
        const merged = Object.assign(value);
        const result = map2.set(id, obj);
        const obj1 = { color, colorString: int2hexResult };
        const obj2 = { primary_color: color, secondary_color: null, tertiary_color: null };
        obj1.colors = obj2;
        let tmp13 = null;
        if (null != int2hexResult) {
          const obj3 = { primaryColor: int2hexResult, secondaryColor: null, tertiaryColor: null };
          tmp13 = obj3;
        }
        obj1.colorStrings = tmp13;
        tmp12Result = updateRole(tmp4, obj1);
        const tmp12 = updateRole;
      }
      return tmp12Result;
    }
  },
  GUILD_SETTINGS_ROLES_UPDATE_COLORS: function handleUpdateColors(arg0) {
    let colors;
    let currentStyle;
    let id;
    ({ id, colors, currentStyle } = arg0);
    const tmp = _getRole(id);
    if (null == tmp) {
      return false;
    } else {
      const result = require(1913) /* extractColorStringsFromServerColors */.extractColorStringsFromServerColors(colors);
      const value = map2.get(id);
      let tmp8 = null != value;
      if (tmp8) {
        value.styleColors[currentStyle] = colors;
        value.currentStyle = currentStyle;
        let obj = {};
        const merged = Object.assign(value);
        const result1 = map2.set(id, obj);
        obj = { color: colors.primary_color, colors, colorString: result.primaryColor, colorStrings: result };
        tmp8 = updateRole(tmp, obj);
      }
      return tmp8;
    }
  },
  GUILD_SETTINGS_ROLES_UPDATE_SETTINGS: function handleUpdateSettings(id) {
    let hoist;
    let mentionable;
    ({ hoist, mentionable } = id);
    const tmp = _getRole(id.id);
    let tmp2 = null != tmp;
    if (tmp2) {
      const obj = { hoist, mentionable };
      tmp2 = updateRole(tmp, obj);
    }
    return tmp2;
  },
  GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON: function handleUpdateRoleIcon(id) {
    let icon;
    let unicodeEmoji;
    ({ icon, unicodeEmoji } = id);
    const tmp = _getRole(id.id);
    let tmp2 = null != tmp;
    if (tmp2) {
      const obj = { icon, unicodeEmoji };
      tmp2 = updateRole(tmp, obj);
    }
    return tmp2;
  },
  GUILD_SETTINGS_ROLES_DISCARD_SECTION_CHANGES: function handleDiscardSectionChanges(id) {
    let fields;
    let original;
    const tmp = getSectionFieldContext(id.id, id.section);
    if (null == tmp) {
      return false;
    } else {
      ({ fields, original } = tmp);
      updateRole(tmp.role, importDefault(22).pick(original, fields));
      let hasItem = fields.includes("color");
      if (!hasItem) {
        hasItem = fields.includes("colors");
      }
      if (hasItem) {
        id = undefined;
        if (null != user) {
          id = user.id;
        }
        const items = [original];
        initRoleStyles(id, items);
        const tmp3 = initRoleStyles;
      }
    }
  },
  GUILD_SETTINGS_ROLES_DISCARD_CONNECTIONS_CHANGES: function handleDiscardConnectionsChanges(id) {
    id = id.id;
    const value = map.get(id);
    if (null == value) {
      map1.delete(id);
    } else {
      const items = [];
      HermesBuiltin.arraySpread(value, 0);
      const result = map1.set(id, items);
    }
    clearConfigurationEdit(id);
  },
  GUILD_SETTINGS_ROLES_COMMIT_SECTION_CHANGES: function handleCommitSectionChanges(id) {
    id = id.id;
    let obj;
    let tmp = getSectionFieldContext(id, id.section);
    if (null == tmp) {
      return false;
    } else {
      const role = tmp.role;
      obj = {};
      const merged = Object.assign(tmp.original);
      const merged1 = Object.assign(obj(22).pick(role, tmp.fields));
      closure_31 = closure_31.map((id) => {
        let tmp = id;
        if (id.id === id) {
          tmp = obj;
        }
        return tmp;
      });
      if (isRoleEqual(role, obj)) {
        clearRoleEdit(id);
      }
    }
  },
  GUILD_SETTINGS_ROLE_SELECT: function handleInsertRole(arg0) {
    let closure_22;
    let role;
    ({ role, searchQuery: closure_22 } = arg0);
    if (null != role) {
      if (null == _getRole(role.id)) {
        const items = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(items, 0);
        items[arraySpreadResult] = role;
        const sum = arraySpreadResult + 1;
        callback3();
      } else {
        updateRole(role, role);
      }
    }
  },
  GUILD_SETTINGS_ROLES_DUPLICATE_SUCCESS: function handleDuplicateSuccess(arg0) {
    let role;
    let roles;
    ({ role, roles } = arg0);
    const map = new Map(closure_30.map((id) => {
      const items = [id.id, id];
      return items;
    }));
    const result = map.set(role.id, role);
    closure_30 = getRolesInOrder(map, roles);
    const map1 = new Map(closure_31.map((id) => {
      const items = [id.id, id];
      return items;
    }));
    const result1 = map1.set(role.id, role);
    closure_31 = getRolesInOrder(map1, roles);
    let id;
    if (null != user) {
      id = user.id;
    }
    let items = [role];
    initRoleStyles(id, items);
  },
  GUILD_SETTINGS_ROLES_ROLE_STYLE_UPDATE: function handleRoleStyleUpdate(arg0) {
    let currentStyle;
    let id;
    ({ id, currentStyle } = arg0);
    const tmp = _getRole(id);
    if (null == tmp) {
      return false;
    } else {
      const value = map2.get(id);
      if (null == value) {
        return false;
      } else {
        let obj = { currentStyle, styleColors: value.styleColors };
        const result = map2.set(id, obj);
        const result1 = require(1913) /* extractColorStringsFromServerColors */.extractColorStringsFromServerColors(tmp7);
        obj = {};
        const primary_color = tmp7.primary_color;
        let tmp2;
        if (null != primary_color) {
          tmp2 = primary_color;
        }
        obj.color = tmp2;
        obj.colors = value.styleColors[currentStyle];
        obj.colorString = result1.primaryColor;
        obj.colorStrings = result1;
        return updateRole(tmp, obj);
      }
    }
  },
  GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: function handleFetchRoleConnectionConfigurations(roleConnectionConfigurations) {
    roleConnectionConfigurations = roleConnectionConfigurations.roleConnectionConfigurations;
    const tmp = _getRole(roleConnectionConfigurations.roleId);
    if (null == tmp) {
      return false;
    } else {
      const value = map.get(tmp.id);
      if (obj.isEqual(value, roleConnectionConfigurations)) {
        return false;
      } else {
        const result = map1.set(tmp.id, roleConnectionConfigurations);
        const result1 = map.set(tmp.id, roleConnectionConfigurations);
        clearConfigurationEdit(tmp.id);
        callback3();
      }
      obj = importDefault(22);
    }
  },
  GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS: function handleUpdateRoleConnectionConfigurations(roleId) {
    const tmp = _getRole(roleId.roleId);
    if (null == tmp) {
      return false;
    } else {
      let c32 = true;
      set1.add(tmp.id);
      const result = map1.set(tmp.id, roleId.roleConnectionConfigurations);
      callback3();
    }
  },
  GUILD_SETTINGS_CLOSE: function handleClose() {
    let c21 = null;
    const items = [];
    map.clear();
    set.clear();
    map2.clear();
    map1.clear();
    set = new Set();
    let c28 = false;
    let c29 = false;
    let c32 = false;
    const CLOSED = FormStates.CLOSED;
  },
  GUILD_ROLE_CREATE: syncGuildChanges,
  GUILD_ROLE_UPDATE: syncGuildChanges,
  GUILD_ROLE_DELETE: function handleRoleDelete(roleId) {
    if (set1.has(roleId.roleId)) {
      map.delete(roleId.roleId);
      map1.delete(roleId.roleId);
      clearConfigurationEdit(roleId.roleId);
    }
    return syncGuildChanges(roleId);
  },
  GUILD_SETTINGS_ROLES_SUBMITTING: function handleSubmitting() {
    const SUBMITTING = FormStates.SUBMITTING;
  },
  GUILD_SETTINGS_ROLES_SAVE_FAIL: function handleSaveFail(message) {
    const OPEN = FormStates.OPEN;
    message = message.message;
  },
  GUILD_SETTINGS_ROLES_SAVE_SUCCESS: function handleSaveSuccess() {
    handleInit(false);
  },
  GUILD_SETTINGS_PIN_PERMISSION_MIGRATED: function handlePinPermissionMigrated(arg0) {
    if (null != user) {
      if (tmp === user.id) {
        const _Set = Set;
        const items = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(user.features, 0);
        items[arraySpreadResult] = constants2.PIN_PERMISSION_MIGRATION_COMPLETE;
        const sum = arraySpreadResult + 1;
        const set = new Set(items);
        user = set(user, "features", set);
      }
    }
    return false;
  },
  GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED: function handleSlowmodePermissionMigrated(arg0) {
    if (null != user) {
      if (tmp === user.id) {
        const _Set = Set;
        const items = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(user.features, 0);
        items[arraySpreadResult] = constants2.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE;
        const sum = arraySpreadResult + 1;
        const set = new Set(items);
        user = set(user, "features", set);
      }
    }
    return false;
  }
};
tmp9 = new tmp9(require("dispatcher"), obj);
let closure_38 = tmp9;
let result = set.fileFinishedImporting("modules/guild_settings/roles/GuildSettingsRolesStore.tsx");

export default tmp9;
export const RoleColorsStyle = obj;
