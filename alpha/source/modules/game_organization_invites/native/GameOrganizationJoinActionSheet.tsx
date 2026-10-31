// Module ID: 13200
// Function ID: 13201
// Name: GameOrganizationJoinActionSheet
// Dependencies: [19, 17, 2038, 1383, 11363, 21, 5014, 575, 13188, 504, 13181, 7327, 13201, 5258, 13182, 5272, 7321, 10837, 1113, 2404, 13189, 6027, 7334, 9756, 1187, 5634, 9727, 2]
// Exports: default

// Module 13200 (GameOrganizationJoinActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11363 */;
import openGameOrganizationJoinModalDefault from "openGameOrganizationJoinModal" /* 13182 */;
import prefetchGameOrganizationAccountLinkStateDefault from "prefetchGameOrganizationAccountLinkState" /* 13201 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2038 */;
import UserStore from "UserStore" /* 1383 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let BottomSheet;

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
              const obj3 = { displayNoun: tmp4.displayNoun, lowercase: true };
              const tmp12 = analyticsLocations(id[20])(obj3);
              const obj5 = { header: closure_8(code(id[16]).BottomSheetTitleHeader, { title: null }), illustration: tmp14(Stack, obj6), title: intl.formatToPlainString(analyticsLocations(id[19]).a1DdcF, obj10), description: intl2.formatToPlainString(analyticsLocations(id[19])["xd+PSv"], obj11), actions: closure_8(Button, obj12) };
              const PromoSheet = tmp6(tmp3[17]).PromoSheet;
              obj6 = { direction: "horizontal", justify: "center", align: "center", spacing: analyticsLocations(id[7]).space.PX_16, children: items5 };
              Stack = tmp6(tmp3[21]).Stack;
              const obj7 = { game: stateFromStores, size: code(id[22]).GameIconSizes.LARGE };
              const tmp2Result = analyticsLocations(id[22]);
              items5 = [closure_8(tmp2Result, obj7), , ];
              const obj8 = { size: "md", color: analyticsLocations(id[7]).colors.INTERACTIVE_TEXT_DEFAULT };
              const MoreHorizontalIcon = tmp6(tmp3[23]).MoreHorizontalIcon;
              items5[1] = closure_8(MoreHorizontalIcon, obj8);
              let avatarSource;
              const Avatar = tmp6(tmp3[24]).Avatar;
              tmp14 = closure_9;
              if (stateFromStores1 != null) {
                avatarSource = stateFromStores1.getAvatarSource(undefined);
              }
              if (avatarSource == null) {
                avatarSource = null;
              }
              const obj9 = { source: avatarSource, size: code(id[24]).AvatarSizes.XXLARGE };
              items5[2] = closure_8(Avatar, obj9);
              intl = tmp6(tmp3[18]).intl;
              obj10 = { gameName: tmp4.application.name, noun: tmp12 };
              intl2 = tmp6(tmp3[18]).intl;
              obj11 = { noun: tmp12 };
              obj12 = { text: intl3.string(analyticsLocations(id[19]).qD9GKX), icon: closure_8(GameControllerIcon, obj13), iconPosition: "start", size: "lg", onPress: tmp11 };
              Button = tmp6(tmp3[25]).Button;
              intl3 = tmp6(tmp3[18]).intl;
              obj13 = { size: "sm", color: analyticsLocations(id[7]).colors.WHITE };
              GameControllerIcon = tmp6(tmp3[26]).GameControllerIcon;
              return closure_8(PromoSheet, obj5);
            }
          }
        }
        const obj14 = { header: closure_8(code(id[16]).BottomSheetTitleHeader, { title: null }), title: intl4.string(code(id[18]).t.R0RpRX), description: formatToPlainStringResult };
        const PromoSheet2 = tmp6(tmp3[17]).PromoSheet;
        intl4 = tmp6(tmp3[18]).intl;
        formatToPlainStringResult = undefined;
        const tmp17 = closure_8;
        if ("link_unavailable" === gameOrganizationAccountLinkStatus) {
          const intl5 = tmp6(tmp3[18]).intl;
          const obj15 = { gameName: tmp4.application.name };
          formatToPlainStringResult = intl5.formatToPlainString(tmp2(tmp3[19]).yoPvEj, obj15);
        }
        return tmp17(PromoSheet2, obj14);
      }
    }
    const obj16 = { startExpanded: true, header: closure_8(code(id[16]).BottomSheetTitleHeader, { title: null }), children: closure_8(startAuthorization, obj17) };
    BottomSheet = tmp6(tmp3[15]).BottomSheet;
    obj17 = { style: tmp.loading };
    return closure_8(BottomSheet, obj16);
  }
};
