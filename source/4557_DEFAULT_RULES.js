// Module ID: 4557
// Function ID: 39900
// Name: DEFAULT_RULES
// Dependencies: []

// Module 4557 (DEFAULT_RULES)
const obj = {};
obj[arg1(dependencyMap[0]).AST_KEY.PARAGRAPH] = importDefault(dependencyMap[1]).RULES.paragraph;
obj[arg1(dependencyMap[0]).AST_KEY.STRIKETHROUGH] = importDefault(dependencyMap[1]).RULES.s;
obj[arg1(dependencyMap[0]).AST_KEY.STRONG] = importDefault(dependencyMap[1]).RULES.strong;
obj[arg1(dependencyMap[0]).AST_KEY.UNDERLINE] = importDefault(dependencyMap[1]).RULES.u;
obj[arg1(dependencyMap[0]).AST_KEY.ITALICS] = importDefault(dependencyMap[1]).RULES.em;
obj[arg1(dependencyMap[0]).AST_KEY.LINK] = importDefault(dependencyMap[1]).RULES.link;
obj[arg1(dependencyMap[0]).AST_KEY.URL] = importDefault(dependencyMap[1]).RULES.url;
obj[arg1(dependencyMap[0]).AST_KEY.AUTOLINK] = importDefault(dependencyMap[1]).RULES.autolink;
obj[arg1(dependencyMap[0]).AST_KEY.LINE_BREAK] = importDefault(dependencyMap[1]).RULES.br;
obj[arg1(dependencyMap[0]).AST_KEY.BLOCK_QUOTE] = importDefault(dependencyMap[1]).RULES.blockQuote;
obj[arg1(dependencyMap[0]).AST_KEY.INLINE_CODE] = importDefault(dependencyMap[1]).RULES.inlineCode;
obj[arg1(dependencyMap[0]).AST_KEY.CODE_BLOCK] = importDefault(dependencyMap[1]).RULES.codeBlock;
obj[arg1(dependencyMap[0]).AST_KEY.CHANNEL_MENTION] = importDefault(dependencyMap[1]).RULES.channelMention;
obj[arg1(dependencyMap[0]).AST_KEY.MENTION] = importDefault(dependencyMap[1]).RULES.mention;
obj[arg1(dependencyMap[0]).AST_KEY.SOUNDBOARD] = importDefault(dependencyMap[1]).RULES.soundboard;
obj[arg1(dependencyMap[0]).AST_KEY.STATIC_ROUTE_LINK] = importDefault(dependencyMap[1]).RULES.staticRouteLink;
obj[arg1(dependencyMap[0]).AST_KEY.COMMAND_MENTION] = importDefault(dependencyMap[1]).RULES.commandMention;
obj[arg1(dependencyMap[0]).AST_KEY.TIMESTAMP] = importDefault(dependencyMap[1]).RULES.timestamp;
obj[arg1(dependencyMap[0]).AST_KEY.LIST] = importDefault(dependencyMap[1]).RULES.list;
obj[arg1(dependencyMap[0]).AST_KEY.HEADING] = importDefault(dependencyMap[1]).RULES.heading;
obj[arg1(dependencyMap[0]).AST_KEY.ATTACHMENT_LINK] = importDefault(dependencyMap[1]).RULES.attachmentLink;
obj[arg1(dependencyMap[0]).AST_KEY.SUBTEXT] = importDefault(dependencyMap[1]).RULES.subtext;
obj[arg1(dependencyMap[0]).AST_KEY.SILENT_PREFIX] = importDefault(dependencyMap[1]).RULES.silentPrefix;
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/markup/MarkupTypesDefaultRules.tsx");

export const DEFAULT_RULES = obj;
