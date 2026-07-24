// Module ID: 14173
// Function ID: 109038
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1352, 1348, 566, 686, 2]

// Module 14173 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import initialize from "initialize";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { createChannelRecord } from "_callSuper";
import closure_6 from "_isNativeReflectConstruct";

function _isNativeReflectConstruct() {
  let _isNativeReflectConstruct = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return _isNativeReflectConstruct;
  }
  const result = _isNativeReflectConstruct();
}
let closure_7 = {};
let closure_8 = {};
let tmp2 = ((Store) => {
  class GuildRoleSubscriptionTierTemplatesStore {
    constructor() {
      self = this;
      tmp = GuildRoleSubscriptionTierTemplatesStore(this, GuildRoleSubscriptionTierTemplatesStore);
      obj = outer1_3(GuildRoleSubscriptionTierTemplatesStore);
      tmp2 = outer1_2;
      if (outer1_9()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(GuildRoleSubscriptionTierTemplatesStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_6);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getTemplates",
    value(arg0) {
      return outer1_7[arg0];
    }
  };
  items[1] = obj;
  obj = {
    key: "getTemplateWithCategory",
    value(arg0, arg1) {
      let _isNativeReflectConstruct = arg1;
      let found;
      if (null != outer1_7[arg0]) {
        found = arr.find((category) => category.category === _isNativeReflectConstruct);
      }
      return found;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getChannel",
    value(arg0) {
      return outer1_8[arg0];
    }
  };
  return callback(GuildRoleSubscriptionTierTemplatesStore, items);
})(require("initialize").Store);
tmp2.displayName = "GuildRoleSubscriptionTierTemplatesStore";
tmp2 = new tmp2(require("dispatcher"), {
  GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function handleStashTemplateChannels(guildId) {
    let _isNativeReflectConstruct = Object.values(mutableGuildChannelsForGuild.getMutableGuildChannelsForGuild(guildId.guildId));
    const listings = guildId.selectedTemplate.listings;
    let item = listings.forEach((channels) => {
      channels = channels.channels;
      const item = channels.forEach((id) => {
        let _isNativeReflectConstruct = id;
        const found = outer1_0.find((name) => name.name === name.name);
        if (undefined !== found) {
          id.id = found.id;
        } else if (!(id.id in outer2_8)) {
          outer2_8[id.id] = outer2_5(id);
        }
      });
    });
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES: function handleFetchTemplates(guildId) {
    closure_7[guildId.guildId] = guildId.templates;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/guild_role_subscriptions/tier_templates/GuildRoleSubscriptionTierTemplatesStore.tsx");

export default tmp2;
