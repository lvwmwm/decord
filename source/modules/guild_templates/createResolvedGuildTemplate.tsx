// Module ID: 5715
// Function ID: 49131
// Name: createResolvedGuildTemplate
// Dependencies: []
// Exports: default

// Module 5715 (createResolvedGuildTemplate)
const GuildTemplateStates = require(dependencyMap[0]).GuildTemplateStates;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/guild_templates/createResolvedGuildTemplate.tsx");

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
