// Module ID: 19148
// Function ID: 19149
// Name: BloonsTDBattlesAccountLinkUpsellBottomSheet
// Dependencies: [19, 1388, 7403, 21, 563, 19149, 6745, 19150, 19142, 5006, 19152, 2121, 5808, 7407, 19153, 14399, 5383, 1113, 3601, 2]
// Exports: default

// Module 19148 (BloonsTDBattlesAccountLinkUpsellBottomSheet)
import _modDef3601 from "module_3601" /* 3601 */;
import ApplicationAccountLinkingConstants from "ApplicationAccountLinkingConstants" /* 7403 */;
import GameIconDefault from "GameIcon" /* 7407 */;
import CutoutableAvatarImageDefault from "CutoutableAvatarImage" /* 14399 */;
import AccountLinkManager from "AccountLinkManager" /* 19142 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1388 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let closure_5 = ApplicationAccountLinkingConstants.ApplicationAccountLinkingConstants;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let result = size.fileFinishedImporting("modules/application_account_linking/native/BloonsTDBattlesAccountLinkUpsellBottomSheet.tsx");

export default function BloonsTDBattlesAccountLinkBottomSheet(markAsDismissed) {
  let currentUser;
  let intl;
  let intl2;
  let items2;
  let items3;
  let obj10;
  let username;
  let BLOONS_TD_BATTLES_2_APPLICATION_ID;
  markAsDismissed = markAsDismissed.markAsDismissed;
  let obj = BLOONS_TD_BATTLES_2_APPLICATION_ID(563);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj2 = BLOONS_TD_BATTLES_2_APPLICATION_ID(19149);
  const accountLinkBottomSheetStyles = obj2.useAccountLinkBottomSheetStyles();
  BLOONS_TD_BATTLES_2_APPLICATION_ID = closure_5.BLOONS_TD_BATTLES_2_APPLICATION_ID;
  const obj3 = BLOONS_TD_BATTLES_2_APPLICATION_ID(6745);
  const getOrFetchApplication = obj3.useGetOrFetchApplication(BLOONS_TD_BATTLES_2_APPLICATION_ID);
  const bloonsTDBattlesUpsellExperiment = BLOONS_TD_BATTLES_2_APPLICATION_ID(19150).bloonsTDBattlesUpsellExperiment;
  [][0] = BLOONS_TD_BATTLES_2_APPLICATION_ID;
  const orbQuantity = bloonsTDBattlesUpsellExperiment.useConfig({ location: "AccountLinkUpsellBottomSheet" }).orbQuantity;
  if (null != stateFromStores) {
    if (null != getOrFetchApplication) {
      const obj4 = { align: "flex-start", direction: "vertical", spacing: 24, style: accountLinkBottomSheetStyles.content, children: items2 };
      const Stack2 = tmp(5808).Stack;
      const Stack3 = tmp(5808).Stack;
      const obj5 = { game: getOrFetchApplication, size: BLOONS_TD_BATTLES_2_APPLICATION_ID(7407).GameIconSizes.LARGE };
      const tmp12 = GameIconDefault;
      const items1 = [closure_6(tmp12, obj5), closure_6(BLOONS_TD_BATTLES_2_APPLICATION_ID(19153).UnionOrbsIcon, {}), ];
      const obj6 = { guildId: "a", user: stateFromStores, size: BLOONS_TD_BATTLES_2_APPLICATION_ID(14399).AvatarSizes.XXLARGE, "aria-label": username };
      username = undefined;
      const tmp13 = CutoutableAvatarImageDefault;
      if (stateFromStores != null) {
        username = stateFromStores.username;
      }
      const obj7 = { justify: "center", align: "center", direction: "horizontal", children: items1 };
      items1[2] = closure_6(tmp13, obj6);
      items2 = [closure_7(Stack3, obj7), ];
      const obj8 = { justify: "center", children: items3 };
      const Stack = tmp(5808).Stack;
      const obj9 = { variant: "heading-xl/semibold", color: "text-strong", style: accountLinkBottomSheetStyles.text, children: intl.format(_modDef3601.T0vNuI, obj10) };
      const Text = tmp(5383).Text;
      intl = tmp(1113).intl;
      obj10 = { orbCount: orbQuantity, applicationName: getOrFetchApplication.name };
      items3 = [closure_6(Text, obj9), ];
      const obj11 = { variant: "body-md/medium", color: "text-subtle", style: accountLinkBottomSheetStyles.text, children: intl2.string(_modDef3601["ru+EPb"]) };
      const Text2 = tmp(5383).Text;
      intl2 = tmp(1113).intl;
      items3[1] = closure_6(Text2, obj11);
      items2[1] = closure_7(Stack, obj8);
      const obj12 = { markAsDismissed, application: getOrFetchApplication, body: closure_7(Stack2, obj4), onSuccess: tmp6 };
      closure_7(Stack2, obj4);
      return closure_6(BLOONS_TD_BATTLES_2_APPLICATION_ID(19149).AccountLinkUpsellBottomSheet, obj12);
    }
  }
  return null;
};
