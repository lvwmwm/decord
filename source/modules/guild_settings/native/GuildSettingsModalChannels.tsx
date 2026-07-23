// Module ID: 16292
// Function ID: 126820
// Name: _callSuper
// Dependencies: [6, 7, 15, 17, 18, 31, 27, 1348, 1838, 3758, 3767, 1849, 16208, 653, 33, 4130, 5052, 689, 1212, 3976, 665, 7495, 1273, 16293, 3842, 566, 4593, 4320, 4660, 1557, 4543, 5497, 8412, 8734, 16294, 16295, 16206, 10949, 14186, 3763, 5048, 4470, 5788, 16296, 5448, 7596, 1456, 44, 4549, 2]
// Exports: default

// Module 16292 (_callSuper)
import getActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_createForOfIteratorHelperLoose";
import closure_7 from "_createForOfIteratorHelperLoose";
import getSystemLocale from "getSystemLocale";
import importAllResult from "showSimpleActionSheet";
import get_ActivityIndicator from "computeDefaultGroupDmNameFromUserIds";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_createForOfIteratorHelperLoose";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import closure_16 from "_isNativeReflectConstruct";
import closure_17 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "PlusSmallIcon";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "createTextStyle";
import importDefaultResult1 from "createTextStyle";
import importDefaultResult2 from "createTextStyle";

