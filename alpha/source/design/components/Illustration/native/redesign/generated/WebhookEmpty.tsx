// Module ID: 16891
// Function ID: 16892
// Name: WebhookEmpty
// Dependencies: [19, 17, 21, 7874, 16892, 16893, 16894, 4715, 2]
// Exports: WebhookEmpty, getWebhookEmptySource, useWebhookEmptySource

// Module 16891 (WebhookEmpty)
import shared from "shared" /* 4715 */;
import _mod7874 from "module_7874" /* 7874 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/WebhookEmpty.tsx");

export const getWebhookEmptySource = function getWebhookEmptySource(theme) {
  return _mod7874.getIllustrationSource(theme, {
    dark() {
      return require("module_16892");
    },
    darker() {
      return require("module_16893");
    },
    light() {
      return require("module_16894");
    }
  });
};
export const useWebhookEmptySource = function useWebhookEmptySource() {
  const obj = shared;
  return _mod7874.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16892");
    },
    darker() {
      return require("module_16893");
    },
    light() {
      return require("module_16894");
    }
  });
};
export const WebhookEmpty = function WebhookEmpty(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod7874.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16892");
    },
    darker() {
      return require("module_16893");
    },
    light() {
      return require("module_16894");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
