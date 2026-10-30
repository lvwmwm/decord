// Module ID: 19748
// Function ID: 19749
// Name: GuildSettingsModalVanityURL
// Dependencies: [19, 17, 19749, 4880, 9056, 1072, 21, 5009, 575, 6992, 7552, 1114, 19750, 9110, 5619, 19591, 7076, 5712, 19751, 1498, 504, 5601, 2]
// Exports: default

// Module 19748 (GuildSettingsModalVanityURL)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl7 from "intl" /* 1114 */;
import Text_Text from "Text/Text" /* 5619 */;
import FastImageDefault from "FastImage" /* 5712 */;
import TextInput_TextInput from "TextInput/TextInput" /* 7076 */;
import HeaderActionButton2 from "HeaderActionButton" /* 7552 */;
import getInviteURLDefault from "getInviteURL" /* 9110 */;
import GuildSettingsVanityURLUtils from "GuildSettingsVanityURLUtils" /* 19591 */;
import ChangeVanityURLActionCreatorsDefault from "ChangeVanityURLActionCreators" /* 19750 */;
import AssetRegistryDefault from "AssetRegistry" /* 19751 */;
import react from "react" /* 19 */;
import ChangeVanityURLModalStore from "ChangeVanityURLModalStore" /* 19749 */;
import GuildStore from "GuildStore" /* 4880 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9056 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let navigation, props;

let c10;
let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
const GuildFeatures = Constants.GuildFeatures;
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrapper: obj2, section: obj3, hints: obj4, center: { alignItems: "center", flexDirection: "column" }, image: { width: 135, height: 183, marginBottom: 27 } };
obj2 = { flex: 1, justifyContent: "space-between", paddingTop: nativeDefault.space.PX_32 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_12 };
obj4 = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_4 };
let closure_11 = createStyles(obj);
const PureComponent = react.PureComponent;
class GuildSettingsModalVanityURL extends PureComponent {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    let str = applyArgumentsResult.props.vanityURLCode;
    if (str == null) {
      str = "";
    }
    applyArgumentsResult.state = { isEditing: false, vanityURLCode: str };
    applyArgumentsResult.handleStartEditing = function handleStartEditing() {
      const obj = ChangeVanityURLActionCreatorsDefault;
      obj.openModal(require.props.guild.id, require.state.vanityURLCode);
      require.setState({ isEditing: true });
    };
    applyArgumentsResult.handleChange = function handleChange(vanityURLCode) {
      const obj = { vanityURLCode };
      require.setState(obj);
    };
    applyArgumentsResult.handleCancel = function handleCancel() {
      let state;
      const promise = new Promise((fn) => {
        const obj = ChangeVanityURLActionCreatorsDefault;
        obj.closeModal();
        state.setState({ isEditing: false });
        fn(true);
      });
      return promise;
    };
    applyArgumentsResult.handleSave = function handleSave() {
      require.setState({ isEditing: false });
      const obj = ChangeVanityURLActionCreatorsDefault;
      obj.changeVanityURL(require.props.guild.id, require.state.vanityURLCode);
    };
    return applyArgumentsResult;
  }
  componentDidMount() {
    this.updateNavigator(undefined, this.state);
  }
  componentDidUpdate(vanityURLCode, arg1) {
    const self = this;
    if (this.props.vanityURLCode !== vanityURLCode.vanityURLCode) {
      let str = self.props.vanityURLCode;
      const setState = self.setState;
      if (str == null) {
        str = "";
      }
      const obj = { vanityURLCode: str };
      setState(obj);
    }
    self.updateNavigator(vanityURLCode, arg1);
  }
  updateNavigator(submitting, isEditing) {
    let fn2;
    const self = this;
    ({ submitting, navigation } = this.props);
    isEditing = this.state.isEditing;
    const tmp = null != submitting && submitting === submitting.submitting && isEditing === isEditing.isEditing;
    if (!tmp) {
      let fn;
      const setOptions = navigation.setOptions;
      if (submitting) {
        fn = () => null;
      } else if (isEditing) {
        let obj = self(6992);
        fn = obj.getHeaderConditionalBackButton(this.handleCancel);
      }
      const obj2 = { headerLeft: fn, headerRight: fn2 };
      if (submitting) {
        fn2 = () => closure_1_8(self(dependencyMap[9]).HeaderSubmittingIndicator, {});
      } else {
        fn2 = isEditing ? (() => {
          let intl;
          const obj = { onPress: self.handleSave, text: intl.string(intl7.t["R3BPH+"]) };
          const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
          intl = intl7.intl;
          return metroImportAll(HeaderActionButton, obj);
        }) : (() => {
          let intl;
          const obj = { onPress: self.handleStartEditing, text: intl.string(intl7.t.bt75uw) };
          const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
          intl = intl7.intl;
          return metroImportAll(HeaderActionButton, obj);
        });
      }
      setOptions(obj2);
    }
  }
  componentWillUnmount() {
    const obj = ChangeVanityURLActionCreatorsDefault;
    obj.closeModal();
  }
  render() {
    let errorDetails;
    let guild;
    let intl2;
    let intl3;
    let intl4;
    let intl5;
    let intl6;
    let isEditing;
    let items;
    let items1;
    let items2;
    let items3;
    let obj13;
    let obj3;
    let styles;
    let tmp20;
    const self = this;
    ({ errorDetails, guild, styles } = this.props);
    ({ isEditing, vanityURLCode } = this.state);
    let tmp;
    if (null != vanityURLCode) {
      if ("" !== vanityURLCode) {
        const obj2 = { variant: "text-sm/medium", color: "text-muted", children: intl6.format(intl7.t.FcGpNU, obj3) };
        const tmp23 = getInviteURLDefault(vanityURLCode);
        const Text5 = Text_Text.Text;
        intl6 = intl7.intl;
        obj3 = { url: tmp23 };
        tmp = metroImportAll(Text5, obj2);
      }
    }
    let tmp2 = vanityURLCode;
    if (!isEditing) {
      let combined;
      if ("" !== vanityURLCode) {
        const _HermesInternal = HermesInternal;
        combined = "discord.gg/" + vanityURLCode;
      } else {
        const intl = intl7.intl;
        combined = intl.string(intl7.t["FaXGO/"]);
      }
      tmp2 = combined;
    }
    let errorMessageFromErrorCode;
    if (null != errorDetails) {
      const obj = GuildSettingsVanityURLUtils;
      errorMessageFromErrorCode = obj.getErrorMessageFromErrorCode(errorDetails.code);
    }
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.GUILD_WEB_PAGE_VANITY_URL);
    }
    let tmp17Result = true === hasItem;
    if (tmp17Result) {
      let hasItem1;
      if (guild != null) {
        const features2 = guild.features;
        hasItem1 = features2.has(GuildFeatures.VANITY_URL);
      }
      tmp17Result = true !== hasItem1;
    }
    const obj4 = { style: items, children: items3 };
    items = [styles.wrapper, self.props.contentContainerStyle];
    const obj5 = { style: styles.section, children: items1 };
    items1 = [, ];
    const obj6 = { disabled: !isEditing, value: tmp2, onChange: self.handleChange, autoFocus: isEditing, errorMessage: errorMessageFromErrorCode };
    items1[0] = metroImportAll(TextInput_TextInput.TextInput, obj6);
    const obj7 = { style: styles.hints, children: items2 };
    const obj8 = { variant: "text-sm/medium", color: "text-muted", children: intl2.string(intl7.t.IhWDcu) };
    const Text = Text_Text.Text;
    intl2 = intl7.intl;
    items2 = [metroImportAll(Text, obj8), , , , ];
    const obj9 = { variant: "text-sm/medium", color: "text-muted", children: intl3.string(intl7.t["1mRkFr"]) };
    const Text2 = Text_Text.Text;
    intl3 = intl7.intl;
    items2[1] = metroImportAll(Text2, obj9);
    const obj10 = { variant: "text-sm/medium", color: "text-muted", children: intl4.string(intl7.t["eH/HMz"]) };
    const Text3 = Text_Text.Text;
    intl4 = intl7.intl;
    items2[2] = metroImportAll(Text3, obj10);
    if (tmp17Result) {
      const obj11 = { variant: "text-sm/medium", color: "text-muted", children: intl5.string(intl7.t.o3kmm3) };
      const Text4 = tmp18(5619).Text;
      intl5 = tmp18(1114).intl;
      tmp17Result = tmp17(Text4, obj11);
    }
    items2[3] = tmp17Result;
    items2[4] = tmp;
    items1[1] = React4(View, obj7);
    items3 = [React4(View, obj5), ];
    const obj12 = { style: styles.center, children: metroImportAll(tmp20, obj13) };
    obj13 = { source: AssetRegistryDefault, style: styles.image, resizeMode: "contain" };
    tmp20 = FastImageDefault;
    items3[1] = metroImportAll(View, obj12);
    return React4(View, obj4);
  }
}
const prototype = GuildSettingsModalVanityURL.prototype;
const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/boost_perks/native/GuildSettingsModalVanityURL.tsx");

export default function ConnectedGuildSettingsModalVanityURL(guildId) {
  let items3;
  let props2;
  guildId = guildId.guildId;
  const contentContainerStyle = guildId.contentContainerStyle;
  const tmp = closure_11();
  const obj = guildId(1498);
  navigation = obj.useNavigation();
  const items = [GuildStore];
  const obj2 = guildId(504);
  const stateFromStores = obj2.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  const items1 = [GuildSettingsStore];
  const obj3 = guildId(504);
  const stateFromStores1 = obj3.useStateFromStores(items1, () => props2.getProps().vanityURLCode);
  const items2 = [ChangeVanityURLModalStore];
  const obj4 = guildId(504);
  const stateFromStoresObject = obj4.useStateFromStoresObject(items2, () => {
    props = props.getProps();
    return { submitting: props.submitting, errorDetails: props.errorDetails };
  });
  let tmp10 = null;
  const tmp2 = guildId;
  if (null != stateFromStores) {
    const obj5 = { children: items3 };
    const obj6 = { guild: stateFromStores, vanityURLCode: stateFromStores1, submitting: tmp8, errorDetails: tmp9, navigation, styles: tmp, contentContainerStyle };
    items3 = [closure_8(GuildSettingsModalVanityURL, obj6), closure_8(tmp2(5601).NavScrim, {})];
    tmp10 = closure_9(closure_10, obj5);
  }
  return tmp10;
};