let Fonts;
let closure_10;
let closure_11;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
const require = arg1;
function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const obj = callback2(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(obj, items, callback2(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, items);
  }
  return closure_6(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function ChannelItem(arg0) {
  let actionIconStyle;
  let channel;
  let channelIconStyle;
  let importDefault;
  let sortHandlers;
  let sortingEnabled;
  let style;
  ({ channelIconStyle, channel } = arg0);
  ({ sortingEnabled, onPress: importDefault, sortHandlers } = arg0);
  ({ style, actionIconStyle } = arg0);
  let obj = channel(4130);
  const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(_createForOfIteratorHelperLoose);
  let obj1 = channel(3976);
  let obj2 = channel(566);
  const items = [closure_14];
  const items1 = [channel];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    if (null == channel.parent_id) {
      let obj = { guildId: channel.guild_id };
      let result = outer1_14.canWithPartialContext(outer1_19.MANAGE_CHANNELS, obj);
    } else {
      obj = { channelId: channel.parent_id };
      result = outer1_14.canWithPartialContext(outer1_19.MANAGE_CHANNELS, obj);
    }
    return result;
  }, items1);
  let obj3 = channel(4593);
  const channelIcon = obj3.getChannelIcon(channel);
  let obj4 = channel(4593);
  const channelIconComponent = obj4.getChannelIconComponent(channel);
  obj = { accessibilityRole: "button" };
  const obj7 = channel(3976);
  const tmp5 = callback4;
  const tmp6 = closure_11;
  const isThemeDarkResult = channel(3976).isThemeDark(obj1.useThemeContext().theme);
  const hex2rgb = channel(665).hex2rgb;
  const unsafe_rawColors = importDefault(689).unsafe_rawColors;
  if (isThemeDarkResult) {
    let hex2rgbResult = hex2rgb(unsafe_rawColors.PRIMARY_700, 0.6);
  } else {
    hex2rgbResult = hex2rgb(unsafe_rawColors.PRIMARY_200, 0.6);
  }
  let tmp10;
  if (null != hex2rgbResult) {
    tmp10 = hex2rgbResult;
  }
  obj.underlayColor = tmp10;
  obj.style = style;
  const merged = Object.assign(sortHandlers);
  obj = {};
  let tmp14 = null;
  if (sortingEnabled) {
    tmp14 = null;
    if (!stateFromStores) {
      obj1 = { opacity: 0.3 };
      tmp14 = obj1;
    }
  }
  obj.style = tmp14;
  obj2 = {};
  if (null != channelIconComponent) {
    obj3 = { style: channelIconStyle, size: "sm" };
    let tmp19 = callback4(channelIconComponent, obj3);
  } else {
    obj4 = { size: channel(1273).Icon.Sizes.SMALL_20, source: channelIcon, style: channelIconStyle };
    tmp19 = callback4(channel(7495).FormRow.Icon, obj4);
  }
  obj2.leading = tmp19;
  obj2.style = legacyClassComponentStyles.formRowStyle;
  const tmp12 = callback4;
  const tmp13 = closure_10;
  const tmp15 = callback4;
  const tmp8 = channel(665);
  obj2.label = channel(4320).computeChannelName(channel, closure_16, closure_15);
  let fn;
  if (!sortingEnabled) {
    fn = () => callback(channel.id);
  }
  obj2.onPress = fn;
  let tmp21 = null;
  if (stateFromStores) {
    tmp21 = null;
    if (sortingEnabled) {
      const obj5 = { source: importDefault(16293), style: actionIconStyle };
      tmp21 = callback4(channel(7495).FormRow.Icon, obj5);
    }
  }
  obj2.trailing = tmp21;
  let num6;
  if (sortingEnabled) {
    num6 = 1;
  }
  obj2.numberOfLines = num6;
  obj.children = tmp15(channel(7495).FormRow, obj2);
  obj["children"] = tmp12(tmp13, obj);
  return tmp5(tmp6, obj);
}
function isValidDrop(parentId, channel) {
  if (null == parentId) {
    return tmp;
  } else if (null == parentId.parentId) {
    let canResult = closure_14.can(constants.MANAGE_CHANNELS, channel);
  } else {
    canResult = closure_14.can(constants.MANAGE_CHANNELS, channel.getChannel(parentId.parentId));
  }
}
function CreateButton(guild) {
  guild = guild.guild;
  let obj = guild(4130);
  const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(_createForOfIteratorHelperLoose);
  bottom = bottom(1557)().bottom;
  let items = [bottom];
  const memo = importAllResult.useMemo(() => ({ bottom: 16 + bottom }), items);
  let tmp3 = null;
  if (closure_14.can(constants.MANAGE_CHANNELS, guild)) {
    obj = {};
    const items1 = [legacyClassComponentStyles.floatingActionButtonContainer, memo];
    obj.style = items1;
    obj = {};
    let intl = guild(1212).intl;
    obj.text = intl.string(guild(1212).t.CumH4u);
    obj.onPress = function onPress() {
      let obj = guild(outer1_3[31]);
      obj = { key: "GuildSettingsChannelsCreate" };
      obj = {};
      const intl = guild(outer1_3[18]).intl;
      obj.title = intl.string(guild(outer1_3[18]).t.CumH4u);
      obj.header = obj;
      const obj1 = {};
      const intl2 = guild(outer1_3[18]).intl;
      obj1.label = intl2.string(guild(outer1_3[18]).t.vHCZwr);
      obj1.onPress = function onPress() {
        bottom(outer2_3[32]).open(outer2_18.GUILD_CATEGORY, outer1_0.id, null, null);
      };
      const items = [obj1, ];
      const obj2 = {};
      const intl3 = guild(outer1_3[18]).intl;
      obj2.label = intl3.string(guild(outer1_3[18]).t.GK18KJ);
      obj2.onPress = function onPress() {
        bottom(outer2_3[32]).open(null, outer1_0.id, null, null);
      };
      items[1] = obj2;
      obj.options = items;
      obj.hasIcons = false;
      const result = obj.showSimpleActionSheet(obj);
    };
    let obj1 = { color: "white" };
    obj.icon = callback4(guild(8734).PlusSmallIcon, obj1);
    obj.children = callback4(guild(4543).Button, obj);
    tmp3 = callback4(closure_10, obj);
  }
  return tmp3;
}
({ View: closure_10, TouchableHighlight: closure_11 } = get_ActivityIndicator);
({ ChannelTypes: closure_18, Permissions: closure_19, Fonts, NULL_STRING_CHANNEL_ID: closure_20 } = ME);
({ jsx: closure_21, jsxs: closure_22 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = {};
let merged = Object.assign(require("createTextStyle")(Fonts.PRIMARY_SEMIBOLD, require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY, 16));
_createForOfIteratorHelperLoose["textTransform"] = "capitalize";
_createForOfIteratorHelperLoose.headerRight = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.containerView = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
let obj1 = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
let obj2 = {};
const merged1 = Object.assign(require("createTextStyle")(Fonts.DISPLAY_EXTRABOLD, require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE, 12, { uppercase: true }));
_createForOfIteratorHelperLoose.categoryText = obj2;
_createForOfIteratorHelperLoose.categoryView = { paddingTop: 36, paddingBottom: 8 };
_createForOfIteratorHelperLoose.sortingCategoryView = { paddingTop: 16 };
let obj3 = { uppercase: true };
let obj4 = {};
const merged2 = Object.assign(require("createTextStyle")(Fonts.PRIMARY_SEMIBOLD, require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE, 14));
_createForOfIteratorHelperLoose.edit = obj4;
_createForOfIteratorHelperLoose.row = { marginTop: -get_ActivityIndicator.StyleSheet.hairlineWidth };
_createForOfIteratorHelperLoose.formRowStyle = { paddingVertical: 12 };
_createForOfIteratorHelperLoose.dropHighlight = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.GREEN_360, opacity: 0.3 };
_createForOfIteratorHelperLoose.floatingActionButtonContainer = { position: "absolute", bottom: 16, right: 0, left: 0, flexDirection: "row", justifyContent: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createLegacyClassComponentStyles(_createForOfIteratorHelperLoose);
let tmp12 = ((PureComponent) => {
  class Category {
    constructor() {
      tmp = outer1_4(this, Category);
      return outer1_27(this, Category, arguments);
    }
  }
  callback3(Category, PureComponent);
  let items = [
    {
      key: "render",
      value() {
        let actionIconStyle;
        let editStyle;
        const self = this;
        let tmp = outer1_23(this.context);
        const props = this.props;
        const category = props.category;
        const onPress = props.onPress;
        const sortingEnabled = props.sortingEnabled;
        let sortHandlers = null;
        ({ editStyle, actionIconStyle } = props);
        if (sortingEnabled) {
          sortHandlers = self.props.sortHandlers;
        }
        let obj = { accessibilityRole: "button" };
        obj = { name: "activate" };
        const intl = Category(outer1_3[18]).intl;
        obj.label = intl.string(Category(outer1_3[18]).t.bt75uw);
        const items = [obj];
        obj.accessibilityActions = items;
        obj.onAccessibilityAction = function onAccessibilityAction(nativeEvent) {
          let tmp;
          if ("activate" === nativeEvent.nativeEvent.actionName) {
            let tmp4;
            if (null != onPress) {
              tmp4 = onPress(category.id);
            }
            tmp = tmp4;
          }
          return tmp;
        };
        let obj2 = Category(outer1_3[19]);
        const isThemeDarkResult = obj2.isThemeDark(self.context.theme);
        const tmp3 = outer1_21;
        let tmp4 = outer1_11;
        const hex2rgb = Category(outer1_3[20]).hex2rgb;
        const unsafe_rawColors = outer1_1(outer1_3[17]).unsafe_rawColors;
        if (isThemeDarkResult) {
          let hex2rgbResult = hex2rgb(unsafe_rawColors.PRIMARY_700, 0.6);
        } else {
          hex2rgbResult = hex2rgb(unsafe_rawColors.PRIMARY_200, 0.6);
        }
        let tmp8;
        if (null != hex2rgbResult) {
          tmp8 = hex2rgbResult;
        }
        obj.underlayColor = tmp8;
        const merged = Object.assign(sortHandlers);
        obj = {};
        const obj1 = { title: category.name, numberOfLines: 1, textStyle: tmp.categoryText };
        const items1 = [tmp.categoryView, ];
        let sortingCategoryView = null;
        if (sortingEnabled) {
          sortingCategoryView = tmp.sortingCategoryView;
        }
        items1[1] = sortingCategoryView;
        obj1.viewStyle = items1;
        if (null != onPress) {
          obj2 = {
            style: editStyle,
            onPress() {
                return onPress(category.id);
              }
          };
          let tmp13 = outer1_21(outer1_25, obj2);
        } else {
          tmp13 = null;
          if (null != sortHandlers) {
            const obj3 = { source: outer1_1(outer1_3[23]), style: actionIconStyle };
            tmp13 = outer1_21(Category(outer1_3[22]).Icon, obj3);
          }
        }
        obj1.icon = tmp13;
        obj.children = outer1_21(Category(outer1_3[21]).FormTitle, obj1);
        obj["children"] = outer1_21(outer1_10, obj);
        return tmp3(tmp4, obj);
      }
    }
  ];
  return callback(Category, items);
})(importAllResult.PureComponent);
let closure_24 = tmp12;
tmp12.contextType = require("ManaContext").ThemeContext;
let tmp13 = ((PureComponent) => {
  class SectionEditAction {
    constructor() {
      tmp = outer1_4(this, SectionEditAction);
      return outer1_27(this, SectionEditAction, arguments);
    }
  }
  callback3(SectionEditAction, PureComponent);
  const items = [
    {
      key: "render",
      value() {
        let onPress;
        let style;
        ({ style, onPress } = this.props);
        let obj = { accessibilityRole: "button", onPress };
        obj = { style };
        const intl = SectionEditAction(outer1_3[18]).intl;
        obj.children = intl.string(SectionEditAction(outer1_3[18]).t.bt75uw);
        obj.children = outer1_21(SectionEditAction(outer1_3[22]).LegacyText, obj);
        return outer1_21(SectionEditAction(outer1_3[28]).PressableOpacity, obj);
      }
    }
  ];
  return callback(SectionEditAction, items);
})(importAllResult.PureComponent);
let closure_25 = tmp13;
tmp13.contextType = require("ManaContext").ThemeContext;
let tmp14 = ((PureComponent) => {
  class GuildSettingsModalChannels {
    constructor(arg0) {
      items = [...arguments];
      tmp = outer1_4(this, GuildSettingsModalChannels);
      items1 = [...items];
      tmp2 = outer1_27(this, GuildSettingsModalChannels, items1);
      GuildSettingsModalChannels = tmp2;
      tmp2.state = { hovering: null };
      tmp2.renderActiveDivider = (height) => {
        let channelList;
        let order;
        const props = tmp2.props;
        ({ order, channelList } = props);
        if (null != props.sortingType) {
          if (null != order) {
            if (null != channelList) {
              const localChannel = outer2_17.getLocalChannel(arg1);
              let localChannel1 = null;
              if (null != arg2) {
                localChannel1 = outer2_17.getLocalChannel(arg2);
              }
              let num = -1;
              if (null != arg2) {
                num = order.indexOf(arg2);
              }
              const index = order.indexOf(arg1);
              let obj = GuildSettingsModalChannels(outer2_3[34]);
              let tmp14 = null;
              if (outer2_30(obj.getDropData(localChannel1, num, localChannel, index, channelList), tmp2)) {
                obj = {};
                const items = [tmp.dropHighlight, ];
                obj = { height };
                items[1] = obj;
                obj.style = items;
                tmp14 = outer2_21(outer2_10, obj);
              }
              return tmp14;
            }
          }
        }
        return null;
      };
      tmp2.renderSectionHeader = (section) => {
        const id = section.section.category.id;
        const props = tmp2.props;
        const sortingType = props.sortingType;
        let localChannel = null;
        if ("null" !== id) {
          localChannel = outer2_17.getLocalChannel(id);
        }
        if (null != localChannel) {
          let obj = { category: localChannel };
          let hasItem = null != sortingType;
          if (hasItem) {
            hasItem = sortingType.has(outer2_18.GUILD_CATEGORY);
          }
          obj.sortingEnabled = hasItem;
          obj.editStyle = tmp.edit;
          let handleChannelPress;
          if (null == sortingType) {
            handleChannelPress = tmp2.handleChannelPress;
          }
          obj.onPress = handleChannelPress;
          let tmp4Result = outer2_21(outer2_24, obj);
          const tmp8 = outer2_21;
          const tmp9 = outer2_24;
        } else {
          obj = {};
          let tmp6 = null;
          if (null == sortingType) {
            tmp6 = null;
            if (props.channels.null.length > 0) {
              obj = { marginTop: 36 };
              tmp6 = obj;
            }
          }
          obj.style = tmp6;
          tmp4Result = outer2_21(outer2_10, obj);
          const tmp4 = outer2_21;
          const tmp5 = outer2_10;
        }
        return tmp4Result;
      };
      tmp2.renderItem = (item) => {
        item = item.item;
        const channel = item.channel;
        if (null != channel) {
          const obj = { channel, sortingEnabled: null != item.sortingType, onPress: tmp2.handleChannelPress, style: tmp.row };
          let tmp4 = outer2_21(outer2_29, obj);
        } else {
          tmp4 = outer2_21(outer2_10, {});
        }
        return tmp4;
      };
      tmp2.handleHoverChange = (hovering) => {
        tmp2.setState({ hovering });
      };
      tmp2.handleSortStart = () => {
        const items = [];
        if (outer2_14.can(outer2_19.MANAGE_CHANNELS, tmp2.props.guild)) {
          let obj = {};
          const intl = GuildSettingsModalChannels(outer2_3[18]).intl;
          obj.label = intl.string(GuildSettingsModalChannels(outer2_3[18]).t.ffgJrs);
          obj.icon = outer2_1(outer2_3[35]);
          obj.onPress = function onPress() {
            outer3_1(outer3_3[36]).startReordering(outer3_18.GUILD_CATEGORY);
          };
          items.push(obj);
          tmp2 = outer2_3;
        }
        obj = {};
        const intl2 = GuildSettingsModalChannels(outer2_3[18]).intl;
        obj.label = intl2.string(GuildSettingsModalChannels(outer2_3[18]).t.nIfr0Y);
        obj.icon = outer2_1(outer2_3[37]);
        obj.onPress = function onPress() {
          outer3_1(outer3_3[36]).startReordering(outer3_18.GUILD_TEXT, outer3_18.GUILD_ANNOUNCEMENT, outer3_18.GUILD_FORUM, outer3_18.GUILD_MEDIA);
        };
        items.push(obj);
        obj = {};
        const intl3 = GuildSettingsModalChannels(outer2_3[18]).intl;
        obj.label = intl3.string(GuildSettingsModalChannels(outer2_3[18]).t.CYnO4s);
        obj.icon = outer2_1(outer2_3[38]);
        obj.onPress = function onPress() {
          outer3_1(outer3_3[36]).startReordering(outer3_18.GUILD_VOICE, outer3_18.GUILD_STAGE_VOICE);
        };
        items.push(obj);
        const obj1 = { key: "GuildSettingsChannelsSort" };
        const obj2 = {};
        const intl4 = GuildSettingsModalChannels(outer2_3[18]).intl;
        obj2.title = intl4.string(GuildSettingsModalChannels(outer2_3[18]).t["0dOFq+"]);
        obj1.header = obj2;
        obj1.options = items;
        obj1.hasIcons = true;
        const result = GuildSettingsModalChannels(outer2_3[31]).showSimpleActionSheet(obj1);
      };
      tmp2.handleDrop = (arg0) => {
        let channels;
        let guild;
        let order;
        function saveUpdates() {
          outer3_1(outer3_3[36]).localChannelUpdate(found);
          const obj = outer3_1(outer3_3[36]);
          outer3_1(outer3_3[40]).batchChannelUpdate(localChannel.guild_id, found);
        }
        const props = guild.props;
        ({ order, channels, guild } = props);
        const localChannel = outer2_17.getLocalChannel(order[arg0.from]);
        const localChannel1 = outer2_17.getLocalChannel(order[arg0.to]);
        let obj = GuildSettingsModalChannels(outer2_3[34]);
        const dropData = obj.getDropData(localChannel, arg0.from, localChannel1, arg0.to, props.channelList);
        if (null != dropData) {
          if (localChannel1 !== localChannel) {
            if (null != localChannel) {
              if (null != localChannel1) {
                if (outer2_30(dropData, guild)) {
                  const referenceId = dropData.referenceId;
                  const obj2 = GuildSettingsModalChannels(outer2_3[34]);
                  let localChannel2 = null;
                  if (null != referenceId) {
                    localChannel2 = outer2_17.getLocalChannel(referenceId);
                  }
                  const dnDUpdates = obj2.getDnDUpdates(localChannel, localChannel2, dropData.parentId, channels);
                  const found = dnDUpdates.filter((id) => {
                    const channel = outer3_12.getChannel(id.id);
                    if (null == channel) {
                      return false;
                    } else {
                      const channel1 = outer3_12.getChannel(channel.parent_id);
                      if (channel.type !== outer3_18.GUILD_CATEGORY) {
                        if (null != channel1) {
                          let canResult = outer3_14.can(outer3_19.MANAGE_CHANNELS, channel1);
                        }
                        return canResult;
                      }
                      canResult = outer3_14.can(outer3_19.MANAGE_CHANNELS, guild);
                    }
                  });
                  if (localChannel.parent_id !== dropData.parentId) {
                    const found1 = found.find((id) => {
                      if (id.id !== localChannel.id) {
                        return false;
                      } else {
                        const channel = outer3_12.getChannel(id.parent_id);
                        if (null != channel) {
                          if (outer3_14.can(outer3_19.MANAGE_ROLES, localChannel)) {
                            if (outer3_14.can(outer3_19.MANAGE_ROLES, channel)) {
                              const areChannelsLockedResult = outer3_2(outer3_3[39]).areChannelsLocked(localChannel, channel);
                              const obj = outer3_2(outer3_3[39]);
                              let areChannelsLockedResult1 = outer3_2(outer3_3[39]).areChannelsLocked(localChannel, outer3_12.getChannel(localChannel.parent_id));
                              let tmp15 = null == localChannel.parent_id && !areChannelsLockedResult;
                              if (!tmp15) {
                                if (areChannelsLockedResult1) {
                                  areChannelsLockedResult1 = !areChannelsLockedResult;
                                }
                                tmp15 = areChannelsLockedResult1;
                              }
                              if (tmp15) {
                                let closure_2 = id;
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
                    let channel = outer2_12.getChannel(parent_id.parent_id);
                    obj = {};
                    const intl = GuildSettingsModalChannels(outer2_3[18]).intl;
                    obj.title = intl.string(GuildSettingsModalChannels(outer2_3[18]).t.YWMtRe);
                    const intl2 = GuildSettingsModalChannels(outer2_3[18]).intl;
                    obj = {};
                    const obj6 = GuildSettingsModalChannels(outer2_3[27]);
                    obj.channelName = obj6.computeChannelName(localChannel, outer2_16, outer2_15, true);
                    let str = "";
                    if (null != channel) {
                      str = GuildSettingsModalChannels(outer2_3[27]).computeChannelName(channel, outer2_16, outer2_15);
                      const obj7 = GuildSettingsModalChannels(outer2_3[27]);
                    }
                    obj.categoryName = str;
                    obj.body = intl2.format(GuildSettingsModalChannels(outer2_3[18]).t["iKW+jY"], obj);
                    const intl3 = GuildSettingsModalChannels(outer2_3[18]).intl;
                    obj.confirmText = intl3.string(GuildSettingsModalChannels(outer2_3[18]).t.eW8Gy4);
                    const intl4 = GuildSettingsModalChannels(outer2_3[18]).intl;
                    obj.cancelText = intl4.string(GuildSettingsModalChannels(outer2_3[18]).t.s4uM3b);
                    obj.onConfirm = function onConfirm() {
                      closure_2.lock_permissions = true;
                      saveUpdates();
                    };
                    obj.onCancel = saveUpdates;
                    outer2_1(outer2_3[41]).show(obj);
                    const obj3 = outer2_1(outer2_3[41]);
                  } else {
                    saveUpdates();
                  }
                }
              }
            }
          }
        }
      };
      return tmp2;
    }
  }
  callback3(GuildSettingsModalChannels, PureComponent);
  let obj = {
    key: "componentDidMount",
    value() {
      this.updateNavigation();
    }
  };
  let items = [obj, , , , , ];
  obj = {
    key: "componentDidUpdate",
    value(arg0) {
      this.updateNavigation(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "updateNavigation",
    value(sortingType) {
      let channels;
      let guild;
      let navigation;
      let order;
      let user;
      const self = this;
      let closure_1 = outer1_23(this.context);
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
        let obj = {};
        let fn;
        if (null != sortingType) {
          fn = () => null;
        }
        obj.headerLeft = fn;
        if (null != sortingType) {
          let fn2 = () => {
            const obj = { textStyle: closure_1.headerRight };
            const intl = GuildSettingsModalChannels(outer2_3[18]).intl;
            obj.text = intl.string(GuildSettingsModalChannels(outer2_3[18]).t.i4jeWR);
            obj.onPress = self.handleSortStop;
            return outer2_21(GuildSettingsModalChannels(outer2_3[42]).HeaderActionButton, obj);
          };
        } else {
          if (obj2.canManageACategory(user, guild, channels._categories)) {
            fn2 = () => {
              const obj = { textStyle: closure_1.headerRight };
              const intl = GuildSettingsModalChannels(outer2_3[18]).intl;
              obj.text = intl.string(GuildSettingsModalChannels(outer2_3[18]).t["0dOFq+"]);
              obj.onPress = self.handleSortStart;
              return outer2_21(GuildSettingsModalChannels(outer2_3[42]).HeaderActionButton, obj);
            };
          }
          obj2 = outer1_2(outer1_3[39]);
        }
        obj.headerRight = fn2;
        let stringResult;
        if (null != sortingType) {
          let intl = GuildSettingsModalChannels(outer1_3[18]).intl;
          stringResult = intl.string(GuildSettingsModalChannels(outer1_3[18]).t.OGiMXJ);
        }
        obj.headerTitle = stringResult;
        navigation.setOptions(obj);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "render",
    value() {
      let order;
      let sortingType;
      const props = this.props;
      ({ order, sortingType } = props);
      let obj = { style: outer1_23(this.context).containerView };
      const tmp = outer1_23(this.context);
      obj = {
        sections: (function getListViewData(channels, sortingType, hovering) {
          let closure_0 = channels;
          let closure_1 = sortingType;
          let closure_2 = hovering;
          const items = [];
          if (null == channels) {
            return items;
          } else {
            let c4 = -1;
            const _categories = channels._categories;
            let item = _categories.forEach((channel) => {
              channel = channel.channel;
              let obj;
              if ("null" === channel.id) {
                getActivityIndicator = getActivityIndicator + 1;
                obj = { data: [], category: channel, key: channel.id, index: getActivityIndicator };
                let arr = obj[channel.id];
                const item = arr.forEach((channel) => {
                  channel = channel.channel;
                  let hasItem = null == outer1_1;
                  if (!hasItem) {
                    hasItem = outer1_1.has(channel.type);
                  }
                  if (hasItem) {
                    getActivityIndicator = getActivityIndicator + 1;
                    const data = obj.data;
                    obj = { key: channel.id, channel, sortingType: outer1_1, isHovered: outer1_2 === channel.id, index: getActivityIndicator };
                    data.push(obj);
                  }
                });
                arr = items.push(obj);
              }
            });
            return items;
          }
        })(props.channels, sortingType, this.state.hovering),
        sortingEnabled: null != sortingType,
        renderSectionHeader: this.renderSectionHeader,
        renderItem: this.renderItem,
        onRowMoved: this.handleDrop
      };
      let items = [outer1_20];
      const tmp2 = (function getListViewData(channels, sortingType, hovering) {
        let closure_0 = channels;
        let closure_1 = sortingType;
        let closure_2 = hovering;
        const items = [];
        if (null == channels) {
          return items;
        } else {
          let c4 = -1;
          const _categories = channels._categories;
          let item = _categories.forEach((channel) => {
            channel = channel.channel;
            let obj;
            if ("null" === channel.id) {
              getActivityIndicator = getActivityIndicator + 1;
              obj = { data: [], category: channel, key: channel.id, index: getActivityIndicator };
              let arr = obj[channel.id];
              const item = arr.forEach((channel) => {
                channel = channel.channel;
                let hasItem = null == outer1_1;
                if (!hasItem) {
                  hasItem = outer1_1.has(channel.type);
                }
                if (hasItem) {
                  getActivityIndicator = getActivityIndicator + 1;
                  const data = obj.data;
                  obj = { key: channel.id, channel, sortingType: outer1_1, isHovered: outer1_2 === channel.id, index: getActivityIndicator };
                  data.push(obj);
                }
              });
              arr = items.push(obj);
            }
          });
          return items;
        }
      })(props.channels, sortingType, this.state.hovering);
      const tmp3 = outer1_22;
      const tmp4 = outer1_10;
      HermesBuiltin.arraySpread(order, 1);
      obj.order = items;
      ({ handleHoverChange: obj2.onHoverChange, renderActiveDivider: obj2.renderActiveDivider } = this);
      obj.contentContainerStyle = this.props.contentContainerStyle;
      obj.fontScale = this.props.fontScale;
      const items1 = [outer1_21(outer1_1(outer1_3[43]), obj), , ];
      let tmp7 = null == sortingType;
      if (tmp7) {
        obj = { guild: props.guild };
        tmp7 = outer1_21(outer1_31, obj);
      }
      items1[1] = tmp7;
      items1[2] = outer1_21(GuildSettingsModalChannels(outer1_3[44]).NavScrim, {});
      obj.children = items1;
      return tmp3(tmp4, obj);
    }
  };
  items[4] = {
    key: "handleChannelPress",
    value(arg0) {
      GuildSettingsModalChannels(outer1_3[45]).open(arg0);
    }
  };
  items[5] = {
    key: "handleSortStop",
    value() {
      outer1_1(outer1_3[36]).stopReordering();
    }
  };
  return callback(GuildSettingsModalChannels, items);
})(importAllResult.PureComponent);
let closure_26 = tmp14;
tmp14.contextType = require("ManaContext").ThemeContext;
let obj5 = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.GREEN_360, opacity: 0.3 };
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalChannels.tsx");

export default function GuildSettingsModalChannelsConnected(arg0) {
  let contentContainerStyle;
  let require;
  ({ guildId: require, contentContainerStyle } = arg0);
  let obj = require(1456) /* useNavigation */;
  const navigation = obj.useNavigation();
  let items = [closure_13];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_13.getGuild(closure_0));
  const obj2 = require(566) /* initialize */;
  const items1 = [closure_17];
  const stateFromStores1 = require(566) /* initialize */.useStateFromStores(items1, () => outer1_17.channels);
  const obj3 = require(566) /* initialize */;
  const items2 = [closure_16];
  const stateFromStores2 = require(566) /* initialize */.useStateFromStores(items2, () => {
    const currentUser = outer1_16.getCurrentUser();
    contentContainerStyle(tmp8[47])(null != currentUser, "GuildSettingsModalChannelsConnected: currentUser cannot be undefined");
    return currentUser;
  });
  const obj4 = require(566) /* initialize */;
  const items3 = [closure_17];
  const stateFromStores3 = require(566) /* initialize */.useStateFromStores(items3, () => outer1_17.channelList);
  const obj5 = require(566) /* initialize */;
  const items4 = [closure_17];
  const stateFromStores4 = require(566) /* initialize */.useStateFromStores(items4, () => outer1_17.order);
  const obj6 = require(566) /* initialize */;
  const items5 = [closure_17];
  const stateFromStores5 = require(566) /* initialize */.useStateFromStores(items5, () => outer1_17.sortingType);
  const tmp8 = contentContainerStyle(1557)();
  const dependencyMap = tmp8;
  const items6 = [contentContainerStyle, tmp8.bottom, stateFromStores5];
  const memo = importAllResult.useMemo(() => {
    if (null == stateFromStores5) {
      const items = [contentContainerStyle, ];
      const obj = { paddingBottom: tmp8.bottom + 32 + 44 };
      items[1] = obj;
      let tmp = items;
    } else {
      tmp = contentContainerStyle;
    }
    return tmp;
  }, items6);
  require(4549) /* getFontScale */;
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
            obj = { navigation, guild: stateFromStores, channels: stateFromStores1, user: stateFromStores2, channelList: stateFromStores3, order: stateFromStores4, sortingType: stateFromStores5, contentContainerStyle: memo, fontScale: tmp11 };
            tmp12 = callback4(closure_26, obj);
          }
        }
      }
    }
  }
  return tmp12;
};
