// Module ID: 16120
// Function ID: 124293
// Name: AuditIcons
// Dependencies: []
// Exports: default

// Module 16120 (AuditIcons)
let APPLICATION_COMMAND;
let AUTO_MODERATION_RULE;
let AuditLogTargetTypes;
let CHANNEL;
let CHANNEL_OVERWRITE;
let GUILD;
let GUILD_HOME;
let GUILD_MEMBER_VERIFICATION;
let GUILD_ONBOARDING;
let GUILD_PROFILE;
let GUILD_SCHEDULED_EVENT;
let GUILD_SCHEDULED_EVENT_EXCEPTION;
let GUILD_SOUNDBOARD;
let HOME_SETTINGS;
let INVITE;
let ONBOARDING_PROMPT;
let ROLE;
let VOICE_CHANNEL_STATUS;
function AuditIcons(action) {
  action = action.action;
  const tmp = callback4();
  const tmp2 = callback(action);
  if (constants.CREATE === tmp2) {
    let tmp5 = importDefault(dependencyMap[26]);
  } else if (constants.UPDATE === tmp2) {
    tmp5 = importDefault(dependencyMap[27]);
  } else {
    tmp5 = null;
    if (constants.DELETE === tmp2) {
      tmp5 = importDefault(dependencyMap[28]);
    }
  }
  if (action === constants2.MESSAGE_DELETE) {
    let RobotIcon = arg1(dependencyMap[24]).ChatIcon;
  } else {
    if (action !== constants2.AUTO_MODERATION_BLOCK_MESSAGE) {
      if (action !== constants2.AUTO_MODERATION_FLAG_TO_CHANNEL) {
        if (action !== constants2.AUTO_MODERATION_USER_COMMUNICATION_DISABLED) {
          if (action !== constants2.AUTO_MODERATION_QUARANTINE_USER) {
            RobotIcon = obj1[tmp12];
          }
        }
      }
    }
    RobotIcon = arg1(dependencyMap[25]).RobotIcon;
  }
  let obj = { style: tmp.actionImageContainer };
  obj = { size: "custom", style: tmp.iconComponent };
  const items = [callback2(RobotIcon, obj), , ];
  const items1 = [, ];
  ({ actionImageOverlay: arr2[0], actionImage: arr2[1] } = tmp);
  items[1] = callback2(View, { style: items1 });
  obj = { style: tmp.actionImage, source: tmp5, disableColor: true };
  items[2] = callback2(arg1(dependencyMap[29]).Icon, obj);
  obj.children = items;
  return callback3(View, obj);
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ getTargetType: closure_4, getActionType: closure_5 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
({ AuditLogTargetTypes, AuditLogActionTypes: closure_6, AuditLogActions: closure_7 } = arg1(dependencyMap[3]));
const tmp4 = arg1(dependencyMap[3]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = { actionImageContainer: {} };
obj = { "Bool(false)": "Array", "Bool(false)": "isArray", "Bool(false)": "key", "Bool(false)": "Text", "Bool(false)": "loadJsonAsset", borderRadius: importDefault(dependencyMap[6]).radii.round, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH };
obj.actionImageOverlay = obj;
obj.iconComponent = {};
obj.actionImage = { position: "absolute" };
let closure_10 = obj.createStyles(obj);
const obj1 = { [AuditLogTargetTypes.ALL]: arg1(dependencyMap[7]).ListBulletsIcon, [CHANNEL]: arg1(dependencyMap[8]).ChannelListIcon, [CHANNEL_OVERWRITE]: arg1(dependencyMap[8]).ChannelListIcon, [AuditLogTargetTypes.EMOJI]: arg1(dependencyMap[9]).ReactionIcon, [GUILD]: arg1(dependencyMap[10]).CircleInformationIcon, [GUILD_PROFILE]: arg1(dependencyMap[10]).CircleInformationIcon, [AuditLogTargetTypes.INTEGRATION]: arg1(dependencyMap[11]).PuzzlePieceIcon, [INVITE]: arg1(dependencyMap[12]).LinkIcon, [ROLE]: arg1(dependencyMap[13]).FlagIcon, [AuditLogTargetTypes.USER]: arg1(dependencyMap[14]).GroupIcon, [AuditLogTargetTypes.WEBHOOK]: arg1(dependencyMap[15]).WebhookIcon, [AuditLogTargetTypes.STAGE_INSTANCE]: arg1(dependencyMap[16]).StageIcon, [GUILD_SCHEDULED_EVENT]: arg1(dependencyMap[17]).CalendarIcon, [GUILD_SCHEDULED_EVENT_EXCEPTION]: arg1(dependencyMap[17]).CalendarIcon, [AuditLogTargetTypes.THREAD]: arg1(dependencyMap[18]).ThreadIcon, [AuditLogTargetTypes.STICKER]: arg1(dependencyMap[19]).StickerIcon, [APPLICATION_COMMAND]: arg1(dependencyMap[20]).SlashBoxIcon, [AUTO_MODERATION_RULE]: arg1(dependencyMap[15]).WebhookIcon, [GUILD_SOUNDBOARD]: arg1(dependencyMap[21]).SoundboardIcon, [ONBOARDING_PROMPT]: arg1(dependencyMap[14]).GroupIcon, [GUILD_ONBOARDING]: arg1(dependencyMap[14]).GroupIcon, [HOME_SETTINGS]: arg1(dependencyMap[14]).GroupIcon, [GUILD_MEMBER_VERIFICATION]: arg1(dependencyMap[14]).GroupIcon, [VOICE_CHANNEL_STATUS]: arg1(dependencyMap[8]).ChannelListIcon, [GUILD_HOME]: arg1(dependencyMap[22]).HomeIcon, [AuditLogTargetTypes.UNKNOWN]: arg1(dependencyMap[23]).CircleQuestionIcon };
({ CHANNEL, CHANNEL_OVERWRITE } = AuditLogTargetTypes);
({ GUILD, GUILD_PROFILE } = AuditLogTargetTypes);
({ INVITE, ROLE } = AuditLogTargetTypes);
({ GUILD_SCHEDULED_EVENT, GUILD_SCHEDULED_EVENT_EXCEPTION } = AuditLogTargetTypes);
({ APPLICATION_COMMAND, AUTO_MODERATION_RULE } = AuditLogTargetTypes);
({ GUILD_SOUNDBOARD, ONBOARDING_PROMPT, GUILD_ONBOARDING, HOME_SETTINGS, GUILD_MEMBER_VERIFICATION, VOICE_CHANNEL_STATUS, GUILD_HOME } = AuditLogTargetTypes);
const tmp5 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[30]).fileFinishedImporting("modules/guild_moderation/native/AuditLogActionIcon.tsx");

export default function AuditLogActionIcon(action) {
  let obj = { style: callback4().actionImageContainer, children: callback2(AuditIcons, obj) };
  obj = { action: action.action };
  return callback2(View, obj);
};
