// Module ID: 16337
// Function ID: 127529
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 27, 16338, 1838, 8439, 653, 33, 4130, 689, 16339, 5087, 5788, 1212, 7001, 4126, 16213, 7512, 16340, 1456, 566, 5448, 2]
// Exports: default

// Module 16337 (_isNativeReflectConstruct)
import getActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import HeaderBackImage from "HeaderBackImage";
import getSystemLocale from "getSystemLocale";
import getInviteURL from "getInviteURL";
import get_ActivityIndicator from "get ActivityIndicator";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_createForOfIteratorHelperLoose";
import closure_12 from "_isNativeReflectConstruct";
import { GuildFeatures } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_14;
let closure_15;
let closure_16;
let closure_8;
let closure_9;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
({ View: closure_8, Image: closure_9 } = get_ActivityIndicator);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, justifyContent: "space-between", paddingTop: require("_createForOfIteratorHelperLoose").space.PX_32 };
_createForOfIteratorHelperLoose.wrapper = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.section = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12 };
let obj1 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.hints = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.center = { alignItems: "center", flexDirection: "column" };
_createForOfIteratorHelperLoose.image = { width: 135, height: 183, marginBottom: 27 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_18 = ((PureComponent) => {
  class GuildSettingsModalVanityURL {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = outer1_3(this, apply);
      items1 = [...items];
      obj = outer1_6(apply);
      tmp2 = outer1_5;
      if (outer1_19()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_6;
        constructResult = Reflect.construct(obj, items1, outer1_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      obj = { isEditing: false };
      vanityURLCode = tmp2Result.props.vanityURLCode;
      str = "";
      if (null != vanityURLCode) {
        str = vanityURLCode;
      }
      obj.vanityURLCode = str;
      tmp2Result.state = obj;
      tmp2Result.handleStartEditing = () => {
        outer2_1(outer2_2[14]).openModal(tmp2Result.props.guild.id, tmp2Result.state.vanityURLCode);
        tmp2Result.setState({ isEditing: true });
      };
      tmp2Result.handleChange = (vanityURLCode) => {
        tmp2Result.setState({ vanityURLCode });
      };
      tmp2Result.handleCancel = () => new Promise((arg0) => {
        outer3_1(outer3_2[14]).closeModal();
        outer1_0.setState({ isEditing: false });
        arg0(true);
      });
      tmp2Result.handleSave = () => {
        tmp2Result.setState({ isEditing: false });
        outer2_1(outer2_2[14]).changeVanityURL(tmp2Result.props.guild.id, tmp2Result.state.vanityURLCode);
      };
      return tmp2Result;
    }
  }
  callback2(GuildSettingsModalVanityURL, PureComponent);
  let obj = {
    key: "componentDidMount",
    value() {
      this.updateNavigator(undefined, this.state);
    }
  };
  let items = [obj, , , , ];
  obj = {
    key: "componentDidUpdate",
    value(vanityURLCode) {
      const self = this;
      if (this.props.vanityURLCode !== vanityURLCode.vanityURLCode) {
        const obj = {};
        vanityURLCode = self.props.vanityURLCode;
        let str = "";
        if (null != vanityURLCode) {
          str = vanityURLCode;
        }
        obj.vanityURLCode = str;
        self.setState(obj);
      }
      self.updateNavigator(vanityURLCode, arg1);
    }
  };
  items[1] = obj;
  obj = {
    key: "updateNavigator",
    value(submitting, isEditing) {
      let navigation;
      const self = this;
      ({ submitting, navigation } = this.props);
      isEditing = this.state.isEditing;
      let tmp = null != submitting;
      if (tmp) {
        tmp = submitting === submitting.submitting;
      }
      if (tmp) {
        tmp = isEditing === isEditing.isEditing;
      }
      if (!tmp) {
        let setOptionsResult = {};
        if (submitting) {
          let fn = () => null;
        } else if (isEditing) {
          fn = GuildSettingsModalVanityURL(outer1_2[15]).getHeaderConditionalBackButton(this.handleCancel);
          const obj2 = GuildSettingsModalVanityURL(outer1_2[15]);
        }
        setOptionsResult.headerLeft = fn;
        if (submitting) {
          let fn2 = () => outer2_14(GuildSettingsModalVanityURL(outer2_2[15]).HeaderSubmittingIndicator, {});
        } else {
          fn2 = isEditing ? (() => {
            const obj = { onPress: self.handleSave };
            const intl = GuildSettingsModalVanityURL(outer2_2[17]).intl;
            obj.text = intl.string(GuildSettingsModalVanityURL(outer2_2[17]).t["R3BPH+"]);
            return outer2_14(GuildSettingsModalVanityURL(outer2_2[16]).HeaderActionButton, obj);
          }) : (() => {
            const obj = { onPress: self.handleStartEditing };
            const intl = GuildSettingsModalVanityURL(outer2_2[17]).intl;
            obj.text = intl.string(GuildSettingsModalVanityURL(outer2_2[17]).t.bt75uw);
            return outer2_14(GuildSettingsModalVanityURL(outer2_2[16]).HeaderActionButton, obj);
          });
        }
        setOptionsResult.headerRight = fn2;
        setOptionsResult = navigation.setOptions(setOptionsResult);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "componentWillUnmount",
    value() {
      outer1_1(outer1_2[14]).closeModal();
    }
  };
  items[4] = {
    key: "render",
    value() {
      let errorDetails;
      let guild;
      let isEditing;
      let styles;
      let vanityURLCode;
      const self = this;
      ({ errorDetails, guild, styles } = this.props);
      ({ isEditing, vanityURLCode } = this.state);
      if (null != vanityURLCode) {
        if ("" !== vanityURLCode) {
          let obj = { variant: "text-sm/medium", color: "text-muted" };
          const intl6 = GuildSettingsModalVanityURL(outer1_2[17]).intl;
          obj = { url: outer1_1(outer1_2[18])(vanityURLCode) };
          obj.children = intl6.format(GuildSettingsModalVanityURL(outer1_2[17]).t.FcGpNU, obj);
          const tmp30 = outer1_1(outer1_2[18])(vanityURLCode);
          const tmp = outer1_14(GuildSettingsModalVanityURL(outer1_2[19]).Text, obj);
        }
      }
      if (isEditing) {
        let errorMessageFromErrorCode;
        if (null != errorDetails) {
          obj = GuildSettingsModalVanityURL(outer1_2[20]);
          errorMessageFromErrorCode = obj.getErrorMessageFromErrorCode(errorDetails.code);
        }
        let hasItem;
        if (null != guild) {
          const features = guild.features;
          hasItem = features.has(outer1_13.GUILD_WEB_PAGE_VANITY_URL);
        }
        let tmp12 = true === hasItem;
        if (tmp12) {
          let hasItem1;
          if (null != guild) {
            const features2 = guild.features;
            hasItem1 = features2.has(outer1_13.VANITY_URL);
          }
          tmp12 = true !== hasItem1;
        }
        const obj1 = {};
        const items = [styles.wrapper, self.props.contentContainerStyle];
        obj1.style = items;
        const obj2 = { style: styles.section };
        const obj3 = { isDisabled: !isEditing, value: vanityURLCode, onChange: self.handleChange, autoFocus: isEditing, errorMessage: errorMessageFromErrorCode };
        const items1 = [outer1_14(GuildSettingsModalVanityURL(outer1_2[21]).TextInput, obj3), ];
        const obj4 = { style: styles.hints };
        const obj5 = { variant: "text-sm/medium", color: "text-muted" };
        const intl2 = GuildSettingsModalVanityURL(outer1_2[17]).intl;
        obj5.children = intl2.string(GuildSettingsModalVanityURL(outer1_2[17]).t.IhWDcu);
        const items2 = [outer1_14(GuildSettingsModalVanityURL(outer1_2[19]).Text, obj5), , , , ];
        const obj6 = { variant: "text-sm/medium", color: "text-muted" };
        const intl3 = GuildSettingsModalVanityURL(outer1_2[17]).intl;
        obj6.children = intl3.string(GuildSettingsModalVanityURL(outer1_2[17]).t["1mRkFr"]);
        items2[1] = outer1_14(GuildSettingsModalVanityURL(outer1_2[19]).Text, obj6);
        const obj7 = { variant: "text-sm/medium", color: "text-muted" };
        const intl4 = GuildSettingsModalVanityURL(outer1_2[17]).intl;
        obj7.children = intl4.string(GuildSettingsModalVanityURL(outer1_2[17]).t["eH/HMz"]);
        items2[2] = outer1_14(GuildSettingsModalVanityURL(outer1_2[19]).Text, obj7);
        if (tmp12) {
          const obj8 = { variant: "text-sm/medium", color: "text-muted" };
          const intl5 = GuildSettingsModalVanityURL(outer1_2[17]).intl;
          obj8.children = intl5.string(GuildSettingsModalVanityURL(outer1_2[17]).t.o3kmm3);
          tmp12 = outer1_14(GuildSettingsModalVanityURL(outer1_2[19]).Text, obj8);
        }
        items2[3] = tmp12;
        items2[4] = tmp;
        obj4.children = items2;
        items1[1] = outer1_15(outer1_8, obj4);
        obj2.children = items1;
        const items3 = [outer1_15(outer1_8, obj2), ];
        const obj9 = { style: styles.center };
        const obj10 = { source: outer1_1(outer1_2[22]), style: styles.image, resizeMode: "contain" };
        obj9.children = outer1_14(outer1_9, obj10);
        items3[1] = outer1_14(outer1_8, obj9);
        obj1.children = items3;
        return outer1_15(outer1_8, obj1);
      } else if ("" !== vanityURLCode) {
        const _HermesInternal = HermesInternal;
        let combined = "discord.gg/" + vanityURLCode;
      } else {
        const intl = GuildSettingsModalVanityURL(outer1_2[17]).intl;
        combined = intl.string(GuildSettingsModalVanityURL(outer1_2[17]).t["FaXGO/"]);
      }
    }
  };
  return callback(GuildSettingsModalVanityURL, items);
})(importAllResult.PureComponent);
let obj2 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/guild_settings/server_monetization/boost_perks/native/GuildSettingsModalVanityURL.tsx");

export default function ConnectedGuildSettingsModalVanityURL(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(1456);
  const navigation = obj.useNavigation();
  const tmp = _createForOfIteratorHelperLoose();
  const items = [closure_11];
  const stateFromStores = guildId(566).useStateFromStores(items, () => outer1_11.getGuild(guildId));
  const obj2 = guildId(566);
  const items1 = [closure_12];
  const stateFromStores1 = guildId(566).useStateFromStores(items1, () => outer1_12.getProps().vanityURLCode);
  const obj3 = guildId(566);
  const items2 = [closure_10];
  const stateFromStoresObject = guildId(566).useStateFromStoresObject(items2, () => {
    const props = outer1_10.getProps();
    return { submitting: props.submitting, errorDetails: props.errorDetails };
  });
  let tmp8 = null;
  if (null != stateFromStores) {
    obj = {};
    obj = { guild: stateFromStores, vanityURLCode: stateFromStores1, submitting: tmp6, errorDetails: tmp7, navigation, styles: tmp, contentContainerStyle: guildId.contentContainerStyle };
    const items3 = [callback3(closure_18, obj), callback3(guildId(5448).NavScrim, {})];
    obj.children = items3;
    tmp8 = callback4(closure_16, obj);
  }
  return tmp8;
};
