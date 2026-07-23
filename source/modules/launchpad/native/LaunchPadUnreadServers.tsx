// Module ID: 15651
// Function ID: 120744
// Name: HistorySeparator
// Dependencies: [31, 27, 1348, 4142, 1849, 653, 33, 4130, 689, 5737, 15652, 566, 1273, 9096, 5085, 11953, 4140, 4138, 9127, 14965, 1324, 1450, 15657, 1212, 7588, 2]

// Module 15651 (HistorySeparator)
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { ChannelTypes } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_4;
let closure_5;
const require = arg1;
function HistorySeparator() {
  const tmp = callback2();
  obj = { style: tmp.guildHistorySeparatorWrapper, children: callback(closure_5, obj) };
  obj = { style: tmp.guildHistorySeparator };
  return callback(closure_5, obj);
}
function renderHistorySection() {
  return callback(HistorySeparator, {});
}
({ Pressable: closure_4, View: closure_5 } = get_ActivityIndicator);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
let obj = { listWrapper: { marginTop: 8 }, list: { marginBottom: 4, flexShrink: 0 } };
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
obj.maskStrokeStyle = obj;
obj.privateChannelWrapper = { position: "relative", paddingVertical: 2, justifyContent: "center", alignItems: "center" };
obj.privateChannelIcon = { width: 48, height: 48, borderRadius: 24, overflow: "hidden" };
obj.badgeWrapper = { position: "absolute", top: "50%", left: "50%", marginLeft: 6, marginTop: 6 };
obj.guildWrapper = { paddingVertical: 2, justifyContent: "center", alignItems: "center" };
obj.guildHistorySeparatorWrapper = { flex: 1, justifyContent: "center", alignItems: "center" };
_createForOfIteratorHelperLoose = { width: 2, height: 32, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_STRONG };
obj.guildHistorySeparator = _createForOfIteratorHelperLoose;
let closure_12 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_13 = importAllResult.memo(function GuildItemInner(guildId) {
  guildId = guildId.guildId;
  const onGuildSelect = guildId.onGuildSelect;
  const tmp = callback2();
  const items = [guildId, onGuildSelect];
  const items1 = [guildId];
  const callback = importAllResult.useCallback(() => {
    onGuildSelect(guildId);
  }, items);
  let obj = { style: tmp.guildWrapper };
  const callback1 = importAllResult.useCallback(() => {
    guildId(outer1_2[9]).transitionToGuild(guildId);
  }, items1);
  obj = { size: 48, borderRadius: 16, guildId, selected: guildId.selected, onPress: callback, onLongPress: callback1, backgroundColor: tmp.maskStrokeStyle.backgroundColor };
  obj.children = callback(onGuildSelect(15652), obj);
  return callback(closure_5, obj);
});
let closure_14 = importAllResult.memo(function PrivateChannelItemInner(channelId) {
  channelId = channelId.channelId;
  const tmp = callback2();
  let obj = channelId(stateFromStores1[11]);
  let items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getChannel(channelId));
  let obj2 = channelId(stateFromStores1[11]);
  const items1 = [closure_8];
  stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let user;
    if (null != stateFromStores) {
      if (stateFromStores.isPrivate()) {
        user = outer1_8.getUser(stateFromStores.getRecipientId());
      }
    }
    return user;
  });
  let obj3 = channelId(stateFromStores1[11]);
  const items2 = [closure_7];
  const stateFromStores2 = obj3.useStateFromStores(items2, () => {
    let num = 0;
    if (null != stateFromStores) {
      num = outer1_7.getMentionCount(stateFromStores.id);
    }
    return num;
  });
  let type;
  if (null != stateFromStores) {
    type = stateFromStores.type;
  }
  if (type === ChannelTypes.DM) {
    if (null != stateFromStores1) {
      obj = { style: tmp.privateChannelIcon, user: stateFromStores1, guildId: undefined, size: channelId(stateFromStores1[12]).AvatarSizes.LARGE_48 };
      let tmp5 = callback(channelId(stateFromStores1[12]).Avatar, obj);
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
        obj1.children = callback(stateFromStores(stateFromStores1[18]), obj2);
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
      obj3 = { channel: stateFromStores, size: channelId(stateFromStores1[12]).AvatarSizes.LARGE_48 };
      tmp5 = callback(stateFromStores(stateFromStores1[13]), obj3);
      const tmp14 = stateFromStores(stateFromStores1[13]);
    }
  }
  if (null != stateFromStores) {
    const obj4 = {};
    const items5 = [tmp.privateChannelIcon];
    obj4.style = items5;
    const tmp9 = stateFromStores(stateFromStores1[14]);
    obj4.source = channelId(stateFromStores1[15]).getChannelIconSource(stateFromStores);
    tmp5 = callback(tmp9, obj4);
    const obj6 = channelId(stateFromStores1[15]);
  }
});
const memoResult = importAllResult.memo(function LaunchPadUnreadServers(selectedGuildId) {
  selectedGuildId = selectedGuildId.selectedGuildId;
  const setSelectedGuild = selectedGuildId.setSelectedGuild;
  let num = selectedGuildId.unreadPrivateChannelIds;
  let unreadGuilds = selectedGuildId.unreadGuilds;
  let guildHistory = selectedGuildId.guildHistory;
  const visible = selectedGuildId.visible;
  let flag = callback2();
  let obj = selectedGuildId(num[19]);
  let categoryStyles = obj.useCategoryStyles();
  let tmp2 = setSelectedGuild(num[20])("LaunchPadUnreadServers");
  let str = setSelectedGuild(num[21])().width;
  let _isNativeReflectConstruct = unreadGuilds.useRef(-1);
  const items = [setSelectedGuild, selectedGuildId];
  const callback = unreadGuilds.useCallback((arg0) => {
    if (ref.current < 0) {
      if (setSelectedGuild(22[22])(arg0)) {
        let tmp5;
        if (arg0 !== selectedGuildId) {
          tmp5 = arg0;
        }
        setSelectedGuild(tmp5);
        const _setTimeout = setTimeout;
        ref.current = setTimeout(() => {
          clearTimeout(outer1_6.current);
          outer1_6.current = -1;
        }, 400);
      }
    }
    clearTimeout(ref.current);
    ref.current = -1;
    selectedGuildId(num[9]).transitionToGuild(arg0);
  }, items);
  const effect = unreadGuilds.useEffect(() => () => clearTimeout(outer1_6.current), []);
  const ref = unreadGuilds.useRef(null);
  const items1 = [visible];
  const effect1 = unreadGuilds.useEffect(() => {
    if (visible) {
      const current = ref.current;
      if (null != current) {
        current.scrollToTop(false);
      }
    }
  }, items1);
  const items2 = [unreadGuilds, num, selectedGuildId, callback, guildHistory];
  const items3 = [unreadGuilds.length, num.length, guildHistory.length];
  const callback1 = unreadGuilds.useCallback((arg0, arg1) => {
    if (0 === arg0) {
      let tmp14 = null != tmp12;
      if (tmp14) {
        let obj = { channelId: tmp12 };
        tmp14 = outer1_10(outer1_14, obj);
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
        tmp6 = outer1_10(outer1_13, obj);
      }
      return tmp6;
    } else {
      return null;
    }
  }, items2);
  let length = unreadGuilds.useCallback((arg0) => {
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
  let AnimatedFastList = selectedGuildId(num[19]);
  let renderCategoryItem = AnimatedFastList.renderCategoryItem;
  obj = {};
  const intl = selectedGuildId(num[23]).intl;
  const string = intl.string;
  let xSY9BH = selectedGuildId(num[23]).t;
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
  categoryStyles = num;
  AnimatedFastList = selectedGuildId(num[24]).AnimatedFastList;
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
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/launchpad/native/LaunchPadUnreadServers.tsx");

export default memoResult;
