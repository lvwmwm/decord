// Module ID: 5689
// Function ID: 49128
// Name: createResolvedGuildTemplate
// Dependencies: [5688, 2]
// Exports: default

// Module 5689 (createResolvedGuildTemplate)
import { GuildTemplateStates } from "GUILD_TEMPLATES_MEMBER_COUNT_PROMOTION_THRESHOLD";

const result = require("set").fileFinishedImporting("modules/guild_templates/createResolvedGuildTemplate.tsx");

export default function createResolvedGuildTemplate(code) {
  const obj = { code: code.code, state: GuildTemplateStates.RESOLVED, name: code.name };
  const description = code.description;
  let str = "";
  if (null != description) {
    str = description;
  }
  obj.description = str;
  ({ creator_id: obj.creatorId, creator: obj.creator, created_at: obj.createdAt, updated_at: obj.updatedAt, source_guild_id: obj.sourceGuildId, serialized_source_guild: obj.serializedSourceGuild, usage_count: obj.usageCount, is_dirty: obj.isDirty } = code);
  return obj;
};
