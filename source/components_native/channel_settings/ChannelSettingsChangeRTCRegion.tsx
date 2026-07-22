// Module ID: 15421
// Function ID: 117680
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: default

// Module 15421 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[7]);
let closure_10 = importDefault(dependencyMap[8]);
const jsx = arg1(dependencyMap[9]).jsx;
let obj = arg1(dependencyMap[10]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_BASE_LOWER, paddingHorizontal: importDefault(dependencyMap[11]).space.PX_16 };
obj.form = obj;
let closure_12 = obj.createLegacyClassComponentStyles(obj);
const tmp3 = (PureComponent) => {
  class ChannelSettingsChangeRTCRegion {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_4(this, ChannelSettingsChangeRTCRegion);
      items1 = [...items];
      obj = closure_7(ChannelSettingsChangeRTCRegion);
      tmp2 = closure_6;
      if (closure_14()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_7;
        constructResult = Reflect.construct(obj, items1, closure_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      ChannelSettingsChangeRTCRegion = tmp2Result;
      tmp2Result.state = () => {
        let obj = { flexDirection: "png", alignItems: true, alignSelf: "/assets/images/native", regions: [] };
        let str = "AUTOMATIC_RTC_REGION";
        const channel = tmp2Result.props.channel;
        const regions = regions.getRegions(channel.getGuildId());
        obj = { 1634794833: "Text", 9223372036854775807: "set", 9223372036854775807: "ind", 9223372036854775807: "Array", 0: "isArray", 9223372036854775807: "LIGHT", 0: "justifyContent", 0: "np" };
        const intl = tmp2Result(closure_2[12]).intl;
        obj.name = intl.string(tmp2Result(closure_2[12]).t.JEmsap);
        const items = [obj];
        if (null != regions) {
          const push = items.push;
          const items1 = [];
          HermesBuiltin.arraySpread(regions.filter((deprecated) => !deprecated.deprecated && !deprecated.hidden), 0);
          HermesBuiltin.apply(items1, items);
          const found = regions.find((id) => id.id === props.props.channel.rtcRegion);
          let id;
          if (null != found) {
            id = found.id;
          }
          if (null != id) {
            str = id;
          }
          obj.selectedRegionId = str;
        }
        obj.regions = items;
        return obj;
      }();
      return tmp2Result;
    }
  }
  const arg1 = ChannelSettingsChangeRTCRegion;
  callback2(ChannelSettingsChangeRTCRegion, PureComponent);
  let obj = {
    key: "handleSetRegion",
    value(arg0) {
      let tmp = arg0;
      const self = this;
      const ChannelSettingsChangeRTCRegion = this;
      let callback = arg0;
      let str = "AUTOMATIC_RTC_REGION";
      if (null != arg0) {
        str = tmp;
      }
      this.state.selectedRegionId = str;
      if (tmp === "AUTOMATIC_RTC_REGION") {
        callback = null;
        tmp = null;
      }
      let obj = callback(closure_2[13]);
      obj = { rtcRegion: tmp };
      obj.updateChannel(obj);
      self.setState({ submitting: true }, () => {
        let obj = _null(closure_2[13]);
        obj = { rtcRegion: _null };
        obj.saveChannel(self.props.channel.id, obj);
      });
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "renderRegion",
    value(label) {
      return callback5(ChannelSettingsChangeRTCRegion(closure_2[14]).TableRadioRow, { label: label.name, value: label.id }, label.id);
    }
  };
  items[1] = obj;
  obj = {
    key: "renderRegions",
    value() {
      const ChannelSettingsChangeRTCRegion = this;
      const substr = callback2(this.state.regions).slice(0);
      const mapped = substr.map(this.renderRegion, this);
      return callback5(ChannelSettingsChangeRTCRegion(closure_2[15]).TableRadioGroup, {
        defaultValue: this.state.selectedRegionId,
        onChange(arg0) {
          return self.handleSetRegion(arg0);
        },
        hasIcons: false,
        children: mapped
      });
    }
  };
  items[2] = obj;
  items[3] = {
    key: "render",
    value() {
      const obj = { style: callback6(this.context).form, children: this.renderRegions() };
      return callback5(ChannelSettingsChangeRTCRegion(closure_2[16]).Form, obj);
    }
  };
  return callback(ChannelSettingsChangeRTCRegion, items);
}(importAll(dependencyMap[6]).PureComponent);
tmp3.contextType = arg1(dependencyMap[17]).ThemeContext;
const importAllResult = importAll(dependencyMap[6]);
const result = arg1(dependencyMap[20]).fileFinishedImporting("components_native/channel_settings/ChannelSettingsChangeRTCRegion.tsx");

export default function ConnectedChannelSettingsChangeRTCRegion(channelId) {
  const arg1 = channelId.channelId;
  const items = [closure_9];
  const channel = arg1(dependencyMap[18]).useStateFromStores(items, () => channel.getChannel(channelId));
  importDefault(dependencyMap[19])(null != channel, "ConnectedChannelSettingsChangeRTCRegion: channel cannot be undefined");
  return <tmp3 channel={channel} />;
};
