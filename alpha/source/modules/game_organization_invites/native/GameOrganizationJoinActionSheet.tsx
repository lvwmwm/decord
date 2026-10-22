// Module ID: 12653
// Function ID: 12654
// Name: GameOrganizationJoinActionSheet
// Dependencies: [19, 17, 2045, 1392, 10993, 10994, 21, 4969, 587, 558, 576, 504, 12647, 7238, 12654, 5196, 12648, 7232, 5251, 1128, 2406, 10820, 12650, 7245, 9613, 1202, 5964, 9585, 5230, 2]

// Module 12653 (GameOrganizationJoinActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import openGameOrganizationJoinModalDefault from "openGameOrganizationJoinModal" /* 12648 */;
import prefetchGameOrganizationAccountLinkStateDefault from "prefetchGameOrganizationAccountLinkState" /* 12654 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2045 */;
import UserStore from "UserStore" /* 1392 */;
import GameOrganizationInviteStore from "GameOrganizationInviteStore" /* 10993 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 10994 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4969 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet, hideActionSheetResult, obj1, tmp2;

let c10;
let c9;
let metroImportAll;
let obj2;
let unpackModuleId;
const ActivityIndicator = react_native.ActivityIndicator;
({ GAME_ORGANIZATION_JOIN_ACTION_SHEET_KEY: metroImportAll, GameOrganizationInviteStates: c9 } = GameOrganizationInviteConstants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let obj = { loading: obj2 };
obj2 = { paddingVertical: nativeDefault.space.PX_32 };
let closure_12 = createStyles.createStyles(obj);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function GameOrganizationJoinActionSheet(code) {
  let currentUser;
  let first;
  let id;
  let items4;
  let tmp10;
  let tmp12;
  let tmp14;
  let tmp15;
  let tmp18;
  let tmp19;
  let tmp7;
  let obj = code(id[10]);
  const cResult = obj.c(60);
  code = code.code;
  const analyticsLocations = code.analyticsLocations;
  closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GameOrganizationInviteStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== code) {
    const fn = function f() {
      const invite = GameOrganizationInviteStore.getInvite(code);
      let state;
      if (invite != null) {
        state = invite.state;
      }
      let tmp3 = null;
      if (state === constants.RESOLVED) {
        tmp3 = invite;
      }
      return tmp3;
    };
    cResult[1] = code;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = code(id[11]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  id = undefined;
  if (stateFromStores != null) {
    id = stateFromStores.application.id;
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ApplicationStore];
    cResult[3] = items1;
    tmp10 = items1;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== id) {
    class P {
      constructor() {
        return ApplicationStore.getApplication(id);
      }
    }
    cResult[4] = id;
    cResult[5] = P;
    tmp12 = P;
  } else {
    class P {
      constructor() {
        return ApplicationStore.getApplication(id);
      }
    }
  }
  const tmpResult4 = code(id[11]);
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp10, tmp12);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
      constructor() {
        return ApplicationStore.getApplication(id);
      }
    }
    const items2 = [UserStore];
    class R {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[6] = items2;
    cResult[7] = R;
    tmp15 = R;
    tmp14 = items2;
  } else {
    class P {
      constructor() {
        return ApplicationStore.getApplication(id);
      }
    }
    tmp15 = cResult[7];
  }
  const tmpResult5 = code(id[11]);
  const stateFromStores2 = tmpResult5.useStateFromStores(tmp14, tmp15);
  const tmpResult6 = code(id[12]);
  const gameOrganizationAccountLinkStatus = tmpResult6.useGameOrganizationAccountLinkStatus(id);
  const startAuthorization = analyticsLocations(tmp2[13])(stateFromStores1).startAuthorization;
  if (cResult[8] !== code) {
    class P {
      constructor() {
        return ApplicationStore.getApplication(id);
      }
    }
    const items3 = [code];
    class R {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[8] = code;
    cResult[9] = tmp20;
    cResult[10] = items3;
    tmp19 = items3;
    tmp18 = tmp20;
  } else {
    class P {
      constructor() {
        return ApplicationStore.getApplication(id);
      }
    }
    tmp19 = cResult[10];
  }
  const effect = gameOrganizationAccountLinkStatus.useEffect(tmp18, tmp19);
  const obj6 = gameOrganizationAccountLinkStatus;
  if (cResult[11] === code) {
    class P {
      constructor() {
        return ApplicationStore.getApplication(id);
      }
    }
    const effect1 = obj6.useEffect(X, items4);
    if (cResult[15] === analyticsLocations) {
      class P {
        constructor() {
          return ApplicationStore.getApplication(id);
        }
      }
    }
    class F {
      constructor() {
        obj = closure_1(closure_2[15]);
        hideActionSheetResult = obj.hideActionSheet(closure_8);
        obj1 = {
          analyticsLocations,
          onSuccess() {
                  return analyticsLocations(id[16])(code);
                }
        };
        tmp2 = startAuthorization(obj1);
        return;
      }
    }
    cResult[15] = analyticsLocations;
    cResult[16] = code;
    cResult[17] = startAuthorization;
    cResult[18] = F;
  }
  class X {
    constructor() {
      if ("linked" === gameOrganizationAccountLinkStatus) {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(metroImportAll);
        openGameOrganizationJoinModalDefault(code);
      }
    }
  }
  items4 = [gameOrganizationAccountLinkStatus, code];
  cResult[11] = code;
  cResult[12] = gameOrganizationAccountLinkStatus;
  cResult[13] = items4;
  cResult[14] = X;
}) : (function GameOrganizationJoinActionSheet(code) {
  let Button;
  let GameControllerIcon;
  let Stack;
  let currentUser;
  let formatToPlainStringResult;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items6;
  let obj10;
  let obj11;
  let obj15;
  let obj4;
  let obj8;
  let obj9;
  let tmp14;
  code = code.code;
  const analyticsLocations = code.analyticsLocations;
  let id;
  let gameOrganizationAccountLinkStatus;
  let startAuthorization;
  let tmp3 = id;
  const tmp = closure_12();
  let obj = code(id[11]);
  const items = [GameOrganizationInviteStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const invite = GameOrganizationInviteStore.getInvite(code);
    let state;
    if (invite != null) {
      state = invite.state;
    }
    let tmp3 = null;
    if (state === constants.RESOLVED) {
      tmp3 = invite;
    }
    return tmp3;
  });
  id = undefined;
  if (stateFromStores != null) {
    id = stateFromStores.application.id;
  }
  const items1 = [ApplicationStore];
  const tmp2Result = code(tmp3[11]);
  const stateFromStores1 = tmp2Result.useStateFromStores(items1, () => ApplicationStore.getApplication(id));
  const items2 = [UserStore];
  const tmp2Result3 = code(tmp3[11]);
  const stateFromStores2 = tmp2Result3.useStateFromStores(items2, () => currentUser.getCurrentUser());
  const tmp2Result4 = code(tmp3[12]);
  gameOrganizationAccountLinkStatus = tmp2Result4.useGameOrganizationAccountLinkStatus(id);
  startAuthorization = analyticsLocations(tmp3[13])(stateFromStores1).startAuthorization;
  const items3 = [code];
  const effect = gameOrganizationAccountLinkStatus.useEffect(() => {
    prefetchGameOrganizationAccountLinkStateDefault(code);
  }, items3);
  const items4 = [gameOrganizationAccountLinkStatus, code];
  const effect1 = gameOrganizationAccountLinkStatus.useEffect(() => {
    if ("linked" === gameOrganizationAccountLinkStatus) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(metroImportAll);
      openGameOrganizationJoinModalDefault(code);
    }
  }, items4);
  const items5 = [analyticsLocations, startAuthorization, code];
  if (null == stateFromStores) {
    return null;
  } else {
    if ("loading" !== gameOrganizationAccountLinkStatus) {
      if ("linked" !== gameOrganizationAccountLinkStatus) {
        if ("error" !== gameOrganizationAccountLinkStatus) {
          if ("link_unavailable" !== gameOrganizationAccountLinkStatus) {
            if ("needs_link" === gameOrganizationAccountLinkStatus) {
              let obj2 = { displayNoun: stateFromStores.displayNoun, lowercase: true };
              const tmp12 = analyticsLocations(tmp3[22])(obj2);
              const obj3 = { header: closure_10(code(tmp3[17]).BottomSheetTitleHeader, { title: null }), illustration: tmp14(Stack, obj4), title: intl.formatToPlainString(analyticsLocations(tmp3[20]).a1DdcF, obj8), description: intl2.formatToPlainString(analyticsLocations(tmp3[20])["xd+PSv"], obj9), actions: closure_10(Button, obj10) };
              const PromoSheet = tmp2(tmp3[21]).PromoSheet;
              obj4 = { direction: "horizontal", justify: "center", align: "center", spacing: analyticsLocations(tmp3[8]).space.PX_16, children: items6 };
              Stack = tmp2(tmp3[26]).Stack;
              const obj5 = { game: stateFromStores1, size: code(tmp3[23]).GameIconSizes.LARGE };
              const tmp8Result = analyticsLocations(tmp3[23]);
              items6 = [closure_10(tmp8Result, obj5), , ];
              const obj6 = { size: "md", color: analyticsLocations(tmp3[8]).colors.INTERACTIVE_TEXT_DEFAULT };
              const MoreHorizontalIcon = tmp2(tmp3[24]).MoreHorizontalIcon;
              items6[1] = closure_10(MoreHorizontalIcon, obj6);
              let avatarSource;
              const Avatar = tmp2(tmp3[25]).Avatar;
              tmp14 = closure_11;
              if (stateFromStores2 != null) {
                avatarSource = stateFromStores2.getAvatarSource(undefined);
              }
              if (avatarSource == null) {
                avatarSource = null;
              }
              const obj7 = { source: avatarSource, size: code(tmp3[25]).AvatarSizes.XXLARGE };
              items6[2] = closure_10(Avatar, obj7);
              intl = tmp2(tmp3[19]).intl;
              obj8 = { gameName: stateFromStores.application.name, noun: tmp12 };
              intl2 = tmp2(tmp3[19]).intl;
              obj9 = { noun: tmp12 };
              obj10 = { text: intl3.string(analyticsLocations(tmp3[20]).qD9GKX), icon: closure_10(GameControllerIcon, obj11), iconPosition: "start", size: "lg", onPress: tmp11 };
              Button = tmp2(tmp3[28]).Button;
              intl3 = tmp2(tmp3[19]).intl;
              obj11 = { size: "sm", color: analyticsLocations(tmp3[8]).colors.WHITE };
              GameControllerIcon = tmp2(tmp3[27]).GameControllerIcon;
              return closure_10(PromoSheet, obj3);
            }
          }
        }
        const obj12 = { header: closure_10(code(tmp3[17]).BottomSheetTitleHeader, { title: null }), title: intl4.string(code(tmp3[19]).t.R0RpRX), description: formatToPlainStringResult };
        const PromoSheet2 = tmp2(tmp3[21]).PromoSheet;
        intl4 = tmp2(tmp3[19]).intl;
        formatToPlainStringResult = undefined;
        const tmp17 = closure_10;
        if ("link_unavailable" === gameOrganizationAccountLinkStatus) {
          const intl5 = tmp2(tmp3[19]).intl;
          const obj13 = { gameName: stateFromStores.application.name };
          formatToPlainStringResult = intl5.formatToPlainString(tmp8(tmp3[20]).yoPvEj, obj13);
        }
        return tmp17(PromoSheet2, obj12);
      }
    }
    const obj14 = { startExpanded: true, header: closure_10(code(tmp3[17]).BottomSheetTitleHeader, { title: null }), children: closure_10(startAuthorization, obj15) };
    BottomSheet = tmp2(tmp3[18]).BottomSheet;
    obj15 = { style: tmp.loading };
    return closure_10(BottomSheet, obj14);
  }
});
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinActionSheet.tsx");

export default tmp4;
