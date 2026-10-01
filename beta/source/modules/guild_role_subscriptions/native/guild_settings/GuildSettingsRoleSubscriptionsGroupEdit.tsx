// Module ID: 17547
// Function ID: 17548
// Name: GuildSettingsRoleSubscriptionsGroupEdit
// Dependencies: [5, 32, 19, 17, 1349, 21, 1485, 14757, 17548, 17507, 6402, 17549, 12, 5936, 6795, 1115, 4527, 576, 17551, 17556, 17562, 2]
// Exports: default

// Module 17547 (GuildSettingsRoleSubscriptionsGroupEdit)
import react_native from "react-native" /* 17 */;
import ApplicationConstants from "ApplicationConstants" /* 1349 */;
import ToastUtils from "ToastUtils" /* 4527 */;
import GuildSettingsRoleSubscriptionContainerDefault from "GuildSettingsRoleSubscriptionContainer" /* 17562 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c2, navigation;

let c10;
let c9;
function GuildSettingsRoleSubscriptionsGroupEditInner(guildId) {
  let closure_5;
  let items3;
  guildId = guildId.guildId;
  let isFullServerGating;
  _slicedToArray = undefined;
  let str;
  let first1;
  let loading;
  let updateSubscriptionsSettings;
  let error;
  let closure_11;
  let callback;
  const tmp = guildId;
  let tmp2 = isFullServerGating;
  let obj = guildId(isFullServerGating[6]);
  navigation = obj.useNavigation();
  let obj2 = guildId(isFullServerGating[7]);
  const subscriptionsSettings = obj2.useSubscriptionsSettings(guildId);
  isFullServerGating = navigation(isFullServerGating[8])(guildId).isFullServerGating;
  const application = navigation(isFullServerGating[9])(guildId, loading.GUILD_ROLE_SUBSCRIPTIONS).application;
  let obj3 = str;
  const tmp7 = _slicedToArray(str.useState(null), 2);
  const first = tmp7[0];
  _slicedToArray = tmp9;
  let description;
  const useState = str.useState;
  if (subscriptionsSettings != null) {
    description = subscriptionsSettings.description;
  }
  const tmp6Result = _slicedToArray(useState(description), 2);
  str = tmp6Result[0];
  const tmp12 = tmp6Result[1];
  const tmp6Result2 = _slicedToArray(obj3.useState(isFullServerGating), 2);
  first1 = tmp6Result2[0];
  const tmp15 = tmp6Result2[1];
  const tmpResult = tmp(tmp2[7]);
  const updateSubscriptionsSettings1 = tmpResult.useUpdateSubscriptionsSettings();
  loading = updateSubscriptionsSettings1.loading;
  updateSubscriptionsSettings = updateSubscriptionsSettings1.updateSubscriptionsSettings;
  error = updateSubscriptionsSettings1.error;
  let tmp17 = null != first;
  const insets = tmp5(tmp2[10])({}).insets;
  if (!tmp17) {
    let tmp18 = null != str;
    if (tmp18) {
      let description1;
      if (subscriptionsSettings != null) {
        description1 = subscriptionsSettings.description;
      }
      tmp18 = str !== description1;
    }
    if (tmp18) {
      tmp18 = 0 !== str.length;
    }
    tmp17 = tmp18;
  }
  if (!tmp17) {
    tmp17 = isFullServerGating !== first1;
  }
  closure_11 = tmp17;
  let tmp20 = first;
  if (first == null) {
    let cover_image_asset;
    if (subscriptionsSettings != null) {
      cover_image_asset = subscriptionsSettings.cover_image_asset;
    }
    let source = null;
    if (null != cover_image_asset) {
      source = null;
      if (null != application) {
        let obj5 = subscriptionsSettings(tmp2[11]);
        let obj4 = { application_id: application.id, image_asset: subscriptionsSettings.cover_image_asset };
        source = obj5.getSource(obj4);
      }
    }
    tmp20 = source;
  }
  const items = [str, guildId, updateSubscriptionsSettings, subscriptionsSettings, first, first1, isFullServerGating];
  callback = obj3.useCallback(first(function*(arg0, value) {
    let v1;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === navigation) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_0 = tmp;
            let tmp10 = null != str;
            if (tmp10) {
              let description;
              if (subscriptionsSettings != null) {
                description = subscriptionsSettings.description;
              }
              tmp10 = arr !== description;
            }
            if (tmp10) {
              tmp10 = 0 !== arr.length;
            }
            const obj5 = {};
            if (tmp10) {
              obj5.description = str;
            }
            if (null != first) {
              obj5.cover_image = first.uri;
            }
            if (isFullServerGating !== first1) {
              obj5.full_server_gate = first1;
            }
            const obj3 = navigation(isFullServerGating[12]);
            if (!obj3.isEmpty(obj5)) {
              navigation = 1;
              c2 = 1;
              const obj6 = { value: updateSubscriptionsSettings(guildId, obj5), done: false };
              return obj6;
            }
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          closure_128_5(null);
        }
        c2 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp16) {
        c2 = 3;
        throw tmp16;
      }
    }
  }), items);
  const items1 = [navigation, tmp17, loading, callback];
  const layoutEffect = obj3.useLayoutEffect(() => {
    let fn;
    let onPress;
    const setOptions = navigation.setOptions;
    if (loading) {
      fn = () => updateSubscriptionsSettings(guildId(isFullServerGating[13]).HeaderSubmittingIndicator, {});
    } else {
      const tmp2 = closure_11;
      if (tmp2) {
        fn = () => {
          let intl;
          const obj = { text: intl.string(guildId(isFullServerGating[15]).t["R3BPH+"]), onPress };
          const HeaderActionButton = guildId(isFullServerGating[14]).HeaderActionButton;
          intl = guildId(isFullServerGating[15]).intl;
          return updateSubscriptionsSettings(HeaderActionButton, obj);
        };
      } else {
        fn = () => null;
      }
    }
    setOptions({ headerRight: fn });
  }, items1);
  const items2 = [error];
  const effect = obj3.useEffect(() => {
    const obj = error;
    if (null != error) {
      const presentError = ToastUtils.presentError;
      ToastUtils;
      let anyErrorMessage = obj.getAnyErrorMessage();
      if (anyErrorMessage == null) {
        const intl = tmp(1115).intl;
        anyErrorMessage = intl.string(tmp(1115).t.ZUEGFn);
      }
      presentError(anyErrorMessage);
    }
  }, items2);
  let obj6 = { contentContainerStyle: { paddingBottom: insets.bottom + tmp5(tmp2[17]).space.PX_16 }, children: items3 };
  items3 = [, ];
  ({ paddingBottom: insets.bottom + navigation(tmp2[17]).space.PX_16 });
  items3[0] = updateSubscriptionsSettings(navigation(tmp2[18]), { isFullServerGating: first1, onChange: tmp15 });
  const obj8 = { cover: tmp20, setCover: tmp7[1], description: str, setDescription: tmp12 };
  const Content = tmp(tmp2[19]).Content;
  const tmp27 = error;
  const tmp28 = first1;
  const tmp29 = updateSubscriptionsSettings;
  if (str == null) {
    let description2;
    if (subscriptionsSettings != null) {
      description2 = subscriptionsSettings.description;
    }
    str = description2;
  }
  if (str == null) {
    str = "";
  }
  items3[1] = tmp29(Content, obj8);
  return tmp27(tmp28, obj6);
}
let _slicedToArray = _slicedToArray_mod;
const ScrollView = react_native.ScrollView;
const ApplicationTypes = ApplicationConstants.ApplicationTypes;
({ jsx: c9, jsxs: c10 } = Fragment);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsGroupEdit.tsx");

export default function GuildSettingsRoleSubscriptionsGroupEdit(guildId) {
  guildId = guildId.guildId;
  const obj = { guildId, children: React4(GuildSettingsRoleSubscriptionsGroupEditInner, { guildId }) };
  const tmp = GuildSettingsRoleSubscriptionContainerDefault;
  return React4(tmp, obj);
};
