// Module ID: 17423
// Function ID: 17424
// Name: GuildSettingsRoleEdit
// Dependencies: [109, 5, 19, 17, 2103, 502, 2108, 2102, 2067, 9049, 17410, 17405, 1074, 17412, 21, 4836, 576, 4540, 5936, 6795, 1115, 5016, 17414, 12, 1241, 9016, 17424, 4528, 8810, 5909, 5832, 11068, 5203, 1177, 5999, 5917, 17425, 17434, 17436, 17437, 5279, 8053, 1485, 504, 4474, 6461, 2]
// Exports: default

// Module 17423 (GuildSettingsRoleEdit)
import _modDef12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl5 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import GuildRoleRecord from "GuildRoleRecord" /* 2103 */;
import PermissionUtilsAll from "PermissionUtils" /* 4474 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import native2 from "native" /* 4540 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5016 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5203 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5832 */;
import AssetRegistryDefault from "AssetRegistry" /* 5909 */;
import TableRow4 from "TableRow" /* 5917 */;
import NavigatorHeader2 from "NavigatorHeader" /* 5936 */;
import TableRowGroup2 from "TableRowGroup" /* 5999 */;
import HeaderActionButton2 from "HeaderActionButton" /* 6795 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 8810 */;
import ChannelPermissionsUtils from "ChannelPermissionsUtils" /* 9016 */;
import ConnectionsRoleActionCreators from "ConnectionsRoleActionCreators" /* 11068 */;
import GuildSettingsConstants from "GuildSettingsConstants" /* 17405 */;
import GuildSettingsRolesStore2 from "GuildSettingsRolesStore" /* 17410 */;
import EnhancedRoleColorConstants from "EnhancedRoleColorConstants" /* 17412 */;
import GuildSettingsRolesUtils from "GuildSettingsRolesUtils" /* 17414 */;
import GuildSettingsRolesActionCreators from "GuildSettingsRolesActionCreators" /* 17424 */;
import GuildSettingsRoleEditDisplayDefault from "GuildSettingsRoleEditDisplay" /* 17425 */;
import GuildSettingsRoleEditPermissionsDefault from "GuildSettingsRoleEditPermissions" /* 17434 */;
import GuildSettingsRoleMembersDefault from "GuildSettingsRoleMembers" /* 17436 */;
import GuildSettingsRoleEditConnectionsControlsDefault from "GuildSettingsRoleEditConnectionsControls" /* 17437 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import GuildRoleStore from "GuildRoleStore" /* 2102 */;
import GuildStore from "GuildStore" /* 2067 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9049 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const GuildSettingsRolesStore = GuildSettingsRolesStore2;
let c2, integrations, navigation, primary_color, roles;

let closure_18;
let closure_19;
let closure_20;
let closure_22;
let closure_23;
let closure_24;
let obj2;
let obj3;
let closure_4 = ["guild"];
const View = react_native.View;
const isEveryoneRole = GuildRoleRecord.isEveryoneRole;
const RoleColorsStyle = GuildSettingsRolesStore2.RoleColorsStyle;
const constants = GuildSettingsConstants.GuildSettingsRoleEditSections;
({ AnalyticEvents: closure_18, DEFAULT_ROLE_COLOR: closure_19, GuildSettingsSections: closure_20 } = Constants);
const HOLOGRAPHIC_ROLE_COLORS = EnhancedRoleColorConstants.HOLOGRAPHIC_ROLE_COLORS;
({ jsx: closure_22, jsxs: closure_23, Fragment: closure_24 } = Fragment);
let obj = { container: { flex: 1, paddingTop: 16 }, innerContainer: obj2, managedRolesWarningContainer: { marginVertical: 8, marginHorizontal: 16 }, form: obj3 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
obj3 = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
let closure_25 = createLegacyClassComponentStyles(obj);
const PureComponent = react.PureComponent;
class GuildSettingsRoleEdit extends PureComponent {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.state = { submitting: false, formErrors: {} };
    applyArgumentsResult.onSubScreenValueChange = function onSubScreenValueChange(MEMBERS) {
      navigation = require.props.navigation;
      const push = navigation.push;
      const ROLE_EDIT_REFRESH = constants2.ROLE_EDIT_REFRESH;
      const obj = { section: MEMBERS };
      const merged = Object.assign(require.props);
      push(ROLE_EDIT_REFRESH, obj);
    };
    applyArgumentsResult.trackTabChanged = function trackTabChanged(DISPLAY) {
      let hoist;
      let mentionable;
      let obj5;
      let permissions;
      const obj = AppAnalyticsUtils;
      const result = obj.collectGuildAnalyticsMetadata(require.props.guild.id);
      const role = require.props.role;
      const id = role.id;
      ({ permissions, mentionable, hoist } = role);
      const obj2 = GuildSettingsRolesUtils;
      const sectionAnalyticsName = obj2.getSectionAnalyticsName(DISPLAY);
      const members = GuildMemberStore.getMembers(require.props.guild.id);
      const arr = _modDef12(members);
      const found = arr.filter((roles) => {
        roles = roles.roles;
        return roles.includes(id);
      });
      const sizeResult = found.size();
      const obj3 = { tab_opened: sectionAnalyticsName, is_everyone: obj5.isEveryoneRoleId(require.props.guild.id, id), role_id: id, role_mentionable: mentionable, role_hoist: hoist, role_permissions: permissions.toString(), role_num_members: sizeResult };
      const track = AnalyticsUtilsDefault.track;
      const ROLE_PAGE_VIEWED = constants.ROLE_PAGE_VIEWED;
      AnalyticsUtilsDefault;
      obj5 = ChannelPermissionsUtils;
      const merged = Object.assign(result);
      track(ROLE_PAGE_VIEWED, obj3);
    };
    applyArgumentsResult.handleNameChanged = function handleNameChanged(name) {
      const obj = {};
      const merged = Object.assign(require.state.formErrors);
      delete obj["name"];
      require.setState({ formErrors: obj });
      const obj2 = GuildSettingsRolesActionCreators;
      obj2.updateRoleName(require.props.role.id, name);
    };
    applyArgumentsResult.handleMentionableChanged = function handleMentionableChanged(mentionable) {
      const obj = GuildSettingsRolesActionCreators;
      obj.toggleRoleSettings(require.props.role.id, require.props.role.hoist, mentionable);
    };
    applyArgumentsResult.handleHoistChanged = function handleHoistChanged(hoist) {
      const obj = GuildSettingsRolesActionCreators;
      obj.toggleRoleSettings(require.props.role.id, hoist, require.props.role.mentionable);
    };
    applyArgumentsResult.handlePermissionsChanged = function handlePermissionsChanged(permissions) {
      const obj = GuildSettingsRolesActionCreators;
      const result = obj.updateRolePermissionSet(require.props.role.id, permissions);
    };
    applyArgumentsResult.handleSaveRole = function handleSaveRole() {
      const promise = new Promise((arg0) => {
        let hoist;
        let icon;
        let mentionable;
        let name;
        let permissions;
        let unicodeEmoji;
        let closure_0 = arg0;
        let obj = closure_0;
        navigation = closure_0.props.navigation;
        const id = closure_0.props.role.id;
        ({ name, permissions, mentionable, hoist, icon, unicodeEmoji } = closure_0.props.role);
        const effectiveSection = closure_0.getEffectiveSection();
        const tmp2 = constants2;
        if (effectiveSection === constants2.PERMISSIONS) {
          let obj2 = { permissions };
          let obj4 = obj2;
        } else if (effectiveSection === tmp2.DISPLAY) {
          let primary_color1;
          const roleStyleData = closure_1_15.getRoleStyleData(id);
          let currentStyle;
          if (roleStyleData != null) {
            currentStyle = roleStyleData.currentStyle;
          }
          if (currentStyle == null) {
            currentStyle = constants.SOLID;
          }
          primary_color = undefined;
          if (roleStyleData != null) {
            const styleColors = roleStyleData.styleColors;
            if (styleColors != null) {
              const tmp6 = styleColors[currentStyle];
              if (tmp6 != null) {
                primary_color = tmp6.primary_color;
              }
            }
          }
          if (primary_color == null) {
            primary_color = closure_1_19;
          }
          let tmp7;
          if (roleStyleData != null) {
            const styleColors2 = roleStyleData.styleColors;
            if (styleColors2 != null) {
              tmp7 = styleColors2[currentStyle];
            }
          }
          if (currentStyle === constants.SOLID) {
            tmp7 = { primary_color, secondary_color: null, tertiary_color: null };
            primary_color1 = primary_color;
            const obj3 = { primary_color, secondary_color: null, tertiary_color: null };
          } else if (currentStyle === tmp8.HOLOGRAPHIC) {
            primary_color1 = primary_color.primary_color;
            tmp7 = primary_color;
          } else {
            primary_color1 = undefined;
            if (tmp7 != null) {
              primary_color1 = tmp7.primary_color;
            }
            if (primary_color1 == null) {
              primary_color1 = closure_1_19;
            }
          }
          obj4 = { name, color: primary_color1, colors: tmp7, hoist, mentionable, icon, unicodeEmoji };
        }
        let hasRoleConfigurationChanges = effectiveSection === tmp2.VERIFICATIONS && closure_1_15.hasRoleConfigurationChanges;
        if (hasRoleConfigurationChanges) {
          const editedRoleIdsForConfigurations = closure_1_15.editedRoleIdsForConfigurations;
          hasRoleConfigurationChanges = editedRoleIdsForConfigurations.has(id);
        }
        if (hasRoleConfigurationChanges) {
          const editedRoleConnectionConfigurationsMap = closure_1_15.getEditedRoleConnectionConfigurationsMap();
          let closure_2 = editedRoleConnectionConfigurationsMap.get(id);
        }
        function success() {
          let intl;
          const obj = GuildSettingsRolesActionCreators;
          obj.commitSectionChanges(id, effectiveSection);
          navigation.pop();
          closure_2_0.setState({ submitting: false, formErrors: {} });
          const obj2 = { key: "ROLE_EDIT_SAVED", content: intl.string(intl5.t.ulZn1j), icon: AssetRegistryDefault2 };
          const open = ToastActionCreatorsDefault.open;
          ToastActionCreatorsDefault;
          intl = intl5.intl;
          open(obj2);
          closure_0(true);
        }
        function failure(body) {
          let intl;
          body = undefined;
          const setState = closure_2_0.setState;
          if (body != null) {
            body = body.body;
          }
          if (body == null) {
            body = {};
          }
          setState({ submitting: false, formErrors: body });
          const obj = { key: "ERROR_OCCURRED_TRY_AGAIN", content: intl.string(intl5.t.fEptJP), icon: AssetRegistryDefault };
          const open = ToastActionCreatorsDefault.open;
          ToastActionCreatorsDefault;
          intl = intl5.intl;
          open(obj);
          closure_0(false);
        }
        obj.setState({ submitting: true, formErrors: {} }, () => {
          let updateRoleResult;
          if (null != obj4) {
            let obj = GuildActionCreatorsDefault;
            updateRoleResult = obj.updateRole(id, id, tmp);
          } else {
            updateRoleResult = Promise.resolve();
          }
          updateRoleResult.then(() => {
            if (null != closure_1_2) {
              const obj = closure_3_0(closure_3_3[31]);
              const result = obj.putRoleConnectionsConfigurations(closure_1_4, closure_1_5, tmp);
              result.then(success, failure);
            } else {
              success();
            }
          }, (arg0) => {
            failure(arg0);
          });
        });
      });
      return promise;
    };
    applyArgumentsResult.handleDeleteRole = function handleDeleteRole() {
      let closure_129_1;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let obj2;
      let role;
      const props = require.props;
      ({ guild: closure_129_1, role } = props);
      navigation = props.navigation;
      const tmp = AlertActionCreatorsDefault;
      let obj = {
        title: intl.formatToPlainString(intl5.t.FiMFTZ, obj2),
        body: intl2.string(intl5.t.qALKny),
        cancelText: intl3.string(intl5.t["ETE/oC"]),
        confirmText: intl4.string(intl5.t.N86XcP),
        onConfirm: function() {
          return closure_0(...arguments);
        },
        hideActionSheet: false,
        confirmColor: native.ButtonColors.RED
      };
      const show = tmp.show;
      intl = intl5.intl;
      obj2 = { name: role.name };
      intl2 = intl5.intl;
      intl3 = intl5.intl;
      intl4 = intl5.intl;
      let closure_0 = _asyncToGenerator(async (arg0, value) => {
        let obj3;
        let v1;
        if (c2 === 2) {
          c2 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj4 = { value, done: true };
            return obj4;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c2 = 2;
            if (0 === id) {
              if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                const obj5 = { value, done: true };
                return obj5;
              } else {
                const tags = role.tags;
                let guild_connections;
                if (tags != null) {
                  guild_connections = tags.guild_connections;
                }
                if (null === guild_connections) {
                  id = 1;
                  c2 = 1;
                  const obj6 = { value: obj3.putRoleConnectionsConfigurations(id.id, role.id, []), done: false };
                  obj3 = tmp3(navigation[31]);
                  return obj6;
                }
              }
            } else if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj = { value, done: true };
              return obj;
            }
            const obj2 = id(navigation[30]);
            obj2.deleteRole(closure_128_1.id, closure_128_2.id);
            closure_128_3.pop();
            c2 = 3;
            return { value: "HermesInternal", done: null };
          } catch (tmp17) {
            c2 = 3;
            throw tmp17;
          }
        }
      });
      show(obj);
    };
    applyArgumentsResult.handleBack = function handleBack() {
      let resolved;
      let obj = require;
      const props = require.props;
      navigation = props.navigation;
      if (props.section !== constants.DISPLAY) {
        obj.trackTabChanged(tmp.DISPLAY);
      }
      if (obj.getSectionChanges()) {
        const self = this;
        const self2 = this;
        resolved = new Promise((arg0) => {
          let intl;
          let intl2;
          let intl3;
          let intl4;
          let closure_0 = arg0;
          let obj = {
            title: intl.string(closure_1_0(closure_1_3[20]).t.P3yCXJ),
            body: intl2.string(closure_1_0(closure_1_3[20]).t.BU8QoR),
            cancelText: intl3.string(closure_1_0(closure_1_3[20]).t["lHKZ1/"]),
            confirmText: intl4.string(closure_1_0(closure_1_3[20]).t.p89ACt),
            onConfirm() {
              const handleSaveRoleResult = closure_2_0.handleSaveRole();
              handleSaveRoleResult.then((result) => closure_1_0(result));
            },
            onCancel() {
              const id = closure_2_0.props.role.id;
              const effectiveSection = closure_2_0.getEffectiveSection();
              if (effectiveSection === constants.VERIFICATIONS) {
                const obj2 = GuildSettingsRolesActionCreators;
                const result = obj2.discardConnectionsChanges(id);
              } else {
                const obj = GuildSettingsRolesActionCreators;
                const result1 = obj.discardSectionChanges(id, effectiveSection);
              }
              closure_0(true);
            },
            hideActionSheet: false,
            confirmColor: closure_1_0(closure_1_3[33]).ButtonColors.BRAND,
            isDismissable: false
          };
          const show = closure_1_1(closure_1_3[32]).show;
          closure_1_1(closure_1_3[32]);
          intl = closure_1_0(closure_1_3[20]).intl;
          intl2 = closure_1_0(closure_1_3[20]).intl;
          intl3 = closure_1_0(closure_1_3[20]).intl;
          intl4 = closure_1_0(closure_1_3[20]).intl;
          show(obj);
        });
      } else {
        navigation.pop();
        resolved = Promise.resolve(false);
      }
      return resolved;
    };
    return applyArgumentsResult;
  }
  componentDidMount() {
    this.trackTabChanged(this.props.section);
    this.updateNavigation(undefined, this.state);
  }
  componentDidUpdate(arg0, arg1) {
    this.updateNavigation(arg0, arg1);
  }
  getEffectiveSection() {
    const props = this.props;
    let PERMISSIONS = props.section;
    if (isEveryoneRole(props.role)) {
      PERMISSIONS = constants.PERMISSIONS;
    }
    return PERMISSIONS;
  }
  getSectionChanges() {
    return GuildSettingsRolesStore.hasSectionChanges(this.props.role.id, this.getEffectiveSection());
  }
  updateNavigation(role, submitting) {
    let fn;
    let obj2;
    const self = this;
    const props = this.props;
    role = props.role;
    navigation = props.navigation;
    submitting = this.state.submitting;
    let obj = {
      headerLeft: obj2.getHeaderConditionalBackButton(self.handleBack),
      headerRight: fn,
      headerTitle() {
        let intl;
        const obj = { title: role.name, subtitle: intl.string(intl5.t.XPGZXP) };
        const NavigatorHeader = NavigatorHeader2.NavigatorHeader;
        intl = intl5.intl;
        return authStore5(NavigatorHeader, obj);
      }
    };
    const sectionChanges = self.getSectionChanges();
    const setOptions = navigation.setOptions;
    obj2 = role(5936);
    if (submitting) {
      fn = () => closure_1_22(role(dependencyMap[18]).HeaderSubmittingIndicator, {});
    } else if (sectionChanges) {
      fn = () => {
        let intl;
        const obj = { onPress: self.handleSaveRole, text: intl.string(intl5.t["R3BPH+"]) };
        const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
        intl = intl5.intl;
        return authStore5(HeaderActionButton, obj);
      };
    }
    setOptions(obj);
  }
  renderSubScreenButtons() {
    let intl;
    let intl2;
    let intl3;
    let items;
    const self = this;
    const obj = { hasIcons: false, children: items };
    const TableRowGroup = self(5999).TableRowGroup;
    const obj2 = {
      label: intl.string(self(1115).t.WIDE1L),
      onPress() {
        return self.onSubScreenValueChange(constants.PERMISSIONS);
      },
      arrow: true
    };
    const TableRow = self(5917).TableRow;
    intl = self(1115).intl;
    items = [closure_22(TableRow, obj2), , ];
    const obj3 = {
      label: intl2.string(self(1115).t["5//Muu"]),
      onPress() {
        return self.onSubScreenValueChange(constants.VERIFICATIONS);
      },
      arrow: true
    };
    const TableRow2 = self(5917).TableRow;
    intl2 = self(1115).intl;
    items[1] = closure_22(TableRow2, obj3);
    const obj4 = {
      label: intl3.string(self(1115).t.J4ZtH1),
      onPress() {
        return self.onSubScreenValueChange(constants.MEMBERS);
      },
      arrow: true
    };
    const TableRow3 = self(5917).TableRow;
    intl3 = self(1115).intl;
    items[2] = closure_22(TableRow3, obj4);
    return closure_23(TableRowGroup, obj);
  }
  renderDeleteButton() {
    let TableRow;
    let intl;
    let obj2;
    const obj = { hasIcons: false, children: authStore5(TableRow, obj2) };
    const TableRowGroup = TableRowGroup2.TableRowGroup;
    obj2 = { variant: "danger", label: intl.string(intl5.t.c9ej8n), onPress: this.handleDeleteRole };
    TableRow = TableRow4.TableRow;
    intl = intl5.intl;
    return authStore5(TableRowGroup, obj);
  }
  renderManagedRoleWarningText() {
    let HelpMessage;
    let intl;
    let obj2;
    const obj = { style: closure_25(this.context).managedRolesWarningContainer, children: authStore5(HelpMessage, obj2) };
    obj2 = { messageType: native.HelpMessageTypes.WARNING, children: intl.string(intl5.t.k5d7DJ) };
    HelpMessage = native.HelpMessage;
    intl = intl5.intl;
    return authStore5(View, obj);
  }
  render() {
    let Stack;
    let guild;
    let hoist;
    let items;
    let locked;
    let mentionable;
    let name;
    let newRole;
    let obj17;
    let obj8;
    let permissions;
    let role;
    let tmp11Result;
    let tmp15;
    let tmp22Result;
    let tmp26;
    const self = this;
    const tmp = closure_25(this.context);
    const props = this.props;
    ({ guild, role, locked } = props);
    ({ newRole, integrations } = props);
    ({ name, permissions, mentionable, hoist } = role);
    const formErrors = this.state.formErrors;
    const tmp2 = isEveryoneRole(role);
    const tags = role.tags;
    let guild_connections;
    if (tags != null) {
      guild_connections = tags.guild_connections;
    }
    let tmp6 = !(tmp2 || locked);
    if (tmp6) {
      const managed = role.managed;
      let tmp7 = !managed;
      if (managed) {
        tmp7 = tmp5;
      }
      tmp6 = tmp7;
    }
    const managed2 = role.managed;
    const effectiveSection = self.getEffectiveSection();
    if (constants.DISPLAY === effectiveSection) {
      const obj2 = { guild, role, name, formErrors, mentionable, hoist, onNameChanged: null, onMentionableChanged: null, onHoistChanged: null, locked, autoFocusInput: newRole };
      ({ handleNameChanged: obj3.onNameChanged, handleMentionableChanged: obj3.onMentionableChanged, handleHoistChanged: obj3.onHoistChanged } = self);
      tmp11Result = authStore5(GuildSettingsRoleEditDisplayDefault, obj2);
    } else if (constants.PERMISSIONS === effectiveSection) {
      const obj4 = { guild, role, permissions, onPermissionsChanged: self.handlePermissionsChanged, contentContainerStyle: self.props.contentContainerStyle };
      tmp11Result = authStore5(GuildSettingsRoleEditPermissionsDefault, obj4);
    } else if (constants.MEMBERS === effectiveSection) {
      const obj = { guild, role, locked: tmp15, contentContainerStyle: self.props.contentContainerStyle };
      tmp15 = locked;
      const tmp11 = authStore5;
      const tmp14 = GuildSettingsRoleMembersDefault;
      if (!locked) {
        tmp15 = tmp5;
      }
      tmp11Result = tmp11(tmp14, obj);
    } else if (constants.VERIFICATIONS === effectiveSection) {
      const obj5 = { guild, role, locked, integrations };
      tmp11Result = authStore5(GuildSettingsRoleEditConnectionsControlsDefault, obj5);
    }
    const obj6 = { style: tmp.container, children: tmp22Result };
    const tmp23 = View;
    if (tmp2) {
      const obj7 = { spacing: nativeDefault.space.PX_24, style: obj8, children: tmp11Result };
      const Stack2 = tmp24(5279).Stack;
      obj8 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16 };
      tmp22Result = tmp22(Stack2, obj7);
    } else {
      const obj9 = { contentContainerStyle: tmp.form, children: tmp26(Stack, obj17) };
      const Form = tmp24(8053).Form;
      obj17 = { spacing: nativeDefault.space.PX_24, children: items };
      Stack = tmp24(5279).Stack;
      let result = null;
      tmp26 = closure_23;
      if (effectiveSection === constants.DISPLAY) {
        result = null;
        if (managed2) {
          result = self.renderManagedRoleWarningText();
        }
      }
      items = [result, tmp11Result, , ];
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
      tmp22Result = tmp22(Form, obj9);
    }
    return authStore5(tmp23, obj6);
  }
}
const prototype = GuildSettingsRoleEdit.prototype;
GuildSettingsRoleEdit.contextType = native2.ThemeContext;
let result = size.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleEdit.tsx");

export default function ConnectedGuildSettingsRoleEdit(guildId) {
  let items3;
  guildId = guildId.guildId;
  let role = guildId.role;
  let flag = guildId.newRole;
  if (flag === undefined) {
    flag = false;
  }
  const section = guildId.section;
  const contentContainerStyle = guildId.contentContainerStyle;
  const tmp = guildId;
  const tmp2 = section;
  let obj = guildId(section[42]);
  navigation = obj.useNavigation();
  let obj2 = guildId(section[43]);
  const items = [GuildStore, GuildRoleStore, AuthenticationStore, GuildSettingsStore, GuildSettingsRolesStore];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    let editedRoleIdsForConfigurations;
    let highestRole;
    const guild = GuildStore.getGuild(guildId);
    role = GuildRoleStore.getRole(guildId, role.id);
    let role1 = GuildSettingsRolesStore.getRole(role.id);
    const id = AuthenticationStore.getId();
    const tmp4 = GuildSettingsRolesStore;
    if (null != guild) {
      const obj = PermissionUtilsAll;
      highestRole = obj.getHighestRole(guild, id);
    }
    let tmp10 = null != guild;
    if (tmp10) {
      const obj2 = PermissionUtilsAll;
      tmp10 = !obj2.isRoleHigher(guild, id, highestRole, tmp2);
    }
    integrations = GuildSettingsStore.getProps().integrations;
    const obj3 = { guild, role: role1, newRole: flag, locked: tmp10, integrations, section, storeHasChanges: editedRoleIdsForConfigurations.has(role.id) };
    if (role1 == null) {
      role1 = role;
    }
    if (role1 == null) {
      role1 = tmp2;
    }
    editedRoleIdsForConfigurations = tmp4.editedRoleIdsForConfigurations;
    return obj3;
  });
  let guild = stateFromStoresObject.guild;
  const tmp5 = _objectWithoutProperties(stateFromStoresObject, closure_4);
  const items1 = [section];
  const effect = react.useEffect(() => {
    if (section === constants.DISPLAY) {
      const obj = GuildSettingsRolesActionCreators;
      obj.init();
    }
  }, items1);
  const items2 = [guildId, ];
  let id;
  const useEffect = react.useEffect;
  if (role != null) {
    id = role.id;
  }
  items2[1] = id;
  const effect1 = useEffect(() => {
    let id;
    if (role != null) {
      id = tmp.id;
    }
    if (null != id) {
      const obj = ConnectionsRoleActionCreators;
      const roleConnectionsConfiguration = obj.fetchRoleConnectionsConfiguration(guildId, tmp.id);
    }
  }, items2);
  let tmp10 = null;
  if (null != guild) {
    let obj3 = { children: items3 };
    const obj4 = { guild, navigation, contentContainerStyle };
    const merged = Object.assign(tmp5);
    items3 = [closure_22(GuildSettingsRoleEdit, obj4), closure_22(tmp(tmp2[45]).NavScrim, {})];
    tmp10 = closure_23(closure_24, obj3);
  }
  return tmp10;
};
