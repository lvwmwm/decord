// Module ID: 7494
// Function ID: 7495
// Name: createResolvedGuildTemplate
// Dependencies: [7495, 2]
// Exports: default

// Module 7494 (createResolvedGuildTemplate)
import GuildTemplatesConstants from "GuildTemplatesConstants" /* 7495 */;
import size from "module_2" /* 2 */;

const GuildTemplateStates = GuildTemplatesConstants.GuildTemplateStates;
const result = size.fileFinishedImporting("modules/guild_templates/createResolvedGuildTemplate.tsx");

export default function createResolvedGuildTemplate(code) {
  let str;
  const obj = { code: code.code, state: GuildTemplateStates.RESOLVED, name: code.name, description: str, creatorId: null, creator: null, createdAt: null, updatedAt: null, sourceGuildId: null, serializedSourceGuild: null, usageCount: null, isDirty: null };
  str = code.description;
  if (str == null) {
    str = "";
  }
  ({ creator_id: obj.creatorId, creator: obj.creator, created_at: obj.createdAt, updated_at: obj.updatedAt, source_guild_id: obj.sourceGuildId, serialized_source_guild: obj.serializedSourceGuild, usage_count: obj.usageCount, is_dirty: obj.isDirty } = code);
  return obj;
};
