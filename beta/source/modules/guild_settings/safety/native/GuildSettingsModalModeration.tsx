// Module ID: 17304
// Function ID: 17305
// Name: GuildSettingsModalModeration
// Dependencies: [19, 4469, 9049, 1074, 21, 4836, 576, 8104, 9048, 5999, 1115, 2111, 6621, 4540, 5936, 6795, 5997, 14373, 6000, 4832, 8053, 5279, 6461, 1485, 504, 2]
// Exports: default

// Module 17304 (GuildSettingsModalModeration)
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2111 */;
import native from "native" /* 4540 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
import TableRadioRow2 from "TableRadioRow" /* 6000 */;
import HeaderActionButton2 from "HeaderActionButton" /* 6795 */;
import Form2 from "Form" /* 8053 */;
import useUserIsTeen from "useUserIsTeen" /* 8104 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9048 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9049 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let navigation;

let c10;
let c9;
let closure_12;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let tmp2;
let tmp5;
let unpackModuleId;
const Text_Text = tmp2(4832);
const NavScrim = tmp5(6461);
function GuildSettingsOwnerConfiguredContentLevel(guild) {
  let TableSwitchRow;
  let format;
  let intl;
  let intl3;
  let iyQQ62;
  let obj3;
  let obj4;
  let obj5;
  guild = guild.guild;
  let DEFAULT = guild.nsfwLevel;
  if (DEFAULT == null) {
    DEFAULT = constants4.DEFAULT;
  }
  let DEFAULT2 = guild.ownerConfiguredContentLevel;
  if (DEFAULT2 == null) {
    DEFAULT2 = constants4.DEFAULT;
  }
  let obj = useUserIsTeen;
  let tmp7 = DEFAULT === constants4.AGE_RESTRICTED;
  const userIsTeen = obj.useUserIsTeen();
  if (tmp7) {
    tmp7 = DEFAULT2 !== tmp6.AGE_RESTRICTED;
  }
  let tmp9 = null;
  if (!userIsTeen) {
    let obj2 = { title: intl.string(intl4.t.YJlvBM), hasIcons: false, description: format(iyQQ62, obj3), children: authStore(TableSwitchRow, obj5) };
    const TableRowGroup = tmp3(5999).TableRowGroup;
    intl = tmp3(1115).intl;
    const intl2 = tmp3(1115).intl;
    format = intl2.format;
    obj3 = { helpArticleLink: obj4.getArticleURL(metroImportDefault.NSFW_SERVER_AGE_RESTRICTION) };
    iyQQ62 = tmp3(1115).t.iyQQ62;
    obj4 = HelpdeskUtilsDefault;
    obj5 = { label: intl3.string(intl4.t.N9xEJF), value: DEFAULT2 === constants4.AGE_RESTRICTED, onValueChange: tmp8, disabled: tmp7 };
    TableSwitchRow = tmp3(6621).TableSwitchRow;
    intl3 = tmp3(1115).intl;
    tmp9 = authStore(TableRowGroup, obj2, "filter-section");
  }
  return tmp9;
}
({ GuildFeatures: metroRequire, HelpdeskArticles: metroImportDefault, Permissions: metroImportAll, GuildNSFWContentLevel: c9 } = Constants);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let obj = { stack: obj2 };
obj2 = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
createStyles.createLegacyClassComponentStyles(obj);
const PureComponent = react.PureComponent;
class GuildSettingsModalModeration extends PureComponent {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.handleSaveChanges = function handleSaveChanges() {
      const guild = require.props.guild;
      const obj = GuildSettingsActionCreatorsDefault;
      const obj2 = { verificationLevel: guild.verificationLevel, explicitContentFilter: guild.explicitContentFilter, ownerConfiguredContentLevel: guild.ownerConfiguredContentLevel };
      obj.saveGuild(guild.id, obj2);
    };
    return applyArgumentsResult;
  }
  componentDidMount() {
    this.updateNavigation();
  }
  componentDidUpdate(arg0) {
    this.updateNavigation(arg0);
  }
  updateNavigation(submitting) {
    let fn2;
    let hasChanges;
    const self = this;
    ({ submitting, hasChanges, navigation } = this.props);
    const tmp = null != submitting && submitting === submitting.submitting && hasChanges === submitting.hasChanges;
    if (!tmp) {
      let fn;
      const setOptions = navigation.setOptions;
      if (submitting) {
        fn = () => null;
      }
      let obj = { headerLeft: fn, headerRight: fn2 };
      if (submitting) {
        fn2 = () => closure_1_10(self(dependencyMap[14]).HeaderSubmittingIndicator, {});
      } else if (hasChanges) {
        fn2 = () => {
          let intl;
          const obj = { onPress: self.handleSaveChanges, text: intl.string(intl4.t["R3BPH+"]) };
          const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
          intl = intl4.intl;
          return authStore(HeaderActionButton, obj);
        };
      }
      setOptions(obj);
    }
  }
  renderVerificationLevelSection() {
    let intl;
    let intl2;
    let verificationLevelOptions;
    const self = this;
    const guild = this.props.guild;
    let obj = {
      hasIcons: false,
      title: intl.string(self(1115).t.DpRdYK),
      description: intl2.format(self(1115).t.iuRk2j, {}),
      value: guild.verificationLevel,
      onChange(verificationLevel) {
        return self.handleVerificationLevelChange(verificationLevel);
      },
      children: verificationLevelOptions.map((item) => {
        let color;
        let desc;
        let disabled;
        let name;
        let obj3;
        let tmp5;
        let tmpResult;
        let value;
        ({ name, color, value } = item);
        ({ desc, disabled } = item);
        const obj = { value, label: tmpResult, subLabel: desc, disabled: tmp5 };
        tmpResult = name;
        const TableRadioRow = TableRadioRow2.TableRadioRow;
        if (null != color) {
          const obj2 = { variant: "text-md/semibold", style: obj3, children: name };
          obj3 = { color };
          tmpResult = tmp(Text_Text.Text, obj2);
        }
        const canManageGuild = self.props.canManageGuild;
        tmp5 = !canManageGuild;
        if (canManageGuild) {
          tmp5 = disabled;
        }
        return authStore(TableRadioRow, obj, "level-" + value);
      })
    };
    const TableRadioGroup = self(5997).TableRadioGroup;
    intl = self(1115).intl;
    intl2 = self(1115).intl;
    let obj2 = self(14373);
    const features = guild.features;
    verificationLevelOptions = obj2.generateVerificationLevelOptions(features.has(constants.COMMUNITY));
    return closure_10(TableRadioGroup, obj, "level-section");
  }
  renderExplicitContentFilter() {
    let BI4ukC;
    let contentFilterOptions;
    let format;
    let intl;
    let obj2;
    let obj3;
    const self = this;
    const guild = this.props.guild;
    let obj = {
      hasIcons: false,
      title: intl.string(self(1115).t.bPgfJz),
      description: format(BI4ukC, obj2),
      value: guild.explicitContentFilter,
      onChange(explicitContentFilter) {
        return self.handleExplicitContentFilterChange(explicitContentFilter);
      },
      children: contentFilterOptions.map((value) => {
        let desc;
        let disabled;
        let name;
        let tmp2;
        value = value.value;
        ({ name, desc, disabled } = value);
        const canManageGuild = self.props.canManageGuild;
        const obj = { value, label: name, subLabel: desc, disabled: tmp2 };
        tmp2 = !canManageGuild;
        const TableRadioRow = TableRadioRow2.TableRadioRow;
        const tmp = authStore;
        if (canManageGuild) {
          tmp2 = disabled;
        }
        return tmp(TableRadioRow, obj, "filter-" + value);
      })
    };
    const TableRadioGroup = self(5997).TableRadioGroup;
    intl = self(1115).intl;
    const intl2 = self(1115).intl;
    format = intl2.format;
    obj2 = { helpdeskArticle: obj3.getArticleURL(constants2.SAFE_DIRECT_MESSAGING) };
    BI4ukC = self(1115).t.BI4ukC;
    const features = guild.features;
    obj3 = HelpdeskUtilsDefault;
    const obj4 = self(14373);
    contentFilterOptions = obj4.generateContentFilterOptions(features.has(constants.COMMUNITY));
    return closure_10(TableRadioGroup, obj, "filter-section");
  }
  render() {
    let Stack;
    let guild;
    let hasChanges;
    let items;
    let items1;
    let items2;
    let obj2;
    const props = this.props;
    let canManageGuild = props.canManageGuild;
    ({ guild, hasChanges } = props);
    const obj = { contentContainerStyle: items, children: unpackModuleId(Stack, obj2) };
    items = [{ paddingTop: 16 }, this.props.contentContainerStyle];
    const tmp = closure_13(this.context);
    const Form = Form2.Form;
    obj2 = { style: tmp.stack, spacing: nativeDefault.space.PX_24, children: items1 };
    Stack = Stack_Stack.Stack;
    items1 = [this.renderVerificationLevelSection(), this.renderExplicitContentFilter(), ];
    const tmp3 = closure_12;
    if (canManageGuild) {
      const obj3 = { guild, hasChanges };
      canManageGuild = tmp4(GuildSettingsOwnerConfiguredContentLevel, obj3);
    }
    const obj4 = { children: items2 };
    items1[2] = canManageGuild;
    items2 = [authStore(Form, obj), authStore(NavScrim.NavScrim, {})];
    return unpackModuleId(tmp3, obj4);
  }
  componentWillUnmount() {
    if (this.props.hasChanges) {
      const obj = GuildSettingsActionCreatorsDefault;
      obj.cancelChanges(tmp.props.guild.id);
    }
  }
  handleVerificationLevelChange(verificationLevel) {
    const obj = GuildSettingsActionCreatorsDefault;
    const obj2 = { verificationLevel };
    obj.updateGuild(obj2);
  }
  handleExplicitContentFilterChange(explicitContentFilter) {
    const obj = GuildSettingsActionCreatorsDefault;
    const obj2 = { explicitContentFilter };
    obj.updateGuild(obj2);
  }
}
const prototype = GuildSettingsModalModeration.prototype;
GuildSettingsModalModeration.contextType = native.ThemeContext;
const result = size.fileFinishedImporting("modules/guild_settings/safety/native/GuildSettingsModalModeration.tsx");

export default function ConnectedGuildSettingsModalModeration(contentContainerStyle) {
  let hasChanges;
  let submitting;
  let guild;
  contentContainerStyle = contentContainerStyle.contentContainerStyle;
  const obj = guild(1485);
  navigation = obj.useNavigation();
  const items = [GuildSettingsStore];
  const obj2 = guild(504);
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    props = props.getProps();
    return { guild: props.guild, submitting: props.submitting, hasChanges: props.hasChanges };
  });
  guild = stateFromStoresObject.guild;
  ({ submitting, hasChanges } = stateFromStoresObject);
  guild(504);
  [][0] = PermissionStore;
  let tmp5 = null;
  if (null != guild) {
    const obj3 = { navigation, guild, submitting, hasChanges, canManageGuild: tmp4, contentContainerStyle };
    tmp5 = closure_10(GuildSettingsModalModeration, obj3);
  }
  return tmp5;
};
