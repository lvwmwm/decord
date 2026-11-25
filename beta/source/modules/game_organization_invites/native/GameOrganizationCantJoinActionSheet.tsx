// Module ID: 12237
// Function ID: 12238
// Name: GameOrganizationCantJoinActionSheet
// Dependencies: [19, 4784, 11901, 21, 5127, 12238, 504, 6835, 2639, 11230, 7515, 1112, 5511, 2]
// Exports: default

// Module 12237 (GameOrganizationCantJoinActionSheet)
import Fragment from "Fragment" /* 21 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import transitionToGuild from "transitionToGuild" /* 6835 */;
import useResolvedGameOrganizationInviteDefault from "useResolvedGameOrganizationInvite" /* 12238 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4784 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11901 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let tmp;
const _modDef2639 = tmp(2639);
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
      lXyJMS = _modDef2639.lXyJMS;
    } else {
      lXyJMS = _modDef2639["IIR/NZ"];
    }
    const PromoSheet = tmp5(11230).PromoSheet;
    const intl = tmp5(1112).intl;
    const obj3 = { displayNoun: str };
    const intl2 = tmp5(1112).intl;
    const obj4 = { displayNoun: str, guildName: tmp3.linkedGuild.name };
    const Button = tmp5(5511).Button;
    if (stateFromStores) {
      const obj5 = { text: intl4.string(_modDef2639.H1wMHV), size: "lg", onPress: tmp7 };
      intl4 = tmp5(1112).intl;
    } else {
      ({ text: intl3.string(guildId(1112).t.cpT0Cq), variant: "secondary", size: "lg", onPress: hideSheet });
      intl3 = tmp5(1112).intl;
    }
    return <PromoSheet header={null} title={intl.formatToPlainString(_modDef2639.DinVUQ, obj3)} description={intl2.formatToPlainString(lXyJMS, obj4)} actions={null} />;
  }
};
