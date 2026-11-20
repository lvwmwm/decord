// Module ID: 9769
// Function ID: 9770
// Name: AnnouncementMarkup
// Dependencies: [19, 21, 1378, 12, 5814, 5518, 2068, 8672, 8692, 1241, 5522, 2]
// Exports: default

// Module 9769 (AnnouncementMarkup)
import Fragment from "Fragment" /* 21 */;
import SentryUtilsDefault from "SentryUtils" /* 1241 */;
import _modDef2068 from "module_2068" /* 2068 */;
import MarkupUtilsDefault from "MarkupUtils" /* 5518 */;
import Spoiler from "Spoiler" /* 5522 */;
import CustomMarkup from "CustomMarkup" /* 5814 */;
import parseNativeMarkupDefault from "parseNativeMarkup" /* 8692 */;
import react from "react" /* 19 */;
import PlatformUtils from "PlatformUtils" /* 1378 */;
import module_12_mod from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let num;
if (PlatformUtils.isAndroid()) {
  num = 5;
}
let module_12 = module_12_mod;
let closure_6 = module_12.once(() => {
  const obj = CustomMarkup;
  return obj.createRules({});
});
module_12 = module_12_mod;
let closure_7 = module_12.once(() => {
  const obj = MarkupUtilsDefault;
  return obj.reactParserFor(closure_6());
});
module_12 = module_12_mod;
let closure_8 = module_12.once(() => {
  const obj = _modDef2068;
  return obj.outputFor(closure_6(), "react");
});
const result = size.fileFinishedImporting("modules/game_profile/native/components/AnnouncementMarkup.tsx");

export default function AnnouncementMarkup(content) {
  content = content.content;
  const guildId = content.guildId;
  const channelId = content.channelId;
  let obj = content(channelId[7]);
  const enabled = obj.useNativeMarkdown({ location: "GameProfileAnnouncements" }).enabled;
  const items = [content, guildId, channelId, enabled];
  return enabled.useMemo(() => {
    const obj = { guildId, channelId, mentionPillOffsetY: num };
    const tmp = enabled;
    if (tmp) {
      const obj2 = { allowGameMentions: true, allowLinks: true, allowHeading: true, allowList: true, formatInline: true };
      const merged = Object.assign(obj);
      try {
        const tmp13 = parseNativeMarkupDefault(content, true, obj2);
        closure_8()(tmp13, obj2);
        return jsx(Spoiler.SpoilerRevealProvider, { children: closure_8()(tmp13, obj2) }, content);
      } catch (tmp20) {
        const obj4 = SentryUtilsDefault;
        obj4.captureException(tmp20);
        return closure_7()(content, true, obj2);
      }
    } else {
      return closure_7()(content, true, obj);
    }
  }, items);
};
