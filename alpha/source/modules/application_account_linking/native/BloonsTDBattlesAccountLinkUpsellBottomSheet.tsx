// Module ID: 19096
// Function ID: 19097
// Name: BloonsTDBattlesAccountLinkUpsellBottomSheet
// Dependencies: [19, 1386, 7522, 21, 563, 19097, 6864, 19098, 19090, 5127, 19100, 2119, 5929, 7526, 19101, 14487, 5504, 1112, 3702, 2]
// Exports: default

// Module 19096 (BloonsTDBattlesAccountLinkUpsellBottomSheet)
import _modDef3702 from "module_3702" /* 3702 */;
import ApplicationAccountLinkingConstants from "ApplicationAccountLinkingConstants" /* 7522 */;
import GameIconDefault from "GameIcon" /* 7526 */;
import CutoutableAvatarImageDefault from "CutoutableAvatarImage" /* 14487 */;
import AccountLinkManager from "AccountLinkManager" /* 19090 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1386 */;
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
  let obj2 = BLOONS_TD_BATTLES_2_APPLICATION_ID(19097);
  const accountLinkBottomSheetStyles = obj2.useAccountLinkBottomSheetStyles();
  BLOONS_TD_BATTLES_2_APPLICATION_ID = closure_5.BLOONS_TD_BATTLES_2_APPLICATION_ID;
  const obj3 = BLOONS_TD_BATTLES_2_APPLICATION_ID(6864);
  const getOrFetchApplication = obj3.useGetOrFetchApplication(BLOONS_TD_BATTLES_2_APPLICATION_ID);
  const bloonsTDBattlesUpsellExperiment = BLOONS_TD_BATTLES_2_APPLICATION_ID(19098).bloonsTDBattlesUpsellExperiment;
  [][0] = BLOONS_TD_BATTLES_2_APPLICATION_ID;
  const orbQuantity = bloonsTDBattlesUpsellExperiment.useConfig({ location: "AccountLinkUpsellBottomSheet" }).orbQuantity;
  if (null != stateFromStores) {
    if (null != getOrFetchApplication) {
      const obj4 = { align: "flex-start", direction: "vertical", spacing: 24, style: accountLinkBottomSheetStyles.content, children: items2 };
      const Stack2 = tmp(5929).Stack;
      const Stack3 = tmp(5929).Stack;
      const obj5 = { game: getOrFetchApplication, size: BLOONS_TD_BATTLES_2_APPLICATION_ID(7526).GameIconSizes.LARGE };
      const tmp12 = GameIconDefault;
      const items1 = [closure_6(tmp12, obj5), closure_6(BLOONS_TD_BATTLES_2_APPLICATION_ID(19101).UnionOrbsIcon, {}), ];
      const obj6 = { guildId: "a", user: stateFromStores, size: BLOONS_TD_BATTLES_2_APPLICATION_ID(14487).AvatarSizes.XXLARGE, "aria-label": username };
      username = undefined;
      const tmp13 = CutoutableAvatarImageDefault;
      if (stateFromStores != null) {
        username = stateFromStores.username;
      }
      const obj7 = { justify: "center", align: "center", direction: "horizontal", children: items1 };
      items1[2] = closure_6(tmp13, obj6);
      items2 = [closure_7(Stack3, obj7), ];
      const obj8 = { justify: "center", children: items3 };
      const Stack = tmp(5929).Stack;
      const obj9 = { variant: "heading-xl/semibold", color: "text-strong", style: accountLinkBottomSheetStyles.text, children: intl.format(_modDef3702.T0vNuI, obj10) };
      const Text = tmp(5504).Text;
      intl = tmp(1112).intl;
      obj10 = { orbCount: orbQuantity, applicationName: getOrFetchApplication.name };
      items3 = [closure_6(Text, obj9), ];
      const obj11 = { variant: "body-md/medium", color: "text-subtle", style: accountLinkBottomSheetStyles.text, children: intl2.string(_modDef3702["ru+EPb"]) };
      const Text2 = tmp(5504).Text;
      intl2 = tmp(1112).intl;
      items3[1] = closure_6(Text2, obj11);
      items2[1] = closure_7(Stack, obj8);
      const obj12 = { markAsDismissed, application: getOrFetchApplication, body: closure_7(Stack2, obj4), onSuccess: tmp6 };
      closure_7(Stack2, obj4);
      return closure_6(BLOONS_TD_BATTLES_2_APPLICATION_ID(19097).AccountLinkUpsellBottomSheet, obj12);
    }
  }
  return null;
};
