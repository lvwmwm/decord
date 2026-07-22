// Module ID: 14009
// Function ID: 106559
// Name: _isNativeReflectConstruct
// Dependencies: [4294967295, 0, 0, 0, 0, 0]

// Module 14009 (_isNativeReflectConstruct)
import __exportStarResult1 from "__exportStarResult1";
import closure_2 from "__exportStarResult1";
import closure_3 from "__exportStarResult1";
import closure_4 from "__exportStarResult1";
import { createChannelRecord } from "__exportStarResult1";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_6 = importDefault(dependencyMap[6]);
let closure_7 = {};
let closure_8 = {};
let tmp2 = (Store) => {
  class GuildRoleSubscriptionTierTemplatesStore {
    constructor() {
      self = this;
      tmp = GuildRoleSubscriptionTierTemplatesStore(this, GuildRoleSubscriptionTierTemplatesStore);
      obj = closure_3(GuildRoleSubscriptionTierTemplatesStore);
      tmp2 = closure_2;
      if (closure_9()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = GuildRoleSubscriptionTierTemplatesStore;
  callback2(GuildRoleSubscriptionTierTemplatesStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_6);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getTemplates",
    value(arg0) {
      return closure_7[arg0];
    }
  };
  items[1] = obj;
  obj = {
    key: "getTemplateWithCategory",
    value(arg0, arg1) {
      const GuildRoleSubscriptionTierTemplatesStore = arg1;
      let found;
      if (null != closure_7[arg0]) {
        found = arr.find((category) => category.category === arg1);
      }
      return found;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getChannel",
    value(arg0) {
      return closure_8[arg0];
    }
  };
  return callback(GuildRoleSubscriptionTierTemplatesStore, items);
}(importDefault(dependencyMap[7]).Store);
tmp2.displayName = "GuildRoleSubscriptionTierTemplatesStore";
tmp2 = new tmp2(importDefault(dependencyMap[8]), {
  GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function handleStashTemplateChannels(guildId) {
    let closure_0 = Object.values(mutableGuildChannelsForGuild.getMutableGuildChannelsForGuild(guildId.guildId));
    const listings = guildId.selectedTemplate.listings;
    const item = listings.forEach((channels) => {
      channels = channels.channels;
      const item = channels.forEach((id) => {
        const found = id.find((name) => name.name === name.name);
        if (undefined !== found) {
          id.id = found.id;
        } else if (!(id.id in closure_8)) {
          closure_8[id.id] = callback(id);
        }
      });
    });
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES: function handleFetchTemplates(guildId) {
    closure_7[guildId.guildId] = guildId.templates;
  }
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/guild_role_subscriptions/tier_templates/GuildRoleSubscriptionTierTemplatesStore.tsx");

export default tmp2;
