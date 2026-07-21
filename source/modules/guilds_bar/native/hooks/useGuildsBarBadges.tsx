// Module ID: 14735
// Function ID: 111125
// Name: useGuildsBarBadges
// Dependencies: []
// Exports: default

// Module 14735 (useGuildsBarBadges)
let closure_3 = [];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importAll(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
let closure_12 = importDefault(dependencyMap[8]);
({ GuildFeatures: closure_13, Permissions: closure_14 } = arg1(dependencyMap[9]));
const jsx = arg1(dependencyMap[10]).jsx;
const tmp2 = arg1(dependencyMap[9]);
let closure_16 = arg1(dependencyMap[11]).createStyles({ topRightBadge: { EMPHASIZE_NOTICE: 15177100802009333000000000000000000000000000000000000000000000000000000000000000000, minWidth: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008446793996087146, CHANNEL_NAME_CHANNEL_ICON_RADIUS: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003399539124444363, handleLayoutTransition: 9126805507 } });
const obj = arg1(dependencyMap[11]);
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/guilds_bar/native/hooks/useGuildsBarBadges.tsx");

export default function useGuildsBarBadges(arg0, mentionCount, isMentionLowImportance) {
  mentionCount = arg0;
  const tmp = callback();
  const importDefault = tmp;
  let obj = mentionCount(dependencyMap[12]);
  const items = [closure_10];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const guild = store.getGuild(arg0);
    let hasItem;
    if (null != guild) {
      const features = guild.features;
      hasItem = features.has(constants.MEMBER_VERIFICATION_MANUAL_APPROVAL);
    }
    return null != hasItem && hasItem;
  });
  const dependencyMap = stateFromStores;
  const items1 = [closure_7, closure_12, closure_9];
  const items2 = [arg0, stateFromStores];
  const stateFromStores1 = mentionCount(dependencyMap[12]).useStateFromStores(items1, () => {
    if (stateFromStores) {
      const request = cutoutTopRight.getRequest(arg0);
      const currentUser = currentUser.getCurrentUser();
      if (null != currentUser) {
        if (null != request) {
          if (request.userId === currentUser.id) {
            const member = member.getMember(arg0, request.userId);
            if (null != member) {
              if (!member.isPending) {
                const obj = arg0(stateFromStores[13]);
              }
            }
            return request.applicationStatus;
          }
        }
      }
    }
  }, items2);
  const obj2 = mentionCount(dependencyMap[12]);
  const items3 = [closure_11, closure_10, closure_6];
  const items4 = [arg0];
  const stateFromStores2 = mentionCount(dependencyMap[12]).useStateFromStores(items3, () => {
    const guild = store.getGuild(arg0);
    if (null != guild) {
      if (closure_11.can(constants2.MANAGE_GUILD, guild)) {
        const guildIncident = memo.getGuildIncident(arg0);
        let hasItem;
        if (null != guild) {
          if (null != guild.features.has) {
            const features = guild.features;
            hasItem = features.has(constants.INVITES_DISABLED);
          }
        }
        if (!hasItem) {
          let invitesDisabledUntil;
          if (null != guildIncident) {
            invitesDisabledUntil = guildIncident.invitesDisabledUntil;
          }
          let tmp10 = null != invitesDisabledUntil;
          if (tmp10) {
            const _Date = Date;
            const date = new Date(guildIncident.invitesDisabledUntil);
            const _Date2 = Date;
            const date1 = new Date();
            tmp10 = date > date1;
          }
          hasItem = tmp10;
        }
        return hasItem;
      }
    }
    return false;
  }, items4);
  const tmp5 = importDefault(dependencyMap[14])(arg0);
  let closure_3 = tmp5;
  const obj3 = mentionCount(dependencyMap[12]);
  const items5 = [closure_8];
  const items6 = [arg0];
  const stateFromStores3 = mentionCount(dependencyMap[12]).useStateFromStores(items5, () => cutout.getLurkingPreviewExpiry(arg0), items6);
  const obj4 = mentionCount(dependencyMap[12]);
  const token = mentionCount(dependencyMap[15]).useToken(importDefault(dependencyMap[16]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  let closure_4 = token;
  const obj5 = mentionCount(dependencyMap[15]);
  const token1 = mentionCount(dependencyMap[15]).useToken(importDefault(dependencyMap[16]).modules.mobile.GUILD_BAR_ITEM_MARGIN);
  const React = token1;
  const items7 = [tmp.topRightBadge, token1];
  const memo = React.useMemo(() => {
    const items = [tmp.topRightBadge, { top: token1 - arg0(stateFromStores[17]).BADGE_PADDING }];
    return items;
  }, items7);
  closure_6 = memo;
  const items8 = [tmp5, memo, token];
  const memo1 = React.useMemo(() => {
    let obj = arg0(stateFromStores[18]);
    const mediaIcon = obj.getMediaIcon(tmp5);
    obj = {};
    let source;
    if (null != mediaIcon) {
      source = mediaIcon.source;
    }
    let tmp3 = null;
    if (null != source) {
      tmp3 = source;
    }
    obj.guildActivityIndicatorSource = tmp3;
    let icon;
    if (null != mediaIcon) {
      icon = mediaIcon.icon;
    }
    obj.IconComponent = icon;
    obj.isCurrentUserConnected = tmp5.isCurrentUserConnected;
    const guildActivityIndicatorSource = obj.guildActivityIndicatorSource;
    const tmp5 = token(obj, tmp5);
    obj = {};
    let tmp6 = null;
    if (null != guildActivityIndicatorSource) {
      const obj1 = { style: memo, source: guildActivityIndicatorSource };
      const merged = Object.assign(tmp5);
      tmp6 = callback(arg0(stateFromStores[18]).GuildsBarActivityIndicatorBase, obj1);
    }
    obj.badgeTopRight = tmp6;
    let tmp14;
    if (null != guildActivityIndicatorSource) {
      const obj2 = { position: "top-right", containerSize: token };
      tmp14 = tmp(stateFromStores[19])(obj2);
    }
    obj.cutoutTopRight = tmp14;
    return obj;
  }, items8);
  const cutoutTopRight = memo1.cutoutTopRight;
  closure_7 = cutoutTopRight;
  obj = { mentionCount, isMentionLowImportance, joinRequestState: stateFromStores1, shouldShowInvitesDisabled: stateFromStores2, lurkerPreviewExpiresAt: stateFromStores3 };
  const tmp11 = importDefault(dependencyMap[20])(obj);
  const cutout = tmp11.cutout;
  closure_8 = cutout;
  obj = {
    badgeTopRight: memo1.badgeTopRight,
    badgeBottomRight: tmp11.badge,
    cutouts: React.useMemo(() => {
      const items = [];
      if (null != cutoutTopRight) {
        items.push(cutoutTopRight);
      }
      if (null != cutout) {
        items.push(cutout);
      }
      return items;
    }, items9),
    mediaState: tmp5
  };
  const items9 = [cutoutTopRight, cutout];
  return obj;
};
