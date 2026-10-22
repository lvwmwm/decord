// Module ID: 12405
// Function ID: 12406
// Name: conjurePlanExperienceSections
// Dependencies: [3830, 12384, 1128, 12385, 2]
// Exports: conjurePlanDisplayedSections, conjurePlanExperienceIsApp, conjurePlanFrameFeatures, conjurePlanRequirementGroups

// Module 12405 (conjurePlanExperienceSections)
import intl3 from "intl" /* 1128 */;
import _modDef3830 from "module_3830" /* 3830 */;
import conjurePlanFormat from "conjurePlanFormat" /* 12385 */;
import size from "module_2" /* 2 */;

let changes, names;

let obj = { frame: _modDef3830.Z2bt4u, overlay_widget: _modDef3830["0mGHfU"], user_widget: _modDef3830.Jipr29, bot: _modDef3830.EbvC13, commands: _modDef3830.EbvC13, automod: _modDef3830.tiMvei };
const result = size.fileFinishedImporting("modules/conjure/plan/conjurePlanExperienceSections.tsx");

export const CONJURE_PLAN_EXPERIENCE_KIND_LABELS = obj;
export const conjurePlanExperienceIsApp = function conjurePlanExperienceIsApp(experience) {
  return "frame" === experience.kind && true !== experience.game;
};
export const conjurePlanDisplayedSections = function conjurePlanDisplayedSections(experiences, commandNames) {
  let closure_0 = commandNames;
  const found = experiences.filter((kind) => "commands" === kind.kind);
  const bullets = found.flatMap((changes) => {
    changes = changes.changes;
    return changes.filter((item) => {
      const obj = closure_0(closure_2[1]);
      return !obj.conjurePlanTextMentionsCommand(item, closure_1_0);
    });
  });
  let closure_2 = experiences.find((kind) => "bot" === kind.kind);
  return experiences.flatMap((kind) => {
    let items1;
    let items3;
    if ("commands" === kind.kind) {
      let items;
      if (null != closure_2) {
        items = [];
      } else {
        items = [{ experience: kind, bullets }];
        const obj2 = { experience: kind, bullets };
      }
      items3 = items;
    } else if (kind === closure_2) {
      const obj3 = { experience: kind, bullets: items1 };
      items1 = [];
      HermesBuiltin.arraySpread(items1, bullets, HermesBuiltin.arraySpread(items1, kind.changes, 0));
      const items2 = [obj3];
      items3 = items2;
    } else {
      items3 = [{ experience: kind, bullets: kind.changes }];
      const obj = { experience: kind, bullets: kind.changes };
    }
    return items3;
  });
};
export const conjurePlanFrameFeatures = function conjurePlanFrameFeatures(usableInVoice) {
  let items1;
  let items4;
  if (usableInVoice.usableInVoice) {
    const intl = intl3.intl;
    const items = [intl.string(_modDef3830["4oGg2h"])];
    items1 = items;
  } else {
    items1 = [];
  }
  const items2 = [...items1];
  if (usableInVoice.launchableAnywhere) {
    const intl2 = intl3.intl;
    const items3 = [intl2.string(_modDef3830.BTGCfR)];
    items4 = items3;
  } else {
    items4 = [];
  }
  HermesBuiltin.arraySpread(items2, items4, tmp5);
  return items2;
};
export const conjurePlanRequirementGroups = function conjurePlanRequirementGroups(proposal) {
  let obj = { key: "permissions", caption: _modDef3830["2UbW6r"], names: proposal.bot_permissions };
  let items = [obj, { key: "intents", caption: _modDef3830["7TKfpj"], names: proposal.privileged_intents }];
  ({ key: "intents", caption: _modDef3830["7TKfpj"], names: proposal.privileged_intents });
  return items.flatMap((names) => {
    let intl;
    names = names.names;
    if (null != names) {
      if (names.length > 0) {
        const obj = { key: tmp, caption: intl.string(tmp2), labels: names.map(conjurePlanFormat.formatConjurePlanRequirementLabel) };
        intl = intl3.intl;
        const items = [obj];
      }
      return [];
    }
  });
};
