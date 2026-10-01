// Module ID: 11314
// Function ID: 11315
// Name: GuildSettingsModalMemberEdit
// Dependencies: [19, 17, 2063, 2103, 2108, 2102, 2067, 4469, 1372, 11315, 1074, 21, 4836, 576, 4474, 12, 5916, 11316, 5917, 1115, 5999, 4540, 6795, 5936, 4678, 4832, 8741, 4456, 8053, 5279, 1177, 6024, 11317, 11318, 4527, 11323, 1485, 504, 38, 8706, 6729, 6461, 11328, 11330, 5910, 6421, 2]
// Exports: default

// Module 11314 (GuildSettingsModalMemberEdit)
import react_native from "react-native" /* 17 */;
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 576 */;
import intl7 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import GuildRoleRecord from "GuildRoleRecord" /* 2103 */;
import CommunicationDisabledUtils from "CommunicationDisabledUtils" /* 4456 */;
import PermissionUtilsAll from "PermissionUtils" /* 4474 */;
import ToastUtils from "ToastUtils" /* 4527 */;
import native2 from "native" /* 4540 */;
import UserUtilsDefault from "UserUtils" /* 4678 */;
import Text_Text from "Text/Text" /* 4832 */;
import NavigatorHeader2 from "NavigatorHeader" /* 5936 */;
import HeaderActionButton2 from "HeaderActionButton" /* 6795 */;
import useCanToggleCommunicationDisableOnUser from "useCanToggleCommunicationDisableOnUser" /* 8706 */;
import BotTagDefault from "BotTag" /* 8741 */;
import GuildSettingsModalMembersActionCreatorsDefault from "GuildSettingsModalMembersActionCreators" /* 11317 */;
import GuildDisableCommunicationActionCreators from "GuildDisableCommunicationActionCreators" /* 11318 */;
import TransferOwnershipModalActionCreatorsDefault from "TransferOwnershipModalActionCreators" /* 11323 */;
import react from "react" /* 19 */;
import GuildRecord from "GuildRecord" /* 2063 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import GuildRoleStore from "GuildRoleStore" /* 2102 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import UserStore from "UserStore" /* 1372 */;
import GuildSettingsModalMembersStore from "GuildSettingsModalMembersStore" /* 11315 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let importDefault, navigation;

let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let metroImportDefault;
let metroRequire;
let obj2;
class GuildSettingsModalMemberEditScene {
  constructor(guildId) {
    let contentContainerStyle;
    let items5;
    let onClose;
    guildId = guildId.guildId;
    const userId = guildId.userId;
    let stateFromStores;
    ({ onClose, contentContainerStyle } = guildId);
    const tmp = guildId;
    let obj = guildId(stateFromStores[36]);
    navigation = obj.useNavigation();
    const obj2 = guildId(stateFromStores[37]);
    let items = [GuildStore];
    const tmp2 = stateFromStores;
    stateFromStores = obj2.useStateFromStores(items, () => GuildStore.getGuild(guildId));
    const items1 = [GuildRoleStore];
    const obj3 = guildId(stateFromStores[37]);
    const stateFromStores1 = obj3.useStateFromStores(items1, () => GuildRoleStore.getSortedRoles(guildId));
    const items2 = [UserStore];
    const obj4 = guildId(stateFromStores[37]);
    const stateFromStoresObject = obj4.useStateFromStoresObject(items2, () => {
      const currentUser = UserStore.getCurrentUser();
      _modDef38(null != currentUser, "GuildSettingsModalMemberEditScene: current user cannot be undefined");
      const obj = { user: UserStore.getUser(userId), currentUser };
      return obj;
    });
    const user = stateFromStoresObject.user;
    let currentUser = stateFromStoresObject.currentUser;
    const effect = user.useEffect(() => {
      let obj = userId(stateFromStores[32]);
      obj.startEditingNickname();
      return () => {
        const obj = userId(stateFromStores[32]);
        obj.stopEditingRoles();
      };
    }, []);
    const items3 = [GuildSettingsModalMembersStore, GuildMemberStore, PermissionStore, UserStore, GuildStore];
    const obj5 = guildId(stateFromStores[37]);
    const stateFromStoresObject1 = obj5.useStateFromStoresObject(items3, () => {
      let canManageUserResult;
      let canManageUserResult1;
      let canManageUserResult2;
      let canToggleCommunicationDisableOnUser;
      let id;
      let id1;
      let items;
      const obj = { member: GuildMemberStore.getMember(guildId, userId), nicknameError: GuildSettingsModalMembersStore.nicknameError, editRoles: GuildSettingsModalMembersStore.roles, isEditing: GuildSettingsModalMembersStore.isEditing, submitting: GuildSettingsModalMembersStore.isSubmitting, canChangeNick: canManageUserResult, canManageRoles: PermissionStore.can(constants.MANAGE_ROLES, stateFromStores), canKick: canManageUserResult1, canBan: canManageUserResult2, canDisableCommunication: canToggleCommunicationDisableOnUser(id, id1, items) };
      canManageUserResult = null != stateFromStores && null != user && PermissionStore.canManageUser(constants.MANAGE_NICKNAMES, user, tmp);
      canManageUserResult1 = null != tmp && null != user && obj2.canManageUser(tmp7.KICK_MEMBERS, user, tmp);
      id = undefined;
      canManageUserResult2 = null != tmp && null != user && obj2.canManageUser(tmp7.BAN_MEMBERS, user, tmp);
      canToggleCommunicationDisableOnUser = useCanToggleCommunicationDisableOnUser.canToggleCommunicationDisableOnUser;
      useCanToggleCommunicationDisableOnUser;
      if (stateFromStores != null) {
        id = tmp.id;
      }
      id1 = undefined;
      if (user != null) {
        id1 = user.id;
      }
      items = [UserStore, GuildStore, PermissionStore];
      return obj;
    });
    const items4 = [userId];
    const obj6 = guildId(stateFromStores[40]);
    const subscribeGuildMembers = obj6.useSubscribeGuildMembers({ [guildId]: items4 }, "GuildSettingsModalMemberEdit");
    [][0] = navigation;
    let tmp11 = null;
    if (null != currentUser) {
      tmp11 = null;
      if (null != stateFromStores) {
        tmp11 = null;
        if (null != user) {
          const obj7 = { children: items5 };
          const obj8 = { onClose, handleSuccessfulRemoval: tmp10, guild: stateFromStores, sortedGuildRoles: stateFromStores1, currentUser, user, navigation, contentContainerStyle };
          const merged = Object.assign(stateFromStoresObject1);
          items5 = [closure_18(GuildSettingsModalMemberEdit, obj8), closure_18(tmp(tmp2[41]).NavScrim, {})];
          tmp11 = closure_19(closure_20, obj7);
        }
      }
    }
    return tmp11;
  }
}
const View = react_native.View;
({ isGuildOwner: metroRequire, isGuildOwnerWithRequiredMfaLevel: metroImportDefault } = GuildRecord);
const isEveryoneRole = GuildRoleRecord.isEveryoneRole;
({ Permissions: closure_15, GuildFeatures: closure_16, GuildSettingsSections: closure_17 } = Constants);
({ jsx: closure_18, jsxs: closure_19, Fragment: closure_20 } = Fragment);
let obj = { form: { flex: 1 }, formContent: { paddingTop: 16 }, stackPadding: obj2, userInfo: { height: 63 }, avatar: { width: 40, height: 40 }, rowLabel: { flexDirection: "row" }, ctaButton: { marginTop: 8, marginBottom: 8 }, actionButtonLeft: { marginRight: 0, marginLeft: 0, paddingRight: 0, paddingLeft: 16 }, actionButtonRight: { marginRight: 0, marginLeft: 0, paddingRight: 16, paddingLeft: 0 }, actionButtonContainer: { flexBasis: "auto" } };
obj2 = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
let closure_21 = createStyles.createLegacyClassComponentStyles(obj);
const PureComponent = react.PureComponent;
class RolesList extends PureComponent {
  constructor(isEditing) {
    const tmp = new RolesList(isEditing, new.target);
    tmp.state = { isEditingProp: isEditing.isEditing };
    return tmp;
  }
  static getDerivedStateFromProps(isEditing, isEditingProp) {
    isEditing = isEditing.isEditing;
    let tmp = null;
    if (isEditingProp.isEditingProp !== isEditing) {
      tmp = { isEditingProp: isEditing };
      const obj = { isEditingProp: isEditing };
    }
    return tmp;
  }
  render() {
    let closure_4;
    let currentUserId;
    let intl;
    let intl2;
    let sortedGuildRoles;
    let tmp;
    let tmp3;
    let valueResult;
    const props = this.props;
    const guild = props.guild;
    ({ sortedGuildRoles, roles: importDefault, currentUserId } = props);
    const onToggleRole = props.onToggleRole;
    if (props.isEditing) {
      let obj2 = currentUserId(onToggleRole[14]);
      const highestRole = obj2.getHighestRole(guild, currentUserId);
      const arr4 = require("module_12")(sortedGuildRoles);
      const found = arr4.filter((item) => !isEveryoneRole(item));
      const found1 = found.filter((managed) => !managed.managed);
      const found2 = found1.filter((item) => {
        const obj = PermissionUtilsAll;
        return obj.isRoleHigher(guild, currentUserId, closure_4, item);
      });
      const iter2 = found2.map((id) => {
        let closure_1;
        let obj2;
        const tmp = -1 !== importDefault.indexOf(id.id);
        importDefault = tmp;
        const obj = {
          checked: tmp,
          label: closure_1_18(require("RoleName"), obj2),
          onPress() {
            return onToggleRole(id.id, !closure_1);
          }
        };
        const TableCheckboxRow = guild(onToggleRole[16]).TableCheckboxRow;
        obj2 = { role: id, textVariant: "text-md/semibold", dotBackground: true, children: id.name };
        return closure_1_18(TableCheckboxRow, obj, id.id);
      });
      valueResult = iter2.value();
      tmp3 = onToggleRole;
    } else {
      tmp3 = onToggleRole;
      const arr = require("module_12")(sortedGuildRoles);
      const found3 = arr.filter((id) => importDefault.includes(id.id));
      const iter = found3.map((role) => {
        let obj2;
        const obj = { label: closure_1_18(require("RoleName"), obj2) };
        const TableRow = guild(onToggleRole[18]).TableRow;
        obj2 = { role, textVariant: "text-md/semibold", dotBackground: true, children: role.name };
        return closure_1_18(TableRow, obj, role.id);
      });
      const valueResult2 = iter.value();
      const push = valueResult2.push;
      let obj = { label: intl.string(guild(onToggleRole[19]).t["+riKdA"]), onPress: tmp };
      let TableRow = guild(onToggleRole[18]).TableRow;
      intl = guild(onToggleRole[19]).intl;
      push(closure_18(TableRow, obj, "addition"));
      valueResult = valueResult2;
    }
    const obj3 = { title: intl2.string(guild(tmp3[19]).t["LPJmL/"]), hasIcons: false, children: valueResult };
    const TableRowGroup = guild(tmp3[20]).TableRowGroup;
    intl2 = guild(tmp3[19]).intl;
    return closure_18(TableRowGroup, obj3);
  }
}
const prototype = RolesList.prototype;
RolesList.defaultProps = { roles: [] };
const PureComponent2 = react.PureComponent;
class GuildSettingsModalMemberEdit extends PureComponent2 {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    const member = applyArgumentsResult.props.member;
    let nick;
    if (member != null) {
      nick = member.nick;
    }
    applyArgumentsResult.state = { nick };
    applyArgumentsResult.handleChangeNickname = function handleChangeNickname(nick) {
      const obj = { nick };
      require.setState(obj);
    };
    applyArgumentsResult.handleSaveNickname = function handleSaveNickname() {
      if (null != require.state.nick) {
        let id1 = null;
        const changeNickname = GuildSettingsModalMembersActionCreatorsDefault.changeNickname;
        const id = tmp.props.guild.id;
        GuildSettingsModalMembersActionCreatorsDefault;
        if (require.props.currentUser.id !== require.props.user.id) {
          id1 = tmp.props.user.id;
        }
        changeNickname(id, id1, require.state.nick);
      }
    };
    applyArgumentsResult.handleStartEditingRoles = function handleStartEditingRoles() {
      const obj = GuildSettingsModalMembersActionCreatorsDefault;
      obj.startEditingRoles(require.props.guild.id, require.props.user.id);
    };
    applyArgumentsResult.handleToggleRole = function handleToggleRole(roleId, state) {
      const obj = GuildSettingsModalMembersActionCreatorsDefault;
      obj.toggleRole(roleId, state);
    };
    applyArgumentsResult.handleSetCommunicationDisabled = function handleSetCommunicationDisabled() {
      let guild;
      let user;
      ({ guild, user } = require.props);
      const obj = GuildDisableCommunicationActionCreators;
      const obj2 = { guildId: guild.id, userId: user.id };
      const result = obj.openDisableCommunication(obj2);
    };
    applyArgumentsResult.handleClearCommunicationDisabled = function handleClearCommunicationDisabled() {
      let guild;
      let user;
      ({ guild, user } = require.props);
      const obj = GuildDisableCommunicationActionCreators;
      const obj2 = { guildId: guild.id, userId: user.id };
      const result = obj.openEnableCommunication(obj2);
    };
    applyArgumentsResult.handleKick = function handleKick() {
      const props = require.props;
      navigation = props.navigation;
      const obj = { userId: props.user.id, onKick: props.handleSuccessfulRemoval };
      navigation.push(constants2.MEMBER_KICK, obj);
    };
    applyArgumentsResult.handleBan = function handleBan() {
      const props = require.props;
      navigation = props.navigation;
      const obj = { userId: props.user.id, onBan: props.handleSuccessfulRemoval };
      navigation.push(constants2.MEMBER_BAN, obj);
    };
    applyArgumentsResult.handleTransferOwnership = function handleTransferOwnership() {
      const props = require.props;
      const guild = props.guild;
      const features = guild.features;
      const user = props.user;
      const tmp = constants;
      if (!features.has(constants.VERIFIED)) {
        const features2 = guild.features;
        if (!features2.has(tmp.PARTNERED)) {
          const obj = TransferOwnershipModalActionCreatorsDefault;
          obj.open(guild, user);
        }
      }
      const obj2 = ToastUtils;
      const result = obj2.transferOwnershipProtected();
    };
    applyArgumentsResult.handleSaveMemberRoles = function handleSaveMemberRoles() {
      if (null != require.props.editRoles) {
        const obj = GuildSettingsModalMembersActionCreatorsDefault;
        obj.updateMemberRoles(require.props.guild.id, require.props.user.id, require.props.editRoles);
      }
    };
    applyArgumentsResult.handleCancelEditMemberRoles = function handleCancelEditMemberRoles() {
      const obj = GuildSettingsModalMembersActionCreatorsDefault;
      obj.stopEditingRoles();
    };
    return applyArgumentsResult;
  }
  componentDidMount() {
    this.updateNavigator();
  }
  componentDidUpdate(arg0) {
    this.updateNavigator(arg0);
  }
  updateNavigator(submitting) {
    let fn2;
    let isEditing;
    let onClose;
    const self = this;
    ({ submitting, isEditing, navigation, onClose } = this.props);
    const tmp = null != submitting && submitting === submitting.submitting && isEditing === submitting.isEditing && onClose === submitting.onClose;
    if (!tmp) {
      let fn;
      const setOptions = navigation.setOptions;
      if (submitting) {
        fn = () => null;
      } else if (isEditing) {
        fn = () => {
          let intl;
          const obj = { text: intl.string(intl7.t["ETE/oC"]), onPress: self.handleCancelEditMemberRoles };
          const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
          intl = intl7.intl;
          return authStore4(HeaderActionButton, obj);
        };
      } else if (null != onClose) {
        let obj = self(5936);
        fn = obj.getHeaderCloseButton(onClose);
      }
      let obj2 = {
        headerLeft: fn,
        headerRight: fn2,
        headerTitle() {
            let formatToPlainString;
            let obj2;
            let obj3;
            let v7odxj;
            const obj = { title: formatToPlainString(v7odxj, obj2) };
            const NavigatorHeader = NavigatorHeader2.NavigatorHeader;
            const intl = intl7.intl;
            formatToPlainString = intl.formatToPlainString;
            obj2 = { user: obj3.getName(self.props.user) };
            v7odxj = intl7.t.v7odxj;
            obj3 = UserUtilsDefault;
            return authStore4(NavigatorHeader, obj);
          }
      };
      if (submitting) {
        fn2 = () => closure_1_18(self(dependencyMap[23]).HeaderSubmittingIndicator, {});
      } else if (isEditing) {
        fn2 = () => {
          let intl;
          const obj = { text: intl.string(intl7.t["R3BPH+"]), onPress: self.handleSaveMemberRoles };
          const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
          intl = intl7.intl;
          return authStore4(HeaderActionButton, obj);
        };
      }
      setOptions(obj2);
    }
  }
  render() {
    let Stack;
    let TableRow2;
    let TableRow3;
    let TableRow4;
    let TableRow5;
    let TuAZuW;
    let canBan;
    let canChangeNick;
    let canDisableCommunication;
    let canKick;
    let canManageRoles;
    let currentUser;
    let editRoles;
    let formatToPlainString2;
    let formatToPlainString3;
    let guild;
    let intl2;
    let intl3;
    let intl4;
    let isEditing;
    let items;
    let items1;
    let items2;
    let member;
    let obj11;
    let obj13;
    let obj14;
    let obj20;
    let obj21;
    let obj23;
    let obj24;
    let obj28;
    let obj9;
    let tmp19Result5;
    let tmp19Result6;
    let tmp19Result7;
    let tmp19Result8;
    let user;
    let yOiJHB;
    const self = this;
    const tmp = closure_21(this.context);
    let str = this.state.nick;
    ({ user, guild, member, editRoles, currentUser, isEditing, canChangeNick, canManageRoles, canKick, canBan, canDisableCommunication } = this.props);
    if (null == member) {
      return null;
    } else {
      const obj2 = { style: tmp.rowLabel, children: items };
      const obj3 = { variant: "text-sm/medium", children: obj28.getUserTag(user) };
      const Text = Text_Text.Text;
      obj28 = UserUtilsDefault;
      items = [authStore4(Text, obj3), ];
      let tmp16Result = null;
      const tmp15 = View;
      if (user.bot) {
        const obj = { verified: user.isVerifiedBot() };
        const tmp19Result = BotTagDefault;
        tmp16Result = tmp16(tmp19Result, obj);
      }
      items[1] = tmp16Result;
      let tmp7 = null;
      const tmp14Result = closure_19(tmp15, obj2);
      if (null != member) {
        let tmp16Result3;
        const tmp17Result = CommunicationDisabledUtils;
        const result = tmp17Result.isMemberCommunicationDisabled(member);
        const TableRowGroup = tmp17(5999).TableRowGroup;
        const obj4 = { hasIcons: false, children: null };
        const TableRow = tmp17(5917).TableRow;
        const obj5 = { variant: "danger", label: null, onPress: null };
        const intl = tmp17(1115).intl;
        const formatToPlainString = intl.formatToPlainString;
        const t = tmp17(1115).t;
        if (result) {
          const RuL6o7 = t.RuL6o7;
          const obj6 = { user: tmp19Result5.getName(user) };
          tmp19Result5 = UserUtilsDefault;
          obj5.label = formatToPlainString(RuL6o7, obj6);
          obj5.onPress = self.handleClearCommunicationDisabled;
          obj4.children = authStore4(TableRow, obj5);
          tmp16Result3 = tmp16(TableRowGroup, obj4);
        } else {
          const FN7NIS = t.FN7NIS;
          const obj7 = { user: tmp19Result6.getName(user) };
          tmp19Result6 = UserUtilsDefault;
          obj5.label = formatToPlainString(FN7NIS, obj7);
          obj5.onPress = self.handleSetCommunicationDisabled;
          obj4.children = authStore4(TableRow, obj5);
          tmp16Result3 = tmp16(TableRowGroup, obj4);
        }
        tmp7 = tmp16Result3;
      }
      const bot = metroRequire(guild, user) || !metroImportDefault(guild, currentUser) || user.bot;
      let tmp16Result4;
      if (!bot) {
        const obj8 = { hasIcons: false, children: authStore4(TableRow2, obj9) };
        const TableRowGroup2 = tmp17(5999).TableRowGroup;
        obj9 = { variant: "danger", label: intl2.string(intl7.t.Z5s7PM), onPress: self.handleTransferOwnership };
        TableRow2 = tmp17(5917).TableRow;
        intl2 = tmp17(1115).intl;
        tmp16Result4 = tmp16(TableRowGroup2, obj8);
      }
      const obj10 = { style: tmp.form, contentContainerStyle: items1, children: closure_19(Stack, obj11) };
      items1 = [tmp.formContent, self.props.contentContainerStyle];
      const Form = tmp17(8053).Form;
      obj11 = { style: tmp.stackPadding, spacing: nativeDefault.space.PX_24, children: items2 };
      Stack = tmp17(5279).Stack;
      const obj12 = { hasIcons: true, children: authStore4(TableRow3, obj13) };
      const TableRowGroup3 = tmp17(5999).TableRowGroup;
      obj13 = { icon: authStore4(native.Avatar, obj14), label: tmp14Result };
      TableRow3 = tmp17(5917).TableRow;
      obj14 = { style: tmp.avatar, user, guildId: guild.id };
      items2 = [authStore4(TableRowGroup3, obj12), , , , , , ];
      if (!canChangeNick) {
        canChangeNick = currentUser.id === user.id;
      }
      if (canChangeNick) {
        const obj15 = { label: intl3.string(intl7.t["621LJD"]), value: str, placeholder: intl4.string(intl7.t.h7UKXj), onChange: null, onBlur: null, maxLength: 32, errorMessage: tmp3 };
        const TextInput = tmp17(6024).TextInput;
        intl3 = tmp17(1115).intl;
        if (str == null) {
          str = "";
        }
        intl4 = tmp17(1115).intl;
        ({ handleChangeNickname: obj16.onChange, handleSaveNickname: obj16.onBlur } = self);
        canChangeNick = tmp16(TextInput, obj15);
      }
      items2[1] = canChangeNick;
      if (canManageRoles) {
        const obj18 = { guild, sortedGuildRoles: tmp2, roles: editRoles, currentUserId: currentUser.id, isEditing, onToggleRole: null, onStartEditing: null };
        const tmp13 = RolesList;
        if (!isEditing) {
          editRoles = member.roles;
        }
        if (editRoles == null) {
          editRoles = [];
        }
        ({ handleToggleRole: obj17.onToggleRole, handleStartEditingRoles: obj17.onStartEditing } = self);
        canManageRoles = tmp16(tmp13, obj18);
      }
      items2[2] = canManageRoles;
      if (canDisableCommunication) {
        canDisableCommunication = tmp7;
      }
      items2[3] = canDisableCommunication;
      if (canKick) {
        const obj19 = { hasIcons: false, children: authStore4(TableRow4, obj20) };
        const TableRowGroup4 = tmp17(5999).TableRowGroup;
        obj20 = { variant: "danger", label: formatToPlainString2(yOiJHB, obj21), onPress: self.handleKick };
        TableRow4 = tmp17(5917).TableRow;
        const intl5 = tmp17(1115).intl;
        formatToPlainString2 = intl5.formatToPlainString;
        obj21 = { user: tmp19Result7.getName(user) };
        yOiJHB = tmp17(1115).t.yOiJHB;
        tmp19Result7 = UserUtilsDefault;
        canKick = tmp16(TableRowGroup4, obj19);
      }
      items2[4] = canKick;
      if (canBan) {
        const obj22 = { hasIcons: false, children: authStore4(TableRow5, obj23) };
        const TableRowGroup5 = tmp17(5999).TableRowGroup;
        obj23 = { variant: "danger", label: formatToPlainString3(TuAZuW, obj24), onPress: self.handleBan };
        TableRow5 = tmp17(5917).TableRow;
        const intl6 = tmp17(1115).intl;
        formatToPlainString3 = intl6.formatToPlainString;
        obj24 = { user: tmp19Result8.getName(user) };
        TuAZuW = tmp17(1115).t.TuAZuW;
        tmp19Result8 = UserUtilsDefault;
        canBan = tmp16(TableRowGroup5, obj22);
      }
      items2[5] = canBan;
      items2[6] = tmp16Result4;
      return authStore4(Form, obj10);
    }
  }
}
const prototype2 = GuildSettingsModalMemberEdit.prototype;
GuildSettingsModalMemberEdit.contextType = native2.ThemeContext;
let result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMemberEdit.tsx");

export default function MemberModalEdit(onClose) {
  let guildId;
  let items1;
  let userId;
  onClose = onClose.onClose;
  const onRemove = onClose.onRemove;
  ({ guildId, userId } = onClose);
  let tmp = onRemove(5910)(guildId);
  let closure_2 = tmp;
  const items = [onClose, onRemove, tmp];
  const memo = react.useMemo(() => {
    let closure_0 = closure_2;
    closure_2 = onRemove;
    let obj = {
      render(arg0) {
        const obj = { onClose, guildId };
        const merged = Object.assign(arg0);
        return closure_2_18(closure_2_24, obj);
      }
    };
    return {
      [closure_2_17.MEMBER_EDIT]: obj,
      [closure_2_17.MEMBER_KICK]: {
        headerTitle() {
          return null;
        },
        render(arg0) {
          const obj = { guildId, onKick };
          const tmp = onClose(closure_2_3[42]);
          const merged = Object.assign(arg0);
          return closure_2_18(tmp, obj);
        }
      },
      [closure_2_17.MEMBER_BAN]: {
        headerTitle() {
          return null;
        },
        render(arg0) {
          const obj = { guildId, onBan };
          const tmp = onClose(closure_2_3[43]);
          const merged = Object.assign(arg0);
          return closure_2_18(tmp, obj);
        }
      }
    };
  }, items);
  let obj = { screens: memo, initialRouteName: constants3.MEMBER_EDIT, initialRouteStack: items1 };
  items1 = [{ name: constants3.MEMBER_EDIT, params: { userId } }];
  const obj2 = { name: constants3.MEMBER_EDIT, params: { userId } };
  return closure_18(onClose(6421).Navigator, obj);
};
export { GuildSettingsModalMemberEditScene };
