// Module ID: 15777
// Function ID: 15778
// Name: GuildSettingsModalChannels
// Dependencies: [19, 17, 2045, 2067, 4469, 4479, 1372, 15775, 1074, 21, 4836, 5836, 576, 2070, 4540, 1115, 4685, 1092, 8053, 1177, 15778, 504, 5335, 4989, 5435, 1613, 5281, 6615, 9015, 8332, 6795, 4474, 15779, 15780, 6461, 8085, 15781, 15776, 11282, 14844, 9684, 11105, 5832, 5203, 1485, 38, 5288, 2]
// Exports: default

// Module 15777 (GuildSettingsModalChannels)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1092 */;
import intl5 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import useNavigation from "useNavigation" /* 1485 */;
import FavoritesUtils from "FavoritesUtils" /* 2070 */;
import PermissionUtilsAll from "PermissionUtils" /* 4474 */;
import native2 from "native" /* 4540 */;
import shared from "shared" /* 4685 */;
import useChannelName from "useChannelName" /* 4989 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5203 */;
import useFontScale from "useFontScale" /* 5288 */;
import Pressables from "Pressables" /* 5435 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5832 */;
import showSimpleActionSheet2 from "showSimpleActionSheet" /* 6615 */;
import HeaderActionButton2 from "HeaderActionButton" /* 6795 */;
import ChannelSettingsActionCreators from "ChannelSettingsActionCreators" /* 8085 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 9684 */;
import AssetRegistryDefault from "AssetRegistry" /* 11282 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 14844 */;
import GuildSettingsModalChannelsActionCreatorsDefault from "GuildSettingsModalChannelsActionCreators" /* 15776 */;
import ChannelSortingUtils from "ChannelSortingUtils" /* 15779 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 15781 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserStore from "UserStore" /* 1372 */;
import GuildSettingsModalChannelsStore from "GuildSettingsModalChannelsStore" /* 15775 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import TextStyles_mod from "TextStyles" /* 5836 */;
import size from "module_2" /* 2 */;

let _require, currentUser, dependencyMap, navigation;

