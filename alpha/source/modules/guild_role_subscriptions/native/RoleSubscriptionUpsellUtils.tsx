// Module ID: 9952
// Function ID: 9953
// Name: RoleSubscriptionUpsellUtils
// Dependencies: [5, 19, 21, 5954, 9953, 1995, 2]

// Module 9952 (RoleSubscriptionUpsellUtils)
import Fragment from "Fragment" /* 21 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5954 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let importDefault;

const jsx = Fragment.jsx;
let obj = {
  handleShowEmojiUpsellAlert(guildId) {
    let closure_1;
    let paths;
    guildId = guildId.guildId;
    let tmp = actions_AlertActionCreatorsDefault;
    const obj = {
      importer() {
        return closure_1(...arguments);
      },
      isDismissable: false
    };
    const openLazy = tmp.openLazy;
    importDefault = _asyncToGenerator(async () => {
      let c1;
      let closure_0;
      let tmp;
      await tmp(c2[5])(c2[4], c2.paths);
      tmp = arg1.default;
      return (arg0) => {
        const merged = Object.assign(arg0);
        return <closure_1_0 guildId={guildId} />;
      };
    });
    openLazy(obj);
  }
};
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/RoleSubscriptionUpsellUtils.tsx");

export default obj;
