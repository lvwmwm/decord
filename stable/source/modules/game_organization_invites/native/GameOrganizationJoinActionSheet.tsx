// Module ID: 12766
// Function ID: 12767
// Name: GameOrganizationJoinActionSheet
// Dependencies: [19, 17, 2045, 1392, 11061, 21, 5003, 587, 558, 576, 12757, 504, 12752, 7286, 12767, 5242, 12753, 7280, 5297, 1128, 2406, 10887, 12758, 7293, 9676, 1202, 6009, 9648, 5276, 2]

// Module 12766 (GameOrganizationJoinActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5242 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11061 */;
import openGameOrganizationJoinModalDefault from "openGameOrganizationJoinModal" /* 12753 */;
import prefetchGameOrganizationAccountLinkStateDefault from "prefetchGameOrganizationAccountLinkState" /* 12767 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2045 */;
import UserStore from "UserStore" /* 1392 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5003 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet, hideActionSheetResult, obj1, tmp2;

let c9;
let metroImportAll;
let obj2;
const ActivityIndicator = react_native.ActivityIndicator;
let closure_7 = GameOrganizationInviteConstants.GAME_ORGANIZATION_JOIN_ACTION_SHEET_KEY;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let obj = { loading: obj2 };
obj2 = { paddingVertical: nativeDefault.space.PX_32 };
let closure_10 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function GameOrganizationJoinActionSheet(code) {
  let currentUser;
  let first;
  let fn2;
  let id;
  let items3;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp17;
  let tmp18;
  let obj = code(id[9]);
  const cResult = obj.c(57);
  code = code.code;
  const analyticsLocations = code.analyticsLocations;
  closure_10();
  const tmp6 = analyticsLocations(id[10])(code);
  id = undefined;
  const tmp5 = analyticsLocations;
  if (tmp6 != null) {
    id = tmp6.application.id;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ApplicationStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id) {
    const fn = function _() {
      return ApplicationStore.getApplication(id);
    };
    cResult[1] = id;
    cResult[2] = fn;
    tmp10 = fn;
  } else {
    tmp10 = cResult[2];
  }
  const tmpResult = code(id[11]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp10);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    class P {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[3] = items1;
    cResult[4] = P;
    tmp13 = P;
    tmp12 = items1;
  } else {
    tmp12 = cResult[3];
    tmp13 = cResult[4];
  }
  const tmpResult3 = code(id[11]);
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp12, tmp13);
  const tmpResult4 = code(id[12]);
  const gameOrganizationAccountLinkStatus = tmpResult4.useGameOrganizationAccountLinkStatus(id);
  const startAuthorization = tmp5(tmp2[13])(stateFromStores).startAuthorization;
  if (cResult[5] !== code) {
    class G {
      constructor() {
        prefetchGameOrganizationAccountLinkStateDefault(code);
      }
    }
    const items2 = [code];
    class P {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[5] = code;
    cResult[6] = G;
    cResult[7] = items2;
    tmp18 = items2;
    tmp17 = G;
  } else {
    class G {
      constructor() {
        prefetchGameOrganizationAccountLinkStateDefault(code);
      }
    }
    tmp18 = cResult[7];
  }
  const effect = gameOrganizationAccountLinkStatus.useEffect(tmp17, tmp18);
  const obj5 = gameOrganizationAccountLinkStatus;
  if (cResult[8] === code) {
    class G {
      constructor() {
        prefetchGameOrganizationAccountLinkStateDefault(code);
      }
    }
    const effect1 = obj5.useEffect(fn2, items3);
    if (cResult[12] === analyticsLocations) {
      class G {
        constructor() {
          prefetchGameOrganizationAccountLinkStateDefault(code);
        }
      }
    }
    class R {
      constructor() {
        obj = closure_1(closure_2[15]);
        hideActionSheetResult = obj.hideActionSheet(closure_7);
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
    cResult[12] = analyticsLocations;
    cResult[13] = code;
    cResult[14] = startAuthorization;
    cResult[15] = R;
  }
  fn2 = function k() {
    if ("linked" === gameOrganizationAccountLinkStatus) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(closure_7);
      openGameOrganizationJoinModalDefault(code);
    }
  };
  items3 = [gameOrganizationAccountLinkStatus, code];
  cResult[8] = code;
  cResult[9] = gameOrganizationAccountLinkStatus;
  cResult[10] = fn2;
  cResult[11] = items3;
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
  let items5;
  let obj10;
  let obj11;
  let obj12;
  let obj13;
  let obj17;
  let obj6;
  let tmp14;
  code = code.code;
  const analyticsLocations = code.analyticsLocations;
  let id;
  let gameOrganizationAccountLinkStatus;
  let startAuthorization;
  const tmp = closure_10();
  const tmp4 = analyticsLocations(id[10])(code);
  id = undefined;
  if (tmp4 != null) {
    id = tmp4.application.id;
  }
  let obj = code(tmp3[11]);
  const items = [ApplicationStore];
  const stateFromStores = obj.useStateFromStores(items, () => ApplicationStore.getApplication(id));
  let obj2 = code(tmp3[11]);
  const items1 = [UserStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => currentUser.getCurrentUser());
  const obj4 = code(id[12]);
  gameOrganizationAccountLinkStatus = obj4.useGameOrganizationAccountLinkStatus(id);
  startAuthorization = tmp2(tmp3[13])(stateFromStores).startAuthorization;
  const items2 = [code];
  const effect = gameOrganizationAccountLinkStatus.useEffect(() => {
    prefetchGameOrganizationAccountLinkStateDefault(code);
  }, items2);
  const items3 = [gameOrganizationAccountLinkStatus, code];
  const effect1 = gameOrganizationAccountLinkStatus.useEffect(() => {
    if ("linked" === gameOrganizationAccountLinkStatus) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(closure_7);
      openGameOrganizationJoinModalDefault(code);
    }
  }, items3);
  const items4 = [analyticsLocations, startAuthorization, code];
  if (null == tmp4) {
    return null;
  } else {
    if ("loading" !== gameOrganizationAccountLinkStatus) {
      if ("linked" !== gameOrganizationAccountLinkStatus) {
        if ("error" !== gameOrganizationAccountLinkStatus) {
          if ("link_unavailable" !== gameOrganizationAccountLinkStatus) {
            if ("needs_link" === gameOrganizationAccountLinkStatus) {
              const obj3 = { displayNoun: tmp4.displayNoun, lowercase: true };
              const tmp12 = analyticsLocations(id[22])(obj3);
              const obj5 = { header: closure_8(code(id[17]).BottomSheetTitleHeader, { title: null }), illustration: tmp14(Stack, obj6), title: intl.formatToPlainString(analyticsLocations(id[20]).a1DdcF, obj10), description: intl2.formatToPlainString(analyticsLocations(id[20])["xd+PSv"], obj11), actions: closure_8(Button, obj12) };
              const PromoSheet = tmp6(tmp3[21]).PromoSheet;
              obj6 = { direction: "horizontal", justify: "center", align: "center", spacing: analyticsLocations(id[7]).space.PX_16, children: items5 };
              Stack = tmp6(tmp3[26]).Stack;
              const obj7 = { game: stateFromStores, size: code(id[23]).GameIconSizes.LARGE };
              const tmp2Result = analyticsLocations(id[23]);
              items5 = [closure_8(tmp2Result, obj7), , ];
              const obj8 = { size: "md", color: analyticsLocations(id[7]).colors.INTERACTIVE_TEXT_DEFAULT };
              const MoreHorizontalIcon = tmp6(tmp3[24]).MoreHorizontalIcon;
              items5[1] = closure_8(MoreHorizontalIcon, obj8);
              let avatarSource;
              const Avatar = tmp6(tmp3[25]).Avatar;
              tmp14 = closure_9;
              if (stateFromStores1 != null) {
                avatarSource = stateFromStores1.getAvatarSource(undefined);
              }
              if (avatarSource == null) {
                avatarSource = null;
              }
              const obj9 = { source: avatarSource, size: code(id[25]).AvatarSizes.XXLARGE };
              items5[2] = closure_8(Avatar, obj9);
              intl = tmp6(tmp3[19]).intl;
              obj10 = { gameName: tmp4.application.name, noun: tmp12 };
              intl2 = tmp6(tmp3[19]).intl;
              obj11 = { noun: tmp12 };
              obj12 = { text: intl3.string(analyticsLocations(id[20]).qD9GKX), icon: closure_8(GameControllerIcon, obj13), iconPosition: "start", size: "lg", onPress: tmp11 };
              Button = tmp6(tmp3[28]).Button;
              intl3 = tmp6(tmp3[19]).intl;
              obj13 = { size: "sm", color: analyticsLocations(id[7]).colors.WHITE };
              GameControllerIcon = tmp6(tmp3[27]).GameControllerIcon;
              return closure_8(PromoSheet, obj5);
            }
          }
        }
        const obj14 = { header: closure_8(code(id[17]).BottomSheetTitleHeader, { title: null }), title: intl4.string(code(id[19]).t.R0RpRX), description: formatToPlainStringResult };
        const PromoSheet2 = tmp6(tmp3[21]).PromoSheet;
        intl4 = tmp6(tmp3[19]).intl;
        formatToPlainStringResult = undefined;
        const tmp17 = closure_8;
        if ("link_unavailable" === gameOrganizationAccountLinkStatus) {
          const intl5 = tmp6(tmp3[19]).intl;
          const obj15 = { gameName: tmp4.application.name };
          formatToPlainStringResult = intl5.formatToPlainString(tmp2(tmp3[20]).yoPvEj, obj15);
        }
        return tmp17(PromoSheet2, obj14);
      }
    }
    const obj16 = { startExpanded: true, header: closure_8(code(id[17]).BottomSheetTitleHeader, { title: null }), children: closure_8(startAuthorization, obj17) };
    BottomSheet = tmp6(tmp3[18]).BottomSheet;
    obj17 = { style: tmp.loading };
    return closure_8(BottomSheet, obj16);
  }
});
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinActionSheet.tsx");

export default tmp3;
