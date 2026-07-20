// Module ID: 9460
// Function ID: 73697
// Name: questHomeHeroFromServer
// Dependencies: []
// Exports: questHomeHeroFromServer

// Module 9460 (questHomeHeroFromServer)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/ads/QuestHomeHeroTypes.tsx");

export const questHomeHeroFromServer = function questHomeHeroFromServer(creative_content) {
  creative_content = creative_content.creative_content;
  let obj = { id: creative_content.id, labelTitle: creative_content.label_title, labelSubtitle: creative_content.label_subtitle, heroImage: require(dependencyMap[0]).resolveAdCreativeCdnUrl(creative_content.hero_image) };
  const obj2 = require(dependencyMap[0]);
  obj.heroVideo = require(dependencyMap[0]).resolveOptionalAdCreativeCdnUrl(creative_content.hero_video);
  const obj3 = require(dependencyMap[0]);
  obj.sponsorImage = require(dependencyMap[0]).resolveOptionalAdCreativeCdnUrl(creative_content.sponsor_image);
  const obj4 = require(dependencyMap[0]);
  obj.cta = require(dependencyMap[1]).questHomeHeroCtaFromServer(creative_content.cta);
  obj.questIds = creative_content.quest_ids;
  let tmp;
  if (null != creative_content.quest_home_entrypoint) {
    const quest_home_entrypoint = creative_content.quest_home_entrypoint;
    obj = {};
    ({ linear_gradient: obj6.linearGradient, radial_gradient: obj6.radialGradient, gradient_preset: obj6.gradientPreset } = quest_home_entrypoint);
    obj.image = require(dependencyMap[0]).resolveOptionalAdCreativeCdnUrl(quest_home_entrypoint.image);
    const obj7 = require(dependencyMap[0]);
    obj.tooltipImage = require(dependencyMap[0]).resolveOptionalAdCreativeCdnUrl(quest_home_entrypoint.tooltip_image);
    ({ tooltip_title: obj6.tooltipTitle, tooltip_subtitle: obj6.tooltipSubtitle } = quest_home_entrypoint);
    tmp = obj;
    const obj8 = require(dependencyMap[0]);
  }
  obj.questHomeEntrypoint = tmp;
  const obj5 = require(dependencyMap[1]);
  obj.shelfImage = require(dependencyMap[0]).resolveOptionalAdCreativeCdnUrl(creative_content.shelf_image);
  const obj9 = require(dependencyMap[0]);
  obj.shelfVideo = require(dependencyMap[0]).resolveOptionalAdCreativeCdnUrl(creative_content.shelf_video);
  ({ starts_at: obj.startsAt, ends_at: obj.endsAt } = creative_content);
  return obj;
};
