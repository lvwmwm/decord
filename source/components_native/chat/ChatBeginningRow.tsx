// Module ID: 11483
// Function ID: 89401
// Name: ChatBeginningRowIcon
// Dependencies: []
// Exports: default

// Module 11483 (ChatBeginningRowIcon)
function ChatBeginningRowIcon(arg0) {
  let IconComponent;
  let isForumPost;
  let isPrivate;
  let isThread;
  let label;
  ({ isPrivate, isThread, isForumPost } = arg0);
  let obj = {};
  if (isForumPost) {
    obj.IconComponent = tmp2(tmp3[28]).ChatIcon;
    obj.label = tmp2(tmp3[29]).t.Y4REmB;
    let tmp4 = obj;
  } else if (isThread) {
    obj.IconComponent = tmp2(tmp3[30]).ThreadIcon;
    obj.label = tmp2(tmp3[29]).t.7Xm5QI;
    tmp4 = obj;
  } else if (isPrivate) {
    obj.IconComponent = tmp2(tmp3[31]).TextLockIcon;
    obj.label = tmp2(tmp3[29]).t.GK18KJ;
    tmp4 = obj;
  } else {
    obj.IconComponent = tmp2(tmp3[32]).TextIcon;
    obj.label = tmp2(tmp3[29]).t.GK18KJ;
    tmp4 = obj;
  }
  obj = { style: callback5().iconContainer };
  obj = {};
  ({ IconComponent, label } = tmp4);
  const intl = arg1(dependencyMap[29]).intl;
  obj.accessibilityLabel = intl.string(label);
  obj.children = callback3(IconComponent, obj);
  return callback3(closure_7, obj);
}
function ChatBeginningRowHeader(arg0) {
  let isForumPost;
  let isNSFW;
  let isPrivate;
  let isThread;
  let subtitle;
  let subtitleLink;
  let title;
  ({ subtitle, isForumPost, subtitleLink } = arg0);
  const arg1 = subtitleLink;
  ({ title, isPrivate, isThread, isNSFW } = arg0);
  const tmp = callback5();
  let obj = arg1(dependencyMap[33]);
  const tmp2 = null != subtitleLink && obj.useIsScreenReaderEnabled();
  obj = {};
  const items = [callback3(ChatBeginningRowIcon, { isNSFW, isPrivate, isThread, isForumPost }), , ];
  obj = { 0: 24, 9223372036854775807: 24, 0: null, -9223372036854775808: "aa9c26c29990ba7a6584e51ab5c56efa" };
  const items1 = [tmp.title, ];
  const obj1 = {};
  let num = 8;
  if (isForumPost) {
    num = 0;
  }
  obj1.marginBottom = num;
  items1[1] = obj1;
  obj.style = items1;
  obj.children = title;
  items[1] = callback3(arg1(dependencyMap[34]).Text, obj);
  let tmp7Result = null != subtitle;
  if (tmp7Result) {
    const obj2 = {};
    let str;
    if (tmp2) {
      str = "link";
    }
    obj2.accessibilityRole = str;
    let fn;
    if (tmp2) {
      fn = () => callback(closure_2[35]).openURL(subtitleLink);
    }
    obj2.onPress = fn;
    obj2.style = tmp.subtitle;
    obj2.variant = "text-md/medium";
    obj2.color = "text-default";
    obj2.children = subtitle;
    tmp7Result = callback3(arg1(dependencyMap[34]).Text, obj2);
    const tmp7 = callback3;
  }
  items[2] = tmp7Result;
  obj.children = items;
  return closure_44(closure_43, obj);
}
function LinkManageButtons(arg0) {
  let canEdit;
  let canManageRoles;
  let isPrivate;
  let theme;
  ({ canEdit, isPrivate, channel: closure_0 } = arg0);
  ({ canManageRoles, theme } = arg0);
  const tmp = callback5();
  let obj = arg1(dependencyMap[36]);
  const token = obj.useToken(importDefault(dependencyMap[27]).colors.TEXT_LINK, theme);
  obj = { style: tmp.ctaContainer };
  if (isPrivate) {
    isPrivate = canManageRoles;
  }
  if (isPrivate) {
    obj = {
      accessibilityRole: "button",
      onPress() {
          return lib(closure_2[38]).openAddMembersActionSheet(lib);
        }
    };
    const items = [, ];
    ({ ctaButton: arr[0], subtitle: arr[1] } = tmp);
    obj.style = items;
    const obj1 = { source: importDefault(dependencyMap[40]), size: arg1(dependencyMap[39]).IconSizes.REFRESH_SMALL_16, color: token };
    const items1 = [callback3(arg1(dependencyMap[39]).Icon, obj1), ];
    const obj2 = {};
    const items2 = [, ];
    ({ ctaLabel: arr3[0], ctaAddRoles: arr3[1] } = tmp);
    obj2.style = items2;
    const intl = arg1(dependencyMap[29]).intl;
    obj2.children = intl.string(arg1(dependencyMap[29]).t.dMJ3Y6);
    items1[1] = callback3(arg1(dependencyMap[34]).Text, obj2);
    obj.children = items1;
    isPrivate = callback4(arg1(dependencyMap[37]).PressableOpacity, obj);
  }
  const items3 = [isPrivate, ];
  if (canEdit) {
    const obj3 = {
      accessibilityRole: "button",
      onPress() {
          callback(closure_2[41]).setSection(constants.OVERVIEW);
          const obj = callback(closure_2[41]);
          callback(closure_2[41]).open(lib.id);
        }
    };
    const items4 = [, ];
    ({ ctaButton: arr5[0], subtitle: arr5[1] } = tmp);
    obj3.style = items4;
    const obj4 = { size: "xs", color: token };
    const items5 = [callback3(arg1(dependencyMap[42]).PencilIcon, obj4), ];
    const obj5 = {};
    const items6 = [tmp.ctaLabel];
    obj5.style = items6;
    const intl2 = arg1(dependencyMap[29]).intl;
    obj5.children = intl2.string(arg1(dependencyMap[29]).t.GE1Tlo);
    items5[1] = callback3(arg1(dependencyMap[34]).Text, obj5);
    obj3.children = items5;
    canEdit = callback4(arg1(dependencyMap[37]).PressableOpacity, obj3);
  }
  items3[1] = canEdit;
  obj.children = items3;
  return callback4(closure_7, obj);
}
function ThreadOwner(arg0) {
  let guildId;
  ({ userId: closure_0, guildId } = arg0);
  const importDefault = guildId;
  let obj = arg1(dependencyMap[43]);
  const items = [closure_24];
  const stateFromStores = obj.useStateFromStores(items, () => user.getUser(closure_0));
  let obj1 = arg1(dependencyMap[43]);
  const items1 = [closure_19];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => {
    let member = null;
    if (null != closure_0) {
      member = member.getMember(guildId, closure_0);
    }
    return member;
  });
  let obj2 = arg1(dependencyMap[43]);
  const items2 = [closure_8];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => roleStyle.roleStyle);
  let nick;
  if (null != stateFromStores1) {
    nick = stateFromStores1.nick;
  }
  if (null == nick) {
    let obj3 = importDefault(dependencyMap[44]);
    nick = obj3.getName(stateFromStores);
  }
  let str = "???";
  if (null != nick) {
    str = nick;
  }
  let colorString;
  if (null != stateFromStores1) {
    colorString = stateFromStores1.colorString;
  }
  let tmp9 = null;
  if (null != colorString) {
    tmp9 = colorString;
  }
  let colorStrings;
  if (null != stateFromStores1) {
    colorStrings = stateFromStores1.colorStrings;
  }
  let tmp11 = null;
  if (null != colorStrings) {
    tmp11 = colorStrings;
  }
  const tmp = callback5();
  const processColorStringsArray = arg1(dependencyMap[45]).useProcessColorStringsArray(tmp11);
  arg1(dependencyMap[45]);
  if (null != stateFromStores) {
    const id = stateFromStores.id;
  }
  if ("username" === stateFromStores2) {
    let tmp22;
    if (null != tmp9) {
      obj = { color: tmp9 };
      tmp22 = obj;
    }
    obj = { experimental_useNativeText: !arg1(dependencyMap[46]).isFabric() };
    let tmp26;
    if (tmp14) {
      tmp26 = processColorStringsArray;
    }
    obj.gradientColors = tmp26;
    obj.style = tmp22;
    obj.variant = "text-md/semibold";
    obj.color = "text-default";
    obj.children = str;
    return callback3(arg1(dependencyMap[34]).Text, obj);
  } else {
    obj1 = {};
    let tmp15 = "dot" === stateFromStores2;
    if (tmp15) {
      tmp15 = null != tmp9;
    }
    if (tmp15) {
      obj2 = { color: tmp9, colors: tmp11, containerStyles: tmp.threadCreatorRoleDot };
      tmp15 = callback3(arg1(dependencyMap[39]).RoleDot, obj2);
    }
    const items3 = [tmp15, ];
    obj3 = { children: str };
    items3[1] = callback3(arg1(dependencyMap[34]).Text, obj3);
    obj1.children = items3;
    return closure_44(closure_43, obj1);
  }
  const obj5 = arg1(dependencyMap[45]);
}
function ChatBeginningRowThread(channel) {
  channel = channel.channel;
  const arg1 = channel;
  const tmp = callback5();
  let obj = arg1(dependencyMap[48]);
  const result = obj.isPrivateGuildChannel(channel);
  let obj1 = arg1(dependencyMap[49]);
  const appliedTags = obj1.useAppliedTags(channel);
  arg1(dependencyMap[43]);
  [][0] = closure_10;
  let tmp7Result = null;
  if (null != channel.threadMetadata) {
    obj = {};
    obj = { isNSFW: channel.isNSFW(), title: tmp2, isPrivate: result, isThread: true, isForumPost: channel.isForumPost() };
    const items = [callback3(ChatBeginningRowHeader, obj), , , ];
    let tmp11 = null;
    if (channel.isForumPost()) {
      tmp11 = null;
      if (appliedTags.length > 0) {
        obj1 = { style: tmp.tagContainer, children: appliedTags.map((id) => callback(channel(closure_2[50]).AppliedForumTagPill, { tag: id }, id.id)) };
        tmp11 = callback3(closure_7, obj1);
      }
    }
    items[1] = tmp11;
    let tmp14 = !channel.isForumPost();
    if (tmp14) {
      const obj2 = { style: tmp.threadDetails };
      const intl = arg1(dependencyMap[29]).intl;
      const obj3 = {
        usernameHook(arg0, arg1) {
              return callback(closure_50, { userId: channel.ownerId, guildId: channel.guild_id }, arg1);
            }
      };
      obj2.children = intl.format(arg1(dependencyMap[29]).t.imPXd5, obj3);
      tmp14 = callback3(arg1(dependencyMap[34]).Text, obj2);
    }
    items[2] = tmp14;
    let tmp18 = null;
    if (channel.isForumPost()) {
      tmp18 = null;
      if (null == tmp5) {
        const obj4 = { style: tmp.threadDetails };
        const intl2 = arg1(dependencyMap[29]).intl;
        obj4.children = intl2.string(arg1(dependencyMap[29]).t.mE3KJN);
        tmp18 = callback3(arg1(dependencyMap[34]).Text, obj4);
      }
    }
    items[3] = tmp18;
    obj.children = items;
    tmp7Result = closure_44(closure_43, obj);
    const tmp7 = closure_44;
    const tmp8 = closure_43;
  }
  return tmp7Result;
}
function ChatBeginningRowGuildNonDefaultChannel(channel) {
  channel = channel.channel;
  const arg1 = channel;
  const tmp = importDefault(dependencyMap[47])(channel, true);
  const canResult = closure_21.can(constants2.MANAGE_CHANNELS, channel);
  const tmp2 = importDefault(dependencyMap[47])(channel, false);
  const canResult1 = closure_21.can(constants2.MANAGE_ROLES, channel);
  let obj = arg1(dependencyMap[48]);
  const result = obj.isPrivateGuildChannel(channel);
  const canResult2 = closure_21.can(constants2.READ_MESSAGE_HISTORY, channel);
  const intl = arg1(dependencyMap[29]).intl;
  const tmp7 = importDefault(dependencyMap[51])();
  const intl2 = arg1(dependencyMap[29]).intl;
  if (result) {
    obj = {
      channelName: tmp,
      topicHook() {
          let obj = callback(closure_2[52]);
          obj = { channelId: channel.id };
          return obj.parseTopic(channel.topic, true, obj);
        }
    };
    let formatResult = intl2.format(tmp9(tmp10[29]).t.QuwqjG, obj);
  } else if (canResult2) {
    obj = { channelName: tmp };
    formatResult = intl2.formatToPlainString(tmp9(tmp10[29]).t.JHKUGB, obj);
  } else {
    const obj1 = { channelName: tmp2 };
    formatResult = intl2.format(tmp9(tmp10[29]).t.hPVEQG, obj1);
  }
  const obj2 = {};
  const obj3 = { title: intl.formatToPlainString(arg1(dependencyMap[29]).t.q0tgLe, { channelName: tmp }), subtitle: formatResult, isPrivate: result };
  const items = [callback3(ChatBeginningRowHeader, obj3), callback3(LinkManageButtons, { canManageRoles: canResult1, canEdit: canResult, isPrivate: result, channel, theme: tmp7 }), ];
  let tmp14 = null;
  if (result) {
    tmp14 = null;
    if (canResult) {
      const obj4 = { channel, guild: channel.guild };
      tmp14 = callback3(importDefault(dependencyMap[53]), obj4);
    }
  }
  items[2] = tmp14;
  obj2.children = items;
  return closure_44(closure_43, obj2);
}
function ChatBeginningRowGuild(guild) {
  guild = guild.guild;
  const arg1 = guild;
  const channel = guild.channel;
  let obj = arg1(dependencyMap[43]);
  const items = [closure_18];
  const stateFromStores = obj.useStateFromStores(items, () => defaultChannel.getDefaultChannel(guild.id));
  if (closure_21.can(constants2.READ_MESSAGE_HISTORY, channel)) {
    let id;
    if (null != stateFromStores) {
      id = stateFromStores.id;
    }
    if (id === channel.id) {
      obj = { guild, channel };
      let tmp4 = callback3(ChatBeginningRowGuildDefaultChannel, obj);
    }
    return tmp4;
  }
  tmp4 = callback3(ChatBeginningRowGuildNonDefaultChannel, { guild, channel });
}
function DMSpamButton(channel) {
  channel = channel.channel;
  const arg1 = channel;
  const user = channel.user;
  let obj = arg1(dependencyMap[67]);
  const dMMessageToReport = obj.useDMMessageToReport(channel, user.id, true === user.bot);
  const message = dMMessageToReport.message;
  const importDefault = message;
  if (!channel.showingSpamBanner) {
    if (dMMessageToReport.isReportable) {
      obj = {};
      const intl = arg1(dependencyMap[29]).intl;
      obj.text = intl.string(arg1(dependencyMap[29]).t.HHZmDn);
      obj.disabled = null == message;
      obj.onPress = function handleShowReportModal() {
        if (null != message) {
          const result = channel(closure_2[68]).showReportModalForFirstDM(message, () => {
            callback(closure_2[69]).closePrivateChannel(id.id, true);
          });
          const obj = channel(closure_2[68]);
        }
      };
      return callback3(arg1(dependencyMap[70]).Button, obj);
    }
  }
  return null;
}
function ManageAppButton(application) {
  application = application.application;
  const arg1 = application;
  ({ channel: closure_1, oauth2Token: closure_2 } = application);
  let obj = arg1(dependencyMap[43]);
  const items = [closure_9];
  let closure_3 = obj.useStateFromStores(items, () => selfEmbeddedActivities.getSelfEmbeddedActivities());
  let tmp2 = null;
  if (application.user.bot) {
    tmp2 = null;
    if (null != application) {
      obj = {};
      const intl = arg1(dependencyMap[29]).intl;
      obj.text = intl.string(arg1(dependencyMap[29]).t.5S3sQF);
      obj = { size: arg1(dependencyMap[39]).Icon.Sizes.SMALL, source: importDefault(dependencyMap[71]), style: tmp.appDMButtonIcon };
      obj.icon = callback3(arg1(dependencyMap[39]).Icon, obj);
      obj.onPress = function onPress() {
        let obj = application(scopes[72]);
        obj = {
          application,
          scopes: scopes.scopes,
          onDelete() {
            let obj = callback(id[74]);
            obj.delete(id.id);
            const value = closure_3.get(user.id);
            obj = {};
            let _location;
            if (null != value) {
              _location = value.location;
            }
            obj.location = _location;
            obj.applicationId = user.id;
            callback(id[75]).leaveActivity(obj);
          }
        };
        obj.openAlert("confirm-delete-authed-app", callback(lib(scopes[73]), obj));
        obj = { application_id: application.id, channel_id: lib.id, channel_type: lib.type };
        lib(scopes[76]).track(constants.APP_MANAGE_CTA_CLICKED, obj);
      };
      tmp2 = callback3(arg1(dependencyMap[70]).Button, obj);
    }
  }
  return tmp2;
}
function MuteAppButton(channel) {
  const arg1 = channel.channel;
  const tmp = callback5();
  const importDefault = tmp;
  let obj = arg1(dependencyMap[43]);
  const items = [closure_23];
  const stateFromStores = obj.useStateFromStores(items, () => channelMuted.isChannelMuted(null, channel.id));
  const dependencyMap = stateFromStores;
  let tmp4Result = null;
  if (channel.user.bot) {
    obj = { size: "sm" };
    let str2 = "destructive";
    if (stateFromStores) {
      str2 = "secondary";
    }
    obj.variant = str2;
    const intl = arg1(dependencyMap[29]).intl;
    const string = intl.string;
    const t = arg1(dependencyMap[29]).t;
    if (stateFromStores) {
      let stringResult = string(t.YqAjXy);
    } else {
      stringResult = string(t.w4m945);
    }
    obj.text = stringResult;
    obj = { size: arg1(dependencyMap[39]).Icon.Sizes.SMALL };
    if (stateFromStores) {
      let tmp15 = tmp14[77];
    } else {
      tmp15 = tmp14[78];
    }
    obj.source = importDefault(tmp15);
    let WHITE;
    if (!stateFromStores) {
      WHITE = importDefault(dependencyMap[27]).unsafe_rawColors.WHITE;
    }
    obj.color = WHITE;
    obj.style = tmp.appDMButtonIcon;
    obj.icon = closure_42(arg1(dependencyMap[39]).Icon, obj);
    obj.onPress = function onPress() {
      if (stateFromStores) {
        let tmpResult = tmp(tmp2[79]);
        let obj = { muted: false };
        const result = tmpResult.updateChannelOverrideSettings(null, channel.id, obj, channel(tmp2[80]).NotificationLabels.Unmuted);
        tmpResult = tmp(tmp2[81]);
        obj = { key: "NOTIFICATIONS_UNMUTED" };
        const intl = channel(tmp2[29]).intl;
        obj.content = intl.string(channel(tmp2[29]).t./6kulz);
        obj.icon = function icon() {
          let obj = { style: lib.unmutedNotificationContainer };
          obj = { source: lib(closure_2[78]), color: lib(closure_2[27]).unsafe_rawColors.WHITE, style: lib.unmutedNotification };
          obj.children = callback2(callback(closure_2[39]).Icon, obj);
          return callback2(closure_7, obj);
        };
        tmpResult.open(obj);
      } else {
        const obj1 = { channel };
        tmp(tmp2[82]).openLazy(channel(tmp2[84])(tmp2[83], tmp2.paths), "MessageNotificationChannelActionSheet", obj1);
        const tmpResult1 = tmp(tmp2[82]);
      }
    };
    tmp4Result = closure_42(arg1(dependencyMap[70]).Button, obj);
    const tmp10 = closure_42;
    const tmp13 = importDefault;
    const tmp4 = closure_42;
  }
  return tmp4Result;
}
function ChatBeginningRowDMGuard(arg0) {
  const arg1 = arg0;
  let obj = arg1(dependencyMap[43]);
  const items = [closure_24];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const channel = arg0.channel;
    return user.getUser(channel.getRecipientId());
  });
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = {};
    const merged = Object.assign(arg0);
    obj["user"] = stateFromStores;
    tmp2 = callback3(ChatBeginningRowDM, obj);
  }
  return tmp2;
}
function ChatBeginningRowDM(channel) {
  let authorizedAppToken;
  let authorizedAppsFetchState;
  channel = channel.channel;
  const arg1 = channel;
  const user = channel.user;
  const importDefault = user;
  let dependencyMap;
  let closure_4;
  let React;
  let closure_6;
  let userTag;
  function handleCopyUserTag() {
    channel(tmp[89]).copy(userTag);
    const obj = channel(tmp[89]);
    const result = channel(tmp[58]).presentUsernameCopied();
  }
  function handleOpenMutualGuilds() {
    if (null != user) {
      let obj = user(tmp[82]);
      obj = {
        user,
        onPressMutualGuild(arg0) {
            const result = callback(closure_2[91]).trackUserProfileAction({ action: "PRESS_MUTUAL_GUILD" });
            const obj = callback(closure_2[91]);
            callback(closure_2[92]).transitionToGuild(arg0);
            const obj2 = callback(closure_2[92]);
            callback2(closure_2[82]).hideActionSheet();
            const obj3 = callback2(closure_2[82]);
            callback2(closure_2[93]).popWithKey(closure_40);
          }
      };
      obj.openLazy(channel(user[84])(user[90], user.paths), "MutualGuildsActionSheet", obj);
    }
  }
  const tmp = callback5();
  dependencyMap = tmp;
  const analyticsLocations = importDefault(dependencyMap[85])().analyticsLocations;
  let id;
  if (null != user) {
    id = user.id;
  }
  if (null == id) {
    id = closure_29;
  }
  const tmp2Result = importDefault(dependencyMap[86])(id);
  closure_4 = tmp2Result;
  let obj = arg1(dependencyMap[43]);
  const items = [closure_12];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = {};
    let id;
    if (null != tmp2Result) {
      id = tmp2Result.id;
    }
    obj.authorizedAppToken = authStore.getNewestTokenForApplication(id);
    obj.authorizedAppsFetchState = authStore.getFetchState();
    return obj;
  });
  ({ authorizedAppToken, authorizedAppsFetchState } = stateFromStoresObject);
  React = authorizedAppsFetchState;
  let obj1 = arg1(dependencyMap[43]);
  const items1 = [closure_14];
  const items2 = [user];
  closure_6 = obj1.useStateFromStores(items1, () => {
    let mutualGuilds = null;
    if (null != user) {
      mutualGuilds = mutualGuilds.getMutualGuilds(user.id);
    }
    return mutualGuilds;
  }, items2);
  const items3 = [user, channel];
  const tmp2 = importDefault(dependencyMap[86]);
  const effect = React.useEffect(() => {
    let getAvatarURL;
    let id;
    let guild_id;
    const tmp = user(tmp[87]);
    ({ id, getAvatarURL } = user);
    if (null != channel) {
      guild_id = channel.guild_id;
    }
    tmp(id, getAvatarURL(guild_id, 80), { status: null, style: null });
  }, items3);
  let bot;
  if (null != user) {
    bot = user.bot;
  }
  const items4 = [bot, authorizedAppToken, authorizedAppsFetchState];
  const effect1 = React.useEffect(() => {
    let bot = null != user;
    if (bot) {
      bot = user.bot;
    }
    if (bot) {
      bot = authorizedAppsFetchState === constants.NOT_FETCHED;
    }
    if (bot) {
      const response = user(tmp[74]).fetch();
      const obj = user(tmp[74]);
    }
  }, items4);
  if (null == user) {
    return null;
  } else {
    userTag = importDefault(dependencyMap[44]).getUserTag(user, {});
    const obj20 = importDefault(dependencyMap[44]);
    const name = importDefault(dependencyMap[44]).getName(user);
    const intl5 = arg1(dependencyMap[29]).intl;
    let stringResult = intl5.string(arg1(dependencyMap[29]).t.Rzvnig);
    if (!isSystemDMResult) {
      const intl = arg1(dependencyMap[29]).intl;
      obj = { username: name };
      stringResult = intl.formatToPlainString(arg1(dependencyMap[29]).t.Q56TRC, obj);
    }
    obj = { channel, user, showingSpamBanner: channel.showingSpamBanner };
    const tmp16 = callback3(DMSpamButton, obj);
    obj1 = {};
    const obj2 = {
      accessibilityRole: "button",
      onPress: function handleOpenProfile(nativeEvent, items) {

        }
    };
    const intl2 = arg1(dependencyMap[29]).intl;
    obj2.accessibilityLabel = intl2.string(arg1(dependencyMap[29]).t.iXAna6);
    const obj3 = { style: tmp.avatar, user, guildId: channel.guild_id, size: arg1(dependencyMap[39]).AvatarSizes.XXLARGE, avatarDecoration: user.avatarDecoration };
    obj2.children = callback3(arg1(dependencyMap[39]).Avatar, obj3);
    const items5 = [callback3(arg1(dependencyMap[37]).PressableOpacity, obj2), , , , , , ];
    const obj4 = { accessibilityRole: "button", onPress: handleCopyUserTag };
    const intl3 = arg1(dependencyMap[29]).intl;
    obj4.accessibilityHint = intl3.string(arg1(dependencyMap[29]).t.y5MwJy);
    const obj5 = { INTEGRATION_CREATE: "Array", ConstraintReasonCode: "isArray", children: name };
    obj4.children = callback3(arg1(dependencyMap[34]).Text, obj5);
    items5[1] = callback3(arg1(dependencyMap[37]).PressableOpacity, obj4);
    let tmp25 = null;
    if (!user.isProvisional) {
      const obj6 = { accessibilityRole: "button", onPress: handleCopyUserTag };
      const intl4 = arg1(dependencyMap[29]).intl;
      obj6.accessibilityHint = intl4.string(arg1(dependencyMap[29]).t.y5MwJy);
      const obj7 = { INTEGRATION_CREATE: null, ConstraintReasonCode: null, children: userTag };
      obj6.children = callback3(arg1(dependencyMap[34]).Text, obj7);
      tmp25 = callback3(arg1(dependencyMap[37]).PressableOpacity, obj6);
    }
    items5[2] = tmp25;
    const obj8 = { style: tmp.dmBeginningMessage, children: stringResult };
    items5[3] = callback3(arg1(dependencyMap[34]).Text, obj8);
    let tmp33 = null;
    if (user.isProvisional) {
      const obj9 = { style: tmp.provisionalAccountExplainer, userId: user.id, iconSize: 14 };
      tmp33 = callback3(arg1(dependencyMap[100]).ChatProvisionalAccountExplainerCard, obj9);
    }
    items5[4] = tmp33;
    items5[5] = function renderMutualGuilds() {
      if (null != arr) {
        if (arr.length >= 1) {
          let num = 5;
          if (arr.length > 5) {
            num = 4;
          }
          const substr = arr.slice(0, num);
          let obj = { accessibilityRole: "button", onPress: handleOpenMutualGuilds, style: callback2.mutualGuildsContainer };
          obj = {
            size: channel(callback2[95]).GuildIconSizes.SMALL,
            names: substr.map((guild) => guild.guild.name),
            totalCount: arr.length,
            children: substr.map((guild) => {
                  guild = guild.guild;
                  const obj = { guild, size: callback(closure_2[95]).GuildIconSizes.SMALL };
                  return callback3(callback2(closure_2[95]), obj, guild.id);
                })
          };
          const items = [callback(channel(callback2[94]).GuildIconPile, obj), ];
          obj = { style: callback2.mutualGuildsLabel };
          const intl = channel(tmp[29]).intl;
          const obj1 = { count: arr.length };
          obj.children = intl.format(channel(callback2[29]).t.eE3oep, obj1);
          items[1] = callback(channel(callback2[34]).Text, obj);
          obj.children = items;
          return callback2(channel(callback2[37]).PressableOpacity, obj);
        }
      }
    }();
    const obj10 = { style: tmp.dmButtonRow };
    if (user.isNonUserBot()) {
      obj10.children = null;
      items5[6] = tmp37(tmp38, obj10);
      obj1.children = items5;
      return tmp17(tmp18, obj1);
    } else if (user.bot) {
      const obj11 = {};
      let tmp44 = null;
      if (null != authorizedAppToken) {
        tmp44 = null;
        if (null != tmp2Result) {
          const obj12 = {};
          const obj13 = { channel, user };
          const items6 = [callback3(MuteAppButton, obj13), ];
          const obj14 = { user, application: tmp2Result, channel, oauth2Token: authorizedAppToken };
          items6[1] = callback3(ManageAppButton, obj14);
          obj12.children = items6;
          tmp44 = callback4(closure_43, obj12);
        }
      }
      const items7 = [tmp44, tmp16];
      obj11.children = items7;
      let tmp42Result = callback4(closure_43, obj11);
      const tmp42 = callback4;
      const tmp43 = closure_43;
    } else {
      const obj15 = { reportButton: tmp16 };
      tmp42Result = callback3(function RelationshipButtons(reportButton) {
        reportButton = reportButton.reportButton;
        function handleBlock() {
          let obj = lib2(paths[82]);
          obj = { userId: lib2.id, channelId: lib.id };
          obj.openLazy(lib(paths[84])(paths[99], paths.paths), closure_41, obj);
        }
        let obj = channel(tmp[43]);
        const items = [closure_22];
        const stateFromStores = obj.useStateFromStores(items, () => relationshipType.getRelationshipType(lib2.id));
        obj = {};
        const Button = channel(tmp[70]).Button;
        const intl = channel(tmp[29]).intl;
        obj.text = intl.string(channel(tmp[29]).t.l4Emac);
        obj.onPress = handleBlock;
        if (stateFromStores === constants2.PENDING_INCOMING) {
          obj = { style: tmp.pendingIncoming };
          const obj1 = { INTEGRATION_CREATE: "AutomodMentionRaidLimit", ConstraintReasonCode: "%URIError%" };
          const intl5 = channel(tmp[29]).intl;
          const obj2 = {};
          let obj8 = user(tmp[44]);
          obj2.username = obj8.getName(user);
          obj1.children = intl5.format(channel(tmp[29]).t.uIomXw, obj2);
          const items1 = [callback(channel(tmp[34]).Text, obj1), ];
          const obj3 = { style: tmp.pendingIncomingButtons };
          const obj4 = { "Bool(true)": "%NumberPrototype%", "Bool(true)": "isArrayBuffer", "Bool(true)": "analyticsContainer" };
          const intl6 = channel(tmp[29]).intl;
          obj4.text = intl6.string(channel(tmp[29]).t.+WbSn5);
          obj4.onPress = function handleAcceptFriend() {
            let obj = lib2(closure_2[97]);
            obj = { userId: lib2.id, location: constants.DM_CHANNEL };
            const result = obj.maybeConfirmFriendRequestAccept(obj);
          };
          const items2 = [callback(channel(tmp[70]).Button, obj4), , , ];
          const obj5 = {};
          const intl7 = channel(tmp[29]).intl;
          obj5.text = intl7.string(channel(tmp[29]).t.rQSndv);
          obj5.onPress = function handleIgnoreFriendRequest() {
            let obj = lib2(closure_2[96]);
            obj = { location: constants.DM_CHANNEL };
            obj.cancelFriendRequest(lib2.id, obj);
          };
          items2[1] = callback(channel(tmp[70]).Button, obj5);
          const obj6 = {};
          const intl8 = channel(tmp[29]).intl;
          obj6.text = intl8.string(channel(tmp[29]).t.l4Emac);
          obj6.onPress = handleBlock;
          items2[2] = callback(channel(tmp[70]).Button, obj6);
          items2[3] = reportButton;
          obj3.children = items2;
          items1[1] = callback2(userTag, obj3);
          obj.children = items1;
          return callback2(userTag, obj);
        } else {
          const obj7 = {};
          if (constants2.NONE === stateFromStores) {
            if (null == user) {
              obj8 = { "Bool(true)": "%NumberPrototype%", "Bool(true)": "isArrayBuffer", "Bool(true)": "analyticsContainer" };
              const intl4 = channel(tmp[29]).intl;
              obj8.text = intl4.string(channel(tmp[29]).t.PMsq/b);
              obj8.onPress = function handleAddFriend() {
                let obj = lib2(closure_2[96]);
                obj = { userId: lib2.id, context: obj };
                obj = { location: constants.DM_CHANNEL };
                obj.addRelationship(obj);
              };
              let tmp13 = callback(channel(tmp[70]).Button, obj8);
            } else {
              tmp13 = null;
            }
            let tmp6 = tmp13;
          } else if (constants2.FRIEND === stateFromStores) {
            const obj9 = {};
            const intl3 = channel(tmp[29]).intl;
            obj9.text = intl3.string(channel(tmp[29]).t.cvSt1J);
            obj9.onPress = function handleRemoveFriend() {
              let obj = lib(closure_2[98]);
              obj = {
                userDisplayName: lib2(closure_2[44]).getName(lib2),
                onConfirm() {
                  let obj = lib(closure_2[96]);
                  obj = { location: constants.DM_CHANNEL };
                  obj.removeFriend(lib.id, obj);
                }
              };
              obj.confirmRemoveFriend(obj);
            };
            tmp6 = callback(channel(tmp[70]).Button, obj9);
          } else if (constants2.BLOCKED === stateFromStores) {
            const obj10 = {};
            const intl2 = channel(tmp[29]).intl;
            obj10.text = intl2.string(channel(tmp[29]).t.XyHpKH);
            obj10.onPress = function handleUnblock() {
              let obj = lib2(closure_2[96]);
              obj = { location: constants.DM_CHANNEL };
              obj.unblockUser(lib2.id, obj);
            };
            tmp6 = callback(channel(tmp[70]).Button, obj10);
          } else {
            tmp6 = null;
            if (constants2.PENDING_OUTGOING === stateFromStores) {
              const obj11 = { children: "%NumberPrototype%", containerStyle: "isArrayBuffer", status: "analyticsContainer", style: "pendingBio" };
              const intl9 = channel(tmp[29]).intl;
              obj11.text = intl9.string(channel(tmp[29]).t.xMH6vD);
              obj11.onPress = undefined;
              tmp6 = callback(channel(tmp[70]).Button, obj11);
            }
          }
          const items3 = [tmp6, , ];
          let tmp18 = null;
          if (stateFromStores !== constants2.BLOCKED) {
            tmp18 = tmp2;
          }
          items3[1] = tmp18;
          items3[2] = reportButton;
          obj7.children = items3;
          return callback2(closure_43, obj7);
        }
      }, obj15);
    }
    const obj21 = importDefault(dependencyMap[44]);
    const tmp17 = callback4;
    const tmp18 = closure_43;
    const tmp37 = callback3;
    const tmp38 = userTag;
  }
}
function ChatBeginningRowButton(style) {
  let IconComponent;
  let iconVariant;
  let onPress;
  let subtitle;
  let title;
  let trailing;
  let obj = { style: style.style };
  ({ title, subtitle, IconComponent, iconVariant, onPress, trailing } = style);
  obj = { onPress, icon: callback3(arg1(dependencyMap[101]).RowButton.Icon, { IconComponent, variant: iconVariant }), label: title, subLabel: subtitle, trailing };
  obj.children = callback3(arg1(dependencyMap[101]).RowButton, obj);
  return callback3(closure_7, obj);
}
function ChatBeginningRowGroupDM(channel) {
  channel = channel.channel;
  const arg1 = channel;
  const tmp = callback5();
  const arr = importDefault(dependencyMap[47])(channel);
  const tmp2 = callback(React.useState(false), 2);
  const first = tmp2[0];
  const importDefault = first;
  const dependencyMap = tmp4;
  let obj = arg1(dependencyMap[43]);
  const items = [closure_22];
  const stateFromStores = obj.useStateFromStores(items, () => relationshipCount.getRelationshipCount() > 0);
  const items1 = [channel];
  const callback = React.useCallback(() => {
    channel(tmp4[102]).navigateToNewGroupDM(channel.id, constants.CHANNEL_TEXT_AREA);
  }, items1);
  // CreateGeneratorClosureLongIndex (0x67)
  const items2 = [channel, first, tmp2[1]];
  const callback1 = React.useCallback(callback2(items1), items2);
  let callback2 = callback1;
  const items3 = [callback];
  const items4 = [callback1];
  callback2 = React.useCallback(() => {
    let obj = channel(tmp4[104]);
    if (obj.UNSAFE_isDismissibleContentDismissed(channel(tmp4[105]).DismissibleContent.GDM_INVITE_REMINDER)) {
      callback();
    } else {
      obj = { onClick: callback };
      const tmp4 = first(tmp4[106])(obj);
    }
  }, items3);
  const callback3 = React.useCallback(() => {
    let obj = channel(tmp4[104]);
    if (obj.UNSAFE_isDismissibleContentDismissed(channel(tmp4[105]).DismissibleContent.GDM_INVITE_REMINDER)) {
      callback1();
    } else {
      obj = { onClick: callback1 };
      const tmp4 = first(tmp4[106])(obj);
    }
  }, items4);
  const tmp10 = channel.id === arg1(dependencyMap[107]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
  obj = { style: tmp.centerHeader };
  obj = { style: tmp.avatarRedesign, channel, size: arg1(dependencyMap[39]).AvatarSizes.XXLARGE, accessible: false };
  const items5 = [callback3(importDefault(dependencyMap[108]), obj), , , ];
  const obj1 = { style: tmp.dmTitle };
  let str = "heading-xxl/extrabold";
  if (null != arr) {
    str = "heading-xxl/extrabold";
    if (arr.length > 40) {
      str = "heading-lg/extrabold";
    }
  }
  obj1.variant = str;
  obj1.color = "mobile-text-heading-primary";
  obj1.children = arr;
  items5[1] = callback3(arg1(dependencyMap[34]).Text, obj1);
  const obj2 = { style: tmp.gdmText };
  const intl = arg1(dependencyMap[29]).intl;
  if (tmp10) {
    const obj3 = { name: arr };
    let formatResult = intl.format(tmp16(tmp17[29]).t.MFwcqO, obj3);
  } else {
    formatResult = intl.string(tmp16(tmp17[29]).t.0Q7uk0);
  }
  obj2.children = formatResult;
  items5[2] = callback3(arg1(dependencyMap[34]).Text, obj2);
  let tmp20Result = null;
  if (!tmp10) {
    const obj4 = {};
    let tmp22 = null;
    if (stateFromStores) {
      const obj5 = { style: tmp.gdmInviteFriends, onPress: callback2, IconComponent: arg1(dependencyMap[109]).GroupPlusIcon, iconVariant: "default" };
      const intl2 = arg1(dependencyMap[29]).intl;
      obj5.title = intl2.string(arg1(dependencyMap[29]).t.LR+Ptf);
      tmp22 = callback3(ChatBeginningRowButton, obj5);
    }
    const items6 = [tmp22, , ];
    const obj6 = {};
    const items7 = [tmp.gdmShareInviteLink, ];
    let prop = null;
    if (!stateFromStores) {
      prop = tmp.gdmShareInviteLinkNoRelationships;
    }
    items7[1] = prop;
    obj6.style = items7;
    obj6.onPress = callback3;
    obj6.IconComponent = arg1(dependencyMap[110]).LinkIcon;
    const intl3 = arg1(dependencyMap[29]).intl;
    obj6.title = intl3.string(arg1(dependencyMap[29]).t.3XVNyt);
    const intl4 = arg1(dependencyMap[29]).intl;
    obj6.subtitle = intl4.string(arg1(dependencyMap[29]).t.qa9CQu);
    let tmp32 = null;
    if (first) {
      tmp32 = callback3(closure_6, {});
    }
    obj6.trailing = tmp32;
    items6[1] = callback3(ChatBeginningRowButton, obj6);
    let tmp36 = null;
    if (channel.hasFlag(ChannelFlags.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)) {
      const obj7 = { channelId: channel.id };
      tmp36 = callback3(importDefault(dependencyMap[111]), obj7);
    }
    items6[2] = tmp36;
    obj4.children = items6;
    tmp20Result = closure_44(closure_43, obj4);
    const tmp20 = closure_44;
    const tmp21 = closure_43;
    const tmp27 = callback3;
    const tmp28 = ChatBeginningRowButton;
  }
  items5[3] = tmp20Result;
  obj.children = items5;
  return closure_44(closure_7, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
({ ActivityIndicator: closure_6, View: closure_7 } = arg1(dependencyMap[3]));
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
let closure_12 = importDefault(dependencyMap[8]);
const FetchState = arg1(dependencyMap[8]).FetchState;
let closure_14 = importDefault(dependencyMap[9]);
const THREAD_CHANNEL_TYPES = arg1(dependencyMap[10]).THREAD_CHANNEL_TYPES;
const isGuildOwner = arg1(dependencyMap[11]).isGuildOwner;
let closure_17 = importDefault(dependencyMap[12]);
let closure_18 = importDefault(dependencyMap[13]);
let closure_19 = importDefault(dependencyMap[14]);
let closure_20 = importDefault(dependencyMap[15]);
let closure_21 = importDefault(dependencyMap[16]);
let closure_22 = importDefault(dependencyMap[17]);
let closure_23 = importDefault(dependencyMap[18]);
let closure_24 = importDefault(dependencyMap[19]);
const tmp2 = arg1(dependencyMap[3]);
({ AnalyticEvents: closure_25, AnalyticsPages: closure_26, AnalyticsSections: closure_27, ChannelSettingsSections: closure_28, EMPTY_STRING_SNOWFLAKE_ID: closure_29, GuildSettingsSections: closure_30, HelpdeskArticles: closure_31, InstantInviteSources: closure_32, Permissions: closure_33, RelationshipTypes: closure_34, UPLOAD_MEDIUM_SIZE: closure_35, WELCOME_OLD_GUILD_AGE_THRESHOLD: closure_36 } = arg1(dependencyMap[20]));
const ChannelFlags = arg1(dependencyMap[21]).ChannelFlags;
const tmp3 = arg1(dependencyMap[20]);
({ AnalyticsActions: closure_38, AnalyticsSetupTypes: closure_39 } = arg1(dependencyMap[22]));
let closure_40 = arg1(dependencyMap[23]).MOBILE_MESSAGE_REQUESTS_MODAL_KEY;
let closure_41 = arg1(dependencyMap[24]).BLOCK_CONFIRMATION_ACTION_SHEET_KEY;
const tmp4 = arg1(dependencyMap[22]);
({ jsx: closure_42, Fragment: closure_43, jsxs: closure_44 } = arg1(dependencyMap[25]));
let obj = arg1(dependencyMap[26]);
obj = { container: { "Bool(true)": "<string:218103808>", "Bool(true)": "<string:218103808>" }, contentWrapper: {}, title: { marginTop: 16 }, subtitle: { guild_id: "flex-end", container: "center" } };
obj = { markerEnd: "ADBE Fill", clipPath: 1, clipRule: 1, borderRadius: importDefault(dependencyMap[27]).radii.lg };
obj.gdmInviteFriends = obj;
const obj1 = { markerEnd: -8411648136895894000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, clipPath: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011739242864048346, clipRule: 4345465893097212000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, borderRadius: importDefault(dependencyMap[27]).radii.lg };
obj.gdmShareInviteLink = obj1;
obj.gdmShareInviteLinkNoRelationships = { marginTop: 16 };
obj.ctaLabel = { marginLeft: 8 };
obj.ctaContainer = { APP_DMS_ENTRY_POINT_COMMAND_BUTTON: null, desert: null };
obj.ctaButton = { -9223372036854775808: true, filter: true };
obj.ctaAddRoles = { paddingRight: 24 };
obj.avatar = { marginBottom: 16 };
obj.avatarRedesign = { marginBottom: 16 };
obj.centerHeader = { "Null": null, "Null": null };
obj.gdmText = { textAlign: "center" };
obj.dmTitle = { bounces: null, keyboardShouldPersistTaps: null };
obj.dmBeginningMessage = { marginTop: 8 };
obj.provisionalAccountExplainer = { marginTop: 12 };
obj.mutualGuildsLabel = { "Bool(false)": null, "Bool(false)": "127.0.0.1", "Bool(false)": "https://google.com" };
obj.mutualGuildsContainer = {};
const obj2 = { -9223372036854775808: false, -9223372036854775808: false, -9223372036854775808: false, -9223372036854775808: false, -9223372036854775808: false, -9223372036854775808: false, borderRadius: importDefault(dependencyMap[27]).radii.xxl, backgroundColor: importDefault(dependencyMap[27]).colors.BACKGROUND_MOD_MUTED };
obj.iconContainer = obj2;
obj.threadDetails = { lineHeight: 20 };
obj.threadCreatorRoleDot = { "Bool(false)": "isArray", "Bool(false)": "current" };
obj.tagContainer = { "Bool(true)": -12, "Bool(true)": null, "Bool(true)": 1, "Bool(true)": null };
const obj3 = { justifyContent: "<string:1011679233>", borderRadius: importDefault(dependencyMap[27]).radii.round, style: "<string:4201906177>", variant: "<string:4201840642>", accessibilityRole: "<string:256114690>", values: "<string:3959423752>", backgroundColor: importDefault(dependencyMap[27]).colors.STATUS_POSITIVE };
obj.unmutedNotificationContainer = obj3;
obj.unmutedNotification = { aze: "<string:16777479>", azj: "<string:36295491>" };
obj.dmButtonRow = {};
obj.pendingIncoming = { 0: true, 9223372036854775807: "/assets/modules/user_settings/connections/native/two_way_link/images" };
obj.pendingIncomingButtons = {};
obj.appDMButtonIcon = { marginRight: 2 };
obj.formCtaIcon = { aze: "boolean", azj: "string" };
let closure_45 = obj.createStyles(obj);
function ChatBeginningRowGuildDefaultChannel(guild) {
  let canInvite;
  let canManageGuild;
  let guildPersonalized;
  let guildPopulated;
  guild = guild.guild;
  const arg1 = guild;
  const channel = guild.channel;
  const importDefault = channel;
  let dependencyMap;
  function _addServerIcon() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = _addServerIcon(tmp);
    const _addServerIcon = obj;
    return obj(...arguments);
  }
  dependencyMap = guild.id;
  const tmp = callback5();
  let obj = arg1(dependencyMap[54]);
  const completedStates = obj.useCompletedStates(guild);
  ({ guildPopulated, guildPersonalized } = completedStates);
  let obj1 = arg1(dependencyMap[54]);
  const permissions = obj1.usePermissions(channel, guild);
  ({ canInvite, canManageGuild } = permissions);
  let obj2 = arg1(dependencyMap[43]);
  const items = [closure_24];
  const stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
  importDefault(dependencyMap[55])(null != stateFromStores, "ChatBeginningRowGuildDefaultChannel: currentUser cannot be undefined");
  let obj3 = importDefault(dependencyMap[56]);
  const tmp6 = isGuildOwner(guild, stateFromStores);
  const extractTimestampResult = obj3.extractTimestamp(guild.id);
  let obj4 = arg1(dependencyMap[48]);
  const result = obj4.isPrivateGuildChannel(channel);
  let obj5 = arg1(dependencyMap[57]);
  const isEligibleForGuildProgress = obj5.useIsEligibleForGuildProgress(guild);
  let obj6 = arg1(dependencyMap[43]);
  const items1 = [closure_11];
  const stateFromStoresObject = obj6.useStateFromStoresObject(items1, () => errors.getErrors());
  let closure_3 = stateFromStoresObject;
  const items2 = [stateFromStoresObject.message];
  const layoutEffect = React.useLayoutEffect(() => {
    if (null != stateFromStoresObject.message) {
      guild(id[58]).presentError(stateFromStoresObject.message);
      const obj = guild(id[58]);
    }
  }, items2);
  if (canManageGuild) {
    obj = {
      onPress: function addServerIcon() {
          return _addServerIcon(...arguments);
        }
    };
    obj = { uri: importDefault(dependencyMap[62]) };
    obj.source = obj;
    obj.iconStyle = tmp.formCtaIcon;
    const intl = arg1(dependencyMap[29]).intl;
    obj.title = intl.string(arg1(dependencyMap[29]).t.Yhi9/N);
    obj.isCompleted = guildPersonalized;
    obj.analyticsSetupType = constants4.CHANNEL_WELCOME;
    obj.analyticsAction = constants3.PERSONALIZE_SERVER;
    const tmp13 = callback3(importDefault(dependencyMap[61]), obj);
    const tmp17 = importDefault(dependencyMap[61]);
  }
  if (canInvite) {
    obj1 = {
      onPress: function inviteFriends() {
          if (null != guild.vanityURLCode) {
            const result = guild(id[63]).showVanityUrlInviteActionSheet(guild, channel, constants.WELCOME_MESSAGE);
            const obj3 = guild(id[63]);
          } else {
            let obj = guild(id[63]);
            obj = { source: constants.WELCOME_MESSAGE };
            const result1 = obj.showInstantInviteActionSheet(channel, obj);
          }
        }
    };
    obj2 = { uri: importDefault(dependencyMap[64]) };
    obj1.source = obj2;
    obj1.iconStyle = tmp.formCtaIcon;
    const intl2 = arg1(dependencyMap[29]).intl;
    obj1.title = intl2.string(arg1(dependencyMap[29]).t.q9n0Ta);
    obj1.isCompleted = guildPopulated;
    obj1.analyticsSetupType = constants4.CHANNEL_WELCOME;
    obj1.analyticsAction = constants3.INVITE;
    const tmp21 = callback3(importDefault(dependencyMap[61]), obj1);
    const tmp25 = importDefault(dependencyMap[61]);
  }
  const intl3 = arg1(dependencyMap[29]).intl;
  const string = intl3.string;
  const t = arg1(dependencyMap[29]).t;
  if (tmp8) {
    let stringResult = string(t.gwyU/J);
  } else if (tmp6) {
    stringResult = string(t.1ach9C);
  } else {
    stringResult = string(t.ezm+/j);
  }
  let tmp30 = !isEligibleForGuildProgress;
  if (tmp30) {
    tmp30 = null != tmp21 || null != tmp13;
    const tmp31 = null != tmp21 || null != tmp13;
  }
  const tmp8 = obj3.extractTimestamp(guild.id) < Date.now() - closure_36;
  const combined = "" + importDefault(dependencyMap[65]).getArticleURL(constants.GUILD_GETTING_STARTED) + "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm";
  obj3 = {};
  const items3 = [stringResult, ];
  let tmp35 = null;
  if (tmp30) {
    obj4 = {};
    const intl4 = arg1(dependencyMap[29]).intl;
    obj5 = { guideURL: combined };
    const items4 = [null, intl4.format(arg1(dependencyMap[29]).t.UOtD32, obj5)];
    obj4.children = items4;
    tmp35 = callback4(closure_43, obj4);
  }
  items3[1] = tmp35;
  obj3.children = items3;
  obj6 = {};
  const obj7 = {};
  const obj12 = importDefault(dependencyMap[65]);
  const tmp33 = callback4;
  const tmp34 = closure_43;
  const intl5 = arg1(dependencyMap[29]).intl;
  obj7.title = intl5.formatToPlainString(arg1(dependencyMap[29]).t.j59F/c, { guildName: guild.name });
  obj7.subtitle = callback4(closure_43, obj3);
  obj7.isPrivate = result;
  let tmp44;
  if (tmp30) {
    tmp44 = combined;
  }
  obj7.subtitleLink = tmp44;
  const items5 = [callback3(ChatBeginningRowHeader, obj7), ];
  if (isEligibleForGuildProgress) {
    const obj9 = { guild };
    let tmp47 = callback3(importDefault(dependencyMap[66]), obj9);
  } else {
    const obj10 = {};
    const items6 = [tmp21, tmp13];
    obj10.children = items6;
    tmp47 = callback4(closure_43, obj10);
  }
  items5[1] = tmp47;
  obj6.children = items5;
  return callback4(React.Fragment, obj6);
}
const tmp5 = arg1(dependencyMap[25]);
const result = arg1(dependencyMap[113]).fileFinishedImporting("components_native/chat/ChatBeginningRow.tsx");

export default function ChatBeginningRow(channelId) {
  let shouldRender;
  let tmp4;
  channelId = channelId.channelId;
  const arg1 = channelId;
  ({ guildId: closure_1, shouldRender } = channelId);
  const tmp = callback5();
  let obj = arg1(dependencyMap[43]);
  const items = [closure_17];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(channelId));
  let obj2 = arg1(dependencyMap[43]);
  const items1 = [closure_20];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => guild.getGuild(closure_1));
  [tmp4, closure_2] = callback(React.useState(undefined), 2);
  if (shouldRender) {
    shouldRender = null != stateFromStores;
  }
  if (!shouldRender) {
    const callback = React.useCallback((nativeEvent) => {
      const channelId = nativeEvent.nativeEvent.layout.height;
      callback((arg0) => {
        let tmp = arg0;
        if (null == arg0) {
          tmp = height;
        } else {
          const _Math = Math;
        }
        return tmp;
      });
    }, []);
    obj = {};
    const items2 = [tmp.container, ];
    obj = {};
    let num2 = 0;
    if (null != null) {
      num2 = tmp4;
    }
    obj.height = num2;
    items2[1] = obj;
    obj.style = items2;
    let tmp23 = null != null;
    if (tmp23) {
      const obj1 = { style: tmp.contentWrapper, onLayout: callback, children: null };
      tmp23 = callback3(closure_7, obj1, channelId);
    }
    obj.children = tmp23;
    return callback3(importDefault(dependencyMap[112]), obj);
  } else if (THREAD_CHANNEL_TYPES.has(stateFromStores.type)) {
    obj2 = { channel: stateFromStores };
    let tmp7 = callback3(ChatBeginningRowThread, obj2);
  } else if (stateFromStores.isDM()) {
    const obj3 = { channel: stateFromStores, showingSpamBanner: channelId.showingSpamBanner };
    tmp7 = callback3(ChatBeginningRowDMGuard, obj3);
  } else if (stateFromStores.isGroupDM()) {
    const obj4 = { channel: stateFromStores };
    tmp7 = callback3(ChatBeginningRowGroupDM, obj4);
  } else {
    tmp7 = null;
    if (null != stateFromStores1) {
      const obj5 = { guild: stateFromStores1, channel: stateFromStores };
      tmp7 = callback3(ChatBeginningRowGuild, obj5);
    }
  }
};
