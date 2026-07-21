// Module ID: 16204
// Function ID: 125253
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: default

// Module 16204 (_isNativeReflectConstruct)
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
const importAllResult = importAll(dependencyMap[5]);
({ View: closure_8, Image: closure_9 } = arg1(dependencyMap[6]));
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
const GuildFeatures = arg1(dependencyMap[10]).GuildFeatures;
const tmp3 = arg1(dependencyMap[6]);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = arg1(dependencyMap[11]));
let obj = arg1(dependencyMap[12]);
obj = {};
obj = { markAsSpoilerTitle: 0.129, keyboardAppearance: 1, paddingTop: importDefault(dependencyMap[13]).space.PX_32 };
obj.wrapper = obj;
const tmp4 = arg1(dependencyMap[11]);
obj.section = { paddingHorizontal: importDefault(dependencyMap[13]).space.PX_12 };
const obj1 = { paddingHorizontal: importDefault(dependencyMap[13]).space.PX_12 };
obj.hints = { marginTop: importDefault(dependencyMap[13]).space.PX_8, gap: importDefault(dependencyMap[13]).space.PX_4 };
obj.center = {};
obj.image = {};
let closure_17 = obj.createStyles(obj);
let closure_18 = (PureComponent) => {
  class GuildSettingsModalVanityURL {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, GuildSettingsModalVanityURL);
      items1 = [...items];
      obj = closure_6(GuildSettingsModalVanityURL);
      tmp2 = closure_5;
      if (closure_19()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      GuildSettingsModalVanityURL = tmp2Result;
      obj = { isEditing: false };
      vanityURLCode = tmp2Result.props.vanityURLCode;
      str = "";
      if (null != vanityURLCode) {
        str = vanityURLCode;
      }
      obj.vanityURLCode = str;
      tmp2Result.state = obj;
      tmp2Result.handleStartEditing = () => {
        callback(closure_2[14]).openModal(tmp2Result.props.guild.id, tmp2Result.state.vanityURLCode);
        tmp2Result.setState({ isEditing: true });
      };
      tmp2Result.handleChange = (vanityURLCode) => {
        tmp2Result.setState({ vanityURLCode });
      };
      tmp2Result.handleCancel = () => new Promise((arg0) => {
        callback(closure_2[14]).closeModal();
        state.setState({ isEditing: false });
        arg0(true);
      });
      tmp2Result.handleSave = () => {
        tmp2Result.setState({ isEditing: false });
        callback(closure_2[14]).changeVanityURL(tmp2Result.props.guild.id, tmp2Result.state.vanityURLCode);
      };
      return tmp2Result;
    }
  }
  const arg1 = GuildSettingsModalVanityURL;
  callback2(GuildSettingsModalVanityURL, PureComponent);
  let obj = {
    key: "componentDidMount",
    value() {
      this.updateNavigator(undefined, this.state);
    }
  };
  const items = [obj, , , , ];
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
      const GuildSettingsModalVanityURL = this;
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
          fn = GuildSettingsModalVanityURL(closure_2[15]).getHeaderConditionalBackButton(this.handleCancel);
          const obj2 = GuildSettingsModalVanityURL(closure_2[15]);
        }
        setOptionsResult.headerLeft = fn;
        if (submitting) {
          let fn2 = () => callback(self(closure_2[15]).HeaderSubmittingIndicator, {});
        } else {
          fn2 = isEditing ? () => {
            const obj = { onPress: self.handleSave };
            const intl = self(closure_2[17]).intl;
            obj.text = intl.string(self(closure_2[17]).t.R3BPH+);
            return callback(self(closure_2[16]).HeaderActionButton, obj);
          } : () => {
            const obj = { onPress: self.handleStartEditing };
            const intl = self(closure_2[17]).intl;
            obj.text = intl.string(self(closure_2[17]).t.bt75uw);
            return callback(self(closure_2[16]).HeaderActionButton, obj);
          };
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
      callback(closure_2[14]).closeModal();
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
          let obj = {};
          const intl6 = GuildSettingsModalVanityURL(closure_2[17]).intl;
          obj = { url: callback(closure_2[18])(vanityURLCode) };
          obj.children = intl6.format(GuildSettingsModalVanityURL(closure_2[17]).t.FcGpNU, obj);
          const tmp30 = callback(closure_2[18])(vanityURLCode);
          const tmp = callback4(GuildSettingsModalVanityURL(closure_2[19]).Text, obj);
        }
      }
      if (isEditing) {
        let errorMessageFromErrorCode;
        if (null != errorDetails) {
          obj = GuildSettingsModalVanityURL(closure_2[20]);
          errorMessageFromErrorCode = obj.getErrorMessageFromErrorCode(errorDetails.code);
        }
        let hasItem;
        if (null != guild) {
          const features = guild.features;
          hasItem = features.has(constants.GUILD_WEB_PAGE_VANITY_URL);
        }
        let tmp12 = true === hasItem;
        if (tmp12) {
          let hasItem1;
          if (null != guild) {
            const features2 = guild.features;
            hasItem1 = features2.has(constants.VANITY_URL);
          }
          tmp12 = true !== hasItem1;
        }
        const obj1 = {};
        const items = [styles.wrapper, self.props.contentContainerStyle];
        obj1.style = items;
        const obj2 = { style: styles.section };
        const obj3 = { isDisabled: !isEditing, value: vanityURLCode, onChange: self.handleChange, autoFocus: isEditing, errorMessage: errorMessageFromErrorCode };
        const items1 = [callback4(GuildSettingsModalVanityURL(closure_2[21]).TextInput, obj3), ];
        const obj4 = { style: styles.hints };
        const obj5 = {};
        const intl2 = GuildSettingsModalVanityURL(closure_2[17]).intl;
        obj5.children = intl2.string(GuildSettingsModalVanityURL(closure_2[17]).t.IhWDcu);
        const items2 = [callback4(GuildSettingsModalVanityURL(closure_2[19]).Text, obj5), , , , ];
        const obj6 = {};
        const intl3 = GuildSettingsModalVanityURL(closure_2[17]).intl;
        obj6.children = intl3.string(GuildSettingsModalVanityURL(closure_2[17]).t.1mRkFr);
        items2[1] = callback4(GuildSettingsModalVanityURL(closure_2[19]).Text, obj6);
        const obj7 = {};
        const intl4 = GuildSettingsModalVanityURL(closure_2[17]).intl;
        obj7.children = intl4.string(GuildSettingsModalVanityURL(closure_2[17]).t.eH/HMz);
        items2[2] = callback4(GuildSettingsModalVanityURL(closure_2[19]).Text, obj7);
        if (tmp12) {
          const obj8 = {};
          const intl5 = GuildSettingsModalVanityURL(closure_2[17]).intl;
          obj8.children = intl5.string(GuildSettingsModalVanityURL(closure_2[17]).t.o3kmm3);
          tmp12 = callback4(GuildSettingsModalVanityURL(closure_2[19]).Text, obj8);
        }
        items2[3] = tmp12;
        items2[4] = tmp;
        obj4.children = items2;
        items1[1] = closure_15(closure_8, obj4);
        obj2.children = items1;
        const items3 = [closure_15(closure_8, obj2), ];
        const obj9 = { style: styles.center };
        const obj10 = { source: callback(closure_2[22]), style: styles.image, resizeMode: "contain" };
        obj9.children = callback4(closure_9, obj10);
        items3[1] = callback4(closure_8, obj9);
        obj1.children = items3;
        return closure_15(closure_8, obj1);
      } else if ("" !== vanityURLCode) {
        const _HermesInternal = HermesInternal;
        let combined = "discord.gg/" + vanityURLCode;
      } else {
        const intl = GuildSettingsModalVanityURL(closure_2[17]).intl;
        combined = intl.string(GuildSettingsModalVanityURL(closure_2[17]).t.FaXGO/);
      }
    }
  };
  return callback(GuildSettingsModalVanityURL, items);
}(importAllResult.PureComponent);
const obj2 = { marginTop: importDefault(dependencyMap[13]).space.PX_8, gap: importDefault(dependencyMap[13]).space.PX_4 };
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/guild_settings/server_monetization/boost_perks/native/GuildSettingsModalVanityURL.tsx");

