// Module ID: 11458
// Function ID: 11459
// Name: BioText
// Dependencies: [19, 17, 1072, 4911, 21, 5009, 5704, 1253, 5619, 11459, 1376, 4910, 1114, 2]
// Exports: default

// Module 11458 (BioText)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import ChangelogConstants from "ChangelogConstants" /* 4911 */;
import Text_Text from "Text/Text" /* 5619 */;
import LinkingDefault from "Linking" /* 5704 */;
import BioMarkupUtils from "BioMarkupUtils" /* 11459 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let c9;
let metroImportAll;
let metroImportDefault;
function LinkButton(arg0) {
  let items;
  let lineClamp;
  let obj2;
  let target;
  let text;
  ({ lineClamp, text } = arg0);
  const tmp = closure_10();
  let obj = {
    onPress: function handlePress() {
      const obj = LinkingDefault;
      obj.openURL(target);
      const obj2 = AnalyticsUtilsDefault;
      const obj3 = { cta_type: "profile_bio", target };
      obj2.track(constants.CHANGE_LOG_CTA_CLICKED, obj3);
    },
    style: tmp.link,
    children: metroImportDefault(Text_Text.Text, obj2)
  };
  obj2 = { variant: "text-md/normal", color: "text-link", lineClamp, style: tmp.link, children: items };
  items = ["\n", text];
  return metroImportAll(Pressable, obj);
}
const Pressable = react_native.Pressable;
const AnalyticEvents = Constants.AnalyticEvents;
const CHANGELOG_URL = ChangelogConstants.CHANGELOG_URL;
({ jsxs: metroImportDefault, jsx: metroImportAll, Fragment: c9 } = Fragment);
let closure_10 = createStyles.createStyles({ text: { alignSelf: "stretch", textAlignVertical: "top", width: "100%", flexGrow: 1, paddingTop: 2, lineHeight: 24 }, span: { alignSelf: "stretch", textAlignVertical: "bottom", width: "100%", flexGrow: 1, display: "flex", paddingBottom: 2 }, link: { alignSelf: "stretch", textAlignVertical: "bottom", width: "100%", flexGrow: 1, bottom: -4, position: "relative" } });
const result = size.fileFinishedImporting("modules/profile_customization/native/BioText.tsx");

export default function BioText(lineClamp) {
  let bio;
  let guildId;
  let intl2;
  let items1;
  let obj5;
  let placeholder;
  let str2;
  let str4;
  let tmp8Result;
  let userId;
  ({ placeholder, bio } = lineClamp);
  lineClamp = lineClamp.lineClamp;
  ({ userId, guildId } = lineClamp);
  let str = lineClamp.textVariant;
  if (str === undefined) {
    str = "text-md/normal";
  }
  const tmp = closure_10();
  const items = [bio, guildId, str];
  let memo = str.useMemo(() => {
    let num;
    const parseBioReact = BioMarkupUtils.parseBioReact;
    BioMarkupUtils;
    const obj = { guildId, linkVariant: str, textVariant: str, customEmojiOffsetY: num };
    num = undefined;
    const tmp4 = bio;
    const tmpResult = PlatformUtils;
    if (tmpResult.isAndroid()) {
      num = 3;
    }
    return parseBioReact(tmp4, undefined, obj);
  }, items);
  let tmp3 = 0 === bio.length;
  if (tmp3) {
    let tmp4 = lineClamp;
    tmp3 = !lineClamp(guildId[11])(userId);
  }
  if (lineClamp(guildId[11])(userId)) {
    let str3 = "text-default";
    const obj2 = { variant: str, color: str4, lineClamp, style: tmp.text, children: items1 };
    str4 = "text-default";
    const Text2 = bio(tmp6[8]).Text;
    const tmp11 = closure_9;
    if (tmp3) {
      str4 = "text-muted";
    }
    const intl = tmp12(tmp6[12]).intl;
    items1 = [intl.string(bio(guildId[12]).t.OJmNR9), "\n"];
    const items2 = [closure_7(Text2, obj2, "changelog-bio"), ];
    const obj3 = { variant: str, color: str3, lineClamp, style: tmp.span, children: intl2.format(bio(guildId[12]).t.RCYeBL, obj5) };
    const Text3 = tmp12(tmp6[8]).Text;
    const tmp13 = closure_8;
    if (tmp3) {
      str3 = "text-muted";
    }
    const obj4 = { children: items2 };
    intl2 = tmp12(tmp6[12]).intl;
    obj5 = {
      blogHook(text, arg1) {
          const obj = { lineClamp, text };
          return metroImportAll(LinkButton, obj, arg1);
        }
    };
    items2[1] = tmp13(Text3, obj3, "changelog-cta");
    tmp8Result = tmp10(tmp11, obj4);
  } else if (!tmp3) {
    let obj = { variant: str, color: str2, lineClamp, style: tmp.text, children: memo };
    str2 = "text-default";
    const Text = bio(tmp6[8]).Text;
    const tmp8 = closure_8;
    if (tmp3) {
      str2 = "text-muted";
    }
    if (tmp3) {
      memo = placeholder;
    }
    tmp8Result = tmp8(Text, obj);
  } else {
    tmp8Result = null;
  }
  return tmp8Result;
};
