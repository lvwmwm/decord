// Module ID: 13970
// Function ID: 13971
// Name: GameOrganizationCantJoinActionSheet
// Dependencies: [19, 5114, 12280, 21, 5489, 13971, 504, 7168, 13972, 2549, 10651, 7847, 1113, 5873, 2]
// Exports: default

// Module 13970 (GameOrganizationCantJoinActionSheet)
import Fragment from "Fragment" /* 21 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import transitionToGuild from "transitionToGuild" /* 7168 */;
import useResolvedGameOrganizationInviteDefault from "useResolvedGameOrganizationInvite" /* 13971 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 5114 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 12280 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let tmp;
const _modDef2549 = tmp(2549);
const getGameOrganizationDisplayNounDefault = tmp(13972);
function hideSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet(hasOwnProperty);
}
({ GAME_ORGANIZATION_CANT_JOIN_ACTION_SHEET_KEY: hasOwnProperty, GameOrganizationCantJoinReasons: metroRequire } = GameOrganizationInviteConstants);
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationCantJoinActionSheet.tsx");

export default function GameOrganizationCantJoinActionSheet(arg0) {
  let code;
  let intl3;
  let intl4;
  let reason;
  const tmp = importDefault;
  let tmp2 = dependencyMap;
  ({ code, reason } = arg0);
  const tmp3 = useResolvedGameOrganizationInviteDefault(code);
  let guildId;
  if (tmp3 != null) {
    guildId = tmp3.guildId;
  }
  let obj = guildId(504);
  const items = [GuildStore];
  [][0] = guildId;
  const stateFromStores = obj.useStateFromStores(items, () => {
    const tmp2 = null != guildId && null != GuildStore.getGuild(tmp);
    return tmp2;
  });
  if (null == tmp3) {
    return null;
  } else {
    let lXyJMS;
    let obj2 = { displayNoun: tmp3.displayNoun, lowercase: true };
    const tmp11 = getGameOrganizationDisplayNounDefault(obj2);
    if (reason === constants.NO_CHARACTERS) {
      lXyJMS = _modDef2549.lXyJMS;
    } else {
      lXyJMS = _modDef2549["IIR/NZ"];
    }
    const PromoSheet = tmp5(10651).PromoSheet;
    const intl = tmp5(1113).intl;
    const obj4 = { noun: tmp11 };
    const intl2 = tmp5(1113).intl;
    const obj5 = { noun: tmp11, guildName: tmp3.linkedGuild.name };
    const Button = tmp5(5873).Button;
    if (stateFromStores) {
      const obj6 = { text: intl4.string(_modDef2549.H1wMHV), size: "lg", onPress: tmp7 };
      intl4 = tmp5(1113).intl;
    } else {
      ({ text: intl3.string(guildId(1113).t.cpT0Cq), variant: "secondary", size: "lg", onPress: hideSheet });
      intl3 = tmp5(1113).intl;
    }
    return <PromoSheet header={null} title={intl.formatToPlainString(_modDef2549.DinVUQ, obj4)} description={intl2.formatToPlainString(lXyJMS, obj5)} actions={null} />;
  }
};
