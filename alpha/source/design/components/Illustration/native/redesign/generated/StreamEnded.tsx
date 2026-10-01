// Module ID: 9070
// Function ID: 9071
// Name: StreamEnded
// Dependencies: [19, 17, 21, 7861, 9071, 9072, 4714, 2]
// Exports: StreamEnded, getStreamEndedSource, useStreamEndedSource

// Module 9070 (StreamEnded)
import shared from "shared" /* 4714 */;
import _mod7861 from "module_7861" /* 7861 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/StreamEnded.tsx");

export const getStreamEndedSource = function getStreamEndedSource(theme) {
  return _mod7861.getIllustrationSource(theme, {
    dark() {
      return require("module_9071");
    },
    darker() {
      return require("module_9072");
    }
  });
};
export const useStreamEndedSource = function useStreamEndedSource() {
  const obj = shared;
  return _mod7861.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9071");
    },
    darker() {
      return require("module_9072");
    }
  });
};
export const StreamEnded = function StreamEnded(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod7861.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9071");
    },
    darker() {
      return require("module_9072");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
