// Module ID: 16237
// Function ID: 126466
// Name: AuditIcons
// Dependencies: [31, 27, 16227, 653, 33, 4130, 689, 16238, 16211, 8007, 4086, 13857, 4074, 9417, 4646, 15418, 4654, 8461, 4631, 10256, 10882, 11561, 16240, 9802, 4629, 9029, 16242, 16243, 16244, 1273, 2]
// Exports: default

// Module 16237 (AuditIcons)
import "result";
import { View } from "registerAsset";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

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
let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function AuditIcons(action) {
  action = action.action;
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = callback(action);
  if (constants.CREATE === tmp2) {
    let tmp5 = importDefault(16242);
  } else if (constants.UPDATE === tmp2) {
    tmp5 = importDefault(16243);
  } else {
    tmp5 = null;
    if (constants.DELETE === tmp2) {
      tmp5 = importDefault(16244);
    }
  }
  if (action === constants2.MESSAGE_DELETE) {
    let RobotIcon = require(4629) /* ChatIcon */.ChatIcon;
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
    RobotIcon = require(9029) /* RobotIcon */.RobotIcon;
  }
  let obj = { style: tmp.actionImageContainer };
  obj = { size: "custom", style: tmp.iconComponent };
  const items = [callback2(RobotIcon, obj), , ];
  const items1 = [, ];
  ({ actionImageOverlay: arr2[0], actionImage: arr2[1] } = tmp);
  items[1] = callback2(View, { style: items1 });
  obj = { style: tmp.actionImage, source: tmp5, disableColor: true };
  items[2] = callback2(require(1273) /* Button */.Icon, obj);
  obj.children = items;
  return callback3(View, obj);
}
({ getTargetType: closure_4, getActionType: closure_5 } = _isNativeReflectConstruct);
({ AuditLogTargetTypes, AuditLogActionTypes: closure_6, AuditLogActions: closure_7 } = ME);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = { actionImageContainer: { height: 24, width: 24 } };
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.round, width: 13, height: 13, bottom: 0, right: 0, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.actionImageOverlay = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.iconComponent = { width: 22, height: 22 };
_createForOfIteratorHelperLoose.actionImage = { position: "absolute" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj1 = { [AuditLogTargetTypes.ALL]: require("ListBulletsIcon").ListBulletsIcon, [CHANNEL]: require("ChannelListIcon").ChannelListIcon, [CHANNEL_OVERWRITE]: require("ChannelListIcon").ChannelListIcon, [AuditLogTargetTypes.EMOJI]: require("ReactionIcon").ReactionIcon, [GUILD]: require("CircleInformationIcon").CircleInformationIcon, [GUILD_PROFILE]: require("CircleInformationIcon").CircleInformationIcon, [AuditLogTargetTypes.INTEGRATION]: require("PuzzlePieceIcon").PuzzlePieceIcon, [INVITE]: require("LinkIcon").LinkIcon, [ROLE]: require("FlagIcon").FlagIcon, [AuditLogTargetTypes.USER]: require("GroupIcon").GroupIcon, [AuditLogTargetTypes.WEBHOOK]: require("WebhookIcon").WebhookIcon, [AuditLogTargetTypes.STAGE_INSTANCE]: require("StageIcon").StageIcon, [GUILD_SCHEDULED_EVENT]: require("CalendarIcon").CalendarIcon, [GUILD_SCHEDULED_EVENT_EXCEPTION]: require("CalendarIcon").CalendarIcon, [AuditLogTargetTypes.THREAD]: require("ThreadIcon").ThreadIcon, [AuditLogTargetTypes.STICKER]: require("StickerIcon").StickerIcon, [APPLICATION_COMMAND]: require("SlashBoxIcon").SlashBoxIcon, [AUTO_MODERATION_RULE]: require("WebhookIcon").WebhookIcon, [GUILD_SOUNDBOARD]: require("SoundboardIcon").SoundboardIcon, [ONBOARDING_PROMPT]: require("GroupIcon").GroupIcon, [GUILD_ONBOARDING]: require("GroupIcon").GroupIcon, [HOME_SETTINGS]: require("GroupIcon").GroupIcon, [GUILD_MEMBER_VERIFICATION]: require("GroupIcon").GroupIcon, [VOICE_CHANNEL_STATUS]: require("ChannelListIcon").ChannelListIcon, [GUILD_HOME]: require("HomeIcon").HomeIcon, [AuditLogTargetTypes.UNKNOWN]: require("CircleQuestionIcon").CircleQuestionIcon };
({ CHANNEL, CHANNEL_OVERWRITE } = AuditLogTargetTypes);
({ GUILD, GUILD_PROFILE } = AuditLogTargetTypes);
({ INVITE, ROLE } = AuditLogTargetTypes);
({ GUILD_SCHEDULED_EVENT, GUILD_SCHEDULED_EVENT_EXCEPTION } = AuditLogTargetTypes);
({ APPLICATION_COMMAND, AUTO_MODERATION_RULE } = AuditLogTargetTypes);
({ GUILD_SOUNDBOARD, ONBOARDING_PROMPT, GUILD_ONBOARDING, HOME_SETTINGS, GUILD_MEMBER_VERIFICATION, VOICE_CHANNEL_STATUS, GUILD_HOME } = AuditLogTargetTypes);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_moderation/native/AuditLogActionIcon.tsx");

export default function AuditLogActionIcon(action) {
  obj = { style: _createForOfIteratorHelperLoose().actionImageContainer, children: callback2(AuditIcons, obj) };
  obj = { action: action.action };
  return callback2(View, obj);
};
