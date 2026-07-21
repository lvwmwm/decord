// Module ID: 9219
// Function ID: 72086
// Name: NUXGuildTemplatesAnalytics
// Dependencies: [284214097]

// Module 9219 (NUXGuildTemplatesAnalytics)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/create_guild/native/CreateGuildConstants.tsx");

export const NUXGuildTemplatesAnalytics = {};
export const CREATE_GUILD_SMALL_SCREEN_MAX_HEIGHT = 375;
export const IN_APP_GUILD_TEMPLATES_MODAL_KEY = "in-app-guild-templates";
export const GuildTemplateTriggers = { NUF: 0, [0]: "NUF", IN_APP: 1, [1]: "IN_APP" };
export const GuildTemplateLocation = { FRIENDS_LIST_WELCOME_WIDGET: "Friends List Welcome Widget" };
export const CreateGuildModalStates = { CREATE_SERVER: "create_server", JOIN_SERVER: "join_server", ACCEPT_INVITE: "accept_invite", GUILD_TEMPLATES: "guild_templates", CHANNEL_PROMPT: "channel_prompt", CREATION_INTENT: "creation_intent", GUILD_INVITE: "guild_invite", JOIN_STUDENT_HUB: "join_student_hub" };
