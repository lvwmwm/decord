// Module ID: 17408
// Function ID: 17409
// Name: GuildSettingsRoleCreateModal
// Dependencies: [5, 32, 19, 17, 2063, 2102, 1372, 9049, 17409, 1074, 21, 4836, 5994, 576, 1241, 5016, 4832, 1115, 17407, 504, 38, 4474, 1485, 6043, 5936, 5832, 4527, 17406, 4800, 15927, 1981, 5279, 6024, 5999, 5917, 14154, 1092, 5281, 17413, 17414, 9048, 17415, 6402, 5266, 5275, 6460, 5298, 6421, 2]
// Exports: default

// Module 17408 (GuildSettingsRoleCreateModal)
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 576 */;
import intl9 from "intl" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import GuildRecord from "GuildRecord" /* 2063 */;
import PermissionUtilsAll from "PermissionUtils" /* 4474 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5016 */;
import react_native from "react-native" /* 5275 */;
import useMountEffectDefault from "useMountEffect" /* 5298 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5832 */;
import NavigatorHeader from "NavigatorHeader" /* 5936 */;
import NavigatorConstants from "NavigatorConstants" /* 5994 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9048 */;
import GuildSettingsRoleCreateModalActionCreatorsDefault from "GuildSettingsRoleCreateModalActionCreators" /* 17407 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import GuildRoleStore from "GuildRoleStore" /* 2102 */;
import UserStore from "UserStore" /* 1372 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9049 */;
import GuildSettingsRoleConstants from "GuildSettingsRoleConstants" /* 17409 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c4, currentUser, navigation, role, roles, step;

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let map1;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
const f107987 = () => props.getProps().guild;
const f107988 = () => props.getProps();
function RoleCreateScene() {
  let Button;
  let TableRow;
  let closure_4;
  let color;
  let constants4;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let items4;
  let items5;
  let items6;
  let obj11;
  let obj13;
  let obj7;
  let obj8;
  let onSelect;
  let str;
  let tmp12;
  let tmp8;
  let tmp = closure_24();
  const tmp2 = navigation;
  const tmp3 = color;
  let obj = navigation(color[22]);
  navigation = obj.useNavigation();
  let obj2 = navigation(color[19]);
  const items = [GuildSettingsStore];
  const stateFromStores = obj2.useStateFromStores(items, f107987);
  stateFromStores(color[20])(null != stateFromStores, "useGuildSettingsStoreGuild: Guild cannot be null");
  const useState = onSelect.useState;
  const intl = navigation(color[17]).intl;
  [str, tmp8] = useState(intl.string(navigation(color[17]).t.QBMHvB));
  [color, _asyncToGenerator] = onSelect.useState(closure_17);
  let tmp11 = _slicedToArray(onSelect.useState(false), 2);
  [tmp12, _slicedToArray] = tmp11;
  let nextButtonFloating = stateFromStores(color[23])();
  const items1 = [navigation, stateFromStores];
  const layoutEffect = onSelect.useLayoutEffect(() => {
    let obj2;
    let obj = {
      headerLeft: obj2.getHeaderCloseButton(() => {
        id = id.id;
        const FLOW_DISMISSED = constants4.FLOW_DISMISSED;
        const tmp = constants4[constants3.STEP_DISPLAY];
        const track = stateFromStores(first[14]).track;
        const USER_FLOW_TRANSITION = constants.USER_FLOW_TRANSITION;
        const obj = { flow_type: constants2.GUILD_ROLE_CREATION_MODAL, from_step: tmp, to_step: FLOW_DISMISSED, skip: false };
        stateFromStores(first[14]);
        const obj2 = navigation(first[15]);
        const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(id));
        track(USER_FLOW_TRANSITION, obj);
        const obj3 = stateFromStores(first[18]);
        obj3.close();
      }),
      headerTitle() {
        const obj = { step: constants.STEP_DISPLAY };
        return closure_1_21(closure_1_27, obj);
      }
    };
    const setOptions = navigation.setOptions;
    obj2 = NavigatorHeader;
    setOptions(obj);
  }, items1);
  onSelect = onSelect.useCallback((arg0) => {
    closure_4(arg0);
  }, []);
  const items2 = [color, stateFromStores.id, str, navigation];
  const items3 = [color, onSelect];
  const callback1 = onSelect.useCallback(_asyncToGenerator(async (arg0, value) => {
    let c3;
    let closure_0;
    let closure_1;
    let tmp4;
    if (c4 === 2) {
      c4 = 3;
      str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else {
      let tmp26 = tmp2;
      const flag = true;
      const flag2 = false;
      if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj4 = { value, done: true };
          return obj4;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c2;
        try {
          c4 = 2;
          if (0 === color) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              let obj5 = { value, done: true };
              return obj5;
            } else {
              c2 = 1;
              let tmp16 = _slicedToArray(true);
              let num5 = first;
              if (first === closure_1_17) {
                num5 = 0;
              }
              let obj3 = tmp2(color[25]);
              const tmp20 = stateFromStores;
              const tmp21 = str;
              color = 2;
              c4 = 1;
              obj6 = { value: obj3.createRole(stateFromStores.id, str, num5), done: false };
              return obj6;
            }
          } else {
            if (1 === tmp4) {
              c2 = 0;
              const tmp11 = closure_129_5(false);
              let obj2 = tmp(color[26]);
              const result = obj2.roleCreateFailedToast();
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 0;
              c4 = 3;
              let obj = { value, done: true };
              return obj;
            } else {
              const result1 = GuildSettingsStore.addConditionalChangeListener(() => {
                let guild;
                let selectedRoleId;
                props = props.getProps();
                ({ guild, selectedRoleId } = props);
                const obj = props;
                if (null != guild) {
                  if (null != selectedRoleId) {
                    role = role.getRole(guild.id, selectedRoleId);
                  }
                }
                if (null != selectedRoleId) {
                  if (null != role) {
                    if (null != guild) {
                      const obj4 = navigation(c3[26]);
                      obj4.roleCreatedToast();
                      const obj5 = navigation(c3[27]);
                      obj5.setRoleJustCreated(true);
                      let STEP_MEMBERS = constants4.STEP_PERMISSIONS;
                      const guild2 = obj.getProps().guild;
                      stateFromStores(c3[20])(null != guild2, "shouldSkipPermissions: Guild cannot be null");
                      currentUser = currentUser.getCurrentUser();
                      const obj2 = { permission: constants3.ADMINISTRATOR, user: currentUser, context: guild2 };
                      const tmp26 = closure_2_9(guild2, currentUser);
                      obj6 = c2(c3[21]);
                      const tmp16 = navigation;
                      const tmp4 = !tmp26 && !obj6.can(obj2);
                      if (tmp4) {
                        STEP_MEMBERS = tmp20.STEP_MEMBERS;
                      }
                      closure_1_0.push(STEP_MEMBERS);
                      const id = guild.id;
                      const obj3 = { flow_type: constants2.GUILD_ROLE_CREATION_MODAL, from_step: closure_2_26[constants4.STEP_DISPLAY], to_step: closure_2_26[STEP_MEMBERS], skip: false };
                      const track = tmp21(c3[14]).track;
                      const USER_FLOW_TRANSITION = constants.USER_FLOW_TRANSITION;
                      stateFromStores(c3[14]);
                      const tmp16Result = tmp16(c3[15]);
                      const merged = Object.assign(tmp16Result.collectGuildAnalyticsMetadata(id));
                      track(USER_FLOW_TRANSITION, obj3);
                      return false;
                    }
                  }
                }
                return true;
              });
              c2 = 0;
            }
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp22) {
          if (0 === c2) {
            c4 = 3;
            throw tmp22;
          } else {
            color = 1;
          }
        }
      }
    }
  }), items2);
  let obj3 = { title: intl2.string(navigation(color[17]).t["8pxAPp"]), subtitle: intl3.string(navigation(color[17]).t["JubQz/"]), children: items6 };
  const callback2 = onSelect.useCallback(() => {
    metroImportAll.dismiss();
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { color, onSelect };
    obj.openLazy(asyncRequire(15927, dependencyMap.paths), "RoleColorPicker", obj2);
  }, items3);
  let tmp17 = closure_22;
  intl2 = navigation(color[17]).intl;
  intl3 = navigation(color[17]).intl;
  let obj4 = { spacing: stateFromStores(color[13]).space.PX_24, style: tmp.sceneInner, children: items4 };
  const Stack = navigation(color[31]).Stack;
  let obj5 = { label: intl4.string(navigation(color[17]).t.dLbkBk), description: intl5.string(navigation(color[17]).t.m4j44b), required: true, value: str, onChange: tmp8, maxLength, autoFocus: true, autoComplete: "off" };
  const TextInput = navigation(color[32]).TextInput;
  intl4 = navigation(color[17]).intl;
  intl5 = navigation(color[17]).intl;
  items4 = [closure_21(TextInput, obj5), ];
  obj6 = { helperText: intl6.string(navigation(color[17]).t["9TMIgc"]), hasIcons: false, children: closure_21(TableRow, obj7) };
  const TableRowGroup = navigation(color[33]).TableRowGroup;
  intl6 = navigation(color[17]).intl;
  obj7 = { label: intl7.string(navigation(color[17]).t["5NC5YW"]), onPress: callback2, arrow: true, trailing: closure_22(closure_7, obj8) };
  TableRow = navigation(color[34]).TableRow;
  intl7 = navigation(color[17]).intl;
  let tmp20 = closure_7;
  obj8 = { style: tmp.colorTrailing, children: items5 };
  items5 = [, ];
  const obj9 = { color, style: tmp.colorBlock };
  items5[0] = closure_21(stateFromStores(color[35]), obj9);
  const obj10 = { variant: "text-sm/medium", children: obj11.int2hex(color) };
  const Text = navigation(color[16]).Text;
  obj11 = navigation(color[36]);
  items5[1] = closure_21(Text, obj10);
  items4[1] = closure_21(TableRowGroup, obj6);
  items6 = [closure_22(Stack, obj4), ];
  const items7 = [tmp.nextButton, ];
  const tmp18 = ModalScene;
  if (nextButtonFloating) {
    nextButtonFloating = tmp.nextButtonFloating;
  }
  items7[1] = nextButtonFloating;
  const obj12 = { style: items7, children: closure_21(Button, obj13) };
  obj13 = { loading: tmp12, disabled: tmp12, text: intl8.string(tmp2(tmp3[17]).t.CumH4u), onPress: callback1 };
  Button = tmp2(tmp3[37]).Button;
  if (!tmp12) {
    tmp12 = "" === str.trim();
  }
  intl8 = tmp2(tmp3[17]).intl;
  items6[1] = closure_21(tmp20, obj12);
  return tmp17(tmp18, obj3);
}
function RolePermissionTemplate() {
  let Button;
  let constants4;
  let intl;
  let intl2;
  let intl3;
  let items5;
  let obj7;
  let onSelect;
  let stateFromStores;
  let tmp = closure_24();
  let obj = navigation(onSelect[22]);
  navigation = obj.useNavigation();
  let obj2 = navigation(onSelect[19]);
  const items = [GuildSettingsStore];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, f107988);
  const guild = stateFromStoresObject.guild;
  const selectedRoleId = stateFromStoresObject.selectedRoleId;
  let tmp4 = stateFromStores(onSelect[20])(null != guild, "useGuildSettingsStoreGuildWithRole: Guild cannot be null");
  let obj3 = navigation(onSelect[19]);
  const items1 = [GuildRoleStore];
  stateFromStores = obj3.useStateFromStores(items1, () => {
    role = undefined;
    if (null != selectedRoleId) {
      role = role.getRole(guild.id, tmp);
    }
    return role;
  });
  stateFromStores(onSelect[20])(null != stateFromStores, "useGuildSettingsStoreGuildWithRole: Role cannot be null");
  const items2 = [navigation, guild.id];
  const layoutEffect = react.useLayoutEffect(() => {
    let obj2;
    let obj = {
      headerLeft: obj2.getHeaderCloseButton(() => {
        id = id.id;
        const FLOW_DISMISSED = constants4.FLOW_DISMISSED;
        const tmp = constants4[constants3.STEP_PERMISSIONS];
        const track = stateFromStores(callback[14]).track;
        const USER_FLOW_TRANSITION = constants.USER_FLOW_TRANSITION;
        const obj = { flow_type: constants2.GUILD_ROLE_CREATION_MODAL, from_step: tmp, to_step: FLOW_DISMISSED, skip: false };
        stateFromStores(callback[14]);
        const obj2 = navigation(callback[15]);
        const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(id));
        track(USER_FLOW_TRANSITION, obj);
        const obj3 = stateFromStores(callback[18]);
        obj3.close();
      }),
      headerTitle() {
        const obj = { step: constants.STEP_PERMISSIONS };
        return closure_1_21(closure_1_27, obj);
      }
    };
    const setOptions = navigation.setOptions;
    obj2 = NavigatorHeader;
    setOptions(obj);
  }, items2);
  const items3 = [guild.id, navigation, stateFromStores.id];
  onSelect = react.useCallback((arg0) => {
    const obj = GuildActionCreatorsDefault;
    const result = obj.updateRolePermissions(guild.id, stateFromStores.id, arg0);
    navigation.push(obj6.STEP_MEMBERS);
    const id = guild.id;
    const tmp3 = constants4[obj6.STEP_PERMISSIONS];
    const tmp4 = constants4[obj6.STEP_MEMBERS];
    const track = AnalyticsUtilsDefault.track;
    const USER_FLOW_TRANSITION = constants.USER_FLOW_TRANSITION;
    const obj2 = { flow_type: constants2.GUILD_ROLE_CREATION_MODAL, from_step: tmp3, to_step: tmp4, skip: false };
    AnalyticsUtilsDefault;
    const obj3 = AppAnalyticsUtils;
    const merged = Object.assign(obj3.collectGuildAnalyticsMetadata(id));
    track(USER_FLOW_TRANSITION, obj2);
  }, items3);
  const items4 = [onSelect];
  const obj4 = { hasSkipButton: false, title: intl.string(navigation(onSelect[17]).t.p0IwNA), subtitle: intl2.string(navigation(onSelect[17]).t.G529Hk), children: items5 };
  const callback1 = react.useCallback(() => {
    callback(map1[authStore2].permissions);
  }, items4);
  intl = navigation(onSelect[17]).intl;
  intl2 = navigation(onSelect[17]).intl;
  items5 = [, ];
  const obj5 = { onSelect, location: constants2.GUILD_ROLE_CREATION_MODAL, guildId: guild.id };
  items5[0] = closure_21(stateFromStores(onSelect[38]), obj5);
  obj6 = { style: tmp.sceneFooter, children: closure_21(Button, obj7) };
  obj7 = { text: intl3.string(navigation(onSelect[17]).t.CJm5V5), onPress: callback1 };
  Button = navigation(onSelect[37]).Button;
  intl3 = navigation(onSelect[17]).intl;
  items5[1] = closure_21(closure_7, obj6);
  return closure_22(ModalScene, obj4);
}
function RoleMembers() {
  let Button;
  let constants4;
  let intl;
  let intl2;
  let intl3;
  let items6;
  let obj9;
  let pendingAdditions;
  let props;
  let stateFromStores;
  let tmp15;
  let tmp = closure_24();
  const tmp2 = navigation;
  let obj = navigation(pendingAdditions[22]);
  navigation = obj.useNavigation();
  let obj2 = navigation(pendingAdditions[19]);
  const items = [GuildSettingsStore];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, f107988);
  const guild = stateFromStoresObject.guild;
  const selectedRoleId = stateFromStoresObject.selectedRoleId;
  stateFromStores(pendingAdditions[20])(null != guild, "useGuildSettingsStoreGuildWithRole: Guild cannot be null");
  let obj3 = navigation(pendingAdditions[19]);
  const items1 = [GuildRoleStore];
  stateFromStores = obj3.useStateFromStores(items1, () => {
    role = undefined;
    if (null != selectedRoleId) {
      role = role.getRole(guild.id, tmp);
    }
    return role;
  });
  stateFromStores(pendingAdditions[20])(null != stateFromStores, "useGuildSettingsStoreGuildWithRole: Role cannot be null");
  let tmp9 = stateFromStores(pendingAdditions[20])(null != stateFromStores, "Role cannot be null");
  const items2 = [navigation, guild.id];
  const layoutEffect = react.useLayoutEffect(() => {
    let obj2;
    let obj = {
      headerLeft: obj2.getHeaderCloseButton(() => {
        id = id.id;
        const FLOW_DISMISSED = constants4.FLOW_DISMISSED;
        const tmp = constants4[constants3.STEP_MEMBERS];
        const track = stateFromStores(first[14]).track;
        const USER_FLOW_TRANSITION = constants.USER_FLOW_TRANSITION;
        const obj = { flow_type: constants2.GUILD_ROLE_CREATION_MODAL, from_step: tmp, to_step: FLOW_DISMISSED, skip: false };
        stateFromStores(first[14]);
        const obj2 = navigation(first[15]);
        const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(id));
        track(USER_FLOW_TRANSITION, obj);
        const obj3 = stateFromStores(first[18]);
        obj3.close();
      }),
      headerTitle() {
        const obj = { step: constants.STEP_MEMBERS };
        return closure_1_21(closure_1_27, obj);
      }
    };
    const setOptions = navigation.setOptions;
    obj2 = NavigatorHeader;
    return setOptions(obj);
  }, items2);
  let nextButtonFloating = stateFromStores(pendingAdditions[23])();
  const items3 = [stateFromStores.id];
  const callback = react.useCallback((roles) => {
    roles = roles.roles;
    return !roles.includes(stateFromStores.id);
  }, items3);
  let obj4 = navigation(pendingAdditions[39]);
  const guildMembers = obj4.useGuildMembers(guild.id, callback);
  [pendingAdditions, tmp15] = react.useState({});
  const tmp16 = _slicedToArray(react.useState(false), 2);
  let closure_4 = tmp18;
  const items4 = [tmp16[1], guild.id, stateFromStores.id, pendingAdditions];
  const first1 = tmp16[0];
  const items5 = [pendingAdditions];
  const callback1 = react.useCallback(() => {
    const keys = Object.keys(first);
    if (keys.length > 0) {
      closure_4(true);
      const obj = GuildSettingsActionCreatorsDefault;
      obj.bulkAddMemberRoles(guild.id, stateFromStores.id, keys);
      closure_4(false);
    }
    const FLOW_COMPLETED = constants4.FLOW_COMPLETED;
    const id = guild.id;
    const tmp9 = constants4[obj6.STEP_MEMBERS];
    const track = AnalyticsUtilsDefault.track;
    const USER_FLOW_TRANSITION = constants.USER_FLOW_TRANSITION;
    const obj2 = { flow_type: constants2.GUILD_ROLE_CREATION_MODAL, from_step: tmp9, to_step: FLOW_COMPLETED, skip: false };
    AnalyticsUtilsDefault;
    const obj3 = AppAnalyticsUtils;
    const merged = Object.assign(obj3.collectGuildAnalyticsMetadata(id));
    track(USER_FLOW_TRANSITION, obj2);
    const obj4 = GuildSettingsRoleCreateModalActionCreatorsDefault;
    obj4.close();
  }, items4);
  const memo = react.useMemo(() => Object.keys(first).length, items5);
  const obj5 = { hasSkipButton: !nextButtonFloating, title: intl.string(navigation(pendingAdditions[17]).t["+gWHtA"]), subtitle: intl2.formatToPlainString(navigation(pendingAdditions[17]).t.yZW3oh, obj6), children: items6 };
  intl = navigation(pendingAdditions[17]).intl;
  intl2 = navigation(pendingAdditions[17]).intl;
  obj6 = { numMembers: maxCount };
  items6 = [, ];
  const obj7 = { autoFocusSearch: false, guild, members: guildMembers, pendingAdditions, role: stateFromStores, setPendingAdditions: tmp15, maxCount };
  items6[0] = closure_21(navigation(pendingAdditions[41]).AddMembersBody, obj7);
  const items7 = [tmp.nextButton, ];
  const tmp21 = closure_22;
  const tmp22 = ModalScene;
  const tmp23 = maxCount;
  const tmp25 = closure_7;
  if (nextButtonFloating) {
    nextButtonFloating = tmp.nextButtonFloating;
  }
  items7[1] = nextButtonFloating;
  const obj8 = { style: items7, children: closure_21(Button, obj9) };
  obj9 = { loading: first1, text: intl3.string(tmp2(pendingAdditions[17]).t.XcPHfw), onPress: callback1, disabled: 0 === memo || memo > tmp23 };
  Button = tmp2(tmp3[37]).Button;
  intl3 = tmp2(tmp3[17]).intl;
  items6[1] = closure_21(tmp25, obj8);
  return tmp21(tmp22, obj5);
}
function ModalScene(hasSkipButton) {
  let Button;
  let children;
  let intl;
  let items3;
  let items4;
  let obj11;
  let obj5;
  let subtitle;
  let title;
  let tmp13Result;
  hasSkipButton = hasSkipButton.hasSkipButton;
  navigation = undefined;
  let stateFromStores;
  let ref;
  ({ children, title, subtitle } = hasSkipButton);
  let tmp = closure_24();
  const insets = stateFromStores(ref[42])().insets;
  let tmp3 = navigation;
  let obj = navigation(ref[22]);
  navigation = obj.useNavigation();
  let obj2 = navigation(ref[19]);
  const items = [GuildSettingsStore];
  stateFromStores = obj2.useStateFromStores(items, f107987);
  stateFromStores(ref[20])(null != stateFromStores, "useGuildSettingsStoreGuild: Guild cannot be null");
  let obj3 = navigation(ref[43]);
  const isScreenReaderEnabled = obj3.useIsScreenReaderEnabled();
  ref = react.useRef(null);
  const items1 = [isScreenReaderEnabled];
  const effect = react.useEffect(() => {
    const tmp = isScreenReaderEnabled && null != ref.current;
    if (tmp) {
      const obj2 = { ref, delay: 100 };
      const obj = react_native;
      const result = obj.setAccessibilityFocus(obj2);
    }
  }, items1);
  const items2 = [navigation, stateFromStores.id];
  if (null == navigator) {
    const tmp12 = closure_21;
    tmp13Result = closure_21(tmp3(tmp2[45]).SceneLoadingIndicator, {});
  } else {
    let obj4 = { style: obj5, children: items4 };
    obj5 = { paddingTop: insets.top, paddingBottom: tmp.container.paddingBottom + insets.bottom };
    const tmp13 = closure_22;
    let merged = Object.assign(tmp.container);
    obj6 = { style: tmp.sceneHeader, children: items3 };
    let obj7 = { ref, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: title };
    items3 = [closure_21(tmp3(tmp2[16]).Heading, obj7), ];
    const obj8 = { style: tmp.sceneSubtitle, variant: "text-sm/medium", color: "text-default", children: subtitle };
    items3[1] = closure_21(tmp3(ref[16]).Text, obj8);
    items4 = [closure_22(closure_7, obj6), , ];
    const obj9 = { style: tmp.sceneContent, children };
    items4[1] = closure_21(closure_7, obj9);
    if (hasSkipButton) {
      const obj10 = { style: tmp.sceneFooter, children: closure_21(Button, obj11) };
      obj11 = { text: intl.string(tmp3(ref[17]).t.CJm5V5), onPress: tmp10 };
      Button = tmp3(tmp2[37]).Button;
      intl = tmp3(tmp2[17]).intl;
      hasSkipButton = tmp17(tmp14, obj10);
    }
    items4[2] = hasSkipButton;
    tmp13Result = tmp13(tmp14, obj4);
  }
  return tmp13Result;
}
({ View: metroImportDefault, Keyboard: metroImportAll } = react_native2);
const isGuildOwner = GuildRecord.isGuildOwner;
({ PermissionTemplates: map1, DEFAULT_TEMPLATE_TYPE: closure_14, MAX_BULK_ROLE_MEMBERS_ADD: closure_15 } = GuildSettingsRoleConstants);
({ MAX_ROLE_LENGTH: closure_16, DEFAULT_ROLE_COLOR: closure_17, AnalyticEvents: closure_18, AnalyticsSections: closure_19, Permissions: closure_20 } = Constants);
({ jsx: closure_21, jsxs: closure_22 } = Fragment);
let closure_23 = { titleContainer: { flexDirection: "row", justifyContent: "center", alignContent: "center", width: "100%" }, title: { textAlign: "center", flex: 1 } };
let createStyles = createStyles_mod;
let obj = { container: obj2, sceneHeader: { alignItems: "center", marginBottom: 8, marginHorizontal: 16 }, sceneSubtitle: { textAlign: "center", paddingTop: 8, maxWidth: 400 }, sceneContent: { flex: 1 }, sceneInner: obj3, colorTrailing: { flexDirection: "row", alignItems: "center" }, colorBlock: { marginHorizontal: 0, marginVertical: 0, marginRight: 8, minWidth: 24, height: 24, borderRadius: 3 }, sceneFooter: obj4, nextButton: { width: "100%", paddingHorizontal: 16, paddingVertical: 16 }, nextButtonFloating: obj5 };
obj2 = { marginTop: NavigatorConstants.NAV_BAR_HEIGHT, flexGrow: 1, paddingBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16 };
obj4 = { paddingBottom: 8, paddingHorizontal: nativeDefault.space.PX_16 };
obj5 = { paddingVertical: 0, paddingTop: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_24 = createStyles(obj);
let obj6 = { STEP_DISPLAY: "STEP_DISPLAY", STEP_PERMISSIONS: "STEP_PERMISSIONS", STEP_MEMBERS: "STEP_MEMBERS" };
let closure_26 = { [obj6.STEP_DISPLAY]: "Role Display", [obj6.STEP_PERMISSIONS]: "Role Permissions", [obj6.STEP_MEMBERS]: "Role Members", FLOW_INITIALIZED: "Flow Initialized", FLOW_DISMISSED: "Flow Dismissed", FLOW_COMPLETED: "Flow Completed" };
let closure_27 = react.memo((step) => {
  let Text;
  let intl;
  let obj2;
  step = step.step;
  const keys = Object.keys(obj6);
  const length = keys.length;
  const obj = { style: closure_23.titleContainer, children: closure_21(Text, obj2) };
  const sum = keys.indexOf(step) + 1;
  obj2 = { style: closure_23.title, accessibilityRole: "header", variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: intl.format(intl9.t["8v/u0i"], { number: sum, total: length }) };
  Text = Text_Text.Text;
  intl = intl9.intl;
  return closure_21(metroImportDefault, obj);
});
let obj7 = {
  fullscreen: true,
  render() {
    return closure_21(RoleCreateScene, {});
  }
};
let obj8 = {
  fullscreen: true,
  render() {
    return closure_21(RolePermissionTemplate, {});
  }
};
let obj9 = {
  fullscreen: true,
  render() {
    return closure_21(RoleMembers, {});
  }
};
const screens = { [obj6.STEP_DISPLAY]: obj7, [obj6.STEP_PERMISSIONS]: obj8, [obj6.STEP_MEMBERS]: obj9 };
let result = size.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleCreateModal.tsx");

export default function GuildSettingsRoleCreateModal() {
  let props;
  let stateFromStores;
  let obj = stateFromStores(504);
  const items = [GuildSettingsStore];
  stateFromStores = obj.useStateFromStores(items, f107987);
  const tmp2 = _modDef38(null != stateFromStores, "useGuildSettingsStoreGuild: Guild cannot be null");
  useMountEffectDefault(() => {
    const FLOW_INITIALIZED = constants.FLOW_INITIALIZED;
    const id = stateFromStores.id;
    const tmp = constants[obj6.STEP_DISPLAY];
    const track = AnalyticsUtilsDefault.track;
    const USER_FLOW_TRANSITION = constants.USER_FLOW_TRANSITION;
    const obj = { flow_type: constants2.GUILD_ROLE_CREATION_MODAL, from_step: FLOW_INITIALIZED, to_step: tmp, skip: false };
    AnalyticsUtilsDefault;
    const obj2 = AppAnalyticsUtils;
    const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(id));
    track(USER_FLOW_TRANSITION, obj);
  });
  let obj2 = { screens, initialRouteName: obj6.STEP_DISPLAY };
  return closure_21(stateFromStores(6421).Navigator, obj2);
};
