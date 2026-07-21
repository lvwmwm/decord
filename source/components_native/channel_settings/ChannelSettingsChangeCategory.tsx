// Module ID: 15412
// Function ID: 117609
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: default

// Module 15412 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
let closure_14 = importDefault(dependencyMap[11]);
let closure_15 = importDefault(dependencyMap[12]);
let closure_16 = importDefault(dependencyMap[13]);
const Permissions = arg1(dependencyMap[14]).Permissions;
const importAllResult = importAll(dependencyMap[7]);
({ jsx: closure_18, jsxs: closure_19 } = arg1(dependencyMap[15]));
let obj = arg1(dependencyMap[16]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[17]).colors.BACKGROUND_BASE_LOWER, paddingTop: importDefault(dependencyMap[17]).space.PX_16 };
obj.screenContainer = obj;
const tmp3 = arg1(dependencyMap[15]);
obj.stackPadding = { paddingHorizontal: importDefault(dependencyMap[17]).modules.mobile.TABLE_ROW_PADDING };
let closure_20 = obj.createLegacyClassComponentStyles(obj);
const tmp4 = (Component) => {
  class ChannelSettingsChangeCategory {
    constructor(arg0) {
      self = this;
      tmp = closure_6(this, ChannelSettingsChangeCategory);
      items = [];
      items[0] = Component;
      obj = closure_9(ChannelSettingsChangeCategory);
      tmp2 = closure_8;
      if (closure_22()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_9;
        constructResult = Reflect.construct(obj, items, closure_9(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      channel = Component.channel;
      ChannelSettingsChangeCategory = closure_13.getGuild(channel.getGuildId());
      channel2 = Component.channel;
      obj = {};
      categories = closure_12.getCategories(channel2.getGuildId());
      obj.category = closure_11.getChannel(Component.channel.parent_id);
      _categories = categories._categories;
      mapped = _categories.map((channel) => channel.channel);
      obj.categories = mapped.filter((id) => {
        let canResult = "null" === id.id;
        if (canResult) {
          canResult = closure_14.can(constants.MANAGE_CHANNELS, closure_0);
        }
        if (!canResult) {
          let canResult1 = closure_14.can(constants.MANAGE_CHANNELS, id);
          if (canResult1) {
            canResult1 = closure_14.can(constants.VIEW_CHANNEL, id);
          }
          canResult = canResult1;
        }
        return canResult;
      });
      obj.submitting = false;
      tmp2Result.state = obj;
      return tmp2Result;
    }
  }
  const arg1 = ChannelSettingsChangeCategory;
  callback2(ChannelSettingsChangeCategory, Component);
  let obj = {
    key: "shouldComponentUpdate",
    value() {
      return !this.state.submitting;
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "handleSetCategory",
    value(channelId) {
      const self = this;
      let ChannelSettingsChangeCategory = channelId;
      function saveUpdates() {
        if (null == guildId) {
          const _Error = Error;
          const error = new Error("ChannelSettingsChangeCategory.handleSetCategory: Invalid guild_id");
          throw error;
        } else {
          const obj = channel(channel[21]);
          return channel(channel[21]).batchChannelUpdate(guildId, result).then(() => arr.pop());
        }
      }
      const props = this.props;
      let channel = props.channel;
      const navigation = props.navigation;
      channel = store.getChannel(channelId);
      const guildId = channel.getGuildId();
      if (null == guildId) {
        const _Error2 = Error;
        const error = new Error("ChannelSettingsChangeCategory.handleSetCategory: Invalid guild_id");
        throw error;
      } else {
        let tmp3 = null;
        if ("null" !== channelId) {
          tmp3 = channelId;
        }
        ChannelSettingsChangeCategory = tmp3;
        const categories = store2.getCategories(channel.getGuildId());
        let arr = channel(channel[18])(categories._categories, categories, (channel) => channel.channel.type === channel.type);
        const found = arr.find((channel) => channel.channel.id === channel.id);
        if (null == found) {
          const _Error = Error;
          const error1 = new Error("ChannelSettingsChangeCategory.handleSetCategory: Could not find original channel.");
          throw error1;
        } else {
          let obj = {};
          const _categories = categories._categories;
          const item = _categories.forEach((channel) => {
            const items = [];
            obj[channel.channel.id] = items;
            return items;
          });
          const item1 = arr.forEach((channel) => {
            let tmp = channel.channel.id !== channel.id;
            if (tmp) {
              const _String = String;
              let arr;
              arr = obj[String(undefined, channel.channel.parent_id)];
              if (null != arr) {
                arr = arr.push(channel);
              }
              tmp = arr;
            }
            return tmp;
          });
          const _String = String;
          arr = obj[String(undefined, tmp3)].push(found);
          const arr3 = obj[String(undefined, tmp3)];
          const tmp32 = channel(channel[18])(categories._categories, obj);
          obj = {
            oldOrdering: arr,
            newOrdering: tmp32,
            idGetter(channel) {
                  return channel.channel.id;
                },
            existingPositionGetter(channel) {
                  return channel.channel.position;
                }
          };
          const result = ChannelSettingsChangeCategory(channel[19]).calculatePositionDeltas(obj);
          if (result.length > 0) {
            const found1 = result.find((id) => {
              let flag = id.id === channel.id;
              if (flag) {
                id.parent_id = tmp3;
                flag = true;
              }
              return flag;
            });
          } else {
            obj = { id: channel.id, parent_id: tmp3 };
            arr = result.push(obj);
          }
          let obj1 = navigation(channel[20]);
          let closure_8 = obj1.areChannelsLocked(channel, channel);
          const obj6 = ChannelSettingsChangeCategory(channel[19]);
          let closure_9 = navigation(channel[20]).areChannelsLocked(channel, store.getChannel(channel.parent_id));
          obj1 = { submitting: true };
          self.setState(obj1, () => {
            if (null != channel) {
              if (closure_9) {
                if (!closure_8) {
                  let obj = channel(channel[22]);
                  obj = {};
                  const intl = tmp3(channel[23]).intl;
                  obj.title = intl.string(channel(channel[23]).t.YWMtRe);
                  const intl2 = tmp3(channel[23]).intl;
                  obj = {};
                  const obj4 = channel(channel[24]);
                  obj.channelName = obj4.computeChannelName(channel, closure_16, closure_15, true);
                  obj.categoryName = channel(channel[24]).computeChannelName(channel, closure_16, closure_15);
                  obj.body = intl2.format(channel(channel[23]).t.iKW+jY, obj);
                  const intl3 = tmp3(channel[23]).intl;
                  obj.confirmText = intl3.string(channel(channel[23]).t.eW8Gy4);
                  const intl4 = tmp3(channel[23]).intl;
                  obj.cancelText = intl4.string(channel(channel[23]).t.s4uM3b);
                  obj.onConfirm = function onConfirm() {
                    closure_6.lock_permissions = true;
                    callback();
                  };
                  obj.onCancel = saveUpdates;
                  obj.show(obj);
                  const obj5 = channel(channel[24]);
                }
              }
            }
            saveUpdates();
          });
        }
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "renderCategory",
    value(label) {
      const ChannelSettingsChangeCategory = this;
      return callback5(ChannelSettingsChangeCategory(closure_3[25]).TableRow, {
        label: label.name,
        onPress() {
          return self.handleSetCategory(arg0.id);
        }
      }, label.id);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "renderCategories",
    value() {
      const self = this;
      let arr = callback2(this.state.categories);
      const substr = arr.slice(0);
      const category = this.state.category;
      if (null != category) {
        substr.splice(substr.indexOf(category), 1);
      }
      let tmp2 = null != substr[0];
      if (tmp2) {
        tmp2 = "null" === substr[0].id;
      }
      if (tmp2) {
        arr = substr.shift();
      }
      const mapped = substr.map(self.renderCategory, self);
      let tmp4 = null;
      if (mapped.length > 0) {
        const obj = { hasIcons: false, children: mapped };
        tmp4 = callback5(ChannelSettingsChangeCategory(closure_3[26]).TableRowGroup, obj);
      }
      return tmp4;
    }
  };
  items[4] = {
    key: "render",
    value() {
      const self = this;
      const ChannelSettingsChangeCategory = this;
      const category = this.state.category;
      const first = callback(this.state.categories, 1)[0];
      const tmp2 = callback6(this.context);
      let obj = { style: tmp2.screenContainer };
      obj = { style: tmp2.stackPadding, spacing: first(closure_3[17]).space.PX_24 };
      obj = {};
      const intl = ChannelSettingsChangeCategory(closure_3[23]).intl;
      const obj1 = {};
      if (null != category) {
        let name = category.name;
      } else {
        const intl2 = ChannelSettingsChangeCategory(closure_3[23]).intl;
        name = intl2.string(ChannelSettingsChangeCategory(closure_3[23]).t.GSfOoo);
      }
      obj1.categoryName = name;
      obj.children = intl.formatToPlainString(ChannelSettingsChangeCategory(closure_3[23]).t.OqccVl, obj1);
      const items = [callback5(ChannelSettingsChangeCategory(closure_3[29]).Text, obj), , ];
      let tmp7 = null;
      if (null != first) {
        tmp7 = null;
        if ("null" === first.id) {
          tmp7 = null;
          if (null != category) {
            const obj2 = { hasIcons: false };
            const obj3 = {
              label: first.name,
              onPress() {
                      return self.handleSetCategory(first.id);
                    }
            };
            obj2.children = callback5(ChannelSettingsChangeCategory(closure_3[25]).TableRow, obj3, first.id);
            tmp7 = callback5(ChannelSettingsChangeCategory(closure_3[26]).TableRowGroup, obj2);
          }
        }
      }
      items[1] = tmp7;
      items[2] = self.renderCategories();
      obj.children = items;
      obj.children = closure_19(ChannelSettingsChangeCategory(closure_3[28]).Stack, obj);
      return callback5(ChannelSettingsChangeCategory(closure_3[27]).Form, obj);
    }
  };
  return callback(ChannelSettingsChangeCategory, items);
}(importAllResult.Component);
tmp4.contextType = arg1(dependencyMap[30]).ThemeContext;
const obj1 = { paddingHorizontal: importDefault(dependencyMap[17]).modules.mobile.TABLE_ROW_PADDING };
const result = arg1(dependencyMap[34]).fileFinishedImporting("components_native/channel_settings/ChannelSettingsChangeCategory.tsx");

export default function ConnectedChannelSettingsChangeCategory(channelId) {
  const arg1 = channelId.channelId;
  const items = [closure_11];
  const channel = arg1(dependencyMap[31]).useStateFromStores(items, () => channel.getChannel(channelId));
  const obj = arg1(dependencyMap[31]);
  const navigation = arg1(dependencyMap[32]).useNavigation();
  importDefault(dependencyMap[33])(null != channel, "ConnectedChannelSettingsChangeCategory: channel cannot be undefined");
  return callback3(tmp4, { channel, navigation });
};
