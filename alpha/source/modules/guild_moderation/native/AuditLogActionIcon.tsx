// Module ID: 19866
// Function ID: 19867
// Name: AuditLogActionIcon
// Dependencies: [19, 17, 19861, 1072, 21, 5141, 575, 19867, 19803, 9580, 5855, 19062, 5847, 10214, 8785, 18967, 8793, 9243, 8769, 11175, 11636, 14233, 19869, 14647, 8767, 12241, 19871, 19872, 19873, 1187, 2]
// Exports: default

// Module 19866 (AuditLogActionIcon)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import LinkIcon from "LinkIcon" /* 5847 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5855 */;
import ChatIcon from "ChatIcon" /* 8767 */;
import ThreadIcon from "ThreadIcon" /* 8769 */;
import GroupIcon from "GroupIcon" /* 8785 */;
import StageIcon from "StageIcon" /* 8793 */;
import CalendarIcon from "CalendarIcon" /* 9243 */;
import ReactionIcon from "ReactionIcon" /* 9580 */;
import FlagIcon from "FlagIcon" /* 10214 */;
import StickerIcon from "StickerIcon" /* 11175 */;
import SlashBoxIcon from "SlashBoxIcon" /* 11636 */;
import RobotIcon2 from "RobotIcon" /* 12241 */;
import SoundboardIcon from "SoundboardIcon" /* 14233 */;
import CircleQuestionIcon from "CircleQuestionIcon" /* 14647 */;
import WebhookIcon from "WebhookIcon" /* 18967 */;
import PuzzlePieceIcon from "PuzzlePieceIcon" /* 19062 */;
import ChannelListIcon from "ChannelListIcon" /* 19803 */;
import ListBulletsIcon from "ListBulletsIcon" /* 19867 */;
import HomeIcon from "HomeIcon" /* 19869 */;
import AssetRegistryDefault from "AssetRegistry" /* 19871 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 19872 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 19873 */;
import react from "react" /* 19 */;
import AuditLogRecord from "AuditLogRecord" /* 19861 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

let ALL;
let APPLICATION_COMMAND;
let AUTO_MODERATION_RULE;
let AuditLogTargetTypes;
let CHANNEL;
let CHANNEL_OVERWRITE;
let EMOJI;
let GUILD;
let GUILD_HOME;
let GUILD_MEMBER_VERIFICATION;
let GUILD_ONBOARDING;
let GUILD_PROFILE;
let GUILD_SCHEDULED_EVENT;
let GUILD_SCHEDULED_EVENT_EXCEPTION;
let GUILD_SOUNDBOARD;
let HOME_SETTINGS;
let INTEGRATION;
let INVITE;
let ONBOARDING_PROMPT;
let ROLE;
let STAGE_INSTANCE;
let STICKER;
let THREAD;
let UNKNOWN;
let USER;
let VOICE_CHANNEL_STATUS;
let WEBHOOK;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let size;
function AuditIcons(action) {
  let RobotIcon;
  let items;
  let items1;
  let tmp4;
  action = action.action;
  const tmp = closure_10();
  const tmp2 = hasOwnProperty(action);
  if (metroRequire.CREATE === tmp2) {
    tmp4 = AssetRegistryDefault;
  } else if (metroRequire.UPDATE === tmp2) {
    tmp4 = AssetRegistryDefault2;
  } else {
    tmp4 = null;
    if (metroRequire.DELETE === tmp2) {
      tmp4 = AssetRegistryDefault3;
    }
  }
  if (action === metroImportDefault.MESSAGE_DELETE) {
    RobotIcon = ChatIcon.ChatIcon;
  } else {
    if (action !== metroImportDefault.AUTO_MODERATION_BLOCK_MESSAGE) {
      if (action !== metroImportDefault.AUTO_MODERATION_FLAG_TO_CHANNEL) {
        if (action !== metroImportDefault.AUTO_MODERATION_USER_COMMUNICATION_DISABLED) {
          if (action !== metroImportDefault.AUTO_MODERATION_QUARANTINE_USER) {
            RobotIcon = obj2[tmp11];
          }
        }
      }
    }
    RobotIcon = RobotIcon2.RobotIcon;
  }
  obj2 = { size: "custom", style: tmp.iconComponent };
  const obj = { style: tmp.actionImageContainer, children: items };
  items = [metroImportAll(RobotIcon, obj2), , ];
  const obj3 = { style: items1 };
  items1 = [, ];
  ({ actionImageOverlay: arr2[0], actionImage: arr2[1] } = tmp);
  items[1] = metroImportAll(View, obj3);
  const obj4 = { style: tmp.actionImage, source: tmp4, disableColor: true };
  items[2] = metroImportAll(native.Icon, obj4);
  return React4(View, obj);
}
const View = react_native.View;
({ getTargetType: closure_4, getActionType: hasOwnProperty } = AuditLogRecord);
({ AuditLogTargetTypes, AuditLogActionTypes: metroRequire, AuditLogActions: metroImportDefault } = Constants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let obj = { actionImageContainer: { height: 24, width: 24 }, actionImageOverlay: size, iconComponent: { width: 22, height: 22 }, actionImage: { position: "absolute" } };
size = { borderRadius: nativeDefault.radii.round, width: 13, height: 13, bottom: 0, right: 0, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_10 = createStyles.createStyles(obj);
let obj2 = { [ALL]: ListBulletsIcon.ListBulletsIcon, [CHANNEL]: ChannelListIcon.ChannelListIcon, [CHANNEL_OVERWRITE]: ChannelListIcon.ChannelListIcon, [EMOJI]: ReactionIcon.ReactionIcon, [GUILD]: CircleInformationIcon.CircleInformationIcon, [GUILD_PROFILE]: CircleInformationIcon.CircleInformationIcon, [INTEGRATION]: PuzzlePieceIcon.PuzzlePieceIcon, [INVITE]: LinkIcon.LinkIcon, [ROLE]: FlagIcon.FlagIcon, [USER]: GroupIcon.GroupIcon, [WEBHOOK]: WebhookIcon.WebhookIcon, [STAGE_INSTANCE]: StageIcon.StageIcon, [GUILD_SCHEDULED_EVENT]: CalendarIcon.CalendarIcon, [GUILD_SCHEDULED_EVENT_EXCEPTION]: CalendarIcon.CalendarIcon, [THREAD]: ThreadIcon.ThreadIcon, [STICKER]: StickerIcon.StickerIcon, [APPLICATION_COMMAND]: SlashBoxIcon.SlashBoxIcon, [AUTO_MODERATION_RULE]: WebhookIcon.WebhookIcon, [GUILD_SOUNDBOARD]: SoundboardIcon.SoundboardIcon, [ONBOARDING_PROMPT]: GroupIcon.GroupIcon, [GUILD_ONBOARDING]: GroupIcon.GroupIcon, [HOME_SETTINGS]: GroupIcon.GroupIcon, [GUILD_MEMBER_VERIFICATION]: GroupIcon.GroupIcon, [VOICE_CHANNEL_STATUS]: ChannelListIcon.ChannelListIcon, [GUILD_HOME]: HomeIcon.HomeIcon, [UNKNOWN]: CircleQuestionIcon.CircleQuestionIcon };
({ ALL, CHANNEL, CHANNEL_OVERWRITE, EMOJI, GUILD, GUILD_PROFILE, INTEGRATION, INVITE, ROLE, USER, WEBHOOK, STAGE_INSTANCE, GUILD_SCHEDULED_EVENT, GUILD_SCHEDULED_EVENT_EXCEPTION, THREAD, STICKER, APPLICATION_COMMAND, AUTO_MODERATION_RULE, GUILD_SOUNDBOARD, ONBOARDING_PROMPT, GUILD_ONBOARDING, HOME_SETTINGS, GUILD_MEMBER_VERIFICATION, VOICE_CHANNEL_STATUS, GUILD_HOME, UNKNOWN } = AuditLogTargetTypes);
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_moderation/native/AuditLogActionIcon.tsx");

export default function AuditLogActionIcon(action) {
  const obj = { style: closure_10().actionImageContainer, children: metroImportAll(AuditIcons, obj2) };
  obj2 = { action: action.action };
  return metroImportAll(View, obj);
};
