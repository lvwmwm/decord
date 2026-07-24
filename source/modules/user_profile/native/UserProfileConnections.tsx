// Module ID: 12143
// Function ID: 95137
// Name: VerifiedIcon
// Dependencies: [31, 27, 1921, 3970, 5510, 653, 4940, 33, 1273, 4130, 689, 10033, 3834, 3976, 10038, 10039, 8310, 1324, 4939, 4814, 1392, 8380, 4324, 3827, 4099, 5490, 3830, 1212, 4126, 5165, 3833, 7620, 4660, 3842, 566, 12144, 5509, 5501, 12147, 2]
// Exports: UserProfileAccountConnectionsCard, UserProfileApplicationRoleConnectionsCard

// Module 12143 (VerifiedIcon)
import importAllResult from "LinkExternalSmallIcon";
import get_ActivityIndicator from "getSystemLocale";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import ARBITRARY_LARGE_OFFSET from "ARBITRARY_LARGE_OFFSET";
import ME from "ME";
import { MetadataFields } from "OperatorTypes";
import jsxProd from "ManaContext";
import Button from "Button";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import Button from "Button";

let CARD_PADDING;
let CARD_ROWS_COLUMN_GAP;
let closure_10;
let closure_11;
let closure_13;
let closure_14;
let closure_15;
let closure_4;
let closure_5;
let closure_8;
let closure_9;
const require = arg1;
function VerifiedIcon(arg0) {
  let isTwitterVerifiedAccount;
  let theme;
  ({ theme, isTwitterVerifiedAccount } = arg0);
  if (isTwitterVerifiedAccount === undefined) {
    isTwitterVerifiedAccount = false;
  }
  const tmp = callback3();
  let obj = { size: REFRESH_SMALL_16, style: tmp.verifiedIcon };
  let obj1 = require(3834) /* map */;
  let PLATFORM_TWITTER = obj1.useToken(importDefault(689).colors.MOBILE_TEXT_HEADING_PRIMARY, theme);
  if (isTwitterVerifiedAccount) {
    PLATFORM_TWITTER = importDefault(689).unsafe_rawColors.PLATFORM_TWITTER;
  }
  if (!obj3.isThemeLight(theme)) {
    if (!isTwitterVerifiedAccount) {
      let WHITE = importDefault(689).unsafe_rawColors.BLACK;
    }
    obj = { style: tmp.verifiedIconContainer };
    obj = { source: importDefault(10038), color: PLATFORM_TWITTER };
    const merged = Object.assign(obj);
    const items = [callback(require(1273) /* Button */.Icon, obj), ];
    obj1 = { source: importDefault(10039), color: WHITE };
    const merged1 = Object.assign(obj);
    items[1] = callback(require(1273) /* Button */.Icon, obj1);
    obj.children = items;
    return callback2(closure_5, obj);
  }
  WHITE = importDefault(689).unsafe_rawColors.WHITE;
}
({ Pressable: closure_4, View: closure_5 } = get_ActivityIndicator);
({ CARD_ROWS_ICON_SIZE: closure_8, CARD_ROWS_ICON_SIZE_VARIANT: closure_9 } = ARBITRARY_LARGE_OFFSET);
({ CARD_PADDING, CARD_ROWS_COLUMN_GAP } = ARBITRARY_LARGE_OFFSET);
({ AnalyticEvents: closure_10, PlatformTypes: closure_11 } = ME);
({ jsx: closure_13, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
const REFRESH_SMALL_16 = require("Button").Icon.Sizes.REFRESH_SMALL_16;
const iconSize = Button.getIconSize(REFRESH_SMALL_16);
obj = { cardContainer: obj, cardTitle: { marginBottom: 0 }, connectionRow: Button, connectionInfoContainer: { flexGrow: 1 }, connectedAccountName: { flexDirection: "row", alignItems: "center", columnGap: 4 }, connectedAccountNameText: { flex: 1, marginRight: 4 }, verifiedIconContainer: { height: iconSize, width: iconSize }, verifiedIcon: { position: "absolute", left: 0, top: 0 }, connectionMetadata: { flexDirection: "row", flexWrap: "wrap", alignItems: "center", overflow: "hidden" } };
obj = { paddingBottom: CARD_PADDING - 12 };
Button = { flexDirection: "row", alignItems: "center", columnGap: CARD_ROWS_COLUMN_GAP, paddingVertical: 12, minHeight: 60 };
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_ACTIVE };
obj.metadataItem = _createForOfIteratorHelperLoose;
obj.poweredByContainer = { flexDirection: "row", alignItems: "center", marginTop: 6 };
let obj3 = {};
obj3.borderRadius = Button.getIconSize(require("Button").Icon.Sizes.MEDIUM);
obj.applicationIcon = obj3;
let closure_17 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_18 = importAllResult.memo((userId) => {
  let accountType;
  let metadata;
  let showMetadata;
  let style;
  let theme;
  userId = userId.userId;
  const account = userId.account;
  ({ theme, showMetadata } = userId);
  if (showMetadata === undefined) {
    showMetadata = true;
  }
  let trackUserProfileAction;
  let createdAtDate;
  let c4;
  let platformUserUrl;
  let tmp = callback3();
  let obj = userId(trackUserProfileAction[16]);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj1 = userId(trackUserProfileAction[12]);
  const token = obj1.useToken(account(trackUserProfileAction[10]).modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
  let obj2 = userId(trackUserProfileAction[12]);
  metadata = account.metadata;
  const token1 = obj2.useToken(account(trackUserProfileAction[10]).modules.mobile.TABLE_ROW_LABEL_COLOR);
  if (null == metadata) {
    metadata = {};
  }
  createdAtDate = null;
  if (showMetadata) {
    let obj4 = userId(trackUserProfileAction[18]);
    createdAtDate = obj4.getCreatedAtDate(metadata[MetadataFields.CREATED_AT], userId.locale);
  }
  if (!showMetadata) {
    let tmp24 = null != null;
    if (tmp24) {
      tmp24 = null.length > 0;
    }
    let obj11 = account(trackUserProfileAction[19]);
    const value = obj11.get(account.type);
    c4 = value;
    let obj13 = userId(trackUserProfileAction[20]);
    let obj14 = userId(trackUserProfileAction[13]);
    if (obj14.isThemeDark(theme)) {
      let darkPNG;
      if (!tmp28) {
        darkPNG = value.icon.darkPNG;
      }
      let lightPNG = darkPNG;
    } else if (!tmp28) {
      lightPNG = value.icon.lightPNG;
    }
    const source = obj13.makeSource(lightPNG);
    platformUserUrl = undefined;
    if (null != value) {
      if (null != value.getPlatformUserUrl) {
        platformUserUrl = value.getPlatformUserUrl(account);
      }
    }
    let tmp33 = account.type === constants.TWITTER;
    if (tmp33) {
      tmp33 = "1" === metadata[MetadataFields.TWITTER_VERIFIED];
    }
    let items = [account.type, platformUserUrl, trackUserProfileAction, userId];
    const callback = createdAtDate.useCallback(() => {
      if (null != platformUserUrl) {
        let obj = { action: "PRESS_VIEW_CONNECTED_ACCOUNT" };
        trackUserProfileAction(obj);
        obj = {
          href: platformUserUrl,
          trusted: account.type !== outer1_11.DOMAIN,
          onConfirm() {
              let obj = userId(trackUserProfileAction[22]);
              obj = { platform_type: outer1_1.type, other_user_id: outer1_0 };
              obj.trackWithMetadata(outer2_10.CONNECTED_ACCOUNT_VIEWED, obj);
              account(trackUserProfileAction[23]).openURL(outer1_5);
            }
        };
        userId(trackUserProfileAction[21]).handleClick(obj);
        const obj2 = userId(trackUserProfileAction[21]);
      }
    }, items);
    const items1 = [account.name, trackUserProfileAction];
    const callback1 = createdAtDate.useCallback(() => {
      trackUserProfileAction({ action: "COPY_CONNECTED_ACCOUNT" });
      const result = userId(trackUserProfileAction[24]).triggerHapticFeedback(userId(trackUserProfileAction[24]).HapticFeedbackTypes.IMPACT_LIGHT);
      const obj = userId(trackUserProfileAction[24]);
      userId(trackUserProfileAction[25]).copy(account.name);
      const obj2 = userId(trackUserProfileAction[25]);
      const result1 = userId(trackUserProfileAction[26]).presentCopiedToClipboard();
    }, items1);
    const items2 = [account.name, createdAtDate, ];
    let name;
    if (null != value) {
      name = value.name;
    }
    items2[2] = name;
    const memo = createdAtDate.useMemo(() => {
      const items = [];
      let name;
      if (null != _undefined) {
        name = _undefined.name;
      }
      let str = "";
      if (null != name) {
        str = name;
      }
      items.push(str);
      items.push(account.name);
      if (null != createdAtDate) {
        const intl = userId(trackUserProfileAction[27]).intl;
        const obj = { date: createdAtDate };
        items.push(intl.formatToPlainString(userId(trackUserProfileAction[27]).t["9rfonh"], obj));
      }
      return items.join(", ");
    }, items2);
    let name1;
    if (null != value) {
      name1 = value.name;
    }
    const items3 = [name1, platformUserUrl];
    const memo1 = createdAtDate.useMemo(() => {
      if (null != platformUserUrl) {
        const intl2 = userId(trackUserProfileAction[27]).intl;
        let stringResult = intl2.string(userId(trackUserProfileAction[27]).t.wuRE8M);
      } else {
        let name;
        const intl = userId(trackUserProfileAction[27]).intl;
        const obj = {};
        if (null != _undefined) {
          name = _undefined.name;
        }
        let str = "";
        if (null != name) {
          str = name;
        }
        obj.name = str;
        stringResult = intl.formatToPlainString(userId(trackUserProfileAction[27]).t.OKzaN3, obj);
      }
      return stringResult;
    }, items3);
    if (tmp2) {
      obj = { style: tmp.connectedAccountName };
      obj = { variant: token, color: token1, children: account.name };
      const items4 = [callback(userId(trackUserProfileAction[28]).Text, obj), ];
      let tmp75 = null;
      if (account.verified) {
        obj1 = { theme, isTwitterVerifiedAccount: tmp33 };
        tmp75 = callback(VerifiedIcon, obj1);
      }
      items4[1] = tmp75;
      obj.children = items4;
      if (null != createdAtDate) {
        obj2 = {};
        let tmp82 = null;
        if (null != createdAtDate) {
          const obj3 = { variant: "text-xs/medium", color: "text-subtle" };
          let intl2 = userId(trackUserProfileAction[27]).intl;
          obj4 = { date: createdAtDate };
          obj3.children = intl2.format(userId(trackUserProfileAction[27]).t["9rfonh"], obj4);
          tmp82 = callback(userId(trackUserProfileAction[28]).Text, obj3);
        }
        const items5 = [tmp82, ];
        let tmp86 = null;
        if (tmp24) {
          const obj5 = { style: tmp.connectionMetadata, children: null };
          tmp86 = callback(platformUserUrl, obj5);
        }
        items5[1] = tmp86;
        obj2.children = items5;
        const tmp80 = closure_14;
        const tmp80Result = closure_14(closure_15, obj2);
        const tmp81 = closure_15;
      }
      let obj6 = { label: closure_14(platformUserUrl, obj), subLabel: tmp80Result };
      let obj7 = { size: closure_9, source };
      obj6.icon = callback(userId(trackUserProfileAction[30]).BaseIconImage, obj7);
      let tmp94;
      if (null != platformUserUrl) {
        let obj8 = { size: "sm" };
        tmp94 = callback(userId(trackUserProfileAction[31]).LinkExternalSmallIcon, obj8);
      }
      obj6.trailing = tmp94;
      let tmp98 = callback1;
      if (null != platformUserUrl) {
        tmp98 = callback;
      }
      obj6.onPress = tmp98;
      obj6.onLongPress = callback1;
      obj6.accessibilityLabel = memo;
      obj6.accessibilityHint = memo1;
      obj6.accessibilityRole = "button";
      return callback(userId(trackUserProfileAction[29]).TableRow, obj6);
    } else {
      if (null != platformUserUrl) {
        let PressableOpacity = userId(trackUserProfileAction[32]).PressableOpacity;
      } else {
        PressableOpacity = c4;
      }
      let obj9 = { accessibilityLabel: memo, accessibilityHint: memo1, accessibilityRole: "button" };
      let tmp46;
      if (null != platformUserUrl) {
        tmp46 = callback;
      }
      obj9.onPress = tmp46;
      obj9.onLongPress = callback1;
      obj9.style = tmp.connectionRow;
      let obj10 = { size: closure_9, source };
      const items6 = [callback(userId(trackUserProfileAction[30]).BaseIconImage, obj10), , ];
      obj11 = { style: tmp.connectionInfoContainer };
      const obj12 = { style: tmp.connectedAccountName };
      obj13 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp.connectedAccountNameText, lineClamp: 2, children: account.name };
      const items7 = [callback(userId(trackUserProfileAction[28]).Text, obj13), ];
      let tmp56 = null;
      if (account.verified) {
        obj14 = { theme, isTwitterVerifiedAccount: tmp33 };
        tmp56 = callback(VerifiedIcon, obj14);
      }
      items7[1] = tmp56;
      obj12.children = items7;
      const items8 = [closure_14(platformUserUrl, obj12), , ];
      let tmp59 = null;
      if (null != createdAtDate) {
        const obj15 = { variant: "text-xs/medium", color: "text-muted" };
        let intl = userId(trackUserProfileAction[27]).intl;
        const obj16 = { date: createdAtDate };
        obj15.children = intl.format(userId(trackUserProfileAction[27]).t["9rfonh"], obj16);
        tmp59 = callback(userId(trackUserProfileAction[28]).Text, obj15);
      }
      items8[1] = tmp59;
      let tmp63 = null;
      if (tmp24) {
        const obj17 = { style: tmp.connectionMetadata, children: null };
        tmp63 = callback(platformUserUrl, obj17);
      }
      items8[2] = tmp63;
      obj11.children = items8;
      items6[1] = closure_14(platformUserUrl, obj11);
      let tmp66 = null != platformUserUrl;
      if (tmp66) {
        const obj18 = { size: "sm" };
        tmp66 = callback(userId(trackUserProfileAction[31]).LinkExternalSmallIcon, obj18);
      }
      items6[2] = tmp66;
      obj9.children = items6;
      return closure_14(PressableOpacity, obj9);
    }
  } else {
    const obj19 = { accountType: account.type, metadata, style: tmp.metadataItem };
    ({ accountType, metadata, style } = obj19);
    if (constants.REDDIT === accountType) {
      obj10 = userId(trackUserProfileAction[11]);
      let redditMetadataItems = obj10.generateRedditMetadataItems(metadata, style);
    } else if (constants.STEAM === accountType) {
      obj9 = userId(trackUserProfileAction[11]);
      redditMetadataItems = obj9.generateSteamMetadataItems(metadata, style);
    } else {
      tmp = constants;
      if (constants.BLUESKY !== accountType) {
        tmp = constants;
        if (constants.TWITTER !== accountType) {
          tmp = constants;
          if (constants.MASTODON !== accountType) {
            tmp = constants;
            if (constants.PAYPAL === accountType) {
              obj7 = userId(trackUserProfileAction[11]);
              redditMetadataItems = obj7.generatePaypalMetadataItems(metadata, style);
            } else if (constants.EBAY !== accountType) {
              redditMetadataItems = null;
              if (constants.TIKTOK === accountType) {
                tmp = userId;
                tmp = trackUserProfileAction;
                redditMetadataItems = userId(trackUserProfileAction[11]).generateTikTokMetadataItems(metadata, style);
                const obj36 = userId(trackUserProfileAction[11]);
              }
            }
            obj6 = userId(trackUserProfileAction[11]);
            redditMetadataItems = obj6.generateEbayMetadataItems(metadata, style);
          }
        }
      }
      obj8 = userId(trackUserProfileAction[11]);
      redditMetadataItems = obj8.generateTwitterMetadataItems(metadata, style);
    }
  }
});
let closure_19 = importAllResult.memo((application) => {
  application = application.application;
  let str;
  const tmp = callback3();
  let obj = application(str[16]);
  const trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  const iconSource = application.getIconSource(closure_8);
  const profile = application.identity.profile;
  let username;
  if (null != profile) {
    username = profile.username;
  }
  str = "";
  if (null != username) {
    str = username;
  }
  let items = [str, trackUserProfileAction];
  const callback = importAllResult.useCallback(() => {
    trackUserProfileAction({ action: "COPY_CONNECTED_ACCOUNT" });
    const result = application(str[24]).triggerHapticFeedback(application(str[24]).HapticFeedbackTypes.IMPACT_LIGHT);
    const obj = application(str[24]);
    application(str[25]).copy(str);
    const obj2 = application(str[25]);
    const result1 = application(str[26]).presentCopiedToClipboard();
  }, items);
  const items1 = [application.name, str];
  const memo = importAllResult.useMemo(() => {
    const items = [];
    items.push(application.name);
    items.push(str);
    return items.join(", ");
  }, items1);
  const items2 = [application.name];
  const memo1 = importAllResult.useMemo(() => {
    const intl = application(str[27]).intl;
    return intl.formatToPlainString(application(str[27]).t.OKzaN3, { name: application.name });
  }, items2);
  if (tmp2) {
    obj = { label: str };
    let tmp26;
    if (null != iconSource) {
      obj = { size: closure_9, source: iconSource, style: tmp.applicationIcon };
      tmp26 = callback(application(str[30]).BaseIconImage, obj);
    }
    obj.icon = tmp26;
    obj.onPress = callback;
    obj.onLongPress = callback;
    obj.accessibilityLabel = memo;
    obj.accessibilityHint = memo1;
    obj.accessibilityRole = "button";
    let tmp8Result = callback(application(str[29]).TableRow, obj);
    const tmp23 = callback;
  } else {
    const obj1 = { accessibilityLabel: memo, accessibilityHint: memo1, accessibilityRole: "button", onLongPress: callback, style: tmp.connectionRow };
    let tmp10 = null;
    if (null != iconSource) {
      let obj2 = { size: closure_9, source: iconSource, style: tmp.applicationIcon };
      tmp10 = callback(application(str[30]).BaseIconImage, obj2);
    }
    const items3 = [tmp10, ];
    const obj3 = { style: tmp.connectionInfoContainer };
    const obj4 = { style: tmp.connectedAccountName };
    const obj5 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp.connectedAccountNameText, lineClamp: 2, children: str };
    obj4.children = callback(application(str[28]).Text, obj5);
    obj3.children = callback(closure_5, obj4);
    items3[1] = callback(closure_5, obj3);
    obj1.children = items3;
    tmp8Result = closure_14(closure_4, obj1);
    const tmp8 = closure_14;
    const tmp9 = closure_4;
  }
  return tmp8Result;
});
const memoResult = importAllResult.memo((applicationRoleConnection) => {
  applicationRoleConnection = applicationRoleConnection.applicationRoleConnection;
  const tmp = callback3();
  let obj = applicationRoleConnection(10033);
  const roleConnectionMetadataItems = obj.generateRoleConnectionMetadataItems(applicationRoleConnection);
  let obj1 = importDefault(1392);
  obj = { id: applicationRoleConnection.application.id, icon: applicationRoleConnection.application.icon };
  const applicationIconSource = obj1.getApplicationIconSource(obj);
  if (tmp2) {
    obj = {};
    let tmp30 = null;
    if (null != applicationRoleConnection.platform_name) {
      tmp30 = null;
      if (null != applicationRoleConnection.platform_username) {
        obj1 = { variant: "text-xs/medium", color: "text-subtle", children: applicationRoleConnection.platform_username };
        tmp30 = callback(applicationRoleConnection(4126).Text, obj1);
      }
    }
    const items = [tmp30, , ];
    let tmp34 = null;
    if (null != roleConnectionMetadataItems) {
      tmp34 = null;
      if (roleConnectionMetadataItems.length > 0) {
        const obj2 = { style: tmp.connectionMetadata, children: roleConnectionMetadataItems };
        tmp34 = callback(closure_5, obj2);
      }
    }
    items[1] = tmp34;
    const obj3 = { style: tmp.poweredByContainer };
    const obj4 = { variant: "text-xs/medium", color: "text-muted" };
    const intl2 = applicationRoleConnection(1212).intl;
    const obj5 = {
      applicationHook() {
          return applicationRoleConnection.application.name;
        }
    };
    obj4.children = intl2.format(applicationRoleConnection(1212).t.zIT9YA, obj5);
    obj3.children = callback(applicationRoleConnection(4126).Text, obj4);
    items[2] = callback(closure_5, obj3);
    obj.children = items;
    const obj6 = {};
    let name = applicationRoleConnection.platform_name;
    if (null == name) {
      name = applicationRoleConnection.platform_username;
    }
    if (null == name) {
      name = applicationRoleConnection.application.name;
    }
    obj6.label = name;
    obj6.subLabel = tmp4(closure_15, obj);
    const obj7 = { size: applicationRoleConnection(1273).Icon.Sizes.MEDIUM, source: applicationIconSource, disableColor: true };
    obj6.icon = callback(applicationRoleConnection(1273).Icon, obj7);
    return callback(applicationRoleConnection(5165).TableRow, obj6);
  } else {
    const obj8 = { style: tmp.connectionRow };
    const obj9 = { size: applicationRoleConnection(1273).Icon.Sizes.MEDIUM, source: applicationIconSource, disableColor: true };
    const items1 = [callback(applicationRoleConnection(1273).Icon, obj9), ];
    const obj10 = { style: tmp.connectionInfoContainer };
    let tmp12 = null;
    if (null != applicationRoleConnection.platform_name) {
      const obj11 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: applicationRoleConnection.platform_name };
      tmp12 = callback(applicationRoleConnection(4126).Text, obj11);
    }
    const items2 = [tmp12, , , ];
    let tmp16 = null;
    if (null != applicationRoleConnection.platform_username) {
      const obj12 = { variant: "text-md/normal", color: "text-default", children: applicationRoleConnection.platform_username };
      tmp16 = callback(applicationRoleConnection(4126).Text, obj12);
    }
    items2[1] = tmp16;
    let tmp20 = null;
    if (null != roleConnectionMetadataItems) {
      tmp20 = null;
      if (roleConnectionMetadataItems.length > 0) {
        const obj13 = { style: tmp.connectionMetadata, children: roleConnectionMetadataItems };
        tmp20 = callback(closure_5, obj13);
      }
    }
    items2[2] = tmp20;
    const obj14 = { style: tmp.poweredByContainer };
    const obj15 = { variant: "text-xs/medium", color: "text-muted" };
    const intl = applicationRoleConnection(1212).intl;
    const obj16 = {
      applicationHook() {
          return applicationRoleConnection.application.name;
        }
    };
    obj15.children = intl.format(applicationRoleConnection(1212).t.zIT9YA, obj16);
    obj14.children = callback(applicationRoleConnection(4126).Text, obj15);
    items2[3] = callback(closure_5, obj14);
    obj10.children = items2;
    items1[1] = closure_14(closure_5, obj10);
    obj8.children = items1;
    return tmp4(closure_5, obj8);
  }
  tmp2 = importDefault(1324)("UserProfileConnections");
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_profile/native/UserProfileConnections.tsx");

export const ApplicationRoleConnection = memoResult;
export const UserProfileAccountConnectionsCard = function UserProfileAccountConnectionsCard(userId) {
  let appIdentities;
  let connections;
  userId = userId.userId;
  const tmp = callback3();
  const tmp2 = theme(1324)("UserProfileConnections");
  let obj = userId(3842);
  theme = obj.useThemeContext().theme;
  let obj1 = userId(566);
  const items = [_isNativeReflectConstruct];
  const dependencyMap = obj1.useStateFromStores(items, () => outer1_6.locale);
  const items1 = [closure_7];
  const stateFromStores = userId(566).useStateFromStores(items1, () => outer1_7.hidePersonalInformation);
  const obj3 = userId(566);
  ({ connections, appIdentities } = theme(12144)(userId));
  if (!stateFromStores) {
    const items2 = [];
    let arraySpreadResult = HermesBuiltin.arraySpread(connections.map((account) => outer1_13(outer1_18, { account, theme, locale: closure_2, userId }, account.id)), 0);
    arraySpreadResult = HermesBuiltin.arraySpread(appIdentities.map((application) => {
      const identity = application.identity;
      return outer1_13(outer1_19, { identity, application: application.application }, "" + identity.application_id + "-" + identity.provider_issued_user_id);
    }), arraySpreadResult);
    obj = {};
    const items3 = [tmp.cardContainer, userId.style];
    obj.style = items3;
    let stringResult;
    if (!tmp2) {
      const intl = userId(1212).intl;
      stringResult = intl.string(userId(1212).t["3fe7U5"]);
    }
    obj.title = stringResult;
    obj.titleStyle = tmp.cardTitle;
    if (tmp2) {
      obj = { hasIcons: true };
      const intl2 = tmp17(1212).intl;
      obj.title = intl2.string(tmp17(1212).t["3fe7U5"]);
      obj.children = items2;
      let tmp16Result = tmp16(tmp17(5501).TableRowGroup, obj);
    } else {
      obj1 = { children: items2 };
      tmp16Result = tmp16(tmp17(5509).UserProfileCardRows, obj1);
    }
    obj.children = tmp16Result;
    return closure_13(theme(5509), obj);
  }
  return null;
};
export const UserProfileApplicationRoleConnectionsCard = function UserProfileApplicationRoleConnectionsCard(arg0) {
  let style;
  let userId;
  ({ userId, style } = arg0);
  const tmp = callback3();
  const tmp2 = importDefault(1324)("UserProfileConnections");
  const arr = importDefault(12147)(userId);
  let obj = require(566) /* initialize */;
  const items = [closure_7];
  if (!obj.useStateFromStores(items, () => outer1_7.hidePersonalInformation)) {
    if (0 !== arr.length) {
      const mapped = arr.map((application) => outer1_13(outer1_20, { applicationRoleConnection: application }, application.application.id));
      obj = {};
      const items1 = [tmp.cardContainer, style];
      obj.style = items1;
      let stringResult;
      if (!tmp2) {
        const intl = require(1212) /* getSystemLocale */.intl;
        stringResult = intl.string(require(1212) /* getSystemLocale */.t.PHjkRE);
      }
      obj.title = stringResult;
      obj.titleStyle = tmp.cardTitle;
      if (tmp2) {
        obj = { hasIcons: true };
        const intl2 = tmp7(1212).intl;
        obj.title = intl2.string(tmp7(1212).t.PHjkRE);
        obj.children = mapped;
        let tmp6Result = tmp6(tmp7(5501).TableRowGroup, obj);
      } else {
        const obj1 = { children: mapped };
        tmp6Result = tmp6(tmp7(5509).UserProfileCardRows, obj1);
      }
      obj.children = tmp6Result;
      return closure_13(importDefault(5509), obj);
    }
  }
  return null;
};
