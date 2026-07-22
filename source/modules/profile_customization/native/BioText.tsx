// Module ID: 11876
// Function ID: 91950
// Name: LinkButton
// Dependencies: []
// Exports: default

// Module 11876 (LinkButton)
function LinkButton(arg0) {
  let lineClamp;
  let text;
  ({ lineClamp, text } = arg0);
  const tmp = callback3();
  let obj = {
    onPress() {
      let obj = callback(closure_2[6]);
      obj.openURL(closure_6);
      obj = { cta_type: "profile_bio", target: closure_6 };
      callback(closure_2[7]).track(constants.CHANGE_LOG_CTA_CLICKED, obj);
    },
    style: tmp.link,
    children: callback(arg1(dependencyMap[8]).Text, obj)
  };
  obj = { lineClamp, style: tmp.link, children: items };
  const items = ["<string:1792496273>", text];
  return callback2(Pressable, obj);
}
let closure_3 = importAll(dependencyMap[0]);
const Pressable = arg1(dependencyMap[1]).Pressable;
const AnalyticEvents = arg1(dependencyMap[2]).AnalyticEvents;
const CHANGELOG_URL = arg1(dependencyMap[3]).CHANGELOG_URL;
({ jsxs: closure_7, jsx: closure_8, Fragment: closure_9 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
let closure_10 = arg1(dependencyMap[5]).createStyles({ text: { responsesApiToolCalls: -2015280895, shouldListenToVisibleIndices: 24182785, stickerOpaque: 1090519040, -9223372036854775808: 170969, 9223372036854775807: 705839377, 0: 410124290 }, span: { "Null": -1168048127, "Null": 4977, "Null": 1558003968, "Null": -1168048124, "Null": 342950161, "Null": 1090519040 }, link: { lane: 1364934929, revertLane: 275906562, pending: 268435456, lanes: 16777216, dispatch: 38257729, lastRenderedReducer: 1878741504 } });
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/profile_customization/native/BioText.tsx");

export default function BioText(lineClamp) {
  let bio;
  let placeholder;
  let textVariant;
  let userId;
  ({ placeholder, bio } = lineClamp);
  const arg1 = bio;
  lineClamp = lineClamp.lineClamp;
  const importDefault = lineClamp;
  ({ userId, textVariant } = lineClamp);
  if (textVariant === undefined) {
    textVariant = "text-md/normal";
  }
  const dependencyMap = textVariant;
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
    tmp3 = !importDefault(dependencyMap[11])(userId);
  }
  if (importDefault(dependencyMap[11])(userId)) {
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
    const intl = arg1(dependencyMap[12]).intl;
    const items1 = [intl.string(arg1(dependencyMap[12]).t.OJmNR9), "\n"];
    obj.children = items1;
    const items2 = [closure_7(arg1(dependencyMap[8]).Text, obj, "changelog-bio"), ];
    const obj1 = { variant: textVariant };
    if (tmp3) {
      str2 = "text-muted";
    }
    obj1.color = str2;
    obj1.lineClamp = lineClamp;
    obj1.style = tmp.span;
    const intl2 = arg1(dependencyMap[12]).intl;
    const obj2 = {
      blogHook(text) {
          return callback(closure_11, { lineClamp, text }, arg1);
        }
    };
    obj1.children = intl2.format(arg1(dependencyMap[12]).t.RCYeBL, obj2);
    items2[1] = closure_8(arg1(dependencyMap[8]).Text, obj1, "changelog-cta");
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
    tmp7Result = closure_8(arg1(dependencyMap[8]).Text, obj);
    const tmp7 = closure_8;
  } else {
    tmp7Result = null;
  }
  return tmp7Result;
};
