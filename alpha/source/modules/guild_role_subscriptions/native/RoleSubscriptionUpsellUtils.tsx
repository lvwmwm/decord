// Module ID: 9775
// Function ID: 9776
// Name: RoleSubscriptionUpsellUtils
// Dependencies: [19, 21, 5864, 9776, 2002, 2]

// Module 9775 (RoleSubscriptionUpsellUtils)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 2002 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5864 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = {
  handleShowEmojiUpsellAlert(guildId) {
    guildId = guildId.guildId;
    const obj = actions_AlertActionCreatorsDefault;
    const obj2 = {
      importer() {
        const promise = asyncRequire(9776, dependencyMap.paths);
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
