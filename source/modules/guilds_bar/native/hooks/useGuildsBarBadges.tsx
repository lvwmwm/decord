// Module ID: 14906
// Function ID: 113657
// Name: useGuildsBarBadges
// Dependencies: [29, 31, 10249, 3948, 3759, 1917, 1838, 3758, 1849, 653, 33, 4130, 566, 3949, 14907, 3834, 689, 1273, 14909, 14874, 14872, 2]
// Exports: default

// Module 14906 (useGuildsBarBadges)
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_createForOfIteratorHelperLoose";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import ME from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_13;
let closure_14;
const require = arg1;
let closure_3 = ["guildActivityIndicatorSource"];
({ GuildFeatures: closure_13, Permissions: closure_14 } = ME);
let closure_16 = _createForOfIteratorHelperLoose.createStyles({ topRightBadge: { position: "absolute", right: 9, backgroundColor: "transparent", borderColor: "transparent" } });
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guilds_bar/native/hooks/useGuildsBarBadges.tsx");

export default function useGuildsBarBadges(arg0, mentionCount, isMentionLowImportance) {
  const _require = arg0;
  const tmp = callback();
  const importDefault = tmp;
  let obj = _require(stateFromStores[12]);
  let items = [closure_10];
  stateFromStores = obj.useStateFromStores(items, () => {
    const guild = outer1_10.getGuild(closure_0);
    let hasItem;
    if (null != guild) {
      const features = guild.features;
      hasItem = features.has(outer1_13.MEMBER_VERIFICATION_MANUAL_APPROVAL);
    }
    return null != hasItem && hasItem;
  });
  const items1 = [cutoutTopRight, closure_12, closure_9];
  const items2 = [arg0, stateFromStores];
  const stateFromStores1 = _require(stateFromStores[12]).useStateFromStores(items1, () => {
    if (stateFromStores) {
      const request = cutoutTopRight.getRequest(callback);
      const currentUser = outer1_12.getCurrentUser();
      if (null != currentUser) {
        if (null != request) {
          if (request.userId === currentUser.id) {
            const member = outer1_9.getMember(callback, request.userId);
            if (null != member) {
              if (!member.isPending) {
                const obj = callback(stateFromStores[13]);
              }
            }
            return request.applicationStatus;
          }
        }
      }
    }
  }, items2);
  let obj2 = _require(stateFromStores[12]);
  const items3 = [closure_11, closure_10, memo];
  const items4 = [arg0];
  const stateFromStores2 = _require(stateFromStores[12]).useStateFromStores(items3, () => {
    const guild = outer1_10.getGuild(closure_0);
    if (null != guild) {
      if (outer1_11.can(outer1_14.MANAGE_GUILD, guild)) {
        const guildIncident = memo.getGuildIncident(closure_0);
        let hasItem;
        if (null != guild) {
          if (null != guild.features.has) {
            const features = guild.features;
            hasItem = features.has(outer1_13.INVITES_DISABLED);
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
  let tmp5 = importDefault(stateFromStores[14])(arg0);
  let closure_3 = tmp5;
  const obj3 = _require(stateFromStores[12]);
  const items5 = [cutout];
  const items6 = [arg0];
  const stateFromStores3 = _require(stateFromStores[12]).useStateFromStores(items5, () => cutout.getLurkingPreviewExpiry(closure_0), items6);
  const obj4 = _require(stateFromStores[12]);
  const token = _require(stateFromStores[15]).useToken(importDefault(stateFromStores[16]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const obj5 = _require(stateFromStores[15]);
  const token1 = _require(stateFromStores[15]).useToken(importDefault(stateFromStores[16]).modules.mobile.GUILD_BAR_ITEM_MARGIN);
  const items7 = [tmp.topRightBadge, token1];
  memo = token1.useMemo(() => {
    const items = [tmp.topRightBadge, { top: token1 - callback(stateFromStores[17]).BADGE_PADDING }];
    return items;
  }, items7);
  const items8 = [tmp5, memo, token];
  const memo1 = token1.useMemo(() => {
    let obj = callback(stateFromStores[18]);
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
    tmp5 = token(obj, tmp5);
    obj = {};
    let tmp6 = null;
    if (null != guildActivityIndicatorSource) {
      const obj1 = { style: memo, source: guildActivityIndicatorSource };
      const merged = Object.assign(tmp5);
      tmp6 = outer1_15(callback(stateFromStores[18]).GuildsBarActivityIndicatorBase, obj1);
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
  cutoutTopRight = memo1.cutoutTopRight;
  obj = { mentionCount, isMentionLowImportance, joinRequestState: stateFromStores1, shouldShowInvitesDisabled: stateFromStores2, lurkerPreviewExpiresAt: stateFromStores3 };
  const tmp11 = importDefault(stateFromStores[20])(obj);
  cutout = tmp11.cutout;
  obj = {
    badgeTopRight: memo1.badgeTopRight,
    badgeBottomRight: tmp11.badge,
    cutouts: token1.useMemo(() => {
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
  items9 = [cutoutTopRight, cutout];
  return obj;
};
