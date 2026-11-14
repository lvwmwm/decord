// Module ID: 14071
// Function ID: 14072
// Name: GameOrganizationCantJoinActionSheet
// Dependencies: [19, 5177, 12369, 21, 5552, 14072, 504, 7231, 12539, 2565, 10713, 7913, 1113, 5936, 2]
// Exports: default

// Module 14071 (GameOrganizationCantJoinActionSheet)
import Fragment from "Fragment" /* 21 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import transitionToGuild from "transitionToGuild" /* 7231 */;
import useResolvedGameOrganizationInviteDefault from "useResolvedGameOrganizationInvite" /* 14072 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 5177 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 12369 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let tmp;
const _modDef2565 = tmp(2565);
const getGameOrganizationDisplayNounDefault = tmp(12539);
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
      lXyJMS = _modDef2565.lXyJMS;
    } else {
      lXyJMS = _modDef2565["IIR/NZ"];
    }
    const PromoSheet = tmp5(10713).PromoSheet;
    const intl = tmp5(1113).intl;
    const obj4 = { noun: tmp11 };
    const intl2 = tmp5(1113).intl;
    const obj5 = { noun: tmp11, guildName: tmp3.linkedGuild.name };
    const Button = tmp5(5936).Button;
    if (stateFromStores) {
      const obj6 = { text: intl4.string(_modDef2565.H1wMHV), size: "lg", onPress: tmp7 };
      intl4 = tmp5(1113).intl;
    } else {
      ({ text: intl3.string(guildId(1113).t.cpT0Cq), variant: "secondary", size: "lg", onPress: hideSheet });
      intl3 = tmp5(1113).intl;
    }
    return <PromoSheet header={null} title={intl.formatToPlainString(_modDef2565.DinVUQ, obj4)} description={intl2.formatToPlainString(lXyJMS, obj5)} actions={null} />;
  }
};
