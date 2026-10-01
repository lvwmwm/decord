// Module ID: 10777
// Function ID: 10778
// Name: UserProfileAboutMeCard
// Dependencies: [19, 17, 2112, 2108, 2067, 6629, 1074, 1484, 21, 4836, 4531, 576, 4832, 1115, 10778, 504, 5719, 11, 10278, 5896, 10779, 1177, 7818, 6583, 7635, 10780, 4800, 4693, 1101, 6459, 4701, 1611, 7624, 10781, 5281, 6628, 2]
// Exports: default

// Module 10777 (UserProfileAboutMeCard)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants2 from "Constants" /* 1074 */;
import intl4 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1484 */;
import useToken from "useToken" /* 4531 */;
import ChatInputUtils from "ChatInputUtils" /* 4701 */;
import Text_Text from "Text/Text" /* 4832 */;
import UserProfileCardDefault from "UserProfileCard" /* 6628 */;
import MaskedLinkUtils from "MaskedLinkUtils" /* 7818 */;
import BioTextDefault from "BioText" /* 10778 */;
import useFriendsSinceDate from "useFriendsSinceDate" /* 10779 */;
import UserProfileAboutMeCardCommandDefault from "UserProfileAboutMeCardCommand" /* 10781 */;
import react from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2112 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import GuildStore from "GuildStore" /* 2067 */;
import Constants from "Constants" /* 6629 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let children;

let UserProfileThemeTypes;
let closure_12;
let map1;
let metroImportAll;
let tmp;
let tmp10;
let unpackModuleId;
const KeyboardTypes = tmp(1611);
const GuildIconDefault = tmp10(5896);
function Heading(themeType) {
  let headingSpacing;
  let headingVariant;
  themeType = themeType.themeType;
  let tmp;
  children = themeType.children;
  if (null != themeType) {
    tmp = closure_15[themeType];
  }
  if (tmp == null) {
    tmp = closure_14;
  }
  ({ headingVariant, headingSpacing } = tmp);
  const obj = useToken;
  let token = obj.useToken(nativeDefault.modules.mobile.USER_PROFILE_ABOUT_ME_HEADING_TEXT_STYLE);
  const Text = Text_Text.Text;
  const tmp4 = unpackModuleId;
  if (token == null) {
    token = headingVariant;
  }
  const obj2 = { accessibilityRole: "header", variant: token, color: "user-profile-about-me-heading-text", style: { marginBottom: headingSpacing }, children };
  return tmp4(Text, obj2);
}
function TextWithIcon(themeType) {
  let accessibilityLabel;
  let icon;
  let items;
  let items1;
  themeType = themeType.themeType;
  ({ icon, children, accessibilityLabel } = themeType);
  let tmp2;
  const tmp = closure_16();
  if (null != themeType) {
    tmp2 = closure_15[themeType];
  }
  if (tmp2 == null) {
    tmp2 = closure_14;
  }
  const obj = { style: items, accessible: true, accessibilityLabel, children: items1 };
  items = [tmp.textWithIcon, { columnGap: tmp2.columnGap }];
  items1 = [icon, unpackModuleId(Text_Text.Text, { variant: tmp2.textVariant, color: "text-default", children })];
  return closure_12(View, obj);
}
function Bio(arg0) {
  let displayProfile;
  let intl;
  let items;
  let lineClamp;
  let pendingBio;
  let themeType;
  let userId;
  ({ displayProfile, themeType } = arg0);
  let tmp;
  ({ userId, pendingBio, lineClamp } = arg0);
  if (null != themeType) {
    tmp = closure_15[themeType];
  }
  if (tmp == null) {
    tmp = closure_14;
  }
  let previewBio;
  const textVariant = tmp.textVariant;
  if (displayProfile != null) {
    previewBio = displayProfile.getPreviewBio(pendingBio);
  }
  let tmp4 = null;
  if (null != previewBio) {
    tmp4 = null;
    if ("" !== previewBio) {
      const obj = { children: items };
      const obj2 = { themeType, children: intl.string(intl4.t.ZzAR2Y) };
      intl = intl4.intl;
      items = [unpackModuleId(Heading, obj2), ];
      const obj3 = { bio: previewBio, userId, textVariant, lineClamp };
      items[1] = unpackModuleId(BioTextDefault, obj3);
      tmp4 = closure_12(View, obj);
    }
  }
  return tmp4;
}
function MemberJoinDates(userId) {
  let columnGap;
  let intl;
  let intl2;
  let intl3;
  let items4;
  let items5;
  let items6;
  let locale;
  let obj11;
  let obj12;
  let textVariant;
  let themeType;
  let tmp10Result;
  userId = userId.userId;
  ({ guildId: importDefault, themeType } = userId);
  let tmp2;
  const tmp = closure_16();
  if (null != themeType) {
    tmp2 = closure_15[themeType];
  }
  if (tmp2 == null) {
    tmp2 = closure_14;
  }
  ({ textVariant, columnGap } = tmp2);
  const items = [LocaleStore];
  const obj = userId(504);
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  const items1 = [GuildStore];
  const obj2 = userId(504);
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let guild = null;
    if (null != importDefault) {
      guild = GuildStore.getGuild(tmp);
    }
    return guild;
  });
  const items2 = [GuildMemberStore];
  const obj3 = userId(504);
  const stateFromStores2 = obj3.useStateFromStores(items2, () => {
    let member = null;
    if (null != importDefault) {
      member = GuildMemberStore.getMember(tmp, userId);
    }
    return member;
  });
  const getCreatedAtDate = userId(5719).getCreatedAtDate;
  userId(5719);
  const obj4 = SnowflakeUtilsDefault;
  const createdAtDate = getCreatedAtDate(obj4.extractTimestamp(userId), stateFromStores);
  let joinedAt;
  const getCreatedAtDate2 = userId(5719).getCreatedAtDate;
  userId(5719);
  if (stateFromStores2 != null) {
    joinedAt = stateFromStores2.joinedAt;
  }
  const createdAtDate2 = getCreatedAtDate2(joinedAt, stateFromStores);
  const obj5 = { themeType, children: intl.string(userId(1115).t.a6XYD9) };
  intl = tmp4(1115).intl;
  const items3 = [closure_11(Heading, obj5), ];
  const obj6 = { style: items4, children: items5 };
  items4 = [tmp.memberJoinDates, { columnGap }];
  const obj7 = { themeType, icon: closure_11(userId(10278).ClydeIcon, { size: "xs" }), accessibilityLabel: intl2.formatToPlainString(userId(1115).t["9t7w53"], { date: createdAtDate }), children: createdAtDate };
  intl2 = tmp4(1115).intl;
  items5 = [closure_11(TextWithIcon, obj7), ];
  let tmp15Result = null != stateFromStores1 && null != createdAtDate2;
  const tmp18 = TextWithIcon;
  if (tmp15Result) {
    const obj8 = { children: items6 };
    const obj9 = { variant: textVariant, color: "text-default", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children };
    items6 = [closure_11(tmp4(4832).Text, obj9), ];
    const obj10 = { themeType, icon: closure_11(tmp10Result, obj11), accessibilityLabel: intl3.formatToPlainString(userId(1115).t.FdLNDK, obj12), children: createdAtDate2 };
    obj11 = { guild: stateFromStores1, size: userId(5896).GuildIconSizes.XXSMALL };
    tmp10Result = GuildIconDefault;
    intl3 = tmp4(1115).intl;
    obj12 = { guildName: stateFromStores1.name, date: createdAtDate2 };
    items6[1] = closure_11(tmp18, obj10);
    tmp15Result = tmp15(closure_13, obj8);
  }
  const obj13 = { children: items3 };
  items5[1] = tmp15Result;
  items3[1] = closure_12(View, obj6);
  return closure_12(View, obj13);
}
function FriendsSinceDate(themeType) {
  let intl;
  let items;
  themeType = themeType.themeType;
  let tmp;
  const userId = themeType.userId;
  if (null != themeType) {
    tmp = closure_15[themeType];
  }
  if (tmp == null) {
    tmp = closure_14;
  }
  const textVariant = tmp.textVariant;
  const obj = useFriendsSinceDate;
  const friendsSinceDate = obj.useFriendsSinceDate(userId);
  let tmp6 = null;
  if (null != friendsSinceDate) {
    const obj2 = { children: items };
    const obj3 = { themeType, children: intl.string(intl4.t.wlTO8v) };
    intl = tmp3(1115).intl;
    items = [unpackModuleId(Heading, obj3), ];
    const obj4 = { variant: textVariant, color: "text-default", children: friendsSinceDate };
    items[1] = unpackModuleId(Text_Text.Text, obj4);
    tmp6 = closure_12(View, obj2);
  }
  return tmp6;
}
function PolicyLinks(arg0) {
  let intl;
  let intl2;
  let intl3;
  let items1;
  let privacyPolicyUrl;
  let termsOfServiceUrl;
  let themeType;
  let tmp3Result;
  ({ termsOfServiceUrl, privacyPolicyUrl, themeType } = arg0);
  if (null != termsOfServiceUrl) {
    const obj = { themeType, children: intl.string(intl4.t.l6DP2n) };
    intl = intl4.intl;
    const items = [unpackModuleId(Heading, obj), ];
    let tmp5Result = null != termsOfServiceUrl;
    const obj2 = { style: tmp.policyLinks, children: items1 };
    if (tmp5Result) {
      const obj3 = { url: termsOfServiceUrl, label: intl2.string(intl4.t.s7STcY), themeType };
      intl2 = tmp7(1115).intl;
      tmp5Result = tmp5(PolicyLink, obj3);
    }
    items1 = [tmp5Result, ];
    let tmp5Result2 = null != privacyPolicyUrl;
    if (tmp5Result2) {
      const obj4 = { url: privacyPolicyUrl, label: intl3.string(intl4.t.kH3JR5), themeType };
      intl3 = tmp7(1115).intl;
      tmp5Result2 = tmp5(PolicyLink, obj4);
    }
    const obj5 = { children: items };
    items1[1] = tmp5Result2;
    items[1] = closure_12(View, obj2);
    tmp3Result = tmp3(tmp4, obj5);
  } else {
    tmp3Result = null;
  }
  return tmp3Result;
}
function PolicyLink(label) {
  let href;
  let themeType;
  ({ url: require, themeType } = label);
  let tmp;
  label = label.label;
  if (null != themeType) {
    tmp = closure_15[themeType];
  }
  if (tmp == null) {
    tmp = closure_14;
  }
  const textVariant = tmp.textVariant;
  let obj = {
    accessibilityRole: "link",
    onPress() {
      const obj = MaskedLinkUtils;
      const obj2 = { href: require };
      return obj.handleClick(obj2);
    },
    children: closure_11(Text_Text.Text, { variant: textVariant, color: "text-link", children: label })
  };
  const PressableOpacity = native.PressableOpacity;
  return closure_11(PressableOpacity, obj);
}
function BotSlashCommands(channel) {
  let application;
  let applicationId;
  let commandIds;
  let commands;
  let intl;
  let intl2;
  let themeType;
  channel = channel.channel;
  let analyticsLocations;
  let context;
  application = undefined;
  ({ applicationId, commandIds, themeType } = channel);
  let tmp = closure_16();
  analyticsLocations = analyticsLocations(context[23])().analyticsLocations;
  let obj = channel(context[24]);
  context = obj.useUserProfileAnalyticsContext().context;
  const tmp4 = analyticsLocations(context[25])(channel, applicationId, commandIds);
  ({ commands, application } = tmp4);
  const items = [application, , , , ];
  ({ id: arr[1], guild_id: arr[2] } = channel);
  items[3] = context;
  items[4] = analyticsLocations;
  let tmp8Result = null;
  if (null != commands) {
    let num = 0;
    tmp8Result = null;
    if (0 !== commands.length) {
      let obj2 = { themeType, children: intl2.string(channel(tmp2[13]).t["0hKkS+"]) };
      let tmp9 = View;
      let tmp10 = closure_11;
      intl2 = tmp3(tmp2[13]).intl;
      const items1 = [closure_11(Heading, obj2), , ];
      let obj3 = {
        style: tmp.slashCommands,
        children: commands.map((command) => {
              const obj = { application, channel, command };
              return unpackModuleId(UserProfileAboutMeCardCommandDefault, obj, command.id);
            })
      };
      items1[1] = closure_11(View, obj3);
      let tmp10Result = null != application && null != application.bot;
      const tmp8 = closure_12;
      if (tmp10Result) {
        let obj4 = { size: "sm", variant: "tertiary", text: intl.string(channel(tmp2[13]).t.VEfKyb), onPress: tmp5 };
        const Button = tmp3(tmp2[34]).Button;
        intl = tmp3(tmp2[13]).intl;
        tmp10Result = tmp10(Button, obj4);
      }
      const obj5 = { children: items1 };
      items1[2] = tmp10Result;
      tmp8Result = tmp8(tmp9, obj5);
    }
  }
  return tmp8Result;
}
const View = react_native.View;
({ DIVIDER_DOT: metroImportAll, UserProfileThemeTypes } = Constants);
const Routes = Constants2.Routes;
const AppLauncherRouteName = AppLauncherNativeConstants.AppLauncherRouteName;
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
let closure_14 = { headingVariant: "text-sm/semibold", textVariant: "text-md/normal", headingSpacing: 8, rowGap: 24, columnGap: 6 };
let closure_15 = { [UserProfileThemeTypes.PREVIEW]: { headingVariant: "text-xs/semibold", textVariant: "text-sm/normal", headingSpacing: 4, rowGap: 12, columnGap: 3 } };
let closure_16 = createStyles.createStyles({ card: { flexDirection: "column" }, textWithIcon: { flexDirection: "row", alignItems: "center" }, memberJoinDates: { flexDirection: "row", flexWrap: "wrap" }, slashCommands: { flex: 1, flexDirection: "row", flexWrap: "wrap", marginBottom: 12 }, policyLinks: { rowGap: 8 } });
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileAboutMeCard.tsx");

export default function UserProfileAboutMeCard(arg0) {
  let bioLineClamp;
  let channel;
  let displayProfile;
  let guildId;
  let items;
  let items1;
  let pendingBio;
  let privacyPolicyUrl;
  let style;
  let themeType;
  let userId;
  ({ userId, displayProfile, channel, themeType } = arg0);
  ({ pendingBio, bioLineClamp, style } = arg0);
  let tmp2;
  const tmp = closure_16();
  if (null != themeType) {
    tmp2 = closure_15[themeType];
  }
  if (tmp2 == null) {
    tmp2 = closure_14;
  }
  let application;
  const rowGap = tmp2.rowGap;
  if (displayProfile != null) {
    application = displayProfile.application;
  }
  const obj = { style: items, children: items1 };
  items = [tmp.card, { rowGap }, style];
  items1 = [, , , , ];
  const tmp6 = UserProfileCardDefault;
  items1[0] = unpackModuleId(Bio, { userId, displayProfile, pendingBio, themeType, lineClamp: bioLineClamp });
  const obj2 = { userId, guildId, themeType };
  guildId = undefined;
  const tmp5 = closure_12;
  const tmp8 = MemberJoinDates;
  if (displayProfile != null) {
    guildId = displayProfile.guildId;
  }
  items1[1] = unpackModuleId(tmp8, obj2);
  items1[2] = unpackModuleId(FriendsSinceDate, { userId, themeType });
  let termsOfServiceUrl;
  const tmp10 = PolicyLinks;
  if (application != null) {
    termsOfServiceUrl = application.termsOfServiceUrl;
  }
  const obj3 = { termsOfServiceUrl, privacyPolicyUrl, themeType };
  privacyPolicyUrl = undefined;
  if (application != null) {
    privacyPolicyUrl = application.privacyPolicyUrl;
  }
  items1[3] = unpackModuleId(tmp10, obj3);
  let prop;
  if (application != null) {
    prop = application.popularApplicationCommandIds;
  }
  let tmp7Result = null != prop && null != channel;
  if (tmp7Result) {
    const obj4 = { applicationId: application.id, channel, commandIds: application.popularApplicationCommandIds, themeType };
    tmp7Result = tmp7(BotSlashCommands, obj4);
  }
  items1[4] = tmp7Result;
  return tmp5(tmp6, obj);
};
