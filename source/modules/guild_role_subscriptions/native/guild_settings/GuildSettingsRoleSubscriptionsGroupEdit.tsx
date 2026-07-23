// Module ID: 16414
// Function ID: 127938
// Name: GuildSettingsRoleSubscriptionsGroupEditInner
// Dependencies: [5, 57, 31, 27, 4156, 33, 1456, 14101, 16415, 16374, 5160, 16416, 22, 5087, 5788, 1212, 3830, 689, 16418, 16423, 16429, 2]
// Exports: default

// Module 16414 (GuildSettingsRoleSubscriptionsGroupEditInner)
import closure_4 from "jsxProd";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { ScrollView } from "get ActivityIndicator";
import { ApplicationTypes } from "ApplicationTypes";
import jsxProd from "jsxProd";

let closure_10;
let closure_9;
const require = arg1;
function GuildSettingsRoleSubscriptionsGroupEditInner(guildId) {
  guildId = guildId.guildId;
  let first1;
  let first2;
  let loading;
  let updateSubscriptionsSettings;
  let error;
  let c11;
  let callback;
  let obj = guildId(isFullServerGating[6]);
  const navigation = obj.useNavigation();
  let obj1 = guildId(isFullServerGating[7]);
  const subscriptionsSettings = obj1.useSubscriptionsSettings(guildId);
  isFullServerGating = navigation(isFullServerGating[8])(guildId).isFullServerGating;
  const application = navigation(isFullServerGating[9])(guildId, loading.GUILD_ROLE_SUBSCRIPTIONS).application;
  const tmp3 = callback(first1.useState(null), 2);
  const first = tmp3[0];
  callback = tmp5;
  let description;
  if (null != subscriptionsSettings) {
    description = subscriptionsSettings.description;
  }
  let tmp8;
  if (null != description) {
    tmp8 = description;
  }
  const tmp9 = callback(first1.useState(tmp8), 2);
  first1 = tmp9[0];
  const tmp10 = callback(first1.useState(isFullServerGating), 2);
  first2 = tmp10[0];
  let obj2 = guildId(isFullServerGating[7]);
  updateSubscriptionsSettings = obj2.useUpdateSubscriptionsSettings();
  loading = updateSubscriptionsSettings.loading;
  updateSubscriptionsSettings = updateSubscriptionsSettings.updateSubscriptionsSettings;
  error = updateSubscriptionsSettings.error;
  let source = navigation(isFullServerGating[10])({});
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
  c11 = tmp14;
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
        source = subscriptionsSettings(isFullServerGating[11]).getSource(obj);
        const obj4 = subscriptionsSettings(isFullServerGating[11]);
      }
    }
    tmp16 = source;
  }
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [first1, guildId, updateSubscriptionsSettings, subscriptionsSettings, first, first2, isFullServerGating];
  callback = first1.useCallback(first(source), items);
  const items1 = [navigation, tmp14, loading, callback];
  const layoutEffect = first1.useLayoutEffect(() => {
    let obj = {};
    if (loading) {
      let fn = () => updateSubscriptionsSettings(guildId(isFullServerGating[13]).HeaderSubmittingIndicator, {});
    } else {
      fn = c11 ? (() => {
        const obj = {};
        const intl = guildId(isFullServerGating[15]).intl;
        obj.text = intl.string(guildId(isFullServerGating[15]).t["R3BPH+"]);
        obj.onPress = outer1_12;
        return updateSubscriptionsSettings(guildId(isFullServerGating[14]).HeaderActionButton, obj);
      }) : (() => null);
    }
    obj.headerRight = fn;
    navigation.setOptions(obj);
  }, items1);
  const items2 = [error];
  const effect = first1.useEffect(() => {
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
  obj1 = { paddingBottom: source.insets.bottom + navigation(isFullServerGating[17]).space.PX_16 };
  obj.contentContainerStyle = obj1;
  const items3 = [updateSubscriptionsSettings(navigation(isFullServerGating[18]), { isFullServerGating: first2, onChange: tmp10[1] }), ];
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
  items3[1] = updateSubscriptionsSettings(guildId(isFullServerGating[19]).Content, obj2);
  obj.children = items3;
  return error(first2, obj);
}
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
const result = require("result").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsGroupEdit.tsx");

export default function GuildSettingsRoleSubscriptionsGroupEdit(guildId) {
  guildId = guildId.guildId;
  const obj = { guildId, children: callback2(GuildSettingsRoleSubscriptionsGroupEditInner, { guildId }) };
  return callback2(importDefault(16429), obj);
};
