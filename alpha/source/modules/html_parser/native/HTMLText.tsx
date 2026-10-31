// Module ID: 9433
// Function ID: 9434
// Name: html_parser/HTMLText
// Dependencies: [19, 21, 5014, 5624, 8940, 9434, 9435, 2]
// Exports: HTMLText

// Module 9433 (html_parser/HTMLText)
import Fragment from "Fragment" /* 21 */;
import Text_Text from "Text/Text" /* 5624 */;
import MaskedLinkUtils from "MaskedLinkUtils" /* 8940 */;
import groupHTMLTextRuns from "groupHTMLTextRuns" /* 9435 */;
import react_mod from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap;

function TextRun(arg0) {
  let bold;
  let boldTextVariant;
  let heading;
  let headingVariants;
  let italic;
  let items;
  let run;
  let styles;
  let text;
  let textVariant;
  let underline;
  ({ run, styles, textVariant } = arg0);
  ({ text, bold, italic, underline, heading } = run);
  ({ boldTextVariant, headingVariants } = arg0);
  if (!italic) {
    if (!underline) {
      return text;
    }
  }
  if (null != heading) {
    textVariant = headingVariants[heading];
  } else if (bold) {
    textVariant = boldTextVariant;
  }
  let italic1;
  const obj = { variant: textVariant, color: "none", style: items, children: text };
  const Text = Text_Text.Text;
  const tmp2 = jsx;
  if (italic) {
    italic1 = styles.italic;
  }
  items = [italic1, ];
  let underline1;
  if (underline) {
    underline1 = styles.underline;
  }
  items[1] = underline1;
  return tmp2(Text, obj);
}
function RunSegment(arg0) {
  let heading;
  let segment;
  let styles;
  ({ segment, heading, styles } = arg0);
  const merged = Object.assign(arg0, Object.assign({ segment: 0, heading: 0, styles: 0 }));
  const runs = segment.runs;
  const mapped = runs.map((run, index) => <TextRun key={arg1} run={arg0} styles={styles} textVariant={merged.textVariant} boldTextVariant={merged.boldTextVariant} headingVariants={merged.headingVariants} />);
  const link = segment.link;
  let tmp4Result = mapped;
  if (null != link) {
    let textVariant;
    const Text = styles(merged[3]).Text;
    const tmp4 = jsx;
    if (null == heading) {
      textVariant = merged.textVariant;
    } else {
      textVariant = merged.headingVariants[heading];
    }
    let obj = {
      variant: textVariant,
      color: merged.linkColor,
      accessibilityRole: "link",
      style: styles.underline,
      onPress() {
          const onLinkPress = merged.onLinkPress;
          if (onLinkPress != null) {
            onLinkPress(link);
          }
          const obj = MaskedLinkUtils;
          const obj2 = { href: link };
          obj.handleClick(obj2);
        },
      children: mapped
    };
    tmp4Result = tmp4(Text, obj);
  }
  return tmp4Result;
}
function RunGroup(arg0) {
  let group;
  let styles;
  ({ group, styles: require } = arg0);
  let merged = Object.assign(arg0, Object.assign({ group: 0, styles: 0 }));
  const heading = group.heading;
  const segments = group.segments;
  const mapped = segments.map((segment, index) => {
    merged = Object.assign(merged);
    return <RunSegment key={arg1} segment={arg0} heading={heading} styles={require} />;
  });
  let tmp3 = mapped;
  if (null != heading) {
    tmp3 = jsx(require("Text/Text").Heading, { variant: merged.headingVariants[heading], color: merged.headingColor, children: mapped });
  }
  return tmp3;
}
let react = react_mod;
const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ italic: { fontStyle: "italic" }, underline: { textDecorationLine: "underline" } });
const result = size.fileFinishedImporting("modules/html_parser/native/HTMLText.tsx");

export function HTMLText(runs) {
  let closure_2;
  let styles;
  runs = runs.runs;
  let DEFAULT_TEXT_VARIANT = runs.textVariant;
  if (DEFAULT_TEXT_VARIANT === undefined) {
    DEFAULT_TEXT_VARIANT = runs(9434).DEFAULT_TEXT_VARIANT;
  }
  let DEFAULT_BOLD_TEXT_VARIANT = runs.boldTextVariant;
  if (DEFAULT_BOLD_TEXT_VARIANT === undefined) {
    DEFAULT_BOLD_TEXT_VARIANT = runs(9434).DEFAULT_BOLD_TEXT_VARIANT;
  }
  let DEFAULT_HEADING_VARIANTS = runs.headingVariants;
  if (DEFAULT_HEADING_VARIANTS === undefined) {
    DEFAULT_HEADING_VARIANTS = runs(9434).DEFAULT_HEADING_VARIANTS;
  }
  let native = runs.headingColor;
  if (native === undefined) {
    native = runs(9434).DEFAULT_HEADING_COLORS.native;
  }
  let DEFAULT_LINK_COLOR = runs.linkColor;
  if (DEFAULT_LINK_COLOR === undefined) {
    DEFAULT_LINK_COLOR = runs(9434).DEFAULT_LINK_COLOR;
  }
  react = undefined;
  const onLinkPress = runs.onLinkPress;
  dependencyMap = closure_4();
  const items = [runs];
  const memo = react.useMemo(() => {
    const obj = groupHTMLTextRuns;
    return obj.groupHTMLTextRuns(runs);
  }, items);
  react = { textVariant: DEFAULT_TEXT_VARIANT, boldTextVariant: DEFAULT_BOLD_TEXT_VARIANT, headingVariants: DEFAULT_HEADING_VARIANTS, headingColor: native, linkColor: DEFAULT_LINK_COLOR, onLinkPress };
  return memo.map((group, index) => {
    const merged = Object.assign(closure_2);
    return <RunGroup key={arg1} group={arg0} styles={styles} />;
  });
}
