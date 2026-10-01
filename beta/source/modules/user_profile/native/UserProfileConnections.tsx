// Module ID: 12671
// Function ID: 12672
// Name: UserProfileConnections
// Dependencies: [19, 17, 2112, 4679, 6629, 1074, 5720, 21, 1177, 4836, 576, 11070, 4531, 4685, 11075, 11076, 7635, 5719, 5595, 1397, 7818, 5016, 4525, 4801, 6610, 4527, 1115, 4832, 5917, 4530, 8037, 4540, 504, 12672, 6628, 5999, 12675, 2]
// Exports: UserProfileAccountConnectionsCard, UserProfileApplicationRoleConnectionsCard

// Module 12671 (UserProfileConnections)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import ToastUtils from "ToastUtils" /* 4527 */;
import useToken from "useToken" /* 4531 */;
import shared from "shared" /* 4685 */;
import HapticUtils from "HapticUtils" /* 4801 */;
import Constants2 from "Constants" /* 5720 */;
import TableRowGroup from "TableRowGroup" /* 5999 */;
import ClipboardUtils from "ClipboardUtils" /* 6610 */;
import MaskedLinkUtils from "MaskedLinkUtils" /* 7818 */;
import ConnectionMetadataVanityItems from "ConnectionMetadataVanityItems" /* 11070 */;
import AssetRegistryDefault from "AssetRegistry" /* 11075 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11076 */;
import useUserProfileApplicationRoleConnectionsDefault from "useUserProfileApplicationRoleConnections" /* 12675 */;
import react from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2112 */;
import StreamerModeStore from "StreamerModeStore" /* 4679 */;
import Constants_mod from "Constants" /* 6629 */;
import Constants_mod2 from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import native_mod from "native" /* 1177 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let application, applicationRoleConnection, dependencyMap;

let CARD_PADDING;
let c10;
let c9;
let closure_12;
let closure_14;
let map1;
let metroImportAll;
let metroImportDefault;
let native;
let obj2;
let obj3;
let obj4;
let obj5;
let tmp2;
const UserProfileCardDefault = tmp2(6628);
function VerifiedIcon(arg0) {
  let isTwitterVerifiedAccount;
  let items;
  let theme;
  ({ theme, isTwitterVerifiedAccount } = arg0);
  if (isTwitterVerifiedAccount === undefined) {
    isTwitterVerifiedAccount = false;
  }
  const tmp = closure_16();
  const obj = { size: REFRESH_SMALL_16, style: tmp.verifiedIcon };
  const obj2 = useToken;
  let PLATFORM_TWITTER = obj2.useToken(nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, theme);
  if (isTwitterVerifiedAccount) {
    PLATFORM_TWITTER = tmp4(576).unsafe_rawColors.PLATFORM_TWITTER;
  }
  const tmp2Result = shared;
  if (!tmp2Result.isThemeLight(theme)) {
    let WHITE;
    if (!isTwitterVerifiedAccount) {
      WHITE = tmp4(576).unsafe_rawColors.BLACK;
    }
    const obj3 = { style: tmp.verifiedIconContainer, children: items };
    const obj4 = { source: AssetRegistryDefault, color: PLATFORM_TWITTER };
    const Icon = tmp2(1177).Icon;
    const merged = Object.assign(obj);
    items = [closure_12(Icon, obj4), ];
    const obj5 = { source: AssetRegistryDefault2, color: WHITE };
    const Icon2 = tmp2(1177).Icon;
    const merged1 = Object.assign(obj);
    items[1] = closure_12(Icon2, obj5);
    return map1(View, obj3);
  }
  WHITE = tmp4(576).unsafe_rawColors.WHITE;
}
const View = react_native.View;
let Constants = Constants_mod2;
({ CARD_ROWS_ICON_SIZE: metroImportDefault, CARD_ROWS_ICON_SIZE_VARIANT: metroImportAll, CARD_PADDING } = Constants);
Constants = Constants_mod2;
({ AnalyticEvents: c9, PlatformTypes: c10 } = Constants);
const MetadataFields = Constants2.MetadataFields;
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
const REFRESH_SMALL_16 = native.Icon.Sizes.REFRESH_SMALL_16;
native = native_mod;
const iconSize = native.getIconSize(REFRESH_SMALL_16);
let createStyles = createStyles_mod;
let obj = { cardContainer: obj2, refreshCardTitle: obj3, connectedAccountName: { flexDirection: "row", alignItems: "center", columnGap: 4 }, linkIcon: { marginEnd: 4 }, connectedAccountNameText: { flexShrink: 1 }, verifiedIconContainer: { height: iconSize, width: iconSize }, verifiedIcon: { position: "absolute", left: 0, top: 0 }, connectionMetadata: { flexDirection: "row", flexWrap: "wrap", alignItems: "center", overflow: "hidden" }, metadataItem: obj4, poweredByContainer: { flexDirection: "row", alignItems: "center", marginTop: 6 }, applicationIcon: obj5 };
obj2 = { paddingBottom: CARD_PADDING - 12 };
obj3 = { marginBottom: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj4 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj5 = { borderRadius: native.getIconSize(native.Icon.Sizes.MEDIUM) };
native = native_mod;
let closure_16 = createStyles(obj);
let closure_18 = react.memo((userId) => {
  let intl;
  let items4;
  let lightPNG;
  let obj12;
  let obj8;
  let showMetadata;
  let theme;
  let tmp28Result2;
  let tmp30Result6;
  let tmp39;
  let user;
  userId = userId.userId;
  const account = userId.account;
  ({ theme, showMetadata } = userId);
  const locale = userId.locale;
  if (showMetadata === undefined) {
    showMetadata = true;
  }
  let trackUserProfileAction;
  let createdAtDate;
  let c4;
  let platformUserUrl;
  const tmp = closure_16();
  const tmp3 = trackUserProfileAction;
  let obj = userId(trackUserProfileAction[16]);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj2 = userId(trackUserProfileAction[12]);
  const token = obj2.useToken(account(trackUserProfileAction[10]).modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
  let obj3 = userId(trackUserProfileAction[12]);
  let metadata = account.metadata;
  const token1 = obj3.useToken(account(trackUserProfileAction[10]).modules.mobile.TABLE_ROW_LABEL_COLOR);
  const tmp4 = account;
  if (metadata == null) {
    metadata = {};
  }
  createdAtDate = null;
  if (showMetadata) {
    const tmp2Result = userId(tmp3[17]);
    createdAtDate = tmp2Result.getCreatedAtDate(metadata[MetadataFields.CREATED_AT], locale);
  }
  let tmp9 = null;
  if (showMetadata) {
    let redditMetadataItems;
    const type = account.type;
    const metadataItem = tmp.metadataItem;
    if (constants.REDDIT === type) {
      const tmp2Result9 = userId(tmp3[11]);
      redditMetadataItems = tmp2Result9.generateRedditMetadataItems(metadata, metadataItem);
    } else if (constants.STEAM === type) {
      const tmp2Result10 = userId(tmp3[11]);
      redditMetadataItems = tmp2Result10.generateSteamMetadataItems(metadata, metadataItem);
    } else {
      if (constants.BLUESKY !== type) {
        if (constants.TWITTER !== type) {
          if (constants.MASTODON !== type) {
            if (constants.PAYPAL === type) {
              const tmp2Result11 = userId(tmp3[11]);
              redditMetadataItems = tmp2Result11.generatePaypalMetadataItems(metadata, metadataItem);
            } else if (constants.EBAY === type) {
              const tmp2Result12 = userId(tmp3[11]);
              redditMetadataItems = tmp2Result12.generateEbayMetadataItems(metadata, metadataItem);
            } else {
              redditMetadataItems = null;
              if (constants.TIKTOK === type) {
                const tmp2Result13 = userId(tmp3[11]);
                redditMetadataItems = tmp2Result13.generateTikTokMetadataItems(metadata, metadataItem);
              }
            }
          }
        }
      }
      const tmp2Result14 = userId(tmp3[11]);
      redditMetadataItems = tmp2Result14.generateTwitterMetadataItems(metadata, metadataItem);
    }
    tmp9 = redditMetadataItems;
  }
  const tmp12 = null != tmp9 && tmp9.length > 0;
  const tmp4Result = tmp4(tmp3[18]);
  const value = tmp4Result.get(account.type);
  c4 = value;
  const makeSource = tmp2(tmp3[19]).makeSource;
  userId(tmp3[19]);
  const tmp2Result16 = userId(tmp3[13]);
  if (tmp2Result16.isThemeDark(theme)) {
    let darkPNG;
    if (value != null) {
      darkPNG = value.icon.darkPNG;
    }
    lightPNG = darkPNG;
  } else if (value != null) {
    lightPNG = value.icon.lightPNG;
  }
  platformUserUrl = undefined;
  const source = makeSource(lightPNG);
  if (value != null) {
    const getPlatformUserUrl = value.getPlatformUserUrl;
    if (getPlatformUserUrl != null) {
      platformUserUrl = getPlatformUserUrl(account);
    }
  }
  let tmp19 = account.type === constants.TWITTER;
  if (tmp19) {
    let str = "1";
    tmp19 = "1" === metadata[MetadataFields.TWITTER_VERIFIED];
  }
  let items = [account.type, platformUserUrl, trackUserProfileAction, userId];
  const items1 = [account.name, trackUserProfileAction];
  const callback = createdAtDate.useCallback(() => {
    let other_user_id;
    let type;
    if (null != platformUserUrl) {
      trackUserProfileAction({ action: "PRESS_VIEW_CONNECTED_ACCOUNT" });
      let obj = MaskedLinkUtils;
      let obj2 = {
        href: tmp,
        trusted: account.type !== constants.DOMAIN,
        onConfirm() {
            const obj = userId(trackUserProfileAction[21]);
            const obj2 = { platform_type: type.type, other_user_id };
            obj.trackWithMetadata(constants.CONNECTED_ACCOUNT_VIEWED, obj2);
            const obj3 = account(trackUserProfileAction[22]);
            obj3.openURL(platformUserUrl);
          }
      };
      obj.handleClick(obj2);
    }
  }, items);
  const callback1 = createdAtDate.useCallback(() => {
    trackUserProfileAction({ action: "COPY_CONNECTED_ACCOUNT" });
    const obj = HapticUtils;
    const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
    const obj2 = ClipboardUtils;
    obj2.copy(account.name);
    const obj3 = ToastUtils;
    const result1 = obj3.presentCopiedToClipboard();
  }, items1);
  const items2 = [account.name, createdAtDate, ];
  let name;
  const useMemo = createdAtDate.useMemo;
  const tmp21 = createdAtDate;
  if (value != null) {
    name = value.name;
  }
  items2[2] = name;
  let name1;
  const memo = useMemo(() => {
    const items = [];
    let str;
    const push = items.push;
    if (user != null) {
      str = user.name;
    }
    if (str == null) {
      str = "";
    }
    push(str);
    items.push(account.name);
    if (null != createdAtDate) {
      const push2 = items.push;
      const intl = intl3.intl;
      const obj = { date: tmp3 };
      push2(intl.formatToPlainString(intl3.t["9rfonh"], obj));
    }
    return items.join(", ");
  }, items2);
  const useMemo2 = tmp21.useMemo;
  if (value != null) {
    name1 = value.name;
  }
  const items3 = [name1, platformUserUrl];
  const obj4 = { style: tmp.connectedAccountName, children: items4 };
  const memo2 = useMemo2(() => {
    let stringResult;
    if (null != platformUserUrl) {
      const intl2 = intl3.intl;
      stringResult = intl2.string(intl3.t.wuRE8M);
    } else {
      const intl = intl3.intl;
      const formatToPlainString = intl.formatToPlainString;
      let str;
      const OKzaN3 = intl3.t.OKzaN3;
      if (user != null) {
        str = user.name;
      }
      if (str == null) {
        str = "";
      }
      const obj = { name: str };
      stringResult = formatToPlainString(OKzaN3, obj);
    }
    return stringResult;
  }, items3);
  items4 = [, ];
  const obj5 = { variant: token, color: token1, style: tmp.connectedAccountNameText, lineClamp: 2, children: account.name };
  items4[0] = closure_12(userId(tmp3[27]).Text, obj5);
  let tmp30Result = null;
  if (account.verified) {
    const obj6 = { theme, isTwitterVerifiedAccount: tmp19 };
    tmp30Result = tmp30(VerifiedIcon, obj6);
  }
  items4[1] = tmp30Result;
  const tmp28Result = closure_13(c4, obj4);
  if (null != createdAtDate) {
    let tmp30Result4 = null;
    const tmp35 = closure_14;
    if (null != createdAtDate) {
      const obj7 = { variant: "text-xs/medium", color: "text-subtle", children: intl.format(userId(tmp3[26]).t["9rfonh"], obj8) };
      const Text = tmp2(tmp3[27]).Text;
      intl = tmp2(tmp3[26]).intl;
      obj8 = { date: createdAtDate };
      tmp30Result4 = tmp30(Text, obj7);
    }
    const items5 = [tmp30Result4, ];
    let tmp30Result5 = null;
    if (tmp12) {
      const obj9 = { style: tmp.connectionMetadata, children: tmp9 };
      tmp30Result5 = tmp30(tmp29, obj9);
    }
    const obj10 = { children: items5 };
    items5[1] = tmp30Result5;
    tmp28Result2 = closure_13(tmp35, obj10);
  }
  const obj11 = { label: tmp28Result, subLabel: tmp28Result2, icon: closure_12(userId(tmp3[29]).BaseIconImage, obj12), trailing: tmp30Result6, onPress: tmp39, onLongPress: callback1, accessibilityLabel: memo, accessibilityHint: memo2, accessibilityRole: "button" };
  const TableRow = tmp2(tmp3[28]).TableRow;
  tmp30Result6 = undefined;
  obj12 = { size, source };
  if (null != platformUserUrl) {
    const obj13 = { size: "sm", style: tmp.linkIcon };
    tmp30Result6 = tmp30(tmp2(tmp3[30]).LinkExternalSmallIcon, obj13);
  }
  tmp39 = callback1;
  if (null != platformUserUrl) {
    tmp39 = callback;
  }
  return closure_12(TableRow, obj11);
});
let closure_19 = react.memo((application) => {
  let tmp8Result;
  application = application.application;
  let str;
  const identity = application.identity;
  const tmp = closure_16();
  let obj = application(str[16]);
  const trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  const iconSource = application.getIconSource(closure_7);
  const profile = identity.profile;
  str = undefined;
  if (profile != null) {
    str = profile.username;
  }
  if (str == null) {
    str = "";
  }
  let items = [str, trackUserProfileAction];
  const callback = react.useCallback(() => {
    trackUserProfileAction({ action: "COPY_CONNECTED_ACCOUNT" });
    const obj = HapticUtils;
    const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
    const obj2 = ClipboardUtils;
    obj2.copy(str);
    const obj3 = ToastUtils;
    const result1 = obj3.presentCopiedToClipboard();
  }, items);
  const items1 = [application.name, str];
  const items2 = [application.name];
  const memo = react.useMemo(() => {
    const items = [];
    items.push(application.name);
    items.push(str);
    return items.join(", ");
  }, items1);
  const memo1 = react.useMemo(() => {
    const intl = intl3.intl;
    const obj = { name: application.name };
    return intl.formatToPlainString(intl3.t.OKzaN3, obj);
  }, items2);
  let obj2 = { label: str, icon: tmp8Result, onPress: callback, onLongPress: callback, accessibilityLabel: memo, accessibilityHint: memo1, accessibilityRole: "button" };
  tmp8Result = undefined;
  const TableRow = tmp2(tmp3[28]).TableRow;
  if (null != iconSource) {
    let obj3 = { size, source: iconSource, style: tmp.applicationIcon };
    tmp8Result = tmp8(tmp2(tmp3[29]).BaseIconImage, obj3);
  }
  return closure_12(TableRow, obj2);
});
const memoResult = react.memo((applicationRoleConnection) => {
  let Icon;
  let Text;
  let intl;
  let obj11;
  let obj8;
  let obj9;
  applicationRoleConnection = applicationRoleConnection.applicationRoleConnection;
  const tmp = closure_16();
  const obj = ConnectionMetadataVanityItems;
  const roleConnectionMetadataItems = obj.generateRoleConnectionMetadataItems(applicationRoleConnection);
  let tmp7 = null;
  const obj2 = AvatarUtilsDefault;
  const obj3 = { id: applicationRoleConnection.application.id, icon: applicationRoleConnection.application.icon };
  const applicationIconSource = obj2.getApplicationIconSource(obj3);
  const tmp5 = map1;
  const tmp6 = authStore2;
  if (null != applicationRoleConnection.platform_name) {
    tmp7 = null;
    if (null != applicationRoleConnection.platform_username) {
      const obj4 = { variant: "text-xs/medium", color: "text-subtle", children: applicationRoleConnection.platform_username };
      tmp7 = closure_12(tmp2(4832).Text, obj4);
    }
  }
  const items = [tmp7, , ];
  let tmp9 = null;
  if (null != roleConnectionMetadataItems) {
    tmp9 = null;
    if (roleConnectionMetadataItems.length > 0) {
      const obj5 = { style: tmp.connectionMetadata, children: roleConnectionMetadataItems };
      tmp9 = closure_12(View, obj5);
    }
  }
  const obj6 = { children: items };
  items[1] = tmp9;
  const obj7 = { style: tmp.poweredByContainer, children: closure_12(Text, obj8) };
  obj8 = { variant: "text-xs/medium", color: "text-muted", children: intl.format(intl3.t.zIT9YA, obj9) };
  Text = tmp2(4832).Text;
  intl = tmp2(1115).intl;
  obj9 = {
    applicationHook() {
      return applicationRoleConnection.application.name;
    }
  };
  items[2] = closure_12(View, obj7);
  let name = applicationRoleConnection.platform_name;
  const tmp5Result = tmp5(tmp6, obj6);
  const TableRow = tmp2(5917).TableRow;
  if (name == null) {
    name = applicationRoleConnection.platform_username;
  }
  if (name == null) {
    name = applicationRoleConnection.application.name;
  }
  const obj10 = { label: name, subLabel: tmp5Result, icon: closure_12(Icon, obj11) };
  obj11 = { size: native.Icon.Sizes.MEDIUM, source: applicationIconSource, disableColor: true };
  Icon = tmp2(1177).Icon;
  return closure_12(TableRow, obj10);
});
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileConnections.tsx");

export const ApplicationRoleConnection = memoResult;
export const UserProfileAccountConnectionsCard = function UserProfileAccountConnectionsCard(userId) {
  let appIdentities;
  let connections;
  let intl;
  let items3;
  let locale;
  let locale2;
  let obj5;
  userId = userId.userId;
  const style = userId.style;
  const tmp2 = closure_16();
  let obj = userId(4540);
  const theme = obj.useThemeContext().theme;
  const items = [LocaleStore];
  const obj2 = userId(504);
  dependencyMap = obj2.useStateFromStores(items, () => locale2.locale);
  const items1 = [StreamerModeStore];
  const obj3 = userId(504);
  const stateFromStores = obj3.useStateFromStores(items1, () => StreamerModeStore.hidePersonalInformation);
  ({ connections, appIdentities } = theme(12672)(userId));
  theme(12672)(userId);
  const tmp6 = theme;
  if (!stateFromStores) {
    const items2 = [];
    const arraySpreadResult = HermesBuiltin.arraySpread(items2, connections.map((account) => {
      const obj = { account, theme, locale, userId };
      return closure_12(closure_18, obj, account.id);
    }), 0);
    HermesBuiltin.arraySpread(items2, appIdentities.map((application) => {
      const identity = application.identity;
      const obj = { identity, application: application.application };
      return closure_1_12(closure_1_19, obj, "" + identity.application_id + "-" + identity.provider_issued_user_id);
    }), arraySpreadResult);
    const obj4 = { style: items3, title: intl.string(userId(1115).t["3fe7U5"]), titleStyle: tmp2.refreshCardTitle, children: closure_12(userId(5999).TableRowGroup, obj5) };
    items3 = [tmp2.cardContainer, style];
    const tmp6Result = tmp6(6628);
    intl = tmp3(1115).intl;
    obj5 = { hasIcons: true, children: items2 };
    return closure_12(tmp6Result, obj4);
  }
  return null;
};
export const UserProfileApplicationRoleConnectionsCard = function UserProfileApplicationRoleConnectionsCard(arg0) {
  let intl;
  let items1;
  let obj3;
  let style;
  let userId;
  ({ userId, style } = arg0);
  const tmp = closure_16();
  const arr = useUserProfileApplicationRoleConnectionsDefault(userId);
  let obj = get_initialized;
  const items = [StreamerModeStore];
  if (!obj.useStateFromStores(items, () => StreamerModeStore.hidePersonalInformation)) {
    if (0 !== arr.length) {
      const mapped = arr.map((applicationRoleConnection) => {
        const obj = { applicationRoleConnection };
        return closure_1_12(closure_1_20, obj, applicationRoleConnection.application.id);
      });
      const obj2 = { style: items1, title: intl.string(intl3.t.PHjkRE), titleStyle: tmp.refreshCardTitle, children: closure_12(TableRowGroup.TableRowGroup, obj3) };
      items1 = [tmp.cardContainer, style];
      const tmp2Result = UserProfileCardDefault;
      intl = tmp4(1115).intl;
      obj3 = { hasIcons: true, children: mapped };
      return closure_12(tmp2Result, obj2);
    }
  }
  return null;
};
