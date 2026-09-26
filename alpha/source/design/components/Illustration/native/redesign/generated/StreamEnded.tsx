// Module ID: 8877
// Function ID: 8878
// Name: StreamEnded
// Dependencies: [19, 17, 21, 7679, 8878, 8879, 4685, 2]
// Exports: StreamEnded, getStreamEndedSource, useStreamEndedSource

// Module 8877 (StreamEnded)
import shared from "shared" /* 4685 */;
import _mod7679 from "module_7679" /* 7679 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/StreamEnded.tsx");

export const getStreamEndedSource = function getStreamEndedSource(theme) {
  return _mod7679.getIllustrationSource(theme, {
    dark() {
      return require("module_8878");
    },
    darker() {
      return require("module_8879");
    }
  });
};
export const useStreamEndedSource = function useStreamEndedSource() {
  const obj = shared;
  return _mod7679.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_8878");
    },
    darker() {
      return require("module_8879");
    }
  });
};
export const StreamEnded = function StreamEnded(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod7679.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_8878");
    },
    darker() {
      return require("module_8879");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
