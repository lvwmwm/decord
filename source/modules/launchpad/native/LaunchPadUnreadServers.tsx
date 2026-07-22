// Module ID: 15534
// Function ID: 118571
// Name: HistorySeparator
// Dependencies: []

// Module 15534 (HistorySeparator)
function HistorySeparator() {
  const tmp = callback2();
  let obj = { style: tmp.guildHistorySeparatorWrapper, children: callback(closure_5, obj) };
  obj = { style: tmp.guildHistorySeparator };
  return callback(closure_5, obj);
}
function renderHistorySection() {
  return callback(HistorySeparator, {});
}
const importAllResult = importAll(dependencyMap[0]);
({ Pressable: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
const ChannelTypes = arg1(dependencyMap[5]).ChannelTypes;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[6]));
let obj1 = arg1(dependencyMap[7]);
let obj = { listWrapper: { marginTop: 8 }, list: {} };
obj = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOW };
obj.maskStrokeStyle = obj;
obj.privateChannelWrapper = {};
obj.privateChannelIcon = {};
obj.badgeWrapper = {};
obj.guildWrapper = {};
obj.guildHistorySeparatorWrapper = {};
obj1 = { "Null": true, "Null": true, borderRadius: importDefault(dependencyMap[8]).radii.round, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_MOD_STRONG };
obj.guildHistorySeparator = obj1;
let closure_12 = obj1.createStyles(obj);
let closure_13 = importAllResult.memo(function GuildItemInner(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const onGuildSelect = guildId.onGuildSelect;
  const importDefault = onGuildSelect;
  const tmp = callback2();
  const items = [guildId, onGuildSelect];
  const items1 = [guildId];
  const callback = importAllResult.useCallback(() => {
    onGuildSelect(guildId);
  }, items);
  let obj = { style: tmp.guildWrapper };
  const callback1 = importAllResult.useCallback(() => {
    guildId(closure_2[9]).transitionToGuild(guildId);
  }, items1);
  obj = { guildId, selected: guildId.selected, onPress: callback, onLongPress: callback1, backgroundColor: tmp.maskStrokeStyle.backgroundColor };
  obj.children = callback(importDefault(dependencyMap[10]), obj);
  return callback(closure_5, obj);
});
let closure_14 = importAllResult.memo(function PrivateChannelItemInner(channelId) {
  const arg1 = channelId.channelId;
  const tmp = callback2();
  let obj = arg1(dependencyMap[11]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(channelId));
  const importDefault = stateFromStores;
  let obj2 = arg1(dependencyMap[11]);
  const items1 = [closure_8];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let user;
    if (null != stateFromStores) {
      if (stateFromStores.isPrivate()) {
        user = user.getUser(stateFromStores.getRecipientId());
      }
    }
    return user;
  });
  const dependencyMap = stateFromStores1;
  let obj3 = arg1(dependencyMap[11]);
  const items2 = [closure_7];
  const stateFromStores2 = obj3.useStateFromStores(items2, () => {
    let num = 0;
    if (null != stateFromStores) {
      num = mentionCount.getMentionCount(stateFromStores.id);
    }
    return num;
  });
  let type;
  if (null != stateFromStores) {
    type = stateFromStores.type;
  }
  if (type === ChannelTypes.DM) {
    if (null != stateFromStores1) {
      obj = { style: tmp.privateChannelIcon, user: stateFromStores1, guildId: undefined, size: arg1(dependencyMap[12]).AvatarSizes.LARGE_48 };
      let tmp5 = callback(arg1(dependencyMap[12]).Avatar, obj);
    }
    const items3 = [stateFromStores1, stateFromStores];
    let tmp22Result = null;
    if (null != stateFromStores) {
      obj = { onPress: tmp20, style: tmp.privateChannelWrapper, accessibilityRole: "button", accessible: true };
      const items4 = [tmp5, ];
      let tmp24 = stateFromStores2 > 0;
      if (tmp24) {
        const obj1 = { style: tmp.badgeWrapper };
        obj2 = { value: stateFromStores2, unread: true, backgroundColor: tmp.maskStrokeStyle.backgroundColor };
        obj1.children = callback(importDefault(dependencyMap[18]), obj2);
        tmp24 = callback(closure_5, obj1);
      }
      items4[1] = tmp24;
      obj.children = items4;
      tmp22Result = closure_11(closure_4, obj);
      const tmp22 = closure_11;
      const tmp23 = closure_4;
    }
    return tmp22Result;
  }
  if (null != stateFromStores) {
    if (stateFromStores.isGroupDM()) {
      obj3 = { channel: stateFromStores, size: arg1(dependencyMap[12]).AvatarSizes.LARGE_48 };
      tmp5 = callback(importDefault(dependencyMap[13]), obj3);
      const tmp14 = importDefault(dependencyMap[13]);
    }
  }
  if (null != stateFromStores) {
    const obj4 = {};
    const items5 = [tmp.privateChannelIcon];
    obj4.style = items5;
    const tmp9 = importDefault(dependencyMap[14]);
    obj4.source = arg1(dependencyMap[15]).getChannelIconSource(stateFromStores);
    tmp5 = callback(tmp9, obj4);
    const obj6 = arg1(dependencyMap[15]);
  }
});
const tmp3 = arg1(dependencyMap[6]);
const memoResult = importAllResult.memo(function LaunchPadUnreadServers(selectedGuildId) {
  selectedGuildId = selectedGuildId.selectedGuildId;
  const arg1 = selectedGuildId;
  const setSelectedGuild = selectedGuildId.setSelectedGuild;
  const importDefault = setSelectedGuild;
  let num = selectedGuildId.unreadPrivateChannelIds;
  const dependencyMap = num;
  let unreadGuilds = selectedGuildId.unreadGuilds;
  let guildHistory = selectedGuildId.guildHistory;
  const visible = selectedGuildId.visible;
  let flag = callback2();
  let obj = arg1(dependencyMap[19]);
  let categoryStyles = obj.useCategoryStyles();
  let tmp2 = importDefault(dependencyMap[20])("LaunchPadUnreadServers");
  let str = importDefault(dependencyMap[21])().width;
  let closure_6 = importAllResult.useRef(-1);
  const items = [setSelectedGuild, selectedGuildId];
  const callback = importAllResult.useCallback((arg0) => {
    if (ref.current < 0) {
      if (setSelectedGuild(22[22])(arg0)) {
        let tmp5;
        if (arg0 !== selectedGuildId) {
          tmp5 = arg0;
        }
        setSelectedGuild(tmp5);
        const _setTimeout = setTimeout;
        ref.current = setTimeout(() => {
          clearTimeout(ref.current);
          ref.current = -1;
        }, 400);
      }
    }
    clearTimeout(ref.current);
    ref.current = -1;
    selectedGuildId(num[9]).transitionToGuild(arg0);
  }, items);
  let closure_7 = callback;
  const effect = importAllResult.useEffect(() => () => clearTimeout(ref.current), []);
  const ref = unreadGuilds.useRef(null);
  let closure_8 = ref;
  const items1 = [visible];
  const effect1 = importAllResult.useEffect(() => {
    if (visible) {
      const current = ref.current;
      if (null != current) {
        current.scrollToTop(false);
      }
    }
  }, items1);
  const items2 = [unreadGuilds, num, selectedGuildId, callback, guildHistory];
  const items3 = [unreadGuilds.length, num.length, guildHistory.length];
  const callback1 = importAllResult.useCallback((arg0, arg1) => {
    if (0 === arg0) {
      let tmp14 = null != tmp12;
      if (tmp14) {
        let obj = { channelId: tmp12 };
        tmp14 = callback(closure_14, obj);
      }
      return tmp14;
    } else if (arg0 >= 1) {
      if (1 === arg0) {
        let tmp3 = unreadGuilds[arg1];
      } else {
        tmp3 = guildHistory[arg1];
      }
      let tmp6 = null != tmp3;
      if (tmp6) {
        obj = { guildId: tmp3, selected: selectedGuildId === tmp3, onGuildSelect: callback };
        tmp6 = callback(closure_13, obj);
      }
      return tmp6;
    } else {
      return null;
    }
  }, items2);
  let length = importAllResult.useCallback((arg0) => {
    let num = 0;
    if (2 === arg0) {
      num = 0;
      if (guildHistory.length > 0) {
        if (num.length > 0) {
          num = 10;
        } else {
          num = 0;
        }
      }
    }
    return num;
  }, items3);
  if (!(unreadGuilds.length > 0 || num.length > 0)) {
    if (guildHistory.length <= 0) {
      return null;
    }
  }
  obj = { style: flag.listWrapper };
  let AnimatedFastList = arg1(dependencyMap[19]);
  let renderCategoryItem = AnimatedFastList.renderCategoryItem;
  obj = {};
  const intl = arg1(dependencyMap[23]).intl;
  const string = intl.string;
  let xSY9BH = arg1(dependencyMap[23]).t;
  if (unreadGuilds.length > 0 || num.length > 0) {
    xSY9BH = xSY9BH.xSY9BH;
    let stringResult = string(xSY9BH);
  } else {
    stringResult = string(xSY9BH.kCt2zG);
  }
  obj.name = stringResult;
  obj.styles = categoryStyles;
  obj.isRefreshEnabled = tmp2;
  obj = [, ];
  obj[0] = renderCategoryItem(obj);
  tmp2 = callback;
  categoryStyles = dependencyMap;
  AnimatedFastList = arg1(dependencyMap[24]).AnimatedFastList;
  const obj1 = { ref, style: flag.list };
  flag = true;
  obj1.horizontal = true;
  obj1.renderItem = callback1;
  obj1.renderSection = renderHistorySection;
  obj1.sectionSize = length;
  length = num.length;
  const items4 = [length, , ];
  unreadGuilds = unreadGuilds.length;
  items4[1] = unreadGuilds;
  guildHistory = guildHistory.length;
  items4[2] = guildHistory;
  obj1.sections = items4;
  num = 58;
  obj1.itemSize = 58;
  obj1.headerSize = 19;
  obj1.footerSize = 19;
  obj1.chunkBase = str;
  obj1.showsHorizontalScrollIndicator = false;
  obj1.showsVerticalScrollIndicator = false;
  obj1.stickySectionsVariant = "disabled";
  str = "always";
  obj1.keyboardShouldPersistTaps = "always";
  renderCategoryItem = callback(AnimatedFastList, obj1);
  obj[1] = renderCategoryItem;
  obj.children = obj;
  closure_11(visible, obj);
});
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/launchpad/native/LaunchPadUnreadServers.tsx");

export default memoResult;
