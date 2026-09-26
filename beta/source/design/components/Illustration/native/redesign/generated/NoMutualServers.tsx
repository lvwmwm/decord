// Module ID: 12886
// Function ID: 12887
// Name: NoMutualServers
// Dependencies: [19, 17, 21, 8534, 12887, 12888, 12889, 4639, 2]
// Exports: NoMutualServers, getNoMutualServersSource, useNoMutualServersSource

// Module 12886 (NoMutualServers)
import shared from "shared" /* 4639 */;
import _mod8534 from "module_8534" /* 8534 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoMutualServers.tsx");

export const getNoMutualServersSource = function getNoMutualServersSource(theme) {
  return _mod8534.getIllustrationSource(theme, {
    dark() {
      return require("module_12887");
    },
    darker() {
      return require("module_12888");
    },
    light() {
      return require("module_12889");
    }
  });
};
export const useNoMutualServersSource = function useNoMutualServersSource() {
  const obj = shared;
  return _mod8534.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_12887");
    },
    darker() {
      return require("module_12888");
    },
    light() {
      return require("module_12889");
    }
  });
};
export const NoMutualServers = function NoMutualServers(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8534.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_12887");
    },
    darker() {
      return require("module_12888");
    },
    light() {
      return require("module_12889");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
