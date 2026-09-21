// Module ID: 12523
// Function ID: 12524
// Name: UpcomingEventsLongPressActionSheet
// Dependencies: [19, 17, 2067, 4939, 4940, 21, 4758, 558, 568, 504, 5799, 1119, 7396, 1181, 12524, 8876, 7357, 4725, 12525, 12526, 7366, 7361, 7449, 2]

// Module 12523 (UpcomingEventsLongPressActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import ReadStateActionCreators from "ReadStateActionCreators" /* 7357 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7361 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7366 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4939 */;

require = fn;
const View = fn(17).View;
const ReadStateTypes = fn(4940).ReadStateTypes;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4758);
let closure_9 = createStyles.createStyles({ headerIcon: { marginRight: 16 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/UpcomingEventsLongPressActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(568).c(35);
  guildId = guildId.guildId;
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function _() {
      return GuildStore.getGuild(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  let obj = guildId(568);
  const stateFromStores = guildId(504).useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserGuildSettingsStore];
    cResult[3] = items1;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== guildId) {
    class F {
      constructor() {
        return closure_5.isMuteScheduledEventsEnabled(guildId);
      }
    }
    cResult[4] = guildId;
    cResult[5] = F;
    const tmp11 = F;
  } else {
    class F {
      constructor() {
        return closure_5.isMuteScheduledEventsEnabled(guildId);
      }
    }
  }
  const tmpResult = guildId(504);
  const stateFromStores1 = guildId(504).useStateFromStores(tmp9, tmp11);
  if (cResult[6] !== stateFromStores) {
    class F {
      constructor() {
        return closure_5.isMuteScheduledEventsEnabled(guildId);
      }
    }
    const obj2 = { guild: stateFromStores, size: tmp(5799).GuildIconSizes.LARGE };
    const tmp16 = closure_7(stateFromStores1(5799), obj2);
    cResult[6] = stateFromStores;
    cResult[7] = tmp16;
    const tmp15 = stateFromStores1(5799);
  } else {
    class F {
      constructor() {
        return closure_5.isMuteScheduledEventsEnabled(guildId);
      }
    }
  }
  if (cResult[8] === tmp4.headerIcon) {
    class F {
      constructor() {
        return closure_5.isMuteScheduledEventsEnabled(guildId);
      }
    }
    const _Symbol = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor() {
          return closure_5.isMuteScheduledEventsEnabled(guildId);
        }
      }
      const stringResult = obj6.string(tmp(1119).t.tlopTM);
      cResult[11] = stringResult;
      const tmp19 = stringResult;
    } else {
      class F {
        constructor() {
          return closure_5.isMuteScheduledEventsEnabled(guildId);
        }
      }
    }
    if (cResult[12] !== tmp17) {
      class F {
        constructor() {
          return closure_5.isMuteScheduledEventsEnabled(guildId);
        }
      }
      const obj3 = { leading: tmp17, title: tmp19 };
      const tmp22 = closure_7(tmp(7396).BottomSheetTitleHeader, obj3);
      cResult[12] = tmp17;
      cResult[13] = tmp22;
    } else {
      class F {
        constructor() {
          return closure_5.isMuteScheduledEventsEnabled(guildId);
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor() {
          return closure_5.isMuteScheduledEventsEnabled(guildId);
        }
      }
      const obj4 = { source: stateFromStores1(12524) };
      const tmp25 = closure_7(tmp(1181).Icon, obj4);
      cResult[14] = tmp25;
      const tmp23 = tmp25;
    } else {
      class F {
        constructor() {
          return closure_5.isMuteScheduledEventsEnabled(guildId);
        }
      }
    }
    const _Symbol3 = Symbol;
    if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor() {
          return closure_5.isMuteScheduledEventsEnabled(guildId);
        }
      }
      const obj5 = { text: null };
      const intl = tmp(1119).intl;
      obj5.text = intl.string(tmp(1119).t.e6RscS);
      const tmp27 = closure_7(tmp(8876).FormLabel, obj5);
      cResult[15] = tmp27;
      const tmp26 = tmp27;
    } else {
      class F {
        constructor() {
          return closure_5.isMuteScheduledEventsEnabled(guildId);
        }
      }
    }
    if (cResult[16] !== guildId) {
      class F {
        constructor() {
          return closure_5.isMuteScheduledEventsEnabled(guildId);
        }
      }
      const obj7 = {
        leading: tmp23,
        label: tmp26,
        onPress() {
              ReadStateActionCreators.ackGuildFeature(guildId, ReadStateTypes.GUILD_EVENT);
              ActionSheetActionCreatorsDefault.hideActionSheet();
            }
      };
      const tmp29 = closure_7(tmp(8876).FormRow, obj7);
      cResult[16] = guildId;
      cResult[17] = tmp29;
    } else {
      class F {
        constructor() {
          return closure_5.isMuteScheduledEventsEnabled(guildId);
        }
      }
    }
    const tmp30 = stateFromStores1(stateFromStores1 ? 12525 : 12526);
    if (cResult[18] !== tmp30) {
      class F {
        constructor() {
          return closure_5.isMuteScheduledEventsEnabled(guildId);
        }
      }
      const obj8 = { source: tmp30 };
      const tmp32 = closure_7(tmp(1181).Icon, obj8);
      cResult[18] = tmp30;
      cResult[19] = tmp32;
    } else {
      class F {
        constructor() {
          return closure_5.isMuteScheduledEventsEnabled(guildId);
        }
      }
    }
    if (cResult[20] !== stateFromStores1) {
      class F {
        constructor() {
          return closure_5.isMuteScheduledEventsEnabled(guildId);
        }
      }
      if (stateFromStores1) {
        class F {
          constructor() {
            return closure_5.isMuteScheduledEventsEnabled(guildId);
          }
        }
        const stringResult1 = obj12.string(tmp(1119).t);
      } else {
        class F {
          constructor() {
            return closure_5.isMuteScheduledEventsEnabled(guildId);
          }
        }
      }
      cResult[20] = stateFromStores1;
      cResult[21] = stringResult1;
    } else {
      class F {
        constructor() {
          return closure_5.isMuteScheduledEventsEnabled(guildId);
        }
      }
      if (cResult[22] !== tmp33) {
        class F {
          constructor() {
            return closure_5.isMuteScheduledEventsEnabled(guildId);
          }
        }
        const obj9 = { text: tmp33 };
        const tmp37 = closure_7(tmp(8876).FormLabel, obj9);
        cResult[22] = tmp33;
        cResult[23] = tmp37;
      } else {
        class F {
          constructor() {
            return closure_5.isMuteScheduledEventsEnabled(guildId);
          }
        }
      }
      if (cResult[24] === guildId) {
        class F {
          constructor() {
            return closure_5.isMuteScheduledEventsEnabled(guildId);
          }
        }
        if (cResult[27] === tmp31) {
          class F {
            constructor() {
              return closure_5.isMuteScheduledEventsEnabled(guildId);
            }
          }
        }
        const obj10 = { leading: tmp31, label: tmp36, onPress: tmp38 };
        const tmp41 = closure_7(tmp(8876).FormRow, obj10);
        cResult[27] = tmp31;
        cResult[28] = tmp36;
        cResult[29] = tmp38;
        cResult[30] = tmp41;
      }
      const fn2 = function w() {
        const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
        const result = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings(guildId, { mute_scheduled_events: !stateFromStores1 }, NotificationLabel.mutedEvents(!stateFromStores1));
      };
      cResult[24] = guildId;
      cResult[25] = stateFromStores1;
      cResult[26] = fn2;
    }
  }
  const tmp18 = closure_7(View, { style: tmp4.headerIcon, children: tmp13 });
  cResult[8] = tmp4.headerIcon;
  cResult[9] = tmp13;
  cResult[10] = tmp18;
}) : ((guildId) => {
  guildId = guildId.guildId;
  const tmp = closure_9();
  const items = [GuildStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj = guildId(504);
  const items1 = [UserGuildSettingsStore];
  const stateFromStores1 = guildId(504).useStateFromStores(items1, () => UserGuildSettingsStore.isMuteScheduledEventsEnabled(guildId));
  const obj3 = { leading: null, title: null };
  const obj4 = { style: tmp.headerIcon, children: null };
  const obj5 = { guild: stateFromStores, size: null };
  const obj2 = guildId(504);
  const tmp6 = closure_8;
  const tmp8 = stateFromStores1;
  obj5.size = guildId(5799).GuildIconSizes.LARGE;
  obj4.children = closure_7(stateFromStores1(5799), obj5);
  obj3.leading = closure_7(View, obj4);
  const intl = guildId(1119).intl;
  obj3.title = intl.string(guildId(1119).t.tlopTM);
  const items2 = [closure_7(guildId(7396).BottomSheetTitleHeader, obj3), , ];
  const obj6 = { leading: null, label: null, onPress: null };
  const tmp9 = stateFromStores1(5799);
  obj6.leading = closure_7(guildId(1181).Icon, { source: stateFromStores1(12524) });
  const obj8 = { text: null };
  const intl2 = guildId(1119).intl;
  obj8.text = intl2.string(guildId(1119).t.e6RscS);
  obj6.label = closure_7(guildId(8876).FormLabel, obj8);
  obj6.onPress = function onPress() {
    ReadStateActionCreators.ackGuildFeature(guildId, ReadStateTypes.GUILD_EVENT);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items2[1] = closure_7(guildId(8876).FormRow, obj6);
  const obj9 = { leading: null, label: null, onPress: null };
  const obj7 = { source: stateFromStores1(12524) };
  obj9.leading = closure_7(guildId(1181).Icon, { source: tmp8(stateFromStores1 ? 12525 : 12526) });
  const intl3 = tmp2(1119).intl;
  const string = intl3.string;
  const t = tmp2(1119).t;
  if (stateFromStores1) {
    let stringResult = string(t.COiLo0);
  } else {
    stringResult = string(t.ONG3Yz);
  }
  const obj11 = { children: null };
  obj9.label = closure_7(guildId(8876).FormLabel, { text: stringResult });
  obj9.onPress = function onPress() {
    const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
    const result = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings(guildId, { mute_scheduled_events: !stateFromStores1 }, NotificationLabel.mutedEvents(!stateFromStores1));
  };
  items2[2] = closure_7(guildId(8876).FormRow, obj9);
  obj11.children = items2;
  return tmp6(guildId(7449).ActionSheet, obj11);
});
