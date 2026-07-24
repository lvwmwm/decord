// Module ID: 8873
// Function ID: 69838
// Name: handleCall
// Dependencies: [31, 27, 4122, 4167, 6904, 1348, 4217, 3767, 8857, 653, 33, 4130, 689, 4140, 44, 8874, 9096, 3830, 9097, 8962, 6905, 566, 1273, 4126, 3969, 9102, 5462, 9126, 1212, 9127, 4084, 4082, 4543, 1833, 9123, 4629, 8537, 1934, 9128, 9129, 7477, 4571, 7739, 4361, 8561, 8558, 8568, 9131, 8620, 9132, 8792, 5165, 2]

// Module 8873 (handleCall)
import importAllResult from "CheckmarkLargeIcon";
import { View } from "getAvatarDecoration";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import { UserRowModes } from "UserRowModes";
import ME from "ME";
import jsxProd from "cssValueToNumber";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
const require = arg1;
function handleCall(id) {
  let closure_0 = id;
  let obj = importDefault(4140);
  importDefault(4140).ensurePrivateChannel(id.id).then((channelId) => {
    const channel = outer1_8.getChannel(channelId);
    if (null != channel) {
      outer1_1(outer1_2[14])(channel.isPrivate(), "must be a DM");
      const obj4 = outer1_1(outer1_2[15])(channel, false);
      if (!obj4.inCall) {
        obj4.onPress();
      }
      const tmp8 = outer1_1(outer1_2[14]);
      const obj = { recipientIds: id.id };
      outer1_1(outer1_2[13]).openPrivateChannel(obj);
      const obj2 = outer1_1(outer1_2[13]);
    }
  });
}
function handleAccept(id, applicationId) {
  let closure_0 = applicationId;
  let obj = importDefault(9096);
  obj = {
    userId: id.id,
    applicationId,
    location: Friends_v2,
    onConfirm() {
      if (null != applicationId) {
        const result = applicationId(outer1_2[17]).presentGameFriendRequestAcceptedToast();
        const obj2 = applicationId(outer1_2[17]);
      } else {
        const result1 = applicationId(outer1_2[17]).presentFriendRequestAcceptedToast();
        const obj = applicationId(outer1_2[17]);
      }
    }
  };
  let result = obj.maybeConfirmFriendRequestAccept(obj);
}
function handleCancel(id, applicationId) {
  if (null != applicationId) {
    let obj = { userId: id.id, applicationId };
    const result = importDefault(9097).cancelGameFriendRequest(obj);
    const obj4 = importDefault(9097);
    const result1 = require(3830) /* presentAddedFriendToast */.presentGameFriendRequestIgnoredToast();
    const obj6 = require(3830) /* presentAddedFriendToast */;
  } else {
    obj = importDefault(8962);
    obj = { location: Friends_v2 };
    obj.cancelFriendRequest(id.id, obj);
    const result2 = require(3830) /* presentAddedFriendToast */.presentFriendRequestIgnoredToast();
    const obj3 = require(3830) /* presentAddedFriendToast */;
  }
}
function handleAcceptSuggestion(id) {
  let obj = importDefault(8962);
  obj = { userId: id.id, context: obj, type: undefined, fromFriendSuggestion: true };
  obj = { location: Friends_v2 };
  obj.addRelationship(obj);
  const result = require(3830) /* presentAddedFriendToast */.presentAddedFriendToast();
}
function UserRowSubLabel(arg0) {
  let animate;
  let guildId;
  let isGameRelationship;
  let require;
  let type;
  let user;
  ({ user, type, applicationId: require } = arg0);
  ({ animate, isGameRelationship, guildId } = arg0);
  let gameIcon = callback2();
  let obj = require(566) /* initialize */;
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getApplication(closure_0));
  if (type !== constants.PENDING_INCOMING) {
    if (type !== constants.SUGGESTION) {
      if (type !== constants.PENDING_OUTGOING) {
        obj = { userId: user.id, guildId, textStyle: gameIcon.activityText, animate };
        return callback(importDefault(9102), obj);
      }
    }
  }
  if (!isGameRelationship) {
    obj = { lineClamp: 1, variant: "text-xs/medium", color: "text-muted" };
    let obj4 = require(3969) /* conceal */;
    obj.children = obj4.getUserTag(user);
    callback(require(4126) /* Text */.Text, obj);
  }
  if (null == stateFromStores) {
    const obj1 = {};
    gameIcon = gameIcon.gameIcon;
    obj1.style = gameIcon;
    callback(View, obj1);
  } else {
    const obj2 = { style: gameIcon.gameContainer };
    const obj3 = { style: gameIcon.gameIcon, resizeMode: "contain" };
    obj4 = {};
    const iconURL = stateFromStores.getIconURL(16);
    let str = "";
    if (null != iconURL) {
      str = iconURL;
    }
    obj4.uri = str;
    obj3.source = obj4;
    obj3.disableColor = true;
    const items1 = [callback(require(1273) /* Button */.Icon, obj3, stateFromStores.id), ];
    const obj5 = { lineClamp: 1, variant: "text-xs/medium", color: "text-subtle", children: stateFromStores.name };
    items1[1] = callback(require(4126) /* Text */.Text, obj5);
    obj2.children = items1;
    closure_15(View, obj2);
    const tmp16 = closure_15;
    const tmp17 = View;
    const tmp18 = callback;
  }
}
({ RelationshipTypes: closure_12, StatusTypes: closure_13 } = ME);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
let closure_17 = { CALL: "call", MESSAGE: "message", ACCEPT: "accept", DECLINE: "decline", CANCEL: "cancel", ACCEPT_SUGGESTION: "accept-suggestion", IGNORE_SUGGESTION: "ignore-suggestion", TOGGLE: "toggle" };
let closure_18 = _createForOfIteratorHelperLoose.createStyles({ avatar: { flexShrink: 0, flexGrow: 0 }, actions: { flexDirection: "row" }, action: { marginLeft: 12, alignSelf: "center" }, buttonWrapper: { marginLeft: 8 }, labelContainer: { flexDirection: "row", alignItems: "center" }, roleDot: { marginRight: 4, paddingTop: 0 }, usernameLabelContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: 4 }, usernameLabel: { display: "flex", flexShrink: 1 } });
let obj = {};
obj = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE };
obj.activityText = obj;
_createForOfIteratorHelperLoose = { flexDirection: "row", gap: 4, cornerRadius: require("_createForOfIteratorHelperLoose").radii.xs };
obj.gameContainer = _createForOfIteratorHelperLoose;
obj.gameIcon = { width: 14, height: 14 };
let closure_19 = _createForOfIteratorHelperLoose.createStyles(obj);
const Friends_v2 = "Friends_v2";
const memoResult = importAllResult.memo(function UserRow(type) {
  let accessibilityActions;
  let accessibilityActions2;
  let actions;
  let applicationId;
  let onAccessibilityAction;
  let premiumSince;
  let roleColors;
  let stateFromStores;
  let usernameColor;
  type = type.type;
  const user = type.user;
  let NONE = type.mode;
  if (NONE === undefined) {
    NONE = guildId.NONE;
  }
  let flag = type.selected;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = type.disabled;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = type.isOwner;
  if (flag3 === undefined) {
    flag3 = false;
  }
  const onPress = type.onPress;
  const onLongPress = type.onLongPress;
  const handleMessage = type.handleMessage;
  ({ nickname: stateFromStores, usernameColor } = type);
  ({ roleColors, premiumSince } = type);
  guildId = type.guildId;
  const trailing = type.trailing;
  const subLabel = type.subLabel;
  const label = type.label;
  ({ accessibilityActions, onAccessibilityAction, applicationId } = type);
  let flag4 = type.isGameRelationship;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let flag5 = type.isNameplatedRow;
  if (flag5 === undefined) {
    flag5 = false;
  }
  let flag6 = type.canShowDisplayNameStyles;
  if (flag6 === undefined) {
    flag6 = false;
  }
  let flag7 = type.canShowDisplayNameStylesFont;
  if (flag7 === undefined) {
    flag7 = false;
  }
  let obj = { type: 0, user: 0, mode: 0, selected: 0, disabled: 0, isOwner: 0, onPress: 0, onLongPress: 0, handleMessage: 0, nickname: 0, usernameColor: 0, roleColors: 0, premiumSince: 0, guildId: 0, trailing: 0, subLabel: 0, label: 0, accessibilityActions: 0, onAccessibilityAction: 0, applicationId: 0, isGameRelationship: 0, isNameplatedRow: 0, canShowDisplayNameStyles: 0, canShowDisplayNameStylesFont: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(type, obj);
  let c17;
  let analyticsLocations;
  let useReducedMotion;
  let roleStyle;
  let isMobileOnline;
  let isVROnline;
  let status;
  let stateFromStores1;
  let avatarDecoration;
  let closure_26;
  actions = undefined;
  const tmp4 = analyticsLocations();
  c17 = tmp4;
  analyticsLocations = user(NONE[26])().analyticsLocations;
  let obj1 = type(NONE[21]);
  let items = [onPress];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => ({ useReducedMotion: onPress.useReducedMotion, roleStyle: onPress.roleStyle }));
  useReducedMotion = stateFromStoresObject.useReducedMotion;
  roleStyle = stateFromStoresObject.roleStyle;
  let obj2 = type(NONE[21]);
  let items1 = [usernameColor];
  const stateFromStoresObject1 = obj2.useStateFromStoresObject(items1, () => ({ isMobileOnline: usernameColor.isMobileOnline(user.id), isVROnline: usernameColor.isVROnline(user.id), status: usernameColor.getStatus(user.id) }));
  isMobileOnline = stateFromStoresObject1.isMobileOnline;
  isVROnline = stateFromStoresObject1.isVROnline;
  status = stateFromStoresObject1.status;
  let obj3 = type(NONE[21]);
  let items2 = [premiumSince];
  stateFromStores = obj3.useStateFromStores(items2, () => {
    if (null != stateFromStores) {
      let nickname = stateFromStores;
    } else {
      nickname = null;
      if (null == guildId) {
        nickname = premiumSince.getNickname(user.id);
      }
    }
    return nickname;
  });
  let obj4 = type(NONE[21]);
  const items3 = [handleMessage];
  stateFromStores1 = obj4.useStateFromStores(items3, () => handleMessage.getSuggestion(user.id));
  let obj5 = type(NONE[27]);
  avatarDecoration = obj5.useAvatarDecoration(user, guildId);
  const items4 = [user, onPress];
  const callback = flag2.useCallback(() => {
    if (null != onPress) {
      onPress(user);
    }
  }, items4);
  closure_26 = flag2.useRef(user);
  const items5 = [user];
  const effect = flag2.useEffect(() => {
    closure_26.current = user;
  }, items5);
  const items6 = [NONE, type, user, handleMessage, applicationId, tmp4];
  const memo = flag2.useMemo(() => {
    const items = [];
    if (NONE !== guildId.ACTIONS) {
      let obj = { accessibilityActions: items, actions: undefined };
      return obj;
    } else {
      if (trailing.PENDING_INCOMING === type) {
        obj = { name: _undefined.DECLINE };
        const intl6 = type(NONE[28]).intl;
        const obj1 = {};
        let obj15 = user(NONE[24]);
        obj1.name = obj15.getName(user);
        obj.label = intl6.formatToPlainString(type(NONE[28]).t["C9Xe6+"], obj1);
        const obj2 = { name: _undefined.ACCEPT };
        const intl7 = type(NONE[28]).intl;
        const obj3 = {};
        let obj18 = user(NONE[24]);
        obj3.name = obj18.getName(user);
        obj2.label = intl7.formatToPlainString(type(NONE[28]).t["6p0yBo"], obj3);
        items.push(obj, obj2);
        const obj4 = { style: _undefined.actions };
        let obj5 = {
          styles: _undefined.action,
          IconComponent: type(NONE[30]).XLargeIcon,
          type: "neutral",
          onPress() {
                status(outer1_26.current, outer1_15);
              }
        };
        const intl8 = type(NONE[28]).intl;
        const obj6 = {};
        let obj22 = user(NONE[24]);
        obj6.name = obj22.getName(user);
        obj5.accessibilityLabel = intl8.formatToPlainString(type(NONE[28]).t["C9Xe6+"], obj6);
        const items1 = [label(user(NONE[29]), obj5), ];
        const obj7 = { styles: _undefined.action };
        const tmp35 = user(NONE[29]);
        obj7.IconComponent = type(NONE[31]).CheckmarkLargeIcon;
        obj7.type = "positive";
        obj7.onPress = function onPress() {
          isVROnline(outer1_26.current, outer1_15);
        };
        const intl9 = type(NONE[28]).intl;
        let obj8 = {};
        let obj25 = user(NONE[24]);
        obj8.name = obj25.getName(user);
        obj7.accessibilityLabel = intl9.formatToPlainString(type(NONE[28]).t["6p0yBo"], obj8);
        items1[1] = label(user(NONE[29]), obj7);
        obj4.children = items1;
        let tmp12 = applicationId(flag3, obj4);
        const tmp38 = user(NONE[29]);
      } else if (trailing.PENDING_OUTGOING === tmp40) {
        const obj9 = { name: _undefined.CANCEL };
        const intl4 = type(NONE[28]).intl;
        const obj10 = {};
        obj8 = user(NONE[24]);
        obj10.name = obj8.getName(user);
        obj9.label = intl4.formatToPlainString(type(NONE[28]).t.JFJ8Cg, obj10);
        items.push(obj9);
        const obj11 = { style: _undefined.actions };
        let obj12 = {
          styles: _undefined.action,
          IconComponent: type(NONE[30]).XLargeIcon,
          type: "neutral",
          onPress() {
                status(outer1_26.current, outer1_15);
              }
        };
        const intl5 = type(NONE[28]).intl;
        const obj13 = {};
        obj12 = user(NONE[24]);
        obj13.name = obj12.getName(user);
        obj12.accessibilityLabel = intl5.formatToPlainString(type(NONE[28]).t.JFJ8Cg, obj13);
        obj11.children = label(user(NONE[29]), obj12);
        tmp12 = label(flag3, obj11);
        const tmp23 = user(NONE[29]);
      } else if (trailing.SUGGESTION === tmp40) {
        obj = { name: _undefined.ACCEPT_SUGGESTION };
        const intl = type(NONE[28]).intl;
        obj.label = intl.string(type(NONE[28]).t["ed99+i"]);
        const obj14 = { name: _undefined.IGNORE_SUGGESTION };
        const intl2 = type(NONE[28]).intl;
        obj14.label = intl2.string(type(NONE[28]).t["Tw3a/R"]);
        items.push(obj, obj14);
        obj15 = { style: _undefined.actions };
        const obj16 = { style: _undefined.buttonWrapper };
        const obj17 = { variant: "secondary", size: "sm" };
        obj5 = type(NONE[33]);
        const intl3 = type(NONE[28]).intl;
        obj17.text = obj5.truncateText(intl3.string(type(NONE[28]).t.OYkgVk), 8);
        obj17.onPress = function onPress() {
          stateFromStores1(outer1_26.current);
        };
        obj16.children = label(type(NONE[32]).Button, obj17);
        obj15.children = label(flag3, obj16);
        tmp12 = label(flag3, obj15);
      } else {
        const FRIEND = trailing.FRIEND;
        obj18 = { name: _undefined.CALL };
        const intl10 = type(NONE[28]).intl;
        const obj19 = { name: user(NONE[24]).getName(user) };
        obj18.label = intl10.formatToPlainString(type(NONE[28]).t.Q75ddl, obj19);
        const obj20 = { name: _undefined.MESSAGE };
        const intl11 = type(NONE[28]).intl;
        const obj21 = {};
        const obj31 = user(NONE[24]);
        obj21.name = user(NONE[24]).getName(user);
        obj20.label = intl11.formatToPlainString(type(NONE[28]).t.zFfSFQ, obj21);
        items.push(obj18, obj20);
        obj22 = { style: _undefined.actions };
        const obj23 = { styles: _undefined.action };
        const obj34 = user(NONE[24]);
        obj23.IconComponent = type(NONE[34]).PhoneCallIcon;
        obj23.type = "neutral";
        obj23.onPress = function onPress() {
          isMobileOnline(outer1_26.current);
        };
        const intl12 = type(NONE[28]).intl;
        const obj24 = {};
        const tmp55 = user(NONE[29]);
        obj24.name = user(NONE[24]).getName(user);
        obj23.accessibilityLabel = intl12.formatToPlainString(type(NONE[28]).t.Q75ddl, obj24);
        const items2 = [label(tmp55, obj23), ];
        obj25 = { styles: _undefined.action };
        const obj38 = user(NONE[24]);
        obj25.IconComponent = type(NONE[35]).ChatIcon;
        obj25.type = "neutral";
        obj25.onPress = function onPress() {
          let tmp;
          if (null != outer1_7) {
            tmp = outer1_7(outer1_26.current);
          }
          return tmp;
        };
        const intl13 = type(NONE[28]).intl;
        const obj26 = {};
        const tmp58 = user(NONE[29]);
        obj26.name = user(NONE[24]).getName(user);
        obj25.accessibilityLabel = intl13.formatToPlainString(type(NONE[28]).t.zFfSFQ, obj26);
        items2[1] = label(tmp58, obj25);
        obj22.children = items2;
        tmp12 = applicationId(flag3, obj22);
        const obj41 = user(NONE[24]);
      }
      const obj27 = { accessibilityActions: items, actions: tmp12 };
      return obj27;
    }
  }, items6);
  ({ accessibilityActions: accessibilityActions2, actions } = memo);
  const items7 = [user, handleMessage, applicationId];
  let callback1 = flag2.useCallback((nativeEvent) => {
    const actionName = nativeEvent.nativeEvent.actionName;
    if (_undefined.CALL === actionName) {
      isMobileOnline(user);
    } else if (_undefined.MESSAGE === actionName) {
      let tmp21;
      if (null != handleMessage) {
        tmp21 = handleMessage(user);
      }
      return tmp21;
    } else if (_undefined.ACCEPT === actionName) {
      isVROnline(user, applicationId);
    } else {
      if (_undefined.DECLINE !== actionName) {
        if (_undefined.CANCEL !== actionName) {
          if (_undefined.ACCEPT_SUGGESTION === actionName) {
            stateFromStores1(user);
          } else if (_undefined.IGNORE_SUGGESTION === actionName) {
            user(NONE[20]).ignore(user.id);
          }
        }
      }
      status(user, applicationId);
    }
  }, items7);
  const items8 = [onLongPress, user, analyticsLocations];
  const callback2 = flag2.useCallback(() => {
    if (null == onLongPress) {
      type(NONE[37])(NONE[36], NONE.paths).then((arg0) => arg0.default({ userId: outer1_1.id, localUser: outer1_1, sourceAnalyticsLocations: outer1_18 }));
      const promise = type(NONE[37])(NONE[36], NONE.paths);
    } else {
      onLongPress(user);
    }
  }, items8);
  let obj6 = type(NONE[38]);
  const nameplate = obj6.useNameplate({ user, guildId });
  const items9 = [usernameColor, roleStyle];
  const memo1 = flag2.useMemo(() => {
    let tmp;
    if (null != usernameColor) {
      if ("username" === roleStyle) {
        const obj = { color: usernameColor };
        tmp = obj;
      }
    }
    return tmp;
  }, items9);
  const items10 = [tmp4.avatar, user, guildId, status, isMobileOnline, isVROnline, avatarDecoration];
  const items11 = [label, type, , , ];
  let name;
  const memo2 = flag2.useMemo(() => {
    const obj = { style: _undefined.avatar, user, guildId };
    let tmp2 = null;
    if (subLabel.OFFLINE !== status) {
      tmp2 = status;
    }
    obj.status = tmp2;
    obj.isMobileOnline = isMobileOnline;
    obj.isVROnline = isVROnline;
    obj.size = type(NONE[22]).AvatarSizes.REFRESH_MEDIUM_32;
    obj.avatarDecoration = avatarDecoration;
    obj.autoStatusCutout = true;
    return label(type(NONE[22]).Avatar, obj);
  }, items10);
  if (null != stateFromStores1) {
    name = stateFromStores1.name;
  }
  items11[2] = name;
  items11[3] = stateFromStores;
  items11[4] = user;
  const memo3 = flag2.useMemo(() => {
    if (undefined !== label) {
      let name = label;
    } else {
      if (type === trailing.SUGGESTION) {
        name = undefined;
        if (null != stateFromStores1) {
          name = stateFromStores1.name;
        }
        if (null != name) {
          name = stateFromStores1.name;
        }
      }
      if (null != stateFromStores) {
        name = stateFromStores;
      } else {
        name = user(NONE[24]).getName(user);
        const obj = user(NONE[24]);
      }
    }
    return name;
  }, items11);
  const items12 = [label, flag3, premiumSince];
  const items13 = [subLabel, user, type, useReducedMotion, flag4, guildId, applicationId];
  const memo4 = flag2.useMemo(() => {
    if (undefined === label) {
      let obj = {};
      let tmp5 = null;
      if (flag3) {
        obj = { size: "xs", color: user(NONE[12]).colors.TEXT_FEEDBACK_WARNING };
        tmp5 = label(type(NONE[39]).CrownIcon, obj);
      }
      const items = [tmp5, ];
      let tmp11 = null;
      if (null != premiumSince) {
        obj = { size: "xs", color: user(NONE[12]).unsafe_rawColors.GUILD_BOOSTING_PINK };
        tmp11 = label(type(NONE[40]).BoostGemIcon, obj);
      }
      items[1] = tmp11;
      obj.children = items;
      return applicationId(flag4, obj);
    }
  }, items12);
  const items14 = [trailing, flag2, NONE, actions];
  const memo5 = flag2.useMemo(() => {
    if (undefined !== subLabel) {
      let tmp9 = subLabel;
    } else {
      const obj = { user, type, animate: !useReducedMotion, isGameRelationship: flag4, guildId, applicationId };
      tmp9 = label(avatarDecoration, obj);
    }
    return tmp9;
  }, items13);
  const memo6 = flag2.useMemo(() => {
    if (null != trailing) {
      let tmp2 = trailing;
    } else {
      tmp2 = null;
      if (!flag2) {
        let tmp5;
        if (NONE === guildId.ACTIONS) {
          tmp5 = actions;
        }
        tmp2 = tmp5;
      }
    }
    return tmp2;
  }, items14);
  let tmp24 = user(NONE[41])(guildId, user.id);
  let obj7 = type(NONE[42]);
  const processColorStringsArray = obj7.useProcessColorStringsArray(roleColors);
  if (tmp24) {
    tmp24 = "username" === roleStyle;
  }
  if (tmp24) {
    tmp24 = processColorStringsArray.length > 1;
  }
  obj = { userId: user.id, guildId };
  const tmp25 = user(NONE[43])(obj);
  let obj9 = type(NONE[44]);
  const displayNameStylesFont = obj9.useDisplayNameStylesFont({ displayNameStyles: tmp25 });
  obj = { lineClamp: 1, variant: "text-md/semibold" };
  let obj11 = type(NONE[24]);
  const humanizeStatusResult = obj11.humanizeStatus(status, { isMobile: isMobileOnline, isVR: isVROnline });
  let combined;
  if ("string" === typeof memo3) {
    if (null != humanizeStatusResult) {
      const _HermesInternal = HermesInternal;
      combined = "" + memo3 + ", " + humanizeStatusResult;
    }
  }
  obj1 = { style: tmp4.usernameLabelContainer };
  if (flag6) {
    if (null != tmp25) {
      if (null == guildId) {
        obj2 = { userId: user.id, userName: memo3 };
        const items15 = [tmp4.usernameLabel, memo1];
        obj2.style = items15;
        obj2.defaultColor = "mobile-text-heading-primary";
        obj2.accessibilityLabel = combined;
        const merged1 = Object.assign(obj);
        let tmp32Result = label(user(NONE[45]), obj2);
        const tmp39 = user(NONE[45]);
      }
      const items16 = [tmp32Result, memo4, ];
      if (user.bot) {
        obj3 = { verified: user.isVerifiedBot() };
        const tmp44Result = tmp44(tmp45[46]);
        obj3.type = type(tmp45[47]).getBotTagTypeFromUser(user);
        let tmp43Result = tmp43(tmp44Result, obj3);
        let obj19 = type(tmp45[47]);
      } else {
        obj4 = { userId: user.id };
        tmp43Result = tmp43(tmp44(tmp45[48]), obj4);
      }
      items16[2] = tmp43Result;
      obj1.children = items16;
      const tmp30Result = tmp30(tmp31, obj1);
      let tmp50 = "dot" !== roleStyle;
      if (!tmp50) {
        tmp50 = null == usernameColor && null == roleColors;
        const tmp51 = null == usernameColor && null == roleColors;
      }
      let tmp53Result = tmp30Result;
      if (!tmp50) {
        obj5 = { style: tmp4.labelContainer };
        obj6 = {};
        let tmp58 = null;
        if (null != usernameColor) {
          tmp58 = usernameColor;
        }
        obj6.color = tmp58;
        let tmp59 = null;
        if (null != roleColors) {
          tmp59 = roleColors;
        }
        obj6.colors = tmp59;
        obj6.containerStyles = tmp4.roleDot;
        const items17 = [label(type(NONE[22]).RoleDot, obj6), tmp30Result];
        obj5.children = items17;
        tmp53Result = applicationId(flag3, obj5);
        const tmp53 = applicationId;
        const tmp54 = flag3;
        let tmp55 = label;
      }
      obj7 = {};
      const merged2 = Object.assign(merged);
      obj7["disabled"] = flag2;
      obj7["icon"] = memo2;
      obj7["onPress"] = callback;
      obj7["onLongPress"] = callback2;
      if (null != accessibilityActions) {
        accessibilityActions2 = accessibilityActions;
      }
      obj7["accessibilityActions"] = accessibilityActions2;
      if (null != onAccessibilityAction) {
        callback1 = onAccessibilityAction;
      }
      obj7["onAccessibilityAction"] = callback1;
      obj7["label"] = tmp53Result;
      obj7["subLabel"] = memo5;
      obj7["height"] = "100%";
      if (NONE === guildId.TOGGLE) {
        let obj8 = {};
        const merged3 = Object.assign(obj7);
        obj8["checked"] = flag;
        let tmp70 = label(type(NONE[49]).TableCheckboxRow, obj8);
      } else {
        if (null != nameplate) {
          if (flag5) {
            obj9 = {};
            const merged4 = Object.assign(obj7);
            obj9["trailing"] = memo6;
            obj9["nameplate"] = nameplate;
            tmp70 = label(type(NONE[50]).UserNameplateRow, obj9);
          }
        }
        let obj10 = {};
        const merged5 = Object.assign(obj7);
        obj10["trailing"] = memo6;
        tmp70 = label(type(NONE[51]).TableRow, obj10);
      }
      return tmp70;
    }
  }
  obj11 = {};
  let tmp33;
  if (tmp24) {
    tmp33 = processColorStringsArray;
  }
  obj11.gradientColors = tmp33;
  obj11.color = "mobile-text-heading-primary";
  const items18 = [tmp4.usernameLabel, memo1, ];
  if (flag7) {
    flag7 = null != displayNameStylesFont;
  }
  if (flag7) {
    let obj12 = { fontFamily: displayNameStylesFont };
    flag7 = obj12;
  }
  items18[2] = flag7;
  obj11.style = items18;
  obj11.accessibilityLabel = combined;
  const merged6 = Object.assign(obj);
  obj11["children"] = memo3;
  tmp32Result = label(type(NONE[23]).Text, obj11);
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/UserRow.tsx");

export default memoResult;
