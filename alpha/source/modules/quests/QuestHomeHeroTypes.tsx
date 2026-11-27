// Module ID: 9922
// Function ID: 9923
// Name: QuestHomeHeroTypes
// Dependencies: [9904, 8365, 1242, 9923, 9924, 2]
// Exports: questHomeHeroFromServer

// Module 9922 (QuestHomeHeroTypes)
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import QuestServerUtils from "QuestServerUtils" /* 8365 */;
import AssetUtils from "AssetUtils" /* 9904 */;
import QuestSeriesExperiment2 from "QuestSeriesExperiment" /* 9923 */;
import QuestHomeHeroCta from "QuestHomeHeroCta" /* 9924 */;
import size from "module_2" /* 2 */;

function questSeriesFromServer(quest_series) {
  let tmp3Result;
  try {
    const obj = { id: quest_series.reward_config_quest.id, preview: false, config: null, user_status: null, targeted_content: [] };
    ({ reward_config_quest: obj.config, reward_config_user_status: obj.user_status } = quest_series);
    const obj2 = QuestServerUtils;
    const tmp3 = require;
    if (obj2.isQuestWithKnownConfigVersion(obj)) {
      const obj3 = { rewardQuest: tmp3Result.questWithUserStatusFromServer(obj) };
      tmp3Result = tmp3(8365);
      return obj3;
    }
  } catch (tmp7) {
    const obj4 = { tags: { app_context: "quests" } };
    const obj5 = SentryUtilsDefault;
    obj5.captureException(tmp7, obj4);
  }
}
const result = size.fileFinishedImporting("modules/quests/QuestHomeHeroTypes.tsx");

export function questHomeHeroFromServer(creative_content) {
  let features;
  let obj2;
  let obj3;
  let obj4;
  let obj5;
  let tmp3;
  let tmp4;
  let tmpResult;
  let tmpResult4;
  let tmpResult5;
  let tmpResult6;
  creative_content = creative_content.creative_content;
  const QuestSeriesExperiment = QuestSeriesExperiment2.QuestSeriesExperiment;
  const obj = { id: creative_content.id, labelTitle: creative_content.label_title, labelSubtitle: creative_content.label_subtitle, heroImage: obj2.resolveAdCreativeCdnUrl(creative_content.hero_image), heroVideo: obj3.resolveOptionalAdCreativeCdnUrl(creative_content.hero_video), sponsorImage: obj4.resolveOptionalAdCreativeCdnUrl(creative_content.sponsor_image), cta: obj5.questHomeHeroCtaFromServer(creative_content.cta), questIds: creative_content.quest_ids, questHomeEntrypoint: tmp3, shelfImage: tmpResult5.resolveOptionalAdCreativeCdnUrl(creative_content.shelf_image), shelfVideo: tmpResult6.resolveOptionalAdCreativeCdnUrl(creative_content.shelf_video), features, questSeries: tmp4, startsAt: null, endsAt: null };
  const enabled = QuestSeriesExperiment.getConfig({ location: "quest_home_hero" }).enabled;
  obj2 = AssetUtils;
  obj3 = AssetUtils;
  obj4 = AssetUtils;
  tmp3 = undefined;
  obj5 = QuestHomeHeroCta;
  if (null != creative_content.quest_home_entrypoint) {
    const quest_home_entrypoint = creative_content.quest_home_entrypoint;
    ({ linear_gradient: obj6.linearGradient, radial_gradient: obj6.radialGradient, gradient_preset: obj6.gradientPreset } = quest_home_entrypoint);
    const obj7 = { linearGradient: null, radialGradient: null, gradientPreset: null, image: tmpResult.resolveOptionalAdCreativeCdnUrl(quest_home_entrypoint.image), tooltipImage: tmpResult4.resolveOptionalAdCreativeCdnUrl(quest_home_entrypoint.tooltip_image), tooltipTitle: null, tooltipSubtitle: null };
    tmpResult = AssetUtils;
    ({ tooltip_title: obj6.tooltipTitle, tooltip_subtitle: obj6.tooltipSubtitle } = quest_home_entrypoint);
    tmp3 = obj7;
    tmpResult4 = AssetUtils;
  }
  tmpResult5 = AssetUtils;
  features = creative_content.features;
  tmpResult6 = AssetUtils;
  if (features == null) {
    features = [];
  }
  tmp4 = undefined;
  if (enabled) {
    if (null != creative_content.quest_series) {
      tmp4 = questSeriesFromServer(creative_content.quest_series);
    }
  }
  ({ starts_at: obj.startsAt, ends_at: obj.endsAt } = creative_content);
  return obj;
}
