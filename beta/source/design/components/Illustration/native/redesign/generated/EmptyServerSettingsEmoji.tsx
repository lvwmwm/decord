// Module ID: 18007
// Function ID: 18008
// Name: EmptyServerSettingsEmoji
// Dependencies: [19, 17, 21, 8507, 18008, 18009, 18010, 558, 568, 4610, 2]
// Exports: getEmptyServerSettingsEmojiSource

// Module 18007 (EmptyServerSettingsEmoji)
import c from "c" /* 568 */;
import shared from "shared" /* 4610 */;
import _mod8507 from "module_8507" /* 8507 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const theme = shared.useThemeContext().theme;
  if (cResult[0] !== theme) {
    const obj3 = {
      dark() {
          return require("module_18008");
        },
      darker() {
          return require("module_18009");
        },
      light() {
          return require("module_18010");
        }
    };
    const illustrationSource = _mod8507.getIllustrationSource(theme, obj3);
    cResult[0] = theme;
    cResult[1] = illustrationSource;
    let tmp4 = illustrationSource;
    const tmpResult = _mod8507;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (() => {
  const obj = shared;
  return _mod8507.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_18008");
    },
    darker() {
      return require("module_18009");
    },
    light() {
      return require("module_18010");
    }
  });
});
let closure_4 = tmp3;
ReactCompilerGating = fn(558);
function getEmptyServerSettingsEmojiSource(theme) {
  return _mod8507.getIllustrationSource(theme, {
    dark() {
      return require("module_18008");
    },
    darker() {
      return require("module_18009");
    },
    light() {
      return require("module_18010");
    }
  });
}
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/EmptyServerSettingsEmoji.tsx");

export { getEmptyServerSettingsEmojiSource };
export const useEmptyServerSettingsEmojiSource = tmp3;
export const EmptyServerSettingsEmoji = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(3);
  const tmp2 = closure_4();
  if (cResult[0] === arg0) {
    if (cResult[1] === tmp2) {
      let tmp3 = cResult[2];
    }
    return tmp3;
  }
  const obj2 = {};
  const merged = Object.assign(arg0);
  obj2.source = tmp2;
  const tmp5 = <Image />;
  cResult[0] = arg0;
  cResult[1] = tmp2;
  cResult[2] = tmp5;
  tmp3 = tmp5;
}) : ((arg0) => {
  const obj = {};
  const merged = Object.assign(arg0);
  obj.source = closure_4();
  return <Image />;
});
