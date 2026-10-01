// Module ID: 11069
// Function ID: 11070
// Name: LegacyUserProfileConnections
// Dependencies: [19, 17, 2112, 1386, 4679, 7035, 1074, 1181, 5720, 21, 4836, 576, 5719, 11070, 5595, 1397, 4685, 1177, 11073, 11074, 4531, 11075, 11076, 4801, 6610, 4527, 1115, 7818, 5016, 4525, 5435, 4832, 4540, 504, 6923, 11077, 2]
// Exports: default, useAppplicationRoleConnectionItems, useConnectedAccountItems

// Module 11069 (LegacyUserProfileConnections)
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import FormConstants from "FormConstants" /* 1181 */;
import ToastUtils from "ToastUtils" /* 4527 */;
import HapticUtils from "HapticUtils" /* 4801 */;
import Text_Text from "Text/Text" /* 4832 */;
import Constants2 from "Constants" /* 5720 */;
import ClipboardUtils from "ClipboardUtils" /* 6610 */;
import MaskedLinkUtils from "MaskedLinkUtils" /* 7818 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import LocaleStore from "LocaleStore" /* 2112 */;
import UserRecord from "UserRecord" /* 1386 */;
import StreamerModeStore from "StreamerModeStore" /* 4679 */;
import UserProfileStore from "UserProfileStore" /* 7035 */;
import Constants from "Constants" /* 1074 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let React, _require, dependencyMap;

let c10;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_4;
let hasOwnProperty;
let items;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let size;
let size1;
let unpackModuleId;
const f92846 = () => LocaleStore.locale;
const f92848 = () => LocaleStore.locale;
class ConnectedUserAccount {
  constructor(account) {
    let _undefined;
    let color;
    let intl;
    let items;
    let items4;
    let items5;
    let items6;
    let items7;
    let lightPNG;
    let locale;
    let obj15;
    let obj16;
    let obj23;
    let redditMetadataItems;
    let showInvisibleIcon;
    let showMetadata;
    let style;
    let theme;
    let tmp29;
    let tmp45;
    let userId;
    account = account.account;
    ({ theme, userId } = account);
    ({ showMetadata, showInvisibleIcon } = account);
    dependencyMap = undefined;
    let platformUserUrl;
    ({ locale, style } = account);
    if (null == showMetadata) {
      showMetadata = true;
    }
    const tmp = closure_17();
    let metadata = account.metadata;
    if (metadata == null) {
      metadata = {};
    }
    let createdAtDate = null;
    if (showMetadata) {
      let obj2 = account(5719);
      createdAtDate = obj2.getCreatedAtDate(metadata[MetadataFields.CREATED_AT], locale);
    }
    if (showMetadata) {
      const type = account.type;
      if (constants.REDDIT === type) {
        const obj8 = account(11070);
        redditMetadataItems = obj8.generateRedditMetadataItems(metadata, tmp.metadataItem);
      } else if (constants.STEAM === type) {
        const obj7 = account(11070);
        redditMetadataItems = obj7.generateSteamMetadataItems(metadata, tmp.metadataItem);
      } else {
        if (constants.BLUESKY !== type) {
          if (constants.MASTODON !== type) {
            if (constants.TWITTER !== type) {
              if (constants.PAYPAL === type) {
                const obj4 = account(11070);
                redditMetadataItems = obj4.generatePaypalMetadataItems(metadata, tmp.metadataItem);
              } else if (constants.EBAY === type) {
                let obj3 = account(11070);
                redditMetadataItems = obj3.generateEbayMetadataItems(metadata, tmp.metadataItem);
              } else if (constants.TIKTOK === type) {
                const obj28 = account(11070);
                redditMetadataItems = obj28.generateTikTokMetadataItems(metadata, tmp.metadataItem);
              }
            }
          }
        }
        const obj5 = account(11070);
        const twitterMetadataItems = obj5.generateTwitterMetadataItems(metadata, tmp.metadataItem);
        let str = "1";
        redditMetadataItems = twitterMetadataItems;
        if ("1" === metadata[MetadataFields.TWITTER_VERIFIED]) {
          const obj6 = userId(5595);
          color = obj6.get(tmp6.TWITTER).color;
          redditMetadataItems = twitterMetadataItems;
        }
      }
    }
    const obj9 = userId(5595);
    const value = obj9.get(account.type);
    dependencyMap = value;
    const makeSource = account(1397).makeSource;
    account(1397);
    const obj10 = account(4685);
    if (obj10.isThemeDark(theme)) {
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
    if (null != showInvisibleIcon) {
      let PressableOpacity;
      if (showInvisibleIcon) {
        let obj = { style: tmp.connectedAccountOpenHide, source: userId(11073) };
        const Icon2 = tmp23(1177).Icon;
        tmp29 = closure_14(Icon2, obj);
      }
      const tmp23Result = account(4531);
      const token = tmp23Result.useToken(tmp20(576).colors.BACKGROUND_MOD_MUTED, theme);
      const useToken = account(4531).useToken;
      account(4531);
      const INTERACTIVE_TEXT_ACTIVE = tmp20(576).colors.INTERACTIVE_TEXT_ACTIVE;
      if (null != color) {
        theme = constants2.DARK;
      }
      let WHITE = useToken(INTERACTIVE_TEXT_ACTIVE, theme);
      let tmp35 = token;
      if (null != color) {
        WHITE = tmp20(576).unsafe_rawColors.WHITE;
        tmp35 = color;
      }
      let tmp36 = null;
      if (account.verified) {
        const obj11 = { style: tmp.verifiedCheckContainer, children: items };
        const obj12 = { style: tmp.verifiedCheck, size: account(1177).Icon.Sizes.REFRESH_SMALL_16, source: userId(11075), color: tmp35 };
        const Icon3 = tmp23(1177).Icon;
        items = [closure_14(Icon3, obj12), ];
        const obj13 = { style: tmp.verifiedCheck, size: account(1177).Icon.Sizes.REFRESH_SMALL_16, source: userId(11076), color: WHITE };
        const Icon4 = tmp23(1177).Icon;
        items[1] = closure_14(Icon4, obj13);
        tmp36 = closure_15(closure_5, obj11);
      }
      const items1 = [account.name];
      let name;
      const callback = platformUserUrl.useCallback(() => {
        const obj = HapticUtils;
        const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
        const obj2 = ClipboardUtils;
        obj2.copy(account.name);
        const obj3 = ToastUtils;
        const result1 = obj3.presentCopiedToClipboard();
      }, items1);
      const useMemo = platformUserUrl.useMemo;
      const obj17 = platformUserUrl;
      if (value != null) {
        name = value.name;
      }
      const items2 = [name, platformUserUrl];
      const items3 = [account.type, platformUserUrl, userId];
      const memo = useMemo(() => {
        let stringResult;
        if (null != platformUserUrl) {
          const intl2 = intl3.intl;
          stringResult = intl2.string(intl3.t.wuRE8M);
        } else {
          const intl = intl3.intl;
          const formatToPlainString = intl.formatToPlainString;
          let str;
          const OKzaN3 = intl3.t.OKzaN3;
          if (_undefined != null) {
            str = _undefined.name;
          }
          if (str == null) {
            str = "";
          }
          const obj = { name: str };
          stringResult = formatToPlainString(OKzaN3, obj);
        }
        return stringResult;
      }, items2);
      const callback1 = obj17.useCallback(() => {
        let other_user_id;
        let type;
        if (null != platformUserUrl) {
          let obj = MaskedLinkUtils;
          let obj2 = {
            href: tmp,
            trusted: account.type !== unpackModuleId.DOMAIN,
            onConfirm() {
                const obj = account(c2[28]);
                const obj2 = { platform_type: type.type, other_user_id };
                obj.trackWithMetadata(constants.CONNECTED_ACCOUNT_VIEWED, obj2);
                const obj3 = userId(c2[29]);
                obj3.openURL(platformUserUrl);
              }
          };
          obj.handleClick(obj2);
        }
      }, items3);
      if (null != platformUserUrl) {
        PressableOpacity = tmp23(5435).PressableOpacity;
      } else {
        PressableOpacity = closure_4;
      }
      const obj14 = { accessibilityLabel: memo, accessibilityRole: "button", onPress: tmp45, onLongPress: callback, children: closure_14(closure_5, obj15) };
      tmp45 = undefined;
      if (null != platformUserUrl) {
        tmp45 = callback1;
      }
      obj15 = { style: items4, children: closure_15(closure_5, obj16) };
      items4 = [tmp.connectedAccountContainer, style];
      obj16 = { style: tmp.connectedAccount, children: items5 };
      const obj18 = { size: account(1177).Icon.Sizes.MEDIUM, source, disableColor: true };
      const Icon5 = tmp23(1177).Icon;
      items5 = [closure_14(Icon5, obj18), , ];
      const obj19 = { style: tmp.connectedAccountNameContainer, children: items7 };
      const obj20 = { style: tmp.connectedAccountName, children: items6 };
      const obj21 = { variant: "text-md/semibold", style: tmp.connectedAccountNameText, children: account.name };
      items6 = [closure_14(account(4832).Text, obj21), tmp36];
      items7 = [closure_15(closure_5, obj20), , ];
      let tmp44Result = null;
      if (null != createdAtDate) {
        const obj22 = { variant: "heading-deprecated-12/medium", style: tmp.connectedAccountNameCreatedAtText, children: intl.format(account(1115).t["9rfonh"], obj23) };
        const Text = tmp23(4832).Text;
        intl = tmp23(1115).intl;
        obj23 = { date: createdAtDate };
        tmp44Result = tmp44(Text, obj22);
      }
      items7[1] = tmp44Result;
      let tmp44Result2 = null;
      if (null != redditMetadataItems) {
        tmp44Result2 = null;
        if (redditMetadataItems.length > 0) {
          const obj24 = { style: tmp.connectedAccountChildren, children: redditMetadataItems };
          tmp44Result2 = tmp44(tmp46, obj24);
        }
      }
      items7[2] = tmp44Result2;
      items5[1] = closure_15(closure_5, obj19);
      items5[2] = tmp29;
      return closure_14(PressableOpacity, obj14);
    }
    tmp29 = null;
    if (null != platformUserUrl) {
      const obj25 = { style: tmp.connectedAccountOpenLink, source: userId(11074) };
      const Icon = tmp23(1177).Icon;
      tmp29 = closure_14(Icon, obj25);
    }
  }
}
class ConnectedApplicationUserRoleAccount {
  constructor(applicationRoleConnection) {
    let Text;
    let intl;
    let items;
    let items1;
    let items2;
    let obj10;
    let obj9;
    let tmp8Result;
    applicationRoleConnection = applicationRoleConnection.applicationRoleConnection;
    const style = applicationRoleConnection.style;
    let tmp = closure_17();
    let closure_1 = tmp;
    let tmp2 = applicationRoleConnection;
    const tmp3 = dependencyMap;
    let obj = applicationRoleConnection(11070);
    const roleConnectionMetadataItems = obj.generateRoleConnectionMetadataItems(applicationRoleConnection);
    let tmp5 = closure_5;
    let obj2 = { style: items, children: items1 };
    items = [tmp.connectedAccountContainer, style];
    let tmp6 = null;
    if (null != applicationRoleConnection.platform_name) {
      let obj3 = { variant: "eyebrow", color: "interactive-text-default", children: applicationRoleConnection.platform_name };
      tmp6 = closure_14(tmp2(4832).Text, obj3);
    }
    items1 = [tmp6, , , ];
    const obj4 = { style: tmp.appConnectionNameContainer, children: tmp8Result };
    tmp8Result = null;
    if (null != applicationRoleConnection.platform_username) {
      const obj5 = { variant: "text-md/semibold", color: "interactive-text-active", children: applicationRoleConnection.platform_username };
      tmp8Result = tmp8(tmp2(4832).Text, obj5);
    }
    items1[1] = closure_14(tmp5, obj4);
    let tmp8Result2 = null;
    if (null != roleConnectionMetadataItems) {
      tmp8Result2 = null;
      if (roleConnectionMetadataItems.length > 0) {
        const obj6 = { style: tmp.connectedAccountChildren, children: roleConnectionMetadataItems };
        tmp8Result2 = tmp8(tmp5, obj6);
      }
    }
    items1[2] = tmp8Result2;
    const obj7 = { style: { flexDirection: "row" }, children: items2 };
    const obj8 = { style: tmp.connectedAccountPoweredByContainer, children: closure_14(Text, obj9) };
    obj9 = { variant: "text-xs/normal", color: "text-muted", children: intl.format(tmp2(1115).t.zIT9YA, obj10) };
    Text = tmp2(4832).Text;
    intl = tmp2(1115).intl;
    obj10 = {
      applicationHook() {
        let items;
        let tmp10;
        let tmp5 = null;
        const obj = { style: closure_1.connectedAccountPoweredByText, children: items };
        const tmp = closure_15;
        const tmp2 = hasOwnProperty;
        if (null != applicationRoleConnection.application.bot) {
          const self = this;
          const self2 = this;
          const obj2 = { style: tmp3.connectedAccountPoweredByAvatar, user: tmp10, size: native.AvatarSizes.SIZE_16, guildId: "a" };
          const Avatar = native.Avatar;
          tmp10 = new UserRecord(applicationRoleConnection.application.bot);
          tmp5 = authStore2(Avatar, obj2);
        }
        items = [tmp5, ];
        const obj3 = { variant: "text-xs/normal", color: "text-default", children: applicationRoleConnection.application.name };
        items[1] = authStore2(Text_Text.Text, obj3);
        return tmp(tmp2, obj);
      }
    };
    items2 = [tmp8(tmp5, obj8), tmp8(tmp5, { style: { flexGrow: 1 } })];
    items1[3] = closure_15(tmp5, obj7);
    return closure_15(tmp5, obj2);
  }
}
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
({ AnalyticEvents: c10, PlatformTypes: unpackModuleId, ThemeTypes: closure_12 } = Constants);
const FORM_ROW_VERTICAL_PADDING = FormConstants.FORM_ROW_VERTICAL_PADDING;
const MetadataFields = Constants2.MetadataFields;
let Fragment = Fragment_mod;
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = Fragment);
let createStyles = createStyles_mod;
let obj = { connectedAccountContainer: obj2, connectedAccount: { flexDirection: "row", alignItems: "center" }, connectedAccountNameContainer: { flex: 1, marginLeft: 8 }, connectedAccountName: { flexDirection: "row", alignItems: "center" }, connectedAccountNameText: obj3, connectedAccountNameCreatedAtText: obj4, connectedAccountOpenLink: size, connectedAccountOpenHide: size1, verifiedCheckContainer: { marginLeft: 4, height: 16, width: 16 }, verifiedCheck: { position: "absolute", left: 0, top: 0 }, connectedAccountChildren: { flexDirection: "row", flexWrap: "wrap", alignItems: "center", overflow: "hidden" }, metadataItem: obj5, appConnectionNameContainer: { flex: 1, flexDirection: "row", alignItems: "center", marginTop: 4 }, connectedAccountPoweredByContainer: obj6, connectedAccountPoweredByAvatar: { marginRight: 4 }, connectedAccountPoweredByText: { marginTop: -4, alignItems: "center", flexDirection: "row" } };
obj2 = { paddingHorizontal: 10, paddingVertical: FORM_ROW_VERTICAL_PADDING / 2 };
obj3 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
createStyles = createStyles.createStyles;
obj4 = { color: nativeDefault.colors.TEXT_SUBTLE };
size = { height: 24, width: 24, transform: items, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
items = [{ rotate: "135deg" }];
size1 = { alignSelf: "flex-start", margin: 4, height: 16, width: 16, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj5 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj6 = { flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, paddingHorizontal: 8, paddingVertical: 4, marginTop: 12 };
let closure_17 = createStyles(obj);
let closure_18 = react.memo(ConnectedUserAccount);
let closure_19 = react.memo(ConnectedApplicationUserRoleAccount);
let closure_20 = [];
let closure_21 = [];
size = size_mod;
let result = size.fileFinishedImporting("modules/user_profile/native/LegacyUserProfileConnections.tsx");

export default function LegacyUserProfileConnections(user) {
  let intl;
  let intl2;
  let items6;
  user = user.user;
  let tmp2 = dependencyMap;
  let obj = user(504);
  const items = [UserProfileStore];
  const stateFromStores = obj.useStateFromStores(items, () => UserProfileStore.getUserProfile(user.id));
  let obj2 = user(504);
  const items1 = [StreamerModeStore];
  let prop;
  const stateFromStores1 = obj2.useStateFromStores(items1, () => StreamerModeStore.hidePersonalInformation);
  const useMemo = react.useMemo;
  const tmp5 = react;
  if (stateFromStores != null) {
    prop = stateFromStores.applicationRoleConnections;
  }
  const items2 = [prop];
  const memo = useMemo(() => {
    let prop;
    if (stateFromStores != null) {
      prop = stateFromStores.applicationRoleConnections;
    }
    if (prop == null) {
      prop = closure_21;
    }
    return prop;
  }, items2);
  let connectedAccounts;
  const useMemo2 = tmp5.useMemo;
  if (stateFromStores != null) {
    connectedAccounts = stateFromStores.connectedAccounts;
  }
  const items3 = [connectedAccounts];
  const memo2 = useMemo2(() => {
    let connectedAccounts;
    if (stateFromStores != null) {
      connectedAccounts = stateFromStores.connectedAccounts;
    }
    if (connectedAccounts == null) {
      connectedAccounts = closure_20;
    }
    return connectedAccounts;
  }, items3);
  let c0;
  const tmpResult = user(4540);
  tmpResult.useThemeContext().theme;
  const items4 = [LocaleStore];
  const tmpResult5 = user(504);
  let closure_2 = tmpResult5.useStateFromStores(items4, f92846);
  const mapped = memo.map((applicationRoleConnection, index) => {
    let obj2;
    const Fragment = React.Fragment;
    const obj = { children: closure_2_14(closure_2_19, obj2) };
    obj2 = { applicationRoleConnection, theme, locale, style };
    return closure_2_14(Fragment, obj, index);
  });
  const id = user.id;
  let c1;
  const tmpResult6 = user(4540);
  const theme = tmpResult6.useThemeContext().theme;
  const items5 = [LocaleStore];
  const tmpResult7 = user(504);
  React = tmpResult7.useStateFromStores(items5, f92848);
  const tmpResult8 = user(6923);
  let closure_4 = tmpResult8.usePlatformAllowed({ forUserProfile: true });
  const found = memo2.filter((type) => {
    const obj = stateFromStores(dependencyMap[14]);
    const value = obj.get(type.type);
    const tmp2 = null != value && closure_4(value);
    return tmp2;
  });
  let tmp18Result = null;
  if (!stateFromStores1) {
    tmp18Result = null;
    if (0 !== memo2.length) {
      let tmp11 = null != mapped;
      const tmp18 = closure_15;
      const tmp19 = closure_16;
      if (tmp11) {
        tmp11 = mapped.length > 0;
      }
      if (tmp11) {
        const obj3 = { title: intl.string(user(1115).t.PHjkRE), showContainer: true, children: mapped };
        const tmp14 = stateFromStores(11077);
        intl = tmp(1115).intl;
        tmp11 = closure_14(tmp14, obj3);
      }
      const obj4 = { children: items6 };
      items6 = [tmp11, ];
      const obj5 = { title: intl2.string(user(1115).t["3fe7U5"]), showContainer: true, children: tmp9 };
      const tmp17 = stateFromStores(11077);
      intl2 = tmp(1115).intl;
      items6[1] = closure_14(tmp17, obj5);
      tmp18Result = tmp18(tmp19, obj4);
    }
  }
  return tmp18Result;
};
export { ConnectedUserAccount };
export { ConnectedApplicationUserRoleAccount };
export const useAppplicationRoleConnectionItems = function useAppplicationRoleConnectionItems(arr, arg1) {
  let closure_0;
  let closure_2;
  _require = arg1;
  const obj = require("native");
  const theme = obj.useThemeContext().theme;
  const items = [LocaleStore];
  const obj2 = require("get initialized");
  dependencyMap = obj2.useStateFromStores(items, f92846);
  return arr.map((applicationRoleConnection, index) => {
    let obj2;
    const Fragment = React.Fragment;
    const obj = { children: closure_2_14(closure_2_19, obj2) };
    obj2 = { applicationRoleConnection, theme, locale, style };
    return closure_2_14(Fragment, obj, index);
  });
};
export const useConnectedAccountItems = function useConnectedAccountItems(arr, userId, style) {
  let theme;
  _require = userId;
  let obj = require("native");
  theme = obj.useThemeContext().theme;
  let obj2 = require("get initialized");
  const items = [LocaleStore];
  const locale = obj2.useStateFromStores(items, f92848);
  const obj3 = require("ConnectionsHooks");
  let closure_4 = obj3.usePlatformAllowed({ forUserProfile: true });
  const found = arr.filter((type) => {
    const obj = stateFromStores(dependencyMap[14]);
    const value = obj.get(type.type);
    const tmp2 = null != value && closure_4(value);
    return tmp2;
  });
  return found.map((account, index) => {
    let obj2;
    const Fragment = react.Fragment;
    const obj = { children: authStore2(closure_18, obj2) };
    obj2 = { account, theme, locale, userId, style };
    return authStore2(Fragment, obj, index);
  });
};
