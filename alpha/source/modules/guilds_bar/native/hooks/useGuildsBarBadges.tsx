// Module ID: 18347
// Function ID: 18348
// Name: useGuildsBarBadges
// Dependencies: [109, 19, 10991, 5041, 4921, 4880, 4941, 1384, 1072, 21, 5009, 504, 5042, 18348, 5591, 575, 1188, 18349, 18318, 18317, 2]
// Exports: default

// Module 18347 (useGuildsBarBadges)
import Fragment from "Fragment" /* 21 */;
import native from "native" /* 1188 */;
import GuildJoinRequestUtils from "GuildJoinRequestUtils" /* 5042 */;
import computeGuildsBarCutoutDefault from "computeGuildsBarCutout" /* 18318 */;
import GuildsBarActivityIndicator from "GuildsBarActivityIndicator" /* 18349 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import GuildIncidentsStore from "GuildIncidentsStore" /* 10991 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 5041 */;
import GuildMemberStore from "GuildMemberStore" /* 4921 */;
import GuildStore from "GuildStore" /* 4880 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import UserStore from "UserStore" /* 1384 */;
import Constants from "Constants" /* 1072 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let closure_12;
let map1;
let closure_3 = ["guildActivityIndicatorSource"];
({ GuildFeatures: closure_12, Permissions: map1 } = Constants);
const jsx = Fragment.jsx;
let closure_15 = createStyles.createStyles({ topRightBadge: { position: "absolute", right: 9, backgroundColor: "transparent", borderColor: "transparent" } });
const result = size.fileFinishedImporting("modules/guilds_bar/native/hooks/useGuildsBarBadges.tsx");

export default function useGuildsBarBadges(arg0, mentionCount, isMentionLowImportance) {
  let closure_0;
  let cutout;
  let cutoutTopRight;
  let items7;
  let memo;
  let stateFromStores;
  let topRightBadge;
  _require = arg0;
  let tmp = closure_15();
  importDefault = tmp;
  let obj = require("get initialized");
  let items = [GuildStore];
  stateFromStores = obj.useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_0);
    let flag;
    if (guild != null) {
      const features = guild.features;
      flag = features.has(constants.MEMBER_VERIFICATION_MANUAL_APPROVAL);
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
  let obj2 = require("get initialized");
  const items1 = [cutoutTopRight, UserStore, cutout];
  const items2 = [arg0, stateFromStores];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const tmp = stateFromStores;
    if (tmp) {
      const request = UserGuildJoinRequestStore.getRequest(closure_0);
      const currentUser = UserStore.getCurrentUser();
      const tmp3 = closure_0;
      if (null != currentUser) {
        if (null != request) {
          if (request.userId === currentUser.id) {
            const member = GuildMemberStore.getMember(tmp3, request.userId);
            if (null != member) {
              if (!member.isPending) {
                GuildJoinRequestUtils;
              }
            }
            return request.applicationStatus;
          }
        }
      }
    }
  }, items2);
  const items3 = [PermissionStore, GuildStore, memo];
  const items4 = [arg0];
  const obj3 = require("get initialized");
  const stateFromStores2 = obj3.useStateFromStores(items3, function() {
    const guild = GuildStore.getGuild(closure_0);
    const tmp = closure_0;
    if (null != guild) {
      if (PermissionStore.can(map1.MANAGE_GUILD, guild)) {
        const guildIncident = GuildIncidentsStore.getGuildIncident(tmp);
        let hasItem;
        if (guild != null) {
          const features = guild.features;
          const has = features.has;
          if (has != null) {
            hasItem = has(constants.INVITES_DISABLED);
          }
        }
        if (!hasItem) {
          let invitesDisabledUntil;
          if (guildIncident != null) {
            invitesDisabledUntil = guildIncident.invitesDisabledUntil;
          }
          let tmp10 = null != invitesDisabledUntil;
          if (tmp10) {
            const _Date = Date;
            const self = this;
            const self2 = this;
            const _Date2 = Date;
            const self3 = this;
            const self4 = this;
            const date = new Date(guildIncident.invitesDisabledUntil);
            tmp10 = date > new Date();
            const date1 = new Date();
          }
          hasItem = tmp10;
        }
        return hasItem;
      }
    }
    return false;
  }, items4);
  const tmp5 = require("useGuildsBarGuildMediaState")(arg0);
  closure_3 = tmp5;
  let obj4 = require("useToken");
  const token = obj4.useToken(require("native").modules.mobile.GUILD_BAR_ITEM_SIZE);
  let obj5 = require("useToken");
  const token1 = obj5.useToken(require("native").modules.mobile.GUILD_BAR_ITEM_MARGIN);
  const items5 = [tmp.topRightBadge, token1];
  memo = token1.useMemo(() => {
    const items = [topRightBadge.topRightBadge, { top: token1 - native.BADGE_PADDING }];
    ({ top: token1 - native.BADGE_PADDING });
    return items;
  }, items5);
  const items6 = [tmp5, memo, token];
  const memo1 = token1.useMemo(() => {
    let icon;
    let tmp14;
    const obj = GuildsBarActivityIndicator;
    const mediaIcon = obj.getMediaIcon(closure_3);
    let source;
    const tmp3 = closure_3;
    if (mediaIcon != null) {
      source = mediaIcon.source;
    }
    if (source == null) {
      source = null;
    }
    const obj2 = { guildActivityIndicatorSource: source, IconComponent: icon, isCurrentUserConnected: tmp3.isCurrentUserConnected };
    icon = undefined;
    if (mediaIcon != null) {
      icon = mediaIcon.icon;
    }
    const guildActivityIndicatorSource = obj2.guildActivityIndicatorSource;
    let tmp8 = null;
    const tmp7 = _objectWithoutProperties(obj2, closure_3);
    if (null != guildActivityIndicatorSource) {
      const GuildsBarActivityIndicatorBase = GuildsBarActivityIndicator.GuildsBarActivityIndicatorBase;
      const merged = Object.assign(tmp7);
      tmp8 = <GuildsBarActivityIndicatorBase style={memo} source={guildActivityIndicatorSource} />;
    }
    const obj4 = { badgeTopRight: tmp8, cutoutTopRight: tmp14 };
    tmp14 = undefined;
    if (null != guildActivityIndicatorSource) {
      const obj5 = { position: "top-right", containerSize: token };
      tmp14 = computeGuildsBarCutoutDefault(obj5);
    }
    return obj4;
  }, items6);
  cutoutTopRight = memo1.cutoutTopRight;
  const badgeTopRight = memo1.badgeTopRight;
  const obj6 = { mentionCount, isMentionLowImportance, joinRequestState: stateFromStores1, shouldShowInvitesDisabled: stateFromStores2 };
  let tmp10 = require("useGuildsBarBottomRightBadge")(obj6);
  cutout = tmp10.cutout;
  const obj7 = {
    badgeTopRight,
    badgeBottomRight: tmp10.badge,
    cutouts: token1.useMemo(() => {
      const items = [];
      if (null != cutoutTopRight) {
        items.push(tmp);
      }
      if (null != cutout) {
        items.push(tmp3);
      }
      return items;
    }, items7),
    mediaState: tmp5
  };
  items7 = [cutoutTopRight, cutout];
  return obj7;
};