let Fonts;
let StyleSheet;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
function ChannelItem(isFavoritesGuild) {
  let FormRow;
  let actionIconStyle;
  let channel;
  let channelIconStyle;
  let fn;
  let hex2rgbResult;
  let num3;
  let obj6;
  let obj9;
  let sortHandlers;
  let sortingEnabled;
  let style;
  let tmp13;
  let tmp15;
  let tmp7Result;
  let tmp7Result2;
  let tmpResult8;
  ({ channelIconStyle, channel } = isFavoritesGuild);
  isFavoritesGuild = isFavoritesGuild.isFavoritesGuild;
  ({ sortingEnabled, onPress: importAll, sortHandlers } = isFavoritesGuild);
  let tmp = channel;
  ({ style, actionIconStyle } = isFavoritesGuild);
  let obj = channel(4836);
  const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(closure_18);
  let obj2 = channel(4685);
  const theme = obj2.useThemeContext().theme;
  const items = [PermissionStore];
  const items1 = [channel, isFavoritesGuild];
  const obj3 = channel(504);
  const stateFromStores = obj3.useStateFromStores(items, () => {
    let tmp = isFavoritesGuild;
    if (!tmp) {
      let result;
      if (null == channel.parent_id) {
        const obj2 = { guildId: channel.guild_id };
        result = PermissionStore.canWithPartialContext(constants.MANAGE_CHANNELS, obj2);
      } else {
        const obj = { channelId: channel.parent_id };
        result = PermissionStore.canWithPartialContext(constants.MANAGE_CHANNELS, obj);
      }
      tmp = result;
    }
    return tmp;
  }, items1);
  const tmpResult = tmp(5335);
  const channelIcon = tmpResult.getChannelIcon(channel);
  const tmpResult5 = tmp(5335);
  const channelIconComponent = tmpResult5.getChannelIconComponent(channel);
  const tmpResult6 = tmp(4685);
  const isThemeDarkResult = tmpResult6.isThemeDark(theme);
  const hex2rgb = tmp(1092).hex2rgb;
  tmp(1092);
  const unsafe_rawColors = isFavoritesGuild(576).unsafe_rawColors;
  const tmp8 = closure_6;
  if (isThemeDarkResult) {
    hex2rgbResult = hex2rgb(unsafe_rawColors.PRIMARY_700, 0.6);
    tmp13 = tmp11;
  } else {
    hex2rgbResult = hex2rgb(unsafe_rawColors.PRIMARY_200, 0.6);
    tmp13 = tmp11;
  }
  const obj4 = { accessibilityRole: "button", underlayColor: hex2rgbResult, style, children: closure_16(tmp15, obj6) };
  const merged = Object.assign(sortHandlers);
  let obj5 = null;
  tmp15 = closure_5;
  if (sortingEnabled) {
    obj5 = null;
    if (!stateFromStores) {
      obj5 = { opacity: 0.3 };
    }
  }
  obj6 = { style: obj5, children: closure_16(FormRow, obj9) };
  FormRow = tmp(8053).FormRow;
  if (null != channelIconComponent) {
    const obj7 = { style: channelIconStyle, size: "sm" };
    tmp7Result = tmp7(channelIconComponent, obj7);
  } else {
    const obj8 = { size: tmp(1177).Icon.Sizes.SMALL_20, source: channelIcon, style: channelIconStyle };
    const Icon = tmp(8053).FormRow.Icon;
    tmp7Result = tmp7(Icon, obj8);
  }
  obj9 = { leading: tmp7Result, style: legacyClassComponentStyles.formRowStyle, label: tmpResult8.computeChannelName(channel, UserStore, RelationshipStore), onPress: fn, trailing: tmp7Result2, numberOfLines: num3 };
  fn = undefined;
  tmpResult8 = tmp(4989);
  if (!sortingEnabled) {
    fn = () => importAll(channel.id);
  }
  tmp7Result2 = null;
  if (stateFromStores) {
    tmp7Result2 = null;
    if (sortingEnabled) {
      const obj10 = { source: tmp13(15778), style: actionIconStyle };
      const Icon2 = tmp(8053).FormRow.Icon;
      tmp7Result2 = tmp7(Icon2, obj10);
    }
  }
  num3 = undefined;
  if (sortingEnabled) {
    num3 = 1;
  }
  return closure_16(tmp8, obj4);
}
function CreateButton(guild) {
  let Button;
  let intl;
  let items1;
  let obj3;
  guild = guild.guild;
  let bottom;
  const tmp = guild;
  let obj = guild(4836);
  const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(closure_18);
  bottom = bottom(1613)().bottom;
  let items = [bottom];
  const memo = react.useMemo(() => ({ bottom: 16 + bottom }), items);
  let tmp5 = null;
  if (PermissionStore.can(constants2.MANAGE_CHANNELS, guild)) {
    let obj2 = { style: items1, children: closure_16(Button, obj3) };
    items1 = [legacyClassComponentStyles.floatingActionButtonContainer, memo];
    obj3 = {
      text: intl.string(tmp(1115).t.CumH4u),
      onPress() {
          let intl;
          let intl2;
          let intl3;
          let items;
          let obj2;
          let user;
          let obj = { key: "GuildSettingsChannelsCreate", header: obj2, options: items, hasIcons: false };
          obj2 = { title: intl.string(intl5.t.CumH4u) };
          const showSimpleActionSheet = showSimpleActionSheet2.showSimpleActionSheet;
          showSimpleActionSheet2;
          intl = intl5.intl;
          const obj3 = {
            label: intl2.string(intl5.t.vHCZwr),
            onPress() {
              const obj = bottom(dependencyMap[28]);
              obj.open(constants.GUILD_CATEGORY, user.id, null, null);
            }
          };
          intl2 = intl5.intl;
          items = [obj3, ];
          const obj4 = {
            label: intl3.string(intl5.t.GK18KJ),
            onPress() {
              const obj = bottom(dependencyMap[28]);
              obj.open(null, user.id, null, null);
            }
          };
          intl3 = intl5.intl;
          items[1] = obj4;
          const result = showSimpleActionSheet(obj);
        },
      icon: closure_16(tmp(8332).PlusSmallIcon, { color: "white" })
    };
    Button = tmp(5281).Button;
    intl = tmp(1115).intl;
    tmp5 = closure_16(closure_5, obj2);
  }
  return tmp5;
}
({ View: hasOwnProperty, TouchableHighlight: metroRequire, StyleSheet } = react_native);
({ ChannelTypes: map1, Permissions: closure_14, Fonts, NULL_STRING_CHANNEL_ID: closure_15 } = Constants);
({ jsx: closure_16, jsxs: closure_17 } = Fragment);
let obj = { headerRight: obj2, containerView: obj3, categoryText: obj4, categoryView: { paddingTop: 36, paddingBottom: 8 }, sortingCategoryView: { paddingTop: 16 }, edit: obj5, row: { marginTop: -StyleSheet.hairlineWidth }, formRowStyle: { paddingVertical: 12 }, dropHighlight: obj6, floatingActionButtonContainer: { position: "absolute", bottom: 16, right: 0, left: 0, flexDirection: "row", justifyContent: "center" } };
obj2 = { textTransform: "capitalize" };
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
let TextStyles = TextStyles_mod;
let merged = Object.assign(TextStyles(Fonts.PRIMARY_SEMIBOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 16));
obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj4 = {};
const DISPLAY_EXTRABOLD = Fonts.DISPLAY_EXTRABOLD;
TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(DISPLAY_EXTRABOLD, nativeDefault.colors.TEXT_SUBTLE, 12, { uppercase: true }));
obj5 = {};
TextStyles = TextStyles_mod;
const merged2 = Object.assign(TextStyles(Fonts.PRIMARY_SEMIBOLD, nativeDefault.colors.TEXT_SUBTLE, 14));
obj6 = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360, opacity: 0.3 };
const authStore4 = createLegacyClassComponentStyles(obj);
const PureComponent = react.PureComponent;
class Category extends PureComponent {
  render() {
    let actionIconStyle;
    let editStyle;
    let hex2rgbResult;
    let intl;
    let items;
    let items1;
    let obj7;
    let tmp11;
    let tmp13;
    let tmp3Result;
    const self = this;
    let tmp = closure_18(this.context);
    const props = this.props;
    const category = props.category;
    const onPress = props.onPress;
    const sortingEnabled = props.sortingEnabled;
    let sortHandlers = null;
    ({ editStyle, actionIconStyle } = props);
    if (sortingEnabled) {
      sortHandlers = self.props.sortHandlers;
    }
    const obj = {
      accessibilityRole: "button",
      accessibilityActions: items,
      onAccessibilityAction(nativeEvent) {
        let tmp;
        if ("activate" === nativeEvent.nativeEvent.actionName) {
          let tmp2Result;
          if (onPress != null) {
            tmp2Result = tmp2(category.id);
          }
          tmp = tmp2Result;
        }
        return tmp;
      },
      underlayColor: hex2rgbResult,
      children: authStore3(tmp13, obj7)
    };
    const obj2 = { name: "activate", label: intl.string(intl5.t.bt75uw) };
    intl = intl5.intl;
    items = [obj2];
    const obj3 = shared;
    const isThemeDarkResult = obj3.isThemeDark(self.context.theme);
    const hex2rgb = utils_ColorUtils.hex2rgb;
    utils_ColorUtils;
    const unsafe_rawColors = nativeDefault.unsafe_rawColors;
    const tmp4 = metroRequire;
    if (isThemeDarkResult) {
      hex2rgbResult = hex2rgb(unsafe_rawColors.PRIMARY_700, 0.6);
      tmp11 = tmp9;
    } else {
      hex2rgbResult = hex2rgb(unsafe_rawColors.PRIMARY_200, 0.6);
      tmp11 = tmp9;
    }
    const merged = Object.assign(sortHandlers);
    const obj4 = { title: category.name, numberOfLines: 1, textStyle: tmp.categoryText, viewStyle: items1, icon: tmp3Result };
    items1 = [tmp.categoryView, ];
    let sortingCategoryView = null;
    const FormTitle = tmp5(8053).FormTitle;
    tmp13 = hasOwnProperty;
    if (sortingEnabled) {
      sortingCategoryView = tmp.sortingCategoryView;
    }
    items1[1] = sortingCategoryView;
    if (null != onPress) {
      const obj5 = {
        style: editStyle,
        onPress() {
            return onPress(category.id);
          }
      };
      tmp3Result = tmp3(SectionEditAction, obj5);
    } else {
      tmp3Result = null;
      if (null != sortHandlers) {
        const obj6 = { source: tmp11(15778), style: actionIconStyle };
        const Icon = tmp5(1177).Icon;
        tmp3Result = tmp3(Icon, obj6);
      }
    }
    obj7 = { children: authStore3(FormTitle, obj4) };
    return authStore3(tmp4, obj);
  }
}
const prototype = Category.prototype;
Category.contextType = native2.ThemeContext;
const PureComponent2 = react.PureComponent;
class SectionEditAction extends PureComponent2 {
  render() {
    let LegacyText;
    let intl;
    let obj2;
    let onPress;
    let style;
    ({ style, onPress } = this.props);
    const obj = { accessibilityRole: "button", onPress, children: authStore3(LegacyText, obj2) };
    const PressableOpacity = Pressables.PressableOpacity;
    obj2 = { style, children: intl.string(intl5.t.bt75uw) };
    LegacyText = native.LegacyText;
    intl = intl5.intl;
    return authStore3(PressableOpacity, obj);
  }
}
const prototype2 = SectionEditAction.prototype;
SectionEditAction.contextType = native2.ThemeContext;
const PureComponent3 = react.PureComponent;
class GuildSettingsModalChannels extends PureComponent3 {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const require = applyArgumentsResult;
    applyArgumentsResult.state = { hovering: null };
    applyArgumentsResult.renderActiveDivider = function renderActiveDivider(height, order, order2) {
      let channelList;
      let guild;
      let items;
      const props = require.props;
      ({ order, channelList, guild } = props);
      if (null != props.sortingType) {
        if (null != order) {
          if (null != channelList) {
            const localChannel = GuildSettingsModalChannelsStore.getLocalChannel(order);
            let localChannel1 = null;
            const obj5 = GuildSettingsModalChannelsStore;
            if (null != order) {
              localChannel1 = obj5.getLocalChannel(order);
            }
            let num = -1;
            if (null != order) {
              num = order.indexOf(order);
            }
            const index = order.indexOf(order);
            const obj = ChannelSortingUtils;
            const dropData = obj.getDropData(localChannel1, num, localChannel, index, channelList);
            let tmp12 = null != dropData;
            const tmp4 = require;
            if (tmp12) {
              const tmp4Result = tmp4(2070);
              let isFavoritesGuildIdResult = tmp4Result.isFavoritesGuildId(guild.id);
              if (!isFavoritesGuildIdResult) {
                let canResult;
                if (null == dropData.parentId) {
                  canResult = PermissionStore.can(constants.MANAGE_CHANNELS, guild);
                } else {
                  canResult = PermissionStore.can(constants.MANAGE_CHANNELS, ChannelStore.getChannel(dropData.parentId));
                }
                isFavoritesGuildIdResult = canResult;
              }
              tmp12 = isFavoritesGuildIdResult;
            }
            let tmp20 = null;
            if (tmp12) {
              const obj2 = { style: items };
              items = [tmp.dropHighlight, ];
              const obj3 = { height };
              items[1] = obj3;
              tmp20 = authStore3(hasOwnProperty, obj2);
            }
            return tmp20;
          }
        }
      }
      return null;
    };
    applyArgumentsResult.renderSectionHeader = function renderSectionHeader(section) {
      let handleChannelPress;
      let hasItem;
      let tmp5Result;
      const id = section.section.category.id;
      const props = require.props;
      const sortingType = props.sortingType;
      let localChannel = null;
      const channels = props.channels;
      const tmp = require;
      const tmp2 = closure_18(require.context);
      if ("null" !== id) {
        localChannel = GuildSettingsModalChannelsStore.getLocalChannel(id);
      }
      if (null != localChannel) {
        const obj2 = { category: localChannel, sortingEnabled: hasItem, editStyle: tmp2.edit, onPress: handleChannelPress };
        hasItem = null != sortingType;
        const tmp8 = authStore3;
        const tmp9 = Category;
        if (hasItem) {
          hasItem = sortingType.has(map1.GUILD_CATEGORY);
        }
        handleChannelPress = undefined;
        if (null == sortingType) {
          handleChannelPress = tmp.handleChannelPress;
        }
        tmp5Result = tmp8(tmp9, obj2);
      } else {
        let obj = null;
        const tmp5 = authStore3;
        const tmp6 = hasOwnProperty;
        if (null == sortingType) {
          obj = null;
          if (channels.null.length > 0) {
            obj = { marginTop: 36 };
          }
        }
        const obj3 = { style: obj };
        tmp5Result = tmp5(tmp6, obj3);
      }
      return tmp5Result;
    };
    applyArgumentsResult.renderItem = function renderItem(item) {
      let obj2;
      let tmp5;
      item = item.item;
      const channel = item.channel;
      const sortingType = item.sortingType;
      if (null != channel) {
        const obj = { channel, isFavoritesGuild: obj2.isFavoritesGuildId(require.props.guild.id), sortingEnabled: null != sortingType, onPress: require.handleChannelPress, style: tmp2.row };
        obj2 = FavoritesUtils;
        tmp5 = authStore3(ChannelItem, obj);
      } else {
        tmp5 = authStore3(hasOwnProperty, {});
      }
      return tmp5;
    };
    applyArgumentsResult.handleHoverChange = function handleHoverChange(hovering) {
      const obj = { hovering };
      require.setState(obj);
    };
    applyArgumentsResult.handleSortStart = function handleSortStart() {
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let obj5;
      const items = [];
      if (PermissionStore.can(constants.MANAGE_CHANNELS, require.props.guild)) {
        let obj = {
          label: intl.string(intl5.t.ffgJrs),
          icon: AssetRegistryDefault3,
          onPress() {
              const obj = closure_1_1(closure_1_3[37]);
              obj.startReordering(constants.GUILD_CATEGORY);
            }
        };
        const push = items.push;
        intl = intl5.intl;
        push(obj);
      }
      const push2 = items.push;
      const obj2 = {
        label: intl2.string(intl5.t.nIfr0Y),
        icon: AssetRegistryDefault,
        onPress() {
          const obj = closure_1_1(closure_1_3[37]);
          obj.startReordering(constants.GUILD_TEXT, constants.GUILD_ANNOUNCEMENT, constants.GUILD_FORUM, constants.GUILD_MEDIA, constants.GUILD_APP);
        }
      };
      intl2 = intl5.intl;
      push2(obj2);
      const push3 = items.push;
      const obj3 = {
        label: intl3.string(intl5.t.CYnO4s),
        icon: AssetRegistryDefault2,
        onPress() {
          const obj = closure_1_1(closure_1_3[37]);
          obj.startReordering(constants.GUILD_VOICE, constants.GUILD_STAGE_VOICE);
        }
      };
      intl3 = intl5.intl;
      push3(obj3);
      const obj4 = { key: "GuildSettingsChannelsSort", header: obj5, options: items, hasIcons: true };
      obj5 = { title: intl4.string(intl5.t["0dOFq+"]) };
      const showSimpleActionSheet = showSimpleActionSheet2.showSimpleActionSheet;
      showSimpleActionSheet2;
      intl4 = intl5.intl;
      const result = showSimpleActionSheet(obj4);
    };
    applyArgumentsResult.handleDrop = function handleDrop(arg0) {
      let channels;
      let format;
      let guild;
      let intl;
      let intl3;
      let intl4;
      let obj4;
      let order;
      let prop;
      let saveUpdates;
      let str;
      let tmp3Result9;
      const props = require.props;
      ({ order, channels, guild } = props);
      let obj = GuildSettingsModalChannelsStore;
      const channelList = props.channelList;
      const localChannel = GuildSettingsModalChannelsStore.getLocalChannel(order[arg0.from]);
      const localChannel1 = GuildSettingsModalChannelsStore.getLocalChannel(order[arg0.to]);
      let obj2 = ChannelSortingUtils;
      const dropData = obj2.getDropData(localChannel, arg0.from, localChannel1, arg0.to, channelList);
      if (null != dropData) {
        if (localChannel1 !== localChannel) {
          if (null != localChannel) {
            if (null != localChannel1) {
              let tmp13 = null != dropData;
              if (tmp13) {
                const tmp3Result = FavoritesUtils;
                let isFavoritesGuildIdResult = tmp3Result.isFavoritesGuildId(guild.id);
                if (!isFavoritesGuildIdResult) {
                  let canResult;
                  if (null == dropData.parentId) {
                    canResult = PermissionStore.can(constants.MANAGE_CHANNELS, guild);
                  } else {
                    let tmp9 = ChannelStore;
                    canResult = PermissionStore.can(constants.MANAGE_CHANNELS, ChannelStore.getChannel(dropData.parentId));
                  }
                  isFavoritesGuildIdResult = canResult;
                }
                tmp13 = isFavoritesGuildIdResult;
              }
              if (tmp13) {
                const referenceId = dropData.referenceId;
                let localChannel2 = null;
                const getDnDUpdates = ChannelSortingUtils.getDnDUpdates;
                const tmp3Result6 = ChannelSortingUtils;
                if (null != referenceId) {
                  localChannel2 = obj.getLocalChannel(referenceId);
                }
                const dnDUpdates = getDnDUpdates(localChannel, localChannel2, dropData.parentId, channels);
                const tmp3Result7 = FavoritesUtils;
                if (tmp3Result7.isFavoritesGuildId(guild.id)) {
                  const obj11 = GuildSettingsModalChannelsActionCreatorsDefault;
                  obj11.localChannelUpdate(dnDUpdates);
                  const tmp3Result8 = FavoritesActionCreators;
                  const result = tmp3Result8.updateFavoriteChannels(dnDUpdates);
                } else {
                  const found = dnDUpdates.filter((id) => {
                    const channel = closure_2_7.getChannel(id.id);
                    const obj = closure_2_7;
                    if (null == channel) {
                      return false;
                    } else {
                      const channel1 = obj.getChannel(channel.parent_id);
                      if (channel.type !== constants.GUILD_CATEGORY) {
                        let canResult;
                        if (null != channel1) {
                          canResult = closure_2_9.can(constants2.MANAGE_CHANNELS, channel1);
                        }
                        return canResult;
                      }
                      canResult = closure_2_9.can(constants2.MANAGE_CHANNELS, guild);
                    }
                  });
                  if (localChannel.parent_id !== dropData.parentId) {
                    const found1 = found.find((id) => {
                      if (id.id !== localChannel.id) {
                        return false;
                      } else {
                        const channel = closure_2_7.getChannel(id.parent_id);
                        const obj5 = closure_2_7;
                        if (null != channel) {
                          const obj = closure_2_9;
                          const tmp2 = constants2;
                          if (closure_2_9.can(constants2.MANAGE_ROLES, localChannel)) {
                            if (obj.can(tmp2.MANAGE_ROLES, channel)) {
                              const obj2 = closure_2_0(closure_2_3[41]);
                              const appChannelBotUserId = obj2.getAppChannelBotUserId(tmp);
                              const obj3 = closure_2_2(closure_2_3[31]);
                              const areChannelsLockedResult = obj3.areChannelsLocked(localChannel, channel, appChannelBotUserId);
                              const obj4 = closure_2_2(closure_2_3[31]);
                              let areChannelsLockedResult1 = obj4.areChannelsLocked(tmp, obj5.getChannel(tmp.parent_id), appChannelBotUserId);
                              let tmp9 = null == tmp.parent_id && !areChannelsLockedResult;
                              if (!tmp9) {
                                if (areChannelsLockedResult1) {
                                  areChannelsLockedResult1 = !areChannelsLockedResult;
                                }
                                tmp9 = areChannelsLockedResult1;
                              }
                              if (tmp9) {
                                let closure_1_2 = id;
                              }
                              return true;
                            }
                          }
                        }
                        return true;
                      }
                    });
                  }
                  if (null != parent_id) {
                    let channel = ChannelStore.getChannel(parent_id.parent_id);
                    let obj3 = {
                      title: intl.string(tmp3(1115).t.YWMtRe),
                      body: format(prop, obj4),
                      confirmText: intl3.string(tmp3(1115).t.eW8Gy4),
                      cancelText: intl4.string(tmp3(1115).t.s4uM3b),
                      onConfirm() {
                                      parent_id.lock_permissions = true;
                                      const obj = closure_2_1(closure_2_3[37]);
                                      obj.localChannelUpdate(found);
                                      const obj2 = closure_2_1(closure_2_3[42]);
                                      obj2.batchChannelUpdate(localChannel.guild_id, found);
                                    },
                      onCancel: saveUpdates,
                      isDismissable: false
                    };
                    const show = AlertActionCreatorsDefault.show;
                    AlertActionCreatorsDefault;
                    intl = tmp3(1115).intl;
                    const intl2 = tmp3(1115).intl;
                    format = intl2.format;
                    obj4 = { channelName: tmp3Result9.computeChannelName(localChannel, UserStore, RelationshipStore, true), categoryName: str };
                    prop = tmp3(1115).t["iKW+jY"];
                    str = "";
                    const tmp31 = UserStore;
                    const tmp32 = RelationshipStore;
                    tmp3Result9 = useChannelName;
                    if (null != channel) {
                      const tmp3Result10 = useChannelName;
                      str = tmp3Result10.computeChannelName(channel, tmp31, tmp32);
                    }
                    saveUpdates = function saveUpdates() {
                      const obj = closure_2_1(closure_2_3[37]);
                      obj.localChannelUpdate(found);
                      const obj2 = closure_2_1(closure_2_3[42]);
                      obj2.batchChannelUpdate(localChannel.guild_id, found);
                    };
                    intl3 = tmp3(1115).intl;
                    intl4 = tmp3(1115).intl;
                    show(obj3);
                  } else {
                    let obj5 = GuildSettingsModalChannelsActionCreatorsDefault;
                    obj5.localChannelUpdate(found);
                    const obj6 = GuildActionCreatorsDefault;
                    obj6.batchChannelUpdate(localChannel.guild_id, found);
                  }
                }
              }
            }
          }
        }
      }
    };
    return applyArgumentsResult;
  }
  componentDidMount() {
    this.updateNavigation();
  }
  componentDidUpdate(arg0) {
    this.updateNavigation(arg0);
  }
  updateNavigation(sortingType) {
    let channels;
    let closure_0;
    let fn2;
    let guild;
    let order;
    let stringResult;
    let user;
    const self = this;
    _require = closure_18(this.context);
    const props = this.props;
    ({ sortingType, navigation, guild, channels } = props);
    let tmp = null != sortingType;
    ({ order, user } = props);
    if (tmp) {
      tmp = sortingType === sortingType.sortingType;
    }
    if (tmp) {
      tmp = order === sortingType.order;
    }
    if (tmp) {
      tmp = guild === sortingType.guild;
    }
    if (tmp) {
      tmp = channels === sortingType.channels;
    }
    if (!tmp) {
      let fn;
      const setOptions = navigation.setOptions;
      if (null != sortingType) {
        fn = () => null;
      }
      let obj = { headerLeft: fn, headerRight: fn2, headerTitle: stringResult };
      if (null != sortingType) {
        fn2 = () => {
          let intl;
          const obj = { textStyle: closure_0.headerRight, text: intl.string(intl5.t.i4jeWR), onPress: self.props.onDone };
          const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
          intl = intl5.intl;
          return authStore3(HeaderActionButton, obj);
        };
      } else {
        const obj2 = PermissionUtilsAll;
        if (obj2.canManageACategory(user, guild, channels._categories)) {
          fn2 = () => {
            let intl;
            const obj = { textStyle: closure_0.headerRight, text: intl.string(intl5.t["0dOFq+"]), onPress: self.handleSortStart };
            const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
            intl = intl5.intl;
            return authStore3(HeaderActionButton, obj);
          };
        }
      }
      stringResult = undefined;
      if (null != sortingType) {
        let intl = require("intl").intl;
        stringResult = intl.string(require("intl").t.OGiMXJ);
      }
      setOptions(obj);
    }
  }
  render() {
    let channels;
    let items1;
    let items2;
    let order;
    let sortingType;
    const self = this;
    const props = this.props;
    ({ channels, order, sortingType } = props);
    const hovering = this.state.hovering;
    let index;
    const items = [];
    const tmp2 = closure_18(this.context);
    const guild = props.guild;
    if (null != channels) {
      index = -1;
      const _categories = channels._categories;
      let item = _categories.forEach((channel) => {
        channel = channel.channel;
        let obj2;
        if ("null" !== channel.id) {
          let tmp = channels;
          const obj = channels(items[13]);
        }
        index = index + 1;
        obj2 = { data: [], category: channel, key: channel.id, index };
        const arr = obj2[channel.id];
        const item = arr.forEach((channel) => {
          channel = channel.channel;
          const tmp = null == sortingType || sortingType.has(channel.type);
          if (tmp) {
            index = index + 1;
            const data = obj2.data;
            obj2 = { key: channel.id, channel, sortingType, isHovered: hovering === channel.id, index };
            data.push(obj2);
          }
        });
        items.push(obj2);
      });
    }
    let obj = { style: tmp2.containerView, children: items2 };
    const tmp4 = closure_17;
    const obj3 = { sections: items, sortingEnabled: null != sortingType, renderSectionHeader: self.renderSectionHeader, renderItem: self.renderItem, onRowMoved: self.handleDrop, order: items1, onHoverChange: null, renderActiveDivider: null, contentContainerStyle: self.props.contentContainerStyle, fontScale: self.props.fontScale };
    items1 = [closure_15];
    const tmp8 = sortingType(items[33]);
    HermesBuiltin.arraySpread(items1, order, 1);
    ({ handleHoverChange: obj2.onHoverChange, renderActiveDivider: obj2.renderActiveDivider } = self);
    items2 = [closure_16(tmp8, obj3), , ];
    let tmp6Result = null == sortingType;
    const tmp5 = closure_5;
    const tmp7 = items;
    if (tmp6Result) {
      const obj5 = { guild };
      tmp6Result = tmp6(CreateButton, obj5);
    }
    items2[1] = tmp6Result;
    items2[2] = closure_16(channels(tmp7[34]).NavScrim, {});
    return tmp4(tmp5, obj);
  }
  handleChannelPress(arg0) {
    const obj = ChannelSettingsActionCreators;
    obj.open(arg0);
  }
}
const prototype3 = GuildSettingsModalChannels.prototype;
GuildSettingsModalChannels.contextType = native2.ThemeContext;
let result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalChannels.tsx");

