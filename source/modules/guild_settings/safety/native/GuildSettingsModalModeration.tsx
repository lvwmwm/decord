// Module ID: 16091
// Function ID: 123741
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: default

// Module 16091 (_isNativeReflectConstruct)
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
  let obj = arg1(dependencyMap[12]);
  let tmp4 = DEFAULT === constants2.AGE_RESTRICTED;
  const userIsTeen = obj.useUserIsTeen();
  if (tmp4) {
    tmp4 = DEFAULT2 !== constants2.AGE_RESTRICTED;
  }
  let tmp7 = null;
  if (!userIsTeen) {
    obj = {};
    const intl = arg1(dependencyMap[15]).intl;
    obj.title = intl.string(arg1(dependencyMap[15]).t.YJlvBM);
    obj.hasIcons = false;
    const intl2 = arg1(dependencyMap[15]).intl;
    obj = { helpArticleLink: importDefault(dependencyMap[16]).getArticleURL(constants.NSFW_SERVER_AGE_RESTRICTION) };
    obj.description = intl2.format(arg1(dependencyMap[15]).t.iyQQ62, obj);
    const obj1 = {};
    const intl3 = arg1(dependencyMap[15]).intl;
    obj1.label = intl3.string(arg1(dependencyMap[15]).t.N9xEJF);
    obj1.value = DEFAULT2 === constants2.AGE_RESTRICTED;
    obj1.onValueChange = tmp6;
    obj1.disabled = tmp4;
    obj.children = callback3(arg1(dependencyMap[17]).TableSwitchRow, obj1);
    tmp7 = callback3(arg1(dependencyMap[14]).TableRowGroup, obj, "filter-section");
    const obj4 = importDefault(dependencyMap[16]);
  }
  return tmp7;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const importAllResult = importAll(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
({ GuildFeatures: closure_11, HelpdeskArticles: closure_12, Permissions: closure_13, GuildNSFWContentLevel: closure_14 } = arg1(dependencyMap[8]));
const tmp3 = arg1(dependencyMap[8]);
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = arg1(dependencyMap[9]));
let obj = arg1(dependencyMap[10]);
obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[11]).modules.mobile.TABLE_ROW_PADDING };
obj.stack = obj;
let closure_18 = obj.createLegacyClassComponentStyles(obj);
const tmp5 = (PureComponent) => {
  class GuildSettingsModalModeration {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, GuildSettingsModalModeration);
      items1 = [...items];
      obj = closure_6(GuildSettingsModalModeration);
      tmp2 = closure_5;
      if (closure_20()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      GuildSettingsModalModeration = tmp2Result;
      tmp2Result.handleSaveChanges = () => {
        const guild = tmp2Result.props.guild;
        let obj = callback(closure_2[13]);
        obj = { verificationLevel: guild.verificationLevel, explicitContentFilter: guild.explicitContentFilter, ownerConfiguredContentLevel: guild.ownerConfiguredContentLevel };
        obj.saveGuild(guild.id, obj);
      };
      return tmp2Result;
    }
  }
  const arg1 = GuildSettingsModalModeration;
  callback2(GuildSettingsModalModeration, PureComponent);
  let obj = {
    key: "componentDidMount",
    value() {
      this.updateNavigation();
    }
  };
  const items = [obj, , , , , , , , ];
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
      const GuildSettingsModalModeration = this;
      ({ submitting, hasChanges, navigation } = this.props);
      if (!tmp) {
        let setOptionsResult = {};
        let fn;
        if (submitting) {
          fn = () => null;
        }
        setOptionsResult.headerLeft = fn;
        if (submitting) {
          let fn2 = () => callback(self(closure_2[18]).HeaderSubmittingIndicator, {});
        } else if (hasChanges) {
          fn2 = () => {
            const obj = { onPress: self.handleSaveChanges };
            const intl = self(closure_2[15]).intl;
            obj.text = intl.string(self(closure_2[15]).t.R3BPH+);
            return callback(self(closure_2[19]).HeaderActionButton, obj);
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
      const GuildSettingsModalModeration = this;
      const guild = this.props.guild;
      const obj = { hasIcons: false };
      const intl = GuildSettingsModalModeration(closure_2[15]).intl;
      obj.title = intl.string(GuildSettingsModalModeration(closure_2[15]).t.DpRdYK);
      const intl2 = GuildSettingsModalModeration(closure_2[15]).intl;
      obj.description = intl2.format(GuildSettingsModalModeration(closure_2[15]).t.iuRk2j, {});
      obj.value = guild.verificationLevel;
      obj.onChange = function onChange(arg0) {
        return self.handleVerificationLevelChange(arg0);
      };
      const features = guild.features;
      const verificationLevelOptions = GuildSettingsModalModeration(closure_2[21]).generateVerificationLevelOptions(features.has(constants.COMMUNITY));
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
          tmp2 = callback(self(closure_2[23]).Text, obj);
        }
        obj.label = tmp2;
        obj.subLabel = desc;
        obj.disabled = !self.props.canManageGuild || disabled;
        return callback(self(closure_2[22]).TableRadioRow, obj, "level-" + value);
      });
      return callback4(GuildSettingsModalModeration(closure_2[20]).TableRadioGroup, obj, "level-section");
    }
  };
  items[4] = {
    key: "renderExplicitContentFilter",
    value() {
      const GuildSettingsModalModeration = this;
      const guild = this.props.guild;
      let obj = { hasIcons: false };
      const intl = GuildSettingsModalModeration(closure_2[15]).intl;
      obj.title = intl.string(GuildSettingsModalModeration(closure_2[15]).t.bPgfJz);
      const intl2 = GuildSettingsModalModeration(closure_2[15]).intl;
      obj = { helpdeskArticle: callback(closure_2[16]).getArticleURL(constants2.SAFE_DIRECT_MESSAGING) };
      obj.description = intl2.format(GuildSettingsModalModeration(closure_2[15]).t.BI4ukC, obj);
      obj.value = guild.explicitContentFilter;
      obj.onChange = function onChange(arg0) {
        return self.handleExplicitContentFilterChange(arg0);
      };
      const obj3 = callback(closure_2[16]);
      const features = guild.features;
      const contentFilterOptions = GuildSettingsModalModeration(closure_2[21]).generateContentFilterOptions(features.has(constants.COMMUNITY));
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
        return closure_15(self(closure_2[22]).TableRadioRow, obj, "filter-" + value);
      });
      return callback4(GuildSettingsModalModeration(closure_2[20]).TableRadioGroup, obj, "filter-section");
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
      const items = [{ paddingTop: 16 }, this.props.contentContainerStyle];
      obj = { style: callback5(this.context).stack, spacing: callback(closure_2[11]).space.PX_24 };
      const items1 = [this.renderVerificationLevelSection(), this.renderExplicitContentFilter(), ];
      if (canManageGuild) {
        const obj1 = { guild, hasChanges };
        canManageGuild = callback4(closure_21, obj1);
      }
      items1[2] = canManageGuild;
      obj.children = items1;
      obj.children = closure_16(GuildSettingsModalModeration(closure_2[25]).Stack, obj);
      const items2 = [callback4(GuildSettingsModalModeration(closure_2[24]).Form, obj), callback4(GuildSettingsModalModeration(closure_2[26]).NavScrim, {})];
      obj.children = items2;
      return closure_16(closure_17, obj);
    }
  };
  items[6] = {
    key: "componentWillUnmount",
    value() {
      if (this.props.hasChanges) {
        callback(closure_2[13]).cancelChanges(tmp.props.guild.id);
        const obj = callback(closure_2[13]);
      }
    }
  };
  items[7] = {
    key: "handleVerificationLevelChange",
    value(verificationLevel) {
      let obj = callback(closure_2[13]);
      obj = { verificationLevel };
      obj.updateGuild(obj);
    }
  };
  items[8] = {
    key: "handleExplicitContentFilterChange",
    value(explicitContentFilter) {
      let obj = callback(closure_2[13]);
      obj = { explicitContentFilter };
      obj.updateGuild(obj);
    }
  };
  return callback(GuildSettingsModalModeration, items);
}(importAllResult.PureComponent);
tmp5.contextType = arg1(dependencyMap[27]).ThemeContext;
const tmp4 = arg1(dependencyMap[9]);
const result = arg1(dependencyMap[30]).fileFinishedImporting("modules/guild_settings/safety/native/GuildSettingsModalModeration.tsx");

export default function ConnectedGuildSettingsModalModeration(contentContainerStyle) {
  let hasChanges;
  let submitting;
  let obj = arg1(dependencyMap[28]);
  const navigation = obj.useNavigation();
  const items = [closure_10];
  const stateFromStoresObject = arg1(dependencyMap[29]).useStateFromStoresObject(items, () => {
    const props = props.getProps();
    return { guild: props.guild, submitting: props.submitting, hasChanges: props.hasChanges };
  });
  const guild = stateFromStoresObject.guild;
  const arg1 = guild;
  ({ submitting, hasChanges } = stateFromStoresObject);
  arg1(dependencyMap[29]);
  [][0] = closure_9;
  let tmp5 = null;
  if (null != guild) {
    obj = { navigation, guild, submitting, hasChanges, canManageGuild: tmp4, contentContainerStyle: contentContainerStyle.contentContainerStyle };
    tmp5 = callback3(tmp5, obj);
  }
  return tmp5;
};
