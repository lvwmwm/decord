// Module ID: 18584
// Function ID: 18585
// Name: conjurePlanExperienceSections
// Dependencies: [4190, 1112, 18575, 18585, 18576, 2]
// Exports: conjurePlanDisplayedSections, conjurePlanExperienceIsApp, conjurePlanExperienceKindLabel, conjurePlanExperienceKindNote, conjurePlanFrameFeatures, conjurePlanRequirementGroups, conjurePlanRequirementsSectionId

// Module 18584 (conjurePlanExperienceSections)
import intl4 from "intl" /* 1112 */;
import _modDef4190 from "module_4190" /* 4190 */;
import conjurePlanFormat from "conjurePlanFormat" /* 18576 */;
import PermissionSpecUtilsDefault from "PermissionSpecUtils" /* 18585 */;
import size from "module_2" /* 2 */;

let changes, set;

let obj3;
let obj = { frame: _modDef4190.Z2bt4u, bot: _modDef4190.EbvC13, commands: _modDef4190.EbvC13, automod: _modDef4190.tiMvei };
let obj2 = { user_widget: obj3, overlay_widget: { server: _modDef4190.nUcjJ1, personal: _modDef4190.RDpKqP } };
obj3 = { server: _modDef4190.VlI3et, personal: _modDef4190.njJ4YL };
({ server: _modDef4190.nUcjJ1, personal: _modDef4190.RDpKqP });
const result = size.fileFinishedImporting("modules/conjure/plan/conjurePlanExperienceSections.tsx");

export function conjurePlanExperienceIsApp(experience) {
  return "frame" === experience.kind && true !== experience.game;
}
export function conjurePlanExperienceKindLabel(experience, inServer) {
  const tmp = "frame" === experience.kind && true !== experience.game;
  if (tmp) {
    const intl3 = intl4.intl;
    return intl3.string(_modDef4190.BM4Ymz);
  } else {
    if ("user_widget" !== experience.kind) {
      if ("overlay_widget" !== experience.kind) {
        const intl = intl4.intl;
        return intl.string(obj[experience.kind]);
      }
    }
    const intl2 = intl4.intl;
    return intl2.string(inServer ? obj2[experience.kind].server : obj2[experience.kind].personal);
  }
}
export function conjurePlanExperienceKindNote(experience, inServer) {
  let stringResult = null;
  if (inServer) {
    stringResult = null;
    if (experience.kind in obj2) {
      const intl = intl4.intl;
      stringResult = intl.string(_modDef4190.UXJCSG);
    }
  }
  return stringResult;
}
export function conjurePlanDisplayedSections(experiences, commandNames) {
  let closure_0 = commandNames;
  const found = experiences.filter((kind) => "commands" === kind.kind);
  const bullets = found.flatMap((changes) => {
    changes = changes.changes;
    return changes.filter((item) => {
      obj = closure_0(closure_2[2]);
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
        obj2 = { experience: kind, bullets };
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
      obj = { experience: kind, bullets: kind.changes };
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
    const intl = intl4.intl;
    const items = [intl.string(_modDef4190["4oGg2h"])];
    items1 = items;
  } else {
    items1 = [];
  }
  const items2 = [...items1];
  if (usableInVoice.launchableAnywhere) {
    const intl2 = intl4.intl;
    const items3 = [intl2.string(_modDef4190.BTGCfR)];
    items4 = items3;
  } else {
    items4 = [];
  }
  HermesBuiltin.arraySpread(items2, items4, tmp5);
  return items2;
}
export function conjurePlanRequirementGroups(proposal, guild) {
  function label(arg0) {
    obj = conjurePlanFormat;
    return obj.conjurePlanPermissionLabel(arg0, guildPermissionSpecMap);
  }
  let guildPermissionSpecMap = null;
  if (null != guild) {
    const tmp2 = importDefault;
    const tmp3 = dependencyMap;
    obj = PermissionSpecUtilsDefault;
    guildPermissionSpecMap = obj.getGuildPermissionSpecMap(guild);
  }
  let items = [{ key: "permissions", caption: _modDef4190["2UbW6r"], names: proposal.bot_permissions, label }, ];
  ({ key: "permissions", caption: _modDef4190["2UbW6r"], names: proposal.bot_permissions, label });
  items[1] = { key: "intents", caption: _modDef4190["7TKfpj"], names: proposal.privileged_intents, label: guildPermissionSpecMap(18576).formatConjurePlanRequirementLabel };
  ({ key: "intents", caption: _modDef4190["7TKfpj"], names: proposal.privileged_intents, label: guildPermissionSpecMap(18576).formatConjurePlanRequirementLabel });
  return items.flatMap(function(names) {
    let intl;
    let items;
    names = names.names;
    if (null != names) {
      if (names.length > 0) {
        obj = { key: tmp, caption: intl.string(tmp2), labels: items };
        intl = guildPermissionSpecMap(dependencyMap[1]).intl;
        const _Set = Set;
        const self = this;
        const self2 = this;
        items = [];
        set = new Set(names.map(tmp3));
        HermesBuiltin.arraySpread(items, set, 0);
        const items1 = [obj];
      }
      return [];
    }
  });
}
