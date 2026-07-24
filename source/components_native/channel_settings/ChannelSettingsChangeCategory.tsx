// Module ID: 15584
// Function ID: 120148
// Name: _isNativeReflectConstruct
// Dependencies: [57, 830, 6, 7, 15, 17, 18, 31, 1348, 5070, 1838, 3758, 3767, 1849, 653, 33, 4130, 689, 5071, 11485, 3763, 5048, 4470, 1212, 4320, 5165, 5501, 7636, 4541, 4126, 3842, 566, 1456, 44, 2]
// Exports: default

// Module 15584 (_isNativeReflectConstruct)
import _slicedToArray from "_slicedToArray";
import _toArray from "_toArray";
import _inherits from "_inherits";
import result from "result";
import closure_8 from "jsxProd";
import closure_9 from "_createForOfIteratorHelperLoose";
import getFlattenedChannelList from "getFlattenedChannelList";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_createForOfIteratorHelperLoose";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import closure_16 from "_isNativeReflectConstruct";
import { Permissions } from "ME";
import jsxProd from "invariant";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "initialize";

let closure_18;
let closure_19;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.screenContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.stackPadding = { paddingHorizontal: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_PADDING };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createLegacyClassComponentStyles(_createForOfIteratorHelperLoose);
let tmp4 = ((Component) => {
  class ChannelSettingsChangeCategory {
    constructor(arg0) {
      self = this;
      tmp = outer1_6(this, getGuildId);
      items = [];
      items[0] = Component;
      obj = outer1_9(getGuildId);
      tmp2 = outer1_8;
      if (outer1_22()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_9;
        constructResult = Reflect.construct(obj, items, outer1_9(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      channel = Component.channel;
      getGuildId = outer1_13.getGuild(channel.getGuildId());
      channel2 = Component.channel;
      obj = {};
      categories = outer1_12.getCategories(channel2.getGuildId());
      obj.category = outer1_11.getChannel(Component.channel.parent_id);
      _categories = categories._categories;
      mapped = _categories.map((channel) => channel.channel);
      obj.categories = mapped.filter((id) => {
        let canResult = "null" === id.id;
        if (canResult) {
          canResult = outer2_14.can(outer2_17.MANAGE_CHANNELS, closure_0);
        }
        if (!canResult) {
          let canResult1 = outer2_14.can(outer2_17.MANAGE_CHANNELS, id);
          if (canResult1) {
            canResult1 = outer2_14.can(outer2_17.VIEW_CHANNEL, id);
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
  callback2(ChannelSettingsChangeCategory, Component);
  let obj = {
    key: "shouldComponentUpdate",
    value() {
      return !this.state.submitting;
    }
  };
  let items = [obj, , , , ];
  obj = {
    key: "handleSetCategory",
    value(channelId) {
      const self = this;
      let closure_0 = channelId;
      function saveUpdates() {
        if (null == guildId) {
          const _Error = Error;
          const error = new Error("ChannelSettingsChangeCategory.handleSetCategory: Invalid guild_id");
          throw error;
        } else {
          const obj = outer2_1(outer2_3[21]);
          return outer2_1(outer2_3[21]).batchChannelUpdate(guildId, result).then(() => outer1_2.pop());
        }
      }
      const props = this.props;
      let channel = props.channel;
      const navigation = props.navigation;
      channel = outer1_11.getChannel(channelId);
      const guildId = channel.getGuildId();
      if (null == guildId) {
        const _Error2 = Error;
        let error = new Error("ChannelSettingsChangeCategory.handleSetCategory: Invalid guild_id");
        throw error;
      } else {
        let tmp3 = null;
        if ("null" !== channelId) {
          tmp3 = channelId;
        }
        closure_0 = tmp3;
        const categories = outer1_12.getCategories(channel.getGuildId());
        let arr = outer1_1(outer1_3[18])(categories._categories, categories, (channel) => channel.channel.type === channel.type);
        const found = arr.find((channel) => channel.channel.id === channel.id);
        if (null == found) {
          let _Error = Error;
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
          let _String = String;
          arr = obj[String(undefined, tmp3)].push(found);
          const arr3 = obj[String(undefined, tmp3)];
          const tmp32 = outer1_1(outer1_3[18])(categories._categories, obj);
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
          const result = ChannelSettingsChangeCategory(outer1_3[19]).calculatePositionDeltas(obj);
          if (result.length > 0) {
            const found1 = result.find((id) => {
              let flag = id.id === channel.id;
              if (flag) {
                id.parent_id = closure_0;
                let _inherits = id;
                flag = true;
              }
              return flag;
            });
          } else {
            obj = { id: channel.id, parent_id: tmp3 };
            arr = result.push(obj);
          }
          let obj1 = outer1_2(outer1_3[20]);
          let closure_8 = obj1.areChannelsLocked(channel, channel);
          const obj6 = ChannelSettingsChangeCategory(outer1_3[19]);
          let closure_9 = outer1_2(outer1_3[20]).areChannelsLocked(channel, outer1_11.getChannel(channel.parent_id));
          obj1 = { submitting: true };
          self.setState(obj1, () => {
            if (null != channel) {
              if (closure_9) {
                if (!closure_8) {
                  let obj = outer2_1(outer2_3[22]);
                  obj = {};
                  const intl = ChannelSettingsChangeCategory(outer2_3[23]).intl;
                  obj.title = intl.string(ChannelSettingsChangeCategory(outer2_3[23]).t.YWMtRe);
                  const intl2 = ChannelSettingsChangeCategory(outer2_3[23]).intl;
                  obj = {};
                  const obj4 = ChannelSettingsChangeCategory(outer2_3[24]);
                  obj.channelName = obj4.computeChannelName(channel, outer2_16, outer2_15, true);
                  obj.categoryName = ChannelSettingsChangeCategory(outer2_3[24]).computeChannelName(channel, outer2_16, outer2_15);
                  obj.body = intl2.format(ChannelSettingsChangeCategory(outer2_3[23]).t["iKW+jY"], obj);
                  const intl3 = ChannelSettingsChangeCategory(outer2_3[23]).intl;
                  obj.confirmText = intl3.string(ChannelSettingsChangeCategory(outer2_3[23]).t.eW8Gy4);
                  const intl4 = ChannelSettingsChangeCategory(outer2_3[23]).intl;
                  obj.cancelText = intl4.string(ChannelSettingsChangeCategory(outer2_3[23]).t.s4uM3b);
                  obj.onConfirm = function onConfirm() {
                    outer1_6.lock_permissions = true;
                    outer1_10();
                  };
                  obj.onCancel = saveUpdates;
                  obj.show(obj);
                  const obj5 = ChannelSettingsChangeCategory(outer2_3[24]);
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
      const self = this;
      let closure_1 = label;
      return outer1_18(ChannelSettingsChangeCategory(outer1_3[25]).TableRow, {
        label: label.name,
        onPress() {
          return self.handleSetCategory(label.id);
        }
      }, label.id);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "renderCategories",
    value() {
      const self = this;
      let arr = outer1_5(this.state.categories);
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
        tmp4 = outer1_18(ChannelSettingsChangeCategory(outer1_3[26]).TableRowGroup, obj);
      }
      return tmp4;
    }
  };
  items[4] = {
    key: "render",
    value() {
      let self = this;
      self = this;
      const category = this.state.category;
      const first = outer1_4(this.state.categories, 1)[0];
      const tmp2 = outer1_20(this.context);
      let obj = { style: tmp2.screenContainer };
      obj = { style: tmp2.stackPadding, spacing: outer1_1(outer1_3[17]).space.PX_24 };
      obj = { variant: "text-md/medium", color: "text-muted" };
      const intl = ChannelSettingsChangeCategory(outer1_3[23]).intl;
      const obj1 = {};
      if (null != category) {
        let name = category.name;
      } else {
        const intl2 = ChannelSettingsChangeCategory(outer1_3[23]).intl;
        name = intl2.string(ChannelSettingsChangeCategory(outer1_3[23]).t.GSfOoo);
      }
      obj1.categoryName = name;
      obj.children = intl.formatToPlainString(ChannelSettingsChangeCategory(outer1_3[23]).t.OqccVl, obj1);
      const items = [outer1_18(ChannelSettingsChangeCategory(outer1_3[29]).Text, obj), , ];
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
            obj2.children = outer1_18(ChannelSettingsChangeCategory(outer1_3[25]).TableRow, obj3, first.id);
            tmp7 = outer1_18(ChannelSettingsChangeCategory(outer1_3[26]).TableRowGroup, obj2);
          }
        }
      }
      items[1] = tmp7;
      items[2] = self.renderCategories();
      obj.children = items;
      obj.children = outer1_19(ChannelSettingsChangeCategory(outer1_3[28]).Stack, obj);
      return outer1_18(ChannelSettingsChangeCategory(outer1_3[27]).Form, obj);
    }
  };
  return callback(ChannelSettingsChangeCategory, items);
})(importAllResult.Component);
let closure_21 = tmp4;
tmp4.contextType = require("ManaContext").ThemeContext;
let obj1 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_PADDING };
let result = require("_classCallCheck").fileFinishedImporting("components_native/channel_settings/ChannelSettingsChangeCategory.tsx");

export default function ConnectedChannelSettingsChangeCategory(channelId) {
  channelId = channelId.channelId;
  const items = [_isNativeReflectConstruct];
  const channel = channelId(566).useStateFromStores(items, () => outer1_11.getChannel(channelId));
  const obj = channelId(566);
  const navigation = channelId(1456).useNavigation();
  importDefault(44)(null != channel, "ConnectedChannelSettingsChangeCategory: channel cannot be undefined");
  return callback3(closure_21, { channel, navigation });
};
