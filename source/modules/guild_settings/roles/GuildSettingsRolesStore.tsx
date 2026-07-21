// Module ID: 16172
// Function ID: 124832
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16172 (_isNativeReflectConstruct)
let FormStates;
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
    let closure_28 = false;
  }
}
function clearConfigurationEdit(id) {
  set1.delete(id);
  if (0 === set1.size) {
    let closure_32 = false;
  }
}
function calculatePositionDeltas() {
  if (null != user) {
    if (null != closure_30) {
      let obj = importDefault(dependencyMap[13]);
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
  let closure_28 = false;
  let closure_29 = false;
  let closure_23;
  set.clear();
  map2.clear();
  const CLOSED = FormStates.OPEN;
  if (null != guild) {
    const items = [];
    HermesBuiltin.arraySpread(store.getSortedRoles(guild.id), 0);
    let items1 = items;
  } else {
    items1 = [];
  }
  let closure_30 = items1;
  const items2 = [...items1];
  let closure_31 = items2;
  let id;
  if (null != guild) {
    id = guild.id;
  }
  initRoleStyles(id, closure_31);
  let closure_32 = false;
  if (flag) {
    map1.clear();
    const item = map.forEach((arg0, arg1) => {
      const items = [...arg0];
      const result = closure_35.set(arg1, items);
    });
  }
}
function initRoleStyles(guildId, items) {
  items = guildId;
  const item = items.forEach((colors) => {
    let GRADIENT = constants.SOLID;
    let obj = colors(closure_3[14]);
    if (!tmp) {
      obj = {};
      obj = { "Null": null, "Null": "\u{1F9BB}\u{1F3FF}", textAlign: true, primary_color: closure_17 };
      obj[constants.SOLID] = obj;
      const obj1 = { primary_color: closure_19.primary_color, secondary_color: closure_19.secondary_color, tertiary_color: null };
      obj[constants.GRADIENT] = obj1;
      const obj2 = { primary_color: closure_20.primary_color, secondary_color: closure_20.secondary_color, tertiary_color: closure_20.tertiary_color };
      obj[constants.HOLOGRAPHIC] = obj2;
      if (null != colors.colors) {
        const obj3 = {};
        let primary_color = colors.colors.primary_color;
        if (null == primary_color) {
          primary_color = closure_17;
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
      const result = closure_36.set(colors.id, obj4);
    } else if (null != colors.colors.tertiary_color) {
      GRADIENT = constants.HOLOGRAPHIC;
    } else if (null != colors.colors.secondary_color) {
      GRADIENT = constants.GRADIENT;
    }
  });
}
function getSectionFieldContext(id, section) {
  if (null != closure_25[section]) {
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
  roles = map;
  const mapped = roles.map((arg0) => arg0.get(arg0));
  const found = mapped.filter(roles(dependencyMap[15]).isNotNullish);
  const importDefault = found;
  const importAll = new Set(roles);
  const item = map.forEach((arg0, arg1) => {
    if (!set.has(arg1)) {
      found.push(arg0);
    }
  });
  const dependencyMap = found.length;
  return found.map((arg0, arg1) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj["position"] = length - 1 - arg1;
    return obj;
  });
}
function updateRole(arg0, arg1) {
  const index = closure_30.indexOf(arg0);
  if (index < 0) {
    return false;
  } else {
    const obj = {};
    const merged = Object.assign(arg0);
    const merged1 = Object.assign(arg1);
    const items = [];
    HermesBuiltin.arraySpread(closure_30, 0);
    items[index] = obj;
    closure_30 = items;
    let closure_28 = true;
    set.add(obj.id);
    callback3();
  }
}
function _getRole(id) {
  const arg1 = id;
  return closure_30.find((id) => id.id === id);
}
function getOriginalRole(id) {
  const arg1 = id;
  return closure_31.find((id) => id.id === id);
}
function syncGuildChanges(guildId) {
  guildId = guildId.guildId;
  let arg1;
  let importDefault;
  const guild = store2.getProps().guild;
  if (null != guild) {
    if (guildId === guild.id) {
      if (CLOSED !== FormStates.SUBMITTING) {
        const items = [];
        HermesBuiltin.arraySpread(store.getSortedRoles(guild.id), 0);
        arg1 = items;
        const item = set.forEach((arg0) => {
          const items = arg0;
          const tmp = callback2(arg0);
          let closure_1 = -1;
          if (null != items.find((id) => {
            if (id.id === id) {
              let closure_1 = arg1;
              return true;
            }
          })) {
            if (null != tmp) {
              items[closure_1] = tmp;
            }
          }
          callback(arg0);
        });
        const _Map = Map;
        const map = new Map();
        importDefault = map;
        const item1 = set.forEach((arg0) => {
          const value = store.get(arg0);
          if (null != value) {
            const result = map.set(arg0, value);
          }
        });
        map2.clear();
        initRoleStyles(guildId, items);
        const item2 = map.forEach((arg0, arg1) => {
          const result = store.set(arg1, arg0);
        });
        let closure_29 = false;
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        let closure_30 = items1;
      }
    }
  }
  return false;
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let set = arg1(dependencyMap[5]).set;
let closure_10 = importDefault(dependencyMap[6]);
const isRoleEqual = arg1(dependencyMap[7]).isRoleEqual;
let closure_12 = importDefault(dependencyMap[8]);
let closure_13 = importDefault(dependencyMap[9]);
const GuildSettingsRoleEditSections = arg1(dependencyMap[10]).GuildSettingsRoleEditSections;
const tmp2 = arg1(dependencyMap[11]);
({ GuildSettingsSections: closure_15, FormStates } = tmp2);
({ DEFAULT_ROLE_COLOR: closure_17, GuildFeatures: closure_18 } = tmp2);
({ DEFAULT_GRADIENT_ROLE_COLORS: closure_19, HOLOGRAPHIC_ROLE_COLORS: closure_20 } = arg1(dependencyMap[12]));
let obj = { SOLID: "solid", GRADIENT: "gradient", HOLOGRAPHIC: "holographic" };
let closure_25 = { [GuildSettingsRoleEditSections.DISPLAY]: [null, null, null, null, null, null, null], [GuildSettingsRoleEditSections.PERMISSIONS]: [null], [GuildSettingsRoleEditSections.MEMBERS]: [], [GuildSettingsRoleEditSections.VERIFICATIONS]: [] };
set = new Set();
const CLOSED = FormStates.CLOSED;
let closure_28 = false;
let closure_29 = false;
let closure_30 = [];
let closure_31 = [];
let closure_32 = false;
const set1 = new Set();
const map = new Map();
const map1 = new Map();
const map2 = new Map();
const tmp3 = arg1(dependencyMap[12]);
let closure_37 = importDefault(dependencyMap[20]).debounce(() => {
  let closure_0 = false;
  if (closure_29) {
    const tmp2 = calculatePositionDeltas().length > 0;
    closure_29 = tmp2;
    if (!tmp2) {
      closure_0 = true;
    }
  }
  const items = [...closure_26];
  const item = items.forEach((arg0) => {
    if (callback2(tmp, callback6(arg0))) {
      callback3(arg0);
      let closure_0 = true;
    }
  });
  const items1 = [...closure_33];
  const item1 = items1.forEach((arg0) => {
    const value = closure_35.get(arg0);
    if (obj.isEqual(value, closure_34.get(arg0))) {
      callback4(arg0);
      let closure_0 = true;
    }
  });
  if (closure_0) {
    tmp9.emitChange();
  }
}, 500);
let tmp9 = (Store) => {
  class GuildSettingsRolesStore {
    constructor() {
      self = this;
      tmp = closure_4(this, GuildSettingsRolesStore);
      obj = closure_7(GuildSettingsRolesStore);
      tmp2 = closure_6;
      if (closure_39()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_7;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_7(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = GuildSettingsRolesStore;
  callback2(GuildSettingsRolesStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_13, closure_10, closure_12);
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , ];
  obj = {
    key: "hasChanges",
    value() {
      let tmp = closure_28;
      if (!closure_28) {
        tmp = closure_29;
      }
      if (!tmp) {
        tmp = closure_32;
      }
      return tmp;
    }
  };
  items[1] = obj;
  obj = {
    key: "hasSectionChanges",
    value(arg0, arg1) {
      if (arg1 === constants.VERIFICATIONS) {
        return set.has(arg0);
      } else {
        const tmp2 = callback7(arg0, arg1);
        let tmp4 = null != tmp2;
        if (tmp4) {
          const obj = callback(closure_3[20]);
          const pickResult = callback(closure_3[20]).pick(tmp2.role, tmp2.fields);
          tmp4 = !callback4(pickResult, callback(closure_3[20]).pick(tmp2.original, tmp2.fields));
          const obj2 = callback(closure_3[20]);
        }
        return tmp4;
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getRoleStyleData",
    value(arg0) {
      return closure_36.get(arg0);
    }
  };
  items[4] = {
    key: "errorMessage",
    get() {
      return closure_23;
    }
  };
  items[5] = {
    key: "hasSortChanges",
    get() {
      return closure_29;
    }
  };
  items[6] = {
    key: "hasRoleConfigurationChanges",
    get() {
      return closure_32;
    }
  };
  items[7] = {
    key: "guild",
    get() {
      return closure_21;
    }
  };
  items[8] = {
    key: "editedRoleIds",
    get() {
      return Array.from(closure_26);
    }
  };
  items[9] = {
    key: "editedRoleIdsForConfigurations",
    get() {
      return closure_33;
    }
  };
  items[10] = {
    key: "roles",
    get() {
      return closure_30;
    }
  };
  items[11] = {
    key: "formState",
    get() {
      return closure_27;
    }
  };
  items[12] = {
    key: "getSortDeltas",
    value() {
      return callback6();
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
      return callback8(arg0);
    }
  };
  items[15] = {
    key: "getPermissionSearchQuery",
    value() {
      return closure_22;
    }
  };
  items[16] = {
    key: "getEditedRoleConnectionConfigurationsMap",
    value() {
      return closure_35;
    }
  };
  return callback(GuildSettingsRolesStore, items);
}(importDefault(dependencyMap[21]).Store);
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
    const mapped = roles.map((arg0) => callback(arg0));
    closure_30 = mapped.filter(arg1(dependencyMap[15]).isNotNullish);
    let closure_29 = true;
    callback3();
  },
  GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS: function handleUpdatePermissions(flag) {
    const tmp = _getRole(flag.id);
    if (null == tmp) {
      return false;
    } else {
      const permissions = tmp.permissions;
      const obj = {};
      const obj2 = importAll(dependencyMap[16]);
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
      const obj = { permissions: importAll(dependencyMap[17]).NONE };
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
      let obj = arg1(dependencyMap[18]);
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
        obj = { "Null": null, "Null": "\u{1F9BB}\u{1F3FF}", textAlign: true, primary_color: color };
        value.styleColors[obj.SOLID] = obj;
        obj = {};
        const merged = Object.assign(value);
        const result = map2.set(id, obj);
        const obj1 = { color, colorString: int2hexResult };
        const obj2 = { "Null": null, "Null": "\u{1F9BB}\u{1F3FF}", textAlign: true, primary_color: color };
        obj1.colors = obj2;
        let tmp13 = null;
        if (null != int2hexResult) {
          const obj3 = { -9223372036854775808: null, 0: "\u{1F9BB}\u{1F3FF}", 0: true, primaryColor: int2hexResult };
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
      const result = arg1(dependencyMap[19]).extractColorStringsFromServerColors(colors);
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
      updateRole(tmp.role, importDefault(dependencyMap[20]).pick(original, fields));
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
    const arg1 = id;
    let importDefault;
    const tmp = getSectionFieldContext(id, id.section);
    if (null == tmp) {
      return false;
    } else {
      const role = tmp.role;
      const obj = {};
      const merged = Object.assign(tmp.original);
      const merged1 = Object.assign(importDefault(dependencyMap[20]).pick(role, tmp.fields));
      importDefault = obj;
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
    let role;
    ({ role, searchQuery: closure_22 } = arg0);
    if (null != role) {
      if (null == _getRole(role.id)) {
        const items = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(closure_30, 0);
        items[arraySpreadResult] = role;
        const sum = arraySpreadResult + 1;
        closure_30 = items;
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
    const items = [role];
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
        const result1 = arg1(dependencyMap[19]).extractColorStringsFromServerColors(tmp7);
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
      const obj = importDefault(dependencyMap[20]);
    }
  },
  GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS: function handleUpdateRoleConnectionConfigurations(roleId) {
    const tmp = _getRole(roleId.roleId);
    if (null == tmp) {
      return false;
    } else {
      let closure_32 = true;
      set1.add(tmp.id);
      const result = map1.set(tmp.id, roleId.roleConnectionConfigurations);
      callback3();
    }
  },
  GUILD_SETTINGS_CLOSE: function handleClose() {
    let closure_21 = null;
    const items = [];
    let closure_30 = items;
    let closure_31 = items;
    map.clear();
    set.clear();
    map2.clear();
    map1.clear();
    const set = new Set();
    let closure_28 = false;
    let closure_29 = false;
    let closure_32 = false;
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
    const CLOSED = FormStates.SUBMITTING;
  },
  GUILD_SETTINGS_ROLES_SAVE_FAIL: function handleSaveFail(message) {
    const CLOSED = FormStates.OPEN;
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
        const user = set(user, "features", set);
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
        const user = set(user, "features", set);
      }
    }
    return false;
  }
};
tmp9 = new tmp9(importDefault(dependencyMap[22]), obj);
const importDefaultResult = importDefault(dependencyMap[20]);
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/guild_settings/roles/GuildSettingsRolesStore.tsx");

export default tmp9;
export const RoleColorsStyle = obj;
