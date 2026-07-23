// Module ID: 10981
// Function ID: 85411
// Name: _callSuper
// Dependencies: [6, 7, 15, 17, 18, 31, 27, 4122, 1391, 1911, 1917, 1910, 1838, 3758, 1849, 10982, 653, 33, 4130, 689, 3763, 22, 9094, 1273, 4126, 5165, 1212, 5503, 10983, 10984, 3830, 10989, 5788, 5087, 3969, 8523, 3747, 7495, 4541, 7512, 3842, 1456, 566, 44, 8174, 5687, 5448, 10994, 10996, 5450, 5519, 2]
// Exports: default

// Module 10981 (_callSuper)
import getActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "jsxProd";
import closure_8 from "_createForOfIteratorHelperLoose";
import importAllResult from "module_10989";
import get_ActivityIndicator from "TableRowGroupTitle";
import closure_11 from "_isNativeReflectConstruct";
import isGuildOwner from "isGuildOwner";
import { isEveryoneRole } from "GuildRoleRecordTypeTag";
import closure_15 from "_isNativeReflectConstruct";
import closure_16 from "_createForOfIteratorHelperLoose";
import closure_17 from "_createForOfIteratorHelperLoose";
import closure_18 from "_isNativeReflectConstruct";
import closure_19 from "_isNativeReflectConstruct";
import closure_20 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "HeaderBackImage";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let StyleSheet;
let closure_10;
let closure_12;
let closure_13;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
let closure_25;
let closure_26;
const require = arg1;
function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const obj = callback2(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(obj, items, callback2(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, items);
  }
  return closure_6(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
class GuildSettingsModalMemberEditScene {
  constructor(arg0) {
    guildId = global.guildId;
    userId = global.userId;
    ({ onClose, contentContainerStyle } = global);
    obj = require("useNavigation");
    navigation = obj.useNavigation();
    closure_2 = navigation;
    obj2 = require("initialize");
    items = [];
    items[0] = c17;
    stateFromStores = obj2.useStateFromStores(items, () => outer1_17.getGuild(guildId));
    closure_3 = stateFromStores;
    obj3 = require("initialize");
    items1 = [];
    items1[0] = c16;
    stateFromStores1 = obj3.useStateFromStores(items1, () => outer1_16.getSortedRoles(guildId));
    obj4 = require("initialize");
    items2 = [];
    items2[0] = c11;
    stateFromStores2 = obj4.useStateFromStores(items2, () => outer1_11.roleStyle);
    obj5 = require("initialize");
    items3 = [];
    items3[0] = c19;
    stateFromStoresObject = obj5.useStateFromStoresObject(items3, () => {
      const currentUser = outer1_19.getCurrentUser();
      userId(stateFromStores[43])(null != currentUser, "GuildSettingsModalMemberEditScene: current user cannot be undefined");
      return { user: outer1_19.getUser(userId), currentUser };
    });
    user = stateFromStoresObject.user;
    currentUser = stateFromStoresObject.currentUser;
    effect = closure_9.useEffect(() => {
      userId(stateFromStores[28]).startEditingNickname();
      return () => {
        userId(stateFromStores[28]).stopEditingRoles();
      };
    }, []);
    obj6 = require("initialize");
    items4 = [, , , , ];
    items4[0] = c20;
    items4[1] = c15;
    items4[2] = c18;
    items4[3] = c19;
    items4[4] = c17;
    stateFromStoresObject1 = obj6.useStateFromStoresObject(items4, () => {
      const obj = { member: outer1_15.getMember(guildId, userId), nicknameError: outer1_20.nicknameError, editRoles: outer1_20.roles, isEditing: outer1_20.isEditing, submitting: outer1_20.isSubmitting };
      let canManageUserResult = null != stateFromStores;
      if (canManageUserResult) {
        canManageUserResult = null != user;
      }
      if (canManageUserResult) {
        canManageUserResult = outer1_18.canManageUser(outer1_21.MANAGE_NICKNAMES, user, stateFromStores);
      }
      obj.canChangeNick = canManageUserResult;
      obj.canManageRoles = outer1_18.can(outer1_21.MANAGE_ROLES, stateFromStores);
      let canManageUserResult1 = null != stateFromStores;
      if (canManageUserResult1) {
        canManageUserResult1 = null != user;
      }
      if (canManageUserResult1) {
        canManageUserResult1 = outer1_18.canManageUser(outer1_21.KICK_MEMBERS, user, stateFromStores);
      }
      obj.canKick = canManageUserResult1;
      let canManageUserResult2 = null != stateFromStores;
      if (canManageUserResult2) {
        canManageUserResult2 = null != user;
      }
      if (canManageUserResult2) {
        canManageUserResult2 = outer1_18.canManageUser(outer1_21.BAN_MEMBERS, user, stateFromStores);
      }
      obj.canBan = canManageUserResult2;
      let id;
      if (null != stateFromStores) {
        id = stateFromStores.id;
      }
      let id1;
      if (null != user) {
        id1 = user.id;
      }
      const items = [outer1_19, outer1_17, outer1_18];
      obj.canDisableCommunication = guildId(stateFromStores[44]).canToggleCommunicationDisableOnUser(id, id1, items);
      return obj;
    });
    obj7 = require("_isNativeReflectConstruct");
    items5 = [];
    items5[0] = userId;
    subscribeGuildMembers = obj7.useSubscribeGuildMembers({ [guildId]: items5 }, "GuildSettingsModalMemberEdit");
    [][0] = navigation;
    tmp10 = null;
    if (null != currentUser) {
      tmp10 = null;
      if (null != stateFromStores) {
        tmp10 = null;
        if (null != user) {
          tmp11 = jsxs;
          tmp12 = Fragment;
          obj = {};
          tmp13 = jsx;
          tmp14 = f85436;
          obj1 = {};
          tmp15 = obj1;
          tmp16 = stateFromStoresObject1;
          merged = Object.assign(stateFromStoresObject1);
          str = "onClose";
          obj1["onClose"] = onClose;
          str2 = "handleSuccessfulRemoval";
          obj1["handleSuccessfulRemoval"] = tmp9;
          str3 = "guild";
          obj1["guild"] = stateFromStores;
          str4 = "sortedGuildRoles";
          obj1["sortedGuildRoles"] = stateFromStores1;
          str5 = "roleStyle";
          obj1["roleStyle"] = stateFromStores2;
          str6 = "currentUser";
          obj1["currentUser"] = currentUser;
          str7 = "user";
          obj1["user"] = user;
          str8 = "navigation";
          obj1["navigation"] = navigation;
          str9 = "contentContainerStyle";
          obj1["contentContainerStyle"] = contentContainerStyle;
          items6 = [, ];
          items6[0] = jsx(f85436, obj1);
          tmp18 = jsx;
          tmp19 = guildId;
          tmp20 = closure_3;
          num = 46;
          items6[1] = jsx(require("NavScrim").NavScrim, {});
          obj.children = items6;
          tmp10 = jsxs(Fragment, obj);
        }
      }
    }
    return tmp10;
  }
}
({ StyleSheet, View: closure_10 } = get_ActivityIndicator);
({ isGuildOwner: closure_12, isGuildOwnerWithRequiredMfaLevel: closure_13 } = isGuildOwner);
({ Permissions: closure_21, GuildFeatures: closure_22, GuildSettingsSections: closure_23 } = ME);
({ jsx: closure_24, jsxs: closure_25, Fragment: closure_26 } = jsxProd);
_createForOfIteratorHelperLoose = { form: { flex: 1 }, formContent: { paddingTop: 16 } };
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_PADDING };
_createForOfIteratorHelperLoose.stackPadding = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.userInfo = { height: 63 };
_createForOfIteratorHelperLoose.avatar = { width: 40, height: 40 };
_createForOfIteratorHelperLoose.rowLabel = { flexDirection: "row" };
_createForOfIteratorHelperLoose.ctaButton = { marginTop: 8, marginBottom: 8 };
_createForOfIteratorHelperLoose.actionButtonLeft = { marginRight: 0, marginLeft: 0, paddingRight: 0, paddingLeft: 16 };
_createForOfIteratorHelperLoose.actionButtonRight = { marginRight: 0, marginLeft: 0, paddingRight: 16, paddingLeft: 0 };
_createForOfIteratorHelperLoose.actionButtonContainer = { flexBasis: "auto" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createLegacyClassComponentStyles(_createForOfIteratorHelperLoose);
const styles = StyleSheet.create({ labelContainer: { flexDirection: "row", alignItems: "center" }, roleDot: { marginEnd: 4 } });
const tmp7 = ((PureComponent) => {
  class RolesList {
    constructor(arg0) {
      tmp = outer1_4(this, RolesList);
      items = [];
      items[0] = PureComponent;
      tmp2 = outer1_31(this, RolesList, items);
      tmp2.state = { isEditingProp: PureComponent.isEditing };
      return tmp2;
    }
  }
  callback3(RolesList, PureComponent);
  let obj = {
    key: "render",
    value() {
      let closure_1;
      let closure_2;
      let currentUserId;
      let sortedGuildRoles;
      const props = this.props;
      const guild = props.guild;
      ({ sortedGuildRoles, roles: closure_1, roleStyle: closure_2, currentUserId } = props);
      const onToggleRole = props.onToggleRole;
      if (props.isEditing) {
        const highestRole = outer1_2(outer1_3[20]).getHighestRole(guild, currentUserId);
        let obj2 = outer1_2(outer1_3[20]);
        const found = outer1_1(outer1_3[21])(sortedGuildRoles).filter((arg0) => !outer2_14(arg0));
        const found1 = found.filter((managed) => !managed.managed);
        const found2 = found1.filter((role) => outer2_2(outer2_3[20]).isRoleHigher(guild, currentUserId, _isNativeReflectConstruct, role));
        const arr4 = outer1_1(outer1_3[21])(sortedGuildRoles);
        let valueResult = found2.map((id) => {
          let closure_0 = id;
          const tmp = -1 !== closure_1.indexOf(id.id);
          closure_1 = tmp;
          let obj = { checked: tmp };
          obj = { style: outer2_28.labelContainer };
          let tmp5 = "dot" === closure_2;
          if (tmp5) {
            tmp5 = null != id.colorString;
          }
          if (tmp5) {
            obj = {};
            ({ colorString: obj3.color, colorStrings: obj3.colors } = id);
            obj.containerStyles = outer2_28.roleDot;
            tmp5 = outer2_24(RolesList(outer2_3[23]).RoleDot, obj);
          }
          const items = [tmp5, ];
          const obj1 = { variant: "text-md/semibold" };
          let tmp12;
          if (null != id.colorString) {
            if ("username" === closure_2) {
              const obj2 = { color: id.colorString };
              tmp12 = obj2;
            }
          }
          obj1.style = tmp12;
          obj1.children = id.name;
          items[1] = outer2_24(RolesList(outer2_3[24]).Text, obj1);
          obj.children = items;
          obj.label = outer2_25(outer2_10, obj);
          obj.onPress = function onPress() {
            return outer1_4(id.id, !closure_1);
          };
          return outer2_24(RolesList(outer2_3[22]).TableCheckboxRow, obj, id.id);
        }).value();
        const iter2 = found2.map((id) => {
          let closure_0 = id;
          const tmp = -1 !== closure_1.indexOf(id.id);
          closure_1 = tmp;
          let obj = { checked: tmp };
          obj = { style: outer2_28.labelContainer };
          let tmp5 = "dot" === closure_2;
          if (tmp5) {
            tmp5 = null != id.colorString;
          }
          if (tmp5) {
            obj = {};
            ({ colorString: obj3.color, colorStrings: obj3.colors } = id);
            obj.containerStyles = outer2_28.roleDot;
            tmp5 = outer2_24(RolesList(outer2_3[23]).RoleDot, obj);
          }
          const items = [tmp5, ];
          const obj1 = { variant: "text-md/semibold" };
          let tmp12;
          if (null != id.colorString) {
            if ("username" === closure_2) {
              const obj2 = { color: id.colorString };
              tmp12 = obj2;
            }
          }
          obj1.style = tmp12;
          obj1.children = id.name;
          items[1] = outer2_24(RolesList(outer2_3[24]).Text, obj1);
          obj.children = items;
          obj.label = outer2_25(outer2_10, obj);
          obj.onPress = function onPress() {
            return outer1_4(id.id, !closure_1);
          };
          return outer2_24(RolesList(outer2_3[22]).TableCheckboxRow, obj, id.id);
        });
      } else {
        let arr = outer1_1(outer1_3[21])(sortedGuildRoles);
        const found3 = arr.filter((id) => closure_1.includes(id.id));
        valueResult = found3.map((colorString) => {
          let obj = {};
          obj = { style: outer2_28.labelContainer };
          let tmp4 = "dot" === closure_2;
          if (tmp4) {
            tmp4 = null != colorString.colorString;
          }
          if (tmp4) {
            obj = {};
            ({ colorString: obj3.color, colorStrings: obj3.colors } = colorString);
            obj.containerStyles = outer2_28.roleDot;
            tmp4 = outer2_24(RolesList(outer2_3[23]).RoleDot, obj);
          }
          const items = [tmp4, ];
          const obj1 = { variant: "text-md/semibold" };
          let tmp11;
          if (null != colorString.colorString) {
            if ("username" === closure_2) {
              const obj2 = { color: colorString.colorString };
              tmp11 = obj2;
            }
          }
          obj1.style = tmp11;
          obj1.children = colorString.name;
          items[1] = outer2_24(RolesList(outer2_3[24]).Text, obj1);
          obj.children = items;
          obj.label = outer2_25(outer2_10, obj);
          return outer2_24(RolesList(outer2_3[25]).TableRow, obj, colorString.id);
        }).value();
        let obj = {};
        const intl = RolesList(outer1_3[26]).intl;
        obj.label = intl.string(RolesList(outer1_3[26]).t["+riKdA"]);
        obj.onPress = tmp;
        arr = valueResult.push(outer1_24(RolesList(outer1_3[25]).TableRow, obj, "addition"));
        const iter = found3.map((colorString) => {
          let obj = {};
          obj = { style: outer2_28.labelContainer };
          let tmp4 = "dot" === closure_2;
          if (tmp4) {
            tmp4 = null != colorString.colorString;
          }
          if (tmp4) {
            obj = {};
            ({ colorString: obj3.color, colorStrings: obj3.colors } = colorString);
            obj.containerStyles = outer2_28.roleDot;
            tmp4 = outer2_24(RolesList(outer2_3[23]).RoleDot, obj);
          }
          const items = [tmp4, ];
          const obj1 = { variant: "text-md/semibold" };
          let tmp11;
          if (null != colorString.colorString) {
            if ("username" === closure_2) {
              const obj2 = { color: colorString.colorString };
              tmp11 = obj2;
            }
          }
          obj1.style = tmp11;
          obj1.children = colorString.name;
          items[1] = outer2_24(RolesList(outer2_3[24]).Text, obj1);
          obj.children = items;
          obj.label = outer2_25(outer2_10, obj);
          return outer2_24(RolesList(outer2_3[25]).TableRow, obj, colorString.id);
        });
      }
      obj = {};
      const intl2 = RolesList(outer1_3[26]).intl;
      obj.title = intl2.string(RolesList(outer1_3[26]).t["LPJmL/"]);
      obj.hasIcons = false;
      obj.children = valueResult;
      return outer1_24(RolesList(outer1_3[27]).TableRowGroup, obj);
    }
  };
  let items = [obj];
  obj = {
    key: "getDerivedStateFromProps",
    value(isEditing, isEditingProp) {
      isEditing = isEditing.isEditing;
      let tmp = null;
      if (isEditingProp.isEditingProp !== isEditing) {
        const obj = { isEditingProp: isEditing };
        tmp = obj;
      }
      return tmp;
    }
  };
  const items1 = [obj];
  return callback(RolesList, items, items1);
})(importAllResult.PureComponent);
let closure_29 = tmp7;
tmp7.defaultProps = { roles: [] };
let tmp8 = ((PureComponent) => {
  class GuildSettingsModalMemberEdit {
    constructor(arg0) {
      items = [...arguments];
      nick = undefined;
      tmp2 = outer1_4(this, GuildSettingsModalMemberEdit);
      items1 = [...items];
      tmp3 = outer1_31(this, GuildSettingsModalMemberEdit, items1);
      GuildSettingsModalMemberEdit = tmp3;
      obj = {};
      member = tmp3.props.member;
      if (null != member) {
        nick = member.nick;
      }
      obj.nick = nick;
      tmp3.state = obj;
      tmp3.handleChangeNickname = (nick) => {
        tmp3.setState({ nick });
      };
      tmp3.handleSaveNickname = () => {
        if (null != tmp3.state.nick) {
          let id = null;
          if (tmp3.props.currentUser.id !== tmp3.props.user.id) {
            id = tmp3.props.user.id;
          }
          outer2_1(outer2_3[28]).changeNickname(tmp3.props.guild.id, id, tmp3.state.nick);
          const obj = outer2_1(outer2_3[28]);
        }
      };
      tmp3.handleStartEditingRoles = () => {
        outer2_1(outer2_3[28]).startEditingRoles(tmp3.props.guild.id, tmp3.props.user.id);
      };
      tmp3.handleToggleRole = (arg0, arg1) => {
        outer2_1(outer2_3[28]).toggleRole(arg0, arg1);
      };
      tmp3.handleSetCommunicationDisabled = () => {
        let guild;
        let user;
        ({ guild, user } = tmp3.props);
        let obj = GuildSettingsModalMemberEdit(outer2_3[29]);
        obj = { guildId: guild.id, userId: user.id };
        const result = obj.openDisableCommunication(obj);
      };
      tmp3.handleClearCommunicationDisabled = () => {
        let guild;
        let user;
        ({ guild, user } = tmp3.props);
        let obj = GuildSettingsModalMemberEdit(outer2_3[29]);
        obj = { guildId: guild.id, userId: user.id };
        const result = obj.openEnableCommunication(obj);
      };
      tmp3.handleKick = () => {
        const props = tmp3.props;
        const navigation = props.navigation;
        navigation.push(outer2_23.MEMBER_KICK, { userId: props.user.id, onKick: props.handleSuccessfulRemoval });
      };
      tmp3.handleBan = () => {
        const props = tmp3.props;
        const navigation = props.navigation;
        navigation.push(outer2_23.MEMBER_BAN, { userId: props.user.id, onBan: props.handleSuccessfulRemoval });
      };
      tmp3.handleTransferOwnership = () => {
        const props = tmp3.props;
        const guild = props.guild;
        const features = guild.features;
        if (!features.has(outer2_22.VERIFIED)) {
          const features2 = guild.features;
          if (!features2.has(outer2_22.PARTNERED)) {
            outer2_1(outer2_3[31]).open(guild, props.user);
            const obj = outer2_1(outer2_3[31]);
            tmp3 = outer2_3;
          }
        }
        const result = GuildSettingsModalMemberEdit(outer2_3[30]).transferOwnershipProtected();
      };
      tmp3.handleSaveMemberRoles = () => {
        if (null != tmp3.props.editRoles) {
          outer2_1(outer2_3[28]).updateMemberRoles(tmp3.props.guild.id, tmp3.props.user.id, tmp3.props.editRoles);
          const obj = outer2_1(outer2_3[28]);
        }
      };
      tmp3.handleCancelEditMemberRoles = () => {
        outer2_1(outer2_3[28]).stopEditingRoles();
      };
      return tmp3;
    }
  }
  callback3(GuildSettingsModalMemberEdit, PureComponent);
  let obj = {
    key: "componentDidMount",
    value() {
      this.updateNavigator();
    }
  };
  let items = [obj, , , ];
  obj = {
    key: "componentDidUpdate",
    value(arg0) {
      this.updateNavigator(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "updateNavigator",
    value(submitting) {
      let isEditing;
      let navigation;
      let onClose;
      const self = this;
      ({ submitting, isEditing, navigation, onClose } = this.props);
      if (!tmp) {
        let setOptionsResult = {};
        if (submitting) {
          let fn = () => null;
        } else if (isEditing) {
          fn = () => {
            const obj = {};
            const intl = GuildSettingsModalMemberEdit(outer2_3[26]).intl;
            obj.text = intl.string(GuildSettingsModalMemberEdit(outer2_3[26]).t["ETE/oC"]);
            obj.onPress = self.handleCancelEditMemberRoles;
            return outer2_24(GuildSettingsModalMemberEdit(outer2_3[32]).HeaderActionButton, obj);
          };
        } else if (null != onClose) {
          fn = GuildSettingsModalMemberEdit(outer1_3[33]).getHeaderCloseButton(onClose);
          const obj2 = GuildSettingsModalMemberEdit(outer1_3[33]);
        }
        setOptionsResult.headerLeft = fn;
        if (submitting) {
          let fn2 = () => outer2_24(GuildSettingsModalMemberEdit(outer2_3[33]).HeaderSubmittingIndicator, {});
        } else if (isEditing) {
          fn2 = () => {
            const obj = {};
            const intl = GuildSettingsModalMemberEdit(outer2_3[26]).intl;
            obj.text = intl.string(GuildSettingsModalMemberEdit(outer2_3[26]).t["R3BPH+"]);
            obj.onPress = self.handleSaveMemberRoles;
            return outer2_24(GuildSettingsModalMemberEdit(outer2_3[32]).HeaderActionButton, obj);
          };
        }
        setOptionsResult.headerRight = fn2;
        setOptionsResult.headerTitle = function headerTitle() {
          let obj = {};
          const intl = GuildSettingsModalMemberEdit(outer2_3[26]).intl;
          obj = { user: outer2_1(outer2_3[34]).getName(self.props.user) };
          obj.title = intl.formatToPlainString(GuildSettingsModalMemberEdit(outer2_3[26]).t.v7odxj, obj);
          return outer2_24(GuildSettingsModalMemberEdit(outer2_3[33]).NavigatorHeader, obj);
        };
        setOptionsResult = navigation.setOptions(setOptionsResult);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "render",
    value() {
      let canBan;
      let canChangeNick;
      let canDisableCommunication;
      let canKick;
      let canManageRoles;
      let currentUser;
      let editRoles;
      let guild;
      let isEditing;
      let member;
      let user;
      const self = this;
      const tmp = outer1_27(this.context);
      const nick = this.state.nick;
      ({ user, guild, member, editRoles, currentUser, isEditing, canChangeNick, canManageRoles, canKick, canBan, canDisableCommunication } = this.props);
      if (null == member) {
        return null;
      } else {
        let obj = { style: tmp.rowLabel };
        obj = { variant: "text-sm/medium", children: outer1_1(outer1_3[34]).getUserTag(user) };
        const items = [outer1_24(GuildSettingsModalMemberEdit(outer1_3[24]).Text, obj), ];
        let tmp9 = null;
        if (user.bot) {
          obj = { verified: user.isVerifiedBot() };
          tmp9 = outer1_24(outer1_1(outer1_3[35]), obj);
          const tmp8 = outer1_1(outer1_3[35]);
        }
        items[1] = tmp9;
        obj.children = items;
        if (null == member) {
          let bot = outer1_12(guild, user);
          if (!bot) {
            bot = !outer1_13(guild, currentUser);
          }
          if (!bot) {
            bot = user.bot;
          }
          let tmp25;
          if (!bot) {
            let obj1 = { hasIcons: false };
            const obj2 = { variant: "danger" };
            const intl2 = GuildSettingsModalMemberEdit(outer1_3[26]).intl;
            obj2.label = intl2.string(GuildSettingsModalMemberEdit(outer1_3[26]).t.Z5s7PM);
            obj2.onPress = self.handleTransferOwnership;
            obj1.children = outer1_24(GuildSettingsModalMemberEdit(outer1_3[25]).TableRow, obj2);
            tmp25 = outer1_24(GuildSettingsModalMemberEdit(outer1_3[27]).TableRowGroup, obj1);
          }
          const obj3 = { style: tmp.form };
          const items1 = [tmp.formContent, self.props.contentContainerStyle];
          obj3.contentContainerStyle = items1;
          const obj4 = { style: tmp.stackPadding, spacing: outer1_1(outer1_3[19]).space.PX_24 };
          let obj5 = { hasIcons: true };
          const obj6 = {};
          let obj7 = { style: tmp.avatar, user, guildId: guild.id };
          obj6.icon = outer1_24(GuildSettingsModalMemberEdit(outer1_3[23]).Avatar, obj7);
          obj6.label = tmp10;
          obj5.children = outer1_24(GuildSettingsModalMemberEdit(outer1_3[25]).TableRow, obj6);
          const items2 = [outer1_24(GuildSettingsModalMemberEdit(outer1_3[27]).TableRowGroup, obj5), , , , , , ];
          if (!canChangeNick) {
            canChangeNick = currentUser.id === user.id;
          }
          if (canChangeNick) {
            const obj8 = {};
            const intl3 = GuildSettingsModalMemberEdit(outer1_3[26]).intl;
            obj8.label = intl3.string(GuildSettingsModalMemberEdit(outer1_3[26]).t["621LJD"]);
            let str3 = "";
            if (null != nick) {
              str3 = nick;
            }
            obj8.value = str3;
            const intl4 = GuildSettingsModalMemberEdit(outer1_3[26]).intl;
            obj8.placeholder = intl4.string(GuildSettingsModalMemberEdit(outer1_3[26]).t.h7UKXj);
            ({ handleChangeNickname: obj16.onChange, handleSaveNickname: obj16.onBlur } = self);
            obj8.maxLength = 32;
            obj8.errorMessage = tmp3;
            canChangeNick = outer1_24(GuildSettingsModalMemberEdit(outer1_3[39]).TextInput, obj8);
            const tmp38 = outer1_24;
          }
          items2[1] = canChangeNick;
          if (canManageRoles) {
            const obj9 = { guild, sortedGuildRoles: tmp2 };
            if (!isEditing) {
              editRoles = member.roles;
            }
            if (null == editRoles) {
              editRoles = [];
            }
            obj9.roles = editRoles;
            obj9.roleStyle = tmp4;
            obj9.currentUserId = currentUser.id;
            obj9.isEditing = isEditing;
            ({ handleToggleRole: obj17.onToggleRole, handleStartEditingRoles: obj17.onStartEditing } = self);
            canManageRoles = outer1_24(outer1_29, obj9);
            const tmp43 = outer1_24;
            const tmp44 = outer1_29;
          }
          items2[2] = canManageRoles;
          if (canDisableCommunication) {
            canDisableCommunication = null;
          }
          items2[3] = canDisableCommunication;
          if (canKick) {
            const obj10 = { hasIcons: false };
            const obj11 = { variant: "danger" };
            const intl5 = GuildSettingsModalMemberEdit(outer1_3[26]).intl;
            const obj12 = { user: outer1_1(outer1_3[34]).getName(user) };
            obj11.label = intl5.formatToPlainString(GuildSettingsModalMemberEdit(outer1_3[26]).t.yOiJHB, obj12);
            obj11.onPress = self.handleKick;
            obj10.children = outer1_24(GuildSettingsModalMemberEdit(outer1_3[25]).TableRow, obj11);
            canKick = outer1_24(GuildSettingsModalMemberEdit(outer1_3[27]).TableRowGroup, obj10);
            const obj21 = outer1_1(outer1_3[34]);
          }
          items2[4] = canKick;
          if (canBan) {
            const obj13 = { hasIcons: false };
            const obj14 = { variant: "danger" };
            const intl6 = GuildSettingsModalMemberEdit(outer1_3[26]).intl;
            const obj15 = { user: outer1_1(outer1_3[34]).getName(user) };
            obj14.label = intl6.formatToPlainString(GuildSettingsModalMemberEdit(outer1_3[26]).t.TuAZuW, obj15);
            obj14.onPress = self.handleBan;
            obj13.children = outer1_24(GuildSettingsModalMemberEdit(outer1_3[25]).TableRow, obj14);
            canBan = outer1_24(GuildSettingsModalMemberEdit(outer1_3[27]).TableRowGroup, obj13);
            const obj25 = outer1_1(outer1_3[34]);
          }
          items2[5] = canBan;
          items2[6] = tmp25;
          obj4.children = items2;
          obj3.children = outer1_25(GuildSettingsModalMemberEdit(outer1_3[38]).Stack, obj4);
          return outer1_24(GuildSettingsModalMemberEdit(outer1_3[37]).Form, obj3);
        } else {
          obj1 = GuildSettingsModalMemberEdit(outer1_3[36]);
          let name = outer1_3;
          const result = obj1.isMemberCommunicationDisabled(member);
          const TableRowGroup = GuildSettingsModalMemberEdit(outer1_3[27]).TableRowGroup;
          const obj16 = { hasIcons: false };
          const TableRow = GuildSettingsModalMemberEdit(outer1_3[25]).TableRow;
          let obj17 = { variant: "danger" };
          const intl = GuildSettingsModalMemberEdit(outer1_3[26]).intl;
          const formatToPlainString = intl.formatToPlainString;
          let handleClearCommunicationDisabled = GuildSettingsModalMemberEdit(outer1_3[26]).t;
          if (result) {
            const obj18 = {};
            obj7 = outer1_1(name[34]);
            name = obj7.getName(user);
            obj18.user = name;
            obj17.label = formatToPlainString(handleClearCommunicationDisabled.RuL6o7, obj18);
            handleClearCommunicationDisabled = self.handleClearCommunicationDisabled;
            obj17.onPress = handleClearCommunicationDisabled;
            obj17 = tmp18(TableRow, obj17);
            obj16.children = obj17;
            let tmp15Result = tmp15(TableRowGroup, obj16);
          } else {
            const obj19 = {};
            obj5 = outer1_1(name[34]);
            obj19.user = obj5.getName(user);
            obj17.label = formatToPlainString(handleClearCommunicationDisabled.FN7NIS, obj19);
            obj17.onPress = self.handleSetCommunicationDisabled;
            obj16.children = tmp18(TableRow, obj17);
            tmp15Result = tmp15(TableRowGroup, obj16);
          }
        }
        const obj28 = outer1_1(outer1_3[34]);
      }
    }
  };
  return callback(GuildSettingsModalMemberEdit, items);
})(importAllResult.PureComponent);
let closure_30 = tmp8;
tmp8.contextType = require("ManaContext").ThemeContext;
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMemberEdit.tsx");

export default function MemberModalEdit(onClose) {
  let guildId;
  let userId;
  onClose = onClose.onClose;
  const onRemove = onClose.onRemove;
  ({ guildId, userId } = onClose);
  const tmp = onRemove(5450)(guildId);
  const importAll = tmp;
  const items = [onClose, onRemove, tmp];
  const memo = importAllResult.useMemo(() => (function getScreens(closure_2, onClose, onRemove) {
    let closure_0 = closure_2;
    let closure_1 = onClose;
    closure_2 = onRemove;
    let obj = {
      render(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj["onClose"] = closure_1;
        obj["guildId"] = closure_0;
        return outer3_24(outer3_33, obj);
      }
    };
    obj = {
      headerTitle() {
        return null;
      },
      render(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj["guildId"] = closure_0;
        obj["onKick"] = closure_2;
        return outer3_24(onRemove(outer3_3[47]), obj);
      }
    };
    obj = {
      headerTitle() {
        return null;
      },
      render(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj["guildId"] = closure_0;
        obj["onBan"] = closure_2;
        return outer3_24(onRemove(outer3_3[48]), obj);
      }
    };
    return { [outer2_23.MEMBER_EDIT]: obj, [outer2_23.MEMBER_KICK]: obj, [outer2_23.MEMBER_BAN]: obj };
  })(closure_2, onClose, onRemove), items);
  let obj = { screens: memo, initialRouteName: constants.MEMBER_EDIT, initialRouteStack: items1 };
  obj = { name: constants.MEMBER_EDIT, params: { userId } };
  items1 = [obj];
  return callback4(onClose(5519).Navigator, obj);
};
export { GuildSettingsModalMemberEditScene };
