// Module ID: 4153
// Function ID: 35099
// Name: _callSuper
// Dependencies: [6, 7, 15, 17, 18, 1858, 4154, 1857, 4155, 4156, 4157, 4158, 1392, 4159, 483, 21, 2]

// Module 4153 (_callSuper)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import DISCORD_EPOCH from "DISCORD_EPOCH";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import items3 from "items3";
import { ApplicationTypes } from "ApplicationTypes";
import tmp4 from "Record";
import importDefaultResult from "Record";

let END_GAME_APPLICATION_ID;
let POKER_NIGHT_APPLICATION_ID;
const require = arg1;
function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const obj = callback2(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(obj, items, callback2(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, items);
  }
  return DISCORD_EPOCH(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function createExecutable(os) {
  const obj = { os: os.os, name: os.name };
  if (null != os.arguments) {
    obj.arguments = os.arguments;
  }
  if (null != os.is_launcher) {
    obj.isLauncher = os.is_launcher;
  }
  return obj;
}
({ END_GAME_APPLICATION_ID, POKER_NIGHT_APPLICATION_ID } = items3);
let closure_12 = { [POKER_NIGHT_APPLICATION_ID]: 7, [END_GAME_APPLICATION_ID]: 12 };
let tmp5 = ((arg0) => {
  class ApplicationRecord {
    constructor(arg0) {
      tmp = outer1_4(this, ApplicationRecord);
      items = [];
      items[0] = arg0;
      tmp2 = outer1_13(this, ApplicationRecord, items);
      overlay = arg0.overlay;
      tmp2.overlay = null != overlay && overlay;
      overlayWarn = arg0.overlayWarn;
      tmp2.overlayWarn = null != overlayWarn && overlayWarn;
      overlayCompatibilityHook = arg0.overlayCompatibilityHook;
      tmp2.overlayCompatibilityHook = null != overlayCompatibilityHook && overlayCompatibilityHook;
      DEFAULT = arg0.overlayMethods;
      if (null == DEFAULT) {
        tmp3 = ApplicationRecord;
        tmp4 = outer1_3;
        num = 13;
        DEFAULT = ApplicationRecord(outer1_3[13]).ApplicationOverlayMethodFlags.DEFAULT;
      }
      tmp2.overlayMethods = DEFAULT;
      hook = arg0.hook;
      tmp2.hook = null == hook || hook;
      aliases = arg0.aliases;
      if (null == aliases) {
        aliases = [];
      }
      tmp2.aliases = aliases;
      publishers = arg0.publishers;
      if (null == publishers) {
        publishers = [];
      }
      tmp2.publishers = publishers;
      developers = arg0.developers;
      if (null == developers) {
        developers = [];
      }
      tmp2.developers = developers;
      ({ storeListingSkuId: tmp2.storeListingSkuId, guildId: tmp2.guildId, guild: tmp2.guild, executables } = arg0);
      if (null == executables) {
        executables = [];
      }
      tmp2.executables = executables.map(outer1_15);
      hashes = arg0.hashes;
      if (null == hashes) {
        hashes = [];
      }
      tmp2.hashes = hashes;
      ({ eulaId: tmp2.eulaId, slug: tmp2.slug } = arg0);
      obj = outer1_2(outer1_3[14]);
      flags = arg0.flags;
      num2 = 0;
      if (null != flags) {
        num2 = flags;
      }
      tmp2.flags = obj.deserialize(num2);
      tags = arg0.tags;
      if (null == tags) {
        tags = [];
      }
      tmp2.tags = tags;
      ({ maxParticipants: tmp2.maxParticipants, embedded_activity_config } = arg0);
      if (null == embedded_activity_config) {
        embedded_activity_config = arg0.embeddedActivityConfig;
      }
      tmp2.embeddedActivityConfig = embedded_activity_config;
      ({ team: tmp2.team, integrationTypesConfig: tmp2.integrationTypesConfig, storefront_available: tmp2.storefront_available, termsOfServiceUrl: tmp2.termsOfServiceUrl, privacyPolicyUrl: tmp2.privacyPolicyUrl, is_discoverable } = arg0);
      if (null == is_discoverable) {
        is_discoverable = arg0.isDiscoverable;
      }
      tmp2.isDiscoverable = is_discoverable;
      customInstallUrl = arg0.custom_install_url;
      if (null == customInstallUrl) {
        customInstallUrl = arg0.customInstallUrl;
      }
      tmp2.customInstallUrl = customInstallUrl;
      installParams = arg0.install_params;
      if (null == installParams) {
        installParams = arg0.installParams;
      }
      tmp2.installParams = installParams;
      directoryEntry = arg0.directory_entry;
      if (null == directoryEntry) {
        directoryEntry = arg0.directoryEntry;
      }
      tmp2.directoryEntry = directoryEntry;
      ({ categories: tmp2.categories, linked_games } = arg0);
      mapped = undefined;
      if (null != linked_games) {
        mapped = linked_games.map((application) => {
          const obj = {};
          const merged = Object.assign(application);
          let fromServer;
          if (null != application.application) {
            fromServer = outer1_0.createFromServer(application.application);
          }
          obj["application"] = fromServer;
          return obj;
        });
      }
      if (null == mapped) {
        mapped = arg0.linkedGames;
      }
      tmp2.linkedGames = mapped;
      deeplink_uri = arg0.deepLinkUri;
      if (null == deeplink_uri) {
        deeplink_uri = arg0.deeplink_uri;
      }
      tmp2.deepLinkUri = deeplink_uri;
      application_account_link_benefit_config = arg0.applicationAccountLinkBenefitConfig;
      if (null == application_account_link_benefit_config) {
        application_account_link_benefit_config = arg0.application_account_link_benefit_config;
      }
      tmp2.applicationAccountLinkBenefitConfig = application_account_link_benefit_config;
      parent_id = arg0.parentId;
      if (null == parent_id) {
        parent_id = arg0.parent_id;
      }
      tmp2.parentId = parent_id;
      return tmp2;
    }
  }
  callback3(ApplicationRecord, arg0);
  let obj = {
    key: "getCanonicalGameId",
    value() {
      const self = this;
      if (this.type === outer1_11.GAME) {
        let castResult = outer1_1(outer1_3[15]).cast(self.id);
        const obj = outer1_1(outer1_3[15]);
      } else {
        const linkedGames = self.linkedGames;
        let id;
        if (null != linkedGames) {
          const found = linkedGames.find((application) => {
            application = application.application;
            let type;
            if (null != application) {
              type = application.type;
            }
            return type === outer2_11.GAME;
          });
          if (null != found) {
            id = found.id;
          }
        }
        castResult = null;
        if (null != id) {
          castResult = id;
        }
      }
      return castResult;
    }
  };
  let items = [obj, , , , , ];
  obj = {
    key: "mergeFromApplicationUpdate",
    value(id) {
      const self = this;
      let tmp = linkedGames;
      let obj = {};
      id = id.id;
      if (null == id) {
        id = self.id;
      }
      obj.id = id;
      let name = id.name;
      if (null == name) {
        name = self.name;
      }
      obj.name = name;
      let icon = id.icon;
      if (null == icon) {
        icon = self.icon;
      }
      obj.icon = icon;
      let splash = id.splash;
      if (null == splash) {
        splash = self.splash;
      }
      obj.splash = splash;
      let overlay = id.overlay;
      if (null == overlay) {
        overlay = self.overlay;
      }
      obj.overlay = overlay;
      let overlayWarn = id.overlayWarn;
      if (null == overlayWarn) {
        overlayWarn = self.overlayWarn;
      }
      obj.overlayWarn = overlayWarn;
      let overlayCompatibilityHook = id.overlayCompatibilityHook;
      if (null == overlayCompatibilityHook) {
        overlayCompatibilityHook = self.overlayCompatibilityHook;
      }
      obj.overlayCompatibilityHook = overlayCompatibilityHook;
      let overlayMethods = id.overlayMethods;
      if (null == overlayMethods) {
        overlayMethods = self.overlayMethods;
      }
      obj.overlayMethods = overlayMethods;
      let hook = id.hook;
      if (null == hook) {
        hook = self.hook;
      }
      obj.hook = hook;
      let aliases = id.aliases;
      if (null == aliases) {
        aliases = self.aliases;
      }
      obj.aliases = aliases;
      let publishers = id.publishers;
      if (null == publishers) {
        publishers = self.publishers;
      }
      obj.publishers = publishers;
      let developers = id.developers;
      if (null == developers) {
        developers = self.developers;
      }
      obj.developers = developers;
      let primarySkuId = id.primarySkuId;
      if (null == primarySkuId) {
        primarySkuId = self.primarySkuId;
      }
      obj.primarySkuId = primarySkuId;
      let storeListingSkuId = id.storeListingSkuId;
      if (null == storeListingSkuId) {
        storeListingSkuId = self.storeListingSkuId;
      }
      obj.storeListingSkuId = storeListingSkuId;
      let thirdPartySkus = id.thirdPartySkus;
      if (null == thirdPartySkus) {
        thirdPartySkus = self.thirdPartySkus;
      }
      obj.thirdPartySkus = thirdPartySkus;
      let guildId = id.guildId;
      if (null == guildId) {
        guildId = self.guildId;
      }
      obj.guildId = guildId;
      let guild = id.guild;
      if (null == guild) {
        guild = self.guild;
      }
      obj.guild = guild;
      let executables = id.executables;
      if (null == executables) {
        executables = self.executables;
      }
      obj.executables = executables;
      let hashes = id.hashes;
      if (null == hashes) {
        hashes = self.hashes;
      }
      obj.hashes = hashes;
      let description = id.description;
      if (null == description) {
        description = self.description;
      }
      obj.description = description;
      let eulaId = id.eulaId;
      if (null == eulaId) {
        eulaId = self.eulaId;
      }
      obj.eulaId = eulaId;
      let slug = id.slug;
      if (null == slug) {
        slug = self.slug;
      }
      obj.slug = slug;
      let coverImage = id.coverImage;
      if (null == coverImage) {
        coverImage = self.coverImage;
      }
      obj.coverImage = coverImage;
      let bot = id.bot;
      if (null == bot) {
        bot = self.bot;
      }
      obj.bot = bot;
      let flags = id.flags;
      if (null == flags) {
        flags = self.flags;
      }
      obj.flags = flags;
      let maxParticipants = id.maxParticipants;
      if (null == maxParticipants) {
        maxParticipants = self.maxParticipants;
      }
      obj.maxParticipants = maxParticipants;
      let tags = id.tags;
      if (null == tags) {
        tags = self.tags;
      }
      obj.tags = tags;
      let embeddedActivityConfig = id.embeddedActivityConfig;
      if (null == embeddedActivityConfig) {
        let tmp2;
        if (null != self.embeddedActivityConfig) {
          obj = {};
          let merged = Object.assign(self.embeddedActivityConfig);
          tmp2 = obj;
        }
        embeddedActivityConfig = tmp2;
      }
      obj.embeddedActivityConfig = embeddedActivityConfig;
      let type = id.type;
      if (null == type) {
        type = self.type;
      }
      obj.type = type;
      let team = id.team;
      if (null == team) {
        team = self.team;
      }
      obj.team = team;
      let roleConnectionsVerificationUrl = id.roleConnectionsVerificationUrl;
      if (null == roleConnectionsVerificationUrl) {
        roleConnectionsVerificationUrl = self.roleConnectionsVerificationUrl;
      }
      obj.roleConnectionsVerificationUrl = roleConnectionsVerificationUrl;
      let _connectionEntrypointUrl = id._connectionEntrypointUrl;
      if (null == _connectionEntrypointUrl) {
        _connectionEntrypointUrl = self._connectionEntrypointUrl;
      }
      obj._connectionEntrypointUrl = _connectionEntrypointUrl;
      let integrationTypesConfig = id.integrationTypesConfig;
      if (null == integrationTypesConfig) {
        integrationTypesConfig = self.integrationTypesConfig;
      }
      obj.integrationTypesConfig = integrationTypesConfig;
      let isMonetized = id.isMonetized;
      if (null == isMonetized) {
        isMonetized = self.isMonetized;
      }
      obj.isMonetized = isMonetized;
      let storefront_available = id.storefront_available;
      if (null == storefront_available) {
        storefront_available = self.storefront_available;
      }
      obj.storefront_available = storefront_available;
      let termsOfServiceUrl = id.termsOfServiceUrl;
      if (null == termsOfServiceUrl) {
        termsOfServiceUrl = self.termsOfServiceUrl;
      }
      obj.termsOfServiceUrl = termsOfServiceUrl;
      let privacyPolicyUrl = id.privacyPolicyUrl;
      if (null == privacyPolicyUrl) {
        privacyPolicyUrl = self.privacyPolicyUrl;
      }
      obj.privacyPolicyUrl = privacyPolicyUrl;
      let isVerified = id.isVerified;
      if (null == isVerified) {
        isVerified = self.isVerified;
      }
      obj.isVerified = isVerified;
      let customInstallUrl = id.customInstallUrl;
      if (null == customInstallUrl) {
        customInstallUrl = self.customInstallUrl;
      }
      obj.customInstallUrl = customInstallUrl;
      let installParams = id.installParams;
      if (null == installParams) {
        installParams = self.installParams;
      }
      obj.installParams = installParams;
      let isDiscoverable = id.isDiscoverable;
      if (null == isDiscoverable) {
        isDiscoverable = self.isDiscoverable;
      }
      obj.isDiscoverable = isDiscoverable;
      let directoryEntry = id.directoryEntry;
      if (null == directoryEntry) {
        directoryEntry = self.directoryEntry;
      }
      obj.directoryEntry = directoryEntry;
      let categories = id.categories;
      if (null == categories) {
        categories = self.categories;
      }
      obj.categories = categories;
      linkedGames = id.linkedGames;
      linkedGames = self.linkedGames;
      let tmp5 = linkedGames;
      if (null != linkedGames) {
        let mapped = linkedGames;
        if (null != linkedGames) {
          mapped = linkedGames.map((application) => {
            const linkedGames = application;
            if (null != application.application) {
              return application;
            } else {
              const found = linkedGames.find((id) => id.id === application.id);
              application = undefined;
              if (null != found) {
                application = found.application;
              }
              let tmp4 = application;
              if (null != application) {
                const obj = {};
                const merged = Object.assign(application);
                obj["application"] = found.application;
                tmp4 = obj;
              }
              return tmp4;
            }
          });
        }
        tmp5 = mapped;
      }
      obj.linkedGames = tmp5;
      let deepLinkUri = id.deepLinkUri;
      if (null == deepLinkUri) {
        deepLinkUri = self.deepLinkUri;
      }
      obj.deepLinkUri = deepLinkUri;
      let applicationAccountLinkBenefitConfig = id.applicationAccountLinkBenefitConfig;
      if (null == applicationAccountLinkBenefitConfig) {
        applicationAccountLinkBenefitConfig = self.applicationAccountLinkBenefitConfig;
      }
      obj.applicationAccountLinkBenefitConfig = applicationAccountLinkBenefitConfig;
      let contentClassification = id.contentClassification;
      if (null == contentClassification) {
        contentClassification = self.contentClassification;
      }
      obj.contentClassification = contentClassification;
      let parentId = id.parentId;
      if (null == parentId) {
        parentId = self.parentId;
      }
      obj.parentId = parentId;
      tmp = new tmp(obj);
      return tmp;
    }
  };
  items[1] = obj;
  obj = {
    key: "getMaxParticipants",
    value() {
      let maxParticipants = this.maxParticipants;
      if (null == maxParticipants) {
        maxParticipants = outer1_12[tmp.id];
      }
      let num = 0;
      if (null != maxParticipants) {
        num = maxParticipants;
      }
      return num;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "supportsIntegrationTypes",
    value(arg0) {
      const items = [...arguments];
      const integrationTypesConfig = this.integrationTypesConfig;
      return null != integrationTypesConfig && items.every((arg0) => arg0 in integrationTypesConfig);
    }
  };
  items[4] = {
    key: "destinationSkuId",
    get() {
      const self = this;
      return null != this.storeListingSkuId ? self.storeListingSkuId : self.primarySkuId;
    }
  };
  items[5] = {
    key: "supportsOutOfProcessOverlay",
    get() {
      return ApplicationRecord.supportsOutOfProcessOverlay(this.overlayMethods);
    }
  };
  const items1 = [
    {
      key: "createFromServer",
      value(cover_image) {
        let linked_games;
        let overlay_methods;
        let tmp = ApplicationRecord;
        let obj = {};
        let merged = Object.assign(cover_image);
        obj["coverImage"] = cover_image.cover_image;
        obj["primarySkuId"] = cover_image.primary_sku_id;
        let tmp3 = null;
        if (null != cover_image.bot) {
          const prototype = outer1_10.prototype;
          tmp3 = new outer1_10(cover_image.bot);
        }
        obj["bot"] = tmp3;
        obj["thirdPartySkus"] = cover_image.third_party_skus;
        obj["roleConnectionsVerificationUrl"] = cover_image.role_connections_verification_url;
        obj["overlayWarn"] = cover_image.overlay_warn;
        ({ overlay_compatibility_hook: obj["overlayCompatibilityHook"], overlay_methods } = cover_image);
        if (null == overlay_methods) {
          overlay_methods = ApplicationRecord(outer1_3[13]).ApplicationOverlayMethodFlags.DEFAULT;
        }
        obj["overlayMethods"] = overlay_methods;
        obj["hook"] = cover_image.hook;
        obj["storeListingSkuId"] = cover_image.store_listing_sku_id;
        obj["guildId"] = cover_image.guild_id;
        obj["guild"] = cover_image.guild;
        if (null != cover_image.publishers) {
          const publishers = cover_image.publishers;
          let mapped = publishers.map(outer1_9.createFromServer);
        } else {
          mapped = [];
        }
        obj["publishers"] = mapped;
        if (null != cover_image.developers) {
          const developers = cover_image.developers;
          let mapped1 = developers.map(outer1_9.createFromServer);
        } else {
          mapped1 = [];
        }
        obj["developers"] = mapped1;
        obj["eulaId"] = cover_image.eula_id;
        obj["slug"] = cover_image.slug;
        let flags = cover_image.flags_new;
        if (null == flags) {
          flags = cover_image.flags;
        }
        let num2 = 0;
        if (null != flags) {
          num2 = flags;
        }
        obj["flags"] = outer1_2(outer1_3[14]).deserialize(num2);
        obj["maxParticipants"] = cover_image.max_participants;
        obj["tags"] = cover_image.tags;
        obj["embeddedActivityConfig"] = cover_image.embedded_activity_config;
        let fromEntriesResult;
        if (null != cover_image.integration_types_config) {
          const _Object = Object;
          const _Object2 = Object;
          const entries = Object.entries(cover_image.integration_types_config);
          fromEntriesResult = Object.fromEntries(entries.map((arg0) => {
            let obj;
            let tmp;
            [tmp, obj] = arg0;
            const items = [tmp, ];
            obj = {};
            if (null == obj) {
              obj = {};
            }
            obj.oauth2InstallParams = obj.oauth2_install_params;
            items[1] = obj;
            return items;
          }));
        }
        obj["integrationTypesConfig"] = fromEntriesResult;
        obj["termsOfServiceUrl"] = cover_image.terms_of_service_url;
        obj["privacyPolicyUrl"] = cover_image.privacy_policy_url;
        obj["isDiscoverable"] = cover_image.is_discoverable;
        obj["directoryEntry"] = cover_image.directory_entry;
        ({ categories: obj["categories"], linked_games } = cover_image);
        let mapped2;
        if (null != linked_games) {
          mapped2 = linked_games.map((application) => {
            const obj = {};
            const merged = Object.assign(application);
            let fromServer;
            if (null != application.application) {
              fromServer = outer1_0.createFromServer(application.application);
            }
            obj["application"] = fromServer;
            return obj;
          });
        }
        obj["linkedGames"] = mapped2;
        obj["deepLinkUri"] = cover_image.deeplink_uri;
        obj["applicationAccountLinkBenefitConfig"] = cover_image.application_account_link_benefit_config;
        obj["parentId"] = cover_image.parent_id;
        tmp = new tmp(obj);
        return tmp;
      }
    },
    {
      key: "supportsOutOfProcessOverlay",
      value(arg0) {
        const OUT_OF_PROCESS = ApplicationRecord(outer1_3[13]).ApplicationOverlayMethodFlags.OUT_OF_PROCESS;
        return null != arg0 && (arg0 & OUT_OF_PROCESS) === OUT_OF_PROCESS;
      }
    }
  ];
  return callback(ApplicationRecord, items, items1);
})(tmp4);
let result = require("_possibleConstructorReturn").fileFinishedImporting("records/ApplicationRecord.tsx");

export default tmp5;
export { createExecutable };
export const BasicApplicationRecord = tmp4;