export default function GuildSettingsModalChannelsConnected(onDone) {
  let bottom;
  let contentContainerStyle;
  let require;
  ({ guildId: require, contentContainerStyle } = onDone);
  onDone = onDone.onDone;
  let obj = useNavigation;
  navigation = obj.useNavigation();
  let items = [GuildStore];
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => GuildStore.getGuild(_require));
  const items1 = [GuildSettingsModalChannelsStore];
  const obj3 = get_initialized;
  const stateFromStores1 = obj3.useStateFromStores(items1, () => GuildSettingsModalChannelsStore.channels);
  const items2 = [UserStore];
  const obj4 = get_initialized;
  const stateFromStores2 = obj4.useStateFromStores(items2, () => {
    currentUser = currentUser.getCurrentUser();
    contentContainerStyle(bottom[45])(null != currentUser, "GuildSettingsModalChannelsConnected: currentUser cannot be undefined");
    return currentUser;
  });
  const items3 = [GuildSettingsModalChannelsStore];
  const obj5 = get_initialized;
  const stateFromStores3 = obj5.useStateFromStores(items3, () => GuildSettingsModalChannelsStore.channelList);
  const items4 = [GuildSettingsModalChannelsStore];
  const obj6 = get_initialized;
  const stateFromStores4 = obj6.useStateFromStores(items4, () => GuildSettingsModalChannelsStore.order);
  const items5 = [GuildSettingsModalChannelsStore];
  const obj7 = get_initialized;
  const stateFromStores5 = obj7.useStateFromStores(items5, () => GuildSettingsModalChannelsStore.sortingType);
  const tmp8 = contentContainerStyle(1613)();
  dependencyMap = tmp8;
  const items6 = [contentContainerStyle, tmp8.bottom, stateFromStores5];
  const memo = react.useMemo(() => {
    let tmp;
    if (null == stateFromStores5) {
      const items = [contentContainerStyle, ];
      const obj = { paddingBottom: bottom.bottom + 32 + 44 };
      items[1] = obj;
      tmp = items;
    } else {
      tmp = contentContainerStyle;
    }
    return tmp;
  }, items6);
  useFontScale;
  let tmp12 = null;
  if (null != stateFromStores4) {
    tmp12 = null;
    if (null != stateFromStores3) {
      tmp12 = null;
      if (null != stateFromStores1) {
        tmp12 = null;
        if (null != stateFromStores) {
          tmp12 = null;
          if (null != stateFromStores2) {
            const obj8 = { navigation, guild: stateFromStores, channels: stateFromStores1, user: stateFromStores2, channelList: stateFromStores3, order: stateFromStores4, sortingType: stateFromStores5, contentContainerStyle: memo, fontScale: tmp11, onDone };
            tmp12 = closure_16(GuildSettingsModalChannels, obj8);
          }
        }
      }
    }
  }
  return tmp12;
};
