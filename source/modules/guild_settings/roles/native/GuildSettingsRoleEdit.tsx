// Module ID: 16318
// Function ID: 127284
// Name: _isNativeReflectConstruct
// Dependencies: [29, 5, 6, 7, 15, 17, 18, 31, 27, 1911, 1194, 1917, 1910, 1838, 8439, 16305, 16300, 653, 16307, 33, 4130, 689, 4324, 16309, 22, 675, 8413, 16319, 3831, 1212, 10332, 9176, 5048, 9999, 4470, 1273, 5087, 5788, 5503, 5165, 16320, 16328, 16330, 16331, 4541, 7495, 3842, 1456, 566, 3763, 5448, 2]
// Exports: default

// Module 16318 (_isNativeReflectConstruct)
import getSystemLocale from "getSystemLocale";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_10 from "ME";
import HOLOGRAPHIC_ROLE_COLORS from "HOLOGRAPHIC_ROLE_COLORS";
import importAllResult from "registerAsset";
import { View } from "_createForOfIteratorHelperLoose";
import { isEveryoneRole } from "GuildRoleRecordTypeTag";
import closure_15 from "_isNativeReflectConstruct";
import closure_16 from "_isNativeReflectConstruct";
import closure_17 from "_createForOfIteratorHelperLoose";
import closure_18 from "_createForOfIteratorHelperLoose";
import closure_19 from "_isNativeReflectConstruct";
import closure_20 from "_isNativeReflectConstruct";
import { RoleColorsStyle } from "_isNativeReflectConstruct";
import { GuildSettingsRoleEditSections as closure_22 } from "MAX_SUBCATEGORIES";
import ME from "ME";
import { HOLOGRAPHIC_ROLE_COLORS } from "HOLOGRAPHIC_ROLE_COLORS";
import jsxProd from "_putRoleConnectionsConfigurations";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_23;
let closure_24;
let closure_25;
let closure_27;
let closure_28;
let closure_29;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_4 = ["guild"];
({ AnalyticEvents: closure_23, DEFAULT_ROLE_COLOR: closure_24, GuildSettingsSections: closure_25 } = ME);
({ jsx: closure_27, jsxs: closure_28, Fragment: closure_29 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { flex: 1, paddingTop: 16 } };
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.innerContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.managedRolesWarningContainer = { marginVertical: 8, marginHorizontal: 16 };
_createForOfIteratorHelperLoose.form = { paddingHorizontal: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_PADDING };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createLegacyClassComponentStyles(_createForOfIteratorHelperLoose);
let tmp5 = ((PureComponent) => {
  class GuildSettingsRoleEdit {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = outer1_7(this, apply);
      items1 = [...items];
      obj = outer1_10(apply);
      tmp2 = outer1_9;
      if (outer1_32()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_10;
        constructResult = Reflect.construct(obj, items1, outer1_10(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      tmp2Result.state = { submitting: false, formErrors: {} };
      tmp2Result.onSubScreenValueChange = (arg0) => {
        const navigation = tmp2Result.props.navigation;
        const obj = {};
        const merged = Object.assign(tmp2Result.props);
        obj["section"] = arg0;
        navigation.push(outer2_25.ROLE_EDIT_REFRESH, obj);
      };
      tmp2Result.trackTabChanged = (arg0) => {
        let hoist;
        let mentionable;
        let obj = GuildSettingsRoleEdit(outer2_3[22]);
        const result = obj.collectGuildAnalyticsMetadata(id.props.guild.id);
        const role = id.props.role;
        id = role.id;
        ({ mentionable, hoist } = role);
        const sectionAnalyticsName = GuildSettingsRoleEdit(outer2_3[23]).getSectionAnalyticsName(arg0);
        const members = outer2_16.getMembers(id.props.guild.id);
        const obj2 = GuildSettingsRoleEdit(outer2_3[23]);
        const str = role.permissions;
        const found = outer2_1(outer2_3[24])(members).filter((roles) => {
          roles = roles.roles;
          return roles.includes(id);
        });
        const arr = outer2_1(outer2_3[24])(members);
        const sizeResult = found.size();
        obj = { tab_opened: sectionAnalyticsName };
        const obj4 = outer2_1(outer2_3[25]);
        obj.is_everyone = GuildSettingsRoleEdit(outer2_3[26]).isEveryoneRoleId(id.props.guild.id, id);
        obj.role_id = id;
        obj.role_mentionable = mentionable;
        obj.role_hoist = hoist;
        obj.role_permissions = str.toString();
        obj.role_num_members = sizeResult;
        const merged = Object.assign(result);
        obj4.track(outer2_23.ROLE_PAGE_VIEWED, obj);
      };
      tmp2Result.handleNameChanged = (name) => {
        const merged = Object.assign(tmp2Result.state.formErrors);
        delete tmp.name;
        tmp2Result.setState({ formErrors: {} });
        GuildSettingsRoleEdit(outer2_3[27]).updateRoleName(tmp2Result.props.role.id, name);
      };
      tmp2Result.handleMentionableChanged = (mentionable) => {
        GuildSettingsRoleEdit(outer2_3[27]).toggleRoleSettings(tmp2Result.props.role.id, tmp2Result.props.role.hoist, mentionable);
      };
      tmp2Result.handleHoistChanged = (hoist) => {
        GuildSettingsRoleEdit(outer2_3[27]).toggleRoleSettings(tmp2Result.props.role.id, hoist, tmp2Result.props.role.mentionable);
      };
      tmp2Result.handlePermissionsChanged = (permissions) => {
        const result = GuildSettingsRoleEdit(outer2_3[27]).updateRolePermissionSet(tmp2Result.props.role.id, permissions);
      };
      tmp2Result.handleSaveRole = () => new Promise((arg0) => {
        let hoist;
        let mentionable;
        let name;
        let permissions;
        let closure_0 = arg0;
        const navigation = outer1_0.props.navigation;
        let id = outer1_0.props.guild.id;
        id = outer1_0.props.role.id;
        ({ name, permissions, mentionable, hoist } = outer1_0.props.role);
        const effectiveSection = outer1_0.getEffectiveSection();
        if (effectiveSection === outer3_22.PERMISSIONS) {
          let obj = { permissions };
        } else if (effectiveSection === outer3_22.DISPLAY) {
          const roleStyleData = outer3_20.getRoleStyleData(id);
          let currentStyle;
          if (null != roleStyleData) {
            currentStyle = roleStyleData.currentStyle;
          }
          if (null == currentStyle) {
            currentStyle = outer3_21.SOLID;
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
            primary_color = outer3_24;
          }
          let tmp6;
          if (null != roleStyleData) {
            const styleColors2 = roleStyleData.styleColors;
            if (null != styleColors2) {
              tmp6 = styleColors2[currentStyle];
            }
          }
          if (currentStyle === outer3_21.SOLID) {
            obj = { primary_color, secondary_color: null, tertiary_color: null };
            let primary_color1 = primary_color;
            tmp6 = obj;
          } else if (currentStyle === outer3_21.HOLOGRAPHIC) {
            primary_color1 = outer3_26.primary_color;
            tmp6 = outer3_26;
          } else {
            primary_color1 = undefined;
            if (null != tmp6) {
              primary_color1 = tmp6.primary_color;
            }
            if (null == primary_color1) {
              primary_color1 = outer3_24;
            }
          }
          obj = { name, color: primary_color1, colors: tmp6, hoist, mentionable };
        }
        let hasRoleConfigurationChanges = effectiveSection === outer3_22.VERIFICATIONS;
        if (hasRoleConfigurationChanges) {
          hasRoleConfigurationChanges = outer3_20.hasRoleConfigurationChanges;
        }
        if (hasRoleConfigurationChanges) {
          const editedRoleIdsForConfigurations = outer3_20.editedRoleIdsForConfigurations;
          hasRoleConfigurationChanges = editedRoleIdsForConfigurations.has(id);
        }
        if (hasRoleConfigurationChanges) {
          const editedRoleConnectionConfigurationsMap = outer3_20.getEditedRoleConnectionConfigurationsMap();
          let closure_2 = editedRoleConnectionConfigurationsMap.get(id);
        }
        function success() {
          let obj = GuildSettingsRoleEdit(outer4_3[27]);
          obj.commitSectionChanges(id, effectiveSection);
          navigation.pop();
          outer2_0.setState({ submitting: false, formErrors: {} });
          obj = { key: "ROLE_EDIT_SAVED" };
          const intl = GuildSettingsRoleEdit(outer4_3[29]).intl;
          obj.content = intl.string(GuildSettingsRoleEdit(outer4_3[29]).t.ulZn1j);
          obj.icon = outer4_1(outer4_3[30]);
          outer4_1(outer4_3[28]).open(obj);
          callback(true);
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
          outer2_0.setState(obj);
          obj = { key: "ERROR_OCCURRED_TRY_AGAIN" };
          const intl = GuildSettingsRoleEdit(outer4_3[29]).intl;
          obj.content = intl.string(GuildSettingsRoleEdit(outer4_3[29]).t.fEptJP);
          obj.icon = outer4_1(outer4_3[31]);
          outer4_1(outer4_3[28]).open(obj);
          callback(false);
        }
        outer1_0.setState({ submitting: true, formErrors: {} }, () => {
          if (null != obj) {
            obj = outer4_1(outer4_3[32]);
            let updateRoleResult = obj.updateRole(id, id, obj);
          } else {
            updateRoleResult = Promise.resolve();
          }
          updateRoleResult.then(() => {
            if (null != outer1_2) {
              const result = GuildSettingsRoleEdit(outer5_3[33]).putRoleConnectionsConfigurations(outer1_4, outer1_5, outer1_2);
              result.then(outer1_7, outer1_8);
              const obj = GuildSettingsRoleEdit(outer5_3[33]);
            } else {
              outer1_7();
            }
          }, (arg0) => {
            outer1_8(arg0);
          });
        });
      });
      tmp2Result.handleDeleteRole = () => {
        let closure_1;
        let role;
        const props = tmp2Result.props;
        ({ guild: closure_1, role } = props);
        const navigation = props.navigation;
        let obj = outer2_1(outer2_3[34]);
        obj = {};
        const intl = GuildSettingsRoleEdit(outer2_3[29]).intl;
        obj = { name: role.name };
        obj.title = intl.formatToPlainString(GuildSettingsRoleEdit(outer2_3[29]).t.FiMFTZ, obj);
        const intl2 = GuildSettingsRoleEdit(outer2_3[29]).intl;
        obj.body = intl2.string(GuildSettingsRoleEdit(outer2_3[29]).t.qALKny);
        const intl3 = GuildSettingsRoleEdit(outer2_3[29]).intl;
        obj.cancelText = intl3.string(GuildSettingsRoleEdit(outer2_3[29]).t["ETE/oC"]);
        const intl4 = GuildSettingsRoleEdit(outer2_3[29]).intl;
        obj.confirmText = intl4.string(GuildSettingsRoleEdit(outer2_3[29]).t.N86XcP);
        // CreateGeneratorClosureLongIndex (0x67)
        obj.onConfirm = function() {
          return callback(...arguments);
        };
        obj.hideActionSheet = false;
        obj.confirmColor = GuildSettingsRoleEdit(outer2_3[35]).ButtonColors.RED;
        obj.show(obj);
      };
      tmp2Result.handleBack = () => {
        const props = tmp2Result.props;
        const navigation = props.navigation;
        if (props.section !== outer2_22.DISPLAY) {
          tmp2Result.trackTabChanged(outer2_22.DISPLAY);
        }
        if (tmp2Result.getSectionChanges()) {
          let resolved = new Promise((arg0) => {
            let closure_0 = arg0;
            let obj = outer3_1(outer3_3[34]);
            obj = {};
            const intl = GuildSettingsRoleEdit(outer3_3[29]).intl;
            obj.title = intl.string(GuildSettingsRoleEdit(outer3_3[29]).t.P3yCXJ);
            const intl2 = GuildSettingsRoleEdit(outer3_3[29]).intl;
            obj.body = intl2.string(GuildSettingsRoleEdit(outer3_3[29]).t.BU8QoR);
            const intl3 = GuildSettingsRoleEdit(outer3_3[29]).intl;
            obj.cancelText = intl3.string(GuildSettingsRoleEdit(outer3_3[29]).t["lHKZ1/"]);
            const intl4 = GuildSettingsRoleEdit(outer3_3[29]).intl;
            obj.confirmText = intl4.string(GuildSettingsRoleEdit(outer3_3[29]).t.p89ACt);
            obj.onConfirm = function onConfirm() {
              outer2_0.handleSaveRole().then((arg0) => outer1_0(arg0));
            };
            obj.onCancel = function onCancel() {
              const id = outer2_0.props.role.id;
              const effectiveSection = outer2_0.getEffectiveSection();
              if (effectiveSection === outer4_22.VERIFICATIONS) {
                const result = GuildSettingsRoleEdit(outer4_3[27]).discardConnectionsChanges(id);
                const obj2 = GuildSettingsRoleEdit(outer4_3[27]);
              } else {
                const result1 = GuildSettingsRoleEdit(outer4_3[27]).discardSectionChanges(id, effectiveSection);
                const obj = GuildSettingsRoleEdit(outer4_3[27]);
              }
              callback(true);
            };
            obj.hideActionSheet = false;
            obj.confirmColor = GuildSettingsRoleEdit(outer3_3[35]).ButtonColors.BRAND;
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
  callback3(GuildSettingsRoleEdit, PureComponent);
  let obj = {
    key: "componentDidMount",
    value() {
      this.trackTabChanged(this.props.section);
      this.updateNavigation(undefined, this.state);
    }
  };
  let items = [obj, , , , , , , , ];
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
      if (outer1_14(props.role)) {
        PERMISSIONS = outer1_22.PERMISSIONS;
      }
      return PERMISSIONS;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getSectionChanges",
    value() {
      return outer1_20.hasSectionChanges(this.props.role.id, this.getEffectiveSection());
    }
  };
  items[4] = {
    key: "updateNavigation",
    value(role, submitting) {
      let self = this;
      self = this;
      const props = this.props;
      role = props.role;
      const navigation = props.navigation;
      submitting = this.state.submitting;
      let setOptionsResult = {};
      const sectionChanges = self.getSectionChanges();
      setOptionsResult.headerLeft = GuildSettingsRoleEdit(outer1_3[36]).getHeaderConditionalBackButton(self.handleBack);
      if (submitting) {
        let fn = () => outer2_27(GuildSettingsRoleEdit(outer2_3[36]).HeaderSubmittingIndicator, {});
      } else if (sectionChanges) {
        fn = () => {
          const obj = { onPress: self.handleSaveRole };
          const intl = GuildSettingsRoleEdit(outer2_3[29]).intl;
          obj.text = intl.string(GuildSettingsRoleEdit(outer2_3[29]).t["R3BPH+"]);
          return outer2_27(GuildSettingsRoleEdit(outer2_3[37]).HeaderActionButton, obj);
        };
      }
      setOptionsResult.headerRight = fn;
      setOptionsResult.headerTitle = function headerTitle() {
        const obj = { title: role.name };
        const intl = GuildSettingsRoleEdit(outer2_3[29]).intl;
        obj.subtitle = intl.string(GuildSettingsRoleEdit(outer2_3[29]).t.XPGZXP);
        return outer2_27(GuildSettingsRoleEdit(outer2_3[36]).NavigatorHeader, obj);
      };
      setOptionsResult = navigation.setOptions(setOptionsResult);
    }
  };
  items[5] = {
    key: "renderSubScreenButtons",
    value() {
      const self = this;
      let obj = { hasIcons: false };
      obj = {};
      const intl = GuildSettingsRoleEdit(outer1_3[29]).intl;
      obj.label = intl.string(GuildSettingsRoleEdit(outer1_3[29]).t.WIDE1L);
      obj.onPress = function onPress() {
        return self.onSubScreenValueChange(outer2_22.PERMISSIONS);
      };
      obj.arrow = true;
      const items = [outer1_27(GuildSettingsRoleEdit(outer1_3[39]).TableRow, obj), , ];
      obj = {};
      const intl2 = GuildSettingsRoleEdit(outer1_3[29]).intl;
      obj.label = intl2.string(GuildSettingsRoleEdit(outer1_3[29]).t["5//Muu"]);
      obj.onPress = function onPress() {
        return self.onSubScreenValueChange(outer2_22.VERIFICATIONS);
      };
      obj.arrow = true;
      items[1] = outer1_27(GuildSettingsRoleEdit(outer1_3[39]).TableRow, obj);
      const obj1 = {};
      const intl3 = GuildSettingsRoleEdit(outer1_3[29]).intl;
      obj1.label = intl3.string(GuildSettingsRoleEdit(outer1_3[29]).t.J4ZtH1);
      obj1.onPress = function onPress() {
        return self.onSubScreenValueChange(outer2_22.MEMBERS);
      };
      obj1.arrow = true;
      items[2] = outer1_27(GuildSettingsRoleEdit(outer1_3[39]).TableRow, obj1);
      obj.children = items;
      return outer1_28(GuildSettingsRoleEdit(outer1_3[38]).TableRowGroup, obj);
    }
  };
  items[6] = {
    key: "renderDeleteButton",
    value() {
      let obj = { hasIcons: false };
      obj = { variant: "danger" };
      const intl = GuildSettingsRoleEdit(outer1_3[29]).intl;
      obj.label = intl.string(GuildSettingsRoleEdit(outer1_3[29]).t.c9ej8n);
      obj.onPress = this.handleDeleteRole;
      obj.children = outer1_27(GuildSettingsRoleEdit(outer1_3[39]).TableRow, obj);
      return outer1_27(GuildSettingsRoleEdit(outer1_3[38]).TableRowGroup, obj);
    }
  };
  items[7] = {
    key: "renderManagedRoleWarningText",
    value() {
      let obj = { style: outer1_30(this.context).managedRolesWarningContainer };
      obj = { messageType: GuildSettingsRoleEdit(outer1_3[35]).HelpMessageTypes.WARNING };
      const intl = GuildSettingsRoleEdit(outer1_3[29]).intl;
      obj.children = intl.string(GuildSettingsRoleEdit(outer1_3[29]).t.k5d7DJ);
      obj.children = outer1_27(GuildSettingsRoleEdit(outer1_3[35]).HelpMessage, obj);
      return outer1_27(outer1_13, obj);
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
      const tmp = outer1_30(this.context);
      const props = this.props;
      ({ guild, role, locked } = props);
      ({ newRole, integrations } = props);
      ({ name, permissions, mentionable, hoist } = role);
      const tmp2 = outer1_14(role);
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
      if (outer1_22.DISPLAY === effectiveSection) {
        let obj = { guild, role, name, formErrors: this.state.formErrors, mentionable, hoist };
        ({ handleNameChanged: obj3.onNameChanged, handleMentionableChanged: obj3.onMentionableChanged, handleHoistChanged: obj3.onHoistChanged } = self);
        obj.locked = locked;
        obj.autoFocusInput = newRole;
        let tmp11Result = outer1_27(outer1_1(outer1_3[40]), obj);
      } else if (outer1_22.PERMISSIONS === effectiveSection) {
        obj = { guild, role, permissions, onPermissionsChanged: self.handlePermissionsChanged, contentContainerStyle: self.props.contentContainerStyle };
        tmp11Result = outer1_27(outer1_1(outer1_3[41]), obj);
      } else if (outer1_22.MEMBERS === effectiveSection) {
        obj = { guild, role };
        let tmp15 = locked;
        if (!locked) {
          tmp15 = tmp4;
        }
        obj.locked = tmp15;
        obj.contentContainerStyle = self.props.contentContainerStyle;
        tmp11Result = outer1_27(outer1_1(outer1_3[42]), obj);
        const tmp11 = outer1_27;
        const tmp14 = outer1_1(outer1_3[42]);
      } else if (outer1_22.VERIFICATIONS === effectiveSection) {
        const obj1 = { guild, role, locked, integrations };
        tmp11Result = outer1_27(outer1_1(outer1_3[43]), obj1);
      }
      const obj2 = { style: tmp.container };
      if (tmp2) {
        const obj3 = { spacing: outer1_1(tmp26[21]).space.PX_24 };
        const obj4 = { flex: 1, paddingHorizontal: outer1_1(tmp26[21]).space.PX_16 };
        obj3.style = obj4;
        obj3.children = tmp11Result;
        let tmp24Result = tmp24(tmp25(tmp26[44]).Stack, obj3);
      } else {
        const obj5 = { contentContainerStyle: tmp.form };
        const obj6 = { spacing: outer1_1(tmp26[21]).space.PX_24 };
        let result = null;
        if (effectiveSection === outer1_22.DISPLAY) {
          result = null;
          if (role.managed) {
            result = self.renderManagedRoleWarningText();
          }
        }
        const items = [result, tmp11Result, , ];
        let result1 = null;
        if (effectiveSection === outer1_22.DISPLAY) {
          result1 = self.renderSubScreenButtons();
        }
        items[2] = result1;
        let renderDeleteButtonResult = null;
        if (effectiveSection === outer1_22.DISPLAY) {
          renderDeleteButtonResult = null;
          if (tmp6) {
            renderDeleteButtonResult = self.renderDeleteButton();
          }
        }
        items[3] = renderDeleteButtonResult;
        obj6.children = items;
        obj5.children = outer1_28(tmp25(tmp26[44]).Stack, obj6);
        tmp24Result = tmp24(tmp25(tmp26[45]).Form, obj5);
        const tmp27 = outer1_28;
      }
      obj2.children = tmp24Result;
      return outer1_27(outer1_13, obj2);
    }
  };
  return callback2(GuildSettingsRoleEdit, items);
})(importAllResult.PureComponent);
let closure_31 = tmp5;
tmp5.contextType = require("ManaContext").ThemeContext;
let obj1 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_PADDING };
let result = require("_classCallCheck").fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleEdit.tsx");

export default function ConnectedGuildSettingsRoleEdit(guildId) {
  guildId = guildId.guildId;
  let role = guildId.role;
  let flag = guildId.newRole;
  if (flag === undefined) {
    flag = false;
  }
  const section = guildId.section;
  let obj = guildId(section[47]);
  const navigation = obj.useNavigation();
  const items = [closure_18, closure_17, closure_15, closure_19, closure_20];
  const stateFromStoresObject = guildId(section[48]).useStateFromStoresObject(items, () => {
    const guild = outer1_18.getGuild(guildId);
    role = outer1_17.getRole(guildId, role.id);
    const role1 = outer1_20.getRole(role.id);
    const id = outer1_15.getId();
    if (null != guild) {
      let obj = flag(section[49]);
      const highestRole = obj.getHighestRole(guild, id);
    }
    let tmp8 = null != guild;
    if (tmp8) {
      const obj2 = flag(section[49]);
      tmp8 = !obj2.isRoleHigher(guild, id, highestRole, role);
    }
    const integrations = outer1_19.getProps().integrations;
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
    const editedRoleIdsForConfigurations = outer1_20.editedRoleIdsForConfigurations;
    obj.storeHasChanges = editedRoleIdsForConfigurations.has(role.id);
    return obj;
  });
  let guild = stateFromStoresObject.guild;
  const tmp3 = callback(stateFromStoresObject, closure_4);
  const items1 = [section];
  const effect = importAllResult.useEffect(() => {
    if (section === outer1_22.DISPLAY) {
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
    const items3 = [callback4(closure_31, obj), callback4(guildId(section[50]).NavScrim, {})];
    obj.children = items3;
    tmp8 = callback5(closure_29, obj);
  }
  return tmp8;
};
