// Module ID: 16271
// Function ID: 126341
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 3758, 8483, 653, 33, 4130, 689, 7705, 8482, 5501, 1212, 1920, 5502, 5087, 5788, 7654, 13791, 7653, 4126, 7636, 4541, 5448, 3842, 1456, 566, 2]
// Exports: default

// Module 16271 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import getSystemLocale from "getSystemLocale";
import TableSwitchRow from "TableSwitchRow";
import HeaderBackImage from "HeaderBackImage";
import importAllResult from "result";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function GuildSettingsOwnerConfiguredContentLevel(guild) {
  guild = guild.guild;
  let DEFAULT = guild.nsfwLevel;
  if (null == DEFAULT) {
    DEFAULT = constants2.DEFAULT;
  }
  let DEFAULT2 = guild.ownerConfiguredContentLevel;
  if (null == DEFAULT2) {
    DEFAULT2 = constants2.DEFAULT;
  }
  let obj = require(7705) /* useUserIsTeen */;
  let tmp4 = DEFAULT === constants2.AGE_RESTRICTED;
  const userIsTeen = obj.useUserIsTeen();
  if (tmp4) {
    tmp4 = DEFAULT2 !== constants2.AGE_RESTRICTED;
  }
  let tmp7 = null;
  if (!userIsTeen) {
    obj = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.title = intl.string(require(1212) /* getSystemLocale */.t.YJlvBM);
    obj.hasIcons = false;
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj = { helpArticleLink: importDefault(1920).getArticleURL(constants.NSFW_SERVER_AGE_RESTRICTION) };
    obj.description = intl2.format(require(1212) /* getSystemLocale */.t.iyQQ62, obj);
    const obj1 = {};
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj1.label = intl3.string(require(1212) /* getSystemLocale */.t.N9xEJF);
    obj1.value = DEFAULT2 === constants2.AGE_RESTRICTED;
    obj1.onValueChange = tmp6;
    obj1.disabled = tmp4;
    obj.children = callback3(require(5502) /* TableSwitchRow */.TableSwitchRow, obj1);
    tmp7 = callback3(require(5501) /* TableRowGroupTitle */.TableRowGroup, obj, "filter-section");
    const obj4 = importDefault(1920);
  }
  return tmp7;
}
({ GuildFeatures: closure_11, HelpdeskArticles: closure_12, Permissions: closure_13, GuildNSFWContentLevel: closure_14 } = ME);
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_PADDING };
_createForOfIteratorHelperLoose.stack = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createLegacyClassComponentStyles(_createForOfIteratorHelperLoose);
let tmp5 = ((PureComponent) => {
  class GuildSettingsModalModeration {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = outer1_3(this, apply);
      items1 = [...items];
      obj = outer1_6(apply);
      tmp2 = outer1_5;
      if (outer1_20()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_6;
        constructResult = Reflect.construct(obj, items1, outer1_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      tmp2Result.handleSaveChanges = () => {
        const guild = tmp2Result.props.guild;
        let obj = outer2_1(outer2_2[13]);
        obj = { verificationLevel: guild.verificationLevel, explicitContentFilter: guild.explicitContentFilter, ownerConfiguredContentLevel: guild.ownerConfiguredContentLevel };
        obj.saveGuild(guild.id, obj);
      };
      return tmp2Result;
    }
  }
  callback2(GuildSettingsModalModeration, PureComponent);
  let obj = {
    key: "componentDidMount",
    value() {
      this.updateNavigation();
    }
  };
  let items = [obj, , , , , , , , ];
  obj = {
    key: "componentDidUpdate",
    value(arg0) {
      this.updateNavigation(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "updateNavigation",
    value(submitting) {
      let hasChanges;
      let navigation;
      const self = this;
      ({ submitting, hasChanges, navigation } = this.props);
      if (!tmp) {
        let setOptionsResult = {};
        let fn;
        if (submitting) {
          fn = () => null;
        }
        setOptionsResult.headerLeft = fn;
        if (submitting) {
          let fn2 = () => outer2_15(GuildSettingsModalModeration(outer2_2[18]).HeaderSubmittingIndicator, {});
        } else if (hasChanges) {
          fn2 = () => {
            const obj = { onPress: self.handleSaveChanges };
            const intl = GuildSettingsModalModeration(outer2_2[15]).intl;
            obj.text = intl.string(GuildSettingsModalModeration(outer2_2[15]).t["R3BPH+"]);
            return outer2_15(GuildSettingsModalModeration(outer2_2[19]).HeaderActionButton, obj);
          };
        }
        setOptionsResult.headerRight = fn2;
        setOptionsResult = navigation.setOptions(setOptionsResult);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "renderVerificationLevelSection",
    value() {
      const self = this;
      const guild = this.props.guild;
      let obj = { hasIcons: false };
      const intl = GuildSettingsModalModeration(outer1_2[15]).intl;
      obj.title = intl.string(GuildSettingsModalModeration(outer1_2[15]).t.DpRdYK);
      const intl2 = GuildSettingsModalModeration(outer1_2[15]).intl;
      obj.description = intl2.format(GuildSettingsModalModeration(outer1_2[15]).t.iuRk2j, {});
      obj.value = guild.verificationLevel;
      obj.onChange = function onChange(arg0) {
        return self.handleVerificationLevelChange(arg0);
      };
      const features = guild.features;
      const verificationLevelOptions = GuildSettingsModalModeration(outer1_2[21]).generateVerificationLevelOptions(features.has(outer1_11.COMMUNITY));
      obj.children = verificationLevelOptions.map((arg0) => {
        let color;
        let desc;
        let disabled;
        let name;
        let value;
        ({ name, color, value } = arg0);
        ({ desc, disabled } = arg0);
        let obj = { value };
        let tmp2 = name;
        if (null != color) {
          obj = { variant: "text-md/semibold" };
          obj = { color };
          obj.style = obj;
          obj.children = name;
          tmp2 = outer2_15(GuildSettingsModalModeration(outer2_2[23]).Text, obj);
        }
        obj.label = tmp2;
        obj.subLabel = desc;
        obj.disabled = !self.props.canManageGuild || disabled;
        return outer2_15(GuildSettingsModalModeration(outer2_2[22]).TableRadioRow, obj, "level-" + value);
      });
      return outer1_15(GuildSettingsModalModeration(outer1_2[20]).TableRadioGroup, obj, "level-section");
    }
  };
  items[4] = {
    key: "renderExplicitContentFilter",
    value() {
      const self = this;
      const guild = this.props.guild;
      let obj = { hasIcons: false };
      const intl = GuildSettingsModalModeration(outer1_2[15]).intl;
      obj.title = intl.string(GuildSettingsModalModeration(outer1_2[15]).t.bPgfJz);
      const intl2 = GuildSettingsModalModeration(outer1_2[15]).intl;
      obj = { helpdeskArticle: outer1_1(outer1_2[16]).getArticleURL(outer1_12.SAFE_DIRECT_MESSAGING) };
      obj.description = intl2.format(GuildSettingsModalModeration(outer1_2[15]).t.BI4ukC, obj);
      obj.value = guild.explicitContentFilter;
      obj.onChange = function onChange(arg0) {
        return self.handleExplicitContentFilterChange(arg0);
      };
      const obj3 = outer1_1(outer1_2[16]);
      const features = guild.features;
      const contentFilterOptions = GuildSettingsModalModeration(outer1_2[21]).generateContentFilterOptions(features.has(outer1_11.COMMUNITY));
      obj.children = contentFilterOptions.map((value) => {
        let desc;
        let disabled;
        let name;
        value = value.value;
        ({ name, desc, disabled } = value);
        const obj = { value, label: name, subLabel: desc };
        let tmp2 = !self.props.canManageGuild;
        if (!tmp2) {
          tmp2 = disabled;
        }
        obj.disabled = tmp2;
        return outer2_15(GuildSettingsModalModeration(outer2_2[22]).TableRadioRow, obj, "filter-" + value);
      });
      return outer1_15(GuildSettingsModalModeration(outer1_2[20]).TableRadioGroup, obj, "filter-section");
    }
  };
  items[5] = {
    key: "render",
    value() {
      let guild;
      let hasChanges;
      const props = this.props;
      let canManageGuild = props.canManageGuild;
      ({ guild, hasChanges } = props);
      let obj = {};
      obj = { contentContainerStyle: items };
      items = [{ paddingTop: 16 }, this.props.contentContainerStyle];
      obj = { style: outer1_18(this.context).stack, spacing: outer1_1(outer1_2[11]).space.PX_24 };
      const items1 = [this.renderVerificationLevelSection(), this.renderExplicitContentFilter(), ];
      if (canManageGuild) {
        const obj1 = { guild, hasChanges };
        canManageGuild = outer1_15(outer1_21, obj1);
      }
      items1[2] = canManageGuild;
      obj.children = items1;
      obj.children = outer1_16(GuildSettingsModalModeration(outer1_2[25]).Stack, obj);
      const items2 = [outer1_15(GuildSettingsModalModeration(outer1_2[24]).Form, obj), outer1_15(GuildSettingsModalModeration(outer1_2[26]).NavScrim, {})];
      obj.children = items2;
      return outer1_16(outer1_17, obj);
    }
  };
  items[6] = {
    key: "componentWillUnmount",
    value() {
      if (this.props.hasChanges) {
        outer1_1(outer1_2[13]).cancelChanges(tmp.props.guild.id);
        const obj = outer1_1(outer1_2[13]);
      }
    }
  };
  items[7] = {
    key: "handleVerificationLevelChange",
    value(verificationLevel) {
      let obj = outer1_1(outer1_2[13]);
      obj = { verificationLevel };
      obj.updateGuild(obj);
    }
  };
  items[8] = {
    key: "handleExplicitContentFilterChange",
    value(explicitContentFilter) {
      let obj = outer1_1(outer1_2[13]);
      obj = { explicitContentFilter };
      obj.updateGuild(obj);
    }
  };
  return callback(GuildSettingsModalModeration, items);
})(importAllResult.PureComponent);
let closure_19 = tmp5;
tmp5.contextType = require("ManaContext").ThemeContext;
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/guild_settings/safety/native/GuildSettingsModalModeration.tsx");

export default function ConnectedGuildSettingsModalModeration(contentContainerStyle) {
  let hasChanges;
  let submitting;
  let obj = guild(1456);
  const navigation = obj.useNavigation();
  const items = [closure_10];
  const stateFromStoresObject = guild(566).useStateFromStoresObject(items, () => {
    const props = outer1_10.getProps();
    return { guild: props.guild, submitting: props.submitting, hasChanges: props.hasChanges };
  });
  guild = stateFromStoresObject.guild;
  ({ submitting, hasChanges } = stateFromStoresObject);
  guild(566);
  [][0] = closure_9;
  let tmp5 = null;
  if (null != guild) {
    obj = { navigation, guild, submitting, hasChanges, canManageGuild: tmp4, contentContainerStyle: contentContainerStyle.contentContainerStyle };
    tmp5 = callback3(closure_19, obj);
  }
  return tmp5;
};
