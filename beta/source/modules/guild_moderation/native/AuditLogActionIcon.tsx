// Module ID: 17987
// Function ID: 17988
// Name: AuditLogActionIcon
// Dependencies: [19, 17, 17982, 1074, 21, 4788, 576, 17988, 17928, 9069, 4742, 15235, 4730, 8974, 5339, 17205, 5347, 9915, 5323, 10409, 11508, 12811, 17990, 11402, 5321, 9581, 17992, 17993, 17994, 1177, 2]
// Exports: default

// Module 17987 (AuditLogActionIcon)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import ChatIcon from "ChatIcon" /* 5321 */;
import RobotIcon2 from "RobotIcon" /* 9581 */;
import _modDef17992 from "module_17992" /* 17992 */;
import _modDef17993 from "module_17993" /* 17993 */;
import _modDef17994 from "module_17994" /* 17994 */;
import noop from "module_19" /* 19 */;

require = fn;
function AuditIcons(action) {
  action = action.action;
  const tmp = closure_10();
  const tmp2 = hasOwnProperty(action);
  if (constants.CREATE === tmp2) {
    let tmp4 = _modDef17992;
  } else if (tmp3.UPDATE === tmp2) {
    tmp4 = _modDef17993;
  } else {
    tmp4 = null;
    if (tmp3.DELETE === tmp2) {
      tmp4 = _modDef17994;
    }
  }
  if (action === constants2.MESSAGE_DELETE) {
    let RobotIcon = ChatIcon.ChatIcon;
  } else {
    if (action !== tmp12.AUTO_MODERATION_BLOCK_MESSAGE) {
      if (action !== tmp12.AUTO_MODERATION_FLAG_TO_CHANNEL) {
        if (action !== tmp12.AUTO_MODERATION_USER_COMMUNICATION_DISABLED) {
          if (action !== tmp12.AUTO_MODERATION_QUARANTINE_USER) {
            RobotIcon = obj3[tmp11];
          }
        }
      }
    }
    RobotIcon = RobotIcon2.RobotIcon;
  }
  const obj = { style: tmp.actionImageContainer, children: null };
  const items = [React6(RobotIcon, { size: "custom", style: tmp.iconComponent }), , ];
  obj3 = { style: null };
  const items1 = [, ];
  ({ actionImageOverlay: arr2[0], actionImage: arr2[1] } = tmp);
  obj3.style = items1;
  items[1] = React6(View, obj3);
  items[2] = React6(native.Icon, { style: tmp.actionImage, source: tmp4, disableColor: true });
  obj.children = items;
  return React7(View, obj);
}
const View = fn(17).View;
const AuditLogRecord = fn(17982);
({ getTargetType: closure_4, getActionType: hasOwnProperty } = AuditLogRecord);
const Constants = fn(1074);
({ AuditLogTargetTypes, AuditLogActionTypes: metroRequire, AuditLogActions: closure_7 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4788);
const obj2 = { actionImageContainer: { height: 24, width: 24 }, actionImageOverlay: null, iconComponent: null, actionImage: null };
let size = { borderRadius: nativeDefault.radii.round, width: 13, height: 13, bottom: 0, right: 0, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.actionImageOverlay = size;
obj2.iconComponent = { width: 22, height: 22 };
obj2.actionImage = { position: "absolute" };
let closure_10 = createStyles.createStyles(obj2);
let obj3 = { [ALL]: fn(17988).ListBulletsIcon, [CHANNEL]: fn(17928).ChannelListIcon, [CHANNEL_OVERWRITE]: fn(17928).ChannelListIcon, [EMOJI]: fn(9069).ReactionIcon, [GUILD]: fn(4742).CircleInformationIcon, [GUILD_PROFILE]: fn(4742).CircleInformationIcon, [INTEGRATION]: fn(15235).PuzzlePieceIcon, [INVITE]: fn(4730).LinkIcon, [ROLE]: fn(8974).FlagIcon, [USER]: fn(5339).GroupIcon, [WEBHOOK]: fn(17205).WebhookIcon, [STAGE_INSTANCE]: fn(5347).StageIcon, [GUILD_SCHEDULED_EVENT]: fn(9915).CalendarIcon, [GUILD_SCHEDULED_EVENT_EXCEPTION]: fn(9915).CalendarIcon, [THREAD]: fn(5323).ThreadIcon, [STICKER]: fn(10409).StickerIcon, [APPLICATION_COMMAND]: fn(11508).SlashBoxIcon, [AUTO_MODERATION_RULE]: fn(17205).WebhookIcon, [GUILD_SOUNDBOARD]: fn(12811).SoundboardIcon, [ONBOARDING_PROMPT]: fn(5339).GroupIcon, [GUILD_ONBOARDING]: fn(5339).GroupIcon, [HOME_SETTINGS]: fn(5339).GroupIcon, [GUILD_MEMBER_VERIFICATION]: fn(5339).GroupIcon, [VOICE_CHANNEL_STATUS]: fn(17928).ChannelListIcon, [GUILD_HOME]: fn(17990).HomeIcon, [UNKNOWN]: fn(11402).CircleQuestionIcon };
({ ALL, CHANNEL, CHANNEL_OVERWRITE, EMOJI, GUILD, GUILD_PROFILE, INTEGRATION, INVITE, ROLE, USER, WEBHOOK, STAGE_INSTANCE, GUILD_SCHEDULED_EVENT, GUILD_SCHEDULED_EVENT_EXCEPTION, THREAD, STICKER, APPLICATION_COMMAND, AUTO_MODERATION_RULE, GUILD_SOUNDBOARD, ONBOARDING_PROMPT, GUILD_ONBOARDING, HOME_SETTINGS, GUILD_MEMBER_VERIFICATION, VOICE_CHANNEL_STATUS, GUILD_HOME, UNKNOWN } = AuditLogTargetTypes);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_moderation/native/AuditLogActionIcon.tsx");

export default function AuditLogActionIcon(action) {
  const obj = { style: closure_10().actionImageContainer, children: React6(AuditIcons, { action: action.action }) };
  return React6(View, obj);
};
