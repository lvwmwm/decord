// Module ID: 9913
// Function ID: 9914
// Name: RoleSubscriptionUpsellUtils
// Dependencies: [19, 21, 5715, 9914, 1987, 2]

// Module 9913 (RoleSubscriptionUpsellUtils)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5715 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = {
  handleShowEmojiUpsellAlert(guildId) {
    guildId = guildId.guildId;
    const obj = actions_AlertActionCreatorsDefault;
    const obj2 = {
      importer() {
        const promise = asyncRequire(9914, dependencyMap.paths);
        return promise.then((result) => {
          let closure_0 = result.default;
          return (arg0) => {
            const merged = Object.assign(arg0);
            return <closure_0 guildId={guildId} />;
          };
        });
      },
      isDismissable: false
    };
    obj.openLazy(obj2);
  }
};
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/RoleSubscriptionUpsellUtils.tsx");

export default obj;
