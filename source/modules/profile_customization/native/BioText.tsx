// Module ID: 11915
// Function ID: 92241
// Name: LinkButton
// Dependencies: [31, 27, 653, 1905, 33, 4130, 3827, 675, 4126, 9051, 477, 1904, 1212, 2]
// Exports: default

// Module 11915 (LinkButton)
import result from "result";
import { Pressable } from "get ActivityIndicator";
import { AnalyticEvents } from "ME";
import { CHANGELOG_URL } from "CHANGELOG_MODAL_KEY";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function LinkButton(arg0) {
  let lineClamp;
  let text;
  ({ lineClamp, text } = arg0);
  const tmp = callback3();
  obj = {
    onPress() {
      let obj = outer1_1(outer1_2[6]);
      obj.openURL(outer1_6);
      obj = { cta_type: "profile_bio", target: outer1_6 };
      outer1_1(outer1_2[7]).track(outer1_5.CHANGE_LOG_CTA_CLICKED, obj);
    },
    style: tmp.link,
    children: callback(require(4126) /* Text */.Text, obj)
  };
  obj = { variant: "text-md/normal", color: "text-link", lineClamp, style: tmp.link };
  const items = ["\n", text];
  obj.children = items;
  return callback2(Pressable, obj);
}
({ jsxs: closure_7, jsx: closure_8, Fragment: closure_9 } = jsxProd);
let closure_10 = _createForOfIteratorHelperLoose.createStyles({ text: { alignSelf: "stretch", textAlignVertical: "top", width: "100%", flexGrow: 1, paddingTop: 2, lineHeight: 24 }, span: { alignSelf: "stretch", textAlignVertical: "bottom", width: "100%", flexGrow: 1, display: "flex", paddingBottom: 2 }, link: { alignSelf: "stretch", textAlignVertical: "bottom", width: "100%", flexGrow: 1, bottom: -4, position: "relative" } });
const result = require("ME").fileFinishedImporting("modules/profile_customization/native/BioText.tsx");

export default function BioText(lineClamp) {
  let bio;
  let placeholder;
  let textVariant;
  let userId;
  ({ placeholder, bio } = lineClamp);
  lineClamp = lineClamp.lineClamp;
  ({ userId, textVariant } = lineClamp);
  if (textVariant === undefined) {
    textVariant = "text-md/normal";
  }
  const tmp = callback3();
  const items = [bio, textVariant];
  let memo = React.useMemo(() => {
    let obj = bio(textVariant[9]);
    obj = { linkVariant: textVariant, textVariant };
    let num;
    if (obj3.isAndroid()) {
      num = 3;
    }
    obj.customEmojiOffsetY = num;
    return obj.parseBioReact(bio, undefined, obj);
  }, items);
  let tmp3 = 0 === bio.length;
  if (tmp3) {
    tmp3 = !lineClamp(textVariant[11])(userId);
  }
  if (lineClamp(textVariant[11])(userId)) {
    let obj = {};
    obj = { variant: textVariant };
    let str2 = "text-default";
    let str3 = "text-default";
    if (tmp3) {
      str3 = "text-muted";
    }
    obj.color = str3;
    obj.lineClamp = lineClamp;
    obj.style = tmp.text;
    const intl = bio(textVariant[12]).intl;
    const items1 = [intl.string(bio(textVariant[12]).t.OJmNR9), "\n"];
    obj.children = items1;
    const items2 = [closure_7(bio(textVariant[8]).Text, obj, "changelog-bio"), ];
    const obj1 = { variant: textVariant };
    if (tmp3) {
      str2 = "text-muted";
    }
    obj1.color = str2;
    obj1.lineClamp = lineClamp;
    obj1.style = tmp.span;
    const intl2 = bio(textVariant[12]).intl;
    const obj2 = {
      blogHook(text) {
          return outer1_8(outer1_11, { lineClamp, text }, arg1);
        }
    };
    obj1.children = intl2.format(bio(textVariant[12]).t.RCYeBL, obj2);
    items2[1] = closure_8(bio(textVariant[8]).Text, obj1, "changelog-cta");
    obj.children = items2;
    let tmp7Result = tmp10(closure_9, obj);
    const tmp11 = closure_9;
    const tmp16 = closure_8;
  } else if (!tmp3) {
    obj = { variant: textVariant };
    let str = "text-default";
    if (tmp3) {
      str = "text-muted";
    }
    obj.color = str;
    obj.lineClamp = lineClamp;
    obj.style = tmp.text;
    if (tmp3) {
      memo = placeholder;
    }
    obj.children = memo;
    tmp7Result = closure_8(bio(textVariant[8]).Text, obj);
    const tmp7 = closure_8;
  } else {
    tmp7Result = null;
  }
  return tmp7Result;
};