export default function ConnectedGuildSettingsModalVanityURL(guildId) {
  const arg1 = guildId.guildId;
  let obj = arg1(dependencyMap[23]);
  const navigation = obj.useNavigation();
  const tmp = callback5();
  const items = [closure_11];
  const stateFromStores = arg1(dependencyMap[24]).useStateFromStores(items, () => guild.getGuild(guildId));
  const obj2 = arg1(dependencyMap[24]);
  const items1 = [closure_12];
  const stateFromStores1 = arg1(dependencyMap[24]).useStateFromStores(items1, () => props2.getProps().vanityURLCode);
  const obj3 = arg1(dependencyMap[24]);
  const items2 = [closure_10];
  const stateFromStoresObject = arg1(dependencyMap[24]).useStateFromStoresObject(items2, () => {
    const props = props.getProps();
    return { submitting: props.submitting, errorDetails: props.errorDetails };
  });
  let tmp8 = null;
  if (null != stateFromStores) {
    obj = {};
    obj = { guild: stateFromStores, vanityURLCode: stateFromStores1, submitting: tmp6, errorDetails: tmp7, navigation, styles: tmp, contentContainerStyle: guildId.contentContainerStyle };
    const items3 = [callback3(closure_18, obj), callback3(arg1(dependencyMap[25]).NavScrim, {})];
    obj.children = items3;
    tmp8 = callback4(closure_16, obj);
  }
  return tmp8;
};
