// Module ID: 16201
// Function ID: 125111
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: default

// Module 16201 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_4 = [-0.0000000000000000000000000000000000000000000000000000000000000000006398718284889051];
let closure_5 = importDefault(dependencyMap[0]);
let closure_6 = importDefault(dependencyMap[1]);
let closure_7 = importDefault(dependencyMap[2]);
let closure_8 = importDefault(dependencyMap[3]);
let closure_9 = importDefault(dependencyMap[4]);
let closure_10 = importDefault(dependencyMap[5]);
let closure_11 = importDefault(dependencyMap[6]);
const importAllResult = importAll(dependencyMap[7]);
const View = arg1(dependencyMap[8]).View;
const isEveryoneRole = arg1(dependencyMap[9]).isEveryoneRole;
let closure_15 = importDefault(dependencyMap[10]);
let closure_16 = importDefault(dependencyMap[11]);
let closure_17 = importDefault(dependencyMap[12]);
let closure_18 = importDefault(dependencyMap[13]);
let closure_19 = importDefault(dependencyMap[14]);
let closure_20 = importDefault(dependencyMap[15]);
const RoleColorsStyle = arg1(dependencyMap[15]).RoleColorsStyle;
let closure_22 = arg1(dependencyMap[16]).GuildSettingsRoleEditSections;
({ AnalyticEvents: closure_23, DEFAULT_ROLE_COLOR: closure_24, GuildSettingsSections: closure_25 } = arg1(dependencyMap[17]));
const HOLOGRAPHIC_ROLE_COLORS = arg1(dependencyMap[18]).HOLOGRAPHIC_ROLE_COLORS;
const tmp3 = arg1(dependencyMap[17]);
({ jsx: closure_27, jsxs: closure_28, Fragment: closure_29 } = arg1(dependencyMap[19]));
let obj = arg1(dependencyMap[20]);
obj = { container: { "Null": "vertical", "Null": false } };
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[21]).colors.BACKGROUND_SURFACE_HIGH };
obj.innerContainer = obj;
obj.managedRolesWarningContainer = {};
const tmp4 = arg1(dependencyMap[19]);
obj.form = { paddingHorizontal: importDefault(dependencyMap[21]).modules.mobile.TABLE_ROW_PADDING };
let closure_30 = obj.createLegacyClassComponentStyles(obj);
const tmp5 = (PureComponent) => {
  class GuildSettingsRoleEdit {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_7(this, GuildSettingsRoleEdit);
      items1 = [...items];
      obj = closure_10(GuildSettingsRoleEdit);
      tmp2 = closure_9;
      if (closure_32()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_10;
        constructResult = Reflect.construct(obj, items1, closure_10(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      GuildSettingsRoleEdit = tmp2Result;
      tmp2Result.state = { submitting: false, formErrors: {} };
      tmp2Result.onSubScreenValueChange = (arg0) => {
        const navigation = tmp2Result.props.navigation;
        const obj = {};
        const merged = Object.assign(tmp2Result.props);
        obj["section"] = arg0;
        navigation.push(constants3.ROLE_EDIT_REFRESH, obj);
      };
      tmp2Result.trackTabChanged = (arg0) => {
        let hoist;
        let mentionable;
        let obj = tmp2Result(closure_3[22]);
        const result = obj.collectGuildAnalyticsMetadata(tmp2Result.props.guild.id);
        const role = tmp2Result.props.role;
        const id = role.id;
        ({ mentionable, hoist } = role);
        const sectionAnalyticsName = id(closure_3[23]).getSectionAnalyticsName(arg0);
        const members = members.getMembers(tmp2Result.props.guild.id);
        const obj2 = id(closure_3[23]);
        const str = role.permissions;
        const found = callback(closure_3[24])(members).filter((roles) => {
          roles = roles.roles;
          return roles.includes(id);
        });
        const arr = callback(closure_3[24])(members);
        const sizeResult = found.size();
        obj = { tab_opened: sectionAnalyticsName };
        const obj4 = callback(closure_3[25]);
        obj.is_everyone = id(closure_3[26]).isEveryoneRoleId(id.props.guild.id, id);
        obj.role_id = id;
        obj.role_mentionable = mentionable;
        obj.role_hoist = hoist;
        obj.role_permissions = str.toString();
        obj.role_num_members = sizeResult;
        const merged = Object.assign(result);
        obj4.track(constants2.ROLE_PAGE_VIEWED, obj);
      };
      tmp2Result.handleNameChanged = (name) => {
        const merged = Object.assign(tmp2Result.state.formErrors);
        delete r3.name;
        tmp2Result.setState({ formErrors: {} });
        tmp2Result(closure_3[27]).updateRoleName(tmp2Result.props.role.id, name);
      };
      tmp2Result.handleMentionableChanged = (mentionable) => {
        tmp2Result(closure_3[27]).toggleRoleSettings(tmp2Result.props.role.id, tmp2Result.props.role.hoist, mentionable);
      };
      tmp2Result.handleHoistChanged = (hoist) => {
        tmp2Result(closure_3[27]).toggleRoleSettings(tmp2Result.props.role.id, hoist, tmp2Result.props.role.mentionable);
      };
      tmp2Result.handlePermissionsChanged = (permissions) => {
        const result = tmp2Result(closure_3[27]).updateRolePermissionSet(tmp2Result.props.role.id, permissions);
      };
      tmp2Result.handleSaveRole = () => new Promise((self) => {
        let hoist;
        let mentionable;
        let name;
        let permissions;
        const navigation = self.props.navigation;
        let id = self.props.guild.id;
        id = self.props.role.id;
        ({ name, permissions, mentionable, hoist } = self.props.role);
        const effectiveSection = self.getEffectiveSection();
        if (effectiveSection === constants2.PERMISSIONS) {
          let obj = { permissions };
        } else if (effectiveSection === constants2.DISPLAY) {
          const roleStyleData = store.getRoleStyleData(id);
          let currentStyle;
          if (null != roleStyleData) {
            currentStyle = roleStyleData.currentStyle;
          }
          if (null == currentStyle) {
            currentStyle = constants.SOLID;
          }
          let primary_color;
          if (null != roleStyleData) {
            const styleColors = roleStyleData.styleColors;
            if (null != styleColors) {
              if (null != styleColors[currentStyle]) {
                primary_color = tmp5.primary_color;
              }
            }
          }
          if (null == primary_color) {
            primary_color = closure_24;
          }
          let tmp6;
          if (null != roleStyleData) {
            const styleColors2 = roleStyleData.styleColors;
            if (null != styleColors2) {
              tmp6 = styleColors2[currentStyle];
            }
          }
          if (currentStyle === constants.SOLID) {
            obj = { marginRight: "mn", borderLeftColor: "description", borderLeftWidth: "Array", primary_color };
            let primary_color1 = primary_color;
            tmp6 = obj;
          } else if (currentStyle === constants.HOLOGRAPHIC) {
            primary_color1 = primary_color.primary_color;
            tmp6 = primary_color;
          } else {
            primary_color1 = undefined;
            if (null != tmp6) {
              primary_color1 = tmp6.primary_color;
            }
            if (null == primary_color1) {
              primary_color1 = closure_24;
            }
          }
          obj = { name, color: primary_color1, colors: tmp6, hoist, mentionable };
        }
        let hasRoleConfigurationChanges = effectiveSection === constants2.VERIFICATIONS;
        if (hasRoleConfigurationChanges) {
          hasRoleConfigurationChanges = store.hasRoleConfigurationChanges;
        }
        if (hasRoleConfigurationChanges) {
          const editedRoleIdsForConfigurations = store.editedRoleIdsForConfigurations;
          hasRoleConfigurationChanges = editedRoleIdsForConfigurations.has(id);
        }
        if (hasRoleConfigurationChanges) {
          const editedRoleConnectionConfigurationsMap = store.getEditedRoleConnectionConfigurationsMap();
          let closure_2 = editedRoleConnectionConfigurationsMap.get(id);
        }
        function success() {
          let obj = arg0(navigation[27]);
          obj.commitSectionChanges(id, effectiveSection);
          navigation.pop();
          arg0.setState({ submitting: false, formErrors: {} });
          obj = { key: "ROLE_EDIT_SAVED" };
          const intl = arg0(navigation[29]).intl;
          obj.content = intl.string(arg0(navigation[29]).t.ulZn1j);
          obj.icon = obj(navigation[30]);
          obj(navigation[28]).open(obj);
          arg0(true);
        }
        function failure(body) {
          let obj = { submitting: false };
          body = undefined;
          if (null != body) {
            body = body.body;
          }
          if (null == body) {
            body = {};
          }
          obj.formErrors = body;
          body.setState(obj);
          obj = { key: "ERROR_OCCURRED_TRY_AGAIN" };
          const intl = body(navigation[29]).intl;
          obj.content = intl.string(body(navigation[29]).t.fEptJP);
          obj.icon = obj(navigation[31]);
          obj(navigation[28]).open(obj);
          body(false);
        }
        self.setState({ submitting: true, formErrors: {} }, () => {
          if (null != obj) {
            const obj = obj(navigation[32]);
            let updateRoleResult = obj.updateRole(id, id, obj);
          } else {
            updateRoleResult = Promise.resolve();
          }
          updateRoleResult.then(() => {
            if (null != closure_2) {
              const result = callback(closure_3[33]).putRoleConnectionsConfigurations(closure_4, closure_5, closure_2);
              result.then(callback2, closure_8);
              const obj = callback(closure_3[33]);
            } else {
              callback2();
            }
          }, (arg0) => {
            callback3(arg0);
          });
        });
      });
      tmp2Result.handleDeleteRole = () => {
        let role;
        const props = tmp2Result.props;
        ({ guild: closure_1, role } = props);
        const navigation = props.navigation;
        let obj = callback(navigation[34]);
        obj = {};
        const intl = tmp2Result(navigation[29]).intl;
        obj = { name: role.name };
        obj.title = intl.formatToPlainString(tmp2Result(navigation[29]).t.FiMFTZ, obj);
        const intl2 = tmp2Result(navigation[29]).intl;
        obj.body = intl2.string(tmp2Result(navigation[29]).t.qALKny);
        const intl3 = tmp2Result(navigation[29]).intl;
        obj.cancelText = intl3.string(tmp2Result(navigation[29]).t.ETE/oC);
        const intl4 = tmp2Result(navigation[29]).intl;
        obj.confirmText = intl4.string(tmp2Result(navigation[29]).t.N86XcP);
        // CreateGeneratorClosureLongIndex (0x67)
        const tmp2Result = callback2(tmp);
        obj.onConfirm = function() {
          return callback(...arguments);
        };
        obj.hideActionSheet = false;
        obj.confirmColor = tmp2Result(navigation[35]).ButtonColors.RED;
        obj.show(obj);
      };
      tmp2Result.handleBack = () => {
        const props = tmp2Result.props;
        const navigation = props.navigation;
        if (props.section !== constants.DISPLAY) {
          tmp2Result.trackTabChanged(constants.DISPLAY);
        }
        if (tmp2Result.getSectionChanges()) {
          let resolved = new Promise((arg0) => {
            let obj = callback(closure_3[34]);
            obj = {};
            const intl = arg0(closure_3[29]).intl;
            obj.title = intl.string(arg0(closure_3[29]).t.P3yCXJ);
            const intl2 = arg0(closure_3[29]).intl;
            obj.body = intl2.string(arg0(closure_3[29]).t.BU8QoR);
            const intl3 = arg0(closure_3[29]).intl;
            obj.cancelText = intl3.string(arg0(closure_3[29]).t.lHKZ1/);
            const intl4 = arg0(closure_3[29]).intl;
            obj.confirmText = intl4.string(arg0(closure_3[29]).t.p89ACt);
            obj.onConfirm = function onConfirm() {
              arg0.handleSaveRole().then((arg0) => callback(arg0));
            };
            obj.onCancel = function onCancel(self) {
              const id = self.props.role.id;
              const effectiveSection = self.getEffectiveSection();
              if (effectiveSection === constants.VERIFICATIONS) {
                const result = self(closure_3[27]).discardConnectionsChanges(id);
                const obj2 = self(closure_3[27]);
              } else {
                const result1 = self(closure_3[27]).discardSectionChanges(id, effectiveSection);
                const obj = self(closure_3[27]);
              }
              self(true);
            };
            obj.hideActionSheet = false;
            obj.confirmColor = arg0(closure_3[35]).ButtonColors.BRAND;
            obj.show(obj);
          });
        } else {
          navigation.pop();
          resolved = Promise.resolve(false);
        }
        return resolved;
      };
      return tmp2Result;
    }
  }
  const arg1 = GuildSettingsRoleEdit;
  callback3(GuildSettingsRoleEdit, PureComponent);
  let obj = {
    key: "componentDidMount",
    value() {
      this.trackTabChanged(this.props.section);
      this.updateNavigation(undefined, this.state);
    }
  };
  const items = [obj, , , , , , , , ];
  obj = {
    key: "componentDidUpdate",
    value(arg0, arg1) {
      this.updateNavigation(arg0, arg1);
    }
  };
  items[1] = obj;
  obj = {
    key: "getEffectiveSection",
    value() {
      const props = this.props;
      let PERMISSIONS = props.section;
      if (callback4(props.role)) {
        PERMISSIONS = constants.PERMISSIONS;
      }
      return PERMISSIONS;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getSectionChanges",
    value() {
      return closure_20.hasSectionChanges(this.props.role.id, this.getEffectiveSection());
    }
  };
  items[4] = {
    key: "updateNavigation",
    value(role, submitting) {
      const self = this;
      const GuildSettingsRoleEdit = this;
      const props = this.props;
      role = props.role;
      const navigation = props.navigation;
      submitting = this.state.submitting;
      let setOptionsResult = {};
      const sectionChanges = self.getSectionChanges();
      setOptionsResult.headerLeft = GuildSettingsRoleEdit(closure_3[36]).getHeaderConditionalBackButton(self.handleBack);
      if (submitting) {
        let fn = () => callback(self(closure_3[36]).HeaderSubmittingIndicator, {});
      } else if (sectionChanges) {
        fn = () => {
          const obj = { onPress: self.handleSaveRole };
          const intl = self(closure_3[29]).intl;
          obj.text = intl.string(self(closure_3[29]).t.R3BPH+);
          return callback(self(closure_3[37]).HeaderActionButton, obj);
        };
      }
      setOptionsResult.headerRight = fn;
      setOptionsResult.headerTitle = function headerTitle() {
        const obj = { title: role.name };
        const intl = self(closure_3[29]).intl;
        obj.subtitle = intl.string(self(closure_3[29]).t.XPGZXP);
        return callback(self(closure_3[36]).NavigatorHeader, obj);
      };
      setOptionsResult = navigation.setOptions(setOptionsResult);
    }
  };
  items[5] = {
    key: "renderSubScreenButtons",
    value() {
      const GuildSettingsRoleEdit = this;
      let obj = { hasIcons: false };
      obj = {};
      const intl = GuildSettingsRoleEdit(closure_3[29]).intl;
      obj.label = intl.string(GuildSettingsRoleEdit(closure_3[29]).t.WIDE1L);
      obj.onPress = function onPress() {
        return self.onSubScreenValueChange(constants.PERMISSIONS);
      };
      obj.arrow = true;
      const items = [callback5(GuildSettingsRoleEdit(closure_3[39]).TableRow, obj), , ];
      obj = {};
      const intl2 = GuildSettingsRoleEdit(closure_3[29]).intl;
      obj.label = intl2.string(GuildSettingsRoleEdit(closure_3[29]).t.5//Muu);
      obj.onPress = function onPress() {
        return self.onSubScreenValueChange(constants.VERIFICATIONS);
      };
      obj.arrow = true;
      items[1] = callback5(GuildSettingsRoleEdit(closure_3[39]).TableRow, obj);
      const obj1 = {};
      const intl3 = GuildSettingsRoleEdit(closure_3[29]).intl;
      obj1.label = intl3.string(GuildSettingsRoleEdit(closure_3[29]).t.J4ZtH1);
      obj1.onPress = function onPress() {
        return self.onSubScreenValueChange(constants.MEMBERS);
      };
      obj1.arrow = true;
      items[2] = callback5(GuildSettingsRoleEdit(closure_3[39]).TableRow, obj1);
      obj.children = items;
      return callback6(GuildSettingsRoleEdit(closure_3[38]).TableRowGroup, obj);
    }
  };
  items[6] = {
    key: "renderDeleteButton",
    value() {
      let obj = { hasIcons: false };
      obj = { variant: "danger" };
      const intl = GuildSettingsRoleEdit(closure_3[29]).intl;
      obj.label = intl.string(GuildSettingsRoleEdit(closure_3[29]).t.c9ej8n);
      obj.onPress = this.handleDeleteRole;
      obj.children = callback5(GuildSettingsRoleEdit(closure_3[39]).TableRow, obj);
      return callback5(GuildSettingsRoleEdit(closure_3[38]).TableRowGroup, obj);
    }
  };
  items[7] = {
    key: "renderManagedRoleWarningText",
    value() {
      let obj = { style: callback7(this.context).managedRolesWarningContainer };
      obj = { messageType: GuildSettingsRoleEdit(closure_3[35]).HelpMessageTypes.WARNING };
      const intl = GuildSettingsRoleEdit(closure_3[29]).intl;
      obj.children = intl.string(GuildSettingsRoleEdit(closure_3[29]).t.k5d7DJ);
      obj.children = callback5(GuildSettingsRoleEdit(closure_3[35]).HelpMessage, obj);
      return callback5(closure_13, obj);
    }
  };
  items[8] = {
    key: "render",
    value() {
      let guild;
      let hoist;
      let integrations;
      let locked;
      let mentionable;
      let name;
      let newRole;
      let permissions;
      let role;
      const self = this;
      const tmp = callback7(this.context);
      const props = this.props;
      ({ guild, role, locked } = props);
      ({ newRole, integrations } = props);
      ({ name, permissions, mentionable, hoist } = role);
      const tmp2 = callback4(role);
      const tags = role.tags;
      let guild_connections;
      if (null != tags) {
        guild_connections = tags.guild_connections;
      }
      let tmp5 = tmp2;
      if (!tmp2) {
        tmp5 = locked;
      }
      let tmp6 = !tmp5;
      if (tmp6) {
        tmp6 = !role.managed || tmp4;
        const tmp7 = !role.managed || tmp4;
      }
      const effectiveSection = self.getEffectiveSection();
      if (constants.DISPLAY === effectiveSection) {
        let obj = { guild, role, name, formErrors: this.state.formErrors, mentionable, hoist };
        ({ handleNameChanged: obj3.onNameChanged, handleMentionableChanged: obj3.onMentionableChanged, handleHoistChanged: obj3.onHoistChanged } = self);
        obj.locked = locked;
        obj.autoFocusInput = newRole;
        let tmp11Result = callback5(callback(closure_3[40]), obj);
      } else if (constants.PERMISSIONS === effectiveSection) {
        obj = { guild, role, permissions, onPermissionsChanged: self.handlePermissionsChanged, contentContainerStyle: self.props.contentContainerStyle };
        tmp11Result = callback5(callback(closure_3[41]), obj);
      } else if (constants.MEMBERS === effectiveSection) {
        obj = { guild, role };
        let tmp15 = locked;
        if (!locked) {
          tmp15 = tmp4;
        }
        obj.locked = tmp15;
        obj.contentContainerStyle = self.props.contentContainerStyle;
        tmp11Result = callback5(callback(closure_3[42]), obj);
        const tmp11 = callback5;
        const tmp14 = callback(closure_3[42]);
      } else if (constants.VERIFICATIONS === effectiveSection) {
        const obj1 = { guild, role, locked, integrations };
        tmp11Result = callback5(callback(closure_3[43]), obj1);
      }
      const obj2 = { style: tmp.container };
      if (tmp2) {
        const obj3 = { spacing: callback(tmp26[21]).space.PX_24 };
        const obj4 = { flex: 1, paddingHorizontal: callback(tmp26[21]).space.PX_16 };
        obj3.style = obj4;
        obj3.children = tmp11Result;
        let tmp24Result = tmp24(tmp25(tmp26[44]).Stack, obj3);
      } else {
        const obj5 = { contentContainerStyle: tmp.form };
        const obj6 = { spacing: callback(tmp26[21]).space.PX_24 };
        let result = null;
        if (effectiveSection === constants.DISPLAY) {
          result = null;
          if (role.managed) {
            result = self.renderManagedRoleWarningText();
          }
        }
        const items = [result, tmp11Result, , ];
        let result1 = null;
        if (effectiveSection === constants.DISPLAY) {
          result1 = self.renderSubScreenButtons();
        }
        items[2] = result1;
        let renderDeleteButtonResult = null;
        if (effectiveSection === constants.DISPLAY) {
          renderDeleteButtonResult = null;
          if (tmp6) {
            renderDeleteButtonResult = self.renderDeleteButton();
          }
        }
        items[3] = renderDeleteButtonResult;
        obj6.children = items;
        obj5.children = closure_28(tmp25(tmp26[44]).Stack, obj6);
        tmp24Result = tmp24(tmp25(tmp26[45]).Form, obj5);
        const tmp27 = closure_28;
      }
      obj2.children = tmp24Result;
      return callback5(closure_13, obj2);
    }
  };
  return callback2(GuildSettingsRoleEdit, items);
}(importAllResult.PureComponent);
tmp5.contextType = arg1(dependencyMap[46]).ThemeContext;
const obj1 = { paddingHorizontal: importDefault(dependencyMap[21]).modules.mobile.TABLE_ROW_PADDING };
const result = arg1(dependencyMap[51]).fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleEdit.tsx");

export default function ConnectedGuildSettingsRoleEdit(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const role = guildId.role;
  const importDefault = role;
  let flag = guildId.newRole;
  if (flag === undefined) {
    flag = false;
  }
  const importAll = flag;
  const section = guildId.section;
  const dependencyMap = section;
  let obj = arg1(dependencyMap[47]);
  const navigation = obj.useNavigation();
  const items = [closure_18, closure_17, closure_15, closure_19, closure_20];
  const stateFromStoresObject = arg1(dependencyMap[48]).useStateFromStoresObject(items, () => {
    const guild = guild.getGuild(guildId);
    let role = role.getRole(guildId, role.id);
    const role1 = role2.getRole(role.id);
    const id = id.getId();
    if (null != guild) {
      let obj = flag(section[49]);
      const highestRole = obj.getHighestRole(guild, id);
    }
    let tmp8 = null != guild;
    if (tmp8) {
      const obj2 = flag(section[49]);
      tmp8 = !obj2.isRoleHigher(guild, id, highestRole, role);
    }
    const integrations = props.getProps().integrations;
    obj = { guild };
    if (null != role1) {
      role = role1;
    }
    obj.role = role;
    obj.newRole = flag;
    obj.locked = tmp8;
    let tmp16;
    if (null != integrations) {
      tmp16 = integrations;
    }
    obj.integrations = tmp16;
    obj.section = section;
    const editedRoleIdsForConfigurations = role2.editedRoleIdsForConfigurations;
    obj.storeHasChanges = editedRoleIdsForConfigurations.has(role.id);
    return obj;
  });
  const guild = stateFromStoresObject.guild;
  const tmp3 = callback(stateFromStoresObject, closure_4);
  const items1 = [section];
  const effect = importAllResult.useEffect(() => {
    if (section === constants.DISPLAY) {
      guildId(section[27]).init();
      const obj = guildId(section[27]);
    }
  }, items1);
  const items2 = [guildId, ];
  let id;
  if (null != role) {
    id = role.id;
  }
  items2[1] = id;
  const effect1 = importAllResult.useEffect(() => {
    let id;
    if (null != role) {
      id = role.id;
    }
    if (null != id) {
      const roleConnectionsConfiguration = guildId(section[33]).fetchRoleConnectionsConfiguration(guildId, role.id);
      const obj = guildId(section[33]);
    }
  }, items2);
  let tmp8 = null;
  if (null != guild) {
    obj = {};
    obj = {};
    const merged = Object.assign(tmp3);
    obj["guild"] = guild;
    obj["navigation"] = navigation;
    obj["contentContainerStyle"] = guildId.contentContainerStyle;
    const items3 = [callback4(tmp5, obj), callback4(arg1(dependencyMap[50]).NavScrim, {})];
    obj.children = items3;
    tmp8 = callback5(closure_29, obj);
  }
  return tmp8;
};
