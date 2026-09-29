// Module ID: 9720
// Function ID: 9721
// Name: StreamEnded
// Dependencies: [19, 17, 21, 8534, 9721, 9722, 4639, 2]
// Exports: StreamEnded, getStreamEndedSource, useStreamEndedSource

// Module 9720 (StreamEnded)
import shared from "shared" /* 4639 */;
import _mod8534 from "module_8534" /* 8534 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/StreamEnded.tsx");

export const getStreamEndedSource = function getStreamEndedSource(theme) {
  return _mod8534.getIllustrationSource(theme, {
    dark() {
      return require("module_9721");
    },
    darker() {
      return require("module_9722");
    }
  });
};
export const useStreamEndedSource = function useStreamEndedSource() {
  const obj = shared;
  return _mod8534.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9721");
    },
    darker() {
      return require("module_9722");
    }
  });
};
export const StreamEnded = function StreamEnded(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8534.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9721");
    },
    darker() {
      return require("module_9722");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
