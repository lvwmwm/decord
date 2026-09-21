// Module ID: 10556
// Function ID: 10557
// Name: RoleSubscriptionUpsellUtils
// Dependencies: [19, 21, 5109, 10557, 1980, 2]

// Module 10556 (RoleSubscriptionUpsellUtils)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5109 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/RoleSubscriptionUpsellUtils.tsx");

export default {
  handleShowEmojiUpsellAlert(guildId) {
    guildId = guildId.guildId;
    actions_AlertActionCreatorsDefault.openLazy({
      importer() {
        return asyncRequireImpl(10557, dependencyMap.paths).then((result) => {
          closure_0 = result.default;
          return (arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj.guildId = guildId;
            return <closure_0 />;
          };
        });
      },
      isDismissable: false
    });
  }
};
