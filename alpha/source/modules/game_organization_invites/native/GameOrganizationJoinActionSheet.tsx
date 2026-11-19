// Module ID: 12207
// Function ID: 12208
// Name: GameOrganizationJoinActionSheet
// Dependencies: [19, 17, 2165, 1388, 11834, 21, 4792, 575, 12171, 504, 12163, 7402, 12208, 5006, 12164, 5020, 7396, 11163, 1113, 2557, 5808, 7407, 6903, 1187, 5390, 6921, 2]
// Exports: default

// Module 12207 (GameOrganizationJoinActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11834 */;
import openGameOrganizationJoinModalDefault from "openGameOrganizationJoinModal" /* 12164 */;
import prefetchGameOrganizationAccountLinkStateDefault from "prefetchGameOrganizationAccountLinkState" /* 12208 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2165 */;
import UserStore from "UserStore" /* 1388 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4792 */;
import size from "module_2" /* 2 */;

let c9;
let metroImportAll;
let obj2;
const ActivityIndicator = react_native.ActivityIndicator;
let closure_7 = GameOrganizationInviteConstants.GAME_ORGANIZATION_JOIN_ACTION_SHEET_KEY;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let obj = { loading: obj2 };
obj2 = { paddingVertical: nativeDefault.space.PX_32 };
let closure_10 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinActionSheet.tsx");

export default function GameOrganizationJoinActionSheet(code) {
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
  let obj16;
  let obj5;
  let obj9;
  let tmp13;
  code = code.code;
  const analyticsLocations = code.analyticsLocations;
  let id;
  let gameOrganizationAccountLinkStatus;
  let startAuthorization;
  const tmp = closure_10();
  const tmp4 = analyticsLocations(id[8])(code);
  id = undefined;
  if (tmp4 != null) {
    id = tmp4.application.id;
  }
  let obj = code(tmp3[9]);
  const items = [ApplicationStore];
  const stateFromStores = obj.useStateFromStores(items, () => ApplicationStore.getApplication(id));
  let obj2 = code(tmp3[9]);
  const items1 = [UserStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => currentUser.getCurrentUser());
  const obj4 = code(id[10]);
  gameOrganizationAccountLinkStatus = obj4.useGameOrganizationAccountLinkStatus(id);
  startAuthorization = tmp2(tmp3[11])(stateFromStores).startAuthorization;
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
              let str = tmp4.displayNoun;
              if (str == null) {
                str = "other";
              }
              const obj3 = { header: closure_8(code(id[16]).BottomSheetTitleHeader, { title: null }), illustration: tmp13(Stack, obj5), title: intl.formatToPlainString(analyticsLocations(id[19]).a1DdcF, obj9), description: intl2.formatToPlainString(analyticsLocations(id[19])["xd+PSv"], obj10), actions: closure_8(Button, obj11) };
              const PromoSheet = tmp6(tmp3[17]).PromoSheet;
              obj5 = { direction: "horizontal", justify: "center", align: "center", spacing: analyticsLocations(id[7]).space.PX_16, children: items5 };
              Stack = tmp6(tmp3[20]).Stack;
              const obj6 = { game: stateFromStores, size: code(id[21]).GameIconSizes.LARGE };
              const tmp2Result = analyticsLocations(id[21]);
              items5 = [closure_8(tmp2Result, obj6), , ];
              const obj7 = { size: "md", color: analyticsLocations(id[7]).colors.INTERACTIVE_TEXT_DEFAULT };
              const MoreHorizontalIcon = tmp6(tmp3[22]).MoreHorizontalIcon;
              items5[1] = closure_8(MoreHorizontalIcon, obj7);
              let avatarSource;
              const Avatar = tmp6(tmp3[23]).Avatar;
              tmp13 = closure_9;
              if (stateFromStores1 != null) {
                avatarSource = stateFromStores1.getAvatarSource(undefined);
              }
              if (avatarSource == null) {
                avatarSource = null;
              }
              const obj8 = { source: avatarSource, size: code(id[23]).AvatarSizes.XXLARGE };
              items5[2] = closure_8(Avatar, obj8);
              intl = tmp6(tmp3[18]).intl;
              obj9 = { gameName: tmp4.application.name, displayNoun: str };
              intl2 = tmp6(tmp3[18]).intl;
              obj10 = { displayNoun: str };
              obj11 = { text: intl3.string(analyticsLocations(id[19]).qD9GKX), icon: closure_8(GameControllerIcon, obj12), iconPosition: "start", size: "lg", onPress: tmp11 };
              Button = tmp6(tmp3[24]).Button;
              intl3 = tmp6(tmp3[18]).intl;
              obj12 = { size: "sm", color: analyticsLocations(id[7]).colors.WHITE };
              GameControllerIcon = tmp6(tmp3[25]).GameControllerIcon;
              return closure_8(PromoSheet, obj3);
            }
          }
        }
        const obj13 = { header: closure_8(code(id[16]).BottomSheetTitleHeader, { title: null }), title: intl4.string(code(id[18]).t.R0RpRX), description: formatToPlainStringResult };
        const PromoSheet2 = tmp6(tmp3[17]).PromoSheet;
        intl4 = tmp6(tmp3[18]).intl;
        formatToPlainStringResult = undefined;
        const tmp16 = closure_8;
        if ("link_unavailable" === gameOrganizationAccountLinkStatus) {
          const intl5 = tmp6(tmp3[18]).intl;
          const obj14 = { gameName: tmp4.application.name };
          formatToPlainStringResult = intl5.formatToPlainString(tmp2(tmp3[19]).yoPvEj, obj14);
        }
        return tmp16(PromoSheet2, obj13);
      }
    }
    const obj15 = { startExpanded: true, header: closure_8(code(id[16]).BottomSheetTitleHeader, { title: null }), children: closure_8(startAuthorization, obj16) };
    const BottomSheet = tmp6(tmp3[15]).BottomSheet;
    obj16 = { style: tmp.loading };
    return closure_8(BottomSheet, obj15);
  }
};
