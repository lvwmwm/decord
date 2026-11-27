// Module ID: 12338
// Function ID: 12339
// Name: GameOrganizationCantJoinActionSheet
// Dependencies: [19, 4914, 11925, 21, 5257, 12339, 504, 8601, 2651, 10748, 7507, 1112, 5641, 2]
// Exports: default

// Module 12338 (GameOrganizationCantJoinActionSheet)
import Fragment from "Fragment" /* 21 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import transitionToGuild from "transitionToGuild" /* 8601 */;
import useResolvedGameOrganizationInviteDefault from "useResolvedGameOrganizationInvite" /* 12339 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4914 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11925 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let tmp;
const _modDef2651 = tmp(2651);
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
    let str = tmp3.displayNoun;
    if (str == null) {
      str = "other";
    }
    if (reason === constants.NO_CHARACTERS) {
      lXyJMS = _modDef2651.lXyJMS;
    } else {
      lXyJMS = _modDef2651["IIR/NZ"];
    }
    const PromoSheet = tmp5(10748).PromoSheet;
    const intl = tmp5(1112).intl;
    const obj3 = { displayNoun: str };
    const intl2 = tmp5(1112).intl;
    const obj4 = { displayNoun: str, guildName: tmp3.linkedGuild.name };
    const Button = tmp5(5641).Button;
    if (stateFromStores) {
      const obj5 = { text: intl4.string(_modDef2651.H1wMHV), size: "lg", onPress: tmp7 };
      intl4 = tmp5(1112).intl;
    } else {
      ({ text: intl3.string(guildId(1112).t.cpT0Cq), variant: "secondary", size: "lg", onPress: hideSheet });
      intl3 = tmp5(1112).intl;
    }
    return <PromoSheet header={null} title={intl.formatToPlainString(_modDef2651.DinVUQ, obj3)} description={intl2.formatToPlainString(lXyJMS, obj4)} actions={null} />;
  }
};
