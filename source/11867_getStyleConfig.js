// Module ID: 11867
// Function ID: 91882
// Name: getStyleConfig
// Dependencies: []
// Exports: default

// Module 11867 (getStyleConfig)
function getStyleConfig(arg0) {
  let tmp;
  if (null != arg0) {
    tmp = closure_15[arg0];
  }
  if (null == tmp) {
    tmp = closure_14;
  }
  return tmp;
}
function Heading(themeType) {
  const tmp = getStyleConfig(themeType.themeType);
  let headingVariant = tmp.headingVariant;
  let obj = arg1(dependencyMap[10]);
  const token = obj.useToken(importDefault(dependencyMap[11]).modules.mobile.USER_PROFILE_ABOUT_ME_HEADING_TEXT_STYLE);
  obj = {};
  if (null != token) {
    headingVariant = token;
  }
  obj.variant = headingVariant;
  obj.style = { marginBottom: tmp.headingSpacing };
  obj.children = themeType.children;
  return closure_11(arg1(dependencyMap[12]).Text, obj);
}
function TextWithIcon(arg0) {
  let accessibilityLabel;
  let children;
  let icon;
  let themeType;
  ({ icon, children, themeType, accessibilityLabel } = arg0);
  const tmp2 = getStyleConfig(themeType);
  const obj = { style: items, accessible: true, accessibilityLabel };
  const items = [callback3().textWithIcon, { columnGap: tmp2.columnGap }];
  const items1 = [icon, callback(arg1(dependencyMap[12]).Text, { variant: tmp2.textVariant, color: "text-default", children })];
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
      const intl = arg1(dependencyMap[13]).intl;
      obj.children = intl.string(arg1(dependencyMap[13]).t.ZzAR2Y);
      const items = [callback(Heading, obj), ];
      obj = { bio: previewBio, userId, textVariant: getStyleConfig(themeType).textVariant, lineClamp };
      items[1] = callback(importDefault(dependencyMap[14]), obj);
      obj.children = items;
      tmp2 = callback2(View, obj);
    }
  }
  return tmp2;
}
function MemberJoinDates(userId) {
  let columnGap;
  let textVariant;
  let themeType;
  userId = userId.userId;
  const arg1 = userId;
  ({ guildId: closure_1, themeType } = userId);
  const tmp = callback3();
  ({ textVariant, columnGap } = getStyleConfig(themeType));
  let obj = arg1(dependencyMap[15]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  let obj1 = arg1(dependencyMap[15]);
  const items1 = [closure_7];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => {
    let guild = null;
    if (null != closure_1) {
      guild = guild.getGuild(closure_1);
    }
    return guild;
  });
  let obj2 = arg1(dependencyMap[15]);
  const items2 = [closure_6];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => {
    let member = null;
    if (null != closure_1) {
      member = member.getMember(closure_1, userId);
    }
    return member;
  });
  let obj3 = arg1(dependencyMap[16]);
  let obj4 = importDefault(dependencyMap[17]);
  const createdAtDate = obj3.getCreatedAtDate(obj4.extractTimestamp(userId), stateFromStores);
  let obj5 = arg1(dependencyMap[16]);
  let joinedAt;
  if (null != stateFromStores2) {
    joinedAt = stateFromStores2.joinedAt;
  }
  const createdAtDate1 = obj5.getCreatedAtDate(joinedAt, stateFromStores);
  obj = {};
  obj = { themeType };
  const intl = arg1(dependencyMap[13]).intl;
  obj.children = intl.string(arg1(dependencyMap[13]).t.a6XYD9);
  const items3 = [callback(Heading, obj), ];
  obj1 = { style: items4 };
  const items4 = [tmp.memberJoinDates, { columnGap }];
  obj2 = { themeType, icon: callback(arg1(dependencyMap[18]).ClydeIcon, { size: "xs" }) };
  const intl2 = arg1(dependencyMap[13]).intl;
  obj2.accessibilityLabel = intl2.formatToPlainString(arg1(dependencyMap[13]).t.9t7w53, { date: createdAtDate });
  obj2.children = createdAtDate;
  const items5 = [callback(TextWithIcon, obj2), ];
  let tmp13 = null != stateFromStores1 && null != createdAtDate1;
  if (tmp13) {
    obj3 = {};
    obj4 = { variant: textVariant, children: DIVIDER_DOT };
    const items6 = [callback(arg1(dependencyMap[12]).Text, obj4), ];
    obj5 = { themeType };
    const obj6 = { guild: stateFromStores1, size: arg1(dependencyMap[19]).GuildIconSizes.XXSMALL };
    obj5.icon = callback(importDefault(dependencyMap[19]), obj6);
    const intl3 = arg1(dependencyMap[13]).intl;
    const obj7 = { guildName: stateFromStores1.name, date: createdAtDate1 };
    obj5.accessibilityLabel = intl3.formatToPlainString(arg1(dependencyMap[13]).t.FdLNDK, obj7);
    obj5.children = createdAtDate1;
    items6[1] = callback(TextWithIcon, obj5);
    obj3.children = items6;
    tmp13 = callback2(closure_13, obj3);
    const tmp24 = importDefault(dependencyMap[19]);
  }
  items5[1] = tmp13;
  obj1.children = items5;
  items3[1] = callback2(View, obj1);
  obj.children = items3;
  return callback2(View, obj);
}
function FriendsSinceDate(themeType) {
  themeType = themeType.themeType;
  let obj = arg1(dependencyMap[20]);
  const friendsSinceDate = obj.useFriendsSinceDate(themeType.userId);
  let tmp2 = null;
  if (null != friendsSinceDate) {
    obj = {};
    obj = { themeType };
    const intl = arg1(dependencyMap[13]).intl;
    obj.children = intl.string(arg1(dependencyMap[13]).t.wlTO8v);
    const items = [callback(Heading, obj), ];
    const obj1 = { variant: getStyleConfig(themeType).textVariant, color: "text-default", children: friendsSinceDate };
    items[1] = callback(arg1(dependencyMap[12]).Text, obj1);
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
    const intl = arg1(dependencyMap[13]).intl;
    obj.children = intl.string(arg1(dependencyMap[13]).t.l6DP2n);
    const items = [callback(Heading, obj), ];
    obj = { style: tmp.policyLinks };
    let tmp11 = null != termsOfServiceUrl;
    if (tmp11) {
      const obj1 = { url: termsOfServiceUrl };
      const intl2 = arg1(dependencyMap[13]).intl;
      obj1.label = intl2.string(arg1(dependencyMap[13]).t.s7STcY);
      obj1.themeType = themeType;
      tmp11 = callback(PolicyLink, obj1);
    }
    const items1 = [tmp11, ];
    let tmp16 = null != privacyPolicyUrl;
    if (tmp16) {
      const obj2 = { url: privacyPolicyUrl };
      const intl3 = arg1(dependencyMap[13]).intl;
      obj2.label = intl3.string(arg1(dependencyMap[13]).t.kH3JR5);
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
  const arg1 = children.url;
  const obj = {
    accessibilityRole: "link",
    onPress() {
      let obj = url(closure_2[22]);
      obj = { href: url };
      return obj.handleClick(obj);
    },
    children: callback(arg1(dependencyMap[12]).Text, { variant: getStyleConfig(children.themeType).textVariant, color: "text-link", children: children.label })
  };
  return callback(arg1(dependencyMap[21]).PressableOpacity, obj);
}
function BotSlashCommands(channel) {
  let application;
  let applicationId;
  let commandIds;
  let commands;
  let themeType;
  channel = channel.channel;
  const arg1 = channel;
  ({ applicationId, commandIds, themeType } = channel);
  const analyticsLocations = importDefault(dependencyMap[23])().analyticsLocations;
  const importDefault = analyticsLocations;
  let obj = arg1(dependencyMap[24]);
  const context = obj.useUserProfileAnalyticsContext().context;
  const dependencyMap = context;
  const tmp = callback3();
  ({ commands, application } = importDefault(dependencyMap[25])(channel, applicationId, commandIds));
  let closure_3 = application;
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
      const intl2 = arg1(dependencyMap[13]).intl;
      obj.children = intl2.string(arg1(dependencyMap[13]).t.0hKkS+);
      const items1 = [callback(Heading, obj), , ];
      const obj1 = { style: tmp.slashCommands, children: commands.map((command) => callback(analyticsLocations(context[33]), { application, channel, command }, command.id)) };
      items1[1] = callback(View, obj1);
      let tmp5 = null != application && null != application.bot;
      if (tmp5) {
        const obj2 = { st: "<string:141706586>", borderWidth: "<string:570425344>" };
        const intl = arg1(dependencyMap[13]).intl;
        obj2.text = intl.string(arg1(dependencyMap[13]).t.VEfKyb);
        obj2.onPress = tmp3;
        tmp5 = callback(arg1(dependencyMap[34]).Button, obj2);
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
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const tmp2 = arg1(dependencyMap[5]);
const DIVIDER_DOT = tmp2.DIVIDER_DOT;
const Routes = arg1(dependencyMap[6]).Routes;
const AppLauncherRouteName = arg1(dependencyMap[7]).AppLauncherRouteName;
({ jsx: closure_11, jsxs: closure_12, Fragment: closure_13 } = arg1(dependencyMap[8]));
let closure_14 = { -9223372036854775808: 4, 0: "wrap", 0: null, 9223372036854775807: 60, 9223372036854775807: 60 };
let closure_15 = { [tmp2.UserProfileThemeTypes.PREVIEW]: {} };
const tmp3 = arg1(dependencyMap[8]);
let closure_16 = arg1(dependencyMap[9]).createStyles({ card: { flexDirection: "column" }, textWithIcon: { -9223372036854775808: true, filter: true }, memberJoinDates: { APP_DMS_ENTRY_POINT_COMMAND_BUTTON: null, desert: null }, slashCommands: {}, policyLinks: { rowGap: 8 } });
const obj = arg1(dependencyMap[9]);
const result = arg1(dependencyMap[36]).fileFinishedImporting("modules/user_profile/native/UserProfileAboutMeCard.tsx");

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
  const items = [callback3().card, { rowGap: getStyleConfig(themeType).rowGap }, style];
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
  return tmp3(importDefault(dependencyMap[35]), obj);
};
