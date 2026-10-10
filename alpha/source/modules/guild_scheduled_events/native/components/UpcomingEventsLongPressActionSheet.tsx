// Module ID: 12081
// Function ID: 12082
// Name: UpcomingEventsLongPressActionSheet
// Dependencies: [19, 17, 2087, 5966, 5967, 21, 5092, 558, 576, 504, 6158, 1126, 6838, 1200, 12082, 8579, 6799, 5056, 12083, 12084, 6808, 6803, 6898, 2]

// Module 12081 (UpcomingEventsLongPressActionSheet)
import react_native from "react-native" /* 17 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import ReadStateConstants from "ReadStateConstants" /* 5967 */;
import ReadStateActionCreators from "ReadStateActionCreators" /* 6799 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 6803 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6808 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2087 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5966 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
const View = react_native.View;
const ReadStateTypes = ReadStateConstants.ReadStateTypes;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ headerIcon: { marginRight: 16 } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function UpcomingEventsLongPressActionSheet(guildId) {
  let first;
  let intl2;
  let items2;
  let tmp11;
  let tmp13;
  let tmp7;
  let tmp9;
  const tmp = guildId;
  let obj = guildId(576);
  const cResult = obj.c(35);
  guildId = guildId.guildId;
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function _() {
      return GuildStore.getGuild(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserGuildSettingsStore];
    cResult[3] = items1;
    tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== guildId) {
    const fn2 = function f() {
      return UserGuildSettingsStore.isMuteScheduledEventsEnabled(guildId);
    };
    cResult[4] = guildId;
    cResult[5] = fn2;
    tmp11 = fn2;
  } else {
    tmp11 = cResult[5];
  }
  const tmpResult2 = tmp(504);
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp9, tmp11);
  if (cResult[6] !== stateFromStores) {
    let obj2 = { guild: stateFromStores, size: tmp(6158).GuildIconSizes.LARGE };
    const tmp16 = stateFromStores1(6158);
    const tmp17 = closure_7(tmp16, obj2);
    cResult[6] = stateFromStores;
    cResult[7] = tmp17;
    tmp13 = tmp17;
  } else {
    tmp13 = cResult[7];
  }
  if (cResult[8] === tmp4.headerIcon) {
    let tmp18;
    let tmp20;
    let tmp22;
    let tmp25;
    let tmp29;
    let tmp32;
    let tmp36;
    let tmp39;
    let tmp41;
    if (cResult[9] === tmp13) {
      tmp18 = cResult[10];
    }
    const _Symbol = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(tmp(1126).t.tlopTM);
      cResult[11] = stringResult;
      tmp20 = stringResult;
    } else {
      tmp20 = cResult[11];
    }
    if (cResult[12] !== tmp18) {
      const obj3 = { leading: tmp18, title: tmp20 };
      const tmp24 = closure_7(tmp(6838).BottomSheetTitleHeader, obj3);
      cResult[12] = tmp18;
      cResult[13] = tmp24;
      tmp22 = tmp24;
    } else {
      tmp22 = cResult[13];
    }
    const _Symbol2 = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { source: stateFromStores1(12082) };
      const Icon = tmp(1200).Icon;
      const tmp28 = closure_7(Icon, obj4);
      cResult[14] = tmp28;
      tmp25 = tmp28;
    } else {
      tmp25 = cResult[14];
    }
    const _Symbol3 = Symbol;
    if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
      const obj5 = { text: intl2.string(tmp(1126).t.e6RscS) };
      const FormLabel = tmp(8579).FormLabel;
      intl2 = tmp(1126).intl;
      const tmp31 = closure_7(FormLabel, obj5);
      cResult[15] = tmp31;
      tmp29 = tmp31;
    } else {
      tmp29 = cResult[15];
    }
    if (cResult[16] !== guildId) {
      const obj6 = {
        leading: tmp25,
        label: tmp29,
        onPress() {
              const obj = ReadStateActionCreators;
              obj.ackGuildFeature(guildId, ReadStateTypes.GUILD_EVENT);
              const obj2 = ActionSheetActionCreatorsDefault;
              obj2.hideActionSheet();
            }
      };
      const tmp34 = closure_7(tmp(8579).FormRow, obj6);
      cResult[16] = guildId;
      cResult[17] = tmp34;
      tmp32 = tmp34;
    } else {
      tmp32 = cResult[17];
    }
    const tmp35 = stateFromStores1(stateFromStores1 ? 12083 : 12084);
    if (cResult[18] !== tmp35) {
      const obj7 = { source: tmp35 };
      const tmp38 = closure_7(tmp(1200).Icon, obj7);
      cResult[18] = tmp35;
      cResult[19] = tmp38;
      tmp36 = tmp38;
    } else {
      tmp36 = cResult[19];
    }
    if (cResult[20] !== stateFromStores1) {
      let stringResult1;
      const intl3 = tmp(1126).intl;
      const string = intl3.string;
      const t = tmp(1126).t;
      if (stateFromStores1) {
        stringResult1 = string(t.COiLo0);
      } else {
        stringResult1 = string(t.ONG3Yz);
      }
      cResult[20] = stateFromStores1;
      cResult[21] = stringResult1;
      tmp39 = stringResult1;
    } else {
      tmp39 = cResult[21];
    }
    if (cResult[22] !== tmp39) {
      const obj8 = { text: tmp39 };
      const tmp43 = closure_7(tmp(8579).FormLabel, obj8);
      cResult[22] = tmp39;
      cResult[23] = tmp43;
      tmp41 = tmp43;
    } else {
      tmp41 = cResult[23];
    }
    if (cResult[24] === guildId) {
      let tmp44;
      if (cResult[25] === stateFromStores1) {
        tmp44 = cResult[26];
      }
      if (cResult[27] === tmp36) {
        if (cResult[28] === tmp41) {
          let tmp45;
          if (cResult[29] === tmp44) {
            tmp45 = cResult[30];
          }
          if (cResult[31] === tmp32) {
            if (cResult[32] === tmp45) {
              let tmp48;
              if (cResult[33] === tmp22) {
                tmp48 = cResult[34];
              }
              return tmp48;
            }
          }
          const obj9 = { children: items2 };
          items2 = [tmp22, tmp32, tmp45];
          const tmp50 = closure_8(tmp(6898).ActionSheet, obj9);
          cResult[31] = tmp32;
          cResult[32] = tmp45;
          cResult[33] = tmp22;
          cResult[34] = tmp50;
          tmp48 = tmp50;
        }
      }
      const obj10 = { leading: tmp36, label: tmp41, onPress: tmp44 };
      const tmp47 = closure_7(tmp(8579).FormRow, obj10);
      cResult[27] = tmp36;
      cResult[28] = tmp41;
      cResult[29] = tmp44;
      cResult[30] = tmp47;
      tmp45 = tmp47;
    }
    const fn3 = function w() {
      const updateGuildNotificationSettings = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings;
      const obj = { mute_scheduled_events: !stateFromStores1 };
      NotificationSettingsModalActionCreatorsDefault;
      const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
      const result = updateGuildNotificationSettings(guildId, obj, NotificationLabel.mutedEvents(!stateFromStores1));
    };
    cResult[24] = guildId;
    cResult[25] = stateFromStores1;
    cResult[26] = fn3;
    tmp44 = fn3;
  }
  const obj11 = { style: tmp4.headerIcon, children: tmp13 };
  const tmp19 = closure_7(View, obj11);
  cResult[8] = tmp4.headerIcon;
  cResult[9] = tmp13;
  cResult[10] = tmp19;
  tmp18 = tmp19;
}) : (function UpcomingEventsLongPressActionSheet(guildId) {
  let FormLabel;
  let FormLabel2;
  let Icon;
  let Icon2;
  let intl;
  let intl2;
  let obj10;
  let obj4;
  let obj5;
  let obj7;
  let obj8;
  let stringResult;
  let tmp9;
  guildId = guildId.guildId;
  const tmp = closure_9();
  let obj = guildId(504);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj2 = guildId(504);
  const items1 = [UserGuildSettingsStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => UserGuildSettingsStore.isMuteScheduledEventsEnabled(guildId));
  const ActionSheet = guildId(6898).ActionSheet;
  const obj3 = { leading: closure_7(View, obj4), title: intl.string(guildId(1126).t.tlopTM) };
  obj4 = { style: tmp.headerIcon, children: closure_7(tmp9, obj5) };
  const BottomSheetTitleHeader = guildId(6838).BottomSheetTitleHeader;
  obj5 = { guild: stateFromStores, size: guildId(6158).GuildIconSizes.LARGE };
  tmp9 = stateFromStores1(6158);
  intl = guildId(1126).intl;
  const items2 = [closure_7(BottomSheetTitleHeader, obj3), , ];
  const obj6 = {
    leading: closure_7(Icon, obj7),
    label: closure_7(FormLabel, obj8),
    onPress() {
      const obj = ReadStateActionCreators;
      obj.ackGuildFeature(guildId, ReadStateTypes.GUILD_EVENT);
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet();
    }
  };
  const FormRow = guildId(8579).FormRow;
  obj7 = { source: stateFromStores1(12082) };
  Icon = guildId(1200).Icon;
  obj8 = { text: intl2.string(guildId(1126).t.e6RscS) };
  FormLabel = guildId(8579).FormLabel;
  intl2 = guildId(1126).intl;
  items2[1] = closure_7(FormRow, obj6);
  const FormRow2 = guildId(8579).FormRow;
  const obj9 = {
    leading: closure_7(Icon2, obj10),
    label: closure_7(FormLabel2, { text: stringResult }),
    onPress() {
      const updateGuildNotificationSettings = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings;
      const obj = { mute_scheduled_events: !stateFromStores1 };
      NotificationSettingsModalActionCreatorsDefault;
      const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
      const result = updateGuildNotificationSettings(guildId, obj, NotificationLabel.mutedEvents(!stateFromStores1));
    }
  };
  obj10 = { source: stateFromStores1(stateFromStores1 ? 12083 : 12084) };
  Icon2 = guildId(1200).Icon;
  FormLabel2 = tmp2(8579).FormLabel;
  const intl3 = tmp2(1126).intl;
  const string = intl3.string;
  const t = tmp2(1126).t;
  const tmp6 = closure_8;
  const tmp8 = stateFromStores1;
  if (tmp8) {
    stringResult = string(t.COiLo0);
  } else {
    stringResult = string(t.ONG3Yz);
  }
  const obj11 = { children: items2 };
  items2[2] = closure_7(FormRow2, obj9);
  return tmp6(ActionSheet, obj11);
});
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/UpcomingEventsLongPressActionSheet.tsx");

export default tmp4;
