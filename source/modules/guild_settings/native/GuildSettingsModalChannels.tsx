// Module ID: 16152
// Function ID: 124513
// Name: _callSuper
// Dependencies: []
// Exports: default

// Module 16152 (_callSuper)
let Fonts;
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
  let sortHandlers;
  let sortingEnabled;
  let style;
  ({ channelIconStyle, channel } = arg0);
  const arg1 = channel;
  ({ sortingEnabled, onPress: closure_1, sortHandlers } = arg0);
  ({ style, actionIconStyle } = arg0);
  let obj = arg1(dependencyMap[15]);
  const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(closure_23);
  let obj1 = arg1(dependencyMap[19]);
  let obj2 = arg1(dependencyMap[25]);
  const items = [closure_14];
  const items1 = [channel];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    if (null == channel.parent_id) {
      let obj = { guildId: channel.guild_id };
      let result = closure_14.canWithPartialContext(constants.MANAGE_CHANNELS, obj);
    } else {
      obj = { channelId: channel.parent_id };
      result = closure_14.canWithPartialContext(constants.MANAGE_CHANNELS, obj);
    }
    return result;
  }, items1);
  let obj3 = arg1(dependencyMap[26]);
  const channelIcon = obj3.getChannelIcon(channel);
  let obj4 = arg1(dependencyMap[26]);
  const channelIconComponent = obj4.getChannelIconComponent(channel);
  obj = { accessibilityRole: "button" };
  const obj7 = arg1(dependencyMap[19]);
  const tmp5 = callback4;
  const tmp6 = closure_11;
  const isThemeDarkResult = arg1(dependencyMap[19]).isThemeDark(obj1.useThemeContext().theme);
  const hex2rgb = arg1(dependencyMap[20]).hex2rgb;
  const unsafe_rawColors = importDefault(dependencyMap[17]).unsafe_rawColors;
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
    obj4 = { size: arg1(dependencyMap[22]).Icon.Sizes.SMALL_20, source: channelIcon, style: channelIconStyle };
    tmp19 = callback4(arg1(dependencyMap[21]).FormRow.Icon, obj4);
  }
  obj2.leading = tmp19;
  obj2.style = legacyClassComponentStyles.formRowStyle;
  const tmp12 = callback4;
  const tmp13 = closure_10;
  const tmp15 = callback4;
  const tmp8 = arg1(dependencyMap[20]);
  obj2.label = arg1(dependencyMap[27]).computeChannelName(channel, closure_16, closure_15);
  let fn;
  if (!sortingEnabled) {
    fn = () => callback(channel.id);
  }
  obj2.onPress = fn;
  let tmp21 = null;
  if (stateFromStores) {
    tmp21 = null;
    if (sortingEnabled) {
      const obj5 = { source: importDefault(dependencyMap[23]), style: actionIconStyle };
      tmp21 = callback4(arg1(dependencyMap[21]).FormRow.Icon, obj5);
    }
  }
  obj2.trailing = tmp21;
  let num6;
  if (sortingEnabled) {
    num6 = 1;
  }
  obj2.numberOfLines = num6;
  obj.children = tmp15(arg1(dependencyMap[21]).FormRow, obj2);
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
  const arg1 = guild;
  let obj = arg1(dependencyMap[15]);
  const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(closure_23);
  const bottom = importDefault(dependencyMap[29])().bottom;
  const importDefault = bottom;
  const items = [bottom];
  const memo = importAllResult.useMemo(() => ({ bottom: 16 + bottom }), items);
  let tmp3 = null;
  if (closure_14.can(constants.MANAGE_CHANNELS, guild)) {
    obj = {};
    const items1 = [legacyClassComponentStyles.floatingActionButtonContainer, memo];
    obj.style = items1;
    obj = {};
    const intl = arg1(dependencyMap[18]).intl;
    obj.text = intl.string(arg1(dependencyMap[18]).t.CumH4u);
    obj.onPress = function onPress() {
      let obj = guild(closure_3[31]);
      obj = { key: "GuildSettingsChannelsCreate" };
      obj = {};
      const intl = guild(closure_3[18]).intl;
      obj.title = intl.string(guild(closure_3[18]).t.CumH4u);
      obj.header = obj;
      const obj1 = {};
      const intl2 = guild(closure_3[18]).intl;
      obj1.label = intl2.string(guild(closure_3[18]).t.vHCZwr);
      obj1.onPress = function onPress() {
        callback(closure_3[32]).open(constants.GUILD_CATEGORY, user.id, null, null);
      };
      const items = [obj1, ];
      const obj2 = {};
      const intl3 = guild(closure_3[18]).intl;
      obj2.label = intl3.string(guild(closure_3[18]).t.GK18KJ);
      obj2.onPress = function onPress() {
        callback(closure_3[32]).open(null, user.id, null, null);
      };
      items[1] = obj2;
      obj.options = items;
      obj.hasIcons = false;
      const result = obj.showSimpleActionSheet(obj);
    };
    const obj1 = { color: "white" };
    obj.icon = callback4(arg1(dependencyMap[33]).PlusSmallIcon, obj1);
    obj.children = callback4(arg1(dependencyMap[30]).Button, obj);
    tmp3 = callback4(closure_10, obj);
  }
  return tmp3;
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
const importAllResult = importAll(dependencyMap[5]);
const tmp3 = arg1(dependencyMap[6]);
({ View: closure_10, TouchableHighlight: closure_11 } = tmp3);
let closure_12 = importDefault(dependencyMap[7]);
let closure_13 = importDefault(dependencyMap[8]);
let closure_14 = importDefault(dependencyMap[9]);
let closure_15 = importDefault(dependencyMap[10]);
let closure_16 = importDefault(dependencyMap[11]);
let closure_17 = importDefault(dependencyMap[12]);
({ ChannelTypes: closure_18, Permissions: closure_19, Fonts, NULL_STRING_CHANNEL_ID: closure_20 } = arg1(dependencyMap[13]));
const tmp4 = arg1(dependencyMap[13]);
({ jsx: closure_21, jsxs: closure_22 } = arg1(dependencyMap[14]));
let obj = arg1(dependencyMap[15]);
obj = {};
obj = {};
const tmp5 = arg1(dependencyMap[14]);
const merged = Object.assign(importDefault(dependencyMap[16])(Fonts.PRIMARY_SEMIBOLD, importDefault(dependencyMap[17]).colors.MOBILE_TEXT_HEADING_PRIMARY, 16));
obj["textTransform"] = "capitalize";
obj.headerRight = obj;
const importDefaultResult = importDefault(dependencyMap[16]);
obj.containerView = { flex: 1, backgroundColor: importDefault(dependencyMap[17]).colors.BACKGROUND_BASE_LOW };
const obj1 = { flex: 1, backgroundColor: importDefault(dependencyMap[17]).colors.BACKGROUND_BASE_LOW };
const obj2 = {};
const merged1 = Object.assign(importDefault(dependencyMap[16])(Fonts.DISPLAY_EXTRABOLD, importDefault(dependencyMap[17]).colors.TEXT_SUBTLE, 12, { uppercase: true }));
obj.categoryText = obj2;
obj.categoryView = { names: true, ks: true };
obj.sortingCategoryView = { paddingTop: 16 };
const importDefaultResult1 = importDefault(dependencyMap[16]);
const obj3 = { uppercase: true };
const obj4 = {};
const merged2 = Object.assign(importDefault(dependencyMap[16])(Fonts.PRIMARY_SEMIBOLD, importDefault(dependencyMap[17]).colors.TEXT_SUBTLE, 14));
obj.edit = obj4;
obj.row = { marginTop: -tmp3.StyleSheet.hairlineWidth };
obj.formRowStyle = { paddingVertical: 12 };
const importDefaultResult2 = importDefault(dependencyMap[16]);
obj.dropHighlight = { backgroundColor: importDefault(dependencyMap[17]).unsafe_rawColors.GREEN_360, opacity: 0.3 };
obj.floatingActionButtonContainer = { "Bool(false)": "sEAnVH", "Bool(false)": "type", "Bool(false)": "isArray", "Bool(false)": "inputFlat", "Bool(false)": "setRecipientUser", "Bool(false)": "keys" };
let closure_23 = obj.createLegacyClassComponentStyles(obj);
const tmp12 = (PureComponent) => {
  class Category {
    constructor() {
      tmp = closure_4(this, Category);
      return closure_27(this, Category, arguments);
    }
  }
  const arg1 = Category;
  callback3(Category, PureComponent);
  const items = [
    {
      key: "render",
      value() {
        let actionIconStyle;
        let editStyle;
        const self = this;
        const tmp = callback3(this.context);
        const props = this.props;
        const category = props.category;
        const Category = category;
        const onPress = props.onPress;
        const sortingEnabled = props.sortingEnabled;
        let sortHandlers = null;
        ({ editStyle, actionIconStyle } = props);
        if (sortingEnabled) {
          sortHandlers = self.props.sortHandlers;
        }
        let obj = { accessibilityRole: "button" };
        obj = { name: "activate" };
        const intl = Category(closure_3[18]).intl;
        obj.label = intl.string(Category(closure_3[18]).t.bt75uw);
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
        let obj2 = Category(closure_3[19]);
        const isThemeDarkResult = obj2.isThemeDark(self.context.theme);
        const tmp3 = callback2;
        const tmp4 = closure_11;
        const hex2rgb = Category(closure_3[20]).hex2rgb;
        const unsafe_rawColors = onPress(closure_3[17]).unsafe_rawColors;
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
          let tmp13 = callback2(closure_25, obj2);
        } else {
          tmp13 = null;
          if (null != sortHandlers) {
            const obj3 = { source: onPress(closure_3[23]), style: actionIconStyle };
            tmp13 = callback2(Category(closure_3[22]).Icon, obj3);
          }
        }
        obj1.icon = tmp13;
        obj.children = callback2(Category(closure_3[21]).FormTitle, obj1);
        obj["children"] = callback2(closure_10, obj);
        return tmp3(tmp4, obj);
      }
    }
  ];
  return callback(Category, items);
}(importAllResult.PureComponent);
tmp12.contextType = arg1(dependencyMap[24]).ThemeContext;
const tmp13 = (PureComponent) => {
  class SectionEditAction {
    constructor() {
      tmp = closure_4(this, SectionEditAction);
      return closure_27(this, SectionEditAction, arguments);
    }
  }
  const arg1 = SectionEditAction;
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
        const intl = SectionEditAction(closure_3[18]).intl;
        obj.children = intl.string(SectionEditAction(closure_3[18]).t.bt75uw);
        obj.children = callback2(SectionEditAction(closure_3[22]).LegacyText, obj);
        return callback2(SectionEditAction(closure_3[28]).PressableOpacity, obj);
      }
    }
  ];
  return callback(SectionEditAction, items);
}(importAllResult.PureComponent);
tmp13.contextType = arg1(dependencyMap[24]).ThemeContext;
const tmp14 = (PureComponent) => {
  class GuildSettingsModalChannels {
    constructor(arg0) {
      items = [...arguments];
      tmp = closure_4(this, GuildSettingsModalChannels);
      items1 = [...items];
      tmp2 = closure_27(this, GuildSettingsModalChannels, items1);
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
              const localChannel = store.getLocalChannel(arg1);
              let localChannel1 = null;
              if (null != arg2) {
                localChannel1 = store.getLocalChannel(arg2);
              }
              let num = -1;
              if (null != arg2) {
                num = order.indexOf(arg2);
              }
              const index = order.indexOf(arg1);
              let obj = tmp2(closure_3[34]);
              let tmp14 = null;
              if (callback4(obj.getDropData(localChannel1, num, localChannel, index, channelList), tmp2)) {
                obj = {};
                const items = [tmp.dropHighlight, ];
                obj = { height };
                items[1] = obj;
                obj.style = items;
                tmp14 = callback2(closure_10, obj);
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
          localChannel = store.getLocalChannel(id);
        }
        if (null != localChannel) {
          let obj = { category: localChannel };
          let hasItem = null != sortingType;
          if (hasItem) {
            hasItem = sortingType.has(constants.GUILD_CATEGORY);
          }
          obj.sortingEnabled = hasItem;
          obj.editStyle = tmp.edit;
          let handleChannelPress;
          if (null == sortingType) {
            handleChannelPress = tmp2.handleChannelPress;
          }
          obj.onPress = handleChannelPress;
          let tmp4Result = closure_21(closure_24, obj);
          const tmp8 = closure_21;
          const tmp9 = closure_24;
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
          tmp4Result = closure_21(closure_10, obj);
          const tmp4 = closure_21;
          const tmp5 = closure_10;
        }
        return tmp4Result;
      };
      tmp2.renderItem = (item) => {
        item = item.item;
        const channel = item.channel;
        if (null != channel) {
          const obj = { channel, sortingEnabled: null != item.sortingType, onPress: tmp2.handleChannelPress, style: tmp.row };
          let tmp4 = callback2(closure_29, obj);
        } else {
          tmp4 = callback2(closure_10, {});
        }
        return tmp4;
      };
      tmp2.handleHoverChange = (hovering) => {
        tmp2.setState({ hovering });
      };
      tmp2.handleSortStart = () => {
        const items = [];
        if (closure_14.can(constants2.MANAGE_CHANNELS, tmp2.props.guild)) {
          let obj = {};
          const intl = tmp2(closure_3[18]).intl;
          obj.label = intl.string(closure_3(closure_3[18]).t.ffgJrs);
          obj.icon = callback(closure_3[35]);
          obj.onPress = function onPress() {
            callback(closure_3[36]).startReordering(constants.GUILD_CATEGORY);
          };
          items.push(obj);
        }
        obj = {};
        const intl2 = tmp2(closure_3[18]).intl;
        obj.label = intl2.string(tmp2(closure_3[18]).t.nIfr0Y);
        obj.icon = callback(closure_3[37]);
        obj.onPress = function onPress() {
          callback(closure_3[36]).startReordering(constants.GUILD_TEXT, constants.GUILD_ANNOUNCEMENT, constants.GUILD_FORUM, constants.GUILD_MEDIA);
        };
        items.push(obj);
        obj = {};
        const intl3 = tmp2(closure_3[18]).intl;
        obj.label = intl3.string(tmp2(closure_3[18]).t.CYnO4s);
        obj.icon = callback(closure_3[38]);
        obj.onPress = function onPress() {
          callback(closure_3[36]).startReordering(constants.GUILD_VOICE, constants.GUILD_STAGE_VOICE);
        };
        items.push(obj);
        const obj1 = { key: "GuildSettingsChannelsSort" };
        const obj2 = {};
        const intl4 = tmp2(closure_3[18]).intl;
        obj2.title = intl4.string(tmp2(closure_3[18]).t.0dOFq+);
        obj1.header = obj2;
        obj1.options = items;
        obj1.hasIcons = true;
        const result = tmp2(closure_3[31]).showSimpleActionSheet(obj1);
      };
      tmp2.handleDrop = (arg0) => {
        let channels;
        let guild;
        let order;
        function saveUpdates() {
          localChannel(found[36]).localChannelUpdate(found);
          const obj = localChannel(found[36]);
          localChannel(found[40]).batchChannelUpdate(localChannel.guild_id, found);
        }
        const props = tmp2.props;
        ({ order, channels, guild } = props);
        const localChannel = store.getLocalChannel(order[arg0.from]);
        const localChannel1 = store.getLocalChannel(order[arg0.to]);
        let obj = tmp2(found[34]);
        const dropData = obj.getDropData(localChannel, arg0.from, localChannel1, arg0.to, props.channelList);
        if (null != dropData) {
          if (localChannel1 !== localChannel) {
            if (null != localChannel) {
              if (null != localChannel1) {
                if (callback4(dropData, guild)) {
                  const referenceId = dropData.referenceId;
                  const obj2 = tmp2(found[34]);
                  let localChannel2 = null;
                  if (null != referenceId) {
                    localChannel2 = store.getLocalChannel(referenceId);
                  }
                  const dnDUpdates = obj2.getDnDUpdates(localChannel, localChannel2, dropData.parentId, channels);
                  const found = dnDUpdates.filter((id) => {
                    const channel = store.getChannel(id.id);
                    if (null == channel) {
                      return false;
                    } else {
                      const channel1 = store.getChannel(channel.parent_id);
                      if (channel.type !== constants.GUILD_CATEGORY) {
                        if (null != channel1) {
                          let canResult = closure_14.can(constants2.MANAGE_CHANNELS, channel1);
                        }
                        return canResult;
                      }
                      canResult = closure_14.can(constants2.MANAGE_CHANNELS, guild);
                    }
                  });
                  if (localChannel.parent_id !== dropData.parentId) {
                    const found1 = found.find((id) => {
                      if (id.id !== localChannel.id) {
                        return false;
                      } else {
                        const channel = store.getChannel(id.parent_id);
                        if (null != channel) {
                          if (closure_14.can(constants2.MANAGE_ROLES, localChannel)) {
                            if (closure_14.can(constants2.MANAGE_ROLES, channel)) {
                              const areChannelsLockedResult = id(found[39]).areChannelsLocked(localChannel, channel);
                              const obj = id(found[39]);
                              let areChannelsLockedResult1 = id(found[39]).areChannelsLocked(localChannel, store.getChannel(localChannel.parent_id));
                              let tmp15 = null == localChannel.parent_id && !areChannelsLockedResult;
                              if (!tmp15) {
                                if (areChannelsLockedResult1) {
                                  areChannelsLockedResult1 = !areChannelsLockedResult;
                                }
                                tmp15 = areChannelsLockedResult1;
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
                    const channel = channel.getChannel(parent_id.parent_id);
                    obj = {};
                    const intl = tmp2(found[18]).intl;
                    obj.title = intl.string(tmp2(found[18]).t.YWMtRe);
                    const intl2 = tmp2(found[18]).intl;
                    obj = {};
                    const obj6 = tmp2(found[27]);
                    obj.channelName = obj6.computeChannelName(localChannel, closure_16, closure_15, true);
                    let str = "";
                    if (null != channel) {
                      str = tmp2(found[27]).computeChannelName(channel, closure_16, closure_15);
                      const obj7 = tmp2(found[27]);
                    }
                    obj.categoryName = str;
                    obj.body = intl2.format(tmp2(found[18]).t.iKW+jY, obj);
                    const intl3 = tmp2(found[18]).intl;
                    obj.confirmText = intl3.string(tmp2(found[18]).t.eW8Gy4);
                    const intl4 = tmp2(found[18]).intl;
                    obj.cancelText = intl4.string(tmp2(found[18]).t.s4uM3b);
                    obj.onConfirm = function onConfirm() {
                      closure_2.lock_permissions = true;
                      saveUpdates();
                    };
                    obj.onCancel = saveUpdates;
                    localChannel(found[41]).show(obj);
                    const obj3 = localChannel(found[41]);
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
  const arg1 = GuildSettingsModalChannels;
  callback3(GuildSettingsModalChannels, PureComponent);
  let obj = {
    key: "componentDidMount",
    value() {
      this.updateNavigation();
    }
  };
  const items = [obj, , , , , ];
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
      const GuildSettingsModalChannels = this;
      let closure_1 = callback5(this.context);
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
        const obj = {};
        let fn;
        if (null != sortingType) {
          fn = () => null;
        }
        obj.headerLeft = fn;
        if (null != sortingType) {
          let fn2 = () => {
            const obj = { textStyle: closure_1.headerRight };
            const intl = self(closure_3[18]).intl;
            obj.text = intl.string(self(closure_3[18]).t.i4jeWR);
            obj.onPress = self.handleSortStop;
            return callback(self(closure_3[42]).HeaderActionButton, obj);
          };
        } else {
          if (obj2.canManageACategory(user, guild, channels._categories)) {
            fn2 = () => {
              const obj = { textStyle: closure_1.headerRight };
              const intl = self(closure_3[18]).intl;
              obj.text = intl.string(self(closure_3[18]).t.0dOFq+);
              obj.onPress = self.handleSortStart;
              return callback(self(closure_3[42]).HeaderActionButton, obj);
            };
          }
          const obj2 = callback2(closure_3[39]);
        }
        obj.headerRight = fn2;
        let stringResult;
        if (null != sortingType) {
          const intl = GuildSettingsModalChannels(closure_3[18]).intl;
          stringResult = intl.string(GuildSettingsModalChannels(closure_3[18]).t.OGiMXJ);
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
      let obj = { style: callback5(this.context).containerView };
      const tmp = callback5(this.context);
      obj = {
        sections: function getListViewData(channels, sortingType, hovering) {
          const items = [];
          if (null == channels) {
            return items;
          } else {
            let closure_4 = -1;
            const _categories = channels._categories;
            const item = _categories.forEach((channel) => {
              channel = channel.channel;
              channel = undefined;
              if ("null" === channel.id) {
                closure_4 = closure_4 + 1;
                const obj = { data: [], category: channel, key: channel.id, index: closure_4 };
                channel = obj;
                let arr = channel[channel.id];
                const item = arr.forEach((channel) => {
                  channel = channel.channel;
                  let hasItem = null == set;
                  if (!hasItem) {
                    hasItem = set.has(channel.type);
                  }
                  if (hasItem) {
                    closure_4 = closure_4 + 1;
                    const data = obj.data;
                    const obj = { key: channel.id, channel, sortingType: set, isHovered: closure_2 === channel.id, index: closure_4 };
                    data.push(obj);
                  }
                });
                arr = items.push(obj);
              }
            });
            return items;
          }
        }(props.channels, sortingType, this.state.hovering),
        sortingEnabled: null != sortingType,
        renderSectionHeader: this.renderSectionHeader,
        renderItem: this.renderItem,
        onRowMoved: this.handleDrop
      };
      const items = [closure_20];
      const tmp2 = function getListViewData(channels, sortingType, hovering) {
        const items = [];
        if (null == channels) {
          return items;
        } else {
          let closure_4 = -1;
          const _categories = channels._categories;
          const item = _categories.forEach((channel) => {
            channel = channel.channel;
            channel = undefined;
            if ("null" === channel.id) {
              closure_4 = closure_4 + 1;
              const obj = { data: [], category: channel, key: channel.id, index: closure_4 };
              channel = obj;
              let arr = channel[channel.id];
              const item = arr.forEach((channel) => {
                channel = channel.channel;
                let hasItem = null == set;
                if (!hasItem) {
                  hasItem = set.has(channel.type);
                }
                if (hasItem) {
                  closure_4 = closure_4 + 1;
                  const data = obj.data;
                  const obj = { key: channel.id, channel, sortingType: set, isHovered: closure_2 === channel.id, index: closure_4 };
                  data.push(obj);
                }
              });
              arr = items.push(obj);
            }
          });
          return items;
        }
      }(props.channels, sortingType, this.state.hovering);
      const tmp3 = closure_22;
      const tmp4 = closure_10;
      HermesBuiltin.arraySpread(order, 1);
      obj.order = items;
      ({ handleHoverChange: obj2.onHoverChange, renderActiveDivider: obj2.renderActiveDivider } = this);
      obj.contentContainerStyle = this.props.contentContainerStyle;
      obj.fontScale = this.props.fontScale;
      const items1 = [callback4(callback(closure_3[43]), obj), , ];
      let tmp7 = null == sortingType;
      if (tmp7) {
        obj = { guild: props.guild };
        tmp7 = callback4(closure_31, obj);
      }
      items1[1] = tmp7;
      items1[2] = callback4(GuildSettingsModalChannels(closure_3[44]).NavScrim, {});
      obj.children = items1;
      return tmp3(tmp4, obj);
    }
  };
  items[4] = {
    key: "handleChannelPress",
    value(arg0) {
      GuildSettingsModalChannels(closure_3[45]).open(arg0);
    }
  };
  items[5] = {
    key: "handleSortStop",
    value() {
      callback(closure_3[36]).stopReordering();
    }
  };
  return callback(GuildSettingsModalChannels, items);
}(importAllResult.PureComponent);
tmp14.contextType = arg1(dependencyMap[24]).ThemeContext;
const obj5 = { backgroundColor: importDefault(dependencyMap[17]).unsafe_rawColors.GREEN_360, opacity: 0.3 };
const result = arg1(dependencyMap[49]).fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalChannels.tsx");

export default function GuildSettingsModalChannelsConnected(arg0) {
  let contentContainerStyle;
  ({ guildId: closure_0, contentContainerStyle } = arg0);
  const importDefault = contentContainerStyle;
  let obj = arg1(dependencyMap[46]);
  const navigation = obj.useNavigation();
  const items = [closure_13];
  const stateFromStores = arg1(dependencyMap[25]).useStateFromStores(items, () => guild.getGuild(closure_0));
  const obj2 = arg1(dependencyMap[25]);
  const items1 = [closure_17];
  const stateFromStores1 = arg1(dependencyMap[25]).useStateFromStores(items1, () => closure_17.channels);
  const obj3 = arg1(dependencyMap[25]);
  const items2 = [closure_16];
  const stateFromStores2 = arg1(dependencyMap[25]).useStateFromStores(items2, () => {
    const currentUser = currentUser.getCurrentUser();
    contentContainerStyle(tmp8[47])(null != currentUser, "GuildSettingsModalChannelsConnected: currentUser cannot be undefined");
    return currentUser;
  });
  const obj4 = arg1(dependencyMap[25]);
  const items3 = [closure_17];
  const stateFromStores3 = arg1(dependencyMap[25]).useStateFromStores(items3, () => closure_17.channelList);
  const obj5 = arg1(dependencyMap[25]);
  const items4 = [closure_17];
  const stateFromStores4 = arg1(dependencyMap[25]).useStateFromStores(items4, () => closure_17.order);
  const obj6 = arg1(dependencyMap[25]);
  const items5 = [closure_17];
  const stateFromStores5 = arg1(dependencyMap[25]).useStateFromStores(items5, () => closure_17.sortingType);
  const importAll = stateFromStores5;
  const tmp8 = importDefault(dependencyMap[29])();
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
  arg1(dependencyMap[48]);
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
            tmp12 = callback4(tmp14, obj);
          }
        }
      }
    }
  }
  return tmp12;
};
