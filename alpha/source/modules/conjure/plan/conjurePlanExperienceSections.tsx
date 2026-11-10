// Module ID: 12956
// Function ID: 12957
// Name: conjurePlanExperienceSections
// Dependencies: [4028, 12946, 1113, 12947, 2]
// Exports: conjurePlanDisplayedSections, conjurePlanExperienceIsApp, conjurePlanFrameFeatures, conjurePlanRequirementGroups, conjurePlanRequirementsSectionId

// Module 12956 (conjurePlanExperienceSections)
import intl3 from "intl" /* 1113 */;
import _modDef4028 from "module_4028" /* 4028 */;
import conjurePlanFormat from "conjurePlanFormat" /* 12947 */;
import size from "module_2" /* 2 */;

let changes, names;

let obj = { frame: _modDef4028.Z2bt4u, overlay_widget: _modDef4028["0mGHfU"], user_widget: _modDef4028.Jipr29, bot: _modDef4028.EbvC13, commands: _modDef4028.EbvC13, automod: _modDef4028.tiMvei };
const result = size.fileFinishedImporting("modules/conjure/plan/conjurePlanExperienceSections.tsx");

export const CONJURE_PLAN_EXPERIENCE_KIND_LABELS = obj;
export function conjurePlanExperienceIsApp(experience) {
  return "frame" === experience.kind && true !== experience.game;
}
export function conjurePlanDisplayedSections(experiences, commandNames) {
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
}
export function conjurePlanRequirementsSectionId(arr) {
  let found = arr.find((experience) => {
    experience = experience.experience;
    return "bot" === experience.kind || "commands" === experience.kind;
  });
  if (found == null) {
    found = arr[0];
  }
  let id;
  if (found != null) {
    id = found.experience.id;
  }
  return id;
}
export function conjurePlanFrameFeatures(usableInVoice) {
  let items1;
  let items4;
  if (usableInVoice.usableInVoice) {
    const intl = intl3.intl;
    const items = [intl.string(_modDef4028["4oGg2h"])];
    items1 = items;
  } else {
    items1 = [];
  }
  const items2 = [...items1];
  if (usableInVoice.launchableAnywhere) {
    const intl2 = intl3.intl;
    const items3 = [intl2.string(_modDef4028.BTGCfR)];
    items4 = items3;
  } else {
    items4 = [];
  }
  HermesBuiltin.arraySpread(items2, items4, tmp5);
  return items2;
}
export function conjurePlanRequirementGroups(proposal) {
  let obj = { key: "permissions", caption: _modDef4028["2UbW6r"], names: proposal.bot_permissions };
  let items = [obj, { key: "intents", caption: _modDef4028["7TKfpj"], names: proposal.privileged_intents }];
  ({ key: "intents", caption: _modDef4028["7TKfpj"], names: proposal.privileged_intents });
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
}
