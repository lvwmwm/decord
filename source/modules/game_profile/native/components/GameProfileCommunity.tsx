// Module ID: 8638
// Function ID: 68381
// Name: GameProfileCommunityServer
// Dependencies: []
// Exports: default

// Module 8638 (GameProfileCommunityServer)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
let closure_7 = importDefault(dependencyMap[4]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { gap: importDefault(dependencyMap[7]).space.PX_8 };
obj.container = obj;
const tmp2 = arg1(dependencyMap[5]);
obj.headerText = { paddingHorizontal: importDefault(dependencyMap[7]).space.PX_8 };
const obj1 = { paddingHorizontal: importDefault(dependencyMap[7]).space.PX_8 };
obj.card = { borderRadius: importDefault(dependencyMap[7]).radii.lg, borderWidth: 1, borderColor: importDefault(dependencyMap[7]).colors.BORDER_SUBTLE, overflow: "hidden", backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOW };
obj.guildBanner = { direction: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003058658255, style: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000267936461583437, borderWidth: 9126827931.15674 };
const obj2 = { borderRadius: importDefault(dependencyMap[7]).radii.lg, borderWidth: 1, borderColor: importDefault(dependencyMap[7]).colors.BORDER_SUBTLE, overflow: "hidden", backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOW };
obj.guildContent = { flexDirection: "column", padding: importDefault(dependencyMap[7]).space.PX_16, gap: importDefault(dependencyMap[7]).space.PX_16 };
const obj4 = { "Bool(false)": "ab7bfd0490af9a9d0729fca1ff2529c0", "Bool(false)": "HeartIcon", "Bool(false)": "png", "Bool(false)": null, borderRadius: importDefault(dependencyMap[7]).radii.md, borderWidth: importDefault(dependencyMap[7]).space.PX_4, borderColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOW, marginLeft: -importDefault(dependencyMap[7]).space.PX_4 };
obj.guildIcon = obj4;
const obj3 = { flexDirection: "column", padding: importDefault(dependencyMap[7]).space.PX_16, gap: importDefault(dependencyMap[7]).space.PX_16 };
obj.guildIconWithBanner = { marginTop: -importDefault(dependencyMap[7]).space.PX_48 };
const obj6 = { aze: 30271555, azj: 22092032, borderRadius: importDefault(dependencyMap[7]).radii.none };
obj.guildIconImage = obj6;
const obj5 = { marginTop: -importDefault(dependencyMap[7]).space.PX_48 };
obj.guildInfo = { flex: 1, gap: importDefault(dependencyMap[7]).space.PX_16 };
const obj7 = { flex: 1, gap: importDefault(dependencyMap[7]).space.PX_16 };
obj.guildNameDescriptionContainer = { gap: importDefault(dependencyMap[7]).space.PX_4 };
const obj9 = { -9223372036854775808: true, filter: true, gap: importDefault(dependencyMap[7]).space.PX_4 };
obj.guildNameRow = obj9;
const obj8 = { gap: importDefault(dependencyMap[7]).space.PX_4 };
obj.memberCountsContainer = { flexDirection: "row", gap: importDefault(dependencyMap[7]).space.PX_16 };
const obj11 = { -9223372036854775808: true, filter: true, gap: importDefault(dependencyMap[7]).space.PX_4 };
obj.memberCountContainer = obj11;
const obj10 = { flexDirection: "row", gap: importDefault(dependencyMap[7]).space.PX_16 };
obj.onlineEllipse = { borderRadius: importDefault(dependencyMap[7]).radii.round, backgroundColor: importDefault(dependencyMap[7]).colors.STATUS_POSITIVE };
const obj12 = { borderRadius: importDefault(dependencyMap[7]).radii.round, backgroundColor: importDefault(dependencyMap[7]).colors.STATUS_POSITIVE };
obj.membersEllipse = { borderRadius: importDefault(dependencyMap[7]).radii.round, backgroundColor: importDefault(dependencyMap[7]).colors.TEXT_DEFAULT };
let closure_10 = obj.createStyles(obj);
const obj13 = { borderRadius: importDefault(dependencyMap[7]).radii.round, backgroundColor: importDefault(dependencyMap[7]).colors.TEXT_DEFAULT };
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/game_profile/native/components/GameProfileCommunity.tsx");

export default function GameProfileCommunityServer(game) {
  game = game.game;
  const arg1 = game;
  const trackAction = game.trackAction;
  const importDefault = trackAction;
  const onInviteResolved = game.onInviteResolved;
  const dependencyMap = onInviteResolved;
  const closeModal = game.closeModal;
  let closure_3 = closeModal;
  let closure_7;
  let stateFromStores;
  const tmp = callback3();
  const tmp3 = callback(React.useState(null), 2);
  const first = tmp3[0];
  const callback = first;
  const React = tmp3[1];
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
  const memo = React.useMemo(() => {
    let found;
    if (null != game) {
      const websites = game.websites;
      if (null != websites) {
        found = websites.find((category) => category.category === callback(closure_2[8]).ThirdPartyGameApplicationWebsiteCategory.DISCORD);
      }
    }
    return found;
  }, items1);
  closure_7 = memo;
  const items2 = [memo];
  const effect1 = React.useEffect(() => {
    function _resolve() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = callback(tmp);
      const _resolve = obj;
      return obj(...arguments);
    }
    if (null != memo) {
      function resolve() {
        return _resolve(...arguments);
      }();
    }
  }, items2);
  let obj = arg1(dependencyMap[12]);
  const items3 = [closure_7];
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
      const fromInviteGuildResult = arg1(dependencyMap[16]).fromInviteGuild(first.guild);
      let approximate_member_count = first.approximate_member_count;
      if (null == approximate_member_count) {
        approximate_member_count = first.guild.approximate_member_count;
      }
      let approximate_presence_count = first.approximate_presence_count;
      if (null == approximate_presence_count) {
        approximate_presence_count = first.guild.approximate_presence_count;
      }
      obj = { style: tmp.container };
      obj = { INTEGRATION_CREATE: "polite", ConstraintReasonCode: "column", style: tmp.headerText };
      const intl = arg1(dependencyMap[18]).intl;
      obj.children = intl.string(arg1(dependencyMap[18]).t.U2N+ci);
      const items5 = [stateFromStores(arg1(dependencyMap[17]).Text, obj), ];
      const obj1 = { style: tmp.card };
      let tmp16 = null != fromInviteGuildResult.banner;
      if (tmp16) {
        const obj2 = {};
        let obj5 = importDefault(dependencyMap[20]);
        obj2.source = obj5.getGuildBannerSource(fromInviteGuildResult);
        obj2.style = tmp.guildBanner;
        tmp16 = stateFromStores(importDefault(dependencyMap[19]), obj2);
        const tmp20 = importDefault(dependencyMap[19]);
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
      const obj26 = arg1(dependencyMap[16]);
      const tmp21 = callback2;
      const tmp23 = stateFromStores;
      obj5.size = arg1(dependencyMap[21]).GuildIconSizes.LARGE;
      obj5.style = tmp.guildIconImage;
      obj4.children = stateFromStores(importDefault(dependencyMap[21]), obj5);
      const items8 = [tmp23(closure_6, obj4), , ];
      const obj6 = { style: tmp.guildInfo };
      const obj7 = { style: tmp.guildNameDescriptionContainer };
      const obj8 = { style: tmp.guildNameRow };
      const obj9 = { children: fromInviteGuildResult.name };
      const items9 = [stateFromStores(arg1(dependencyMap[17]).Text, obj9), ];
      const obj10 = { guild: fromInviteGuildResult };
      const tmp28 = importDefault(dependencyMap[21]);
      obj10.size = arg1(dependencyMap[23]).Icon.Sizes.REFRESH_SMALL_16;
      items9[1] = stateFromStores(importDefault(dependencyMap[22]), obj10);
      obj8.children = items9;
      const items10 = [callback2(closure_6, obj8), ];
      const obj11 = { children: fromInviteGuildResult.description };
      items10[1] = stateFromStores(arg1(dependencyMap[17]).Text, obj11);
      obj7.children = items10;
      const items11 = [callback2(closure_6, obj7), ];
      const obj12 = { style: tmp.memberCountsContainer };
      let tmp33 = null;
      if (null != approximate_presence_count) {
        const obj13 = { style: tmp.memberCountContainer };
        const obj14 = { style: tmp.onlineEllipse };
        const items12 = [stateFromStores(closure_6, obj14), ];
        const obj15 = { INTEGRATION_CREATE: true, ConstraintReasonCode: true };
        const intl2 = arg1(dependencyMap[18]).intl;
        const obj16 = { membersOnline: approximate_presence_count };
        obj15.children = intl2.formatToPlainString(arg1(dependencyMap[18]).t.LC+S+m, obj16);
        items12[1] = stateFromStores(arg1(dependencyMap[17]).Text, obj15);
        obj13.children = items12;
        tmp33 = callback2(closure_6, obj13);
      }
      const items13 = [tmp33, ];
      let tmp39 = null;
      if (null != approximate_member_count) {
        const obj17 = { style: tmp.memberCountContainer };
        const obj18 = { style: tmp.membersEllipse };
        const items14 = [stateFromStores(closure_6, obj18), ];
        const obj19 = { INTEGRATION_CREATE: true, ConstraintReasonCode: true };
        const intl3 = arg1(dependencyMap[18]).intl;
        const obj20 = { count: approximate_member_count };
        obj19.children = intl3.formatToPlainString(arg1(dependencyMap[18]).t.zRl6XR, obj20);
        items14[1] = stateFromStores(arg1(dependencyMap[17]).Text, obj19);
        obj17.children = items14;
        tmp39 = callback2(closure_6, obj17);
      }
      items13[1] = tmp39;
      obj12.children = items13;
      items11[1] = callback2(closure_6, obj12);
      obj6.children = items11;
      items8[1] = callback2(closure_6, obj6);
      const obj21 = { <string:1522289750>: "r", <string:570601313>: "isArray" };
      const intl4 = arg1(dependencyMap[18]).intl;
      const string = intl4.string;
      const t = arg1(dependencyMap[18]).t;
      if (stateFromStores) {
        let stringResult = string(t.cEnaWx);
      } else {
        stringResult = string(t.XpeFYr);
      }
      obj21.text = stringResult;
      obj21.onPress = tmp10;
      items8[2] = stateFromStores(arg1(dependencyMap[24]).Button, obj21);
      obj3.children = items8;
      items6[1] = tmp21(closure_6, obj3);
      obj1.children = items6;
      items5[1] = callback2(closure_6, obj1);
      obj.children = items5;
      return callback2(closure_6, obj);
    }
  }
  return null;
};
