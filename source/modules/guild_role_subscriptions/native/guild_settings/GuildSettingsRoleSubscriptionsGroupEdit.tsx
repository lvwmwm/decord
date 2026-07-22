// Module ID: 16297
// Function ID: 125764
// Name: GuildSettingsRoleSubscriptionsGroupEditInner
// Dependencies: []
// Exports: default

// Module 16297 (GuildSettingsRoleSubscriptionsGroupEditInner)
function GuildSettingsRoleSubscriptionsGroupEditInner(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  let React;
  let ScrollView;
  let ApplicationTypes;
  let updateSubscriptionsSettings;
  let error;
  let GuildSettingsRoleSubscriptionsGroupEditInner;
  let callback;
  let obj = arg1(dependencyMap[6]);
  const navigation = obj.useNavigation();
  const importDefault = navigation;
  let obj1 = arg1(dependencyMap[7]);
  const subscriptionsSettings = obj1.useSubscriptionsSettings(guildId);
  const importAll = subscriptionsSettings;
  const isFullServerGating = importDefault(dependencyMap[8])(guildId).isFullServerGating;
  const dependencyMap = isFullServerGating;
  const application = importDefault(dependencyMap[9])(guildId, ApplicationTypes.GUILD_ROLE_SUBSCRIPTIONS).application;
  const tmp3 = callback2(React.useState(null), 2);
  const first = tmp3[0];
  callback = first;
  const callback2 = tmp5;
  let description;
  if (null != subscriptionsSettings) {
    description = subscriptionsSettings.description;
  }
  let tmp8;
  if (null != description) {
    tmp8 = description;
  }
  const tmp9 = callback2(React.useState(tmp8), 2);
  let first1 = tmp9[0];
  React = first1;
  const tmp10 = callback2(React.useState(isFullServerGating), 2);
  const first2 = tmp10[0];
  ScrollView = first2;
  let obj2 = arg1(dependencyMap[7]);
  updateSubscriptionsSettings = obj2.useUpdateSubscriptionsSettings();
  const loading = updateSubscriptionsSettings.loading;
  ApplicationTypes = loading;
  updateSubscriptionsSettings = updateSubscriptionsSettings.updateSubscriptionsSettings;
  error = updateSubscriptionsSettings.error;
  let source = importDefault(dependencyMap[10])({});
  let tmp14 = null != first;
  if (!tmp14) {
    source = null != first1;
    if (source) {
      let description1;
      if (null != subscriptionsSettings) {
        description1 = subscriptionsSettings.description;
      }
      source = first1 !== description1;
    }
    if (source) {
      source = 0 !== first1.length;
    }
    tmp14 = source;
  }
  if (!tmp14) {
    tmp14 = isFullServerGating !== first2;
  }
  GuildSettingsRoleSubscriptionsGroupEditInner = tmp14;
  let tmp16 = first;
  if (null == first) {
    let cover_image_asset;
    if (null != subscriptionsSettings) {
      cover_image_asset = subscriptionsSettings.cover_image_asset;
    }
    source = null;
    if (null != cover_image_asset) {
      source = null;
      if (null != application) {
        obj = { application_id: application.id, image_asset: subscriptionsSettings.cover_image_asset };
        source = importAll(dependencyMap[11]).getSource(obj);
        const obj4 = importAll(dependencyMap[11]);
      }
    }
    tmp16 = source;
  }
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [first1, guildId, updateSubscriptionsSettings, subscriptionsSettings, first, first2, isFullServerGating];
  callback = React.useCallback(callback(source), items);
  const items1 = [navigation, tmp14, loading, callback];
  const layoutEffect = React.useLayoutEffect(() => {
    const obj = {};
    if (loading) {
      let fn = () => callback2(callback(closure_3[13]).HeaderSubmittingIndicator, {});
    } else {
      fn = tmp14 ? () => {
        const obj = {};
        const intl = callback(closure_3[15]).intl;
        obj.text = intl.string(callback(closure_3[15]).t.R3BPH+);
        obj.onPress = closure_12;
        return callback2(callback(closure_3[14]).HeaderActionButton, obj);
      } : () => null;
    }
    obj.headerRight = fn;
    navigation.setOptions(obj);
  }, items1);
  const items2 = [error];
  const effect = React.useEffect(() => {
    if (null != error) {
      let anyErrorMessage = error.getAnyErrorMessage();
      if (null == anyErrorMessage) {
        const intl = guildId(isFullServerGating[15]).intl;
        anyErrorMessage = intl.string(guildId(isFullServerGating[15]).t.ZUEGFn);
      }
      guildId(isFullServerGating[16]).presentError(anyErrorMessage);
      const obj = guildId(isFullServerGating[16]);
    }
  }, items2);
  obj = {};
  obj1 = { paddingBottom: source.insets.bottom + importDefault(dependencyMap[17]).space.PX_16 };
  obj.contentContainerStyle = obj1;
  const items3 = [updateSubscriptionsSettings(importDefault(dependencyMap[18]), { isFullServerGating: first2, onChange: tmp10[1] }), ];
  obj2 = { cover: tmp16, setCover: tmp3[1] };
  if (null == first1) {
    let description2;
    if (null != subscriptionsSettings) {
      description2 = subscriptionsSettings.description;
    }
    first1 = description2;
  }
  let str = "";
  if (null != first1) {
    str = first1;
  }
  obj2.description = str;
  obj2.setDescription = tmp9[1];
  items3[1] = updateSubscriptionsSettings(arg1(dependencyMap[19]).Content, obj2);
  obj.children = items3;
  return error(ScrollView, obj);
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importAll(dependencyMap[2]);
const ScrollView = arg1(dependencyMap[3]).ScrollView;
const ApplicationTypes = arg1(dependencyMap[4]).ApplicationTypes;
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsGroupEdit.tsx");

export default function GuildSettingsRoleSubscriptionsGroupEdit(guildId) {
  guildId = guildId.guildId;
  const obj = { guildId, children: callback3(GuildSettingsRoleSubscriptionsGroupEditInner, { guildId }) };
  return callback3(importDefault(dependencyMap[20]), obj);
};
