// Module ID: 11318
// Function ID: 11319
// Name: GameOrganizationInvitePickerActionSheet
// Dependencies: [19, 17, 1389, 11033, 21, 4972, 587, 558, 576, 7267, 5670, 5235, 5978, 11319, 6989, 504, 11321, 11326, 11320, 11327, 11330, 1125, 2403, 5026, 7300, 2]

// Module 11318 (GameOrganizationInvitePickerActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5235 */;
import FastImageDefault from "FastImage" /* 5670 */;
import Stack_Stack from "Stack/Stack" /* 5978 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11033 */;
import GameOrganizationInvitePickerRowDefault from "GameOrganizationInvitePickerRow" /* 11319 */;
import getGameOrganizationInviteSendStateKey from "getGameOrganizationInviteSendStateKey" /* 11320 */;
import groupInvitableGameOrganizationsByApplicationDefault from "groupInvitableGameOrganizationsByApplication" /* 11326 */;
import sendGameOrganizationInviteDefault from "sendGameOrganizationInvite" /* 11327 */;
import showGameOrganizationInviteErrorToastDefault from "showGameOrganizationInviteErrorToast" /* 11330 */;
import react_mod from "react" /* 19 */;
import UserStore from "UserStore" /* 1389 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4972 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const getGameOrganizationInviteSendStateKeyDefault = getGameOrganizationInviteSendStateKey;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let size;
let tmp5;
const AssetRegistryDefault = tmp5(7267);
let react = react_mod;
const ActivityIndicator = react_native.ActivityIndicator;
const days = GameOrganizationInviteConstants.GAME_ORGANIZATION_INVITE_EXPIRY_DAYS;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: obj2, centeredText: { textAlign: "center" }, gameIcon: size, sections: obj3, status: obj4 };
obj2 = { paddingTop: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
size = { width: nativeDefault.space.PX_16, height: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.xs };
obj3 = { paddingTop: nativeDefault.space.PX_16 };
obj4 = { paddingVertical: nativeDefault.space.PX_24 };
let closure_9 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function GameSection(onInvite) {
  let group;
  let items;
  let items1;
  let tmp5;
  let userId;
  let obj = userId(576);
  const cResult = obj.c(22);
  ({ group, userId } = onInvite);
  onInvite = onInvite.onInvite;
  const tmp4 = closure_9();
  const application = group.application;
  if (cResult[0] !== application.iconUrl) {
    let tmp8;
    if (null != application.iconUrl) {
      tmp8 = { uri: application.iconUrl };
      const obj2 = { uri: application.iconUrl };
    } else {
      tmp8 = onInvite(7267);
    }
    cResult[0] = application.iconUrl;
    cResult[1] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.gameIcon) {
    let tmp9;
    let tmp11;
    if (cResult[3] === tmp5) {
      tmp9 = cResult[4];
    }
    if (cResult[5] !== application.name) {
      const obj3 = { accessibilityRole: "header", variant: "text-sm/medium", color: "text-muted", children: application.name };
      const tmp13 = closure_7(userId(5235).Text, obj3);
      cResult[5] = application.name;
      cResult[6] = tmp13;
      tmp11 = tmp13;
    } else {
      tmp11 = cResult[6];
    }
    if (cResult[7] === tmp9) {
      let tmp14;
      let tmp18;
      if (cResult[8] === tmp11) {
        tmp14 = cResult[9];
      }
      if (cResult[10] === group.gameOrganizations) {
        if (cResult[11] === onInvite) {
          let tmp21;
          if (cResult[12] === userId) {
            tmp18 = cResult[13];
          }
          if (cResult[17] !== tmp18) {
            const obj4 = { hasIcons: true, children: tmp18 };
            const tmp23 = closure_7(userId(6989).TableRowGroup, obj4);
            cResult[17] = tmp18;
            cResult[18] = tmp23;
            tmp21 = tmp23;
          } else {
            tmp21 = cResult[18];
          }
          if (cResult[19] === tmp14) {
            let tmp24;
            if (cResult[20] === tmp21) {
              tmp24 = cResult[21];
            }
            return tmp24;
          }
          const obj5 = { spacing: onInvite(587).space.PX_8, children: items };
          const Stack2 = tmp(5978).Stack;
          items = [tmp14, tmp21];
          const tmp27 = closure_8(Stack2, obj5);
          cResult[19] = tmp14;
          cResult[20] = tmp21;
          cResult[21] = tmp27;
          tmp24 = tmp27;
        }
      }
      if (cResult[14] === onInvite) {
        let tmp19;
        if (cResult[15] === userId) {
          tmp19 = cResult[16];
        }
        const gameOrganizations = group.gameOrganizations;
        const mapped = gameOrganizations.map(tmp19);
        cResult[10] = group.gameOrganizations;
        cResult[11] = onInvite;
        cResult[12] = userId;
        cResult[13] = mapped;
        tmp18 = mapped;
      }
      const fn = function x(organization) {
        organization = organization.organization;
        const obj = { organization, userId, onInvite };
        return metroImportDefault(GameOrganizationInvitePickerRowDefault, obj, organization.id);
      };
      cResult[14] = onInvite;
      cResult[15] = userId;
      cResult[16] = fn;
      tmp19 = fn;
    }
    const obj6 = { direction: "horizontal", spacing: onInvite(587).space.PX_4, align: "center", children: items1 };
    const Stack = tmp(5978).Stack;
    items1 = [tmp9, tmp11];
    const tmp17 = closure_8(Stack, obj6);
    cResult[7] = tmp9;
    cResult[8] = tmp11;
    cResult[9] = tmp17;
    tmp14 = tmp17;
  }
  const obj7 = { source: tmp5, style: tmp4.gameIcon };
  const tmp10 = closure_7(onInvite(5670), obj7);
  cResult[2] = tmp4.gameIcon;
  cResult[3] = tmp5;
  cResult[4] = tmp10;
  tmp9 = tmp10;
}) : (function GameSection(arg0) {
  let gameOrganizations;
  let group;
  let items;
  let items1;
  let onInvite;
  let require;
  let tmp5Result;
  let userId;
  ({ group, userId: require, onInvite: importDefault } = arg0);
  const application = group.application;
  let obj = { spacing: nativeDefault.space.PX_8, children: items1 };
  const tmp = closure_9();
  const Stack = Stack_Stack.Stack;
  const obj2 = { direction: "horizontal", spacing: nativeDefault.space.PX_4, align: "center", children: items };
  const Stack2 = Stack_Stack.Stack;
  const tmp7 = FastImageDefault;
  if (null != application.iconUrl) {
    tmp5Result = { uri: application.iconUrl };
    const obj3 = { uri: application.iconUrl };
  } else {
    tmp5Result = AssetRegistryDefault;
  }
  items = [, ];
  const obj4 = { source: tmp5Result, style: tmp.gameIcon };
  items[0] = closure_7(tmp7, obj4);
  const obj5 = { accessibilityRole: "header", variant: "text-sm/medium", color: "text-muted", children: application.name };
  items[1] = closure_7(Text_Text.Text, obj5);
  items1 = [closure_8(Stack2, obj2), ];
  const obj6 = {
    hasIcons: true,
    children: gameOrganizations.map((organization) => {
      organization = organization.organization;
      const obj = { organization, userId: require, onInvite: importDefault };
      return metroImportDefault(GameOrganizationInvitePickerRowDefault, obj, organization.id);
    })
  };
  gameOrganizations = group.gameOrganizations;
  const TableRowGroup = tmp3(6989).TableRowGroup;
  items1[1] = closure_7(TableRowGroup, obj6);
  return closure_8(Stack, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function GameOrganizationInvitePickerActionSheet(userId) {
  let arr2;
  let centeredText;
  let data;
  let error;
  let first;
  let header;
  let intl;
  let items1;
  let items3;
  let tmp14;
  let tmp23;
  let tmp7;
  let obj = userId(P[8]);
  const cResult = obj.c(43);
  userId = userId.userId;
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    const fn = function x() {
      return UserStore.getUser(userId);
    };
    cResult[1] = userId;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = userId(P[15]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  ({ data, error } = stateFromStores(P[16])("game_organization_invite_picker"));
  const tmp10 = stateFromStores(P[16])("game_organization_invite_picker");
  if (cResult[3] !== data) {
    let tmp11 = null;
    if (null != data) {
      tmp11 = tmp9(tmp2[17])(data);
    }
    cResult[3] = data;
    cResult[4] = tmp11;
    arr2 = tmp11;
  } else {
    arr2 = cResult[4];
  }
  if (cResult[5] !== stateFromStores) {
    class P {
      constructor(organization) {
        if (null != stateFromStores) {
          const obj = getGameOrganizationInviteSendStateKey;
          const result = obj.toLinkedGameOrganization(organization);
          const tmp7 = sendGameOrganizationInviteDefault;
          const tmp8 = getGameOrganizationInviteSendStateKeyDefault(result);
          tmp7(tmp8, result, stateFromStores, showGameOrganizationInviteErrorToastDefault);
        }
      }
    }
    cResult[5] = stateFromStores;
    cResult[6] = P;
  } else {
    class P {
      constructor(organization) {
        if (null != stateFromStores) {
          const obj = getGameOrganizationInviteSendStateKey;
          const result = obj.toLinkedGameOrganization(organization);
          const tmp7 = sendGameOrganizationInviteDefault;
          const tmp8 = getGameOrganizationInviteSendStateKeyDefault(result);
          tmp7(tmp8, result, stateFromStores, showGameOrganizationInviteErrorToastDefault);
        }
      }
    }
  }
  P = tmp12;
  if (null == arr2) {
    let tmp19;
    class P {
      constructor(organization) {
        if (null != stateFromStores) {
          const obj = getGameOrganizationInviteSendStateKey;
          const result = obj.toLinkedGameOrganization(organization);
          const tmp7 = sendGameOrganizationInviteDefault;
          const tmp8 = getGameOrganizationInviteSendStateKeyDefault(result);
          tmp7(tmp8, result, stateFromStores, showGameOrganizationInviteErrorToastDefault);
        }
      }
    }
    if (null != error) {
      class P {
        constructor(organization) {
          if (null != stateFromStores) {
            const obj = getGameOrganizationInviteSendStateKey;
            const result = obj.toLinkedGameOrganization(organization);
            const tmp7 = sendGameOrganizationInviteDefault;
            const tmp8 = getGameOrganizationInviteSendStateKeyDefault(result);
            tmp7(tmp8, result, stateFromStores, showGameOrganizationInviteErrorToastDefault);
          }
        }
      }
      const obj2 = { variant: "text-sm/medium", color: "text-muted", style: items1, children: intl.string(userId(P[21]).t.fEptJP) };
      items1 = [, ];
      ({ centeredText: arr4[0], status: arr4[1] } = tmp4);
      const Text = tmp(tmp2[11]).Text;
      intl = tmp(tmp2[21]).intl;
      tmp19 = closure_7(Text, obj2);
    } else {
      class P {
        constructor(organization) {
          if (null != stateFromStores) {
            const obj = getGameOrganizationInviteSendStateKey;
            const result = obj.toLinkedGameOrganization(organization);
            const tmp7 = sendGameOrganizationInviteDefault;
            const tmp8 = getGameOrganizationInviteSendStateKeyDefault(result);
            tmp7(tmp8, result, stateFromStores, showGameOrganizationInviteErrorToastDefault);
          }
        }
      }
      const obj3 = { style: tmp4.status };
      tmp19 = closure_7(ActivityIndicator, obj3);
    }
    cResult[7] = error;
    cResult[8] = tmp4.centeredText;
    cResult[9] = tmp4.status;
    cResult[10] = tmp19;
  } else {
    class P {
      constructor(organization) {
        if (null != stateFromStores) {
          const obj = getGameOrganizationInviteSendStateKey;
          const result = obj.toLinkedGameOrganization(organization);
          const tmp7 = sendGameOrganizationInviteDefault;
          const tmp8 = getGameOrganizationInviteSendStateKeyDefault(result);
          tmp7(tmp8, result, stateFromStores, showGameOrganizationInviteErrorToastDefault);
        }
      }
    }
    if (0 === arr2.length) {
      class P {
        constructor(organization) {
          if (null != stateFromStores) {
            const obj = getGameOrganizationInviteSendStateKey;
            const result = obj.toLinkedGameOrganization(organization);
            const tmp7 = sendGameOrganizationInviteDefault;
            const tmp8 = getGameOrganizationInviteSendStateKeyDefault(result);
            tmp7(tmp8, result, stateFromStores, showGameOrganizationInviteErrorToastDefault);
          }
        }
      }
      const items2 = [, ];
      ({ centeredText: arr3[0], status: arr3[1] } = tmp4);
      cResult[11] = tmp4.centeredText;
      cResult[12] = tmp4.status;
      cResult[13] = items2;
    } else {
      class P {
        constructor(organization) {
          if (null != stateFromStores) {
            const obj = getGameOrganizationInviteSendStateKey;
            const result = obj.toLinkedGameOrganization(organization);
            const tmp7 = sendGameOrganizationInviteDefault;
            const tmp8 = getGameOrganizationInviteSendStateKeyDefault(result);
            tmp7(tmp8, result, stateFromStores, showGameOrganizationInviteErrorToastDefault);
          }
        }
      }
      if (cResult[21] === tmp12) {
        class P {
          constructor(organization) {
            if (null != stateFromStores) {
              const obj = getGameOrganizationInviteSendStateKey;
              const result = obj.toLinkedGameOrganization(organization);
              const tmp7 = sendGameOrganizationInviteDefault;
              const tmp8 = getGameOrganizationInviteSendStateKeyDefault(result);
              tmp7(tmp8, result, stateFromStores, showGameOrganizationInviteErrorToastDefault);
            }
          }
        }
        const mapped = arr2.map(tmp14);
        class H {
          constructor(group) {
            const obj = { group, userId, onInvite: P };
            return metroImportDefault(closure_10, obj, group.application.id);
          }
        }
        cResult[17] = arr2;
        cResult[18] = tmp12;
        cResult[19] = userId;
        cResult[20] = mapped;
      }
      class H {
        constructor(group) {
          const obj = { group, userId, onInvite: P };
          return metroImportDefault(closure_10, obj, group.application.id);
        }
      }
      cResult[21] = tmp12;
      cResult[22] = userId;
      cResult[23] = H;
      tmp14 = H;
    }
  }
  if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
      constructor(organization) {
        if (null != stateFromStores) {
          const obj = getGameOrganizationInviteSendStateKey;
          const result = obj.toLinkedGameOrganization(organization);
          const tmp7 = sendGameOrganizationInviteDefault;
          const tmp8 = getGameOrganizationInviteSendStateKeyDefault(result);
          tmp7(tmp8, result, stateFromStores, showGameOrganizationInviteErrorToastDefault);
        }
      }
    }
    const string = tmp21.string;
    class H {
      constructor(group) {
        const obj = { group, userId, onInvite: P };
        return metroImportDefault(closure_10, obj, group.application.id);
      }
    }
    cResult[27] = tmp22;
  } else {
    class P {
      constructor(organization) {
        if (null != stateFromStores) {
          const obj = getGameOrganizationInviteSendStateKey;
          const result = obj.toLinkedGameOrganization(organization);
          const tmp7 = sendGameOrganizationInviteDefault;
          const tmp8 = getGameOrganizationInviteSendStateKeyDefault(result);
          tmp7(tmp8, result, stateFromStores, showGameOrganizationInviteErrorToastDefault);
        }
      }
    }
  }
  ({ header, centeredText } = tmp4);
  if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
      constructor(organization) {
        if (null != stateFromStores) {
          const obj = getGameOrganizationInviteSendStateKey;
          const result = obj.toLinkedGameOrganization(organization);
          const tmp7 = sendGameOrganizationInviteDefault;
          const tmp8 = getGameOrganizationInviteSendStateKeyDefault(result);
          tmp7(tmp8, result, stateFromStores, showGameOrganizationInviteErrorToastDefault);
        }
      }
    }
    const string2 = tmp24.string;
    class H {
      constructor(group) {
        const obj = { group, userId, onInvite: P };
        return metroImportDefault(closure_10, obj, group.application.id);
      }
    }
    cResult[28] = tmp25;
    tmp23 = tmp25;
  } else {
    class P {
      constructor(organization) {
        if (null != stateFromStores) {
          const obj = getGameOrganizationInviteSendStateKey;
          const result = obj.toLinkedGameOrganization(organization);
          const tmp7 = sendGameOrganizationInviteDefault;
          const tmp8 = getGameOrganizationInviteSendStateKeyDefault(result);
          tmp7(tmp8, result, stateFromStores, showGameOrganizationInviteErrorToastDefault);
        }
      }
    }
  }
  if (cResult[29] !== tmp4.centeredText) {
    class P {
      constructor(organization) {
        if (null != stateFromStores) {
          const obj = getGameOrganizationInviteSendStateKey;
          const result = obj.toLinkedGameOrganization(organization);
          const tmp7 = sendGameOrganizationInviteDefault;
          const tmp8 = getGameOrganizationInviteSendStateKeyDefault(result);
          tmp7(tmp8, result, stateFromStores, showGameOrganizationInviteErrorToastDefault);
        }
      }
    }
    const obj4 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: null, children: tmp23 };
    class H {
      constructor(group) {
        const obj = { group, userId, onInvite: P };
        return metroImportDefault(closure_10, obj, group.application.id);
      }
    }
    cResult[29] = tmp4.centeredText;
    cResult[30] = closure_7(userId(P[11]).Heading, obj4);
    const tmp27 = closure_7(userId(P[11]).Heading, obj4);
  } else {
    class P {
      constructor(organization) {
        if (null != stateFromStores) {
          const obj = getGameOrganizationInviteSendStateKey;
          const result = obj.toLinkedGameOrganization(organization);
          const tmp7 = sendGameOrganizationInviteDefault;
          const tmp8 = getGameOrganizationInviteSendStateKeyDefault(result);
          tmp7(tmp8, result, stateFromStores, showGameOrganizationInviteErrorToastDefault);
        }
      }
    }
  }
  const centeredText2 = tmp4.centeredText;
  if (cResult[31] !== stateFromStores) {
    class P {
      constructor(organization) {
        if (null != stateFromStores) {
          const obj = getGameOrganizationInviteSendStateKey;
          const result = obj.toLinkedGameOrganization(organization);
          const tmp7 = sendGameOrganizationInviteDefault;
          const tmp8 = getGameOrganizationInviteSendStateKeyDefault(result);
          tmp7(tmp8, result, stateFromStores, showGameOrganizationInviteErrorToastDefault);
        }
      }
    }
    const formatToPlainString = tmp29.formatToPlainString;
    class H {
      constructor(group) {
        const obj = { group, userId, onInvite: P };
        return metroImportDefault(closure_10, obj, group.application.id);
      }
    }
    const tmp9Result = stateFromStores(P[23]);
    const name = tmp9Result.getName(stateFromStores);
    if (name == null) {
      class P {
        constructor(organization) {
          if (null != stateFromStores) {
            const obj = getGameOrganizationInviteSendStateKey;
            const result = obj.toLinkedGameOrganization(organization);
            const tmp7 = sendGameOrganizationInviteDefault;
            const tmp8 = getGameOrganizationInviteSendStateKeyDefault(result);
            tmp7(tmp8, result, stateFromStores, showGameOrganizationInviteErrorToastDefault);
          }
        }
      }
    }
    const obj5 = { username: name, days };
    cResult[31] = stateFromStores;
    cResult[32] = formatToPlainString(tmp30, obj5);
    const formatToPlainStringResult = formatToPlainString(tmp30, obj5);
  } else {
    class P {
      constructor(organization) {
        if (null != stateFromStores) {
          const obj = getGameOrganizationInviteSendStateKey;
          const result = obj.toLinkedGameOrganization(organization);
          const tmp7 = sendGameOrganizationInviteDefault;
          const tmp8 = getGameOrganizationInviteSendStateKeyDefault(result);
          tmp7(tmp8, result, stateFromStores, showGameOrganizationInviteErrorToastDefault);
        }
      }
    }
  }
  if (cResult[33] === tmp4.centeredText) {
    class P {
      constructor(organization) {
        if (null != stateFromStores) {
          const obj = getGameOrganizationInviteSendStateKey;
          const result = obj.toLinkedGameOrganization(organization);
          const tmp7 = sendGameOrganizationInviteDefault;
          const tmp8 = getGameOrganizationInviteSendStateKeyDefault(result);
          tmp7(tmp8, result, stateFromStores, showGameOrganizationInviteErrorToastDefault);
        }
      }
    }
    if (cResult[36] === tmp4.header) {
      class P {
        constructor(organization) {
          if (null != stateFromStores) {
            const obj = getGameOrganizationInviteSendStateKey;
            const result = obj.toLinkedGameOrganization(organization);
            const tmp7 = sendGameOrganizationInviteDefault;
            const tmp8 = getGameOrganizationInviteSendStateKeyDefault(result);
            tmp7(tmp8, result, stateFromStores, showGameOrganizationInviteErrorToastDefault);
          }
        }
      }
    }
    class H {
      constructor(group) {
        const obj = { group, userId, onInvite: P };
        return metroImportDefault(closure_10, obj, group.application.id);
      }
    }
    const obj6 = { spacing: stateFromStores(P[6]).space.PX_4, style: header, children: items3 };
    const Stack = tmp(tmp2[12]).Stack;
    items3 = [tmp26, tmp34];
    cResult[36] = tmp4.header;
    cResult[37] = tmp34;
    cResult[38] = tmp26;
    cResult[39] = closure_8(Stack, obj6);
    const tmp37 = closure_8(Stack, obj6);
  }
  cResult[33] = tmp4.centeredText;
  cResult[34] = tmp28;
  cResult[35] = closure_7(userId(P[11]).Text, { variant: "text-sm/medium", color: "text-muted", style: centeredText2, children: tmp28 });
  const tmp35 = closure_7(userId(P[11]).Text, { variant: "text-sm/medium", color: "text-muted", style: centeredText2, children: tmp28 });
}) : (function GameOrganizationInvitePickerActionSheet(userId) {
  let Stack2;
  let formatToPlainString;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items3;
  let items4;
  let items5;
  let obj10;
  let obj7;
  let onInvite;
  let tmp14;
  let tmp7;
  let tmp8;
  let txHfjn;
  userId = userId.userId;
  let data;
  react = undefined;
  const tmp = closure_9();
  let tmp2 = userId;
  let obj = userId(data[15]);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(userId));
  const tmp6 = stateFromStores(data[16])("game_organization_invite_picker");
  data = tmp6.data;
  const items1 = [data];
  const error = tmp6.error;
  const memo = react.useMemo(() => {
    let tmp2 = null;
    if (null != data) {
      tmp2 = groupInvitableGameOrganizationsByApplicationDefault(tmp);
    }
    return tmp2;
  }, items1);
  const items2 = [stateFromStores];
  react = react.useCallback((organization) => {
    if (null != stateFromStores) {
      const obj = getGameOrganizationInviteSendStateKey;
      const result = obj.toLinkedGameOrganization(organization);
      const tmp7 = sendGameOrganizationInviteDefault;
      const tmp8 = getGameOrganizationInviteSendStateKeyDefault(result);
      tmp7(tmp8, result, stateFromStores, showGameOrganizationInviteErrorToastDefault);
    }
  }, items2);
  if (null == memo) {
    let tmp12;
    let tmp10;
    if (null != error) {
      const obj2 = { variant: "text-sm/medium", color: "text-muted", style: items3, children: intl2.string(tmp2(data[21]).t.fEptJP) };
      items3 = [, ];
      ({ centeredText: arr6[0], status: arr6[1] } = tmp);
      const Text2 = tmp2(tmp3[11]).Text;
      intl2 = tmp2(tmp3[21]).intl;
      tmp12 = closure_7(Text2, obj2);
      tmp10 = closure_7;
    } else {
      tmp10 = closure_7;
      const obj3 = { style: tmp.status };
      tmp12 = closure_7(ActivityIndicator, obj3);
    }
    tmp7 = tmp10;
    tmp8 = tmp12;
  } else if (0 === memo.length) {
    const obj4 = { variant: "text-sm/medium", color: "text-muted", style: items4, children: intl.string(stateFromStores(data[22]).v7A3HG) };
    items4 = [, ];
    ({ centeredText: arr5[0], status: arr5[1] } = tmp);
    const Text = tmp2(tmp3[11]).Text;
    intl = tmp2(tmp3[21]).intl;
    tmp8 = closure_7(Text, obj4);
    tmp7 = closure_7;
  } else {
    tmp7 = closure_7;
    const obj5 = {
      spacing: stateFromStores(data[6]).space.PX_24,
      style: tmp.sections,
      children: memo.map((group) => {
          const obj = { group, userId, onInvite };
          return metroImportDefault(closure_10, obj, group.application.id);
        })
    };
    const Stack = tmp2(tmp3[12]).Stack;
    tmp8 = closure_7(Stack, obj5);
  }
  const obj6 = { scrollable: true, dismissAccessibilityLabel: intl3.string(tmp2(data[21]).t.cpT0Cq), header: tmp14(Stack2, obj7), children: tmp8 };
  const ActionSheet = tmp2(tmp3[24]).ActionSheet;
  intl3 = tmp2(tmp3[21]).intl;
  obj7 = { spacing: stateFromStores(data[6]).space.PX_4, style: tmp.header, children: items5 };
  Stack2 = tmp2(tmp3[12]).Stack;
  const obj8 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.centeredText, children: intl4.string(stateFromStores(data[22])["v5/qxX"]) };
  const Heading = tmp2(tmp3[11]).Heading;
  intl4 = tmp2(tmp3[21]).intl;
  items5 = [tmp7(Heading, obj8), ];
  const obj9 = { variant: "text-sm/medium", color: "text-muted", style: tmp.centeredText, children: formatToPlainString(txHfjn, obj10) };
  const Text3 = tmp2(tmp3[11]).Text;
  const intl5 = tmp2(tmp3[21]).intl;
  formatToPlainString = intl5.formatToPlainString;
  txHfjn = tmp5(tmp3[22]).txHfjn;
  const tmp5Result = stateFromStores(data[23]);
  let str = tmp5Result.getName(stateFromStores);
  tmp14 = closure_8;
  if (str == null) {
    str = "";
  }
  obj10 = { username: str, days };
  items5[1] = tmp7(Text3, obj9);
  return tmp7(ActionSheet, obj6);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationInvitePickerActionSheet.tsx");

export default tmp4;
