// Module ID: 18299
// Function ID: 18300
// Name: GuildSettingsModalIntegrations
// Dependencies: [19, 4750, 8638, 1085, 21, 5092, 587, 558, 576, 4818, 1503, 504, 5031, 18229, 8579, 5377, 6264, 6179, 1126, 17436, 17545, 15229, 5763, 6156, 1415, 4969, 6727, 2]

// Module 18299 (GuildSettingsModalIntegrations)
import nativeDefault from "native" /* 587 */;
import react from "react" /* 19 */;
import PermissionStore_mod from "PermissionStore" /* 4750 */;
import GuildSettingsStore from "GuildSettingsStore" /* 8638 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c4, importDefault, navigation;

let PlatformTypes;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let PermissionStore = PermissionStore_mod;
({ GuildSettingsSections: hasOwnProperty, PlatformTypes } = Constants);
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let items = [, ];
({ TWITCH: arr[0], YOUTUBE: arr[1] } = PlatformTypes);
let createStyles = createStyles_mod;
let obj = { screenContainer: obj2, screenContent: obj3, platformIcon: { width: 24, height: 24 } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
obj3 = { paddingTop: nativeDefault.space.PX_16 };
let closure_10 = createStyles(obj);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildSettingsModalIntegrations(contentContainerStyle) {
  let _undefined;
  let canManageGuild;
  let canManageWebhooks;
  let closure_0;
  let closure_3;
  let intl;
  let items4;
  let stateFromStores;
  let tmp10;
  let tmp13;
  let tmp15;
  let tmp17;
  let tmp18;
  let tmp8;
  let tmp9;
  const tmp = _require;
  let tmp2 = stateFromStores;
  let obj = require("react");
  const cResult = obj.c(41);
  contentContainerStyle = contentContainerStyle.contentContainerStyle;
  let obj2 = require("useToken");
  const token = obj2.useToken(navigation(stateFromStores[6]).modules.mobile.TABLE_ROW_PADDING);
  const tmp6 = closure_10();
  _require = tmp6;
  let obj3 = require("useNavigation");
  const tmp4 = navigation;
  navigation = obj3.useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [c4];
    const fn = function c() {
      return c4.getGuild();
    };
    const items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp9 = fn;
    tmp10 = items1;
    tmp8 = items;
  } else {
    [tmp8, tmp9, tmp10] = cResult;
  }
  const tmpResult = tmp(tmp2[11]);
  stateFromStores = tmpResult.useStateFromStores(tmp8, tmp9, tmp10);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [PermissionStore];
    cResult[3] = items2;
    tmp13 = items2;
  } else {
    tmp13 = cResult[3];
  }
  if (cResult[4] !== stateFromStores) {
    class N {
      constructor() {
        let guildPermissionProps;
        if (null == stateFromStores) {
          guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
        } else {
          guildPermissionProps = PermissionStore.getGuildPermissionProps(tmp);
        }
        return guildPermissionProps;
      }
    }
    cResult[4] = stateFromStores;
    cResult[5] = N;
    tmp15 = N;
  } else {
    class N {
      constructor() {
        let guildPermissionProps;
        if (null == stateFromStores) {
          guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
        } else {
          guildPermissionProps = PermissionStore.getGuildPermissionProps(tmp);
        }
        return guildPermissionProps;
      }
    }
  }
  const tmpResult4 = tmp(tmp2[11]);
  const stateFromStoresObject = tmpResult4.useStateFromStoresObject(tmp13, tmp15);
  ({ canManageWebhooks, canManageGuild } = stateFromStoresObject);
  PermissionStore = tmp4(tmp2[12])();
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor() {
        let guildPermissionProps;
        if (null == stateFromStores) {
          guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
        } else {
          guildPermissionProps = PermissionStore.getGuildPermissionProps(tmp);
        }
        return guildPermissionProps;
      }
    }
    const items3 = [c4];
    class G {
      constructor() {
        return c4.getProps().integrations;
      }
    }
    cResult[6] = items3;
    cResult[7] = G;
    tmp18 = G;
    tmp17 = items3;
  } else {
    class N {
      constructor() {
        let guildPermissionProps;
        if (null == stateFromStores) {
          guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
        } else {
          guildPermissionProps = PermissionStore.getGuildPermissionProps(tmp);
        }
        return guildPermissionProps;
      }
    }
    tmp18 = cResult[7];
  }
  const tmpResult5 = tmp(tmp2[11]);
  const stateFromStores1 = tmpResult5.useStateFromStores(tmp17, tmp18);
  if (stateFromStores1 != null) {
    class N {
      constructor() {
        let guildPermissionProps;
        if (null == stateFromStores) {
          guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
        } else {
          guildPermissionProps = PermissionStore.getGuildPermissionProps(tmp);
        }
        return guildPermissionProps;
      }
    }
  }
  c4 = tmp20;
  const useChannelsAllowedToUnlink = tmp(tmp2[13]).useChannelsAllowedToUnlink;
  tmp(tmp2[13]);
  if (stateFromStores != null) {
    class N {
      constructor() {
        let guildPermissionProps;
        if (null == stateFromStores) {
          guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
        } else {
          guildPermissionProps = PermissionStore.getGuildPermissionProps(tmp);
        }
        return guildPermissionProps;
      }
    }
  }
  const tmp22 = useChannelsAllowedToUnlink(undefined).length > 0;
  if (canManageGuild) {
    class N {
      constructor() {
        let guildPermissionProps;
        if (null == stateFromStores) {
          guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
        } else {
          guildPermissionProps = PermissionStore.getGuildPermissionProps(tmp);
        }
        return guildPermissionProps;
      }
    }
    if (undefined != null) {
      class N {
        constructor() {
          let guildPermissionProps;
          if (null == stateFromStores) {
            guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
          } else {
            guildPermissionProps = PermissionStore.getGuildPermissionProps(tmp);
          }
          return guildPermissionProps;
        }
      }
    }
    if (tmp23 == null) {
      class N {
        constructor() {
          let guildPermissionProps;
          if (null == stateFromStores) {
            guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
          } else {
            guildPermissionProps = PermissionStore.getGuildPermissionProps(tmp);
          }
          return guildPermissionProps;
        }
      }
    }
    class G {
      constructor() {
        return c4.getProps().integrations;
      }
    }
  }
  if (null == stateFromStores) {
    class N {
      constructor() {
        let guildPermissionProps;
        if (null == stateFromStores) {
          guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
        } else {
          guildPermissionProps = PermissionStore.getGuildPermissionProps(tmp);
        }
        return guildPermissionProps;
      }
    }
  } else {
    class N {
      constructor() {
        let guildPermissionProps;
        if (null == stateFromStores) {
          guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
        } else {
          guildPermissionProps = PermissionStore.getGuildPermissionProps(tmp);
        }
        return guildPermissionProps;
      }
    }
    const Form = tmp(tmp2[14]).Form;
    if (cResult[8] === contentContainerStyle) {
      class N {
        constructor() {
          let guildPermissionProps;
          if (null == stateFromStores) {
            guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
          } else {
            guildPermissionProps = PermissionStore.getGuildPermissionProps(tmp);
          }
          return guildPermissionProps;
        }
      }
      const Stack = tmp(tmp2[15]).Stack;
      if (cResult[11] !== token) {
        class N {
          constructor() {
            let guildPermissionProps;
            if (null == stateFromStores) {
              guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
            } else {
              guildPermissionProps = PermissionStore.getGuildPermissionProps(tmp);
            }
            return guildPermissionProps;
          }
        }
        tmp27[0] = token;
        class G {
          constructor() {
            return c4.getProps().integrations;
          }
        }
        cResult[12] = tmp27;
      } else {
        class N {
          constructor() {
            let guildPermissionProps;
            if (null == stateFromStores) {
              guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
            } else {
              guildPermissionProps = PermissionStore.getGuildPermissionProps(tmp);
            }
            return guildPermissionProps;
          }
        }
      }
      class G {
        constructor() {
          return c4.getProps().integrations;
        }
      }
      const TableRowGroup = tmp(tmp2[16]).TableRowGroup;
      if (cResult[13] === canManageWebhooks) {
        class N {
          constructor() {
            let guildPermissionProps;
            if (null == stateFromStores) {
              guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
            } else {
              guildPermissionProps = PermissionStore.getGuildPermissionProps(tmp);
            }
            return guildPermissionProps;
          }
        }
        if (cResult[16] === canManageWebhooks) {
          class N {
            constructor() {
              let guildPermissionProps;
              if (null == stateFromStores) {
                guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
              } else {
                guildPermissionProps = PermissionStore.getGuildPermissionProps(tmp);
              }
              return guildPermissionProps;
            }
          }
          if (cResult[19] === navigation) {
            class N {
              constructor() {
                let guildPermissionProps;
                if (null == stateFromStores) {
                  guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
                } else {
                  guildPermissionProps = PermissionStore.getGuildPermissionProps(tmp);
                }
                return guildPermissionProps;
              }
            }
            if (canManageGuild) {
              class N {
                constructor() {
                  let guildPermissionProps;
                  if (null == stateFromStores) {
                    guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
                  } else {
                    guildPermissionProps = PermissionStore.getGuildPermissionProps(tmp);
                  }
                  return guildPermissionProps;
                }
              }
              canManageGuild = items.map((item) => {
                let intl;
                let obj4;
                let obj5;
                let obj6;
                let tmp2Result;
                const platformType = item;
                let obj = c4;
                let someResult;
                if (c4 != null) {
                  someResult = obj.some((type) => type.type === platformType);
                }
                if (someResult) {
                  const obj2 = navigation(stateFromStores[22]);
                  const value = obj2.get(item);
                  let tmp6Result = null;
                  const tmp2 = navigation;
                  if (null != value) {
                    const obj3 = {
                      label: value.name,
                      subLabel: intl.formatToPlainString(platformType(stateFromStores[18]).t.VXU4EU, obj4),
                      icon: closure_1_6(tmp2Result, obj6),
                      arrow: true,
                      onPress() {
                            const obj = { platformType };
                            return navigation.push(hasOwnProperty.INTEGRATION_PLATFORM, obj);
                          }
                    };
                    const TableRow = platformType(tmp3[17]).TableRow;
                    intl = platformType(tmp3[18]).intl;
                    obj4 = { platformName: value.name };
                    tmp2Result = tmp2(stateFromStores[23]);
                    const makeSource = platformType(stateFromStores[24]).makeSource;
                    platformType(stateFromStores[24]);
                    const icon = value.icon;
                    obj6 = { source: makeSource(obj5.isThemeDark(closure_3) ? icon.darkPNG : icon.lightPNG), style: platformType.platformIcon };
                    obj5 = platformType(stateFromStores[25]);
                    tmp6Result = tmp6(TableRow, obj3, item);
                  }
                  return tmp6Result;
                } else {
                  return null;
                }
              });
            }
            if (cResult[22] === TableRowGroup) {
              class N {
                constructor() {
                  let guildPermissionProps;
                  if (null == stateFromStores) {
                    guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
                  } else {
                    guildPermissionProps = PermissionStore.getGuildPermissionProps(tmp);
                  }
                  return guildPermissionProps;
                }
              }
            }
            class G {
              constructor() {
                return c4.getProps().integrations;
              }
            }
            let obj4 = { hasIcons: true, children: items4 };
            items4 = [tmp28, tmp30, tmp32, canManageGuild];
            cResult[22] = TableRowGroup;
            cResult[23] = tmp28;
            cResult[24] = tmp30;
            cResult[25] = tmp32;
            cResult[26] = canManageGuild;
            cResult[27] = closure_7(TableRowGroup, obj4);
            const tmp35 = closure_7(TableRowGroup, obj4);
          }
          class G {
            constructor() {
              return c4.getProps().integrations;
            }
          }
          cResult[19] = navigation;
          cResult[20] = tmp22;
          cResult[21] = tmp22;
        }
        class G {
          constructor() {
            return c4.getProps().integrations;
          }
        }
        cResult[16] = canManageWebhooks;
        cResult[17] = navigation;
        cResult[18] = canManageWebhooks;
      }
      let tmp29 = canManageWebhooks;
      if (tmp29) {
        class N {
          constructor() {
            let guildPermissionProps;
            if (null == stateFromStores) {
              guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
            } else {
              guildPermissionProps = PermissionStore.getGuildPermissionProps(tmp);
            }
            return guildPermissionProps;
          }
        }
        let obj5 = {
          label: obj8.string(tmp(tmp2[18]).t.jp25Id),
          subLabel: intl.string(tmp(tmp2[18]).t.mKIOkI),
          icon: closure_6(tmp(tmp2[19]).WebhookIcon, {}),
          arrow: true,
          onPress() {
                  return navigation.push(hasOwnProperty.WEBHOOKS);
                }
        };
        let TableRow = tmp(tmp2[17]).TableRow;
        class G {
          constructor() {
            return c4.getProps().integrations;
          }
        }
        intl = tmp(tmp2[18]).intl;
        tmp29 = closure_6(TableRow, obj5);
      }
      cResult[13] = canManageWebhooks;
      cResult[14] = navigation;
      cResult[15] = tmp29;
    }
    class G {
      constructor() {
        return c4.getProps().integrations;
      }
    }
    tmp25[0] = tmp6.screenContent;
    tmp25[1] = contentContainerStyle;
    cResult[8] = contentContainerStyle;
    cResult[9] = tmp6.screenContent;
    cResult[10] = tmp25;
  }
}) : (function GuildSettingsModalIntegrations(contentContainerStyle) {
  let Stack;
  let TableRowGroup;
  let canManageGuild;
  let canManageWebhooks;
  let closure_0;
  let closure_1;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items3;
  let items5;
  let obj13;
  let obj7;
  let obj8;
  _require = undefined;
  importDefault = undefined;
  let stateFromStores;
  let closure_3;
  let found;
  const tmp = _require;
  let tmp2 = stateFromStores;
  contentContainerStyle = contentContainerStyle.contentContainerStyle;
  let obj = require("useToken");
  const tmp3 = importDefault;
  const token = obj.useToken(require("native").modules.mobile.TABLE_ROW_PADDING);
  const tmp5 = closure_10();
  _require = tmp5;
  let obj2 = require("useNavigation");
  importDefault = obj2.useNavigation();
  let obj3 = require("get initialized");
  items = [found];
  stateFromStores = obj3.useStateFromStores(items, () => found.getGuild(), []);
  let obj4 = require("get initialized");
  const items1 = [closure_3];
  const stateFromStoresObject = obj4.useStateFromStoresObject(items1, () => {
    let guildPermissionProps;
    if (null == stateFromStores) {
      guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
    } else {
      guildPermissionProps = PermissionStore.getGuildPermissionProps(tmp);
    }
    return guildPermissionProps;
  });
  ({ canManageWebhooks, canManageGuild } = stateFromStoresObject);
  closure_3 = require("useTheme")();
  let obj5 = require("get initialized");
  const items2 = [found];
  const stateFromStores1 = obj5.useStateFromStores(items2, () => found.getProps().integrations);
  found = undefined;
  if (stateFromStores1 != null) {
    found = stateFromStores1.filter((type) => items.includes(type.type));
  }
  let id;
  const useChannelsAllowedToUnlink = tmp(tmp2[13]).useChannelsAllowedToUnlink;
  tmp(tmp2[13]);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let tmp16Result2 = useChannelsAllowedToUnlink(id).length > 0;
  if (canManageGuild) {
    let num;
    if (found != null) {
      num = found.length;
    }
    if (num == null) {
      num = 0;
    }
    canManageGuild = num > 0;
  }
  let tmp12 = null;
  if (null != stateFromStores) {
    if (!canManageWebhooks) {
      let tmp14Result;
      if (!tmp16Result2) {
        tmp14Result = null;
      }
      tmp12 = tmp14Result;
    }
    let obj6 = { style: tmp5.screenContainer, contentContainerStyle: items3, children: closure_6(Stack, obj7) };
    items3 = [tmp5.screenContent, contentContainerStyle];
    const Form = tmp(tmp2[14]).Form;
    obj7 = { style: obj8, spacing: tmp3(tmp2[6]).space.PX_24, children: closure_7(TableRowGroup, obj13) };
    obj8 = { paddingHorizontal: token };
    Stack = tmp(tmp2[15]).Stack;
    let tmp16Result = canManageWebhooks;
    TableRowGroup = tmp(tmp2[16]).TableRowGroup;
    const tmp15 = closure_8;
    if (canManageWebhooks) {
      const obj9 = {
        label: intl.string(tmp(tmp2[18]).t.jp25Id),
        subLabel: intl2.string(tmp(tmp2[18]).t.mKIOkI),
        icon: closure_6(tmp(tmp2[19]).WebhookIcon, {}),
        arrow: true,
        onPress() {
              return closure_1.push(hasOwnProperty.WEBHOOKS);
            }
      };
      let TableRow = tmp(tmp2[17]).TableRow;
      intl = tmp(tmp2[18]).intl;
      intl2 = tmp(tmp2[18]).intl;
      tmp16Result = tmp16(TableRow, obj9);
    }
    const items4 = [tmp16Result, , , ];
    if (canManageWebhooks) {
      const obj10 = {
        label: intl3.string(tmp(tmp2[18]).t.OrV60r),
        subLabel: intl4.string(tmp(tmp2[18]).t.rQREJl),
        icon: closure_6(tmp(tmp2[20]).ChannelsFollowedIcon, {}),
        arrow: true,
        onPress() {
              return closure_1.push(hasOwnProperty.CHANNELS_FOLLOWED);
            }
      };
      const TableRow2 = tmp(tmp2[17]).TableRow;
      intl3 = tmp(tmp2[18]).intl;
      intl4 = tmp(tmp2[18]).intl;
      canManageWebhooks = tmp16(TableRow2, obj10);
    }
    items4[1] = canManageWebhooks;
    if (tmp16Result2) {
      const obj11 = {
        label: intl5.string(tmp(tmp2[18]).t.tqtDXC),
        subLabel: intl6.string(tmp(tmp2[18]).t.v8819e),
        icon: closure_6(tmp(tmp2[21]).RefreshIcon, {}),
        arrow: true,
        onPress() {
              return closure_1.push(hasOwnProperty.LOBBIES_LINKED);
            }
      };
      const TableRow3 = tmp(tmp2[17]).TableRow;
      intl5 = tmp(tmp2[18]).intl;
      intl6 = tmp(tmp2[18]).intl;
      tmp16Result2 = tmp16(TableRow3, obj11);
    }
    items4[2] = tmp16Result2;
    if (canManageGuild) {
      canManageGuild = items.map((item) => {
        let intl;
        let obj4;
        let obj5;
        let obj6;
        let tmp2Result;
        const platformType = item;
        let obj = found;
        let someResult;
        if (found != null) {
          someResult = obj.some((type) => type.type === platformType);
        }
        if (someResult) {
          const obj2 = closure_1(stateFromStores[22]);
          const value = obj2.get(item);
          let tmp6Result = null;
          const tmp2 = closure_1;
          if (null != value) {
            const obj3 = {
              label: value.name,
              subLabel: intl.formatToPlainString(platformType(stateFromStores[18]).t.VXU4EU, obj4),
              icon: closure_1_6(tmp2Result, obj6),
              arrow: true,
              onPress() {
                    const obj = { platformType };
                    return closure_1.push(hasOwnProperty.INTEGRATION_PLATFORM, obj);
                  }
            };
            const TableRow = platformType(tmp3[17]).TableRow;
            intl = platformType(tmp3[18]).intl;
            obj4 = { platformName: value.name };
            tmp2Result = tmp2(stateFromStores[23]);
            const makeSource = platformType(stateFromStores[24]).makeSource;
            platformType(stateFromStores[24]);
            const icon = value.icon;
            obj6 = { source: makeSource(obj5.isThemeDark(closure_3) ? icon.darkPNG : icon.lightPNG), style: platformType.platformIcon };
            obj5 = platformType(stateFromStores[25]);
            tmp6Result = tmp6(TableRow, obj3, item);
          }
          return tmp6Result;
        } else {
          return null;
        }
      });
    }
    const obj12 = { children: items5 };
    obj13 = { hasIcons: true, children: items4 };
    items4[3] = canManageGuild;
    items5 = [closure_6(Form, obj6), closure_6(tmp(tmp2[26]).NavScrim, {})];
    tmp14Result = tmp14(tmp15, obj12);
  }
  return tmp12;
});
const result = size.fileFinishedImporting("modules/guild_settings/integrations/native/GuildSettingsModalIntegrations.tsx");

export default tmp6;
export const SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS = items;
