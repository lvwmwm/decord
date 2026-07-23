// Module ID: 11887
// Function ID: 91984
// Name: getStyleConfig
// Dependencies: [31, 27, 1921, 1917, 1838, 5512, 653, 1455, 33, 4130, 3834, 689, 4126, 1212, 11888, 566, 4939, 21, 9742, 5515, 11889, 1273, 8336, 5464, 8266, 11890, 8492, 4098, 3982, 1198, 5584, 3989, 1555, 11891, 4543, 5511, 2]
// Exports: default

// Module 11887 (getStyleConfig)
import getHighestActiveScreenIndex from "getHighestActiveScreenIndex";
import { View } from "showActionSheet";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_createForOfIteratorHelperLoose";
import ARBITRARY_LARGE_OFFSET from "ARBITRARY_LARGE_OFFSET";
import { Routes } from "ME";
import { AppLauncherRouteName } from "APP_LAUNCHER_BUILT_IN_SECTION_ICON";
import jsxProd from "module_11891";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
let closure_12;
let closure_13;
const require = arg1;
function getStyleConfig(arg0) {
  let tmp;
  if (null != arg0) {
    tmp = table[arg0];
  }
  if (null == tmp) {
    tmp = closure_14;
  }
  return tmp;
}
function Heading(themeType) {
  const tmp = getStyleConfig(themeType.themeType);
  let headingVariant = tmp.headingVariant;
  let obj = require(3834) /* map */;
  const token = obj.useToken(importDefault(689).modules.mobile.USER_PROFILE_ABOUT_ME_HEADING_TEXT_STYLE);
  obj = { accessibilityRole: "header", variant: null, color: "user-profile-about-me-heading-text" };
  if (null != token) {
    headingVariant = token;
  }
  obj.variant = headingVariant;
  obj.style = { marginBottom: tmp.headingSpacing };
  obj.children = themeType.children;
  return closure_11(require(4126) /* Text */.Text, obj);
}
function TextWithIcon(arg0) {
  let accessibilityLabel;
  let children;
  let icon;
  let themeType;
  ({ icon, children, themeType, accessibilityLabel } = arg0);
  const tmp2 = getStyleConfig(themeType);
  const obj = { style: items, accessible: true, accessibilityLabel };
  items = [callback3().textWithIcon, { columnGap: tmp2.columnGap }];
  const items1 = [icon, callback(require(4126) /* Text */.Text, { variant: tmp2.textVariant, color: "text-default", children })];
  obj.children = items1;
  return callback2(View, obj);
}
function Bio(arg0) {
  let displayProfile;
  let lineClamp;
  let pendingBio;
  let themeType;
  let userId;
  ({ displayProfile, themeType } = arg0);
  ({ userId, pendingBio, lineClamp } = arg0);
  let previewBio;
  if (null != displayProfile) {
    previewBio = displayProfile.getPreviewBio(pendingBio);
  }
  let tmp2 = null;
  if (null != previewBio) {
    tmp2 = null;
    if ("" !== previewBio) {
      let obj = {};
      obj = { themeType };
      const intl = require(1212) /* getSystemLocale */.intl;
      obj.children = intl.string(require(1212) /* getSystemLocale */.t.ZzAR2Y);
      const items = [callback(Heading, obj), ];
      obj = { bio: previewBio, userId, textVariant: getStyleConfig(themeType).textVariant, lineClamp };
      items[1] = callback(importDefault(11888), obj);
      obj.children = items;
      tmp2 = callback2(View, obj);
    }
  }
  return tmp2;
}
function MemberJoinDates(userId) {
  let columnGap;
  let importDefault;
  let textVariant;
  let themeType;
  userId = userId.userId;
  ({ guildId: importDefault, themeType } = userId);
  const tmp = callback3();
  ({ textVariant, columnGap } = getStyleConfig(themeType));
  let obj = userId(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.locale);
  let obj1 = userId(566);
  const items1 = [closure_7];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => {
    let guild = null;
    if (null != closure_1) {
      guild = outer1_7.getGuild(closure_1);
    }
    return guild;
  });
  let obj2 = userId(566);
  const items2 = [closure_6];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => {
    let member = null;
    if (null != closure_1) {
      member = outer1_6.getMember(closure_1, userId);
    }
    return member;
  });
  let obj3 = userId(4939);
  let obj4 = importDefault(21);
  const createdAtDate = obj3.getCreatedAtDate(obj4.extractTimestamp(userId), stateFromStores);
  let obj5 = userId(4939);
  let joinedAt;
  if (null != stateFromStores2) {
    joinedAt = stateFromStores2.joinedAt;
  }
  const createdAtDate1 = obj5.getCreatedAtDate(joinedAt, stateFromStores);
  obj = {};
  obj = { themeType };
  const intl = userId(1212).intl;
  obj.children = intl.string(userId(1212).t.a6XYD9);
  const items3 = [callback(Heading, obj), ];
  obj1 = { style: items4 };
  items4 = [tmp.memberJoinDates, { columnGap }];
  obj2 = { themeType, icon: callback(userId(9742).ClydeIcon, { size: "xs" }) };
  const intl2 = userId(1212).intl;
  obj2.accessibilityLabel = intl2.formatToPlainString(userId(1212).t["9t7w53"], { date: createdAtDate });
  obj2.children = createdAtDate;
  const items5 = [callback(TextWithIcon, obj2), ];
  let tmp13 = null != stateFromStores1 && null != createdAtDate1;
  if (tmp13) {
    obj3 = {};
    obj4 = { variant: textVariant, color: "text-default", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: DIVIDER_DOT };
    const items6 = [callback(userId(4126).Text, obj4), ];
    obj5 = { themeType };
    const obj6 = { guild: stateFromStores1, size: userId(5515).GuildIconSizes.XXSMALL };
    obj5.icon = callback(importDefault(5515), obj6);
    const intl3 = userId(1212).intl;
    const obj7 = { guildName: stateFromStores1.name, date: createdAtDate1 };
    obj5.accessibilityLabel = intl3.formatToPlainString(userId(1212).t.FdLNDK, obj7);
    obj5.children = createdAtDate1;
    items6[1] = callback(TextWithIcon, obj5);
    obj3.children = items6;
    tmp13 = callback2(closure_13, obj3);
    const tmp24 = importDefault(5515);
  }
  items5[1] = tmp13;
  obj1.children = items5;
  items3[1] = callback2(View, obj1);
  obj.children = items3;
  return callback2(View, obj);
}
function FriendsSinceDate(themeType) {
  themeType = themeType.themeType;
  let obj = require(11889) /* useFriendsSinceDate */;
  const friendsSinceDate = obj.useFriendsSinceDate(themeType.userId);
  let tmp2 = null;
  if (null != friendsSinceDate) {
    obj = {};
    obj = { themeType };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.children = intl.string(require(1212) /* getSystemLocale */.t.wlTO8v);
    const items = [callback(Heading, obj), ];
    const obj1 = { variant: getStyleConfig(themeType).textVariant, color: "text-default", children: friendsSinceDate };
    items[1] = callback(require(4126) /* Text */.Text, obj1);
    obj.children = items;
    tmp2 = callback2(View, obj);
  }
  return tmp2;
}
function PolicyLinks(arg0) {
  let privacyPolicyUrl;
  let termsOfServiceUrl;
  let themeType;
  ({ termsOfServiceUrl, privacyPolicyUrl, themeType } = arg0);
  if (null != termsOfServiceUrl) {
    let obj = {};
    obj = { themeType };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.children = intl.string(require(1212) /* getSystemLocale */.t.l6DP2n);
    const items = [callback(Heading, obj), ];
    obj = { style: tmp.policyLinks };
    let tmp11 = null != termsOfServiceUrl;
    if (tmp11) {
      const obj1 = { url: termsOfServiceUrl };
      const intl2 = require(1212) /* getSystemLocale */.intl;
      obj1.label = intl2.string(require(1212) /* getSystemLocale */.t.s7STcY);
      obj1.themeType = themeType;
      tmp11 = callback(PolicyLink, obj1);
    }
    const items1 = [tmp11, ];
    let tmp16 = null != privacyPolicyUrl;
    if (tmp16) {
      const obj2 = { url: privacyPolicyUrl };
      const intl3 = require(1212) /* getSystemLocale */.intl;
      obj2.label = intl3.string(require(1212) /* getSystemLocale */.t.kH3JR5);
      obj2.themeType = themeType;
      tmp16 = callback(PolicyLink, obj2);
    }
    items1[1] = tmp16;
    obj.children = items1;
    items[1] = closure_12(View, obj);
    obj.children = items;
    let tmp3Result = closure_12(View, obj);
    const tmp10 = View;
    const tmp3 = closure_12;
    const tmp4 = View;
    const tmp9 = closure_12;
  } else {
    tmp3Result = null;
  }
  return tmp3Result;
}
function PolicyLink(children) {
  const url = children.url;
  let obj = {
    accessibilityRole: "link",
    onPress() {
      let obj = url(outer1_2[22]);
      obj = { href: url };
      return obj.handleClick(obj);
    },
    children: callback(url(4126).Text, { variant: getStyleConfig(children.themeType).textVariant, color: "text-link", children: children.label })
  };
  return callback(url(1273).PressableOpacity, obj);
}
function BotSlashCommands(channel) {
  let application;
  let applicationId;
  let commandIds;
  let commands;
  let themeType;
  channel = channel.channel;
  ({ applicationId, commandIds, themeType } = channel);
  analyticsLocations = analyticsLocations(context[23])().analyticsLocations;
  let obj = channel(context[24]);
  context = obj.useUserProfileAnalyticsContext().context;
  const tmp = callback3();
  ({ commands, application } = analyticsLocations(context[25])(channel, applicationId, commandIds));
  const items = [application, , , , ];
  ({ id: arr[1], guild_id: arr[2] } = channel);
  items[3] = context;
  items[4] = analyticsLocations;
  let tmp9Result = null;
  if (null != commands) {
    tmp9Result = null;
    if (0 !== commands.length) {
      obj = {};
      obj = { themeType };
      const intl2 = channel(context[13]).intl;
      obj.children = intl2.string(channel(context[13]).t["0hKkS+"]);
      const items1 = [callback(Heading, obj), , ];
      const obj1 = { style: tmp.slashCommands, children: commands.map((command) => outer1_11(analyticsLocations(context[33]), { application, channel, command }, command.id)) };
      items1[1] = callback(View, obj1);
      let tmp5 = null != application && null != application.bot;
      if (tmp5) {
        let obj2 = { size: "sm", variant: "tertiary" };
        const intl = channel(context[13]).intl;
        obj2.text = intl.string(channel(context[13]).t.VEfKyb);
        obj2.onPress = tmp3;
        tmp5 = callback(channel(context[34]).Button, obj2);
      }
      items1[2] = tmp5;
      obj.children = items1;
      tmp9Result = closure_12(View, obj);
      const tmp10 = View;
      const tmp9 = closure_12;
    }
  }
  return tmp9Result;
}
const DIVIDER_DOT = ARBITRARY_LARGE_OFFSET.DIVIDER_DOT;
({ jsx: closure_11, jsxs: closure_12, Fragment: closure_13 } = jsxProd);
let closure_14 = { headingVariant: "text-sm/semibold", textVariant: "text-md/normal", headingSpacing: 8, rowGap: 24, columnGap: 6 };
let closure_15 = { [ARBITRARY_LARGE_OFFSET.UserProfileThemeTypes.PREVIEW]: { headingVariant: "text-xs/semibold", textVariant: "text-sm/normal", headingSpacing: 4, rowGap: 12, columnGap: 3 } };
let closure_16 = _createForOfIteratorHelperLoose.createStyles({ card: { flexDirection: "column" }, textWithIcon: { flexDirection: "row", alignItems: "center" }, memberJoinDates: { flexDirection: "row", flexWrap: "wrap" }, slashCommands: { flex: 1, flexDirection: "row", flexWrap: "wrap", marginBottom: 12 }, policyLinks: { rowGap: 8 } });
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_profile/native/UserProfileAboutMeCard.tsx");

