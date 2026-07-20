// Module ID: 11504
// Function ID: 89657
// Name: storeListingToGuildPowerup
// Dependencies: []
// Exports: default

// Module 11504 (storeListingToGuildPowerup)
const _module = require(dependencyMap[0]);
({ DEFAULT_SOUND_SLOTS: closure_0, DEFAULT_STICKER_SLOTS: closure_1 } = _module);
const GuildPowerupType = require(dependencyMap[1]).GuildPowerupType;
const DEFAULT_EMOJI_SLOTS = require(dependencyMap[2]).DEFAULT_EMOJI_SLOTS;
const _module1 = require(dependencyMap[3]);
const result = _module1.fileFinishedImporting("modules/premium/powerups/utils/storeListingToGuildPowerup.tsx");

export default function storeListingToGuildPowerup(arr, powerup_metadata) {
  powerup_metadata = powerup_metadata.powerup_metadata;
  let category_type;
  if (null != powerup_metadata) {
    category_type = powerup_metadata.category_type;
  }
  if (null != category_type) {
    const sku4 = powerup_metadata.sku;
    powerup_metadata = undefined;
    if (null != sku4) {
      powerup_metadata = sku4.powerup_metadata;
    }
    if (null != powerup_metadata) {
      let obj = { title: powerup_metadata.summary, skuId: powerup_metadata.sku.id, cost: powerup_metadata.boost_price };
      if (null != powerup_metadata.sku.dependent_sku_id) {
        const items = [powerup_metadata.sku.dependent_sku_id];
        let items1 = items;
      } else {
        items1 = [];
      }
      obj.dependencies = items1;
      const powerup_metadata2 = powerup_metadata.powerup_metadata;
      let animated_image_url;
      if (null != powerup_metadata2) {
        animated_image_url = powerup_metadata2.animated_image_url;
      }
      if (null == animated_image_url) {
        animated_image_url = powerup_metadata.animated_image_url;
      }
      obj.animatedImageUrl = animated_image_url;
      const powerup_metadata3 = powerup_metadata.powerup_metadata;
      let static_image_url;
      if (null != powerup_metadata3) {
        static_image_url = powerup_metadata3.static_image_url;
      }
      if (null == static_image_url) {
        static_image_url = powerup_metadata.static_image_url;
      }
      obj.staticImageUrl = static_image_url;
      const powerup_metadata4 = powerup_metadata.powerup_metadata;
      let store_removal_date;
      if (null != powerup_metadata4) {
        store_removal_date = powerup_metadata4.store_removal_date;
      }
      obj.storeRemovalDate = store_removal_date;
      const powerup_metadata5 = powerup_metadata.powerup_metadata;
      let prop;
      if (null != powerup_metadata5) {
        prop = powerup_metadata5.deactivation_cooldown_period_days;
      }
      obj.deactivationCooldownPeriodDays = prop;
      if (GuildPowerupType.LEVEL === category_type) {
        const powerup_metadata6 = powerup_metadata.sku.powerup_metadata;
        let guild_features;
        if (null != powerup_metadata6) {
          guild_features = powerup_metadata6.guild_features;
        }
        if (null != guild_features) {
          let sum = DEFAULT_EMOJI_SLOTS + guild_features.additional_emoji_slots;
          let sum1 = dependent_sku_id + guild_features.additional_sound_slots;
          let sum2 = closure_1 + guild_features.additional_sticker_slots;
          let dependent_sku_id = powerup_metadata.sku.dependent_sku_id;
          let tmp37 = sum;
          let tmp38 = sum1;
          let tmp39 = sum2;
          while (null != dependent_sku_id) {
            let found = arr.find((sku) => dependent_sku_id === sku.sku.id);
            let prop1;
            if (null != found) {
              let sku = found.sku;
              let tmp16 = sku;
              if (null != sku) {
                let powerup_metadata7 = sku.powerup_metadata;
                let tmp17 = powerup_metadata7;
                if (null != powerup_metadata7) {
                  guild_features = powerup_metadata7.guild_features;
                  let tmp18 = guild_features;
                  if (null != guild_features) {
                    prop1 = guild_features.additional_emoji_slots;
                    let tmp19 = guild_features;
                  }
                }
              }
            }
            let num = 0;
            if (null != prop1) {
              num = prop1;
            }
            let sum3 = sum + num;
            let prop2;
            if (null != found) {
              let sku2 = found.sku;
              let tmp22 = sku2;
              if (null != sku2) {
                let powerup_metadata8 = sku2.powerup_metadata;
                let tmp23 = powerup_metadata8;
                if (null != powerup_metadata8) {
                  let guild_features2 = powerup_metadata8.guild_features;
                  let tmp24 = guild_features2;
                  if (null != guild_features2) {
                    prop2 = guild_features2.additional_sound_slots;
                    let tmp25 = guild_features2;
                  }
                }
              }
            }
            let num2 = 0;
            if (null != prop2) {
              num2 = prop2;
            }
            let sum4 = sum1 + num2;
            let prop3;
            if (null != found) {
              let sku3 = found.sku;
              let tmp28 = sku3;
              if (null != sku3) {
                let powerup_metadata9 = sku3.powerup_metadata;
                let tmp29 = powerup_metadata9;
                if (null != powerup_metadata9) {
                  let guild_features3 = powerup_metadata9.guild_features;
                  let tmp30 = guild_features3;
                  if (null != guild_features3) {
                    prop3 = guild_features3.additional_sticker_slots;
                    let tmp31 = guild_features3;
                  }
                }
              }
            }
            let num3 = 0;
            if (null != prop3) {
              num3 = prop3;
            }
            let sum5 = sum2 + num3;
            dependent_sku_id = undefined;
            if (null != found) {
              dependent_sku_id = found.sku.dependent_sku_id;
            }
            sum = sum3;
            sum1 = sum4;
            sum2 = sum5;
            tmp37 = sum3;
            tmp38 = sum4;
            tmp39 = sum5;
          }
          obj = { type: GuildPowerupType.LEVEL };
          const obj1 = {};
          const merged = Object.assign(guild_features);
          obj1["total_emoji_slots"] = tmp37;
          obj1["total_sound_slots"] = tmp38;
          obj1["total_sticker_slots"] = tmp39;
          obj.features = obj1;
          const merged1 = Object.assign(obj);
          return obj;
        }
      } else if (GuildPowerupType.PERK === category_type) {
        obj = { type: GuildPowerupType.PERK };
        const description = powerup_metadata.description;
        let str = "";
        if (null != description) {
          str = description;
        }
        obj.description = str;
        const merged2 = Object.assign(obj);
        return obj;
      }
    }
  }
};
