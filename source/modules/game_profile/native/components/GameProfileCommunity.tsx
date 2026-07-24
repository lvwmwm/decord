// Module ID: 8691
// Function ID: 68676
// Name: GameProfileCommunityServer
// Dependencies: [5, 57, 31, 27, 1350, 33, 4130, 689, 8646, 4114, 4119, 8692, 566, 8642, 5737, 8693, 1387, 4126, 1212, 5085, 1392, 5513, 5701, 1273, 4543, 2]
// Exports: default

// Module 8691 (GameProfileCommunityServer)
import closure_3 from "jsxProd";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import closure_7 from "_createForOfIteratorHelperLoose";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_8;
let closure_9;
const require = arg1;
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.headerText = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj1 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.card = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, overflow: "hidden", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.guildBanner = { height: 112, width: "100%", resizeMode: "cover" };
let obj2 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, overflow: "hidden", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.guildContent = { flexDirection: "column", padding: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj4 = { width: 56, height: 56, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, overflow: "hidden", borderWidth: require("_createForOfIteratorHelperLoose").space.PX_4, borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, marginLeft: -require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.guildIcon = obj4;
let obj3 = { flexDirection: "column", padding: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.guildIconWithBanner = { marginTop: -require("_createForOfIteratorHelperLoose").space.PX_48 };
let obj6 = { width: "100%", height: "100%", borderRadius: require("_createForOfIteratorHelperLoose").radii.none };
_createForOfIteratorHelperLoose.guildIconImage = obj6;
let obj5 = { marginTop: -require("_createForOfIteratorHelperLoose").space.PX_48 };
_createForOfIteratorHelperLoose.guildInfo = { flex: 1, gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj7 = { flex: 1, gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.guildNameDescriptionContainer = { gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
let obj9 = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.guildNameRow = obj9;
let obj8 = { gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.memberCountsContainer = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj11 = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.memberCountContainer = obj11;
let obj12 = { width: 8, height: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: require("_createForOfIteratorHelperLoose").colors.STATUS_POSITIVE };
_createForOfIteratorHelperLoose.onlineEllipse = obj12;
let obj13 = { width: 8, height: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT };
_createForOfIteratorHelperLoose.membersEllipse = obj13;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj10 = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("result").fileFinishedImporting("modules/game_profile/native/components/GameProfileCommunity.tsx");

export default function GameProfileCommunityServer(game) {
  game = game.game;
  const trackAction = game.trackAction;
  const onInviteResolved = game.onInviteResolved;
  const closeModal = game.closeModal;
  let memo;
  let stateFromStores;
  const tmp = _createForOfIteratorHelperLoose();
  const tmp3 = first(React.useState(null), 2);
  first = tmp3[0];
  React = tmp3[1];
  let closure_6 = React.useRef(onInviteResolved);
  const items = [onInviteResolved];
  const effect = React.useEffect(() => {
    closure_6.current = onInviteResolved;
  }, items);
  let websites;
  if (null != game) {
    websites = game.websites;
  }
  const items1 = [websites];
  memo = React.useMemo(() => {
    let found;
    if (null != game) {
      const websites = game.websites;
      if (null != websites) {
        found = websites.find((category) => category.category === game(onInviteResolved[8]).ThirdPartyGameApplicationWebsiteCategory.DISCORD);
      }
    }
    return found;
  }, items1);
  const items2 = [memo];
  const effect1 = React.useEffect(() => {
    function _resolve() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = closeModal(tmp);
      return obj(...arguments);
    }
    if (null != memo) {
      (function resolve() {
        return _resolve(...arguments);
      })();
    }
  }, items2);
  let obj = game(onInviteResolved[12]);
  const items3 = [memo];
  stateFromStores = obj.useStateFromStores(items3, () => {
    let id;
    if (null != first) {
      const guild = first.guild;
      if (null != guild) {
        id = guild.id;
      }
    }
    let isMemberResult = null != id;
    if (isMemberResult) {
      isMemberResult = memo.isMember(first.guild.id);
    }
    return isMemberResult;
  });
  const items4 = [first, stateFromStores, trackAction, closeModal];
  if (null != first) {
    if (null != first.guild) {
      const fromInviteGuildResult = game(onInviteResolved[16]).fromInviteGuild(first.guild);
      let approximate_member_count = first.approximate_member_count;
      if (null == approximate_member_count) {
        approximate_member_count = first.guild.approximate_member_count;
      }
      let approximate_presence_count = first.approximate_presence_count;
      if (null == approximate_presence_count) {
        approximate_presence_count = first.guild.approximate_presence_count;
      }
      obj = { style: tmp.container };
      obj = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", style: tmp.headerText };
      const intl = game(onInviteResolved[18]).intl;
      obj.children = intl.string(game(onInviteResolved[18]).t["U2N+ci"]);
      const items5 = [stateFromStores(game(onInviteResolved[17]).Text, obj), ];
      const obj1 = { style: tmp.card };
      let tmp16 = null != fromInviteGuildResult.banner;
      if (tmp16) {
        let obj2 = {};
        let obj5 = trackAction(onInviteResolved[20]);
        obj2.source = obj5.getGuildBannerSource(fromInviteGuildResult);
        obj2.style = tmp.guildBanner;
        tmp16 = stateFromStores(trackAction(onInviteResolved[19]), obj2);
        const tmp20 = trackAction(onInviteResolved[19]);
      }
      const items6 = [tmp16, ];
      const obj3 = { style: tmp.guildContent };
      const obj4 = {};
      const items7 = [tmp.guildIcon, ];
      let guildIconWithBanner = null;
      if (null != fromInviteGuildResult.banner) {
        guildIconWithBanner = tmp.guildIconWithBanner;
      }
      items7[1] = guildIconWithBanner;
      obj4.style = items7;
      obj5 = { guild: fromInviteGuildResult };
      const obj26 = game(onInviteResolved[16]);
      const tmp21 = callback;
      const tmp23 = stateFromStores;
      obj5.size = game(onInviteResolved[21]).GuildIconSizes.LARGE;
      obj5.style = tmp.guildIconImage;
      obj4.children = stateFromStores(trackAction(onInviteResolved[21]), obj5);
      const items8 = [tmp23(closure_6, obj4), , ];
      const obj6 = { style: tmp.guildInfo };
      const obj7 = { style: tmp.guildNameDescriptionContainer };
      const obj8 = { style: tmp.guildNameRow };
      const obj9 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: fromInviteGuildResult.name };
      const items9 = [stateFromStores(game(onInviteResolved[17]).Text, obj9), ];
      const obj10 = { guild: fromInviteGuildResult };
      const tmp28 = trackAction(onInviteResolved[21]);
      obj10.size = game(onInviteResolved[23]).Icon.Sizes.REFRESH_SMALL_16;
      items9[1] = stateFromStores(trackAction(onInviteResolved[22]), obj10);
      obj8.children = items9;
      const items10 = [callback(closure_6, obj8), ];
      const obj11 = { variant: "text-sm/medium", color: "text-default", lineClamp: 3, children: fromInviteGuildResult.description };
      items10[1] = stateFromStores(game(onInviteResolved[17]).Text, obj11);
      obj7.children = items10;
      const items11 = [callback(closure_6, obj7), ];
      const obj12 = { style: tmp.memberCountsContainer };
      let tmp33 = null;
      if (null != approximate_presence_count) {
        const obj13 = { style: tmp.memberCountContainer };
        const obj14 = { style: tmp.onlineEllipse };
        const items12 = [stateFromStores(closure_6, obj14), ];
        const obj15 = { variant: "text-xs/normal", color: "text-default" };
        const intl2 = game(onInviteResolved[18]).intl;
        const obj16 = { membersOnline: approximate_presence_count };
        obj15.children = intl2.formatToPlainString(game(onInviteResolved[18]).t["LC+S+m"], obj16);
        items12[1] = stateFromStores(game(onInviteResolved[17]).Text, obj15);
        obj13.children = items12;
        tmp33 = callback(closure_6, obj13);
      }
      const items13 = [tmp33, ];
      let tmp39 = null;
      if (null != approximate_member_count) {
        const obj17 = { style: tmp.memberCountContainer };
        const obj18 = { style: tmp.membersEllipse };
        const items14 = [stateFromStores(closure_6, obj18), ];
        const obj19 = { variant: "text-xs/normal", color: "text-default" };
        const intl3 = game(onInviteResolved[18]).intl;
        const obj20 = { count: approximate_member_count };
        obj19.children = intl3.formatToPlainString(game(onInviteResolved[18]).t.zRl6XR, obj20);
        items14[1] = stateFromStores(game(onInviteResolved[17]).Text, obj19);
        obj17.children = items14;
        tmp39 = callback(closure_6, obj17);
      }
      items13[1] = tmp39;
      obj12.children = items13;
      items11[1] = callback(closure_6, obj12);
      obj6.children = items11;
      items8[1] = callback(closure_6, obj6);
      const obj21 = { variant: "secondary", size: "md" };
      const intl4 = game(onInviteResolved[18]).intl;
      const string = intl4.string;
      const t = game(onInviteResolved[18]).t;
      if (stateFromStores) {
        let stringResult = string(t.cEnaWx);
      } else {
        stringResult = string(t.XpeFYr);
      }
      obj21.text = stringResult;
      obj21.onPress = tmp10;
      items8[2] = stateFromStores(game(onInviteResolved[24]).Button, obj21);
      obj3.children = items8;
      items6[1] = tmp21(closure_6, obj3);
      obj1.children = items6;
      items5[1] = callback(closure_6, obj1);
      obj.children = items5;
      return callback(closure_6, obj);
    }
  }
  return null;
};
