// Module ID: 16362
// Function ID: 126271
// Dependencies: []

// Module 16362
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const isGuildReadableType = arg1(dependencyMap[3]).isGuildReadableType;
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
({ ChannelTypes: closure_10, NotificationSettingsSections: closure_11 } = arg1(dependencyMap[7]));
const tmp2 = arg1(dependencyMap[7]);
({ jsx: closure_12, jsxs: closure_13 } = arg1(dependencyMap[8]));
let obj1 = arg1(dependencyMap[9]);
let obj = {};
obj = { marginHorizontal: importDefault(dependencyMap[10]).space.PX_8, flex: 1 };
obj.container = obj;
obj1 = { paddingVertical: importDefault(dependencyMap[10]).space.PX_16 };
obj.searchContainer = obj1;
let closure_14 = obj1.createStyles(obj);
const tmp3 = arg1(dependencyMap[8]);
const memoResult = importAllResult.memo(function NotificationSettingChannelOverrides(arg0) {
  let navigation;
  ({ guildId: closure_0, navigation } = arg0);
  const importDefault = navigation;
  const tmp = callback3();
  let obj = arg1(dependencyMap[11]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => categories.getCategories(closure_0));
  const dependencyMap = stateFromStores;
  const tmp3 = callback(importAllResult.useState(""), 2);
  const first = tmp3[0];
  let callback = first;
  const items1 = [stateFromStores, first];
  const memo = importAllResult.useMemo(() => {
    const channels = navigation(stateFromStores[13])(stateFromStores._categories, stateFromStores, (channel) => {
      channel = channel.channel;
      let tmp = callback3(channel.type);
      if (!tmp) {
        let tmp3 = channel.type === constants.GUILD_CATEGORY;
        if (tmp3) {
          tmp3 = null != closure_2[channel.id];
        }
        if (tmp3) {
          tmp3 = closure_2[channel.id].length > 0;
        }
        tmp = tmp3;
      }
      if (tmp) {
        if ("" !== closure_3) {
          if (null != closure_3) {
            const obj = callback(closure_2[14]);
            const formatted = callback(closure_2[14]).computeChannelName(channel, closure_9, closure_8).toLowerCase();
            const str2 = callback(closure_2[14]).computeChannelName(channel, closure_9, closure_8);
            return callback2(closure_2[15])(closure_3.toLowerCase(), formatted);
          }
        }
        return tmp;
      } else {
        return false;
      }
    }).map((channel) => channel.channel);
    const sections = [channels.length];
    return { channels, sections };
  }, items1);
  const channels = memo.channels;
  const items2 = [channels, first];
  const effect = importAllResult.useEffect(() => {
    if (null != first) {
      if ("" !== first) {
        if (channels.length > 0) {
          const intl2 = callback(stateFromStores[16]).intl;
          const obj = { count: length };
          let formatToPlainStringResult = intl2.formatToPlainString(callback(stateFromStores[16]).t.ZGVL3g, obj);
        } else {
          const intl = callback(stateFromStores[16]).intl;
          formatToPlainStringResult = intl.string(callback(stateFromStores[16]).t.f5cMAg);
        }
        const AccessibilityAnnouncer = callback(stateFromStores[17]).AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(formatToPlainStringResult);
      }
    }
  }, items2);
  const items3 = [channels, navigation];
  callback = importAllResult.useCallback((arg0, arg1) => {
    const tmp = channels[arg1];
    let obj = {};
    obj = { IconComponent: tmp(stateFromStores[21]).getChannelIconComponent(tmp) };
    obj.icon = callback2(tmp(stateFromStores[20]).TableRowIcon, obj);
    obj.start = 0 === arg1;
    obj.end = arg1 === channels.length - 1;
    const obj3 = tmp(stateFromStores[21]);
    obj.label = tmp(stateFromStores[14]).computeChannelName(tmp, closure_9, closure_8);
    obj.labelLineClamp = 1;
    obj.arrow = true;
    obj.onPress = function onPress() {

    };
    return callback2(tmp(stateFromStores[19]).TableRow, obj);
  }, items3);
  obj = { style: tmp.container };
  obj = { style: tmp.searchContainer };
  const tmp7 = importDefault(dependencyMap[18])();
  const obj1 = {};
  const intl = arg1(dependencyMap[16]).intl;
  obj1.placeholder = intl.string(arg1(dependencyMap[16]).t.5h0QOP);
  obj1.onChange = tmp3[1];
  obj.children = callback2(arg1(dependencyMap[23]).SearchField, obj1);
  const items4 = [callback2(View, obj), ];
  if (0 === channels.length) {
    const obj2 = { Illustration: arg1(dependencyMap[25]).NoResults };
    const intl2 = arg1(dependencyMap[16]).intl;
    obj2.title = intl2.string(arg1(dependencyMap[16]).t.wM7uRI);
    const intl3 = arg1(dependencyMap[16]).intl;
    obj2.body = intl3.string(arg1(dependencyMap[16]).t.f5cMAg);
    let tmp15 = callback2(arg1(dependencyMap[24]).EmptyState, obj2);
  } else {
    const obj3 = { sections: memo.sections, renderItem: callback, itemSize: tmp7, insetEnd: importDefault(dependencyMap[12])().insets.bottom, estimatedListSize: "windowSize", placeholderConfig: tmp9, wrapChildren: true };
    tmp15 = callback2(importDefault(dependencyMap[26]), obj3);
  }
  items4[1] = tmp15;
  obj.children = items4;
  return closure_13(View, obj);
});
const result = arg1(dependencyMap[27]).fileFinishedImporting("modules/notification_settings/native/NotificationSettingChannelOverrides.native.tsx");

export default memoResult;
