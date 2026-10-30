// Module ID: 9412
// Function ID: 9413
// Name: GameDescription
// Dependencies: [19, 21, 5009, 5619, 9413, 9320, 8931, 2]
// Exports: GameDescription

// Module 9412 (GameDescription)
import Fragment from "Fragment" /* 21 */;
import Text_Text from "Text/Text" /* 5619 */;
import MaskedLinkUtils from "MaskedLinkUtils" /* 8931 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9320 */;
import groupDescriptionRuns from "groupDescriptionRuns" /* 9413 */;
import react_mod from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

function DescriptionTextRun(arg0) {
  let bold;
  let italic;
  let items;
  let run;
  let styles;
  let text;
  let underline;
  ({ run, styles } = arg0);
  ({ text, bold, italic, underline } = run);
  if (!bold) {
    let tmp;
    if (!italic) {
      tmp = text;
    }
    return tmp;
  }
  let str = "text-md/normal";
  const Text = Text_Text.Text;
  const tmp2 = jsx;
  if (bold) {
    str = "text-md/bold";
  }
  let italic1;
  const obj = { variant: str, color: "none", style: items, children: text };
  if (italic) {
    italic1 = styles.italic;
  }
  items = [italic1, ];
  let underline1;
  if (underline) {
    underline1 = styles.underline;
  }
  items[1] = underline1;
  tmp = tmp2(Text, obj);
}
function DescriptionHeadingRun(arg0) {
  let italic;
  let items;
  let run;
  let styles;
  let text;
  let tmp3Result;
  let underline;
  ({ run, styles } = arg0);
  ({ text, italic, underline } = run);
  if (italic) {
    const obj = { variant: groupDescriptionRuns.GAME_DESCRIPTION_HEADING_VARIANTS[tmp], color: "none", style: items, children: text };
    const Text = Text_Text.Text;
    let italic1;
    const tmp3 = jsx;
    if (italic) {
      italic1 = styles.italic;
    }
    items = [italic1, ];
    let underline1;
    if (underline) {
      underline1 = styles.underline;
    }
    items[1] = underline1;
    tmp3Result = tmp3(Text, obj);
  } else {
    tmp3Result = text;
  }
  return tmp3Result;
}
function DescriptionSegment(styles) {
  let heading;
  let segment;
  ({ segment, heading } = styles);
  styles = styles.styles;
  const trackAction = styles.trackAction;
  const runs = segment.runs;
  const mapped = runs.map((run, index) => {
    let tmp5;
    if (null == heading) {
      tmp5 = <DescriptionTextRun key={arg1} run={arg0} styles={styles} />;
    } else {
      tmp5 = <DescriptionHeadingRun key={arg1} run={arg0} heading={tmp} styles={styles} />;
    }
    return tmp5;
  });
  const link = segment.link;
  let tmp3Result = mapped;
  if (null != link) {
    let tmp5 = styles;
    let str = "text-md/normal";
    const Text = heading(styles[3]).Text;
    const tmp3 = link;
    const tmp4 = heading;
    if (null != heading) {
      str = tmp4(tmp5[4]).GAME_DESCRIPTION_HEADING_VARIANTS[heading];
    }
    let obj = {
      variant: str,
      color: "text-link",
      accessibilityRole: "link",
      style: styles.underline,
      onPress() {
          trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.ClickDescriptionLink);
          const obj = MaskedLinkUtils;
          const obj2 = { href: link };
          obj.handleClick(obj2);
        },
      children: mapped
    };
    tmp3Result = tmp3(Text, obj);
  }
  return tmp3Result;
}
function DescriptionGroup(arg0) {
  let group;
  let styles;
  let trackAction;
  ({ group, styles: require, trackAction: dependencyMap } = arg0);
  const heading = group.heading;
  const segments = group.segments;
  const mapped = segments.map((segment, index) => <DescriptionSegment key={arg1} segment={arg0} heading={heading} styles={require} trackAction={dependencyMap} />);
  let tmp2 = mapped;
  if (null != heading) {
    const Heading = Text_Text.Heading;
    tmp2 = <Heading variant={groupDescriptionRuns.GAME_DESCRIPTION_HEADING_VARIANTS[heading]} color="mobile-text-heading-primary">{mapped}</Heading>;
  }
  return tmp2;
}
let react = react_mod;
const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ italic: { fontStyle: "italic" }, underline: { textDecorationLine: "underline" } });
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameDescription.tsx");

export function GameDescription(runs) {
  let styles;
  runs = runs.runs;
  const trackAction = runs.trackAction;
  react = closure_4();
  const items = [runs];
  const memo = react.useMemo(() => {
    const obj = groupDescriptionRuns;
    return obj.groupDescriptionRuns(runs);
  }, items);
  return memo.map((group, index) => <DescriptionGroup key={arg1} group={arg0} styles={styles} trackAction={trackAction} />);
}
