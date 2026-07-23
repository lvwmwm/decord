// Module ID: 9472
// Function ID: 73776
// Name: questHomeHeroFromServer
// Dependencies: [9458, 9473, 2]
// Exports: questHomeHeroFromServer

// Module 9472 (questHomeHeroFromServer)
const result = require("set").fileFinishedImporting("modules/ads/QuestHomeHeroTypes.tsx");

export const questHomeHeroFromServer = function questHomeHeroFromServer(creative_content) {
  creative_content = creative_content.creative_content;
  let obj = { id: creative_content.id, labelTitle: creative_content.label_title, labelSubtitle: creative_content.label_subtitle, heroImage: require(9458) /* resolveAsset */.resolveAdCreativeCdnUrl(creative_content.hero_image) };
  const obj2 = require(9458) /* resolveAsset */;
  obj.heroVideo = require(9458) /* resolveAsset */.resolveOptionalAdCreativeCdnUrl(creative_content.hero_video);
  const obj3 = require(9458) /* resolveAsset */;
  obj.sponsorImage = require(9458) /* resolveAsset */.resolveOptionalAdCreativeCdnUrl(creative_content.sponsor_image);
  const obj4 = require(9458) /* resolveAsset */;
  obj.cta = require(9473) /* questHomeHeroCtaFromServer */.questHomeHeroCtaFromServer(creative_content.cta);
  obj.questIds = creative_content.quest_ids;
  let tmp;
  if (null != creative_content.quest_home_entrypoint) {
    const quest_home_entrypoint = creative_content.quest_home_entrypoint;
    obj = {};
    ({ linear_gradient: obj6.linearGradient, radial_gradient: obj6.radialGradient, gradient_preset: obj6.gradientPreset } = quest_home_entrypoint);
    obj.image = require(9458) /* resolveAsset */.resolveOptionalAdCreativeCdnUrl(quest_home_entrypoint.image);
    const obj7 = require(9458) /* resolveAsset */;
    obj.tooltipImage = require(9458) /* resolveAsset */.resolveOptionalAdCreativeCdnUrl(quest_home_entrypoint.tooltip_image);
    ({ tooltip_title: obj6.tooltipTitle, tooltip_subtitle: obj6.tooltipSubtitle } = quest_home_entrypoint);
    tmp = obj;
    const obj8 = require(9458) /* resolveAsset */;
  }
  obj.questHomeEntrypoint = tmp;
  const obj5 = require(9473) /* questHomeHeroCtaFromServer */;
  obj.shelfImage = require(9458) /* resolveAsset */.resolveOptionalAdCreativeCdnUrl(creative_content.shelf_image);
  const obj9 = require(9458) /* resolveAsset */;
  obj.shelfVideo = require(9458) /* resolveAsset */.resolveOptionalAdCreativeCdnUrl(creative_content.shelf_video);
  ({ starts_at: obj.startsAt, ends_at: obj.endsAt } = creative_content);
  return obj;
};
