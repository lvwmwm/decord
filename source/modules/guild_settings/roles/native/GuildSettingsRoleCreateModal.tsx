// Module ID: 16350
// Function ID: 127375
// Name: logTransitionEvent
// Dependencies: [5, 57, 31, 27, 1391, 1910, 1849, 8483, 16351, 653, 33, 4130, 5084, 689, 675, 4324, 4126, 1212, 16349, 566, 44, 3763, 1456, 5784, 5087, 5048, 3830, 16348, 4098, 14867, 1934, 4541, 7574, 5501, 5165, 13620, 665, 4543, 16355, 16356, 8482, 16357, 5160, 4528, 4539, 5583, 4559, 5517, 2]
// Exports: default

// Module 16350 (logTransitionEvent)
import closure_4 from "_createForOfIteratorHelperLoose";
import _slicedToArray from "_slicedToArray";
import importAllResult from "Stack";
import get_ActivityIndicator from "setRoleJustCreated";
import { isGuildOwner } from "isGuildOwner";
import closure_10 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import title from "title";
import ME from "ME";
import jsxProd from "TableRowGroupTitle";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_7;
let closure_8;
const require = arg1;
function logTransitionEvent(from_step, FLOW_DISMISSED, skip, guildId) {
  let obj = importDefault(675);
  obj = { flow_type: constants2.GUILD_ROLE_CREATION_MODAL, from_step, to_step: FLOW_DISMISSED, skip };
  const merged = Object.assign(require(4324) /* _createForOfIteratorHelperLoose */.collectGuildAnalyticsMetadata(guildId));
  obj.track(constants.USER_FLOW_TRANSITION, obj);
}
function closeModal(from_step, guildId) {
  logTransitionEvent(from_step, constants4.FLOW_DISMISSED, false, guildId);
  importDefault(16349).close();
}
function useGuildSettingsStoreGuild() {
  const items = [closure_12];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_12.getProps().guild);
  importDefault(44)(null != stateFromStores, "useGuildSettingsStoreGuild: Guild cannot be null");
  return stateFromStores;
}
function useGuildSettingsStoreGuildWithRole() {
  const items = [closure_12];
  const stateFromStoresObject = guild(566).useStateFromStoresObject(items, () => outer1_12.getProps());
  guild = stateFromStoresObject.guild;
  const selectedRoleId = stateFromStoresObject.selectedRoleId;
  selectedRoleId(44)(null != guild, "useGuildSettingsStoreGuildWithRole: Guild cannot be null");
  const obj = guild(566);
  const items1 = [closure_10];
  let role = guild(566).useStateFromStores(items1, () => {
    let role;
    if (null != selectedRoleId) {
      role = outer1_10.getRole(guild.id, selectedRoleId);
    }
    return role;
  });
  selectedRoleId(44)(null != role, "useGuildSettingsStoreGuildWithRole: Role cannot be null");
  return { guild, role };
}
function shouldSkipPermissions() {
  const guild = props.getProps().guild;
  importDefault(44)(null != guild, "shouldSkipPermissions: Guild cannot be null");
  currentUser = currentUser.getCurrentUser();
  let obj = importAll(3763);
  obj = { permission: constants3.ADMINISTRATOR, user: currentUser, context: guild };
  const tmp3 = isGuildOwner(guild, currentUser);
  return !isGuildOwner(guild, currentUser) && !obj.can(obj);
}
function RoleCreateScene() {
  let _slicedToArray;
  let tmp8;
  const tmp = callback5();
  let obj = navigation(first[22]);
  navigation = obj.useNavigation();
  const tmp3 = useGuildSettingsStoreGuild();
  const importDefault = tmp3;
  const intl = navigation(first[17]).intl;
  const tmp4 = callback2(callback.useState(intl.string(navigation(first[17]).t.QBMHvB)), 2);
  const str = tmp4[0];
  const tmp5 = callback2(callback.useState(closure_17), 2);
  first = tmp5[0];
  callback = tmp5[1];
  [tmp8, _slicedToArray] = callback2(callback.useState(false), 2);
  let nextButtonFloating = importDefault(first[23])();
  const items = [navigation, tmp3];
  const layoutEffect = callback.useLayoutEffect(() => {
    const obj = {
      headerLeft: navigation(first[24]).getHeaderCloseButton(() => {
        outer2_30(outer2_26[outer2_25.STEP_DISPLAY], outer1_1.id);
      }),
      headerTitle() {
        return outer2_21(outer2_27, { step: outer2_25.STEP_DISPLAY });
      }
    };
    navigation.setOptions(obj);
  }, items);
  const items1 = [];
  callback = callback.useCallback((arg0) => {
    callback(arg0);
  }, items1);
  // CreateGeneratorClosureLongIndex (0x67)
  const items2 = [first, tmp3.id, str, navigation];
  const items3 = [first, callback];
  const callback1 = callback.useCallback(callback(items1), items2);
  obj = {};
  callback2 = callback.useCallback(() => {
    outer1_8.dismiss();
    let obj = tmp3(first[28]);
    obj = { color: first, onSelect: callback };
    obj.openLazy(navigation(first[30])(first[29], first.paths), "RoleColorPicker", obj);
  }, items3);
  const intl2 = navigation(first[17]).intl;
  obj.title = intl2.string(navigation(first[17]).t["8pxAPp"]);
  const intl3 = navigation(first[17]).intl;
  obj.subtitle = intl3.string(navigation(first[17]).t["JubQz/"]);
  obj = { spacing: importDefault(first[13]).space.PX_24, style: tmp.sceneInner };
  const obj1 = {};
  const intl4 = navigation(first[17]).intl;
  obj1.label = intl4.string(navigation(first[17]).t.dLbkBk);
  const intl5 = navigation(first[17]).intl;
  obj1.description = intl5.string(navigation(first[17]).t.m4j44b);
  obj1.required = true;
  obj1.value = str;
  obj1.onChange = tmp4[1];
  obj1.maxLength = closure_16;
  obj1.autoFocus = true;
  obj1.autoComplete = "off";
  const items4 = [callback3(navigation(first[32]).TextInput, obj1), ];
  const obj2 = {};
  const intl6 = navigation(first[17]).intl;
  obj2.helperText = intl6.string(navigation(first[17]).t["9TMIgc"]);
  obj2.hasIcons = false;
  const obj3 = {};
  const intl7 = navigation(first[17]).intl;
  obj3.label = intl7.string(navigation(first[17]).t["5NC5YW"]);
  obj3.onPress = callback2;
  obj3.arrow = true;
  const obj4 = { style: tmp.colorTrailing };
  const items5 = [callback3(importDefault(first[35]), { color: first, style: tmp.colorBlock }), ];
  const obj6 = { variant: "text-sm/medium" };
  const obj5 = { color: first, style: tmp.colorBlock };
  const tmp13 = callback4;
  const tmp14 = ModalScene;
  const tmp7 = callback2(callback.useState(false), 2);
  obj6.children = navigation(first[36]).int2hex(first);
  items5[1] = callback3(navigation(first[16]).Text, obj6);
  obj4.children = items5;
  obj3.trailing = callback4(closure_7, obj4);
  obj2.children = callback3(navigation(first[34]).TableRow, obj3);
  items4[1] = callback3(navigation(first[33]).TableRowGroup, obj2);
  obj.children = items4;
  const items6 = [callback4(navigation(first[31]).Stack, obj), ];
  const obj7 = {};
  const items7 = [tmp.nextButton, ];
  if (nextButtonFloating) {
    nextButtonFloating = tmp.nextButtonFloating;
  }
  items7[1] = nextButtonFloating;
  obj7.style = items7;
  const obj8 = { loading: tmp8 };
  if (!tmp8) {
    tmp8 = "" === str.trim();
  }
  obj8.disabled = tmp8;
  const intl8 = navigation(first[17]).intl;
  obj8.text = intl8.string(navigation(first[17]).t.CumH4u);
  obj8.onPress = callback1;
  obj7.children = callback3(navigation(first[37]).Button, obj8);
  items6[1] = callback3(closure_7, obj7);
  obj.children = items6;
  return tmp13(tmp14, obj);
}
function RolePermissionTemplate() {
  let obj = navigation(callback[22]);
  navigation = obj.useNavigation();
  const tmp3 = useGuildSettingsStoreGuildWithRole();
  const role = tmp3.role;
  const guild = tmp3.guild;
  const items = [navigation, guild.id];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    const obj = {
      headerLeft: navigation(callback[24]).getHeaderCloseButton(() => {
        outer2_30(outer2_26[outer2_25.STEP_PERMISSIONS], outer1_2.id);
      }),
      headerTitle() {
        return outer2_21(outer2_27, { step: outer2_25.STEP_PERMISSIONS });
      }
    };
    navigation.setOptions(obj);
  }, items);
  const items1 = [guild.id, navigation, role.id];
  callback = importAllResult.useCallback((arg0) => {
    const result = role(callback[25]).updateRolePermissions(guild.id, role.id, arg0);
    navigation.push(outer1_25.STEP_MEMBERS);
    outer1_29(outer1_26[outer1_25.STEP_PERMISSIONS], outer1_26[outer1_25.STEP_MEMBERS], false, guild.id);
  }, items1);
  const items2 = [callback];
  obj = { hasSkipButton: false };
  const callback1 = importAllResult.useCallback(() => {
    callback(outer1_13[outer1_14].permissions);
  }, items2);
  const intl = navigation(callback[17]).intl;
  obj.title = intl.string(navigation(callback[17]).t.p0IwNA);
  const intl2 = navigation(callback[17]).intl;
  obj.subtitle = intl2.string(navigation(callback[17]).t.G529Hk);
  obj = { onSelect: callback, location: constants2.GUILD_ROLE_CREATION_MODAL, guildId: guild.id };
  const items3 = [callback3(role(callback[38]), obj), ];
  const obj1 = { style: callback5().sceneFooter };
  const obj2 = {};
  const intl3 = navigation(callback[17]).intl;
  obj2.text = intl3.string(navigation(callback[17]).t.CJm5V5);
  obj2.onPress = callback1;
  obj1.children = callback3(navigation(callback[37]).Button, obj2);
  items3[1] = callback3(closure_7, obj1);
  obj.children = items3;
  return callback4(ModalScene, obj);
}
function RoleMembers() {
  const tmp = callback5();
  let obj = navigation(first[22]);
  navigation = obj.useNavigation();
  const tmp3 = useGuildSettingsStoreGuildWithRole();
  const role = tmp3.role;
  const guild = tmp3.guild;
  role(first[20])(null != role, "Role cannot be null");
  const items = [navigation, guild.id];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    const obj = {
      headerLeft: navigation(first[24]).getHeaderCloseButton(() => {
        outer2_30(outer2_26[outer2_25.STEP_MEMBERS], outer1_2.id);
      }),
      headerTitle() {
        return outer2_21(outer2_27, { step: outer2_25.STEP_MEMBERS });
      }
    };
    return navigation.setOptions(obj);
  }, items);
  let nextButtonFloating = role(first[23])();
  const items1 = [role.id];
  const callback = importAllResult.useCallback((roles) => {
    roles = roles.roles;
    return !roles.includes(role.id);
  }, items1);
  let obj1 = navigation(first[39]);
  const guildMembers = obj1.useGuildMembers(guild.id, callback);
  const tmp8 = callback2(importAllResult.useState({}), 2);
  first = tmp8[0];
  const tmp10 = callback2(importAllResult.useState(false), 2);
  let closure_4 = tmp11;
  const items2 = [tmp10[1], guild.id, role.id, first];
  const items3 = [first];
  const callback1 = importAllResult.useCallback(() => {
    const keys = Object.keys(first);
    if (keys.length > 0) {
      tmp11(true);
      role(first[40]).bulkAddMemberRoles(guild.id, role.id, keys);
      tmp11(false);
      const obj = role(first[40]);
    }
    outer1_29(outer1_26[outer1_25.STEP_MEMBERS], outer1_26.FLOW_COMPLETED, false, guild.id);
    role(first[18]).close();
  }, items2);
  const memo = importAllResult.useMemo(() => Object.keys(first).length, items3);
  obj = { hasSkipButton: !nextButtonFloating };
  const intl = navigation(first[17]).intl;
  obj.title = intl.string(navigation(first[17]).t["+gWHtA"]);
  const intl2 = navigation(first[17]).intl;
  obj = { numMembers: closure_15 };
  obj.subtitle = intl2.formatToPlainString(navigation(first[17]).t.yZW3oh, obj);
  obj1 = { autoFocusSearch: false, guild, members: guildMembers, pendingAdditions: first, role, setPendingAdditions: tmp8[1], maxCount: closure_15 };
  const items4 = [callback3(navigation(first[41]).AddMembersBody, obj1), ];
  const obj2 = {};
  const items5 = [tmp.nextButton, ];
  if (nextButtonFloating) {
    nextButtonFloating = tmp.nextButtonFloating;
  }
  items5[1] = nextButtonFloating;
  obj2.style = items5;
  const obj3 = { loading: tmp10[0] };
  const intl3 = navigation(first[17]).intl;
  obj3.text = intl3.string(navigation(first[17]).t.XcPHfw);
  obj3.onPress = callback1;
  let tmp19 = 0 === memo;
  if (!tmp19) {
    tmp19 = memo > closure_15;
  }
  obj3.disabled = tmp19;
  obj2.children = callback3(navigation(first[37]).Button, obj3);
  items4[1] = callback3(closure_7, obj2);
  obj.children = items4;
  return closure_22(ModalScene, obj);
}
function ModalScene(hasSkipButton) {
  let children;
  let subtitle;
  let title;
  hasSkipButton = hasSkipButton.hasSkipButton;
  ({ children, title, subtitle } = hasSkipButton);
  let tmp = callback5();
  const insets = importDefault(ref[42])().insets;
  let obj = navigation(ref[22]);
  navigation = obj.useNavigation();
  let tmp3 = useGuildSettingsStoreGuild();
  importDefault = tmp3;
  let obj1 = navigation(ref[43]);
  const isScreenReaderEnabled = obj1.useIsScreenReaderEnabled();
  ref = importAllResult.useRef(null);
  const items = [isScreenReaderEnabled];
  const effect = importAllResult.useEffect(() => {
    let tmp = isScreenReaderEnabled;
    if (isScreenReaderEnabled) {
      tmp = null != ref.current;
    }
    if (tmp) {
      let obj = navigation(ref[44]);
      obj = { ref, delay: 100 };
      const result = obj.setAccessibilityFocus(obj);
    }
  }, items);
  const items1 = [navigation, tmp3.id];
  if (null == navigator) {
    let tmp17Result = callback3(navigation(ref[45]).SceneLoadingIndicator, {});
  } else {
    obj = {};
    obj = {};
    const merged = Object.assign(tmp.container);
    obj["paddingTop"] = insets.top;
    obj["paddingBottom"] = tmp.container.paddingBottom + insets.bottom;
    obj.style = obj;
    obj1 = { style: tmp.sceneHeader };
    const obj2 = { ref, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: title };
    const items2 = [callback3(navigation(ref[16]).Heading, obj2), ];
    let obj3 = { style: tmp.sceneSubtitle, variant: "text-sm/medium", color: "text-default", children: subtitle };
    items2[1] = callback3(navigation(ref[16]).Text, obj3);
    obj1.children = items2;
    const items3 = [callback4(closure_7, obj1), , ];
    const obj4 = { style: tmp.sceneContent, children };
    items3[1] = callback3(closure_7, obj4);
    if (hasSkipButton) {
      const obj5 = { style: tmp.sceneFooter };
      const obj6 = {};
      const intl = navigation(ref[17]).intl;
      obj6.text = intl.string(navigation(ref[17]).t.CJm5V5);
      obj6.onPress = tmp7;
      obj5.children = callback3(navigation(ref[37]).Button, obj6);
      hasSkipButton = callback3(closure_7, obj5);
    }
    items3[2] = hasSkipButton;
    obj.children = items3;
    tmp17Result = callback4(closure_7, obj);
    const tmp17 = callback4;
    const tmp18 = closure_7;
  }
  return tmp17Result;
}
({ View: closure_7, Keyboard: closure_8 } = get_ActivityIndicator);
({ PermissionTemplates: closure_13, DEFAULT_TEMPLATE_TYPE: closure_14, MAX_BULK_ROLE_MEMBERS_ADD: closure_15 } = title);
({ MAX_ROLE_LENGTH: closure_16, DEFAULT_ROLE_COLOR: closure_17, AnalyticEvents: closure_18, AnalyticsSections: closure_19, Permissions: closure_20 } = ME);
({ jsx: closure_21, jsxs: closure_22 } = jsxProd);
let closure_23 = { titleContainer: { flexDirection: "row", justifyContent: "center", alignContent: "center", width: "100%" }, title: { textAlign: "center", flex: 1 } };
let obj = {};
obj = { marginTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT, flexGrow: 1, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.container = obj;
obj.sceneHeader = { alignItems: "center", marginBottom: 8, marginHorizontal: 16 };
obj.sceneSubtitle = { textAlign: "center", paddingTop: 8, maxWidth: 400 };
obj.sceneContent = { flex: 1 };
_createForOfIteratorHelperLoose = { flex: 1, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.sceneInner = _createForOfIteratorHelperLoose;
obj.colorTrailing = { flexDirection: "row", alignItems: "center" };
obj.colorBlock = { marginHorizontal: 0, marginVertical: 0, marginRight: 8, minWidth: 24, height: 24, borderRadius: 3 };
obj.sceneFooter = { paddingBottom: 8, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.nextButton = { width: "100%", paddingHorizontal: 16, paddingVertical: 16 };
let obj3 = { paddingVertical: 0, paddingTop: 16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
obj.nextButtonFloating = obj3;
let closure_24 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj4 = { STEP_DISPLAY: "STEP_DISPLAY", STEP_PERMISSIONS: "STEP_PERMISSIONS", STEP_MEMBERS: "STEP_MEMBERS" };
let closure_26 = { [obj4.STEP_DISPLAY]: "Role Display", [obj4.STEP_PERMISSIONS]: "Role Permissions", [obj4.STEP_MEMBERS]: "Role Members", ["FLOW_INITIALIZED"]: "Flow Initialized", ["FLOW_DISMISSED"]: "Flow Dismissed", ["FLOW_COMPLETED"]: "Flow Completed" };
let closure_27 = importAllResult.memo((step) => {
  const keys = Object.keys(obj4);
  let obj = { style: closure_23.titleContainer };
  const sum = keys.indexOf(step.step) + 1;
  obj = { style: closure_23.title, accessibilityRole: "header", variant: "heading-md/extrabold", color: "mobile-text-heading-primary" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.format(require(1212) /* getSystemLocale */.t["8v/u0i"], { number: sum, total: keys.length });
  obj.children = callback3(require(4126) /* Text */.Text, obj);
  return callback3(closure_7, obj);
});
let closure_28 = {
  [obj4.STEP_DISPLAY]: {
    fullscreen: true,
    render() {
      return callback3(RoleCreateScene, {});
    }
  },
  [obj4.STEP_PERMISSIONS]: {
    fullscreen: true,
    render() {
      return callback3(RolePermissionTemplate, {});
    }
  },
  [obj4.STEP_MEMBERS]: {
    fullscreen: true,
    render() {
      return callback3(RoleMembers, {});
    }
  }
};
let obj2 = { paddingBottom: 8, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj5 = {
  fullscreen: true,
  render() {
    return callback3(RoleCreateScene, {});
  }
};
let obj6 = {
  fullscreen: true,
  render() {
    return callback3(RolePermissionTemplate, {});
  }
};
let obj7 = {
  fullscreen: true,
  render() {
    return callback3(RoleMembers, {});
  }
};
let result = require("result").fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleCreateModal.tsx");

export default function GuildSettingsRoleCreateModal() {
  const _require = useGuildSettingsStoreGuild();
  importDefault(4559)(() => {
    outer1_29(outer1_26.FLOW_INITIALIZED, outer1_26[outer1_25.STEP_DISPLAY], false, id.id);
  });
  return callback3(_require(5517).Navigator, { screens: closure_28, initialRouteName: obj4.STEP_DISPLAY });
};