export default function UserProfileAboutMeCard(arg0) {
  let bioLineClamp;
  let channel;
  let displayProfile;
  let pendingBio;
  let style;
  let themeType;
  let userId;
  ({ userId, displayProfile, channel, themeType } = arg0);
  ({ pendingBio, bioLineClamp, style } = arg0);
  let application;
  if (null != displayProfile) {
    application = displayProfile.application;
  }
  let obj = { style: items };
  items = [callback3().card, { rowGap: getStyleConfig(themeType).rowGap }, style];
  const tmp = callback3();
  const tmp3 = closure_12;
  const items1 = [callback(Bio, { userId, displayProfile, pendingBio, themeType, lineClamp: bioLineClamp }), , , , ];
  obj = { userId };
  let guildId;
  if (null != displayProfile) {
    guildId = displayProfile.guildId;
  }
  obj.guildId = guildId;
  obj.themeType = themeType;
  items1[1] = callback(MemberJoinDates, obj);
  items1[2] = callback(FriendsSinceDate, { userId, themeType });
  obj = {};
  let termsOfServiceUrl;
  if (null != application) {
    termsOfServiceUrl = application.termsOfServiceUrl;
  }
  obj.termsOfServiceUrl = termsOfServiceUrl;
  let privacyPolicyUrl;
  if (null != application) {
    privacyPolicyUrl = application.privacyPolicyUrl;
  }
  obj.privacyPolicyUrl = privacyPolicyUrl;
  obj.themeType = themeType;
  items1[3] = callback(PolicyLinks, obj);
  let prop;
  if (null != application) {
    prop = application.popularApplicationCommandIds;
  }
  let tmp13 = null != prop && null != channel;
  if (tmp13) {
    const obj1 = { applicationId: application.id, channel, commandIds: application.popularApplicationCommandIds, themeType };
    tmp13 = callback(BotSlashCommands, obj1);
  }
  items1[4] = tmp13;
  obj.children = items1;
  return tmp3(importDefault(5511), obj);
};
