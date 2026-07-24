// Module ID: 15585
// Function ID: 120176
// Name: _isNativeReflectConstruct
// Dependencies: [830, 6, 7, 15, 17, 18, 31, 1348, 15544, 33, 4130, 689, 1212, 7685, 7653, 7654, 7636, 3842, 566, 44, 2]
// Exports: default

// Module 15585 (_isNativeReflectConstruct)
import _toArray from "_toArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import context from "context";
import ManaContext from "ManaContext";
import initialize from "initialize";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.form = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createLegacyClassComponentStyles(_createForOfIteratorHelperLoose);
const tmp3 = ((PureComponent) => {
  class ChannelSettingsChangeRTCRegion {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = outer1_4(this, apply);
      items1 = [...items];
      obj = outer1_7(apply);
      tmp2 = outer1_6;
      if (outer1_14()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_7;
        constructResult = Reflect.construct(obj, items1, outer1_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      tmp2Result.state = (() => {
        let obj = { regions: [], submitting: false, selectedRegionId: "AUTOMATIC_RTC_REGION" };
        let str = "AUTOMATIC_RTC_REGION";
        const channel = tmp2Result.props.channel;
        const regions = outer2_10.getRegions(channel.getGuildId());
        obj = { id: "AUTOMATIC_RTC_REGION", name: null, sample_hostname: "", sample_port: 0, vip: false, deprecated: false, optimal: false, hidden: false };
        const intl = ChannelSettingsChangeRTCRegion(outer2_2[12]).intl;
        obj.name = intl.string(ChannelSettingsChangeRTCRegion(outer2_2[12]).t.JEmsap);
        const items = [obj];
        if (null != regions) {
          const push = items.push;
          const items1 = [];
          HermesBuiltin.arraySpread(regions.filter((deprecated) => !deprecated.deprecated && !deprecated.hidden), 0);
          HermesBuiltin.apply(items1, items);
          const found = regions.find((id) => id.id === outer1_0.props.channel.rtcRegion);
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
      })();
      return tmp2Result;
    }
  }
  callback2(ChannelSettingsChangeRTCRegion, PureComponent);
  let obj = {
    key: "handleSetRegion",
    value(arg0) {
      let tmp = arg0;
      let self = this;
      self = this;
      let c1 = arg0;
      let str = "AUTOMATIC_RTC_REGION";
      if (null != arg0) {
        str = tmp;
      }
      this.state.selectedRegionId = str;
      if (tmp === "AUTOMATIC_RTC_REGION") {
        c1 = null;
        tmp = null;
      }
      let obj = outer1_1(outer1_2[13]);
      obj = { rtcRegion: tmp };
      obj.updateChannel(obj);
      self.setState({ submitting: true }, () => {
        let obj = outer2_1(outer2_2[13]);
        obj = { rtcRegion: c1 };
        obj.saveChannel(self.props.channel.id, obj);
      });
    }
  };
  let items = [obj, , , ];
  obj = {
    key: "renderRegion",
    value(label) {
      return outer1_11(ChannelSettingsChangeRTCRegion(outer1_2[14]).TableRadioRow, { label: label.name, value: label.id }, label.id);
    }
  };
  items[1] = obj;
  obj = {
    key: "renderRegions",
    value() {
      const self = this;
      const substr = outer1_3(this.state.regions).slice(0);
      const mapped = substr.map(this.renderRegion, this);
      return outer1_11(ChannelSettingsChangeRTCRegion(outer1_2[15]).TableRadioGroup, {
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
      const obj = { style: outer1_12(this.context).form, children: this.renderRegions() };
      return outer1_11(ChannelSettingsChangeRTCRegion(outer1_2[16]).Form, obj);
    }
  };
  return callback(ChannelSettingsChangeRTCRegion, items);
})(require("result").PureComponent);
let closure_13 = tmp3;
tmp3.contextType = require("ManaContext").ThemeContext;
let result = require("_defineProperties").fileFinishedImporting("components_native/channel_settings/ChannelSettingsChangeRTCRegion.tsx");

export default function ConnectedChannelSettingsChangeRTCRegion(channelId) {
  channelId = channelId.channelId;
  const items = [closure_9];
  const channel = channelId(566).useStateFromStores(items, () => outer1_9.getChannel(channelId));
  importDefault(44)(null != channel, "ConnectedChannelSettingsChangeRTCRegion: channel cannot be undefined");
  return <closure_13 channel={channel} />;
};
