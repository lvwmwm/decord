// Module ID: 16856
// Function ID: 16857
// Name: WebhookEmpty
// Dependencies: [19, 17, 21, 7844, 16857, 16858, 16859, 4685, 2]
// Exports: WebhookEmpty, getWebhookEmptySource, useWebhookEmptySource

// Module 16856 (WebhookEmpty)
import shared from "shared" /* 4685 */;
import _mod7844 from "module_7844" /* 7844 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/WebhookEmpty.tsx");

export const getWebhookEmptySource = function getWebhookEmptySource(theme) {
  return _mod7844.getIllustrationSource(theme, {
    dark() {
      return require("module_16857");
    },
    darker() {
      return require("module_16858");
    },
    light() {
      return require("module_16859");
    }
  });
};
export const useWebhookEmptySource = function useWebhookEmptySource() {
  const obj = shared;
  return _mod7844.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16857");
    },
    darker() {
      return require("module_16858");
    },
    light() {
      return require("module_16859");
    }
  });
};
export const WebhookEmpty = function WebhookEmpty(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod7844.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16857");
    },
    darker() {
      return require("module_16858");
    },
    light() {
      return require("module_16859");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
