// Module ID: 9395
// Function ID: 9396
// Name: GameDescription
// Dependencies: [19, 21, 5005, 558, 576, 5271, 9396, 2]

// Module 9395 (GameDescription)
import Fragment2 from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import groupDescriptionRuns from "groupDescriptionRuns" /* 9396 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5005 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp;
const Text_Text = tmp(5271);
const jsx = Fragment2.jsx;
let closure_4 = createStyles.createStyles({ italic: { fontStyle: "italic" }, underline: { textDecorationLine: "underline" } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_5 = ReactCompilerGating.isReactCompilerEnabled() ? (function DescriptionTextRun(arg0) {
  let bold;
  let italic;
  let run;
  let styles;
  let text;
  let underline;
  const obj = react2;
  const cResult = obj.c(7);
  ({ run, styles } = arg0);
  ({ text, bold, italic, underline } = run);
  if (!bold) {
    if (!italic) {
      if (!underline) {
        return text;
      }
    }
  }
  let str = "text-md/normal";
  if (bold) {
    str = "text-md/bold";
  }
  let italic1;
  if (italic) {
    italic1 = styles.italic;
  }
  let underline1;
  if (underline) {
    underline1 = styles.underline;
  }
  if (cResult[0] === italic1) {
    let tmp6;
    if (cResult[1] === underline1) {
      tmp6 = cResult[2];
    }
    if (cResult[3] === str) {
      if (cResult[4] === tmp6) {
        let tmp7;
        if (cResult[5] === text) {
          tmp7 = cResult[6];
        }
        return tmp7;
      }
    }
    const tmp9 = jsx(Text_Text.Text, { variant: str, color: "none", style: tmp6, children: text });
    cResult[3] = str;
    cResult[4] = tmp6;
    cResult[5] = text;
    cResult[6] = tmp9;
    tmp7 = tmp9;
  }
  const items = [italic1, underline1];
  cResult[0] = italic1;
  cResult[1] = underline1;
  cResult[2] = items;
  tmp6 = items;
}) : (function DescriptionTextRun(arg0) {
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? (function DescriptionHeadingRun(heading) {
  let italic;
  let run;
  let styles;
  let text;
  let underline;
  const obj = react2;
  const cResult = obj.c(7);
  ({ run, styles } = heading);
  ({ text, italic, underline } = run);
  heading = heading.heading;
  if (!italic) {
    if (!underline) {
      return text;
    }
  }
  const tmp4 = groupDescriptionRuns.GAME_DESCRIPTION_HEADING_VARIANTS[heading];
  let italic1;
  if (italic) {
    italic1 = styles.italic;
  }
  let underline1;
  if (underline) {
    underline1 = styles.underline;
  }
  if (cResult[0] === italic1) {
    let tmp7;
    if (cResult[1] === underline1) {
      tmp7 = cResult[2];
    }
    if (cResult[3] === tmp4) {
      if (cResult[4] === tmp7) {
        let tmp8;
        if (cResult[5] === text) {
          tmp8 = cResult[6];
        }
        return tmp8;
      }
    }
    const tmp10 = jsx(Text_Text.Text, { variant: tmp4, color: "none", style: tmp7, children: text });
    cResult[3] = tmp4;
    cResult[4] = tmp7;
    cResult[5] = text;
    cResult[6] = tmp10;
    tmp8 = tmp10;
  }
  const items = [italic1, underline1];
  cResult[0] = italic1;
  cResult[1] = underline1;
  cResult[2] = items;
  tmp7 = items;
}) : (function DescriptionHeadingRun(arg0) {
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function GameDescription(runs) {
  let closure_0;
  let tmp6;
  const obj = require("react");
  const cResult = obj.c(5);
  runs = runs.runs;
  const tmp4 = closure_4();
  const tmp = _require;
  _require = tmp4;
  if (cResult[0] === runs) {
    let tmp5;
    if (cResult[1] === tmp4) {
      tmp5 = cResult[2];
    }
    return tmp5;
  }
  if (cResult[3] !== tmp4) {
    const fn = function p(heading, arg1) {
      if (null != heading.heading) {
        heading = heading.heading;
        const runs = heading.runs;
        const Heading = styles(dependencyMap[5]).Heading;
        return <Heading key={arg1} variant={styles(dependencyMap[6]).GAME_DESCRIPTION_HEADING_VARIANTS[heading]} color="mobile-text-heading-primary">{runs.map((run, index) => <closure_6 key={arg1} run={arg0} heading={heading} styles={styles} />)}</Heading>;
      } else {
        const runs1 = heading.runs;
        const Fragment = React.Fragment;
        return < key={arg1}>{runs1.map((run, index) => <closure_2_5 key={arg1} run={arg0} styles={heading} />)}</>;
      }
    };
    cResult[3] = tmp4;
    cResult[4] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[4];
  }
  const tmpResult = tmp(9396);
  const groupDescriptionRunsResult = tmpResult.groupDescriptionRuns(runs);
  const mapped = groupDescriptionRunsResult.map(tmp6);
  cResult[0] = runs;
  cResult[1] = tmp4;
  cResult[2] = mapped;
  tmp5 = mapped;
}) : (function GameDescription(runs) {
  let closure_0;
  runs = runs.runs;
  _require = closure_4();
  const obj = require("groupDescriptionRuns");
  const groupDescriptionRunsResult = obj.groupDescriptionRuns(runs);
  return groupDescriptionRunsResult.map((heading, index) => {
    if (null != heading.heading) {
      heading = heading.heading;
      const runs = heading.runs;
      const Heading = styles(dependencyMap[5]).Heading;
      return <Heading key={arg1} variant={styles(dependencyMap[6]).GAME_DESCRIPTION_HEADING_VARIANTS[heading]} color="mobile-text-heading-primary">{runs.map((run, index) => <closure_6 key={arg1} run={arg0} heading={heading} styles={styles} />)}</Heading>;
    } else {
      const runs1 = heading.runs;
      const Fragment = React.Fragment;
      return < key={arg1}>{runs1.map((run, index) => <closure_2_5 key={arg1} run={arg0} styles={heading} />)}</>;
    }
  });
});
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameDescription.tsx");

export const GameDescription = tmp2;
